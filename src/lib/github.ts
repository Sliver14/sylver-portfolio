export async function fetchGitHubUser(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`);
  if (!response.ok) {
    throw new Error("Failed to fetch GitHub user");
  }
  return response.json();
}

export async function fetchGitHubRepos(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!response.ok) {
    throw new Error("Failed to fetch GitHub repos");
  }
  return response.json();
}
