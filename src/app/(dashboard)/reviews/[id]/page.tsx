import Link from "next/link";
import {
  IconArrowLeft,
  IconAlertTriangle,
  IconCircleCheck,
  IconExternalLink,
  IconBug,
  IconBulb,
  IconMessage,
} from "@tabler/icons-react";

const SERVER_URL = process.env.SERVER_URL ?? "http://localhost:4000";

interface Issue {
  line: number;
  severity: "bug" | "suggestion" | "nit";
  comment: string;
}

interface FileDetail {
  filename: string;
  summary: string;
  issues: Issue[];
}

interface ReviewDetail {
  id: string;
  repoFullName: string;
  prNumber: number;
  prTitle: string;
  summary: string;
  issuesFound: number;
  details: FileDetail[] | null;
  createdAt: string;
}

async function getReview(id: string): Promise<ReviewDetail | null> {
  const res = await fetch(`${SERVER_URL}/api/reviews/${id}`, { cache: "no-store" });
  if (!res.ok) return null;
  const data = await res.json();
  return data.review;
}

const severityConfig = {
  bug: { icon: IconBug, color: "text-red-600 bg-red-50 border-red-200", label: "Bug" },
  suggestion: {
    icon: IconBulb,
    color: "text-amber-600 bg-amber-50 border-amber-200",
    label: "Suggestion",
  },
  nit: { icon: IconMessage, color: "text-gray-600 bg-gray-50 border-gray-200", label: "Nit" },
};

export default async function ReviewDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const review = await getReview(id);

  if (!review) {
    return (
      <div className="px-8 py-8">
        <p className="text-gray-500 text-sm">Review not found.</p>
      </div>
    );
  }

  const prUrl = `https://github.com/${review.repoFullName}/pull/${review.prNumber}`;

  return (
    <div className="px-8 py-8 max-w-4xl">
      <Link
        href="/reviews"
        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-black mb-6"
      >
        <IconArrowLeft size={16} />
        Back to reviews
      </Link>

      <div className="flex items-start justify-between gap-4 mb-2">
        <div>
          <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
            <span>{review.repoFullName}</span>
            <span>·</span>
            <span>#{review.prNumber}</span>
            <span>·</span>
            <span>{new Date(review.createdAt).toLocaleDateString()}</span>
          </div>
          <h1 className="text-xl font-semibold">{review.prTitle}</h1>
        </div>
        <a
          href={prUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm bg-black text-white px-3 py-2 rounded-md hover:bg-gray-800 shrink-0"
        >
          View on GitHub
          <IconExternalLink size={14} />
        </a>
      </div>

      <p className="text-sm text-gray-500 mb-8">{review.summary}</p>

      {!review.details || review.details.length === 0 ? (
        <div className="bg-white border border-dashed border-gray-300 rounded-xl p-8 text-center">
          <p className="text-gray-500 text-sm">
            No detailed breakdown available for this review.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {review.details.map((file) => (
            <div key={file.filename} className="bg-white border border-gray-200 rounded-lg p-5">
              <div className="flex items-center justify-between mb-3">
                <code className="text-sm font-medium">{file.filename}</code>
                {file.issues.length === 0 ? (
                  <IconCircleCheck size={16} className="text-green-500" />
                ) : (
                  <span className="text-xs text-gray-400">
                    {file.issues.length} issue{file.issues.length !== 1 ? "s" : ""}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 mb-4">{file.summary}</p>

              {file.issues.length > 0 && (
                <div className="space-y-2">
                  {file.issues.map((issue, i) => {
                    const config = severityConfig[issue.severity] ?? severityConfig.nit;
                    const Icon = config.icon;
                    return (
                      <div
                        key={i}
                        className={`flex items-start gap-2 p-3 rounded-md border text-sm ${config.color}`}
                      >
                        <Icon size={15} className="shrink-0 mt-0.5" />
                        <div>
                          <span className="font-medium">
                            {config.label} · line {issue.line}
                          </span>
                          <p className="mt-0.5">{issue.comment}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}