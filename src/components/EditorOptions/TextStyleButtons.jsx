export const TextStyleButtons = ({ editor }) => {
  return (
    <div>
      <button
        className=""
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        Bold
      </button>
      <button
        className=""
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        Italic
      </button>
      <button
        className=""
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        Underline
      </button>
    </div>
  );
};
