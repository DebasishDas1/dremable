import { LocationSearching } from "@mui/icons-material";

type PageBenefitOptions = {
  benefits: {
    benefitTitle: string;
    benefitDescribe?: string;
  }[];
};

const PageBenefitOptions = ({ benefits }: PageBenefitOptions) => {
  return (
    <>
      {benefits &&
        benefits.map(({ benefitTitle, benefitDescribe }, index) => (
          <div
            key={index}
            className="flex flex-col p-4 md:w-[80%] bg-white rounded-lg my-4 shadow-md text-start"
          >
            <div className="flex items-center mb-2">
              <LocationSearching className="text-2xl md:text-3xl" />
              <h4 className="ml-2 text-lg md:text-xl font-semibold">
                {benefitTitle}
              </h4>
            </div>
            {benefitDescribe && (
              <p className="text-gray-700">{benefitDescribe}</p>
            )}
          </div>
        ))}
    </>
  );
};

export default PageBenefitOptions;
