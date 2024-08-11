"use client";

// Import the necessary dependencies
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import ReactQuill, { Quill } from "react-quill";

type BlogFormContentProps = {
  value?: string;
  onFieldChange?: (value: string) => void;
};

// Dynamically import ReactQuill only on the client side
const DynamicReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const quillFormats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "align",
  "color",
  "code-block",
];

const quillModules = {
  toolbar: [
    [{ header: [1, 2, 3, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    [{ align: [] }],
    [{ color: [] }],
    ["code-block"],
    ["clean"],
  ],
};

const BlogFormContent = ({ value, onFieldChange }: BlogFormContentProps) => {
  return (
    <DynamicReactQuill
      className="h-[90%]"
      theme="snow"
      placeholder="Blog content"
      value={value}
      modules={quillModules}
      formats={quillFormats}
      onChange={(content, delta, source, editor) => {
        // Assuming onFieldChange is expecting a string value
        const html = editor.getHTML();
        onFieldChange && onFieldChange(html);
      }}
    />
  );
};

export default BlogFormContent;
