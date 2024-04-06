// login-form-open-modal-start========================
$(document).ready(function(){
  $('#login_form_btn').click(function(){
    $('.login-form, .overlay_login').addClass('active');
  })
  $('.close_login').click(function(){
    $('.login-form, .overlay_login').removeClass('active');
  })
  $(document).mouseup(function(e){
    var mouseBox= $('.login-form, .overlay_login');
    if(!mouseBox.is(e.target) && mouseBox.has(e.target).length==0){
      mouseBox.removeClass('active');
    }
  })

})
// end=============================================

// search-scrolling-listing-code=====================
$(document).ready(function(){
  $('#search_btn').focus(function(){
    $('#scroll-text').hide();
  })
  $('#search_btn').blur(function(){
    $('#scroll-text').show();
  })
})
// ============end=================================

// popular-products-section====================
$(document).ready(function(){
    $('.my-slider, .my-slider-drinks, .my-slider-snacks').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      dots: true,
      speed: 300,
      infinite: true,
      autoplaySpeed: 5000,
      autoplay: false,
      responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
    });
  });

  
//   end=========


// location-click-funtionality===================================
$(document).ready(function(){
  $('#openModal').click(function(){
    $('.cardbox, .overlay').addClass('active');
  })
  $('.closebtn').click(function(){
    $('.cardbox, .overlay').removeClass('active');
  })
  $(document).mouseup(function(e) {
    var container = $(".cardbox, .overlay");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass('active');
    }
});
})
// end=================

// navbar-scroll-funtionality====================
window.addEventListener("scroll",()=>{
  let navbar= document.querySelector('.nav-sec');
  if(window.scrollY >=120){
    navbar.classList.add('sticky')
  }
  else{
    navbar.classList.remove('sticky')
  }
})
// end===============================


// product-details-images with multiple image================
function clickimg(smallimg){
  let image = document.querySelector('.imagebox');
  image.src = smallimg.src;
}
// let clickimg = document.querySelectorAll('.clickimg');
// clickimg.ForEach(function(smallimg){
//   smallimg.addEventListener('click',()=>{
//     clickimgtop(smallimg);
//   })
// })
// ============================end===========================================

// product-details-slider-button===================
$(document).ready(function(){
  var distance = 250;
  $('#left-arrow').click(function(){
    $('#tabs').animate({
      scrollLeft: "-=" + distance + "px"
    }, 'slow');
  })
  $('#right-arrow').click(function(){
    $('#tabs').animate({
      scrollLeft: "+=" + distance + "px"
    }, 'slow');
  })
})

// increment & decrement value for products==================================
let CountValue= document.getElementById('countValue');
let plusProduct= document.getElementById('plusProduct')
let minusProduct= document.getElementById('minusProduct')
let basePrice= document.getElementById('basePrice')
let totalprice= document.getElementById('totalprice')

let add_To_Cart= document.querySelector('.add_cart');
let count= 0;
plusProduct.addEventListener('click', ()=>{
  if(count>= 5){
    return 5;
  }
  else{
    count++;
  CountValue.innerHTML= count;
  // for add-to-cart icon counter code================
  add_To_Cart.innerHTML= count;
  // end
  itemValue = parseInt(CountValue.innerHTML);
  base_price = parseInt(basePrice.innerHTML);
  totalprice.innerText = parseInt(itemValue) * parseInt(base_price) ;
  // console.log(typeof(totalprice.innerText));
  }
  
})
// for decrement product============
minusProduct.addEventListener('click', ()=>{
  if(count== -0){
    return 0;
  }
  else{
    --count;
    CountValue.innerHTML= count;
    itemValue = parseInt(CountValue.innerHTML);
  base_price = parseInt(basePrice.innerHTML);
    totalprice.innerText = parseInt(itemValue) * parseInt(base_price) ;
  }
  
})
// increment & decrement value for products--end==================================

// product-card add btn click================================

let detail_btn = document.querySelectorAll('.detail-btn');

detail_btn.forEach(detailOn => {
  detailOn.addEventListener('click', () => {
    // Find the corresponding add-to-crt-wrap element relative to the clicked detail-btn
    let add_crt_wrap = detailOn.closest('.dz-img-box').querySelector('.add-to-crt-wrap');
    
    // Hide the detail-btn and show the add-to-crt-wrap
    detailOn.style.display = 'none';
    add_crt_wrap.style.display = "block";
  });
});
// ===============end====================

