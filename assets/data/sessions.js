const sessions = {
    session1: {
        title: "DOM Selectors & Inspection",
        week: 1,
        overview: {
            title: "Overview",
            content: "In this session, we'll explore how to effectively select and inspect elements in the Document Object Model (DOM). You'll learn about different selector methods and their use cases."
        },
        learningGoals: {
            title: "Learning Goals",
            goals: [
                "Select any element(s) efficiently with native DOM APIs",
                "Explain difference between NodeList & HTMLCollection"
            ]
        },
        quiz: {
            title: "Quiz",
            questions: [
                {
                    id: "q1",
                    type: "single",
                    question: "Which method is faster: getElementById or querySelector?",
                    options: [
                        { value: "a", text: "getElementById" },
                        { value: "b", text: "querySelector" },
                        { value: "c", text: "They're equal" }
                    ],
                    correctAnswer: "a"
                },
                {
                    id: "q2",
                    type: "single",
                    question: "What does querySelectorAll return?",
                    options: [
                        { value: "a", text: "HTMLCollection" },
                        { value: "b", text: "NodeList" },
                        { value: "c", text: "Array" }
                    ],
                    correctAnswer: "b"
                },
                {
                    id: "q3",
                    type: "single",
                    question: "True or False: NodeList is a live collection",
                    options: [
                        { value: "a", text: "True" },
                        { value: "b", text: "False" }
                    ],
                    correctAnswer: "b"
                },
                {
                    id: "q4",
                    type: "single",
                    question: "Which code selects an element with data-user='123'?",
                    options: [
                        { value: "a", text: "querySelector('[data-user=\"123\"]')" },
                        { value: "b", text: "getElementById('data-user')" },
                        { value: "c", text: "getElementsByData('123')" }
                    ],
                    correctAnswer: "a"
                },
                {
                    id: "q5",
                    type: "single",
                    question: "True or False: getElementsByClassName returns a NodeList",
                    options: [
                        { value: "a", text: "True" },
                        { value: "b", text: "False" }
                    ],
                    correctAnswer: "b"
                }
            ]
        },
        tasks: {
            title: "Tasks",
            tasks: [
                {
                    id: "task1",
                    difficulty: "easy",
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
                    hintPenalty: 2
                },
                {
                    id: "task2",
                    difficulty: "medium",
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
                {
                    id: "task3",
                    difficulty: "hard",
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
            ]
        },
        resources: {
            title: "Resources",
            categories: [
                {
                    title: "MDN Documentation",
                    links: [
                        {
                            title: "querySelector",
                            url: "https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector",
                            description: "Learn how to select single elements using CSS selectors"
                        },
                        {
                            title: "querySelectorAll",
                            url: "https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll",
                            description: "Master selecting multiple elements and working with NodeLists"
                        }
                    ]
                },
                {
                    title: "Video Tutorials",
                    links: [
                        {
                            title: "DOM Selectors Explained",
                            url: "https://www.youtube.com/watch?v=0ik6X4DJqcg",
                            description: "15-minute video covering all selector methods with examples"
                        }
                    ]
                }
            ]
        }
    }
    // Other sessions will be added here
};

export default sessions; 