// build time:Mon Dec 23 2019 23:29:55 GMT+0800 (中国标准时间)
$(document).ready(function(){$(document).on("click",".fold_hider",function(){$(">.fold",this.parentNode).slideToggle();$(">:first",this).toggleClass("open")});$("div.fold").css("display","none")});
//rebuild by neat 