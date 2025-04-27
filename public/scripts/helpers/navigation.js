/**
 * Handles smooth scrolling for in-page navigation and external links
 * @param {string} selector - CSS selector for navigation links
 * @param {Object} options - Configuration options
 * @param {boolean} options.handleExternalLinks - Whether to handle external links (default: true)
 * @param {string} options.externalLinkClass - Class to add to external links (default: 'external-link')
 */
export function setupSmoothNavigation(selector = '.main-nav a', options = {}) {
    const {
        handleExternalLinks = true,
        externalLinkClass = 'external-link'
    } = options;

    const navLinks = document.querySelectorAll(selector);
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Handle in-page navigation
        if (href.startsWith('#')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
        // Handle external links
        else if (handleExternalLinks && href.startsWith('http')) {
            link.classList.add(externalLinkClass);
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
} 