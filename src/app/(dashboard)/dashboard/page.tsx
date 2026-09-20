import { auth } from "@clerk/nextjs/server";
import {
  IconGitPullRequest,
  IconAlertTriangle,
  IconCircleCheck,
} from "@tabler/icons-react";

const SERVER_URL = process.env.SERVER_URL ?? "http://localhost:4000";

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
  const totalIssues = reviews.reduce((sum, r) => sum + r.issuesFound, 0);
  const cleanReviews = reviews.filter((r) => r.issuesFound === 0).length;

  return (
    <div className="px-8 py-8">
      <h1 className="text-2xl font-semibold mb-1">Overview</h1>
      <p className="text-sm text-gray-500 mb-8">
        Your AI review activity at a glance
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <StatCard
          icon={<IconGitPullRequest size={18} />}
          label="Total reviews"
          value={totalReviews}
        />
        <StatCard
          icon={<IconAlertTriangle size={18} className="text-amber-500" />}
          label="Issues found"
          value={totalIssues}
        />
        <StatCard
          icon={<IconCircleCheck size={18} className="text-green-500" />}
          label="Clean PRs"
          value={cleanReviews}
        />
      </div>

      <h2 className="text-sm font-semibold text-gray-700 mb-3">
        Recent activity
      </h2>
      {reviews.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-3">
          {reviews.slice(0, 5).map((review) => (
            <ReviewRow key={review.id} review={review} />
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
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <div className="flex items-center gap-2 text-gray-400 mb-2">{icon}</div>
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-xs text-gray-500 mt-1">{label}</div>
    </div>
  );
}

function ReviewRow({ review }: { review: Review }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 flex items-start justify-between gap-4">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
          <span>{review.repoFullName}</span>
          <span>·</span>
          <span>#{review.prNumber}</span>
        </div>
        <h3 className="font-medium text-sm mb-1 truncate">{review.prTitle}</h3>
        <p className="text-sm text-gray-500 line-clamp-2">{review.summary}</p>
      </div>
      <div className="flex items-center gap-1.5 shrink-0 text-sm">
        {review.issuesFound > 0 ? (
          <>
            <IconAlertTriangle size={16} className="text-amber-500" />
            <span className="text-amber-600 font-medium">
              {review.issuesFound}
            </span>
          </>
        ) : (
          <IconCircleCheck size={16} className="text-green-500" />
        )}
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="bg-white border border-dashed border-gray-300 rounded-xl p-12 text-center">
      <IconGitPullRequest size={32} className="mx-auto text-gray-300 mb-3" />
      <p className="text-gray-500 text-sm">
        No reviews yet. Connect a repo and open a pull request to see Revyn in
        action.
      </p>
    </div>
  );
}
