(()=>{"use strict";var e={56:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},72:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},s=[],a=0;a<e.length;a++){var l=e[a],c=n.base?l[0]+n.base:l[0],u=i[c]||0,h="".concat(c," ").concat(u);i[c]=u+1;var d=r(h),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var p=o(f,n);n.byIndex=a,t.splice(a,0,{identifier:h,updater:p,references:1})}s.push(h)}return s}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var i=n(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=r(i[s]);t[a].references--}for(var l=n(e,o),c=0;c<i.length;c++){var u=r(i[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=l}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r}).join("")},t.i=function(e,r,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(s[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);n&&s[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),r&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=r):u[2]=r),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},354:e=>{e.exports=function(e){var t=e[1],r=e[3];if(!r)return t;if("function"==typeof btoa){var n=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),i="/*# ".concat(o," */");return[t].concat([i]).join("\n")}return[t].join("\n")}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},659:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},942:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(354),o=r.n(n),i=r(314),s=r.n(i)()(o());s.push([e.id,'/* Task Pane Styles for POST Meeting Add-in */\n\n:root {\n  --primary-color: #0078d4;\n  --success-color: #107c10;\n  --warning-color: #ffb900;\n  --error-color: #d13438;\n  --background-color: #fafafa;\n  --surface-color: #ffffff;\n  --text-color: #323130;\n  --text-secondary: #605e5c;\n  --border-color: #edebe9;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif;\n  font-size: 14px;\n  color: var(--text-color);\n  background-color: var(--background-color);\n}\n\n#app {\n  padding: 16px;\n  max-width: 100%;\n}\n\n/* Header */\n.header {\n  margin-bottom: 20px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--border-color);\n}\n\n.header h1 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--primary-color);\n}\n\n.header .subtitle {\n  margin: 4px 0 0;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n\n/* Sections */\n.section {\n  margin-bottom: 20px;\n  padding: 16px;\n  background: var(--surface-color);\n  border-radius: 8px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n\n.section-title {\n  margin: 0 0 12px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-color);\n}\n\n/* Info Rows */\n.info-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n\n.info-label {\n  font-weight: 500;\n  min-width: 80px;\n}\n\n/* Badges - color coding based on status level */\nfluent-badge {\n  --badge-fill-filled: var(--text-secondary);\n}\n\nfluent-badge.success {\n  --badge-fill-filled: var(--success-color);\n}\n\nfluent-badge.warning {\n  --badge-fill-filled: #ca5010;\n}\n\nfluent-badge.error {\n  --badge-fill-filled: var(--error-color);\n}\n\n/* Duration text color coding */\n#duration-text {\n  font-size: 13px;\n  line-height: 1.4;\n}\n\n#duration-text.success {\n  color: var(--success-color);\n}\n\n#duration-text.warning {\n  color: #ca5010;\n}\n\n#duration-text.error {\n  color: var(--error-color);\n}\n\n.button-row {\n  display: flex;\n  gap: 8px;\n  margin-top: 8px;\n}\n\n#duration-buttons {\n  margin-top: 12px;\n}\n\n/* Form Groups */\n.form-group {\n  margin-bottom: 16px;\n}\n\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 13px;\n}\n\n.form-group label strong {\n  color: var(--primary-color);\n  font-size: 14px;\n}\n\n.form-group .hint {\n  display: block;\n  font-size: 11px;\n  color: var(--text-secondary);\n  margin-top: 2px;\n}\n\n/* Fluent UI Overrides */\nfluent-text-field,\nfluent-text-area {\n  width: 100%;\n}\n\nfluent-text-field::part(root),\nfluent-text-area::part(root) {\n  border-radius: 4px;\n}\n\nfluent-text-area {\n  min-height: 80px;\n}\n\n/* Actions */\n.actions {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.actions fluent-button {\n  width: 100%;\n}\n\n/* Status Message */\n.status {\n  position: fixed;\n  bottom: 16px;\n  left: 16px;\n  right: 16px;\n  padding: 12px 16px;\n  border-radius: 4px;\n  font-size: 13px;\n  text-align: center;\n  z-index: 100;\n  animation: fadeIn 0.2s ease;\n}\n\n.status.success {\n  background: #dff6dd;\n  color: #107c10;\n}\n\n.status.error {\n  background: #fde7e9;\n  color: #d13438;\n}\n\n.status.info {\n  background: #f3f2f1;\n  color: var(--text-color);\n}\n\n/* Utilities */\n.hidden {\n  display: none !important;\n}\n\n/* Animations */\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n/* Field validation states */\nfluent-text-field.invalid::part(root),\nfluent-text-area.invalid::part(root) {\n  border-color: var(--error-color);\n}\n\nfluent-text-field.valid::part(root),\nfluent-text-area.valid::part(root) {\n  border-color: var(--success-color);\n}\n\n/* Responsive adjustments */\n@media (max-width: 300px) {\n  #app {\n    padding: 12px;\n  }\n\n  .section {\n    padding: 12px;\n  }\n\n  .button-row {\n    flex-direction: column;\n  }\n}\n',"",{version:3,sources:["webpack://./src/taskpane/taskpane.css"],names:[],mappings:"AAAA,6CAA6C;;AAE7C;EACE,wBAAwB;EACxB,wBAAwB;EACxB,wBAAwB;EACxB,sBAAsB;EACtB,2BAA2B;EAC3B,wBAAwB;EACxB,qBAAqB;EACrB,yBAAyB;EACzB,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;EAEE,SAAS;EACT,UAAU;EACV,sEAAsE;EACtE,eAAe;EACf,wBAAwB;EACxB,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA,WAAW;AACX;EACE,mBAAmB;EACnB,oBAAoB;EACpB,4CAA4C;AAC9C;;AAEA;EACE,SAAS;EACT,eAAe;EACf,gBAAgB;EAChB,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,eAAe;EACf,4BAA4B;AAC9B;;AAEA,aAAa;AACb;EACE,mBAAmB;EACnB,aAAa;EACb,gCAAgC;EAChC,kBAAkB;EAClB,wCAAwC;AAC1C;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,wBAAwB;AAC1B;;AAEA,cAAc;AACd;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA,gDAAgD;AAChD;EACE,0CAA0C;AAC5C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,uCAAuC;AACzC;;AAEA,+BAA+B;AAC/B;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA,gBAAgB;AAChB;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,4BAA4B;EAC5B,eAAe;AACjB;;AAEA,wBAAwB;AACxB;;EAEE,WAAW;AACb;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA,YAAY;AACZ;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,WAAW;AACb;;AAEA,mBAAmB;AACnB;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,wBAAwB;AAC1B;;AAEA,cAAc;AACd;EACE,wBAAwB;AAC1B;;AAEA,eAAe;AACf;EACE;IACE,UAAU;IACV,2BAA2B;EAC7B;EACA;IACE,UAAU;IACV,wBAAwB;EAC1B;AACF;;AAEA,4BAA4B;AAC5B;;EAEE,gCAAgC;AAClC;;AAEA;;EAEE,kCAAkC;AACpC;;AAEA,2BAA2B;AAC3B;EACE;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,sBAAsB;EACxB;AACF",sourcesContent:['/* Task Pane Styles for POST Meeting Add-in */\n\n:root {\n  --primary-color: #0078d4;\n  --success-color: #107c10;\n  --warning-color: #ffb900;\n  --error-color: #d13438;\n  --background-color: #fafafa;\n  --surface-color: #ffffff;\n  --text-color: #323130;\n  --text-secondary: #605e5c;\n  --border-color: #edebe9;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif;\n  font-size: 14px;\n  color: var(--text-color);\n  background-color: var(--background-color);\n}\n\n#app {\n  padding: 16px;\n  max-width: 100%;\n}\n\n/* Header */\n.header {\n  margin-bottom: 20px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--border-color);\n}\n\n.header h1 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--primary-color);\n}\n\n.header .subtitle {\n  margin: 4px 0 0;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n\n/* Sections */\n.section {\n  margin-bottom: 20px;\n  padding: 16px;\n  background: var(--surface-color);\n  border-radius: 8px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n\n.section-title {\n  margin: 0 0 12px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-color);\n}\n\n/* Info Rows */\n.info-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n\n.info-label {\n  font-weight: 500;\n  min-width: 80px;\n}\n\n/* Badges - color coding based on status level */\nfluent-badge {\n  --badge-fill-filled: var(--text-secondary);\n}\n\nfluent-badge.success {\n  --badge-fill-filled: var(--success-color);\n}\n\nfluent-badge.warning {\n  --badge-fill-filled: #ca5010;\n}\n\nfluent-badge.error {\n  --badge-fill-filled: var(--error-color);\n}\n\n/* Duration text color coding */\n#duration-text {\n  font-size: 13px;\n  line-height: 1.4;\n}\n\n#duration-text.success {\n  color: var(--success-color);\n}\n\n#duration-text.warning {\n  color: #ca5010;\n}\n\n#duration-text.error {\n  color: var(--error-color);\n}\n\n.button-row {\n  display: flex;\n  gap: 8px;\n  margin-top: 8px;\n}\n\n#duration-buttons {\n  margin-top: 12px;\n}\n\n/* Form Groups */\n.form-group {\n  margin-bottom: 16px;\n}\n\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 13px;\n}\n\n.form-group label strong {\n  color: var(--primary-color);\n  font-size: 14px;\n}\n\n.form-group .hint {\n  display: block;\n  font-size: 11px;\n  color: var(--text-secondary);\n  margin-top: 2px;\n}\n\n/* Fluent UI Overrides */\nfluent-text-field,\nfluent-text-area {\n  width: 100%;\n}\n\nfluent-text-field::part(root),\nfluent-text-area::part(root) {\n  border-radius: 4px;\n}\n\nfluent-text-area {\n  min-height: 80px;\n}\n\n/* Actions */\n.actions {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.actions fluent-button {\n  width: 100%;\n}\n\n/* Status Message */\n.status {\n  position: fixed;\n  bottom: 16px;\n  left: 16px;\n  right: 16px;\n  padding: 12px 16px;\n  border-radius: 4px;\n  font-size: 13px;\n  text-align: center;\n  z-index: 100;\n  animation: fadeIn 0.2s ease;\n}\n\n.status.success {\n  background: #dff6dd;\n  color: #107c10;\n}\n\n.status.error {\n  background: #fde7e9;\n  color: #d13438;\n}\n\n.status.info {\n  background: #f3f2f1;\n  color: var(--text-color);\n}\n\n/* Utilities */\n.hidden {\n  display: none !important;\n}\n\n/* Animations */\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n/* Field validation states */\nfluent-text-field.invalid::part(root),\nfluent-text-area.invalid::part(root) {\n  border-color: var(--error-color);\n}\n\nfluent-text-field.valid::part(root),\nfluent-text-area.valid::part(root) {\n  border-color: var(--success-color);\n}\n\n/* Responsive adjustments */\n@media (max-width: 300px) {\n  #app {\n    padding: 12px;\n  }\n\n  .section {\n    padding: 12px;\n  }\n\n  .button-row {\n    flex-direction: column;\n  }\n}\n'],sourceRoot:""}]);const a=s}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0;const n=function(){if("undefined"!=typeof globalThis)return globalThis;if(void 0!==r.g)return r.g;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===n.trustedTypes&&(n.trustedTypes={createPolicy:(e,t)=>t});const o={configurable:!1,enumerable:!1,writable:!1};void 0===n.FAST&&Reflect.defineProperty(n,"FAST",Object.assign({value:Object.create(null)},o));const i=n.FAST;if(void 0===i.getById){const e=Object.create(null);Reflect.defineProperty(i,"getById",Object.assign({value(t,r){let n=e[t];return void 0===n&&(n=r?e[t]=r():null),n}},o))}const s=Object.freeze([]);function a(){const e=new WeakMap;return function(t){let r=e.get(t);if(void 0===r){let n=Reflect.getPrototypeOf(t);for(;void 0===r&&null!==n;)r=e.get(n),n=Reflect.getPrototypeOf(n);r=void 0===r?[]:r.slice(0),e.set(t,r)}return r}}const l=n.FAST.getById(1,()=>{const e=[],t=[];function r(){if(t.length)throw t.shift()}function o(e){try{e.call()}catch(e){t.push(e),setTimeout(r,0)}}function i(){let t=0;for(;t<e.length;)if(o(e[t]),t++,t>1024){for(let r=0,n=e.length-t;r<n;r++)e[r]=e[r+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&n.requestAnimationFrame(i),e.push(t)},process:i})}),c=n.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let u=c;const h=`fast-${Math.random().toString(36).substring(2,8)}`,d=`${h}{`,f=`}${h}`,p=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(u!==c)throw new Error("The HTML policy can only be set once.");u=e},createHTML:e=>u.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(h),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${h}:`,"")),createInterpolationPlaceholder:e=>`${d}${e}${f}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${h}:${e}--\x3e`,queueUpdate:l.enqueue,processUpdates:l.process,nextUpdate:()=>new Promise(l.enqueue),setAttribute(e,t,r){null==r?e.removeAttribute(t):e.setAttribute(t,r)},setBooleanAttribute(e,t,r){r?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class g{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else-1===t.indexOf(e)&&t.push(e)}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const r=t.indexOf(e);-1!==r&&t.splice(r,1)}}notify(e){const t=this.spillover,r=this.source;if(void 0===t){const t=this.sub1,n=this.sub2;void 0!==t&&t.handleChange(r,e),void 0!==n&&n.handleChange(r,e)}else for(let n=0,o=t.length;n<o;++n)t[n].handleChange(r,e)}}class v{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const r=this.subscribers[e];void 0!==r&&r.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var r;if(t){let r=this.subscribers[t];void 0===r&&(this.subscribers[t]=r=new g(this.source)),r.subscribe(e)}else this.sourceSubscribers=null!==(r=this.sourceSubscribers)&&void 0!==r?r:new g(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var r;if(t){const r=this.subscribers[t];void 0!==r&&r.unsubscribe(e)}else null===(r=this.sourceSubscribers)||void 0===r||r.unsubscribe(e)}}const m=i.getById(2,()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,r=p.queueUpdate;let n,o=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function i(e){let r=e.$fastController||t.get(e);return void 0===r&&(Array.isArray(e)?r=o(e):t.set(e,r=new v(e))),r}const s=a();class l{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==n&&n.watch(e,this.name),e[this.field]}setValue(e,t){const r=this.field,n=e[r];if(n!==t){e[r]=t;const o=e[this.callback];"function"==typeof o&&o.call(e,n,t),i(e).notify(this.name)}}}class c extends g{constructor(e,t,r=!1){super(e,t),this.binding=e,this.isVolatileBinding=r,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const r=n;n=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const o=this.binding(e,t);return n=r,o}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const r=this.last,o=i(e),s=null===r?this.first:{};if(s.propertySource=e,s.propertyName=t,s.notifier=o,o.subscribe(this,t),null!==r){if(!this.needsRefresh){let t;n=void 0,t=r.propertySource[r.propertyName],n=this,e===t&&(this.needsRefresh=!0)}r.next=s}this.last=s}handleChange(){this.needsQueue&&(this.needsQueue=!1,r(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){o=e},getNotifier:i,track(e,t){void 0!==n&&n.watch(e,t)},trackVolatile(){void 0!==n&&(n.needsRefresh=!0)},notify(e,t){i(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new l(t)),s(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:s,binding(e,t,r=this.isVolatileBinding(e)){return new c(e,t,r)},isVolatileBinding:t=>e.test(t.toString())})});function b(e,t){m.defineProperty(e,t)}const y=i.getById(3,()=>{let e=null;return{get:()=>e,set(t){e=t}}});class w{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return y.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){y.set(e)}}m.defineProperty(w.prototype,"index"),m.defineProperty(w.prototype,"length");const A=Object.seal(new w);class x{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function C(e){return e.map(e=>e instanceof x?C(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}function $(e){return e.map(e=>e instanceof x?e.behaviors:null).reduce((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t)),null)}x.create=(()=>{if(p.supportsAdoptedStyleSheets){const e=new Map;return t=>new B(t,e)}return e=>new D(e)})();const E=Symbol("prependToAdoptedStyleSheets");function k(e){const t=[],r=[];return e.forEach(e=>(e[E]?t:r).push(e)),{prepend:t,append:r}}let F=(e,t)=>{const{prepend:r,append:n}=k(t);e.adoptedStyleSheets=[...r,...e.adoptedStyleSheets,...n]},V=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter(e=>-1===t.indexOf(e))};if(p.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),F=(e,t)=>{const{prepend:r,append:n}=k(t);e.adoptedStyleSheets.splice(0,0,...r),e.adoptedStyleSheets.push(...n)},V=(e,t)=>{for(const r of t){const t=e.adoptedStyleSheets.indexOf(r);-1!==t&&e.adoptedStyleSheets.splice(t,1)}}}catch(e){}class B extends x{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=$(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=C(e).map(e=>{if(e instanceof CSSStyleSheet)return e;let r=t.get(e);return void 0===r&&(r=new CSSStyleSheet,r.replaceSync(e),t.set(e,r)),r})}return this._styleSheets}addStylesTo(e){F(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){V(e,this.styleSheets),super.removeStylesFrom(e)}}let S=0;class D extends x{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=$(e),this.styleSheets=C(e),this.styleClass="fast-style-class-"+ ++S}addStylesTo(e){const t=this.styleSheets,r=this.styleClass;e=this.normalizeTarget(e);for(let n=0;n<t.length;n++){const o=document.createElement("style");o.innerHTML=t[n],o.className=r,e.append(o)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let r=0,n=t.length;r<n;++r)e.removeChild(t[r]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const T=Object.freeze({locate:a()}),O={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},R={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};class L{constructor(e,t,r=t.toLowerCase(),n="reflect",o){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=r,this.mode=n,this.converter=o,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===n&&void 0===o&&(this.converter=O)}setValue(e,t){const r=e[this.fieldName],n=this.converter;void 0!==n&&(t=n.fromView(t)),r!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](r,t),e.$fastController.notify(this.name))}getValue(e){return m.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,r=this.guards;r.has(e)||"fromView"===t||p.queueUpdate(()=>{r.add(e);const n=e[this.fieldName];switch(t){case"reflect":const t=this.converter;p.setAttribute(e,this.attribute,void 0!==t?t.toView(n):n);break;case"boolean":p.setBooleanAttribute(e,this.attribute,n)}r.delete(e)})}static collect(e,...t){const r=[];t.push(T.locate(e));for(let n=0,o=t.length;n<o;++n){const o=t[n];if(void 0!==o)for(let t=0,n=o.length;t<n;++t){const n=o[t];"string"==typeof n?r.push(new L(e,n)):r.push(new L(e,n.property,n.attribute,n.mode,n.converter))}}return r}}function P(e,t){let r;function n(e,t){arguments.length>1&&(r.property=t),T.locate(e.constructor).push(r)}return arguments.length>1?(r={},void n(e,t)):(r=void 0===e?{}:e,n)}const I={mode:"open"},N={},M=i.getById(4,()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})});class z{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const r=L.collect(e,t.attributes),n=new Array(r.length),o={},i={};for(let e=0,t=r.length;e<t;++e){const t=r[e];n[e]=t.attribute,o[t.name]=t,i[t.attribute]=t}this.attributes=r,this.observedAttributes=n,this.propertyLookup=o,this.attributeLookup=i,this.shadowOptions=void 0===t.shadowOptions?I:null===t.shadowOptions?void 0:Object.assign(Object.assign({},I),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?N:Object.assign(Object.assign({},N),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?x.create(t.styles):t.styles instanceof x?t.styles:x.create([t.styles])}get isDefined(){return!!M.getByType(this.type)}define(e=customElements){const t=this.type;if(M.register(this)){const e=this.attributes,r=t.prototype;for(let t=0,n=e.length;t<n;++t)m.defineProperty(r,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}function j(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s}z.forType=M.getByType;const H=new WeakMap,q={bubbles:!0,composed:!0,cancelable:!0};function _(e){return e.shadowRoot||H.get(e)||null}class U extends v{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const r=t.shadowOptions;if(void 0!==r){const t=e.attachShadow(r);"closed"===r.mode&&H.set(e,t)}const n=m.getAccessors(e);if(n.length>0){const t=this.boundObservables=Object.create(null);for(let r=0,o=n.length;r<o;++r){const o=n[r].name,i=e[o];void 0!==i&&(delete e[o],t[o]=i)}}}get isConnected(){return m.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,m.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=_(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const r=e.behaviors;e.addStylesTo(t),null!==r&&this.addBehaviors(r)}}removeStyles(e){const t=_(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const r=e.behaviors;e.removeStylesFrom(t),null!==r&&this.removeBehaviors(r)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),r=e.length,n=[];for(let o=0;o<r;++o){const r=e[o];t.has(r)?t.set(r,t.get(r)+1):(t.set(r,1),n.push(r))}if(this._isConnected){const e=this.element;for(let t=0;t<n.length;++t)n[t].bind(e,A)}}removeBehaviors(e,t=!1){const r=this.behaviors;if(null===r)return;const n=e.length,o=[];for(let i=0;i<n;++i){const n=e[i];if(r.has(n)){const e=r.get(n)-1;0===e||t?r.delete(n)&&o.push(n):r.set(n,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<o.length;++t)o[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,A);const t=this.behaviors;if(null!==t)for(const[r]of t)r.bind(e,A);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[r]of t)r.unbind(e)}}onAttributeChangedCallback(e,t,r){const n=this.definition.attributeLookup[e];void 0!==n&&n.onAttributeChangedCallback(this.element,r)}emit(e,t,r){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},q),r)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const r=Object.keys(t);for(let n=0,o=r.length;n<o;++n){const o=r[n];e[o]=t[o]}this.boundObservables=null}const r=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():r.template&&(this._template=r.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():r.styles&&(this._styles=r.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,r=_(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||p.removeChildNodes(r),e&&(this.view=e.render(t,r,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const r=z.forType(e.constructor);if(void 0===r)throw new Error("Missing FASTElement definition.");return e.$fastController=new U(e,r)}}function W(e){return class extends e{constructor(){super(),U.forCustomElement(this)}$emit(e,t,r){return this.$fastController.emit(e,t,r)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,r){this.$fastController.onAttributeChangedCallback(e,t,r)}}}const G=Object.assign(W(HTMLElement),{from:e=>W(e),define:(e,t)=>new z(e,t).define().type}),Y=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(r){Reflect.defineMetadata(e,t,r)}},Reflect.defineMetadata=function(e,t,r){let n=Y.get(r);void 0===n&&Y.set(r,n=new Map),n.set(e,t)},Reflect.getOwnMetadata=function(e,t){const r=Y.get(t);if(void 0!==r)return r.get(e)});class Q{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,Ae(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:r,key:n}=this;return this.container=this.key=void 0,r.registerResolver(n,new le(n,e,t))}}function X(e){const t=e.slice(),r=Object.keys(e),n=r.length;let o;for(let i=0;i<n;++i)o=r[i],Be(o)||(t[o]=e[o]);return t}const K=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new le(e,1,e),transient:e=>new le(e,2,e)}),Z=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:K.singleton})}),J=new Map;function ee(e){return t=>Reflect.getOwnMetadata(e,t)}let te=null;const re=Object.freeze({createContainer:e=>new ye(null,Object.assign({},Z.default,e)),findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:re.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(me,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||re.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,t)=>e?e.$$container$$||new ye(e,Object.assign({},Z.default,t,{parentLocator:re.findParentContainer})):te||(te=new ye(null,Object.assign({},Z.default,t,{parentLocator:()=>null}))),getDesignParamtypes:ee("design:paramtypes"),getAnnotationParamtypes:ee("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=J.get(e);if(void 0===t){const r=e.inject;if(void 0===r){const r=re.getDesignParamtypes(e),n=re.getAnnotationParamtypes(e);if(void 0===r)if(void 0===n){const r=Object.getPrototypeOf(e);t="function"==typeof r&&r!==Function.prototype?X(re.getDependencies(r)):[]}else t=X(n);else if(void 0===n)t=X(r);else{t=X(r);let e,o=n.length;for(let r=0;r<o;++r)e=n[r],void 0!==e&&(t[r]=e);const i=Object.keys(n);let s;o=i.length;for(let e=0;e<o;++e)s=i[e],Be(s)||(t[s]=n[s])}}else t=X(r);J.set(e,t)}return t},defineProperty(e,t,r,n=!1){const o=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let e=this[o];if(void 0===e){const i=this instanceof HTMLElement?re.findResponsibleContainer(this):re.getOrCreateDOMContainer();if(e=i.get(r),this[o]=e,n&&this instanceof G){const n=this.$fastController,i=()=>{re.findResponsibleContainer(this).get(r)!==this[o]&&(this[o]=e,n.notify(t))};n.subscribe({handleChange:i},"isConnected")}}return e}})},createInterface(e,t){const r="function"==typeof e?e:t,n="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||Ee,o="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),i=function(e,t,r){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${i.friendlyName}'`);t?re.defineProperty(e,t,i,o):re.getOrCreateAnnotationParamTypes(e)[r]=i};return i.$isInterface=!0,i.friendlyName=null==n?"(anonymous)":n,null!=r&&(i.register=function(e,t){return r(new Q(e,null!=t?t:i))}),i.toString=function(){return`InterfaceSymbol<${i.friendlyName}>`},i},inject:(...e)=>function(t,r,n){if("number"==typeof n){const r=re.getOrCreateAnnotationParamTypes(t),o=e[0];void 0!==o&&(r[n]=o)}else if(r)re.defineProperty(t,r,e[0]);else{const r=n?re.getOrCreateAnnotationParamTypes(n.value):re.getOrCreateAnnotationParamTypes(t);let o;for(let t=0;t<e.length;++t)o=e[t],void 0!==o&&(r[t]=o)}},transient:e=>(e.register=function(t){return xe.transient(e,e).register(t)},e.registerInRequestor=!1,e),singleton:(e,t=ie)=>(e.register=function(t){return xe.singleton(e,e).register(t)},e.registerInRequestor=t.scoped,e)}),ne=re.createInterface("Container");function oe(e){return function(t){const r=function(e,t,n){re.inject(r)(e,t,n)};return r.$isResolver=!0,r.resolve=function(r,n){return e(t,r,n)},r}}re.inject;const ie={scoped:!1};function se(e,t,r){re.inject(se)(e,t,r)}function ae(e,t){return t.getFactory(e).construct(t)}oe((e,t,r)=>()=>r.get(e)),oe((e,t,r)=>r.has(e,!0)?r.get(e):void 0),se.$isResolver=!0,se.resolve=()=>{},oe((e,t,r)=>{const n=ae(e,t),o=new le(e,0,n);return r.registerResolver(e,o),n}),oe((e,t,r)=>ae(e,t));class le{constructor(e,t,r){this.key=e,this.strategy=t,this.state=r,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const r=e.getFactory(this.state);if(null===r)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return r.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,r,n;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(n=null===(r=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===r?void 0:r.call(t,e))&&void 0!==n?n:null;default:return null}}}function ce(e){return this.get(e)}function ue(e,t){return t(e)}class he{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let r;return r=void 0===t?new this.Type(...this.dependencies.map(ce,e)):new this.Type(...this.dependencies.map(ce,e),...t),null==this.transformers?r:this.transformers.reduce(ue,r)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const de={$isResolver:!0,resolve:(e,t)=>t};function fe(e){return"function"==typeof e.register}function pe(e){return function(e){return fe(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}function ge(e){return void 0!==e.prototype}const ve=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),me="__DI_LOCATE_PARENT__",be=new Map;class ye{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(ne,de),e instanceof Node&&e.addEventListener(me,e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())})}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(100===++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,r,n,o,i;const s=this.context;for(let a=0,l=e.length;a<l;++a)if(t=e[a],ke(t))if(fe(t))t.register(this,s);else if(ge(t))xe.singleton(t,t).register(this);else for(r=Object.keys(t),o=0,i=r.length;o<i;++o)n=t[r[o]],ke(n)&&(fe(n)?n.register(this,s):this.register(n));return--this.registerDepth,this}registerResolver(e,t){Ce(e);const r=this.resolvers,n=r.get(e);return null==n?r.set(e,t):n instanceof le&&4===n.strategy?n.state.push(t):r.set(e,new le(e,4,[n,t])),t}registerTransformer(e,t){const r=this.getResolver(e);if(null==r)return!1;if(r.getFactory){const e=r.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(Ce(e),void 0!==e.resolve)return e;let r,n=this;for(;null!=n;){if(r=n.resolvers.get(e),null!=r)return r;if(null==n.parent){const r=pe(e)?this:n;return t?this.jitRegister(e,r):null}n=n.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!(!t||null==this.parent)&&this.parent.has(e,!0)}get(e){if(Ce(e),e.$isResolver)return e.resolve(this,this);let t,r=this;for(;null!=r;){if(t=r.resolvers.get(e),null!=t)return t.resolve(r,this);if(null==r.parent){const n=pe(e)?this:r;return t=this.jitRegister(e,n),t.resolve(r,this)}r=r.parent}throw new Error(`Unable to resolve key: ${String(e)}`)}getAll(e,t=!1){Ce(e);const r=this;let n,o=r;if(t){let t=s;for(;null!=o;)n=o.resolvers.get(e),null!=n&&(t=t.concat($e(n,o,r))),o=o.parent;return t}for(;null!=o;){if(n=o.resolvers.get(e),null!=n)return $e(n,o,r);if(o=o.parent,null==o)return s}return s}getFactory(e){let t=be.get(e);if(void 0===t){if(Fe(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);be.set(e,t=new he(e,re.getDependencies(e)))}return t}registerFactory(e,t){be.set(e,t)}createChild(e){return new ye(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(ve.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(fe(e)){const r=e.register(t);if(!(r instanceof Object)||null==r.resolve){const r=t.resolvers.get(e);if(null!=r)return r;throw new Error("A valid resolver was not returned from the static register method")}return r}if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const r=this.config.defaultResolver(e,t);return t.resolvers.set(e,r),r}}}const we=new WeakMap;function Ae(e){return function(t,r,n){if(we.has(n))return we.get(n);const o=e(t,r,n);return we.set(n,o),o}}const xe=Object.freeze({instance:(e,t)=>new le(e,0,t),singleton:(e,t)=>new le(e,1,t),transient:(e,t)=>new le(e,2,t),callback:(e,t)=>new le(e,3,t),cachedCallback:(e,t)=>new le(e,3,Ae(t)),aliasTo:(e,t)=>new le(t,5,e)});function Ce(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function $e(e,t,r){if(e instanceof le&&4===e.strategy){const n=e.state;let o=n.length;const i=new Array(o);for(;o--;)i[o]=n[o].resolve(t,r);return i}return[e.resolve(t,r)]}const Ee="(anonymous)";function ke(e){return"object"==typeof e&&null!==e||"function"==typeof e}const Fe=function(){const e=new WeakMap;let t=!1,r="",n=0;return function(o){return t=e.get(o),void 0===t&&(r=o.toString(),n=r.length,t=n>=29&&n<=100&&125===r.charCodeAt(n-1)&&r.charCodeAt(n-2)<=32&&93===r.charCodeAt(n-3)&&101===r.charCodeAt(n-4)&&100===r.charCodeAt(n-5)&&111===r.charCodeAt(n-6)&&99===r.charCodeAt(n-7)&&32===r.charCodeAt(n-8)&&101===r.charCodeAt(n-9)&&118===r.charCodeAt(n-10)&&105===r.charCodeAt(n-11)&&116===r.charCodeAt(n-12)&&97===r.charCodeAt(n-13)&&110===r.charCodeAt(n-14)&&88===r.charCodeAt(n-15),e.set(o,t)),t}}(),Ve={};function Be(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const t=Ve[e];if(void 0!==t)return t;const r=e.length;if(0===r)return Ve[e]=!1;let n=0;for(let t=0;t<r;++t)if(n=e.charCodeAt(t),0===t&&48===n&&r>1||n<48||n>57)return Ve[e]=!1;return Ve[e]=!0}default:return!1}}function Se(e){return`${e.toLowerCase()}:presentation`}const De=new Map,Te=Object.freeze({define(e,t,r){const n=Se(e);void 0===De.get(n)?De.set(n,t):De.set(n,!1),r.register(xe.instance(n,t))},forTag(e,t){const r=Se(e),n=De.get(r);return!1===n?re.findResponsibleContainer(t).get(r):n||null}});class Oe{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?x.create(t):t instanceof x?t:x.create([t])}applyTo(e){const t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}class Re extends G{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=Te.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new Pe(this===Re?class extends Re{}:this,e,t)}}function Le(e,t,r){return"function"==typeof e?e(t,r):e}j([b],Re.prototype,"template",void 0),j([b],Re.prototype,"styles",void 0);class Pe{constructor(e,t,r){this.type=e,this.elementDefinition=t,this.overrideDefinition=r,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const r=this.definition,n=this.overrideDefinition,o=`${r.prefix||t.elementPrefix}-${r.baseName}`;t.tryDefineElement({name:o,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{const t=new Oe(Le(r.template,e,r),Le(r.styles,e,r));e.definePresentation(t);let o=Le(r.shadowOptions,e,r);e.shadowRootMode&&(o?n.shadowOptions||(o.mode=e.shadowRootMode):null!==o&&(o={mode:e.shadowRootMode})),e.defineElement({elementOptions:Le(r.elementOptions,e,r),shadowOptions:o,attributes:Le(r.attributes,e,r)})}})}}class Ie{createCSS(){return""}createBehavior(){}}function Ne(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}const Me=document.createElement("div");class ze{setProperty(e,t){p.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){p.queueUpdate(()=>this.target.removeProperty(e))}}class je extends ze{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class He extends ze{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class qe{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),m.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),p.queueUpdate(()=>{null!==this.target&&this.target.setProperty(e,t)})}removeProperty(e){this.store.delete(e),p.queueUpdate(()=>{null!==this.target&&this.target.removeProperty(e)})}handleChange(e,t){const{sheet:r}=this.style;if(r){const e=r.insertRule(":host{}",r.cssRules.length);this.target=r.cssRules[e].style}else this.target=null}}j([b],qe.prototype,"target",void 0);class _e{constructor(e){this.target=e.style}setProperty(e,t){p.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){p.queueUpdate(()=>this.target.removeProperty(e))}}class Ue{setProperty(e,t){Ue.properties[e]=t;for(const r of Ue.roots.values())Ye.getOrCreate(Ue.normalizeRoot(r)).setProperty(e,t)}removeProperty(e){delete Ue.properties[e];for(const t of Ue.roots.values())Ye.getOrCreate(Ue.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=Ue;if(!t.has(e)){t.add(e);const r=Ye.getOrCreate(this.normalizeRoot(e));for(const e in Ue.properties)r.setProperty(e,Ue.properties[e])}}static unregisterRoot(e){const{roots:t}=Ue;if(t.has(e)){t.delete(e);const r=Ye.getOrCreate(Ue.normalizeRoot(e));for(const e in Ue.properties)r.removeProperty(e)}}static normalizeRoot(e){return e===Me?document:e}}Ue.roots=new Set,Ue.properties={};const We=new WeakMap,Ge=p.supportsAdoptedStyleSheets?class extends ze{constructor(e){super();const t=new CSSStyleSheet;t[E]=!0,this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(x.create([t]))}}:qe,Ye=Object.freeze({getOrCreate(e){if(We.has(e))return We.get(e);let t;return t=e===Me?new Ue:e instanceof Document?p.supportsAdoptedStyleSheets?new je:new He:e instanceof G?new Ge(e):new _e(e),We.set(e,t),t}});class Qe extends Ie{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=Qe.uniqueId(),Qe.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new Qe({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return Qe.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=et.getOrCreate(e).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof Qe&&(t=this.alias(t)),et.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),et.existsFor(e)&&et.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(Me,e),this}subscribe(e,t){const r=this.getOrCreateSubscriberSet(t);t&&!et.existsFor(t)&&et.getOrCreate(t),r.has(e)||r.add(e)}unsubscribe(e,t){const r=this.subscribers.get(t||this);r&&r.has(e)&&r.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(e=>e.handleChange(t)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(e=>e.handleChange(t))}alias(e){return t=>e.getValueFor(t)}}Qe.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),Qe.tokensById=new Map;class Xe{constructor(e,t,r){this.source=e,this.token=t,this.node=r,this.dependencies=new Set,this.observer=m.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){try{this.node.store.set(this.token,this.observer.observe(this.node.target,A))}catch(e){console.error(e)}}}class Ke{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),m.getNotifier(this).notify(e.id))}get(e){return m.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e),m.getNotifier(this).notify(e.id)}all(){return this.values.entries()}}const Ze=new WeakMap,Je=new WeakMap;class et{constructor(e){this.target=e,this.store=new Ke,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,t)=>{const r=Qe.getTokenById(t);r&&(r.notify(this.target),this.updateCSSTokenReflection(e,r))}},Ze.set(e,this),m.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof G?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return Ze.get(e)||new et(e)}static existsFor(e){return Ze.has(e)}static findParent(e){if(Me!==e.target){let t=Ne(e.target);for(;null!==t;){if(Ze.has(t))return Ze.get(t);t=Ne(t)}return et.getOrCreate(Me)}return null}static findClosestAssignedNode(e,t){let r=t;do{if(r.has(e))return r;r=r.parent?r.parent:r.target!==Me?et.getOrCreate(Me):null}while(null!==r);return null}get parent(){return Je.get(this)||null}updateCSSTokenReflection(e,t){if(Qe.isCSSDesignToken(t)){const r=this.parent,n=this.isReflecting(t);if(r){const o=r.get(t),i=e.get(t);o===i||n?o===i&&n&&this.stopReflectToCSS(t):this.reflectToCSS(t)}else n||this.reflectToCSS(t)}}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(void 0!==t)return t;const r=this.getRaw(e);return void 0!==r?(this.hydrate(e,r),this.get(e)):void 0}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):null===(t=et.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){Qe.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),Qe.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=et.findParent(this);e&&e.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){this.parent&&Je.get(this).removeChild(this);for(const e of this.bindingObservers.keys())this.tearDownBindingObserver(e)}appendChild(e){e.parent&&Je.get(e).removeChild(e);const t=this.children.filter(t=>e.contains(t));Je.set(e,this),this.children.push(e),t.forEach(t=>e.appendChild(t)),m.getNotifier(this.store).subscribe(e);for(const[t,r]of this.store.all())e.hydrate(t,this.bindingObservers.has(t)?this.getRaw(t):r),e.updateCSSTokenReflection(e.store,t)}removeChild(e){const t=this.children.indexOf(e);if(-1!==t&&this.children.splice(t,1),m.getNotifier(this.store).unsubscribe(e),e.parent!==this)return!1;const r=Je.delete(e);for(const[t]of this.store.all())e.hydrate(t,e.getRaw(t)),e.updateCSSTokenReflection(e.store,t);return r}contains(e){return function(e,t){let r=t;for(;null!==r;){if(r===e)return!0;r=Ne(r)}return!1}(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),et.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),et.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const r=Qe.getTokenById(t);r&&(this.hydrate(r,this.getRaw(r)),this.updateCSSTokenReflection(this.store,r))}hydrate(e,t){if(!this.has(e)){const r=this.bindingObservers.get(e);Qe.isDerivedDesignTokenValue(t)?r?r.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(r&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const r=new Xe(t,e,this);return this.bindingObservers.set(e,r),r}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}et.cssCustomPropertyReflector=new class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:r}=e;this.add(t,r)}add(e,t){Ye.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(et.getOrCreate(t).get(e)))}remove(e,t){Ye.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},j([b],et.prototype,"children",void 0);const tt=Object.freeze({create:function(e){return Qe.from(e)},notifyConnection:e=>!(!e.isConnected||!et.existsFor(e)||(et.getOrCreate(e).bind(),0)),notifyDisconnection:e=>!(e.isConnected||!et.existsFor(e)||(et.getOrCreate(e).unbind(),0)),registerRoot(e=Me){Ue.registerRoot(e)},unregisterRoot(e=Me){Ue.unregisterRoot(e)}}),rt=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),nt=new Map,ot=new Map;let it=null;const st=re.createInterface(e=>e.cachedCallback(e=>(null===it&&(it=new lt(null,e)),it))),at=Object.freeze({tagFor:e=>ot.get(e),responsibleFor(e){const t=e.$$designSystem$$;return t||re.findResponsibleContainer(e).get(st)},getOrCreate(e){if(!e)return null===it&&(it=re.getOrCreateDOMContainer().get(st)),it;const t=e.$$designSystem$$;if(t)return t;const r=re.getOrCreateDOMContainer(e);if(r.has(st,!1))return r.get(st);{const t=new lt(e,r);return r.register(xe.instance(st,t)),t}}});class lt{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>rt.definitionCallbackOnly,null!==e&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,r=[],n=this.disambiguate,o=this.shadowRootMode,i={elementPrefix:this.prefix,tryDefineElement(e,i,s){const a=function(e,t,r){return"string"==typeof e?{name:e,type:t,callback:r}:e}(e,i,s),{name:l,callback:c,baseClass:u}=a;let{type:h}=a,d=l,f=nt.get(d),p=!0;for(;f;){const e=n(d,h,f);switch(e){case rt.ignoreDuplicate:return;case rt.definitionCallbackOnly:p=!1,f=void 0;break;default:d=e,f=nt.get(d)}}p&&((ot.has(h)||h===Re)&&(h=class extends h{}),nt.set(d,h),ot.set(h,d),u&&ot.set(u,d)),r.push(new ct(t,d,h,o,c,p))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&tt.registerRoot(this.designTokenRoot)),t.registerWithContext(i,...e);for(const e of r)e.callback(e),e.willDefine&&null!==e.definition&&e.definition.define();return this}}class ct{constructor(e,t,r,n,o,i){this.container=e,this.name=t,this.type=r,this.shadowRootMode=n,this.callback=o,this.willDefine=i,this.definition=null}definePresentation(e){Te.define(this.name,e,this.container)}defineElement(e){this.definition=new z(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return at.tagFor(e)}}function ut(e,t,r,n){var o,i=arguments.length,s=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,r,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,r,s):o(t,r))||s);return i>3&&s&&Object.defineProperty(t,r,s),s}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;class ht{}j([P({attribute:"aria-atomic"})],ht.prototype,"ariaAtomic",void 0),j([P({attribute:"aria-busy"})],ht.prototype,"ariaBusy",void 0),j([P({attribute:"aria-controls"})],ht.prototype,"ariaControls",void 0),j([P({attribute:"aria-current"})],ht.prototype,"ariaCurrent",void 0),j([P({attribute:"aria-describedby"})],ht.prototype,"ariaDescribedby",void 0),j([P({attribute:"aria-details"})],ht.prototype,"ariaDetails",void 0),j([P({attribute:"aria-disabled"})],ht.prototype,"ariaDisabled",void 0),j([P({attribute:"aria-errormessage"})],ht.prototype,"ariaErrormessage",void 0),j([P({attribute:"aria-flowto"})],ht.prototype,"ariaFlowto",void 0),j([P({attribute:"aria-haspopup"})],ht.prototype,"ariaHaspopup",void 0),j([P({attribute:"aria-hidden"})],ht.prototype,"ariaHidden",void 0),j([P({attribute:"aria-invalid"})],ht.prototype,"ariaInvalid",void 0),j([P({attribute:"aria-keyshortcuts"})],ht.prototype,"ariaKeyshortcuts",void 0),j([P({attribute:"aria-label"})],ht.prototype,"ariaLabel",void 0),j([P({attribute:"aria-labelledby"})],ht.prototype,"ariaLabelledby",void 0),j([P({attribute:"aria-live"})],ht.prototype,"ariaLive",void 0),j([P({attribute:"aria-owns"})],ht.prototype,"ariaOwns",void 0),j([P({attribute:"aria-relevant"})],ht.prototype,"ariaRelevant",void 0),j([P({attribute:"aria-roledescription"})],ht.prototype,"ariaRoledescription",void 0);class dt{constructor(){this.targetIndex=0}}class ft extends dt{constructor(){super(...arguments),this.createPlaceholder=p.createInterpolationPlaceholder}}class pt extends dt{constructor(e,t,r){super(),this.name=e,this.behavior=t,this.options=r}createPlaceholder(e){return p.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function gt(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=m.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function vt(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function mt(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function bt(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function yt(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function wt(e){p.setAttribute(this.target,this.targetName,e)}function At(e){p.setBooleanAttribute(this.target,this.targetName,e)}function xt(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function Ct(e){this.target[this.targetName]=e}function $t(e){const t=this.classVersions||Object.create(null),r=this.target;let n=this.version||0;if(null!=e&&e.length){const o=e.split(/\s+/);for(let e=0,i=o.length;e<i;++e){const i=o[e];""!==i&&(t[i]=n,r.classList.add(i))}}if(this.classVersions=t,this.version=n+1,0!==n){n-=1;for(const e in t)t[e]===n&&r.classList.remove(e)}}class Et extends ft{constructor(e){super(),this.binding=e,this.bind=gt,this.unbind=mt,this.updateTarget=wt,this.isBindingVolatile=m.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=Ct,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,r)=>p.createHTML(e(t,r))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=At;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=vt,this.unbind=yt;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=$t)}}targetAtContent(){this.updateTarget=xt,this.unbind=bt}createBehavior(e){return new kt(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class kt{constructor(e,t,r,n,o,i,s){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=r,this.bind=n,this.unbind=o,this.updateTarget=i,this.targetName=s}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){w.setEvent(e);const t=this.binding(this.source,this.context);w.setEvent(null),!0!==t&&e.preventDefault()}}let Ft=null;class Vt{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Ft=this}static borrow(e){const t=Ft||new Vt;return t.directives=e,t.reset(),Ft=null,t}}function Bt(e){if(1===e.length)return e[0];let t;const r=e.length,n=e.map(e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding)),o=new Et((e,t)=>{let o="";for(let i=0;i<r;++i)o+=n[i](e,t);return o});return o.targetName=t,o}const St=f.length;function Dt(e,t){const r=t.split(d);if(1===r.length)return null;const n=[];for(let t=0,o=r.length;t<o;++t){const o=r[t],i=o.indexOf(f);let s;if(-1===i)s=o;else{const t=parseInt(o.substring(0,i));n.push(e.directives[t]),s=o.substring(i+St)}""!==s&&n.push(s)}return n}function Tt(e,t,r=!1){const n=t.attributes;for(let o=0,i=n.length;o<i;++o){const s=n[o],a=s.value,l=Dt(e,a);let c=null;null===l?r&&(c=new Et(()=>a),c.targetName=s.name):c=Bt(l),null!==c&&(t.removeAttributeNode(s),o--,i--,e.addFactory(c))}}function Ot(e,t,r){const n=Dt(e,t.textContent);if(null!==n){let o=t;for(let i=0,s=n.length;i<s;++i){const s=n[i],a=0===i?t:o.parentNode.insertBefore(document.createTextNode(""),o.nextSibling);"string"==typeof s?a.textContent=s:(a.textContent=" ",e.captureContentBinding(s)),o=a,e.targetIndex++,a!==t&&r.nextNode()}e.targetIndex--}}const Rt=document.createRange();class Lt{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const r=e.parentNode;let n,o=this.firstChild;for(;o!==t;)n=o.nextSibling,r.insertBefore(o,e),o=n;r.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let r,n=this.firstChild;for(;n!==t;)r=n.nextSibling,e.appendChild(n),n=r;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let r,n=this.firstChild;for(;n!==t;)r=n.nextSibling,e.removeChild(n),n=r;e.removeChild(t);const o=this.behaviors,i=this.source;for(let e=0,t=o.length;e<t;++e)o[e].unbind(i)}bind(e,t){const r=this.behaviors;if(this.source!==e)if(null!==this.source){const n=this.source;this.source=e,this.context=t;for(let o=0,i=r.length;o<i;++o){const i=r[o];i.unbind(n),i.bind(e,t)}}else{this.source=e,this.context=t;for(let n=0,o=r.length;n<o;++n)r[n].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let r=0,n=e.length;r<n;++r)e[r].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){Rt.setStartBefore(e[0].firstChild),Rt.setEndAfter(e[e.length-1].lastChild),Rt.deleteContents();for(let t=0,r=e.length;t<r;++t){const r=e[t],n=r.behaviors,o=r.source;for(let e=0,t=n.length;e<t;++e)n[e].unbind(o)}}}}class Pt{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=p.createHTML(t);const r=e.content.firstElementChild;null!==r&&"TEMPLATE"===r.tagName&&(e=r)}else e=t;const r=function(e,t){const r=e.content;document.adoptNode(r);const n=Vt.borrow(t);Tt(n,e,!0);const o=n.behaviorFactories;n.reset();const i=p.createTemplateWalker(r);let s;for(;s=i.nextNode();)switch(n.targetIndex++,s.nodeType){case 1:Tt(n,s);break;case 3:Ot(n,s,i);break;case 8:p.isMarker(s)&&n.addFactory(t[p.extractDirectiveIndexFromMarker(s)])}let a=0;(p.isMarker(r.firstChild)||1===r.childNodes.length&&t.length)&&(r.insertBefore(document.createComment(""),r.firstChild),a=-1);const l=n.behaviorFactories;return n.release(),{fragment:r,viewBehaviorFactories:l,hostBehaviorFactories:o,targetOffset:a}}(e,this.directives);this.fragment=r.fragment,this.viewBehaviorFactories=r.viewBehaviorFactories,this.hostBehaviorFactories=r.hostBehaviorFactories,this.targetOffset=r.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),r=this.viewBehaviorFactories,n=new Array(this.behaviorCount),o=p.createTemplateWalker(t);let i=0,s=this.targetOffset,a=o.nextNode();for(let e=r.length;i<e;++i){const e=r[i],t=e.targetIndex;for(;null!==a;){if(s===t){n[i]=e.createBehavior(a);break}a=o.nextNode(),s++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let r=0,o=t.length;r<o;++r,++i)n[i]=t[r].createBehavior(e)}return new Lt(t,n)}render(e,t,r){"string"==typeof t&&(t=document.getElementById(t)),void 0===r&&(r=t);const n=this.create(r);return n.bind(e,A),n.appendTo(t),n}}const It=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Nt(e,...t){const r=[];let n="";for(let o=0,i=e.length-1;o<i;++o){const i=e[o];let s=t[o];if(n+=i,s instanceof Pt){const e=s;s=()=>e}if("function"==typeof s&&(s=new Et(s)),s instanceof ft){const e=It.exec(i);null!==e&&(s.targetName=e[2])}s instanceof dt?(n+=s.createPlaceholder(r.length),r.push(s)):n+=s}return n+=e[e.length-1],new Pt(n,r)}class Mt{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function zt(e){return new pt("fast-ref",Mt,e)}class jt{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Ht=(e,t)=>Nt`
    <span
        part="end"
        ${zt("endContainer")}
        class=${e=>t.end?"end":void 0}
    >
        <slot name="end" ${zt("end")} @slotchange="${e=>e.handleEndContentChange()}">
            ${t.end||""}
        </slot>
    </span>
`,qt=(e,t)=>Nt`
    <span
        part="start"
        ${zt("startContainer")}
        class="${e=>t.start?"start":void 0}"
    >
        <slot
            name="start"
            ${zt("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        >
            ${t.start||""}
        </slot>
    </span>
`;function _t(e,...t){const r=T.locate(e);t.forEach(t=>{Object.getOwnPropertyNames(t.prototype).forEach(r=>{"constructor"!==r&&Object.defineProperty(e.prototype,r,Object.getOwnPropertyDescriptor(t.prototype,r))}),T.locate(t).forEach(e=>r.push(e))})}var Ut;Nt`
    <span part="end" ${zt("endContainer")}>
        <slot
            name="end"
            ${zt("end")}
            @slotchange="${e=>e.handleEndContentChange()}"
        ></slot>
    </span>
`,Nt`
    <span part="start" ${zt("startContainer")}>
        <slot
            name="start"
            ${zt("start")}
            @slotchange="${e=>e.handleStartContentChange()}"
        ></slot>
    </span>
`,function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(Ut||(Ut={}));const Wt="form-associated-proxy",Gt="ElementInternals",Yt=Gt in window&&"setFormValue"in window[Gt].prototype,Qt=new WeakMap;function Xt(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Yt}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),r=e?t.concat(Array.from(e)):t;return Object.freeze(r)}return s}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),p.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),p.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Yt)return null;let e=Qt.get(this);return e||(e=this.attachInternals(),Qt.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach(e=>this.proxy.removeEventListener(e,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,r){this.elementInternals?this.elementInternals.setValidity(e,t,r):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(e=>this.proxy.addEventListener(e,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Wt),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Wt)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if("Enter"===e.key&&this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return P({mode:"boolean"})(t.prototype,"disabled"),P({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),P({attribute:"current-value"})(t.prototype,"currentValue"),P(t.prototype,"name"),P({mode:"boolean"})(t.prototype,"required"),b(t.prototype,"value"),t}class Kt extends Re{}class Zt extends(Xt(Kt)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Jt extends Zt{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach(e=>{e.addEventListener("click",this.handleClick)})}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach(e=>{e.removeEventListener("click",this.handleClick)})}}j([P({mode:"boolean"})],Jt.prototype,"autofocus",void 0),j([P({attribute:"form"})],Jt.prototype,"formId",void 0),j([P],Jt.prototype,"formaction",void 0),j([P],Jt.prototype,"formenctype",void 0),j([P],Jt.prototype,"formmethod",void 0),j([P({mode:"boolean"})],Jt.prototype,"formnovalidate",void 0),j([P],Jt.prototype,"formtarget",void 0),j([P],Jt.prototype,"type",void 0),j([b],Jt.prototype,"defaultSlottedContent",void 0);class er{}j([P({attribute:"aria-expanded"})],er.prototype,"ariaExpanded",void 0),j([P({attribute:"aria-pressed"})],er.prototype,"ariaPressed",void 0),_t(er,ht),_t(Jt,jt,er);class tr{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=m.getAccessors(e).some(e=>e.name===t),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(s),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class rr extends tr{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function nr(e){return"string"==typeof e&&(e={property:e}),new pt("fast-slotted",rr,e)}function or(e,t){const r=[];let n="";const o=[];for(let i=0,s=e.length-1;i<s;++i){n+=e[i];let s=t[i];if(s instanceof Ie){const e=s.createBehavior();s=s.createCSS(),e&&o.push(e)}s instanceof x||s instanceof CSSStyleSheet?(""!==n.trim()&&(r.push(n),n=""),r.push(s)):n+=s}return n+=e[e.length-1],""!==n.trim()&&r.push(n),{styles:r,behaviors:o}}function ir(e,...t){const{styles:r,behaviors:n}=or(e,t),o=x.create(r);return n.length&&o.withBehaviors(...n),o}class sr extends Ie{constructor(e,t){super(),this.behaviors=t,this.css="";const r=e.reduce((e,t)=>("string"==typeof t?this.css+=t:e.push(t),e),[]);r.length&&(this.styles=x.create(r))}createBehavior(){return this}createCSS(){return this.css}bind(e){this.styles&&e.$fastController.addStyles(this.styles),this.behaviors.length&&e.$fastController.addBehaviors(this.behaviors)}unbind(e){this.styles&&e.$fastController.removeStyles(this.styles),this.behaviors.length&&e.$fastController.removeBehaviors(this.behaviors)}}function ar(e,...t){const{styles:r,behaviors:n}=or(e,t);return new sr(r,n)}const lr="not-allowed";var cr,ur;function hr(e){return`:host([hidden]){display:none}:host{display:${e}}`}let dr;(ur=cr||(cr={})).Canvas="Canvas",ur.CanvasText="CanvasText",ur.LinkText="LinkText",ur.VisitedText="VisitedText",ur.ActiveText="ActiveText",ur.ButtonFace="ButtonFace",ur.ButtonText="ButtonText",ur.Field="Field",ur.FieldText="FieldText",ur.Highlight="Highlight",ur.HighlightText="HighlightText",ur.GrayText="GrayText";const fr=function(){if("boolean"==typeof dr)return dr;if("undefined"==typeof window||!window.document||!window.document.createElement)return dr=!1,dr;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),dr=!0}catch(e){dr=!1}finally{document.head.removeChild(e)}return dr}()?"focus-visible":"focus";class pr{constructor(e){this.listenerCache=new WeakMap,this.query=e}bind(e){const{query:t}=this,r=this.constructListener(e);r.bind(t)(),t.addListener(r),this.listenerCache.set(e,r)}unbind(e){const t=this.listenerCache.get(e);t&&(this.query.removeListener(t),this.listenerCache.delete(e))}}class gr extends pr{constructor(e,t){super(e),this.styles=t}static with(e){return t=>new gr(e,t)}constructListener(e){let t=!1;const r=this.styles;return function(){const{matches:n}=this;n&&!t?(e.$fastController.addStyles(r),t=n):!n&&t&&(e.$fastController.removeStyles(r),t=n)}}unbind(e){super.unbind(e),e.$fastController.removeStyles(this.styles)}}const vr=gr.with(window.matchMedia("(forced-colors)"));var mr,br;function yr(e,t,r){return isNaN(e)||e<=t?t:e>=r?r:e}function wr(e,t,r){return isNaN(e)||e<=t?0:e>=r?1:e/(r-t)}function Ar(e,t,r){return isNaN(e)?t:t+e*(r-t)}function xr(e,t,r){return isNaN(e)||e<=0?t:e>=1?r:t+e*(r-t)}function Cr(e,t){const r=Math.pow(10,t);return Math.round(e*r)/r}gr.with(window.matchMedia("(prefers-color-scheme: dark)")),gr.with(window.matchMedia("(prefers-color-scheme: light)")),function(e){e.ltr="ltr",e.rtl="rtl"}(mr||(mr={})),Math.PI;class $r{constructor(e,t,r){this.h=e,this.s=t,this.l=r}static fromObject(e){return!e||isNaN(e.h)||isNaN(e.s)||isNaN(e.l)?null:new $r(e.h,e.s,e.l)}equalValue(e){return this.h===e.h&&this.s===e.s&&this.l===e.l}roundToPrecision(e){return new $r(Cr(this.h,e),Cr(this.s,e),Cr(this.l,e))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class Er{constructor(e,t,r){this.l=e,this.a=t,this.b=r}static fromObject(e){return!e||isNaN(e.l)||isNaN(e.a)||isNaN(e.b)?null:new Er(e.l,e.a,e.b)}equalValue(e){return this.l===e.l&&this.a===e.a&&this.b===e.b}roundToPrecision(e){return new Er(Cr(this.l,e),Cr(this.a,e),Cr(this.b,e))}toObject(){return{l:this.l,a:this.a,b:this.b}}}Er.epsilon=216/24389,Er.kappa=24389/27;class kr{constructor(e,t,r,n){this.r=e,this.g=t,this.b=r,this.a="number"!=typeof n||isNaN(n)?1:n}static fromObject(e){return!e||isNaN(e.r)||isNaN(e.g)||isNaN(e.b)?null:new kr(e.r,e.g,e.b,e.a)}equalValue(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(Ar(this.r,0,255))},${Math.round(Ar(this.g,0,255))},${Math.round(Ar(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(Ar(this.r,0,255))},${Math.round(Ar(this.g,0,255))},${Math.round(Ar(this.b,0,255))},${yr(this.a,0,1)})`}roundToPrecision(e){return new kr(Cr(this.r,e),Cr(this.g,e),Cr(this.b,e),Cr(this.a,e))}clamp(){return new kr(yr(this.r,0,1),yr(this.g,0,1),yr(this.b,0,1),yr(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(e){return function(e){const t=Math.round(yr(e,0,255)).toString(16);return 1===t.length?"0"+t:t}(Ar(e,0,255))}}class Fr{constructor(e,t,r){this.x=e,this.y=t,this.z=r}static fromObject(e){return!e||isNaN(e.x)||isNaN(e.y)||isNaN(e.z)?null:new Fr(e.x,e.y,e.z)}equalValue(e){return this.x===e.x&&this.y===e.y&&this.z===e.z}roundToPrecision(e){return new Fr(Cr(this.x,e),Cr(this.y,e),Cr(this.z,e))}toObject(){return{x:this.x,y:this.y,z:this.z}}}function Vr(e){function t(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return function(e){return.2126*e.r+.7152*e.g+.0722*e.b}(new kr(t(e.r),t(e.g),t(e.b),1))}function Br(e,t,r){return r-t===0?0:(e-t)/(r-t)}function Sr(e,t,r){return(Br(e.r,t.r,r.r)+Br(e.g,t.g,r.g)+Br(e.b,t.b,r.b))/3}function Dr(e){const t=Math.max(e.r,e.g,e.b),r=Math.min(e.r,e.g,e.b),n=t-r;let o=0;0!==n&&(o=t===e.r?(e.g-e.b)/n%6*60:t===e.g?60*((e.b-e.r)/n+2):60*((e.r-e.g)/n+4)),o<0&&(o+=360);const i=(t+r)/2;let s=0;return 0!==n&&(s=n/(1-Math.abs(2*i-1))),new $r(o,s,i)}function Tr(e,t=1){return function(e,t=1){function r(e){return e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055}const n=r(3.2404542*e.x-1.5371385*e.y-.4985314*e.z),o=r(-.969266*e.x+1.8760108*e.y+.041556*e.z),i=r(.0556434*e.x-.2040259*e.y+1.0572252*e.z);return new kr(n,o,i,t)}(function(e){const t=(e.l+16)/116,r=t+e.a/500,n=t-e.b/200,o=Math.pow(r,3),i=Math.pow(t,3),s=Math.pow(n,3);let a=0;a=o>Er.epsilon?o:(116*r-16)/Er.kappa;let l=0;l=e.l>Er.epsilon*Er.kappa?i:e.l/Er.kappa;let c=0;return c=s>Er.epsilon?s:(116*n-16)/Er.kappa,a=Fr.whitePoint.x*a,l=Fr.whitePoint.y*l,c=Fr.whitePoint.z*c,new Fr(a,l,c)}(e),t)}function Or(e,t,r){return isNaN(e)||e<=0?t:e>=1?r:new kr(xr(e,t.r,r.r),xr(e,t.g,r.g),xr(e,t.b,r.b),xr(e,t.a,r.a))}function Rr(e,t){const r=e.relativeLuminance>t.relativeLuminance?e:t,n=e.relativeLuminance>t.relativeLuminance?t:e;return(r.relativeLuminance+.05)/(n.relativeLuminance+.05)}Fr.whitePoint=new Fr(.95047,1,1.08883),function(e){e[e.RGB=0]="RGB",e[e.HSL=1]="HSL",e[e.HSV=2]="HSV",e[e.XYZ=3]="XYZ",e[e.LAB=4]="LAB",e[e.LCH=5]="LCH"}(br||(br={}));const Lr=Object.freeze({create:(e,t,r)=>new Pr(e,t,r),from:e=>new Pr(e.r,e.g,e.b)});class Pr extends kr{constructor(e,t,r){super(e,t,r,1),this.toColorString=this.toStringHexRGB,this.contrast=Rr.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=Vr(this)}static fromObject(e){return new Pr(e.r,e.g,e.b)}}function Ir(e,t,r=0,n=e.length-1){if(n===r)return e[r];const o=Math.floor((n-r)/2)+r;return t(e[o])?Ir(e,t,r,o):Ir(e,t,o+1,n)}const Nr=(-.1+Math.sqrt(.21))/2;function Mr(e){return e.relativeLuminance<=Nr}function zr(e){return Mr(e)?-1:1}const jr={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1},Hr=Object.freeze({create:function(e,t,r){return"number"==typeof e?Hr.from(Lr.create(e,t,r)):Hr.from(e)},from:function(e,t){return function(e){const t={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const r in t)if(typeof t[r]!=typeof e[r])return!1;return!0}(e)?qr.from(e,t):qr.from(Lr.create(e.r,e.g,e.b),t)}});class qr{constructor(e,t){this.closestIndexCache=new Map,this.source=e,this.swatches=t,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(e,t,r,n){void 0===r&&(r=this.closestIndexOf(e));let o=this.swatches;const i=this.lastIndex;let s=r;return void 0===n&&(n=zr(e)),-1===n&&(o=this.reversedSwatches,s=i-s),Ir(o,r=>Rr(e,r)>=t,s,i)}get(e){return this.swatches[e]||this.swatches[yr(e,0,this.lastIndex)]}closestIndexOf(e){if(this.closestIndexCache.has(e.relativeLuminance))return this.closestIndexCache.get(e.relativeLuminance);let t=this.swatches.indexOf(e);if(-1!==t)return this.closestIndexCache.set(e.relativeLuminance,t),t;const r=this.swatches.reduce((t,r)=>Math.abs(r.relativeLuminance-e.relativeLuminance)<Math.abs(t.relativeLuminance-e.relativeLuminance)?r:t);return t=this.swatches.indexOf(r),this.closestIndexCache.set(e.relativeLuminance,t),t}static saturationBump(e,t){const r=Dr(e).s,n=Dr(t);return n.s<r?function(e,t=1){const r=(1-Math.abs(2*e.l-1))*e.s,n=r*(1-Math.abs(e.h/60%2-1)),o=e.l-r/2;let i=0,s=0,a=0;return e.h<60?(i=r,s=n,a=0):e.h<120?(i=n,s=r,a=0):e.h<180?(i=0,s=r,a=n):e.h<240?(i=0,s=n,a=r):e.h<300?(i=n,s=0,a=r):e.h<360&&(i=r,s=0,a=n),new kr(i+o,s+o,a+o,t)}(new $r(n.h,r,n.l)):t}static ramp(e){const t=e/100;return t>.5?(t-.5)/.5:2*t}static createHighResolutionPalette(e){const t=[],r=function(e){function t(e){return e>Er.epsilon?Math.pow(e,1/3):(Er.kappa*e+16)/116}const r=t(e.x/Fr.whitePoint.x),n=t(e.y/Fr.whitePoint.y),o=t(e.z/Fr.whitePoint.z);return new Er(116*n-16,500*(r-n),200*(n-o))}(function(e){function t(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}const r=t(e.r),n=t(e.g),o=t(e.b);return new Fr(.4124564*r+.3575761*n+.1804375*o,.2126729*r+.7151522*n+.072175*o,.0193339*r+.119192*n+.9503041*o)}(kr.fromObject(e).roundToPrecision(4))),n=Tr(new Er(0,r.a,r.b)).clamp().roundToPrecision(4),o=Tr(new Er(50,r.a,r.b)).clamp().roundToPrecision(4),i=Tr(new Er(100,r.a,r.b)).clamp().roundToPrecision(4),s=new kr(0,0,0),a=new kr(1,1,1),l=i.equalValue(a)?0:14,c=n.equalValue(s)?0:14;for(let e=100+l;e>=0-c;e-=.5){let r;r=e<0?Or(e/c+1,s,n):e<=50?Or(qr.ramp(e),n,o):e<=100?Or(qr.ramp(e),o,i):Or((e-100)/l,i,a),r=qr.saturationBump(o,r).roundToPrecision(4),t.push(Lr.from(r))}return new qr(e,t)}static adjustEnd(e,t,r,n){const o=-1===n?t.swatches:t.reversedSwatches,i=e=>{const r=t.closestIndexOf(e);return 1===n?t.lastIndex-r:r};1===n&&r.reverse();const s=e(r[r.length-2]);if(Cr(Rr(r[r.length-1],r[r.length-2]),2)<s){r.pop();const e=i(t.colorContrast(o[t.lastIndex],s,void 0,n))-i(r[r.length-2]);let a=1;for(let n=r.length-e-1;n<r.length;n++){const e=i(r[n]),s=n===r.length-1?t.lastIndex:e+a;r[n]=o[s],a++}}1===n&&r.reverse()}static createColorPaletteByContrast(e,t){const r=qr.createHighResolutionPalette(e),n=e=>Cr(t.stepContrast+t.stepContrast*(1-e.relativeLuminance)*t.stepContrastRamp,2),o=[];let i=t.preserveSource?e:r.swatches[0];o.push(i);do{const e=n(i);i=r.colorContrast(i,e,void 0,1),o.push(i)}while(i.relativeLuminance>0);if(t.preserveSource){i=e;do{const e=n(i);i=r.colorContrast(i,e,void 0,-1),o.unshift(i)}while(i.relativeLuminance<1)}return this.adjustEnd(n,r,o,-1),t.preserveSource&&this.adjustEnd(n,r,o,1),o}static from(e,t){const r=void 0===t?jr:Object.assign(Object.assign({},jr),t);return new qr(e,Object.freeze(qr.createColorPaletteByContrast(e,r)))}}const _r=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function Ur(e){const t=_r.exec(e);if(null===t)return null;let r=t[1];if(3===r.length){const e=r.charAt(0),t=r.charAt(1),n=r.charAt(2);r=e.concat(e,t,t,n,n)}const n=parseInt(r,16);return isNaN(n)?null:new kr(wr((16711680&n)>>>16,0,255),wr((65280&n)>>>8,0,255),wr(255&n,0,255),1)}const Wr=Lr.create(1,1,1),Gr=Lr.create(0,0,0),Yr=Lr.create(.5,.5,.5),Qr=Ur("#0078D4"),Xr=Lr.create(Qr.r,Qr.g,Qr.b);function Kr(e,t,r,n,o){const i=e=>e.contrast(Wr)>=o?Wr:Gr,s=i(e),a=i(t);return{rest:s,hover:a,active:s.relativeLuminance===a.relativeLuminance?s:i(r),focus:i(n)}}var Zr;!function(e){e[e.Burn=0]="Burn",e[e.Color=1]="Color",e[e.Darken=2]="Darken",e[e.Dodge=3]="Dodge",e[e.Lighten=4]="Lighten",e[e.Multiply=5]="Multiply",e[e.Overlay=6]="Overlay",e[e.Screen=7]="Screen"}(Zr||(Zr={}));class Jr{constructor(e,t,r,n){this.toColorString=()=>this.cssGradient,this.contrast=Rr.bind(null,this),this.createCSS=this.toColorString,this.color=new kr(e,t,r),this.cssGradient=n,this.relativeLuminance=Vr(this.color),this.r=e,this.g=t,this.b=r}static fromObject(e,t){return new Jr(e.r,e.g,e.b,t)}}const en=new kr(0,0,0),tn=new kr(1,1,1);function rn(e,t,r,n,o,i,s,a,l=10,c=!1){const u=e.closestIndexOf(t);function h(r){if(c){const n=e.closestIndexOf(t),o=e.get(n),i=r.relativeLuminance<t.relativeLuminance?en:tn,s=function(e,t,r=null){let n=0,o=r;return null!==o?n=Sr(e,t,o):(o=new kr(0,0,0,1),n=Sr(e,t,o),n<=0&&(o=new kr(1,1,1,1),n=Sr(e,t,o))),n=Math.round(1e3*n)/1e3,new kr(o.r,o.g,o.b,n)}(Ur(r.toColorString()),Ur(o.toColorString()),i).roundToPrecision(2),a=function(e,t){if(t.a>=1)return t;if(t.a<=0)return new kr(e.r,e.g,e.b,1);const r=t.a*t.r+(1-t.a)*e.r,n=t.a*t.g+(1-t.a)*e.g,o=t.a*t.b+(1-t.a)*e.b;return new kr(r,n,o,1)}(Ur(t.toColorString()),s);return Lr.from(a)}return r}void 0===a&&(a=zr(t));const d=u+a*r,f=d+a*(n-r),p=d+a*(o-r),g=d+a*(i-r),v=-1===a?0:100-l,m=-1===a?l:100;function b(t,r){const n=e.get(t);if(r){const r=e.get(t+a*s),o=-1===a?r:n,i=-1===a?n:r,l=`linear-gradient(${h(o).toColorString()} ${v}%, ${h(i).toColorString()} ${m}%)`;return Jr.fromObject(o,l)}return h(n)}return{rest:b(d,!0),hover:b(f,!0),active:b(p,!1),focus:b(g,!0)}}function nn(e,t,r,n,o,i,s,a){null==a&&(a=zr(t));const l=e.closestIndexOf(e.colorContrast(t,r));return{rest:e.get(l+a*n),hover:e.get(l+a*o),active:e.get(l+a*i),focus:e.get(l+a*s)}}function on(e,t,r,n,o,i,s){const a=e.closestIndexOf(t);return null==s&&(s=zr(t)),{rest:e.get(a+s*r),hover:e.get(a+s*n),active:e.get(a+s*o),focus:e.get(a+s*i)}}function sn(e,t,r,n,o,i,s=void 0,a,l,c,u,h=void 0){return Mr(t)?on(e,t,a,l,c,u,h):on(e,t,r,n,o,i,s)}var an;function ln(e,t){return e.closestIndexOf((r=t,Lr.create(r,r,r)));var r}function cn(e,t,r){return e.get(ln(e,t)+-1*r)}!function(e){e[e.LightMode=.98]="LightMode",e[e.DarkMode=.15]="DarkMode"}(an||(an={}));const{create:un}=tt;function hn(e){return tt.create({name:e,cssCustomPropertyName:null})}un("direction").withDefault(mr.ltr);const dn=un("disabled-opacity").withDefault(.3),fn=un("base-height-multiplier").withDefault(8),pn=(un("base-horizontal-spacing-multiplier").withDefault(3),un("density").withDefault(0)),gn=un("design-unit").withDefault(4),vn=un("control-corner-radius").withDefault(4),mn=(un("layer-corner-radius").withDefault(8),un("stroke-width").withDefault(1)),bn=un("focus-stroke-width").withDefault(2),yn=un("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),wn=un("font-weight").withDefault(400);function An(e){return t=>{const r=e.getValueFor(t),n=wn.getValueFor(t);if(r.endsWith("px")){const e=Number.parseFloat(r.replace("px",""));if(e<=12)return`"wght" ${n}, "opsz" 8`;if(e>24)return`"wght" ${n}, "opsz" 36`}return`"wght" ${n}, "opsz" 10.5`}}const xn=un("type-ramp-base-font-size").withDefault("14px"),Cn=un("type-ramp-base-line-height").withDefault("20px"),$n=un("type-ramp-base-font-variations").withDefault(An(xn)),En=un("type-ramp-minus-1-font-size").withDefault("12px"),kn=un("type-ramp-minus-1-line-height").withDefault("16px"),Fn=un("type-ramp-minus-1-font-variations").withDefault(An(En)),Vn=un("type-ramp-minus-2-font-size").withDefault("10px"),Bn=un("type-ramp-minus-2-line-height").withDefault("14px"),Sn=un("type-ramp-minus-2-font-variations").withDefault(An(Vn)),Dn=un("type-ramp-plus-1-font-size").withDefault("16px"),Tn=un("type-ramp-plus-1-line-height").withDefault("22px"),On=un("type-ramp-plus-1-font-variations").withDefault(An(Dn)),Rn=un("type-ramp-plus-2-font-size").withDefault("20px"),Ln=un("type-ramp-plus-2-line-height").withDefault("26px"),Pn=un("type-ramp-plus-2-font-variations").withDefault(An(Rn)),In=un("type-ramp-plus-3-font-size").withDefault("24px"),Nn=un("type-ramp-plus-3-line-height").withDefault("32px"),Mn=un("type-ramp-plus-3-font-variations").withDefault(An(In)),zn=un("type-ramp-plus-4-font-size").withDefault("28px"),jn=un("type-ramp-plus-4-line-height").withDefault("36px"),Hn=un("type-ramp-plus-4-font-variations").withDefault(An(zn)),qn=un("type-ramp-plus-5-font-size").withDefault("32px"),_n=un("type-ramp-plus-5-line-height").withDefault("40px"),Un=un("type-ramp-plus-5-font-variations").withDefault(An(qn)),Wn=un("type-ramp-plus-6-font-size").withDefault("40px"),Gn=un("type-ramp-plus-6-line-height").withDefault("52px"),Yn=un("type-ramp-plus-6-font-variations").withDefault(An(Wn)),Qn=un("base-layer-luminance").withDefault(an.LightMode),Xn=hn("accent-fill-rest-delta").withDefault(0),Kn=hn("accent-fill-hover-delta").withDefault(-2),Zn=hn("accent-fill-active-delta").withDefault(-5),Jn=hn("accent-fill-focus-delta").withDefault(0),eo=hn("accent-foreground-rest-delta").withDefault(0),to=hn("accent-foreground-hover-delta").withDefault(3),ro=hn("accent-foreground-active-delta").withDefault(-8),no=hn("accent-foreground-focus-delta").withDefault(0),oo=hn("neutral-fill-rest-delta").withDefault(-1),io=hn("neutral-fill-hover-delta").withDefault(1),so=hn("neutral-fill-active-delta").withDefault(0),ao=hn("neutral-fill-focus-delta").withDefault(0),lo=hn("neutral-fill-input-rest-delta").withDefault(-1),co=hn("neutral-fill-input-hover-delta").withDefault(1),uo=hn("neutral-fill-input-active-delta").withDefault(0),ho=hn("neutral-fill-input-focus-delta").withDefault(-2),fo=hn("neutral-fill-input-alt-rest-delta").withDefault(2),po=hn("neutral-fill-input-alt-hover-delta").withDefault(4),go=hn("neutral-fill-input-alt-active-delta").withDefault(6),vo=hn("neutral-fill-input-alt-focus-delta").withDefault(2),mo=hn("neutral-fill-layer-rest-delta").withDefault(-2),bo=hn("neutral-fill-layer-hover-delta").withDefault(-3),yo=hn("neutral-fill-layer-active-delta").withDefault(-3),wo=hn("neutral-fill-layer-alt-rest-delta").withDefault(-1),Ao=hn("neutral-fill-secondary-rest-delta").withDefault(3),xo=hn("neutral-fill-secondary-hover-delta").withDefault(2),Co=hn("neutral-fill-secondary-active-delta").withDefault(1),$o=hn("neutral-fill-secondary-focus-delta").withDefault(3),Eo=hn("neutral-fill-stealth-rest-delta").withDefault(0),ko=hn("neutral-fill-stealth-hover-delta").withDefault(3),Fo=hn("neutral-fill-stealth-active-delta").withDefault(2),Vo=hn("neutral-fill-stealth-focus-delta").withDefault(0),Bo=hn("neutral-fill-strong-rest-delta").withDefault(0),So=hn("neutral-fill-strong-hover-delta").withDefault(8),Do=hn("neutral-fill-strong-active-delta").withDefault(-5),To=hn("neutral-fill-strong-focus-delta").withDefault(0),Oo=hn("neutral-stroke-rest-delta").withDefault(8),Ro=hn("neutral-stroke-hover-delta").withDefault(12),Lo=hn("neutral-stroke-active-delta").withDefault(6),Po=hn("neutral-stroke-focus-delta").withDefault(8),Io=hn("neutral-stroke-control-rest-delta").withDefault(3),No=hn("neutral-stroke-control-hover-delta").withDefault(5),Mo=hn("neutral-stroke-control-active-delta").withDefault(5),zo=hn("neutral-stroke-control-focus-delta").withDefault(5),jo=hn("neutral-stroke-divider-rest-delta").withDefault(4),Ho=hn("neutral-stroke-layer-rest-delta").withDefault(3),qo=hn("neutral-stroke-layer-hover-delta").withDefault(3),_o=hn("neutral-stroke-layer-active-delta").withDefault(3),Uo=hn("neutral-stroke-strong-hover-delta").withDefault(0),Wo=hn("neutral-stroke-strong-active-delta").withDefault(0),Go=hn("neutral-stroke-strong-focus-delta").withDefault(0),Yo=un("neutral-base-color").withDefault(Yr),Qo=hn("neutral-palette").withDefault(e=>Hr.from(Yo.getValueFor(e))),Xo=un("accent-base-color").withDefault(Xr),Ko=hn("accent-palette").withDefault(e=>Hr.from(Xo.getValueFor(e))),Zo=hn("neutral-layer-card-container-recipe").withDefault({evaluate:e=>cn(Qo.getValueFor(e),Qn.getValueFor(e),mo.getValueFor(e))}),Jo=(un("neutral-layer-card-container").withDefault(e=>Zo.getValueFor(e).evaluate(e)),hn("neutral-layer-floating-recipe").withDefault({evaluate:e=>function(e,t,r){return e.get(ln(e,t)+r)}(Qo.getValueFor(e),Qn.getValueFor(e),mo.getValueFor(e))})),ei=(un("neutral-layer-floating").withDefault(e=>Jo.getValueFor(e).evaluate(e)),hn("neutral-layer-1-recipe").withDefault({evaluate:e=>function(e,t){return e.get(ln(e,t))}(Qo.getValueFor(e),Qn.getValueFor(e))})),ti=un("neutral-layer-1").withDefault(e=>ei.getValueFor(e).evaluate(e)),ri=hn("neutral-layer-2-recipe").withDefault({evaluate:e=>cn(Qo.getValueFor(e),Qn.getValueFor(e),mo.getValueFor(e))}),ni=(un("neutral-layer-2").withDefault(e=>ri.getValueFor(e).evaluate(e)),hn("neutral-layer-3-recipe").withDefault({evaluate:e=>function(e,t,r){return e.get(ln(e,t)+-1*r*2)}(Qo.getValueFor(e),Qn.getValueFor(e),mo.getValueFor(e))})),oi=(un("neutral-layer-3").withDefault(e=>ni.getValueFor(e).evaluate(e)),hn("neutral-layer-4-recipe").withDefault({evaluate:e=>function(e,t,r){return e.get(ln(e,t)+-1*r*3)}(Qo.getValueFor(e),Qn.getValueFor(e),mo.getValueFor(e))})),ii=(un("neutral-layer-4").withDefault(e=>oi.getValueFor(e).evaluate(e)),un("fill-color").withDefault(e=>ti.getValueFor(e)));var si;!function(e){e[e.normal=4.5]="normal",e[e.large=3]="large"}(si||(si={}));const ai=hn("accent-fill-recipe").withDefault({evaluate:(e,t)=>function(e,t,r,n,o,i,s,a,l,c,u,h,d){return Mr(t)?nn(e,t,8,c,u,h,d,void 0):nn(e,t,5,n,o,i,s,void 0)}(Ko.getValueFor(e),t||ii.getValueFor(e),0,Xn.getValueFor(e),Kn.getValueFor(e),Zn.getValueFor(e),Jn.getValueFor(e),0,0,Xn.getValueFor(e),Kn.getValueFor(e),Zn.getValueFor(e),Jn.getValueFor(e))}),li=un("accent-fill-rest").withDefault(e=>ai.getValueFor(e).evaluate(e).rest),ci=un("accent-fill-hover").withDefault(e=>ai.getValueFor(e).evaluate(e).hover),ui=un("accent-fill-active").withDefault(e=>ai.getValueFor(e).evaluate(e).active),hi=un("accent-fill-focus").withDefault(e=>ai.getValueFor(e).evaluate(e).focus),di=hn("foreground-on-accent-recipe").withDefault({evaluate:e=>Kr(li.getValueFor(e),ci.getValueFor(e),ui.getValueFor(e),hi.getValueFor(e),si.normal)}),fi=un("foreground-on-accent-rest").withDefault(e=>di.getValueFor(e).evaluate(e).rest),pi=un("foreground-on-accent-hover").withDefault(e=>di.getValueFor(e).evaluate(e).hover),gi=un("foreground-on-accent-active").withDefault(e=>di.getValueFor(e).evaluate(e).active),vi=(un("foreground-on-accent-focus").withDefault(e=>di.getValueFor(e).evaluate(e).focus),hn("accent-foreground-recipe").withDefault({evaluate:(e,t)=>nn(Ko.getValueFor(e),t||ii.getValueFor(e),9.5,eo.getValueFor(e),to.getValueFor(e),ro.getValueFor(e),no.getValueFor(e))})),mi=un("accent-foreground-rest").withDefault(e=>vi.getValueFor(e).evaluate(e).rest),bi=un("accent-foreground-hover").withDefault(e=>vi.getValueFor(e).evaluate(e).hover),yi=un("accent-foreground-active").withDefault(e=>vi.getValueFor(e).evaluate(e).active),wi=(un("accent-foreground-focus").withDefault(e=>vi.getValueFor(e).evaluate(e).focus),hn("accent-stroke-control-recipe").withDefault({evaluate:(e,t)=>rn(Qo.getValueFor(e),t||ii.getValueFor(e),-3,-3,-3,-3,10,1,void 0,!0)})),Ai=un("accent-stroke-control-rest").withDefault(e=>wi.getValueFor(e).evaluate(e,li.getValueFor(e)).rest),xi=un("accent-stroke-control-hover").withDefault(e=>wi.getValueFor(e).evaluate(e,ci.getValueFor(e)).hover),Ci=un("accent-stroke-control-active").withDefault(e=>wi.getValueFor(e).evaluate(e,ui.getValueFor(e)).active),$i=(un("accent-stroke-control-focus").withDefault(e=>wi.getValueFor(e).evaluate(e,hi.getValueFor(e)).focus),hn("neutral-fill-recipe").withDefault({evaluate:(e,t)=>sn(Qo.getValueFor(e),t||ii.getValueFor(e),oo.getValueFor(e),io.getValueFor(e),so.getValueFor(e),ao.getValueFor(e),void 0,2,3,1,2,void 0)})),Ei=un("neutral-fill-rest").withDefault(e=>$i.getValueFor(e).evaluate(e).rest),ki=un("neutral-fill-hover").withDefault(e=>$i.getValueFor(e).evaluate(e).hover),Fi=un("neutral-fill-active").withDefault(e=>$i.getValueFor(e).evaluate(e).active),Vi=(un("neutral-fill-focus").withDefault(e=>$i.getValueFor(e).evaluate(e).focus),hn("neutral-fill-input-recipe").withDefault({evaluate:(e,t)=>sn(Qo.getValueFor(e),t||ii.getValueFor(e),lo.getValueFor(e),co.getValueFor(e),uo.getValueFor(e),ho.getValueFor(e),void 0,2,3,1,0,void 0)})),Bi=un("neutral-fill-input-rest").withDefault(e=>Vi.getValueFor(e).evaluate(e).rest),Si=un("neutral-fill-input-hover").withDefault(e=>Vi.getValueFor(e).evaluate(e).hover),Di=(un("neutral-fill-input-active").withDefault(e=>Vi.getValueFor(e).evaluate(e).active),un("neutral-fill-input-focus").withDefault(e=>Vi.getValueFor(e).evaluate(e).focus)),Ti=hn("neutral-fill-input-alt-recipe").withDefault({evaluate:(e,t)=>sn(Qo.getValueFor(e),t||ii.getValueFor(e),fo.getValueFor(e),po.getValueFor(e),go.getValueFor(e),vo.getValueFor(e),1,fo.getValueFor(e),fo.getValueFor(e)-po.getValueFor(e),fo.getValueFor(e)-go.getValueFor(e),vo.getValueFor(e),1)}),Oi=(un("neutral-fill-input-alt-rest").withDefault(e=>Ti.getValueFor(e).evaluate(e).rest),un("neutral-fill-input-alt-hover").withDefault(e=>Ti.getValueFor(e).evaluate(e).hover),un("neutral-fill-input-alt-active").withDefault(e=>Ti.getValueFor(e).evaluate(e).active),un("neutral-fill-input-alt-focus").withDefault(e=>Ti.getValueFor(e).evaluate(e).focus),hn("neutral-fill-layer-recipe").withDefault({evaluate:(e,t)=>on(Qo.getValueFor(e),t||ii.getValueFor(e),mo.getValueFor(e),bo.getValueFor(e),yo.getValueFor(e),mo.getValueFor(e),1)})),Ri=(un("neutral-fill-layer-rest").withDefault(e=>Oi.getValueFor(e).evaluate(e).rest),un("neutral-fill-layer-hover").withDefault(e=>Oi.getValueFor(e).evaluate(e).hover),un("neutral-fill-layer-active").withDefault(e=>Oi.getValueFor(e).evaluate(e).active),hn("neutral-fill-layer-alt-recipe").withDefault({evaluate:(e,t)=>on(Qo.getValueFor(e),t||ii.getValueFor(e),wo.getValueFor(e),wo.getValueFor(e),wo.getValueFor(e),wo.getValueFor(e))})),Li=(un("neutral-fill-layer-alt-rest").withDefault(e=>Ri.getValueFor(e).evaluate(e).rest),hn("neutral-fill-secondary-recipe").withDefault({evaluate:(e,t)=>on(Qo.getValueFor(e),t||ii.getValueFor(e),Ao.getValueFor(e),xo.getValueFor(e),Co.getValueFor(e),$o.getValueFor(e))})),Pi=un("neutral-fill-secondary-rest").withDefault(e=>Li.getValueFor(e).evaluate(e).rest),Ii=un("neutral-fill-secondary-hover").withDefault(e=>Li.getValueFor(e).evaluate(e).hover),Ni=(un("neutral-fill-secondary-active").withDefault(e=>Li.getValueFor(e).evaluate(e).active),un("neutral-fill-secondary-focus").withDefault(e=>Li.getValueFor(e).evaluate(e).focus)),Mi=hn("neutral-fill-stealth-recipe").withDefault({evaluate:(e,t)=>on(Qo.getValueFor(e),t||ii.getValueFor(e),Eo.getValueFor(e),ko.getValueFor(e),Fo.getValueFor(e),Vo.getValueFor(e))}),zi=un("neutral-fill-stealth-rest").withDefault(e=>Mi.getValueFor(e).evaluate(e).rest),ji=un("neutral-fill-stealth-hover").withDefault(e=>Mi.getValueFor(e).evaluate(e).hover),Hi=un("neutral-fill-stealth-active").withDefault(e=>Mi.getValueFor(e).evaluate(e).active),qi=(un("neutral-fill-stealth-focus").withDefault(e=>Mi.getValueFor(e).evaluate(e).focus),hn("neutral-fill-strong-recipe").withDefault({evaluate:(e,t)=>nn(Qo.getValueFor(e),t||ii.getValueFor(e),4.5,Bo.getValueFor(e),So.getValueFor(e),Do.getValueFor(e),To.getValueFor(e))})),_i=(un("neutral-fill-strong-rest").withDefault(e=>qi.getValueFor(e).evaluate(e).rest),un("neutral-fill-strong-hover").withDefault(e=>qi.getValueFor(e).evaluate(e).hover),un("neutral-fill-strong-active").withDefault(e=>qi.getValueFor(e).evaluate(e).active),un("neutral-fill-strong-focus").withDefault(e=>qi.getValueFor(e).evaluate(e).focus),hn("neutral-foreground-recipe").withDefault({evaluate:(e,t)=>nn(Qo.getValueFor(e),t||ii.getValueFor(e),16,0,-19,-30,0)})),Ui=un("neutral-foreground-rest").withDefault(e=>_i.getValueFor(e).evaluate(e).rest),Wi=(un("neutral-foreground-hover").withDefault(e=>_i.getValueFor(e).evaluate(e).hover),un("neutral-foreground-active").withDefault(e=>_i.getValueFor(e).evaluate(e).active),un("neutral-foreground-focus").withDefault(e=>_i.getValueFor(e).evaluate(e).focus),hn("neutral-foreground-hint-recipe").withDefault({evaluate:(e,t)=>function(e,t){return e.colorContrast(t,4.5)}(Qo.getValueFor(e),t||ii.getValueFor(e))})),Gi=(un("neutral-foreground-hint").withDefault(e=>Wi.getValueFor(e).evaluate(e)),hn("neutral-stroke-recipe").withDefault({evaluate:(e,t)=>on(Qo.getValueFor(e),t||ii.getValueFor(e),Oo.getValueFor(e),Ro.getValueFor(e),Lo.getValueFor(e),Po.getValueFor(e))})),Yi=un("neutral-stroke-rest").withDefault(e=>Gi.getValueFor(e).evaluate(e).rest),Qi=un("neutral-stroke-hover").withDefault(e=>Gi.getValueFor(e).evaluate(e).hover),Xi=un("neutral-stroke-active").withDefault(e=>Gi.getValueFor(e).evaluate(e).active),Ki=(un("neutral-stroke-focus").withDefault(e=>Gi.getValueFor(e).evaluate(e).focus),hn("neutral-stroke-control-recipe").withDefault({evaluate:(e,t)=>rn(Qo.getValueFor(e),t||ii.getValueFor(e),Io.getValueFor(e),No.getValueFor(e),Mo.getValueFor(e),zo.getValueFor(e),5)})),Zi=un("neutral-stroke-control-rest").withDefault(e=>Ki.getValueFor(e).evaluate(e).rest),Ji=un("neutral-stroke-control-hover").withDefault(e=>Ki.getValueFor(e).evaluate(e).hover),es=un("neutral-stroke-control-active").withDefault(e=>Ki.getValueFor(e).evaluate(e).active),ts=(un("neutral-stroke-control-focus").withDefault(e=>Ki.getValueFor(e).evaluate(e).focus),hn("neutral-stroke-divider-recipe").withDefault({evaluate:(e,t)=>function(e,t,r){return e.get(e.closestIndexOf(t)+zr(t)*r)}(Qo.getValueFor(e),t||ii.getValueFor(e),jo.getValueFor(e))})),rs=(un("neutral-stroke-divider-rest").withDefault(e=>ts.getValueFor(e).evaluate(e)),hn("neutral-stroke-input-recipe").withDefault({evaluate:(e,t)=>function(e,t,r,n,o,i,s,a){const l=e.closestIndexOf(t),c=zr(t),u=l+c*r,h=u+c*(n-r),d=u+c*(o-r),f=u+c*(i-r),p=`calc(100% - ${a})`;function g(t,r){const n=e.get(t);if(r){const r=e.get(t+20*c),o=`linear-gradient(${n.toColorString()} ${p}, ${r.toColorString()} ${p}, ${r.toColorString()})`;return Jr.fromObject(n,o)}return n}return{rest:g(u,!0),hover:g(h,!0),active:g(d,!1),focus:g(f,!0)}}(Qo.getValueFor(e),t||ii.getValueFor(e),Io.getValueFor(e),No.getValueFor(e),Mo.getValueFor(e),zo.getValueFor(e),0,mn.getValueFor(e)+"px")})),ns=un("neutral-stroke-input-rest").withDefault(e=>rs.getValueFor(e).evaluate(e).rest),os=un("neutral-stroke-input-hover").withDefault(e=>rs.getValueFor(e).evaluate(e).hover),is=(un("neutral-stroke-input-active").withDefault(e=>rs.getValueFor(e).evaluate(e).active),un("neutral-stroke-input-focus").withDefault(e=>rs.getValueFor(e).evaluate(e).focus),hn("neutral-stroke-layer-recipe").withDefault({evaluate:(e,t)=>on(Qo.getValueFor(e),t||ii.getValueFor(e),Ho.getValueFor(e),qo.getValueFor(e),_o.getValueFor(e),Ho.getValueFor(e))})),ss=(un("neutral-stroke-layer-rest").withDefault(e=>is.getValueFor(e).evaluate(e).rest),un("neutral-stroke-layer-hover").withDefault(e=>is.getValueFor(e).evaluate(e).hover),un("neutral-stroke-layer-active").withDefault(e=>is.getValueFor(e).evaluate(e).active),hn("neutral-stroke-strong-recipe").withDefault({evaluate:(e,t)=>nn(Qo.getValueFor(e),t||ii.getValueFor(e),5.5,0,Uo.getValueFor(e),Wo.getValueFor(e),Go.getValueFor(e))})),as=(un("neutral-stroke-strong-rest").withDefault(e=>ss.getValueFor(e).evaluate(e).rest),un("neutral-stroke-strong-hover").withDefault(e=>ss.getValueFor(e).evaluate(e).hover),un("neutral-stroke-strong-active").withDefault(e=>ss.getValueFor(e).evaluate(e).active),un("neutral-stroke-strong-focus").withDefault(e=>ss.getValueFor(e).evaluate(e).focus),hn("focus-stroke-outer-recipe").withDefault({evaluate:e=>(Qo.getValueFor(e),Mr(ii.getValueFor(e))?Wr:Gr)})),ls=un("focus-stroke-outer").withDefault(e=>as.getValueFor(e).evaluate(e)),cs=hn("focus-stroke-inner-recipe").withDefault({evaluate:e=>{return Ko.getValueFor(e),t=ii.getValueFor(e),ls.getValueFor(e),Mr(t)?Gr:Wr;var t}}),us=un("focus-stroke-inner").withDefault(e=>cs.getValueFor(e).evaluate(e)),hs=hn("foreground-on-accent-large-recipe").withDefault({evaluate:e=>Kr(li.getValueFor(e),ci.getValueFor(e),ui.getValueFor(e),hi.getValueFor(e),si.large)}),ds=(un("foreground-on-accent-rest-large").withDefault(e=>hs.getValueFor(e).evaluate(e).rest),un("foreground-on-accent-hover-large").withDefault(e=>hs.getValueFor(e).evaluate(e,ci.getValueFor(e)).hover),un("foreground-on-accent-active-large").withDefault(e=>hs.getValueFor(e).evaluate(e,ui.getValueFor(e)).active),un("foreground-on-accent-focus-large").withDefault(e=>hs.getValueFor(e).evaluate(e,hi.getValueFor(e)).focus),un("neutral-fill-inverse-rest-delta").withDefault(0)),fs=un("neutral-fill-inverse-hover-delta").withDefault(-3),ps=un("neutral-fill-inverse-active-delta").withDefault(7),gs=un("neutral-fill-inverse-focus-delta").withDefault(0),vs=hn("neutral-fill-inverse-recipe").withDefault({evaluate:(e,t)=>function(e,t,r,n,o,i){const s=zr(t),a=e.closestIndexOf(e.colorContrast(t,14)),l=a+s*Math.abs(r-n);let c,u;return(1===s?r<n:s*r>s*n)?(c=a,u=l):(c=l,u=a),{rest:e.get(c),hover:e.get(u),active:e.get(c+s*o),focus:e.get(c+s*i)}}(Qo.getValueFor(e),t||ii.getValueFor(e),ds.getValueFor(e),fs.getValueFor(e),ps.getValueFor(e),gs.getValueFor(e))}),ms=(un("neutral-fill-inverse-rest").withDefault(e=>vs.getValueFor(e).evaluate(e).rest),un("neutral-fill-inverse-hover").withDefault(e=>vs.getValueFor(e).evaluate(e).hover),un("neutral-fill-inverse-active").withDefault(e=>vs.getValueFor(e).evaluate(e).active),un("neutral-fill-inverse-focus").withDefault(e=>vs.getValueFor(e).evaluate(e).focus),ar`(${fn} + ${pn}) * ${gn}`),bs=ar`
  font-family: ${yn};
  font-size: ${xn};
  line-height: ${Cn};
  font-weight: initial;
  font-variation-settings: ${$n};
`,ys=ar`
  font-family: ${yn};
  font-size: ${En};
  line-height: ${kn};
  font-weight: initial;
  font-variation-settings: ${Fn};
`,ws=(ar`
  font-family: ${yn};
  font-size: ${Vn};
  line-height: ${Bn};
  font-weight: initial;
  font-variation-settings: ${Sn};
`,ar`
  font-family: ${yn};
  font-size: ${Dn};
  line-height: ${Tn};
  font-weight: initial;
  font-variation-settings: ${On};
`,ar`
  font-family: ${yn};
  font-size: ${Rn};
  line-height: ${Ln};
  font-weight: initial;
  font-variation-settings: ${Pn};
`,ar`
  font-family: ${yn};
  font-size: ${In};
  line-height: ${Nn};
  font-weight: initial;
  font-variation-settings: ${Mn};
`,ar`
  font-family: ${yn};
  font-size: ${zn};
  line-height: ${jn};
  font-weight: initial;
  font-variation-settings: ${Hn};
`,ar`
  font-family: ${yn};
  font-size: ${qn};
  line-height: ${_n};
  font-weight: initial;
  font-variation-settings: ${Un};
`,ar`
  font-family: ${yn};
  font-size: ${Wn};
  line-height: ${Gn};
  font-weight: initial;
  font-variation-settings: ${Yn};
`,ar`
  outline: calc(${bn} * 1px) solid ${ls};
  outline-offset: calc(${bn} * -1px);
`);ar`
  outline: calc(${bn} * 1px) solid ${ls};
  outline-offset: calc(${mn} * 1px);
`;class As{constructor(e,t,r){this.propertyName=e,this.value=t,this.styles=r}bind(e){m.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){m.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,t){e[t]===this.value?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}}function xs(e,t){return new As("appearance",e,t)}const Cs=":not([disabled])",$s="[disabled]";class Es extends Jt{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const e=this.defaultSlottedContent.filter(e=>e.nodeType===Node.ELEMENT_NODE);1===e.length&&e[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}ut([P],Es.prototype,"appearance",void 0);const ks=Es.compose({baseName:"button",baseClass:Jt,template:(e,t)=>Nt`
    <button
        class="control"
        part="control"
        ?autofocus="${e=>e.autofocus}"
        ?disabled="${e=>e.disabled}"
        form="${e=>e.formId}"
        formaction="${e=>e.formaction}"
        formenctype="${e=>e.formenctype}"
        formmethod="${e=>e.formmethod}"
        formnovalidate="${e=>e.formnovalidate}"
        formtarget="${e=>e.formtarget}"
        name="${e=>e.name}"
        type="${e=>e.type}"
        value="${e=>e.value}"
        aria-atomic="${e=>e.ariaAtomic}"
        aria-busy="${e=>e.ariaBusy}"
        aria-controls="${e=>e.ariaControls}"
        aria-current="${e=>e.ariaCurrent}"
        aria-describedby="${e=>e.ariaDescribedby}"
        aria-details="${e=>e.ariaDetails}"
        aria-disabled="${e=>e.ariaDisabled}"
        aria-errormessage="${e=>e.ariaErrormessage}"
        aria-expanded="${e=>e.ariaExpanded}"
        aria-flowto="${e=>e.ariaFlowto}"
        aria-haspopup="${e=>e.ariaHaspopup}"
        aria-hidden="${e=>e.ariaHidden}"
        aria-invalid="${e=>e.ariaInvalid}"
        aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
        aria-label="${e=>e.ariaLabel}"
        aria-labelledby="${e=>e.ariaLabelledby}"
        aria-live="${e=>e.ariaLive}"
        aria-owns="${e=>e.ariaOwns}"
        aria-pressed="${e=>e.ariaPressed}"
        aria-relevant="${e=>e.ariaRelevant}"
        aria-roledescription="${e=>e.ariaRoledescription}"
        ${zt("control")}
    >
        ${qt(0,t)}
        <span class="content" part="content">
            <slot ${nr("defaultSlottedContent")}></slot>
        </span>
        ${Ht(0,t)}
    </button>
`,styles:(e,t)=>ir`
    :host(${Cs}) .control {
      cursor: pointer;
    }

    :host(${$s}) .control {
      cursor: ${lr};
    }

    @media (forced-colors: none) {
      :host(${$s}) .control {
        opacity: ${dn};
      }
    }

    ${ir`
    ${hr("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${bs}
      height: calc(${ms} * 1px);
      min-width: calc(${ms} * 1px);
      color: ${Ui};
      border-radius: calc(${vn} * 1px);
      fill: currentcolor;
    }

    .control {
      border: calc(${mn} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${gn} * 2 * ${pn})) * 1px);
      white-space: nowrap;
      outline: none;
      text-decoration: none;
      color: inherit;
      border-radius: inherit;
      fill: inherit;
      font-family: inherit;
    }

    .control,
    .end,
    .start {
      font: inherit;
    }

    .control.icon-only {
      padding: 0;
      line-height: 0;
    }

    .control:${fr} {
      ${ws}
    }

    .control::-moz-focus-inner {
      border: 0;
    }

    .content {
      pointer-events: none;
    }

    .start,
    .end {
      display: flex;
      pointer-events: none;
    }

    .start {
      margin-inline-end: 11px;
    }

    .end {
      margin-inline-start: 11px;
    }
  `}
  `.withBehaviors(xs("neutral",((e,t,r,n="[disabled]")=>ir`
    .control {
      background: padding-box linear-gradient(${Ei}, ${Ei}),
        border-box ${Zi};
    }

    :host(${r}:hover) .control {
      background: padding-box linear-gradient(${ki}, ${ki}),
        border-box ${Ji};
    }

    :host(${r}:active) .control {
      background: padding-box linear-gradient(${Fi}, ${Fi}),
        border-box ${es};
    }

    :host(${n}) .control {
      background: padding-box linear-gradient(${Ei}, ${Ei}),
        border-box ${Yi};
    }
  `.withBehaviors(vr(ir`
        .control {
          background: ${cr.ButtonFace};
          border-color: ${cr.ButtonText};
          color: ${cr.ButtonText};
        }

        :host(${r}:hover) .control,
        :host(${r}:active) .control {
          forced-color-adjust: none;
          background: ${cr.HighlightText};
          border-color: ${cr.Highlight};
          color: ${cr.Highlight};
        }

        :host(${n}) .control {
          background: transparent;
          border-color: ${cr.GrayText};
          color: ${cr.GrayText};
        }

        .control:${fr} {
          outline-color: ${cr.CanvasText};
        }

        :host([href]) .control {
          background: transparent;
          border-color: ${cr.LinkText};
          color: ${cr.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${cr.CanvasText};
          color: ${cr.CanvasText};
        }
    `)))(0,0,Cs,$s)),xs("accent",((e,t,r,n="[disabled]")=>ir`
    .control {
      background: padding-box linear-gradient(${li}, ${li}),
        border-box ${Ai};
      color: ${fi};
    }

    :host(${r}:hover) .control {
      background: padding-box linear-gradient(${ci}, ${ci}),
        border-box ${xi};
      color: ${pi};
    }

    :host(${r}:active) .control {
      background: padding-box linear-gradient(${ui}, ${ui}),
        border-box ${Ci};
      color: ${gi};
    }

    :host(${n}) .control {
      background: ${li};
    }

    .control:${fr} {
      box-shadow: 0 0 0 calc(${bn} * 1px) ${us} inset !important;
    }
  `.withBehaviors(vr(ir`
        .control {
          forced-color-adjust: none;
          background: ${cr.Highlight};
          color: ${cr.HighlightText};
        }

        :host(${r}:hover) .control,
        :host(${r}:active) .control {
          background: ${cr.HighlightText};
          border-color: ${cr.Highlight};
          color: ${cr.Highlight};
        }

        :host(${n}) .control {
          background: transparent;
          border-color: ${cr.GrayText};
          color: ${cr.GrayText};
        }

        .control:${fr} {
          outline-color: ${cr.CanvasText};
          box-shadow: 0 0 0 calc(${bn} * 1px) ${cr.HighlightText} inset !important;
        }

        :host([href]) .control {
          background: ${cr.LinkText};
          color: ${cr.HighlightText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: ${cr.ButtonFace};
          border-color: ${cr.LinkText};
          color: ${cr.LinkText};
        }
      `)))(0,0,Cs,$s)),xs("lightweight",((e,t,r,n="[disabled]")=>ir`
    :host {
      color: ${mi};
    }

    .control {
      background: ${zi};
    }

    :host(${r}:hover) .control {
      background: ${ji};
      color: ${bi};
    }

    :host(${r}:active) .control {
      background: ${Hi};
      color: ${yi};
    }

    :host(${n}) .control {
      background: ${zi};
    }
  `.withBehaviors(vr(ir`
        :host {
          color: ${cr.ButtonText};
        }

        .control {
          forced-color-adjust: none;
          background: transparent;
        }

        :host(${r}:hover) .control,
        :host(${r}:active) .control {
          background: transparent;
          border-color: ${cr.ButtonText};
          color: ${cr.ButtonText};
        }

        :host(${n}) .control {
          background: transparent;
          color: ${cr.GrayText};
        }

        .control:${fr} {
          outline-color: ${cr.CanvasText};
        }

        :host([href]) .control {
          color: ${cr.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${cr.LinkText};
          color: ${cr.LinkText};
        }
      `)))(0,0,Cs,$s)),xs("outline",((e,t,r,n="[disabled]")=>ir`
    .control {
      background: transparent !important;
      border-color: ${Yi};
    }

    :host(${r}:hover) .control {
      border-color: ${Qi};
    }

    :host(${r}:active) .control {
      border-color: ${Xi};
    }

    :host(${n}) .control {
      background: transparent !important;
      border-color: ${Yi};
    }
  `.withBehaviors(vr(ir`
        .control {
          border-color: ${cr.ButtonText};
          color: ${cr.ButtonText};
        }

        :host(${r}:hover) .control,
        :host(${r}:active) .control {
          background: ${cr.HighlightText};
          border-color: ${cr.Highlight};
          color: ${cr.Highlight};
        }

        :host(${n}) .control {
          border-color: ${cr.GrayText};
          color: ${cr.GrayText};
        }

        .control:${fr} {
          outline-color: ${cr.CanvasText};
        }

        :host([href]) .control {
          border-color: ${cr.LinkText};
          color: ${cr.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${cr.CanvasText};
          color: ${cr.CanvasText};
        }
      `)))(0,0,Cs,$s)),xs("stealth",((e,t,r,n="[disabled]")=>ir`
    .control {
      background: ${zi};
    }

    :host(${r}:hover) .control {
      background: ${ji};
    }

    :host(${r}:active) .control {
      background: ${Hi};
    }

    :host(${n}) .control {
      background: ${zi};
    }
  `.withBehaviors(vr(ir`
        .control {
          forced-color-adjust: none;
          background: transparent;
          color: ${cr.ButtonText};
        }

        :host(${r}:hover) .control,
        :host(${r}:active) .control {
          background: transparent;
          border-color: ${cr.ButtonText};
          color: ${cr.ButtonText};
        }

        :host(${n}) .control {
          background: transparent;
          color: ${cr.GrayText};
        }
        
        .control:${fr} {
          outline-color: ${cr.CanvasText};
        }

        :host([href]) .control {
          color: ${cr.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${cr.LinkText};
          color: ${cr.LinkText};
        }
      `)))(0,0,Cs,$s))),shadowOptions:{delegatesFocus:!0}});class Fs extends Re{}class Vs extends(Xt(Fs)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Bs extends Vs{constructor(){super(...arguments),this.type="text"}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&p.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}j([P({attribute:"readonly",mode:"boolean"})],Bs.prototype,"readOnly",void 0),j([P({mode:"boolean"})],Bs.prototype,"autofocus",void 0),j([P],Bs.prototype,"placeholder",void 0),j([P],Bs.prototype,"type",void 0),j([P],Bs.prototype,"list",void 0),j([P({converter:R})],Bs.prototype,"maxlength",void 0),j([P({converter:R})],Bs.prototype,"minlength",void 0),j([P],Bs.prototype,"pattern",void 0),j([P({converter:R})],Bs.prototype,"size",void 0),j([P({mode:"boolean"})],Bs.prototype,"spellcheck",void 0),j([b],Bs.prototype,"defaultSlottedNodes",void 0);class Ss{}function Ds(e,t,r){return e.nodeType!==Node.TEXT_NODE||"string"==typeof e.nodeValue&&!!e.nodeValue.trim().length}_t(Ss,ht),_t(Bs,jt,Ss);const Ts=tt.create("input-placeholder-rest").withDefault(e=>{const t=Vi.getValueFor(e);return Wi.getValueFor(e).evaluate(e,t.evaluate(e).rest)}),Os=tt.create("input-placeholder-hover").withDefault(e=>{const t=Vi.getValueFor(e);return Wi.getValueFor(e).evaluate(e,t.evaluate(e).hover)}),Rs=tt.create("input-filled-placeholder-rest").withDefault(e=>{const t=Li.getValueFor(e);return Wi.getValueFor(e).evaluate(e,t.evaluate(e).rest)}),Ls=tt.create("input-filled-placeholder-hover").withDefault(e=>{const t=Li.getValueFor(e);return Wi.getValueFor(e).evaluate(e,t.evaluate(e).hover)}),Ps=(e,t,r)=>ir`
  :host {
    ${bs}
    color: ${Ui};
    fill: currentcolor;
    user-select: none;
    position: relative;
  }

  ${r} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    border: calc(${mn} * 1px) solid transparent;
    border-radius: calc(${vn} * 1px);
    height: calc(${ms} * 1px);
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  .control {
    width: 100%;
    outline: none;
  }

  .label {
    display: block;
    color: ${Ui};
    cursor: pointer;
    ${bs}
    margin-bottom: 4px;
  }

  .label__hidden {
    display: none;
    visibility: hidden;
  }

  :host([disabled]) ${r},
  :host([readonly]) ${r},
  :host([disabled]) .label,
  :host([readonly]) .label,
  :host([disabled]) .control,
  :host([readonly]) .control {
    cursor: ${lr};
  }

  :host([disabled]) {
    opacity: ${dn};
  }
`,Is=(e,t,r)=>ir`
  @media (forced-colors: none) {
    :host(:not([disabled]):active)::after {
      left: 50%;
      width: 40%;
      transform: translateX(-50%);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host(:not([disabled]):focus-within)::after {
      left: 0;
      width: 100%;
      transform: none;
    }

    :host(:not([disabled]):active)::after,
    :host(:not([disabled]):focus-within:not(:active))::after {
      content: '';
      position: absolute;
      height: calc(${bn} * 1px);
      bottom: 0;
      border-bottom: calc(${bn} * 1px) solid ${li};
      border-bottom-left-radius: calc(${vn} * 1px);
      border-bottom-right-radius: calc(${vn} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`,Ns=(e,t,r,n=":not([disabled]):not(:focus-within)")=>ir`
  ${r} {
    background: padding-box linear-gradient(${Bi}, ${Bi}),
      border-box ${ns};
  }

  :host(${n}:hover) ${r} {
    background: padding-box linear-gradient(${Si}, ${Si}),
      border-box ${os};
  }

  :host(:not([disabled]):focus-within) ${r} {
    background: padding-box linear-gradient(${Di}, ${Di}),
      border-box ${ns};
  }
  
  :host([disabled]) ${r} {
    background: padding-box linear-gradient(${Bi}, ${Bi}),
      border-box ${Yi};
  }

  .control::placeholder {
    color: ${Ts};
  }

  :host(${n}:hover) .control::placeholder {
    color: ${Os};
  }
`,Ms=(e,t,r,n=":not([disabled]):not(:focus-within)")=>ir`
  ${r} {
    background: ${Pi};
  }

  :host(${n}:hover) ${r} {
    background: ${Ii};
  }

  :host(:not([disabled]):focus-within) ${r} {
    background: ${Ni};
  }

  :host([disabled]) ${r} {
    background: ${Pi};
  }

  .control::placeholder {
    color: ${Rs};
  }

  :host(${n}:hover) .control::placeholder {
    color: ${Ls};
  }
`,zs=(e,t,r,n=":not([disabled]):not(:focus-within)")=>ir`
  :host {
    color: ${cr.ButtonText};
  }

  ${r} {
    background: ${cr.ButtonFace};
    border-color: ${cr.ButtonText};
  }

  :host(${n}:hover) ${r},
  :host(:not([disabled]):focus-within) ${r} {
    border-color: ${cr.Highlight};
  }

  :host([disabled]) ${r} {
    opacity: 1;
    background: ${cr.ButtonFace};
    border-color: ${cr.GrayText};
  }

  .control::placeholder,
  :host(${n}:hover) .control::placeholder {
    color: ${cr.CanvasText};
  }

  :host(:not([disabled]):focus) ${r} {
    ${ws}
    outline-color: ${cr.Highlight};
  }

  :host([disabled]) {
    opacity: 1;
    color: ${cr.GrayText};
  }

  :host([disabled]) ::placeholder,
  :host([disabled]) ::-webkit-input-placeholder {
    color: ${cr.GrayText};
  }
`,js=".root";class Hs extends Bs{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}ut([P],Hs.prototype,"appearance",void 0);const qs=Hs.compose({baseName:"text-field",baseClass:Bs,template:(e,t)=>Nt`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${nr({property:"defaultSlottedNodes",filter:Ds})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${qt(0,t)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${e=>e.handleTextInput()}"
                @change="${e=>e.handleChange()}"
                ?autofocus="${e=>e.autofocus}"
                ?disabled="${e=>e.disabled}"
                list="${e=>e.list}"
                maxlength="${e=>e.maxlength}"
                minlength="${e=>e.minlength}"
                pattern="${e=>e.pattern}"
                placeholder="${e=>e.placeholder}"
                ?readonly="${e=>e.readOnly}"
                ?required="${e=>e.required}"
                size="${e=>e.size}"
                ?spellcheck="${e=>e.spellcheck}"
                :value="${e=>e.value}"
                type="${e=>e.type}"
                aria-atomic="${e=>e.ariaAtomic}"
                aria-busy="${e=>e.ariaBusy}"
                aria-controls="${e=>e.ariaControls}"
                aria-current="${e=>e.ariaCurrent}"
                aria-describedby="${e=>e.ariaDescribedby}"
                aria-details="${e=>e.ariaDetails}"
                aria-disabled="${e=>e.ariaDisabled}"
                aria-errormessage="${e=>e.ariaErrormessage}"
                aria-flowto="${e=>e.ariaFlowto}"
                aria-haspopup="${e=>e.ariaHaspopup}"
                aria-hidden="${e=>e.ariaHidden}"
                aria-invalid="${e=>e.ariaInvalid}"
                aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
                aria-label="${e=>e.ariaLabel}"
                aria-labelledby="${e=>e.ariaLabelledby}"
                aria-live="${e=>e.ariaLive}"
                aria-owns="${e=>e.ariaOwns}"
                aria-relevant="${e=>e.ariaRelevant}"
                aria-roledescription="${e=>e.ariaRoledescription}"
                ${zt("control")}
            />
            ${Ht(0,t)}
        </div>
    </template>
`,styles:(e,t)=>ir`
    ${hr("inline-block")}

    ${Ps(0,0,js)}

    ${Is()}

    .root {
      display: flex;
      flex-direction: row;
    }

    .control {
      -webkit-appearance: none;
      color: inherit;
      background: transparent;
      border: 0;
      height: calc(100% - 4px);
      margin-top: auto;
      margin-bottom: auto;
      padding: 0 calc(${gn} * 2px + 1px);
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    .start,
    .end {
      display: flex;
      margin: auto;
    }

    .start {
      display: flex;
      margin-inline-start: 11px;
    }

    .end {
      display: flex;
      margin-inline-end: 11px;
    }
  `.withBehaviors(xs("outline",Ns(0,0,js)),xs("filled",Ms(0,0,js)),vr(zs(0,0,js))),shadowOptions:{delegatesFocus:!0}});class _s extends Re{}class Us extends(Xt(_s)){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const Ws="none";class Gs extends Us{constructor(){super(...arguments),this.resize=Ws,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}j([P({mode:"boolean"})],Gs.prototype,"readOnly",void 0),j([P],Gs.prototype,"resize",void 0),j([P({mode:"boolean"})],Gs.prototype,"autofocus",void 0),j([P({attribute:"form"})],Gs.prototype,"formId",void 0),j([P],Gs.prototype,"list",void 0),j([P({converter:R})],Gs.prototype,"maxlength",void 0),j([P({converter:R})],Gs.prototype,"minlength",void 0),j([P],Gs.prototype,"name",void 0),j([P],Gs.prototype,"placeholder",void 0),j([P({converter:R,mode:"fromView"})],Gs.prototype,"cols",void 0),j([P({converter:R,mode:"fromView"})],Gs.prototype,"rows",void 0),j([P({mode:"boolean"})],Gs.prototype,"spellcheck",void 0),j([b],Gs.prototype,"defaultSlottedNodes",void 0),_t(Gs,Ss);const Ys=".control";class Qs extends Gs{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}ut([P],Qs.prototype,"appearance",void 0);const Xs=Qs.compose({baseName:"text-area",baseClass:Gs,template:(e,t)=>Nt`
    <template
        class="
            ${e=>e.readOnly?"readonly":""}
            ${e=>e.resize!==Ws?`resize-${e.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${e=>e.defaultSlottedNodes&&e.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${nr("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${e=>e.autofocus}"
            cols="${e=>e.cols}"
            ?disabled="${e=>e.disabled}"
            form="${e=>e.form}"
            list="${e=>e.list}"
            maxlength="${e=>e.maxlength}"
            minlength="${e=>e.minlength}"
            name="${e=>e.name}"
            placeholder="${e=>e.placeholder}"
            ?readonly="${e=>e.readOnly}"
            ?required="${e=>e.required}"
            rows="${e=>e.rows}"
            ?spellcheck="${e=>e.spellcheck}"
            :value="${e=>e.value}"
            aria-atomic="${e=>e.ariaAtomic}"
            aria-busy="${e=>e.ariaBusy}"
            aria-controls="${e=>e.ariaControls}"
            aria-current="${e=>e.ariaCurrent}"
            aria-describedby="${e=>e.ariaDescribedby}"
            aria-details="${e=>e.ariaDetails}"
            aria-disabled="${e=>e.ariaDisabled}"
            aria-errormessage="${e=>e.ariaErrormessage}"
            aria-flowto="${e=>e.ariaFlowto}"
            aria-haspopup="${e=>e.ariaHaspopup}"
            aria-hidden="${e=>e.ariaHidden}"
            aria-invalid="${e=>e.ariaInvalid}"
            aria-keyshortcuts="${e=>e.ariaKeyshortcuts}"
            aria-label="${e=>e.ariaLabel}"
            aria-labelledby="${e=>e.ariaLabelledby}"
            aria-live="${e=>e.ariaLive}"
            aria-owns="${e=>e.ariaOwns}"
            aria-relevant="${e=>e.ariaRelevant}"
            aria-roledescription="${e=>e.ariaRoledescription}"
            @input="${(e,t)=>e.handleTextInput()}"
            @change="${e=>e.handleChange()}"
            ${zt("control")}
        ></textarea>
    </template>
`,styles:(e,t)=>ir`
    ${hr("inline-flex")}

    ${Ps(0,0,Ys)}

    ${Is()}

    :host {
      flex-direction: column;
      vertical-align: bottom;
    }

    .control {
      height: calc((${ms} * 2) * 1px);
      padding: calc(${gn} * 1.5px) calc(${gn} * 2px + 1px);
    }

    :host .control {
      resize: none;
    }

    :host(.resize-both) .control {
      resize: both;
    }

    :host(.resize-horizontal) .control {
      resize: horizontal;
    }

    :host(.resize-vertical) .control {
      resize: vertical;
    }

    :host([cols]) {
      width: initial;
    }

    :host([rows]) .control {
      height: initial;
    }
  `.withBehaviors(xs("outline",Ns(0,0,Ys)),xs("filled",Ms(0,0,Ys)),vr(zs(0,0,Ys))),shadowOptions:{delegatesFocus:!0}});class Ks extends Re{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,t=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?t:`${t} ${e}`}}}j([P({attribute:"fill"})],Ks.prototype,"fill",void 0),j([P({attribute:"color"})],Ks.prototype,"color",void 0),j([P({mode:"boolean"})],Ks.prototype,"circular",void 0);class Zs extends Ks{constructor(){super(...arguments),this.appearance="lightweight"}appearanceChanged(e,t){e!==t&&p.queueUpdate(()=>{this.classList.add(t),this.classList.remove(e)})}}ut([P({mode:"fromView"})],Zs.prototype,"appearance",void 0);const Js=Zs.compose({baseName:"badge",baseClass:Ks,template:(e,t)=>Nt`
    <template class="${e=>e.circular?"circular":""}">
        <div class="control" part="control" style="${e=>e.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`,styles:(e,t)=>ir`
    ${hr("inline-block")} :host {
      box-sizing: border-box;
      ${ys};
    }

    .control {
      border-radius: calc(${vn} * 1px);
      padding: calc(((${gn} * 0.5) - ${mn}) * 1px) calc((${gn} - ${mn}) * 1px);
      border: calc(${mn} * 1px) solid transparent;
    }

    :host(.lightweight) .control {
      background: transparent;
      color: ${Ui};
      font-weight: 600;
    }

    :host(.accent) .control {
      background: ${li};
      color: ${fi};
    }

    :host(.neutral) .control {
      background: ${Pi};
      color: ${Ui};
    }

    :host([circular]) .control {
      border-radius: 100px;
      min-width: calc(${kn} - calc(${gn} * 1px));
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `});function ea(e){return e.purpose.trim().length>0&&e.outcomes.trim().length>0&&e.structure.trim().length>0&&e.timing.trim().length>0}function ta(){return new Promise((e,t)=>{const r=Office.context.mailbox.item;if(!r)return void t(new Error("No active item"));let n=null,o=null,i=0;const s=()=>{if(i++,2===i)if(n&&o){const t=o.getTime()-n.getTime(),r=Math.round(t/6e4);e(r)}else e(0)};r.start.getAsync(e=>{e.status===Office.AsyncResultStatus.Succeeded&&(n=e.value),s()}),r.end.getAsync(e=>{e.status===Office.AsyncResultStatus.Succeeded&&(o=e.value),s()})})}function ra(e){return e.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0})}var na=r(72),oa=r.n(na),ia=r(825),sa=r.n(ia),aa=r(659),la=r.n(aa),ca=r(56),ua=r.n(ca),ha=r(540),da=r.n(ha),fa=r(113),pa=r.n(fa),ga=r(942),va={};let ma,ba,ya,wa,Aa,xa,Ca,$a,Ea,ka,Fa,Va;async function Ba(){try{const r=0===(e=await new Promise((e,t)=>{const r=Office.context.mailbox.item;if(!r)return void t(new Error("No active item"));let n=0,o=0,i=0;const s=()=>{i++,2===i&&e(n+o)};r.requiredAttendees.getAsync(e=>{e.status===Office.AsyncResultStatus.Succeeded&&(n=e.value.length),s()}),r.optionalAttendees.getAsync(e=>{e.status===Office.AsyncResultStatus.Succeeded&&(o=e.value.length),s()})}))?{message:"No attendees yet",level:"warning"}:e<=5?{message:`${e} attendee${1!==e?"s":""} — Great! Small groups make decisions faster`,level:"success"}:e<=7?{message:`${e} attendees — Good size for productive discussion`,level:"success"}:e<=10?{message:`${e} attendees — Consider: Does everyone need to be here?`,level:"warning"}:{message:`${e} attendees — Could this be an email? Large meetings often lack focus`,level:"error"};ba.textContent=r.message,ma.classList.remove("success","warning","error"),ma.classList.add(r.level);const n=(t=await ta())<=30?{message:`${t} min — Perfect length for focused discussion`,level:"success",showButtons:!1}:t<=45?{message:`${t} min — Good, just keep it tight`,level:"success",showButtons:!1}:t<=60?{message:`${t} min — Tip: Try 45 min with a tighter agenda`,level:"warning",showButtons:!0}:{message:`${t} min — Long meetings lose focus. Can you split this up?`,level:"error",showButtons:!0};ya.textContent=n.message,ya.classList.remove("success","warning","error"),ya.classList.add(n.level),n.showButtons?wa.classList.remove("hidden"):wa.classList.add("hidden"),await async function(){try{const e=await new Promise((e,t)=>{const r=Office.context.mailbox.item;if(!r)return void t(new Error("No active item"));let n=null,o=null,i=0;const s=()=>{i++,2===i&&(n&&o?e({start:n,end:o}):t(new Error("Could not get meeting times")))};r.start.getAsync(e=>{e.status===Office.AsyncResultStatus.Succeeded&&(n=e.value),s()}),r.end.getAsync(e=>{e.status===Office.AsyncResultStatus.Succeeded&&(o=e.value),s()})}),t=await ta(),r=`${ra(e.start)} - ${ra(e.end)} (${t} min)`;ka.value&&!ka.value.includes(" - ")||(ka.value=r)}catch(e){console.error("Error updating timing field:",e)}}()}catch(e){console.error("Error refreshing meeting info:",e),ba.textContent="Unable to load",ya.textContent="Unable to load"}var e,t}async function Sa(e){try{await(t=e,new Promise((e,r)=>{const n=Office.context.mailbox.item;n?n.start.getAsync(o=>{if(o.status===Office.AsyncResultStatus.Failed)return void r(o.error);const i=o.value,s=new Date(i.getTime()+60*t*1e3);n.end.setAsync(s,t=>{t.status===Office.AsyncResultStatus.Succeeded?e():r(t.error)})}):r(new Error("No active item"))})),La(`Duration set to ${e} minutes`,"success"),await Ba()}catch(e){console.error("Error setting duration:",e),La("Failed to update duration","error")}var t}function Da(){const e={purpose:Ca.value,outcomes:$a.value,structure:Ea.value,timing:ka.value,isComplete:!1,lastUpdated:(new Date).toISOString()};return e.isComplete=ea(e),e}async function Ta(e=!1){try{const t=Da();await function(e){return new Promise((t,r)=>{Office.context.mailbox.item?.loadCustomPropertiesAsync(n=>{if(n.status===Office.AsyncResultStatus.Failed)return void r(n.error);const o=n.value;o.set("postData",JSON.stringify(e)),o.set("postComplete",String(e.isComplete)),o.saveAsync(e=>{e.status===Office.AsyncResultStatus.Succeeded?t():r(e.error)})})})}(t),function(){const e=function(e){return{purpose:e.purpose.trim().length>0,outcomes:e.outcomes.trim().length>0,structure:e.structure.trim().length>0,timing:e.timing.trim().length>0}}(Da());Oa(Ca,e.purpose),Oa($a,e.outcomes),Oa(Ea,e.structure),Oa(ka,e.timing)}(),ea(t)?await async function(e,t){return new Promise(r=>{const n=function(e){const t=e.outcomes.split("\n").filter(e=>e.trim()).map(e=>`<li>${Ra(e.replace(/^[-*•]\s*/,""))}</li>`).join(""),r=e.structure.split("\n").filter(e=>e.trim()).map(e=>`<li>${Ra(e.replace(/^\d+[.)]\s*/,""))}</li>`).join("");return`\n<div style="font-family: Segoe UI, sans-serif; padding: 20px; background: #f5f5f5; border-radius: 8px; margin-bottom: 16px;">\n  <h2 style="color: #0078d4; margin-top: 0; margin-bottom: 8px;">📌 Meeting Overview</h2>\n  <p style="color: #605e5c; margin-top: 0; margin-bottom: 20px; font-style: italic;">This meeting uses the POST framework to keep discussions focused and productive.</p>\n\n  <h3 style="color: #323130; margin-bottom: 4px;">🎯 Purpose</h3>\n  <p style="color: #605e5c; margin-top: 0; margin-bottom: 4px; font-size: 12px;">Why we're meeting:</p>\n  <p style="margin-top: 0; margin-bottom: 16px;">${Ra(e.purpose)}</p>\n\n  <h3 style="color: #323130; margin-bottom: 4px;">✅ Outcomes</h3>\n  <p style="color: #605e5c; margin-top: 0; margin-bottom: 4px; font-size: 12px;">What we aim to achieve:</p>\n  <ul style="margin-top: 0; margin-bottom: 16px; padding-left: 20px;">\n    ${t||"<li>No outcomes specified</li>"}\n  </ul>\n\n  <h3 style="color: #323130; margin-bottom: 4px;">🗂 Structure</h3>\n  <p style="color: #605e5c; margin-top: 0; margin-bottom: 4px; font-size: 12px;">How the meeting will run:</p>\n  <ol style="margin-top: 0; margin-bottom: 16px; padding-left: 20px;">\n    ${r||"<li>No structure specified</li>"}\n  </ol>\n\n  <h3 style="color: #323130; margin-bottom: 4px;">⏰ Timing</h3>\n  <p style="margin-top: 0; margin-bottom: 0;">${Ra(e.timing)}</p>\n</div>`.trim()}(e);Office.context.mailbox.item?.body.getAsync(Office.CoercionType.Html,e=>{if(e.status===Office.AsyncResultStatus.Failed)return t||La("Failed to read meeting body","error"),void r();const o=e.value||"";o.includes("Meeting Overview")||o.includes("MEETING POST"),function(e,t=!1,r){Office.context.mailbox.item?.body.setAsync(e,{coercionType:Office.CoercionType.Html},e=>{e.status===Office.AsyncResultStatus.Succeeded?t||La("Saved and updated meeting body","success"):t||La("Failed to update meeting body","error"),r&&r()})}(n,t,r)})})}(t,e):e||La("Saved. Complete all fields to update meeting body.","info")}catch(t){console.error("Error saving:",t),e||La("Failed to save","error")}}function Oa(e,t){const r=e.value?.trim();r?t?(e.classList.add("valid"),e.classList.remove("invalid")):(e.classList.add("invalid"),e.classList.remove("valid")):e.classList.remove("valid","invalid")}function Ra(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}function La(e,t="info"){Va.textContent=e,Va.className=`status ${t}`,Va.classList.remove("hidden"),setTimeout(()=>{Va.classList.add("hidden")},3e3)}va.styleTagTransform=pa(),va.setAttributes=ua(),va.insert=la().bind(null,"head"),va.domAPI=sa(),va.insertStyleElement=da(),oa()(ga.A,va),ga.A&&ga.A.locals&&ga.A.locals,at.getOrCreate(undefined).withPrefix("fluent").register(ks(),qs(),Xs(),Js()),Office.onReady(async()=>{ma=document.getElementById("attendee-badge"),ba=document.getElementById("attendee-count"),ya=document.getElementById("duration-text"),wa=document.getElementById("duration-buttons"),Aa=document.getElementById("btn-30min"),xa=document.getElementById("btn-45min"),Ca=document.getElementById("purpose-field"),$a=document.getElementById("outcomes-field"),Ea=document.getElementById("structure-field"),ka=document.getElementById("timing-field"),Fa=document.getElementById("btn-save"),Va=document.getElementById("status-message"),function(){let e;Aa.addEventListener("click",()=>Sa(30)),xa.addEventListener("click",()=>Sa(45)),Fa.addEventListener("click",()=>Ta());const t=()=>{clearTimeout(e),e=window.setTimeout(()=>{Ta(!0)},1e3)};Ca.addEventListener("input",t),$a.addEventListener("input",t),Ea.addEventListener("input",t),ka.addEventListener("input",t)}(),await Ba(),await async function(){try{const e=await new Promise((e,t)=>{Office.context.mailbox.item?.loadCustomPropertiesAsync(r=>{if(r.status===Office.AsyncResultStatus.Failed)return void t(r.error);const n=r.value.get("postData");if(n)try{e(JSON.parse(n))}catch{e(null)}else e(null)})});e&&(Ca.value=e.purpose,$a.value=e.outcomes,Ea.value=e.structure,e.timing&&(ka.value=e.timing))}catch(e){console.error("Error loading form data:",e)}}()})})();
//# sourceMappingURL=taskpane.js.map