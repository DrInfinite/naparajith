/**
 * This website is only meant to showcase the work and and skills of the author,
 * on a professional level. It also has a blog, containing the author's observations
 * and opinions on various topics. The views expressed are the author's own.
 * Copyright (C) 2024  T L Naparajith
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

import plugin from "tailwindcss/plugin";
import fluid, { extract, fontSize, screens } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
	content: {
		files: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
		extract,
	},
	theme: {
		screens,
		fontSize,
		fontFamily: {
			sans: ["var(--font-sans)"],
			quote: ["var(--font-quote)"],
			serif: ["var(--font-serif)"],
		},
		extend: {
			screens: { xs: "20rem" },
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: `var(--radius)`,
				md: `calc(var(--radius) - 2px)`,
				sm: "calc(var(--radius) - 4px)",
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		fluid,
		plugin(function ({ addBase }) {
			addBase({
				html: { fontSize: "14px" },
			});
		}),
	],
};
