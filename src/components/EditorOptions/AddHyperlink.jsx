import { useState } from "react";
import LinkIcon from "@material-ui/icons/Link";
import { Modal } from "../Modal";

export const AddHyperlink = ({ editor }) => {
  const [isLinkActive, setIsLinkActive] = useState(false);
  function activateLink(url) {
    console.log(url);
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    setIsLinkActive(false);
  }
  return (
    <div>
      {isLinkActive && (
        <Modal setIsLinkActive={setIsLinkActive} activateLink={activateLink} />
      )}
      <div onClick={() => setIsLinkActive((link) => !link)}>
        <LinkIcon
          style={{
            width: "3rem",
            height: "3rem",
            color: "#ec4899",
          }}
        />
      </div>
    </div>
  );
};
