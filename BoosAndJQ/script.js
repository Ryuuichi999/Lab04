// ----- 1 -----

// jQuery Selector $(") //
// $(document).ready(function () {
//     $('#btn').click(function () {
//         $("p").hide();
//     });

// });

// ----- 2 ------

// jQuery Events //
// $(document).ready(function () {
//     $('p').on({
//         mouseenter:function(){
//             $(this).css('background-color',"lightgray");
//         },
//         mouseleave: function(){
//             $(this).css('background-color',"lightblue");
//         },
//         click: function(){
//             $(this).css('background-color',"yellow");
//         }
//     });
// });

// ----- 3 ------
//  jQuery Effect - Hide/Show/Toggle //
// $(document).ready(function () {
//     $('#show').click(function(){
//         $('p').show(1000);
//     });

//     $('#hide').click(function(){
//         $('p').hide(1000);
//     });

// });

// ----- 4 -----
// jQuery Effect Fade //
// $(document).ready(function () {
//     $('button').click(function(){
//         $("#div1").fadeToggle();
//         $("#div2").fadeToggle("slow");
//         $("#div3").fadeToggle(2000);
//     });
// });

// ----- 5 ------
// jquery Effect Slide
// $(document).ready(function () {
//     $("#flip").click(function(){
//             $("#panel").slideToggle();

//     });
// });

// ----- 6 ------
// jQuery Effect Animate
// $(document).ready(function () {
//     $("button").click(function () {
//       var div = $("div");
//       div.animate({ left: "250px", width: "100px", height: "100px" }, function () {

//         div.animate({ top: "150px" });
//       });
//     });
//   });

// ------ 7 ------
// jQuery Stop method
// $(document).ready(function () {
//     $('#flip').click(function(){
//         $('#panel').slideToggle(1000);
//     });
//     $('#stop').click(function(){
//         $('#panel').stop();
//     });

// });

// ------ 8 -----
// Callback Funtion
// $(document).ready(function () {
//   $("#flip").click(function () {
//     $("#panel").slideToggle(1000, function(){
//         alert("Slide is Finished");
//     });

//   });
//   $("#stop").click(function () {
//     $("#panel").stop();
//   });
// });

// ------ 9 ------
// jQuery Method Chaining
// $(document).ready(function () {
//     $("#flip").click(function () {
//         $("#panel").slideDown(1000).slideUp();
//     });
//     $("#stop").click(function () {
//         $("#panel").stop()
//     });
// });

// ------ 10 ------
// jQuery Get Html medthod text/html/val/attr
// $(document).ready(function () {
//     $('#btn1').click(function(){
//         alert("Text"+ $("#demo1").text());
//     });
//     $('#btn2').click(function(){
//         alert("Html"+ $("#demo1").html());
//     });
//     $('#btn3').click(function(){
//         alert("value"+ $("#demo2").val());
//     });
//     $('#btn4').click(function(){
//         alert($("#demo3").attr("href"));
//     });
// });

// ------ 11 -----
// jQuery Set Html medthod text/html/val/attr
// $(document).ready(function () {
//     $("#btn1").click(function(){
//         $("#demo1").text("Hello World");
//     });
//     $("#btn2").click(function(){
//         $("#demo2").html("<b>Hello World</b>");
//     });
//     $("#btn3").click(function(){
//         $("#demo3").val("Ryuuichi");
//     });
//     $("#btn4").click(function(){
//         $("#demo4").attr({
//             "href":"https://youtube.com",
//             "title":"Youtube"
//         })
//     });
// });

// ------ 12 ------
// jQuery Add Elenent medthod append/prepend/before/after
// $(document).ready(function () {
//     $("#btn1").click(function(){
//         $('p').append("<b>Hello World</b>");
//     });
//     $("#btn2").click(function(){
//         $('ol').append("<li>Appended Item</li>");
//     });
//     $("#btn3").click(function(){
//         $('.box').before("<b>Before Text</b>");
//     });
//     $("#btn4").click(function(){
//         $('.box').after("<b>After Text</b>");
//     });
// });

// ----- 13 ------
// jQuery Remove Element
// $(document).ready(function () {
//     $("#btn1").click(function(){
//         $("#div1").empty();
//     });
// });

// ----- 14 -----
// jQuery css Add/Remove/Toggle method
// $(document).ready(function () {
//   $("button").click(function () {
//     $("p").toggleClass("red");
//   });

// });

// ----- 15 ----
// css Method
// $(document).ready(function () {
//   $("p").css({
//     "background-color": "red","color":"white"
//   });
// });

// ----- 16 -----
// jQuery traversing
// jQuery Ancestors
// $(document).ready(function () {
//     $("span").parents().css({"color":"red","border":"2px solid red"});
// });

// jQuery traversing Descendaants
// $(document).ready(function () {
//     $("div").children().css({"color":"red","border":"2px solid red"});
// });

// jQuery traversing Siblings
// $(document).ready(function () {
//     $("h2").siblings().css({"color":"red","border":"2px solid red"});
// });

// Flitering Methodng Siblings
//  $(document).ready(function () {
//    $("div").first().css({ color: "red", border: "2px solid red" });
//  });
