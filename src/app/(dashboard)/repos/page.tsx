import { auth } from "@clerk/nextjs/server";
import { IconBrandGithub, IconLock, IconExternalLink } from "@tabler/icons-react";

const SERVER_URL = process.env.SERVER_URL ?? "http://localhost:4000";

interface Repo {
  id: number;
  fullName: string;
  private: boolean;
  htmlUrl: string;
}

async function getRepos(clerkUserId: string): Promise<Repo[]> {
  const res = await fetch(`${SERVER_URL}/api/repos?clerkUserId=${clerkUserId}`, {
    cache: "no-store",
  });
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
          <h1 className="text-2xl font-semibold mb-1">Repositories</h1>
          <p className="text-sm text-gray-500">Repos Revyn can review pull requests on</p>
        </div>
        <a
          href="https://github.com/apps/revyn-dev/installations/new"
          className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
        >
          <IconBrandGithub size={16} />
          Manage repos
        </a>
      </div>

      {repos.length === 0 ? (
        <div className="bg-white border border-dashed border-gray-300 rounded-xl p-12 text-center">
          <IconBrandGithub size={32} className="mx-auto text-gray-300 mb-3" />
          <p className="text-gray-500 text-sm">No repos connected yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:border-gray-300"
            >
              <div className="flex items-center gap-2 min-w-0">
                <IconBrandGithub size={18} className="text-gray-400 shrink-0" />
                <span className="text-sm font-medium truncate">{repo.fullName}</span>
                {repo.private && <IconLock size={14} className="text-gray-400 shrink-0" />}
              </div>
              <IconExternalLink size={14} className="text-gray-300 shrink-0" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}