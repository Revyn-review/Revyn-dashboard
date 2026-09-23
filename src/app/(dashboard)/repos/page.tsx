import { auth } from "@clerk/nextjs/server";
import {
  IconBrandGithub,
  IconLock,
  IconExternalLink,
} from "@tabler/icons-react";

const SERVER_URL =
  process.env.SERVER_URL ?? "http://localhost:4000";

interface Repo {
  id: number;
  fullName: string;
  private: boolean;
  htmlUrl: string;
}

async function getRepos(clerkUserId: string): Promise<Repo[]> {
  const res = await fetch(
    `${SERVER_URL}/api/repos?clerkUserId=${clerkUserId}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) return [];

  const data = await res.json();

  return data.repos;
}

export default async function ReposPage() {
  const { userId } = await auth();

  const repos = userId ? await getRepos(userId) : [];

  return (
    <div className="px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-[#F5F5F4] mb-1">
            Repositories
          </h1>

          <p className="text-sm text-[#78716C]">
            Repos Revyn can review pull requests on
          </p>
        </div>

        <a
          href="https://github.com/apps/revyn-dev/installations/new"
          className="inline-flex items-center gap-2 bg-[#F97316] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#FB923C] transition-colors shadow-[0_0_20px_rgba(249,115,22,0.12)]"
        >
          <IconBrandGithub size={16} />

          Manage repos
        </a>
      </div>

      {repos.length === 0 ? (
        <div className="relative overflow-hidden bg-[#10100F] border border-dashed border-white/[0.10] rounded-xl p-12 text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.05),transparent_55%)]" />

          <div className="relative">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F97316]/[0.08] border border-[#F97316]/[0.12]">
              <IconBrandGithub
                size={24}
                className="text-[#F97316]"
              />
            </div>

            <p className="text-sm text-[#78716C]">
              No repos connected yet.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#10100F] border border-white/[0.06] rounded-xl p-4 flex items-center justify-between hover:border-[#F97316]/25 hover:bg-[#131210] transition-all duration-200"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.06]">
                  <IconBrandGithub
                    size={17}
                    className="text-[#A8A29E]"
                  />
                </div>

                <span className="text-sm font-medium text-[#E7E5E4] truncate group-hover:text-white">
                  {repo.fullName}
                </span>

                {repo.private && (
                  <IconLock
                    size={14}
                    className="text-[#78716C] shrink-0"
                  />
                )}
              </div>

              <IconExternalLink
                size={14}
                className="text-[#57534E] group-hover:text-[#F97316] shrink-0 transition-colors"
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}