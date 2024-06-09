'use client'

// Import the necessary dependencies
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import ReactQuill, { Quill } from 'react-quill';

type BolgFormContentProps = {
    value?: string,
    onFieldChange?: (value: string) => void
}

// Dynamically import ReactQuill only on the client side
const DynamicReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const BolgFormContent = ({ value, onFieldChange }: BolgFormContentProps) => {
    return (
        <DynamicReactQuill
            className='h-[90%]'
            theme="snow"
            placeholder="Blog content"
            value={value}
            onChange={(content, delta, source, editor) => {
                // Assuming onFieldChange is expecting a string value
                const html = editor.getHTML();
                onFieldChange && onFieldChange(html);
            }}
        />
    );
}

export default BolgFormContent;
