'use server';

import { ChartData } from 'chart.js';
import { LeetCode } from 'leetcode-query';

export async function LeetcodeProfile() {
	const leetcode = new LeetCode();
	const user = await leetcode.user('DrInfinite');
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
	};

	const completedCount = {
		total:
			acSubmissionNum?.at(0)?.count.toString() +
			'/' +
			allQuestionsCount?.at(0)?.count.toString(),
		easy:
			acSubmissionNum?.at(1)?.count.toString() +
			'/' +
			allQuestionsCount?.at(1)?.count.toString(),
		medium:
			acSubmissionNum?.at(2)?.count.toString() +
			'/' +
			allQuestionsCount?.at(2)?.count.toString(),
		hard:
			acSubmissionNum?.at(3)?.count.toString() +
			'/' +
			allQuestionsCount?.at(3)?.count.toString(),
	};

	const completedPercentage = {
		total:
			(
				((acSubmissionNum?.at(0)?.count as number) * 100) /
				(allQuestionsCount?.at(0)?.count as number)
			).toFixed(2) + '%',
		easy:
			(
				((acSubmissionNum?.at(1)?.count as number) * 100) /
				(allQuestionsCount?.at(1)?.count as number)
			).toFixed(2) + '%',
		medium:
			(
				((acSubmissionNum?.at(2)?.count as number) * 100) /
				(allQuestionsCount?.at(2)?.count as number)
			).toFixed(2) + '%',
		hard:
			(
				((acSubmissionNum?.at(3)?.count as number) * 100) /
				(allQuestionsCount?.at(3)?.count as number)
			).toFixed(2) + '%',
	};

	const chartData: ChartData<'doughnut', number[], unknown> = {
		labels: [
			`Easy (${completedCount.easy})`,
			`Medium (${completedCount.medium})`,
			`Hard (${completedCount.hard})`,
		],
		datasets: [
			{
				label: 'Solved',
				data: [solvedCount.easy, solvedCount.medium, solvedCount.hard],
				backgroundColor: [
					'rgba(75, 192, 192, 0.5)',
					'rgba(255, 206, 86, 0.5)',
					'rgba(255, 99, 132, 0.5)',
				],
				borderColor: [
					'rgba(75, 192, 192, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(255, 99, 132, 1)',
				],
				borderWidth: 1,
				weight: 0.5,
			},
		],
	};
	console.table(solvedCount);
	console.table(completedPercentage);
	console.table(completedCount);

	return { profile, completedCount, completedPercentage, chartData };
}
