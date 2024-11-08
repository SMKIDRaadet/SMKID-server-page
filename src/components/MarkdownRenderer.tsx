import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({node, ...props}) => (
            <h1 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200" {...props} />
          ),
          h2: ({node, ...props}) => (
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200/80" {...props} />
          ),
          h3: ({node, ...props}) => <h3 className="text-xl font-bold mb-3 text-white" {...props} />,
          p: ({node, ...props}) => <p className="mb-4 text-gray-300" {...props} />,
          ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4 text-gray-300" {...props} />,
          ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4 text-gray-300" {...props} />,
          li: ({node, ...props}) => <li className="mb-2" {...props} />,
          a: ({node, ...props}) => (
            <a className="text-[#136998] hover:text-[#136998]/80 transition-colors duration-200 hover:underline" {...props} />
          ),
          blockquote: ({node, ...props}) => (
            <blockquote className="border-l-4 border-[#136998] pl-4 my-4 bg-gradient-to-r from-[#136998]/10 to-transparent p-4 rounded-r-lg" {...props} />
          ),
          code: ({node, ...props}) => (
            <code className="bg-gradient-to-r from-[#1b2c4c] to-[#1b2c4c]/80 px-2 py-1 rounded text-sm" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownRenderer;