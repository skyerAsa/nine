    // 標註
    var btn = document.querySelector("#btn");
    btn.addEventListener("click", function() {
        console.log("ok");
    });
    // 添加
    var car = document.querySelector("#car");
    car.addEventListener("click", function() {
        car.classList.toggle("on");
    });
    // 界線
    var num = 100;
    if (num < 60) {
        console.log("不及格");
    } else if (num == 100) {
        console.log("滿分");
    } else if (num >= 60) {
        console.log("及格");
    }
    // 99
    // 定義list
    var list = "";
    // 定義box
    var box = document.querySelector("#box");

    // 定義界值、公式
    for (let u = 2; u <= 9; u++) {
        list += "<ul>";
        for (let i = 1; i <= 9; i++) {
            list += "<li>" + u + "*" + i + "=" + u * i + "</li>";
        }
        list += "</ul>";
    }
    // 替代原在box的所有內容
    box.innerHTML = list;