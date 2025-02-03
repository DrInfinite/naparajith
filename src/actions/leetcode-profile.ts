import { LeetCode } from "leetcode-query";

export async function LeetcodeProfile() {
	const leetcode = new LeetCode();
	const user = await leetcode.user("DrInfinite");
	const profile = user.matchedUser?.profile;

	// const totalSubmissionNum = user.matchedUser?.submitStats.totalSubmissionNum;
	const acSubmissionNum = user.matchedUser?.submitStats.acSubmissionNum;
	const allQuestionsCount = user.allQuestionsCount;

	// const problemCount = {};
	const solvedCount = {
		total: acSubmissionNum?.at(0)?.count as number,
		easy: acSubmissionNum?.at(1)?.count as number,
		medium: acSubmissionNum?.at(2)?.count as number,
		hard: acSubmissionNum?.at(3)?.count as number,
	} as const;

	const completedCount = {
		total:
			acSubmissionNum?.at(0)?.count.toString() +
			"/" +
			allQuestionsCount?.at(0)?.count.toString(),
		easy:
			acSubmissionNum?.at(1)?.count.toString() +
			"/" +
			allQuestionsCount?.at(1)?.count.toString(),
		medium:
			acSubmissionNum?.at(2)?.count.toString() +
			"/" +
			allQuestionsCount?.at(2)?.count.toString(),
		hard:
			acSubmissionNum?.at(3)?.count.toString() +
			"/" +
			allQuestionsCount?.at(3)?.count.toString(),
	} as const;

	const completedPercentage = {
		total:
			(
				((acSubmissionNum?.at(0)?.count as number) * 100) /
				(allQuestionsCount?.at(0)?.count as number)
			).toFixed(2) + "%",
		easy:
			(
				((acSubmissionNum?.at(1)?.count as number) * 100) /
				(allQuestionsCount?.at(1)?.count as number)
			).toFixed(2) + "%",
		medium:
			(
				((acSubmissionNum?.at(2)?.count as number) * 100) /
				(allQuestionsCount?.at(2)?.count as number)
			).toFixed(2) + "%",
		hard:
			(
				((acSubmissionNum?.at(3)?.count as number) * 100) /
				(allQuestionsCount?.at(3)?.count as number)
			).toFixed(2) + "%",
	} as const;

	return { profile, completedCount, completedPercentage, solvedCount };
}
