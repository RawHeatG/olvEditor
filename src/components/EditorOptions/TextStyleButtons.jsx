import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";

export const TextStyleButtons = ({ editor }) => {
  return (
    <div className="flex">
      <button
        className=""
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <FormatBoldIcon
          style={{
            width: "3rem",
            height: "3rem",
            color: "#ec4899",
          }}
        />
      </button>
      <button
        className=""
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <FormatItalicIcon
          style={{
            width: "3rem",
            height: "3rem",
            color: "#ec4899",
          }}
        />
      </button>
      <button
        className=""
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <FormatUnderlinedIcon
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
