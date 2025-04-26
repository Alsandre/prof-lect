document.addEventListener('DOMContentLoaded', () => {
    setupQuizForm();
    setupTaskSubmissions();
    setupNavigation();
    setupHints();
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

// Setup hints system
function setupHints() {
    document.querySelectorAll('.btn-hint').forEach(button => {
        button.addEventListener('click', function() {
            const hintContent = this.nextElementSibling;
            if (hintContent && hintContent.classList.contains('hint-content')) {
                hintContent.classList.remove('hidden');
                this.disabled = true;
                this.style.opacity = '0.5';
                this.style.cursor = 'not-allowed';
                
                // In the future, this will deduct points from the score
                const penalty = parseInt(this.textContent.match(/\(-(\d+)/)[1]);
                console.log(`Hint used: -${penalty} points`);
            }
        });
    });
}

// Setup task submissions
function setupTaskSubmissions() {
    document.querySelectorAll('.task-card').forEach(taskCard => {
        const fileInput = taskCard.querySelector('.file-input');
        const fileSelection = taskCard.querySelector('.file-selection');
        const selectedFileSpan = taskCard.querySelector('.selected-file');
        const submitBtn = taskCard.querySelector('.btn-submit');
        const removeBtn = taskCard.querySelector('.btn-remove');
        const statusDiv = taskCard.querySelector('.submission-status');

        // Function to handle file selection/acceptance
        function handleFile(file) {
            selectedFileSpan.textContent = file.name;
            selectedFileSpan.classList.remove('hidden');
            fileSelection.classList.add('hidden');
            submitBtn.classList.remove('hidden');
            removeBtn.classList.remove('hidden');
        }

        // Handle file selection via input
        fileInput.addEventListener('change', function() {
            if (this.files.length > 0) {
                handleFile(this.files[0]);
            }
        });

        // Handle drag and drop
        taskCard.addEventListener('dragover', (e) => {
            e.preventDefault();
            e.stopPropagation();
            taskCard.classList.add('drag-over');
        });

        taskCard.addEventListener('dragleave', (e) => {
            e.preventDefault();
            e.stopPropagation();
            taskCard.classList.remove('drag-over');
        });

        taskCard.addEventListener('drop', (e) => {
            e.preventDefault();
            e.stopPropagation();
            taskCard.classList.remove('drag-over');

            const files = e.dataTransfer.files;
            if (files.length > 0) {
                handleFile(files[0]);
                // Update the file input to match the dropped file
                fileInput.files = files;
            }
        });

        // Handle remove file button
        removeBtn.addEventListener('click', function() {
            fileInput.value = '';
            selectedFileSpan.textContent = '';
            selectedFileSpan.classList.add('hidden');
            fileSelection.classList.remove('hidden');
            submitBtn.classList.add('hidden');
            removeBtn.classList.add('hidden');
            statusDiv.classList.add('hidden');
            statusDiv.textContent = '';
        });

        // Handle submit button
        submitBtn.addEventListener('click', function() {
            const file = fileInput.files[0];
            if (!file) return;

            // Create FormData object
            const formData = new FormData();
            formData.append('file', file);
            formData.append('taskId', taskCard.id);

            statusDiv.className = 'submission-status success';

            // Send file to backend
            fetch('/api/submit-task', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    statusDiv.textContent = 'Solution submitted successfully!';
                    statusDiv.classList.remove('hidden');
                    
                    // Reset the form after successful submission
                    setTimeout(() => {
                        fileInput.value = '';
                        selectedFileSpan.textContent = '';
                        selectedFileSpan.classList.add('hidden');
                        fileSelection.classList.remove('hidden');
                        submitBtn.classList.add('hidden');
                        removeBtn.classList.add('hidden');
                        statusDiv.classList.add('hidden');
                        statusDiv.textContent = '';
                    }, 3000);
                } else {
                    statusDiv.textContent = 'Error submitting solution. Please try again.';
                    statusDiv.classList.remove('hidden');
                    statusDiv.className = 'submission-status error';
                }
            })
            .catch(error => {
                statusDiv.textContent = 'Error submitting solution. Please try again.';
                statusDiv.classList.remove('hidden');
                statusDiv.className = 'submission-status error';
                console.error('Error:', error);
            });
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