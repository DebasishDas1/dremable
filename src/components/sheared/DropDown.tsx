import { startTransition, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { createCategory, getAllCategory } from "@/actions/category.action";

type ICatagory = {
  name: string;
  _id: string;
};

type DropDownProps = {
  value?: string;
  onChangeHandler?: (value: string) => void;
};

const DropDown = ({
  value,
  onChangeHandler: onChangeHandler,
}: DropDownProps) => {
  const [catagories, setCatagories] = useState<ICatagory[]>([]);
  const [newCatagory, setNewCatagory] = useState("");

  const handelAddCatagory = () => {
    createCategory({
      categoryName: newCatagory.trim(),
    }).then((category) => {
      setCatagories((oldData) => [...oldData, category]);
    });
  };

  useEffect(() => {
    const getCatagories = async () => {
      const catagoriesList = await getAllCategory();
      catagoriesList && setCatagories(catagoriesList as ICatagory[]);
    };
    getCatagories();
  }, []);

  return (
    <Select onValueChange={onChangeHandler} defaultValue={value}>
      <SelectTrigger className="select-field">
        <SelectValue placeholder="Catagory" />
      </SelectTrigger>
      <SelectContent>
        {catagories.map((category) => (
          <SelectItem
            key={category._id}
            value={category._id}
            className="select-ttem p-ragiler-14"
          >
            {category.name}
          </SelectItem>
        ))}
        <AlertDialog>
          <AlertDialogTrigger className="p-medium-14 flex w-full rounded-sm py-3 pl-8  text-primary-500 hover:bg-primary-50 focus:text-primary-500">
            Add new Catagory
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-white">
            <AlertDialogHeader>
              <AlertDialogTitle>New Catagory</AlertDialogTitle>
              <AlertDialogDescription>
                <Input
                  id="catagory"
                  type="text"
                  placeholder="Catagory name"
                  className="input-field"
                  onChange={(e) => setNewCatagory(e.target.value)}
                />
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                onClick={() => startTransition(handelAddCatagory)}
              >
                Add
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </SelectContent>
    </Select>
  );
};

export default DropDown;
