/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 * Project:  cv@0.2.4 - Modern CV, Resume and Portfolio website
 * Homepage: https://github.com/akhilrajmailbox/cv
 * License:  MIT
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 */
!function(e,t){if("function"==typeof define&&define.amd)define(["module","exports"],t);else if("undefined"!=typeof exports)t(module,exports);else{var n={exports:{}};t(n,n.exports),e.WOW=n.exports}}(this,(function(e,t){"use strict";var n,i;function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function isIn(e,t){return t.indexOf(e)>=0}function extend(e,t){for(var n in t)if(null==e[n]){var i=t[n];e[n]=i}return e}function createEvent(e){var t=!(arguments.length<=1||void 0===arguments[1])&&arguments[1],n=!(arguments.length<=2||void 0===arguments[2])&&arguments[2],i=arguments.length<=3||void 0===arguments[3]?null:arguments[3],o=void 0;return null!=document.createEvent?(o=document.createEvent("CustomEvent")).initCustomEvent(e,t,n,i):null!=document.createEventObject?(o=document.createEventObject()).eventType=e:o.eventName=e,o}function addEvent(e,t,n){null!=e.addEventListener?e.addEventListener(t,n,!1):null!=e.attachEvent?e.attachEvent("on"+t,n):e[t]=n}function removeEvent(e,t,n){null!=e.removeEventListener?e.removeEventListener(t,n,!1):null!=e.detachEvent?e.detachEvent("on"+t,n):delete e[t]}var s=window.WeakMap||window.MozWeakMap||function(){function WeakMap(){_classCallCheck(this,WeakMap),this.keys=[],this.values=[]}return o(WeakMap,[{key:"get",value:function get(e){for(var t=0;t<this.keys.length;t++){if(this.keys[t]===e)return this.values[t]}}},{key:"set",value:function set(e,t){for(var n=0;n<this.keys.length;n++){if(this.keys[n]===e)return this.values[n]=t,this}return this.keys.push(e),this.values.push(t),this}}]),WeakMap}(),a=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(i=n=function(){function MutationObserver(){_classCallCheck(this,MutationObserver),"undefined"!=typeof console&&null!==console&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}return o(MutationObserver,[{key:"observe",value:function observe(){}}]),MutationObserver}(),n.notSupported=!0,i),r=window.getComputedStyle||function getComputedStyle(e){var t=/(\-([a-z]){1})/g;return{getPropertyValue:function getPropertyValue(n){"float"===n&&(n="styleFloat"),t.test(n)&&n.replace(t,(function(e,t){return t.toUpperCase()}));var i=e.currentStyle;return(null!=i?i[n]:void 0)||null}}},l=function(){function WOW(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];_classCallCheck(this,WOW),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null,resetAnimation:!0},this.animate=function animateFactory(){return"requestAnimationFrame"in window?function(e){return window.requestAnimationFrame(e)}:function(e){return e()}}(),this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=extend(e,this.defaults),null!=e.scrollContainer&&(this.config.scrollContainer=document.querySelector(e.scrollContainer)),this.animationNameCache=new s,this.wowEvent=createEvent(this.config.boxClass)}return o(WOW,[{key:"init",value:function init(){this.element=window.document.documentElement,isIn(document.readyState,["interactive","complete"])?this.start():addEvent(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function start(){var e=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var t=0;t<this.boxes.length;t++){var n=this.boxes[t];this.applyStyle(n,!0)}(this.disabled()||(addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live)&&new a((function(t){for(var n=0;n<t.length;n++)for(var i=t[n],o=0;o<i.addedNodes.length;o++){var s=i.addedNodes[o];e.doSync(s)}})).observe(document.body,{childList:!0,subtree:!0})}},{key:"stop",value:function stop(){this.stopped=!0,removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),removeEvent(window,"resize",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:"sync",value:function sync(){a.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function doSync(e){if(null==e&&(e=this.element),1===e.nodeType)for(var t=(e=e.parentNode||e).querySelectorAll("."+this.config.boxClass),n=0;n<t.length;n++){var i=t[n];isIn(i,this.all)||(this.boxes.push(i),this.all.push(i),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(i,!0),this.scrolled=!0)}}},{key:"show",value:function show(e){return this.applyStyle(e),e.className=e.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(e),function emitEvent(e,t){null!=e.dispatchEvent?e.dispatchEvent(t):t in(null!=e)?e[t]():"on"+t in(null!=e)&&e["on"+t]()}(e,this.wowEvent),this.config.resetAnimation&&(addEvent(e,"animationend",this.resetAnimation),addEvent(e,"oanimationend",this.resetAnimation),addEvent(e,"webkitAnimationEnd",this.resetAnimation),addEvent(e,"MSAnimationEnd",this.resetAnimation)),e}},{key:"applyStyle",value:function applyStyle(e,t){var n=this,i=e.getAttribute("data-wow-duration"),o=e.getAttribute("data-wow-delay"),s=e.getAttribute("data-wow-iteration");return this.animate((function(){return n.customStyle(e,t,i,o,s)}))}},{key:"resetStyle",value:function resetStyle(){for(var e=0;e<this.boxes.length;e++){this.boxes[e].style.visibility="visible"}}},{key:"resetAnimation",value:function resetAnimation(e){if(e.type.toLowerCase().indexOf("animationend")>=0){var t=e.target||e.srcElement;t.className=t.className.replace(this.config.animateClass,"").trim()}}},{key:"customStyle",value:function customStyle(e,t,n,i,o){return t&&this.cacheAnimationName(e),e.style.visibility=t?"hidden":"visible",n&&this.vendorSet(e.style,{animationDuration:n}),i&&this.vendorSet(e.style,{animationDelay:i}),o&&this.vendorSet(e.style,{animationIterationCount:o}),this.vendorSet(e.style,{animationName:t?"none":this.cachedAnimationName(e)}),e}},{key:"vendorSet",value:function vendorSet(e,t){for(var n in t)if(t.hasOwnProperty(n)){var i=t[n];e[""+n]=i;for(var o=0;o<this.vendors.length;o++){e[""+this.vendors[o]+n.charAt(0).toUpperCase()+n.substr(1)]=i}}}},{key:"vendorCSS",value:function vendorCSS(e,t){for(var n=r(e),i=n.getPropertyCSSValue(t),o=0;o<this.vendors.length;o++){var s=this.vendors[o];i=i||n.getPropertyCSSValue("-"+s+"-"+t)}return i}},{key:"animationName",value:function animationName(e){var t=void 0;try{t=this.vendorCSS(e,"animation-name").cssText}catch(n){t=r(e).getPropertyValue("animation-name")}return"none"===t?"":t}},{key:"cacheAnimationName",value:function cacheAnimationName(e){return this.animationNameCache.set(e,this.animationName(e))}},{key:"cachedAnimationName",value:function cachedAnimationName(e){return this.animationNameCache.get(e)}},{key:"scrollHandler",value:function scrollHandler(){this.scrolled=!0}},{key:"scrollCallback",value:function scrollCallback(){if(this.scrolled){this.scrolled=!1;for(var e=[],t=0;t<this.boxes.length;t++){var n=this.boxes[t];if(n){if(this.isVisible(n)){this.show(n);continue}e.push(n)}}this.boxes=e,this.boxes.length||this.config.live||this.stop()}}},{key:"offsetTop",value:function offsetTop(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;)t+=(e=e.offsetParent).offsetTop;return t}},{key:"isVisible",value:function isVisible(e){var t=e.getAttribute("data-wow-offset")||this.config.offset,n=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,i=n+Math.min(this.element.clientHeight,function getInnerHeight(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight}())-t,o=this.offsetTop(e),s=o+e.clientHeight;return o<=i&&s>=n}},{key:"disabled",value:function disabled(){return!this.config.mobile&&function isMobile(e){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)}(navigator.userAgent)}}]),WOW}();t.default=l,e.exports=t.default}));
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 * Package:  cv@0.2.4
 * Build:    production-b4
 * Compiled: 2020-01-05T09:50:39 UTC
 * Commit:   d4c3668bda078b5f24c96172868285e415f4985b
 */
