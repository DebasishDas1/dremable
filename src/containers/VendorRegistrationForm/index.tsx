"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z, ZodError } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import { toast } from "sonner";
import { createVendor } from "@/lib/actions/vendor.action";
import VendorContactDetails from "./VendorContactDetails";
import VendorServices from "./VendorServices";
import VendorFiles from "./VendorFiles";
import VendorStepper from "./VendorStepper";
import {
  ChevronRight,
  KeyboardArrowLeft,
  CheckCircleOutline,
} from "@mui/icons-material";

// Define the form schema using zod
const formSchema = z.object({
  vName: z
    .string()
    .min(2, "Owner's Name must be at least 2 characters.")
    .regex(
      /^[a-zA-Z\s]+$/,
      "Owner's Name must contain only letters and spaces."
    ),
  vEmail: z.string().email("Invalid email address."),
  vWhatsApp: z.string().refine((value) => /^\d{10}$/.test(value), {
    message: "WhatsApp number must be a 10-digit number.",
  }),
  vExperience: z.string().refine((value) => /^\d+$/.test(value), {
    message: "Experience must be a number of years.",
  }),
  vCompanyName: z
    .string()
    .min(2, "Company name must be at least 2 characters."),
  vCompanyAddress: z
    .string()
    .min(10, "Company name must be at least 10 characters."),
  vService: z.string(),
  vServiceLocationList: z.array(z.string()),
  vImagesUrlList: z.array(z.string().optional().or(z.literal(""))),
  vDetailsPdf: z
    .string()
    .refine((value) => /\.(pdf|xls|xlsx)$/.test(value), {
      message: "Details file must be a PDF or Excel file.",
    })
    .optional()
    .or(z.literal("")),
});

// Infer the form data type from the schema
type FormData = z.infer<typeof formSchema>;

const VendorRegistrationForm = () => {
  const [step, setStep] = useState(0);

  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vName: "",
      vEmail: "",
      vWhatsApp: "",
      vExperience: "",
      vCompanyName: "",
      vCompanyAddress: "",
      vService: "",
      vServiceLocationList: [],
      vImagesUrlList: [],
      vDetailsPdf: "",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const contactDetailsSchema = formSchema.pick({
    vName: true,
    vEmail: true,
    vWhatsApp: true,
    vExperience: true,
  });

  const servicesSchema = formSchema.pick({
    vCompanyName: true,
    vCompanyAddress: true,
    vService: true,
    vServiceLocationList: true,
  });

  const filesSchema = formSchema.pick({
    vImagesUrlList: true,
    vDetailsPdf: true,
  });

  const nextStep = async () => {
    const values = methods.getValues();
    const schema =
      step === 0
        ? contactDetailsSchema
        : step === 1
        ? servicesSchema
        : filesSchema;
    try {
      schema.parse(values);
      setStep((prev) => prev + 1);
    } catch (error) {
      if (error instanceof ZodError) {
        error.errors.forEach(({ path, message }) => {
          methods.setError(path[0] as keyof FormData, {
            type: "manual",
            message,
          });
        });
      } else {
        console.error(error);
      }
    }
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit: SubmitHandler<FormData> = async (values) => {
    toast.info(`Thanks ${values.vName} for filling the form`);
    console.log(values);

    // Filter out undefined values from vImagesUrlList
    const filteredValues = {
      ...values,
      vImagesUrlList: values.vImagesUrlList.filter(
        (url): url is string => !!url
      ),
    };

    try {
      const newVendor = await createVendor({ vendor: filteredValues });
      if (newVendor) {
        methods.reset();
        toast.success(`Thanks ${newVendor.ownerName} entry added successfully`);
      }
    } catch (error) {
      console.error(error);
      toast.error(`Error on creating entry: ${error}`);
    }
  };

  return (
    <div className="pt-10 w-full">
      <VendorStepper currentStep={step} />

      <Form {...methods}>
        <form
          onSubmit={(e) => e.preventDefault()} // Prevent default form submission
          className="flex flex-col gap-5 items-center"
        >
          <div className="bg-white px-4 py-10 shadow-2xl rounded-2xl w-full">
            {step === 0 && <VendorContactDetails />}
            {step === 1 && <VendorServices />}
            {step === 2 && <VendorFiles />}
          </div>
          <div className="flex justify-between pt-8 w-[90%]">
            {step > 0 && (
              <Button
                className="text-xl rounded-full p-6 w-[180px]"
                onClick={prevStep}
              >
                <KeyboardArrowLeft className="mr-2" />
                Previous
              </Button>
            )}
            {step < 2 ? (
              <Button
                className="text-xl rounded-full p-6 w-[180px]"
                onClick={nextStep}
              >
                Next
                <ChevronRight className="ml-2" />
              </Button>
            ) : (
              <Button
                className="text-xl rounded-full p-6 w-[180px]"
                type="submit"
                onClick={methods.handleSubmit(onSubmit)}
              >
                Submit <CheckCircleOutline className="ml-2" />
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export default VendorRegistrationForm;
