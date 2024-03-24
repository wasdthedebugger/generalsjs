class Generals {
    constructor(tag, parentSelector, id, styles) {
        this.parentSelector = parentSelector;
        this.parent = document.querySelector(parentSelector);
        this.element = document.createElement(tag);
        this.element.id = id; // Set the id attribute
        Object.assign(this.element.style, styles); // Apply styles
        if (!this.parent) {
            console.error(`Parent element not found for selector: ${parentSelector}`);
        }
        else {
            console.log("Parent element:", this.parent); // Check if the parent element is found
        }
    }
    addToParent() {
        if (this.parent) {
            this.parent.appendChild(this.element);
        }
        else {
            console.error(`Parent element not found for selector: ${this.parentSelector}`);
        }
    }
}
class Div extends Generals {
    constructor(parentSelector, id, styles) {
        super('div', parentSelector, id, styles); // Assuming '#root' as the default parent selector
        this.addToParent();
    }
}
class Heading extends Generals {
    constructor(parentSelector, id, text, styles, level = 1) {
        super(`h${level}`, parentSelector, id, styles); // Assuming '#root' as the default parent selector
        this.element.innerText = text;
        this.addToParent();
    }
}
class Anchor extends Generals {
    constructor(parentSelector, id, text, href, styles) {
        super('a', parentSelector, id, styles); // Assuming '#root' as the default parent selector
        this.element.innerText = text;
        this.element.href = href; // Cast this.element to HTMLAnchorElement
        this.addToParent();
    }
}
class Input extends Generals {
    constructor(parentSelector, id, placeholder, styles, type = 'text') {
        super('input', parentSelector, id, styles); // Assuming '#root' as the default parent selector
        this.element.type = type; // Cast this.element to HTMLInputElement
        this.element.placeholder = placeholder; // Cast this.element to HTMLInputElement
        this.addToParent();
    }
}
class Img extends Generals {
    constructor(parentSelector, id, src, alt, styles) {
        super('img', parentSelector, id, styles); // Assuming '#root' as the default parent selector
        this.element.src = src; // Cast this.element to HTMLImageElement
        this.element.alt = alt; // Cast this.element to HTMLImageElement
        this.addToParent();
    }
}
class Button extends Generals {
    constructor(parentSelector, id, text, onClick, styles) {
        super('button', parentSelector, id, styles); // Assuming '#root' as the default parent selector
        this.element.innerText = text;
        this.element.onclick = onClick;
        this.addToParent();
    }
}
class Paragraph extends Generals {
    constructor(parentSelector, id, text, styles) {
        super('p', parentSelector, id, styles); // Assuming '#root' as the default parent selector
        this.element.innerText = text;
        this.addToParent();
    }
    changeContent(text) {
        this.element.innerText = text;
    }
}
// a way to observe changes and get updates value stored in a variable 
function observeElementValue(selector, callback) {
    const element = document.querySelector(selector);
    if (!element) {
        console.error(`Element not found for selector: ${selector}`);
        return;
    }
    element.addEventListener('input', () => {
        callback(element.value);
    });
}
class GeneralsProperties {
    constructor() {
        this._title = document.title;
        this.bodyStyles = {};
    }
    static getInstance() {
        if (!GeneralsProperties.instance) {
            GeneralsProperties.instance = new GeneralsProperties();
        }
        return GeneralsProperties.instance;
    }
    get title() {
        return this._title;
    }
    setTitle(newTitle) {
        this._title = newTitle;
        document.title = newTitle;
    }
    setBodyStyles(styles) {
        this.bodyStyles = styles;
        Object.assign(document.body.style, styles);
    }
}
//# sourceMappingURL=generals.js.map