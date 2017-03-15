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

function getCookie(c_name)
{
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

function setCookie(c_name, value, expiredays)
{
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "": ";expires=" + exdate.toGMTString());
}

function checkCookies()
{
    username = getCookie('username');
    if (username != null && username != "") {
        alert("Welcome again " + username + '!');
    } else {
        username = prompt('Please enter your name:', "");
        if (username != null && username != "") {
            setCookie('username', username, 365);
        }
    }
    /*
    if (navigator.cookieEnabled == true) {
        alert("Cookie enabled!");
    } else {
        alert("Cookie disabled!");
    }
    */
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

// window.location 对象用于获得当前页面的地址 (URL)，并把浏览器重定向到新的页面。
window.document.write("hostname: " + location.hostname +"<br/>");
window.document.write("pathname: " + location.pathname +"<br/>");
window.document.write("port: " + location.port +"<br/>");
window.document.write("protocol: " + location.protocol +"<br/>");
window.document.write("href: " + location.href +"<br/>");

function go_baidu()
{
    window.location.assign("http://www.baidu.com");
}

// window.history 对象包含浏览器的历史。
function history_back()
{
    window.history.back();
}

function history_forward()
{
    window.history.forward();
}

// window.navigator 对象包含有关访问者浏览器的信息。
window.document.write("Browser codeName: " + window.navigator.appCodeName + "<br/>");
window.document.write("Browser Name: " + window.navigator.appName + "<br/>");
window.document.write("Browser Version: " + window.navigator.appVersion + "<br/>");
window.document.write("Cookies Enabled: " + window.navigator.cookieEnabled + "<br/>");
window.document.write("Platform: " + window.navigator.platform + "<br/>");
window.document.write("User-agent header: " + window.navigator.userAgent + "<br/>");
window.document.write("User-agent language: " + window.navigator.systemLanguage + "<br/>");

// 警告：来自 navigator 对象的信息具有误导性，不应该被用于检测浏览器版本，这是因为：
// navigator 数据可被浏览器使用者更改
// 浏览器无法报告晚于浏览器发布的新操作系统
//
// 由于 navigator 可误导浏览器检测，使用对象检测可用来嗅探不同的浏览器。
// 由于不同的浏览器支持不同的对象，您可以使用对象来检测浏览器。例如，由于只有 Opera 支持属性 "window.opera"，您可以据此识别出 Opera。
if (window.opera) {
    window.document.write("Detect opera <br/>");
} else {
    window.document.write("Not opera <br/>");
}

// 警告框
// 警告框经常用于确保用户可以得到某些信息。
// 当警告框出现后，用户需要点击确定按钮才能继续进行操作。
// alert("alert");

// 确认框用于使用户可以验证或者接受某些信息。
// 当确认框出现后，用户需要点击确定或者取消按钮才能继续进行操作。
// 如果用户点击确认，那么返回值为 true。如果用户点击取消，那么返回值为 false。
// confirm("OK");

// 提示框经常用于提示用户在进入页面前输入某个值。
// 当提示框出现后，用户需要输入某个值，然后点击确认或取消按钮才能继续操纵。
// 如果用户点击确认，那么返回值为输入的值。如果用户点击取消，那么返回值为 null。
// prompt("Choice?", "default");


var cnt = 0;
var test_timer;
function secondsCounter()
{
    document.getElementById("seconds_counter").innerHTML = cnt;
    cnt = cnt + 1;
    test_timer = setTimeout("secondsCounter()", 1000);
}

function startCounter()
{
    test_timer = setTimeout("secondsCounter()", 1000);
}
function stopCounter()
{
    clearTimeout(test_timer);
}


