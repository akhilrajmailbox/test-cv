/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 * Project:  cv@0.2.4 - Modern CV, Resume and Portfolio website
 * Homepage: https://github.com/akhilrajmailbox/MyResume
 * License:  MIT
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof exports?t(require("jquery")):t(jQuery)}((function(t){var CountTo=function(e,o){this.$element=t(e),this.options=t.extend({},CountTo.DEFAULTS,this.dataOptions(),o),this.init()};CountTo.DEFAULTS={from:0,to:0,speed:1e3,refreshInterval:100,decimals:0,formatter:function formatter(t,e){return t.toFixed(e.decimals)},onUpdate:null,onComplete:null},CountTo.prototype.init=function(){this.value=this.options.from,this.loops=Math.ceil(this.options.speed/this.options.refreshInterval),this.loopCount=0,this.increment=(this.options.to-this.options.from)/this.loops},CountTo.prototype.dataOptions=function(){var t={from:this.$element.data("from"),to:this.$element.data("to"),speed:this.$element.data("speed"),refreshInterval:this.$element.data("refresh-interval"),decimals:this.$element.data("decimals")},e=Object.keys(t);for(var o in e){var i=e[o];void 0===t[i]&&delete t[i]}return t},CountTo.prototype.update=function(){this.value+=this.increment,this.loopCount++,this.render(),"function"==typeof this.options.onUpdate&&this.options.onUpdate.call(this.$element,this.value),this.loopCount>=this.loops&&(clearInterval(this.interval),this.value=this.options.to,"function"==typeof this.options.onComplete&&this.options.onComplete.call(this.$element,this.value))},CountTo.prototype.render=function(){var t=this.options.formatter.call(this.$element,this.value,this.options);this.$element.text(t)},CountTo.prototype.restart=function(){this.stop(),this.init(),this.start()},CountTo.prototype.start=function(){this.stop(),this.render(),this.interval=setInterval(this.update.bind(this),this.options.refreshInterval)},CountTo.prototype.stop=function(){this.interval&&clearInterval(this.interval)},CountTo.prototype.toggle=function(){this.interval?this.stop():this.start()},t.fn.countTo=function(e){return this.each((function(){var o=t(this),i=o.data("countTo"),n="object"==typeof e?e:{},s="string"==typeof e?e:"start";(!i||"object"==typeof e)&&(i&&i.stop(),o.data("countTo",i=new CountTo(this,n))),i[s].call(i)}))}}));
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - *
 * Package:  cv@0.2.4
 * Build:    production-b2
 * Compiled: 2020-02-04T15:00:30 UTC
 * Commit:   68976695d61ccc3db336b04685aa8cc4d6417950
 */
