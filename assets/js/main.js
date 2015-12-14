// baseline v1.0.0 | (c) weaverthemes.com | MIT licensed
!function(){"use strict";var t=function(t,e,n){var i,s=e.split(" ");for(i in s)t.addEventListener(s[i],n)};!function(){function t(t){this.el=t;for(var e=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),n=0;n<e.length;n++)i.call(this,e[n])}function e(t,e,n){Object.defineProperty?Object.defineProperty(t,e,{get:n}):t.__defineGetter__(e,n)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var n=Array.prototype,i=n.push,s=n.splice,o=n.join;t.prototype={add:function(t){this.contains(t)||(i.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var e=0;e<this.length&&this[e]!=t;e++);s.call(this,e,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,e(Element.prototype,"classList",function(){return new t(this)})}}();var e=document.querySelector("body");skel.breakpoints({xlarge:"(max-width: 1680px)",large:"(max-width: 1280px)",medium:"(max-width: 980px)",small:"(max-width: 736px)",xsmall:"(max-width: 480px)"}),e.classList.add("is-loading"),window.addEventListener("load",function(){e.classList.remove("is-loading")});var n,i=document.querySelector("#nav"),s=document.querySelector('a[href="#nav"]');t(i,"click touchend",function(t){t.stopPropagation()}),t(e,"click touchend",function(t){i.classList.remove("visible")}),s.addEventListener("click",function(t){t.preventDefault(),t.stopPropagation(),i.classList.toggle("visible")}),n=document.createElement("a"),n.href="#",n.className="close",n.tabIndex=0,i.appendChild(n),window.addEventListener("keydown",function(t){27==t.keyCode&&i.classList.remove("visible")}),n.addEventListener("click",function(t){t.preventDefault(),t.stopPropagation(),i.classList.remove("visible")})}();
/*! fluidvids.js v2.4.1 | (c) 2014 @toddmotto | https://github.com/toddmotto/fluidvids */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t:e.fluidvids=t()}(this,function(){"use strict";function e(e){return new RegExp("^(https?:)?//(?:"+d.players.join("|")+").*$","i").test(e)}function t(e,t){return parseInt(e,10)/parseInt(t,10)*100+"%"}function i(i){if((e(i.src)||e(i.data))&&!i.getAttribute("data-fluidvids")){var n=document.createElement("div");i.parentNode.insertBefore(n,i),i.className+=(i.className?" ":"")+"fluidvids-item",i.setAttribute("data-fluidvids","loaded"),n.className+="fluidvids",n.style.paddingTop=t(i.height,i.width),n.appendChild(i)}}function n(){var e=document.createElement("div");e.innerHTML="<p>x</p><style>"+o+"</style>",r.appendChild(e.childNodes[1])}var d={selector:["iframe","object"],players:["www.youtube.com","player.vimeo.com"]},o=[".fluidvids {","width: 100%; max-width: 100%; position: relative;","}",".fluidvids-item {","position: absolute; top: 0px; left: 0px; width: 100%; height: 100%;","}"].join(""),r=document.head||document.getElementsByTagName("head")[0];return d.render=function(){for(var e=document.querySelectorAll(d.selector.join()),t=e.length;t--;)i(e[t])},d.init=function(e){for(var t in e)d[t]=e[t];d.render(),n()},d});fluidvids.init({selector: ['iframe'],players: ['www.youtube.com', 'player.vimeo.com']});