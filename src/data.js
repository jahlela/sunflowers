const data = [
    {
        id: 0,
        title: "A friendly woman appears",
        text: `Are you a money expert helping people grow cash and own homes?`,
        choice: [
            { id: 0, text: "That’s me! ✨", goTo: 4 },
            { id: 1, text: "Ugh, no thanks 😅", goTo: 2 },
        ],
        modalContent: {
            description: "Hey, I’m Sara, a Senior Data Analyst at UBS.",
            statements: [
                "Are you a customer superhero, there to save the day for anyone who needs help?",
                "Are you a problem-solver, always finding cool ways to help customers?",
                "Then UBS is the place to be if you're into code, innovation, and digital transformation!"
            ],
        },
    },
    {
        id: 1,
        title: "That's The Life For Me!",
        text: "Hey, I'm Shari, a Platform Developer.",
        choice: [
            { id: 0, text: "Eat The Peach", goTo: 4 },
            { id: 1, text: "Leave The Peach Be", goTo: 5 },
        ],
    },
    {
        id: 2,
        title: "IT Application Internship",
        text: `Are you excited to learn from the pros and become a coding legend?`, //text to display
        choice: [
            //choices
            { id: 0, text: "That’s me! ✨", goTo: 5 },
            { id: 1, text: "Ugh, no thanks 😅", goTo: 6 },
        ],
        modalContent: {
            // Image will be at `img/employee${currentId}.jpg
            description: "I’m Beatrice, a Senior Application Developer at UBS. I help build the UBS website.",
            statements: [
                "Do you enjoy working with numbers and data?",
                "Do you love finding patterns and insights in information?",
                "Are you interested in finance and data-driven decisions?"
            ],
        },
    },
    {
        id: 3,
        title: "Santa Fail",
        text: "Santa Claus is not here, neither is Tim Allen",
        choice: [],
    },
    {
        id: 4,
        title: "You found your calling!",
        text: "You would be perfect for the Banking internship at UBS",
        choice: [],
    },
    {
        id: 5,
        title: "You found your calling!",
        text: "You would be perfect for the IT Application Developer internship at UBS",
        choice: [],
    },
    {
        id: 6,
        title: "You found your calling!",
        text: "You would be perfect for the IT Platform Developer internship at UBS",
        choice: [],
    },
];

export default data;
