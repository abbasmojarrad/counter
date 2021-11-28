const $ = document
const increaseBtn = $.querySelector('.increase')
const decreaseBtn = $.querySelector('.decrease')
const resetBtn = $.querySelector('.reset')
const number = $.querySelector('.number')

let count = 0
checkColor()

function checkColor () {
  number.style.color = count < 10 ? 'red' : 'green'
}

increaseBtn.addEventListener('click', function () {
  count++
  number.innerHTML = count
  checkColor()
})
decreaseBtn.addEventListener('click', function () {
  if (count > 0) {
    count--
    number.innerHTML = count
    checkColor()
  }
})
resetBtn.addEventListener('click', function () {
  count = 0
  number.innerHTML = count
  checkColor()
})
