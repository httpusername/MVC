const save = document.getElementById('save');
const age1 = document.getElementById('age');
const name1 = document.getElementById('name');
const upload = document.getElementById('upload');
const list = document.getElementById('list');
let event1 = new EventEmitter();

// -------MMMMMMMMMMMMMMM----------------------------------------
let model = {
    _value: [
        { name: 'Lee', age: 17 },
        { name: 'Ami', age: 28 }
    ],
    push(value) {
        this._value.push(value);
        event1.emit('add');
    },
    get() {
        return this._value;
    }
    
}
// --------vvvvvvvvvvvvvvvv---------------------------------------
let view = {
    update() {
        const data = model. get();
        let vDom = '';
        list.innerHTML = '';
        data.forEach(({name, age}) => {
            const tr = document.createElement('tr');
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            td1.innerText = name;
            td2.innerText = age;
            tr.appendChild(td1);
            tr.appendChild(td2);
            list.appendChild(tr);
        })
    }
}
// ---------observer--------------------------------------
event1.on('add', view.update())
// ------CCCCCCCCCCCCC-----------------------------------------
const collector = {
    add() {
        model.push({name: name1.value, age: age1.value})
    }
}

save.addEventListener('click', () => {
    collector.add();
})