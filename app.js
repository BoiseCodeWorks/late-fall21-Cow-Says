// SECTION Phase 1
// function cow() {
//   console.log('moo')
//   document.getElementById('message').innerText = 'The Cow Says Moo.'
//   document.querySelector('#img').innerHTML = `<img class="img-fluid rounded" src="https://www.konnecthq.com/wp-content/uploads/2019/07/cow-1-10-1-758x635.jpg" alt="animal pic">`
// }


// SECTION Phase 2
// function duck() {
//   console.log('quack')
//   document.getElementById('message').innerText = 'The Duck Says Quack.'
//   document.querySelector('#img').innerHTML = `<img class="img-fluid rounded" src="https://www.treehugger.com/thmb/pMSmPvdSIpxOsohPGEB2VwibRqk=/774x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/duckling-close-up-500315849-572917c93df78ced1f0b99ec.jpg" alt="animal pic">`
// }


// SECTION Phase 3
// let cow = {
//   name: 'Cow',
//   sound: 'Moo',
//   imgUrl: 'https://www.konnecthq.com/wp-content/uploads/2019/07/cow-1-10-1-758x635.jpg'
// }

// let duck = {
//   name: 'Duck',
//   sound: 'Quack',
//   imgUrl: 'https://www.treehugger.com/thmb/pMSmPvdSIpxOsohPGEB2VwibRqk=/774x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/duckling-close-up-500315849-572917c93df78ced1f0b99ec.jpg'
// }

let animals = [{
  name: 'Cow',
  sound: 'Moo',
  imgUrl: 'https://www.konnecthq.com/wp-content/uploads/2019/07/cow-1-10-1-758x635.jpg',
  soundClip: 'cow.wav'
}, {
  name: 'Duck',
  sound: 'Quack',
  imgUrl: 'https://www.treehugger.com/thmb/pMSmPvdSIpxOsohPGEB2VwibRqk=/774x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/duckling-close-up-500315849-572917c93df78ced1f0b99ec.jpg',
  soundClip: 'duck.mp3'
}, {
  name: 'Sheep',
  sound: 'Baa',
  imgUrl: 'https://d1aeh7hxqn8xf9.cloudfront.net/wp-content/uploads/2019/12/FRFTS-Dec-MarysLittleLamb.jpg'
}, {
  name: 'Fish',
  sound: "blblblblblb",
  imgUrl: 'https://i.insider.com/57a4db38dd089551028b465b?width=1136&format=jpeg'
}]


// what do I need to do this job
// animal name
function animalSay(name) {
  // find the object with that name within the array
  let activeAnimal = animals.find(animal => animal.name === name)
  document.getElementById('message').innerText = `The ${activeAnimal.name} Says ${activeAnimal.sound}.`
  document.querySelector('#img').innerHTML = `<img oncontextmenu="noclick()" class="img-fluid rounded" src="${activeAnimal.imgUrl}" alt="animal pic">`
  if (activeAnimal.sound) {
    document.getElementById('audio').innerHTML = `<audio src="${activeAnimal.soundClip}" autoplay ></audio>`
  }
  setTimeout(() => {
    document.getElementById('audio').innerHTML = ''
  }, 2000)
}

function randomAnimal() {
  // pick random elem within array
  // given animals
  // get random index between 0 length of array
  togglePrimary()
  let randIndex = Math.floor(Math.random() * animals.length)
  let animal = animals[randIndex]
  document.getElementById('img').classList.add('spin')
  document.getElementById('random').disabled = true
  setTimeout(() => {
    document.getElementById('img').classList.remove('spin')
    document.getElementById('random').disabled = false
    togglePrimary()
    animalSay(animal.name)
  }, 2000)
}




function noclick() {
  window.event.preventDefault()
}


let primary = true
function togglePrimary() {
  if (primary) {
    document.querySelectorAll('.bg-primary').forEach(e => {
      console.log(e)
      e.classList.remove('bg-primary')
      e.classList.add('bg-danger')
    })
    primary = false
    return
  }
  document.querySelectorAll('.bg-danger').forEach(e => {
    e.classList.remove('bg-danger')
    e.classList.add('bg-primary')
  })
  primary = true
}