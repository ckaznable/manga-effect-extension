export function getAssets(path) {
  return chrome.runtime.getURL(`assets/${path}`)
}

export function getDomXY(dom) {
  const bodyRect = document.body.getBoundingClientRect()
  const elemRect = dom.getBoundingClientRect()
  const y = elemRect.top - bodyRect.top
  const x = elemRect.left - bodyRect.left
  return {
    x, y,
    rect: {
      top: elemRect.top - bodyRect.top,
      left: elemRect.left - bodyRect.left,
      bottom: elemRect.bottom,
      right: elemRect.right,
    }
  }
}

export function getRandomInRange(min, max){
  return Math.random() * (max - min) + min
}