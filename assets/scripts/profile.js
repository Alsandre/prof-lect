import { setupSmoothNavigation } from './helpers/navigation.js';
import { userData } from '../data/userData.js';

document.addEventListener('DOMContentLoaded', () => {
    setupSmoothNavigation('.profile-nav a');
    initializeProfile();
    setupProgressChart();
});

// Initialize profile data
function initializeProfile() {
    const { profile, progress, achievements } = userData;
    
    // Update profile header
    document.querySelector('.initials').textContent = profile.avatarInitials;
    document.querySelector('.profile-details h3').textContent = profile.name;
    document.querySelector('.email').textContent = profile.email;
    document.querySelector('.join-date').textContent = `Joined: ${profile.joinDate}`;
    
    // Update stats
    document.querySelectorAll('.stat-item').forEach((item, index) => {
        const statValue = item.querySelector('.stat-value');
        const statLabel = item.querySelector('.stat-label');
        
        switch(index) {
            case 0:
                statValue.textContent = profile.stats.sessionsCompleted;
                statLabel.textContent = 'Sessions Completed';
                break;
            case 1:
                statValue.textContent = `${profile.stats.averageScore}%`;
                statLabel.textContent = 'Average Score';
                break;
            case 2:
                statValue.textContent = profile.stats.tasksCompleted;
                statLabel.textContent = 'Tasks Completed';
                break;
        }
    });
    
    // Update progress chart
    const chartBars = document.querySelectorAll('.chart-bar');
    chartBars.forEach((bar, index) => {
        bar.style.setProperty('--progress', `${progress.sessionCompletion[index]}%`);
    });
    
    // Update activity feed
    const activityList = document.querySelector('.activity-list');
    activityList.innerHTML = progress.recentActivity.map(activity => `
        <li>
            <span class="activity-date">${activity.date}</span>
            <span class="activity-text">${activity.text}</span>
            <span class="activity-score">${activity.score}</span>
        </li>
    `).join('');
    
    // Update achievements
    const achievementsGrid = document.querySelector('.achievements-grid');
    achievementsGrid.innerHTML = achievements.map(achievement => `
        <div class="achievement-card">
            <div class="achievement-icon">${achievement.icon}</div>
            <h3>${achievement.title}</h3>
            <p>${achievement.description}</p>
        </div>
    `).join('');
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
    // This function can be used when we have real API integration
    console.log('Updating profile data:', data);
}

// Handle achievement unlocks
function handleAchievementUnlock(achievementId) {
    // This function can be used when we have real API integration
    console.log('Achievement unlocked:', achievementId);
}

// Update activity feed
function updateActivityFeed(activities) {
    // This function can be used when we have real API integration
    console.log('Updating activity feed:', activities);
} 