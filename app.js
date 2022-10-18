/* SELECTION OF ELEMENTS IN THE DOM */

const modal = document.querySelector('.modal')
const modalForm = document.querySelector('.dialog-form')
const addButton = document.querySelector('.add-button')
const closeButton = document.querySelector('.close-button')
const divSection = document.querySelector('.new-div-section')
const areaInput = document.querySelector('.area-info')
const dateInput = document.querySelector('.date-info')
const textInput = document.querySelector('.progress-description')
let lightButton = document.querySelector('.light-button')
let darkButton = document.querySelector('.dark-button')
let navbar = document.querySelector('.navbar')
let mainSection = document.querySelector('.main-section')
let footer = document.querySelector('.footer')

/* SELECTION OF ELEMENTS IN THE DOM END */

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
      element.target.parentNode.classList.add('fade-out')
      setTimeout(() => {
      element.target.parentNode.remove()
    }, 535)
      newButtons.splice(i, 1)
      newDivArray.splice(i, 1)
      newDivData.splice(i, 1)
      }
    };
  } );

 

const loadButton = document.querySelector('.load-button')
if (localStorage.getItem('data')) {
document.addEventListener('DOMContentLoaded', function() {
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
  }
})
}

const saveButton = document.querySelector('.save-button')
saveButton.addEventListener('click', function() {
  let saveText = saveButton.innerHTML
  stringifiedData = JSON.stringify(newDivData)
  window.localStorage.setItem('data', stringifiedData)
  saveButton.innerText = "Saving..."  
  setTimeout(() => {
    saveButton.innerHTML = saveText
  }, 2000)

})

/* DARK AND LIGHT MODE CODE */

lightButton.addEventListener('click', function() {
  lightButton.style.display = "none"
  darkButton.style.display = "block"
  navbar.style.backgroundColor = 'var(--dark-mode-background)'
  navbar.style.color = 'white'
  navbar.style.borderBottom = 'white solid 3px'
  saveButton.style.backgroundColor = "white"
  saveButton.style.color = "var(--dark-mode-background)"
  mainSection.style.backgroundColor = "var(--dark-mode-background)"
  mainSection.style.color = "white"
  addButton.style.boxShadow = "5px 10px 5px 0px var(--dark-mode-shadow)"
  footer.style.borderImageSource = "linear-gradient(to right, transparent 0%, var(--dark-mode-red) 50%, transparent 100%)"
 
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
  navbar.style.color = 'var(--dark-mode-background)'
  navbar.style.borderBottom = 'var(--light-mode-shadow) solid 3px'
  saveButton.style.backgroundColor = "var(--light-mode-dim)"
  saveButton.style.color = "white"
  mainSection.style.backgroundColor = "var(--light-mode-background) "
  mainSection.style.color = "black"
  footer.style.borderImageSource = "linear-gradient(to right, transparent 0%, black 50%, transparent 100%)"
  addButton.style.boxShadow = "5px 10px 5px 0px var(--light-mode-shadow)"

  
  let mainDivs = divSection.getElementsByTagName('div')
  for (let i = 0; i < mainDivs.length; i++) {
  mainDivs[i].classList.add('new-div')
  mainDivs[i].classList.remove('new-div-dark')
  }
})

/* END OF DARK AND LIGHT MODE CODE */


