(()=>{"use strict";var e={56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},s=[],a=0;a<e.length;a++){var l=e[a],c=r.base?l[0]+r.base:l[0],u=i[c]||0,h="".concat(c," ").concat(u);i[c]=u+1;var d=n(h),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var p=o(f,r);r.byIndex=a,t.splice(a,0,{identifier:h,updater:p,references:1})}s.push(h)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=n(i[s]);t[a].references--}for(var l=r(e,o),c=0;c<i.length;c++){var u=n(i[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=l}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n}).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(s[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&s[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},354:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[t].concat([i]).join("\n")}return[t].join("\n")}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},942:(e,t,n)=>{n.d(t,{A:()=>a});var r=n(354),o=n.n(r),i=n(314),s=n.n(i)()(o());s.push([e.id,'/* Task Pane Styles for POST Meeting Add-in */\n\n:root {\n  --primary-color: #0078d4;\n  --success-color: #107c10;\n  --warning-color: #ffb900;\n  --error-color: #d13438;\n  --background-color: #fafafa;\n  --surface-color: #ffffff;\n  --text-color: #323130;\n  --text-secondary: #605e5c;\n  --border-color: #edebe9;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif;\n  font-size: 14px;\n  color: var(--text-color);\n  background-color: var(--background-color);\n}\n\n#app {\n  padding: 16px;\n  max-width: 100%;\n}\n\n/* Header */\n.header {\n  margin-bottom: 20px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--border-color);\n}\n\n.header h1 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--primary-color);\n}\n\n.header .subtitle {\n  margin: 4px 0 0;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n\n/* Sections */\n.section {\n  margin-bottom: 20px;\n  padding: 16px;\n  background: var(--surface-color);\n  border-radius: 8px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n\n.section-title {\n  margin: 0 0 12px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-color);\n}\n\n/* Info Rows */\n.info-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n\n.info-label {\n  font-weight: 500;\n  min-width: 80px;\n}\n\n/* Badges - color coding based on status level */\nfluent-badge {\n  --badge-fill-filled: var(--text-secondary);\n}\n\nfluent-badge.success {\n  --badge-fill-filled: var(--success-color);\n}\n\nfluent-badge.warning {\n  --badge-fill-filled: #ca5010;\n}\n\nfluent-badge.error {\n  --badge-fill-filled: var(--error-color);\n}\n\n/* Duration text color coding */\n#duration-text {\n  font-size: 13px;\n  line-height: 1.4;\n}\n\n#duration-text.success {\n  color: var(--success-color);\n}\n\n#duration-text.warning {\n  color: #ca5010;\n}\n\n#duration-text.error {\n  color: var(--error-color);\n}\n\n.button-row {\n  display: flex;\n  gap: 8px;\n  margin-top: 8px;\n}\n\n#duration-buttons {\n  margin-top: 12px;\n}\n\n/* Form Groups */\n.form-group {\n  margin-bottom: 16px;\n}\n\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 13px;\n}\n\n.form-group label strong {\n  color: var(--primary-color);\n  font-size: 14px;\n}\n\n.form-group .hint {\n  display: block;\n  font-size: 11px;\n  color: var(--text-secondary);\n  margin-top: 2px;\n}\n\n/* Fluent UI Overrides */\nfluent-text-field,\nfluent-text-area {\n  width: 100%;\n}\n\nfluent-text-field::part(root),\nfluent-text-area::part(root) {\n  border-radius: 4px;\n}\n\nfluent-text-area {\n  min-height: 80px;\n}\n\n/* Actions */\n.actions {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.actions fluent-button {\n  width: 100%;\n}\n\n/* Status Message */\n.status {\n  position: fixed;\n  bottom: 16px;\n  left: 16px;\n  right: 16px;\n  padding: 12px 16px;\n  border-radius: 4px;\n  font-size: 13px;\n  text-align: center;\n  z-index: 100;\n  animation: fadeIn 0.2s ease;\n}\n\n.status.success {\n  background: #dff6dd;\n  color: #107c10;\n}\n\n.status.error {\n  background: #fde7e9;\n  color: #d13438;\n}\n\n.status.info {\n  background: #f3f2f1;\n  color: var(--text-color);\n}\n\n/* Utilities */\n.hidden {\n  display: none !important;\n}\n\n/* Animations */\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n/* Field validation states */\nfluent-text-field.invalid::part(root),\nfluent-text-area.invalid::part(root) {\n  border-color: var(--error-color);\n}\n\nfluent-text-field.valid::part(root),\nfluent-text-area.valid::part(root) {\n  border-color: var(--success-color);\n}\n\n/* Readonly timing field */\n#timing-field::part(root) {\n  background-color: var(--background-color);\n  border-color: var(--border-color);\n}\n\n#timing-field::part(control) {\n  color: var(--text-secondary);\n  cursor: default;\n}\n\n/* Responsive adjustments */\n@media (max-width: 300px) {\n  #app {\n    padding: 12px;\n  }\n\n  .section {\n    padding: 12px;\n  }\n\n  .button-row {\n    flex-direction: column;\n  }\n}\n',"",{version:3,sources:["webpack://./src/taskpane/taskpane.css"],names:[],mappings:"AAAA,6CAA6C;;AAE7C;EACE,wBAAwB;EACxB,wBAAwB;EACxB,wBAAwB;EACxB,sBAAsB;EACtB,2BAA2B;EAC3B,wBAAwB;EACxB,qBAAqB;EACrB,yBAAyB;EACzB,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;;EAEE,SAAS;EACT,UAAU;EACV,sEAAsE;EACtE,eAAe;EACf,wBAAwB;EACxB,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA,WAAW;AACX;EACE,mBAAmB;EACnB,oBAAoB;EACpB,4CAA4C;AAC9C;;AAEA;EACE,SAAS;EACT,eAAe;EACf,gBAAgB;EAChB,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,eAAe;EACf,4BAA4B;AAC9B;;AAEA,aAAa;AACb;EACE,mBAAmB;EACnB,aAAa;EACb,gCAAgC;EAChC,kBAAkB;EAClB,wCAAwC;AAC1C;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,wBAAwB;AAC1B;;AAEA,cAAc;AACd;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,eAAe;AACjB;;AAEA,gDAAgD;AAChD;EACE,0CAA0C;AAC5C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,uCAAuC;AACzC;;AAEA,+BAA+B;AAC/B;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA,gBAAgB;AAChB;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,2BAA2B;EAC3B,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,eAAe;EACf,4BAA4B;EAC5B,eAAe;AACjB;;AAEA,wBAAwB;AACxB;;EAEE,WAAW;AACb;;AAEA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;AAClB;;AAEA,YAAY;AACZ;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,WAAW;AACb;;AAEA,mBAAmB;AACnB;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,mBAAmB;EACnB,wBAAwB;AAC1B;;AAEA,cAAc;AACd;EACE,wBAAwB;AAC1B;;AAEA,eAAe;AACf;EACE;IACE,UAAU;IACV,2BAA2B;EAC7B;EACA;IACE,UAAU;IACV,wBAAwB;EAC1B;AACF;;AAEA,4BAA4B;AAC5B;;EAEE,gCAAgC;AAClC;;AAEA;;EAEE,kCAAkC;AACpC;;AAEA,0BAA0B;AAC1B;EACE,yCAAyC;EACzC,iCAAiC;AACnC;;AAEA;EACE,4BAA4B;EAC5B,eAAe;AACjB;;AAEA,2BAA2B;AAC3B;EACE;IACE,aAAa;EACf;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,sBAAsB;EACxB;AACF",sourcesContent:['/* Task Pane Styles for POST Meeting Add-in */\n\n:root {\n  --primary-color: #0078d4;\n  --success-color: #107c10;\n  --warning-color: #ffb900;\n  --error-color: #d13438;\n  --background-color: #fafafa;\n  --surface-color: #ffffff;\n  --text-color: #323130;\n  --text-secondary: #605e5c;\n  --border-color: #edebe9;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif;\n  font-size: 14px;\n  color: var(--text-color);\n  background-color: var(--background-color);\n}\n\n#app {\n  padding: 16px;\n  max-width: 100%;\n}\n\n/* Header */\n.header {\n  margin-bottom: 20px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--border-color);\n}\n\n.header h1 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--primary-color);\n}\n\n.header .subtitle {\n  margin: 4px 0 0;\n  font-size: 12px;\n  color: var(--text-secondary);\n}\n\n/* Sections */\n.section {\n  margin-bottom: 20px;\n  padding: 16px;\n  background: var(--surface-color);\n  border-radius: 8px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n}\n\n.section-title {\n  margin: 0 0 12px;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--text-color);\n}\n\n/* Info Rows */\n.info-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n\n.info-label {\n  font-weight: 500;\n  min-width: 80px;\n}\n\n/* Badges - color coding based on status level */\nfluent-badge {\n  --badge-fill-filled: var(--text-secondary);\n}\n\nfluent-badge.success {\n  --badge-fill-filled: var(--success-color);\n}\n\nfluent-badge.warning {\n  --badge-fill-filled: #ca5010;\n}\n\nfluent-badge.error {\n  --badge-fill-filled: var(--error-color);\n}\n\n/* Duration text color coding */\n#duration-text {\n  font-size: 13px;\n  line-height: 1.4;\n}\n\n#duration-text.success {\n  color: var(--success-color);\n}\n\n#duration-text.warning {\n  color: #ca5010;\n}\n\n#duration-text.error {\n  color: var(--error-color);\n}\n\n.button-row {\n  display: flex;\n  gap: 8px;\n  margin-top: 8px;\n}\n\n#duration-buttons {\n  margin-top: 12px;\n}\n\n/* Form Groups */\n.form-group {\n  margin-bottom: 16px;\n}\n\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 13px;\n}\n\n.form-group label strong {\n  color: var(--primary-color);\n  font-size: 14px;\n}\n\n.form-group .hint {\n  display: block;\n  font-size: 11px;\n  color: var(--text-secondary);\n  margin-top: 2px;\n}\n\n/* Fluent UI Overrides */\nfluent-text-field,\nfluent-text-area {\n  width: 100%;\n}\n\nfluent-text-field::part(root),\nfluent-text-area::part(root) {\n  border-radius: 4px;\n}\n\nfluent-text-area {\n  min-height: 80px;\n}\n\n/* Actions */\n.actions {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.actions fluent-button {\n  width: 100%;\n}\n\n/* Status Message */\n.status {\n  position: fixed;\n  bottom: 16px;\n  left: 16px;\n  right: 16px;\n  padding: 12px 16px;\n  border-radius: 4px;\n  font-size: 13px;\n  text-align: center;\n  z-index: 100;\n  animation: fadeIn 0.2s ease;\n}\n\n.status.success {\n  background: #dff6dd;\n  color: #107c10;\n}\n\n.status.error {\n  background: #fde7e9;\n  color: #d13438;\n}\n\n.status.info {\n  background: #f3f2f1;\n  color: var(--text-color);\n}\n\n/* Utilities */\n.hidden {\n  display: none !important;\n}\n\n/* Animations */\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n/* Field validation states */\nfluent-text-field.invalid::part(root),\nfluent-text-area.invalid::part(root) {\n  border-color: var(--error-color);\n}\n\nfluent-text-field.valid::part(root),\nfluent-text-area.valid::part(root) {\n  border-color: var(--success-color);\n}\n\n/* Readonly timing field */\n#timing-field::part(root) {\n  background-color: var(--background-color);\n  border-color: var(--border-color);\n}\n\n#timing-field::part(control) {\n  color: var(--text-secondary);\n  cursor: default;\n}\n\n/* Responsive adjustments */\n@media (max-width: 300px) {\n  #app {\n    padding: 12px;\n  }\n\n  .section {\n    padding: 12px;\n  }\n\n  .button-row {\n    flex-direction: column;\n  }\n}\n'],sourceRoot:""}]);const a=s}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;const r=function(){if("undefined"!=typeof globalThis)return globalThis;if(void 0!==n.g)return n.g;if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;try{return new Function("return this")()}catch(e){return{}}}();void 0===r.trustedTypes&&(r.trustedTypes={createPolicy:(e,t)=>t});const o={configurable:!1,enumerable:!1,writable:!1};void 0===r.FAST&&Reflect.defineProperty(r,"FAST",Object.assign({value:Object.create(null)},o));const i=r.FAST;if(void 0===i.getById){const e=Object.create(null);Reflect.defineProperty(i,"getById",Object.assign({value(t,n){let r=e[t];return void 0===r&&(r=n?e[t]=n():null),r}},o))}const s=Object.freeze([]);function a(){const e=new WeakMap;return function(t){let n=e.get(t);if(void 0===n){let r=Reflect.getPrototypeOf(t);for(;void 0===n&&null!==r;)n=e.get(r),r=Reflect.getPrototypeOf(r);n=void 0===n?[]:n.slice(0),e.set(t,n)}return n}}const l=r.FAST.getById(1,()=>{const e=[],t=[];function n(){if(t.length)throw t.shift()}function o(e){try{e.call()}catch(e){t.push(e),setTimeout(n,0)}}function i(){let t=0;for(;t<e.length;)if(o(e[t]),t++,t>1024){for(let n=0,r=e.length-t;n<r;n++)e[n]=e[n+t];e.length-=t,t=0}e.length=0}return Object.freeze({enqueue:function(t){e.length<1&&r.requestAnimationFrame(i),e.push(t)},process:i})}),c=r.trustedTypes.createPolicy("fast-html",{createHTML:e=>e});let u=c;const h=`fast-${Math.random().toString(36).substring(2,8)}`,d=`${h}{`,f=`}${h}`,p=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(e){if(u!==c)throw new Error("The HTML policy can only be set once.");u=e},createHTML:e=>u.createHTML(e),isMarker:e=>e&&8===e.nodeType&&e.data.startsWith(h),extractDirectiveIndexFromMarker:e=>parseInt(e.data.replace(`${h}:`,"")),createInterpolationPlaceholder:e=>`${d}${e}${f}`,createCustomAttributePlaceholder(e,t){return`${e}="${this.createInterpolationPlaceholder(t)}"`},createBlockPlaceholder:e=>`\x3c!--${h}:${e}--\x3e`,queueUpdate:l.enqueue,processUpdates:l.process,nextUpdate:()=>new Promise(l.enqueue),setAttribute(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n)},setBooleanAttribute(e,t,n){n?e.setAttribute(t,""):e.removeAttribute(t)},removeChildNodes(e){for(let t=e.firstChild;null!==t;t=e.firstChild)e.removeChild(t)},createTemplateWalker:e=>document.createTreeWalker(e,133,null,!1)});class g{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return void 0===this.spillover?this.sub1===e||this.sub2===e:-1!==this.spillover.indexOf(e)}subscribe(e){const t=this.spillover;if(void 0===t){if(this.has(e))return;if(void 0===this.sub1)return void(this.sub1=e);if(void 0===this.sub2)return void(this.sub2=e);this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else-1===t.indexOf(e)&&t.push(e)}unsubscribe(e){const t=this.spillover;if(void 0===t)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{const n=t.indexOf(e);-1!==n&&t.splice(n,1)}}notify(e){const t=this.spillover,n=this.source;if(void 0===t){const t=this.sub1,r=this.sub2;void 0!==t&&t.handleChange(n,e),void 0!==r&&r.handleChange(n,e)}else for(let r=0,o=t.length;r<o;++r)t[r].handleChange(n,e)}}class v{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const n=this.subscribers[e];void 0!==n&&n.notify(e),null===(t=this.sourceSubscribers)||void 0===t||t.notify(e)}subscribe(e,t){var n;if(t){let n=this.subscribers[t];void 0===n&&(this.subscribers[t]=n=new g(this.source)),n.subscribe(e)}else this.sourceSubscribers=null!==(n=this.sourceSubscribers)&&void 0!==n?n:new g(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var n;if(t){const n=this.subscribers[t];void 0!==n&&n.unsubscribe(e)}else null===(n=this.sourceSubscribers)||void 0===n||n.unsubscribe(e)}}const m=i.getById(2,()=>{const e=/(:|&&|\|\||if)/,t=new WeakMap,n=p.queueUpdate;let r,o=e=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function i(e){let n=e.$fastController||t.get(e);return void 0===n&&(Array.isArray(e)?n=o(e):t.set(e,n=new v(e))),n}const s=a();class l{constructor(e){this.name=e,this.field=`_${e}`,this.callback=`${e}Changed`}getValue(e){return void 0!==r&&r.watch(e,this.name),e[this.field]}setValue(e,t){const n=this.field,r=e[n];if(r!==t){e[n]=t;const o=e[this.callback];"function"==typeof o&&o.call(e,r,t),i(e).notify(this.name)}}}class c extends g{constructor(e,t,n=!1){super(e,t),this.binding=e,this.isVolatileBinding=n,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(e,t){this.needsRefresh&&null!==this.last&&this.disconnect();const n=r;r=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const o=this.binding(e,t);return r=n,o}disconnect(){if(null!==this.last){let e=this.first;for(;void 0!==e;)e.notifier.unsubscribe(this,e.propertyName),e=e.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(e,t){const n=this.last,o=i(e),s=null===n?this.first:{};if(s.propertySource=e,s.propertyName=t,s.notifier=o,o.subscribe(this,t),null!==n){if(!this.needsRefresh){let t;r=void 0,t=n.propertySource[n.propertyName],r=this,e===t&&(this.needsRefresh=!0)}n.next=s}this.last=s}handleChange(){this.needsQueue&&(this.needsQueue=!1,n(this))}call(){null!==this.last&&(this.needsQueue=!0,this.notify(this))}records(){let e=this.first;return{next:()=>{const t=e;return void 0===t?{value:void 0,done:!0}:(e=e.next,{value:t,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(e){o=e},getNotifier:i,track(e,t){void 0!==r&&r.watch(e,t)},trackVolatile(){void 0!==r&&(r.needsRefresh=!0)},notify(e,t){i(e).notify(t)},defineProperty(e,t){"string"==typeof t&&(t=new l(t)),s(e).push(t),Reflect.defineProperty(e,t.name,{enumerable:!0,get:function(){return t.getValue(this)},set:function(e){t.setValue(this,e)}})},getAccessors:s,binding(e,t,n=this.isVolatileBinding(e)){return new c(e,t,n)},isVolatileBinding:t=>e.test(t.toString())})});function b(e,t){m.defineProperty(e,t)}const y=i.getById(3,()=>{let e=null;return{get:()=>e,set(t){e=t}}});class w{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return y.get()}get isEven(){return this.index%2==0}get isOdd(){return this.index%2!=0}get isFirst(){return 0===this.index}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){y.set(e)}}m.defineProperty(w.prototype,"index"),m.defineProperty(w.prototype,"length");const A=Object.seal(new w);class x{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=null===this.behaviors?e:this.behaviors.concat(e),this}}function C(e){return e.map(e=>e instanceof x?C(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}function $(e){return e.map(e=>e instanceof x?e.behaviors:null).reduce((e,t)=>null===t?e:(null===e&&(e=[]),e.concat(t)),null)}x.create=(()=>{if(p.supportsAdoptedStyleSheets){const e=new Map;return t=>new B(t,e)}return e=>new D(e)})();const E=Symbol("prependToAdoptedStyleSheets");function k(e){const t=[],n=[];return e.forEach(e=>(e[E]?t:n).push(e)),{prepend:t,append:n}}let F=(e,t)=>{const{prepend:n,append:r}=k(t);e.adoptedStyleSheets=[...n,...e.adoptedStyleSheets,...r]},V=(e,t)=>{e.adoptedStyleSheets=e.adoptedStyleSheets.filter(e=>-1===t.indexOf(e))};if(p.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),F=(e,t)=>{const{prepend:n,append:r}=k(t);e.adoptedStyleSheets.splice(0,0,...n),e.adoptedStyleSheets.push(...r)},V=(e,t)=>{for(const n of t){const t=e.adoptedStyleSheets.indexOf(n);-1!==t&&e.adoptedStyleSheets.splice(t,1)}}}catch(e){}class B extends x{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=$(e)}get styleSheets(){if(void 0===this._styleSheets){const e=this.styles,t=this.styleSheetCache;this._styleSheets=C(e).map(e=>{if(e instanceof CSSStyleSheet)return e;let n=t.get(e);return void 0===n&&(n=new CSSStyleSheet,n.replaceSync(e),t.set(e,n)),n})}return this._styleSheets}addStylesTo(e){F(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){V(e,this.styleSheets),super.removeStylesFrom(e)}}let S=0;class D extends x{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=$(e),this.styleSheets=C(e),this.styleClass="fast-style-class-"+ ++S}addStylesTo(e){const t=this.styleSheets,n=this.styleClass;e=this.normalizeTarget(e);for(let r=0;r<t.length;r++){const o=document.createElement("style");o.innerHTML=t[r],o.className=n,e.append(o)}super.addStylesTo(e)}removeStylesFrom(e){const t=(e=this.normalizeTarget(e)).querySelectorAll(`.${this.styleClass}`);for(let n=0,r=t.length;n<r;++n)e.removeChild(t[n]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const T=Object.freeze({locate:a()}),O={toView:e=>e?"true":"false",fromView:e=>null!=e&&"false"!==e&&!1!==e&&0!==e},R={toView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t.toString()},fromView(e){if(null==e)return null;const t=1*e;return isNaN(t)?null:t}};class L{constructor(e,t,n=t.toLowerCase(),r="reflect",o){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=n,this.mode=r,this.converter=o,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,"boolean"===r&&void 0===o&&(this.converter=O)}setValue(e,t){const n=e[this.fieldName],r=this.converter;void 0!==r&&(t=r.fromView(t)),n!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](n,t),e.$fastController.notify(this.name))}getValue(e){return m.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,n=this.guards;n.has(e)||"fromView"===t||p.queueUpdate(()=>{n.add(e);const r=e[this.fieldName];switch(t){case"reflect":const t=this.converter;p.setAttribute(e,this.attribute,void 0!==t?t.toView(r):r);break;case"boolean":p.setBooleanAttribute(e,this.attribute,r)}n.delete(e)})}static collect(e,...t){const n=[];t.push(T.locate(e));for(let r=0,o=t.length;r<o;++r){const o=t[r];if(void 0!==o)for(let t=0,r=o.length;t<r;++t){const r=o[t];"string"==typeof r?n.push(new L(e,r)):n.push(new L(e,r.property,r.attribute,r.mode,r.converter))}}return n}}function P(e,t){let n;function r(e,t){arguments.length>1&&(n.property=t),T.locate(e.constructor).push(n)}return arguments.length>1?(n={},void r(e,t)):(n=void 0===e?{}:e,r)}const I={mode:"open"},N={},M=i.getById(4,()=>{const e=new Map;return Object.freeze({register:t=>!e.has(t.type)&&(e.set(t.type,t),!0),getByType:t=>e.get(t)})});class z{constructor(e,t=e.definition){"string"==typeof t&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const n=L.collect(e,t.attributes),r=new Array(n.length),o={},i={};for(let e=0,t=n.length;e<t;++e){const t=n[e];r[e]=t.attribute,o[t.name]=t,i[t.attribute]=t}this.attributes=n,this.observedAttributes=r,this.propertyLookup=o,this.attributeLookup=i,this.shadowOptions=void 0===t.shadowOptions?I:null===t.shadowOptions?void 0:Object.assign(Object.assign({},I),t.shadowOptions),this.elementOptions=void 0===t.elementOptions?N:Object.assign(Object.assign({},N),t.elementOptions),this.styles=void 0===t.styles?void 0:Array.isArray(t.styles)?x.create(t.styles):t.styles instanceof x?t.styles:x.create([t.styles])}get isDefined(){return!!M.getByType(this.type)}define(e=customElements){const t=this.type;if(M.register(this)){const e=this.attributes,n=t.prototype;for(let t=0,r=e.length;t<r;++t)m.defineProperty(n,e[t]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}function j(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}z.forType=M.getByType;const H=new WeakMap,q={bubbles:!0,composed:!0,cancelable:!0};function _(e){return e.shadowRoot||H.get(e)||null}class U extends v{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const n=t.shadowOptions;if(void 0!==n){const t=e.attachShadow(n);"closed"===n.mode&&H.set(e,t)}const r=m.getAccessors(e);if(r.length>0){const t=this.boundObservables=Object.create(null);for(let n=0,o=r.length;n<o;++n){const o=r[n].name,i=e[o];void 0!==i&&(delete e[o],t[o]=i)}}}get isConnected(){return m.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,m.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(null!==this._styles&&this.removeStyles(this._styles),this._styles=e,this.needsInitialization||null===e||this.addStyles(e))}addStyles(e){const t=_(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const n=e.behaviors;e.addStylesTo(t),null!==n&&this.addBehaviors(n)}}removeStyles(e){const t=_(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const n=e.behaviors;e.removeStylesFrom(t),null!==n&&this.removeBehaviors(n)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),n=e.length,r=[];for(let o=0;o<n;++o){const n=e[o];t.has(n)?t.set(n,t.get(n)+1):(t.set(n,1),r.push(n))}if(this._isConnected){const e=this.element;for(let t=0;t<r.length;++t)r[t].bind(e,A)}}removeBehaviors(e,t=!1){const n=this.behaviors;if(null===n)return;const r=e.length,o=[];for(let i=0;i<r;++i){const r=e[i];if(n.has(r)){const e=n.get(r)-1;0===e||t?n.delete(r)&&o.push(r):n.set(r,e)}}if(this._isConnected){const e=this.element;for(let t=0;t<o.length;++t)o[t].unbind(e)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():null!==this.view&&this.view.bind(e,A);const t=this.behaviors;if(null!==t)for(const[n]of t)n.bind(e,A);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;null!==e&&e.unbind();const t=this.behaviors;if(null!==t){const e=this.element;for(const[n]of t)n.unbind(e)}}onAttributeChangedCallback(e,t,n){const r=this.definition.attributeLookup[e];void 0!==r&&r.onAttributeChangedCallback(this.element,n)}emit(e,t,n){return!!this._isConnected&&this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},q),n)))}finishInitialization(){const e=this.element,t=this.boundObservables;if(null!==t){const n=Object.keys(t);for(let r=0,o=n.length;r<o;++r){const o=n[r];e[o]=t[o]}this.boundObservables=null}const n=this.definition;null===this._template&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():n.template&&(this._template=n.template||null)),null!==this._template&&this.renderTemplate(this._template),null===this._styles&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():n.styles&&(this._styles=n.styles||null)),null!==this._styles&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,n=_(t)||t;null!==this.view?(this.view.dispose(),this.view=null):this.needsInitialization||p.removeChildNodes(n),e&&(this.view=e.render(t,n,t))}static forCustomElement(e){const t=e.$fastController;if(void 0!==t)return t;const n=z.forType(e.constructor);if(void 0===n)throw new Error("Missing FASTElement definition.");return e.$fastController=new U(e,n)}}function W(e){return class extends e{constructor(){super(),U.forCustomElement(this)}$emit(e,t,n){return this.$fastController.emit(e,t,n)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,n){this.$fastController.onAttributeChangedCallback(e,t,n)}}}const G=Object.assign(W(HTMLElement),{from:e=>W(e),define:(e,t)=>new z(e,t).define().type}),Y=new Map;"metadata"in Reflect||(Reflect.metadata=function(e,t){return function(n){Reflect.defineMetadata(e,t,n)}},Reflect.defineMetadata=function(e,t,n){let r=Y.get(n);void 0===r&&Y.set(n,r=new Map),r.set(e,t)},Reflect.getOwnMetadata=function(e,t){const n=Y.get(t);if(void 0!==n)return n.get(e)});class Q{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,Ae(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:n,key:r}=this;return this.container=this.key=void 0,n.registerResolver(r,new le(r,e,t))}}function X(e){const t=e.slice(),n=Object.keys(e),r=n.length;let o;for(let i=0;i<r;++i)o=n[i],Be(o)||(t[o]=e[o]);return t}const K=Object.freeze({none(e){throw Error(`${e.toString()} not registered, did you forget to add @singleton()?`)},singleton:e=>new le(e,1,e),transient:e=>new le(e,2,e)}),Z=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:K.singleton})}),J=new Map;function ee(e){return t=>Reflect.getOwnMetadata(e,t)}let te=null;const ne=Object.freeze({createContainer:e=>new ye(null,Object.assign({},Z.default,e)),findResponsibleContainer(e){const t=e.$$container$$;return t&&t.responsibleForOwnerRequests?t:ne.findParentContainer(e)},findParentContainer(e){const t=new CustomEvent(me,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return e.dispatchEvent(t),t.detail.container||ne.getOrCreateDOMContainer()},getOrCreateDOMContainer:(e,t)=>e?e.$$container$$||new ye(e,Object.assign({},Z.default,t,{parentLocator:ne.findParentContainer})):te||(te=new ye(null,Object.assign({},Z.default,t,{parentLocator:()=>null}))),getDesignParamtypes:ee("design:paramtypes"),getAnnotationParamtypes:ee("di:paramtypes"),getOrCreateAnnotationParamTypes(e){let t=this.getAnnotationParamtypes(e);return void 0===t&&Reflect.defineMetadata("di:paramtypes",t=[],e),t},getDependencies(e){let t=J.get(e);if(void 0===t){const n=e.inject;if(void 0===n){const n=ne.getDesignParamtypes(e),r=ne.getAnnotationParamtypes(e);if(void 0===n)if(void 0===r){const n=Object.getPrototypeOf(e);t="function"==typeof n&&n!==Function.prototype?X(ne.getDependencies(n)):[]}else t=X(r);else if(void 0===r)t=X(n);else{t=X(n);let e,o=r.length;for(let n=0;n<o;++n)e=r[n],void 0!==e&&(t[n]=e);const i=Object.keys(r);let s;o=i.length;for(let e=0;e<o;++e)s=i[e],Be(s)||(t[s]=r[s])}}else t=X(n);J.set(e,t)}return t},defineProperty(e,t,n,r=!1){const o=`$di_${t}`;Reflect.defineProperty(e,t,{get:function(){let e=this[o];if(void 0===e){const i=this instanceof HTMLElement?ne.findResponsibleContainer(this):ne.getOrCreateDOMContainer();if(e=i.get(n),this[o]=e,r&&this instanceof G){const r=this.$fastController,i=()=>{ne.findResponsibleContainer(this).get(n)!==this[o]&&(this[o]=e,r.notify(t))};r.subscribe({handleChange:i},"isConnected")}}return e}})},createInterface(e,t){const n="function"==typeof e?e:t,r="string"==typeof e?e:e&&"friendlyName"in e&&e.friendlyName||Ee,o="string"!=typeof e&&(e&&"respectConnection"in e&&e.respectConnection||!1),i=function(e,t,n){if(null==e||void 0!==new.target)throw new Error(`No registration for interface: '${i.friendlyName}'`);t?ne.defineProperty(e,t,i,o):ne.getOrCreateAnnotationParamTypes(e)[n]=i};return i.$isInterface=!0,i.friendlyName=null==r?"(anonymous)":r,null!=n&&(i.register=function(e,t){return n(new Q(e,null!=t?t:i))}),i.toString=function(){return`InterfaceSymbol<${i.friendlyName}>`},i},inject:(...e)=>function(t,n,r){if("number"==typeof r){const n=ne.getOrCreateAnnotationParamTypes(t),o=e[0];void 0!==o&&(n[r]=o)}else if(n)ne.defineProperty(t,n,e[0]);else{const n=r?ne.getOrCreateAnnotationParamTypes(r.value):ne.getOrCreateAnnotationParamTypes(t);let o;for(let t=0;t<e.length;++t)o=e[t],void 0!==o&&(n[t]=o)}},transient:e=>(e.register=function(t){return xe.transient(e,e).register(t)},e.registerInRequestor=!1,e),singleton:(e,t=ie)=>(e.register=function(t){return xe.singleton(e,e).register(t)},e.registerInRequestor=t.scoped,e)}),re=ne.createInterface("Container");function oe(e){return function(t){const n=function(e,t,r){ne.inject(n)(e,t,r)};return n.$isResolver=!0,n.resolve=function(n,r){return e(t,n,r)},n}}ne.inject;const ie={scoped:!1};function se(e,t,n){ne.inject(se)(e,t,n)}function ae(e,t){return t.getFactory(e).construct(t)}oe((e,t,n)=>()=>n.get(e)),oe((e,t,n)=>n.has(e,!0)?n.get(e):void 0),se.$isResolver=!0,se.resolve=()=>{},oe((e,t,n)=>{const r=ae(e,t),o=new le(e,0,r);return n.registerResolver(e,o),r}),oe((e,t,n)=>ae(e,t));class le{constructor(e,t,n){this.key=e,this.strategy=t,this.state=n,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state;case 2:{const n=e.getFactory(this.state);if(null===n)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return n.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,n,r;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return null!==(r=null===(n=null===(t=e.getResolver(this.state))||void 0===t?void 0:t.getFactory)||void 0===n?void 0:n.call(t,e))&&void 0!==r?r:null;default:return null}}}function ce(e){return this.get(e)}function ue(e,t){return t(e)}class he{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let n;return n=void 0===t?new this.Type(...this.dependencies.map(ce,e)):new this.Type(...this.dependencies.map(ce,e),...t),null==this.transformers?n:this.transformers.reduce(ue,n)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const de={$isResolver:!0,resolve:(e,t)=>t};function fe(e){return"function"==typeof e.register}function pe(e){return function(e){return fe(e)&&"boolean"==typeof e.registerInRequestor}(e)&&e.registerInRequestor}function ge(e){return void 0!==e.prototype}const ve=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),me="__DI_LOCATE_PARENT__",be=new Map;class ye{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,null!==e&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(re,de),e instanceof Node&&e.addEventListener(me,e=>{e.composedPath()[0]!==this.owner&&(e.detail.container=this,e.stopImmediatePropagation())})}get parent(){return void 0===this._parent&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return null===this.parent?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(100===++this.registerDepth)throw new Error("Unable to autoregister dependency");let t,n,r,o,i;const s=this.context;for(let a=0,l=e.length;a<l;++a)if(t=e[a],ke(t))if(fe(t))t.register(this,s);else if(ge(t))xe.singleton(t,t).register(this);else for(n=Object.keys(t),o=0,i=n.length;o<i;++o)r=t[n[o]],ke(r)&&(fe(r)?r.register(this,s):this.register(r));return--this.registerDepth,this}registerResolver(e,t){Ce(e);const n=this.resolvers,r=n.get(e);return null==r?n.set(e,t):r instanceof le&&4===r.strategy?r.state.push(t):n.set(e,new le(e,4,[r,t])),t}registerTransformer(e,t){const n=this.getResolver(e);if(null==n)return!1;if(n.getFactory){const e=n.getFactory(this);return null!=e&&(e.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(Ce(e),void 0!==e.resolve)return e;let n,r=this;for(;null!=r;){if(n=r.resolvers.get(e),null!=n)return n;if(null==r.parent){const n=pe(e)?this:r;return t?this.jitRegister(e,n):null}r=r.parent}return null}has(e,t=!1){return!!this.resolvers.has(e)||!(!t||null==this.parent)&&this.parent.has(e,!0)}get(e){if(Ce(e),e.$isResolver)return e.resolve(this,this);let t,n=this;for(;null!=n;){if(t=n.resolvers.get(e),null!=t)return t.resolve(n,this);if(null==n.parent){const r=pe(e)?this:n;return t=this.jitRegister(e,r),t.resolve(n,this)}n=n.parent}throw new Error(`Unable to resolve key: ${String(e)}`)}getAll(e,t=!1){Ce(e);const n=this;let r,o=n;if(t){let t=s;for(;null!=o;)r=o.resolvers.get(e),null!=r&&(t=t.concat($e(r,o,n))),o=o.parent;return t}for(;null!=o;){if(r=o.resolvers.get(e),null!=r)return $e(r,o,n);if(o=o.parent,null==o)return s}return s}getFactory(e){let t=be.get(e);if(void 0===t){if(Fe(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);be.set(e,t=new he(e,ne.getDependencies(e)))}return t}registerFactory(e,t){be.set(e,t)}createChild(e){return new ye(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if("function"!=typeof e)throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(ve.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(fe(e)){const n=e.register(t);if(!(n instanceof Object)||null==n.resolve){const n=t.resolvers.get(e);if(null!=n)return n;throw new Error("A valid resolver was not returned from the static register method")}return n}if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const n=this.config.defaultResolver(e,t);return t.resolvers.set(e,n),n}}}const we=new WeakMap;function Ae(e){return function(t,n,r){if(we.has(r))return we.get(r);const o=e(t,n,r);return we.set(r,o),o}}const xe=Object.freeze({instance:(e,t)=>new le(e,0,t),singleton:(e,t)=>new le(e,1,t),transient:(e,t)=>new le(e,2,t),callback:(e,t)=>new le(e,3,t),cachedCallback:(e,t)=>new le(e,3,Ae(t)),aliasTo:(e,t)=>new le(t,5,e)});function Ce(e){if(null==e)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function $e(e,t,n){if(e instanceof le&&4===e.strategy){const r=e.state;let o=r.length;const i=new Array(o);for(;o--;)i[o]=r[o].resolve(t,n);return i}return[e.resolve(t,n)]}const Ee="(anonymous)";function ke(e){return"object"==typeof e&&null!==e||"function"==typeof e}const Fe=function(){const e=new WeakMap;let t=!1,n="",r=0;return function(o){return t=e.get(o),void 0===t&&(n=o.toString(),r=n.length,t=r>=29&&r<=100&&125===n.charCodeAt(r-1)&&n.charCodeAt(r-2)<=32&&93===n.charCodeAt(r-3)&&101===n.charCodeAt(r-4)&&100===n.charCodeAt(r-5)&&111===n.charCodeAt(r-6)&&99===n.charCodeAt(r-7)&&32===n.charCodeAt(r-8)&&101===n.charCodeAt(r-9)&&118===n.charCodeAt(r-10)&&105===n.charCodeAt(r-11)&&116===n.charCodeAt(r-12)&&97===n.charCodeAt(r-13)&&110===n.charCodeAt(r-14)&&88===n.charCodeAt(r-15),e.set(o,t)),t}}(),Ve={};function Be(e){switch(typeof e){case"number":return e>=0&&(0|e)===e;case"string":{const t=Ve[e];if(void 0!==t)return t;const n=e.length;if(0===n)return Ve[e]=!1;let r=0;for(let t=0;t<n;++t)if(r=e.charCodeAt(t),0===t&&48===r&&n>1||r<48||r>57)return Ve[e]=!1;return Ve[e]=!0}default:return!1}}function Se(e){return`${e.toLowerCase()}:presentation`}const De=new Map,Te=Object.freeze({define(e,t,n){const r=Se(e);void 0===De.get(r)?De.set(r,t):De.set(r,!1),n.register(xe.instance(r,t))},forTag(e,t){const n=Se(e),r=De.get(n);return!1===r?ne.findResponsibleContainer(t).get(n):r||null}});class Oe{constructor(e,t){this.template=e||null,this.styles=void 0===t?null:Array.isArray(t)?x.create(t):t instanceof x?t:x.create([t])}applyTo(e){const t=e.$fastController;null===t.template&&(t.template=this.template),null===t.styles&&(t.styles=this.styles)}}class Re extends G{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return void 0===this._presentation&&(this._presentation=Te.forTag(this.tagName,this)),this._presentation}templateChanged(){void 0!==this.template&&(this.$fastController.template=this.template)}stylesChanged(){void 0!==this.styles&&(this.$fastController.styles=this.styles)}connectedCallback(){null!==this.$presentation&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new Pe(this===Re?class extends Re{}:this,e,t)}}function Le(e,t,n){return"function"==typeof e?e(t,n):e}j([b],Re.prototype,"template",void 0),j([b],Re.prototype,"styles",void 0);class Pe{constructor(e,t,n){this.type=e,this.elementDefinition=t,this.overrideDefinition=n,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const n=this.definition,r=this.overrideDefinition,o=`${n.prefix||t.elementPrefix}-${n.baseName}`;t.tryDefineElement({name:o,type:this.type,baseClass:this.elementDefinition.baseClass,callback:e=>{const t=new Oe(Le(n.template,e,n),Le(n.styles,e,n));e.definePresentation(t);let o=Le(n.shadowOptions,e,n);e.shadowRootMode&&(o?r.shadowOptions||(o.mode=e.shadowRootMode):null!==o&&(o={mode:e.shadowRootMode})),e.defineElement({elementOptions:Le(n.elementOptions,e,n),shadowOptions:o,attributes:Le(n.attributes,e,n)})}})}}class Ie{createCSS(){return""}createBehavior(){}}function Ne(e){const t=e.parentElement;if(t)return t;{const t=e.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}const Me=document.createElement("div");class ze{setProperty(e,t){p.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){p.queueUpdate(()=>this.target.removeProperty(e))}}class je extends ze{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class He extends ze{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class qe{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),m.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(null!==this.target)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),p.queueUpdate(()=>{null!==this.target&&this.target.setProperty(e,t)})}removeProperty(e){this.store.delete(e),p.queueUpdate(()=>{null!==this.target&&this.target.removeProperty(e)})}handleChange(e,t){const{sheet:n}=this.style;if(n){const e=n.insertRule(":host{}",n.cssRules.length);this.target=n.cssRules[e].style}else this.target=null}}j([b],qe.prototype,"target",void 0);class _e{constructor(e){this.target=e.style}setProperty(e,t){p.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){p.queueUpdate(()=>this.target.removeProperty(e))}}class Ue{setProperty(e,t){Ue.properties[e]=t;for(const n of Ue.roots.values())Ye.getOrCreate(Ue.normalizeRoot(n)).setProperty(e,t)}removeProperty(e){delete Ue.properties[e];for(const t of Ue.roots.values())Ye.getOrCreate(Ue.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=Ue;if(!t.has(e)){t.add(e);const n=Ye.getOrCreate(this.normalizeRoot(e));for(const e in Ue.properties)n.setProperty(e,Ue.properties[e])}}static unregisterRoot(e){const{roots:t}=Ue;if(t.has(e)){t.delete(e);const n=Ye.getOrCreate(Ue.normalizeRoot(e));for(const e in Ue.properties)n.removeProperty(e)}}static normalizeRoot(e){return e===Me?document:e}}Ue.roots=new Set,Ue.properties={};const We=new WeakMap,Ge=p.supportsAdoptedStyleSheets?class extends ze{constructor(e){super();const t=new CSSStyleSheet;t[E]=!0,this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(x.create([t]))}}:qe,Ye=Object.freeze({getOrCreate(e){if(We.has(e))return We.get(e);let t;return t=e===Me?new Ue:e instanceof Document?p.supportsAdoptedStyleSheets?new je:new He:e instanceof G?new Ge(e):new _e(e),We.set(e,t),t}});class Qe extends Ie{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,null!==e.cssCustomPropertyName&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=Qe.uniqueId(),Qe.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new Qe({name:"string"==typeof e?e:e.name,cssCustomPropertyName:"string"==typeof e?e:void 0===e.cssCustomPropertyName?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return"string"==typeof e.cssCustomProperty}static isDerivedDesignTokenValue(e){return"function"==typeof e}static getTokenById(e){return Qe.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=et.getOrCreate(e).get(this);if(void 0!==t)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof Qe&&(t=this.alias(t)),et.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),et.existsFor(e)&&et.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(Me,e),this}subscribe(e,t){const n=this.getOrCreateSubscriberSet(t);t&&!et.existsFor(t)&&et.getOrCreate(t),n.has(e)||n.add(e)}unsubscribe(e,t){const n=this.subscribers.get(t||this);n&&n.has(e)&&n.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(e=>e.handleChange(t)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(e=>e.handleChange(t))}alias(e){return t=>e.getValueFor(t)}}Qe.uniqueId=(()=>{let e=0;return()=>(e++,e.toString(16))})(),Qe.tokensById=new Map;class Xe{constructor(e,t,n){this.source=e,this.token=t,this.node=n,this.dependencies=new Set,this.observer=m.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){try{this.node.store.set(this.token,this.observer.observe(this.node.target,A))}catch(e){console.error(e)}}}class Ke{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),m.getNotifier(this).notify(e.id))}get(e){return m.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e),m.getNotifier(this).notify(e.id)}all(){return this.values.entries()}}const Ze=new WeakMap,Je=new WeakMap;class et{constructor(e){this.target=e,this.store=new Ke,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(e,t)=>{const n=Qe.getTokenById(t);n&&(n.notify(this.target),this.updateCSSTokenReflection(e,n))}},Ze.set(e,this),m.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof G?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return Ze.get(e)||new et(e)}static existsFor(e){return Ze.has(e)}static findParent(e){if(Me!==e.target){let t=Ne(e.target);for(;null!==t;){if(Ze.has(t))return Ze.get(t);t=Ne(t)}return et.getOrCreate(Me)}return null}static findClosestAssignedNode(e,t){let n=t;do{if(n.has(e))return n;n=n.parent?n.parent:n.target!==Me?et.getOrCreate(Me):null}while(null!==n);return null}get parent(){return Je.get(this)||null}updateCSSTokenReflection(e,t){if(Qe.isCSSDesignToken(t)){const n=this.parent,r=this.isReflecting(t);if(n){const o=n.get(t),i=e.get(t);o===i||r?o===i&&r&&this.stopReflectToCSS(t):this.reflectToCSS(t)}else r||this.reflectToCSS(t)}}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(void 0!==t)return t;const n=this.getRaw(e);return void 0!==n?(this.hydrate(e,n),this.get(e)):void 0}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):null===(t=et.findClosestAssignedNode(e,this))||void 0===t?void 0:t.getRaw(e)}set(e,t){Qe.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),Qe.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=et.findParent(this);e&&e.appendChild(this);for(const e of this.assignedValues.keys())e.notify(this.target)}unbind(){this.parent&&Je.get(this).removeChild(this);for(const e of this.bindingObservers.keys())this.tearDownBindingObserver(e)}appendChild(e){e.parent&&Je.get(e).removeChild(e);const t=this.children.filter(t=>e.contains(t));Je.set(e,this),this.children.push(e),t.forEach(t=>e.appendChild(t)),m.getNotifier(this.store).subscribe(e);for(const[t,n]of this.store.all())e.hydrate(t,this.bindingObservers.has(t)?this.getRaw(t):n),e.updateCSSTokenReflection(e.store,t)}removeChild(e){const t=this.children.indexOf(e);if(-1!==t&&this.children.splice(t,1),m.getNotifier(this.store).unsubscribe(e),e.parent!==this)return!1;const n=Je.delete(e);for(const[t]of this.store.all())e.hydrate(t,e.getRaw(t)),e.updateCSSTokenReflection(e.store,t);return n}contains(e){return function(e,t){let n=t;for(;null!==n;){if(n===e)return!0;n=Ne(n)}return!1}(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),et.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),et.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const n=Qe.getTokenById(t);n&&(this.hydrate(n,this.getRaw(n)),this.updateCSSTokenReflection(this.store,n))}hydrate(e,t){if(!this.has(e)){const n=this.bindingObservers.get(e);Qe.isDerivedDesignTokenValue(t)?n?n.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(n&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const n=new Xe(t,e,this);return this.bindingObservers.set(e,n),n}tearDownBindingObserver(e){return!!this.bindingObservers.has(e)&&(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0)}}et.cssCustomPropertyReflector=new class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:n}=e;this.add(t,n)}add(e,t){Ye.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(et.getOrCreate(t).get(e)))}remove(e,t){Ye.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&"function"==typeof e.createCSS?e.createCSS():e}},j([b],et.prototype,"children",void 0);const tt=Object.freeze({create:function(e){return Qe.from(e)},notifyConnection:e=>!(!e.isConnected||!et.existsFor(e)||(et.getOrCreate(e).bind(),0)),notifyDisconnection:e=>!(e.isConnected||!et.existsFor(e)||(et.getOrCreate(e).unbind(),0)),registerRoot(e=Me){Ue.registerRoot(e)},unregisterRoot(e=Me){Ue.unregisterRoot(e)}}),nt=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),rt=new Map,ot=new Map;let it=null;const st=ne.createInterface(e=>e.cachedCallback(e=>(null===it&&(it=new lt(null,e)),it))),at=Object.freeze({tagFor:e=>ot.get(e),responsibleFor(e){const t=e.$$designSystem$$;return t||ne.findResponsibleContainer(e).get(st)},getOrCreate(e){if(!e)return null===it&&(it=ne.getOrCreateDOMContainer().get(st)),it;const t=e.$$designSystem$$;if(t)return t;const n=ne.getOrCreateDOMContainer(e);if(n.has(st,!1))return n.get(st);{const t=new lt(e,n);return n.register(xe.instance(st,t)),t}}});class lt{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>nt.definitionCallbackOnly,null!==e&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,n=[],r=this.disambiguate,o=this.shadowRootMode,i={elementPrefix:this.prefix,tryDefineElement(e,i,s){const a=function(e,t,n){return"string"==typeof e?{name:e,type:t,callback:n}:e}(e,i,s),{name:l,callback:c,baseClass:u}=a;let{type:h}=a,d=l,f=rt.get(d),p=!0;for(;f;){const e=r(d,h,f);switch(e){case nt.ignoreDuplicate:return;case nt.definitionCallbackOnly:p=!1,f=void 0;break;default:d=e,f=rt.get(d)}}p&&((ot.has(h)||h===Re)&&(h=class extends h{}),rt.set(d,h),ot.set(h,d),u&&ot.set(u,d)),n.push(new ct(t,d,h,o,c,p))}};this.designTokensInitialized||(this.designTokensInitialized=!0,null!==this.designTokenRoot&&tt.registerRoot(this.designTokenRoot)),t.registerWithContext(i,...e);for(const e of n)e.callback(e),e.willDefine&&null!==e.definition&&e.definition.define();return this}}class ct{constructor(e,t,n,r,o,i){this.container=e,this.name=t,this.type=n,this.shadowRootMode=r,this.callback=o,this.willDefine=i,this.definition=null}definePresentation(e){Te.define(this.name,e,this.container)}defineElement(e){this.definition=new z(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return at.tagFor(e)}}function ut(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError;class ht{}j([P({attribute:"aria-atomic"})],ht.prototype,"ariaAtomic",void 0),j([P({attribute:"aria-busy"})],ht.prototype,"ariaBusy",void 0),j([P({attribute:"aria-controls"})],ht.prototype,"ariaControls",void 0),j([P({attribute:"aria-current"})],ht.prototype,"ariaCurrent",void 0),j([P({attribute:"aria-describedby"})],ht.prototype,"ariaDescribedby",void 0),j([P({attribute:"aria-details"})],ht.prototype,"ariaDetails",void 0),j([P({attribute:"aria-disabled"})],ht.prototype,"ariaDisabled",void 0),j([P({attribute:"aria-errormessage"})],ht.prototype,"ariaErrormessage",void 0),j([P({attribute:"aria-flowto"})],ht.prototype,"ariaFlowto",void 0),j([P({attribute:"aria-haspopup"})],ht.prototype,"ariaHaspopup",void 0),j([P({attribute:"aria-hidden"})],ht.prototype,"ariaHidden",void 0),j([P({attribute:"aria-invalid"})],ht.prototype,"ariaInvalid",void 0),j([P({attribute:"aria-keyshortcuts"})],ht.prototype,"ariaKeyshortcuts",void 0),j([P({attribute:"aria-label"})],ht.prototype,"ariaLabel",void 0),j([P({attribute:"aria-labelledby"})],ht.prototype,"ariaLabelledby",void 0),j([P({attribute:"aria-live"})],ht.prototype,"ariaLive",void 0),j([P({attribute:"aria-owns"})],ht.prototype,"ariaOwns",void 0),j([P({attribute:"aria-relevant"})],ht.prototype,"ariaRelevant",void 0),j([P({attribute:"aria-roledescription"})],ht.prototype,"ariaRoledescription",void 0);class dt{constructor(){this.targetIndex=0}}class ft extends dt{constructor(){super(...arguments),this.createPlaceholder=p.createInterpolationPlaceholder}}class pt extends dt{constructor(e,t,n){super(),this.name=e,this.behavior=t,this.options=n}createPlaceholder(e){return p.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function gt(e,t){this.source=e,this.context=t,null===this.bindingObserver&&(this.bindingObserver=m.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(e,t))}function vt(e,t){this.source=e,this.context=t,this.target.addEventListener(this.targetName,this)}function mt(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function bt(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const e=this.target.$fastView;void 0!==e&&e.isComposed&&(e.unbind(),e.needsBindOnly=!0)}function yt(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function wt(e){p.setAttribute(this.target,this.targetName,e)}function At(e){p.setBooleanAttribute(this.target,this.targetName,e)}function xt(e){if(null==e&&(e=""),e.create){this.target.textContent="";let t=this.target.$fastView;void 0===t?t=e.create():this.target.$fastTemplate!==e&&(t.isComposed&&(t.remove(),t.unbind()),t=e.create()),t.isComposed?t.needsBindOnly&&(t.needsBindOnly=!1,t.bind(this.source,this.context)):(t.isComposed=!0,t.bind(this.source,this.context),t.insertBefore(this.target),this.target.$fastView=t,this.target.$fastTemplate=e)}else{const t=this.target.$fastView;void 0!==t&&t.isComposed&&(t.isComposed=!1,t.remove(),t.needsBindOnly?t.needsBindOnly=!1:t.unbind()),this.target.textContent=e}}function Ct(e){this.target[this.targetName]=e}function $t(e){const t=this.classVersions||Object.create(null),n=this.target;let r=this.version||0;if(null!=e&&e.length){const o=e.split(/\s+/);for(let e=0,i=o.length;e<i;++e){const i=o[e];""!==i&&(t[i]=r,n.classList.add(i))}}if(this.classVersions=t,this.version=r+1,0!==r){r-=1;for(const e in t)t[e]===r&&n.classList.remove(e)}}class Et extends ft{constructor(e){super(),this.binding=e,this.bind=gt,this.unbind=mt,this.updateTarget=wt,this.isBindingVolatile=m.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,void 0!==e)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=Ct,"innerHTML"===this.cleanedTargetName){const e=this.binding;this.binding=(t,n)=>p.createHTML(e(t,n))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=At;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=vt,this.unbind=yt;break;default:this.cleanedTargetName=e,"class"===e&&(this.updateTarget=$t)}}targetAtContent(){this.updateTarget=xt,this.unbind=bt}createBehavior(e){return new kt(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class kt{constructor(e,t,n,r,o,i,s){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=n,this.bind=r,this.unbind=o,this.updateTarget=i,this.targetName=s}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){w.setEvent(e);const t=this.binding(this.source,this.context);w.setEvent(null),!0!==t&&e.preventDefault()}}let Ft=null;class Vt{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Ft=this}static borrow(e){const t=Ft||new Vt;return t.directives=e,t.reset(),Ft=null,t}}function Bt(e){if(1===e.length)return e[0];let t;const n=e.length,r=e.map(e=>"string"==typeof e?()=>e:(t=e.targetName||t,e.binding)),o=new Et((e,t)=>{let o="";for(let i=0;i<n;++i)o+=r[i](e,t);return o});return o.targetName=t,o}const St=f.length;function Dt(e,t){const n=t.split(d);if(1===n.length)return null;const r=[];for(let t=0,o=n.length;t<o;++t){const o=n[t],i=o.indexOf(f);let s;if(-1===i)s=o;else{const t=parseInt(o.substring(0,i));r.push(e.directives[t]),s=o.substring(i+St)}""!==s&&r.push(s)}return r}function Tt(e,t,n=!1){const r=t.attributes;for(let o=0,i=r.length;o<i;++o){const s=r[o],a=s.value,l=Dt(e,a);let c=null;null===l?n&&(c=new Et(()=>a),c.targetName=s.name):c=Bt(l),null!==c&&(t.removeAttributeNode(s),o--,i--,e.addFactory(c))}}function Ot(e,t,n){const r=Dt(e,t.textContent);if(null!==r){let o=t;for(let i=0,s=r.length;i<s;++i){const s=r[i],a=0===i?t:o.parentNode.insertBefore(document.createTextNode(""),o.nextSibling);"string"==typeof s?a.textContent=s:(a.textContent=" ",e.captureContentBinding(s)),o=a,e.targetIndex++,a!==t&&n.nextNode()}e.targetIndex--}}const Rt=document.createRange();class Lt{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=this.lastChild;if(e.previousSibling===t)return;const n=e.parentNode;let r,o=this.firstChild;for(;o!==t;)r=o.nextSibling,n.insertBefore(o,e),o=r;n.insertBefore(t,e)}}remove(){const e=this.fragment,t=this.lastChild;let n,r=this.firstChild;for(;r!==t;)n=r.nextSibling,e.appendChild(r),r=n;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let n,r=this.firstChild;for(;r!==t;)n=r.nextSibling,e.removeChild(r),r=n;e.removeChild(t);const o=this.behaviors,i=this.source;for(let e=0,t=o.length;e<t;++e)o[e].unbind(i)}bind(e,t){const n=this.behaviors;if(this.source!==e)if(null!==this.source){const r=this.source;this.source=e,this.context=t;for(let o=0,i=n.length;o<i;++o){const i=n[o];i.unbind(r),i.bind(e,t)}}else{this.source=e,this.context=t;for(let r=0,o=n.length;r<o;++r)n[r].bind(e,t)}}unbind(){if(null===this.source)return;const e=this.behaviors,t=this.source;for(let n=0,r=e.length;n<r;++n)e[n].unbind(t);this.source=null}static disposeContiguousBatch(e){if(0!==e.length){Rt.setStartBefore(e[0].firstChild),Rt.setEndAfter(e[e.length-1].lastChild),Rt.deleteContents();for(let t=0,n=e.length;t<n;++t){const n=e[t],r=n.behaviors,o=n.source;for(let e=0,t=r.length;e<t;++e)r[e].unbind(o)}}}}class Pt{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(null===this.fragment){let e;const t=this.html;if("string"==typeof t){e=document.createElement("template"),e.innerHTML=p.createHTML(t);const n=e.content.firstElementChild;null!==n&&"TEMPLATE"===n.tagName&&(e=n)}else e=t;const n=function(e,t){const n=e.content;document.adoptNode(n);const r=Vt.borrow(t);Tt(r,e,!0);const o=r.behaviorFactories;r.reset();const i=p.createTemplateWalker(n);let s;for(;s=i.nextNode();)switch(r.targetIndex++,s.nodeType){case 1:Tt(r,s);break;case 3:Ot(r,s,i);break;case 8:p.isMarker(s)&&r.addFactory(t[p.extractDirectiveIndexFromMarker(s)])}let a=0;(p.isMarker(n.firstChild)||1===n.childNodes.length&&t.length)&&(n.insertBefore(document.createComment(""),n.firstChild),a=-1);const l=r.behaviorFactories;return r.release(),{fragment:n,viewBehaviorFactories:l,hostBehaviorFactories:o,targetOffset:a}}(e,this.directives);this.fragment=n.fragment,this.viewBehaviorFactories=n.viewBehaviorFactories,this.hostBehaviorFactories=n.hostBehaviorFactories,this.targetOffset=n.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),n=this.viewBehaviorFactories,r=new Array(this.behaviorCount),o=p.createTemplateWalker(t);let i=0,s=this.targetOffset,a=o.nextNode();for(let e=n.length;i<e;++i){const e=n[i],t=e.targetIndex;for(;null!==a;){if(s===t){r[i]=e.createBehavior(a);break}a=o.nextNode(),s++}}if(this.hasHostBehaviors){const t=this.hostBehaviorFactories;for(let n=0,o=t.length;n<o;++n,++i)r[i]=t[n].createBehavior(e)}return new Lt(t,r)}render(e,t,n){"string"==typeof t&&(t=document.getElementById(t)),void 0===n&&(n=t);const r=this.create(n);return r.bind(e,A),r.appendTo(t),r}}const It=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Nt(e,...t){const n=[];let r="";for(let o=0,i=e.length-1;o<i;++o){const i=e[o];let s=t[o];if(r+=i,s instanceof Pt){const e=s;s=()=>e}if("function"==typeof s&&(s=new Et(s)),s instanceof ft){const e=It.exec(i);null!==e&&(s.targetName=e[2])}s instanceof dt?(r+=s.createPlaceholder(n.length),n.push(s)):r+=s}return r+=e[e.length-1],new Pt(r,n)}class Mt{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function zt(e){return new pt("fast-ref",Mt,e)}class jt{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const Ht=(e,t)=>Nt`
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
`;function _t(e,...t){const n=T.locate(e);t.forEach(t=>{Object.getOwnPropertyNames(t.prototype).forEach(n=>{"constructor"!==n&&Object.defineProperty(e.prototype,n,Object.getOwnPropertyDescriptor(t.prototype,n))}),T.locate(t).forEach(e=>n.push(e))})}var Ut;Nt`
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
`,function(e){e[e.alt=18]="alt",e[e.arrowDown=40]="arrowDown",e[e.arrowLeft=37]="arrowLeft",e[e.arrowRight=39]="arrowRight",e[e.arrowUp=38]="arrowUp",e[e.back=8]="back",e[e.backSlash=220]="backSlash",e[e.break=19]="break",e[e.capsLock=20]="capsLock",e[e.closeBracket=221]="closeBracket",e[e.colon=186]="colon",e[e.colon2=59]="colon2",e[e.comma=188]="comma",e[e.ctrl=17]="ctrl",e[e.delete=46]="delete",e[e.end=35]="end",e[e.enter=13]="enter",e[e.equals=187]="equals",e[e.equals2=61]="equals2",e[e.equals3=107]="equals3",e[e.escape=27]="escape",e[e.forwardSlash=191]="forwardSlash",e[e.function1=112]="function1",e[e.function10=121]="function10",e[e.function11=122]="function11",e[e.function12=123]="function12",e[e.function2=113]="function2",e[e.function3=114]="function3",e[e.function4=115]="function4",e[e.function5=116]="function5",e[e.function6=117]="function6",e[e.function7=118]="function7",e[e.function8=119]="function8",e[e.function9=120]="function9",e[e.home=36]="home",e[e.insert=45]="insert",e[e.menu=93]="menu",e[e.minus=189]="minus",e[e.minus2=109]="minus2",e[e.numLock=144]="numLock",e[e.numPad0=96]="numPad0",e[e.numPad1=97]="numPad1",e[e.numPad2=98]="numPad2",e[e.numPad3=99]="numPad3",e[e.numPad4=100]="numPad4",e[e.numPad5=101]="numPad5",e[e.numPad6=102]="numPad6",e[e.numPad7=103]="numPad7",e[e.numPad8=104]="numPad8",e[e.numPad9=105]="numPad9",e[e.numPadDivide=111]="numPadDivide",e[e.numPadDot=110]="numPadDot",e[e.numPadMinus=109]="numPadMinus",e[e.numPadMultiply=106]="numPadMultiply",e[e.numPadPlus=107]="numPadPlus",e[e.openBracket=219]="openBracket",e[e.pageDown=34]="pageDown",e[e.pageUp=33]="pageUp",e[e.period=190]="period",e[e.print=44]="print",e[e.quote=222]="quote",e[e.scrollLock=145]="scrollLock",e[e.shift=16]="shift",e[e.space=32]="space",e[e.tab=9]="tab",e[e.tilde=192]="tilde",e[e.windowsLeft=91]="windowsLeft",e[e.windowsOpera=219]="windowsOpera",e[e.windowsRight=92]="windowsRight"}(Ut||(Ut={}));const Wt="form-associated-proxy",Gt="ElementInternals",Yt=Gt in window&&"setFormValue"in window[Gt].prototype,Qt=new WeakMap;function Xt(e){const t=class extends e{constructor(...e){super(...e),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Yt}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const e=this.proxy.labels,t=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),n=e?t.concat(Array.from(e)):t;return Object.freeze(n)}return s}valueChanged(e,t){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),p.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(e,t){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),p.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Yt)return null;let e=Qt.get(this);return e||(e=this.attachInternals(),Qt.set(this,e)),e}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach(e=>this.proxy.removeEventListener(e,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(e,t,n){this.elementInternals?this.elementInternals.setValidity(e,t,n):"string"==typeof t&&this.proxy.setCustomValidity(t)}formDisabledCallback(e){this.disabled=e}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var e;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(e=>this.proxy.addEventListener(e,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,"string"==typeof this.name&&(this.proxy.name=this.name),"string"==typeof this.value&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Wt),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Wt)),null===(e=this.shadowRoot)||void 0===e||e.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var e;this.removeChild(this.proxy),null===(e=this.shadowRoot)||void 0===e||e.removeChild(this.proxySlot)}validate(e){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,e)}setFormValue(e,t){this.elementInternals&&this.elementInternals.setFormValue(e,t||e)}_keypressHandler(e){if("Enter"===e.key&&this.form instanceof HTMLFormElement){const e=this.form.querySelector("[type=submit]");null==e||e.click()}}stopPropagation(e){e.stopPropagation()}};return P({mode:"boolean"})(t.prototype,"disabled"),P({mode:"fromView",attribute:"value"})(t.prototype,"initialValue"),P({attribute:"current-value"})(t.prototype,"currentValue"),P(t.prototype,"name"),P({mode:"boolean"})(t.prototype,"required"),b(t.prototype,"value"),t}class Kt extends Re{}class Zt extends(Xt(Kt)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Jt extends Zt{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&(null===(t=this.defaultSlottedContent)||void 0===t?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),"function"==typeof this.form.requestSubmit?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;null===(e=this.form)||void 0===e||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&(null===(e=this.$fastController.definition.shadowOptions)||void 0===e?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),"submit"===t&&this.addEventListener("click",this.handleSubmission),"submit"===e&&this.removeEventListener("click",this.handleSubmission),"reset"===t&&this.addEventListener("click",this.handleFormReset),"reset"===e&&this.removeEventListener("click",this.handleFormReset)}validate(){super.validate(this.control)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach(e=>{e.addEventListener("click",this.handleClick)})}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from(null===(e=this.control)||void 0===e?void 0:e.children);t&&t.forEach(e=>{e.removeEventListener("click",this.handleClick)})}}j([P({mode:"boolean"})],Jt.prototype,"autofocus",void 0),j([P({attribute:"form"})],Jt.prototype,"formId",void 0),j([P],Jt.prototype,"formaction",void 0),j([P],Jt.prototype,"formenctype",void 0),j([P],Jt.prototype,"formmethod",void 0),j([P({mode:"boolean"})],Jt.prototype,"formnovalidate",void 0),j([P],Jt.prototype,"formtarget",void 0),j([P],Jt.prototype,"type",void 0),j([b],Jt.prototype,"defaultSlottedContent",void 0);class en{}j([P({attribute:"aria-expanded"})],en.prototype,"ariaExpanded",void 0),j([P({attribute:"aria-pressed"})],en.prototype,"ariaPressed",void 0),_t(en,ht),_t(Jt,jt,en);class tn{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=m.getAccessors(e).some(e=>e.name===t),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(s),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return void 0!==this.options.filter&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class nn extends tn{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function rn(e){return"string"==typeof e&&(e={property:e}),new pt("fast-slotted",nn,e)}function on(e,t){const n=[];let r="";const o=[];for(let i=0,s=e.length-1;i<s;++i){r+=e[i];let s=t[i];if(s instanceof Ie){const e=s.createBehavior();s=s.createCSS(),e&&o.push(e)}s instanceof x||s instanceof CSSStyleSheet?(""!==r.trim()&&(n.push(r),r=""),n.push(s)):r+=s}return r+=e[e.length-1],""!==r.trim()&&n.push(r),{styles:n,behaviors:o}}function sn(e,...t){const{styles:n,behaviors:r}=on(e,t),o=x.create(n);return r.length&&o.withBehaviors(...r),o}class an extends Ie{constructor(e,t){super(),this.behaviors=t,this.css="";const n=e.reduce((e,t)=>("string"==typeof t?this.css+=t:e.push(t),e),[]);n.length&&(this.styles=x.create(n))}createBehavior(){return this}createCSS(){return this.css}bind(e){this.styles&&e.$fastController.addStyles(this.styles),this.behaviors.length&&e.$fastController.addBehaviors(this.behaviors)}unbind(e){this.styles&&e.$fastController.removeStyles(this.styles),this.behaviors.length&&e.$fastController.removeBehaviors(this.behaviors)}}function ln(e,...t){const{styles:n,behaviors:r}=on(e,t);return new an(n,r)}const cn="not-allowed";var un,hn;function dn(e){return`:host([hidden]){display:none}:host{display:${e}}`}let fn;(hn=un||(un={})).Canvas="Canvas",hn.CanvasText="CanvasText",hn.LinkText="LinkText",hn.VisitedText="VisitedText",hn.ActiveText="ActiveText",hn.ButtonFace="ButtonFace",hn.ButtonText="ButtonText",hn.Field="Field",hn.FieldText="FieldText",hn.Highlight="Highlight",hn.HighlightText="HighlightText",hn.GrayText="GrayText";const pn=function(){if("boolean"==typeof fn)return fn;if("undefined"==typeof window||!window.document||!window.document.createElement)return fn=!1,fn;const e=document.createElement("style"),t=function(){const e=document.querySelector('meta[property="csp-nonce"]');return e?e.getAttribute("content"):null}();null!==t&&e.setAttribute("nonce",t),document.head.appendChild(e);try{e.sheet.insertRule("foo:focus-visible {color:inherit}",0),fn=!0}catch(e){fn=!1}finally{document.head.removeChild(e)}return fn}()?"focus-visible":"focus";class gn{constructor(e){this.listenerCache=new WeakMap,this.query=e}bind(e){const{query:t}=this,n=this.constructListener(e);n.bind(t)(),t.addListener(n),this.listenerCache.set(e,n)}unbind(e){const t=this.listenerCache.get(e);t&&(this.query.removeListener(t),this.listenerCache.delete(e))}}class vn extends gn{constructor(e,t){super(e),this.styles=t}static with(e){return t=>new vn(e,t)}constructListener(e){let t=!1;const n=this.styles;return function(){const{matches:r}=this;r&&!t?(e.$fastController.addStyles(n),t=r):!r&&t&&(e.$fastController.removeStyles(n),t=r)}}unbind(e){super.unbind(e),e.$fastController.removeStyles(this.styles)}}const mn=vn.with(window.matchMedia("(forced-colors)"));var bn,yn;function wn(e,t,n){return isNaN(e)||e<=t?t:e>=n?n:e}function An(e,t,n){return isNaN(e)||e<=t?0:e>=n?1:e/(n-t)}function xn(e,t,n){return isNaN(e)?t:t+e*(n-t)}function Cn(e,t,n){return isNaN(e)||e<=0?t:e>=1?n:t+e*(n-t)}function $n(e,t){const n=Math.pow(10,t);return Math.round(e*n)/n}vn.with(window.matchMedia("(prefers-color-scheme: dark)")),vn.with(window.matchMedia("(prefers-color-scheme: light)")),function(e){e.ltr="ltr",e.rtl="rtl"}(bn||(bn={})),Math.PI;class En{constructor(e,t,n){this.h=e,this.s=t,this.l=n}static fromObject(e){return!e||isNaN(e.h)||isNaN(e.s)||isNaN(e.l)?null:new En(e.h,e.s,e.l)}equalValue(e){return this.h===e.h&&this.s===e.s&&this.l===e.l}roundToPrecision(e){return new En($n(this.h,e),$n(this.s,e),$n(this.l,e))}toObject(){return{h:this.h,s:this.s,l:this.l}}}class kn{constructor(e,t,n){this.l=e,this.a=t,this.b=n}static fromObject(e){return!e||isNaN(e.l)||isNaN(e.a)||isNaN(e.b)?null:new kn(e.l,e.a,e.b)}equalValue(e){return this.l===e.l&&this.a===e.a&&this.b===e.b}roundToPrecision(e){return new kn($n(this.l,e),$n(this.a,e),$n(this.b,e))}toObject(){return{l:this.l,a:this.a,b:this.b}}}kn.epsilon=216/24389,kn.kappa=24389/27;class Fn{constructor(e,t,n,r){this.r=e,this.g=t,this.b=n,this.a="number"!=typeof r||isNaN(r)?1:r}static fromObject(e){return!e||isNaN(e.r)||isNaN(e.g)||isNaN(e.b)?null:new Fn(e.r,e.g,e.b,e.a)}equalValue(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(xn(this.r,0,255))},${Math.round(xn(this.g,0,255))},${Math.round(xn(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(xn(this.r,0,255))},${Math.round(xn(this.g,0,255))},${Math.round(xn(this.b,0,255))},${wn(this.a,0,1)})`}roundToPrecision(e){return new Fn($n(this.r,e),$n(this.g,e),$n(this.b,e),$n(this.a,e))}clamp(){return new Fn(wn(this.r,0,1),wn(this.g,0,1),wn(this.b,0,1),wn(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(e){return function(e){const t=Math.round(wn(e,0,255)).toString(16);return 1===t.length?"0"+t:t}(xn(e,0,255))}}class Vn{constructor(e,t,n){this.x=e,this.y=t,this.z=n}static fromObject(e){return!e||isNaN(e.x)||isNaN(e.y)||isNaN(e.z)?null:new Vn(e.x,e.y,e.z)}equalValue(e){return this.x===e.x&&this.y===e.y&&this.z===e.z}roundToPrecision(e){return new Vn($n(this.x,e),$n(this.y,e),$n(this.z,e))}toObject(){return{x:this.x,y:this.y,z:this.z}}}function Bn(e){function t(e){return e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4)}return function(e){return.2126*e.r+.7152*e.g+.0722*e.b}(new Fn(t(e.r),t(e.g),t(e.b),1))}function Sn(e,t,n){return n-t===0?0:(e-t)/(n-t)}function Dn(e,t,n){return(Sn(e.r,t.r,n.r)+Sn(e.g,t.g,n.g)+Sn(e.b,t.b,n.b))/3}function Tn(e){const t=Math.max(e.r,e.g,e.b),n=Math.min(e.r,e.g,e.b),r=t-n;let o=0;0!==r&&(o=t===e.r?(e.g-e.b)/r%6*60:t===e.g?60*((e.b-e.r)/r+2):60*((e.r-e.g)/r+4)),o<0&&(o+=360);const i=(t+n)/2;let s=0;return 0!==r&&(s=r/(1-Math.abs(2*i-1))),new En(o,s,i)}function On(e,t=1){return function(e,t=1){function n(e){return e<=.0031308?12.92*e:1.055*Math.pow(e,1/2.4)-.055}const r=n(3.2404542*e.x-1.5371385*e.y-.4985314*e.z),o=n(-.969266*e.x+1.8760108*e.y+.041556*e.z),i=n(.0556434*e.x-.2040259*e.y+1.0572252*e.z);return new Fn(r,o,i,t)}(function(e){const t=(e.l+16)/116,n=t+e.a/500,r=t-e.b/200,o=Math.pow(n,3),i=Math.pow(t,3),s=Math.pow(r,3);let a=0;a=o>kn.epsilon?o:(116*n-16)/kn.kappa;let l=0;l=e.l>kn.epsilon*kn.kappa?i:e.l/kn.kappa;let c=0;return c=s>kn.epsilon?s:(116*r-16)/kn.kappa,a=Vn.whitePoint.x*a,l=Vn.whitePoint.y*l,c=Vn.whitePoint.z*c,new Vn(a,l,c)}(e),t)}function Rn(e,t,n){return isNaN(e)||e<=0?t:e>=1?n:new Fn(Cn(e,t.r,n.r),Cn(e,t.g,n.g),Cn(e,t.b,n.b),Cn(e,t.a,n.a))}function Ln(e,t){const n=e.relativeLuminance>t.relativeLuminance?e:t,r=e.relativeLuminance>t.relativeLuminance?t:e;return(n.relativeLuminance+.05)/(r.relativeLuminance+.05)}Vn.whitePoint=new Vn(.95047,1,1.08883),function(e){e[e.RGB=0]="RGB",e[e.HSL=1]="HSL",e[e.HSV=2]="HSV",e[e.XYZ=3]="XYZ",e[e.LAB=4]="LAB",e[e.LCH=5]="LCH"}(yn||(yn={}));const Pn=Object.freeze({create:(e,t,n)=>new In(e,t,n),from:e=>new In(e.r,e.g,e.b)});class In extends Fn{constructor(e,t,n){super(e,t,n,1),this.toColorString=this.toStringHexRGB,this.contrast=Ln.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=Bn(this)}static fromObject(e){return new In(e.r,e.g,e.b)}}function Nn(e,t,n=0,r=e.length-1){if(r===n)return e[n];const o=Math.floor((r-n)/2)+n;return t(e[o])?Nn(e,t,n,o):Nn(e,t,o+1,r)}const Mn=(-.1+Math.sqrt(.21))/2;function zn(e){return e.relativeLuminance<=Mn}function jn(e){return zn(e)?-1:1}const Hn={stepContrast:1.03,stepContrastRamp:.03,preserveSource:!1},qn=Object.freeze({create:function(e,t,n){return"number"==typeof e?qn.from(Pn.create(e,t,n)):qn.from(e)},from:function(e,t){return function(e){const t={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(const n in t)if(typeof t[n]!=typeof e[n])return!1;return!0}(e)?_n.from(e,t):_n.from(Pn.create(e.r,e.g,e.b),t)}});class _n{constructor(e,t){this.closestIndexCache=new Map,this.source=e,this.swatches=t,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(e,t,n,r){void 0===n&&(n=this.closestIndexOf(e));let o=this.swatches;const i=this.lastIndex;let s=n;return void 0===r&&(r=jn(e)),-1===r&&(o=this.reversedSwatches,s=i-s),Nn(o,n=>Ln(e,n)>=t,s,i)}get(e){return this.swatches[e]||this.swatches[wn(e,0,this.lastIndex)]}closestIndexOf(e){if(this.closestIndexCache.has(e.relativeLuminance))return this.closestIndexCache.get(e.relativeLuminance);let t=this.swatches.indexOf(e);if(-1!==t)return this.closestIndexCache.set(e.relativeLuminance,t),t;const n=this.swatches.reduce((t,n)=>Math.abs(n.relativeLuminance-e.relativeLuminance)<Math.abs(t.relativeLuminance-e.relativeLuminance)?n:t);return t=this.swatches.indexOf(n),this.closestIndexCache.set(e.relativeLuminance,t),t}static saturationBump(e,t){const n=Tn(e).s,r=Tn(t);return r.s<n?function(e,t=1){const n=(1-Math.abs(2*e.l-1))*e.s,r=n*(1-Math.abs(e.h/60%2-1)),o=e.l-n/2;let i=0,s=0,a=0;return e.h<60?(i=n,s=r,a=0):e.h<120?(i=r,s=n,a=0):e.h<180?(i=0,s=n,a=r):e.h<240?(i=0,s=r,a=n):e.h<300?(i=r,s=0,a=n):e.h<360&&(i=n,s=0,a=r),new Fn(i+o,s+o,a+o,t)}(new En(r.h,n,r.l)):t}static ramp(e){const t=e/100;return t>.5?(t-.5)/.5:2*t}static createHighResolutionPalette(e){const t=[],n=function(e){function t(e){return e>kn.epsilon?Math.pow(e,1/3):(kn.kappa*e+16)/116}const n=t(e.x/Vn.whitePoint.x),r=t(e.y/Vn.whitePoint.y),o=t(e.z/Vn.whitePoint.z);return new kn(116*r-16,500*(n-r),200*(r-o))}(function(e){function t(e){return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)}const n=t(e.r),r=t(e.g),o=t(e.b);return new Vn(.4124564*n+.3575761*r+.1804375*o,.2126729*n+.7151522*r+.072175*o,.0193339*n+.119192*r+.9503041*o)}(Fn.fromObject(e).roundToPrecision(4))),r=On(new kn(0,n.a,n.b)).clamp().roundToPrecision(4),o=On(new kn(50,n.a,n.b)).clamp().roundToPrecision(4),i=On(new kn(100,n.a,n.b)).clamp().roundToPrecision(4),s=new Fn(0,0,0),a=new Fn(1,1,1),l=i.equalValue(a)?0:14,c=r.equalValue(s)?0:14;for(let e=100+l;e>=0-c;e-=.5){let n;n=e<0?Rn(e/c+1,s,r):e<=50?Rn(_n.ramp(e),r,o):e<=100?Rn(_n.ramp(e),o,i):Rn((e-100)/l,i,a),n=_n.saturationBump(o,n).roundToPrecision(4),t.push(Pn.from(n))}return new _n(e,t)}static adjustEnd(e,t,n,r){const o=-1===r?t.swatches:t.reversedSwatches,i=e=>{const n=t.closestIndexOf(e);return 1===r?t.lastIndex-n:n};1===r&&n.reverse();const s=e(n[n.length-2]);if($n(Ln(n[n.length-1],n[n.length-2]),2)<s){n.pop();const e=i(t.colorContrast(o[t.lastIndex],s,void 0,r))-i(n[n.length-2]);let a=1;for(let r=n.length-e-1;r<n.length;r++){const e=i(n[r]),s=r===n.length-1?t.lastIndex:e+a;n[r]=o[s],a++}}1===r&&n.reverse()}static createColorPaletteByContrast(e,t){const n=_n.createHighResolutionPalette(e),r=e=>$n(t.stepContrast+t.stepContrast*(1-e.relativeLuminance)*t.stepContrastRamp,2),o=[];let i=t.preserveSource?e:n.swatches[0];o.push(i);do{const e=r(i);i=n.colorContrast(i,e,void 0,1),o.push(i)}while(i.relativeLuminance>0);if(t.preserveSource){i=e;do{const e=r(i);i=n.colorContrast(i,e,void 0,-1),o.unshift(i)}while(i.relativeLuminance<1)}return this.adjustEnd(r,n,o,-1),t.preserveSource&&this.adjustEnd(r,n,o,1),o}static from(e,t){const n=void 0===t?Hn:Object.assign(Object.assign({},Hn),t);return new _n(e,Object.freeze(_n.createColorPaletteByContrast(e,n)))}}const Un=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function Wn(e){const t=Un.exec(e);if(null===t)return null;let n=t[1];if(3===n.length){const e=n.charAt(0),t=n.charAt(1),r=n.charAt(2);n=e.concat(e,t,t,r,r)}const r=parseInt(n,16);return isNaN(r)?null:new Fn(An((16711680&r)>>>16,0,255),An((65280&r)>>>8,0,255),An(255&r,0,255),1)}const Gn=Pn.create(1,1,1),Yn=Pn.create(0,0,0),Qn=Pn.create(.5,.5,.5),Xn=Wn("#0078D4"),Kn=Pn.create(Xn.r,Xn.g,Xn.b);function Zn(e,t,n,r,o){const i=e=>e.contrast(Gn)>=o?Gn:Yn,s=i(e),a=i(t);return{rest:s,hover:a,active:s.relativeLuminance===a.relativeLuminance?s:i(n),focus:i(r)}}var Jn;!function(e){e[e.Burn=0]="Burn",e[e.Color=1]="Color",e[e.Darken=2]="Darken",e[e.Dodge=3]="Dodge",e[e.Lighten=4]="Lighten",e[e.Multiply=5]="Multiply",e[e.Overlay=6]="Overlay",e[e.Screen=7]="Screen"}(Jn||(Jn={}));class er{constructor(e,t,n,r){this.toColorString=()=>this.cssGradient,this.contrast=Ln.bind(null,this),this.createCSS=this.toColorString,this.color=new Fn(e,t,n),this.cssGradient=r,this.relativeLuminance=Bn(this.color),this.r=e,this.g=t,this.b=n}static fromObject(e,t){return new er(e.r,e.g,e.b,t)}}const tr=new Fn(0,0,0),nr=new Fn(1,1,1);function rr(e,t,n,r,o,i,s,a,l=10,c=!1){const u=e.closestIndexOf(t);function h(n){if(c){const r=e.closestIndexOf(t),o=e.get(r),i=n.relativeLuminance<t.relativeLuminance?tr:nr,s=function(e,t,n=null){let r=0,o=n;return null!==o?r=Dn(e,t,o):(o=new Fn(0,0,0,1),r=Dn(e,t,o),r<=0&&(o=new Fn(1,1,1,1),r=Dn(e,t,o))),r=Math.round(1e3*r)/1e3,new Fn(o.r,o.g,o.b,r)}(Wn(n.toColorString()),Wn(o.toColorString()),i).roundToPrecision(2),a=function(e,t){if(t.a>=1)return t;if(t.a<=0)return new Fn(e.r,e.g,e.b,1);const n=t.a*t.r+(1-t.a)*e.r,r=t.a*t.g+(1-t.a)*e.g,o=t.a*t.b+(1-t.a)*e.b;return new Fn(n,r,o,1)}(Wn(t.toColorString()),s);return Pn.from(a)}return n}void 0===a&&(a=jn(t));const d=u+a*n,f=d+a*(r-n),p=d+a*(o-n),g=d+a*(i-n),v=-1===a?0:100-l,m=-1===a?l:100;function b(t,n){const r=e.get(t);if(n){const n=e.get(t+a*s),o=-1===a?n:r,i=-1===a?r:n,l=`linear-gradient(${h(o).toColorString()} ${v}%, ${h(i).toColorString()} ${m}%)`;return er.fromObject(o,l)}return h(r)}return{rest:b(d,!0),hover:b(f,!0),active:b(p,!1),focus:b(g,!0)}}function or(e,t,n,r,o,i,s,a){null==a&&(a=jn(t));const l=e.closestIndexOf(e.colorContrast(t,n));return{rest:e.get(l+a*r),hover:e.get(l+a*o),active:e.get(l+a*i),focus:e.get(l+a*s)}}function ir(e,t,n,r,o,i,s){const a=e.closestIndexOf(t);return null==s&&(s=jn(t)),{rest:e.get(a+s*n),hover:e.get(a+s*r),active:e.get(a+s*o),focus:e.get(a+s*i)}}function sr(e,t,n,r,o,i,s=void 0,a,l,c,u,h=void 0){return zn(t)?ir(e,t,a,l,c,u,h):ir(e,t,n,r,o,i,s)}var ar;function lr(e,t){return e.closestIndexOf((n=t,Pn.create(n,n,n)));var n}function cr(e,t,n){return e.get(lr(e,t)+-1*n)}!function(e){e[e.LightMode=.98]="LightMode",e[e.DarkMode=.15]="DarkMode"}(ar||(ar={}));const{create:ur}=tt;function hr(e){return tt.create({name:e,cssCustomPropertyName:null})}ur("direction").withDefault(bn.ltr);const dr=ur("disabled-opacity").withDefault(.3),fr=ur("base-height-multiplier").withDefault(8),pr=(ur("base-horizontal-spacing-multiplier").withDefault(3),ur("density").withDefault(0)),gr=ur("design-unit").withDefault(4),vr=ur("control-corner-radius").withDefault(4),mr=(ur("layer-corner-radius").withDefault(8),ur("stroke-width").withDefault(1)),br=ur("focus-stroke-width").withDefault(2),yr=ur("body-font").withDefault('"Segoe UI Variable", "Segoe UI", sans-serif'),wr=ur("font-weight").withDefault(400);function Ar(e){return t=>{const n=e.getValueFor(t),r=wr.getValueFor(t);if(n.endsWith("px")){const e=Number.parseFloat(n.replace("px",""));if(e<=12)return`"wght" ${r}, "opsz" 8`;if(e>24)return`"wght" ${r}, "opsz" 36`}return`"wght" ${r}, "opsz" 10.5`}}const xr=ur("type-ramp-base-font-size").withDefault("14px"),Cr=ur("type-ramp-base-line-height").withDefault("20px"),$r=ur("type-ramp-base-font-variations").withDefault(Ar(xr)),Er=ur("type-ramp-minus-1-font-size").withDefault("12px"),kr=ur("type-ramp-minus-1-line-height").withDefault("16px"),Fr=ur("type-ramp-minus-1-font-variations").withDefault(Ar(Er)),Vr=ur("type-ramp-minus-2-font-size").withDefault("10px"),Br=ur("type-ramp-minus-2-line-height").withDefault("14px"),Sr=ur("type-ramp-minus-2-font-variations").withDefault(Ar(Vr)),Dr=ur("type-ramp-plus-1-font-size").withDefault("16px"),Tr=ur("type-ramp-plus-1-line-height").withDefault("22px"),Or=ur("type-ramp-plus-1-font-variations").withDefault(Ar(Dr)),Rr=ur("type-ramp-plus-2-font-size").withDefault("20px"),Lr=ur("type-ramp-plus-2-line-height").withDefault("26px"),Pr=ur("type-ramp-plus-2-font-variations").withDefault(Ar(Rr)),Ir=ur("type-ramp-plus-3-font-size").withDefault("24px"),Nr=ur("type-ramp-plus-3-line-height").withDefault("32px"),Mr=ur("type-ramp-plus-3-font-variations").withDefault(Ar(Ir)),zr=ur("type-ramp-plus-4-font-size").withDefault("28px"),jr=ur("type-ramp-plus-4-line-height").withDefault("36px"),Hr=ur("type-ramp-plus-4-font-variations").withDefault(Ar(zr)),qr=ur("type-ramp-plus-5-font-size").withDefault("32px"),_r=ur("type-ramp-plus-5-line-height").withDefault("40px"),Ur=ur("type-ramp-plus-5-font-variations").withDefault(Ar(qr)),Wr=ur("type-ramp-plus-6-font-size").withDefault("40px"),Gr=ur("type-ramp-plus-6-line-height").withDefault("52px"),Yr=ur("type-ramp-plus-6-font-variations").withDefault(Ar(Wr)),Qr=ur("base-layer-luminance").withDefault(ar.LightMode),Xr=hr("accent-fill-rest-delta").withDefault(0),Kr=hr("accent-fill-hover-delta").withDefault(-2),Zr=hr("accent-fill-active-delta").withDefault(-5),Jr=hr("accent-fill-focus-delta").withDefault(0),eo=hr("accent-foreground-rest-delta").withDefault(0),to=hr("accent-foreground-hover-delta").withDefault(3),no=hr("accent-foreground-active-delta").withDefault(-8),ro=hr("accent-foreground-focus-delta").withDefault(0),oo=hr("neutral-fill-rest-delta").withDefault(-1),io=hr("neutral-fill-hover-delta").withDefault(1),so=hr("neutral-fill-active-delta").withDefault(0),ao=hr("neutral-fill-focus-delta").withDefault(0),lo=hr("neutral-fill-input-rest-delta").withDefault(-1),co=hr("neutral-fill-input-hover-delta").withDefault(1),uo=hr("neutral-fill-input-active-delta").withDefault(0),ho=hr("neutral-fill-input-focus-delta").withDefault(-2),fo=hr("neutral-fill-input-alt-rest-delta").withDefault(2),po=hr("neutral-fill-input-alt-hover-delta").withDefault(4),go=hr("neutral-fill-input-alt-active-delta").withDefault(6),vo=hr("neutral-fill-input-alt-focus-delta").withDefault(2),mo=hr("neutral-fill-layer-rest-delta").withDefault(-2),bo=hr("neutral-fill-layer-hover-delta").withDefault(-3),yo=hr("neutral-fill-layer-active-delta").withDefault(-3),wo=hr("neutral-fill-layer-alt-rest-delta").withDefault(-1),Ao=hr("neutral-fill-secondary-rest-delta").withDefault(3),xo=hr("neutral-fill-secondary-hover-delta").withDefault(2),Co=hr("neutral-fill-secondary-active-delta").withDefault(1),$o=hr("neutral-fill-secondary-focus-delta").withDefault(3),Eo=hr("neutral-fill-stealth-rest-delta").withDefault(0),ko=hr("neutral-fill-stealth-hover-delta").withDefault(3),Fo=hr("neutral-fill-stealth-active-delta").withDefault(2),Vo=hr("neutral-fill-stealth-focus-delta").withDefault(0),Bo=hr("neutral-fill-strong-rest-delta").withDefault(0),So=hr("neutral-fill-strong-hover-delta").withDefault(8),Do=hr("neutral-fill-strong-active-delta").withDefault(-5),To=hr("neutral-fill-strong-focus-delta").withDefault(0),Oo=hr("neutral-stroke-rest-delta").withDefault(8),Ro=hr("neutral-stroke-hover-delta").withDefault(12),Lo=hr("neutral-stroke-active-delta").withDefault(6),Po=hr("neutral-stroke-focus-delta").withDefault(8),Io=hr("neutral-stroke-control-rest-delta").withDefault(3),No=hr("neutral-stroke-control-hover-delta").withDefault(5),Mo=hr("neutral-stroke-control-active-delta").withDefault(5),zo=hr("neutral-stroke-control-focus-delta").withDefault(5),jo=hr("neutral-stroke-divider-rest-delta").withDefault(4),Ho=hr("neutral-stroke-layer-rest-delta").withDefault(3),qo=hr("neutral-stroke-layer-hover-delta").withDefault(3),_o=hr("neutral-stroke-layer-active-delta").withDefault(3),Uo=hr("neutral-stroke-strong-hover-delta").withDefault(0),Wo=hr("neutral-stroke-strong-active-delta").withDefault(0),Go=hr("neutral-stroke-strong-focus-delta").withDefault(0),Yo=ur("neutral-base-color").withDefault(Qn),Qo=hr("neutral-palette").withDefault(e=>qn.from(Yo.getValueFor(e))),Xo=ur("accent-base-color").withDefault(Kn),Ko=hr("accent-palette").withDefault(e=>qn.from(Xo.getValueFor(e))),Zo=hr("neutral-layer-card-container-recipe").withDefault({evaluate:e=>cr(Qo.getValueFor(e),Qr.getValueFor(e),mo.getValueFor(e))}),Jo=(ur("neutral-layer-card-container").withDefault(e=>Zo.getValueFor(e).evaluate(e)),hr("neutral-layer-floating-recipe").withDefault({evaluate:e=>function(e,t,n){return e.get(lr(e,t)+n)}(Qo.getValueFor(e),Qr.getValueFor(e),mo.getValueFor(e))})),ei=(ur("neutral-layer-floating").withDefault(e=>Jo.getValueFor(e).evaluate(e)),hr("neutral-layer-1-recipe").withDefault({evaluate:e=>function(e,t){return e.get(lr(e,t))}(Qo.getValueFor(e),Qr.getValueFor(e))})),ti=ur("neutral-layer-1").withDefault(e=>ei.getValueFor(e).evaluate(e)),ni=hr("neutral-layer-2-recipe").withDefault({evaluate:e=>cr(Qo.getValueFor(e),Qr.getValueFor(e),mo.getValueFor(e))}),ri=(ur("neutral-layer-2").withDefault(e=>ni.getValueFor(e).evaluate(e)),hr("neutral-layer-3-recipe").withDefault({evaluate:e=>function(e,t,n){return e.get(lr(e,t)+-1*n*2)}(Qo.getValueFor(e),Qr.getValueFor(e),mo.getValueFor(e))})),oi=(ur("neutral-layer-3").withDefault(e=>ri.getValueFor(e).evaluate(e)),hr("neutral-layer-4-recipe").withDefault({evaluate:e=>function(e,t,n){return e.get(lr(e,t)+-1*n*3)}(Qo.getValueFor(e),Qr.getValueFor(e),mo.getValueFor(e))})),ii=(ur("neutral-layer-4").withDefault(e=>oi.getValueFor(e).evaluate(e)),ur("fill-color").withDefault(e=>ti.getValueFor(e)));var si;!function(e){e[e.normal=4.5]="normal",e[e.large=3]="large"}(si||(si={}));const ai=hr("accent-fill-recipe").withDefault({evaluate:(e,t)=>function(e,t,n,r,o,i,s,a,l,c,u,h,d){return zn(t)?or(e,t,8,c,u,h,d,void 0):or(e,t,5,r,o,i,s,void 0)}(Ko.getValueFor(e),t||ii.getValueFor(e),0,Xr.getValueFor(e),Kr.getValueFor(e),Zr.getValueFor(e),Jr.getValueFor(e),0,0,Xr.getValueFor(e),Kr.getValueFor(e),Zr.getValueFor(e),Jr.getValueFor(e))}),li=ur("accent-fill-rest").withDefault(e=>ai.getValueFor(e).evaluate(e).rest),ci=ur("accent-fill-hover").withDefault(e=>ai.getValueFor(e).evaluate(e).hover),ui=ur("accent-fill-active").withDefault(e=>ai.getValueFor(e).evaluate(e).active),hi=ur("accent-fill-focus").withDefault(e=>ai.getValueFor(e).evaluate(e).focus),di=hr("foreground-on-accent-recipe").withDefault({evaluate:e=>Zn(li.getValueFor(e),ci.getValueFor(e),ui.getValueFor(e),hi.getValueFor(e),si.normal)}),fi=ur("foreground-on-accent-rest").withDefault(e=>di.getValueFor(e).evaluate(e).rest),pi=ur("foreground-on-accent-hover").withDefault(e=>di.getValueFor(e).evaluate(e).hover),gi=ur("foreground-on-accent-active").withDefault(e=>di.getValueFor(e).evaluate(e).active),vi=(ur("foreground-on-accent-focus").withDefault(e=>di.getValueFor(e).evaluate(e).focus),hr("accent-foreground-recipe").withDefault({evaluate:(e,t)=>or(Ko.getValueFor(e),t||ii.getValueFor(e),9.5,eo.getValueFor(e),to.getValueFor(e),no.getValueFor(e),ro.getValueFor(e))})),mi=ur("accent-foreground-rest").withDefault(e=>vi.getValueFor(e).evaluate(e).rest),bi=ur("accent-foreground-hover").withDefault(e=>vi.getValueFor(e).evaluate(e).hover),yi=ur("accent-foreground-active").withDefault(e=>vi.getValueFor(e).evaluate(e).active),wi=(ur("accent-foreground-focus").withDefault(e=>vi.getValueFor(e).evaluate(e).focus),hr("accent-stroke-control-recipe").withDefault({evaluate:(e,t)=>rr(Qo.getValueFor(e),t||ii.getValueFor(e),-3,-3,-3,-3,10,1,void 0,!0)})),Ai=ur("accent-stroke-control-rest").withDefault(e=>wi.getValueFor(e).evaluate(e,li.getValueFor(e)).rest),xi=ur("accent-stroke-control-hover").withDefault(e=>wi.getValueFor(e).evaluate(e,ci.getValueFor(e)).hover),Ci=ur("accent-stroke-control-active").withDefault(e=>wi.getValueFor(e).evaluate(e,ui.getValueFor(e)).active),$i=(ur("accent-stroke-control-focus").withDefault(e=>wi.getValueFor(e).evaluate(e,hi.getValueFor(e)).focus),hr("neutral-fill-recipe").withDefault({evaluate:(e,t)=>sr(Qo.getValueFor(e),t||ii.getValueFor(e),oo.getValueFor(e),io.getValueFor(e),so.getValueFor(e),ao.getValueFor(e),void 0,2,3,1,2,void 0)})),Ei=ur("neutral-fill-rest").withDefault(e=>$i.getValueFor(e).evaluate(e).rest),ki=ur("neutral-fill-hover").withDefault(e=>$i.getValueFor(e).evaluate(e).hover),Fi=ur("neutral-fill-active").withDefault(e=>$i.getValueFor(e).evaluate(e).active),Vi=(ur("neutral-fill-focus").withDefault(e=>$i.getValueFor(e).evaluate(e).focus),hr("neutral-fill-input-recipe").withDefault({evaluate:(e,t)=>sr(Qo.getValueFor(e),t||ii.getValueFor(e),lo.getValueFor(e),co.getValueFor(e),uo.getValueFor(e),ho.getValueFor(e),void 0,2,3,1,0,void 0)})),Bi=ur("neutral-fill-input-rest").withDefault(e=>Vi.getValueFor(e).evaluate(e).rest),Si=ur("neutral-fill-input-hover").withDefault(e=>Vi.getValueFor(e).evaluate(e).hover),Di=(ur("neutral-fill-input-active").withDefault(e=>Vi.getValueFor(e).evaluate(e).active),ur("neutral-fill-input-focus").withDefault(e=>Vi.getValueFor(e).evaluate(e).focus)),Ti=hr("neutral-fill-input-alt-recipe").withDefault({evaluate:(e,t)=>sr(Qo.getValueFor(e),t||ii.getValueFor(e),fo.getValueFor(e),po.getValueFor(e),go.getValueFor(e),vo.getValueFor(e),1,fo.getValueFor(e),fo.getValueFor(e)-po.getValueFor(e),fo.getValueFor(e)-go.getValueFor(e),vo.getValueFor(e),1)}),Oi=(ur("neutral-fill-input-alt-rest").withDefault(e=>Ti.getValueFor(e).evaluate(e).rest),ur("neutral-fill-input-alt-hover").withDefault(e=>Ti.getValueFor(e).evaluate(e).hover),ur("neutral-fill-input-alt-active").withDefault(e=>Ti.getValueFor(e).evaluate(e).active),ur("neutral-fill-input-alt-focus").withDefault(e=>Ti.getValueFor(e).evaluate(e).focus),hr("neutral-fill-layer-recipe").withDefault({evaluate:(e,t)=>ir(Qo.getValueFor(e),t||ii.getValueFor(e),mo.getValueFor(e),bo.getValueFor(e),yo.getValueFor(e),mo.getValueFor(e),1)})),Ri=(ur("neutral-fill-layer-rest").withDefault(e=>Oi.getValueFor(e).evaluate(e).rest),ur("neutral-fill-layer-hover").withDefault(e=>Oi.getValueFor(e).evaluate(e).hover),ur("neutral-fill-layer-active").withDefault(e=>Oi.getValueFor(e).evaluate(e).active),hr("neutral-fill-layer-alt-recipe").withDefault({evaluate:(e,t)=>ir(Qo.getValueFor(e),t||ii.getValueFor(e),wo.getValueFor(e),wo.getValueFor(e),wo.getValueFor(e),wo.getValueFor(e))})),Li=(ur("neutral-fill-layer-alt-rest").withDefault(e=>Ri.getValueFor(e).evaluate(e).rest),hr("neutral-fill-secondary-recipe").withDefault({evaluate:(e,t)=>ir(Qo.getValueFor(e),t||ii.getValueFor(e),Ao.getValueFor(e),xo.getValueFor(e),Co.getValueFor(e),$o.getValueFor(e))})),Pi=ur("neutral-fill-secondary-rest").withDefault(e=>Li.getValueFor(e).evaluate(e).rest),Ii=ur("neutral-fill-secondary-hover").withDefault(e=>Li.getValueFor(e).evaluate(e).hover),Ni=(ur("neutral-fill-secondary-active").withDefault(e=>Li.getValueFor(e).evaluate(e).active),ur("neutral-fill-secondary-focus").withDefault(e=>Li.getValueFor(e).evaluate(e).focus)),Mi=hr("neutral-fill-stealth-recipe").withDefault({evaluate:(e,t)=>ir(Qo.getValueFor(e),t||ii.getValueFor(e),Eo.getValueFor(e),ko.getValueFor(e),Fo.getValueFor(e),Vo.getValueFor(e))}),zi=ur("neutral-fill-stealth-rest").withDefault(e=>Mi.getValueFor(e).evaluate(e).rest),ji=ur("neutral-fill-stealth-hover").withDefault(e=>Mi.getValueFor(e).evaluate(e).hover),Hi=ur("neutral-fill-stealth-active").withDefault(e=>Mi.getValueFor(e).evaluate(e).active),qi=(ur("neutral-fill-stealth-focus").withDefault(e=>Mi.getValueFor(e).evaluate(e).focus),hr("neutral-fill-strong-recipe").withDefault({evaluate:(e,t)=>or(Qo.getValueFor(e),t||ii.getValueFor(e),4.5,Bo.getValueFor(e),So.getValueFor(e),Do.getValueFor(e),To.getValueFor(e))})),_i=(ur("neutral-fill-strong-rest").withDefault(e=>qi.getValueFor(e).evaluate(e).rest),ur("neutral-fill-strong-hover").withDefault(e=>qi.getValueFor(e).evaluate(e).hover),ur("neutral-fill-strong-active").withDefault(e=>qi.getValueFor(e).evaluate(e).active),ur("neutral-fill-strong-focus").withDefault(e=>qi.getValueFor(e).evaluate(e).focus),hr("neutral-foreground-recipe").withDefault({evaluate:(e,t)=>or(Qo.getValueFor(e),t||ii.getValueFor(e),16,0,-19,-30,0)})),Ui=ur("neutral-foreground-rest").withDefault(e=>_i.getValueFor(e).evaluate(e).rest),Wi=(ur("neutral-foreground-hover").withDefault(e=>_i.getValueFor(e).evaluate(e).hover),ur("neutral-foreground-active").withDefault(e=>_i.getValueFor(e).evaluate(e).active),ur("neutral-foreground-focus").withDefault(e=>_i.getValueFor(e).evaluate(e).focus),hr("neutral-foreground-hint-recipe").withDefault({evaluate:(e,t)=>function(e,t){return e.colorContrast(t,4.5)}(Qo.getValueFor(e),t||ii.getValueFor(e))})),Gi=(ur("neutral-foreground-hint").withDefault(e=>Wi.getValueFor(e).evaluate(e)),hr("neutral-stroke-recipe").withDefault({evaluate:(e,t)=>ir(Qo.getValueFor(e),t||ii.getValueFor(e),Oo.getValueFor(e),Ro.getValueFor(e),Lo.getValueFor(e),Po.getValueFor(e))})),Yi=ur("neutral-stroke-rest").withDefault(e=>Gi.getValueFor(e).evaluate(e).rest),Qi=ur("neutral-stroke-hover").withDefault(e=>Gi.getValueFor(e).evaluate(e).hover),Xi=ur("neutral-stroke-active").withDefault(e=>Gi.getValueFor(e).evaluate(e).active),Ki=(ur("neutral-stroke-focus").withDefault(e=>Gi.getValueFor(e).evaluate(e).focus),hr("neutral-stroke-control-recipe").withDefault({evaluate:(e,t)=>rr(Qo.getValueFor(e),t||ii.getValueFor(e),Io.getValueFor(e),No.getValueFor(e),Mo.getValueFor(e),zo.getValueFor(e),5)})),Zi=ur("neutral-stroke-control-rest").withDefault(e=>Ki.getValueFor(e).evaluate(e).rest),Ji=ur("neutral-stroke-control-hover").withDefault(e=>Ki.getValueFor(e).evaluate(e).hover),es=ur("neutral-stroke-control-active").withDefault(e=>Ki.getValueFor(e).evaluate(e).active),ts=(ur("neutral-stroke-control-focus").withDefault(e=>Ki.getValueFor(e).evaluate(e).focus),hr("neutral-stroke-divider-recipe").withDefault({evaluate:(e,t)=>function(e,t,n){return e.get(e.closestIndexOf(t)+jn(t)*n)}(Qo.getValueFor(e),t||ii.getValueFor(e),jo.getValueFor(e))})),ns=(ur("neutral-stroke-divider-rest").withDefault(e=>ts.getValueFor(e).evaluate(e)),hr("neutral-stroke-input-recipe").withDefault({evaluate:(e,t)=>function(e,t,n,r,o,i,s,a){const l=e.closestIndexOf(t),c=jn(t),u=l+c*n,h=u+c*(r-n),d=u+c*(o-n),f=u+c*(i-n),p=`calc(100% - ${a})`;function g(t,n){const r=e.get(t);if(n){const n=e.get(t+20*c),o=`linear-gradient(${r.toColorString()} ${p}, ${n.toColorString()} ${p}, ${n.toColorString()})`;return er.fromObject(r,o)}return r}return{rest:g(u,!0),hover:g(h,!0),active:g(d,!1),focus:g(f,!0)}}(Qo.getValueFor(e),t||ii.getValueFor(e),Io.getValueFor(e),No.getValueFor(e),Mo.getValueFor(e),zo.getValueFor(e),0,mr.getValueFor(e)+"px")})),rs=ur("neutral-stroke-input-rest").withDefault(e=>ns.getValueFor(e).evaluate(e).rest),os=ur("neutral-stroke-input-hover").withDefault(e=>ns.getValueFor(e).evaluate(e).hover),is=(ur("neutral-stroke-input-active").withDefault(e=>ns.getValueFor(e).evaluate(e).active),ur("neutral-stroke-input-focus").withDefault(e=>ns.getValueFor(e).evaluate(e).focus),hr("neutral-stroke-layer-recipe").withDefault({evaluate:(e,t)=>ir(Qo.getValueFor(e),t||ii.getValueFor(e),Ho.getValueFor(e),qo.getValueFor(e),_o.getValueFor(e),Ho.getValueFor(e))})),ss=(ur("neutral-stroke-layer-rest").withDefault(e=>is.getValueFor(e).evaluate(e).rest),ur("neutral-stroke-layer-hover").withDefault(e=>is.getValueFor(e).evaluate(e).hover),ur("neutral-stroke-layer-active").withDefault(e=>is.getValueFor(e).evaluate(e).active),hr("neutral-stroke-strong-recipe").withDefault({evaluate:(e,t)=>or(Qo.getValueFor(e),t||ii.getValueFor(e),5.5,0,Uo.getValueFor(e),Wo.getValueFor(e),Go.getValueFor(e))})),as=(ur("neutral-stroke-strong-rest").withDefault(e=>ss.getValueFor(e).evaluate(e).rest),ur("neutral-stroke-strong-hover").withDefault(e=>ss.getValueFor(e).evaluate(e).hover),ur("neutral-stroke-strong-active").withDefault(e=>ss.getValueFor(e).evaluate(e).active),ur("neutral-stroke-strong-focus").withDefault(e=>ss.getValueFor(e).evaluate(e).focus),hr("focus-stroke-outer-recipe").withDefault({evaluate:e=>(Qo.getValueFor(e),zn(ii.getValueFor(e))?Gn:Yn)})),ls=ur("focus-stroke-outer").withDefault(e=>as.getValueFor(e).evaluate(e)),cs=hr("focus-stroke-inner-recipe").withDefault({evaluate:e=>{return Ko.getValueFor(e),t=ii.getValueFor(e),ls.getValueFor(e),zn(t)?Yn:Gn;var t}}),us=ur("focus-stroke-inner").withDefault(e=>cs.getValueFor(e).evaluate(e)),hs=hr("foreground-on-accent-large-recipe").withDefault({evaluate:e=>Zn(li.getValueFor(e),ci.getValueFor(e),ui.getValueFor(e),hi.getValueFor(e),si.large)}),ds=(ur("foreground-on-accent-rest-large").withDefault(e=>hs.getValueFor(e).evaluate(e).rest),ur("foreground-on-accent-hover-large").withDefault(e=>hs.getValueFor(e).evaluate(e,ci.getValueFor(e)).hover),ur("foreground-on-accent-active-large").withDefault(e=>hs.getValueFor(e).evaluate(e,ui.getValueFor(e)).active),ur("foreground-on-accent-focus-large").withDefault(e=>hs.getValueFor(e).evaluate(e,hi.getValueFor(e)).focus),ur("neutral-fill-inverse-rest-delta").withDefault(0)),fs=ur("neutral-fill-inverse-hover-delta").withDefault(-3),ps=ur("neutral-fill-inverse-active-delta").withDefault(7),gs=ur("neutral-fill-inverse-focus-delta").withDefault(0),vs=hr("neutral-fill-inverse-recipe").withDefault({evaluate:(e,t)=>function(e,t,n,r,o,i){const s=jn(t),a=e.closestIndexOf(e.colorContrast(t,14)),l=a+s*Math.abs(n-r);let c,u;return(1===s?n<r:s*n>s*r)?(c=a,u=l):(c=l,u=a),{rest:e.get(c),hover:e.get(u),active:e.get(c+s*o),focus:e.get(c+s*i)}}(Qo.getValueFor(e),t||ii.getValueFor(e),ds.getValueFor(e),fs.getValueFor(e),ps.getValueFor(e),gs.getValueFor(e))}),ms=(ur("neutral-fill-inverse-rest").withDefault(e=>vs.getValueFor(e).evaluate(e).rest),ur("neutral-fill-inverse-hover").withDefault(e=>vs.getValueFor(e).evaluate(e).hover),ur("neutral-fill-inverse-active").withDefault(e=>vs.getValueFor(e).evaluate(e).active),ur("neutral-fill-inverse-focus").withDefault(e=>vs.getValueFor(e).evaluate(e).focus),ln`(${fr} + ${pr}) * ${gr}`),bs=ln`
  font-family: ${yr};
  font-size: ${xr};
  line-height: ${Cr};
  font-weight: initial;
  font-variation-settings: ${$r};
`,ys=ln`
  font-family: ${yr};
  font-size: ${Er};
  line-height: ${kr};
  font-weight: initial;
  font-variation-settings: ${Fr};
`,ws=(ln`
  font-family: ${yr};
  font-size: ${Vr};
  line-height: ${Br};
  font-weight: initial;
  font-variation-settings: ${Sr};
`,ln`
  font-family: ${yr};
  font-size: ${Dr};
  line-height: ${Tr};
  font-weight: initial;
  font-variation-settings: ${Or};
`,ln`
  font-family: ${yr};
  font-size: ${Rr};
  line-height: ${Lr};
  font-weight: initial;
  font-variation-settings: ${Pr};
`,ln`
  font-family: ${yr};
  font-size: ${Ir};
  line-height: ${Nr};
  font-weight: initial;
  font-variation-settings: ${Mr};
`,ln`
  font-family: ${yr};
  font-size: ${zr};
  line-height: ${jr};
  font-weight: initial;
  font-variation-settings: ${Hr};
`,ln`
  font-family: ${yr};
  font-size: ${qr};
  line-height: ${_r};
  font-weight: initial;
  font-variation-settings: ${Ur};
`,ln`
  font-family: ${yr};
  font-size: ${Wr};
  line-height: ${Gr};
  font-weight: initial;
  font-variation-settings: ${Yr};
`,ln`
  outline: calc(${br} * 1px) solid ${ls};
  outline-offset: calc(${br} * -1px);
`);ln`
  outline: calc(${br} * 1px) solid ${ls};
  outline-offset: calc(${mr} * 1px);
`;class As{constructor(e,t,n){this.propertyName=e,this.value=t,this.styles=n}bind(e){m.getNotifier(e).subscribe(this,this.propertyName),this.handleChange(e,this.propertyName)}unbind(e){m.getNotifier(e).unsubscribe(this,this.propertyName),e.$fastController.removeStyles(this.styles)}handleChange(e,t){e[t]===this.value?e.$fastController.addStyles(this.styles):e.$fastController.removeStyles(this.styles)}}function xs(e,t){return new As("appearance",e,t)}const Cs=":not([disabled])",$s="[disabled]";class Es extends Jt{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(){const e=this.defaultSlottedContent.filter(e=>e.nodeType===Node.ELEMENT_NODE);1===e.length&&e[0]instanceof SVGElement?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}ut([P],Es.prototype,"appearance",void 0);const ks=Es.compose({baseName:"button",baseClass:Jt,template:(e,t)=>Nt`
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
            <slot ${rn("defaultSlottedContent")}></slot>
        </span>
        ${Ht(0,t)}
    </button>
`,styles:(e,t)=>sn`
    :host(${Cs}) .control {
      cursor: pointer;
    }

    :host(${$s}) .control {
      cursor: ${cn};
    }

    @media (forced-colors: none) {
      :host(${$s}) .control {
        opacity: ${dr};
      }
    }

    ${sn`
    ${dn("inline-flex")}
    
    :host {
      position: relative;
      box-sizing: border-box;
      ${bs}
      height: calc(${ms} * 1px);
      min-width: calc(${ms} * 1px);
      color: ${Ui};
      border-radius: calc(${vr} * 1px);
      fill: currentcolor;
    }

    .control {
      border: calc(${mr} * 1px) solid transparent;
      flex-grow: 1;
      box-sizing: border-box;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      padding: 0 calc((10 + (${gr} * 2 * ${pr})) * 1px);
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

    .control:${pn} {
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
  `.withBehaviors(xs("neutral",((e,t,n,r="[disabled]")=>sn`
    .control {
      background: padding-box linear-gradient(${Ei}, ${Ei}),
        border-box ${Zi};
    }

    :host(${n}:hover) .control {
      background: padding-box linear-gradient(${ki}, ${ki}),
        border-box ${Ji};
    }

    :host(${n}:active) .control {
      background: padding-box linear-gradient(${Fi}, ${Fi}),
        border-box ${es};
    }

    :host(${r}) .control {
      background: padding-box linear-gradient(${Ei}, ${Ei}),
        border-box ${Yi};
    }
  `.withBehaviors(mn(sn`
        .control {
          background: ${un.ButtonFace};
          border-color: ${un.ButtonText};
          color: ${un.ButtonText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          forced-color-adjust: none;
          background: ${un.HighlightText};
          border-color: ${un.Highlight};
          color: ${un.Highlight};
        }

        :host(${r}) .control {
          background: transparent;
          border-color: ${un.GrayText};
          color: ${un.GrayText};
        }

        .control:${pn} {
          outline-color: ${un.CanvasText};
        }

        :host([href]) .control {
          background: transparent;
          border-color: ${un.LinkText};
          color: ${un.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${un.CanvasText};
          color: ${un.CanvasText};
        }
    `)))(0,0,Cs,$s)),xs("accent",((e,t,n,r="[disabled]")=>sn`
    .control {
      background: padding-box linear-gradient(${li}, ${li}),
        border-box ${Ai};
      color: ${fi};
    }

    :host(${n}:hover) .control {
      background: padding-box linear-gradient(${ci}, ${ci}),
        border-box ${xi};
      color: ${pi};
    }

    :host(${n}:active) .control {
      background: padding-box linear-gradient(${ui}, ${ui}),
        border-box ${Ci};
      color: ${gi};
    }

    :host(${r}) .control {
      background: ${li};
    }

    .control:${pn} {
      box-shadow: 0 0 0 calc(${br} * 1px) ${us} inset !important;
    }
  `.withBehaviors(mn(sn`
        .control {
          forced-color-adjust: none;
          background: ${un.Highlight};
          color: ${un.HighlightText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          background: ${un.HighlightText};
          border-color: ${un.Highlight};
          color: ${un.Highlight};
        }

        :host(${r}) .control {
          background: transparent;
          border-color: ${un.GrayText};
          color: ${un.GrayText};
        }

        .control:${pn} {
          outline-color: ${un.CanvasText};
          box-shadow: 0 0 0 calc(${br} * 1px) ${un.HighlightText} inset !important;
        }

        :host([href]) .control {
          background: ${un.LinkText};
          color: ${un.HighlightText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: ${un.ButtonFace};
          border-color: ${un.LinkText};
          color: ${un.LinkText};
        }
      `)))(0,0,Cs,$s)),xs("lightweight",((e,t,n,r="[disabled]")=>sn`
    :host {
      color: ${mi};
    }

    .control {
      background: ${zi};
    }

    :host(${n}:hover) .control {
      background: ${ji};
      color: ${bi};
    }

    :host(${n}:active) .control {
      background: ${Hi};
      color: ${yi};
    }

    :host(${r}) .control {
      background: ${zi};
    }
  `.withBehaviors(mn(sn`
        :host {
          color: ${un.ButtonText};
        }

        .control {
          forced-color-adjust: none;
          background: transparent;
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          background: transparent;
          border-color: ${un.ButtonText};
          color: ${un.ButtonText};
        }

        :host(${r}) .control {
          background: transparent;
          color: ${un.GrayText};
        }

        .control:${pn} {
          outline-color: ${un.CanvasText};
        }

        :host([href]) .control {
          color: ${un.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${un.LinkText};
          color: ${un.LinkText};
        }
      `)))(0,0,Cs,$s)),xs("outline",((e,t,n,r="[disabled]")=>sn`
    .control {
      background: transparent !important;
      border-color: ${Yi};
    }

    :host(${n}:hover) .control {
      border-color: ${Qi};
    }

    :host(${n}:active) .control {
      border-color: ${Xi};
    }

    :host(${r}) .control {
      background: transparent !important;
      border-color: ${Yi};
    }
  `.withBehaviors(mn(sn`
        .control {
          border-color: ${un.ButtonText};
          color: ${un.ButtonText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          background: ${un.HighlightText};
          border-color: ${un.Highlight};
          color: ${un.Highlight};
        }

        :host(${r}) .control {
          border-color: ${un.GrayText};
          color: ${un.GrayText};
        }

        .control:${pn} {
          outline-color: ${un.CanvasText};
        }

        :host([href]) .control {
          border-color: ${un.LinkText};
          color: ${un.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          border-color: ${un.CanvasText};
          color: ${un.CanvasText};
        }
      `)))(0,0,Cs,$s)),xs("stealth",((e,t,n,r="[disabled]")=>sn`
    .control {
      background: ${zi};
    }

    :host(${n}:hover) .control {
      background: ${ji};
    }

    :host(${n}:active) .control {
      background: ${Hi};
    }

    :host(${r}) .control {
      background: ${zi};
    }
  `.withBehaviors(mn(sn`
        .control {
          forced-color-adjust: none;
          background: transparent;
          color: ${un.ButtonText};
        }

        :host(${n}:hover) .control,
        :host(${n}:active) .control {
          background: transparent;
          border-color: ${un.ButtonText};
          color: ${un.ButtonText};
        }

        :host(${r}) .control {
          background: transparent;
          color: ${un.GrayText};
        }
        
        .control:${pn} {
          outline-color: ${un.CanvasText};
        }

        :host([href]) .control {
          color: ${un.LinkText};
        }

        :host([href]:hover) .control,
        :host([href]:active) .control {
          background: transparent;
          border-color: ${un.LinkText};
          color: ${un.LinkText};
        }
      `)))(0,0,Cs,$s))),shadowOptions:{delegatesFocus:!0}});class Fs extends Re{}class Vs extends(Xt(Fs)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Bs extends Vs{constructor(){super(...arguments),this.type="text"}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&p.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}j([P({attribute:"readonly",mode:"boolean"})],Bs.prototype,"readOnly",void 0),j([P({mode:"boolean"})],Bs.prototype,"autofocus",void 0),j([P],Bs.prototype,"placeholder",void 0),j([P],Bs.prototype,"type",void 0),j([P],Bs.prototype,"list",void 0),j([P({converter:R})],Bs.prototype,"maxlength",void 0),j([P({converter:R})],Bs.prototype,"minlength",void 0),j([P],Bs.prototype,"pattern",void 0),j([P({converter:R})],Bs.prototype,"size",void 0),j([P({mode:"boolean"})],Bs.prototype,"spellcheck",void 0),j([b],Bs.prototype,"defaultSlottedNodes",void 0);class Ss{}function Ds(e,t,n){return e.nodeType!==Node.TEXT_NODE||"string"==typeof e.nodeValue&&!!e.nodeValue.trim().length}_t(Ss,ht),_t(Bs,jt,Ss);const Ts=tt.create("input-placeholder-rest").withDefault(e=>{const t=Vi.getValueFor(e);return Wi.getValueFor(e).evaluate(e,t.evaluate(e).rest)}),Os=tt.create("input-placeholder-hover").withDefault(e=>{const t=Vi.getValueFor(e);return Wi.getValueFor(e).evaluate(e,t.evaluate(e).hover)}),Rs=tt.create("input-filled-placeholder-rest").withDefault(e=>{const t=Li.getValueFor(e);return Wi.getValueFor(e).evaluate(e,t.evaluate(e).rest)}),Ls=tt.create("input-filled-placeholder-hover").withDefault(e=>{const t=Li.getValueFor(e);return Wi.getValueFor(e).evaluate(e,t.evaluate(e).hover)}),Ps=(e,t,n)=>sn`
  :host {
    ${bs}
    color: ${Ui};
    fill: currentcolor;
    user-select: none;
    position: relative;
  }

  ${n} {
    box-sizing: border-box;
    position: relative;
    color: inherit;
    border: calc(${mr} * 1px) solid transparent;
    border-radius: calc(${vr} * 1px);
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

  :host([disabled]) ${n},
  :host([readonly]) ${n},
  :host([disabled]) .label,
  :host([readonly]) .label,
  :host([disabled]) .control,
  :host([readonly]) .control {
    cursor: ${cn};
  }

  :host([disabled]) {
    opacity: ${dr};
  }
`,Is=(e,t,n)=>sn`
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
      height: calc(${br} * 1px);
      bottom: 0;
      border-bottom: calc(${br} * 1px) solid ${li};
      border-bottom-left-radius: calc(${vr} * 1px);
      border-bottom-right-radius: calc(${vr} * 1px);
      z-index: 2;
      transition: all 300ms cubic-bezier(0.1, 0.9, 0.2, 1);
    }
  }
`,Ns=(e,t,n,r=":not([disabled]):not(:focus-within)")=>sn`
  ${n} {
    background: padding-box linear-gradient(${Bi}, ${Bi}),
      border-box ${rs};
  }

  :host(${r}:hover) ${n} {
    background: padding-box linear-gradient(${Si}, ${Si}),
      border-box ${os};
  }

  :host(:not([disabled]):focus-within) ${n} {
    background: padding-box linear-gradient(${Di}, ${Di}),
      border-box ${rs};
  }
  
  :host([disabled]) ${n} {
    background: padding-box linear-gradient(${Bi}, ${Bi}),
      border-box ${Yi};
  }

  .control::placeholder {
    color: ${Ts};
  }

  :host(${r}:hover) .control::placeholder {
    color: ${Os};
  }
`,Ms=(e,t,n,r=":not([disabled]):not(:focus-within)")=>sn`
  ${n} {
    background: ${Pi};
  }

  :host(${r}:hover) ${n} {
    background: ${Ii};
  }

  :host(:not([disabled]):focus-within) ${n} {
    background: ${Ni};
  }

  :host([disabled]) ${n} {
    background: ${Pi};
  }

  .control::placeholder {
    color: ${Rs};
  }

  :host(${r}:hover) .control::placeholder {
    color: ${Ls};
  }
`,zs=(e,t,n,r=":not([disabled]):not(:focus-within)")=>sn`
  :host {
    color: ${un.ButtonText};
  }

  ${n} {
    background: ${un.ButtonFace};
    border-color: ${un.ButtonText};
  }

  :host(${r}:hover) ${n},
  :host(:not([disabled]):focus-within) ${n} {
    border-color: ${un.Highlight};
  }

  :host([disabled]) ${n} {
    opacity: 1;
    background: ${un.ButtonFace};
    border-color: ${un.GrayText};
  }

  .control::placeholder,
  :host(${r}:hover) .control::placeholder {
    color: ${un.CanvasText};
  }

  :host(:not([disabled]):focus) ${n} {
    ${ws}
    outline-color: ${un.Highlight};
  }

  :host([disabled]) {
    opacity: 1;
    color: ${un.GrayText};
  }

  :host([disabled]) ::placeholder,
  :host([disabled]) ::-webkit-input-placeholder {
    color: ${un.GrayText};
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
                ${rn({property:"defaultSlottedNodes",filter:Ds})}
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
`,styles:(e,t)=>sn`
    ${dn("inline-block")}

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
      padding: 0 calc(${gr} * 2px + 1px);
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
  `.withBehaviors(xs("outline",Ns(0,0,js)),xs("filled",Ms(0,0,js)),mn(zs(0,0,js))),shadowOptions:{delegatesFocus:!0}});class _s extends Re{}class Us extends(Xt(_s)){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}const Ws="none";class Gs extends Us{constructor(){super(...arguments),this.resize=Ws,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}validate(){super.validate(this.control)}}j([P({mode:"boolean"})],Gs.prototype,"readOnly",void 0),j([P],Gs.prototype,"resize",void 0),j([P({mode:"boolean"})],Gs.prototype,"autofocus",void 0),j([P({attribute:"form"})],Gs.prototype,"formId",void 0),j([P],Gs.prototype,"list",void 0),j([P({converter:R})],Gs.prototype,"maxlength",void 0),j([P({converter:R})],Gs.prototype,"minlength",void 0),j([P],Gs.prototype,"name",void 0),j([P],Gs.prototype,"placeholder",void 0),j([P({converter:R,mode:"fromView"})],Gs.prototype,"cols",void 0),j([P({converter:R,mode:"fromView"})],Gs.prototype,"rows",void 0),j([P({mode:"boolean"})],Gs.prototype,"spellcheck",void 0),j([b],Gs.prototype,"defaultSlottedNodes",void 0),_t(Gs,Ss);const Ys=".control";class Qs extends Gs{appearanceChanged(e,t){e!==t&&(this.classList.add(t),this.classList.remove(e))}connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="outline")}}ut([P],Qs.prototype,"appearance",void 0);const Xs=Qs.compose({baseName:"text-area",baseClass:Gs,template:(e,t)=>Nt`
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
            <slot ${rn("defaultSlottedNodes")}></slot>
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
`,styles:(e,t)=>sn`
    ${dn("inline-flex")}

    ${Ps(0,0,Ys)}

    ${Is()}

    :host {
      flex-direction: column;
      vertical-align: bottom;
    }

    .control {
      height: calc((${ms} * 2) * 1px);
      padding: calc(${gr} * 1.5px) calc(${gr} * 2px + 1px);
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
  `.withBehaviors(xs("outline",Ns(0,0,Ys)),xs("filled",Ms(0,0,Ys)),mn(zs(0,0,Ys))),shadowOptions:{delegatesFocus:!0}});class Ks extends Re{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,t=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?t:`${t} ${e}`}}}j([P({attribute:"fill"})],Ks.prototype,"fill",void 0),j([P({attribute:"color"})],Ks.prototype,"color",void 0),j([P({mode:"boolean"})],Ks.prototype,"circular",void 0);class Zs extends Ks{constructor(){super(...arguments),this.appearance="lightweight"}appearanceChanged(e,t){e!==t&&p.queueUpdate(()=>{this.classList.add(t),this.classList.remove(e)})}}ut([P({mode:"fromView"})],Zs.prototype,"appearance",void 0);const Js=Zs.compose({baseName:"badge",baseClass:Ks,template:(e,t)=>Nt`
    <template class="${e=>e.circular?"circular":""}">
        <div class="control" part="control" style="${e=>e.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`,styles:(e,t)=>sn`
    ${dn("inline-block")} :host {
      box-sizing: border-box;
      ${ys};
    }

    .control {
      border-radius: calc(${vr} * 1px);
      padding: calc(((${gr} * 0.5) - ${mr}) * 1px) calc((${gr} - ${mr}) * 1px);
      border: calc(${mr} * 1px) solid transparent;
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
      min-width: calc(${kr} - calc(${gr} * 1px));
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `});function ea(e){return e.purpose.trim().length>0&&e.outcomes.trim().length>0&&e.structure.trim().length>0&&e.timing.trim().length>0}function ta(){return new Promise((e,t)=>{const n=Office.context.mailbox.item;if(!n)return void t(new Error("No active item"));let r=null,o=null,i=0;const s=()=>{if(i++,2===i)if(r&&o){const t=o.getTime()-r.getTime(),n=Math.round(t/6e4);e(n)}else e(0)};n.start.getAsync(e=>{e.status===Office.AsyncResultStatus.Succeeded&&(r=e.value),s()}),n.end.getAsync(e=>{e.status===Office.AsyncResultStatus.Succeeded&&(o=e.value),s()})})}function na(e){return e.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0})}var ra=n(72),oa=n.n(ra),ia=n(825),sa=n.n(ia),aa=n(659),la=n.n(aa),ca=n(56),ua=n.n(ca),ha=n(540),da=n.n(ha),fa=n(113),pa=n.n(fa),ga=n(942),va={};let ma,ba,ya,wa,Aa,xa,Ca,$a,Ea,ka,Fa,Va;async function Ba(){try{const n=0===(e=await new Promise((e,t)=>{const n=Office.context.mailbox.item;if(!n)return void t(new Error("No active item"));let r=0,o=0,i=0;const s=()=>{i++,2===i&&e(r+o)};n.requiredAttendees.getAsync(e=>{e.status===Office.AsyncResultStatus.Succeeded&&(r=e.value.length),s()}),n.optionalAttendees.getAsync(e=>{e.status===Office.AsyncResultStatus.Succeeded&&(o=e.value.length),s()})}))?{message:"No attendees yet",level:"warning"}:e<=5?{message:`${e} attendee${1!==e?"s":""} — Great! Small groups make decisions faster`,level:"success"}:e<=7?{message:`${e} attendees — Good size for productive discussion`,level:"success"}:e<=10?{message:`${e} attendees — Consider: Does everyone need to be here?`,level:"warning"}:{message:`${e} attendees — Could this be an email? Large meetings often lack focus`,level:"error"};ba.textContent=n.message,ma.classList.remove("success","warning","error"),ma.classList.add(n.level);const r=(t=await ta())<=30?{message:`${t} min — Perfect length for focused discussion`,level:"success",showButtons:!1}:t<=45?{message:`${t} min — Good, just keep it tight`,level:"success",showButtons:!1}:t<=60?{message:`${t} min — Tip: Try 45 min with a tighter agenda`,level:"warning",showButtons:!0}:{message:`${t} min — Long meetings lose focus. Can you split this up?`,level:"error",showButtons:!0};ya.textContent=r.message,ya.classList.remove("success","warning","error"),ya.classList.add(r.level),r.showButtons?wa.classList.remove("hidden"):wa.classList.add("hidden"),await async function(){try{const e=await new Promise((e,t)=>{const n=Office.context.mailbox.item;if(!n)return void t(new Error("No active item"));let r=null,o=null,i=0;const s=()=>{i++,2===i&&(r&&o?e({start:r,end:o}):t(new Error("Could not get meeting times")))};n.start.getAsync(e=>{e.status===Office.AsyncResultStatus.Succeeded&&(r=e.value),s()}),n.end.getAsync(e=>{e.status===Office.AsyncResultStatus.Succeeded&&(o=e.value),s()})}),t=await ta(),n=`${na(e.start)} - ${na(e.end)} (${t} min)`;ka.value&&!ka.value.includes(" - ")||(ka.value=n)}catch(e){console.error("Error updating timing field:",e)}}()}catch(e){console.error("Error refreshing meeting info:",e),ba.textContent="Unable to load",ya.textContent="Unable to load"}var e,t}async function Sa(e){try{await(t=e,new Promise((e,n)=>{const r=Office.context.mailbox.item;r?r.start.getAsync(o=>{if(o.status===Office.AsyncResultStatus.Failed)return void n(o.error);const i=o.value,s=new Date(i.getTime()+60*t*1e3);r.end.setAsync(s,t=>{t.status===Office.AsyncResultStatus.Succeeded?e():n(t.error)})}):n(new Error("No active item"))})),La(`Duration set to ${e} minutes`,"success"),await Ba()}catch(e){console.error("Error setting duration:",e),La("Failed to update duration","error")}var t}function Da(){const e={purpose:Ca.value,outcomes:$a.value,structure:Ea.value,timing:ka.value,isComplete:!1,lastUpdated:(new Date).toISOString()};return e.isComplete=ea(e),e}async function Ta(e=!1){try{const t=Da();await function(e){return new Promise((t,n)=>{Office.context.mailbox.item?.loadCustomPropertiesAsync(r=>{if(r.status===Office.AsyncResultStatus.Failed)return void n(r.error);const o=r.value;o.set("postData",JSON.stringify(e)),o.set("postComplete",String(e.isComplete)),o.saveAsync(e=>{e.status===Office.AsyncResultStatus.Succeeded?t():n(e.error)})})})}(t),function(){const e=function(e){return{purpose:e.purpose.trim().length>0,outcomes:e.outcomes.trim().length>0,structure:e.structure.trim().length>0,timing:e.timing.trim().length>0}}(Da());Oa(Ca,e.purpose),Oa($a,e.outcomes),Oa(Ea,e.structure),Oa(ka,e.timing)}(),ea(t)?await async function(e,t){return new Promise(n=>{const r=function(e){const t=e.outcomes.split("\n").filter(e=>e.trim()).map(e=>`<li>${Ra(e.replace(/^[-*•]\s*/,""))}</li>`).join(""),n=e.structure.split("\n").filter(e=>e.trim()).map(e=>`<li>${Ra(e.replace(/^\d+[.)]\s*/,""))}</li>`).join("");return`\n<div style="font-family: Segoe UI, sans-serif; padding: 20px; background: #f5f5f5; border-radius: 8px; margin-bottom: 16px;">\n  <h2 style="color: #0078d4; margin-top: 0; margin-bottom: 8px;">📌 Meeting Overview</h2>\n  <p style="color: #605e5c; margin-top: 0; margin-bottom: 20px; font-style: italic;">This meeting uses the POST framework to keep discussions focused and productive.</p>\n\n  <h3 style="color: #323130; margin-bottom: 4px;">🎯 Purpose</h3>\n  <p style="color: #605e5c; margin-top: 0; margin-bottom: 4px; font-size: 12px;">Why we're meeting:</p>\n  <p style="margin-top: 0; margin-bottom: 16px;">${Ra(e.purpose)}</p>\n\n  <h3 style="color: #323130; margin-bottom: 4px;">✅ Outcomes</h3>\n  <p style="color: #605e5c; margin-top: 0; margin-bottom: 4px; font-size: 12px;">What we aim to achieve:</p>\n  <ul style="margin-top: 0; margin-bottom: 16px; padding-left: 20px;">\n    ${t||"<li>No outcomes specified</li>"}\n  </ul>\n\n  <h3 style="color: #323130; margin-bottom: 4px;">🗂 Structure</h3>\n  <p style="color: #605e5c; margin-top: 0; margin-bottom: 4px; font-size: 12px;">How the meeting will run:</p>\n  <ol style="margin-top: 0; margin-bottom: 16px; padding-left: 20px;">\n    ${n||"<li>No structure specified</li>"}\n  </ol>\n\n  <h3 style="color: #323130; margin-bottom: 4px;">⏰ Timing</h3>\n  <p style="margin-top: 0; margin-bottom: 0;">${Ra(e.timing)}</p>\n</div>`.trim()}(e);Office.context.mailbox.item?.body.getAsync(Office.CoercionType.Html,e=>{if(e.status===Office.AsyncResultStatus.Failed)return t||La("Failed to read meeting body","error"),void n();const o=e.value||"";o.includes("Meeting Overview")||o.includes("MEETING POST"),function(e,t=!1,n){Office.context.mailbox.item?.body.setAsync(e,{coercionType:Office.CoercionType.Html},e=>{e.status===Office.AsyncResultStatus.Succeeded?t||La("Saved and updated meeting body","success"):t||La("Failed to update meeting body","error"),n&&n()})}(r,t,n)})})}(t,e):e||La("Saved. Complete all fields to update meeting body.","info")}catch(t){console.error("Error saving:",t),e||La("Failed to save","error")}}function Oa(e,t){const n=e.value?.trim();n?t?(e.classList.add("valid"),e.classList.remove("invalid")):(e.classList.add("invalid"),e.classList.remove("valid")):e.classList.remove("valid","invalid")}function Ra(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}function La(e,t="info"){Va.textContent=e,Va.className=`status ${t}`,Va.classList.remove("hidden"),setTimeout(()=>{Va.classList.add("hidden")},3e3)}va.styleTagTransform=pa(),va.setAttributes=ua(),va.insert=la().bind(null,"head"),va.domAPI=sa(),va.insertStyleElement=da(),oa()(ga.A,va),ga.A&&ga.A.locals&&ga.A.locals,at.getOrCreate(undefined).withPrefix("fluent").register(ks(),qs(),Xs(),Js()),Office.onReady(async()=>{ma=document.getElementById("attendee-badge"),ba=document.getElementById("attendee-count"),ya=document.getElementById("duration-text"),wa=document.getElementById("duration-buttons"),Aa=document.getElementById("btn-30min"),xa=document.getElementById("btn-45min"),Ca=document.getElementById("purpose-field"),$a=document.getElementById("outcomes-field"),Ea=document.getElementById("structure-field"),ka=document.getElementById("timing-field"),Fa=document.getElementById("btn-save"),Va=document.getElementById("status-message"),function(){let e;Aa.addEventListener("click",()=>Sa(30)),xa.addEventListener("click",()=>Sa(45)),Fa.addEventListener("click",()=>Ta());const t=()=>{clearTimeout(e),e=window.setTimeout(()=>{Ta(!0)},1e3)};Ca.addEventListener("input",t),$a.addEventListener("input",t),Ea.addEventListener("input",t),ka.addEventListener("input",t)}(),Office.context.mailbox.item?.addHandlerAsync(Office.EventType.RecipientsChanged,()=>Ba()),Office.context.mailbox.item?.addHandlerAsync(Office.EventType.AppointmentTimeChanged,()=>Ba()),await Ba(),await async function(){try{const e=await new Promise((e,t)=>{Office.context.mailbox.item?.loadCustomPropertiesAsync(n=>{if(n.status===Office.AsyncResultStatus.Failed)return void t(n.error);const r=n.value.get("postData");if(r)try{e(JSON.parse(r))}catch{e(null)}else e(null)})});e&&(Ca.value=e.purpose,$a.value=e.outcomes,Ea.value=e.structure,e.timing&&(ka.value=e.timing))}catch(e){console.error("Error loading form data:",e)}}()})})();
//# sourceMappingURL=taskpane.js.map