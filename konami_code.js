const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
const body = document.querySelector('body')
 body.addEventListener('keydown', function(e) {
  return e.which
})

let index = 0

function init() {
}
  if (key === code[index]) {
    index++;
    if (index === code.length) {
      alert("Hurray!")
    }
  }
  else {
    index = 0;
  }

}
