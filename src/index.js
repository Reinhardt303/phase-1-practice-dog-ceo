console.log('%c HI', 'color: firebrick')

const dogImageListImgElement = document.getElementById('dog-image-container')
const dogNameListElement = document.getElementById('dog-breeds')

let breeds = [] 

 fetch('https://dog.ceo/api/breeds/image/random/4')
.then(response => response.json())
.then(dogImage => {
    console.log(dogImage.message)
    dogImage.message.forEach(dog => {
        const imgElement = document.createElement('img')
        imgElement.src = dog  
        dogImageListImgElement.appendChild(imgElement)
    })
}) 

fetch('https://dog.ceo/api/breeds/list/all')
.then(response => response.json())
.then(dogBreed => {
    const obj = dogBreed.message
    breeds = Object.keys(obj)   
    breeds.forEach(dog => {  
        const liElement = document.createElement('li')
        liElement.innerText = dog
        dogNameListElement.appendChild(liElement)
    })
})
.then(() => {
    let breedList = document.querySelectorAll('li')
    breedList.forEach(breed => {
        breed.addEventListener('click', () => {
            breed.style.color = 'red'    
        })
    })
  
})
.then(() => {
    document.querySelector('select').addEventListener('change', (event) => {
    let breedList = document.querySelectorAll('li')
    console.log(breedList)
    breedList.forEach(breed => breed.hidden = true)  
    breed = breeds.filter(breed => breed[0] === event.target.value)
    console.log(breed) 
    breed.forEach( breed => {
        const liElement = document.createElement('li')
        liElement.innerText = breed
        dogNameListElement.appendChild(liElement)
    })
    })
})
