window.onload = function () {
    var i;
    var shirt = document.getElementById('shirt');
    var pants = document.getElementById('pants');
    var boots = document.getElementById('boots');
    var price = document.getElementsByTagName('span')[0];
    var target = document.getElementById('target');
    price.innerHTML = '0';
    var arr = [];
    var data;

    shirt.addEventListener('click', () => {
        this.style.border = "4px solid black";
    })
    arr.push(shirt, pants, boots);
    for (i = 0; i < arr.length; i++) {
        // начало операции drag
        arr[i].addEventListener('dragstart', function (evt) {
                this.style.border = "4px solid orange";
                evt.dataTransfer.effectAllowed = 'move';
                evt.dataTransfer.setData("Text", this.id);
            }, // удаляем стили, добавленные в начале операции
            false);
    }

    // конец операции drag
    target.addEventListener('dragenter', function (evt) {
        this.style.background = "green"
    }, false);

    target.addEventListener('dragleave', function (evt) {
        this.style.background = "blue"
    }, false);

    target.addEventListener('dragover', function (evt) {
        if (evt.preventDefault()) evt.preventDefault();
        return false;
    }, false)

    target.addEventListener('drop', function (evt) {
        if (evt.preventDefault()) evt.preventDefault();
        if (evt.stopPropagation()) evt.stopPropagation();
        this.style.border = ""
        var id = evt.dataTransfer.getData('Text');
        var elem = document.getElementById(id);
        this.appendChild(elem);
        price.innerHTML = +(price.innerHTML) + +(elem.getAttribute('data-price'))
        return false;
    }, false)

}

