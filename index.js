let saveEl = document.getElementById('save-el')
let countEl = document.getElementById('count-el')
let count = 0

/* Increment the count */
function increment() {
  count += 1
  countEl.textContent = count
}

/* Save current count */
function save() {
  let countStr = count + ' - '
  saveEl.textContent += countStr
  countEl.textContent = 0
  count = 0
}

/* Reset the counter */
function reset() {
  count = 0
  saveEl.textContent = 'Previous entries: '
}
