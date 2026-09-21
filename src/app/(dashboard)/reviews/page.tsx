import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { IconAlertTriangle, IconCircleCheck, IconGitPullRequest } from "@tabler/icons-react";

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
  const res = await fetch(`${SERVER_URL}/api/reviews?clerkUserId=${clerkUserId}`, {
    cache: "no-store",
  });
  if (!res.ok) return [];
  const data = await res.json();
  return data.reviews;
}

export default async function ReviewsPage() {
  const { userId } = await auth();
  const reviews = userId ? await getReviews(userId) : [];

  return (
    <div className="px-8 py-8">
      <h1 className="text-2xl font-semibold mb-1">Reviews</h1>
      <p className="text-sm text-gray-500 mb-8">Full history of AI-reviewed pull requests</p>

      {reviews.length === 0 ? (
        <div className="bg-white border border-dashed border-gray-300 rounded-xl p-12 text-center">
          <IconGitPullRequest size={32} className="mx-auto text-gray-300 mb-3" />
          <p className="text-gray-500 text-sm">No reviews yet.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {reviews.map((review) => (
            <Link
              key={review.id}
              href={`/reviews/${review.id}`}
              className="bg-white border border-gray-200 rounded-lg p-5 flex items-start justify-between gap-4 hover:border-gray-300 hover:shadow-sm transition-all"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                  <span>{review.repoFullName}</span>
                  <span>·</span>
                  <span>#{review.prNumber}</span>
                  <span>·</span>
                  <span>{new Date(review.createdAt).toLocaleDateString()}</span>
                </div>
                <h3 className="font-medium text-sm mb-1 truncate">{review.prTitle}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{review.summary}</p>
              </div>
              <div className="flex items-center gap-1.5 shrink-0 text-sm">
                {review.issuesFound > 0 ? (
                  <>
                    <IconAlertTriangle size={16} className="text-amber-500" />
                    <span className="text-amber-600 font-medium">{review.issuesFound}</span>
                  </>
                ) : (
                  <IconCircleCheck size={16} className="text-green-500" />
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}