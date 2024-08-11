import type { Metadata } from "next";
import CommunityForm from "./CommunityForm";
import PageTitle from "@/components/sheared/PageTitle";
import Community from "./Community";

export const metadata: Metadata = {
  title: "Community - Dremable",
  description: "Community - Dremable",
};

const blog: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <PageTitle title="Our Community" />
      <h1 className="hidden"> title=Our Community</h1>
      <CommunityForm />
      <Community />
    </div>
  );
};

export default blog;
