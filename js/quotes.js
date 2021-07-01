const quotes = [
    {
        quote: "It is not the end of the world as the clock is ticking.",
        author: "- Jay -",
    },
    {
        quote: "Buy nice and cheap stocks.",
        author: "- Jay -",
    },
    {
        quote: "Do not sell all your stocks at once, but sell day by day, DCA. ",
        author: "- Jay -",
    },
    {
        quote: "The natural-born investor is a myth. ",
        author: "- Peter Lynch -",
    },
    {
        quote: "Behind every stock is a company. Find out what it's doing. ",
        author: "- Peter Lynch -",
    },
    {
        quote: "Do diversified investment along with hedge and risk-free assets. ",
        author: "- Jay -",
    },
    {
        quote: "Do not get blinded by news. Always try to see the other side of it then, you will find the honey money. ",
        author: "- Jay -",
    },
    {
        quote: "Know what you own, and know why you own it.",
        author: "- Peter Lynch -",
    },
    {
        quote: "The simpler it is, the better I like it",
        author: "- Peter Lynch -",
    },
    {
        quote: "The key to making money in stocks is not to get scared out of them.",
        author: "- Peter Lynch -",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;