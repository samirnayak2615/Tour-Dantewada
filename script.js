document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('header nav ul li a');
    const sections = document.querySelectorAll('section');
    const galleryLink = document.querySelector('a[href="gallery.html"]');

    navLinks.forEach(link => {
        if (link !== galleryLink) {
            link.addEventListener('click', (event) => {
                event.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Banner functionality
    let banners = document.querySelectorAll('.banner');
    let currentBannerIndex = 0;
    let nextButton = document.getElementById('next');
    let prevButton = document.getElementById('prev');

    function showBanner(index) {
        banners.forEach((banner, i) => {
            if (i === index) {
                banner.style.opacity = '1';
                banner.style.transform = 'scale(1)';
            } else {
                banner.style.opacity = '0';
                banner.style.transform = 'scale(1.1)';
            }
        });
    }

    nextButton.addEventListener('click', function() {
        currentBannerIndex = (currentBannerIndex + 1) % banners.length;
        showBanner(currentBannerIndex);
    });

    prevButton.addEventListener('click', function() {
        currentBannerIndex = (currentBannerIndex - 1 + banners.length) % banners.length;
        showBanner(currentBannerIndex);
    });

    // Initialize the first banner
    showBanner(currentBannerIndex);

    // Add automatic scrolling every 5 seconds
    setInterval(function() {
        currentBannerIndex = (currentBannerIndex + 1) % banners.length;
        showBanner(currentBannerIndex);
    }, 5000);

    // Video Ad Close Functionality
    const videoAdContainer = document.getElementById('videoAd');
    const closeVideoAdButton = document.getElementById('closeVideoAd');

    console.log('Video Ad Container:', videoAdContainer); // Check if the element is correctly selected
    console.log('Close Video Ad Button:', closeVideoAdButton); // Check if the element is correctly selected

    closeVideoAdButton.addEventListener('click', function() {
        console.log('Close button clicked'); // Log the click event
        videoAdContainer.style.display = 'none';
    });
});

