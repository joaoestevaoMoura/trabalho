import React from "react";

type CommentFormInputs = {
  title: string;
  content: string;
};

type Props = {
  symbol: string;
  handleComment: (e: CommentFormInputs) => void;
};

const StockCommentForm = ({ symbol, handleComment }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    handleComment({
      title: (form.elements.namedItem("title") as HTMLInputElement).value,
      content: (form.elements.namedItem("content") as HTMLTextAreaElement).value,
    });
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
      <input
        name="title"
        placeholder="Title"
        className="p-2 border rounded"
        required
      />
      <textarea
        name="content"
        placeholder="Comment"
        className="p-2 border rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Post Comment
      </button>
    </form>
  );
};

export default StockCommentForm;