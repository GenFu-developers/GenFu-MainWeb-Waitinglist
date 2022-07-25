(() => {
    const moevLogo = () => {
        const e = document.getElementById('circleLogo')
        const top = window.pageYOffset;
        if (top > 20) {
            e.style.translate = '200px'
        }
        else if (top < 20) {
            e.style.translate = '0px'
        }
    }

    const moveScrollArrow = () => {
        const e = document.getElementById('scrollSign')
        const top = window.pageYOffset;
        if (top > 20) {
            e.style.translate = '-50px 250px'
        }
        else if (top < 20) {
            e.style.translate = '0px'
        }
    }

    document.addEventListener('scroll', (e) => {
        moevLogo()
        moveScrollArrow()
    })
})()

