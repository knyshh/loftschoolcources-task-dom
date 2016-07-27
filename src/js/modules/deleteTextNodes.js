function deleteTextNodes(el){

    if(el=== undefined){
        throw new Error("Ошибка!");
     }else if(el=== null){
        throw new Error("Ошибка!");
     }

    var i,
        elements = el.childNodes;
    for (i=0; i<elements.length; i++){
        item = el.childNodes[i];
        if (item.nodeType === 3){
            el.removeChild(elements[i]);
        }
    }
   return elements;
}

window.addEventListener('load', function () {
    var list = document.getElementById('list');
    deleteTextNodes(list);
});


module.exports = { deleteTextNodes }
