"use client";

// Import the necessary dependencies
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { useMemo } from "react";

// Dynamically import ReactQuill only on the client side
const DynamicReactQuill = dynamic(() => import("react-quill"), { ssr: false });

type BlogFormContentProps = {
  value?: string;
  onFieldChange?: (value: string) => void;
};

const BlogFormContent = ({ value, onFieldChange }: BlogFormContentProps) => {
  const quillFormats = useMemo(
    () => [
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "link",
      "video",
      "align",
      "color",
      "code-block",
    ],
    []
  );

  const quillModules = useMemo(
    () => ({
      toolbar: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ align: [] }],
        ["link", "video"], // Video and image are both included here
        [{ color: [] }, { background: [] }],
        ["code-block"],
        ["clean"],
      ],
    }),
    []
  );

  console.log("value 1 : ", value);

  return (
    <DynamicReactQuill
      className="h-[90%]"
      theme="snow"
      placeholder="Blog content"
      value={value}
      modules={quillModules}
      formats={quillFormats}
      onChange={(content, delta, source, editor) => {
        const html = editor.getHTML();
        onFieldChange && onFieldChange(html);
      }}
    />
  );
};

export default BlogFormContent;
