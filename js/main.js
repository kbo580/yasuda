jQuery(function($){

$(function(){

  //----- スマホ用メニュー -----
  // $('.header__bottom').hide();

  $('#burger').on('click', function(){
    $(this).toggleClass('active');
    $('.sp-header__bottom').fadeToggle();
    $('body').toggleClass('active');
  });

  $('.sp-header__bottom').on('click', function () {
    $('#burger').removeClass('active');
    $('.sp-header__bottom').fadeOut();
    $('body').removeClass('active');
  });

  //----- ナビのスクロール -----
  $('.header-nav__link').on('click', function(){
    var id =$(this).attr('href');
    var pos = $(id).offset().top; 
    $('html, body').animate({'scrollTop': pos}, 600);
  });
  
  // ------ topへ戻る ----
  $('#toTop').on('click', function() {
    $('body, html').animate({ scrollTop: 0 }, 600);
    return false;
  });

  //画面をスクロールしたらフェードイン
  $(window).scroll(function(){
    if($(this).scrollTop()>500){
      $('#toTop').fadeIn(400);
    }
    else{
      $('#toTop').fadeOut(400);
    }
  });

  //アーカイブページの絞り込み
  var searchBox = '.search-area'; 
  var listItem = '.archive-card';  
  var hideClass = 'is-hide'; 
  $(function() {
    $(document).on('change', searchBox + ' input', function() {
      search_filter();
    });
  });

  function search_filter() {
    $(listItem).removeClass(hideClass);
    for (var i = 0; i < $(searchBox).length; i++) {
      var name = $(searchBox).eq(i).find('input').attr('name');
      var searchData = get_selected_input_items(name);
      if(searchData.length === 0 || searchData[0] === '') {
        continue;
      }
      for (var j = 0; j < $(listItem).length; j++) {
        var itemData = get_setting_values_in_item($(listItem).eq(j), name);
        var check = array_match_check(itemData, searchData);
        if(!check) {
          $(listItem).eq(j).addClass(hideClass);
        }
      }
    }
  }

  function get_selected_input_items(name) {
    var searchData = [];
    $('[name=' + name + ']:checked').each(function() {
      searchData.push($(this).val());
    });
    return searchData;
  }

  function get_setting_values_in_item(target, data) {
    var itemData = target.data(data);
    if(!Array.isArray(itemData)) {
      itemData = [itemData];
    }
    return itemData;
  }

  function array_match_check(arr1, arr2) {
    var arrCheck = false;
    for (var i = 0; i < arr1.length; i++) {
      if(arr2.indexOf(arr1[i]) >= 0) {
        arrCheck = true;
        break;
      }
    }
    return arrCheck;
  }
















});

});
