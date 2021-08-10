import PanoramaIcon from "@material-ui/icons/Panorama";

export const AddImage = ({ editor }) => {
  const addImage = () => {
    const url = prompt("URL");

    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };
  return (
    <div>
      <button className="" onClick={addImage}>
        <PanoramaIcon
          style={{
            width: "3rem",
            height: "3rem",
            color: "#ec4899",
          }}
        />
      </button>
    </div>
  );
};
