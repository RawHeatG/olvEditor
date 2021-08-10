import { TextStyleButtons } from "./TextStyleButtons";

export const EditorOptions = ({ editor }) => {
  return (
    <div>
      <h1>I am EditorOptions</h1>
      <TextStyleButtons editor={editor} />
    </div>
  );
};
