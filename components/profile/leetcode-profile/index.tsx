import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { ChartData } from 'chart.js';
import { Chart } from './chart';

export async function Leetcode({
	completedCount,
	completedPercentage,
	chartData,
}: {
	completedCount: {
		total: string;
		easy: string;
		medium: string;
		hard: string;
	};
	completedPercentage: {
		total: string;
		easy: string;
		medium: string;
		hard: string;
	};
	chartData: ChartData<'doughnut', number[], unknown>;
}) {
	return (
		<Card className="flex items-center justify-center">
			<CardContent className="my-auto flex flex-col items-center justify-between gap-4 align-middle md:flex-row md:gap-6">
				<div>
					<Chart data={chartData} />
				</div>
				<div className="flex scale-90 flex-col items-center sm:scale-100 md:items-start">
					{/* <H3 className="mb-2 text-center">LeetCode Stats</H3> */}
					<Card className="flex w-full min-w-full max-w-full flex-col items-center justify-center">
						<CardTitle className="w-full min-w-full max-w-full p-6 pb-0 text-center">
							LeetCode Stats
						</CardTitle>
						<CardContent className="flex flex-col items-center justify-center gap-2">
							<Badge
								variant={'secondary'}
								className="w-full min-w-full max-w-full"
							>
								Total: {completedCount.total} (
								{completedPercentage.total})
							</Badge>
							<Badge
								variant={'secondary'}
								className="w-full min-w-full max-w-full"
							>
								Easy: {completedCount.easy} (
								{completedPercentage.easy})
							</Badge>
							<Badge
								variant={'secondary'}
								className="w-full min-w-full max-w-full"
							>
								Medium: {completedCount.medium} (
								{completedPercentage.medium})
							</Badge>
							<Badge
								variant={'secondary'}
								className="w-full min-w-full max-w-full"
							>
								Hard: {completedCount.hard} (
								{completedPercentage.hard})
							</Badge>
						</CardContent>
					</Card>
				</div>
			</CardContent>
		</Card>
	);
}
