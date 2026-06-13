(function () {
  function selectAll(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  function parseSources(shell) {
    try {
      var raw = shell.getAttribute('data-video-sources') || '[]';
      var parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed.filter(Boolean) : [];
    } catch (error) {
      return [];
    }
  }

  function setImageFallbacks() {
    selectAll('img').forEach(function (image) {
      image.addEventListener('error', function () {
        image.style.opacity = '0';
      }, { once: true });
    });
  }

  function initMenu() {
    var button = document.querySelector('.menu-toggle');
    var panel = document.querySelector('.mobile-panel');
    if (!button || !panel) {
      return;
    }
    button.addEventListener('click', function () {
      panel.classList.toggle('open');
    });
  }

  function initHero() {
    var hero = document.querySelector('[data-hero-carousel]');
    if (!hero) {
      return;
    }
    var slides = selectAll('[data-hero-slide]', hero);
    var dots = selectAll('[data-hero-dot]', hero);
    if (!slides.length) {
      return;
    }
    var index = 0;
    var timer = null;

    function show(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('active', slideIndex === index);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('active', dotIndex === index);
      });
    }

    function start() {
      timer = window.setInterval(function () {
        show(index + 1);
      }, 5000);
    }

    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        window.clearInterval(timer);
        show(Number(dot.getAttribute('data-hero-dot')) || 0);
        start();
      });
    });

    show(0);
    start();
  }

  function initFilters() {
    selectAll('[data-filter-panel]').forEach(function (panel) {
      var container = panel.parentElement;
      var grid = container ? container.querySelector('[data-filter-grid]') : null;
      if (!grid) {
        return;
      }
      var input = panel.querySelector('[data-filter-text]');
      var year = panel.querySelector('[data-filter-year]');
      var type = panel.querySelector('[data-filter-type]');
      var reset = panel.querySelector('[data-filter-reset]');
      var cards = selectAll('.movie-card', grid);

      function apply() {
        var keyword = (input && input.value || '').trim().toLowerCase();
        var selectedYear = year && year.value || '';
        var selectedType = type && type.value || '';
        cards.forEach(function (card) {
          var haystack = [
            card.getAttribute('data-title'),
            card.getAttribute('data-region'),
            card.getAttribute('data-type'),
            card.getAttribute('data-tags'),
            card.getAttribute('data-year')
          ].join(' ').toLowerCase();
          var passKeyword = !keyword || haystack.indexOf(keyword) !== -1;
          var passYear = !selectedYear || card.getAttribute('data-year') === selectedYear;
          var passType = !selectedType || card.getAttribute('data-type') === selectedType;
          card.classList.toggle('is-hidden', !(passKeyword && passYear && passType));
        });
      }

      [input, year, type].forEach(function (item) {
        if (item) {
          item.addEventListener('input', apply);
          item.addEventListener('change', apply);
        }
      });

      if (reset) {
        reset.addEventListener('click', function () {
          if (input) {
            input.value = '';
          }
          if (year) {
            year.value = '';
          }
          if (type) {
            type.value = '';
          }
          apply();
        });
      }
    });
  }

  function initVideoShell(shell) {
    var video = shell.querySelector('video');
    var playLayer = shell.querySelector('[data-play-layer]');
    var toggle = shell.querySelector('[data-video-toggle]');
    var mute = shell.querySelector('[data-video-mute]');
    var fullscreen = shell.querySelector('[data-video-fullscreen]');
    var sources = parseSources(shell);
    var state = {
      initialized: false,
      sourceIndex: 0,
      hls: null
    };

    if (!video || !sources.length) {
      return;
    }

    function destroyHls() {
      if (state.hls && typeof state.hls.destroy === 'function') {
        state.hls.destroy();
      }
      state.hls = null;
    }

    function markError(message) {
      if (playLayer) {
        playLayer.innerHTML = '<span class="big-play">▶</span><span>' + message + '</span>';
        playLayer.style.opacity = '1';
        playLayer.style.visibility = 'visible';
        playLayer.style.pointerEvents = 'auto';
      }
      shell.classList.remove('is-playing');
    }

    function trySource(index, shouldPlay) {
      if (index >= sources.length) {
        markError('播放暂时不可用');
        return;
      }
      state.sourceIndex = index;
      var source = sources[index];
      destroyHls();
      video.removeAttribute('src');
      video.load();

      if (window.Hls && window.Hls.isSupported && window.Hls.isSupported()) {
        var hls = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true
        });
        state.hls = hls;
        hls.loadSource(source);
        hls.attachMedia(video);
        hls.on(window.Hls.Events.MANIFEST_PARSED, function () {
          if (shouldPlay) {
            playVideo();
          }
        });
        hls.on(window.Hls.Events.ERROR, function (eventName, data) {
          if (data && data.fatal) {
            trySource(state.sourceIndex + 1, shouldPlay);
          }
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = source;
        video.addEventListener('loadedmetadata', function () {
          if (shouldPlay) {
            playVideo();
          }
        }, { once: true });
      } else {
        trySource(index + 1, shouldPlay);
      }
    }

    function initialize(shouldPlay) {
      if (state.initialized) {
        if (shouldPlay) {
          playVideo();
        }
        return;
      }
      state.initialized = true;
      trySource(0, shouldPlay);
    }

    function playVideo() {
      var playPromise = video.play();
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise.then(function () {
          shell.classList.add('is-playing');
        }).catch(function () {
          shell.classList.remove('is-playing');
        });
      } else {
        shell.classList.add('is-playing');
      }
    }

    function togglePlay() {
      if (!state.initialized) {
        initialize(true);
        return;
      }
      if (video.paused) {
        playVideo();
      } else {
        video.pause();
      }
    }

    video.addEventListener('play', function () {
      shell.classList.add('is-playing');
    });
    video.addEventListener('pause', function () {
      shell.classList.remove('is-playing');
    });
    video.addEventListener('error', function () {
      trySource(state.sourceIndex + 1, !video.paused);
    });

    if (playLayer) {
      playLayer.addEventListener('click', togglePlay);
    }
    video.addEventListener('click', togglePlay);
    if (toggle) {
      toggle.addEventListener('click', togglePlay);
    }
    if (mute) {
      mute.addEventListener('click', function () {
        video.muted = !video.muted;
        mute.textContent = video.muted ? '取消静音' : '静音';
      });
    }
    if (fullscreen) {
      fullscreen.addEventListener('click', function () {
        if (document.fullscreenElement) {
          document.exitFullscreen();
        } else if (shell.requestFullscreen) {
          shell.requestFullscreen();
        }
      });
    }
  }

  function initPlayers() {
    selectAll('[data-video-shell]').forEach(initVideoShell);
  }

  function createCard(item) {
    return [
      '<a class="movie-card" href="' + item.url + '" data-title="' + escapeHtml(item.title) + '">',
      '<div class="poster-frame">',
      '<img src="' + item.cover + '" alt="' + escapeHtml(item.title) + '" loading="lazy">',
      '<span class="poster-badge">' + escapeHtml(item.category) + '</span>',
      '<span class="poster-play">▶</span>',
      '</div>',
      '<div class="movie-card-body">',
      '<h3>' + escapeHtml(item.title) + '</h3>',
      '<p>' + escapeHtml(item.oneLine) + '</p>',
      '<div class="movie-meta-row"><span>' + escapeHtml(item.region) + '</span><span>' + escapeHtml(item.year) + '</span></div>',
      '<div class="mini-tags"><span>' + escapeHtml(item.type) + '</span><span>' + escapeHtml(item.category) + '</span></div>',
      '</div>',
      '</a>'
    ].join('');
  }

  function escapeHtml(value) {
    return String(value || '').replace(/[&<>"]/g, function (character) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;'
      }[character];
    });
  }

  function initSearchPage() {
    var results = document.getElementById('searchResults');
    var title = document.getElementById('searchTitle');
    var hint = document.getElementById('searchHint');
    var input = document.getElementById('searchInput');
    if (!results || !title || !window.MOVIE_SEARCH_DATA) {
      return;
    }
    var params = new URLSearchParams(window.location.search);
    var query = (params.get('q') || '').trim();
    if (input) {
      input.value = query;
    }
    if (!query) {
      return;
    }
    var lower = query.toLowerCase();
    var matched = window.MOVIE_SEARCH_DATA.filter(function (item) {
      return [item.title, item.oneLine, item.region, item.year, item.type, item.category, item.tags].join(' ').toLowerCase().indexOf(lower) !== -1;
    }).slice(0, 120);
    title.textContent = '“' + query + '”的相关影片';
    hint.textContent = matched.length ? '点击影片卡片可进入详情页观看。' : '没有找到完全匹配的影片，可尝试更短关键词。';
    results.innerHTML = matched.map(createCard).join('');
    setImageFallbacks();
  }

  document.addEventListener('DOMContentLoaded', function () {
    setImageFallbacks();
    initMenu();
    initHero();
    initFilters();
    initPlayers();
    initSearchPage();
  });
})();
