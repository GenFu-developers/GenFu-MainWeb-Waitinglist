(() => {
    function isTouchDevice() {
        return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
    }
    const moevLogo = () => {
        const e = document.getElementById('circleLogo')
        const _e = document.getElementById('circleLogoText')
        const top = window.pageYOffset;
        if (top <= document.body.scrollHeight / 2) {
            e.style.translate = '200px'
            _e.style.translate = '200px'
        }
        else if (top >= document.body.scrollHeight / 2) {
            e.style.translate = '0px'
            _e.style.translate = '0px'
        }
        return
    }

    // animate scroll arrow
    const moveScrollArrow = () => {
        const e = document.getElementById('scrollSign')
        const top = window.pageYOffset;
        if (top > 20) {
            e.style.translate = '-50px 250px'
        }
        else if (top < 20) {
            e.style.translate = '0px'
        }
        return
    }

    var lastScrollTop = 0;
    document.addEventListener('scroll', () => {
        moevLogo()
        moveScrollArrow()
        const documentE = document.documentElement
        const isTouch = isTouchDevice()
        console.log(isTouch);
        if (!isTouch) {
            var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            if (st > lastScrollTop) {
                // downscroll code
                documentE.scrollTop = documentE.scrollHeight - documentE.clientHeight;
            } else {
                // upscroll code
                documentE.scrollTop = 0
            }
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    })
})()

