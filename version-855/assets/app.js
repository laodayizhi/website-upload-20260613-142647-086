(function () {
  function qs(selector, parent) {
    return (parent || document).querySelector(selector);
  }

  function qsa(selector, parent) {
    return Array.prototype.slice.call((parent || document).querySelectorAll(selector));
  }

  function setQuery(input, value) {
    if (input) {
      input.value = value || '';
    }
  }

  function text(value) {
    return String(value || '').toLowerCase();
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name) || '';
  }

  function initMenu() {
    var button = qs('.menu-toggle');
    var panel = qs('.mobile-panel');
    if (!button || !panel) {
      return;
    }
    button.addEventListener('click', function () {
      panel.classList.toggle('is-open');
    });
  }

  function initHero() {
    var root = qs('[data-hero-carousel]');
    if (!root) {
      return;
    }
    var slides = qsa('.hero-slide', root);
    var dots = qsa('.hero-dot', root);
    if (!slides.length) {
      return;
    }
    var active = 0;
    var timer = null;
    function show(index) {
      active = (index + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle('is-active', slideIndex === active);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle('active', dotIndex === active);
      });
    }
    function start() {
      stop();
      timer = window.setInterval(function () {
        show(active + 1);
      }, 5200);
    }
    function stop() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }
    dots.forEach(function (dot) {
      dot.addEventListener('click', function () {
        show(Number(dot.getAttribute('data-slide') || 0));
        start();
      });
    });
    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    show(0);
    start();
  }

  function initFilters() {
    qsa('[data-filter-form]').forEach(function (form) {
      var input = qs('[data-filter-input]', form);
      var list = qs('[data-filter-list]');
      if (!input || !list) {
        return;
      }
      function applyFilter() {
        var keyword = text(input.value).trim();
        qsa('.movie-card', list).forEach(function (card) {
          var haystack = text(card.innerText);
          card.classList.toggle('is-filter-hidden', keyword && haystack.indexOf(keyword) === -1);
        });
      }
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        applyFilter();
      });
      input.addEventListener('input', applyFilter);
    });
  }

  function initSearchPage() {
    var form = qs('[data-search-page-form]');
    var input = qs('#searchInput');
    var output = qs('#searchResults');
    var fallback = qs('#searchFallback');
    if (!form || !input || !output || !window.MOVIES_DATA) {
      return;
    }
    var initial = getParam('q');
    setQuery(input, initial);
    function render(query) {
      var keyword = text(query).trim();
      if (!keyword) {
        output.classList.remove('is-visible');
        output.innerHTML = '';
        if (fallback) {
          fallback.style.display = '';
        }
        return;
      }
      var matches = window.MOVIES_DATA.filter(function (movie) {
        return text([movie.title, movie.year, movie.region, movie.genre, movie.category, movie.tags, movie.oneLine].join(' ')).indexOf(keyword) !== -1;
      }).slice(0, 80);
      if (fallback) {
        fallback.style.display = 'none';
      }
      output.classList.add('is-visible');
      if (!matches.length) {
        output.innerHTML = '<h2>未找到相关影片</h2><p>可以尝试更换片名、地区、年份或类型关键词。</p>';
        return;
      }
      var items = matches.map(function (movie) {
        return '<a class="search-result-item" href="' + movie.href + '">' +
          '<img src="' + movie.cover + '" alt="' + escapeHtml(movie.title) + '">' +
          '<span><strong>' + escapeHtml(movie.title) + '</strong>' +
          '<p>' + escapeHtml(movie.year + ' · ' + movie.region + ' · ' + movie.genre) + '</p>' +
          '<p>' + escapeHtml(movie.oneLine || '') + '</p></span></a>';
      }).join('');
      output.innerHTML = '<h2>搜索结果</h2><div class="search-result-list">' + items + '</div>';
    }
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var value = input.value.trim();
      var nextUrl = value ? 'search.html?q=' + encodeURIComponent(value) : 'search.html';
      window.history.replaceState(null, '', nextUrl);
      render(value);
    });
    input.addEventListener('input', function () {
      render(input.value);
    });
    render(initial);
  }

  function createMoviePlayer(videoId, source) {
    var video = document.getElementById(videoId);
    if (!video || !source) {
      return;
    }
    var shell = video.closest('.player-shell');
    var button = shell ? shell.querySelector('[data-play-for="' + videoId + '"]') : null;
    var loaded = false;
    var hls = null;
    function attach() {
      if (loaded) {
        return;
      }
      loaded = true;
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = source;
      } else if (window.Hls && window.Hls.isSupported()) {
        hls = new window.Hls({ enableWorker: true });
        hls.loadSource(source);
        hls.attachMedia(video);
      } else {
        video.src = source;
      }
      if (button) {
        button.classList.add('is-hidden');
      }
      video.controls = true;
      var promise = video.play();
      if (promise && promise.catch) {
        promise.catch(function () {});
      }
    }
    if (button) {
      button.addEventListener('click', attach);
    }
    video.addEventListener('click', function () {
      if (!loaded) {
        attach();
      }
    });
    window.addEventListener('beforeunload', function () {
      if (hls && hls.destroy) {
        hls.destroy();
      }
    });
  }

  window.createMoviePlayer = createMoviePlayer;

  document.addEventListener('DOMContentLoaded', function () {
    initMenu();
    initHero();
    initFilters();
    initSearchPage();
  });
})();
