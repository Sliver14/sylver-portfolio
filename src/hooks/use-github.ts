'use client'

import { useQuery } from "@tanstack/react-query";
import { fetchGitHubUser, fetchGitHubRepos } from "@/lib/github";

export function useGithubStats(username: string) {
  return useQuery({
    queryKey: [`/api/github/${username}`],
    queryFn: () => fetchGitHubUser(username),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
}

export function useGithubRepos(username: string) {
  return useQuery({
    queryKey: [`/api/github/${username}/repos`],
    queryFn: () => fetchGitHubRepos(username),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
}
