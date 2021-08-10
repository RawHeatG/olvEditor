import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EditorOptions } from "./EditorOptions";

export const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
  });
  return (
    <div className="p-2 w-full h-screen">
      <EditorOptions editor={editor} />
      <EditorContent className="m-2 h-full" editor={editor} />
      <h1>Yala Yolo</h1>
    </div>
  );
};
