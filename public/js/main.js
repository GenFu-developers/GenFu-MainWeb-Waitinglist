(() => {
    function isTouchDevice() {
        return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
    }
    const moveLogo = () => {
        const e = document.getElementById('circleLogo')
        const _e = document.getElementById('circleLogoText')
        const top = window.pageYOffset;
        if (top <= document.body.scrollHeight / 2 - 50) {
            e.style.translate = '-200px'
            _e.style.translate = '-200px'
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
    const handleSectionScroll = () => {
        const documentE = document.documentElement
        const isTouch = isTouchDevice()
        console.log(isTouch);
        if (!isTouch) {
            var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            if (st > lastScrollTop) {
                // downscroll code
                window.scroll({ top: documentE.scrollHeight - documentE.clientHeight, behavior: "smooth" })
                // window.scrollBy({ left: 0, top: documentE.scrollHeight - documentE.clientHeight, behavior: "smooth" });
            } else {
                // upscroll code
                window.scroll({ top: 0, behavior: "smooth" })

                // window.scrollBy({ top: 0, left: 0, behavior: "smooth" })
            }
        }
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }

    var lastScrollTop = 0;
    document.addEventListener('scroll', () => {
        moveLogo()
        moveScrollArrow()
        handleSectionScroll()
    })
})()

