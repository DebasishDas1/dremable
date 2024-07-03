import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const VendorContactDetails = () => {
  const { control } = useFormContext();

  return (
    <>
      <div className="md:text-4xl text-2xl font-bold mb-4 p-2">
        Contact details
      </div>

      <div className="py-4">
        <FormField
          control={control}
          name="vName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="pl-3">Owner Name</FormLabel>
              <FormControl>
                <Input
                  className="input-field"
                  placeholder="Debasish Das"
                  {...field}
                />
              </FormControl>
              <FormMessage className="pl-3" />
            </FormItem>
          )}
        />
      </div>

      <div className="py-4">
        <FormField
          control={control}
          name="vEmail"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="pl-3">Email</FormLabel>
              <FormControl>
                <Input
                  className="input-field"
                  placeholder="dremablewedding@gmail.com"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage className="pl-3" />
            </FormItem>
          )}
        />
      </div>

      <div className="py-4">
        <FormField
          control={control}
          name="vWhatsApp"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="pl-3">WhatsApp</FormLabel>
              <FormControl>
                <Input
                  className="input-field"
                  placeholder="8777790641"
                  type="number"
                  {...field}
                />
              </FormControl>
              <FormMessage className="pl-3" />
            </FormItem>
          )}
        />
      </div>
      
      <div className="py-4">
        <FormField
          control={control}
          name="vExperience"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="pl-3">Years of Experience</FormLabel>
              <FormControl>
                <Input
                  className="input-field"
                  placeholder="2"
                  type="number"
                  {...field}
                />
              </FormControl>
              <FormMessage className="pl-3" />
            </FormItem>
          )}
        />
        <span className="text-sm ml-3">Press "Enter" to select a location</span>
      </div>
    </>
  );
};

export default VendorContactDetails;
