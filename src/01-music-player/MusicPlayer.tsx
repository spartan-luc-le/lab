type MusicPlayerProps = {
  className?: string;
};

function MusicPlayer({ className }: MusicPlayerProps) {
  return <div className={className}>wavesufer here</div>;
}

export function MusicPlayerContainer() {
  return (
    <>
      <div className="mb-4">
        <p>
          Your task is implement music player using{" "}
          <a
            className="text-pink-500 border-b border-pink-500 border-dotted"
            href="https://wavesurfer.xyz/"
          >
            wavesurfer.js
          </a>
          .
        </p>

        <ul className="list-inside list-disc">
          <li>Should show wavesufer</li>
          <li>Should play/pause</li>
          <li>[Optional] Show 1 button for play/pause</li>
        </ul>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <button className="rounded bg-neutral-200 px-3 py-1">Play</button>
        <button className="rounded bg-neutral-200 px-3 py-1">Pause</button>
      </div>

      <MusicPlayer className="h-20 bg-neutral-100 rounded text-neutral-900/50 italic" />
    </>
  );
}
