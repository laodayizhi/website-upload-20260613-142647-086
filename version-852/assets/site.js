(function () {
  function $(selector, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(selector));
  }

  var menuButton = document.querySelector(".menu-toggle");
  var mobileNav = document.querySelector(".mobile-nav");

  if (menuButton && mobileNav) {
    menuButton.addEventListener("click", function () {
      mobileNav.classList.toggle("is-open");
    });
  }

  var slides = $(".hero-slide");
  var dots = $(".hero-dot");
  var current = 0;

  function showSlide(index) {
    if (!slides.length) {
      return;
    }

    current = (index + slides.length) % slides.length;

    slides.forEach(function (slide, slideIndex) {
      slide.classList.toggle("is-active", slideIndex === current);
    });

    dots.forEach(function (dot, dotIndex) {
      dot.classList.toggle("is-active", dotIndex === current);
    });
  }

  dots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
      showSlide(index);
    });
  });

  if (slides.length > 1) {
    window.setInterval(function () {
      showSlide(current + 1);
    }, 5200);
  }

  function normalize(value) {
    return String(value || "").toLowerCase().trim();
  }

  function renderSearch(input) {
    var panel = input.parentElement.querySelector(".search-panel");
    var keyword = normalize(input.value);

    if (!panel) {
      return;
    }

    if (!keyword || typeof SEARCH_INDEX === "undefined") {
      panel.classList.remove("is-open");
      panel.innerHTML = "";
      return;
    }

    var results = SEARCH_INDEX.filter(function (item) {
      return normalize(item.title + " " + item.region + " " + item.category + " " + item.genre).indexOf(keyword) !== -1;
    }).slice(0, 10);

    panel.innerHTML = results.map(function (item) {
      return [
        "<a class=\"search-result\" href=\"" + item.url + "\">",
        "<img src=\"" + item.cover + "\" alt=\"" + item.title.replace(/\"/g, "&quot;") + "\" loading=\"lazy\">",
        "<span>",
        "<strong>" + item.title + "</strong>",
        "<em>" + item.year + " · " + item.region + " · " + item.category + "</em>",
        "</span>",
        "</a>"
      ].join("");
    }).join("");

    panel.classList.toggle("is-open", results.length > 0);
  }

  $(".search-input").forEach(function (input) {
    input.addEventListener("input", function () {
      renderSearch(input);
    });

    input.addEventListener("focus", function () {
      renderSearch(input);
    });
  });

  document.addEventListener("click", function (event) {
    $(".nav-search, .mobile-search").forEach(function (box) {
      if (!box.contains(event.target)) {
        var panel = box.querySelector(".search-panel");
        if (panel) {
          panel.classList.remove("is-open");
        }
      }
    });
  });

  $(".page-filter").forEach(function (input) {
    var cards = $(".category-list .movie-card");

    input.addEventListener("input", function () {
      var keyword = normalize(input.value);

      cards.forEach(function (card) {
        var haystack = normalize(card.getAttribute("data-title"));
        card.classList.toggle("is-filter-hidden", keyword && haystack.indexOf(keyword) === -1);
      });
    });
  });
})();
