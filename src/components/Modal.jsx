import { useState } from "react";
import CancelIcon from "@material-ui/icons/Cancel";

export const Modal = ({ setIsLinkActive, activateLink }) => {
  const [url, setUrl] = useState("");

  function submitHandler() {
    if (url.trim().length === 0) return;

    activateLink(url);
    setIsLinkActive(false);
  }

  return (
    <div className="fixed top-0 left-0 z-10 flex justify-center items-center w-screen h-screen bg-black bg-opacity-50">
      <div className="w-1/4 min-w-max h-1/4 bg-white rounded-md shadow-md px-3">
        <div className="flex justify-between items-center p-3 mb-3 -mx-3 border-gray-200 border-b-1">
          <span className="text-2xl">Add the link</span>
          <button onClick={() => setIsLinkActive(false)}>
            <CancelIcon
              style={{
                width: "3rem",
                height: "3rem",
                color: "#363472",
              }}
            />
          </button>
        </div>
        <div>
          <input
            className="text-2xl p-2 w-full"
            placeholder={`Enter the Url here..`}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className=" flex justify-end">
          <button
            onClick={submitHandler}
            className="py-2 px-3 rounded text-2xl bg-primary text-white mt-4"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
