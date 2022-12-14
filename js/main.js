$(function(){

  //スマホ用メニュー
  // $('.header__bottom').hide();

  $('#burger').on('click', function(){
    $(this).toggleClass('active');
    $('.sp-header__bottom').fadeToggle();
    $('body').toggleClass('active');
  });

  // $('.header-nav__link').on('click', function () {
  //   $('#burger').removeClass('active');
  //   $('.header__bottom').fadeOut();
  //   $('body').removeClass('active');
  // });

  $('.sp-header__bottom').on('click', function () {
    $('#burger').removeClass('active');
    $('.sp-header__bottom').fadeOut();
    $('body').removeClass('active');
  });


  
  //画面をスクロールしたらフェードイン
  // $(window).scroll(function(){
  //   if($(this).scrollTop()>100){
  //     $('#burger').fadeIn(400);
  //   }
  //   else{
  //     $('#burger').fadeOut(400);
  //   }
  // });













});