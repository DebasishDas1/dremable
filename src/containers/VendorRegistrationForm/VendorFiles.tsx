import { useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FileUploadDropzone } from "@/components/sheared/FileUploadDropzone";

const VendorFiles = () => {
  const { control } = useFormContext();

  return (
    <>
      <div className="md:text-4xl text-2xl font-bold mb-4 p-2">File upload</div>
      <FormField
        control={control}
        name="vImagesUrlList"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormControl>
              <FileUploadDropzone
                onFieldChange={field.onChange}
                fileList={field.value}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="vDetailsPdf"
        render={({ field }) => (
          <FormItem className="w-full">
            <FormLabel className="pl-2">Vendor Details PDF</FormLabel>
            <FormControl>
              <Input type="file" className="input-field" />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default VendorFiles;
