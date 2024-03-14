document.addEventListener("DOMContentLoaded", function () {
    var carousels = document.querySelectorAll(".carousel");
    var containers = document.querySelectorAll('.draggable-container');
    var isDragging = Array.from({ length: containers.length }, () => false);
    var startPosition = Array.from({ length: containers.length }, () => 0);
    var startScrollLeft = Array.from({ length: containers.length }, () => 0);

    containers.forEach(function (container, index) {
        const initScroll = (e) => {
            if (isDragging.some(dragging => dragging)) {
                return;
            }

            isDragging[index] = true;

            if (e.touches)
                startPosition[index] = e.touches[0].clientX;
            else startPosition[index] = e.clientX;

            startScrollLeft[index] = container.scrollLeft;
            carousels[index].classList.add('dragging');

            pauseVideos(container);
        }

        const updateScroll = (e) => {
            isDragging.forEach(function (dragging, i) {
                if (dragging) {
                    var delta;

                    if (e.touches)
                        delta = e.touches[0].clientX - startPosition[i];
                    else delta = e.clientX - startPosition[i];

                    containers[i].scrollLeft = startScrollLeft[i] - delta;
                }
            });
        }

        const endScroll = (e) => {
            isDragging.forEach(function (dragging, i) {
                if (dragging) {
                    carousels[i].classList.remove('dragging');
                    isDragging[i] = false;
                }
            });

            resumeVideos(container);
        }

        container.addEventListener('mousedown', initScroll);
        container.addEventListener('touchstart', initScroll);

        document.addEventListener('mousemove', updateScroll);
        document.addEventListener('touchmove', updateScroll);

        document.addEventListener('mouseup', endScroll);
        document.addEventListener('touchend', endScroll);

        enableVideoControls(container);
    });

    function pauseVideos(container) {
        var videos = container.querySelectorAll('video');
        videos.forEach(function (video) {
            video.pause();
        });
    }

    function resumeVideos(container) {
        var videos = container.querySelectorAll('video');
        videos.forEach(function (video) {
            if (!video.paused) {
                video.play();
            }
        });
    }

    function enableVideoControls(container) {
        var videos = container.querySelectorAll('video');
        videos.forEach(function (video) {
            video.addEventListener('click', function () {
                // Pause all other videos
                pauseVideos(container);

                // Play or pause the clicked video
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        });
    }

    // Toggle fullscreen menu
    var fullscreenMenu = document.getElementById('fullscreenMenu');
    var infoButton = document.getElementById('infoButton');

    infoButton.addEventListener('click', function () {
        if (fullscreenMenu.style.width === '100%' && window.innerWidth > 768) {
            fullscreenMenu.style.width = '0';
        } else {
            fullscreenMenu.style.width = '100%';
        }
    });

    // Toggle Info popup
    var infoContainer = document.getElementById('infoButton');

    infoContainer.addEventListener('click', function () {
        var additionalContent = document.querySelector('.additional-content');
        additionalContent.parentElement.classList.toggle('active');
    });

    // Smooth scrolling motion
    var lastScrollTop = 0;

    window.addEventListener('scroll', function () {
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Downscrolling
            // Add your animation or motion effects here
        } else {
            // Upscrolling
            // Add your animation or motion effects here
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
});

document.getElementById("infoButton").addEventListener("click", function(event) {
    event.preventDefault();
    var additionalContent = document.getElementById("infoContent");
    additionalContent.style.display = additionalContent.style.display === "block" ? "none" : "block";
});

document.getElementById("infoButton").addEventListener("click", function(event) {
    event.preventDefault();
    var infoButton = document.getElementById("infoButton");
    infoButton.classList.toggle("clicked");
});