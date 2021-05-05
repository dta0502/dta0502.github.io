$(document).ready(function(){
  $(document).on('click', '.fold_hider', function(){
      $('>.fold', this.parentNode).slideToggle();
      $('>:first', this).toggleClass('open');
  });
  //默认情况下折叠
  $("div.fold").css("display","none");
});