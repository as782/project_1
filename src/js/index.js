//点击事件
let flag = false;
function dd() {
    // alert("GitHub确实好用！");
    var img = document.getElementById('img');
    flag = !flag;
    if (flag) {

        img.setAttribute("src", ".\/images\/122.png");

    } else {

        img.setAttribute("src", "");

    }

    var alt = img.getAttribute('alt')
    console.log(alt);
}
