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



// let searchUi = ".search_ui"; // 絞り込み検索条件設定エリア
// let listItem = ".archive-card"; // 検索対象アイテム
// let hideItem = "hide_item"; // 対象外アイテムに付与されるclass名
// let checkBox = 'input[name="products"]'; //チェックボックスのnameを指定

// // 絞り込み条件の変更
// $(function () {
//   $(document).on("change", searchUi + " input", function () {
//     search_filter();
//   });
// });

// function search_filter() {
//   // 非表示状態を解除
//   $(listItem).removeClass(hideItem);
//   for (let i = 0; i < $(searchUi).length; i++) {
//     let name = $(searchUi).eq(i).find("input").attr("name");
//     // チェックされた検索条件を取得
//     let searchData = get_selected_input_items(name);
//     // チェック項目無し or 全てを選択している場合
//     if (searchData.length === 0 || searchData[0] === "") {
//       continue;
//     }

//     // リスト内の各アイテムをチェック
//     for (let j = 0; j < $(listItem).length; j++) {
//       // アイテムに設定している項目を取得
//       let itemData = get_setting_values_in_item($(listItem).eq(j), name);
//       // console.log(itemData);
//       // console.log(searchData);
//       // 絞り込み対象かどうかを調べる
//       let check = array_match_check(itemData, searchData);
//       console.log(check);
//       if (!check) {
//         $(listItem).eq(j).addClass(hideItem);
//       }
//     }
//   }
// }

// // チェックの入った値の一覧を取得する
// function get_selected_input_items(name) {
//   let searchData = [];
//   $("[name=" + name + "]:checked").each(function () {
//     searchData.push($(this).val());
//   });
//   // console.log(searchData);
//   return searchData;
// }

// // リスト内のアイテムに設定している値の一覧を取得する
// function get_setting_values_in_item(target, data) {
//   let itemData = target.data(data);
//   if (!Array.isArray(itemData)) {
//     itemData = [itemData];
//   }
//   return itemData;
// }

// // 2つの配列内で一致する文字列があるかどうかを調べる
// // function array_match_check(arr1, arr2) {
// //   // 絞り込み対象かどうかを調べる
// //   let arrCheck = false;
// //   for (let i = 0; i < arr1.length; i++) {
// //     if (arr2.indexOf(arr1[i]) >= 0) {
// //       arrCheck = true;
// //       break;
// //     }
// //   }
// //   return arrCheck;
// // }
// function array_match_check(arr1, arr2) {
//   // 絞り込み対象かどうかを調べる
//   var arrCheck = false;
//   for (var i = 0; i < arr2.length; i++) {
//   if(arr1.indexOf(arr2[i]) >= 0) {
//   arrCheck = true;
//   //break;
//   }
//   else {
//   return false;
//   }
//   }
//   return arrCheck;
//   }

// // 全サイズ選択解除
// $(function () {
//   $("#checkAll").on("click", function () {
//     $(".size_sort").prop("checked", this.checked);
//   });
//   $(".size_sort").on("click", function () {
//     if ($("#sizeBox :checked").length == $("#sizeBox :input").length) {
//       $("#checkAll").prop("checked", "checked");
//     } else {
//       $("#checkAll").prop("checked", false);
//     }
//   });
// });



var searchBox = '.search-area'; // 絞り込む項目を選択するエリア
var listItem = '.archive-card';   // 絞り込み対象のアイテム
var hideClass = 'is-hide';     // 絞り込み対象外の場合に付与されるclass名

$(function() {
  // 絞り込み項目を変更した時
  $(document).on('change', searchBox + ' input', function() {
    search_filter();
  });
});

/**
 * リストの絞り込みを行う
 */
function search_filter() {
  // 非表示状態を解除
  $(listItem).removeClass(hideClass);
  for (var i = 0; i < $(searchBox).length; i++) {
    var name = $(searchBox).eq(i).find('input').attr('name');
    // 選択されている項目を取得
    var searchData = get_selected_input_items(name);
    // 選択されている項目がない、またはALLを選択している場合は飛ばす
    if(searchData.length === 0 || searchData[0] === '') {
      continue;
    }
    // リスト内の各アイテムをチェック
    for (var j = 0; j < $(listItem).length; j++) {
      // アイテムに設定している項目を取得
      var itemData = get_setting_values_in_item($(listItem).eq(j), name);
      // 絞り込み対象かどうかを調べる
      var check = array_match_check(itemData, searchData);
      if(!check) {
        $(listItem).eq(j).addClass(hideClass);
      }
    }
  }
}

/**
 * inputで選択されている値の一覧を取得する
 * @param  {String} name 対象にするinputのname属性の値
 * @return {Array}       選択されているinputのvalue属性の値
 */
function get_selected_input_items(name) {
  var searchData = [];
  $('[name=' + name + ']:checked').each(function() {
    searchData.push($(this).val());
  });
  return searchData;
}

/**
 * リスト内のアイテムに設定している値の一覧を取得する
 * @param  {Object} target 対象にするアイテムのjQueryオブジェクト
 * @param  {String} data   対象にするアイテムのdata属性の名前
 * @return {Array}         対象にするアイテムのdata属性の値
 */
function get_setting_values_in_item(target, data) {
  var itemData = target.data(data);
  if(!Array.isArray(itemData)) {
    itemData = [itemData];
  }
  return itemData;
}

/**
 * 2つの配列内で一致する文字列があるかどうかを調べる
 * @param  {Array} arr1 調べる配列1
 * @param  {Array} arr2 調べる配列2
 * @return {Boolean}    一致する値があるかどうか
 */
function array_match_check(arr1, arr2) {
  // 絞り込み対象かどうかを調べる
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