!function(e){function t(t){for(var r,i,c=t[0],l=t[1],u=t[2],f=0,p=[];f<c.length;f++)i=c[f],o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(s&&s(t);p.length;)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var l=n[c];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./dist/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=l;a.push([130,1]),n()}({130:function(e,t,n){e.exports=n(325)},135:function(e,t,n){var r=n(136);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(137)(r,o);r.locals&&(e.exports=r.locals)},136:function(e,t,n){},325:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(128),i=n.n(a),c=(n(135),n(129)),l=n.n(c),u=n(38),s=n.n(u);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e){return(p="function"==typeof Symbol&&"symbol"===f(Symbol.iterator)?function(e){return f(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":f(e)})(e)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return!t||"object"!==p(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),y(this,b(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return o.a.createElement("button",{className:"u-btn c-weather--switch",onClick:this.props.triggerTemp},o.a.createElement("svg",{className:"u-icon__md","aria-labelledby":"title",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"},o.a.createElement("title",null,"Temperature"),this.props.onTempTrigger?o.a.createElement("use",{href:"./assets/sprite.svg#celsius"}):o.a.createElement("use",{href:"./assets/sprite.svg#fahrenheit"})))}}])&&m(n.prototype,a),i&&m(n,i),t}();h.propTypes={triggerTemp:s.a.func,onTempTrigger:s.a.boolean};var g=h;function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e){return(w="function"==typeof Symbol&&"symbol"===v(Symbol.iterator)?function(e){return v(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":v(e)})(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return!t||"object"!==w(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var j=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),S(this,_(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return o.a.createElement("div",{className:this.props.onLoading?"u-loading":"u-none"},o.a.createElement("svg",{className:"u-icon__md","aria-labelledby":"title",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"},o.a.createElement("title",null,"Icon"),o.a.createElement("use",{href:"./assets/sprite.svg#spin1"})))}}])&&E(n.prototype,a),i&&E(n,i),t}();j.propTypes={onLoading:s.a.bool};var T=j;function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e){return(x="function"==typeof Symbol&&"symbol"===N(Symbol.iterator)?function(e){return N(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":N(e)})(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var D=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),M(this,k(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return o.a.createElement("button",{className:"c-weather--reload",onClick:this.props.reloadData},o.a.createElement("svg",{className:"u-icon__md","aria-labelledby":"title",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"},o.a.createElement("title",null,"Reload"),o.a.createElement("use",{href:"sprite.svg#spin"})))}}])&&P(n.prototype,a),i&&P(n,i),t}();D.propTypes={reloadData:s.a.func};var C=D;n(96),n(97);function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e){return(A="function"==typeof Symbol&&"symbol"===L(Symbol.iterator)?function(e){return L(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":L(e)})(e)}function Y(e,t,n,r,o,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(r,o)}function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var F=function(e){function t(e){var n,r,a,i,c,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,a=I(t).call(this,e),n=!a||"object"!==A(a)&&"function"!=typeof a?B(r):a,i=B(B(n)),l=function(){if(window.innerWidth>1e3){var e=(new Date).getHours();n.appRoot.current.style.backgroundImage=e>5&&e<12?'url("./assets/img/simon-matzinger-345390-unsplash.jpg")':e>18&&e<5?'url("./assets/img/michael-liao-388166-unsplash.jpg")':'url("./assets/img/ales-krivec-24158-unsplash.jpg")'}},(c="setBackground")in i?Object.defineProperty(i,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[c]=l,n.state={location:{},weather:{},onTempTrigger:!1,onLoading:!0},n.appRoot=o.a.createRef(),n.getData=n.getData.bind(B(B(n))),n.reloadData=n.reloadData.bind(B(B(n))),n.triggerTemp=n.triggerTemp.bind(B(B(n))),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&W(e,t)}(t,r["Component"]),n=t,(a=[{key:"getData",value:function(){var e,t=(e=regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.get("/api/weather");case 2:t=e.sent,this.setState(function(e){return{location:t.data.location,weather:t.data,onLoading:!e.onLoading}});case 4:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){Y(a,r,o,i,c,"next",e)}function c(e){Y(a,r,o,i,c,"throw",e)}i(void 0)})});return function(){return t.apply(this,arguments)}}()},{key:"triggerTemp",value:function(){this.setState(function(e){return{onTempTrigger:!e.onTempTrigger}})}},{key:"reloadData",value:function(){this.setState(function(e){return{onLoading:!e.onLoading}}),this.getData()}},{key:"componentDidMount",value:function(){this.setBackground(),this.getData()}},{key:"render",value:function(){var e=this,t=this.state,n=t.weather,r=t.location,a=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];return o.a.createElement("div",{id:"app",ref:this.appRoot},o.a.createElement("header",null,o.a.createElement("img",{src:"./assets/logo_xs.png",alt:"hava"}),o.a.createElement(C,{reloadData:this.reloadData,onClick:this.reloadData})),o.a.createElement("div",{className:"c-container"},o.a.createElement("div",null,o.a.createElement(T,{onLoading:this.state.onLoading})),!this.state.onLoading&&n.currently?o.a.createElement("div",{className:"c-weather--container u-fade"},o.a.createElement("section",{className:"c-weather--grid"},o.a.createElement(g,{triggerTemp:this.triggerTemp,onTempTrigger:this.state.onTempTrigger}),o.a.createElement("svg",{className:"u-icon__xl","aria-labelledby":"title",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"},o.a.createElement("title",null,n.currently+" icon"),o.a.createElement("use",{href:"./assets/sprite.svg#"+n.currently.icon})),this.state.onTempTrigger?o.a.createElement("h2",{className:"c-weather--temp u-text-center"},Math.round(5*(n.currently.temperature-32)/9),o.a.createElement("span",{className:"u-small"}," °C")):o.a.createElement("h2",{className:"c-weather--temp u-text-center"},Math.round(n.currently.temperature),o.a.createElement("span",{className:"u-small"}," °F")),o.a.createElement("p",{className:"c-weather--area"},r.region.toUpperCase()+", "+r.country),o.a.createElement("p",{className:"c-weather--summary"},n.currently.summary)),o.a.createElement("div",{className:"u-flex-half"},o.a.createElement("section",{className:"c-weather--info"},o.a.createElement("div",{className:"c-weather--details"},o.a.createElement("p",{className:"t-info--value u-m-0"},n.currently.windSpeed),o.a.createElement("svg",{className:"u-icon__md","aria-labelledby":"title",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"},o.a.createElement("title",null,"Wind"),o.a.createElement("use",{href:"./assets/sprite.svg#strong-wind"})),o.a.createElement("p",{className:"t-info--title u-m-0"},"Wind")),o.a.createElement("div",{className:"c-weather--details"},o.a.createElement("p",{className:"t-info--value u-m-0"},n.currently.visibility),o.a.createElement("svg",{className:"u-icon__md","aria-labelledby":"title",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"},o.a.createElement("title",null,"Visibility"),o.a.createElement("use",{href:"./assets/sprite.svg#fog"})),o.a.createElement("p",{className:"t-info--title u-m-0"},"Visibility")),o.a.createElement("div",{className:"c-weather--details"},o.a.createElement("p",{className:"t-info--value u-m-0"},Math.round(100*n.currently.humidity)+"%"),o.a.createElement("svg",{className:"u-icon__md","aria-labelledby":"title",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"},o.a.createElement("title",null,"Humidity"),o.a.createElement("use",{href:"./assets/sprite.svg#humidity"})),o.a.createElement("p",{className:"t-info--title u-m-0"},"Humidity"))),o.a.createElement("section",{className:"c-weather--forecast"},n.hourly.data.map(function(e,t){return t<=4?o.a.createElement("div",{className:"c-forecast--grid",key:"forecast-"+t},o.a.createElement("svg",{className:"u-icon__md","aria-labelledby":"title",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"},o.a.createElement("title",null,e.icon),o.a.createElement("use",{href:"./assets/sprite.svg#"+e.icon})),o.a.createElement("p",{className:"c-forecast--time"},new Date(1e3*e.time).getHours()+":00")):""}))),o.a.createElement("section",{className:"c-weather--daily"},n.daily.data.map(function(t,n){return 0!==n&&n<=6?o.a.createElement("div",{className:"c-daily--grid",key:"forecast-"+n},o.a.createElement("svg",{className:"u-icon__md","aria-labelledby":"title",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid meet"},o.a.createElement("title",null,t.icon),o.a.createElement("use",{href:"./assets/sprite.svg#"+t.icon})),o.a.createElement("div",{className:"c-daily--forecast"},o.a.createElement("p",{className:"c-daily--time"},a[new Date(1e3*t.time).getDay()]),e.state.onTempTrigger?o.a.createElement("p",{className:"c-daily--time"},Math.round(5*(t.temperatureLow-32)/9),"/",Math.round(5*(t.temperatureHigh-32)/9)," ","°C"):o.a.createElement("p",{className:"c-daily--time"},Math.round(t.temperatureLow),"/",Math.round(t.temperatureHigh)," °F"),o.a.createElement("p",{className:"c-daily--summary"},t.summary))):""}))):""))}}])&&H(n.prototype,a),i&&H(n,i),t}();function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function V(e){return(V="function"==typeof Symbol&&"symbol"===J(Symbol.iterator)?function(e){return J(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":J(e)})(e)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function U(e,t){return!t||"object"!==V(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function G(e,t){return(G=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var K=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),U(this,q(t).apply(this,arguments))}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&G(e,t)}(t,r["Component"]),n=t,(a=[{key:"render",value:function(){return o.a.createElement(F,null)}}])&&z(n.prototype,a),i&&z(n,i),t}();i.a.render(o.a.createElement(K,null),document.getElementById("root"))}});
//# sourceMappingURL=client.e3c77.js.map