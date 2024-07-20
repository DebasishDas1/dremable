import Link from "next/link";

const magicians_options_data = [
  {
    name: "Banquet Halls",
    linkUrl: "/wedding_venues/kolkata/banquet_halls",
  },
  {
    name: "Luxury wedding venues",
    linkUrl: "/wedding_venues/kolkata/luxury_wedding_venues",
  },
  {
    name: "Wedding resorts",
    linkUrl: "/wedding_venues/kolkata/wedding_resorts",
  },
];

const VenueOptions = ({
  setShowOption,
}: {
  setShowOption: (state: string) => void;
}) => {
  return (
    <div className="flex justify-center absolute bg-white w-full py-7 shadow-xl rounded-b-3xl">
      <div className="w-[60%] flex justify-between">
        <div className="flex-1">
          <div className="text-xs font-light pb-4">By Type</div>
          {magicians_options_data.map((data) => (
            <VenueOptionsNav
              key={data.name}
              name={data.name}
              url={data.linkUrl}
              setShowOption={() => setShowOption("")}
            />
          ))}
        </div>
        <div className="pb-4 ml-20 flex-1 bg-gradient-to-r from-indigo-100 to-cyan-100 rounded-xl text-center flex items-center justify-center px-4">
          <span className="align-middle">
            We understand that booking a venue is the most important part of the
            whole wedding planning and it has to be perfect and should match all
            your preferences.
            <br />
            Dremable is right there to help.
          </span>
        </div>
      </div>
    </div>
  );
};

export default VenueOptions;

type VenueOptionsNavProp = {
  name: string;
  url: string;
  setShowOption: (state: boolean) => void;
};

const VenueOptionsNav = ({ name, url, setShowOption }: VenueOptionsNavProp) => {
  return (
    <div className="py-2 text-3xl font-semibold">
      <Link href={url} onClick={() => setShowOption(false)}>
        {name}
      </Link>
    </div>
  );
};
