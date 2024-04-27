// Function to toggle the sidebar
function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var hamburgerBars = document.querySelectorAll('.hamburger div');

    if (sidebar.style.width === '350px') {
        sidebar.style.width = '0';
        hamburgerBars.forEach(function(bar) {
            bar.style.transform = 'rotate(0deg)';
        });
    } else {
        sidebar.style.width = '350px';
        hamburgerBars[0].style.transform = 'rotate(-45deg)';
        hamburgerBars[1].style.opacity = '0';
        hamburgerBars[2].style.transform = 'rotate(45deg)';
    }
}

// Add event listener for the hamburger menu button
var hamburgerButton = document.querySelector('.hamburger');
hamburgerButton.addEventListener('click', toggleSidebar);

// Function to scroll to a specific section
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        toggleSidebar(); // Close sidebar after clicking a link
    }
}

// Function to toggle the visibility of the container
function toggleContainer() {
    var container = document.getElementById('container');
    var currentLeft = parseInt(window.getComputedStyle(container).left);

    container.style.left = (currentLeft === 0) ? '-100%' : '0';
}

// Function to toggle the visibility of options-container
function toggleOptions() {
    var optionsContainer = document.getElementById("options-container");
    optionsContainer.style.display = (optionsContainer.style.display === "none") ? "block" : "none";
}

// Function to scroll to the top of the page slowly
function scrollToTop() {
    var duration = 900; // 5 seconds
    var numSteps = duration / 15; // Adjust the divisor to control the smoothness
    var scrollStep = -window.scrollY / numSteps; // Negative value to scroll up

    var interval = setInterval(function() {
        window.scrollBy(0, scrollStep);
        if (window.scrollY === 0) {
            clearInterval(interval);
        }
    }, 15);
}

// Function to scroll to a specific element
function scrollToElement(elementId, offset) {
    var element = document.getElementById(elementId);
    if (element) {
        var currentScroll = window.scrollY;
        var targetScroll = element.getBoundingClientRect().top + currentScroll - offset;

        window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
        });
    }
}

// Function to toggle audio play/pause and highlight text
function toggleAudio(index) {
    var audio = document.querySelectorAll('.audio')[index];
    var audioText = document.getElementById('audioText' + index);

    if (audio.paused) {
        audio.play();
        audioText.classList.add('highlight');
    } else {
        audio.pause();
        audioText.classList.remove('highlight');
    }

    // Add event listener for when audio ends
    audio.addEventListener('ended', function() {
        // Remove highlight after 2 seconds
        setTimeout(function() {
            audioText.classList.remove('highlight');
        }, 2000); // 2000 milliseconds = 2 seconds
    });
}

// Function to play all audio elements sequentially with a delay between them
function playAllAudios(delayInSeconds) {
    var audioElements = document.querySelectorAll('.audio');
    var delayInMillis = delayInSeconds * 1000; // Convert delay to milliseconds

    // Helper function to play the next audio after the previous one finishes
    function playNextAudio(index) {
        if (index < audioElements.length) {
            var audio = audioElements[index];
            var audioText = document.getElementById('audioText' + index);

            audio.play();
            audioText.classList.add('highlight');

            // Add event listener for when audio ends
            audio.addEventListener('ended', function() {
                // Remove highlight after 2 seconds
                setTimeout(function() {
                    audioText.classList.remove('highlight');
                }, 2000); // 2000 milliseconds = 2 seconds

                // Play the next audio after the delay
                setTimeout(function() {
                    playNextAudio(index + 1);
                }, delayInMillis);
            });
        }
    }

    // Start playing the first audio
    playNextAudio(0);
}

// Add event listeners to the dropdown toggle icons
var dropdownToggleIcons = document.querySelectorAll('.dropdown-toggle i.fa-caret-down');
dropdownToggleIcons.forEach(function(icon) {
    icon.addEventListener('click', function() {
        var dropdownContainer = this.parentElement.nextElementSibling;
        dropdownContainer.classList.toggle('show');
    });
});


document.getElementById('reloadPage').addEventListener('click', function() {
    // Reload the page when the button is clicked
    location.reload();
});




//Toggle Button Functionality for Adjusting the Size of the Youtube Video:

document.addEventListener("DOMContentLoaded", function() {
    var videoContainer = document.getElementById("video-container");
    var toggleButton = document.getElementById("toggleButton");
    var isToggled = false;
    
    toggleButton.addEventListener("click", function() {
        if (isToggled) {
            videoContainer.classList.remove("newStyle");
            isToggled = false;
        } else {
            videoContainer.classList.add("newStyle");
            isToggled = true;
        }
    });
});