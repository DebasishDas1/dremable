import { Dispatch, SetStateAction } from "react"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

type FuleUploderProps = {
    onFieldChange: (value: string) => void
    imageUrl: string
    setFiles: Dispatch<SetStateAction<File[]>>
}

const FuleUploder = ({ onFieldChange, imageUrl, setFiles }: FuleUploderProps) => {
    return (
        <div className="bg-white w-[100%] rounded-sm flex flex-col p-10 items-center text-gray-500">
            <CloudUploadIcon sx={{ fontSize: 100 }} />
            <div>
                drop the file
            </div>
        </div>
    )
}

export default FuleUploder