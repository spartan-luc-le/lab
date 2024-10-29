import { MusicPlayerContainer } from "./01-music-player/MusicPlayer";

export function App() {
  return (
    <div className="p-4">
      <h1 className="text-red-500 mb-4">hello world!</h1>

      <div className="border border-dashed border-pink-500 p-4 rounded">
        <MusicPlayerContainer />
      </div>
    </div>
  );
}
