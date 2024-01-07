'use client'
import { useRef, useState } from 'react';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { collection, addDoc, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { db, storage } from '@/app/firebase'
import { Button } from "@/components/ui/button"
import { CameraAlt, Send } from '@mui/icons-material';
import { DocumentData } from 'firebase/firestore';
import Image from "next/image"

const PostForm = () => {
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const imageRef = useRef<HTMLInputElement>(null);
    const [imageState, setImageState] = useState<string | null>(null);

    const addImageToPost = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        const file = e.target.files?.[0];

        if (file) {
            reader.readAsDataURL(file);
        }

        reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
            if (readerEvent.target && typeof readerEvent.target.result === 'string') {
                setImageState(readerEvent.target.result);
            }
        };
    };

    const removeImage = () => {
        setImageState(null);
    }

    const sendPost = async () => {
        if (!inputRef.current?.value) return;

        try {
            // Send data to Firestore
            let postObject: DocumentData = {
                message: inputRef.current.value,
                timestamp: serverTimestamp(),
            };

            if (imageState) {
                postObject = {
                    ...postObject,
                    imageUrl: imageState,
                };
            }

            const docRef = await addDoc(collection(db, 'posts'), postObject);
            console.log('Post added to Firestore with ID:', docRef.id);

            if (inputRef.current) {
                inputRef.current.value = '';
            }
            removeImage();
        } catch (error) {
            console.error('Error sending post to Firestore:', error);
        }
    };


    return (
        <div
            className="bg-white md:w-[45%] md:p-4 shadow-2xl flex flex-col rounded-lg items-center">
            <div className='flex items-center w-[90%]'>
                <textarea
                    className="bg-gray-100 flex-grow p-5 focus:outline-none w-[100%]"
                    placeholder="What's on your mind"
                    ref={inputRef}
                />
                <Button className='w-fit rounded-full' type="submit" onClick={sendPost}>
                    <Send />
                </Button>
            </div>

            <div className='flex py-2 w-[100%] justify-evenly' onClick={() => imageRef.current?.click()}>
                {!imageState &&
                    <div className='bg-gray-300 p-2 rounded-full w-[80%] mx-2 flex justify-center space-x-1'>
                        <CameraAlt />
                        <span className='pl-2' >Share with us</span>
                        <input
                            type='file'
                            className='hidden'
                            ref={imageRef}
                            onChange={addImageToPost}
                        />
                    </div>
                }
                {
                    imageState &&
                    <div className='flex flex-col filter hover:brightness-100 translate duration-150 transform scale-105 cursor-pointer p-2' onClick={removeImage}>
                        <Image className='w-full object-contain' src={imageState} alt='preview' width={100} height={100} />
                    </div>
                }
            </div>
        </div>
    );
}

export default PostForm;
