const regExp = /.*baz/.exec("asdasdbazbazzabza");

console.log(regExp); // [ 'baz', index: 5, input: 'asdasdbazbazzabza', groups: undefined ]

let tagExp = /<.*>/.exec("<div><span>text</span></div>"); //'<div><span>text</span></div>'

console.log(tagExp); // [ 'text', index:

tagExp = /<.*?>/.exec("<div><span>text</span></div>"); //'<div><span>text</span></div>'

console.log(tagExp); // [ 'text', index:
