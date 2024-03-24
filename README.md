# GeneralsJS

This library provides a set of classes and functions for dynamically creating HTML elements and manipulating the DOM.

## Usage

Index.html has a simple example of the library. The library is imported in the index.html file and the index.js file contains the code that uses the library.

### Installation

You can include the provided code directly in your project or use it as a separate module. 

```html
<script src="https://wasdthedebugger.github.io/generalsjs/generals.js"></script>
```

### Classes

#### Generals

The base class for creating HTML elements.

```typescript
class Generals {
    constructor(tag: string, parentSelector: string, id: string, styles: Partial<CSSStyleDeclaration>);
    addToParent(): void;
}
```

#### Div

Creates a `<div>` element.

```typescript
class Div extends Generals {
    constructor(parentSelector: string, id: string, styles: Partial<CSSStyleDeclaration>);
}
```

#### Heading

Creates heading elements (`<h1>`, `<h2>`, etc.).

```typescript
class Heading extends Generals {
    constructor(parentSelector: string, id: string, text: string, styles: Partial<CSSStyleDeclaration>, level: number = 1);
}
```

#### Anchor

Creates anchor (`<a>`) elements.

```typescript
class Anchor extends Generals {
    constructor(parentSelector: string, id: string, text: string, href: string, styles: Partial<CSSStyleDeclaration>);
}
```

#### Input

Creates input (`<input>`) elements.

```typescript
class Input extends Generals {
    constructor(parentSelector: string, id: string, placeholder: string, styles: Partial<CSSStyleDeclaration>, type: string = 'text');
}
```

#### Img

Creates image (`<img>`) elements.

```typescript
class Img extends Generals {
    constructor(parentSelector: string, id: string, src: string, alt: string, styles: Partial<CSSStyleDeclaration>);
}
```

#### Button

Creates button (`<button>`) elements.

```typescript
class Button extends Generals {
    constructor(parentSelector: string , id: string, text: string, onClick: () => void, styles: Partial<CSSStyleDeclaration>);
}
```

#### Paragraph

Creates paragraph (`<p>`) elements.

```typescript
class Paragraph extends Generals {
    constructor(parentSelector: string, id: string, text: string, styles: Partial<CSSStyleDeclaration>);
    changeContent(text: string): void;
}
```

### Functions

#### observeElementValue

Observes changes in the value of an input element.

```typescript
function observeElementValue(selector: string, callback: (value: string) => void): void;
```

### GeneralsProperties Singleton

Manages document properties such as title and body styles.

```typescript
class GeneralsProperties {
    static getInstance(): GeneralsProperties;
    get title(): string;
    setTitle(newTitle: string): void;
    setBodyStyles(styles: { [key: string]: string }): void;
}
```

## Examples

```typescript
// Create a div with a specific id and styles
const myDiv = new Div('#root', 'myDiv', { backgroundColor: 'blue', color: 'white' });

// Create a paragraph with text and add it to the body
const myParagraph = new Paragraph('body', 'myParagraph', 'Hello, world!', { fontSize: '16px' });

// Create an input field with a placeholder and observe changes
const myInput = new Input('#form', 'myInput', 'Enter your name', {}, 'text');
observeElementValue('#myInput', (value) => {
    console.log('Input value changed:', value);
});

// Set the document title and body styles
const properties = GeneralsProperties.getInstance();
properties.setTitle('My App');
properties.setBodyStyles({ backgroundColor: '#f0f0f0', fontFamily: 'Arial, sans-serif' });
```

## Notes

- By default, the parent selector is assumed to be `#root`.
- Ensure that the parent element exists in the DOM before attempting to add elements to it.
- This library provides basic functionality and can be extended as needed.
```

Feel free to adjust and expand this documentation according to your project's specific needs!
