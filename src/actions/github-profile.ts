export async function GithubProfile() {
	const response = await fetch("https://api.github.com/users/DrInfinite");
	const github = await response.json();

	return github;
}
