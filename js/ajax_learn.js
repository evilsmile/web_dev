function loadXMLDoc()
{
    var xmlhttp;
    if (window.XMLHttpRequest) {
        // code for IE7+, firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHttp");
    }
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            xmlDoc = xmlhttp.responseXML;
            txt = "";
            x = xmlDoc.getElementsByTagName("title");
            for (i = 0; i < x.length; i++) {
                txt = txt + x[i].childNodes[0].nodeValue + "<br/>";
            }

            document.getElementById("myDiv").innerHTML = txt;
        }
    };

    // 这里得到的可能是缓存的结果
    /*
    xmlhttp.open("GET", "ajax/demo_get.asp", true);
    xmlhttp.send();

    // 向url添加一个唯一的ID
    xmlhttp.open("GET", "ajax/demo_get.asp?t=" + Math.random(), true);
    xmlhttp.send();
    */

    xmlhttp.open("GET", "ajax/xml/books.xml", true);
    xmlhttp.send();
}



