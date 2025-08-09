import { useContext } from "react";
import Display from "./components/Display";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <>
      <div className="h-screen bg-black">
        <h1>Second Branch changes</h1>
        <h2>1. Redesigning the landing page...</h2>
        <h3>2. Redesigning the landing page...</h3>
        <div className="h-[90%] flex">
          <Sidebar />
          <Display />
        </div>
        <Player />
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </>
  );
};

export default App;
