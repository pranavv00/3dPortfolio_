
let moon = document.getElementById('moon');
let text = document.getElementById('text');
let train = document.getElementById('train');

let desertMoon = document.getElementById('desert-moon');
let man = document.getElementById('man');


window.addEventListener('scroll', function(){
    let value = window.scrollY;
    
    if (moon) {
        moon.style.top = value * 0.9 + 'px';
    }
    
    if (text) {
        text.style.top = (80 - value * 0.1) + '%';
    }
    
    if (train) {
        train.style.left = value * 0.5 + 'px';
    }
    
    if (desertMoon) {
        desertMoon.style.top = value * 0.3 + 'px';
    }

        if (man) {
            man.style.left = value * 0.6 + 'px';
        }
    });

    // Music Player Functionality
    const musicToggle = document.getElementById('music-toggle');
    const backgroundMusic = document.getElementById('background-music');
    const musicIcon = document.getElementById('music-icon');
    const musicStatus = document.getElementById('music-status');
    
    let isPlaying = false;
    
    // Set initial volume (50% to avoid being too loud)
    backgroundMusic.volume = 0.5;
    
    // Auto-play music when page loads
    window.addEventListener('load', function() {
        backgroundMusic.play().then(() => {
            musicIcon.className = 'fas fa-pause';
            musicStatus.textContent = 'Now playing';
            isPlaying = true;
        }).catch(error => {
            console.log('Auto-play failed:', error);
            musicStatus.textContent = 'Click to play';
        });
    });
    
    musicToggle.addEventListener('click', function() {
        if (isPlaying) {
            backgroundMusic.pause();
            musicIcon.className = 'fas fa-play';
            musicStatus.textContent = 'Click to play';
            isPlaying = false;
        } else {
            backgroundMusic.play().then(() => {
                musicIcon.className = 'fas fa-pause';
                musicStatus.textContent = 'Now playing';
                isPlaying = true;
            }).catch(error => {
                console.log('Audio play failed:', error);
                musicStatus.textContent = 'Click to play';
            });
        }
    });
    
    // Handle audio events
    backgroundMusic.addEventListener('ended', function() {
        musicIcon.className = 'fas fa-play';
        musicStatus.textContent = 'Click to play';
        isPlaying = false;
    });
    
    backgroundMusic.addEventListener('pause', function() {
        musicIcon.className = 'fas fa-play';
        musicStatus.textContent = 'Click to play';
        isPlaying = false;
    });
    
    backgroundMusic.addEventListener('play', function() {
        musicIcon.className = 'fas fa-pause';
        musicStatus.textContent = 'Now playing';
        isPlaying = true;
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Set home as active on page load and scroll to top
    window.addEventListener('load', function() {
        // Scroll to top of page
        window.scrollTo(0, 0);
        
        // Remove active class from all nav links
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
        });
        // Add active class to home link
        const homeLink = document.querySelector('a[href="#home"]');
        if (homeLink) {
            homeLink.classList.add('active');
        }
    });

    // Also ensure page starts at top on DOM ready
    document.addEventListener('DOMContentLoaded', function() {
        window.scrollTo(0, 0);
    });

