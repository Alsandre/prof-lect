import { sessions } from '../public/assets/data/sessions.js';
import { setupSmoothNavigation } from './helpers/navigation.js';
import { initProfile } from './profile.js';
import { initSession } from './session.js';
import { renderSession } from './sessionRenderer.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    loadSessions();
    setupSmoothNavigation('.main-nav a');
    initializeProfile();
});

// Load sessions into the grid
function loadSessions() {
    const sessionsGrid = document.querySelector('.sessions-grid');
    if (!sessionsGrid) return;

    sessions.forEach(session => {
        const sessionCard = createSessionCard(session);
        sessionsGrid.appendChild(sessionCard);
    });
}

// Create a session card element
function createSessionCard(session) {
    const card = document.createElement('div');
    card.className = 'session-card';
    card.innerHTML = `
        <h3>Week ${session.week} - Session ${session.session}</h3>
        <h4>${session.title}</h4>
        <p>${session.summary}</p>
        <a href="sessions/${session.id}.html" class="btn">View Session</a>
    `;
    return card;
}

// Initialize student profile
function initializeProfile() {
    // WAITING FOR BACK
    // This will be replaced with actual backend integration
    console.log('Profile initialization - waiting for backend');
}

// Handle quiz submission
function handleQuizSubmission(sessionId, answers) {
    // WAITING FOR BACK
    console.log(`Quiz submission for session ${sessionId}:`, answers);
}

// Handle task submission
function handleTaskSubmission(sessionId, taskId, difficulty, solution) {
    // WAITING FOR BACK
    console.log(`Task submission for session ${sessionId}, task ${taskId}, difficulty ${difficulty}:`, solution);
}

// Update progress display
function updateProgressDisplay() {
    const progressStats = document.querySelector('.progress-stats');
    if (!progressStats) return;

    // WAITING FOR BACK
    // This will be replaced with actual progress data from backend
    progressStats.innerHTML = `
        <div class="progress-item">
            <h4>Completed Sessions</h4>
            <p>0/15</p>
        </div>
        <div class="progress-item">
            <h4>Average Quiz Score</h4>
            <p>0%</p>
        </div>
        <div class="progress-item">
            <h4>Tasks Completed</h4>
            <p>0/45</p>
        </div>
    `;
}

// Main entry point for the application
// Get the current page path
const currentPath = window.location.pathname;

// Initialize page-specific functionality
if (currentPath.includes('profile.html')) {
    initProfile();
} else if (currentPath.includes('session')) {
    initSession();
    // For session pages, we also need to load the specific session data
    const sessionId = currentPath.split('/').pop().replace('.html', '') || 'session1';
    import(`../public/assets/data/${sessionId}.js`)
        .then(module => {
            if (module.default) {
                renderSession(module.default);
            }
        })
        .catch(error => {
            console.error('Failed to load session data:', error);
        });
} 