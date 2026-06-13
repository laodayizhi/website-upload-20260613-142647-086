(function () {
  function closestFormTarget(form) {
    return form.getAttribute('data-search-target') || 'search.html';
  }

  document.querySelectorAll('[data-search-form]').forEach(function (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var input = form.querySelector('input[name="q"]');
      var query = input ? input.value.trim() : '';
      var target = closestFormTarget(form);
      if (query) {
        window.location.href = target + '?q=' + encodeURIComponent(query);
      } else {
        window.location.href = target;
      }
    });
  });

  var toggle = document.querySelector('[data-mobile-toggle]');
  var panel = document.querySelector('[data-mobile-panel]');
  if (toggle && panel) {
    toggle.addEventListener('click', function () {
      panel.classList.toggle('is-open');
    });
  }

  var slides = Array.prototype.slice.call(document.querySelectorAll('[data-hero-slide]'));
  var dots = Array.prototype.slice.call(document.querySelectorAll('[data-hero-dot]'));
  if (slides.length) {
    var index = 0;
    function activate(next) {
      index = (next + slides.length) % slides.length;
      slides.forEach(function (slide, current) {
        slide.classList.toggle('is-active', current === index);
      });
      dots.forEach(function (dot, current) {
        dot.classList.toggle('is-active', current === index);
      });
    }
    dots.forEach(function (dot, current) {
      dot.addEventListener('click', function () {
        activate(current);
      });
    });
    window.setInterval(function () {
      activate(index + 1);
    }, 5200);
  }

  var filterInput = document.querySelector('[data-filter-input]');
  var cards = Array.prototype.slice.call(document.querySelectorAll('[data-movie-card]'));
  var emptyState = document.querySelector('[data-empty-state]');
  function applyFilter(value) {
    var term = value.trim().toLowerCase();
    var visible = 0;
    cards.forEach(function (card) {
      var text = (card.getAttribute('data-search-text') || '').toLowerCase();
      var matched = !term || text.indexOf(term) !== -1;
      card.style.display = matched ? '' : 'none';
      if (matched) {
        visible += 1;
      }
    });
    if (emptyState) {
      emptyState.classList.toggle('is-visible', visible === 0);
    }
  }
  if (filterInput && cards.length) {
    var params = new URLSearchParams(window.location.search);
    var query = params.get('q') || '';
    if (query) {
      filterInput.value = query;
    }
    applyFilter(filterInput.value);
    filterInput.addEventListener('input', function () {
      applyFilter(filterInput.value);
    });
  }
})();
