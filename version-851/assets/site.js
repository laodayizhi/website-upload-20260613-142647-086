(function () {
  var menuToggle = document.querySelector('[data-menu-toggle]');
  if (menuToggle) {
    menuToggle.addEventListener('click', function () {
      document.body.classList.toggle('is-menu-open');
    });
  }

  var hero = document.querySelector('[data-hero]');
  if (hero) {
    var slides = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-slide]'));
    var dots = Array.prototype.slice.call(hero.querySelectorAll('[data-hero-dot]'));
    var active = 0;
    var timer = null;

    function show(index) {
      active = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('is-active', slideIndex === active);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('is-active', dotIndex === active);
      });
    }

    function start() {
      timer = window.setInterval(function () {
        show(active + 1);
      }, 5200);
    }

    dots.forEach(function (dot, index) {
      dot.addEventListener('click', function () {
        if (timer) {
          window.clearInterval(timer);
        }
        show(index);
        start();
      });
    });

    if (slides.length > 1) {
      start();
    }
  }

  function normalize(value) {
    return String(value || '').toLowerCase().trim();
  }

  function setupFilters(area) {
    var input = area.querySelector('[data-local-search]');
    var list = document.querySelector('[data-card-list]');
    if (!list) {
      return;
    }
    var cards = Array.prototype.slice.call(list.querySelectorAll('.movie-card'));
    var chips = Array.prototype.slice.call(area.querySelectorAll('[data-filter-chip]'));
    var activeChip = '全部';

    function run() {
      var query = normalize(input ? input.value : '');
      cards.forEach(function (card) {
        var haystack = normalize([
          card.getAttribute('data-title'),
          card.getAttribute('data-category'),
          card.getAttribute('data-region'),
          card.getAttribute('data-year'),
          card.getAttribute('data-genre'),
          card.textContent
        ].join(' '));
        var matchQuery = !query || haystack.indexOf(query) !== -1;
        var matchChip = activeChip === '全部' || haystack.indexOf(normalize(activeChip)) !== -1;
        card.classList.toggle('is-hidden-card', !(matchQuery && matchChip));
      });
    }

    if (input) {
      input.addEventListener('input', run);
      if (input.hasAttribute('data-query-sync')) {
        var params = new URLSearchParams(window.location.search);
        var q = params.get('q');
        if (q) {
          input.value = q;
        }
      }
    }

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        activeChip = chip.getAttribute('data-filter-chip') || '全部';
        chips.forEach(function (item) {
          item.classList.toggle('is-active', item === chip);
        });
        run();
      });
    });

    if (chips[0]) {
      chips[0].classList.add('is-active');
    }
    run();
  }

  Array.prototype.slice.call(document.querySelectorAll('[data-filter-area]')).forEach(setupFilters);

  function setupPlayer() {
    var holder = document.querySelector('[data-player]');
    if (!holder) {
      return;
    }
    var video = holder.querySelector('video');
    var button = holder.querySelector('[data-play-button]');
    if (!video) {
      return;
    }
    var hlsUrl = video.getAttribute('data-hls');
    var started = false;
    var hls = null;

    function begin() {
      if (!hlsUrl) {
        return;
      }
      if (button) {
        button.classList.add('is-hidden');
      }
      if (started) {
        video.play();
        return;
      }
      started = true;
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = hlsUrl;
        video.play();
        return;
      }
      if (window.Hls && window.Hls.isSupported()) {
        hls = new window.Hls({
          lowLatencyMode: true,
          backBufferLength: 90
        });
        hls.loadSource(hlsUrl);
        hls.attachMedia(video);
        hls.on(window.Hls.Events.MANIFEST_PARSED, function () {
          video.play();
        });
        hls.on(window.Hls.Events.ERROR, function (event, data) {
          if (data && data.fatal && hls) {
            if (data.type === window.Hls.ErrorTypes.NETWORK_ERROR) {
              hls.startLoad();
            } else if (data.type === window.Hls.ErrorTypes.MEDIA_ERROR) {
              hls.recoverMediaError();
            } else {
              hls.destroy();
            }
          }
        });
        return;
      }
      video.src = hlsUrl;
      video.play();
    }

    if (button) {
      button.addEventListener('click', begin);
    }
    video.addEventListener('click', function () {
      if (!started) {
        begin();
      }
    });
  }

  setupPlayer();
})();
