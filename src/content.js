import * as effect from "./effect"
import {getDomXY, getRandomInRange} from "./util"

document.addEventListener("dblclick", e => {
  const {clientX, clientY} = e
  effect.DODODO(clientX, clientY)
})

document.addEventListener("click", e => {
  const {clientX, clientY} = e
  effect.ORAORA(clientX, clientY)
})

document.addEventListener("scroll", e => {
  if(Math.random() > 0.08) {
    return
  }

  const x = window.innerWidth - 60
  const y = Math.random() * window.innerHeight
  effect.ZU(x, y)
})

document.addEventListener("contextmenu", e => {
  const {clientX, clientY} = e
  effect.DOGYAN(clientX, clientY)
})

document.querySelectorAll(`input[type=text]`).forEach(input => {
  input.addEventListener("keyup", e => {
    const {rect} = getDomXY(input)
    const {top, left, bottom, right} = rect
    const isUp = Math.random() > 0.5

    const rangeYStart = isUp ? top - 40 : bottom,
      rangeYEnd = isUp ? top - 20 : bottom + 20
    
    const rangeXStart = left + 10,
      rangeXEnd = right - 30

    const x = Math.round(getRandomInRange(rangeXStart, rangeXEnd))
    const y = Math.round(getRandomInRange(rangeYStart, rangeYEnd))
    effect.DON(x, y)
  })
})
