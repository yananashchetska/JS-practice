parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
var e=document.getElementById("form"),t=document.getElementById("nameField"),r=document.getElementById("surnameField"),n=document.getElementById("emailField"),s=document.getElementById("passwordField");e.addEventListener("submit",function(e){e.preventDefault(),u()});var a=function(e,t){e.parentElement.querySelector(".error").innerText=t,e.classList.add("errored"),e.classList.remove("success"),e.addEventListener("input",function(t){t.preventDefault(),i(e)})},i=function(e){e.parentElement.querySelector(".error").innerText="",e.classList.remove("errored"),e.classList.add("success")},d=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},u=function(){var e=t.value.trim(),u=r.value.trim(),l=n.value.trim(),m=s.value.trim();""===e?a(t,"Username is required"):i(t),""===u?a(r,"Surname is required"):i(r),""===l?a(n,"Email is required"):d(l)?i(n):a(n,"Provide a valid email address!"),""===m?a(s,"Password is required!"):m.length<8?a(s,"Password must be at least 8 characters!"):i(s)};
},{}]},{},["Focm"], null)
//# sourceMappingURL=/dist/src.510c1a65.js.map