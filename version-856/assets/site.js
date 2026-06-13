(function() {
  function $(selector, scope) {
    return (scope || document).querySelector(selector);
  }

  function $all(selector, scope) {
    return Array.prototype.slice.call((scope || document).querySelectorAll(selector));
  }

  function escapeHtml(value) {
    return String(value || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function initMobileMenu() {
    var toggle = $('[data-mobile-toggle]');
    var panel = $('[data-mobile-panel]');
    if (!toggle || !panel) {
      return;
    }
    toggle.addEventListener('click', function() {
      panel.classList.toggle('open');
    });
  }

  function initHero() {
    var carousel = $('[data-hero-carousel]');
    if (!carousel) {
      return;
    }
    var slides = $all('[data-hero-slide]', carousel);
    var dots = $all('[data-hero-dot]', carousel);
    if (!slides.length) {
      return;
    }
    var current = 0;
    var timer = null;
    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function(slide, i) {
        slide.classList.toggle('active', i === current);
      });
      dots.forEach(function(dot, i) {
        dot.classList.toggle('active', i === current);
      });
    }
    function next() {
      show(current + 1);
    }
    dots.forEach(function(dot, i) {
      dot.addEventListener('click', function() {
        show(i);
        if (timer) {
          clearInterval(timer);
        }
        timer = setInterval(next, 5200);
      });
    });
    timer = setInterval(next, 5200);
  }

  function initFilters() {
    $all('[data-filter-input]').forEach(function(input) {
      var section = input.closest('.content-section') || document;
      var scope = $('[data-filter-scope]', section);
      if (!scope) {
        return;
      }
      var cards = $all('.movie-card', scope);
      input.addEventListener('input', function() {
        var query = input.value.trim().toLowerCase();
        cards.forEach(function(card) {
          var text = [
            card.getAttribute('data-title'),
            card.getAttribute('data-region'),
            card.getAttribute('data-year'),
            card.getAttribute('data-genre'),
            card.getAttribute('data-tags')
          ].join(' ').toLowerCase();
          card.style.display = text.indexOf(query) >= 0 ? '' : 'none';
        });
      });
    });
  }

  function cardTemplate(item) {
    var tags = (item.tags || []).slice(0, 3).map(function(tag) {
      return '<span>' + escapeHtml(tag) + '</span>';
    }).join('');
    return '' +
      '<article class="movie-card">' +
      '<a class="poster-link" href="' + escapeHtml(item.url) + '">' +
      '<img src="' + escapeHtml(item.cover) + '" alt="' + escapeHtml(item.title) + '" loading="lazy">' +
      '<span class="poster-play">▶</span>' +
      '</a>' +
      '<div class="movie-card-body">' +
      '<h2><a href="' + escapeHtml(item.url) + '">' + escapeHtml(item.title) + '</a></h2>' +
      '<p>' + escapeHtml(item.one_line) + '</p>' +
      '<div class="movie-meta"><span>' + escapeHtml(item.region) + '</span><span>' + escapeHtml(item.year) + '</span><span>' + escapeHtml(item.type) + '</span></div>' +
      '<div class="tag-row">' + tags + '</div>' +
      '</div>' +
      '</article>';
  }

  function initSearchPage() {
    var results = $('#search-results');
    var input = $('#search-page-input');
    if (!results || !input || !window.SEARCH_INDEX) {
      return;
    }
    var params = new URLSearchParams(window.location.search);
    var query = params.get('q') || '';
    input.value = query;
    function render(value) {
      var q = value.trim().toLowerCase();
      if (!q) {
        results.innerHTML = '<div class="empty-state">输入片名、地区、年份、类型或标签快速搜索。</div>';
        return;
      }
      var matches = window.SEARCH_INDEX.filter(function(item) {
        return [item.title, item.region, item.year, item.type, item.genre, (item.tags || []).join(' ')].join(' ').toLowerCase().indexOf(q) >= 0;
      }).slice(0, 120);
      if (!matches.length) {
        results.innerHTML = '<div class="empty-state">没有找到匹配影片。</div>';
        return;
      }
      results.innerHTML = '<div class="movie-grid">' + matches.map(cardTemplate).join('') + '</div>';
    }
    input.addEventListener('input', function() {
      render(input.value);
    });
    render(query);
  }

  window.bindMoviePlayer = function(source) {
    var video = document.getElementById('movie-player');
    var trigger = document.getElementById('player-trigger');
    if (!video || !source) {
      return;
    }
    var loaded = false;
    var hls = null;
    function load() {
      if (loaded) {
        return;
      }
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = source;
      } else if (window.Hls && window.Hls.isSupported()) {
        hls = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true
        });
        hls.loadSource(source);
        hls.attachMedia(video);
      } else {
        video.src = source;
      }
      video.controls = true;
      loaded = true;
    }
    function play() {
      load();
      if (trigger) {
        trigger.classList.add('hidden');
      }
      var promise = video.play();
      if (promise && promise.catch) {
        promise.catch(function() {
          video.controls = true;
        });
      }
    }
    if (trigger) {
      trigger.addEventListener('click', play);
    }
    video.addEventListener('click', function() {
      if (!loaded || video.paused) {
        play();
      } else {
        video.pause();
      }
    });
    window.addEventListener('pagehide', function() {
      if (hls && hls.destroy) {
        hls.destroy();
      }
    });
  };

  document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initHero();
    initFilters();
    initSearchPage();
  });
})();
