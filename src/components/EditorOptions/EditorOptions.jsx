import { AddImage } from "./AddImage";
import { AddMeme } from "./AddMeme";
import { TextStyleButtons } from "./TextStyleButtons";

export const EditorOptions = ({ editor }) => {
  return (
    <div>
      <h1>I am EditorOptions</h1>
      <TextStyleButtons editor={editor} />
      <AddImage editor={editor} />
      <AddMeme editor={editor} />
    </div>
  );
};
