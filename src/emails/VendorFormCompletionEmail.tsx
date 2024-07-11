import React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Text,
  Tailwind,
  Section,
  Button,
} from "@react-email/components";

interface VercelInviteUserEmailProps {
  userName?: string;
}

const VendorFormCompletionEmail = ({
  userName,
}: VercelInviteUserEmailProps) => {
  const previewText = `Thanks for joining Team Dremable.`;
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="bg-white rounded-lg my-[40px] mx-auto p-[20px] max-w-[465px]">
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
              Welcome to team <strong>Dremable</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello {userName},
            </Text>

            <Text className="text-[14px] leading-[24px] pt-4">
              We are excited to have you on board. Your registration has been
              submitted successfully, 🎉
            </Text>

            <Text className="text-[14px] leading-[24px] pt-4">
              Our team will review it shortly. and assist you with further
              Procedures.In the meantime, feel free to explore our website
            </Text>

            <Button
              className="bg-black text-white px-4 py-2 rounded-md font-bold"
              href="www.dremable.com"
            >
              Dremable
            </Button>

            <Text className="text-[14px] leading-[24px] pt-4">
              If you have any questions or need assistance, please do not
              hesitate to reach out to us, Directly through 👇
            </Text>

            <Button
              className="bg-green-300 text-black font-bold px-4 py-2"
              href="www.dremable.com"
            >
              Whatsapp
            </Button>

            <Text className="text-[14px] leading-[24px]">
              Please do not respond to this email.
            </Text>

            <Text className="text-[14px] leading-[24px] pt-4">
              Thank you for choosing us; we look forward to working with you!{" "}
              <br />
            </Text>

            <Text className="text-[14px] leading-[24px]">
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

export default VendorFormCompletionEmail;
