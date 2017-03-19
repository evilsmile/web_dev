// Query 是一个 JavaScript 函数库。
// jQuery 库包含以下特性：
// 1. HTML 元素选取
// 2. HTML 元素操作
// 3. CSS 操作
// 4. HTML 事件函数
// 5. JavaScript 特效和动画
// 6. HTML DOM 遍历和修改
// 7. AJAX
// 8. Utilities

// 点击以后隐藏<p>
// 为了防止文档在完全加载就绪之前运行jQuery代码，所以都放在document ready函数中
// 如果在文档没有完全加载之前就运行函数，操作可能失败：如
// 1. 试图隐藏一个不存在的元素
// 2. 获得未完全加载的图像的大小 
$(document).ready(function() {


        // jQuery 语法是为 HTML 元素的选取编制的，可以对元素执行某些操作。
        // 基础语法是：$(selector).action()
        // 美元符号定义 jQuery
        // 选择符（selector）“查询”和“查找” HTML 元素
        // jQuery 的 action() 执行对元素的操作

        // [==== jQuery 元素选择器 ====]
        // jQuery 使用 CSS 选择器来选取 HTML 元素。
        // $("p") 选取 <p> 元素。
        // $("p.intro") 选取所有 class="intro" 的 <p> 元素。
        // $("p#demo") 选取所有 id="demo" 的 <p> 元素。

        // [===== jQuery 属性选择器 ====]
        // jQuery 使用 XPath 表达式来选择带有给定属性的元素。
        // $("[href]") 选取所有带有 href 属性的元素。
        // $("[href='#']") 选取所有带有 href 值等于 "#" 的元素。
        // $("[href!='#']") 选取所有带有 href 值不等于 "#" 的元素。
        // $("[href$='.jpg']") 选取所有 href 值以 ".jpg" 结尾的元素。


    $("#hide_p").click(function() {
            $("p").hide(1000);
            });
    $("#show_p").click(function() {
            $("p").show(1500);
            });
    $("#toggle_p").click(function() {
            $("p").toggle(900);
            });
    $("#show_fade").click(function() {
            $("#div1").fadeIn();
            $("#div2").fadeIn("slow");
            $("#div3").fadeIn(2000);
            });
    $("#hide_fade").click(function() {
            $("#div1").fadeOut();
            $("#div2").fadeOut("slow");
            $("#div3").fadeOut(2000);
            });
    $("#toggle_fade").click(function() {
            $("#div1").fadeToggle();
            $("#div2").fadeToggle("slow");
            $("#div3").fadeToggle(2000);
            });
    // fadeTo() 方法允许渐变为给定的不透明度（值介于 0 与 1 之间）
    // 必需的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
    $("#to_fade").click(function() {
            $("#div1").fadeTo("fast", 0.25);
            $("#div2").fadeTo("slow", 0.4);
            $("#div3").fadeTo(2000, 0.7);
            });


    // jQuery CSS 选择器
    // jQuery CSS 选择器可用于改变 HTML 元素的 CSS 属性。
    // 下面的例子把所有 p 元素的背景颜色更改为红色：
    $("p").css("background-color","white");

    // 更多实例：
    //$(this)   当前 HTML 元素
    //$("p")    所有 <p> 元素
    //$("p.intro")  所有 class="intro" 的 <p> 元素
    //$(".intro")   所有 class="intro" 的元素
    //$("#intro")   id="intro" 的元素
    //$("ul li:first")  每个 <ul> 的第一个 <li> 元素
    //$("[href$='.jpg']")   所有带有以 ".jpg" 结尾的属性值的 href 属性
    //$("div#intro .head")  id="intro" 的 <div> 元素中的所有 class="head" 的元素

    // 由于 jQuery 是为处理 HTML 事件而特别设计的，那么当您遵循以下原则时，您的代码会更恰当且更易维护：
    // 把所有 jQuery 代码置于事件处理函数中
    // 把所有事件处理函数置于文档就绪事件处理器中
    // 把 jQuery 代码置于单独的 .js 文件中
    // 如果存在名称冲突，则重命名 jQuery 库
    // 下面是 jQuery 中事件方法的一些例子：
    // Event 函数   绑定函数至
    // $(document).ready(function)  将函数绑定到文档的就绪事件（当文档完成加载时）
    // $(selector).click(function)  触发或将函数绑定到被选元素的点击事件
    // $(selector).dblclick(function)   触发或将函数绑定到被选元素的双击事件
    // $(selector).focus(function)  触发或将函数绑定到被选元素的获得焦点事件
    // $(selector).mouseover(function)  触发或将函数绑定到被选元素的鼠标悬停事件

    $(".panel_flip_down").click(function() {
            $(".panel").slideDown("slow");
            });
    $(".panel_flip_up").click(function() {
            $(".panel").slideUp("slow");
            });
    $(".panel_flip_toggle").click(function() {
            $(".panel").slideToggle("slow");
            });

    // 默认情况下所有HTML元素的位置都是静态的，并且无法移动。如需对位置进行操作，记得首先把元素的CSS Position属性设置为
    // relative、fixed 或 absolute
    $("#animate").click(function() {
            var green_block = $("#green_block");
            green_block.animate({left:'250px', opacity: '0.5', height: '+=150px', width: '+=150px' }, "slow");
            green_block.animate({left:'100px', opacity: '0.8', height: '-=20px',  width: '-=20px' }, "slow");
            });

    // 由于Javascript语句是逐一执行的，即按照次序，动画之后的语句可能会产生错误或页面冲突。为了避免这种情况，可以以参数形式添加callback函数
    // 典型语法：$(selector).hide(speed, callback)
    // callback 参数是一个在Hide操作完成后被执行的函数
    $(".panel_flip_toggle").click(function() {
            $(".panel").slideToggle("slow", function() {
                    alert("panel has already been toggled!");
            }) } );


    // 三个简单实用的用于DOM操作的jQuery方法:
    // text() - 设置或返回所选元素的文本内容
    // html() - 设置或返回所选元素的内容(包括HTML标记)
    // val()  - 设置或返回表单字段的值
    var p_to_be_operated = $("#p_to_be_operated");
    $("#show_p_text").click(function() {
            alert("Text: " + p_to_be_operated.text());
            p_to_be_operated.text("New " + p_to_be_operated.text());
            });
    $("#show_p_html").click(function() {
            alert("Html: " + p_to_be_operated.html());
            p_to_be_operated.html("New " + p_to_be_operated.html());
            });
    $("#show_p_value").click(function() {
            alert("Value: " + $("#who_are_u").val());
            });
    $("#show_p_attr").click(function() {
            alert("Value: " + $("#who_are_u").attr("value"));
            // attr()也提供了回调函数。回调函数由两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。然后以函数新值返回希望使用的字符串
            $("#who_are_u").attr("value", function(i, origValue) {
                    return "[" + i + "]'s new " + origValue;
            }) });

    // ---- jQuery 添加元素 -----
    // 添加新内容的四个jQuery方法
    // + append() - 在被选元素的结尾插入内容（还在元素内)
    // + prepend() - 在被选元素的开头插入内容（还在元素内
    // + after() - 在被选元素之后插入内容（在元素外）
    // + before() - 在被选元素之前插入内容(在元素外）
    
    // append() 和 prepend() 方法能够通过参数接收无限数量的新元素。
    // 可以通过jQuery来生成文本/HTML（就像上面的例子那样），或者通过
    // JS代码和DOM元素
    $("#complete_lover").click(function() {
        $("#lover_title").prepend("<b>Past </b>");
        var comment = document.createElement("b");
        comment.innerHTML = "[Never seen anymore]";
        $("#lover_title").append(comment);
        $("#lover_title").before($("<label></label><br>").text("true feeling"));
            });
    $("#more_lover").click(function() {
        $("#lover_list").append("<li>NOOOT shown yet!</li>");
            });

      
    // ---- jQuery删除元素 ---
    // 如需删除元素和内容，一般可使用以下两个jQuery方法:
    // + remove() - 删除被选元素(及其子元素)
    // + empty() -  从被选元素中删除子元素

    // 先清子元素，再清本元素
    $("#delete_chicken_p").click(function() {
            $("#to_be_deleted_div").empty();
            $(this).hide();
            $("#delete_chicken_div").show();
            });
    $("#delete_chicken_div").click(function() {
            $("#to_be_deleted_div").remove();
            $(this).hide();
            });

    // ---- jQuery 获取并设置CSS类 -----
    // 通过jQuery可以很容易地对CSS元素进行操作
    // + addClass() - 向被选元素添加一个或多个类
    // + removeClass() - 从被选元素删除一个或多个类
    // + toggleClass() - 对被选元素进行添加或删除类的切换操作
    // + css() - 设置或返回样式属性

    $("#make_important").click(function() {
            $("#need_be_noticed").addClass("blue important");
            });
    $("#toggle_important").click(function() {
            $("#need_be_noticed").toggleClass("important");
            });

    // jQuery 的css() 方法用于设置或返回被选元素的一个或多个样式属性
    // 如需返回指定的CSS属性: css("propertyName"), 如$("p").css("background-color")
    // 如需设置指定的CSS属性: css("propertyName", "value"), 如$("p").css("background-color", "yellow");
    // 如需设置多个属性: css({"propertyName":"value", "propertyName":"value", ..."})
    $("#change_noticed_background").click(function() {
            $("#need_be_noticed p").css("background","#232343");
            });
    


    // --- jQuery 尺寸 ----
    // jQuery 提供多个处理尺寸的重要方法：
    // + width()
    // + height()
    // + innerWidth()
    // + innerHight()
    // + outerWidth()
    // + outerHeight()
    $("#check_w_h").click(function() {
            var txt = "";
            txt += "Width of div: " + $("#w_h_test").width() + "</br>";
            txt += "Height of div: " + $("#w_h_test").height() + "</br>";
            txt += "Width of inner div: " + $("#w_h_test").innerWidth() + "</br>";
            txt += "Height of inner div: " + $("#w_h_test").innerHeight() + "</br>";
            txt += "Width of outer div: " + $("#w_h_test").outerWidth() + "</br>";
            txt += "Height of outer div: " + $("#w_h_test").outerHeight() + "</br>";
            txt += "Document width/height: " + $(document).outerWidth() + "x" + $(document).height() + "</br>";
            txt += "Window width/height: " + $(window).outerWidth() + "x" + $(window).height() + "</br>";
            $("#w_h_test").html(txt);
            });

    // ---- jQuery 遍历 ----
    // 向上遍历:
    // parent()
    // parents()
    // parentsUntil()

    // parent() 方法返回被选元素的直接父元素
    $(".ancestor_show span").parent().css({"color":"red", "border":"2px solid red"});
    // parents() 方法返回被选元素的所有祖先元素，它一路向上直到文档的根元素(<html>)
    $(".ancestor_show span").parents().css({"color":"darkblue", "border":"3px solid darkblue"});
    // parentsUntil() 方法返回介于两个给定元素之间的所有祖先元素,不包括until元素
    $(".ancestor_show span").parentsUntil("div").css({"color":"green", "border":"1px solid green"});

    // 向下遍历:
    // children()
    // find()

    // children() 方法返回被选元素的所有直接子元素
    $(".desendants_show div").children().css({"color":"yellow", "border":"2px solid yellow"});
    
    // find() 方法返回被选元素的后代元素，一路向下直到最后一个后代
    // find(*)找到所有后代
    $(".desendants_show div").find("*").css({"color":"gray"});
    // 找到某个元素
    $(".desendants_show div").find("span").css({"color":"red"});



    // 水平遍历
    // 有许多方法让我们可以在DOM中进行水平遍历:
    // siblings()
    // next()
    // nextAll()
    // nextUntil()
    // prev()
    // prevAll()
    // prevUntil()
    /* 大致同上，不练习了 */


    // jQuery 过滤
    // 三个最基本的过滤方法是: first(), last() 和 eq()。它们允许基于一组元素中的位置来选择一个特定的元素.
    // 其他过滤方法，如 filter() 和 not() 允许选取匹配或不切尔西某项指定标准的元素.
    
    // first(), last() 是指从css选择器中选出的元素集的fisrt和last
    $("#select_test div").first().css({"font-size":"32px"});
    $("#select_test p").last().css({"font-size":"22px"});

    // eq() 方法返回被选 元素中带有指定索引号的元素
    $("#select_test div").eq(1).css({"font-size" : "2px", "color":"#82a333"});


    // filter() 方法允许规定一个标准。不匹配这个标准的将被从集合中删除。匹配的元素返回。
    $("div").filter("#select_test").css({"border":"2px green solid"});

    $("div").not("#select_test").css({"border":"1px lightyellow solid"});



    // ----- jQuery Ajax ------
    // AJAX = 异步Javascript 和 XML (Asynchronous Javascript and XML)
    // 简单地说，在不重载整个页面的情况下，AJAX通过后台加载数据，并在网页上进行显示
    // jQuery 提供多个 Ajax 有关的方法. 通过这些方法可以使用HTTP GET和POST从远程服务器上请求文本、HTML、XML或JSON，同时把这些外部数据直接载入网页的被远元素中。
    // jQuery load() 方法是最简单但强大的方法。 load()方法从服务器加载数据，并把返回的数据放入被选元素中。 
    // 语法: $(selector).load(URL, data, callback);
    // 必需的URL参数规定希望加载的URL
    // 可选的data参数规定与请求一同发送的查询字符串键值对集合
    // 可选的callback参数是load()方法完成后所执行的函数名称 

    // 可选的callback参数规定当load()方法完成后所要允许的回调函数。回调函数可以设置不同的参数:
    // responseTxt - 包含调用成功时的结果内容
    // statusTxt - 包含调用的状态
    // xhr - 包含XMLHttpRequest对象
    $("#ajax_text_pos").load("ajax_test.txt", function(responseTxt, statusTxt, xhr) {
        if (statusTxt == "success") {
            alert("External load succ.");
        } else if (statusTxt == "error") {
            alert("Error: " + xhr.status + ": " + xhr.statusText);
        }
            }); 

    // jQuery get() 和 post() 方法用于通过HTTP GET 和POST 请求从服务器请求数据
    // GET - 从指定的资源请求数据。可能返回缓存数据
    // POST - 向指定的资源提交要处理的数据. 不会缓存数据，并且常用于连同请求一起发送数据
    
    $("#load_ajax").click(function() {
    // GET：语法: $.get(URL, callback)
    $.get("ajax_test.asp", function(data, status) {
            if (status == "success") {
                $("#ajax_asp_pos").html(data);
            }
           });
    // POST: 语法: $.post(URL, data, callback)
    $.post("demo_test_post.asp", 
            {
                name: "Donald Duck",
                city: "Duckburg"
            },
            function(data, status) {
                alert("Data: " + data + "\nStatus: " + status);
            });
    });

    // XMLHttpRequest 是AJAX 的基础
    // XMLHttpRequest 对象用于在后台与服务器交换数据。这意味着可以不重新加载整个网页的情况下，对某部分进行更新 


    //////////////////////////////////////////////////////////////////////

});
