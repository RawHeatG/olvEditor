export const AddImage = ({ editor }) => {
  const addImage = () => {
    console.log("Aeyyy m chala");
    const url = prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };
  return (
    <div>
      <button className="" onClick={addImage}>
        Add Image
      </button>
    </div>
  );
};
