import logo from "../logo.svg";
import GitHubIcon from "@material-ui/icons/GitHub";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center shadow-sm md:px-4">
      <div className="flex items-center space-x-2 md:space-x-4 p-4">
        <img src={logo} alt="logo" />
        <h1 className="text-4xl md:text-5xl font-bold text-secondary">
          olvEditor
        </h1>
      </div>
      <div>
        <a
          href="https://github.com/RawHeatG/olveditor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon
            style={{
              width: "3rem",
              height: "3rem",
              color: "#363472",
            }}
          />
        </a>
      </div>
    </div>
  );
};
