import { AddHyperlink } from "./AddHyperlink";
import { AddImage } from "./AddImage";
import { AddMeme } from "./AddMeme";
import { TextStyleButtons } from "./TextStyleButtons";

export const EditorOptions = ({ editor }) => {
  return (
    <div className="flex space-x-4 shadow-sm items-center justify-center md:justify-between md:pr-8">
      <div className="hidden md:block text-secondary">
        <h2>The Editor for all your Needs.</h2>
      </div>

      <div className="flex space-x-4">
        <TextStyleButtons editor={editor} />
        <AddHyperlink editor={editor} />
        <AddImage editor={editor} />
        <AddMeme editor={editor} />
      </div>
    </div>
  );
};
