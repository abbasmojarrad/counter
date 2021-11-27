const $ = document
const increaseBtn = $.querySelector('.increase')
const decreaseBtn = $.querySelector('.decrease')
const resetBtn = $.querySelector('.reset')
const number = $.querySelector('.number')
let count = 0
checkColor()
function checkColor () {
  if (count < 10) {
    number.style.color = 'red'
  } else {
    number.style.color = 'green'
  }
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
