/**
 * Copyright DrInfinite 2024, 2026
 * SPDX-License-Identifier: MIT
 */

export function timeSince(date: Date) {
  const elapsed = Date.now() - new Date(date).getTime();

  return {
    milliseconds: elapsed,
    seconds: Math.floor(elapsed / 1000),
    minutes: Math.floor(elapsed / (1000 * 60)),
    hours: Math.floor(elapsed / (1000 * 60 * 60)),
    days: Math.floor(elapsed / (1000 * 60 * 60 * 24)),
    weeks: Math.floor(elapsed / (1000 * 60 * 60 * 24 * 7)),
    months: Math.floor(elapsed / (1000 * 60 * 60 * 24 * 30)),
    years: Math.floor(elapsed / (1000 * 60 * 60 * 24 * 365)),
  };
}
