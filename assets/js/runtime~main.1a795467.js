(()=>{"use strict";var e,a,f,r,t,c={},o={};function b(e){var a=o[e];if(void 0!==a)return a.exports;var f=o[e]={id:e,loaded:!1,exports:{}};return c[e].call(f.exports,f,f.exports,b),f.loaded=!0,f.exports}b.m=c,b.c=o,e=[],b.O=(a,f,r,t)=>{if(!f){var c=1/0;for(i=0;i<e.length;i++){f=e[i][0],r=e[i][1],t=e[i][2];for(var o=!0,d=0;d<f.length;d++)(!1&t||c>=t)&&Object.keys(b.O).every((e=>b.O[e](f[d])))?f.splice(d--,1):(o=!1,t<c&&(c=t));if(o){e.splice(i--,1);var n=r();void 0!==n&&(a=n)}}return a}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[f,r,t]},b.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return b.d(a,{a:a}),a},f=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,b.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var t=Object.create(null);b.r(t);var c={};a=a||[null,f({}),f([]),f(f)];for(var o=2&r&&e;"object"==typeof o&&!~a.indexOf(o);o=f(o))Object.getOwnPropertyNames(o).forEach((a=>c[a]=()=>e[a]));return c.default=()=>e,b.d(t,c),t},b.d=(e,a)=>{for(var f in a)b.o(a,f)&&!b.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:a[f]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((a,f)=>(b.f[f](e,a),a)),[])),b.u=e=>"assets/js/"+({231:"1ba269ed",1235:"a7456010",1546:"b40e225e",1903:"acecf23e",1972:"73664a40",2110:"73fa1b3d",2711:"9e4087bc",2814:"72e14192",3249:"ccc49370",3428:"fa192116",3637:"f4f34a3a",3694:"8717b14a",3734:"d9a16ed1",3807:"23d8ed82",3987:"5a1935ca",4134:"393be207",4328:"b300c9e9",4470:"157af2a8",4583:"1df93b7f",4585:"84fc41a1",4591:"222c493a",4813:"6875c492",4906:"b31f9bd0",5052:"ed748632",5557:"d9f32620",5742:"aba21aa0",5850:"9658f19c",5966:"b30f89a8",6061:"1f391b9e",6309:"7ed156c3",6746:"818f3bc4",6969:"14eb3368",7098:"a7bd4aaa",7472:"814f3328",7643:"a6aa9e1f",7714:"f9f82a69",7982:"5f71fc89",8209:"01a85c17",8210:"fdc143ce",8401:"17896441",8572:"995af72d",8609:"925b3f96",8714:"e2b1c671",8737:"7661071f",9048:"a94703ab",9325:"59362658",9328:"e273c56f",9647:"5e95c892",9858:"36994c47"}[e]||e)+"."+{231:"5bb20a77",1235:"f490c0e9",1538:"1096d504",1546:"6661b909",1903:"a1b43c73",1972:"1dbe4df9",2110:"7c17a4c3",2237:"95370a65",2711:"25921058",2814:"205700a1",3242:"aa4e0941",3249:"8d8b5ca6",3428:"c742f7de",3637:"4ecb0e2a",3694:"e3a2811e",3734:"a07c1789",3807:"2c367b66",3987:"cbeba7ef",4134:"035d8208",4328:"d5740059",4470:"6f916abf",4583:"64b045ba",4585:"80189c5b",4591:"0b015a86",4813:"5f950793",4906:"029c86a2",5052:"4b66ef11",5557:"afe36b99",5742:"88403df8",5850:"d3759bee",5966:"87a5f6b7",6061:"d9feb485",6309:"7ae46a7d",6746:"149a9bf5",6969:"e48aaba0",7098:"1a3df664",7472:"7fdc3841",7643:"85c8a2eb",7714:"21754dc3",7982:"fd77c984",8209:"8aae374c",8210:"1eefa200",8401:"b240489a",8572:"c1579822",8609:"9af33efb",8714:"7a265a24",8737:"6f397b5f",9048:"0453be5e",9325:"d71d29c7",9328:"fbdd1d91",9647:"d0d05a92",9858:"9ba16f57"}[e]+".js",b.miniCssF=e=>{},b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r={},t="qr-phoenix-docs:",b.l=(e,a,f,c)=>{if(r[e])r[e].push(a);else{var o,d;if(void 0!==f)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==t+f){o=u;break}}o||(d=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,b.nc&&o.setAttribute("nonce",b.nc),o.setAttribute("data-webpack",t+f),o.src=e),r[e]=[a];var l=(a,f)=>{o.onerror=o.onload=null,clearTimeout(s);var t=r[e];if(delete r[e],o.parentNode&&o.parentNode.removeChild(o),t&&t.forEach((e=>e(f))),a)return a(f)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=l.bind(null,o.onerror),o.onload=l.bind(null,o.onload),d&&document.head.appendChild(o)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/qr-phoenix-docs/",b.gca=function(e){return e={17896441:"8401",59362658:"9325","1ba269ed":"231",a7456010:"1235",b40e225e:"1546",acecf23e:"1903","73664a40":"1972","73fa1b3d":"2110","9e4087bc":"2711","72e14192":"2814",ccc49370:"3249",fa192116:"3428",f4f34a3a:"3637","8717b14a":"3694",d9a16ed1:"3734","23d8ed82":"3807","5a1935ca":"3987","393be207":"4134",b300c9e9:"4328","157af2a8":"4470","1df93b7f":"4583","84fc41a1":"4585","222c493a":"4591","6875c492":"4813",b31f9bd0:"4906",ed748632:"5052",d9f32620:"5557",aba21aa0:"5742","9658f19c":"5850",b30f89a8:"5966","1f391b9e":"6061","7ed156c3":"6309","818f3bc4":"6746","14eb3368":"6969",a7bd4aaa:"7098","814f3328":"7472",a6aa9e1f:"7643",f9f82a69:"7714","5f71fc89":"7982","01a85c17":"8209",fdc143ce:"8210","995af72d":"8572","925b3f96":"8609",e2b1c671:"8714","7661071f":"8737",a94703ab:"9048",e273c56f:"9328","5e95c892":"9647","36994c47":"9858"}[e]||e,b.p+b.u(e)},(()=>{var e={5354:0,1869:0};b.f.j=(a,f)=>{var r=b.o(e,a)?e[a]:void 0;if(0!==r)if(r)f.push(r[2]);else if(/^(1869|5354)$/.test(a))e[a]=0;else{var t=new Promise(((f,t)=>r=e[a]=[f,t]));f.push(r[2]=t);var c=b.p+b.u(a),o=new Error;b.l(c,(f=>{if(b.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var t=f&&("load"===f.type?"missing":f.type),c=f&&f.target&&f.target.src;o.message="Loading chunk "+a+" failed.\n("+t+": "+c+")",o.name="ChunkLoadError",o.type=t,o.request=c,r[1](o)}}),"chunk-"+a,a)}},b.O.j=a=>0===e[a];var a=(a,f)=>{var r,t,c=f[0],o=f[1],d=f[2],n=0;if(c.some((a=>0!==e[a]))){for(r in o)b.o(o,r)&&(b.m[r]=o[r]);if(d)var i=d(b)}for(a&&a(f);n<c.length;n++)t=c[n],b.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return b.O(i)},f=self.webpackChunkqr_phoenix_docs=self.webpackChunkqr_phoenix_docs||[];f.forEach(a.bind(null,0)),f.push=a.bind(null,f.push.bind(f))})()})();