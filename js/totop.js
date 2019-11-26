(function (window, document) {
    let totop = document.getElementById('totop')
    let winHeight = document.documentElement.clientHeight;
    window.onscroll = function () {
        // 获取页面向上滚动距离，chrome浏览器识别document.body.scrollTop，而火狐识别document.documentElement.scrollTop，这里做了兼容处理
        var top = document.documentElement.scrollTop || document.body.scrollTop;
        // 如果滚动超过一屏，返回顶部按钮出现，反之隐藏
        if (top >= winHeight) {
            totop.style.display = 'block';
        } else {
            totop.style.display = 'none';
        }
    }
    totop.addEventListener('click', function (e) {
        window.scrollTo(0, 0)
    });
})(this, this.document);