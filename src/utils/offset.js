const offset = el => {
    let _offset = {
        left: 0,
        top: parseInt(window.getComputedStyle(el, null).height)
    }

    let _scroll = {
        left: document.body.scrollLeft || document.documentElement.scrollLeft,
        top: document.body.scrollTop || document.documentElement.scrollTop
    }

    while (el) {
        _offset.left += el.offsetLeft
        _offset.top += el.offsetTop
        el = el.offsetParent
    }

    _offset.top -= _scroll.top
    _offset.left -= _scroll.left
    return _offset;
}

export default offset
