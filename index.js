const generalProperties = GeneralsProperties.getInstance();
generalProperties.setTitle('GeneralsJS Example');
generalProperties.setBodyStyles({
    margin: '0',
    padding: '0',
    backgroundColor: 'lightblue',
    color: 'white',
    fontFamily: 'Arial, sans-serif'
});
const mainDiv = new Div('#root', 'main-div', {
    backgroundColor: 'lightgreen',
    padding: '10px',
    marginBottom: '50px'
});
const mainHeading = new Heading('#main-div', 'main-heading', 'Made using GeneralsJS', {
    fontSize: '24px',
    color: 'red'
});
const talakodiv = new Div('#root', 'talakodiv', {
    backgroundColor: 'lightyellow',
    padding: '10px',
    height: '500px'
});
// get quote from random quote api
// fetch a quote from an api and show it in a paragraph
const quoteParagraph = new Paragraph('#talakodiv', 'quote-paragraph', 'Loading quote...', {
    fontSize: '18px',
    fontStyle: 'italic',
    color: 'blue'
});
fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
    quoteParagraph.changeContent(data.content);
});
const numberButtonDiv = new Div('#talakodiv', 'number-button-div', {
    backgroundColor: 'lightblue',
    padding: '10px',
    marginTop: '20px'
});
const counter = new Paragraph('#number-button-div', 'counter-paragraph', '0', {
    fontSize: '24px',
    color: 'green'
});
let count = 0;
const meroButton = new Button('#number-button-div', 'mero-button', 'Increase Count', () => {
    counter.changeContent(`${++count}`);
}, {
    padding: '5px',
    backgroundColor: 'orange',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
});
const nikaskophoto = new Img('#talakodiv', 'nikaskophoto', 'https://nikas.com.np/assets/images/thisnikas.jpg', 'Nikasko', {
    height: '200px',
    marginTop: '20px'
});
//# sourceMappingURL=index.js.map