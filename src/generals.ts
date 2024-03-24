class Generals {
    protected parentSelector: string;
    protected parent: HTMLElement | null;
    protected element: HTMLElement;
    
    constructor(tag: string, parentSelector: string, id: string, styles: Partial<CSSStyleDeclaration>) {
        this.parentSelector = parentSelector;
        this.parent = document.querySelector(parentSelector);
        this.element = document.createElement(tag);
        this.element.id = id; // Set the id attribute
        Object.assign(this.element.style, styles); // Apply styles
        
        if (!this.parent) {
            console.error(`Parent element not found for selector: ${parentSelector}`);
        } else {
            console.log("Parent element:", this.parent); // Check if the parent element is found
        }
    }

    addToParent() {
        if (this.parent) {
            this.parent.appendChild(this.element);
        } else {
            console.error(`Parent element not found for selector: ${this.parentSelector}`);
        }
    }
}

class Div extends Generals {
    constructor(parentSelector: string, id: string, styles: Partial<CSSStyleDeclaration>) {
        super('div', parentSelector, id, styles); // Assuming '#root' as the default parent selector
        this.addToParent();
    }
}

class Heading extends Generals {
    constructor(parentSelector: string, id: string, text: string, styles: Partial<CSSStyleDeclaration>, level: number = 1) {
        super(`h${level}`, parentSelector, id, styles); // Assuming '#root' as the default parent selector
        this.element.innerText = text;
        this.addToParent();
    }
}

class Anchor extends Generals {
    constructor(parentSelector: string, id: string, text: string, href: string, styles: Partial<CSSStyleDeclaration>) {
        super('a', parentSelector, id, styles); // Assuming '#root' as the default parent selector
        this.element.innerText = text;
        (this.element as HTMLAnchorElement).href = href; // Cast this.element to HTMLAnchorElement
        this.addToParent();
    }
}

class Input extends Generals {
    constructor(parentSelector: string, id: string, placeholder: string, styles: Partial<CSSStyleDeclaration>, type: string = 'text') {
        super('input', parentSelector, id, styles); // Assuming '#root' as the default parent selector
        (this.element as HTMLInputElement).type = type; // Cast this.element to HTMLInputElement
        (this.element as HTMLInputElement).placeholder = placeholder; // Cast this.element to HTMLInputElement
        this.addToParent();
    }
}

class Img extends Generals {
    constructor(parentSelector: string, id: string, src: string, alt: string, styles: Partial<CSSStyleDeclaration>) {
        super('img', parentSelector, id, styles); // Assuming '#root' as the default parent selector
        (this.element as HTMLImageElement).src = src; // Cast this.element to HTMLImageElement
        (this.element as HTMLImageElement).alt = alt; // Cast this.element to HTMLImageElement
        this.addToParent();
    }
}


class Button extends Generals {
    constructor(parentSelector: string , id: string, text: string, onClick: () => void, styles: Partial<CSSStyleDeclaration>) {
        super('button', parentSelector, id, styles); // Assuming '#root' as the default parent selector
        this.element.innerText = text;
        this.element.onclick = onClick;
        this.addToParent();
    }
}

class Paragraph extends Generals {
    constructor(parentSelector: string, id: string, text: string, styles: Partial<CSSStyleDeclaration>) {
        super('p', parentSelector, id, styles); // Assuming '#root' as the default parent selector
        this.element.innerText = text;
        this.addToParent();
    }
    changeContent(text: string) {
        this.element.innerText = text;
    }
}

// a way to observe changes and get updates value stored in a variable 
function observeElementValue(selector: string, callback: (value: string) => void) {
    const element = document.querySelector(selector) as HTMLInputElement;
    if (!element) {
        console.error(`Element not found for selector: ${selector}`);
        return;
    }
    element.addEventListener('input', () => {
        callback(element.value);
    });
}

class GeneralsProperties {
    private static instance: GeneralsProperties;
    private _title: string;
    bodyStyles: { [key: string]: string };

    private constructor() {
        this._title = document.title;
        this.bodyStyles = {};
    }

    static getInstance(): GeneralsProperties {
        if (!GeneralsProperties.instance) {
            GeneralsProperties.instance = new GeneralsProperties();
        }
        return GeneralsProperties.instance;
    }

    get title(): string {
        return this._title;
    }

    setTitle(newTitle: string): void {
        this._title = newTitle;
        document.title = newTitle;
    }

    setBodyStyles(styles: { [key: string]: string }): void {
        this.bodyStyles = styles;
        Object.assign(document.body.style, styles);
    }
}
