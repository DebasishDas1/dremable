import { startTransition, useEffect, useState } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
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
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { createCatagory, getAllCatagory } from '@/lib/actions/catagory.action'

type ICatagory = {
    name: string
    _id: string
}

type DropDownProps = {
    value?: string,
    onChabgeHandler?: (value: string) => void
}

const DropDown = ({ value, onChabgeHandler }: DropDownProps) => {
    // const [catagories, setCatagories] = useState<ICatagory[]>([]);
    // const [newCatagory, setNewCatagory] = useState('')

    // const handelAddCatagory = () => {
    //     createCatagory({
    //         catagoryName: newCatagory.trim()
    //     }).then((catagory) => {
    //         setCatagories(oldData => [...oldData, catagory])
    //     })
    // }

    // useEffect(() => {
    //     const getCatagories = async () => {
    //         const catagoriesList = await getAllCatagory();
    //         catagoriesList && setCatagories(catagoriesList as ICatagory[])
    //     }
    //     getCatagories()
    // }, [])

    const catagories = [
        "Wedding Planning",
        "Wedding Photography",
        "Bridal Makeup",
        "Destination Wedding",
        "Pre Wedding"
    ]

    return (
        <Select onValueChange={onChabgeHandler} defaultValue={value}>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Catagory" />
            </SelectTrigger>
            <SelectContent>
                {catagories.map(catagory => (
                    <SelectItem
                        key={catagory}
                        value={catagory}
                        className='select-ttem p-ragiler-14'
                    >{catagory}</SelectItem>
                ))
                }
                {/* {catagories.length > 1 &&
                    catagories.map(catagory => (
                        <SelectItem
                            key={catagory._id}
                            value={catagory._id}
                            className='select-ttem p-ragiler-14'
                        >{catagory.name}</SelectItem>
                    ))
                } */}
                {/* <AlertDialog>
                    <AlertDialogTrigger className="p-medium-14 flex w-full rounded-sm py-3 pl-8  text-primary-500 hover:bg-primary-50 focus:text-primary-500" >
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
                                    onChange={e => setNewCatagory(e.target.value)}
                                />
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction onClick={() => startTransition(handelAddCatagory)} >Add</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog> */}
            </SelectContent>
        </Select>

    )
}

export default DropDown