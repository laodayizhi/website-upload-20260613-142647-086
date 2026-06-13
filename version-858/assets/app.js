(function () {
  var siteReady = false;

  function initSite() {
    if (siteReady) {
      return;
    }
    siteReady = true;

    var toggle = document.querySelector('.mobile-toggle');
    var mobileMenu = document.querySelector('.mobile-menu');
    if (toggle && mobileMenu) {
      toggle.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
      });
    }

    var hero = document.querySelector('.hero-carousel');
    if (hero) {
      var slides = Array.prototype.slice.call(hero.querySelectorAll('.hero-slide'));
      var dots = Array.prototype.slice.call(hero.querySelectorAll('.hero-dot'));
      var current = 0;
      var showSlide = function (index) {
        current = (index + slides.length) % slides.length;
        slides.forEach(function (slide, slideIndex) {
          slide.classList.toggle('active', slideIndex === current);
        });
        dots.forEach(function (dot, dotIndex) {
          dot.classList.toggle('active', dotIndex === current);
        });
      };
      dots.forEach(function (dot) {
        dot.addEventListener('click', function () {
          var target = Number(dot.getAttribute('data-target') || 0);
          showSlide(target);
        });
      });
      if (slides.length > 1) {
        setInterval(function () {
          showSlide(current + 1);
        }, 5000);
      }
    }

    var params = new URLSearchParams(window.location.search);
    var query = params.get('q');
    var initialSearch = document.querySelector('.catalog-search');
    if (initialSearch && query) {
      initialSearch.value = query;
    }

    document.querySelectorAll('.catalog-panel').forEach(function (panel) {
      var searchInput = panel.querySelector('.catalog-search');
      var yearSelect = panel.querySelector('.filter-year');
      var regionSelect = panel.querySelector('.filter-region');
      var cards = Array.prototype.slice.call(panel.querySelectorAll('.movie-card'));
      var runFilter = function () {
        var keyword = ((searchInput && searchInput.value) || '').trim().toLowerCase();
        var year = (yearSelect && yearSelect.value) || '';
        var region = (regionSelect && regionSelect.value) || '';
        var visible = 0;
        cards.forEach(function (card) {
          var haystack = [
            card.dataset.title,
            card.dataset.region,
            card.dataset.year,
            card.dataset.genre,
            card.dataset.tags
          ].join(' ').toLowerCase();
          var okKeyword = !keyword || haystack.indexOf(keyword) !== -1;
          var okYear = !year || card.dataset.year === year;
          var okRegion = !region || card.dataset.region === region;
          var show = okKeyword && okYear && okRegion;
          card.classList.toggle('is-filtered-out', !show);
          if (show) {
            visible += 1;
          }
        });
        panel.classList.toggle('is-empty', visible === 0);
      };
      if (searchInput) {
        searchInput.addEventListener('input', runFilter);
      }
      if (yearSelect) {
        yearSelect.addEventListener('change', runFilter);
      }
      if (regionSelect) {
        regionSelect.addEventListener('change', runFilter);
      }
      runFilter();
    });
  }

  function initPlayer(videoId, overlayId, source) {
    var video = document.getElementById(videoId);
    var overlay = document.getElementById(overlayId);
    if (!video || !overlay || !source) {
      return;
    }

    var ready = false;
    var attach = function () {
      if (ready) {
        return;
      }
      ready = true;
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = source;
      } else if (window.Hls && window.Hls.isSupported()) {
        var hls = new window.Hls({
          enableWorker: true,
          lowLatencyMode: true,
          backBufferLength: 90
        });
        hls.loadSource(source);
        hls.attachMedia(video);
      } else {
        video.src = source;
      }
    };

    var start = function () {
      attach();
      overlay.classList.add('is-hidden');
      video.controls = true;
      var playPromise = video.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(function () {});
      }
    };

    attach();
    overlay.addEventListener('click', start);
    video.addEventListener('click', function () {
      if (video.paused) {
        start();
      }
    });
    video.addEventListener('play', function () {
      overlay.classList.add('is-hidden');
    });
  }

  window.initSite = initSite;
  window.initPlayer = initPlayer;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSite);
  } else {
    initSite();
  }
})();
