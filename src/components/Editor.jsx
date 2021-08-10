import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { EditorOptions } from "./EditorOptions";
import Underline from "@tiptap/extension-underline";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";

export const Editor = () => {
  const extensions = [
    StarterKit,
    Image,
    Placeholder,
    Underline,
    Bold,
    Italic,
    Link,
  ];
  const editor = useEditor({
    extensions: extensions,
  });
  return (
    <div className="p-4 md:p-8 text-3xl">
      <EditorOptions editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
