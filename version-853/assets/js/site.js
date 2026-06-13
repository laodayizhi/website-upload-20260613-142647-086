(function () {
    function ready(fn) {
        if (document.readyState !== 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    function normalize(value) {
        return String(value || '').toLowerCase().trim();
    }

    ready(function () {
        var menuButton = document.querySelector('.js-menu-button');
        var mobileNav = document.querySelector('.js-mobile-nav');
        if (menuButton && mobileNav) {
            menuButton.addEventListener('click', function () {
                mobileNav.classList.toggle('is-open');
            });
        }

        document.querySelectorAll('.js-search-form').forEach(function (form) {
            form.addEventListener('submit', function (event) {
                var input = form.querySelector('input[name="q"]');
                var value = input ? input.value.trim() : '';
                if (!value) {
                    event.preventDefault();
                    if (input) {
                        input.focus();
                    }
                }
            });
        });

        var carousel = document.querySelector('.js-hero-carousel');
        if (carousel) {
            var slides = Array.prototype.slice.call(carousel.querySelectorAll('[data-hero-slide]'));
            var dots = Array.prototype.slice.call(carousel.querySelectorAll('[data-hero-dot]'));
            var current = 0;
            var timer = null;

            function show(index) {
                if (!slides.length) {
                    return;
                }
                current = (index + slides.length) % slides.length;
                slides.forEach(function (slide, i) {
                    slide.classList.toggle('is-active', i === current);
                });
                dots.forEach(function (dot, i) {
                    dot.classList.toggle('is-active', i === current);
                });
            }

            function start() {
                stop();
                timer = window.setInterval(function () {
                    show(current + 1);
                }, 5200);
            }

            function stop() {
                if (timer) {
                    window.clearInterval(timer);
                    timer = null;
                }
            }

            dots.forEach(function (dot, index) {
                dot.addEventListener('click', function () {
                    show(index);
                    start();
                });
            });

            carousel.addEventListener('mouseenter', stop);
            carousel.addEventListener('mouseleave', start);
            show(0);
            start();
        }

        document.querySelectorAll('.js-local-filter').forEach(function (input) {
            var scope = document.querySelector('.js-filter-scope');
            if (!scope) {
                return;
            }
            var cards = Array.prototype.slice.call(scope.querySelectorAll('.movie-card'));
            input.addEventListener('input', function () {
                var keyword = normalize(input.value);
                cards.forEach(function (card) {
                    var text = normalize(card.getAttribute('data-search'));
                    card.style.display = !keyword || text.indexOf(keyword) !== -1 ? '' : 'none';
                });
            });
        });

        document.querySelectorAll('.movie-player').forEach(function (player) {
            var video = player.querySelector('video');
            var trigger = player.querySelector('.js-player-trigger');
            var stream = player.getAttribute('data-stream');
            var loaded = false;
            var hls = null;

            function loadAndPlay() {
                if (!video || !stream) {
                    return;
                }
                if (!loaded) {
                    if (video.canPlayType('application/vnd.apple.mpegurl')) {
                        video.src = stream;
                    } else if (window.Hls && window.Hls.isSupported()) {
                        hls = new window.Hls({
                            enableWorker: true,
                            lowLatencyMode: true
                        });
                        hls.loadSource(stream);
                        hls.attachMedia(video);
                    } else {
                        video.src = stream;
                    }
                    loaded = true;
                }
                player.classList.add('is-playing');
                var promise = video.play();
                if (promise && typeof promise.catch === 'function') {
                    promise.catch(function () {
                        player.classList.remove('is-playing');
                    });
                }
            }

            if (trigger) {
                trigger.addEventListener('click', loadAndPlay);
            }
            if (video) {
                video.addEventListener('click', function () {
                    if (video.paused) {
                        loadAndPlay();
                    } else {
                        video.pause();
                    }
                });
                video.addEventListener('play', function () {
                    player.classList.add('is-playing');
                });
                video.addEventListener('ended', function () {
                    player.classList.remove('is-playing');
                });
            }
            window.addEventListener('beforeunload', function () {
                if (hls && typeof hls.destroy === 'function') {
                    hls.destroy();
                }
            });
        });

        var resultsRoot = document.querySelector('.js-search-results');
        if (resultsRoot && window.SEARCH_INDEX) {
            var params = new URLSearchParams(window.location.search);
            var query = params.get('q') || '';
            var input = document.querySelector('.js-search-page-input');
            var title = document.querySelector('.js-search-title');
            if (input) {
                input.value = query;
            }
            var keyword = normalize(query);
            if (!keyword) {
                resultsRoot.innerHTML = '<div class="empty-state">输入关键词查找影片</div>';
                return;
            }
            var words = keyword.split(/\s+/).filter(Boolean);
            var results = window.SEARCH_INDEX.filter(function (item) {
                var haystack = normalize([
                    item.title,
                    item.region,
                    item.type,
                    item.year,
                    item.genre,
                    item.category,
                    item.tags,
                    item.oneLine
                ].join(' '));
                return words.every(function (word) {
                    return haystack.indexOf(word) !== -1;
                });
            }).slice(0, 120);
            if (title) {
                title.textContent = '“' + query + '” 搜索结果';
            }
            if (!results.length) {
                resultsRoot.innerHTML = '<div class="empty-state">暂未找到相关影片</div>';
                return;
            }
            resultsRoot.innerHTML = results.map(function (item) {
                return [
                    '<article class="movie-card movie-card--wide">',
                    '<a class="wide-poster" href="./' + item.file + '">',
                    '<img src="' + item.cover + '" alt="' + escapeHtml(item.title) + '" loading="lazy">',
                    '<span class="poster-play"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"></path></svg></span>',
                    '</a>',
                    '<div class="wide-info">',
                    '<a class="movie-title" href="./' + item.file + '">' + highlight(item.title, keyword) + '</a>',
                    '<p class="movie-meta">' + escapeHtml(item.region) + ' · ' + escapeHtml(item.year) + ' · ' + escapeHtml(item.type) + '</p>',
                    '<p class="movie-desc">' + highlight(item.oneLine, keyword) + '</p>',
                    '<div class="tag-row"><a href="./' + item.categoryFile + '">' + escapeHtml(item.category) + '</a><span>' + escapeHtml(item.genre) + '</span></div>',
                    '</div>',
                    '</article>'
                ].join('');
            }).join('');
        }
    });

    function escapeHtml(value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function highlight(value, keyword) {
        var safe = escapeHtml(value);
        var raw = String(keyword || '').trim();
        if (!raw) {
            return safe;
        }
        var first = raw.split(/\s+/)[0];
        if (!first) {
            return safe;
        }
        var escaped = first.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        try {
            return safe.replace(new RegExp('(' + escaped + ')', 'gi'), '<mark>$1</mark>');
        } catch (error) {
            return safe;
        }
    }
}());
