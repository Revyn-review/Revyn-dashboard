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

const SERVER_URL =
  process.env.SERVER_URL ?? "http://localhost:4000";

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

async function getReview(
  id: string,
): Promise<ReviewDetail | null> {
  const res = await fetch(
    `${SERVER_URL}/api/reviews/${id}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) return null;

  const data = await res.json();

  return data.review;
}

const severityConfig = {
  bug: {
    icon: IconBug,
    color:
      "text-red-400 bg-red-500/[0.06] border-red-500/20",
    label: "Bug",
  },

  suggestion: {
    icon: IconBulb,
    color:
      "text-amber-400 bg-amber-500/[0.06] border-amber-500/20",
    label: "Suggestion",
  },

  nit: {
    icon: IconMessage,
    color:
      "text-[#A8A29E] bg-white/[0.03] border-white/[0.08]",
    label: "Nit",
  },
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
        <div className="bg-[#10100F] border border-white/[0.06] rounded-xl p-8">
          <p className="text-[#78716C] text-sm">
            Review not found.
          </p>
        </div>
      </div>
    );
  }

  const prUrl = `https://github.com/${review.repoFullName}/pull/${review.prNumber}`;

  return (
    <div className="px-8 py-8 max-w-4xl">
      <Link
        href="/reviews"
        className="group inline-flex items-center gap-1.5 text-sm text-[#78716C] hover:text-[#F97316] mb-6 transition-colors"
      >
        <IconArrowLeft
          size={16}
          className="group-hover:-translate-x-0.5 transition-transform"
        />

        Back to reviews
      </Link>

      <div className="flex items-start justify-between gap-4 mb-2">
        <div>
          <div className="flex items-center gap-2 text-xs text-[#57534E] mb-2">
            <span>{review.repoFullName}</span>

            <span>·</span>

            <span>#{review.prNumber}</span>

            <span>·</span>

            <span>
              {new Date(
                review.createdAt,
              ).toLocaleDateString()}
            </span>
          </div>

          <h1 className="text-xl font-semibold tracking-tight text-[#F5F5F4]">
            {review.prTitle}
          </h1>
        </div>

        <a
          href={prUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm bg-[#F97316] text-white px-3 py-2 rounded-lg hover:bg-[#FB923C] transition-colors shrink-0 shadow-[0_0_20px_rgba(249,115,22,0.10)]"
        >
          View on GitHub

          <IconExternalLink size={14} />
        </a>
      </div>

      <p className="text-sm text-[#78716C] leading-relaxed mb-8">
        {review.summary}
      </p>

      {!review.details || review.details.length === 0 ? (
        <div className="relative overflow-hidden bg-[#10100F] border border-dashed border-white/[0.10] rounded-xl p-8 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.04),transparent_60%)]" />

          <div className="relative">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/[0.08] border border-emerald-500/[0.12]">
              <IconCircleCheck
                size={20}
                className="text-emerald-400"
              />
            </div>

            <p className="text-[#78716C] text-sm">
              No detailed breakdown available for this review.
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {review.details.map((file) => (
            <div
              key={file.filename}
              className="bg-[#10100F] border border-white/[0.06] rounded-xl p-5 hover:border-white/[0.09] transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <code className="text-sm font-medium text-[#E7E5E4]">
                  {file.filename}
                </code>

                {file.issues.length === 0 ? (
                  <IconCircleCheck
                    size={16}
                    className="text-emerald-400"
                  />
                ) : (
                  <span className="text-xs text-[#57534E]">
                    {file.issues.length} issue
                    {file.issues.length !== 1 ? "s" : ""}
                  </span>
                )}
              </div>

              <p className="text-sm text-[#78716C] leading-relaxed mb-4">
                {file.summary}
              </p>

              {file.issues.length > 0 && (
                <div className="space-y-2">
                  {file.issues.map((issue, i) => {
                    const config =
                      severityConfig[issue.severity] ??
                      severityConfig.nit;

                    const Icon = config.icon;

                    return (
                      <div
                        key={i}
                        className={`flex items-start gap-2 p-3 rounded-lg border text-sm ${config.color}`}
                      >
                        <Icon
                          size={15}
                          className="shrink-0 mt-0.5"
                        />

                        <div>
                          <span className="font-medium">
                            {config.label} · line {issue.line}
                          </span>

                          <p className="mt-0.5 opacity-90 leading-relaxed">
                            {issue.comment}
                          </p>
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