$(document).ready(function(){
  $('.header').height($(window).height());
})

$(".navbar a").click(function(){
  $("body,html").animate({
    scrollTop:$("#" + $(this).data('value')).offset().top - $(".navbar").height()
  },500)

})