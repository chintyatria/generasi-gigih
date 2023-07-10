async function processSongListAsync(songListPromise) {
  try {
    const songs = await songListPromise;
    songs.forEach((song) => {
      console.log(
        `Title: ${song.title}, Artists: ${song.artists
          .map((artist) => artist.name)
          .join(", ")}, Duration: ${song.duration}`
      );
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

function processSongListPromise(songListPromise) {
  songListPromise
    .then((songs) => {
      songs.forEach((song) => {
        console.log(
          `Title: ${song.title}, Artists: ${song.artists
            .map((artist) => artist.name)
            .join(", ")}, Duration: ${song.duration}`
        );
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}


let songListPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([
      {
        title: "song title 1",
        artists: [{ name: "artist name 1" }],
        duration: 200,
      },
      {
        title: "song title 2",
        artists: [{ name: "artist name 2" }],
        duration: 300,
      },
    ]);
  }, 1000);
});

processSongListPromise(songListPromise);

// processSongListAsync(songListPromise);
