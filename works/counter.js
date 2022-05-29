let count = 0
const countUp = () => {
  count++
  countReload()
}
const countReset = () => {
  count=0
  countReload()
}
const countReload = () => {
  const countElement = document.querySelector('#count')
  countElement.innerText = '回数: ' + count
}