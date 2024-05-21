const $ = document

let btn = $.querySelectorAll(".btn")

btn.forEach(function (x) {
    x.addEventListener("click" , function (event) {
        let colorTheme = event.target.dataset.color
        $.documentElement.style.setProperty("--theme-color" , colorTheme)
    })
} )






