(function () {
  var wrap = document.querySelector('[data-player-wrap]');
  if (!wrap) {
    return;
  }
  var video = wrap.querySelector('[data-player-video]');
  var cover = wrap.querySelector('[data-player-cover]');
  var button = wrap.querySelector('[data-player-start]');
  if (!video) {
    return;
  }
  var stream = video.getAttribute('data-stream') || '';
  var loaded = false;
  var hlsInstance = null;

  function loadStream() {
    if (loaded || !stream) {
      return;
    }
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = stream;
      loaded = true;
      return;
    }
    if (window.Hls && window.Hls.isSupported()) {
      hlsInstance = new window.Hls();
      hlsInstance.loadSource(stream);
      hlsInstance.attachMedia(video);
      loaded = true;
      return;
    }
    video.src = stream;
    loaded = true;
  }

  function startPlayback() {
    loadStream();
    if (cover) {
      cover.classList.add('is-hidden');
    }
    video.controls = true;
    var promise = video.play();
    if (promise && typeof promise.catch === 'function') {
      promise.catch(function () {});
    }
  }

  if (button) {
    button.addEventListener('click', startPlayback);
  }
  if (cover) {
    cover.addEventListener('click', startPlayback);
  }
  video.addEventListener('click', function () {
    if (!loaded) {
      startPlayback();
    }
  });
  window.addEventListener('pagehide', function () {
    if (hlsInstance) {
      hlsInstance.destroy();
    }
  });
})();
