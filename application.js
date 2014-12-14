$(document).ready(function(){
   function canvas() {
    window.requestAnimationFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(f){window.setTimeout(f,40/60);
  };};}

var canvas1;
var canvas2;
var canvas3;
var canvas4;
var canvas5;
var canvas6;

var btc1 = new Image();
var btc2 = new Image();
var btc3 = new Image();
var btc4 = new Image();
var btc5 = new Image();
var btc6 = new Image();


btc1.src = '../images/6.png'; 
btc2.src = '../images/9.png';
btc3.src = "../images/3.png";  
btc4.src = '../images/2.png'; 
btc5.src = '../images/5.png'; 
btc6.src = '../images/8.png';

function init() {
drawAll();
}

function drawAll() {
setTimeout(function() {draw({src:btc1,x:720,canvas:"canvas1"})},500);
setTimeout(function() {draw({src:btc2,x:860,canvas:"canvas2"})},1000);
setTimeout(function() {draw({src:btc3,x:1000,canvas:"canvas3"})},1500);
setTimeout(function() {draw({src:btc4,x:1100,canvas:"canvas4"})},2000);
setTimeout(function() {draw({src:btc5,x:1200,canvas:"canvas5"})},2500);
setTimeout(function() {draw({src:btc6,x:1300,canvas:"canvas6"})},3000);
}

function draw(animation) {
       var color = animation.src;
       var x = animation.x;
       var canvas = document.getElementById(animation.canvas);
       var ctx = canvas.getContext("2d");
       var particle_count = Math.random() * (75 - 50) +70; 
       var particles = [];
       var particle;
         
        function Particle() {
         
            var W = canvas.width 
            var H = canvas.height 
            this.radius = Math.random() * (75 - 50) +5;
            this.x = x;
            this.y = 600;
            this.vx = Math.random() * (-30 - -5) + -5;
            this.vy = Math.random() * (-60 - -35) + -18;
            this.draw = function() {
            ctx.drawImage(color,this.x,this.y); 
            };
        }

        function renderFrame() {
            requestAnimationFrame(renderFrame);
            var W =canvas.width = window.innerWidth;
            var H =canvas.height = window.innerHeight;
            ctx.clearRect(0, 0, W, H);
            particles.forEach(function(particle) {
                particle.vy += 1;
                particle.x += particle.vx;
                particle.y += particle.vy;
                if (particle.y > 600) {
                  particle.vy -= 13;
                }
                particle.draw();
            });
        }   
        for (var i = 0; i < particle_count; i++) {
        particle = new Particle();
        particles.push(particle);
        }
        renderFrame();            
}
init();

$(document).ready(function currency() {
  $('#canvasusd, #canvasgbp, #canvaseur, #canvascny').addClass('noshow');
  $('#canvasusd').removeClass('noshow');
  $('.gbp').click(function() {
    $(this).addClass('current');
    $('.usd, .eur, .cny').removeClass('current');
    $('#canvasusd, #canvasgbp, #canvaseur, #canvascny').addClass('noshow');
    $('#canvasgbp').removeClass('noshow');
  });
  $('.eur').click(function() {
    $(this).addClass('current');
    $('.usd, .gbp, .cny').removeClass('current');
    $('#canvasusd, #canvasgbp, #canvaseur, #canvascny').addClass('noshow');
    $('#canvaseur').removeClass('noshow');
  });
  $('.cny').click(function() {
    $(this).addClass('current');
    $('.usd, .gbp, .eur').removeClass('current');
    $('#canvasusd, #canvasgbp, #canvaseur, #canvascny').addClass('noshow');
    $('#canvascny').removeClass('noshow');
  });
  $('.usd').click(function() {
    $(this).addClass('current');
    $('.cny, .gbp, .eur').removeClass('current');
    $('#canvasusd, #canvasgbp, #canvaseur, #canvascny').addClass('noshow');
    $('#canvasusd').removeClass('noshow');
  });
});

function currencyCall(currency) {
  var api = currency.api
  $.getJSON(api, function(json) {

           var price = (json['last']);
           var standardizeNum = price.toFixed(2);
           var string = String(standardizeNum);
           var array = String.prototype.split.call(string, "");
           console.log(array);

           var c = document.getElementById(currency.canvas);
           var ctx = c.getContext("2d");

          setTimeout( function() {drawNumbers(array[0],0,0,c,ctx)},500);
          setTimeout( function() {drawNumbers(array[1],140,0,c,ctx)},1000);
          setTimeout( function() {drawNumbers(array[2],280,0,c,ctx)},1500);
          setTimeout( function() {drawNumbers(array[3],420,0,c,ctx)},2000);
          setTimeout( function() {drawNumbers(array[4],560,0,c,ctx)},2500);
          setTimeout( function() {drawNumbers(array[5],700,0,c,ctx)},3000);
          setTimeout( function() {drawNumbers(array[6],840,0,c,ctx)},3500);             
  });
};
currencyCall({api:"https://api.bitcoinaverage.com/ticker/USD", canvas:"canvasusd"});
currencyCall({api:"https://api.bitcoinaverage.com/ticker/GBP", canvas:"canvasgbp"});
currencyCall({api:"https://api.bitcoinaverage.com/ticker/EUR", canvas:"canvaseur"});
currencyCall({api:"https://api.bitcoinaverage.com/ticker/CNY", canvas:"canvascny"});
 
    function drawNumbers(num,width,height,c,ctx) {
                
                var digit;

                switch (num) {
                  case ".":
                    digit=document.getElementById("decimal");
                  break;
                  case "0":
                   digit=document.getElementById("zero");
                  break;
                  case "1":
                   digit=document.getElementById("one");
                  break;
                  case "2":
                   digit=document.getElementById("two");
                  break;
                  case "3":
                   digit=document.getElementById("three");
                  break;
                  case "4":
                    digit=document.getElementById("four");
                  break;
                  case "5":
                    digit=document.getElementById("five");
                  break;
                  case "6":
                   digit=document.getElementById("six");
                  break;
                  case "7":
                   digit=document.getElementById("seven");
                  break;
                  case "8":
                   digit=document.getElementById("eight");
                  break;
                  case "9":
                   digit=document.getElementById("nine");
                  break;
                }
                ctx.drawImage(digit,width,height);
              }
});