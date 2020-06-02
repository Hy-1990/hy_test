// 转换图片
function changeImage() {
    const el = document.getElementById("myimage")
    if (el.src.match("1")) {
        el.src = "../images/2.jpg";
    } else {
        el.src = "../images/1.jpg";
    }
}