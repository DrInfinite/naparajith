// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from '@/components/ui/card';
import { H3 } from '@/components/ui/typography/heading';
import { P } from '@/components/ui/typography/paragraph';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
// import ProfilePicture from '../../public/Profile.png';

export function Profile({
	url,
	name,
	about,
}: {
	url: string | StaticImport;
	name: string | React.ReactNode;
	about: string | React.ReactNode;
}) {
	return (
		<Card className="flex items-center justify-center">
			<CardContent className="my-auto flex flex-col items-center justify-between gap-4 align-middle md:flex-row md:gap-6">
				<Image
					className="flex aspect-square items-center justify-center rounded-full object-cover"
					src={url}
					alt="Naparajith's Profile Picture"
					loading="eager"
					height={144}
					width={144}
					// blurDataURL="https://media.licdn.com/dms/image/D5603AQF1GfwpqkX-cg/profile-displayphoto-shrink_400_400/0/1703668758984?e=2147483647&v=beta&t=HoAtqxUU8uVnKerpJUOKS6ylcEvKFpXkmaKCKOEhzmQ"
				/>

				<div className="flex scale-90 flex-col items-center sm:scale-100 md:items-start">
					<H3 className="mb-2 text-center">{name}</H3>
					<P className="text-center md:text-start">{about}</P>
				</div>
			</CardContent>
		</Card>
	);
}
