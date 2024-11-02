const data = [
    {
        id: 0,
        title: "Banking Internship",
        text: `A friendly woman stands before you and smiles.\n"Do you love numbers?"`,
        choice: [
            { id: 0, text: "That’s me! ✨", goTo: 1 },
            { id: 1, text: "Ugh, no thanks 😅", goTo: 2 },
        ],
        modalContent: {
            description: "I’m Sara, a Senior Data Analyst at UBS.",
            statements: [
                "I enjoy working with numbers and data.",
                "I love finding patterns and insights in information.",
                "I’m interested in finance and data-driven decisions."
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
            description: "I’m Beatrice, a Senior Application Developer at UBS. I help build the UBS website. Do any of the following sound like you?",
            statements: [
                "I enjoy working with numbers and data.",
                "I love finding patterns and insights in information.",
                "I’m interested in finance and data-driven decisions."
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
        title: "Banking Internship",
        text: "You are ready to apply!",
        choice: [],
    },
    {
        id: 5,
        title: "IT Application Internship",
        text: "You are ready to apply!",
        choice: [],
    },
    {
        id: 6,
        title: "New York So Tasty",
        text: "Peach! Peach! Peach!",
        choice: [],
    },
];

export default data;
