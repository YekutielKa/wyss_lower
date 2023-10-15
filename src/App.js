import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="intro">
      <Header />
      <div className="video">
        <video
          className="video_media"
          src="video_background.mp4"
          autoPlay="autoplay"
          muted
          loop
        ></video>
      </div>
      <div className="content"></div>
    </div>
  );
}

export default App;
