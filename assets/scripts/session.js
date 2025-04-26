document.addEventListener('DOMContentLoaded', () => {
    setupQuizForm();
    setupTaskSubmissions();
    setupNavigation();
});

// Setup quiz form submission
function setupQuizForm() {
    const quizForm = document.getElementById('quiz-form');
    if (!quizForm) return;

    quizForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Collect answers
        const answers = {
            q1: quizForm.querySelector('input[name="q1"]:checked')?.value,
            q2: quizForm.querySelector('input[name="q2"]:checked')?.value
        };

        // WAITING FOR BACK
        // This will be replaced with actual backend submission
        console.log('Quiz answers:', answers);
        
        // Show feedback
        showQuizFeedback(answers);
    });
}

// Show quiz feedback
function showQuizFeedback(answers) {
    // WAITING FOR BACK
    // This will be replaced with actual feedback from backend
    const feedback = {
        score: 0,
        correctAnswers: {
            q1: 'a',
            q2: 'b'
        }
    };

    // Calculate score
    let score = 0;
    for (const [question, answer] of Object.entries(answers)) {
        if (answer === feedback.correctAnswers[question]) {
            score++;
        }
    }

    // Show feedback to user
    alert(`Quiz submitted! Your score: ${score}/${Object.keys(answers).length}`);
}

// Setup task submissions
function setupTaskSubmissions() {
    const taskButtons = document.querySelectorAll('.submit-task');
    taskButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const taskCard = e.target.closest('.task-card');
            const difficulty = taskCard.classList.contains('difficulty-easy') ? 'easy' :
                             taskCard.classList.contains('difficulty-medium') ? 'medium' : 'strong';
            
            const code = taskCard.querySelector('code').textContent;
            
            // WAITING FOR BACK
            // This will be replaced with actual backend submission
            console.log(`Task submitted - Difficulty: ${difficulty}, Code:`, code);
            
            // Show submission confirmation
            alert('Task submitted successfully!');
        });
    });
}

// Setup smooth navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.session-nav a');
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