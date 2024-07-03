import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
  Tailwind,
  Section,
} from "@react-email/components";

interface VercelInviteUserEmailProps {
  username?: string;
  invitedByUsername?: string;
}

const VendoeRormEmail = ({
  username,
  invitedByUsername,
}: VercelInviteUserEmailProps) => {
  const previewText = `Join ${invitedByUsername} on Vercel`;
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="rounded-lg my-[40px] mx-auto p-[20px] max-w-[465px] shadow-lg">
            <Section className="mt-[32px]">
              <Img
                src={`https://lh3.googleusercontent.com/a/ACg8ocJRCUC6ZELFx1x5lK5awb4YQvBYtOHpaZWxhdfrYLPAlppULF0=s192-c-rg-br100`}
                width="80"
                height="85"
                alt="Dremable"
                className="my-0 mx-auto shadow-xl p-2 rounded-full"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Wellcome to team <strong>Dremable</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello {username}, 👋🏽
            </Text>

            <Text className="text-[14px] leading-[24px] pt-4">
              We&lsquo;re excited to have you on board. Your registration has been
              submitted successfully, 🎉
            </Text>

            <Text className="text-[14px] leading-[24px] pt-4">
              Our team will review it shortly. and assist you with further
              Procedures
            </Text>

            <Text className="text-[14px] leading-[24px] pt-4">
              In the meantime, feel free to explore our website
              <Link
                href={`www.dremable.com`}
                className="text-blue-600 no-underline"
              >
                Dremable
              </Link>
              .<br />
              If you have any questions or need assistance, please don&lsquo;t
              hesitate to reach out to us, Just reply to this mail or Directly
              WhatsApp us:
              <Link
                href={`www.dremable.com`}
                className="text-blue-600 no-underline"
              >
                Dremable
              </Link>
            </Text>

            <Text className="text-[14px] leading-[24px] pt-4">
              Thank you for choosing us; we look forward to working with you!
            </Text>

            <Text className="text-black text-[14px] leading-[24px]">
              Best regards,
              <br />
              <strong>Team Dremable</strong>
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VendoeRormEmail;
