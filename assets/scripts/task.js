document.addEventListener('DOMContentLoaded', () => {
    setupNavigation();
    setupSubmitForm();
    setupEditor();
});

// Setup smooth navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.task-nav a');
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

// Setup form submission
function setupSubmitForm() {
    const submitForm = document.getElementById('submit-form');
    if (!submitForm) return;

    submitForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const code = document.getElementById('code').value;
        const notes = document.getElementById('notes').value;
        
        if (!code.trim()) {
            alert('Please enter your code before submitting.');
            return;
        }

        // WAITING FOR BACK
        // This will be replaced with actual backend submission
        console.log('Task submission:', { code, notes });
        
        // Show submission confirmation
        alert('Task submitted successfully!');
    });
}

// Setup editor interactions
function setupEditor() {
    // Initialize CodeMirror
    const codeTextarea = document.getElementById('code-editor');
    if (!codeTextarea) return;
    const editor = CodeMirror.fromTextArea(codeTextarea, {
        mode: 'javascript',
        lineNumbers: true,
        theme: 'default',
        indentUnit: 4,
        tabSize: 4,
        lineWrapping: true
    });
    // Set a default template
    editor.setValue('// Write your JavaScript code here\nconsole.log("Hello, world!");');

    // Run button handler
    const runBtn = document.getElementById('run-code');
    const outputFrame = document.getElementById('output-frame');
    if (runBtn && outputFrame) {
        runBtn.addEventListener('click', () => {
            const userCode = editor.getValue();
            // Sandbox the code in the iframe
            const html = `<!DOCTYPE html><html><body><script>try{${userCode}}catch(e){document.body.innerHTML='<pre style=\'color:red\'>'+e+'</pre>';}</script></body></html>`;
            outputFrame.srcdoc = html;
        });
    }

    // Optional: update the submit form textarea with editor content
    const submitForm = document.getElementById('submit-form');
    if (submitForm) {
        submitForm.addEventListener('submit', () => {
            document.getElementById('code').value = editor.getValue();
        });
    }
}

// Helper function to get task parameters from URL
function getTaskParameters() {
    const params = new URLSearchParams(window.location.search);
    return {
        sessionId: params.get('session'),
        taskId: params.get('task'),
        difficulty: params.get('difficulty')
    };
}

// Update task information based on URL parameters
function updateTaskInfo() {
    const params = getTaskParameters();
    if (params.sessionId) {
        document.querySelector('.task-session').textContent = `Session ${params.sessionId}`;
    }
    if (params.difficulty) {
        document.querySelector('.task-difficulty').textContent = `Difficulty: ${params.difficulty}`;
    }
} 