/*! jQuery plugin incremental counter 1.0.1 - MIT license - Copyright 2015 Mikhael GERBET */
!function(a){a.fn.incrementalCounter=function(b){var c={digits:4},d=function(a,b,c){return c=c||"0",a+="",a.length>=b?a:new Array(b-a.length+1).join(c)+a},e=function(b){var c=parseInt(a(b).data("current_value")),d=a(b).data("end_value"),e=20;5>d-c?(e=200,c+=1):15>d-c?(e=50,c+=1):50>d-c?(e=25,c+=3):(e=25,c+=parseInt((d-c)/24)),a(b).data({current_value:c}),e?setTimeout(function(){f(a(b),c)},e):f(a(b),c)},f=function(b,c){var f=d(c,b.data("digits")),g=f.split(""),h=a(b).data("end_value"),i=a(b).find(".num");a(g).each(function(b,c){a(i[b]).text(g[b])}),h!=c&&e(b)},b=a.extend(c,b);return this.each(function(c,d){var f=b.digits,g=d.getAttribute("data-digits")?d.getAttribute("data-digits"):f,h=parseInt(d.getAttribute("data-value"));g="auto"===g||g<String(h).length?String(h).length:g,a(d).data({current_value:0,end_value:h,digits:g,current_speed:0});for(var i=0;g>i;i++)a(d).append('<div class="num">0</div>');e(a(d))}),this}}(jQuery);


$(".iCount").incrementalCounter();
$(".iCount2").incrementalCounter({
  "digits": 3
});