function changeMode() {
    var mainHtml = document.getElementById('main-html')
    var body = document.getElementById('main-body')
    var darkMode = document.getElementById('darkSlider')
    // If checkbox is checked, it will be dark mode
    if(darkMode.checked) {
        mainHtml.classList.add('dark')
        body.classList.add('dark-circuit-bg')
        body.classList.remove('circuit-bg')
    }
    else {
        mainHtml.classList.remove('dark')
        body.classList.add('circuit-bg')
        body.classList.remove('dark-circuit-bg')
    }
    // Else it is light mode
}