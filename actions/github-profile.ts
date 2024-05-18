'use server';

export async function GithubProfile() {
	const profile = await fetch('https://api.github.com/users/DrInfinite');
	return profile.json();
}
