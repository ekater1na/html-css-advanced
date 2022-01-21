window.onload = function () {
    let i;
    const shirt = document.getElementById('shirt');
    const pants = document.getElementById('pants');
    const boots = document.getElementById('boots');
    const price = document.getElementsByTagName('span')[0];
    const target = document.getElementById('target');
    price.innerHTML = '0';
    const arr = [];
    let data;

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
        const id = evt.dataTransfer.getData('Text');
        const elem = document.getElementById(id);
        this.appendChild(elem);
        price.innerHTML = +(price.innerHTML) + +(elem.getAttribute('data-price'))
        return false;
    }, false)

}

