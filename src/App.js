import "./App.css";

function App() {
  return (
    <div className="intro">
      <header className="header">
        <img className="header_logo" src="logo.png" height="60px" />
        <button className="header_button">Оружие</button>
        <button className="header_button">Дорога</button>
        <button className="header_button">Недвижимость</button>
        <button className="header_button">Семья</button>
        <button className="header_button">Уголовное</button>
        <button className="header_button">Контакты</button>
      </header>
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
