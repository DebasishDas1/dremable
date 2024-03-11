import { LocationSearching } from '@mui/icons-material';

type PageBnifitOptions = {
    banifits: {
        banifitsTitle: string;
        banifitsDescribe?: string;
    }[];
};

const PageBnifitOptions = ({ banifits }: PageBnifitOptions) => {
    return (
        <>
            {banifits && banifits.map(({ banifitsTitle, banifitsDescribe }, index) => (
                <div key={index} className="flex flex-col p-4 md:w-[80%] bg-white rounded-lg my-4 shadow-md">
                    <div className="flex items-center mb-2">
                        <LocationSearching className="text-2xl md:text-3xl" />
                        <h3 className="ml-2 text-lg md:text-xl font-semibold">{banifitsTitle}</h3>
                    </div>
                    {
                        banifitsDescribe &&
                        <p className="text-gray-700">{banifitsDescribe}</p>
                    }
                </div>
            ))}
        </>
    );
};

export default PageBnifitOptions;
