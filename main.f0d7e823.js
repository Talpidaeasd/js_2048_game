parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";var t=document.getElementById("1_1"),e=document.getElementById("1_2"),n=document.getElementById("1_3"),o=document.getElementById("1_4"),l=document.getElementById("2_1"),c=document.getElementById("2_2"),s=document.getElementById("2_3"),r=document.getElementById("2_4"),a=document.getElementById("3_1"),d=document.getElementById("3_2"),i=document.getElementById("3_3"),f=document.getElementById("3_4"),x=document.getElementById("4_1"),C=document.getElementById("4_2"),u=document.getElementById("4_3"),m=document.getElementById("4_4"),g=document.querySelector(".message-start"),L=document.querySelector(".message-lose"),h=document.querySelector(".message-win"),v=document.querySelector(".game-score"),y=0;v.textContent=y;var I=[t,e,n,o,l,c,s,r,a,d,i,f,x,C,u,m];function E(){var t=document.querySelector("button");"Start"===t.textContent?(t.classList.remove("start"),t.classList.add("restart"),t.textContent="restart",g.classList.add("hidden"),_(),_()):(v.textContent=0,I.forEach(function(t){t.classList=["field-cell"],t.textContent=""}),t.classList.remove("restart"),t.classList.add("start"),h.classList.add("hidden"),L.classList.add("hidden"),t.textContent="Start",g.classList.remove("hidden"))}function w(){for(var t=Math.floor(Math.random()*I.length),e=I[t];e.classList.length>=2;)t=Math.floor(Math.random()*I.length),e=I[t];return e}function B(){return Math.floor(100*Math.random())<90?2:4}function _(){var t=w(),e=B();t.classList.add("field-cell--".concat(e)),t.textContent=e}function S(t){switch(t.code){case"ArrowUp":p("up");break;case"ArrowRight":p("right");break;case"ArrowDown":p("down");break;case"ArrowLeft":p("left")}}function p(t){var e=!1;switch(t){case"up":for(var n=4;n<=15;n++)if(I[n].classList.length>1){for(var o=n;o>=4&&""===I[o-4].textContent;)o-=4;o>=4&&I[o-4].textContent===I[n].textContent?(I[o-4].textContent*=2,I[o-4].classList=["field-cell field-cell--".concat(I[o-4].textContent)],I[n].classList=["field-cell"],I[n].textContent="",y=parseInt(I[o-4].textContent,10),v.textContent=(parseInt(v.textContent,10)+y).toString(),e=!0):o!==n&&(I[o].classList=["field-cell field-cell--".concat(I[n].textContent)],I[o].textContent=I[n].textContent,I[n].classList=["field-cell"],I[n].textContent="",e=!0)}break;case"down":for(var l=11;l>=0;l--)if(I[l].classList.length>1){for(var c=l;c+4<=15&&""===I[c+4].textContent;)c+=4;c+4<=15&&I[c+4].textContent===I[l].textContent?(I[c+4].textContent*=2,I[c+4].classList=["field-cell field-cell--".concat(I[c+4].textContent)],I[l].classList=["field-cell"],I[l].textContent="",y=parseInt(I[c+4].textContent,10),v.textContent=(parseInt(v.textContent,10)+y).toString(),e=!0):c!==l&&(I[c].classList=["field-cell field-cell--".concat(I[l].textContent)],I[c].textContent=I[l].textContent,I[l].classList=["field-cell"],I[l].textContent="",e=!0)}break;case"right":for(var s=14;s>=0;s--)if(I[s].classList.length>1){for(var r=s;r<15&&3!==r&&7!==r&&11!==r&&""===I[r+1].textContent;)r++;r<15&&3!==r&&7!==r&&11!==r&&I[r+1].textContent===I[s].textContent?(I[r+1].textContent*=2,I[r+1].classList=["field-cell field-cell--".concat(I[r+1].textContent)],I[s].classList=["field-cell"],I[s].textContent="",y=parseInt(I[r+1].textContent,10),v.textContent=(parseInt(v.textContent,10)+y).toString(),e=!0):r!==s&&(I[r].classList=["field-cell field-cell--".concat(I[s].textContent)],I[r].textContent=I[s].textContent,I[s].classList=["field-cell"],I[s].textContent="",e=!0)}break;case"left":for(var a=1;a<=15;a++)if(I[a].classList.length>1){for(var d=a;d>0&&4!==d&&8!==d&&12!==d&&""===I[d-1].textContent;)d--;d>0&&4!==d&&8!==d&&12!==d&&I[d-1].textContent===I[a].textContent?(I[d-1].textContent*=2,I[d-1].classList=["field-cell field-cell--".concat(I[d-1].textContent)],I[a].classList=["field-cell"],I[a].textContent="",y=parseInt(I[d-1].textContent,10),v.textContent=(parseInt(v.textContent,10)+y).toString(),e=!0):d!==a&&(I[d].classList=["field-cell field-cell--".concat(I[a].textContent)],I[d].textContent=I[a].textContent,I[a].classList=["field-cell"],I[a].textContent="",e=!0)}}e&&(_(),k(e))}function k(){var t=[].concat(I);t.forEach(function(t){"2048"===t.textContent&&h.classList.remove("hidden")}),16===t.filter(function(t){return t.classList.length>1}).length&&(b()||(L.classList.remove("hidden"),document.removeEventListener("keydown",function(t){return S(t)})))}function b(){for(var t=0;t<I.length;t++)for(var e=Math.floor(t/4),n=t%4,o=0,l=[{row:e,col:n-1},{row:e,col:n+1},{row:e-1,col:n},{row:e+1,col:n}];o<l.length;o++){var c=l[o],s=4*c.row+c.col;if(c.row>=0&&c.row<4&&c.col>=0&&c.col<4){var r=I[s];if(I[t].textContent===r.textContent)return!0}}return!1}document.querySelector("button").addEventListener("click",E),document.addEventListener("keydown",function(t){return S(t)});
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.f0d7e823.js.map