$(document).ready(function() {

    $username = $('#username'),
        $phone = $('#phone'),
        $password = $('#password'),
        $check = $('#check'),
        num = 0,
        countdown = 6;

    var usernameArr = $username.children();
    $userinput = $(usernameArr[1]);
    var phoneArr = $phone.children();
    $phoneinput = $(phoneArr[1]);
    var passwordArr = $password.children();
    $passwordinput = $(passwordArr[1]);
    $passicon = $(passwordArr[2]);
    var checkArr = $check.children();
    $button = $(checkArr[2]);
    $userinput.focus(function() {
        $(usernameArr[4]).css("display", "block");
        $(usernameArr[2]).css("display", "none");
        $(usernameArr[3]).css("display", "none");
        $(usernameArr[5]).css("display", "none");
        $(usernameArr[6]).css("display", "none");
    })
    $userinput.blur(function() {
        $(usernameArr[4]).css("display", "none");
        var usertest = /^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
        console.log(usercount());
        if (usercount() == 0) {
            $(usernameArr[5]).css("display", "block");

        } else if (usercount() > 14) {
            $(usernameArr[6]).css("display", "block");
        } else {
            console.log(usertest.test($userinput.val()));
            if (usertest.test($userinput.val()) == 1) {
                console.log(usertest.test($userinput.val()));
                $(usernameArr[3]).css("display", "block");
            } else {
                $(usernameArr[2]).css("display", "block");
            }
        }
    })

    function usercount() {
        var str = $userinput.val();
        var strArr = [];
        strArr = str.split("");
        var count = 0;
        for (var i = 0; i < strArr.length; i++) {
            count += getStrLeng(strArr[i]);
        }
        return count;
    }

    function getStrLeng(str) {
        var realLength = 0;
        var len = str.length;
        var charCode = -1;
        for (var i = 0; i < len; i++) {
            charCode = str.charCodeAt(i);
            if (charCode >= 0 && charCode <= 128) {
                realLength += 1;
            } else {
                if (charCode < 2048) {
                    realLength += 2;
                } else {
                    if (charCode < 65536) {
                        realLength += 3;
                    } else {
                        realLength += 6;
                    }

                }
            }
        }
        return realLength;
    }
    $phoneinput.focus(function() {
        $(phoneArr[2]).css("display", "none");
        $(phoneArr[3]).css("display", "none");

    })
    $phoneinput.blur(function() {
        var phonetest = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (phonetest.test($phoneinput.val()) == 1) {
            $(phoneArr[3]).css("display", "block");
        } else {
            $(phoneArr[2]).css("display", "block");
        }
    })
    $passwordinput.focus(function() {
        $(passwordArr[6]).css("display", "block");
        $(passwordArr[2]).css("display", "none");
        $(passwordArr[3]).css("display", "none");
        $(passwordArr[4]).css("display", "none");
        $(passwordArr[5]).css("display", "none");

    })
    $button.click(function() {
        settime();
    })

    function settime() {
        if (countdown == 1) {
            $button.removeAttr("disabled");
            $button.val("获取验证码");
            countdown = 6;
            return false;
        } else {
            $button.attr("disabled", true);
            $button.val('已发送（' + countdown + 's)');
            countdown--;
        }
        setTimeout(function() {
            settime();
        }, 1000);
    }
    $passwordinput.focus(function() {
        $(passwordArr[2]).css("display", "block");
        $(passwordArr[3]).css("display", "none");
        $(passwordArr[4]).css("display", "none");
        $(passwordArr[5]).css("display", "none");
        $(passwordArr[6]).css("display", "block");
    })
    $passicon.click(function() {
        $passwordinput.focus();
        if (num === 1) {
            $(passwordArr[6]).css("display", "none");
            num = 0;
        } else {
            $(passwordArr[6]).css("display", "block");
            num = 1;
        }
    })
    $passwordinput.blur(function() {
        var passtest1 = /^[^\u4E00-\u9FA5\uF900-\uFA2D\u0020]{8,16}$/;
        var passtest2 = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{6,16}$/;
        $(passwordArr[6]).css("display", "none");
        var len = passcount()
        if (len == 0) {
            $(passwordArr[5]).css("display", "block");
        } else {
            if (len < 8 || len > 14) {
                $(passwordArr[4]).css("display", "block");
            } else {
                if (passtest1.test($passwordinput.val()) == 0 || passtest2.test($passwordinput.val()) == 0) {
                    $(passwordArr[4]).css("display", "block");
                } else {
                    $(passwordArr[3]).css("display", "block");
                    $(passwordArr[2]).css("display", "none");
                }
            }
        }
    })

    function passcount() {
        var str = $passwordinput.val();
        var strArr = [];
        strArr = str.split("");
        var count = 0;
        for (var i = 0; i < strArr.length; i++) {
            count += getStrLeng(strArr[i]);
        }
        return count;
    }

});