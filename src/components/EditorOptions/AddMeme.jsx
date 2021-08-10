import { fetchMeme } from "../../services/memeService";

export const AddMeme = ({ editor }) => {
  //fetch the meme from the API
  const getMeme = async (memeQuerry) => {
    try {
      const {
        data: { results },
      } = await fetchMeme(memeQuerry);
      //   console.log(results);
      return results[0].media[0].gif.url;
    } catch (error) {
      alert("Error while fetching MEME");
    }
  };

  //replace the memeQuerry with image fetched from API
  const setMeme = async () => {
    try {
      let editorContent = editor.getHTML();
      const memeRegex = /\{\{(.+?)_meme\}\}/;
      const [wholeMemeWord, memeQuerry] = editorContent.match(memeRegex);

      //   console.log(memeQuerry);
      const memeURL = await getMeme(memeQuerry);
      //   console.log(memeURL);
      console.log(wholeMemeWord);
      if (memeURL) {
        editorContent = editorContent.replace(wholeMemeWord, "");
        const newEditorContent =
          editorContent + `<img className="p-4" src="${memeURL}" />`;

        console.log(newEditorContent);
        editor.commands.setContent(newEditorContent);
        editor.chain().focus().setImage({ src: memeURL }).run();
      }
    } catch (error) {
      alert("No Memes found");
    }
  };

  return (
    <div>
      <button onClick={setMeme}>Add Meme</button>
    </div>
  );
};
