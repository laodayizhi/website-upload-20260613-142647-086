function initMoviePlayer(url) {
  var video = document.getElementById("movie-player");
  var button = document.getElementById("start-player");
  var attached = false;
  var hlsPlayer = null;

  function attachSource() {
    if (!video || attached) {
      return;
    }

    attached = true;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
      return;
    }

    if (window.Hls && window.Hls.isSupported()) {
      hlsPlayer = new window.Hls({
        enableWorker: true,
        lowLatencyMode: true
      });
      hlsPlayer.loadSource(url);
      hlsPlayer.attachMedia(video);
      return;
    }

    video.src = url;
  }

  function playMovie() {
    if (!video) {
      return;
    }

    attachSource();

    if (button) {
      button.classList.add("is-hidden");
    }

    var playback = video.play();

    if (playback && typeof playback.catch === "function") {
      playback.catch(function () {
        video.controls = true;
      });
    }
  }

  if (button) {
    button.addEventListener("click", playMovie);
  }

  if (video) {
    video.addEventListener("click", function () {
      if (video.paused) {
        playMovie();
      }
    });

    video.addEventListener("play", function () {
      if (button) {
        button.classList.add("is-hidden");
      }
    });

    video.addEventListener("pause", function () {
      if (button && video.currentTime === 0) {
        button.classList.remove("is-hidden");
      }
    });
  }
}
