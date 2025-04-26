const tasks = {
    session1: {
        easy: {
            title: "Color All Paragraphs",
            description: [
                "Create a function that changes the text color of all paragraphs in a document",
                "Requirements:",
                "- Function should be named `colorParagraphs`",
                "- Should target all `<p>` elements in the document",
                "- Should change text color to blue",
                "- Should work on any HTML document"
            ],
            hints: [
                "Use document.querySelectorAll() to select all paragraphs",
                "Remember that querySelectorAll returns a NodeList, which you can iterate over",
                "Use element.style.color to change the text color"
            ],
            maxScore: 10,
            hintPenalty: 2 // points deducted per hint used
        },
        medium: {
            title: "Toggle Class by Data Attribute",
            description: [
                "Implement a function that toggles a CSS class on elements based on a data attribute",
                "The function should:",
                "- Accept two parameters: attribute name and class name",
                "- Find all elements with the specified data attribute",
                "- Toggle the specified class on those elements",
                "- Handle cases where elements might not exist"
            ],
            hints: [
                "Data attributes can be selected using querySelectorAll with [data-*] syntax",
                "Consider using classList.toggle() for the class manipulation"
            ],
            maxScore: 15,
            hintPenalty: 3
        },
        hard: {
            title: "Find Deepest Element",
            description: [
                "Given a DOM tree, find the element that is nested the deepest",
                "Considerations:",
                "- The deepest element might be anywhere in the document",
                "- Multiple elements might have the same depth",
                "- The solution should work efficiently on large documents"
            ],
            hints: [
                "Think about using recursion to traverse the DOM tree"
            ],
            maxScore: 20,
            hintPenalty: 5
        }
    }
    // Other sessions will be added here
};

export default tasks; 