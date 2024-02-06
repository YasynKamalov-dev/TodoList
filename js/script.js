
const nameInput = document.querySelector('.name')
const surnameInput = document.querySelector('.surname')
const btn = document.querySelector('.add')
const ul = document.querySelector('.ul')



function view(){
    let task = JSON.parse(localStorage.getItem('task')) || []
    ul.innerHTML = ''
    task.map((el) => (
        ul.innerHTML += `<li class="li">
        <h4 class="circle">${el.name[0]}${el.surname[0]}</h4>
        <h3><span>name: </span>${el.name}</h3>
        <h3><span>surname: </span>${el.surname}</h3>
        <button class="delet">delete</button>
        </li>`
    ))
    delButtons()
}
view()

nameInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        surnameInput.focus()
    }
})
surnameInput.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        btn.focus()
    }
})

btn.addEventListener('click', () => {
    if(nameInput.value !== '' && surnameInput.value !== ''){
       main() 
       nameInput.style.border = '2px solid green'
       surnameInput.style.border = '2px solid green'
    }else if(nameInput.value === '' && surnameInput.value === ''){
        nameInput.style.border = '1px solid red'
        surnameInput.style.border = '1px solid red'
    }
    nameInput.value = ''
    surnameInput.value = ''
})

function main(){
    let task = JSON.parse(localStorage.getItem('task')) || []
    const newObj = {
        id: task.length ? task[task.length - 1].id + 1 : 1,
        name:nameInput.value,
        surname:surnameInput.value,
    }
    task = [...task,newObj]
    localStorage.setItem('task', JSON.stringify(task))
    view()
}

function delButtons(){
    let task = JSON.parse(localStorage.getItem('task')) || []

    const deleteBtns = document.querySelectorAll('.delet')
    deleteBtns.forEach((btn,idx) => {
        btn.addEventListener('click', () => {
           task = task.filter((el,i) => {
                return idx !== i
            })
            localStorage.setItem('task',JSON.stringify(task))
            view()
        })
    })

}
