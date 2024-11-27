const helloString = "Hello world";

const getRandomColor = () =>
    `rgb(${Math.floor(Math.random() * 255)},
    ${Math.floor(Math.random() * 255)},
     ${Math.floor(Math.random() * 255)} )`;
const getRandomFontSize = () => `${Math.floor(Math.random() * 200) + 50}px`;



const renderString = (stringValue) => {
    for (let i = 0; i < stringValue.length; i++) {
        const span = document.createElement("span");
        span.innerText = stringValue[i];
        span.style.color = getRandomColor();
        span.style.fontSize = getRandomFontSize();
        document.body.appendChild(span);
    }

};

renderString(helloString);





// 2 way of change the string   


// const helloString = "Hello world";

// const getRandomColor = () => `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
// const getRandomFontSize = () => `${Math.floor(Math.random() * 200) + 50}px`;

// const container = document.createElement('div');
// container.style.display = 'inline-block'; // Make sure the container doesn't take up the whole line
// document.body.appendChild(container);

// const renderString = (stringValue) => {
//     for (let i = 0; i < stringValue.length; i++) {
//         const span = document.createElement("span");
//         span.innerText = stringValue[i];
//         span.style.color = getRandomColor();
//         span.style.fontSize = getRandomFontSize();
//         span.style.display = 'inline-block'; // Make sure the span doesn't take up the whole line
//         container.appendChild(span);
//     }
// };

// renderString(helloString);


