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
            className="bg-black rounded-lg p-3 m-1 flex text-white"
            onClick={() => deleteLocation(t)}
          >
            <span>{t}</span>
            <Close className="bg-red-500 ml-2 rounded-full p-1 text-white cursor-pointer" />
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
