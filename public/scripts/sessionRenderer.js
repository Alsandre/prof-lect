export function renderSession(sessionData) {
    try {
        // Helper function to safely set text content
        const setTextContent = (selector, text) => {
            const element = document.querySelector(selector);
            if (element) {
                element.textContent = text;
            } else {
                console.warn(`Element not found: ${selector}`);
            }
        };

        // Set session title and week
        document.querySelectorAll('[data-session-title]').forEach(el => {
            el.textContent = sessionData.title;
        });
        setTextContent('[data-session-week]', `Week ${sessionData.week} - Session ${sessionData.session}`);

        // Render overview
        const overviewSection = document.querySelector('#overview');
        if (overviewSection) {
            setTextContent('#overview [data-section-title]', sessionData.overview.title);
            setTextContent('#overview [data-section-content]', sessionData.overview.content);
        }

        // Render learning goals
        const learningGoalsSection = document.querySelector('#learning-goals');
        if (learningGoalsSection) {
            setTextContent('#learning-goals [data-section-title]', sessionData.learningGoals.title);
            const goalsList = learningGoalsSection.querySelector('[data-section-content]');
            if (goalsList) {
                goalsList.innerHTML = sessionData.learningGoals.goals.map(goal => `<li>${goal}</li>`).join('');
            }
        }

        // Render quiz
        const quizSection = document.querySelector('#quiz');
        if (quizSection) {
            setTextContent('#quiz [data-section-title]', sessionData.quiz.title);
            const quizGrid = quizSection.querySelector('[data-section-content]');
            if (quizGrid) {
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
            }
        }

        // Render tasks
        const tasksSection = document.querySelector('#tasks');
        if (tasksSection) {
            setTextContent('#tasks [data-section-title]', sessionData.tasks.title);
            const tasksContainer = tasksSection.querySelector('[data-section-content]');
            if (tasksContainer) {
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
            }
        }

        // Render resources
        const resourcesSection = document.querySelector('#resources');
        if (resourcesSection) {
            setTextContent('#resources [data-section-title]', sessionData.resources.title);
            const resourcesGrid = resourcesSection.querySelector('[data-section-content]');
            if (resourcesGrid) {
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
        }
    } catch (error) {
        console.error('Error rendering session:', error);
        // You might want to show a user-friendly error message here
    }
}