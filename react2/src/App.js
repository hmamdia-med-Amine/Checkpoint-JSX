import "./App.css";
import image from "./cat.jpg";
import "./style.css";
function App() {
  return (
    <div className="App">
      <div
        style={{
          border: "solid",
          fontSize: 1,
          color: "black",
          maxWidth: "100vw",
        }}
      >
        <h1 className="title red">Your name here</h1>
        <br />
        <img src="/images.jpg" />
        <br />
        <img src={image} alt="myimage" />
      </div>

      <video
        style={{ width: 320, height: 240, controls: "controls" }}
        src="myVideo.mp4"
        type="video/mp4"
      />
    </div>
  );
}

export default App;
