export const userData = {
    profile: {
        name: "John Student",
        email: "john.student@example.com",
        joinDate: "January 1970",
        avatarInitials: "JD",
        stats: {
            sessionsCompleted: 15,
            averageScore: 85,
            tasksCompleted: 50
        }
    },
    progress: {
        sessionCompletion: [80, 60, 90, 75, 85],
        recentActivity: [
            {
                date: "2024-03-15",
                text: "Completed Session 5: Browser APIs",
                score: "Score: 90%"
            },
            {
                date: "2024-03-12",
                text: "Submitted Strong Task in Session 4",
                score: "Difficulty: Strong"
            },
            {
                date: "2024-03-10",
                text: "Completed Session 4: Timers & Animations",
                score: "Score: 85%"
            }
        ]
    },
    achievements: [
        {
            icon: "🏆",
            title: "Fast Learner",
            description: "Completed 5 sessions in one week"
        },
        {
            icon: "💪",
            title: "Challenge Master",
            description: "Completed 3 Strong difficulty tasks"
        },
        {
            icon: "🎯",
            title: "Perfect Score",
            description: "Achieved 100% in a quiz"
        }
    ]
}; 