import githubLogo from "../images/GitHub-Mark-32px.png";

const Footer = ({ handlePlayPause, audioIsPlaying }) => {
  return (
    <footer className="footer windows-container">
      <h3>
        Made with ❤️ by{" "}
        <a href="https://nickbuildsthings.dev" target="_blank" rel="noreferrer">
          Nick Chmela
        </a>
      </h3>
      {/* <button onClick={() => handlePlayPause()}>
        {audioIsPlaying ? "⏸" : "▶"}
      </button> */}
      <a
        href="https://github.com/chmelan/weather-app"
        title="Link to repository on github"
        target="_blank"
        rel="noreferrer"
      >
        <img className="github-icon" src={githubLogo} alt="github logo" />
      </a>
    </footer>
  );
};
export default Footer;
