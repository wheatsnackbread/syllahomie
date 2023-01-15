//Repeatable div block
const BtnAdd = document.querySelector('.test');
const contain = document.getElementById('container');

create("Quiz 1: Propositional logic | Jan 22")
create("Assignment 1: Propositional logic | Feb 5")
create("Quiz 2: Propositional logic | Feb 12")
create("Midterm exam | Feb 17")
create("Quiz 3: Predicate logic | Mar 5")
create("Assignment 2: Propositional logic | Mar 12")
create("Quiz 4: Predicate logic | Mar 19")
create("Assignment 3: Predicate logic | Mar 19")
create("Assignment 4: Predicate logic | April 9")
create("Quiz 5: Logic programs | April 9")

BtnAdd.addEventListener("click",create("PlaceHolder"));

function resizeInput() {
    if (this.value.length > 12 && this.value.length < 24){
    this.style.width = ((this.value.length + 5) * 8) + 'px';
    }
}

function create(title){
    const repeatable = document.createElement("div");
    repeatable.classList.add('main');

    const element = document.createElement("input");
    element.type = 'text';
    element.classList.add('text');
    element.addEventListener('input',resizeInput)

    const description = document.createElement('p');
    description.classList.add('description')
    //var desc = "    "; //This is where the pdf scanned text goes
    description.innerText = title;

    repeatable.appendChild(element);
    repeatable.appendChild(description);
    contain.appendChild(repeatable);
}