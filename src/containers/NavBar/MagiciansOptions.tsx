import Link from "next/link";

const magicians_options_data = [
  {
    name: "Wedding Planners",
    linkUrl: "/wedding_magicians/kolkata/wedding_planners",
  },
  {
    name: "Photographers",
    linkUrl: "/wedding_magicians/kolkata/photographers",
  },
  {
    name: "Makeup Artists",
    linkUrl: "/wedding_magicians/kolkata/makeup_artists",
  },
];

const MagiciansOptions = ({
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
            <MagiciansOptionsNav
              key={data.name}
              name={data.name}
              url={data.linkUrl}
              setShowOption={() => setShowOption("")}
            />
          ))}
        </div>
        <div className="pb-4 ml-20 flex-1 bg-gradient-to-r from-emerald-100 to-cyan-100 rounded-xl text-center flex items-center justify-center px-4">
          <span className="align-middle">
            Magicians are the Collection of top Best Wedding Planners,
            Photographers & Other wedding Vendors of your city, curated by
            Dremable
          </span>
        </div>
      </div>
    </div>
  );
};

export default MagiciansOptions;

type MagiciansOptionsNavProp = {
  name: string;
  url: string;
  setShowOption: (state: boolean) => void;
};

const MagiciansOptionsNav = ({
  name,
  url,
  setShowOption,
}: MagiciansOptionsNavProp) => {
  return (
    <div className="py-2 text-3xl font-semibold">
      <Link href={url} onClick={() => setShowOption(false)}>
        {name}
      </Link>
    </div>
  );
};
