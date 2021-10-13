function cow() {
  console.log('moo')
  document.getElementById('message').innerText = 'The Cow Says Moo.'
  document.querySelector('#img').innerHTML = `<img class="img-fluid rounded" src="https://www.konnecthq.com/wp-content/uploads/2019/07/cow-1-10-1-758x635.jpg" alt="animal pic">`
}

function duck() {
  console.log('quack')
  document.getElementById('message').innerText = 'The Duck Says Quack.'
  document.querySelector('#img').innerHTML = `<img class="img-fluid rounded" src="https://www.treehugger.com/thmb/pMSmPvdSIpxOsohPGEB2VwibRqk=/774x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/duckling-close-up-500315849-572917c93df78ced1f0b99ec.jpg" alt="animal pic">`
}