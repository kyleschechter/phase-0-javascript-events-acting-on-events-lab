// const dodger = document.getElementById('dodger')

// dodger.style.backgroundColor = '#FF69B4'

// dodger.style.bottom = '0px'

// dodger.style.left = '0px'

const moveDodgerLeft = () => {
    const leftNumbers = dodger.style.left.replace("px", "")
    const left = parseInt(leftNumbers, 10)
    
    if (left > 0)
    dodger.style.left = `${left - 1}px`
}

const moveDodgerRight = () => {
    const rightNumbers = dodger.style.left.replace("px", "")
    const right = parseInt(rightNumbers, 10)
    
    if (right < 360)
    dodger.style.left = `${right + 1}px`
}

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      moveDodgerRight()
    } else if (event.key === "ArrowLeft") {
      moveDodgerLeft()
    }
  })

