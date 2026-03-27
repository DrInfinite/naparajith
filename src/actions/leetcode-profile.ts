/**
 * Copyright Naparajith T L (DrInfinite) 2024, 2026
 * SPDX-License-Identifier: MIT
 */

import {
    LeetCode,
    type AllQuestionsCount,
    type MatchedUser,
    type RecentSubmission,
} from "leetcode-query";

export type { Badge } from "leetcode-query";

export type TLeetcodeProfileReturn = Awaited<
    ReturnType<typeof LeetcodeProfile>
>;

export async function LeetcodeProfile() {
    const leetcode = new LeetCode();
    const result = await leetcode.user("DrInfinite");

    const matchedUser: MatchedUser = result.matchedUser!;
    const recentSubmissionList: RecentSubmission[] =
        result.recentSubmissionList!;
    const allQuestionsCount: AllQuestionsCount[] = result.allQuestionsCount;

    // const totalSubmissionNum = user.matchedUser?.submitStats.totalSubmissionNum;
    const acSubmissionNum = matchedUser.submitStats.acSubmissionNum;

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

    return {
        completedCount,
        completedPercentage,
        solvedCount,
        matchedUser,
        recentSubmissionList,
    };
}
