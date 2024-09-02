import Markdown from "react-markdown";
import MarkdownEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

type BlogFormContentProps = {
  value?: string;
  onFieldChange: (value: string) => void;
};

const BlogFormContent = ({ value, onFieldChange }: BlogFormContentProps) => {
  return (
    <MarkdownEditor
      value={value}
      style={{ height: "500px" }}
      onChange={(ev) => onFieldChange(ev.text)}
      renderHTML={(text) => <Markdown>{text}</Markdown>}
    />
  );
};

export default BlogFormContent;
