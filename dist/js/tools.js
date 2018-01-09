"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function inArray(e,t){if(Array.prototype.indexOf)return t.indexOf(e);for(var n=0,o=t.length;n<o;n++)if(e===t[n])return n;return-1}function format(e){return e.getFullYear()+"-"+("0"+(e.getMonth()+1)).slice(-2)+"-"+("0"+e.getDate()).slice(-2)+" "+("0"+e.getHours()).slice(-2)+":"+("0"+e.getMinutes()).slice(-2)+":"+("0"+e.getSeconds()).slice(-2)}function getElementsByClassName(e,t){if((t=t||document).getElementsByClassName)return t.getElementsByClassName(e);for(var n=[],o=t.getElementsByTagName("*"),i=0,r=o.length;i<r;i++){-1!==inArray(e,o[i].className.split(" "))&&n.push(o[i])}return n}function $(e,t){return t=t||document,0===e.indexOf("#")?document.getElementById(e.slice(1)):0===e.indexOf(".")?getElementsByClassName(e.slice(1),t):t.getElementsByTagName(e)}function css(e,t,n){if("string"==typeof t&&void 0===n)return window.getComputedStyle?getComputedStyle(e)[t]:e.currentStyle[t];if("object"===(void 0===t?"undefined":_typeof(t)))for(var o in t)e.style[o]=t[o];else e.style[t]=n}function hide(e){css(e,"display","none")}function show(e){css(e,"display","block")}function on(e,t,n){e.addEventListener?(0===t.indexOf("on")&&(t=t.slice(2)),e.addEventListener(t,n,!1)):(0!==t.indexOf("on")&&(t="on"+t),e.attachEvent(t,n))}function off(e,t,n){e.removeEventListener?(0===t.indexOf("on")&&(t=t.slice(2)),e.removeEventListener(t,n,!1)):(0!==t.indexOf("on")&&(t="on"+t),e.detachEvent(t,n))}function offset(e,t){if(void 0===t){for(var n=0,o=0;null!==e;)n+=e.offsetTop,o+=e.offsetLeft,e=e.offsetParent;return{top:n,left:o}}n=0,o=0;for(var i=e.offsetParent;null!==i;)n+=i.offsetTop,o+=i.offsetLeft,i=i.offsetParent;css(e,{top:t.top-n+"px",left:t.left-o+"px"})}function page(e){return{x:e.pageX||e.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft),y:e.pageY||e.clientY+(document.documentElement.scrollTop||document.body.scrollTop)}}function cookie(e,t,n){if(void 0!==t){if((n=n||{}).expires){var o=new Date;o.setDate(o.getDate()+n.expires),n.expires=o.toUTCString()}var i=[encodeURIComponent(e),"=",encodeURIComponent(t),n.expires?";expires="+n.expires:"",n.path?";path="+n.path:"",n.domain?";domain="+n.domain:"",n.secure?";secure":""].join("");document.cookie=i}else for(var r=document.cookie.split("; "),s=0,f=r.length;s<f;s++){var a=r[s].split("=");if(decodeURIComponent(a.shift())===e)return decodeURIComponent(a.join("="))}}function removeCookie(e,t){(t=t||{}).expires=-1,cookie(e,"",t)}function animate(e,t,n,o){clearInterval(e.timer);var i={},r={};for(var s in t)i[s]=parseFloat(css(e,s)),r[s]=t[s]-i[s];var f=+new Date;e.timer=setInterval(function(){var s=Math.min(+new Date-f,n);for(var a in t){var c=s*r[a]/n+i[a];css(e,a,c+("opacity"===a?"":"px"))}s===n&&(clearInterval(e.timer),o&&o())},1e3/60)}function fadeIn(e,t,n){show(e),e.style.opacity=0,animate(e,{opacity:1},t,n)}function fadeOut(e,t,n){animate(e,{opacity:0},t,function(){hide(e),n&&n()})}