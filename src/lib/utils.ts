/**
 * Copyright Naparajith T L (DrInfinite) 2026
 * SPDX-License-Identifier: MIT
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
