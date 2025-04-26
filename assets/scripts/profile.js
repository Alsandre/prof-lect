document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    initializeProfile();
    setupProgressChart();
});

// Setup smooth navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// Initialize profile data
function initializeProfile() {
    // WAITING FOR BACK
    // This will be replaced with actual backend integration
    console.log('Profile initialization - waiting for backend');
}

// Setup progress chart animation
function setupProgressChart() {
    const chartBars = document.querySelectorAll('.chart-bar');
    chartBars.forEach(bar => {
        const progress = bar.style.getPropertyValue('--progress');
        bar.style.height = '0%';
        
        // Animate the bars after a short delay
        setTimeout(() => {
            bar.style.height = progress;
        }, 100);
    });
}

// Update profile data
function updateProfileData(data) {
    // WAITING FOR BACK
    // This will be replaced with actual backend integration
    console.log('Updating profile data:', data);
}

// Handle achievement unlocks
function handleAchievementUnlock(achievementId) {
    // WAITING FOR BACK
    // This will be replaced with actual backend integration
    console.log('Achievement unlocked:', achievementId);
}

// Update activity feed
function updateActivityFeed(activities) {
    // WAITING FOR BACK
    // This will be replaced with actual backend integration
    console.log('Updating activity feed:', activities);
} 