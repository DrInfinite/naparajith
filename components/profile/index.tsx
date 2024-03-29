// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from '@/components/ui/card';
import { Code } from '@/components/ui/typography/code';
import { H3 } from '@/components/ui/typography/heading';
import { P } from '@/components/ui/typography/paragraph';
import Image from 'next/image';
import ProfilePicture from '../../public/Profile.png';

export function Profile() {
    return (
        <Card className="flex items-center justify-center">
            <CardContent className="my-auto flex flex-col items-center justify-between gap-4 align-middle md:flex-row md:gap-6">
                {/* <Avatar className="flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36">
                    <AvatarImage
                        className=""
                        src={"@/public/Profile.jpg"}
                        alt="Naparajith's Profile Image"
                        loading="eager"
                        height={128}
                        width={128}
                    />
                    <AvatarFallback>NA</AvatarFallback>
                </Avatar> */}

                <Image
                    className="flex aspect-square items-center justify-center rounded-full object-cover"
                    src={ProfilePicture}
                    alt="Naparajith's Profile Picture"
                    loading="eager"
                    height={144}
                    width={144}
                    placeholder="blur"
                    // blurDataURL="https://media.licdn.com/dms/image/D5603AQF1GfwpqkX-cg/profile-displayphoto-shrink_400_400/0/1703668758984?e=2147483647&v=beta&t=HoAtqxUU8uVnKerpJUOKS6ylcEvKFpXkmaKCKOEhzmQ"
                />

                <div className="flex scale-90 flex-col items-center sm:scale-100 md:items-start">
                    <H3 className="mb-2 text-center">T L Naparajith</H3>
                    <P className="text-center">
                        <Code variant={'secondary'}>Technical Intern</Code>{' '}
                        &rarr; AT&T
                    </P>
                    <P className="text-center">
                        <Code>B.E CSE</Code> &rarr; Senior Year
                    </P>
                </div>
            </CardContent>
        </Card>
    );
}
