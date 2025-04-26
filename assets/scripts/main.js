// Session data structure
const sessions = [
    {
        id: 'session1',
        title: 'DOM Selectors & Inspection',
        week: 1,
        session: 1,
        summary: 'Learn about DOM selectors and how to inspect elements effectively.',
        learningGoals: [
            'Select any element(s) efficiently with native DOM APIs',
            'Explain difference between NodeList & HTMLCollection'
        ]
    },
    // More sessions will be added here
];

// Student profile data structure
const studentProfile = {
    name: '',
    email: '',
    progress: {
        completedSessions: [],
        quizScores: {},
        taskCompletions: {}
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    loadSessions();
    setupNavigation();
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

// Setup smooth navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
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