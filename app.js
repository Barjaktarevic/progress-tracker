const modal = document.querySelector('.modal')
const modalForm = document.querySelector('.dialog-form')
const addButton = document.querySelector('.add-button')
const closeButton = document.querySelector('.close-button')
const divSection = document.querySelector('.new-div-section')
const areaInput = document.querySelector('.area-info')
const dateInput = document.querySelector('.date-info')
const textInput = document.querySelector('.progress-description')

addButton.addEventListener('click', function() {
    modal.showModal()
})

closeButton.addEventListener('click', function() {
    modal.close()
})

const newDivArray = []
const newButtons = []

let newDivData = []
let stringifiedData 
let parsedData

modalForm.addEventListener('submit', function() {
    let newDate = document.createElement('h3')
    let newArea= document.createElement('h3')
    let newDescription = document.createElement('p')
    let newButton = document.createElement('button')
    let newDiv = document.createElement('div')
    newDiv.classList.add('new-div')
    newDate.innerText = dateInput.value
    newArea.innerText = areaInput.value
    newDescription.innerText = textInput.value
    newButton.innerText = "Remove entry"
    newDiv.appendChild(newDate)
    newDiv.appendChild(newArea)
    newDiv.appendChild(newDescription)

    newDivData.push(newDiv.innerHTML)

    newDiv.appendChild(newButton)
    divSection.appendChild(newDiv)
    newDivArray.push(newDiv)

    newButtons.push(newButton)
    dateInput.value = ""
    areaInput.value = ""
    textInput.value = ""
})

document.body.addEventListener('click', function (element) {
    for (let i = 0; i < newButtons.length; i++) {
      if(element.target === newButtons[i] ) {
      element.target.parentNode.remove()
      newButtons.splice(i, 1)
      newDivArray.splice(i, 1)
      newDivData.splice(i, 1)
      }
    };
  } );


const loadButton = document.querySelector('.load-button')
if (localStorage.getItem('data')) {
loadButton.addEventListener('click', function() {
  let parsedData = JSON.parse(window.localStorage.getItem('data'))
  for (let i = 0; i < parsedData.length; i++) {
    let newDiv = document.createElement('div')
    let newButton = document.createElement('button')
    newButton.innerText = "Remove entry"
    newButtons.push(newButton)
    newDiv.innerHTML = parsedData[i]
    newDiv.classList.add('new-div')
    divSection.appendChild(newDiv)
    newDivData.push(newDiv.innerHTML)
    newDiv.appendChild(newButton)
    loadButton.setAttribute('disabled', '')
    loadButton.innerText = "Progress loaded!"
  }
})
}

const saveButton = document.querySelector('.save-button')
saveButton.addEventListener('click', function() {
  let saveText = saveButton.innerHTML
  stringifiedData = JSON.stringify(newDivData)
  window.localStorage.setItem('data', stringifiedData)
  saveButton.innerText = "Saving..."
  loadButton.setAttribute('disabled', '')
  
  setTimeout(() => {
    saveButton.innerHTML = saveText
  }, 2000)

})






