function prepend(container, newElement){
    var firstEl = container.firstElementChild;
    container.insertBefore(newElement, firstEl);
}

module.exports = { prepend }
