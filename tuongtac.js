window.onscroll=function(){
    console.info(document.documentElement.scrollTop);
    var nav=document.getElementById("mynav");
    var gototop=document.getElementById("gototop");
    if(document.documentElement.scrollTop>100 || document.body.scrollTop>100){
        nav.style.position="fixed";
        nav.style.left=0;
        nav.style.right=0;
        nav.style.backgroundImage="rgb(128, 128, 128, 0.4)";
        nav.style.zIndex=9;

        gototop.style.display="block";
    }
    else{
        nav.style.position="relative"
        nav.style.backgroundImage="linear-gradient(to bottom right,lightgray,gray,black)";

        gototop.style.display="none";
    }
}

$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});

$(document).ready(function(){
    $('.form-submit').click(function(){
        alert('Hiện không đăng nhập được!!!');
    });
});

$(document).ready(function(){
    $('#toggle').click(function(){
        $('#menu').slideToggle();
    });
});

$(document).ready(function(){
    $('#contact-submit').click(function(){
        alert('Đã gửi thông tin.');
        location.reload();
    });
});

$(document).ready(function(){
    $('.form-submits').click(function(){
        alert('Đăng ký thành công.');
    });
});

function goToTop(){
    var timer=setInterval(function(){
        document.documentElement.scrollTop-=20;
        if(document.documentElement.scrollTop <=0)
            clearInterval(timer);
    },10)
}

wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: ' animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
    }
    )
    wow.init();



