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

    if (lightButton.style.display === "none") {
      newDiv.classList.add('new-div-dark')
    } else {
      newDiv.classList.add('new-div')
    }

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
    if (lightButton.style.display === "none") {
      newDiv.classList.add('new-div-dark')
    } else {
      newDiv.classList.add('new-div')
    }
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

/* DARK AND LIGHT MODE CODE */

let lightButton = document.querySelector('.light-button')
let darkButton = document.querySelector('.dark-button')
let navbar = document.querySelector('.navbar')
let mainSection = document.querySelector('.main-section')
lightButton.addEventListener('click', function() {
  lightButton.style.display = "none"
  darkButton.style.display = "block"
  navbar.style.backgroundColor = '#333333'
  navbar.style.color = 'white'
  navbar.style.borderBottom = 'white solid 3px'
  saveButton.style.backgroundColor = "white"
  saveButton.style.color = "#333333"
  loadButton.style.backgroundColor = "white"
  loadButton.style.color = "#333333"
  mainSection.style.backgroundColor = "#333333"
  mainSection.style.color = "white"
 
  let mainDivs = divSection.getElementsByTagName('div')
  for (let i = 0; i < mainDivs.length; i++) {
  mainDivs[i].classList.remove('new-div')
  mainDivs[i].classList.add('new-div-dark')
  }
  
})
darkButton.addEventListener('click', function() {
  darkButton.style.display = "none"
  lightButton.style.display = "block"
  navbar.style.backgroundColor = 'white'
  navbar.style.color = '#333333'
  navbar.style.borderBottom = 'grey solid 3px'
  saveButton.style.backgroundColor = "rgb(91, 89, 89)"
  saveButton.style.color = "white"
  loadButton.style.backgroundColor = "rgb(91, 89, 89)"
  loadButton.style.color = "white"
  mainSection.style.backgroundColor = "rgb(228, 228, 228)"
  mainSection.style.color = "black"
  
  let mainDivs = divSection.getElementsByTagName('div')
  for (let i = 0; i < mainDivs.length; i++) {
  mainDivs[i].classList.add('new-div')
  mainDivs[i].classList.remove('new-div-dark')
  }
})

/* END OF DARK AND LIGHT MODE CODE */


