import { Metadata } from 'next';

import { Contact } from '@/components/contact';
import Linktree from '@/components/linktree';
import { Profile } from '@/components/profile/user-profile';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

import { GithubProfile } from '@/actions/github-profile';
import { LeetcodeProfile } from '@/actions/leetcode-profile';
import { Leetcode } from '@/components/profile/leetcode-profile';
import { ENV } from '@/lib/constants';
import { linktree } from '@/lib/data/linktree';
import {
	ChatBubbleIcon,
	CodeIcon,
	GitHubLogoIcon,
} from '@radix-ui/react-icons';
import React from 'react';

export const metadata: Metadata = {
	title: 'Quick Links',
	description:
		'A collection of the most important links that gives an insight into the works and achievements of Naparajith',
};

export default async function Links() {
	const data = await GithubProfile();
	const { profile, completedCount, completedPercentage, chartData } =
		await LeetcodeProfile();

	return (
		<div className="container mx-auto my-auto flex flex-col items-stretch px-4 py-9">
			<div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:grid-rows-1">
				<Profile
					url={data.avatar_url}
					name={data.name}
					about={data.bio}
				/>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
					<Contact />
					<Linktree
						icon={<ChatBubbleIcon width={36} height={36} />}
						heading={<>Chat with me</>}
						text="Chat with me on WhatsApp."
						href={ENV.WHATSAPP_LINK as string}
					/>
				</div>
			</div>
			<Separator className="my-9" />

			<div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:grid-rows-1">
				<Leetcode
					chartData={chartData}
					completedCount={completedCount}
					completedPercentage={completedPercentage}
				/>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
					<Linktree
						icon={<CodeIcon width={36} height={36} />}
						heading={
							<>
								LeetCode <Badge>{profile?.ranking}</Badge>
							</>
						}
						text={<>My DSA Skills</>}
						href={ENV.LEETCODE_LINK}
					/>
					<Linktree
						icon={<GitHubLogoIcon width={36} height={36} />}
						heading={
							<>
								GitHub <Badge>{data.login}</Badge>
							</>
						}
						text={<>My Technical Projects</>}
						href={data.html_url}
					/>
				</div>
			</div>
			<Separator className="my-9" />
			<div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:grid-rows-3">
				{linktree.map(function (link, index) {
					return (
						<React.Fragment key={index}>
							<Linktree
								icon={link.icon}
								heading={link.heading}
								text={link.text}
								href={link.href}
							/>
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
}
