export function renderSession(sessionData) {
    // Set session title and week
    document.querySelectorAll('[data-session-title]').forEach(el => {
        el.textContent = sessionData.title;
    });
    document.querySelector('[data-session-week]').textContent = `Week ${sessionData.week} - Session ${sessionData.week}`;

    // Render overview
    const overviewSection = document.querySelector('#overview');
    overviewSection.querySelector('[data-section-title]').textContent = sessionData.overview.title;
    overviewSection.querySelector('[data-section-content]').textContent = sessionData.overview.content;

    // Render learning goals
    const learningGoalsSection = document.querySelector('#learning-goals');
    learningGoalsSection.querySelector('[data-section-title]').textContent = sessionData.learningGoals.title;
    const goalsList = learningGoalsSection.querySelector('[data-section-content]');
    goalsList.innerHTML = sessionData.learningGoals.goals.map(goal => `<li>${goal}</li>`).join('');

    // Render quiz
    const quizSection = document.querySelector('#quiz');
    quizSection.querySelector('[data-section-title]').textContent = sessionData.quiz.title;
    const quizGrid = quizSection.querySelector('[data-section-content]');
    quizGrid.innerHTML = sessionData.quiz.questions.map((question, index) => `
        <div class="quiz-question">
            <h3>${index + 1}. ${question.question}</h3>
            <div class="quiz-options">
                ${question.options.map(option => `
                    <label>
                        <input type="${question.type === 'single' ? 'radio' : 'checkbox'}" 
                               name="q${index + 1}" 
                               value="${option.value}">
                        ${option.text}
                    </label>
                `).join('')}
            </div>
        </div>
    `).join('');

    // Render tasks
    const tasksSection = document.querySelector('#tasks');
    tasksSection.querySelector('[data-section-title]').textContent = sessionData.tasks.title;
    const tasksContainer = tasksSection.querySelector('[data-section-content]');
    tasksContainer.innerHTML = sessionData.tasks.tasks.map(task => `
        <div class="task-card difficulty-${task.difficulty}">
            <h3>${task.difficulty.charAt(0).toUpperCase() + task.difficulty.slice(1)} Task</h3>
            <div class="task-description">
                <h4>${task.title}</h4>
                <ul>
                    ${task.description.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            <div class="task-hints">
                ${task.hints.map((hint, index) => `
                    <button class="btn-hint">Show Hint ${index + 1} (-${task.hintPenalty} points)</button>
                    <div class="hint-content hidden">${hint}</div>
                `).join('')}
            </div>
            <div class="task-submission">
                <div class="file-selection">
                    <input type="file" id="${task.id}-file" class="file-input" accept=".js,.html,.css">
                    <label for="${task.id}-file" class="btn btn-select">Select File</label>
                </div>
                <div class="selected-file"></div>
                <button class="btn btn-submit hidden">Submit Solution</button>
                <button class="btn btn-remove hidden">Remove File</button>
                <div class="submission-status"></div>
            </div>
        </div>
    `).join('');

    // Render resources
    const resourcesSection = document.querySelector('#resources');
    resourcesSection.querySelector('[data-section-title]').textContent = sessionData.resources.title;
    const resourcesGrid = resourcesSection.querySelector('[data-section-content]');
    resourcesGrid.innerHTML = sessionData.resources.categories.map(category => `
        <div class="resource-card">
            <h3>${category.title}</h3>
            <ul>
                ${category.links.map(link => `
                    <li>
                        <a href="${link.url}" target="_blank">${link.title}</a>
                        <span class="resource-description">${link.description}</span>
                    </li>
                `).join('')}
            </ul>
        </div>
    `).join('');
}