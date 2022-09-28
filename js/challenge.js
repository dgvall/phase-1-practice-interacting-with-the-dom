document.addEventListener(`DOMContentLoaded`, () => {
// timer
const counter = document.getElementById("counter")

let seconds = 0

let isPaused = false

let c = window.setInterval(function() {
  if(isPaused === false) {
    seconds++;
    counter.textContent = seconds
  }
}, 1000)

// pause timer
let pause = document.getElementById("pause")
pause.addEventListener("click", (e) => {
  if (pause.innerText === "pause") {
  isPaused = true
  let buttons = document.querySelectorAll("button")
  buttons[0].disabled = true
  buttons[1].disabled = true
  buttons[2].disabled = true
  buttons[4].disabled = true

  pause.innerText = "resume"
} else if (pause.innerText === "resume") {
  isPaused = false

  let buttons = document.querySelectorAll("button")
  buttons[0].disabled = false
  buttons[1].disabled = false
  buttons[2].disabled = false
  buttons[4].disabled = false

  pause.innerText = "pause"
}
  })

// manual timer changes

let plus = document.getElementById("plus")

plus.addEventListener("click", (e) => counter.textContent = seconds += 1 )

let minus = document.getElementById("minus")
minus.addEventListener("click", (e) => counter.textContent = seconds -= 1 )

// like function
let heart = document.getElementById("heart")

heart.addEventListener("click", (e) => {
let likes = document.querySelector("ul")
let like = document.createElement("li")
like.textContent = `${seconds} has been liked!`
likes.appendChild(like)
})

// leave a comment

let form = document.getElementById("comment-form")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  let comment = document.createElement("li")
  comment.textContent = e.target["comment-input"].value
  let commentList = document.getElementById("commentsHere")
  commentList.appendChild(comment)
})
})


