import Markdown from "react-markdown";

const BlogContent = ({ content }: { content: string }) => {
  return (
    <div className="md:w-[72%] w-[90%] flex items-start flex-col text-start">
      <Markdown
        components={{
          h1: ({ node, ...props }) => (
            <h1 className="text-4xl font-bold my-4" {...props} />
          ),
          h2: ({ node, ...props }) => (
            <h2 className="text-3xl font-semibold my-3" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="text-2xl font-medium my-2" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="text-base leading-relaxed my-2" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc list-inside my-4" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="list-decimal list-inside my-4" {...props} />
          ),
          li: ({ node, ...props }) => <li className="ml-4" {...props} />,
          a: ({ node, ...props }) => (
            <a className="text-blue-500 hover:underline" {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-gray-300 pl-4 italic my-4"
              {...props}
            />
          ),
          img: ({ node, ...props }) => (
            <img
              className="w-full max-w-[700px] h-auto rounded-xl shadow-lg my-4"
              alt={props.alt || "Blog image - Dremable"}
              src={props.src}
              {...props}
            />
          ),
        }}
      >
        {content}
      </Markdown>
    </div>
  );
};

export default BlogContent;
