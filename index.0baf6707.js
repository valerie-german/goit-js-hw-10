var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,a=f||c||Function("return this")(),l=Object.prototype.toString,s=Math.max,v=Math.min,d=function(){return a.Date.now()};function p(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==l.call(t)}(t))return NaN;if(p(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=p(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var f=r.test(t);return f||i.test(t)?u(t.slice(2),f?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var o,r,i,u,f,c,a=0,l=!1,y=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,i=r;return o=r=void 0,a=e,u=t.apply(i,n)}function h(t){return a=t,f=setTimeout(T,e),l?g(t):u}function j(t){var n=t-c;return void 0===c||n>=e||n<0||y&&t-a>=i}function T(){var t=d();if(j(t))return w(t);f=setTimeout(T,function(t){var n=e-(t-c);return y?v(n,i-(t-a)):n}(t))}function w(t){return f=void 0,m&&o?g(t):(o=r=void 0,u)}function O(){var t=d(),n=j(t);if(o=arguments,r=this,c=t,n){if(void 0===f)return h(c);if(y)return f=setTimeout(T,e),g(c)}return void 0===f&&(f=setTimeout(T,e)),u}return e=b(e)||0,p(n)&&(l=!!n.leading,i=(y="maxWait"in n)?s(b(n.maxWait)||0,e):i,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=r=f=void 0},O.flush=function(){return void 0===f?u:w(d())},O};document.querySelector("#search-box").addEventListener("input",e((t=>{t.preventDefault();!function(t){fetch(`https://restcountries.com/v2/name/${t}`).then((t=>(console.log(t),t.json()))).then((t=>{console.log(t)})).catch((t=>{console.log("Error")}))}(t.target.value)}),300));
//# sourceMappingURL=index.0baf6707.js.map
