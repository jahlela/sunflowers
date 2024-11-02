const data = [
    {
        id: 0,
        title: "Are you still dreaming?",
        text: `
        A friendly woman stands before you and smiles. \n
        "Do you love numbers?"`, //text to display
        choice: [
            //choices
            { id: 0, text: "That’s me! ✨", goTo: 1 },
            { id: 1, text: "Ugh, no thanks 😅", goTo: 2 },
        ],
    },
    {
        id: 1,
        title: "That's The Life For Me!",
        text: "You've selected Option A. There is a giant peach stuck through the empire state building.",
        choice: [
            { id: 0, text: "Eat The Peach", goTo: 4 },
            { id: 1, text: "Leave The Peach Be", goTo: 5 },
        ],
    },
    {
        id: 2,
        title: "Option B Translation",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nibh sem, varius id euismod eget, imperdiet in orci. Quisque auctor nisl ut euismod dapibus. Quisque scelerisque nibh eget est eleifend, a lacinia lorem convallis. Nam pulvinar dui vulputate orci iaculis, vitae consequat ex pellentesque. Morbi condimentum nibh turpis, eget tempor magna sagittis eu. Sed dui quam, dapibus non diam in, imperdiet aliquet lacus. Vestibulum posuere eget elit vitae ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer volutpat sagittis velit, eu venenatis tortor ullamcorper vitae. Morbi finibus ligula urna, ornare vehicula lorem interdum nec. Nunc euismod placerat nibh, quis pretium ante aliquam in. Quisque eu imperdiet erat, quis tincidunt leo. Duis risus urna, venenatis non pharetra nec, venenatis id ligula. Etiam at malesuada ante.",
        choice: [],
    },
    {
        id: 3,
        title: "Santa Fail",
        text: "Santa Claus is not here, neither is Tim Allen",
        choice: [],
    },
    {
        id: 4,
        title: "Rest In Peaches",
        text: "You got a stomachache and died.",
        choice: [],
    },
    {
        id: 5,
        title: "New York Silly",
        text: "You enjoy a nice night on the town in New York.",
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
