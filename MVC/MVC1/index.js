const save = document.getElementById('save');
const age1 = document.getElementById('age');
const name1 = document.getElementById('name');
const upload = document.getElementById('upload');
const list = document.getElementById('list');

let model = [
    { name: 'Lee', age: 17 },
    { name: 'Ami', age: 28 }
]

let view = {
    update() {
        const data = model;
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

save.addEventListener('click', () => {
    model.push({name: name1.value, age: age1.value})
    view.update();
    console.log(model)
})

// upload.addEventListener('click', () => {
//     console.log(model)
// })