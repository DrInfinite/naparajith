/**
 * This website is only meant to showcase the work and and skills of the author,
 * on a professional level. It also has a blog, containing the author's observations
 * and opinions on various topics. The views expressed are the author's own.
 * Copyright (C) 2025  T L Naparajith
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License Version 3 as published
 * by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/agpl-3.0.txt>.
 *
 * Contact me through electronic mail: <naparajith@duck.com>
 */

import { LeetCode } from "leetcode-query";

export async function LeetcodeProfile() {
    const leetcode = new LeetCode();
    const result = await leetcode.user("DrInfinite");

    const matchedUser = result.matchedUser!;
    const recentSubmissionList = result.recentSubmissionList;
    const allQuestionsCount = result.allQuestionsCount;

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
