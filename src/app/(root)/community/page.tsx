import type { Metadata } from "next";
import CommunityForm from "./CommunityForm";
import PageTitle from "@/components/sheared/PageTitle";
import Community from "./Community";

export const metadata: Metadata = {
  title: "Community",
  description: "Community - Dremable",
  robots: {
    index: false,
    follow: true,
  },
};

const blog: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <PageTitle title="Our Community" />
      <CommunityForm />
      <Community />
    </div>
  );
};

export default blog;
