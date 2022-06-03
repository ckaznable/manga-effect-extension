import {getAssets, getRandomInRange} from "./util"

function getEffectImage({classes, src, top, left, style}={classes:[], src:"", top: 0, left: 0, style: {}}) {
  const dom = document.createElement("img")
  dom.classList.add("_manga-ext")

  if(classes) {
    classes.forEach(c => dom.classList.add(c))
  }

  dom.src = src
  dom.style.top = `${top}px`
  dom.style.left = `${left}px`
  dom.style.pointerEvents = "none"

  if(style) {
    for (const key in style) {
      if (Object.hasOwnProperty.call(dom.style, key)) {
        dom.style[key] = style[key]
      }
    }
  }

  return dom
}

export function DODODO(x, y) {
  const images = ["do1.png", "do2.png", "do3.png"]
  const position = [
    {x: 10, y: 40},
    {x: 40, y: 42},
    {x: 70, y: 33}
  ]

  // vertical
  const vPosition = [
    {x: -20, y: -20},
    {x: -20, y: -52},
    {x: -20, y: -78}
  ]

  const list = images.map((img, index) => {
    const pos = x > window.innerWidth - 100 
      ? vPosition[index] : position[index]
    const dom = getEffectImage({
      src: getAssets(`images/${img}`),
      classes: ["shake"],
      top: y - pos.y,
      left: x + pos.x,
      style: {
        height: "30px"
      }
    })

    setTimeout(() => document.body.append(dom), (Math.random()+1) * 50 * index)
    return dom
  })

  setTimeout(() => {
    list.forEach(dom => dom.remove())
  }, 1200)
}

export function DON(x, y) {
  const dom = getEffectImage({
    src: getAssets("images/don.png"),
    classes: ["shake"],
    top: y,
    left: x,
    style: {
      height: "30px"
    }
  })
  document.body.append(dom)
  setTimeout(() => dom.remove(), 200)
}

export function ORAORA(x, y) {
  x = getRandomInRange(x - 40, x + 20)
  y = getRandomInRange(y - 40, y + 20)

  const isDon = Math.random() > 0.5
  if(isDon){
    DON2(x, y)
  }else{
    GAN(x, y)
  }
}

export function DON2(x, y) {
  const dom = getEffectImage({
    src: getAssets("images/don2.png"),
    classes: ["shake"],
    top: y,
    left: x,
    style: {
      width: "40px"
    }
  })
  document.body.append(dom)
  setTimeout(() => dom.remove(), 400)
}

export function GAN(x, y) {
  const dom = getEffectImage({
    src: getAssets("images/gan.png"),
    classes: ["shake"],
    top: y,
    left: x,
    style: {
      height: "40px"
    }
  })
  document.body.append(dom)
  setTimeout(() => dom.remove(), 400)
}

export function ZU(x, y) {
  const dom = getEffectImage({
    src: getAssets("images/zu.png"),
    top: y,
    left: x,
    style: {
      height: "60px"
    }
  })
  document.body.append(dom)
  setTimeout(() => dom.remove(), 200)
}

export function DOGYAN(x, y) {
  const dom = getEffectImage({
    src: getAssets("images/dogyan.png"),
    classes: ["down2up"],
    top: y - 80,
    left: x - 45,
    style: {
      height: "120px"
    }
  })
  document.body.append(dom)
  setTimeout(() => dom.remove(), 300)
}