import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import LocationListInput from "./LocationListInput";

const VendorServices = () => {
  const { control } = useFormContext();

  return (
    <>
      <div className="md:text-4xl text-2xl font-bold mb-4 p-2">
        Company details
      </div>
      <div className="py-4">
        <FormField
          control={control}
          name="vCompanyName"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="pl-3">Company Name</FormLabel>
              <FormControl>
                <Input
                  className="input-field"
                  placeholder="Dreamable"
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
          name="vCompanyAddress"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="pl-3">Company Address</FormLabel>
              <FormControl>
                <Input
                  className="input-field"
                  placeholder="Company Address"
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
          name="vService"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="pl-3">Services</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="select-field">
                    <SelectValue placeholder="Please select a service" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Wedding Planning">
                    Wedding Planning
                  </SelectItem>
                  <SelectItem value="Photography">
                    Wedding Photography
                  </SelectItem>
                  <SelectItem value="Makeup Artists">
                    Wedding Makeup Artists
                  </SelectItem>
                  <SelectItem value="Wedding vanues">Wedding venues</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage className="pl-3" />
            </FormItem>
          )}
        />
      </div>

      <div className="py-4">
        <FormField
          control={control}
          name="vServiceLocationList"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="pl-3">Service Location</FormLabel>
              <FormControl>
                <LocationListInput
                  onFieldChange={field.onChange}
                  vServiceLocationList={field.value}
                />
              </FormControl>
              <FormMessage className="pl-3" />
            </FormItem>
          )}
        />{" "}
        <span className="text-sm ml-3">
          Press &ldquo;Enter&ldquo; to select a location
        </span>
      </div>
    </>
  );
};

export default VendorServices;
