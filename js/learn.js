document.write(Date()+"<br/>");

function lightOp()
{
    x = document.getElementById("bulb");
    if (x.src.match("bulbon")) {
        x.src = "images/eg_bulboff.gif";
    } else {
        x.src = "images/eg_bulbon.gif";
    }
}

function louder()
{
   w = document.getElementById("want_to_tell");
   w.style.color = "#FF0000";
   w.innerHTML = define_louder(w.innerHTML)
}

function define_louder(content)
{
    return "Oopos, louder! " + content.toUpperCase();
}

var cars = new Array();
cars[0] = "Audi";
cars[1] = "BMW";
cars[2] = "Volvo";

var cars = ["Audi", "BMW", "Volvo"];

// 可以通过将变量的值设置为null来清空变量
cars = null;

// Javascript对象
var person = {firstname:"Bill", lastname:"Gates", id:5566};
// 对象属性有两种寻址方式
name = person.lastname;
name = person["lastname"];

for (p in person) {
    document.write(p + " " + person[p]);
    document.write("<br/>");
}

// 变量都是对象。可以使用new来声明其类型
var n = new Number;
var b = new Boolean;
var a = new Array;
var o = new Object;

// Javascript中所有的事物都是对象. 对象是拥有属性和方法的数据
// 属性是对象相关的值
// 方法是能够在对象上执行的动作
//

function lets_try_catch()
{
    try {
        throw "I don't know what happened!";
    } catch(err) {
        alert(err);
    }
}

//通过可编程的对象模型，JavaScript 获得了足够的能力来创建动态的 HTML。
//JavaScript 能够改变页面中的所有 HTML 元素
//JavaScript 能够改变页面中的所有 HTML 属性
//JavaScript 能够改变页面中的所有 CSS 样式
//JavaScript 能够对页面中的所有事件做出反应


//查找 HTML 元素
//通常，通过 JavaScript，您需要操作 HTML 元素。
//为了做到这件事情，您必须首先找到该元素。有三种方法来做这件事：
//通过 id 找到 HTML 元素
//通过标签名找到 HTML 元素
//通过类名找到 HTML 元素


function mDown(obj)
{
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Release mouse";
}

function mUp(obj)
{
    obj.style.backgroundColor = "green";
    obj.innerHTML = "Press mouse";
}

function mOver(obj)
{
    obj.innerHTML = "Check mouse in";
}

function mOut(obj)
{
    obj.innerHTML = "Check mouse out";
}

function checkCookies()
{
    if (navigator.cookieEnabled == true) {
        alert("Cookie enabled!");
    } else {
        alert("Cookie disabled!");
    }
}

function upper_text()
{
    var text = document.getElementById("to_upper_input");
    text.value = text.value.toUpperCase();
}

var bro3;
function call_bro3()
{
    bro3 = document.createElement("p");
    var node = document.createTextNode("This is brother 3");
    bro3.appendChild(node);

    var bros_container = document.getElementById("brothers");
    bros_container.appendChild(bro3);
}

function go_bro3()
{
    var bros_container = document.getElementById("brothers");
    bros_container.removeChild(bro3);
}

function test_regexp()
{
    var patt1 = new RegExp("[0-9]{1,}", "g");
    // 获取input的文本内容,用 value
    if (patt1.test(document.getElementById("regexp_test_input").value)) {
        alert("Thanks for your number!");
    } else {
        alert("Please give me number!");
    }
}


// Window 对象
// 所有浏览器都支持 window 对象。它表示浏览器窗口。
// 所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。
// 全局变量是 window 对象的属性。
// 全局函数是 window 对象的方法。
// 甚至 HTML DOM 的 document 也是 window 对象的属性之一

window.document.write("window size: "  + window.innerWidth + "x" + window.innerHeight + "<br/>");
// window.screen 对象包含有关用户屏幕的信息。
window.document.write("screen size: "  + screen.availWidth + "x" + screen.availHeight + "<br/>");
