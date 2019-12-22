// build time:Sun Dec 22 2019 23:37:30 GMT+0800 (中国标准时间)
$(document).ready(function(){$(document).on("click",".fold_hider",function(){$(">.fold",this.parentNode).slideToggle();$(">:first",this).toggleClass("open")});$("div.fold").css("display","none")});
//rebuild by neat 