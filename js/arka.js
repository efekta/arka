$(document).ready(function($){

  var example = $('#spfish').superfish({
    speed:       'fast',                          // faster animation speed
  });

  
  $( "#tabs_response" ).tabs({show: 'fade', hide: 'fade'});
  

  $('#slider').nivoSlider({
    controlNav: false, 
    directionNav: true,
    pauseTime: 5000
  });

  // Modals
  var overlay = $('.overlay');
  var open_modal = $('.open_modal');
  var close = $('.modal_close, .overlay');
  var modal = $('.modal_div');
  open_modal.click( function(event){
    event.preventDefault();
    var div = $(this).attr('data-href');
    overlay.fadeIn(400,
      function(){
        $(div)
          .css('display', 'table').css('z-index', '1000')
          .animate({opacity: 1}, 200);
      });
  });

  function closeModal() {
    modal.animate({opacity: 0}, 200,
      function(){
        $(this).css('display', 'none').css('z-index', '0');
        overlay.fadeOut(400);
      }
    );
  }

  close.click( function(){
    closeModal();
   
  });

  $(this).keydown(function(eventObject){
    if (eventObject.which == 27)
      closeModal();
  });

$(".fancygallery").attr('rel', 'gallery').fancybox({ padding : 0 });

$(".fancybox").fancybox({ padding : 0 });

$(".projects").each(function(){
	initialize_owl($(this));	
});

// setTimeout(function(){
// 	$( "#contenttabs" ).tabs({show: 'fade', hide: 'fade'});
// }, 2000);



function initialize_owl(el) {  
 //  el.owlCarousel({
	//   items: 3,
	//   margin: 20,
	// })

  el.owlCarousel({
    loop:false,
    margin:20,
    nav:true,
    items: 3
  })

  // var minHeight = 0;

  // el.find('.item-project').css("width",281);

  // el.find('.item-project').each(function(){
  //   var ipHeight = $(this).innerHeight();
  //   console.log(ipHeight);

  //   if(minHeight < ipHeight){
  //     minHeight = ipHeight;
  //   }
  // });

  // console.log(minHeight);

  // el.find('.item-project').css("height",minHeight);
  // el.find('.item-project').css("width",'auto');
}

// function destroy_owl(el) {
//     el.data('owlCarousel').destroy();
// }


$('#requestyour_time1').timepicker({ 'timeFormat': 'H:i:s' });
$('#requestyour_time2').timepicker({ 'timeFormat': 'H:i:s' });

$('.FormAjax').submit(function(){
  var method = $(this).attr('method');
  var action = $(this).attr('action');
  var id = $(this).attr('id');
  var form_data = $(this).serialize();    
  console.log('OK');
  $.ajax({
    url: action,
    type: method,
    data: form_data,        
    datatype: "html",         
    success: function (data) {
      var form_content = $(data).find("#" + id).html();  
      console.log(form_content);  
      $("#"+id).html(form_content);
    }     
  });
  return false;
});

var topnavHeight = $('#topnav').outerHeight();
$(window).on('scroll load', function(){
  
    if ($(this).scrollTop() >= topnavHeight) {
      $('body').addClass('fixed-nav');
    } else {
      $('body').removeClass('fixed-nav');
    }
});

$('.btn').each(function(el){
  if($(this).find('i').length){
    $(this).addClass('icons');
  }
});


// Gallery load
$('.gallery .gallery-item').hide();
$('.gallery .group-item').each(function(index){
  x=10;
  size_th_box = parseInt($(this).find(".gallery-item").length);
  
  $(this).attr('data-size-box', size_th_box);
  $(this).attr('data-x', x);
    $(this).find('.gallery-item:lt('+x+')').show();

    if(size_th_box > x){
      $(this).append('<div class="buttons"><a class="btn icons"><i class="fas fa-sync-alt"></i><span class="btext" data-text="Показать еще">Показать еще</span></a></div>'); 
    }     
});
  
  $('.gallery .group-item .btn').click(function () {
    obj = $(this).closest('.group-item');
    var x = parseInt(obj.attr('data-x'));
    var size_th_box = parseInt(obj.attr('data-size-box'));

    console.log(x); // 10
    console.log(size_th_box); // 16

    if(x+10 <= size_th_box){
      x = x+10;
    }else{
      x = size_th_box;
      $(this).hide();
    }

    obj.attr('data-x', x);      
     
    obj.find('.gallery-item:lt('+x+')').show();
  }); 

  $('.review .review-wrapper').owlCarousel({
    loop:false,
    margin:0,
    nav:false,
    items: 3
  })
});

$(document).ready(overallHeight);
$(window).on('resize',overallHeight);
function overallHeight() {
  setTimeout(function(){
    var oHeight = 0;
    $('.overallh').css("height", '');
    $('.overallh').each(function(e){
      if($(this).height()>oHeight) oHeight = $(this).height();    
    });
    $('.overallh').css("height", oHeight);

    var oHeight = 0;
    $('.akcii .akcii-item-head').css("height", '');
    $('.akcii .akcii-item-head').css("line-height", '');
    $('.akcii .akcii-item-head').each(function(e){
      if($(this).height()>oHeight) oHeight = $(this).height();    
    });
    $('.akcii .akcii-item-head').css("height", oHeight);
    $('.akcii .akcii-item-head').css("line-height", oHeight+'px');


  }, 1000); 

  /*========================
   mob menu
   =======================*/
  $(".menu-toggle").on('click', function() {
    $(this).toggleClass("on");
    $('.mob-nav').toggleClass("show");
    // $('.nav').toggleClass("nav_hide");
    // $('body').toggleClass('overflow');
  });
  // jQuery(window).width() <= 991 && $(".main-nav__list li").on('click', function() {
  //   $('.menu-toggle').removeClass("on");
  //   $('.main-nav__list').removeClass("show");
  //   // $('.nav').removeClass("nav_hide");
  //   $('body').removeClass('overflow');
  //   });
  //   $('#top-nav .dropdown > a').on('click', function(){
  //   var clicks = $(this).data('clicks');    
  //   if (clicks) {
  //     $(this).parent('.dropdown').find(".sub-menu").hide();
  //   } else {
  //     $(this).parent('.dropdown').children( ".sub-menu" ).show();
  //   }
  //   $(this).data("clicks", !clicks);    
  // });

$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    };
  } 

  var accordion = new Accordion($('#accordion'), false);
});

}





