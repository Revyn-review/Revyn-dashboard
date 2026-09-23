import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import {
  IconAlertTriangle,
  IconCircleCheck,
  IconGitPullRequest,
} from "@tabler/icons-react";

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

export default async function ReviewsPage() {
  const { userId } = await auth();

  const reviews = userId ? await getReviews(userId) : [];

  return (
    <div className="px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight text-[#F5F5F4] mb-1">
          Reviews
        </h1>

        <p className="text-sm text-[#78716C]">
          Full history of AI-reviewed pull requests
        </p>
      </div>

      {reviews.length === 0 ? (
        <div className="relative overflow-hidden bg-[#10100F] border border-dashed border-white/[0.10] rounded-xl p-12 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05),transparent_55%)]" />

          <div className="relative">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F97316]/[0.08] border border-[#F97316]/[0.12]">
              <IconGitPullRequest
                size={24}
                className="text-[#F97316]"
              />
            </div>

            <p className="text-sm text-[#78716C]">
              No reviews yet.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {reviews.map((review) => (
            <Link
              key={review.id}
              href={`/reviews/${review.id}`}
              className="group bg-[#10100F] border border-white/[0.06] rounded-xl p-5 flex items-start justify-between gap-4 hover:border-[#F97316]/25 hover:bg-[#131210] transition-all duration-200"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-xs text-[#57534E] mb-2">
                  <span className="truncate max-w-[240px]">
                    {review.repoFullName}
                  </span>

                  <span>·</span>

                  <span>#{review.prNumber}</span>

                  <span>·</span>

                  <span>
                    {new Date(
                      review.createdAt,
                    ).toLocaleDateString()}
                  </span>
                </div>

                <h3 className="font-medium text-sm text-[#E7E5E4] mb-1 truncate group-hover:text-white">
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
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}