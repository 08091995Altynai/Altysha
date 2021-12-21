const themes = document.querySelector('.themes').addEventListener('change', (event) => {
    if (event.target.nodeName === 'INPUT'){
        document.documentElement.classList.remove('pink', 'blue', 'dark', 'light')
        document.documentElement.classList.add(event.target.value)
        // можно просто: 
        // document.documentElement.className = event.target.value
        // просто перезаписываем имя класса, т.к. у html-тега всего 1 класс
    }
})
