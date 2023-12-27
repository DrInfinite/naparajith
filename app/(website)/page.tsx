import {
  Button,
  Code,
  Container,
  Em,
  Flex,
  Heading,
  Section,
  Text,
} from "@radix-ui/themes";

export default function Home() {
  return (
    <Section
      style={{
        backgroundImage:
          "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.wallpapersafari.com%2F43%2F1%2FPIFf8L.jpg&f=1&nofb=1&ipt=627007b369d289dcf8e1870db072c02ef20e113c687bd6a229675a9f4961024d&ipo=images)",
      }}
    >
      <Container size={"1"}>
        <Flex direction={"column"} gap={"4"} justify={"start"}>
          <Heading>
            Hello, <Em>I&apos;m Naps</Em>. I&apos;m a{" "}
            <span className="font-bold">full-stack developer</span> with{" "}
            <span className="font-bold">8 years</span> of experience. I enjoy
            building <span className="italic">sites & apps</span>. My focus is{" "}
            <Code weight={"regular"} variant="solid">
              React (Next.js)
            </Code>
            .
          </Heading>
          <Text></Text>
          <Button className="uppercase">Know more</Button>
        </Flex>
      </Container>
    </Section>
  );
}
