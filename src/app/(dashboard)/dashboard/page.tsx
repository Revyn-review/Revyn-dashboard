import { auth } from "@clerk/nextjs/server";
import {
  IconGitPullRequest,
  IconAlertTriangle,
  IconCircleCheck,
} from "@tabler/icons-react";
import { ConnectToast } from "@/components/ConnectToast";

const SERVER_URL =
  process.env.SERVER_URL ?? "http://localhost:4000";

interface Review {
  id: string;
  repoFullName: string;
  prNumber: number;
  prTitle: string;
  summary: string;
  issuesFound: number;
  createdAt: string;
}

async function getReviews(clerkUserId: string): Promise<Review[]> {
  const res = await fetch(
    `${SERVER_URL}/api/reviews?clerkUserId=${clerkUserId}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) return [];

  const data = await res.json();
  return data.reviews;
}

export default async function OverviewPage() {
  const { userId } = await auth();

  const reviews = userId ? await getReviews(userId) : [];

  const totalReviews = reviews.length;
  const totalIssues = reviews.reduce(
    (sum, r) => sum + r.issuesFound,
    0,
  );
  const cleanReviews = reviews.filter(
    (r) => r.issuesFound === 0,
  ).length;

  return (
    <div className="px-8 py-8">
      <ConnectToast />

      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-[#F5F5F4] mb-1">
          Overview
        </h1>

        <p className="text-sm text-[#78716C]">
          Your AI review activity at a glance
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <StatCard
          icon={
            <IconGitPullRequest
              size={18}
              className="text-[#F97316]"
            />
          }
          label="Total reviews"
          value={totalReviews}
        />

        <StatCard
          icon={
            <IconAlertTriangle
              size={18}
              className="text-amber-500"
            />
          }
          label="Issues found"
          value={totalIssues}
        />

        <StatCard
          icon={
            <IconCircleCheck
              size={18}
              className="text-emerald-400"
            />
          }
          label="Clean PRs"
          value={cleanReviews}
        />
      </div>

      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-[#F5F5F4]">
          Recent activity
        </h2>

        {reviews.length > 0 && (
          <span className="text-xs text-[#57534E]">
            Latest {Math.min(reviews.length, 5)}
          </span>
        )}
      </div>

      {reviews.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-3">
          {reviews.slice(0, 5).map((review) => (
            <ReviewRow
              key={review.id}
              review={review}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {
  return (
    <div className="group relative overflow-hidden bg-[#10100F] border border-white/[0.06] rounded-xl p-5 transition-all duration-200 hover:border-white/[0.10] hover:bg-[#131210]">
      <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-[#F97316]/[0.04] blur-2xl transition-opacity group-hover:bg-[#F97316]/[0.08]" />

      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F97316]/[0.08] border border-[#F97316]/[0.12]">
            {icon}
          </div>
        </div>

        <div className="text-2xl font-semibold tracking-tight text-[#F5F5F4]">
          {value}
        </div>

        <div className="text-xs text-[#78716C] mt-1">
          {label}
        </div>
      </div>
    </div>
  );
}

function ReviewRow({ review }: { review: Review }) {
  const prUrl = `https://github.com/${review.repoFullName}/pull/${review.prNumber}`;

  return (
    <a
      href={prUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-[#10100F] border border-white/[0.06] rounded-xl p-5 flex items-start justify-between gap-4 hover:border-[#F97316]/25 hover:bg-[#131210] transition-all duration-200"
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 text-xs text-[#57534E] mb-2">
          <span className="truncate max-w-[240px]">
            {review.repoFullName}
          </span>

          <span>·</span>

          <span>#{review.prNumber}</span>
        </div>

        <h3 className="font-medium text-sm text-[#E7E5E4] mb-1 truncate group-hover:text-white transition-colors">
          {review.prTitle}
        </h3>

        <p className="text-sm text-[#78716C] line-clamp-2 leading-relaxed">
          {review.summary}
        </p>
      </div>

      <div className="flex items-center gap-1.5 shrink-0 text-sm">
        {review.issuesFound > 0 ? (
          <>
            <IconAlertTriangle
              size={16}
              className="text-amber-500"
            />

            <span className="text-amber-400 font-medium">
              {review.issuesFound}
            </span>
          </>
        ) : (
          <IconCircleCheck
            size={17}
            className="text-emerald-400"
          />
        )}
      </div>
    </a>
  );
}

function EmptyState() {
  return (
    <div className="relative overflow-hidden bg-[#10100F] border border-dashed border-white/[0.10] rounded-xl p-12 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05),transparent_55%)]" />

      <div className="relative">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F97316]/[0.08] border border-[#F97316]/[0.12]">
          <IconGitPullRequest
            size={24}
            className="text-[#F97316]"
          />
        </div>

        <p className="text-sm text-[#78716C] max-w-md mx-auto leading-relaxed">
          No reviews yet. Connect a repo and open a pull request
          to see Revyn in action.
        </p>
      </div>
    </div>
  );
}