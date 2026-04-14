export interface GithubRepo {
  name: string;
  url: string;
  description: string | null;
  language: string | null;
  stars: number;
  pushedAt: string;
}

interface GhRepoApi {
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
  archived: boolean;
  private: boolean;
}

export async function fetchRecentRepos(handle: string, limit = 6): Promise<GithubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${handle}/repos?sort=pushed&per_page=30`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          'User-Agent': `${handle}-portfolio-build`,
        },
        next: { revalidate: 3600 },
      },
    );
    if (!res.ok) return [];
    const data = (await res.json()) as GhRepoApi[];
    return data
      .filter((r) => !r.fork && !r.archived && !r.private)
      .slice(0, limit)
      .map((r) => ({
        name: r.name,
        url: r.html_url,
        description: r.description,
        language: r.language,
        stars: r.stargazers_count,
        pushedAt: r.pushed_at,
      }));
  } catch {
    return [];
  }
}
