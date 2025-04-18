// List of songs (just filenames from the /songs folder)
const songs = [
    "song1.mp3",
    "song2.mp3",
    "song3.mp3",
    "song4.mp3",
    "song5.mp3"
  ];
  
  const songList = document.getElementById("songList");
  const audioPlayer = document.getElementById("audioPlayer");
  
  // Render songs in UI
  songs.forEach((song) => {
    const li = document.createElement("li");
    li.textContent = song;
    li.addEventListener("click", () => {
      audioPlayer.src = `songs/${song}`;
      audioPlayer.play();
    });
    songList.appendChild(li);
  });
  