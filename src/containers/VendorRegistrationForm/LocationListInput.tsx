"use client";

import { useState } from "react";
import { Close } from "@mui/icons-material";
import { Input } from "@/components/ui/input";

type LocationListInputProps = {
  onFieldChange: (locations: string[]) => void;
  vServiceLocationList: string[];
};

const LocationListInput = ({
  onFieldChange,
  vServiceLocationList,
}: LocationListInputProps) => {
  const [location, setLocation] = useState<string>("");

  const addLocation = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && location.trim()) {
      onFieldChange([...vServiceLocationList, location]);
      setLocation("");
    }
  };

  const deleteLocation = (name: string) => {
    const newLocationList = vServiceLocationList.filter((loc) => loc !== name);
    onFieldChange(newLocationList);
  };

  return (
    <div>
      <div className="flex my-2 flex-wrap">
        {vServiceLocationList.map((t, i) => (
          <div
            key={i}
            className=" bg-gray-300 rounded-lg p-2 px-4 m-1 flex"
            onClick={() => deleteLocation(t)}
          >
            <span>{t}</span>
            <Close className="ml-2 rounded-full cursor-pointer" />
          </div>
        ))}
      </div>
      <Input
        type="text"
        className="input-field"
        placeholder="kolkata"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={addLocation}
      />
    </div>
  );
};

export default LocationListInput;
