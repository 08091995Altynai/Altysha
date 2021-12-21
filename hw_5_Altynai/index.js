const themes = document.querySelector('.themes').addEventListener('change', (event) => {
    if (event.target.nodeName === 'INPUT'){
        document.documentElement.classList.remove('pink', 'blue', 'dark', 'light')
        document.documentElement.classList.add(event.target.value)
    }
})