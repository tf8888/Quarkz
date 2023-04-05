var t,e,n,i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s=t={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(e===setTimeout)return setTimeout(t,0);if((e===r||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:r}catch(t){e=r}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(t){n=o}}();var c,l=[],u=!1,h=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):h=-1,l.length&&f())}function f(){if(!u){var t=a(d);u=!0;for(var e=l.length;e;){for(c=l,l=[];++h<e;)c&&c[h].run();h=-1,e=l.length}c=null,u=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{return n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function m(){}s.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new p(t,e)),1!==l.length||u||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=m,s.addListener=m,s.once=m,s.off=m,s.removeListener=m,s.removeAllListeners=m,s.emit=m,s.prependListener=m,s.prependOnceListener=m,s.listeners=function(t){return[]},s.binding=function(t){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(t){throw new Error("process.chdir is not supported")},s.umask=function(){return 0};const g=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296==(64512&s)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++i)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},y={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const s=t[e],r=e+1<t.length,o=r?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,l=s>>2,u=(3&s)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,r||(h=64)),i.push(n[l],n[u],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(g(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(r>>10)),e[i++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const s=n[t.charAt(e++)],r=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==s||null==r||null==o||null==a)throw Error();const c=s<<2|r>>4;if(i.push(c),64!==o){const t=r<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},v=function(t){return function(t){const e=g(t);return y.encodeByteArray(e,!0)}(t).replace(/\./g,"")},_=function(t){try{return y.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const w=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==i)return i;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,b=()=>{try{return w()||(()=>{if(void 0===t||void 0===t.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&_(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},T=t=>{var e,n;return null===(n=null===(e=b())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},E=t=>{const e=T(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},k=()=>{var t;return null===(t=b())||void 0===t?void 0:t.config},I=t=>{var e;return null===(e=b())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[v(JSON.stringify({alg:"none",type:"JWT"})),v(JSON.stringify(r)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function x(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function N(){const t=S();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function R(){try{return"object"==typeof indexedDB}catch(t){return!1}}class q extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,q.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,L.prototype.create)}}class L{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],r=s?function(t,e){return t.replace(D,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new q(i,o,n)}}const D=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function O(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const n=t[s],r=e[s];if(P(n)&&P(r)){if(!O(n,r))return!1}else if(n!==r)return!1}for(const t of i)if(!n.includes(t))return!1;return!0}function P(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function F(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,i]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(i)}})),e}function V(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t,e){const n=new B(t,e);return n.subscribe.bind(n)}class B{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=H),void 0===i.error&&(i.error=H),void 0===i.complete&&(i.complete=H);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function H(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(t){return t&&t._delegate?t._delegate:t}class K{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new A;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:G})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=G){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=G){return this.instances.has(t)}getOptions(t=G){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===G?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t=G){return this.component?this.component.multipleInstances?t:G:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Q{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new W(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=[];var Y,J;(J=Y||(Y={}))[J.DEBUG=0]="DEBUG",J[J.VERBOSE=1]="VERBOSE",J[J.INFO=2]="INFO",J[J.WARN=3]="WARN",J[J.ERROR=4]="ERROR",J[J.SILENT=5]="SILENT";const Z={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},tt=Y.INFO,et={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},nt=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),s=et[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${i}]  ${t.name}:`,...n)};class it{constructor(t){this.name=t,this._logLevel=tt,this._logHandler=nt,this._userLogHandler=null,X.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?Z[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const st=(t,e)=>e.some((e=>t instanceof e));let rt,ot;const at=new WeakMap,ct=new WeakMap,lt=new WeakMap,ut=new WeakMap,ht=new WeakMap;let dt={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return ct.get(t);if("objectStoreNames"===e)return t.objectStoreNames||lt.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mt(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function ft(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ot||(ot=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(gt(this),e),mt(at.get(this))}:function(...e){return mt(t.apply(gt(this),e))}:function(e,...n){const i=t.call(gt(this),e,...n);return lt.set(i,e.sort?e.sort():[e]),mt(i)}}function pt(t){return"function"==typeof t?ft(t):(t instanceof IDBTransaction&&function(t){if(ct.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",r),t.removeEventListener("abort",r)},s=()=>{e(),i()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",r),t.addEventListener("abort",r)}));ct.set(t,e)}(t),st(t,rt||(rt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,dt):t)}function mt(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",r)},s=()=>{e(mt(t.result)),i()},r=()=>{n(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&at.set(e,t)})).catch((()=>{})),ht.set(e,t),e}(t);if(ut.has(t))return ut.get(t);const e=pt(t);return e!==t&&(ut.set(t,e),ht.set(e,t)),e}const gt=t=>ht.get(t);function yt(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=mt(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(mt(o.result),t.oldVersion,t.newVersion,mt(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{r&&t.addEventListener("close",(()=>r())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const vt=["get","getKey","getAll","getAllKeys","count"],_t=["put","add","delete","clear"],wt=new Map;function bt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(wt.get(e))return wt.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=_t.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!vt.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&r.done]))[0]};return wt.set(e,r),r}dt=(t=>({...t,get:(e,n,i)=>bt(e,n)||t.get(e,n,i),has:(e,n)=>!!bt(e,n)||t.has(e,n)}))(dt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const Et="@firebase/app",kt="0.9.3",It=new it("@firebase/app"),At="[DEFAULT]",Ct={[Et]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},St=new Map,xt=new Map;function Nt(t,e){try{t.container.addComponent(e)}catch(n){It.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rt(t){const e=t.name;if(xt.has(e))return It.debug(`There were multiple attempts to register component ${e}.`),!1;xt.set(e,t);for(const e of St.values())Nt(e,t);return!0}function qt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Lt=new L("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Dt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new K("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Lt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt="9.17.1";function Ot(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:At,automaticDataCollectionEnabled:!1},e),s=i.name;if("string"!=typeof s||!s)throw Lt.create("bad-app-name",{appName:String(s)});if(n||(n=k()),!n)throw Lt.create("no-options");const r=St.get(s);if(r){if(O(n,r.options)&&O(i,r.config))return r;throw Lt.create("duplicate-app",{appName:s})}const o=new Q(s);for(const t of xt.values())o.addComponent(t);const a=new Dt(n,i,o);return St.set(s,a),a}function Pt(t=At){const e=St.get(t);if(!e&&t===At)return Ot();if(!e)throw Lt.create("no-app",{appName:t});return e}function Ut(t,e,n){var i;let s=null!==(i=Ct[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${s}" with version "${e}":`];return r&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void It.warn(t.join(" "))}Rt(new K(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ft="firebase-heartbeat-database",Vt=1,jt="firebase-heartbeat-store";let Bt=null;function $t(){return Bt||(Bt=yt(Ft,Vt,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(jt)}}).catch((t=>{throw Lt.create("idb-open",{originalErrorMessage:t.message})}))),Bt}async function Ht(t,e){try{const n=(await $t()).transaction(jt,"readwrite"),i=n.objectStore(jt);return await i.put(e,zt(t)),n.done}catch(t){if(t instanceof q)It.warn(t.message);else{const e=Lt.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});It.warn(e.message)}}}function zt(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=1024;class Gt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Qt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Wt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Wt(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=Kt){const n=[];let i=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),Xt(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Xt(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=v(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Wt(){return(new Date).toISOString().substring(0,10)}class Qt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!R()&&new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return(await $t()).transaction(jt).objectStore(jt).get(zt(t))}catch(t){if(t instanceof q)It.warn(t.message);else{const e=Lt.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});It.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ht(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ht(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Xt(t){return v(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Yt;Yt="",Rt(new K("platform-logger",(t=>new Tt(t)),"PRIVATE")),Rt(new K("heartbeat",(t=>new Gt(t)),"PRIVATE")),Ut(Et,kt,Yt),Ut(Et,kt,"esm2017"),Ut("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ut("firebase","9.17.1","app");function Jt(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]])}return n}Object.create;Object.create;function Zt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const te=Zt,ee=new L("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ne=new it("@firebase/auth");function ie(t,...e){ne.logLevel<=Y.ERROR&&ne.error(`Auth (${Mt}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t,...e){throw ae(t,...e)}function re(t,...e){return ae(t,...e)}function oe(t,e,n){const i=Object.assign(Object.assign({},te()),{[e]:n});return new L("auth","Firebase",i).create(e,{appName:t.name})}function ae(t,...e){if("string"!=typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return ee.create(t,...e)}function ce(t,e,...n){if(!t)throw ae(e,...n)}function le(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ie(e),new Error(e)}function ue(t,e){t||le(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=new Map;function de(t){ue(t instanceof Function,"Expected a class definition");let e=he.get(t);return e?(ue(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,he.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fe(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function pe(){return"http:"===me()||"https:"===me()}function me(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(pe()||x()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye{constructor(t,e){this.shortDelay=t,this.longDelay=e,ue(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(S())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return ge()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(t,e){ue(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void le("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void le("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void le("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},be=new ye(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ee(t,e,n,i,s={}){return ke(t,s,(async()=>{let s={},r={};i&&("GET"===e?r=i:s={body:JSON.stringify(i)});const o=U(Object.assign({key:t.config.apiKey},r)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),_e.fetch()(Ae(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))}))}async function ke(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},we),e);try{const e=new Ce(t),s=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const r=await s.json();if("needConfirmation"in r)throw Se(t,"account-exists-with-different-credential",r);if(s.ok&&!("errorMessage"in r))return r;{const e=s.ok?r.errorMessage:r.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Se(t,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw Se(t,"email-already-in-use",r);if("USER_DISABLED"===n)throw Se(t,"user-disabled",r);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw oe(t,a,o);se(t,a)}}catch(e){if(e instanceof q)throw e;se(t,"network-request-failed")}}async function Ie(t,e,n,i,s={}){const r=await Ee(t,e,n,i,s);return"mfaPendingCredential"in r&&se(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Ae(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?ve(t.config,s):`${t.config.apiScheme}://${s}`}class Ce{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(re(this.auth,"network-request-failed"))),be.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Se(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=re(t,e,i);return s.customData._tokenResponse=n,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xe(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t){return 1e3*Number(t)}function Re(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return ie("JWT malformed, contained fewer than 3 sections"),null;try{const t=_(n);return t?JSON.parse(t):(ie("Failed to decode base64 JWT payload"),null)}catch(t){return ie("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function qe(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof q&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class Le{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=xe(this.lastLoginAt),this.creationTime=xe(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me(t){var e;const n=t.auth,i=await t.getIdToken(),s=await qe(t,async function(t,e){return Ee(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:i}));ce(null==s?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=(null===(e=r.providerUserInfo)||void 0===e?void 0:e.length)?r.providerUserInfo.map((t=>{var{providerId:e}=t,n=Jt(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=t.providerData,l=o,[...c.filter((t=>!l.some((e=>e.providerId===t.providerId)))),...l]);var c,l;const u=t.isAnonymous,h=!(t.email&&r.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,f={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new De(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(t,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ce(t.idToken,"internal-error"),ce(void 0!==t.idToken,"internal-error"),ce(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Re(t);return ce(e,"internal-error"),ce(void 0!==e.exp,"internal-error"),ce(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return ce(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e){const n=await ke(t,{},(async()=>{const n=U({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,r=Ae(t,i,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",_e.fetch()(r,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:s}=e,r=new Oe;return n&&(ce("string"==typeof n,"internal-error",{appName:t}),r.refreshToken=n),i&&(ce("string"==typeof i,"internal-error",{appName:t}),r.accessToken=i),s&&(ce("number"==typeof s,"internal-error",{appName:t}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Oe,this.toJSON())}_performRefresh(){return le("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t,e){ce("string"==typeof t||void 0===t,"internal-error",{appName:e})}class Ue{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,s=Jt(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Le(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new De(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await qe(this,this.stsTokenManager.getToken(this.auth,t));return ce(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=z(t),i=await n.getIdToken(e),s=Re(i);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r="object"==typeof s.firebase?s.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:xe(Ne(s.auth_time)),issuedAtTime:xe(Ne(s.iat)),expirationTime:xe(Ne(s.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=z(t);await Me(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(ce(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Ue(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Me(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await qe(this,async function(t,e){return Ee(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,s,r,o,a,c,l;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(s=e.phoneNumber)&&void 0!==s?s:void 0,f=null!==(r=e.photoURL)&&void 0!==r?r:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(l=e.lastLoginAt)&&void 0!==l?l:void 0,{uid:v,emailVerified:_,isAnonymous:w,providerData:b,stsTokenManager:T}=e;ce(v&&T,t,"internal-error");const E=Oe.fromJSON(this.name,T);ce("string"==typeof v,t,"internal-error"),Pe(u,t.name),Pe(h,t.name),ce("boolean"==typeof _,t,"internal-error"),ce("boolean"==typeof w,t,"internal-error"),Pe(d,t.name),Pe(f,t.name),Pe(p,t.name),Pe(m,t.name),Pe(g,t.name),Pe(y,t.name);const k=new Ue({uid:v,auth:t,email:h,emailVerified:_,displayName:u,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:E,createdAt:g,lastLoginAt:y});return b&&Array.isArray(b)&&(k.providerData=b.map((t=>Object.assign({},t)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(t,e,n=!1){const i=new Oe;i.updateFromServerResponse(e);const s=new Ue({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await Me(s),s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Fe.type="NONE";const Ve=Fe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(t,e,n){return`firebase:${t}:${e}:${n}`}class Be{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=je(this.userKey,i.apiKey,s),this.fullPersistenceKey=je("persistence",i.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ue._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new Be(de(Ve),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let s=i[0]||de(Ve);const r=je(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(r);if(e){const i=Ue._fromJSON(t,e);n!==s&&(o=i),s=n;break}}catch(t){}const a=i.filter((t=>t._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==s)try{await t._remove(r)}catch(t){}}))),new Be(s,t,n)):new Be(s,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ge(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(He(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qe(e))return"Blackberry";if(Xe(e))return"Webos";if(ze(e))return"Safari";if((e.includes("chrome/")||Ke(e))&&!e.includes("edge/"))return"Chrome";if(We(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function He(t=S()){return/firefox\//i.test(t)}function ze(t=S()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ke(t=S()){return/crios\//i.test(t)}function Ge(t=S()){return/iemobile/i.test(t)}function We(t=S()){return/android/i.test(t)}function Qe(t=S()){return/blackberry/i.test(t)}function Xe(t=S()){return/webos/i.test(t)}function Ye(t=S()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Je(){return N()&&10===document.documentMode}function Ze(t=S()){return Ye(t)||We(t)||Xe(t)||Qe(t)||/windows phone/i.test(t)||Ge(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tn(t,e=[]){let n;switch(t){case"Browser":n=$e(S());break;case"Worker":n=`${$e(S())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mt}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,i)=>{try{n(t(e))}catch(t){i(t)}}));n.onAbort=e,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(t){e.reverse();for(const t of e)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rn(this),this.idTokenSubscription=new rn(this),this.beforeStateQueue=new en(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ee,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=de(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Be.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,r=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==r||!(null==o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(t){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Me(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?z(t):null;return e&&ce(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&ce(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(de(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new L("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&de(t)||this._popupRedirectResolver;ce(e,this,"argument-error"),this.redirectPersistenceManager=await Be.create(this,[de(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const s="function"==typeof e?e:e.next.bind(e),r=this._isInitialized?Promise.resolve():this._initializationPromise;return ce(r,this,"internal-error"),r.then((()=>s(this.currentUser))),"function"==typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=tn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function sn(t){return z(t)}class rn{constructor(t){this.auth=t,this.observer=null,this.addObserver=j((t=>this.observer=t))}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function on(t,e,n){const i=sn(t);ce(i._canInitEmulator,i,"emulator-config-failed"),ce(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(null==n?void 0:n.disableWarnings),r=an(e),{host:o,port:a}=function(t){const e=an(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const t=s[1];return{host:t,port:cn(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:cn(e)}}}(e),c=null===a?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function an(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function cn(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class ln{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return le("not implemented")}_getIdTokenResponse(t){return le("not implemented")}_linkToIdToken(t,e){return le("not implemented")}_getReauthenticationResolver(t){return le("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function un(t,e){return Ee(t,"POST","/v1/accounts:update",e)}async function hn(t,e){return Ee(t,"POST","/v1/accounts:sendOobCode",Te(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dn extends ln{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new dn(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new dn(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return Ie(t,"POST","/v1/accounts:signInWithPassword",Te(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return Ie(t,"POST","/v1/accounts:signInWithEmailLink",Te(t,e))}(t,{email:this._email,oobCode:this._password});default:se(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return un(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return Ie(t,"POST","/v1/accounts:signInWithEmailLink",Te(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:se(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fn(t,e){return Ie(t,"POST","/v1/accounts:signInWithIdp",Te(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends ln{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new pn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):se("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,s=Jt(e,["providerId","signInMethod"]);if(!n||!i)return null;const r=new pn(n,i);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}_getIdTokenResponse(t){return fn(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,fn(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,fn(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=U(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gn extends ln{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new gn({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new gn({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return Ie(t,"POST","/v1/accounts:signInWithPhoneNumber",Te(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await Ie(t,"POST","/v1/accounts:signInWithPhoneNumber",Te(t,e));if(n.temporaryProof)throw Se(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return Ie(t,"POST","/v1/accounts:signInWithPhoneNumber",Te(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),mn)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:s}=t;return n||e||i||s?new gn({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:s}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(t){var e,n,i,s,r,o;const a=F(V(t)),c=null!==(e=a.apiKey)&&void 0!==e?e:null,l=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);ce(c&&l&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=l,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(r=a.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(t){const e=function(t){const e=F(V(t)).link,n=e?F(V(e)).deep_link_id:null,i=F(V(t)).deep_link_id;return(i?F(V(i)).link:null)||i||n||e||t}(t);try{return new yn(e)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vn{constructor(){this.providerId=vn.PROVIDER_ID}static credential(t,e){return dn._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=yn.parseLink(e);return ce(n,"argument-error"),dn._fromEmailAndCode(t,n.code,n.tenantId)}}vn.PROVIDER_ID="password",vn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",vn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _n{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends _n{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bn extends wn{constructor(){super("facebook.com")}static credential(t){return pn._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return bn.credentialFromTaggedObject(t)}static credentialFromError(t){return bn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return bn.credential(t.oauthAccessToken)}catch(t){return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com",bn.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tn extends wn{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return pn._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Tn.credentialFromTaggedObject(t)}static credentialFromError(t){return Tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Tn.credential(e,n)}catch(t){return null}}}Tn.GOOGLE_SIGN_IN_METHOD="google.com",Tn.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class En extends wn{constructor(){super("github.com")}static credential(t){return pn._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return En.credentialFromTaggedObject(t)}static credentialFromError(t){return En.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return En.credential(t.oauthAccessToken)}catch(t){return null}}}En.GITHUB_SIGN_IN_METHOD="github.com",En.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kn extends wn{constructor(){super("twitter.com")}static credential(t,e){return pn._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return kn.credentialFromTaggedObject(t)}static credentialFromError(t){return kn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return kn.credential(e,n)}catch(t){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function In(t,e){return Ie(t,"POST","/v1/accounts:signUp",Te(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kn.TWITTER_SIGN_IN_METHOD="twitter.com",kn.PROVIDER_ID="twitter.com";class An{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const s=await Ue._fromIdTokenResponse(t,n,i),r=Cn(n);return new An({user:s,providerId:r,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=Cn(n);return new An({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function Cn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sn extends q{constructor(t,e,n,i){var s;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Sn.prototype),this.customData={appName:t.name,tenantId:null!==(s=t.tenantId)&&void 0!==s?s:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new Sn(t,e,n,i)}}function xn(t,e,n,i){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Sn._fromErrorAndOperation(t,n,e,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nn(t,e,n=!1){const i=await qe(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return An._forOperation(t,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Rn(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await qe(t,xn(i,s,e,t),n);ce(r.idToken,i,"internal-error");const o=Re(r.idToken);ce(o,i,"internal-error");const{sub:a}=o;return ce(t.uid===a,i,"user-mismatch"),An._forOperation(t,s,r)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&se(i,"user-mismatch"),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qn(t,e,n=!1){const i="signIn",s=await xn(t,i,e),r=await An._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function Ln(t,e){return qn(sn(t),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Dn(t,e,n){var i;ce((null===(i=n.url)||void 0===i?void 0:i.length)>0,t,"invalid-continue-uri"),ce(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(ce(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(ce(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mn(t,e,n){const i=z(t),s={requestType:"PASSWORD_RESET",email:e};n&&Dn(i,s,n),await async function(t,e){return hn(t,e)}(i,s)}async function On(t,e,n){const i=sn(t),s=await In(i,{returnSecureToken:!0,email:e,password:n}),r=await An._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(r.user),r}function Pn(t,e,n){return Ln(z(t),vn.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(t){return z(t).signOut()}new WeakMap;const Fn="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Fn,"1"),this.storage.removeItem(Fn),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends Vn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=S();return ze(t)||Ye(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=Ze(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},s=this.storage.getItem(n);Je()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,10):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}jn.type="LOCAL";const Bn=jn;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Vn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}$n.type="SESSION";const Hn=$n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zn{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new zn(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:s}=e.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map((async t=>t(e.origin,s))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kn(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zn.receivers=[];class Gn{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const c=Kn("",20);i.port1.start();const l=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(l),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(e.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qn(){return void 0!==Wn().WorkerGlobalScope&&"function"==typeof Wn().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Xn="firebaseLocalStorageDb",Yn=1,Jn="firebaseLocalStorage",Zn="fbase_key";class ti{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function ei(t,e){return t.transaction([Jn],e?"readwrite":"readonly").objectStore(Jn)}function ni(){const t=indexedDB.open(Xn,Yn);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Jn,{keyPath:Zn})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Jn)?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(Xn);return new ti(t).toPromise()}(),e(await ni()))}))}))}async function ii(t,e,n){const i=ei(t,!0).put({[Zn]:e,value:n});return new ti(i).toPromise()}function si(t,e){const n=ei(t,!0).delete(e);return new ti(n).toPromise()}class ri{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ni()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zn._getInstance(Qn()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Gn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ni();return await ii(t,Fn,"1"),await si(t,Fn),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>ii(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=ei(t,!1).get(e),i=await new ti(n).toPromise();return void 0===i?null:i.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>si(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=ei(t,!1).getAll();return new ti(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:s}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),e.push(i));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ri.type="LOCAL";const oi=ri;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(t){return new Promise(((e,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var s,r;i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=re("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==r?r:document).appendChild(i)}))}function ci(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ci("rcb"),new ye(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const li="recaptcha";async function ui(t,e,n){var i;const s=await n.verify();try{let r;if(ce("string"==typeof s,t,"argument-error"),ce(n.type===li,t,"argument-error"),r="string"==typeof e?{phoneNumber:e}:e,"session"in r){const e=r.session;if("phoneNumber"in r){ce("enroll"===e.type,t,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,e){return Ee(t,"POST","/v2/accounts/mfaEnrollment:start",Te(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{ce("signin"===e.type,t,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;ce(n,t,"missing-multi-factor-info");const o=await function(t,e){return Ee(t,"POST","/v2/accounts/mfaSignIn:start",Te(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return Ee(t,"POST","/v1/accounts:sendVerificationCode",Te(t,e))}(t,{phoneNumber:r.phoneNumber,recaptchaToken:s});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hi{constructor(t){this.providerId=hi.PROVIDER_ID,this.auth=sn(t)}verifyPhoneNumber(t,e){return ui(this.auth,t,z(e))}static credential(t,e){return gn._fromVerification(t,e)}static credentialFromResult(t){const e=t;return hi.credentialFromTaggedObject(e)}static credentialFromError(t){return hi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?gn._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function di(t,e){return e?de(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hi.PROVIDER_ID="phone",hi.PHONE_SIGN_IN_METHOD="phone";class fi extends ln{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return fn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return fn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return fn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function pi(t){return qn(t.auth,new fi(t),t.bypassAuthState)}function mi(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),Rn(n,new fi(t),t.bypassAuthState)}async function gi(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),Nn(n,new fi(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,e,n,i,s=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=t;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return pi;case"linkViaPopup":case"linkViaRedirect":return gi;case"reauthViaPopup":case"reauthViaRedirect":return mi;default:se(this.auth,"internal-error")}}resolve(t){ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new ye(2e3,1e4);class _i extends yi{constructor(t,e,n,i,s){super(t,e,i,s),this.provider=n,this.authWindow=null,this.pollId=null,_i.currentPopupAction&&_i.currentPopupAction.cancel(),_i.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ce(t,this.auth,"internal-error"),t}async onExecution(){ue(1===this.filter.length,"Popup operations only handle one event");const t=Kn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(re(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(re(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_i.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(re(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,vi.get())};t()}}_i.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wi="pendingRedirect",bi=new Map;class Ti extends yi{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=bi.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=Ii(e),i=ki(t);if(!await i._isAvailable())return!1;const s="true"===await i._get(n);return await i._remove(n),s}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}bi.set(this.auth._key(),t)}return this.bypassAuthState||bi.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Ei(t,e){bi.set(t._key(),e)}function ki(t){return de(t._redirectPersistence)}function Ii(t){return je(wi,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(t,e,n=!1){const i=sn(t),s=di(i,e),r=new Ti(i,s,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}class Ci{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xi(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!xi(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(re(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Si(t))}saveEventToCache(t){this.cachedEventUids.add(Si(t)),this.lastProcessedEventTime=Date.now()}}function Si(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function xi({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ni=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ri=/^https?/;async function qi(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return Ee(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Li(t))return}catch(t){}se(t,"unauthorized-domain")}function Li(t){const e=fe(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return""===s.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!Ri.test(n))return!1;if(Ni.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=new ye(3e4,6e4);function Mi(){const t=Wn().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let Oi=null;function Pi(t){return Oi=Oi||function(t){return new Promise(((e,n)=>{var i,s,r;function o(){Mi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mi(),n(re(t,"network-request-failed"))},timeout:Di.get()})}if(null===(s=null===(i=Wn().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)e(gapi.iframes.getContext());else{if(!(null===(r=Wn().gapi)||void 0===r?void 0:r.load)){const e=ci("iframefcb");return Wn()[e]=()=>{gapi.load?o():n(re(t,"network-request-failed"))},ai(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Oi=null,t}))}(t),Oi}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=new ye(5e3,15e3),Fi="__/auth/iframe",Vi="emulator/auth/iframe",ji={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bi=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $i(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ve(e,Vi):`https://${t.config.authDomain}/${Fi}`,i={apiKey:e.apiKey,appName:t.name,v:Mt},s=Bi.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${U(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zi=500,Ki=600,Gi="_blank",Wi="http://localhost";class Qi{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Xi(t,e,n,i=zi,s=Ki){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Hi),{width:i.toString(),height:s.toString(),top:r,left:o}),l=S().toLowerCase();n&&(a=Ke(l)?Gi:n),He(l)&&(e=e||Wi,c.scrollbars="yes");const u=Object.entries(c).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=S()){var e;return Ye(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(l)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e||"",a),new Qi(null);const h=window.open(e||"",a,u);ce(h,t,"popup-blocked");try{h.focus()}catch(t){}return new Qi(h)}const Yi="__/auth/handler",Ji="emulator/auth/handler";function Zi(t,e,n,i,s,r){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Mt,eventId:s};if(e instanceof _n){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",M(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(r||{}))o[t]=e}if(e instanceof wn){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];return`${function({config:t}){return t.emulator?ve(t,Ji):`https://${t.authDomain}/${Yi}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${U(a).slice(1)}`}const ts="webStorageSupport";const es=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hn,this._completeRedirectFn=Ai,this._overrideRedirectResult=Ei}async _openPopup(t,e,n,i){var s;ue(null===(s=this.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return Xi(t,Zi(t,e,n,fe(),i),Kn())}async _openRedirect(t,e,n,i){var s;return await this._originValidation(t),s=Zi(t,e,n,fe(),i),Wn().location.href=s,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(ue(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await async function(t){const e=await Pi(t),n=Wn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:$i(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ji,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const s=re(t,"network-request-failed"),r=Wn().setTimeout((()=>{i(s)}),Ui.get());function o(){Wn().clearTimeout(r),n(e)}e.ping(o).then(o,(()=>{i(s)}))}))))}(t),n=new Ci(t);return e.register("authEvent",(e=>{ce(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(ts,{type:ts},(n=>{var i;const s=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i[ts];void 0!==s&&e(!!s),se(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=qi(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Ze()||ze()||Ye()}};var ns="@firebase/auth",is="0.21.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ss{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const rs=I("authIdTokenMaxAge")||300;let os=null;const as=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>rs)return;const s=null==n?void 0:n.token;os!==s&&(os=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function cs(t=Pt()){const e=qt(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=qt(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(O(n.getOptions(),null!=e?e:{}))return t;se(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:es,persistence:[oi,Bn,Hn]}),i=I("authTokenSyncURL");if(i){const t=as(i);!function(t,e,n){z(t).beforeAuthStateChanged(e,n)}(n,t,(()=>t(n.currentUser))),function(t,e,n,i){z(t).onIdTokenChanged(e,n,i)}(n,(e=>t(e)))}const s=T("auth");return s&&on(n,`http://${s}`),n}var ls;ls="Browser",Rt(new K("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:r}=n.options;return((t,n)=>{ce(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),ce(!(null==r?void 0:r.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:r,clientPlatform:ls,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tn(ls)},o=new nn(t,n,i);return function(t,e){const n=(null==e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(de);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null==e?void 0:e.popupRedirectResolver)}(o,e),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),Rt(new K("auth-internal",(t=>(t=>new ss(t))(sn(t.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Ut(ns,is,function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(ls)),Ut(ns,is,"esm2017");var us,hs="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==i?i:"undefined"!=typeof self?self:{},ds={},fs=fs||{},ps=hs||self;function ms(){}function gs(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function ys(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var vs="closure_uid_"+(1e9*Math.random()>>>0),_s=0;function ws(t,e,n){return t.call.apply(t.bind,arguments)}function bs(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Ts(t,e,n){return(Ts=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ws:bs).apply(null,arguments)}function Es(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function ks(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)}}function Is(){this.s=this.s,this.o=this.o}Is.prototype.s=!1,Is.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,vs)&&t[vs]||(t[vs]=++_s))},Is.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const As=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Cs(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Ss(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(gs(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let s=0;s<i;s++)t[e+s]=n[s]}else t.push(n)}}function xs(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}xs.prototype.h=function(){this.defaultPrevented=!0};var Ns=function(){if(!ps.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ps.addEventListener("test",ms,e),ps.removeEventListener("test",ms,e)}catch(t){}return t}();function Rs(t){return/^[\s\xa0]*$/.test(t)}var qs=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ls(t,e){return t<e?-1:t>e?1:0}function Ds(){var t=ps.navigator;return t&&(t=t.userAgent)?t:""}function Ms(t){return-1!=Ds().indexOf(t)}function Os(t){return Os[" "](t),t}Os[" "]=ms;var Ps,Us,Fs=Ms("Opera"),Vs=Ms("Trident")||Ms("MSIE"),js=Ms("Edge"),Bs=js||Vs,$s=Ms("Gecko")&&!(-1!=Ds().toLowerCase().indexOf("webkit")&&!Ms("Edge"))&&!(Ms("Trident")||Ms("MSIE"))&&!Ms("Edge"),Hs=-1!=Ds().toLowerCase().indexOf("webkit")&&!Ms("Edge");function zs(){var t=ps.document;return t?t.documentMode:void 0}t:{var Ks="",Gs=(Us=Ds(),$s?/rv:([^\);]+)(\)|;)/.exec(Us):js?/Edge\/([\d\.]+)/.exec(Us):Vs?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Us):Hs?/WebKit\/(\S+)/.exec(Us):Fs?/(?:Version)[ \/]?(\S+)/.exec(Us):void 0);if(Gs&&(Ks=Gs?Gs[1]:""),Vs){var Ws=zs();if(null!=Ws&&Ws>parseFloat(Ks)){Ps=String(Ws);break t}}Ps=Ks}var Qs,Xs={};function Ys(){return function(t){var e=Xs;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=qs(String(Ps)).split("."),n=qs("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;t=Ls(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||Ls(0==s[2].length,0==r[2].length)||Ls(s[2],r[2]),s=s[3],r=r[3]}while(0==t)}return 0<=t}))}if(ps.document&&Vs){var Js=zs();Qs=Js||(parseInt(Ps,10)||void 0)}else Qs=void 0;var Zs=Qs;function tr(t,e){if(xs.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($s){t:{try{Os(e.nodeName);var s=!0;break t}catch(t){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:er[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&tr.X.h.call(this)}}ks(tr,xs);var er={2:"touch",3:"pen",4:"mouse"};tr.prototype.h=function(){tr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var nr="closure_listenable_"+(1e6*Math.random()|0),ir=0;function sr(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++ir,this.ba=this.ea=!1}function rr(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function or(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function ar(t){const e={};for(const n in t)e[n]=t[n];return e}const cr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function lr(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<cr.length;e++)n=cr[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function ur(t){this.src=t,this.g={},this.h=0}function hr(t,e){var n=e.type;if(n in t.g){var i,s=t.g[n],r=As(s,e);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(rr(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function dr(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}ur.prototype.add=function(t,e,n,i,s){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=dr(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new sr(e,this.src,r,!!i,s)).ea=n,t.push(e)),e};var fr="closure_lm_"+(1e6*Math.random()|0),pr={};function mr(t,e,n,i,s){if(i&&i.once)return yr(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)mr(t,e[r],n,i,s);return null}return n=kr(n),t&&t[nr]?t.N(e,n,ys(i)?!!i.capture:!!i,s):gr(t,e,n,!1,i,s)}function gr(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=ys(s)?!!s.capture:!!s,a=Tr(t);if(a||(t[fr]=a=new ur(t)),(n=a.add(e,n,i,o,r)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=br;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Ns||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(wr(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function yr(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)yr(t,e[r],n,i,s);return null}return n=kr(n),t&&t[nr]?t.O(e,n,ys(i)?!!i.capture:!!i,s):gr(t,e,n,!0,i,s)}function vr(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)vr(t,e[r],n,i,s);else i=ys(i)?!!i.capture:!!i,n=kr(n),t&&t[nr]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=dr(r=t.g[e],n,i,s))&&(rr(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Tr(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dr(e,n,i,s)),(n=-1<t?e[t]:null)&&_r(n))}function _r(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[nr])hr(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(wr(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Tr(e))?(hr(n,t),0==n.h&&(n.src=null,e[fr]=null)):rr(t)}}}function wr(t){return t in pr?pr[t]:pr[t]="on"+t}function br(t,e){if(t.ba)t=!0;else{e=new tr(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&_r(t),t=n.call(i,e)}return t}function Tr(t){return(t=t[fr])instanceof ur?t:null}var Er="__closure_events_fn_"+(1e9*Math.random()>>>0);function kr(t){return"function"==typeof t?t:(t[Er]||(t[Er]=function(e){return t.handleEvent(e)}),t[Er])}function Ir(){Is.call(this),this.i=new ur(this),this.P=this,this.I=null}function Ar(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new xs(e,t);else if(e instanceof xs)e.target=e.target||t;else{var s=e;lr(e=new xs(i,t),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Cr(o,i,!0,e)&&s}if(s=Cr(o=e.g=t,i,!0,e)&&s,s=Cr(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)s=Cr(o=e.g=n[r],i,!1,e)&&s}function Cr(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&hr(t.i,o),s=!1!==a.call(c,i)&&s}}return s&&!i.defaultPrevented}ks(Ir,Is),Ir.prototype[nr]=!0,Ir.prototype.removeEventListener=function(t,e,n,i){vr(this,t,e,n,i)},Ir.prototype.M=function(){if(Ir.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)rr(n[i]);delete e.g[t],e.h--}}this.I=null},Ir.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Ir.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var Sr=ps.JSON.stringify;function xr(){var t=Or;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Nr,Rr=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new qr),(t=>t.reset()));class qr{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Lr(t){ps.setTimeout((()=>{throw t}),0)}function Dr(t,e){Nr||function(){var t=ps.Promise.resolve(void 0);Nr=function(){t.then(Pr)}}(),Mr||(Nr(),Mr=!0),Or.add(t,e)}var Mr=!1,Or=new class{constructor(){this.h=this.g=null}add(t,e){const n=Rr.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function Pr(){for(var t;t=xr();){try{t.h.call(t.g)}catch(t){Lr(t)}var e=Rr;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Mr=!1}function Ur(t,e){Ir.call(this),this.h=t||1,this.g=e||ps,this.j=Ts(this.lb,this),this.l=Date.now()}function Fr(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Vr(t,e,n){if("function"==typeof t)n&&(t=Ts(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Ts(t.handleEvent,t)}return 2147483647<Number(e)?-1:ps.setTimeout(t,e||0)}function jr(t){t.g=Vr((()=>{t.g=null,t.i&&(t.i=!1,jr(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}ks(Ur,Ir),(us=Ur.prototype).ca=!1,us.R=null,us.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ar(this,"tick"),this.ca&&(Fr(this),this.start()))}},us.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},us.M=function(){Ur.X.M.call(this),Fr(this),delete this.g};class Br extends Is{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:jr(this)}M(){super.M(),this.g&&(ps.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $r(t){Is.call(this),this.h=t,this.g={}}ks($r,Is);var Hr=[];function zr(t,e,n,i){Array.isArray(n)||(n&&(Hr[0]=n.toString()),n=Hr);for(var s=0;s<n.length;s++){var r=mr(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Kr(t){or(t.g,(function(t,e){this.g.hasOwnProperty(e)&&_r(t)}),t),t.g={}}function Gr(){this.g=!0}function Wr(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return Sr(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}$r.prototype.M=function(){$r.X.M.call(this),Kr(this)},$r.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Gr.prototype.Aa=function(){this.g=!1},Gr.prototype.info=function(){};var Qr={},Xr=null;function Yr(){return Xr=Xr||new Ir}function Jr(t){xs.call(this,Qr.Pa,t)}function Zr(t){const e=Yr();Ar(e,new Jr(e))}function to(t,e){xs.call(this,Qr.STAT_EVENT,t),this.stat=e}function eo(t){const e=Yr();Ar(e,new to(e,t))}function no(t,e){xs.call(this,Qr.Qa,t),this.size=e}function io(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return ps.setTimeout((function(){t()}),e)}Qr.Pa="serverreachability",ks(Jr,xs),Qr.STAT_EVENT="statevent",ks(to,xs),Qr.Qa="timingevent",ks(no,xs);var so={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ro={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function oo(){}function ao(t){return t.h||(t.h=t.i())}function co(){}oo.prototype.h=null;var lo,uo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ho(){xs.call(this,"d")}function fo(){xs.call(this,"c")}function po(){}function mo(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new $r(this),this.O=yo,t=Bs?125:void 0,this.T=new Ur(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new go}function go(){this.i=null,this.g="",this.h=!1}ks(ho,xs),ks(fo,xs),ks(po,oo),po.prototype.g=function(){return new XMLHttpRequest},po.prototype.i=function(){return{}},lo=new po;var yo=45e3,vo={},_o={};function wo(t,e,n){t.K=1,t.v=Fo(Do(e)),t.s=n,t.P=!0,bo(t,null)}function bo(t,e){t.F=Date.now(),Io(t),t.A=Do(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),Jo(n.i,"t",i),t.C=0,n=t.l.H,t.h=new go,t.g=Ya(t.l,n?e:null,!t.s),0<t.N&&(t.L=new Br(Ts(t.La,t,t.g),t.N)),zr(t.S,t.g,"readystatechange",t.ib),e=t.H?ar(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Zr(),function(t,e,n,i,s,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function To(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function Eo(t,e,n){let i,s=!0;for(;!t.I&&t.C<n.length;){if(i=ko(t,n),i==_o){4==e&&(t.o=4,eo(14),s=!1),Wr(t.j,t.m,null,"[Incomplete Response]");break}if(i==vo){t.o=4,eo(15),Wr(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}Wr(t.j,t.m,i,null),No(t,i)}To(t)&&i!=_o&&i!=vo&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,eo(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),$a(e),e.K=!0,eo(11))):(Wr(t.j,t.m,n,"[Invalid Chunked Response]"),xo(t),So(t))}function ko(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?_o:(n=Number(e.substring(n,i)),isNaN(n)?vo:(i+=1)+n>e.length?_o:(e=e.substr(i,n),t.C=i+n,e))}function Io(t){t.V=Date.now()+t.O,Ao(t,t.O)}function Ao(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=io(Ts(t.gb,t),e)}function Co(t){t.B&&(ps.clearTimeout(t.B),t.B=null)}function So(t){0==t.l.G||t.I||Ka(t.l,t)}function xo(t){Co(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Fr(t.T),Kr(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function No(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||sa(n.h,t)))if(!t.J&&sa(n.h,t)&&3==n.G){try{var i=n.Fa.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;za(n),Ma(n)}Ba(n),eo(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&0==n.A&&!n.v&&(n.v=io(Ts(n.cb,n),6e3));if(1>=ia(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else Wa(n,11)}else if((t.J||n.g==t)&&za(n),!Rs(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.T=l[0],l=l[1],2==n.G)if("c"==l[0]){n.I=l[1],n.ka=l[2];const e=l[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const s=l[4];null!=s&&(n.Ca=s,n.j.info("SVER="+n.Ca));const u=l[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.h;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(ra(r,r.h),r.h=null))}if(i.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.za=t,Uo(i.F,i.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((i=n).sa=Xa(i,i.H?i.ka:null,i.V),o.J){oa(i.h,o);var a=o,c=i.J;c&&a.setTimeout(c),a.B&&(Co(a),Io(a)),i.g=o}else ja(i);0<n.i.length&&Pa(n)}else"stop"!=l[0]&&"close"!=l[0]||Wa(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?Wa(n,7):Da(n):"noop"!=l[0]&&n.l&&n.l.wa(l),n.A=0)}Zr()}catch(t){}}function Ro(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(gs(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(gs(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(gs(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}(us=mo.prototype).setTimeout=function(t){this.O=t},us.ib=function(t){t=t.target;const e=this.L;e&&3==Sa(t)?e.l():this.La(t)},us.La=function(t){try{if(t==this.g)t:{const u=Sa(this.g);var e=this.g.Ea();this.g.aa();if(!(3>u)&&(3!=u||Bs||this.g&&(this.h.h||this.g.fa()||xa(this.g)))){this.I||4!=u||7==e||Zr(),Co(this);var n=this.g.aa();this.Y=n;e:if(To(this)){var i=xa(this.g);t="";var s=i.length,r=4==Sa(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){xo(this),So(this);var o="";break e}this.h.i=new ps.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,i,s,r,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Rs(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,eo(12),xo(this),So(this);break t}Wr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,No(this,n)}this.P?(Eo(this,u,o),Bs&&this.i&&3==u&&(zr(this.S,this.T,"tick",this.hb),this.T.start())):(Wr(this.j,this.m,o,null),No(this,o)),4==u&&xo(this),this.i&&!this.I&&(4==u?Ka(this.l,this):(this.i=!1,Io(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,eo(12)):(this.o=0,eo(13)),xo(this),So(this)}}}catch(t){}},us.hb=function(){if(this.g){var t=Sa(this.g),e=this.g.fa();this.C<e.length&&(Co(this),Eo(this,t,e),this.i&&4!=t&&Io(this))}},us.cancel=function(){this.I=!0,xo(this)},us.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Zr(),eo(17)),xo(this),this.o=2,So(this)):Ao(this,this.V-t)};var qo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Lo(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Lo){this.h=void 0!==e?e:t.h,Mo(this,t.j),this.s=t.s,this.g=t.g,Oo(this,t.m),this.l=t.l,e=t.i;var n=new Wo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Po(this,n),this.o=t.o}else t&&(n=String(t).match(qo))?(this.h=!!e,Mo(this,n[1]||"",!0),this.s=Vo(n[2]||""),this.g=Vo(n[3]||"",!0),Oo(this,n[4]),this.l=Vo(n[5]||"",!0),Po(this,n[6]||"",!0),this.o=Vo(n[7]||"")):(this.h=!!e,this.i=new Wo(null,this.h))}function Do(t){return new Lo(t)}function Mo(t,e,n){t.j=n?Vo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Oo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Po(t,e,n){e instanceof Wo?(t.i=e,function(t,e){e&&!t.j&&(Qo(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Xo(this,e),Jo(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=jo(e,Ko)),t.i=new Wo(e,t.h))}function Uo(t,e,n){t.i.set(e,n)}function Fo(t){return Uo(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Vo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function jo(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Bo),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Bo(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Lo.prototype.toString=function(){var t=[],e=this.j;e&&t.push(jo(e,$o,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(jo(e,$o,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(jo(n,"/"==n.charAt(0)?zo:Ho,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",jo(n,Go)),t.join("")};var $o=/[#\/\?@]/g,Ho=/[#\?:]/g,zo=/[#\?]/g,Ko=/[#\?@]/g,Go=/#/g;function Wo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Qo(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Xo(t,e){Qo(t),e=Zo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Yo(t,e){return Qo(t),e=Zo(t,e),t.g.has(e)}function Jo(t,e,n){Xo(t,e),0<n.length&&(t.i=null,t.g.set(Zo(t,e),Cs(n)),t.h+=n.length)}function Zo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(us=Wo.prototype).add=function(t,e){Qo(this),this.i=null,t=Zo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},us.forEach=function(t,e){Qo(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},us.oa=function(){Qo(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let t=0;t<s.length;t++)n.push(e[i])}return n},us.W=function(t){Qo(this);let e=[];if("string"==typeof t)Yo(this,t)&&(e=e.concat(this.g.get(Zo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},us.set=function(t,e){return Qo(this),this.i=null,Yo(this,t=Zo(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},us.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},us.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;""!==o[i]&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function ta(t){this.l=t||ea,ps.PerformanceNavigationTiming?t=0<(t=ps.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(ps.g&&ps.g.Ga&&ps.g.Ga()&&ps.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ea=10;function na(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ia(t){return t.h?1:t.g?t.g.size:0}function sa(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ra(t,e){t.g?t.g.add(e):t.h=e}function oa(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function aa(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Cs(t.i)}function ca(){}function la(){this.g=new ca}function ua(t,e,n){const i=n||"";try{Ro(t,(function(t,n){let s=t;ys(t)&&(s=Sr(t)),e.push(i+n+"="+encodeURIComponent(s))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function ha(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch(t){}}function da(t){this.l=t.ac||null,this.j=t.jb||!1}function fa(t,e){Ir.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=pa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ta.prototype.cancel=function(){if(this.i=aa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},ca.prototype.stringify=function(t){return ps.JSON.stringify(t,void 0)},ca.prototype.parse=function(t){return ps.JSON.parse(t,void 0)},ks(da,oo),da.prototype.g=function(){return new fa(this.l,this.j)},da.prototype.i=function(t){return function(){return t}}({}),ks(fa,Ir);var pa=0;function ma(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function ga(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ya(t)}function ya(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(us=fa.prototype).open=function(t,e){if(this.readyState!=pa)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ya(this)},us.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||ps).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},us.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ga(this)),this.readyState=pa},us.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ya(this)),this.g&&(this.readyState=3,ya(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==ps.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ma(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},us.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ga(this):ya(this),3==this.readyState&&ma(this)}},us.Va=function(t){this.g&&(this.response=this.responseText=t,ga(this))},us.Ua=function(t){this.g&&(this.response=t,ga(this))},us.ga=function(){this.g&&ga(this)},us.setRequestHeader=function(t,e){this.v.append(t,e)},us.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},us.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(fa.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var va=ps.JSON.parse;function _a(t){Ir.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=wa,this.K=this.L=!1}ks(_a,Ir);var wa="",ba=/^https?$/i,Ta=["POST","PUT"];function Ea(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ka(t),Aa(t)}function ka(t){t.D||(t.D=!0,Ar(t,"complete"),Ar(t,"error"))}function Ia(t){if(t.h&&void 0!==fs&&(!t.C[1]||4!=Sa(t)||2!=t.aa()))if(t.v&&4==Sa(t))Vr(t.Ha,0,t);else if(Ar(t,"readystatechange"),4==Sa(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var s=String(t.H).match(qo)[1]||null;if(!s&&ps.self&&ps.self.location){var r=ps.self.location.protocol;s=r.substr(0,r.length-1)}i=!ba.test(s?s.toLowerCase():"")}n=i}if(n)Ar(t,"complete"),Ar(t,"success");else{t.m=6;try{var o=2<Sa(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.aa()+"]",ka(t)}}finally{Aa(t)}}}function Aa(t,e){if(t.g){Ca(t);const n=t.g,i=t.C[0]?ms:null;t.g=null,t.C=null,e||Ar(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function Ca(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(ps.clearTimeout(t.A),t.A=null)}function Sa(t){return t.g?t.g.readyState:0}function xa(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case wa:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Na(t){let e="";return or(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Ra(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=Na(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Uo(t,e,n))}function qa(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function La(t){this.Ca=0,this.i=[],this.j=new Gr,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=qa("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=qa("baseRetryDelayMs",5e3,t),this.bb=qa("retryDelaySeedMs",1e4,t),this.$a=qa("forwardChannelMaxRetries",2,t),this.ta=qa("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new ta(t&&t.concurrentRequestLimit),this.Fa=new la,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Da(t){if(Oa(t),3==t.G){var e=t.U++,n=Do(t.F);Uo(n,"SID",t.I),Uo(n,"RID",e),Uo(n,"TYPE","terminate"),Fa(t,n),(e=new mo(t,t.j,e,void 0)).K=2,e.v=Fo(Do(n)),n=!1,ps.navigator&&ps.navigator.sendBeacon&&(n=ps.navigator.sendBeacon(e.v.toString(),"")),!n&&ps.Image&&((new Image).src=e.v,n=!0),n||(e.g=Ya(e.l,null),e.g.da(e.v)),e.F=Date.now(),Io(e)}Qa(t)}function Ma(t){t.g&&($a(t),t.g.cancel(),t.g=null)}function Oa(t){Ma(t),t.u&&(ps.clearTimeout(t.u),t.u=null),za(t),t.h.cancel(),t.m&&("number"==typeof t.m&&ps.clearTimeout(t.m),t.m=null)}function Pa(t){na(t.h)||t.m||(t.m=!0,Dr(t.Ja,t),t.C=0)}function Ua(t,e){var n;n=e?e.m:t.U++;const i=Do(t.F);Uo(i,"SID",t.I),Uo(i,"RID",n),Uo(i,"AID",t.T),Fa(t,i),t.o&&t.s&&Ra(i,t.o,t.s),n=new mo(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Va(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ra(t.h,n),wo(n,i,e)}function Fa(t,e){t.ia&&or(t.ia,(function(t,n){Uo(e,n,t)})),t.l&&Ro({},(function(t,n){Uo(e,n,t)}))}function Va(t,e,n){n=Math.min(t.i.length,n);var i=t.l?Ts(t.l.Ra,t.l,t):null;t:{var s=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),r=!1;else try{ua(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(r){i=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function ja(t){t.g||t.u||(t.Z=1,Dr(t.Ia,t),t.A=0)}function Ba(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=io(Ts(t.Ia,t),Ga(t,t.A)),t.A++,!0)}function $a(t){null!=t.B&&(ps.clearTimeout(t.B),t.B=null)}function Ha(t){t.g=new mo(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=Do(t.sa);Uo(e,"RID","rpc"),Uo(e,"SID",t.I),Uo(e,"CI",t.L?"0":"1"),Uo(e,"AID",t.T),Uo(e,"TYPE","xmlhttp"),Fa(t,e),t.o&&t.s&&Ra(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Fo(Do(e)),n.s=null,n.P=!0,bo(n,t)}function za(t){null!=t.v&&(ps.clearTimeout(t.v),t.v=null)}function Ka(t,e){var n=null;if(t.g==e){za(t),$a(t),t.g=null;var i=2}else{if(!sa(t.h,e))return;n=e.D,oa(t.h,e),i=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;Ar(i=Yr(),new no(i,n)),Pa(t)}else ja(t);else if(3==(s=e.o)||0==s&&0<t.pa||!(1==i&&function(t,e){return!(ia(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=io(Ts(t.Ja,t,e),Ga(t,t.C)),t.C++,0)))}(t,e)||2==i&&Ba(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:Wa(t,5);break;case 4:Wa(t,10);break;case 3:Wa(t,6);break;default:Wa(t,2)}}function Ga(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Wa(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var i=Ts(t.kb,t);n||(n=new Lo("//www.google.com/images/cleardot.gif"),ps.location&&"http"==ps.location.protocol||Mo(n,"https"),Fo(n)),function(t,e){const n=new Gr;if(ps.Image){const i=new Image;i.onload=Es(ha,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Es(ha,n,i,"TestLoadImage: error",!1,e),i.onabort=Es(ha,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Es(ha,n,i,"TestLoadImage: timeout",!1,e),ps.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else eo(2);t.G=0,t.l&&t.l.va(e),Qa(t),Oa(t)}function Qa(t){if(t.G=0,t.la=[],t.l){const e=aa(t.h);0==e.length&&0==t.i.length||(Ss(t.la,e),Ss(t.la,t.i),t.h.i.length=0,Cs(t.i),t.i.length=0),t.l.ua()}}function Xa(t,e,n){var i=n instanceof Lo?Do(n):new Lo(n,void 0);if(""!=i.g)e&&(i.g=e+"."+i.g),Oo(i,i.m);else{var s=ps.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new Lo(null,void 0);i&&Mo(r,i),e&&(r.g=e),s&&Oo(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&Uo(i,n,e),Uo(i,"VER",t.ma),Fa(t,i),i}function Ya(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new _a(new da({jb:!0})):new _a(t.ra)).Ka(t.H),e}function Ja(){}function Za(){if(Vs&&!(10<=Number(Zs)))throw Error("Environmental error: no available transport.")}function tc(t,e){Ir.call(this),this.g=new La(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Rs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Rs(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new ic(this)}function ec(t){ho.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function nc(){fo.call(this),this.status=1}function ic(t){this.g=t}(us=_a.prototype).Ka=function(t){this.L=t},us.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():lo.g(),this.C=this.u?ao(this.u):ao(lo),this.g.onreadystatechange=Ts(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Ea(this,t)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),s=ps.FormData&&t instanceof ps.FormData,!(0<=As(Ta,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ca(this),0<this.B&&((this.K=function(t){return Vs&&Ys()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ts(this.qa,this)):this.A=Vr(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Ea(this,t)}},us.qa=function(){void 0!==fs&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ar(this,"timeout"),this.abort(8))},us.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ar(this,"complete"),Ar(this,"abort"),Aa(this))},us.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Aa(this,!0)),_a.X.M.call(this)},us.Ha=function(){this.s||(this.F||this.v||this.l?Ia(this):this.fb())},us.fb=function(){Ia(this)},us.aa=function(){try{return 2<Sa(this)?this.g.status:-1}catch(t){return-1}},us.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},us.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),va(e)}},us.Ea=function(){return this.m},us.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(us=La.prototype).ma=8,us.G=1,us.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new mo(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=ar(r),lr(r,this.S)):r=this.S),null!==this.o||this.N||(s.H=r,r=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Va(this,s,e),Uo(n=Do(this.F),"RID",t),Uo(n,"CVER",22),this.D&&Uo(n,"X-HTTP-Session-Id",this.D),Fa(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(Na(r)))+"&"+e:this.o&&Ra(n,this.o,r)),ra(this.h,s),this.Ya&&Uo(n,"TYPE","init"),this.O?(Uo(n,"$req",e),Uo(n,"SID","null"),s.Z=!0,wo(s,n,null)):wo(s,n,e),this.G=2}}else 3==this.G&&(t?Ua(this,t):0==this.i.length||na(this.h)||Ua(this))},us.Ia=function(){if(this.u=null,Ha(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=io(Ts(this.eb,this),t)}},us.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,eo(10),Ma(this),Ha(this))},us.cb=function(){null!=this.v&&(this.v=null,Ma(this),Ba(this),eo(19))},us.kb=function(t){t?(this.j.info("Successfully pinged google.com"),eo(2)):(this.j.info("Failed to ping google.com"),eo(1))},(us=Ja.prototype).xa=function(){},us.wa=function(){},us.va=function(){},us.ua=function(){},us.Ra=function(){},Za.prototype.g=function(t,e){return new tc(t,e)},ks(tc,Ir),tc.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;eo(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Xa(t,null,t.V),Pa(t)},tc.prototype.close=function(){Da(this.g)},tc.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=Sr(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&Pa(e)},tc.prototype.M=function(){this.g.l=null,delete this.j,Da(this.g),delete this.g,tc.X.M.call(this)},ks(ec,ho),ks(nc,fo),ks(ic,Ja),ic.prototype.xa=function(){Ar(this.g,"a")},ic.prototype.wa=function(t){Ar(this.g,new ec(t))},ic.prototype.va=function(t){Ar(this.g,new nc)},ic.prototype.ua=function(){Ar(this.g,"b")},Za.prototype.createWebChannel=Za.prototype.g,tc.prototype.send=tc.prototype.u,tc.prototype.open=tc.prototype.m,tc.prototype.close=tc.prototype.close,so.NO_ERROR=0,so.TIMEOUT=8,so.HTTP_ERROR=6,ro.COMPLETE="complete",co.EventType=uo,uo.OPEN="a",uo.CLOSE="b",uo.ERROR="c",uo.MESSAGE="d",Ir.prototype.listen=Ir.prototype.N,_a.prototype.listenOnce=_a.prototype.O,_a.prototype.getLastError=_a.prototype.Oa,_a.prototype.getLastErrorCode=_a.prototype.Ea,_a.prototype.getStatus=_a.prototype.aa,_a.prototype.getResponseJson=_a.prototype.Sa,_a.prototype.getResponseText=_a.prototype.fa,_a.prototype.send=_a.prototype.da,_a.prototype.setWithCredentials=_a.prototype.Ka;var sc=ds.createWebChannelTransport=function(){return new Za},rc=ds.getStatEventTarget=function(){return Yr()},oc=ds.ErrorCode=so,ac=ds.EventType=ro,cc=ds.Event=Qr,lc=ds.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},uc=ds.FetchXmlHttpFactory=da,hc=ds.WebChannel=co,dc=ds.XhrIo=_a;const fc="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}pc.UNAUTHENTICATED=new pc(null),pc.GOOGLE_CREDENTIALS=new pc("google-credentials-uid"),pc.FIRST_PARTY=new pc("first-party-uid"),pc.MOCK_USER=new pc("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let mc="9.17.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=new it("@firebase/firestore");function yc(){return gc.logLevel}function vc(t,...e){if(gc.logLevel<=Y.DEBUG){const n=e.map(bc);gc.debug(`Firestore (${mc}): ${t}`,...n)}}function _c(t,...e){if(gc.logLevel<=Y.ERROR){const n=e.map(bc);gc.error(`Firestore (${mc}): ${t}`,...n)}}function wc(t,...e){if(gc.logLevel<=Y.WARN){const n=e.map(bc);gc.warn(`Firestore (${mc}): ${t}`,...n)}}function bc(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(t="Unexpected state"){const e=`FIRESTORE (${mc}) INTERNAL ASSERTION FAILED: `+t;throw _c(e),new Error(e)}function Ec(t,e){t||Tc()}function kc(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ac extends q{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class xc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(pc.UNAUTHENTICATED)))}shutdown(){}}class Nc{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Rc{constructor(t){this.t=t,this.currentUser=pc.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new Cc;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Cc,t.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{vc("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(vc("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Cc)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(vc("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Ec("string"==typeof e.accessToken),new Sc(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Ec(null===t||"string"==typeof t),new pc(t)}}class qc{constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i,this.type="FirstParty",this.user=pc.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Ec(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Lc{constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i}getToken(){return Promise.resolve(new qc(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(pc.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Dc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Mc{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&vc("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,vc("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{vc("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?i(t):vc("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Ec("string"==typeof t.token),this.A=t.token,new Dc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Oc(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=Oc(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<e&&(n+=t.charAt(i[s]%t.length))}return n}}function Uc(t,e){return t<e?-1:t>e?1:0}function Fc(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vc{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Ac(Ic.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Ac(Ic.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Ac(Ic.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Ac(Ic.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Vc.fromMillis(Date.now())}static fromDate(t){return Vc.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Vc(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Uc(this.nanoseconds,t.nanoseconds):Uc(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(t){this.timestamp=t}static fromTimestamp(t){return new jc(t)}static min(){return new jc(new Vc(0,0))}static max(){return new jc(new Vc(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t,e,n){void 0===e?e=0:e>t.length&&Tc(),void 0===n?n=t.length-e:n>t.length-e&&Tc(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Bc.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Bc?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),s=e.get(i);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class $c extends Bc{construct(t,e,n){return new $c(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Ac(Ic.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new $c(e)}static emptyPath(){return new $c([])}}const Hc=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class zc extends Bc{construct(t,e,n){return new zc(t,e,n)}static isValidIdentifier(t){return Hc.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),zc.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new zc(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const s=()=>{if(0===n.length)throw new Ac(Ic.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new Ac(Ic.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Ac(Ic.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(r=!r,i++):"."!==e||r?(n+=e,i++):(s(),i++)}if(s(),r)throw new Ac(Ic.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new zc(e)}static emptyPath(){return new zc([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(t){this.path=t}static fromPath(t){return new Kc($c.fromString(t))}static fromName(t){return new Kc($c.fromString(t).popFirst(5))}static empty(){return new Kc($c.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===$c.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return $c.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Kc(new $c(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}Gc.UNKNOWN_ID=-1;function Wc(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=jc.fromTimestamp(1e9===i?new Vc(n+1,0):new Vc(n,i));return new Xc(s,Kc.empty(),e)}function Qc(t){return new Xc(t.readTime,t.key,-1)}class Xc{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Xc(jc.min(),Kc.empty(),-1)}static max(){return new Xc(jc.max(),Kc.empty(),-1)}}function Yc(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Kc.comparator(t.documentKey,e.documentKey),0!==n?n:Uc(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tl(t){if(t.code!==Ic.FAILED_PRECONDITION||t.message!==Jc)throw t;vc("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Tc(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new el(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof el?e:el.resolve(e)}catch(t){return el.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):el.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):el.reject(e)}static resolve(t){return new el(((e,n)=>{e(t)}))}static reject(t){return new el(((e,n)=>{n(t)}))}static waitFor(t){return new el(((e,n)=>{let i=0,s=0,r=!1;t.forEach((t=>{++i,t.next((()=>{++s,r&&s===i&&e()}),(t=>n(t)))})),r=!0,s===i&&e()}))}static or(t){let e=el.resolve(!1);for(const n of t)e=e.next((t=>t?el.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new el(((n,i)=>{const s=t.length,r=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next((t=>{r[c]=t,++o,o===s&&n(r)}),(t=>i(t)))}}))}static doWhile(t,e){return new el(((n,i)=>{const s=()=>{!0===t()?e().next((()=>{s()}),i):n()};s()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class il{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}il.at=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sl{constructor(t,e,n,i,s,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class rl{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new rl("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof rl&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function al(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function cl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(t){return null==t}function ul(t){return 0===t&&1/t==-1/0}function hl(t){return"number"==typeof t&&Number.isInteger(t)&&!ul(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dl{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new dl(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new dl(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Uc(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}dl.EMPTY_BYTE_STRING=new dl("");const fl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pl(t){if(Ec(!!t),"string"==typeof t){let e=0;const n=fl.exec(t);if(Ec(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ml(t.seconds),nanos:ml(t.nanos)}}function ml(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function gl(t){return"string"==typeof t?dl.fromBase64String(t):dl.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function vl(t){const e=t.mapValue.fields.__previous_value__;return yl(e)?vl(e):e}function _l(t){const e=pl(t.mapValue.fields.__local_write_time__.timestampValue);return new Vc(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function bl(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?yl(t)?4:Ml(t)?9007199254740991:10:Tc()}function Tl(t,e){if(t===e)return!0;const n=bl(t);if(n!==bl(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _l(t).isEqual(_l(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=pl(t.timestampValue),i=pl(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return gl(t.bytesValue).isEqual(gl(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return ml(t.geoPointValue.latitude)===ml(e.geoPointValue.latitude)&&ml(t.geoPointValue.longitude)===ml(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return ml(t.integerValue)===ml(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=ml(t.doubleValue),i=ml(e.doubleValue);return n===i?ul(n)===ul(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return Fc(t.arrayValue.values||[],e.arrayValue.values||[],Tl);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(ol(n)!==ol(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!Tl(n[t],i[t])))return!1;return!0}(t,e);default:return Tc()}}function El(t,e){return void 0!==(t.values||[]).find((t=>Tl(t,e)))}function kl(t,e){if(t===e)return 0;const n=bl(t),i=bl(e);if(n!==i)return Uc(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Uc(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=ml(t.integerValue||t.doubleValue),i=ml(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Il(t.timestampValue,e.timestampValue);case 4:return Il(_l(t),_l(e));case 5:return Uc(t.stringValue,e.stringValue);case 6:return function(t,e){const n=gl(t),i=gl(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=Uc(n[t],i[t]);if(0!==e)return e}return Uc(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Uc(ml(t.latitude),ml(e.latitude));return 0!==n?n:Uc(ml(t.longitude),ml(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=kl(n[t],i[t]);if(e)return e}return Uc(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===wl.mapValue&&e===wl.mapValue)return 0;if(t===wl.mapValue)return 1;if(e===wl.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),s=e.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let t=0;t<i.length&&t<r.length;++t){const e=Uc(i[t],r[t]);if(0!==e)return e;const o=kl(n[i[t]],s[r[t]]);if(0!==o)return o}return Uc(i.length,r.length)}(t.mapValue,e.mapValue);default:throw Tc()}}function Il(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Uc(t,e);const n=pl(t),i=pl(e),s=Uc(n.seconds,i.seconds);return 0!==s?s:Uc(n.nanos,i.nanos)}function Al(t){return Cl(t)}function Cl(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=pl(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?gl(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Kc.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Cl(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const s of e)i?i=!1:n+=",",n+=`${s}:${Cl(t.fields[s])}`;return n+"}"}(t.mapValue):Tc()}function Sl(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function xl(t){return!!t&&"integerValue"in t}function Nl(t){return!!t&&"arrayValue"in t}function Rl(t){return!!t&&"nullValue"in t}function ql(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ll(t){return!!t&&"mapValue"in t}function Dl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return al(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Dl(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Dl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ml(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ol{constructor(t,e){this.position=t,this.inclusive=e}}function Pl(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(i=r.field.isKeyField()?Kc.comparator(Kc.fromName(o.referenceValue),n.key):kl(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function Ul(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Tl(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{}class Vl extends Fl{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Wl(t,e,n):"array-contains"===e?new Jl(t,n):"in"===e?new Zl(t,n):"not-in"===e?new tu(t,n):"array-contains-any"===e?new eu(t,n):new Vl(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Ql(t,n):new Xl(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(kl(e,this.value)):null!==e&&bl(this.value)===bl(e)&&this.matchesComparison(kl(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Tc()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class jl extends Fl{constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}static create(t,e){return new jl(t,e)}matches(t){return Bl(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt((t=>t.isInequality()));return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function Bl(t){return"and"===t.op}function $l(t){return Hl(t)&&Bl(t)}function Hl(t){for(const e of t.filters)if(e instanceof jl)return!1;return!0}function zl(t){if(t instanceof Vl)return t.field.canonicalString()+t.op.toString()+Al(t.value);if($l(t))return t.filters.map((t=>zl(t))).join(",");{const e=t.filters.map((t=>zl(t))).join(",");return`${t.op}(${e})`}}function Kl(t,e){return t instanceof Vl?function(t,e){return e instanceof Vl&&t.op===e.op&&t.field.isEqual(e.field)&&Tl(t.value,e.value)}(t,e):t instanceof jl?function(t,e){return e instanceof jl&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&Kl(n,e.filters[i])),!0)}(t,e):void Tc()}function Gl(t){return t instanceof Vl?function(t){return`${t.field.canonicalString()} ${t.op} ${Al(t.value)}`}(t):t instanceof jl?function(t){return t.op.toString()+" {"+t.getFilters().map(Gl).join(" ,")+"}"}(t):"Filter"}class Wl extends Vl{constructor(t,e,n){super(t,e,n),this.key=Kc.fromName(n.referenceValue)}matches(t){const e=Kc.comparator(t.key,this.key);return this.matchesComparison(e)}}class Ql extends Vl{constructor(t,e){super(t,"in",e),this.keys=Yl("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Xl extends Vl{constructor(t,e){super(t,"not-in",e),this.keys=Yl("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Yl(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Kc.fromName(t.referenceValue)))}class Jl extends Vl{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Nl(e)&&El(e.arrayValue,this.value)}}class Zl extends Vl{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&El(this.value.arrayValue,e)}}class tu extends Vl{constructor(t,e){super(t,"not-in",e)}matches(t){if(El(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!El(this.value.arrayValue,e)}}class eu extends Vl{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Nl(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>El(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(t,e="asc"){this.field=t,this.dir=e}}function iu(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(t,e){this.comparator=t,this.root=e||ou.EMPTY}insert(t,e){return new su(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ou.BLACK,null,null))}remove(t){return new su(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ou.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ru(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ru(this.root,t,this.comparator,!1)}getReverseIterator(){return new ru(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ru(this.root,t,this.comparator,!0)}}class ru{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ou{constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:ou.RED,this.left=null!=i?i:ou.EMPTY,this.right=null!=s?s:ou.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,s){return new ou(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ou.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return ou.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ou.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ou.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Tc();if(this.right.isRed())throw Tc();const t=this.left.check();if(t!==this.right.check())throw Tc();return t+(this.isRed()?0:1)}}ou.EMPTY=null,ou.RED=!0,ou.BLACK=!1,ou.EMPTY=new class{constructor(){this.size=0}get key(){throw Tc()}get value(){throw Tc()}get color(){throw Tc()}get left(){throw Tc()}get right(){throw Tc()}copy(t,e,n,i,s){return this}insert(t,e,n){return new ou(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class au{constructor(t){this.comparator=t,this.data=new su(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new cu(this.data.getIterator())}getIteratorFrom(t){return new cu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof au))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new au(this.comparator);return e.data=t,e}}class cu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lu{constructor(t){this.fields=t,t.sort(zc.comparator)}static empty(){return new lu([])}unionWith(t){let e=new au(zc.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new lu(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Fc(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t){this.value=t}static empty(){return new uu({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Ll(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Dl(e)}setAll(t){let e=zc.emptyPath(),n={},i=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=s.popLast()}t?n[s.lastSegment()]=Dl(t):i.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,i)}delete(t){const e=this.field(t.popLast());Ll(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Tl(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Ll(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){al(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new uu(Dl(this.value))}}function hu(t){const e=[];return al(t.fields,((t,n)=>{const i=new zc([t]);if(Ll(n)){const t=hu(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new lu(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class du{constructor(t,e,n,i,s,r,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=s,this.data=r,this.documentState=o}static newInvalidDocument(t){return new du(t,0,jc.min(),jc.min(),jc.min(),uu.empty(),0)}static newFoundDocument(t,e,n,i){return new du(t,1,e,jc.min(),n,i,0)}static newNoDocument(t,e){return new du(t,2,e,jc.min(),jc.min(),uu.empty(),0)}static newUnknownDocument(t,e){return new du(t,3,e,jc.min(),jc.min(),uu.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(jc.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=uu.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=uu.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=jc.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof du&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new du(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(t,e=null,n=[],i=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.ft=null}}function pu(t,e=null,n=[],i=[],s=null,r=null,o=null){return new fu(t,e,n,i,s,r,o)}function mu(t){const e=kc(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>zl(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),ll(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Al(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Al(t))).join(",")),e.ft=t}return e.ft}function gu(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!iu(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Kl(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ul(t.startAt,e.startAt)&&Ul(t.endAt,e.endAt)}function yu(t){return Kc.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vu{constructor(t,e=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function _u(t,e,n,i,s,r,o,a){return new vu(t,e,n,i,s,r,o,a)}function wu(t){return new vu(t)}function bu(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Tu(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Eu(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function ku(t){return null!==t.collectionGroup}function Iu(t){const e=kc(t);if(null===e.dt){e.dt=[];const t=Eu(e),n=Tu(e);if(null!==t&&null===n)t.isKeyField()||e.dt.push(new nu(t)),e.dt.push(new nu(zc.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new nu(zc.keyField(),t))}}}return e.dt}function Au(t){const e=kc(t);if(!e._t)if("F"===e.limitType)e._t=pu(e.path,e.collectionGroup,Iu(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Iu(e)){const e="desc"===n.dir?"asc":"desc";t.push(new nu(n.field,e))}const n=e.endAt?new Ol(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ol(e.startAt.position,e.startAt.inclusive):null;e._t=pu(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e._t}function Cu(t,e){e.getFirstInequalityField(),Eu(t);const n=t.filters.concat([e]);return new vu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Su(t,e,n){return new vu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xu(t,e){return gu(Au(t),Au(e))&&t.limitType===e.limitType}function Nu(t){return`${mu(Au(t))}|lt:${t.limitType}`}function Ru(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Gl(t))).join(", ")}]`),ll(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Al(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Al(t))).join(",")),`Target(${e})`}(Au(t))}; limitType=${t.limitType})`}function qu(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Kc.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Iu(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=Pl(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,Iu(t),e))&&!(t.endAt&&!function(t,e,n){const i=Pl(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,Iu(t),e))}(t,e)}function Lu(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Du(t){return(e,n)=>{let i=!1;for(const s of Iu(t)){const t=Mu(s,e,n);if(0!==t)return t;i=i||s.field.isKeyField()}return 0}}function Mu(t,e,n){const i=t.field.isKeyField()?Kc.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),s=n.data.field(t);return null!==i&&null!==s?kl(i,s):Tc()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Tc()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ul(e)?"-0":e}}function Pu(t){return{integerValue:""+t}}function Uu(t,e){return hl(e)?Pu(e):Ou(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(){this._=void 0}}function Vu(t,e,n){return t instanceof $u?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Hu?zu(t,e):t instanceof Ku?Gu(t,e):function(t,e){const n=Bu(t,e),i=Qu(n)+Qu(t.gt);return xl(n)&&xl(t.gt)?Pu(i):Ou(t.yt,i)}(t,e)}function ju(t,e,n){return t instanceof Hu?zu(t,e):t instanceof Ku?Gu(t,e):n}function Bu(t,e){var n;return t instanceof Wu?xl(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null}class $u extends Fu{}class Hu extends Fu{constructor(t){super(),this.elements=t}}function zu(t,e){const n=Xu(e);for(const e of t.elements)n.some((t=>Tl(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Ku extends Fu{constructor(t){super(),this.elements=t}}function Gu(t,e){let n=Xu(e);for(const e of t.elements)n=n.filter((t=>!Tl(t,e)));return{arrayValue:{values:n}}}class Wu extends Fu{constructor(t,e){super(),this.yt=t,this.gt=e}}function Qu(t){return ml(t.integerValue||t.doubleValue)}function Xu(t){return Nl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(t,e){this.field=t,this.transform=e}}class Ju{constructor(t,e){this.version=t,this.transformResults=e}}class Zu{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Zu}static exists(t){return new Zu(void 0,t)}static updateTime(t){return new Zu(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function th(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class eh{}function nh(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new dh(t.key,Zu.none()):new ah(t.key,t.data,Zu.none());{const n=t.data,i=uu.empty();let s=new au(zc.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),s=s.add(t)}return new ch(t.key,i,new lu(s.toArray()),Zu.none())}}function ih(t,e,n){t instanceof ah?function(t,e,n){const i=t.value.clone(),s=uh(t.fieldTransforms,e,n.transformResults);i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof ch?function(t,e,n){if(!th(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=uh(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(lh(t)),s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function sh(t,e,n,i){return t instanceof ah?function(t,e,n,i){if(!th(t.precondition,e))return n;const s=t.value.clone(),r=hh(t.fieldTransforms,i,e);return s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,i):t instanceof ch?function(t,e,n,i){if(!th(t.precondition,e))return n;const s=hh(t.fieldTransforms,i,e),r=e.data;return r.setAll(lh(t)),r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):function(t,e,n){return th(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function rh(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),s=Bu(i.transform,t||null);null!=s&&(null===n&&(n=uu.empty()),n.set(i.field,s))}return n||null}function oh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Fc(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Hu&&e instanceof Hu||t instanceof Ku&&e instanceof Ku?Fc(t.elements,e.elements,Tl):t instanceof Wu&&e instanceof Wu?Tl(t.gt,e.gt):t instanceof $u&&e instanceof $u}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ah extends eh{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ch extends eh{constructor(t,e,n,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function lh(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function uh(t,e,n){const i=new Map;Ec(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,ju(o,a,n[s]))}return i}function hh(t,e,n){const i=new Map;for(const s of t){const t=s.transform,r=n.data.field(s.field);i.set(s.field,Vu(t,r,e))}return i}class dh extends eh{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fh extends eh{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mh,gh;function yh(t){switch(t){default:return Tc();case Ic.CANCELLED:case Ic.UNKNOWN:case Ic.DEADLINE_EXCEEDED:case Ic.RESOURCE_EXHAUSTED:case Ic.INTERNAL:case Ic.UNAVAILABLE:case Ic.UNAUTHENTICATED:return!1;case Ic.INVALID_ARGUMENT:case Ic.NOT_FOUND:case Ic.ALREADY_EXISTS:case Ic.PERMISSION_DENIED:case Ic.FAILED_PRECONDITION:case Ic.ABORTED:case Ic.OUT_OF_RANGE:case Ic.UNIMPLEMENTED:case Ic.DATA_LOSS:return!0}}function vh(t){if(void 0===t)return _c("GRPC error has no .code"),Ic.UNKNOWN;switch(t){case mh.OK:return Ic.OK;case mh.CANCELLED:return Ic.CANCELLED;case mh.UNKNOWN:return Ic.UNKNOWN;case mh.DEADLINE_EXCEEDED:return Ic.DEADLINE_EXCEEDED;case mh.RESOURCE_EXHAUSTED:return Ic.RESOURCE_EXHAUSTED;case mh.INTERNAL:return Ic.INTERNAL;case mh.UNAVAILABLE:return Ic.UNAVAILABLE;case mh.UNAUTHENTICATED:return Ic.UNAUTHENTICATED;case mh.INVALID_ARGUMENT:return Ic.INVALID_ARGUMENT;case mh.NOT_FOUND:return Ic.NOT_FOUND;case mh.ALREADY_EXISTS:return Ic.ALREADY_EXISTS;case mh.PERMISSION_DENIED:return Ic.PERMISSION_DENIED;case mh.FAILED_PRECONDITION:return Ic.FAILED_PRECONDITION;case mh.ABORTED:return Ic.ABORTED;case mh.OUT_OF_RANGE:return Ic.OUT_OF_RANGE;case mh.UNIMPLEMENTED:return Ic.UNIMPLEMENTED;case mh.DATA_LOSS:return Ic.DATA_LOSS;default:return Tc()}}(gh=mh||(mh={}))[gh.OK=0]="OK",gh[gh.CANCELLED=1]="CANCELLED",gh[gh.UNKNOWN=2]="UNKNOWN",gh[gh.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",gh[gh.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",gh[gh.NOT_FOUND=5]="NOT_FOUND",gh[gh.ALREADY_EXISTS=6]="ALREADY_EXISTS",gh[gh.PERMISSION_DENIED=7]="PERMISSION_DENIED",gh[gh.UNAUTHENTICATED=16]="UNAUTHENTICATED",gh[gh.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",gh[gh.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",gh[gh.ABORTED=10]="ABORTED",gh[gh.OUT_OF_RANGE=11]="OUT_OF_RANGE",gh[gh.UNIMPLEMENTED=12]="UNIMPLEMENTED",gh[gh.INTERNAL=13]="INTERNAL",gh[gh.UNAVAILABLE=14]="UNAVAILABLE",gh[gh.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _h{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){al(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return cl(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh=new su(Kc.comparator);function bh(){return wh}const Th=new su(Kc.comparator);function Eh(...t){let e=Th;for(const n of t)e=e.insert(n.key,n);return e}function kh(t){let e=Th;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Ih(){return Ch()}function Ah(){return Ch()}function Ch(){return new _h((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Sh=new su(Kc.comparator),xh=new au(Kc.comparator);function Nh(...t){let e=xh;for(const n of t)e=e.add(n);return e}const Rh=new au(Uc);function qh(){return Rh}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(t,e,n,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,Dh.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Lh(jc.min(),i,qh(),bh(),Nh())}}class Dh{constructor(t,e,n,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Dh(n,e,Nh(),Nh(),Nh())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(t,e,n,i){this.It=t,this.removedTargetIds=e,this.key=n,this.Tt=i}}class Oh{constructor(t,e){this.targetId=t,this.Et=e}}class Ph{constructor(t,e,n=dl.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Uh{constructor(){this.At=0,this.Rt=jh(),this.bt=dl.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(t){t.approximateByteSize()>0&&(this.vt=!0,this.bt=t)}Ct(){let t=Nh(),e=Nh(),n=Nh();return this.Rt.forEach(((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:Tc()}})),new Dh(this.bt,this.Pt,t,e,n)}xt(){this.vt=!1,this.Rt=jh()}Nt(t,e){this.vt=!0,this.Rt=this.Rt.insert(t,e)}kt(t){this.vt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Fh{constructor(t){this.$t=t,this.Bt=new Map,this.Lt=bh(),this.qt=Vh(),this.Ut=new au(Uc)}Kt(t){for(const e of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(e,t.Tt):this.Qt(e,t.key,t.Tt);for(const e of t.removedTargetIds)this.Qt(e,t.key,t.Tt)}jt(t){this.forEachTarget(t,(e=>{const n=this.Wt(e);switch(t.state){case 0:this.zt(e)&&n.Dt(t.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(t.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(e);break;case 3:this.zt(e)&&(n.Ft(),n.Dt(t.resumeToken));break;case 4:this.zt(e)&&(this.Ht(e),n.Dt(t.resumeToken));break;default:Tc()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Bt.forEach(((t,n)=>{this.zt(n)&&e(n)}))}Jt(t){const e=t.targetId,n=t.Et.count,i=this.Yt(e);if(i){const t=i.target;if(yu(t))if(0===n){const n=new Kc(t.path);this.Qt(e,n,du.newNoDocument(n,jc.min()))}else Ec(1===n);else this.Xt(e)!==n&&(this.Ht(e),this.Ut=this.Ut.add(e))}}Zt(t){const e=new Map;this.Bt.forEach(((n,i)=>{const s=this.Yt(i);if(s){if(n.current&&yu(s.target)){const e=new Kc(s.target.path);null!==this.Lt.get(e)||this.te(i,e)||this.Qt(i,e,du.newNoDocument(e,t))}n.St&&(e.set(i,n.Ct()),n.xt())}}));let n=Nh();this.qt.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.Yt(t);return!e||2===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.Lt.forEach(((e,n)=>n.setReadTime(t)));const i=new Lh(t,e,this.Ut,this.Lt,n);return this.Lt=bh(),this.qt=Vh(),this.Ut=new au(Uc),i}Gt(t,e){if(!this.zt(t))return;const n=this.te(t,e.key)?2:0;this.Wt(t).Nt(e.key,n),this.Lt=this.Lt.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ee(e.key).add(t))}Qt(t,e,n){if(!this.zt(t))return;const i=this.Wt(t);this.te(t,e)?i.Nt(e,1):i.kt(e),this.qt=this.qt.insert(e,this.ee(e).delete(t)),n&&(this.Lt=this.Lt.insert(e,n))}removeTarget(t){this.Bt.delete(t)}Xt(t){const e=this.Wt(t).Ct();return this.$t.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.Wt(t).Ot()}Wt(t){let e=this.Bt.get(t);return e||(e=new Uh,this.Bt.set(t,e)),e}ee(t){let e=this.qt.get(t);return e||(e=new au(Uc),this.qt=this.qt.insert(t,e)),e}zt(t){const e=null!==this.Yt(t);return e||vc("WatchChangeAggregator","Detected inactive target",t),e}Yt(t){const e=this.Bt.get(t);return e&&e.Vt?null:this.$t.ne(t)}Ht(t){this.Bt.set(t,new Uh),this.$t.getRemoteKeysForTarget(t).forEach((e=>{this.Qt(t,e,null)}))}te(t,e){return this.$t.getRemoteKeysForTarget(t).has(e)}}function Vh(){return new su(Kc.comparator)}function jh(){return new su(Kc.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh={asc:"ASCENDING",desc:"DESCENDING"},$h={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Hh={and:"AND",or:"OR"};class zh{constructor(t,e){this.databaseId=t,this.wt=e}}function Kh(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gh(t,e){return t.wt?e.toBase64():e.toUint8Array()}function Wh(t,e){return Kh(t,e.toTimestamp())}function Qh(t){return Ec(!!t),jc.fromTimestamp(function(t){const e=pl(t);return new Vc(e.seconds,e.nanos)}(t))}function Xh(t,e){return function(t){return new $c(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Yh(t){const e=$c.fromString(t);return Ec(yd(e)),e}function Jh(t,e){return Xh(t.databaseId,e.path)}function Zh(t,e){const n=Yh(e);if(n.get(1)!==t.databaseId.projectId)throw new Ac(Ic.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Ac(Ic.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Kc(id(n))}function td(t,e){return Xh(t.databaseId,e)}function ed(t){const e=Yh(t);return 4===e.length?$c.emptyPath():id(e)}function nd(t){return new $c(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function id(t){return Ec(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function sd(t,e,n){return{name:Jh(t,e),fields:n.value.mapValue.fields}}function rd(t,e){let n;if(e instanceof ah)n={update:sd(t,e.key,e.value)};else if(e instanceof dh)n={delete:Jh(t,e.key)};else if(e instanceof ch)n={update:sd(t,e.key,e.data),updateMask:gd(e.fieldMask)};else{if(!(e instanceof fh))return Tc();n={verify:Jh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof $u)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Hu)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ku)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Wu)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw Tc()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Wh(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Tc()}(t,e.precondition)),n}function od(t,e){return{documents:[td(t,e.path)]}}function ad(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=td(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=td(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(t){if(0!==t.length)return md(jl.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:fd(t.field),direction:ud(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.wt||ll(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function cd(t){let e=ed(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Ec(1===i);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=function(t){const e=ld(t);return e instanceof jl&&$l(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new nu(pd(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,ll(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Ol(n,e)}(n.startAt));let l=null;return n.endAt&&(l=function(t){const e=!t.before,n=t.values||[];return new Ol(n,e)}(n.endAt)),_u(e,s,o,r,a,"F",c,l)}function ld(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=pd(t.unaryFilter.field);return Vl.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=pd(t.unaryFilter.field);return Vl.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=pd(t.unaryFilter.field);return Vl.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=pd(t.unaryFilter.field);return Vl.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Tc()}}(t):void 0!==t.fieldFilter?function(t){return Vl.create(pd(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Tc()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return jl.create(t.compositeFilter.filters.map((t=>ld(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Tc()}}(t.compositeFilter.op))}(t):Tc()}function ud(t){return Bh[t]}function hd(t){return $h[t]}function dd(t){return Hh[t]}function fd(t){return{fieldPath:t.canonicalString()}}function pd(t){return zc.fromServerFormat(t.fieldPath)}function md(t){return t instanceof Vl?function(t){if("=="===t.op){if(ql(t.value))return{unaryFilter:{field:fd(t.field),op:"IS_NAN"}};if(Rl(t.value))return{unaryFilter:{field:fd(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(ql(t.value))return{unaryFilter:{field:fd(t.field),op:"IS_NOT_NAN"}};if(Rl(t.value))return{unaryFilter:{field:fd(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fd(t.field),op:hd(t.op),value:t.value}}}(t):t instanceof jl?function(t){const e=t.getFilters().map((t=>md(t)));return 1===e.length?e[0]:{compositeFilter:{op:dd(t.op),filters:e}}}(t):Tc()}function gd(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function yd(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],_d=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],wd=_d;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bd{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&ih(i,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=sh(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=sh(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ah();return this.mutations.forEach((i=>{const s=t.get(i.key),r=s.overlayedDocument;let o=this.applyToLocalView(r,s.mutatedFields);o=e.has(i.key)?null:o;const a=nh(r,o);null!==a&&n.set(i.key,a),r.isValidDocument()||r.convertToNoDocument(jc.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Nh())}isEqual(t){return this.batchId===t.batchId&&Fc(this.mutations,t.mutations,((t,e)=>oh(t,e)))&&Fc(this.baseMutations,t.baseMutations,((t,e)=>oh(t,e)))}}class Td{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){Ec(t.mutations.length===n.length);let i=Sh;const s=t.mutations;for(let t=0;t<s.length;t++)i=i.insert(s[t].key,n[t].version);return new Td(t,e,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(t,e,n,i,s=jc.min(),r=jc.min(),o=dl.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new kd(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new kd(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new kd(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(t){this.ie=t}}function Ad(t){const e=cd({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Su(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){}ue(t,e){this.ce(t,e),e.ae()}ce(t,e){if("nullValue"in t)this.he(e,5);else if("booleanValue"in t)this.he(e,10),e.le(t.booleanValue?1:0);else if("integerValue"in t)this.he(e,15),e.le(ml(t.integerValue));else if("doubleValue"in t){const n=ml(t.doubleValue);isNaN(n)?this.he(e,13):(this.he(e,15),ul(n)?e.le(0):e.le(n))}else if("timestampValue"in t){const n=t.timestampValue;this.he(e,20),"string"==typeof n?e.fe(n):(e.fe(`${n.seconds||""}`),e.le(n.nanos||0))}else if("stringValue"in t)this.de(t.stringValue,e),this._e(e);else if("bytesValue"in t)this.he(e,30),e.we(gl(t.bytesValue)),this._e(e);else if("referenceValue"in t)this.me(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.he(e,45),e.le(n.latitude||0),e.le(n.longitude||0)}else"mapValue"in t?Ml(t)?this.he(e,Number.MAX_SAFE_INTEGER):(this.ge(t.mapValue,e),this._e(e)):"arrayValue"in t?(this.ye(t.arrayValue,e),this._e(e)):Tc()}de(t,e){this.he(e,25),this.pe(t,e)}pe(t,e){e.fe(t)}ge(t,e){const n=t.fields||{};this.he(e,55);for(const t of Object.keys(n))this.de(t,e),this.ce(n[t],e)}ye(t,e){const n=t.values||[];this.he(e,50);for(const t of n)this.ce(t,e)}me(t,e){this.he(e,37),Kc.fromName(t).path.forEach((t=>{this.he(e,60),this.pe(t,e)}))}he(t,e){t.le(e)}_e(t){t.le(2)}}Cd.Ie=new Cd;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sd{constructor(){this.Je=new xd}addToCollectionParentIndex(t,e){return this.Je.add(e),el.resolve()}getCollectionParents(t,e){return el.resolve(this.Je.getEntries(e))}addFieldIndex(t,e){return el.resolve()}deleteFieldIndex(t,e){return el.resolve()}getDocumentsMatchingTarget(t,e){return el.resolve(null)}getIndexType(t,e){return el.resolve(0)}getFieldIndexes(t,e){return el.resolve([])}getNextCollectionGroupToUpdate(t){return el.resolve(null)}getMinOffset(t,e){return el.resolve(Xc.min())}getMinOffsetFromCollectionGroup(t,e){return el.resolve(Xc.min())}updateCollectionGroup(t,e,n){return el.resolve()}updateIndexEntries(t,e){return el.resolve()}}class xd{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new au($c.comparator),s=!i.has(n);return this.index[e]=i.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new au($c.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Nd{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new Nd(t,Nd.DEFAULT_COLLECTION_PERCENTILE,Nd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nd.DEFAULT_COLLECTION_PERCENTILE=10,Nd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Nd.DEFAULT=new Nd(41943040,Nd.DEFAULT_COLLECTION_PERCENTILE,Nd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Nd.DISABLED=new Nd(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rd{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Rd(0)}static vn(){return new Rd(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qd{constructor(){this.changes=new _h((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,du.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?el.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ld{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&sh(n.mutation,t,lu.empty(),Vc.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Nh()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Nh()){const i=Ih();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=Eh();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Ih();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Nh())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let s=bh();const r=Ch(),o=Ch();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof ch)?s=s.insert(e.key,e):void 0!==o?(r.set(e.key,o.mutation.getFieldMask()),sh(o.mutation,e,o.mutation.getFieldMask(),Vc.now())):r.set(e.key,lu.empty())})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Ld(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Ch();let i=new su(((t,e)=>t-e)),s=Nh();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||lu.empty();o=s.applyToLocalView(r,o),n.set(t,o);const a=(i.get(s.batchId)||Nh()).add(t);i=i.insert(s.batchId,a)}))})).next((()=>{const r=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,l=Ah();c.forEach((t=>{if(!s.has(t)){const i=nh(e.get(t),n.get(t));null!==i&&l.set(t,i),s=s.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,l))}return el.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Kc.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ku(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((s=>{const r=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-s.size):el.resolve(Ih());let o=-1,a=s;return r.next((e=>el.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?el.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,Nh()))).next((t=>({batchId:o,changes:kh(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Kc(e)).next((t=>{let e=Eh();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const i=e.collectionGroup;let s=Eh();return this.indexManager.getCollectionParents(t,i).next((r=>el.forEach(r,(r=>{const o=function(t,e){return new vu(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(i));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i)))).next((t=>{i.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,du.newInvalidDocument(i)))}));let n=Eh();return t.forEach(((t,s)=>{const r=i.get(t);void 0!==r&&sh(r.mutation,s,lu.empty(),Vc.now()),qu(e,s)&&(n=n.insert(t,s))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return el.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:Qh(n.createTime)}),el.resolve()}getNamedQuery(t,e){return el.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:Ad(t.bundledQuery),readTime:Qh(t.readTime)}}(e)),el.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(){this.overlays=new su(Kc.comparator),this.es=new Map}getOverlay(t,e){return el.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Ih();return el.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.oe(t,e,i)})),el.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.es.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),el.resolve()}getOverlaysForCollection(t,e,n){const i=Ih(),s=e.length+1,r=new Kc(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===s&&t.largestBatchId>n&&i.set(t.getKey(),t)}return el.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let s=new su(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=Ih(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Ih(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=i)););return el.resolve(o)}oe(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.es.get(i.largestBatchId).delete(n.key);this.es.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Ed(e,n));let s=this.es.get(e);void 0===s&&(s=Nh(),this.es.set(e,s)),this.es.set(e,s.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(){this.ns=new au(Ud.ss),this.rs=new au(Ud.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new Ud(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new Ud(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new Kc(new $c([])),n=new Ud(e,t),i=new Ud(e,t+1),s=[];return this.rs.forEachInRange([n,i],(t=>{this.cs(t),s.push(t.key)})),s}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new Kc(new $c([])),n=new Ud(e,t),i=new Ud(e,t+1);let s=Nh();return this.rs.forEachInRange([n,i],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new Ud(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Ud{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return Kc.comparator(t.key,e.key)||Uc(t._s,e._s)}static os(t,e){return Uc(t._s,e._s)||Kc.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new au(Ud.ss)}checkEmpty(t){return el.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new bd(s,e,n,i);this.mutationQueue.push(r);for(const e of i)this.gs=this.gs.add(new Ud(e.key,s)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return el.resolve(r)}lookupMutationBatch(t,e){return el.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ps(n),s=i<0?0:i;return el.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return el.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return el.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ud(e,0),i=new Ud(e,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([n,i],(t=>{const e=this.ys(t._s);s.push(e)})),el.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new au(Uc);return e.forEach((t=>{const e=new Ud(t,0),i=new Ud(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,i],(t=>{n=n.add(t._s)}))})),el.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let s=n;Kc.isDocumentKey(s)||(s=s.child(""));const r=new Ud(new Kc(s),0);let o=new au(Uc);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t._s)),!0)}),r),el.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Ec(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return el.forEach(e.mutations,(i=>{const s=new Ud(i.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new Ud(e,0),i=this.gs.firstAfterOrEqual(n);return el.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,el.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(t){this.Es=t,this.docs=new su(Kc.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),s=i?i.size:0,r=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return el.resolve(n?n.document.mutableCopy():du.newInvalidDocument(e))}getEntries(t,e){let n=bh();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():du.newInvalidDocument(t))})),el.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let s=bh();const r=e.path,o=new Kc(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!r.isPrefixOf(t.path))break;t.path.length>r.length+1||Yc(Qc(o),n)<=0||(i.has(o.key)||qu(e,o))&&(s=s.insert(o.key,o.mutableCopy()))}return el.resolve(s)}getAllFromCollectionGroup(t,e,n,i){Tc()}As(t,e){return el.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new jd(this)}getSize(t){return el.resolve(this.size)}}class jd extends qd{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.Yn.addEntry(t,i)):this.Yn.removeEntry(n)})),el.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(t){this.persistence=t,this.Rs=new _h((t=>mu(t)),gu),this.lastRemoteSnapshotVersion=jc.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Pd,this.targetCount=0,this.vs=Rd.Pn()}forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),el.resolve()}getLastRemoteSnapshotVersion(t){return el.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return el.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),el.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),el.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new Rd(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,el.resolve()}updateTargetData(t,e){return this.Dn(e),el.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,el.resolve()}removeTargets(t,e,n){let i=0;const s=[];return this.Rs.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(r),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),el.waitFor(s).next((()=>i))}getTargetCount(t){return el.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return el.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),el.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach((e=>{s.push(i.markPotentiallyOrphaned(t,e))})),el.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),el.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return el.resolve(n)}containsKey(t,e){return el.resolve(this.Ps.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new il(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new Bd(this),this.indexManager=new Sd,this.remoteDocumentCache=function(t){return new Vd(t)}((t=>this.referenceDelegate.xs(t))),this.yt=new Id(e),this.Ns=new Md(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Od,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new Fd(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){vc("MemoryPersistence","Starting transaction:",t);const i=new Hd(this.Ss.next());return this.referenceDelegate.ks(),n(i).next((t=>this.referenceDelegate.Os(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ms(t,e){return el.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}}class Hd extends Zc{constructor(t){super(),this.currentSequenceNumber=t}}class zd{constructor(t){this.persistence=t,this.Fs=new Pd,this.$s=null}static Bs(t){return new zd(t)}get Ls(){if(this.$s)return this.$s;throw Tc()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),el.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),el.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),el.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return el.forEach(this.Ls,(n=>{const i=Kc.fromPath(n);return this.qs(t,i).next((t=>{t||e.removeEntry(i,jc.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.qs(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}qs(t,e){return el.or([()=>el.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kd{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=i}static Ci(t,e){let n=Nh(),i=Nh();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new Kd(t,e.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,i){return this.ki(t,e).next((s=>s||this.Oi(t,e,i,n))).next((n=>n||this.Mi(t,e)))}ki(t,e){if(bu(e))return el.resolve(null);let n=Au(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=Su(e,null,"F"),n=Au(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const s=Nh(...i);return this.Ni.getDocuments(t,s).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const r=this.Fi(e,i);return this.$i(e,r,s,n.readTime)?this.ki(t,Su(e,null,"F")):this.Bi(t,r,e,n)}))))})))))}Oi(t,e,n,i){return bu(e)||i.isEqual(jc.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next((s=>{const r=this.Fi(e,s);return this.$i(e,r,n,i)?this.Mi(t,e):(yc()<=Y.DEBUG&&vc("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ru(e)),this.Bi(t,r,e,Wc(i,-1)))}))}Fi(t,e){let n=new au(Du(t));return e.forEach(((e,i)=>{qu(t,i)&&(n=n.add(i))})),n}$i(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(t,e){return yc()<=Y.DEBUG&&vc("QueryEngine","Using full collection scan to execute query:",Ru(e)),this.Ni.getDocumentsMatchingQuery(t,e,Xc.min())}Bi(t,e,n,i){return this.Ni.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wd{constructor(t,e,n,i){this.persistence=t,this.Li=e,this.yt=i,this.qi=new su(Uc),this.Ui=new _h((t=>mu(t)),gu),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Dd(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.qi)))}}function Qd(t,e,n,i){return new Wd(t,e,n,i)}async function Xd(t,e){const n=kc(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],r=[];let o=Nh();for(const t of i){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:s,addedBatchIds:r})))}))}))}function Yd(t){const e=kc(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function Jd(t,e,n){let i=Nh(),s=Nh();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=bh();return n.forEach(((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),r.isNoDocument()&&r.version.isEqual(jc.min())?(e.removeEntry(n,r.readTime),i=i.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),i=i.insert(n,r)):vc("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{Wi:i,zi:s}}))}function Zd(t,e){const n=kc(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function tf(t,e){const n=kc(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.Cs.getTargetData(t,e).next((s=>s?(i=s,el.resolve(i)):n.Cs.allocateTargetId(t).next((s=>(i=new kd(e,s,0,t.currentSequenceNumber),n.Cs.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.qi.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(t.targetId,t),n.Ui.set(e,t.targetId)),t}))}async function ef(t,e,n){const i=kc(t),s=i.qi.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(t=>i.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!nl(t))throw t;vc("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.qi=i.qi.remove(e),i.Ui.delete(s.target)}function nf(t,e,n){const i=kc(t);let s=jc.min(),r=Nh();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=kc(t),s=i.Ui.get(n);return void 0!==s?el.resolve(i.qi.get(s)):i.Cs.getTargetData(e,n)}(i,t,Au(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,i.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>i.Li.getDocumentsMatchingQuery(t,e,n?s:jc.min(),n?r:Nh()))).next((t=>(sf(i,Lu(e),t),{documents:t,Hi:r})))))}function sf(t,e,n){let i=t.Ki.get(e)||jc.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.Ki.set(e,i)}class rf{constructor(){this.activeTargetIds=qh()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class of{constructor(){this.Lr=new rf,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,e,n){this.qr[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new rf,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{Ur(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){vc("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){vc("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,e,n,i,s){const r=this.ho(t,e);vc("RestConnection","Sending: ",r,n);const o={};return this.lo(o,i,s),this.fo(t,r,o,n).then((t=>(vc("RestConnection","Received: ",t),t)),(e=>{throw wc("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}_o(t,e,n,i,s,r){return this.ao(t,e,n,i,s)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+mc,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=lf[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,i){return new Promise(((s,r)=>{const o=new dc;o.setWithCredentials(!0),o.listenOnce(ac.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case oc.NO_ERROR:const e=o.getResponseJson();vc("Connection","XHR received:",JSON.stringify(e)),s(e);break;case oc.TIMEOUT:vc("Connection",'RPC "'+t+'" timed out'),r(new Ac(Ic.DEADLINE_EXCEEDED,"Request time out"));break;case oc.HTTP_ERROR:const n=o.getStatus();if(vc("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let t=o.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Ic).indexOf(e)>=0?e:Ic.UNKNOWN}(e.status);r(new Ac(t,e.message))}else r(new Ac(Ic.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new Ac(Ic.UNAVAILABLE,"Connection failed."));break;default:Tc()}}finally{vc("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(i);o.send(e,"POST",a,n,15)}))}wo(t,e,n){const i=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=sc(),r=rc(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new uc({})),this.lo(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=i.join("");vc("Connection","Creating WebChannel: "+a,o);const c=s.createWebChannel(a,o);let l=!1,u=!1;const h=new uf({Hr:t=>{u?vc("Connection","Not sending because WebChannel is closed:",t):(l||(vc("Connection","Opening WebChannel transport."),c.open(),l=!0),vc("Connection","WebChannel sending:",t),c.send(t))},Jr:()=>c.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(c,hc.EventType.OPEN,(()=>{u||vc("Connection","WebChannel transport opened.")})),d(c,hc.EventType.CLOSE,(()=>{u||(u=!0,vc("Connection","WebChannel transport closed"),h.io())})),d(c,hc.EventType.ERROR,(t=>{u||(u=!0,wc("Connection","WebChannel transport errored:",t),h.io(new Ac(Ic.UNAVAILABLE,"The operation could not be completed")))})),d(c,hc.EventType.MESSAGE,(t=>{var e;if(!u){const n=t.data[0];Ec(!!n);const i=n,s=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(s){vc("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=mh[t];if(void 0!==e)return vh(e)}(t),n=s.message;void 0===e&&(e=Ic.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),u=!0,h.io(new Ac(e,n)),c.close()}else vc("Connection","WebChannel received:",n),h.ro(n)}})),d(r,cc.STAT_EVENT,(t=>{t.stat===lc.PROXY?vc("Connection","Detected buffering proxy"):t.stat===lc.NOPROXY&&vc("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(t){return new zh(t,!0)}class pf{constructor(t,e,n=1e3,i=1.5,s=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),i=Math.max(0,e-n);i>0&&vc("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t,e,n,i,s,r,o,a){this.Hs=t,this.vo=n,this.Vo=i,this.connection=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new pf(t,e)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===Ic.RESOURCE_EXHAUSTED?(_c(e.toString()),_c("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):e&&e.code===Ic.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.So===e&&this.Go(t,n)}),(e=>{t((()=>{const t=new Ac(Ic.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)}))}))}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.Qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(t){return vc("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget((()=>this.So===t?e():(vc("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class gf extends mf{constructor(t,e,n,i,s,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,r),this.yt=s}jo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.xo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Tc()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(t,e){return t.wt?(Ec(void 0===e||"string"==typeof e),dl.fromBase64String(e||"")):(Ec(void 0===e||e instanceof Uint8Array),dl.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Ic.UNKNOWN:vh(t.code);return new Ac(e,t.message||"")}(o);n=new Ph(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Zh(t,i.document.name),r=Qh(i.document.updateTime),o=i.document.createTime?Qh(i.document.createTime):jc.min(),a=new uu({mapValue:{fields:i.document.fields}}),c=du.newFoundDocument(s,r,o,a),l=i.targetIds||[],u=i.removedTargetIds||[];n=new Mh(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Zh(t,i.document),r=i.readTime?Qh(i.readTime):jc.min(),o=du.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Mh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Zh(t,i.document),r=i.removedTargetIds||[];n=new Mh([],r,s,null)}else{if(!("filter"in e))return Tc();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,s=new ph(i),r=t.targetId;n=new Oh(r,s)}}return n}(this.yt,t),n=function(t){if(!("targetChange"in t))return jc.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?jc.min():e.readTime?Qh(e.readTime):jc.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=nd(this.yt),e.addTarget=function(t,e){let n;const i=e.target;return n=yu(i)?{documents:od(t,i)}:{query:ad(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Gh(t,e.resumeToken):e.snapshotVersion.compareTo(jc.min())>0&&(n.readTime=Kh(t,e.snapshotVersion.toTimestamp())),n}(this.yt,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Tc()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.yt,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=nd(this.yt),e.removeTarget=t,this.Bo(e)}}class yf extends mf{constructor(t,e,n,i,s,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,r),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(Ec(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const e=function(t,e){return t&&t.length>0?(Ec(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Qh(t.updateTime):Qh(e);return n.isEqual(jc.min())&&(n=Qh(e)),new Ju(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=Qh(t.commitTime);return this.listener.Zo(n,e)}return Ec(!t.writeResults||0===t.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=nd(this.yt),this.Bo(t)}Xo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>rd(this.yt,t)))};this.Bo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.yt=i,this.nu=!1}su(){if(this.nu)throw new Ac(Ic.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.ao(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Ic.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Ac(Ic.UNKNOWN,t.toString())}))}_o(t,e,n,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection._o(t,e,n,s,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Ic.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Ac(Ic.UNKNOWN,t.toString())}))}terminate(){this.nu=!0}}class _f{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(_c(e),this.ou=!1):vc("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(t,e,n,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur((t=>{n.enqueueAndForget((async()=>{xf(this)&&(vc("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=kc(t);e._u.add(4),await Tf(e),e.gu.set("Unknown"),e._u.delete(4),await bf(e)}(this))}))})),this.gu=new _f(n,i)}}async function bf(t){if(xf(t))for(const e of t.wu)await e(!0)}async function Tf(t){for(const e of t.wu)await e(!1)}function Ef(t,e){const n=kc(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),Sf(n)?Cf(n):Gf(n).ko()&&If(n,e))}function kf(t,e){const n=kc(t),i=Gf(n);n.du.delete(e),i.ko()&&Af(n,e),0===n.du.size&&(i.ko()?i.Fo():xf(n)&&n.gu.set("Unknown"))}function If(t,e){t.yu.Ot(e.targetId),Gf(t).zo(e)}function Af(t,e){t.yu.Ot(e),Gf(t).Ho(e)}function Cf(t){t.yu=new Fh({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Gf(t).start(),t.gu.uu()}function Sf(t){return xf(t)&&!Gf(t).No()&&t.du.size>0}function xf(t){return 0===kc(t)._u.size}function Nf(t){t.yu=void 0}async function Rf(t){t.du.forEach(((e,n)=>{If(t,e)}))}async function qf(t,e){Nf(t),Sf(t)?(t.gu.hu(e),Cf(t)):t.gu.set("Unknown")}async function Lf(t,e,n){if(t.gu.set("Online"),e instanceof Ph&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.du.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.du.delete(i),t.yu.removeTarget(i))}(t,e)}catch(n){vc("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Df(t,n)}else if(e instanceof Mh?t.yu.Kt(e):e instanceof Oh?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(jc.min()))try{const e=await Yd(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.Zt(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.du.get(i);s&&t.du.set(i,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(dl.EMPTY_BYTE_STRING,n.snapshotVersion)),Af(t,e);const i=new kd(n.target,e,1,n.sequenceNumber);If(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){vc("RemoteStore","Failed to raise snapshot:",e),await Df(t,e)}}async function Df(t,e,n){if(!nl(e))throw e;t._u.add(1),await Tf(t),t.gu.set("Offline"),n||(n=()=>Yd(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{vc("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await bf(t)}))}function Mf(t,e){return e().catch((n=>Df(t,n,e)))}async function Of(t){const e=kc(t),n=Wf(e);let i=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Pf(e);)try{const t=await Zd(e.localStore,i);if(null===t){0===e.fu.length&&n.Fo();break}i=t.batchId,Uf(e,t)}catch(t){await Df(e,t)}Ff(e)&&Vf(e)}function Pf(t){return xf(t)&&t.fu.length<10}function Uf(t,e){t.fu.push(e);const n=Wf(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Ff(t){return xf(t)&&!Wf(t).No()&&t.fu.length>0}function Vf(t){Wf(t).start()}async function jf(t){Wf(t).eu()}async function Bf(t){const e=Wf(t);for(const n of t.fu)e.Xo(n.mutations)}async function $f(t,e,n){const i=t.fu.shift(),s=Td.from(i,e,n);await Mf(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Of(t)}async function Hf(t,e){e&&Wf(t).Yo&&await async function(t,e){if(yh(n=e.code)&&n!==Ic.ABORTED){const n=t.fu.shift();Wf(t).Mo(),await Mf(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Of(t)}var n}(t,e),Ff(t)&&Vf(t)}async function zf(t,e){const n=kc(t);n.asyncQueue.verifyOperationInProgress(),vc("RemoteStore","RemoteStore received new credentials");const i=xf(n);n._u.add(3),await Tf(n),i&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await bf(n)}async function Kf(t,e){const n=kc(t);e?(n._u.delete(2),await bf(n)):e||(n._u.add(2),await Tf(n),n.gu.set("Unknown"))}function Gf(t){return t.pu||(t.pu=function(t,e,n){const i=kc(t);return i.su(),new gf(e,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,n)}(t.datastore,t.asyncQueue,{Yr:Rf.bind(null,t),Zr:qf.bind(null,t),Wo:Lf.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Mo(),Sf(t)?Cf(t):t.gu.set("Unknown")):(await t.pu.stop(),Nf(t))}))),t.pu}function Wf(t){return t.Iu||(t.Iu=function(t,e,n){const i=kc(t);return i.su(),new yf(e,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,n)}(t.datastore,t.asyncQueue,{Yr:jf.bind(null,t),Zr:Hf.bind(null,t),tu:Bf.bind(null,t),Zo:$f.bind(null,t)}),t.wu.push((async e=>{e?(t.Iu.Mo(),await Of(t)):(await t.Iu.stop(),t.fu.length>0&&(vc("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))}))),t.Iu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Qf{constructor(t,e,n,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Cc,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,s){const r=Date.now()+n,o=new Qf(t,e,r,i,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Ac(Ic.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xf(t,e){if(_c("AsyncQueue",`${e}: ${t}`),nl(t))return new Ac(Ic.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Kc.comparator(e.key,n.key):(t,e)=>Kc.comparator(t.key,e.key),this.keyedMap=Eh(),this.sortedSet=new su(this.comparator)}static emptySet(t){return new Yf(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Yf))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Yf;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(){this.Tu=new su(Kc.comparator)}track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):Tc():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Zf{constructor(t,e,n,i,s,r,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,i,s){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new Zf(t,e,Yf.emptySet(e),r,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&xu(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(){this.Au=void 0,this.listeners=[]}}class ep{constructor(){this.queries=new _h((t=>Nu(t)),xu),this.onlineState="Unknown",this.Ru=new Set}}async function np(t,e){const n=kc(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new tp),s)try{r.Au=await n.onListen(i)}catch(t){const n=Xf(t,`Initialization of query '${Ru(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&op(n)}async function ip(t,e){const n=kc(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),s=0===r.listeners.length)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function sp(t,e){const n=kc(t);let i=!1;for(const t of e){const e=t.query,s=n.queries.get(e);if(s){for(const e of s.listeners)e.Pu(t)&&(i=!0);s.Au=t}}i&&op(n)}function rp(t,e,n){const i=kc(t),s=i.queries.get(e);if(s)for(const t of s.listeners)t.onError(n);i.queries.delete(e)}function op(t){t.Ru.forEach((t=>{t.next()}))}class ap{constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Zf(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Nu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=Zf.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cp{constructor(t){this.key=t}}class lp{constructor(t){this.key=t}}class up{constructor(t,e){this.query=t,this.qu=e,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=Nh(),this.mutatedKeys=Nh(),this.Gu=Du(t),this.Qu=new Yf(this.Gu)}get ju(){return this.qu}Wu(t,e){const n=e?e.zu:new Jf,i=e?e.Qu:this.Qu;let s=e?e.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const l=i.get(t),u=qu(this.query,e)?e:null,h=!!l&&this.mutatedKeys.has(l.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;l&&u?l.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Hu(l,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Gu(u,a)>0||c&&this.Gu(u,c)<0)&&(o=!0)):!l&&u?(n.track({type:0,doc:u}),f=!0):l&&!u&&(n.track({type:1,doc:l}),f=!0,(a||c)&&(o=!0)),f&&(u?(r=r.add(u),s=d?s.add(t):s.delete(t)):(r=r.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Qu:r,zu:n,$i:o,mutatedKeys:s}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const s=t.zu.Eu();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Tc()}};return n(t)-n(e)}(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const r=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==s.length||a?{snapshot:new Zf(this.query,t.Qu,i,s,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:r}:{Xu:r}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Jf,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.qu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.qu=this.qu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.qu=this.qu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=Nh(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new lp(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new cp(n))})),e}tc(t){this.qu=t.Hi,this.Ku=Nh();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return Zf.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}class hp{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class dp{constructor(t){this.key=t,this.nc=!1}}class fp{constructor(t,e,n,i,s,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.sc={},this.ic=new _h((t=>Nu(t)),xu),this.rc=new Map,this.oc=new Set,this.uc=new su(Kc.comparator),this.cc=new Map,this.ac=new Pd,this.hc={},this.lc=new Map,this.fc=Rd.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function pp(t,e){const n=qp(t);let i,s;const r=n.ic.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.ec();else{const t=await tf(n.localStore,Au(e));n.isPrimaryClient&&Ef(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,s=await mp(n,e,i,"current"===r,t.resumeToken)}return s}async function mp(t,e,n,i,s){t._c=(e,n,i)=>async function(t,e,n,i){let s=e.view.Wu(n);s.$i&&(s=await nf(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,s))));const r=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,r);return Ap(t,e.targetId,o.Xu),o.snapshot}(t,e,n,i);const r=await nf(t.localStore,e,!0),o=new up(e,r.Hi),a=o.Wu(r.documents),c=Dh.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState,s),l=o.applyChanges(a,t.isPrimaryClient,c);Ap(t,n,l.Xu);const u=new hp(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),l.snapshot}async function gp(t,e){const n=kc(t),i=n.ic.get(e),s=n.rc.get(i.targetId);if(s.length>1)return n.rc.set(i.targetId,s.filter((t=>!xu(t,e)))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await ef(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),kf(n.remoteStore,i.targetId),kp(n,i.targetId)})).catch(tl)):(kp(n,i.targetId),await ef(n.localStore,i.targetId,!0))}async function yp(t,e){const n=kc(t);try{const t=await function(t,e){const n=kc(t),i=e.snapshotVersion;let s=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.qi;const o=[];e.targetChanges.forEach(((r,a)=>{const c=s.get(a);if(!c)return;o.push(n.Cs.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,r.addedDocuments,a))));let l=c.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?l=l.withResumeToken(dl.EMPTY_BYTE_STRING,jc.min()).withLastLimboFreeSnapshotVersion(jc.min()):r.resumeToken.approximateByteSize()>0&&(l=l.withResumeToken(r.resumeToken,i)),s=s.insert(a,l),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(c,l,r)&&o.push(n.Cs.updateTargetData(t,l))}));let a=bh(),c=Nh();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(Jd(t,r,e.documentUpdates).next((t=>{a=t.Wi,c=t.zi}))),!i.isEqual(jc.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return el.waitFor(o).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.qi=s,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.cc.get(e);i&&(Ec(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.nc=!0:t.modifiedDocuments.size>0?Ec(i.nc):t.removedDocuments.size>0&&(Ec(i.nc),i.nc=!1))})),await xp(n,t,e)}catch(t){await tl(t)}}function vp(t,e,n){const i=kc(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.ic.forEach(((n,i)=>{const s=i.view.bu(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=kc(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.bu(e)&&(i=!0)})),i&&op(n)}(i.eventManager,e),t.length&&i.sc.Wo(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function _p(t,e,n){const i=kc(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.cc.get(e),r=s&&s.key;if(r){let t=new su(Kc.comparator);t=t.insert(r,du.newNoDocument(r,jc.min()));const n=Nh().add(r),s=new Lh(jc.min(),new Map,new au(Uc),t,n);await yp(i,s),i.uc=i.uc.remove(r),i.cc.delete(e),Sp(i)}else await ef(i.localStore,e,!1).then((()=>kp(i,e,n))).catch(tl)}async function wp(t,e){const n=kc(t),i=e.batch.batchId;try{const t=await function(t,e){const n=kc(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const s=n.batch,r=s.keys();let o=el.resolve();return r.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);Ec(null!==r),e.version.compareTo(r)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Nh();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(n.localStore,e);Ep(n,i,null),Tp(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await xp(n,t)}catch(t){await tl(t)}}async function bp(t,e,n){const i=kc(t);try{const t=await function(t,e){const n=kc(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Ec(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);Ep(i,e,n),Tp(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await xp(i,t)}catch(n){await tl(n)}}function Tp(t,e){(t.lc.get(e)||[]).forEach((t=>{t.resolve()})),t.lc.delete(e)}function Ep(t,e,n){const i=kc(t);let s=i.hc[i.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),i.hc[i.currentUser.toKey()]=s}}function kp(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.rc.get(e))t.ic.delete(i),n&&t.sc.wc(i,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach((e=>{t.ac.containsKey(e)||Ip(t,e)}))}function Ip(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(kf(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Sp(t))}function Ap(t,e,n){for(const i of n)i instanceof cp?(t.ac.addReference(i.key,e),Cp(t,i)):i instanceof lp?(vc("SyncEngine","Document no longer in limbo: "+i.key),t.ac.removeReference(i.key,e),t.ac.containsKey(i.key)||Ip(t,i.key)):Tc()}function Cp(t,e){const n=e.key,i=n.path.canonicalString();t.uc.get(n)||t.oc.has(i)||(vc("SyncEngine","New document in limbo: "+n),t.oc.add(i),Sp(t))}function Sp(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new Kc($c.fromString(e)),i=t.fc.next();t.cc.set(i,new dp(n)),t.uc=t.uc.insert(n,i),Ef(t.remoteStore,new kd(Au(wu(n.path)),i,2,il.at))}}async function xp(t,e,n){const i=kc(t),s=[],r=[],o=[];i.ic.isEmpty()||(i.ic.forEach(((t,a)=>{o.push(i._c(a,e,n).then((t=>{if((t||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){s.push(t);const e=Kd.Ci(a.targetId,t);r.push(e)}})))})),await Promise.all(o),i.sc.Wo(s),await async function(t,e){const n=kc(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>el.forEach(e,(e=>el.forEach(e.Si,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>el.forEach(e.Di,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!nl(t))throw t;vc("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.qi.get(e),i=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(i);n.qi=n.qi.insert(e,s)}}}(i.localStore,r))}async function Np(t,e){const n=kc(t);if(!n.currentUser.isEqual(e)){vc("SyncEngine","User change. New user:",e.toKey());const t=await Xd(n.localStore,e);n.currentUser=e,function(t,e){t.lc.forEach((t=>{t.forEach((t=>{t.reject(new Ac(Ic.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.lc.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await xp(n,t.ji)}}function Rp(t,e){const n=kc(t),i=n.cc.get(e);if(i&&i.nc)return Nh().add(i.key);{let t=Nh();const i=n.rc.get(e);if(!i)return t;for(const e of i){const i=n.ic.get(e);t=t.unionWith(i.view.ju)}return t}}function qp(t){const e=kc(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Rp.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_p.bind(null,e),e.sc.Wo=sp.bind(null,e.eventManager),e.sc.wc=rp.bind(null,e.eventManager),e}function Lp(t){const e=kc(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wp.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bp.bind(null,e),e}class Dp{constructor(){this.synchronizeTabs=!1}async initialize(t){this.yt=ff(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return Qd(this.persistence,new Gd,t.initialUser,this.yt)}yc(t){return new $d(zd.Bs,this.yt)}gc(t){return new of}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Mp{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>vp(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Np.bind(null,this.syncEngine),await Kf(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new ep}createDatastore(t){const e=ff(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new hf(i));var i;return function(t,e,n,i){return new vf(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){var e,n,i,s,r;return e=this.localStore,n=this.datastore,i=t.asyncQueue,s=t=>vp(this.syncEngine,t,0),r=cf.C()?new cf:new af,new wf(e,n,i,s,r)}createSyncEngine(t,e){return function(t,e,n,i,s,r,o){const a=new fp(t,e,n,i,s,r);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=kc(t);vc("RemoteStore","RemoteStore shutting down."),e._u.add(5),await Tf(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(t,e,n){if(!n)throw new Ac(Ic.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Pp(t){if(!Kc.isDocumentKey(t))throw new Ac(Ic.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Up(t){if(Kc.isDocumentKey(t))throw new Ac(Ic.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Fp(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Tc()}function Vp(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ac(Ic.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Fp(t);throw new Ac(Ic.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function jp(t,e){if(e<=0)throw new Ac(Ic.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp=new Map;class $p{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Ac(Ic.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Ac(Ic.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new Ac(Ic.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $p({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ac(Ic.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Ac(Ic.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $p(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new xc;switch(t.type){case"gapi":const e=t.client;return new Lc(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Ac(Ic.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Bp.get(t);e&&(vc("ComponentProvider","Removing Datastore"),Bp.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zp{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gp(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new zp(this.firestore,t,this._key)}}class Kp{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Kp(this.firestore,t,this._query)}}class Gp extends Kp{constructor(t,e,n){super(t,e,wu(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new zp(this.firestore,null,new Kc(t))}withConverter(t){return new Gp(this.firestore,t,this._path)}}function Wp(t,e,...n){if(t=z(t),Op("collection","path",e),t instanceof Hp){const i=$c.fromString(e,...n);return Up(i),new Gp(t,null,i)}{if(!(t instanceof zp||t instanceof Gp))throw new Ac(Ic.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child($c.fromString(e,...n));return Up(i),new Gp(t.firestore,null,i)}}function Qp(t,e,...n){if(t=z(t),1===arguments.length&&(e=Pc.R()),Op("doc","path",e),t instanceof Hp){const i=$c.fromString(e,...n);return Pp(i),new zp(t,null,new Kc(i))}{if(!(t instanceof zp||t instanceof Gp))throw new Ac(Ic.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child($c.fromString(e,...n));return Pp(i),new zp(t.firestore,t instanceof Gp?t.converter:null,new Kc(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xp{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):_c("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yp{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=pc.UNAUTHENTICATED,this.clientId=Pc.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{vc("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(vc("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ac(Ic.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Cc;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Xf(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Jp(t,e){t.asyncQueue.verifyOperationInProgress(),vc("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await Xd(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function Zp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tm(t);vc("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>zf(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>zf(e.remoteStore,n))),t.onlineComponents=e}async function tm(t){return t.offlineComponents||(vc("FirestoreClient","Using default OfflineComponentProvider"),await Jp(t,new Dp)),t.offlineComponents}async function em(t){return t.onlineComponents||(vc("FirestoreClient","Using default OnlineComponentProvider"),await Zp(t,new Mp)),t.onlineComponents}function nm(t){return em(t).then((t=>t.syncEngine))}async function im(t){const e=await em(t),n=e.eventManager;return n.onListen=pp.bind(null,e.syncEngine),n.onUnlisten=gp.bind(null,e.syncEngine),n}function sm(t,e,n={}){const i=new Cc;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,s){const r=new Xp({next:r=>{e.enqueueAndForget((()=>ip(t,o)));const a=r.docs.has(n);!a&&r.fromCache?s.reject(new Ac(Ic.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&i&&"server"===i.source?s.reject(new Ac(Ic.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(r)},error:t=>s.reject(t)}),o=new ap(wu(n.path),r,{includeMetadataChanges:!0,Nu:!0});return np(t,o)}(await im(t),t.asyncQueue,e,n,i))),i.promise}function rm(t,e,n={}){const i=new Cc;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,s){const r=new Xp({next:n=>{e.enqueueAndForget((()=>ip(t,o))),n.fromCache&&"server"===i.source?s.reject(new Ac(Ic.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new ap(n,r,{includeMetadataChanges:!0,Nu:!0});return np(t,o)}(await im(t),t.asyncQueue,e,n,i))),i.promise}class om{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new pf(this,"async_queue_retry"),this.Wc=()=>{const t=df();t&&vc("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=df();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const e=df();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise((()=>{}));const e=new Cc;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!nl(t))throw t;vc("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t);throw _c("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const i=Qf.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.Uc.push(i),i}zc(){this.Kc&&Tc()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.Uc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}}function am(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of["next","error","complete"])if(t in n&&"function"==typeof n[t])return!0;return!1}(t)}class cm extends Hp{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new om,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hm(this),this._firestoreClient.terminate()}}function lm(t,e){const n="string"==typeof t?t:e||"(default)",i=qt("object"==typeof t?t:Pt(),"firestore").getImmediate({identifier:n});if(!i._initialized){const t=E("firestore");t&&function(t,e,n,i={}){var s;const r=(t=Vp(t,Hp))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==e&&wc("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=pc.MOCK_USER;else{e=C(i.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const r=i.mockUserToken.sub||i.mockUserToken.user_id;if(!r)throw new Ac(Ic.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new pc(r)}t._authCredentials=new Nc(new Sc(e,n))}}(i,...t)}return i}function um(t){return t._firestoreClient||hm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function hm(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new sl(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Yp(t._authCredentials,t._appCheckCredentials,t._queue,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dm{constructor(t){this._byteString=t}static fromBase64String(t){try{return new dm(dl.fromBase64String(t))}catch(t){throw new Ac(Ic.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new dm(dl.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Ac(Ic.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new zc(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pm{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Ac(Ic.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Ac(Ic.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Uc(this._lat,t._lat)||Uc(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm=/^__.*__$/;class ym{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new ch(t,this.data,this.fieldMask,e,this.fieldTransforms):new ah(t,this.data,e,this.fieldTransforms)}}class vm{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ch(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function _m(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Tc()}}class wm{constructor(t,e,n,i,s,r){this.settings=t,this.databaseId=e,this.yt=n,this.ignoreUndefinedProperties=i,void 0===s&&this.na(),this.fieldTransforms=s||[],this.fieldMask=r||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new wm(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ia({path:n,oa:!1});return i.ua(t),i}ca(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ia({path:n,oa:!1});return i.na(),i}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return Um(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(0===t.length)throw this.ha("Document fields must not be empty");if(_m(this.sa)&&gm.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class bm{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.yt=n||ff(t)}da(t,e,n,i=!1){return new wm({sa:t,methodName:e,fa:n,path:zc.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Tm(t){const e=t._freezeSettings(),n=ff(t._databaseId);return new bm(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Em(t,e,n,i,s,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,s);Dm("Data must be an object, but it was:",o,i);const a=qm(i,o);let c,l;if(r.merge)c=new lu(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const i of r.mergeFields){const s=Mm(e,i,n);if(!o.contains(s))throw new Ac(Ic.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Fm(t,s)||t.push(s)}c=new lu(t),l=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,l=o.fieldTransforms;return new ym(new uu(a),c,l)}class km extends pm{_toFieldTransform(t){if(2!==t.sa)throw 1===t.sa?t.ha(`${this._methodName}() can only appear at the top level of your update data`):t.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof km}}function Im(t,e,n){return new wm({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.yt,e.ignoreUndefinedProperties)}class Am extends pm{_toFieldTransform(t){return new Yu(t.path,new $u)}isEqual(t){return t instanceof Am}}class Cm extends pm{constructor(t,e){super(t),this._a=e}_toFieldTransform(t){const e=Im(this,t,!0),n=this._a.map((t=>Rm(t,e))),i=new Hu(n);return new Yu(t.path,i)}isEqual(t){return this===t}}function Sm(t,e,n,i){const s=t.da(1,e,n);Dm("Data must be an object, but it was:",s,i);const r=[],o=uu.empty();al(i,((t,i)=>{const a=Pm(e,t,n);i=z(i);const c=s.ca(a);if(i instanceof km)r.push(a);else{const t=Rm(i,c);null!=t&&(r.push(a),o.set(a,t))}}));const a=new lu(r);return new vm(o,a,s.fieldTransforms)}function xm(t,e,n,i,s,r){const o=t.da(1,e,n),a=[Mm(e,i,n)],c=[s];if(r.length%2!=0)throw new Ac(Ic.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<r.length;t+=2)a.push(Mm(e,r[t])),c.push(r[t+1]);const l=[],u=uu.empty();for(let t=a.length-1;t>=0;--t)if(!Fm(l,a[t])){const e=a[t];let n=c[t];n=z(n);const i=o.ca(e);if(n instanceof km)l.push(e);else{const t=Rm(n,i);null!=t&&(l.push(e),u.set(e,t))}}const h=new lu(l);return new vm(u,h,o.fieldTransforms)}function Nm(t,e,n,i=!1){return Rm(n,t.da(i?4:3,e))}function Rm(t,e){if(Lm(t=z(t)))return Dm("Unsupported field value:",e,t),qm(t,e);if(t instanceof pm)return function(t,e){if(!_m(e.sa))throw e.ha(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ha(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&4!==e.sa)throw e.ha("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const s of t){let t=Rm(s,e.aa(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=z(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Uu(e.yt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Vc.fromDate(t);return{timestampValue:Kh(e.yt,n)}}if(t instanceof Vc){const n=new Vc(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Kh(e.yt,n)}}if(t instanceof mm)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof dm)return{bytesValue:Gh(e.yt,t._byteString)};if(t instanceof zp){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Xh(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ha(`Unsupported field value: ${Fp(t)}`)}(t,e)}function qm(t,e){const n={};return cl(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):al(t,((t,i)=>{const s=Rm(i,e.ra(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function Lm(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Vc||t instanceof mm||t instanceof dm||t instanceof zp||t instanceof pm)}function Dm(t,e,n){if(!Lm(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=Fp(n);throw"an object"===i?e.ha(t+" a custom object"):e.ha(t+" "+i)}}function Mm(t,e,n){if((e=z(e))instanceof fm)return e._internalPath;if("string"==typeof e)return Pm(t,e);throw Um("Field path arguments must be of type string or ",t,!1,void 0,n)}const Om=new RegExp("[~\\*/\\[\\]]");function Pm(t,e,n){if(e.search(Om)>=0)throw Um(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fm(...e.split("."))._internalPath}catch(i){throw Um(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Um(t,e,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new Ac(Ic.INVALID_ARGUMENT,a+t+c)}function Fm(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(t,e,n,i,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new zp(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new jm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Bm("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class jm extends Vm{data(){return super.data()}}function Bm(t,e){return"string"==typeof e?Pm(t,e):e instanceof fm?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Ac(Ic.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hm{}class zm extends Hm{}function Km(t,e,...n){let i=[];e instanceof Hm&&i.push(e),i=i.concat(n),function(t){const e=t.filter((t=>t instanceof Qm)).length,n=t.filter((t=>t instanceof Gm)).length;if(e>1||e>0&&n>0)throw new Ac(Ic.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const e of i)t=e._apply(t);return t}class Gm extends zm{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Gm(t,e,n)}_apply(t){const e=this._parse(t);return ng(t._query,e),new Kp(t.firestore,t.converter,Cu(t._query,e))}_parse(t){const e=Tm(t.firestore),n=function(t,e,n,i,s,r,o){let a;if(s.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new Ac(Ic.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on documentId().`);if("in"===r||"not-in"===r){eg(o,r);const e=[];for(const n of o)e.push(tg(i,t,n));a={arrayValue:{values:e}}}else a=tg(i,t,o)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||eg(o,r),a=Nm(n,"where",o,"in"===r||"not-in"===r);return Vl.create(s,r,a)}(t._query,0,e,t.firestore._databaseId,this._field,this._op,this._value);return n}}function Wm(t,e,n){const i=e,s=Bm("where",t);return Gm._create(s,i,n)}class Qm extends Hm{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Qm(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:jl.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const i=e.getFlattenedFilters();for(const t of i)ng(n,t),n=Cu(n,t)}(t._query,e),new Kp(t.firestore,t.converter,Cu(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Xm extends zm{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Xm(t,e)}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new Ac(Ic.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new Ac(Ic.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const i=new nu(e,n);return function(t,e){if(null===Tu(t)){const n=Eu(t);null!==n&&ig(t,n,e.field)}}(t,i),i}(t._query,this._field,this._direction);return new Kp(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new vu(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Ym(t,e="asc"){const n=e,i=Bm("orderBy",t);return Xm._create(i,n)}class Jm extends zm{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new Jm(t,e,n)}_apply(t){return new Kp(t.firestore,t.converter,Su(t._query,this._limit,this._limitType))}}function Zm(t){return jp("limit",t),Jm._create("limit",t,"F")}function tg(t,e,n){if("string"==typeof(n=z(n))){if(""===n)throw new Ac(Ic.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ku(e)&&-1!==n.indexOf("/"))throw new Ac(Ic.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child($c.fromString(n));if(!Kc.isDocumentKey(i))throw new Ac(Ic.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Sl(t,new Kc(i))}if(n instanceof zp)return Sl(t,n._key);throw new Ac(Ic.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Fp(n)}.`)}function eg(t,e){if(!Array.isArray(t)||0===t.length)throw new Ac(Ic.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new Ac(Ic.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function ng(t,e){if(e.isInequality()){const n=Eu(t),i=e.field;if(null!==n&&!n.isEqual(i))throw new Ac(Ic.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${i.toString()}'`);const s=Tu(t);null!==s&&ig(t,i,s)}const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new Ac(Ic.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Ac(Ic.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function ig(t,e,n){if(!n.isEqual(e))throw new Ac(Ic.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class sg{convertValue(t,e="none"){switch(bl(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ml(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(gl(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Tc()}}convertObject(t,e){const n={};return al(t.fields,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new mm(ml(t.latitude),ml(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=vl(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(_l(t));default:return null}}convertTimestamp(t){const e=pl(t);return new Vc(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=$c.fromString(t);Ec(yd(n));const i=new rl(n.get(1),n.get(3)),s=new Kc(n.popFirst(5));return i.isEqual(e)||_c(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class og{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ag extends Vm{constructor(t,e,n,i,s,r){super(t,e,n,i,r),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new cg(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Bm("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class cg extends ag{data(t={}){return super.data(t)}}class lg{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new og(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new cg(this._firestore,this._userDataWriter,n.key,n,new og(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Ac(Ic.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const i=new cg(t._firestore,t._userDataWriter,n.doc.key,n.doc,new og(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const i=new cg(t._firestore,t._userDataWriter,e.doc.key,e.doc,new og(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,r=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:ug(e.type),doc:i,oldIndex:s,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function ug(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Tc()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hg(t){t=Vp(t,zp);const e=Vp(t.firestore,cm);return sm(um(e),t._key).then((n=>wg(e,t,n)))}class dg extends sg{constructor(t){super(),this.firestore=t}convertBytes(t){return new dm(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new zp(this.firestore,null,e)}}function fg(t){t=Vp(t,Kp);const e=Vp(t.firestore,cm),n=um(e),i=new dg(e);return $m(t._query),rm(n,t._query).then((n=>new lg(e,i,t,n)))}function pg(t,e,n){t=Vp(t,zp);const i=Vp(t.firestore,cm),s=rg(t.converter,e,n);return _g(i,[Em(Tm(i),"setDoc",t._key,s,null!==t.converter,n).toMutation(t._key,Zu.none())])}function mg(t,e,n,...i){t=Vp(t,zp);const s=Vp(t.firestore,cm),r=Tm(s);let o;return o="string"==typeof(e=z(e))||e instanceof fm?xm(r,"updateDoc",t._key,e,n,i):Sm(r,"updateDoc",t._key,e),_g(s,[o.toMutation(t._key,Zu.exists(!0))])}function gg(t){return _g(Vp(t.firestore,cm),[new dh(t._key,Zu.none())])}function yg(t,e){const n=Vp(t.firestore,cm),i=Qp(t),s=rg(t.converter,e);return _g(n,[Em(Tm(t.firestore),"addDoc",i._key,s,null!==t.converter,{}).toMutation(i._key,Zu.exists(!1))]).then((()=>i))}function vg(t,...e){var n,i,s;t=z(t);let r={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||am(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(am(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(i=t.error)||void 0===i?void 0:i.bind(t),e[o+2]=null===(s=t.complete)||void 0===s?void 0:s.bind(t)}let c,l,u;if(t instanceof zp)l=Vp(t.firestore,cm),u=wu(t._key.path),c={next:n=>{e[o]&&e[o](wg(l,t,n))},error:e[o+1],complete:e[o+2]};else{const n=Vp(t,Kp);l=Vp(n.firestore,cm),u=n._query;const i=new dg(l);c={next:t=>{e[o]&&e[o](new lg(l,i,n,t))},error:e[o+1],complete:e[o+2]},$m(t._query)}return function(t,e,n,i){const s=new Xp(i),r=new ap(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>np(await im(t),r))),()=>{s.bc(),t.asyncQueue.enqueueAndForget((async()=>ip(await im(t),r)))}}(um(l),u,a,c)}function _g(t,e){return function(t,e){const n=new Cc;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const i=Lp(t);try{const t=await function(t,e){const n=kc(t),i=Vc.now(),s=e.reduce(((t,e)=>t.add(e.key)),Nh());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=bh(),c=Nh();return n.Gi.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{r=s;const o=[];for(const t of e){const e=rh(t,r.get(t.key).overlayedDocument);null!=e&&o.push(new ch(t.key,e,hu(e.value.mapValue),Zu.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(r,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:kh(r)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.hc[t.currentUser.toKey()];i||(i=new su(Uc)),i=i.insert(e,n),t.hc[t.currentUser.toKey()]=i}(i,t.batchId,n),await xp(i,t.changes),await Of(i.remoteStore)}catch(t){const e=Xf(t,"Failed to persist write");n.reject(e)}}(await nm(t),e,n))),n.promise}(um(t),e)}function wg(t,e,n){const i=n.docs.get(e._key),s=new dg(t);return new ag(t,s,e._key,i,new og(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(){return new Am("serverTimestamp")}function Tg(...t){return new Cm("arrayUnion",t)}!function(t,e=!0){mc=Mt,Rt(new K("firestore",((t,{instanceIdentifier:n,options:i})=>{const s=t.getProvider("app").getImmediate(),r=new cm(new Rc(t.getProvider("auth-internal")),new Mc(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Ac(Ic.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rl(t.options.projectId,e)}(s,n),s);return i=Object.assign({useFetchStreams:e},i),r._setSettings(i),r}),"PUBLIC").setMultipleInstances(!0)),Ut(fc,"3.8.3",t),Ut(fc,"3.8.3","esm2017")}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Eg="firebasestorage.googleapis.com",kg="storageBucket";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ig extends q{constructor(t,e,n=0){super(Ng(t),`Firebase Storage: ${e} (${Ng(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ig.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Ng(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ag,Cg,Sg,xg;function Ng(t){return"storage/"+t}function Rg(){return new Ig(Ag.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function qg(){return new Ig(Ag.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Lg(){return new Ig(Ag.CANCELED,"User canceled the upload/download.")}function Dg(t){return new Ig(Ag.INVALID_ARGUMENT,t)}function Mg(){return new Ig(Ag.APP_DELETED,"The Firebase app was deleted.")}function Og(t){throw new Ig(Ag.INTERNAL_ERROR,"Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Cg=Ag||(Ag={})).UNKNOWN="unknown",Cg.OBJECT_NOT_FOUND="object-not-found",Cg.BUCKET_NOT_FOUND="bucket-not-found",Cg.PROJECT_NOT_FOUND="project-not-found",Cg.QUOTA_EXCEEDED="quota-exceeded",Cg.UNAUTHENTICATED="unauthenticated",Cg.UNAUTHORIZED="unauthorized",Cg.UNAUTHORIZED_APP="unauthorized-app",Cg.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",Cg.INVALID_CHECKSUM="invalid-checksum",Cg.CANCELED="canceled",Cg.INVALID_EVENT_NAME="invalid-event-name",Cg.INVALID_URL="invalid-url",Cg.INVALID_DEFAULT_BUCKET="invalid-default-bucket",Cg.NO_DEFAULT_BUCKET="no-default-bucket",Cg.CANNOT_SLICE_BLOB="cannot-slice-blob",Cg.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",Cg.NO_DOWNLOAD_URL="no-download-url",Cg.INVALID_ARGUMENT="invalid-argument",Cg.INVALID_ARGUMENT_COUNT="invalid-argument-count",Cg.APP_DELETED="app-deleted",Cg.INVALID_ROOT_OPERATION="invalid-root-operation",Cg.INVALID_FORMAT="invalid-format",Cg.INTERNAL_ERROR="internal-error",Cg.UNSUPPORTED_ENVIRONMENT="unsupported-environment";class Pg{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=Pg.makeFromUrl(t,e)}catch(e){return new Pg(t,"")}if(""===n.path)return n;throw i=t,new Ig(Ag.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+i+"'.");var i}static makeFromUrl(t,e){let n=null;const i="([A-Za-z0-9.\\-_]+)";const s=new RegExp("^gs://"+i+"(/(.*))?$","i");function r(t){t.path_=decodeURIComponent(t.path)}const o=e.replace(/[.]/g,"\\."),a=[{regex:s,indices:{bucket:1,path:3},postModify:function(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${i}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:r},{regex:new RegExp(`^https?://${e===Eg?"(?:storage.googleapis.com|storage.cloud.google.com)":e}/${i}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:r}];for(let e=0;e<a.length;e++){const i=a[e],s=i.regex.exec(t);if(s){const t=s[i.indices.bucket];let e=s[i.indices.path];e||(e=""),n=new Pg(t,e),i.postModify(n);break}}if(null==n)throw function(t){return new Ig(Ag.INVALID_URL,"Invalid URL '"+t+"'.")}(t);return n}}class Ug{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fg(t){return"string"==typeof t||t instanceof String}function Vg(t,e,n,i){if(i<e)throw Dg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Dg(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t,e,n){let i=e;return null==n&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function Bg(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){n=n+(e(i)+"="+e(t[i]))+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $g(t,e){const n=t>=500&&t<600,i=-1!==[408,429].indexOf(t),s=-1!==e.indexOf(t);return n||i||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(xg=Sg||(Sg={}))[xg.NO_ERROR=0]="NO_ERROR",xg[xg.NETWORK_ERROR=1]="NETWORK_ERROR",xg[xg.ABORT=2]="ABORT";class Hg{constructor(t,e,n,i,s,r,o,a,c,l,u,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=r,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=l,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{const n=this.resolve_,i=this.reject_,s=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(s,s.getResponse());void 0!==t?n(t):n()}catch(t){i(t)}else if(null!==s){const t=Rg();t.serverResponse=s.getErrorText(),this.errorCallback_?i(this.errorCallback_(s,t)):i(t)}else if(e.canceled){i(this.appDelete_?Mg():Lg())}else{i(qg())}};this.canceled_?t(0,new zg(!1,null,!0)):this.backoffId_=function(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function c(){return 2===a}let l=!1;function u(...t){l||(l=!0,e.apply(null,t))}function h(e){s=setTimeout((()=>{s=null,t(f,c())}),e)}function d(){r&&clearTimeout(r)}function f(t,...e){if(l)return void d();if(t)return d(),void u.call(null,t,...e);if(c()||o)return d(),void u.call(null,t,...e);let n;i<64&&(i*=2),1===a?(a=2,n=0):n=1e3*(i+Math.random()),h(n)}let p=!1;function m(t){p||(p=!0,d(),l||(null!==s?(t||(a=2),clearTimeout(s),h(0)):t||(a=1)))}return h(0),r=setTimeout((()=>{o=!0,m(!0)}),n),m}(((t,e)=>{if(e)return void t(!1,new zg(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const e=n.getErrorCode()===Sg.NO_ERROR,s=n.getStatus();if(!e||$g(s,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===Sg.ABORT;return void t(!1,new zg(!1,null,e))}const r=-1!==this.successCodes_.indexOf(s);t(!0,new zg(r,n))}))}),t,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class zg{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kg(t){let e;try{e=JSON.parse(t)}catch(t){return null}return"object"!=typeof(n=e)||Array.isArray(n)?null:e;var n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t,e){return e}class Qg{constructor(t,e,n,i){this.server=t,this.local=e||t,this.writable=!!n,this.xform=i||Wg}}let Xg=null;function Yg(){if(Xg)return Xg;const t=[];t.push(new Qg("bucket")),t.push(new Qg("generation")),t.push(new Qg("metageneration")),t.push(new Qg("name","fullPath",!0));const e=new Qg("name");e.xform=function(t,e){return function(t){return!Fg(t)||t.length<2?t:Gg(t)}(e)},t.push(e);const n=new Qg("size");return n.xform=function(t,e){return void 0!==e?Number(e):e},t.push(n),t.push(new Qg("timeCreated")),t.push(new Qg("updated")),t.push(new Qg("md5Hash",null,!0)),t.push(new Qg("cacheControl",null,!0)),t.push(new Qg("contentDisposition",null,!0)),t.push(new Qg("contentEncoding",null,!0)),t.push(new Qg("contentLanguage",null,!0)),t.push(new Qg("contentType",null,!0)),t.push(new Qg("metadata","customMetadata",!0)),Xg=t,Xg}function Jg(t,e,n){const i={type:"file"},s=n.length;for(let t=0;t<s;t++){const s=n[t];i[s.local]=s.xform(i,e[s.server])}return function(t,e){Object.defineProperty(t,"ref",{get:function(){const n=t.bucket,i=t.fullPath,s=new Pg(n,i);return e._makeStorageReference(s)}})}(i,t),i}function Zg(t,e,n){const i=Kg(e);if(null===i)return null;return Jg(t,i,n)}class ty{constructor(t,e,n,i){this.url=t,this.method=e,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(t){if(!t)throw Rg()}function ny(t,e){return function(n,i){const s=Zg(t,i,e);return ey(null!==s),function(t,e,n,i){const s=Kg(e);if(null===s)return null;if(!Fg(s.downloadTokens))return null;const r=s.downloadTokens;if(0===r.length)return null;const o=encodeURIComponent;return r.split(",").map((e=>{const s=t.bucket,r=t.fullPath;return jg("/b/"+o(s)+"/o/"+o(r),n,i)+Bg({alt:"media",token:e})}))[0]}(s,i,t.host,t._protocol)}}function iy(t){return function(e,n){let i;var s,r;return 401===e.getStatus()?i=e.getErrorText().includes("Firebase App Check token is invalid")?new Ig(Ag.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new Ig(Ag.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===e.getStatus()?(r=t.bucket,i=new Ig(Ag.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===e.getStatus()?(s=t.path,i=new Ig(Ag.UNAUTHORIZED,"User does not have permission to access '"+s+"'.")):i=n,i.status=e.getStatus(),i.serverResponse=n.serverResponse,i}}function sy(t){const e=iy(t);return function(n,i){let s=e(n,i);var r;return 404===n.getStatus()&&(r=t.path,s=new Ig(Ag.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")),s.serverResponse=i.serverResponse,s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ry=null;class oy{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Sg.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=Sg.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=Sg.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,i){if(this.sent_)throw Og("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==i)for(const t in i)i.hasOwnProperty(t)&&this.xhr_.setRequestHeader(t,i[t].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Og("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Og("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw Og("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Og("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class ay extends oy{initXhr(){this.xhr_.responseType="text"}}function cy(){return ry?ry():new ay}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ly{constructor(t,e){this._service=t,this._location=e instanceof Pg?e:Pg.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new ly(t,e)}get root(){const t=new Pg(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Gg(this._location.path)}get storage(){return this._service}get parent(){const t=function(t){if(0===t.length)return null;const e=t.lastIndexOf("/");return-1===e?"":t.slice(0,e)}(this._location.path);if(null===t)return null;const e=new Pg(this._location.bucket,t);return new ly(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw function(t){return new Ig(Ag.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(t)}}function uy(t){t._throwIfRoot("getDownloadURL");const e=function(t,e,n){const i=jg(e.fullServerUrl(),t.host,t._protocol),s=t.maxOperationRetryTime,r=new ty(i,"GET",ny(t,n),s);return r.errorHandler=sy(e),r}(t.storage,t._location,Yg());return t.storage.makeRequestWithTokens(e,cy).then((t=>{if(null===t)throw new Ig(Ag.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return t}))}function hy(t,e){const n=function(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}(t._location.path,e),i=new Pg(t._location.bucket,n);return new ly(t.storage,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(t,e){if(t instanceof my){const n=t;if(null==n._bucket)throw new Ig(Ag.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+kg+"' property when initializing the app?");const i=new ly(n,n._bucket);return null!=e?dy(i,e):i}return void 0!==e?hy(t,e):t}function fy(t,e){if(e&&/^[A-Za-z]+:\/\//.test(e)){if(t instanceof my)return new ly(t,e);throw Dg("To use ref(service, url), the first argument must be a Storage instance.")}return dy(t,e)}function py(t,e){const n=null==e?void 0:e[kg];return null==n?null:Pg.makeFromBucketSpec(n,t)}class my{constructor(t,e,n,i,s){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Eg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=i?Pg.makeFromBucketSpec(i,this._host):py(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=Pg.makeFromBucketSpec(this._url,t):this._bucket=py(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Vg("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Vg("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){return(await t.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ly(this,t)}_makeRequest(t,e,n,i,s=!0){if(this._deleted)return new Ug(Mg());{const r=function(t,e,n,i,s,r,o=!0){const a=Bg(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return function(t,e){e&&(t["X-Firebase-GMPID"]=e)}(l,e),function(t,e){null!==e&&e.length>0&&(t.Authorization="Firebase "+e)}(l,n),function(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!=e?e:"AppManager")}(l,r),function(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}(l,i),new Hg(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,this._appId,n,i,e,this._firebaseVersion,s);return this._requests.add(r),r.getPromise().then((()=>this._requests.delete(r)),(()=>this._requests.delete(r))),r}}async makeRequestWithTokens(t,e){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,i).getPromise()}}const gy="@firebase/storage",yy="0.11.1",vy="storage";function _y(t){return uy(t=z(t))}function wy(t,e){return fy(t=z(t),e)}function by(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new my(n,i,s,e,Mt)}function Ty(t){return t}Rt(new K(vy,by,"PUBLIC").setMultipleInstances(!0)),Ut(gy,yy,""),Ut(gy,yy,"esm2017");var Ey=1,ky=2,Iy=3,Ay=4,Cy=1e-6;function Sy(t){return"translate("+t+",0)"}function xy(t){return"translate(0,"+t+")"}function Ny(t){return e=>+t(e)}function Ry(t,e){return e=Math.max(0,t.bandwidth()-2*e)/2,t.round()&&(e=Math.round(e)),n=>+t(n)+e}function qy(){return!this.__axis}function Ly(t,e){var n=[],i=null,s=null,r=6,o=6,a=3,c="undefined"!=typeof window&&window.devicePixelRatio>1?0:.5,l=t===Ey||t===Ay?-1:1,u=t===Ay||t===ky?"x":"y",h=t===Ey||t===Iy?Sy:xy;function d(d){var f=null==i?e.ticks?e.ticks.apply(e,n):e.domain():i,p=null==s?e.tickFormat?e.tickFormat.apply(e,n):Ty:s,m=Math.max(r,0)+a,g=e.range(),y=+g[0]+c,v=+g[g.length-1]+c,_=(e.bandwidth?Ry:Ny)(e.copy(),c),w=d.selection?d.selection():d,b=w.selectAll(".domain").data([null]),T=w.selectAll(".tick").data(f,e).order(),E=T.exit(),k=T.enter().append("g").attr("class","tick"),I=T.select("line"),A=T.select("text");b=b.merge(b.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),T=T.merge(k),I=I.merge(k.append("line").attr("stroke","currentColor").attr(u+"2",l*r)),A=A.merge(k.append("text").attr("fill","currentColor").attr(u,l*m).attr("dy",t===Ey?"0em":t===Iy?"0.71em":"0.32em")),d!==w&&(b=b.transition(d),T=T.transition(d),I=I.transition(d),A=A.transition(d),E=E.transition(d).attr("opacity",Cy).attr("transform",(function(t){return isFinite(t=_(t))?h(t+c):this.getAttribute("transform")})),k.attr("opacity",Cy).attr("transform",(function(t){var e=this.parentNode.__axis;return h((e&&isFinite(e=e(t))?e:_(t))+c)}))),E.remove(),b.attr("d",t===Ay||t===ky?o?"M"+l*o+","+y+"H"+c+"V"+v+"H"+l*o:"M"+c+","+y+"V"+v:o?"M"+y+","+l*o+"V"+c+"H"+v+"V"+l*o:"M"+y+","+c+"H"+v),T.attr("opacity",1).attr("transform",(function(t){return h(_(t)+c)})),I.attr(u+"2",l*r),A.attr(u,l*m).text(p),w.filter(qy).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===ky?"start":t===Ay?"end":"middle"),w.each((function(){this.__axis=_}))}return d.scale=function(t){return arguments.length?(e=t,d):e},d.ticks=function(){return n=Array.from(arguments),d},d.tickArguments=function(t){return arguments.length?(n=null==t?[]:Array.from(t),d):n.slice()},d.tickValues=function(t){return arguments.length?(i=null==t?null:Array.from(t),d):i&&i.slice()},d.tickFormat=function(t){return arguments.length?(s=t,d):s},d.tickSize=function(t){return arguments.length?(r=o=+t,d):r},d.tickSizeInner=function(t){return arguments.length?(r=+t,d):r},d.tickSizeOuter=function(t){return arguments.length?(o=+t,d):o},d.tickPadding=function(t){return arguments.length?(a=+t,d):a},d.offset=function(t){return arguments.length?(c=+t,d):c},d}var Dy={value:()=>{}};function My(){for(var t,e=0,n=arguments.length,i={};e<n;++e){if(!(t=arguments[e]+"")||t in i||/[\s.]/.test(t))throw new Error("illegal type: "+t);i[t]=[]}return new Oy(i)}function Oy(t){this._=t}function Py(t,e){for(var n,i=0,s=t.length;i<s;++i)if((n=t[i]).name===e)return n.value}function Uy(t,e,n){for(var i=0,s=t.length;i<s;++i)if(t[i].name===e){t[i]=Dy,t=t.slice(0,i).concat(t.slice(i+1));break}return null!=n&&t.push({name:e,value:n}),t}Oy.prototype=My.prototype={constructor:Oy,on:function(t,e){var n,i,s=this._,r=(i=s,(t+"").trim().split(/^|\s+/).map((function(t){var e="",n=t.indexOf(".");if(n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),t&&!i.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}}))),o=-1,a=r.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++o<a;)if(n=(t=r[o]).type)s[n]=Uy(s[n],t.name,e);else if(null==e)for(n in s)s[n]=Uy(s[n],t.name,null);return this}for(;++o<a;)if((n=(t=r[o]).type)&&(n=Py(s[n],t.name)))return n},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new Oy(t)},call:function(t,e){if((n=arguments.length-2)>0)for(var n,i,s=new Array(n),r=0;r<n;++r)s[r]=arguments[r+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(r=0,n=(i=this._[t]).length;r<n;++r)i[r].value.apply(e,s)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],s=0,r=i.length;s<r;++s)i[s].value.apply(e,n)}};var Fy=My;function Vy(){}function jy(t){return null==t?Vy:function(){return this.querySelector(t)}}function By(){return[]}function $y(t){return null==t?By:function(){return this.querySelectorAll(t)}}function Hy(t){return function(){return null==(e=t.apply(this,arguments))?[]:Array.isArray(e)?e:Array.from(e);var e}}function zy(t){return function(){return this.matches(t)}}function Ky(t){return function(e){return e.matches(t)}}var Gy=Array.prototype.find;function Wy(){return this.firstElementChild}var Qy=Array.prototype.filter;function Xy(){return Array.from(this.children)}function Yy(t){return new Array(t.length)}function Jy(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}function Zy(t,e,n,i,s,r){for(var o,a=0,c=e.length,l=r.length;a<l;++a)(o=e[a])?(o.__data__=r[a],i[a]=o):n[a]=new Jy(t,r[a]);for(;a<c;++a)(o=e[a])&&(s[a]=o)}function tv(t,e,n,i,s,r,o){var a,c,l,u=new Map,h=e.length,d=r.length,f=new Array(h);for(a=0;a<h;++a)(c=e[a])&&(f[a]=l=o.call(c,c.__data__,a,e)+"",u.has(l)?s[a]=c:u.set(l,c));for(a=0;a<d;++a)l=o.call(t,r[a],a,r)+"",(c=u.get(l))?(i[a]=c,c.__data__=r[a],u.delete(l)):n[a]=new Jy(t,r[a]);for(a=0;a<h;++a)(c=e[a])&&u.get(f[a])===c&&(s[a]=c)}function ev(t){return t.__data__}function nv(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function iv(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}Jy.prototype={constructor:Jy,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var sv="http://www.w3.org/1999/xhtml",rv={svg:"http://www.w3.org/2000/svg",xhtml:sv,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function ov(t){var e=t+="",n=e.indexOf(":");return n>=0&&"xmlns"!==(e=t.slice(0,n))&&(t=t.slice(n+1)),rv.hasOwnProperty(e)?{space:rv[e],local:t}:t}function av(t){return function(){this.removeAttribute(t)}}function cv(t){return function(){this.removeAttributeNS(t.space,t.local)}}function lv(t,e){return function(){this.setAttribute(t,e)}}function uv(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function hv(t,e){return function(){var n=e.apply(this,arguments);null==n?this.removeAttribute(t):this.setAttribute(t,n)}}function dv(t,e){return function(){var n=e.apply(this,arguments);null==n?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function fv(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function pv(t){return function(){this.style.removeProperty(t)}}function mv(t,e,n){return function(){this.style.setProperty(t,e,n)}}function gv(t,e,n){return function(){var i=e.apply(this,arguments);null==i?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function yv(t,e){return t.style.getPropertyValue(e)||fv(t).getComputedStyle(t,null).getPropertyValue(e)}function vv(t){return function(){delete this[t]}}function _v(t,e){return function(){this[t]=e}}function wv(t,e){return function(){var n=e.apply(this,arguments);null==n?delete this[t]:this[t]=n}}function bv(t){return t.trim().split(/^|\s+/)}function Tv(t){return t.classList||new Ev(t)}function Ev(t){this._node=t,this._names=bv(t.getAttribute("class")||"")}function kv(t,e){for(var n=Tv(t),i=-1,s=e.length;++i<s;)n.add(e[i])}function Iv(t,e){for(var n=Tv(t),i=-1,s=e.length;++i<s;)n.remove(e[i])}function Av(t){return function(){kv(this,t)}}function Cv(t){return function(){Iv(this,t)}}function Sv(t,e){return function(){(e.apply(this,arguments)?kv:Iv)(this,t)}}function xv(){this.textContent=""}function Nv(t){return function(){this.textContent=t}}function Rv(t){return function(){var e=t.apply(this,arguments);this.textContent=null==e?"":e}}function qv(){this.innerHTML=""}function Lv(t){return function(){this.innerHTML=t}}function Dv(t){return function(){var e=t.apply(this,arguments);this.innerHTML=null==e?"":e}}function Mv(){this.nextSibling&&this.parentNode.appendChild(this)}function Ov(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Pv(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===sv&&e.documentElement.namespaceURI===sv?e.createElement(t):e.createElementNS(n,t)}}function Uv(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Fv(t){var e=ov(t);return(e.local?Uv:Pv)(e)}function Vv(){return null}function jv(){var t=this.parentNode;t&&t.removeChild(this)}function Bv(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function $v(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function Hv(t){return function(){var e=this.__on;if(e){for(var n,i=0,s=-1,r=e.length;i<r;++i)n=e[i],t.type&&n.type!==t.type||n.name!==t.name?e[++s]=n:this.removeEventListener(n.type,n.listener,n.options);++s?e.length=s:delete this.__on}}}function zv(t,e,n){return function(){var i,s=this.__on,r=function(t){return function(e){t.call(this,e,this.__data__)}}(e);if(s)for(var o=0,a=s.length;o<a;++o)if((i=s[o]).type===t.type&&i.name===t.name)return this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=r,i.options=n),void(i.value=e);this.addEventListener(t.type,r,n),i={type:t.type,name:t.name,value:e,listener:r,options:n},s?s.push(i):this.__on=[i]}}function Kv(t,e,n){var i=fv(t),s=i.CustomEvent;"function"==typeof s?s=new s(e,n):(s=i.document.createEvent("Event"),n?(s.initEvent(e,n.bubbles,n.cancelable),s.detail=n.detail):s.initEvent(e,!1,!1)),t.dispatchEvent(s)}function Gv(t,e){return function(){return Kv(this,t,e)}}function Wv(t,e){return function(){return Kv(this,t,e.apply(this,arguments))}}Ev.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var Qv=[null];function Xv(t,e){this._groups=t,this._parents=e}function Yv(){return new Xv([[document.documentElement]],Qv)}Xv.prototype=Yv.prototype={constructor:Xv,select:function(t){"function"!=typeof t&&(t=jy(t));for(var e=this._groups,n=e.length,i=new Array(n),s=0;s<n;++s)for(var r,o,a=e[s],c=a.length,l=i[s]=new Array(c),u=0;u<c;++u)(r=a[u])&&(o=t.call(r,r.__data__,u,a))&&("__data__"in r&&(o.__data__=r.__data__),l[u]=o);return new Xv(i,this._parents)},selectAll:function(t){t="function"==typeof t?Hy(t):$y(t);for(var e=this._groups,n=e.length,i=[],s=[],r=0;r<n;++r)for(var o,a=e[r],c=a.length,l=0;l<c;++l)(o=a[l])&&(i.push(t.call(o,o.__data__,l,a)),s.push(o));return new Xv(i,s)},selectChild:function(t){return this.select(null==t?Wy:function(t){return function(){return Gy.call(this.children,t)}}("function"==typeof t?t:Ky(t)))},selectChildren:function(t){return this.selectAll(null==t?Xy:function(t){return function(){return Qy.call(this.children,t)}}("function"==typeof t?t:Ky(t)))},filter:function(t){"function"!=typeof t&&(t=zy(t));for(var e=this._groups,n=e.length,i=new Array(n),s=0;s<n;++s)for(var r,o=e[s],a=o.length,c=i[s]=[],l=0;l<a;++l)(r=o[l])&&t.call(r,r.__data__,l,o)&&c.push(r);return new Xv(i,this._parents)},data:function(t,e){if(!arguments.length)return Array.from(this,ev);var n,i=e?tv:Zy,s=this._parents,r=this._groups;"function"!=typeof t&&(n=t,t=function(){return n});for(var o=r.length,a=new Array(o),c=new Array(o),l=new Array(o),u=0;u<o;++u){var h=s[u],d=r[u],f=d.length,p=nv(t.call(h,h&&h.__data__,u,s)),m=p.length,g=c[u]=new Array(m),y=a[u]=new Array(m);i(h,d,g,y,l[u]=new Array(f),p,e);for(var v,_,w=0,b=0;w<m;++w)if(v=g[w]){for(w>=b&&(b=w+1);!(_=y[b])&&++b<m;);v._next=_||null}}return(a=new Xv(a,s))._enter=c,a._exit=l,a},enter:function(){return new Xv(this._enter||this._groups.map(Yy),this._parents)},exit:function(){return new Xv(this._exit||this._groups.map(Yy),this._parents)},join:function(t,e,n){var i=this.enter(),s=this,r=this.exit();return"function"==typeof t?(i=t(i))&&(i=i.selection()):i=i.append(t+""),null!=e&&(s=e(s))&&(s=s.selection()),null==n?r.remove():n(r),i&&s?i.merge(s).order():s},merge:function(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,s=n.length,r=i.length,o=Math.min(s,r),a=new Array(s),c=0;c<o;++c)for(var l,u=n[c],h=i[c],d=u.length,f=a[c]=new Array(d),p=0;p<d;++p)(l=u[p]||h[p])&&(f[p]=l);for(;c<s;++c)a[c]=n[c];return new Xv(a,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i,s=t[e],r=s.length-1,o=s[r];--r>=0;)(i=s[r])&&(o&&4^i.compareDocumentPosition(o)&&o.parentNode.insertBefore(i,o),o=i);return this},sort:function(t){function e(e,n){return e&&n?t(e.__data__,n.__data__):!e-!n}t||(t=iv);for(var n=this._groups,i=n.length,s=new Array(i),r=0;r<i;++r){for(var o,a=n[r],c=a.length,l=s[r]=new Array(c),u=0;u<c;++u)(o=a[u])&&(l[u]=o);l.sort(e)}return new Xv(s,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],s=0,r=i.length;s<r;++s){var o=i[s];if(o)return o}return null},size:function(){let t=0;for(const e of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var s,r=e[n],o=0,a=r.length;o<a;++o)(s=r[o])&&t.call(s,s.__data__,o,r);return this},attr:function(t,e){var n=ov(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((null==e?n.local?cv:av:"function"==typeof e?n.local?dv:hv:n.local?uv:lv)(n,e))},style:function(t,e,n){return arguments.length>1?this.each((null==e?pv:"function"==typeof e?gv:mv)(t,e,null==n?"":n)):yv(this.node(),t)},property:function(t,e){return arguments.length>1?this.each((null==e?vv:"function"==typeof e?wv:_v)(t,e)):this.node()[t]},classed:function(t,e){var n=bv(t+"");if(arguments.length<2){for(var i=Tv(this.node()),s=-1,r=n.length;++s<r;)if(!i.contains(n[s]))return!1;return!0}return this.each(("function"==typeof e?Sv:e?Av:Cv)(n,e))},text:function(t){return arguments.length?this.each(null==t?xv:("function"==typeof t?Rv:Nv)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?qv:("function"==typeof t?Dv:Lv)(t)):this.node().innerHTML},raise:function(){return this.each(Mv)},lower:function(){return this.each(Ov)},append:function(t){var e="function"==typeof t?t:Fv(t);return this.select((function(){return this.appendChild(e.apply(this,arguments))}))},insert:function(t,e){var n="function"==typeof t?t:Fv(t),i=null==e?Vv:"function"==typeof e?e:jy(e);return this.select((function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)}))},remove:function(){return this.each(jv)},clone:function(t){return this.select(t?$v:Bv)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,e,n){var i,s,r=function(t){return t.trim().split(/^|\s+/).map((function(t){var e="",n=t.indexOf(".");return n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),{type:t,name:e}}))}(t+""),o=r.length;if(!(arguments.length<2)){for(a=e?zv:Hv,i=0;i<o;++i)this.each(a(r[i],e,n));return this}var a=this.node().__on;if(a)for(var c,l=0,u=a.length;l<u;++l)for(i=0,c=a[l];i<o;++i)if((s=r[i]).type===c.type&&s.name===c.name)return c.value},dispatch:function(t,e){return this.each(("function"==typeof e?Wv:Gv)(t,e))},[Symbol.iterator]:function*(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i,s=t[e],r=0,o=s.length;r<o;++r)(i=s[r])&&(yield i)}};var Jv=Yv;function Zv(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function t_(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function e_(){}var n_=.7,i_=1.4285714285714286,s_="\\s*([+-]?\\d+)\\s*",r_="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",o_="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",a_=/^#([0-9a-f]{3,8})$/,c_=new RegExp(`^rgb\\(${s_},${s_},${s_}\\)$`),l_=new RegExp(`^rgb\\(${o_},${o_},${o_}\\)$`),u_=new RegExp(`^rgba\\(${s_},${s_},${s_},${r_}\\)$`),h_=new RegExp(`^rgba\\(${o_},${o_},${o_},${r_}\\)$`),d_=new RegExp(`^hsl\\(${r_},${o_},${o_}\\)$`),f_=new RegExp(`^hsla\\(${r_},${o_},${o_},${r_}\\)$`),p_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function m_(){return this.rgb().formatHex()}function g_(){return this.rgb().formatRgb()}function y_(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=a_.exec(t))?(n=e[1].length,e=parseInt(e[1],16),6===n?v_(e):3===n?new b_(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===n?__(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===n?__(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=c_.exec(t))?new b_(e[1],e[2],e[3],1):(e=l_.exec(t))?new b_(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=u_.exec(t))?__(e[1],e[2],e[3],e[4]):(e=h_.exec(t))?__(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=d_.exec(t))?C_(e[1],e[2]/100,e[3]/100,1):(e=f_.exec(t))?C_(e[1],e[2]/100,e[3]/100,e[4]):p_.hasOwnProperty(t)?v_(p_[t]):"transparent"===t?new b_(NaN,NaN,NaN,0):null}function v_(t){return new b_(t>>16&255,t>>8&255,255&t,1)}function __(t,e,n,i){return i<=0&&(t=e=n=NaN),new b_(t,e,n,i)}function w_(t,e,n,i){return 1===arguments.length?((s=t)instanceof e_||(s=y_(s)),s?new b_((s=s.rgb()).r,s.g,s.b,s.opacity):new b_):new b_(t,e,n,null==i?1:i);var s}function b_(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}function T_(){return`#${A_(this.r)}${A_(this.g)}${A_(this.b)}`}function E_(){const t=k_(this.opacity);return`${1===t?"rgb(":"rgba("}${I_(this.r)}, ${I_(this.g)}, ${I_(this.b)}${1===t?")":`, ${t})`}`}function k_(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function I_(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function A_(t){return((t=I_(t))<16?"0":"")+t.toString(16)}function C_(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new x_(t,e,n,i)}function S_(t){if(t instanceof x_)return new x_(t.h,t.s,t.l,t.opacity);if(t instanceof e_||(t=y_(t)),!t)return new x_;if(t instanceof x_)return t;var e=(t=t.rgb()).r/255,n=t.g/255,i=t.b/255,s=Math.min(e,n,i),r=Math.max(e,n,i),o=NaN,a=r-s,c=(r+s)/2;return a?(o=e===r?(n-i)/a+6*(n<i):n===r?(i-e)/a+2:(e-n)/a+4,a/=c<.5?r+s:2-r-s,o*=60):a=c>0&&c<1?0:o,new x_(o,a,c,t.opacity)}function x_(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}function N_(t){return(t=(t||0)%360)<0?t+360:t}function R_(t){return Math.max(0,Math.min(1,t||0))}function q_(t,e,n){return 255*(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)}function L_(t,e,n,i,s){var r=t*t,o=r*t;return((1-3*t+3*r-o)*e+(4-6*r+3*o)*n+(1+3*t+3*r-3*o)*i+o*s)/6}Zv(e_,y_,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:m_,formatHex:m_,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return S_(this).formatHsl()},formatRgb:g_,toString:g_}),Zv(b_,w_,t_(e_,{brighter(t){return t=null==t?i_:Math.pow(i_,t),new b_(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?n_:Math.pow(n_,t),new b_(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new b_(I_(this.r),I_(this.g),I_(this.b),k_(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:T_,formatHex:T_,formatHex8:function(){return`#${A_(this.r)}${A_(this.g)}${A_(this.b)}${A_(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:E_,toString:E_})),Zv(x_,(function(t,e,n,i){return 1===arguments.length?S_(t):new x_(t,e,n,null==i?1:i)}),t_(e_,{brighter(t){return t=null==t?i_:Math.pow(i_,t),new x_(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?n_:Math.pow(n_,t),new x_(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,s=2*n-i;return new b_(q_(t>=240?t-240:t+120,s,i),q_(t,s,i),q_(t<120?t+240:t-120,s,i),this.opacity)},clamp(){return new x_(N_(this.h),R_(this.s),R_(this.l),k_(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=k_(this.opacity);return`${1===t?"hsl(":"hsla("}${N_(this.h)}, ${100*R_(this.s)}%, ${100*R_(this.l)}%${1===t?")":`, ${t})`}`}}));var D_=t=>()=>t;function M_(t,e){return function(n){return t+n*e}}function O_(t){return 1==(t=+t)?P_:function(e,n){return n-e?function(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}(e,n,t):D_(isNaN(e)?n:e)}}function P_(t,e){var n=e-t;return n?M_(t,n):D_(isNaN(t)?e:t)}var U_=function t(e){var n=O_(e);function i(t,e){var i=n((t=w_(t)).r,(e=w_(e)).r),s=n(t.g,e.g),r=n(t.b,e.b),o=P_(t.opacity,e.opacity);return function(e){return t.r=i(e),t.g=s(e),t.b=r(e),t.opacity=o(e),t+""}}return i.gamma=t,i}(1);function F_(t){return function(e){var n,i,s=e.length,r=new Array(s),o=new Array(s),a=new Array(s);for(n=0;n<s;++n)i=w_(e[n]),r[n]=i.r||0,o[n]=i.g||0,a[n]=i.b||0;return r=t(r),o=t(o),a=t(a),i.opacity=1,function(t){return i.r=r(t),i.g=o(t),i.b=a(t),i+""}}}F_((function(t){var e=t.length-1;return function(n){var i=n<=0?n=0:n>=1?(n=1,e-1):Math.floor(n*e),s=t[i],r=t[i+1],o=i>0?t[i-1]:2*s-r,a=i<e-1?t[i+2]:2*r-s;return L_((n-i/e)*e,o,s,r,a)}})),F_((function(t){var e=t.length;return function(n){var i=Math.floor(((n%=1)<0?++n:n)*e),s=t[(i+e-1)%e],r=t[i%e],o=t[(i+1)%e],a=t[(i+2)%e];return L_((n-i/e)*e,s,r,o,a)}}));function V_(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}var j_=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,B_=new RegExp(j_.source,"g");function $_(t,e){var n,i,s,r=j_.lastIndex=B_.lastIndex=0,o=-1,a=[],c=[];for(t+="",e+="";(n=j_.exec(t))&&(i=B_.exec(e));)(s=i.index)>r&&(s=e.slice(r,s),a[o]?a[o]+=s:a[++o]=s),(n=n[0])===(i=i[0])?a[o]?a[o]+=i:a[++o]=i:(a[++o]=null,c.push({i:o,x:V_(n,i)})),r=B_.lastIndex;return r<e.length&&(s=e.slice(r),a[o]?a[o]+=s:a[++o]=s),a.length<2?c[0]?function(t){return function(e){return t(e)+""}}(c[0].x):function(t){return function(){return t}}(e):(e=c.length,function(t){for(var n,i=0;i<e;++i)a[(n=c[i]).i]=n.x(t);return a.join("")})}var H_,z_,K_=0,G_=0,W_=0,Q_=1e3,X_=0,Y_=0,J_=0,Z_="object"==typeof performance&&performance.now?performance:Date,tw="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function ew(){return Y_||(tw(nw),Y_=Z_.now()+J_)}function nw(){Y_=0}function iw(){this._call=this._time=this._next=null}function sw(t,e,n){var i=new iw;return i.restart(t,e,n),i}function rw(){Y_=(X_=Z_.now())+J_,K_=G_=0;try{!function(){ew(),++K_;for(var t,e=H_;e;)(t=Y_-e._time)>=0&&e._call.call(void 0,t),e=e._next;--K_}()}finally{K_=0,function(){var t,e,n=H_,i=1/0;for(;n;)n._call?(i>n._time&&(i=n._time),t=n,n=n._next):(e=n._next,n._next=null,n=t?t._next=e:H_=e);z_=t,aw(i)}(),Y_=0}}function ow(){var t=Z_.now(),e=t-X_;e>Q_&&(J_-=e,X_=t)}function aw(t){K_||(G_&&(G_=clearTimeout(G_)),t-Y_>24?(t<1/0&&(G_=setTimeout(rw,t-Z_.now()-J_)),W_&&(W_=clearInterval(W_))):(W_||(X_=Z_.now(),W_=setInterval(ow,Q_)),K_=1,tw(rw)))}function cw(t,e,n){var i=new iw;return e=null==e?0:+e,i.restart((n=>{i.stop(),t(n+e)}),e,n),i}iw.prototype=sw.prototype={constructor:iw,restart:function(t,e,n){if("function"!=typeof t)throw new TypeError("callback is not a function");n=(null==n?ew():+n)+(null==e?0:+e),this._next||z_===this||(z_?z_._next=this:H_=this,z_=this),this._call=t,this._time=n,aw()},stop:function(){this._call&&(this._call=null,this._time=1/0,aw())}};var lw=Fy("start","end","cancel","interrupt"),uw=[],hw=0,dw=1,fw=2,pw=3,mw=4,gw=5,yw=6;function vw(t,e,n,i,s,r){var o=t.__transition;if(o){if(n in o)return}else t.__transition={};!function(t,e,n){var i,s=t.__transition;function r(t){n.state=dw,n.timer.restart(o,n.delay,n.time),n.delay<=t&&o(t-n.delay)}function o(r){var l,u,h,d;if(n.state!==dw)return c();for(l in s)if((d=s[l]).name===n.name){if(d.state===pw)return cw(o);d.state===mw?(d.state=yw,d.timer.stop(),d.on.call("interrupt",t,t.__data__,d.index,d.group),delete s[l]):+l<e&&(d.state=yw,d.timer.stop(),d.on.call("cancel",t,t.__data__,d.index,d.group),delete s[l])}if(cw((function(){n.state===pw&&(n.state=mw,n.timer.restart(a,n.delay,n.time),a(r))})),n.state=fw,n.on.call("start",t,t.__data__,n.index,n.group),n.state===fw){for(n.state=pw,i=new Array(h=n.tween.length),l=0,u=-1;l<h;++l)(d=n.tween[l].value.call(t,t.__data__,n.index,n.group))&&(i[++u]=d);i.length=u+1}}function a(e){for(var s=e<n.duration?n.ease.call(null,e/n.duration):(n.timer.restart(c),n.state=gw,1),r=-1,o=i.length;++r<o;)i[r].call(t,s);n.state===gw&&(n.on.call("end",t,t.__data__,n.index,n.group),c())}function c(){for(var i in n.state=yw,n.timer.stop(),delete s[e],s)return;delete t.__transition}s[e]=n,n.timer=sw(r,0,n.time)}(t,n,{name:e,index:i,group:s,on:lw,tween:uw,time:r.time,delay:r.delay,duration:r.duration,ease:r.ease,timer:null,state:hw})}function _w(t,e){var n=bw(t,e);if(n.state>hw)throw new Error("too late; already scheduled");return n}function ww(t,e){var n=bw(t,e);if(n.state>pw)throw new Error("too late; already running");return n}function bw(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function Tw(t,e){var n,i,s,r=t.__transition,o=!0;if(r){for(s in e=null==e?null:e+"",r)(n=r[s]).name===e?(i=n.state>fw&&n.state<gw,n.state=yw,n.timer.stop(),n.on.call(i?"interrupt":"cancel",t,t.__data__,n.index,n.group),delete r[s]):o=!1;o&&delete t.__transition}}var Ew,kw=180/Math.PI,Iw={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function Aw(t,e,n,i,s,r){var o,a,c;return(o=Math.sqrt(t*t+e*e))&&(t/=o,e/=o),(c=t*n+e*i)&&(n-=t*c,i-=e*c),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,c/=a),t*i<e*n&&(t=-t,e=-e,c=-c,o=-o),{translateX:s,translateY:r,rotate:Math.atan2(e,t)*kw,skewX:Math.atan(c)*kw,scaleX:o,scaleY:a}}function Cw(t,e,n,i){function s(t){return t.length?t.pop()+" ":""}return function(r,o){var a=[],c=[];return r=t(r),o=t(o),function(t,i,s,r,o,a){if(t!==s||i!==r){var c=o.push("translate(",null,e,null,n);a.push({i:c-4,x:V_(t,s)},{i:c-2,x:V_(i,r)})}else(s||r)&&o.push("translate("+s+e+r+n)}(r.translateX,r.translateY,o.translateX,o.translateY,a,c),function(t,e,n,r){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),r.push({i:n.push(s(n)+"rotate(",null,i)-2,x:V_(t,e)})):e&&n.push(s(n)+"rotate("+e+i)}(r.rotate,o.rotate,a,c),function(t,e,n,r){t!==e?r.push({i:n.push(s(n)+"skewX(",null,i)-2,x:V_(t,e)}):e&&n.push(s(n)+"skewX("+e+i)}(r.skewX,o.skewX,a,c),function(t,e,n,i,r,o){if(t!==n||e!==i){var a=r.push(s(r)+"scale(",null,",",null,")");o.push({i:a-4,x:V_(t,n)},{i:a-2,x:V_(e,i)})}else 1===n&&1===i||r.push(s(r)+"scale("+n+","+i+")")}(r.scaleX,r.scaleY,o.scaleX,o.scaleY,a,c),r=o=null,function(t){for(var e,n=-1,i=c.length;++n<i;)a[(e=c[n]).i]=e.x(t);return a.join("")}}}var Sw=Cw((function(t){const e=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?Iw:Aw(e.a,e.b,e.c,e.d,e.e,e.f)}),"px, ","px)","deg)"),xw=Cw((function(t){return null==t?Iw:(Ew||(Ew=document.createElementNS("http://www.w3.org/2000/svg","g")),Ew.setAttribute("transform",t),(t=Ew.transform.baseVal.consolidate())?Aw((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):Iw)}),", ",")",")");function Nw(t,e){var n,i;return function(){var s=ww(this,t),r=s.tween;if(r!==n)for(var o=0,a=(i=n=r).length;o<a;++o)if(i[o].name===e){(i=i.slice()).splice(o,1);break}s.tween=i}}function Rw(t,e,n){var i,s;if("function"!=typeof n)throw new Error;return function(){var r=ww(this,t),o=r.tween;if(o!==i){s=(i=o).slice();for(var a={name:e,value:n},c=0,l=s.length;c<l;++c)if(s[c].name===e){s[c]=a;break}c===l&&s.push(a)}r.tween=s}}function qw(t,e,n){var i=t._id;return t.each((function(){var t=ww(this,i);(t.value||(t.value={}))[e]=n.apply(this,arguments)})),function(t){return bw(t,i).value[e]}}function Lw(t,e){var n;return("number"==typeof e?V_:e instanceof y_?U_:(n=y_(e))?(e=n,U_):$_)(t,e)}function Dw(t){return function(){this.removeAttribute(t)}}function Mw(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Ow(t,e,n){var i,s,r=n+"";return function(){var o=this.getAttribute(t);return o===r?null:o===i?s:s=e(i=o,n)}}function Pw(t,e,n){var i,s,r=n+"";return function(){var o=this.getAttributeNS(t.space,t.local);return o===r?null:o===i?s:s=e(i=o,n)}}function Uw(t,e,n){var i,s,r;return function(){var o,a,c=n(this);if(null!=c)return(o=this.getAttribute(t))===(a=c+"")?null:o===i&&a===s?r:(s=a,r=e(i=o,c));this.removeAttribute(t)}}function Fw(t,e,n){var i,s,r;return function(){var o,a,c=n(this);if(null!=c)return(o=this.getAttributeNS(t.space,t.local))===(a=c+"")?null:o===i&&a===s?r:(s=a,r=e(i=o,c));this.removeAttributeNS(t.space,t.local)}}function Vw(t,e){var n,i;function s(){var s=e.apply(this,arguments);return s!==i&&(n=(i=s)&&function(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}(t,s)),n}return s._value=e,s}function jw(t,e){var n,i;function s(){var s=e.apply(this,arguments);return s!==i&&(n=(i=s)&&function(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}(t,s)),n}return s._value=e,s}function Bw(t,e){return function(){_w(this,t).delay=+e.apply(this,arguments)}}function $w(t,e){return e=+e,function(){_w(this,t).delay=e}}function Hw(t,e){return function(){ww(this,t).duration=+e.apply(this,arguments)}}function zw(t,e){return e=+e,function(){ww(this,t).duration=e}}var Kw=Jv.prototype.constructor;function Gw(t){return function(){this.style.removeProperty(t)}}var Ww=0;function Qw(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function Xw(){return++Ww}var Yw=Jv.prototype;Qw.prototype=function(t){return Jv().transition(t)}.prototype={constructor:Qw,select:function(t){var e=this._name,n=this._id;"function"!=typeof t&&(t=jy(t));for(var i=this._groups,s=i.length,r=new Array(s),o=0;o<s;++o)for(var a,c,l=i[o],u=l.length,h=r[o]=new Array(u),d=0;d<u;++d)(a=l[d])&&(c=t.call(a,a.__data__,d,l))&&("__data__"in a&&(c.__data__=a.__data__),h[d]=c,vw(h[d],e,n,d,h,bw(a,n)));return new Qw(r,this._parents,e,n)},selectAll:function(t){var e=this._name,n=this._id;"function"!=typeof t&&(t=$y(t));for(var i=this._groups,s=i.length,r=[],o=[],a=0;a<s;++a)for(var c,l=i[a],u=l.length,h=0;h<u;++h)if(c=l[h]){for(var d,f=t.call(c,c.__data__,h,l),p=bw(c,n),m=0,g=f.length;m<g;++m)(d=f[m])&&vw(d,e,n,m,f,p);r.push(f),o.push(c)}return new Qw(r,o,e,n)},selectChild:Yw.selectChild,selectChildren:Yw.selectChildren,filter:function(t){"function"!=typeof t&&(t=zy(t));for(var e=this._groups,n=e.length,i=new Array(n),s=0;s<n;++s)for(var r,o=e[s],a=o.length,c=i[s]=[],l=0;l<a;++l)(r=o[l])&&t.call(r,r.__data__,l,o)&&c.push(r);return new Qw(i,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,s=n.length,r=Math.min(i,s),o=new Array(i),a=0;a<r;++a)for(var c,l=e[a],u=n[a],h=l.length,d=o[a]=new Array(h),f=0;f<h;++f)(c=l[f]||u[f])&&(d[f]=c);for(;a<i;++a)o[a]=e[a];return new Qw(o,this._parents,this._name,this._id)},selection:function(){return new Kw(this._groups,this._parents)},transition:function(){for(var t=this._name,e=this._id,n=Xw(),i=this._groups,s=i.length,r=0;r<s;++r)for(var o,a=i[r],c=a.length,l=0;l<c;++l)if(o=a[l]){var u=bw(o,e);vw(o,t,n,l,a,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Qw(i,this._parents,t,n)},call:Yw.call,nodes:Yw.nodes,node:Yw.node,size:Yw.size,empty:Yw.empty,each:Yw.each,on:function(t,e){var n=this._id;return arguments.length<2?bw(this.node(),n).on.on(t):this.each(function(t,e,n){var i,s,r=function(t){return(t+"").trim().split(/^|\s+/).every((function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||"start"===t}))}(e)?_w:ww;return function(){var o=r(this,t),a=o.on;a!==i&&(s=(i=a).copy()).on(e,n),o.on=s}}(n,t,e))},attr:function(t,e){var n=ov(t),i="transform"===n?xw:Lw;return this.attrTween(t,"function"==typeof e?(n.local?Fw:Uw)(n,i,qw(this,"attr."+t,e)):null==e?(n.local?Mw:Dw)(n):(n.local?Pw:Ow)(n,i,e))},attrTween:function(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(null==e)return this.tween(n,null);if("function"!=typeof e)throw new Error;var i=ov(t);return this.tween(n,(i.local?Vw:jw)(i,e))},style:function(t,e,n){var i="transform"==(t+="")?Sw:Lw;return null==e?this.styleTween(t,function(t,e){var n,i,s;return function(){var r=yv(this,t),o=(this.style.removeProperty(t),yv(this,t));return r===o?null:r===n&&o===i?s:s=e(n=r,i=o)}}(t,i)).on("end.style."+t,Gw(t)):"function"==typeof e?this.styleTween(t,function(t,e,n){var i,s,r;return function(){var o=yv(this,t),a=n(this),c=a+"";return null==a&&(this.style.removeProperty(t),c=a=yv(this,t)),o===c?null:o===i&&c===s?r:(s=c,r=e(i=o,a))}}(t,i,qw(this,"style."+t,e))).each(function(t,e){var n,i,s,r,o="style."+e,a="end."+o;return function(){var c=ww(this,t),l=c.on,u=null==c.value[o]?r||(r=Gw(e)):void 0;l===n&&s===u||(i=(n=l).copy()).on(a,s=u),c.on=i}}(this._id,t)):this.styleTween(t,function(t,e,n){var i,s,r=n+"";return function(){var o=yv(this,t);return o===r?null:o===i?s:s=e(i=o,n)}}(t,i,e),n).on("end.style."+t,null)},styleTween:function(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(null==e)return this.tween(i,null);if("function"!=typeof e)throw new Error;return this.tween(i,function(t,e,n){var i,s;function r(){var r=e.apply(this,arguments);return r!==s&&(i=(s=r)&&function(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}(t,r,n)),i}return r._value=e,r}(t,e,null==n?"":n))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var e=t(this);this.textContent=null==e?"":e}}(qw(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(null==t)return this.tween(e,null);if("function"!=typeof t)throw new Error;return this.tween(e,function(t){var e,n;function i(){var i=t.apply(this,arguments);return i!==n&&(e=(n=i)&&function(t){return function(e){this.textContent=t.call(this,e)}}(i)),e}return i._value=t,i}(t))},remove:function(){return this.on("end.remove",(t=this._id,function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}));var t},tween:function(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i,s=bw(this.node(),n).tween,r=0,o=s.length;r<o;++r)if((i=s[r]).name===t)return i.value;return null}return this.each((null==e?Nw:Rw)(n,t,e))},delay:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?Bw:$w)(e,t)):bw(this.node(),e).delay},duration:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?Hw:zw)(e,t)):bw(this.node(),e).duration},ease:function(t){var e=this._id;return arguments.length?this.each(function(t,e){if("function"!=typeof e)throw new Error;return function(){ww(this,t).ease=e}}(e,t)):bw(this.node(),e).ease},easeVarying:function(t){if("function"!=typeof t)throw new Error;return this.each(function(t,e){return function(){var n=e.apply(this,arguments);if("function"!=typeof n)throw new Error;ww(this,t).ease=n}}(this._id,t))},end:function(){var t,e,n=this,i=n._id,s=n.size();return new Promise((function(r,o){var a={value:o},c={value:function(){0==--s&&r()}};n.each((function(){var n=ww(this,i),s=n.on;s!==t&&((e=(t=s).copy())._.cancel.push(a),e._.interrupt.push(a),e._.end.push(c)),n.on=e})),0===s&&r()}))},[Symbol.iterator]:Yw[Symbol.iterator]};var Jw={time:null,delay:0,duration:250,ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}};function Zw(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}Jv.prototype.interrupt=function(t){return this.each((function(){Tw(this,t)}))},Jv.prototype.transition=function(t){var e,n;t instanceof Qw?(e=t._id,t=t._name):(e=Xw(),(n=Jw).time=ew(),t=null==t?null:t+"");for(var i=this._groups,s=i.length,r=0;r<s;++r)for(var o,a=i[r],c=a.length,l=0;l<c;++l)(o=a[l])&&vw(o,t,e,l,a,n||Zw(o,e));return new Qw(i,this._parents,t,e)};const{abs:tb,max:eb,min:nb}=Math;function ib(t){return[+t[0],+t[1]]}function sb(t){return[ib(t[0]),ib(t[1])]}["w","e"].map(rb),["n","s"].map(rb),["n","w","e","s","nw","ne","sw","se"].map(rb);function rb(t){return{type:t}}Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);function ob(t,e){return null==t||null==e?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function ab(t,e){return null==t||null==e?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function cb(t){let e,n,i;function s(t,i,s=0,r=t.length){if(s<r){if(0!==e(i,i))return r;do{const e=s+r>>>1;n(t[e],i)<0?s=e+1:r=e}while(s<r)}return s}return 2!==t.length?(e=ob,n=(e,n)=>ob(t(e),n),i=(e,n)=>t(e)-n):(e=t===ob||t===ab?t:lb,n=t,i=t),{left:s,center:function(t,e,n=0,r=t.length){const o=s(t,e,n,r-1);return o>n&&i(t[o-1],e)>-i(t[o],e)?o-1:o},right:function(t,i,s=0,r=t.length){if(s<r){if(0!==e(i,i))return r;do{const e=s+r>>>1;n(t[e],i)<=0?s=e+1:r=e}while(s<r)}return s}}}function lb(){return 0}const ub=cb(ob);ub.right,ub.left,cb((function(t){return null===t?NaN:+t})).center;function hb(t,e){if((n=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var n,i=t.slice(0,n);return[i.length>1?i[0]+i.slice(2):i,+t.slice(n+1)]}function db(t){return(t=hb(Math.abs(t)))?t[1]:NaN}function fb(t){return function(e){return e.replace(/[0-9]/g,(function(e){return t[+e]}))}}var pb,mb=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function gb(t){if(!(e=mb.exec(t)))throw new Error("invalid format: "+t);var e;return new yb({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}function yb(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function vb(t){t:for(var e,n=t.length,i=1,s=-1;i<n;++i)switch(t[i]){case".":s=e=i;break;case"0":0===s&&(s=i),e=i;break;default:if(!+t[i])break t;s>0&&(s=0)}return s>0?t.slice(0,s)+t.slice(e+1):t}function _b(t,e){var n=hb(t,e);if(!n)return t+"";var i=n[0],s=n[1];return s<0?"0."+new Array(-s).join("0")+i:i.length>s+1?i.slice(0,s+1)+"."+i.slice(s+1):i+new Array(s-i.length+2).join("0")}gb.prototype=yb.prototype,yb.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var wb={"%":(t,e)=>(100*t).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>_b(100*t,e),r:_b,s:function(t,e){var n=hb(t,e);if(!n)return t+"";var i=n[0],s=n[1],r=s-(pb=3*Math.max(-8,Math.min(8,Math.floor(s/3))))+1,o=i.length;return r===o?i:r>o?i+new Array(r-o+1).join("0"):r>0?i.slice(0,r)+"."+i.slice(r):"0."+new Array(1-r).join("0")+hb(t,Math.max(0,e+r-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function bb(t){return t}var Tb,Eb=Array.prototype.map,kb=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Ib(t){var e,n,i=void 0===t.grouping||void 0===t.thousands?bb:(e=Eb.call(t.grouping,Number),n=t.thousands+"",function(t,i){for(var s=t.length,r=[],o=0,a=e[0],c=0;s>0&&a>0&&(c+a+1>i&&(a=Math.max(1,i-c)),r.push(t.substring(s-=a,s+a)),!((c+=a+1)>i));)a=e[o=(o+1)%e.length];return r.reverse().join(n)}),s=void 0===t.currency?"":t.currency[0]+"",r=void 0===t.currency?"":t.currency[1]+"",o=void 0===t.decimal?".":t.decimal+"",a=void 0===t.numerals?bb:fb(Eb.call(t.numerals,String)),c=void 0===t.percent?"%":t.percent+"",l=void 0===t.minus?"−":t.minus+"",u=void 0===t.nan?"NaN":t.nan+"";function h(t){var e=(t=gb(t)).fill,n=t.align,h=t.sign,d=t.symbol,f=t.zero,p=t.width,m=t.comma,g=t.precision,y=t.trim,v=t.type;"n"===v?(m=!0,v="g"):wb[v]||(void 0===g&&(g=12),y=!0,v="g"),(f||"0"===e&&"="===n)&&(f=!0,e="0",n="=");var _="$"===d?s:"#"===d&&/[boxX]/.test(v)?"0"+v.toLowerCase():"",w="$"===d?r:/[%p]/.test(v)?c:"",b=wb[v],T=/[defgprs%]/.test(v);function E(t){var s,r,c,d=_,E=w;if("c"===v)E=b(t)+E,t="";else{var k=(t=+t)<0||1/t<0;if(t=isNaN(t)?u:b(Math.abs(t),g),y&&(t=vb(t)),k&&0==+t&&"+"!==h&&(k=!1),d=(k?"("===h?h:l:"-"===h||"("===h?"":h)+d,E=("s"===v?kb[8+pb/3]:"")+E+(k&&"("===h?")":""),T)for(s=-1,r=t.length;++s<r;)if(48>(c=t.charCodeAt(s))||c>57){E=(46===c?o+t.slice(s+1):t.slice(s))+E,t=t.slice(0,s);break}}m&&!f&&(t=i(t,1/0));var I=d.length+t.length+E.length,A=I<p?new Array(p-I+1).join(e):"";switch(m&&f&&(t=i(A+t,A.length?p-E.length:1/0),A=""),n){case"<":t=d+t+E+A;break;case"=":t=d+A+t+E;break;case"^":t=A.slice(0,I=A.length>>1)+d+t+E+A.slice(I);break;default:t=A+d+t+E}return a(t)}return g=void 0===g?6:/[gprs]/.test(v)?Math.max(1,Math.min(21,g)):Math.max(0,Math.min(20,g)),E.toString=function(){return t+""},E}return{format:h,formatPrefix:function(t,e){var n=h(((t=gb(t)).type="f",t)),i=3*Math.max(-8,Math.min(8,Math.floor(db(e)/3))),s=Math.pow(10,-i),r=kb[8+i/3];return function(t){return n(s*t)+r}}}}Tb=Ib({thousands:",",grouping:[3],currency:["$",""]}),Tb.format,Tb.formatPrefix;class Ab extends Map{constructor(t,e=$85729e8e64a60b52$var$keyof){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),null!=t)for(const[e,n]of t)this.set(e,n)}get(t){return super.get($85729e8e64a60b52$var$intern_get(this,t))}has(t){return super.has($85729e8e64a60b52$var$intern_get(this,t))}set(t,e){return super.set($85729e8e64a60b52$var$intern_set(this,t),e)}delete(t){return super.delete($85729e8e64a60b52$var$intern_delete(this,t))}}class Cb extends Set{constructor(t,e=$85729e8e64a60b52$var$keyof){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),null!=t)for(const e of t)this.add(e)}has(t){return super.has($85729e8e64a60b52$var$intern_get(this,t))}add(t){return super.add($85729e8e64a60b52$var$intern_set(this,t))}delete(t){return super.delete($85729e8e64a60b52$var$intern_delete(this,t))}}Symbol("implicit");var Sb=1e-12;function xb(t){return((t=Math.exp(t))+1/t)/2}(function t(e,n,i){function s(t,s){var r,o,a=t[0],c=t[1],l=t[2],u=s[0],h=s[1],d=s[2],f=u-a,p=h-c,m=f*f+p*p;if(m<Sb)o=Math.log(d/l)/e,r=function(t){return[a+t*f,c+t*p,l*Math.exp(e*t*o)]};else{var g=Math.sqrt(m),y=(d*d-l*l+i*m)/(2*l*n*g),v=(d*d-l*l-i*m)/(2*d*n*g),_=Math.log(Math.sqrt(y*y+1)-y),w=Math.log(Math.sqrt(v*v+1)-v);o=(w-_)/e,r=function(t){var i,s=t*o,r=xb(_),u=l/(n*g)*(r*(i=e*s+_,((i=Math.exp(2*i))-1)/(i+1))-function(t){return((t=Math.exp(t))-1/t)/2}(_));return[a+u*f,c+u*p,l*r/xb(e*s+_)]}}return r.duration=1e3*o*e/Math.SQRT2,r}return s.rho=function(e){var n=Math.max(.001,+e),i=n*n;return t(n,i,i*i)},s})(Math.SQRT2,2,4);function Nb(t,e,n){this.k=t,this.x=e,this.y=n}Nb.prototype={constructor:Nb,scale:function(t){return 1===t?this:new Nb(this.k*t,this.x,this.y)},translate:function(t,e){return 0===t&0===e?this:new Nb(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};new Nb(1,0,0);function Rb(t){t=Number(t);var e=Math.floor(t/86400),n=Math.floor(t%86400/3600),i=Math.floor(t%3600/60),s=Math.floor(t%60);return(e>0?e+(1==e?" day, ":" days, "):"")+(n>0?n+(1==n?" hour, ":" hours, "):"")+(i>0?i+(1==i?" minute, ":" minutes, "):"")+(s>0?s+(1==s?" second":" seconds"):"")}function qb(t,e){let n=t.length;if(n!=e.length)return!1;t.sort(),e.sort();for(let i=0;i<n;i++)if(t[i]!=e[i])return!1;return!0}function Lb(t,e){const n=Object.keys,i=typeof t;return t&&e&&"object"===i&&i===typeof e?n(t).length===n(e).length&&n(t).every((n=>Lb(t[n],e[n]))):t===e}function Db(t){fetch(t).then((t=>{var e;for(var n of t.headers.entries())"date"===n[0]&&(e=new Date(n[1]).getTime());return e}))}function Mb(t){t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()}function Ob(t){return document.getElementById(t)}function Pb(t,e,n){var i;return 0==n&&(i=t=>(e,n)=>e[t]>n[t]?1:-1),1==n&&(i=t=>(e,n)=>e[t]>n[t]?-1:1),t.sort(i(e))}function Ub(t,e,n,i){var s;return 0==i?s=(t,e)=>(n,i)=>n[t]===i[t]?n[e]>i[e]?1:-1:n[t]>i[t]?1:-1:1==i&&(s=(t,e)=>(n,i)=>n[t]===i[t]?n[e]>i[e]?-1:1:n[t]>i[t]?-1:1),t.sort(s(e,n))}Nb.prototype;Ot({apiKey:"AIzaSyDN8T7Pmw5e-LzmC3nAHEqI0Uk7FF7y6fc",authDomain:"quarkz.firebaseapp.com",projectId:"quarkz",storageBucket:"quarkz.appspot.com",messagingSenderId:"1050835442263",appId:"1:1050835442263:web:e7d05ca9373f2f6083a112",measurementId:"G-1Y3S45VWFH"});const Fb=lm(),Vb=cs();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var jb,Bb;(jb=Vb,Bb=Bn,z(jb).setPersistence(Bb)).then((()=>Pn(Vb,email,password))).catch((t=>{}));const $b=function(t=Pt(),e){const n=qt(t=z(t),vy).getImmediate({identifier:e}),i=E("storage");return i&&function(t,e,n,i={}){!function(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=i;s&&(t._overrideAuthToken="string"==typeof s?s:C(s,t.app.options.projectId))}(t,e,n,i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,...i),n}();function Hb(t,e,n,i,s){var r=Math.floor(1e4*Math.random()),o='\n  <div id="msg_popup_'+r+'" class="overlay">\n  <div class="popup">\n      <center>\n          <h2 id="msg_popup_txt_'+r+'">Note</h2>\n      </center>\n      <a class="close"\n          onclick="document.getElementById(\'msg_popup_'+r+'\').remove()">&times;</a>\n      <p id="msg_popup_content_'+r+'"></p>\n      <button class="tst_btn rpl" id="msg_action_'+r+'"></button>\n  </div>\n  </div>\n  ';return null==s||1==s?Ob("testv1").insertAdjacentHTML("beforeend",o):Ob("quarkz_body").insertAdjacentHTML("beforeend",o),Ob("msg_popup_"+r).style.visibility="visible",Ob("msg_popup_"+r).style.opacity="1",Ob("msg_action_"+r).style.display="none",document.getElementById("msg_popup_txt_"+r).innerText=t,document.getElementById("msg_popup_content_"+r).innerText=e,null==n?n=function(){}:Ob("msg_action_"+r).style.display="block",null==i&&(i=""),Ob("msg_action_"+r).onclick=n,Ob("msg_action_"+r).innerText=i,"msg_popup_"+r}const zb=(t,e)=>t.map((t=>({...e.find((e=>e.qid===t.qid&&e)),...t})));let Kb;function Gb(t,e){let n=[];const i=new MediaRecorder(t);return i.ondataavailable=function(t){t.data.size>0&&n.push(t.data)},i.onstop=function(){!function(t){const e=new Blob(t,{type:"video/webm"});let n=window.prompt("Enter file name"),i=document.createElement("a");i.href=URL.createObjectURL(e),i.download=`${n}.webm`,document.body.appendChild(i),i.click(),URL.revokeObjectURL(e),document.body.removeChild(i)}(n),n=[]},i.start(200),i}async function Wb(){var t=Ob("lg_uname").value,e=Ob("lg_pass").value;Pn(Vb,t,e).then((e=>{e.user;uE.email=t,Yb("dashboard",1)})).catch((t=>{t.code,t.message;Ob("lgn_err").style.display="block",Ob("lg_pass").value=""}))}function Qb(){Un(cs()),uE=[]}function Xb(){var t=Ob("rg_uname").value,e=Ob("rg_pass").value,n=Ob("rg_name").value,i=Ob("rg_mbleno").value,s=Ob("rg_class").value,r=Ob("rg_gender").value;""!=t&&""!=e&&""!=n&&""!=i&&""!=s||alert("Details Cannot Be Empty"),e!=Ob("rg_pass1").value||On(Vb,t,e).then((e=>{const o=e.user;!async function(){try{await pg(Qp(Fb,"users",o.uid),{name:n,class:s,mblno:i,email:t,spoints:0,gen:r,batch:"guest",sgndon:bg(),roles:{user:!0}}).then((function(){window.location.hash="#/dashboard",window.location.reload()}))}catch(t){console.error("Error Adding New User",t)}}()})).catch((t=>{t.code,t.message}))}function Yb(t,e){var n=1==tE||1==ZT;switch(n?(Ob("adminonly").style.display="flex",Ob("tp_pnt").style.display="block",Ob("tp_edt").style.display="block",Ob("sms_edit").style.display="block"):(Ob("adminonly").style.display="none",Ob("sms_edit").style.display="none"),Ob(rE).classList.remove("_open"),1==e&&(window.location.hash="#/"+t),rE=t,oE=window.location.hash.split("#/")[1]){case"profile":rE="profile";break;case"about":rE="aboutus";break;case"login":rE="login";break;case"dashboard":rE="dashboard";break;case"timetable":rE="schedule";break;case"logout":Un();break;case"mainsformulas":rE="mainsformulas",IT(1);break;case"downloads":rE="downloads",IT(2);break;case"livequiz":rE="livequiz";break;case"register":rE="register";break;case"testinfo":rE="testinfo",FT("active");break;case"legal":rE="legal";break;case"appinfo":rE="appinfo",Ob("ren_appinf").textContent=JSON.stringify(sE,void 0,2);break;case"forum":rE="forum";break;case"testing":rE="testing";break;case"bugreport":rE="bugreport";break;case"simlist":rE="simlist",nT();break;case"testend":rE="test_end";break;case"add/question":rE="fu_question";break;case"add/lesson":rE="fu_lesson",newLesson();break;case"add/tpc":rE="fu_topic",async function(){try{Yb("edit_tpc/"+(await yg(Wp(Fb,"topic"),{name:"",qllist:[],level:"jee",chid:"",chname:"",subject:""})).id,1)}catch{}}();break;case"add/images":rE="fu_images";break;case"add/qubank":rE="fu_topic",async function(){try{Yb("edit_qubank/"+(await yg(Wp(Fb,"qbank"),{name:"",qllist:[],level:"jee",chid:"",chname:"",subject:""})).id,1)}catch{}}();break;case"add/simulation":rE="fu_simulation",async function(){try{Yb("edit_sim/"+(await yg(Wp(Fb,"sims"),{name:"",license:"",provider:"",url:""})).id,1)}catch{}}();break;case"add/tests":rE="fu_topic",async function(){try{const t=await yg(Wp(Fb,"tests"),{title:"",totalmarks:0,timeallotted:0,syllabus:"",strton:bg(),endon:bg(),questionnos:0,finished:[],batch:[]});await pg(Qp(Fb,"tests",t.id,"questions","questions"),{questions:[]}),await pg(Qp(Fb,"tests",t.id,"questions","answers"),{questions:[]}),await pg(Qp(Fb,"tests",t.id,"responses","finished"),{finished:[],leaderboard:[]});Yb("edit_tests/"+t.id,1)}catch{}}();break;case"add/batch":rE="fu_topic",async function(){try{const t=await yg(Wp(Fb,"batch"),{name:"",timetable:"",crton:bg(),class:12,chlist:[],delon:bg()});await pg(Qp(Fb,"batch",t.id,"info","tests"),{tests:[]}),await pg(Qp(Fb,"batch",t.id,"info","updates"),{u:[]});Yb("edit_batch/"+t.id,1)}catch{}}();break;case"settings":rE="settings";break;case"chplist":rE="chapterlist",ET();break;default:rE="error_page"}oE.includes("instructions")&&(rE="test_instructions"),oE.includes("cyberhunt")&&(rE="cyberhunt",async function(){""==window.location.hash.split("/cyberhunt/")[1]||""==window.location.hash.split("/cyberhunt")[1]?(Ob("cyb_code").style.display="flex",Ob("cyb_viewer").style.display="none",Ob("cyb_edit").style.display="none"):(Ob("cyb_code").style.display="none",Ob("cyb_viewer").style.display="flex",Ob("cyb_edit").style.display="none")}()),oE.includes("notes")&&!oE.includes("usernotes")&&(rE="notes",async function(){var t=window.location.hash.split("notes/")[1];_y(wy($b,"public/"+t+".pdf")).then((t=>{Ob("nt_id").src="https://docs.google.com/gview?url="+encodeURI(t)+"&embedded=true"})).catch((t=>{switch(t.code){case"storage/object-not-found":Ob("nt_id").src="https://docs.google.com/gview?url="+encodeURI("https://firebasestorage.googleapis.com/v0/b/quarkz.appspot.com/o/public%2F404.pdf?alt=media&token=8cc8f23a-6e24-41d6-984b-6d2cc9b89d11")+"&embedded=true";break;case"storage/unauthorized":Hb("Unauthorised","You dont have necessary permissions to The file you requested.")}}))}()),oE.includes("sims")&&(rE="simulations",async function(){var t=window.location.hash.split("sims/")[1],e=Qp(Fb,"sims",t),n=await hg(e);if(!n.exists())throw Yb("error_page",1),new Error;var i=n.data();Ob("sms_name").innerText=i.name,Ob("sms_prov").innerText=i.provider,Ob("sim_frame").src=i.url}()),oE.includes("chapter")&&(rE="chapter",async function(){Ob("chp_chaptername").innerHTML="",Ob("chp_qbk_list").innerHTML="",Ob("chp_tpc_list").innerHTML="";var t=Qp(Fb,"chapter",window.location.hash.split("#/chapter/")[1]),e=await hg(t);if(e.exists()){var n=e.data();Ob("chp_chaptername").innerText=n.name;try{for(let t of n.qbanks)Ob("chp_qbk_list").insertAdjacentHTML("beforeend",'<span class="tlinks_min rpl" style = "color:pink" id="chpqbk'+btoa(t.id)+'">'+t.title+"</span>"),Ob("chpqbk"+btoa(t.id)).addEventListener("click",_T)}catch{}try{for(let t of n.topics)Ob("chp_tpc_list").insertAdjacentHTML("beforeend",'<span class="tlinks_min rpl" style = "color:pink" id="chptpc'+btoa(t.id)+'">'+t.title+"</span>"),Ob("chptpc"+btoa(t.id)).addEventListener("click",wT)}catch{}}}()),oE.includes("qbanks")&&(rE="topic",bT(2)),oE.includes("usernotes")&&(rE="usernotes",async function(){try{WT()}catch{}if(window.location.hash.includes("usernotes/add")){var t=await yg(Wp(Fb,"usernotes"),{title:"Notes Title",notes:"",uuid:JT.uuid,crton:bg(),type:"private",lastupdated:bg()});await mg(Qp(Fb,"users",JT.uuid),{usernotes:Tg({color:"black",id:t.id,title:"Notes Title"})}),Yb("usernotes/"+t.id,1)}else if(window.location.hash.includes("usernotes/delete"))await gg(Qp(Fb,"usernotes",window.location.hash.split("usernotes/delete/")[1]));else if("#/usernotes/"==window.location.hash);else{t=Qp(Fb,"usernotes",window.location.hash.split("usernotes/")[1]);var e=await hg(t);if(e.exists()){t=e.data();Ob("un_title").value=t.title,YT("un_editable",t.notes),Ob("un_viewership").value=t.type,"public_view"==t.type&&JT.uuid!=t.uuid?(Ob("un_rendermode").innerHTML='<option value="preview">preview</option>',Ob("un_rendermode").value="preview",Ob("un_save").style.display="none",Ob("un_colorpicker").style.display="none",Ob("un_viewership").style.display="none",Ob("un_title").style.display="none"):(Ob("un_rendermode").innerHTML='<option value="edit">edit</option><option value="preview">preview</option>',Ob("un_rendermode").value="edit",Ob("un_save").style.display="block",Ob("un_colorpicker").style.display="block",Ob("un_viewership").style.display="block",Ob("un_title").style.display="block"),WT()}}}()),oE.includes("qbnk_vid")&&(rE="qbnk_vid",Ob("qbnk_vid_btn").style.display="block"),oE.includes("attempt")&&(rE="testv1",async function(){Ob("tt_footer").style.display="flex",Ob("tt_sub").style.display="block",Ob("tt_timeleft").style.display="block",Ob("tt_marksaward").style.display="none";var t=window.location.hash.split("#/attempt/")[1],e=Qp(Fb,"tests",t),n=await hg(e);if(n.exists()&&(_E=n.data(),e=Qp(Fb,"tests",t,"responses","finished"),(n=await hg(e)).exists()))for(var i of n.data().finished)if(Vb.currentUser.uid==i)return Yb("testend",1),Ob("te_title").innerText="You Have Already Attempted This Test",0;try{e=Qp(Fb,"tests",t,"questions","questions"),(n=await hg(e)).exists()&&(bE=n.data())}catch{return Ob("te_title").innerText="The Test Hasnt Started Yet",Yb("testend",1),0}if(e=Qp(Fb,"tests",t,"responses",Vb.currentUser.uid),(n=await hg(e)).exists()){var s=n.data().answers;for(var r in kE=n.data().actions,s)TE.push({qid:r,ans:s[r].ans,type:s[r].type,time:s[r].time})}else{for(var o={},a=0;a<bE.questions.length;a++)o[`${bE.questions[a].qid}`]={type:"tts_notvisit",answer:[]},TE.push({qid:bE.questions[a].qid,type:"tts_notvisit",answer:[],timetaken:0});var c=new Date;await pg(Qp(Fb,"tests",t,"responses",Vb.currentUser.uid),{answers:o,strton:bg(),warning:[],actions:[{type:"start",time:c,value:"1"}],testversion:"1"}),kE.push({type:"start",time:c,value:"1"})}window.location.hash.includes("/attempt/")&&(cT=setInterval((function(){var t=_E.timeallotted-1;_E.timeallotted-=1,Ob("tt_timeleft").innerText=Math.floor(t%86400/3600)+":"+Math.floor(t%3600/60)+":"+Math.floor(t%60),wE+=1,Ob("tt_timespent").innerText=Math.floor(wE%86400/3600)+":"+Math.floor(wE%3600/60)+":"+Math.floor(wE%60),0==t&&KT()}),1e3));window.onbeforeunload=function(t){t.preventDefault,KT()},window.onhashchange=function(t){Yb(),KT()},Ob("tt_testname").innerText=_E.title,Ob("dsh_btn").style.display="none",Ob("tp_pnt").style.display="none",Ob("tp_pnt").style.display="none";var l=Ob("testv1");try{Mb(l)}catch{}HT()}()),oE.includes("finished")&&(rE="finishedtestinfo",async function(){var t=window.location.hash.split("#/finished/")[1],e=Qp(Fb,"tests",t),n=await hg(e);if(n.exists()){_E=n.data();var i=0;if(Ob("fti_title").innerText=_E.title,e=Qp(Fb,"tests",t,"responses","finished"),(n=await hg(e)).exists())for(var s of n.data().finished)if(Vb.currentUser.uid==s){i=1;break}if(0==i)Yb("testend",1),Ob("te_title").innerText="You Have NOT Attempted This Test";else try{try{BT(1)}catch{}try{e=Qp(Fb,"tests",t,"responses",Vb.currentUser.uid);var r=(n=await hg(e)).data();if(n.exists()){function o(t,e,n,i,s){var r=s-(e-4*n);return"<div><span>"+t+"("+(e+n)+' Marks)</span><div style = "width:40vw;height:30px;display:flex;flex-direction:row;"><div style="width:'+e/s*40+'vw;background-color:green;height:30px;text-align:center;color:white">'+e+"/"+s+'</div><div style="width:'+Math.abs(4*n/s*40)+'vw;background-color:red;height:30px;text-align:center;color:white">'+n+"/"+s+'</div><div style="width:'+40*(1-(e-4*n)/s)+'vw;background-color:orange;height:30px;text-align:center;color:black">'+r+"/"+s+"</div></div></div>"}Ob("fto_total").innerText=r.info.usermarks+"/"+r.info.total,Ob("fto_correct").innerText=r.info.correct,Ob("fto_incorrect").innerText=r.info.incorrect,Ob("fto_unanswered").innerText=r.info.unattempted,kE=r.actions,nE=r.info.mList,Ob("fto_rank").innerText="0";var a=["Physics","Chemistry","Math","Biology","Statistics","Computer","Unfiled"];for(var c of(Ob("fto_percents").innerHTML="",a)){var l=r.info.subjectmarks[c];Lb(l,{correct:0,unattempted:0,incorrect:0,total:0})||Ob("fto_percents").insertAdjacentHTML("beforeend",o(c,l.correct,l.incorrect,l.unattempted,l.total))}VT(1).then((function(){function t(t,e,n,i,s){var r=s-(e+n);return"<div><span>"+t+"("+Rb(s)+')</span><div style = "width:80vw;height:30px;display:flex;flex-direction:row;"><div style="width:'+e/s*80+'vw;background-color:green;height:30px;text-align:center;color:white">'+Rb(e)+'</div><div style="width:'+n/s*80+'vw;background-color:red;height:30px;text-align:center;color:white">'+Rb(n)+'</div><div style="width:'+80*(1-(e+n)/s)+'vw;background-color:orange;height:30px;text-align:center;color:black">'+Rb(r)+"</div></div></div>"}var e=["Physics","Chemistry","Math","Biology","Statistics","Computer","Unfiled"];for(var n of(Ob("fto_time").innerHTML="",e)){var i=iE.subject[n];Lb(i,{correct:0,unattempted:0,incorrect:0,total:0})||Ob("fto_time").insertAdjacentHTML("beforeend",t(n,i.correct,i.incorrect,i.unattempted,i.total))}}))}try{var u;e=Qp(Fb,"tests",t,"responses","finished"),(n=await hg(e)).exists()&&(u=n.data().leaderboard),Ob("fto_leaderboard").innerHTML="",u=Pb(u,"marks",1);for(var h=0;h<u.length;h++){var d=h+1;JT.uuid==u[h].uid&&(Ob("fto_rank").innerText=d),Ob("fto_leaderboard").insertAdjacentHTML("beforeend",'<div class = "tlinks" style = "flex-direction:row;width:25vw;justify-content:space-between;"><span class = "t_gre">&nbsp;'+d+'</span><span class = "t_name">'+u[h].name+'</span><span class = "t_gre">&nbsp;&nbsp;'+u[h].marks+"</span></div>")}}catch{}var f=[];for(h=0;h<nE.length;h++)null==iE.questions[nE[h].qid]?f.push({qid:nE[h].qid,type:nE[h].type,time:0,no:h+1}):f.push({qid:nE[h].qid,type:nE[h].type,time:iE.questions[nE[h].qid].time,no:h+1});!function(t,e){try{const i={top:20,right:20,bottom:50,left:50},s=800-i.left-i.right,r=400-i.top-i.bottom;Ob(t).innerHTML="";const o=$60335d5fa2b61a3a$exports.select("#"+t).append("svg").attr("width",s+i.left+i.right).attr("height",r+i.top+i.bottom).append("g").attr("transform",`translate(${i.left}, ${i.top})`),a=$60335d5fa2b61a3a$exports.scaleOrdinal().domain(["correct","incorrect","unattempted"]).range(["#2ecc71","#e74c3c","#f39c12"]),c=$60335d5fa2b61a3a$exports.scaleLinear().domain([0,$60335d5fa2b61a3a$exports.max(e,(t=>t.time))]).range([5,30]),l=$60335d5fa2b61a3a$exports.scaleLinear().domain([1,e.length]).range([0,s]),u=$60335d5fa2b61a3a$exports.scaleLinear().domain([0,$60335d5fa2b61a3a$exports.max(e,(t=>t.time))]).range([r,0]);o.append("text").attr("class","axis-label").attr("text-anchor","middle").attr("x",s-120).attr("y",r+40).attr("color","white").text("Question Number"),o.append("text").attr("class","axis-label").attr("text-anchor","middle").attr("transform","rotate(-90)").attr("x",-innerHeight/2+40).attr("y",25-i.left).text("Time Taken(in s)").attr("color","white"),o.append("g").attr("transform",`translate(0, ${r})`).call(Ly(Iy,l)),o.append("g").call(function(t){return Ly(Ay,t)}(u)),o.selectAll("circle").data(e).enter().append("circle").attr("cx",((t,e)=>l(e+1))).attr("cy",(t=>u(t.time))).attr("r",(t=>c(t.time))).attr("fill",(t=>a(t.type))).append("text").text((function(t){return t.no}));var n=o.selectAll("g").data(e).enter().append("g").attr("transform",(function(t){return"translate("+l(t.time)+","+u(t.questionNumber)+")"}));n.append("circle").attr("r",(function(t){return sizeScale(t.time)})).attr("fill",(function(t){return"correct"==t.result?"green":"incorrect"==t.result?"red":"gray"})),n.append("text").text((function(t){return"Q"+t.no})).attr("x",(function(t){return sizeScale(t.time)+5})).attr("y",5)}catch{}}("fto_draw",f)}catch{return Ob("te_title").innerText="ERROR",Yb("testend",1),0}}catch{}}}()),oE.includes("testreport")&&(rE="testv1",async function(){Ob("tt_footer").style.display="none",Ob("tt_sub").style.display="none",Ob("tt_timeleft").style.display="none",Ob("tt_marksaward").style.display="block";var t=window.location.hash.split("#/testreport/")[1],e=Qp(Fb,"tests",t),n=await hg(e);if(n.exists()){_E=n.data();var i=0;if(Ob("tt_testname").innerText=_E.title,e=Qp(Fb,"tests",t,"responses","finished"),(n=await hg(e)).exists())for(var s of n.data().finished)if(Vb.currentUser.uid==s){i=1;break}if(0==i)Yb("testend",1),Ob("te_title").innerText="You Have NOT Attempted This Test";else if(Date.now()/1e3<=_E.endon.seconds&&0==_E.noresult)Yb("testend",1),Ob("te_title").innerText="Detailed Test Reports will be available after deadline";else{try{if(e=Qp(Fb,"tests",t,"questions","questions"),(n=await hg(e)).exists()&&(bE=n.data()),e=Qp(Fb,"tests",t,"responses",Vb.currentUser.uid),(n=await hg(e)).exists()){var r=n.data().answers;for(var o in kE=n.data().actions,r)TE.push({qid:o,ans:r[o].ans,type:r[o].type,time:r[o].time})}e=Qp(Fb,"tests",t,"questions","answers"),(n=await hg(e)).exists()&&(IE=n.data())}catch{return Ob("te_title").innerText="ERROR",Yb("testend",1),0}HT()}}}()),oE.includes("printable/qbank")&&1==n&&(rE="printable",kT(1)),oE.includes("ARIEL")&&1==n&&(rE="Ariel"),oE.includes("printable/tests")&&1==n&&(rE="printable",kT(3)),"functions"==oE&&1==n&&(rE="functions",fT()),oE.includes("users")&&1==n&&(rE="users",userUpdate()),oE.includes("topic")&&(rE="topic",bT(1)),oE.includes("printable/topic")&&1==n&&(rE="printable",kT(2)),oE.includes("livequiz")&&(rE="livequiz",async function(){lquizcode=oE.split("livequiz")[1];var t=Qp(Fb,"livequiz",lquizcode),e=await hg(t);if(!e.exists())throw new Error;e.data()}()),oE.includes("edit_sim")&&1==n&&(rE="fu_simulation",async function(){try{let e=await hg(Qp(Fb,"sims",window.location.hash.split("edit_sim/")[1]));if(e.exists()){var t=e.data();Ob("aq_simname").value=t.name,Ob("aq_simprov").value=t.provider,Ob("aq_simurl").value=t.url,Ob("aq_simlicense").value=t.license,Ob("aq_simsubj").value=t.subject}}catch{}}()),oE.includes("edit_lesson")&&1==n&&(rE="fu_simulation",prepareLesson()),oE.includes("edit_tpc")&&1==n&&(rE="fu_topic",gT(1)),oE.includes("edit_test")&&1==n&&(rE="fu_topic",gT(3)),oE.includes("edit_qubank")&&1==n&&(rE="fu_topic",gT(2)),oE.includes("edit_exams")&&1==n&&(rE="fu_topic",gT(4)),0!=eE&&null!=eE&&null!=eE||"login"==oE||"register"==oE||oE.includes("notes")||"legal"==oE||"about"==oE||"bugreport"==oE||"appinfo"==oE||"mainsformulas"==oE||"downloads"==oE||(rE="error_page"),Ob(rE).classList.add("_open"),QT(),fE=[],"forum"==oE?aT(1):(aT(2),lT=1,uT="afterbegin"),bE=[],TE=[],_E=[],EE=""}let Jb,Zb=[];async function tT(){try{await mg(Qp(Fb,"sims",window.location.hash.split("edit_sim/")[1]),{name:Ob("aq_simname").value,license:Ob("aq_simlicense").value,provider:Ob("aq_simprov").value,url:Ob("aq_simurl").value,subject:Ob("aq_simsubj").value});var t=Ob("aq_simsubj").value;"physics"==t&&await mg(Qp(Fb,"sims","sims"),{physics:Tg(Ob("aq_simname").value)}),"chemistry"==t&&await mg(Qp(Fb,"sims","sims"),{chemistry:Tg(Ob("aq_simname").value)}),"maths"==t&&await mg(Qp(Fb,"sims","sims"),{maths:Tg(Ob("aq_simname").value)}),"computer"==t&&await mg(Qp(Fb,"sims","sims"),{computer:Tg(Ob("aq_simname").value)}),"biology"==t&&await mg(Qp(Fb,"sims","sims"),{biology:Tg(Ob("aq_simname").value)}),"statistics"==t&&await mg(Qp(Fb,"sims","sims"),{statistics:Tg(Ob("aq_simname").value)}),"unfiled"==t&&await mg(Qp(Fb,"sims","sims"),{unfiled:Tg(Ob("aq_simname").value)}),function(){YT("aq_qtext",""),YT("aq_expl",""),Ob("aq_answer").value="",Ob("aq_yurl").value="",Ob("aq_hint").value="";for(var t=0;t<document.getElementsByClassName("aq_mcq").length;t++)document.getElementsByClassName("aq_mcq")[t].value="";for(t=0;t<document.getElementsByClassName("aq_i1").length;t++)document.getElementsByClassName("aq_i1")[t].value="";for(t=0;t<document.getElementsByClassName("aq_i2").length;t++)document.getElementsByClassName("aq_i2")[t].value=""}()}catch(t){console.error("Error writing new message to Firebase Database",t)}}function eT(){!async function(t){var e;const n=Km(Wp(Fb,"sims"),Wm("name","==",t));(await fg(n)).forEach((t=>{e=t.id})),Yb("sims/"+e,1)}(this.innerText)}async function nT(t){if(Ob("sim_cont").innerHTML="",0==Zb.length){var e=Qp(Fb,"sims","sims"),n=await hg(e);if(!n.exists())throw Yb("error_page",1),new Error;var i=n.data();Zb=i}if("physics"==t)try{for(let t of Zb.physics)""!=t&&(Ob("sim_cont").insertAdjacentHTML("beforeend",'<span class="tlinks rpl" style = "color:pink" id="sim'+btoa(t)+'">'+t+"</span>"),Ob("sim"+btoa(t)).addEventListener("click",eT))}catch{}if("chemistry"==t)try{for(let t of Zb.chemistry)""!=t&&(Ob("sim_cont").insertAdjacentHTML("beforeend",'<span class="tlinks rpl" style = "color:crimson" id="sim'+btoa(t)+'">'+t+"</span>"),Ob("sim"+btoa(t)).addEventListener("click",eT))}catch{}if("maths"==t)try{for(let t of Zb.maths)""!=t&&(Ob("sim_cont").insertAdjacentHTML("beforeend",'<span class="tlinks rpl" style = "color:turquoise" id="sim'+btoa(t)+'">'+t+"</span>"),Ob("sim"+btoa(t)).addEventListener("click",eT))}catch{}if("biology"==t)try{for(let t of Zb.biology)""!=t&&(Ob("sim_cont").insertAdjacentHTML("beforeend",'<span class="tlinks rpl" style = "color:lime" id="sim'+btoa(t)+'">'+t+"</span>"),Ob("sim"+btoa(t)).addEventListener("click",eT))}catch{}if("computer"==t)try{for(let t of Zb.computer)""!=t&&(Ob("sim_cont").insertAdjacentHTML("beforeend",'<span class="tlinks rpl" style = "color:violet" id="sim'+btoa(t)+'">'+t+"</span>"),Ob("sim"+btoa(t)).addEventListener("click",eT))}catch{}if("statistics"==t)try{for(let t of Zb.statistics)""!=t&&(Ob("sim_cont").insertAdjacentHTML("beforeend",'<span class="tlinks rpl" style = "color:orange" id="sim'+btoa(t)+'">'+t+"</span>"),Ob("sim"+btoa(t)).addEventListener("click",eT))}catch{}if("unfiled"==t)try{for(let t of Zb.unfiled)""!=t&&(Ob("sim_cont").insertAdjacentHTML("beforeend",'<span class="tlinks rpl" style = "color:white" id="sim'+btoa(t)+'">'+t+"</span>"),Ob("sim"+btoa(t)).addEventListener("click",eT))}catch{}}async function iT(){await mg(Qp(Fb,"usernotes",window.location.hash.split("usernotes/")[1]),{title:Ob("un_title").value,notes:XT("un_editable"),lastupdated:bg(),type:Ob("un_viewership").value})}function sT(){}function rT(){window.location.hash="#/usernotes/"+this.id.split("uno")[1]}let oT=function(){};async function aT(t){1==t?(Ob("forum_live").innerHTML="",Jb=Km(Wp(lm(),"forum"),Ym("sgndon","desc"),Zm(10)),oT=vg(Jb,(function(t){t.docChanges().forEach((function(t){if("removed"===t.type)Ob("dM"+t.doc.id).remove();else if("added"==t.type){lT>=11&&(uT="beforeend");var e=t.doc.data();!function(t,e,n,i,s){if("shh5oUIhRpdBkEKQ3GCZwoKE9u42"==s){var r="<div id = 'dM"+t+"'><span class = 'dmName'>"+n+"👑: </span><span class = 'dmText'>"+i+"</span><span class = 'dmtime'>"+e+"</span></div>";Ob("forum_live").insertAdjacentHTML(uT,r)}else r="<div id = 'dM"+t+"'><span class = 'dmName'>"+n+": </span><span class = 'dmText'>"+i+"</span><span class = 'dmtime'>"+e+"</span></div>",Ob("forum_live").insertAdjacentHTML(uT,r)}(t.doc.id,"",e.name,e.message,e.userid),lT+=1}}))}))):2==t&&(oT(),oT=function(){})}Ob("fm_send").addEventListener("click",(async function(){var t=Ob("fm_message").value;if(t.includes("/pinned")){t=t.split("/pinned")[1];try{await mg(Qp(Fb,"forum","pinned"),{message:t})}catch{alert("You Dont Have The Privilages For This Command")}var e=await Db("http://localhost:5500/time.html").then(async function(e){await mg(Qp(Fb,"forum","ppinned"),{ppinned:Tg({message:t,user:JT.uuid,time:e})})}(e))}else""!=t&&null!=t?(await yg(Wp(Fb,"forum"),{name:JT.name,message:t,userid:JT.uuid,sgndon:bg()}),Ob("fm_message").value=""):alert("Message Cannot Be Empty")}));var cT,lT=1,uT="afterbegin";async function hT(){Ob("qbnk_vid_btn").style.display="none",Ob("qbnk_vid_btn_e").style.display="none";try{let o=await hg(Qp(Fb,"qbank",window.location.hash.split("qbnk_vid/")[1]));if(o.exists()){var t=o.data();Ob("tb_q_title").innerText=t.name,Ob("qb_vid_ti").innerText=t.name,Ob("qbnk_vid_q").style.display="none",Ob("qbnk_vid_ans").style.display="none",Ob("qbnk_vid_title").style.display="flex",Ob("qbnk_vid_end").style.display="none",Ob("watermark").style.display="none";let a=t.qllist,c=await async function(){return await navigator.mediaDevices.getDisplayMedia({audio:!0,video:{mediaSource:"screen"}})}();Mb(Ob("qbnk_vid")),Kb=Gb(c);var e,n=0,i=0,s=0,r=setInterval((function(){if(Ob("qbnk_vid_q").style.display="none",Ob("qbnk_vid_ans").style.display="none",Ob("qbnk_vid_title").style.display="none",Ob("qbnk_vid_end").style.display="none",0==i)Ob("qbnk_vid_title").style.display="flex",i++;else if(s==a.length-1)Ob("qbnk_vid_end").style.display="flex",setTimeout((function(){Kb.stop(),Ob("qbnk_vid_btn").style.display="block"}),5e3),clearInterval(r);else if(0==n||1==n){!function(t){function e(t){t.style.display="none"}function n(t){t.style.display="block"}function i(t){t.style.display="flex"}var s=Ob("tb_q_mcq_con"),r=Ob("tb_q_matrix"),o=Ob("tb_q_answer");if(s.innerHTML="",Ob("tb_q_qtext").innerHTML=t.title+"<span class = 'sp_txt'>("+t.type+")</span>","mcq"==t.type||"mcq_multiple"==t.type){i(s),e(r),e(o);var a=t.op,c="";for(let t of a)c+='<div class="tb_q_mcq_p rpl">'+t+"</div>";Ob("tb_q_mcq_con").insertAdjacentHTML("beforeend",c)}else if("matrix"==t.type){e(s),n(r),e(o);for(var l=t.op1,u=t.op2,h=l.length,d=0;d<h;d++)document.getElementsByClassName("tp_i1")[d].innerHTML=l[d];for(d=0;d<h;d++)document.getElementsByClassName("tp_i2")[d].innerHTML=u[d]}else"numerical"==t.type||"fill"==t.type?(e(s),e(r),n(o)):"taf"==t.type?(i(s),e(r),e(o),c='<div class="tp_mcq_p rpl">True</div><div class="tp_mcq_p rpl">False</div>',Ob("tp_mcq_con").insertAdjacentHTML("beforeend",c)):(e(s),e(r),e(o));renderMathInElement(Ob("tp_ans_hold")),renderMathInElement(Ob("tp_qtext"))}(a[s]);var t=s+1;0==n&&(Ob("qbnk_timer").innerText=10,e=setInterval((function(){Ob("qbnk_timer").innerText=Ob("qbnk_timer").innerText-1}),1e3)),Ob("tb_q_qno").innerText="Question "+t+":",Ob("qbnk_vid_q").style.display="flex",n++}else if(2==n){Ob("qbnk_vid_ans").style.display="flex",clearInterval(e);for(var o="",c=0;c<a[s].answer.length;c++)o+='<div class="tb_q_mcq_p rpl" style = "background-color:green">'+a[s].answer[c]+"</div>";Ob("tb_q_ans").innerHTML=o,Ob("tb_q_hint").innerHTML=a[s].hint,Ob("tb_q_expl").innerHTML=a[s].expl,n=0,s++}}),5e3)}}catch{}}function dT(){var t=[Ob("aq_answer").value],e=Ob("aq_type").value,n=[],i=[],s=[];if("mcq"==e||"mcq_multiple"==e)for(t=[],o=0;o<document.getElementsByClassName("aq_mcq_ans").length;o++){var r=document.getElementsByClassName("aq_mcq_ans")[o].value;t[o]=r}for(var o=0;o<document.getElementsByClassName("aq_mcq").length;o++)n.push(document.getElementsByClassName("aq_mcq")[o].value);for(o=0;o<document.getElementsByClassName("aq_i1").length;o++)i.push(document.getElementsByClassName("aq_i1")[o].value);for(o=0;o<document.getElementsByClassName("aq_i2").length;o++)s.push(document.getElementsByClassName("aq_i2")[o].value);if(oE.includes("edit_test"))var a={qid:dE,mode:Ob("aq_mode").value,title:XT("aq_qtext"),y_url:Ob("aq_yurl").value,hint:Ob("aq_hint").value,expl:XT("aq_expl"),type:e,answer:t,op:n,op1:i,op2:s,section:Ob("aq_section").value,pm:Ob("aq_posmrks").value,nm:Ob("aq_negmrks").value};else if(oE.includes("edit_exams"))a={id:dE,name:Ob("aq_examname").value,date:Ob("aq_examdate").value,info:Ob("aq_examinfo").value,syllabus:Ob("aq_examsyllabus").value,mode:"exams"};else a={id:dE,mode:Ob("aq_mode").value,title:XT("aq_qtext"),y_url:Ob("aq_yurl").value,hint:Ob("aq_hint").value,expl:XT("aq_expl"),type:e,answer:t,op:n,op1:i,op2:s,section:Ob("aq_section").value,pm:Ob("aq_posmrks").value,nm:Ob("aq_negmrks").value};return a}async function fT(t){function e(t){t.style.display="none"}function n(t){t.style.display="block"}function i(t){t.style.display="flex"}var s=Ob("aq_mode").value,r=Ob("aq_ans_hold"),o=Ob("aq_type"),a=Ob("aq_answer"),c=Ob("aq_yurl"),l=Ob("aq_mcq_con"),u=Ob("aq_matrix"),h=(Ob("aq_upl"),Ob("aq_all"));Ob("aq_tpc"),Ob("aq_qbk"),Ob("aq_sims");"question"==s?(e(c),n(r),n(o),n(a),i(h)):"lesson"==s?(n(c),e(r),e(o),e(a),i(h)):"exams"==s&&(e(c),e(r),e(o),e(a),e(h)),"mcq"==o.value||"mcq_multiple"==o.value?(i(l),e(u),e(a)):"matrix"==o.value?(n(u),e(l),e(a)):(e(u),e(l),n(a))}function pT(t){mT(this.innerText)}function mT(t){if("+"==t){let e=fE.length;window.location.hash.includes("edit_exams")?fE[e]={id:Date.now()+Math.random().toString(36).substr(2),name:"",date:"",info:"",syllabus:"",mode:"exams"}:fE[e]={id:Date.now()+Math.random().toString(36).substr(2),mode:"",title:"",y_url:"",img:"",hint:"",expl:"",type:"mcq",answer:["1"],op:["1","2","3","4"],op1:[],op2:[],section:"Unfiled",pm:4,nm:-1},(window.location.hash.includes("edit_qubank")||window.location.hash.includes("edit_test"))&&(fE[e].mode="question"),oE.includes("edit_test")&&(fE[e].qid=fE[e].id),t=e}Ob("question_list").innerHTML="";for(var e=1;e<fE.length+1;e++)Ob("question_list").insertAdjacentHTML("beforeend",'<span class = "t_no_qno" id = "t_no_qno_'+e+'">'+e+"</span>"),Ob("t_no_qno_"+e).addEventListener("click",pT);Ob("question_list").insertAdjacentHTML("beforeend",'<span class = "t_no_qno" id = "t_no_qno_add">+</span>'),Ob("t_no_qno_add").addEventListener("click",pT),0!=t&&(fE[hE-1]=dT(),hE=t);var n=fE[hE-1];if(window.location.href.includes("edit_exams"))return Ob("aq_examname").value=n.name,Ob("aq_examdate").value=n.date,Ob("aq_examinfo").value=n.info,Ob("aq_examsyllabus").value=n.syllabus,void fT();if(dE=oE.includes("edit_test")?n.qid:n.id,Ob("aq_mode").value=n.mode,YT("aq_qtext",n.title),Ob("aq_yurl").value=n.y_url,Ob("aq_type").value=n.type,Ob("aq_hint").value=n.hint,Ob("aq_section").value=n.section,Ob("aq_posmrks").value=n.pm,Ob("aq_negmrks").value=n.nm,YT("aq_expl",n.expl),"mcq"==n.type||"mcq_multiple"==n.type){Ob("aq_mcq_con").innerHTML="";for(var i=0;i<n.op.length;i++){ST(),document.getElementsByClassName("aq_mcq")[i].value=n.op[i];for(var s=0;s<n.answer.length;s++)n.op[i]==n.answer[s]&&(document.getElementsByClassName("aq_mcq")[i].classList.add("aq_mcq_ans"),document.getElementsByClassName("aq_mcq_p")[i].style.borderColor="lime")}}else"numerical"!=n.type&&"explain"!=n.type&&"fill"!=n.type&&"taf"!=n.type||(Ob("aq_answer").value=n.answer[0]);fT()}async function gT(t){var e,n;Ob("aq_basic").style.display="flex",1==t?(e="topic",n=window.location.hash.split("edit_tpc/")[1],Ob("fu_topic_title").innerText="Add/Edit Topic",Ob("aq_mode").innerHTML='<option value="question">Question</option><option value="lesson">Lesson</option>',Ob("aq_tpc_save").style.display="block",Ob("aq_qbc_save").style.display="none",Ob("aq_tst_save").style.display="none",Ob("aq_test_extra").style.display="none",Ob("aq_exam_save").style.display="none",Ob("aq_exams").style.display="none",Ob("aq_all").style.display="flex",Ob("aq_ans_hold").style.display="flex"):2==t?(e="qbank",n=window.location.hash.split("edit_qubank/")[1],Ob("fu_topic_title").innerText="Add/Edit QBank",Ob("aq_mode").innerHTML='<option value="question">Question</option>',Ob("aq_tpc_save").style.display="none",Ob("aq_tst_save").style.display="none",Ob("aq_test_extra").style.display="none",Ob("aq_qbc_save").style.display="block",Ob("aq_exam_save").style.display="none",Ob("aq_exams").style.display="none",Ob("aq_all").style.display="flex",Ob("aq_ans_hold").style.display="flex"):3==t?(e="tests",n=window.location.hash.split("edit_tests/")[1],Ob("fu_topic_title").innerText="Add/Edit Tests",Ob("aq_mode").innerHTML='<option value="question">Question</option>',Ob("aq_tpc_save").style.display="none",Ob("aq_qbc_save").style.display="none",Ob("aq_test_extra").style.display="flex",Ob("aq_tst_save").style.display="block",Ob("aq_exam_save").style.display="none",Ob("aq_exams").style.display="none",Ob("aq_all").style.display="flex",Ob("aq_ans_hold").style.display="flex"):4==t&&(e="quarkz",n="exams",Ob("fu_topic_title").innerText="Add/Edit Exams",Ob("aq_mode").innerHTML='<option value="exam">Exam</option>',Ob("aq_tpc_save").style.display="none",Ob("aq_qbc_save").style.display="none",Ob("aq_test_extra").style.display="none",Ob("aq_exam_save").style.display="block",Ob("aq_tst_save").style.display="none",Ob("aq_exams").style.display="flex",Ob("aq_all").style.display="none",Ob("aq_ans_hold").style.display="none",Ob("aq_basic").style.display="none");try{let r=await hg(Qp(Fb,e,n));if(r.exists())if(1==t||2==t){var i=r.data();Ob("aq_tpcname").value=i.name,Ob("aq_tpclevel").value=i.level,Ob("aq_tpc_subj").value=i.subject,Ob("aq_tpc_chapterid").value=i.chid,fE=i.qllist,mT(0)}else if(3==t){i=r.data();function s(t){var e=new Date(t);return e.setMinutes(e.getMinutes()-e.getTimezoneOffset()),e.toISOString().slice(0,16)}Ob("aq_tpcname").value=i.title,Ob("aq_tpclevel").value=i.level,Ob("aq_tpc_subj").value=i.subject,Ob("aq_tst_batches").value=i.batch.toString(),Ob("aq_tst_stron").value=s(1e3*i.strton.seconds),Ob("aq_tst_endon").value=s(1e3*i.endon.seconds),Ob("aq_tst_timealotted").value=i.timeallotted,Ob("aq_tst_syllabi").value=i.syllabus;let o=await hg(Qp(Fb,"tests",n,"questions","questions")),a=await hg(Qp(Fb,"tests",n,"questions","answers")),c=[],l=[];if(o.exists())c=o.data().questions;if(a.exists())l=a.data().questions;fE=zb(c,l),mT(0)}else if(4==t){i=r.data();fE=i.examinfo,mT(0)}}catch{}}function yT(){for(var t=0;t<fE.length;t++)fE[t].qid!=dE&&fE[t].id!=dE||(fE.splice(t,1),mT(0),null==(dE=fE[t-1].qid||fE[t-1].id)&&(dE=""))}async function vT(t){for(var e=0;e<fE.length;e++)fE[e].qid!=dE&&fE.id!=dE||(fE[e]=dT());var n,i;if(1==t?(n="topic",i=window.location.hash.split("edit_tpc/")[1]):2==t?(n="qbank",i=window.location.hash.split("edit_qubank/")[1]):3==t?(n="tests",i=window.location.hash.split("edit_tests/")[1]):4==t&&(n="quarkz",i="exams"),1==t||2==t)try{await mg(Qp(Fb,n,i),{name:Ob("aq_tpcname").value,qllist:fE,level:Ob("aq_tpclevel").value,chid:Ob("aq_tpc_chapterid").value,subject:Ob("aq_tpc_subj").value})}catch{}else if(3==t){try{var s=new Date(Ob("aq_tst_stron").value),r=new Date(Ob("aq_tst_endon").value),o=Ob("aq_tst_batches").value.split(",");await mg(Qp(Fb,n,i),{title:Ob("aq_tpcname").value,timeallotted:Ob("aq_tst_timealotted").value,syllabus:Ob("aq_tst_syllabi").value,strton:s,endon:r,batch:o})}catch{}var a=[],c=[];for(e=0;e<fE.length;e++){var l=fE[e];a.push({qid:l.qid,mode:l.mode,title:l.title,type:l.type,op:l.op,op1:l.op1,op2:l.op2,section:l.section,pm:l.pm,nm:l.nm}),c.push({qid:l.qid,hint:l.hint,expl:l.expl,answer:l.answer,section:l.section,pm:l.pm,nm:l.nm})}try{await mg(Qp(Fb,n,i,"questions","questions"),{questions:a})}catch(t){Hb(t)}try{await mg(Qp(Fb,n,i,"questions","answers"),{questions:c})}catch{}}else if(4==t){await mg(Qp(Fb,n,i),{examinfo:fE})}}function _T(){window.location.hash="#/qbanks/"+atob(this.id.split("chpqbk")[1])}function wT(){window.location.hash="#/topic/"+atob(this.id.split("chptpc")[1])}async function bT(t){var e="",n="";1==t?(e="topic",n="topic"):2==t?(n="qbanks",e="qbank"):e="topic";var i=n+"/",s=window.location.hash.split(i)[1],r=Qp(Fb,e,s),o=await hg(r);if(!o.exists())throw Yb("error_page",1),new Error;var a=o.data();(aE={}).title=a.name,aE.qllist=a.qllist,CT(3)}function TT(){window.location.hash="#/chapter/"+atob(this.id.split("qb")[1])}function ET(t){Ob("qb_cont_2").innerHTML="";for(var e=0;e<lE.length;e++){var n=lE[e];n.subject==t&&(Ob("qb_cont_2").insertAdjacentHTML("beforeend",'<span class="tlinks rpl" style = "color:pink" id="qb'+btoa(n.id)+'">'+n.name+"</span>"),Ob("qb"+btoa(n.id)).addEventListener("click",TT))}}async function kT(t){var e="";1==t?(e="qbank",Ob("pe_tst_info").style.display="flex",Ob("eqb_instr").style.display="none"):2==t?(e="topic",Ob("pe_tst_info").style.display="none",Ob("eqb_instr").style.display="none"):e=3==t?"tests":"qbank";var n,i,s,r,o=window.location.hash.split("printable/"+e+"/")[1],a=Ob("qb_title"),c=Qp(Fb,e,o),l=await hg(c);if(!l.exists())throw Yb("error_page",1),new Error;n=(b=l.data()).qllist,a.innerText=b.name,Ob("eqb_add").innerHTML="";for(let t of n)if("question"==t.mode){i=(b=t).title,s=b.type,null==(r=b.img)&&(r="");var u='<div class = "q_ans_expl" style = "font-weight:bold;color:green;font-size:10px;flex-direction:row;display:none;">Explaination:'+b.expl+"</div>",h="<div style = 'font-weight:bold;color:green;font-size:10px;flex-direction:row;display:none' class = 'q_ans_1'>Answer:",d='<div class = "qbtp_q"><div id = "'+t.id+'">'+i+'<div class = "qb_q_ty">('+s+")</div></div>";if(Ob("eqb_add").insertAdjacentHTML("beforeend",d),""!=r){var f='<div class = "qb_img"><img src = "'+r+'"></div>';Ob(t.id).insertAdjacentHTML("beforeend",f)}var p="";if("mcq"==s||"mcq_multiple"==s){var m=b.op;for(let t of m)p+="<div class = 'qb_mcq_opt'>"+t+"</div>";var g='<div class = "qb_mcq_exp" type = "a">'+p+"</div>";for(let t of b.answer)h+="<div class = 'qb_mcq_ans'>"+t+"</div>"}if("taf"==s&&(g='<ol class = "qb_mcq_exp" type = "a"><li>True</li><li>False</li></ol>'),"explain"!=s&&"numerical"!=s&&"fill"!=s||(g=""),"matrix"==s){for(var y=b.op1,v=b.op2,_=y.length,w=0;w<_;w++)p+="<tr><td>"+y[w]+"</td><td>"+v[w]+"</td>";g="<table>"+p+"</table>"}Ob(t.id).insertAdjacentHTML("beforeend",g),Ob(t.id).insertAdjacentHTML("beforeend",h+"</div>"),Ob(t.id).insertAdjacentHTML("beforeend",u),renderMathInElement(Ob("eqb_add"))}else if("lesson"==t.mode){var b;i=(b=t).title,s=b.type,r=b.img;d='<div class = "les_q"><div id = "'+t.id+'"><div style = "font-size:3vh;">'+i+'</div><hr color="white" width="100%"></div>';Ob("eqb_add").insertAdjacentHTML("beforeend",d);u='<div class = "les_expl" style = "">'+b.expl+'</div><hr color="white" width="100%">';Ob(t.id).insertAdjacentHTML("beforeend",u),renderMathInElement(Ob("eqb_add"))}Ob("printable").insertAdjacentHTML("beforeend","<br></br>")}function IT(t){1==t?Ob("mainsformulas").innerHTML='\n    <span style="font-size: 5vh;color:yellow" id="fm_title">Mains Formula Sheet</span>\n    <hr color="white" width="100%">\n    <div style="overflow-y: scroll;height:50vh;" class="flex_type">\n    <span class="tlinks rpl" onclick = "window.location.hash = \'/notes/PHYFORMULAS\'">Physics Formula Sheet</span>\n    <span class="tlinks rpl" onclick = "window.location.hash = \'/notes/MATHFORMULAS\'">Maths Formula Sheet</span>\n    <span class="tlinks rpl" onclick = "window.location.hash = \'/notes/PCHEMNOTES\'">Physical Chemistry Formula Sheet</span>\n    <span class="tlinks rpl" onclick = "window.location.hash = \'/notes/OCHEMNOTES\'">Organic Chemistry Formula Sheet</span>\n    <span class="tlinks rpl" onclick = "window.location.hash = \'/notes/ICHEMNOTES\'">Inorganic Chemistry Formula Sheet</span>\n    </div>\n    <span style="font-size: 8px;">All PDF\'s Are Owned by their Respective Owners</span>\n    ':2==t&&(Ob("downloads").innerHTML='\n    <span style="font-size: 5vh;color:yellow" id="fm_title">Downloads</span>\n    <hr color="white" width="100%">\n    <div style="overflow-y: scroll;height:50vh;" class="flex_type">\n      \n    </div>\n    ')}async function AT(t){var e;Ob("tp_question").style.display="none",Ob("tp_lesson").style.display="block",""==t.y_url?Ob("tp_full_vid").style.display="none":(Ob("tp_full_vid").style.display="flex",e=t.y_url,window.player.loadVideoById(e)),Ob("tp_lsno").innerText=t.title,Ob("tp_expl").innerHTML=t.expl}async function CT(t){var e;e=1==t?-1:1,(cE<aE.qllist.length&&2==t||1==t&&cE>0)&&(cE+=e),3==t&&(cE=0);var n=aE.title;Ob("tp_title").innerText=n;var i=aE.qllist[cE];"lesson"==i.mode?AT(i):"question"==i.mode&&async function(t,e){function n(t){t.style.display="none"}function i(t){t.style.display="block"}function s(t){t.style.display="flex"}n(Ob("tp_hint")),n(Ob("tp_a_expl")),n(Ob("tp_e_answer")),n(Ob("tp_status"));var r=Ob("tp_mcq_con"),o=Ob("tp_matrix"),a=Ob("tp_answer");if(Ob("tp_lsno").innerText="Question",Ob("tp_question").style.display="flex",Ob("tp_lesson").style.display="none",Ob("tp_question").setAttribute("dataid",t.id),Ob("tp_question").setAttribute("qtype",t.type),r.innerHTML="",Ob("tp_qtext").innerHTML=t.title,"mcq"==t.type||"mcq_multiple"==t.type){s(r),n(o),n(a);var c=t.op,l="";for(let t of c)l+='<div class="tp_mcq_p rpl" onclick = "mcqchose(this)">'+t+"</div>";Ob("tp_mcq_con").insertAdjacentHTML("beforeend",l)}else if("matrix"==t.type){n(r),i(o),n(a);for(var u=t.op1,h=t.op2,d=u.length,f=0;f<d;f++)document.getElementsByClassName("tp_i1")[f].innerText=u[f];for(f=0;f<d;f++)document.getElementsByClassName("tp_i2")[f].innerText=h[f]}else"numerical"==t.type||"fill"==t.type?(n(r),n(o),i(a)):"taf"==t.type?(s(r),n(o),n(a),l='<div class="tp_mcq_p rpl">True</div><div class="tp_mcq_p rpl">False</div>',Ob("tp_mcq_con").insertAdjacentHTML("beforeend",l)):(n(r),n(o),n(a));renderMathInElement(Ob("tp_ans_hold")),renderMathInElement(Ob("tp_qtext"))}(i),QT()}function ST(){Ob("aq_mcq_con").insertAdjacentHTML("beforeend",'<div class="aq_mcq_p" onclick="changeColor(this)"><input class="aq_mcq"></div>')}function xT(){document.getElementsByClassName("aq_mcq_p")[document.getElementsByClassName("aq_mcq").length-1].remove()}function NT(){for(var t=Ob("eqb_add"),e=t.children.length;e>=0;e--)t.appendChild(t.children[Math.random()*e|0])}function RT(){Mn(Vb,JT.email).then((()=>{Hb("Success","Password Reset Email sent.")})).catch((t=>{t.code;Hb("Failure",t.message)}))}async function qT(t){Ob("prf_pphoto");var e,n,i=Ob("prf_name"),s=Ob("prf_phone"),r=Ob("prf_email"),o=Ob("prf_class"),a=Ob("prf_batch"),c=Ob("prf_gender"),l=Ob("prf_crton"),u=Ob("tmt_frame"),h=Ob("spoints");if(t){var d=Qp(Fb,"users",t.uid);if((g=await hg(d)).exists()){var f=g.data();(JT=f).uuid=t.uid,Ob("dshd_uname").innerText=f.email,Ob("dshd_name").innerText=f.name,i.textContent=f.name,s.textContent=f.mblno,r.textContent=f.email,o.textContent=f.class,l.textContent=new Date(1e3*f.sgndon.seconds).toDateString(),c.textContent=f.gen,e=f.batch,f.course,h.textContent=f.spoints,eE=f.roles.user,ZT=f.roles.editor,tE=f.roles.admin,JT.usernotes=f.usernotes,null==f.usernotes&&(JT.usernotes=[])}1==f.deleted&&(Hb("Warning","User Account Has Been Deleted"),Qb()),"Male"==f.gen?(Ob("prf_tab_img").classList.remove("prf_male","prf_female"),Ob("prf_tab_img").classList.add("prf_male"),Ob("prf_tab_t_t_img").classList.remove("prf_male","prf_female"),Ob("prf_tab_t_t_img").classList.add("prf_male")):"Female"==f.gen&&(Ob("prf_tab_img").classList.remove("prf_male","prf_female"),Ob("prf_tab_img").classList.add("prf_female"),Ob("prf_tab_t_t_img").classList.remove("prf_male","prf_female"),Ob("prf_tab_t_t_img").classList.add("prf_female"));try{d=Qp(Fb,"batch",e);if((g=await hg(d)).exists()){f=g.data();a.textContent=f.name,Ob("dshd_batch").innerText=f.name,n=f.timetable,async function(t,e){if(mE!=[]){var n=Qp(Fb,"batch",t,"info","tests"),i=await hg(n);if(i.exists()){var s=i.data();mE=s.tests}}if(vE!=[]){const t=Km(Wp(Fb,"tests"),Wm("finished","array-contains",e),Zm(5));(await fg(t)).forEach((t=>{var e=t.data(),n={title:e.title,testid:t.id,finished:!0,strton:e.strton,endon:e.endon};vE.push(n);var i=0;for(let t of mE)t.testid==n.testid?mE[i].finished=!0:mE[i].finished=!1,i+=1}))}for(var r=parseInt(Date.now()/1e3),o=0;o<mE.length;o++)r>mE[o].strton.seconds&&r<mE[o].endon.seconds?gE.push(mE[o]):r<mE[o].strton.seconds&&yE.push(mE[o])}(e,t.uid);var p="https://calendar.google.com/calendar/embed??height=600&wkst=2&bgcolor=%23ffffff&ctz=Asia%2FKolkata&showTitle=0&showCalendars=0&showTabs=0&showPrint=0&showDate=1&src="+n+"%40group.calendar.google.com&amp;ctz=Asia%2FKolkata";if(u.src=p,f.delon.seconds<=parseInt(Date.now()/1e3))throw Hb("Warning","This Batch Has Been Deleted"),Qb(),window.reload(),new Error("DENIED");for(var m=0;m<f.chlist.length;m++)lE.push({name:f.chlist[m].name,id:f.chlist[m].id,subject:f.chlist[m].subject})}}catch{}Ob("lg_uname").value="",Ob("lg_pass").value="",h.style.display="block",Ob("dsh_btn").style.display="block",""!=window.location.hash&&null!=window.location.hash&&null!=window.location.hash||(window.location.hash="#/dashboard",pE=1);var g;d=Qp(Fb,"quarkz","exams");if((g=await hg(d)).exists()){f=g.data();Ob("db_exam_list").innerHTML="",""!=f.warning&&Hb("Notice",f.warning,(function(){window.location.hash="#/usernotes/releasenotes"}),"Release Notes");for(m=0;m<f.examinfo.length;m++){var y=f.examinfo[m];Ob("db_exam_list").insertAdjacentHTML("beforeend",'<div class = "tlinks_min rpl"><span style="font-size: 16px;" onclick = "examlog(\''+y.name+"','"+y.date+"','"+y.info+"','"+y.syllabus+"')\">"+y.name+"</span></div>")}}Yb(window.location.hash.split("#/")[1],1),async function(){for(var t=0;t<JT.usernotes.length;t++)Ob("un_list").insertAdjacentHTML("beforeend","<div class='t_notes' id='uno"+JT.usernotes[t].id+"' style='background-color: "+JT.usernotes[t].color+"'><span class='tntc2' id='"+JT.usernotes[t].id+"'>"+JT.usernotes[t].title+"</span></div>"),Ob("uno"+JT.usernotes[t].id).addEventListener("click",rT)}()}else i.textContent="",s.textContent="",r.textContent="",o.textContent="",h.textContent="",h.style.display="none",Ob("dsh_btn").style.display="none",Ob("tp_pnt").style.display="none",Ob("tp_edt").style.display="none",Yb("login",1),1==pE&&document.location.reload()}function LT(){for(var t,e,n,i,s=Ob("tp_question").getAttribute("dataid"),r=Ob("tp_question").getAttribute("qtype"),o=0;o<aE.qllist.length;o++)if(aE.qllist[o].id==s){e=aE.qllist[o].answer,n=aE.qllist[o].expl,i=aE.qllist[o].hint;break}if("numerical"!=r&&"fill"!=r||(e==(t=Ob("tp_answer").value)?(Ob("tp_status").innerText="Correct Answer",1):(Ob("tp_status").innerText="Wrong Answer",0)),"mcq"==r||"mcq_multiple"==r||"taf"==r){t=[];for(var a=0;a<document.getElementsByClassName("tp_mcq_p").length;a++)document.getElementsByClassName("tp_mcq_p")[a].classList.contains("aq_mcq_ans")&&t.push(document.getElementsByClassName("tp_mcq_p")[a].innerText);qb(t,e)?(Ob("tp_status").innerText="Correct Answer",1):(Ob("tp_status").innerText="Wrong Answer",0)}Ob("tp_status").style.display="block",Ob("tp_hint").style.display="block",Ob("tp_a_expl").style.display="block",Ob("tp_e_answer").style.display="block",Ob("tp_a_expl").innerHTML=n,Ob("tp_hint").innerHTML=i,Ob("tp_e_answer").innerHTML="Answer:"+e}function DT(){window.location.hash.includes("topic")?OT("printable/topic/"+window.location.hash.split("topic/")[1],1):window.location.hash.includes("qbanks")&&OT("printable/qbank/"+window.location.hash.split("qbanks/")[1],1),window.location.hash.includes("edit_tpc/")?OT("printable/topic/"+window.location.hash.split("edit_tpc/")[1],1):window.location.hash.includes("edit_qubank/")&&OT("printable/qbank/"+window.location.hash.split("edit_qubank/")[1],1)}function MT(){window.location.hash.includes("topic")?OT("edit_tpc/"+window.location.hash.split("topic/")[1],1):window.location.hash.includes("qbanks")&&OT("edit_qubank/"+window.location.hash.split("qbanks/")[1],1)}function OT(t,e){window.location.hash="#/"+t,"dashboard"==t&&Yb("dashboard",1)}function PT(){window.location.hash="#/instructions/"+this.id}function UT(){window.location.hash="#/finished/"+this.id}function FT(t){var e;for(var n of("active"==t?e=gE:"upcoming"==t?e=yE:"finished"==t&&(e=vE),Ob("testlinks").innerHTML="",e)){var i=new Date(1e3*n.strton.seconds),s=new Date(1e3*n.endon.seconds),r='<div class="tlinks" id = "'+n.testid+'"><span class = "t_title">'+n.title+'</span><span class = "t_stron">Starts At:'+i+'</span><span class ="t_endon">Ends At:'+s+"</div>";"finished"!=t&&0==n.finished?(Ob("testlinks").insertAdjacentHTML("beforeend",r),Ob(n.testid).addEventListener("click",PT)):"finished"==t&&(Ob("testlinks").insertAdjacentHTML("beforeend",r),Ob(n.testid).addEventListener("click",UT))}}async function VT(t){var e;if(1==t){var n=window.location.hash.split("/finished/")[1],i=Qp(Fb,"tests",n,"questions","questions"),s=await hg(i);s.exists()&&(e=s.data().questions)}else 2==t&&(e=[],e=bE);for(var r={},o=0;o<kE.length;o++)kE[o].time=kE[o].time.seconds;var a,c,l=Ub(kE,"time","type",0),u="";for(o=0;o<l.length;o++)"b"==l[o].type?(a=l[o].time,u=l[o].value):"a"==l[o].type&&u==l[o].value&&(c=l[o].time,null==r[l[o].value]&&(r[l[o].value]={},r[l[o].value].time=0),r[l[o].value].time+=c-a,a=c,c=0);var h={Physics:{correct:0,unattempted:0,incorrect:0,total:0},Chemistry:{correct:0,unattempted:0,incorrect:0,total:0},Math:{correct:0,unattempted:0,incorrect:0,total:0},Biology:{correct:0,unattempted:0,incorrect:0,total:0},Computer:{correct:0,unattempted:0,incorrect:0,total:0},Statistics:{correct:0,unattempted:0,incorrect:0,total:0},Unfiled:{correct:0,unattempted:0,incorrect:0,total:0}},d=0,f=0,p=0;for(o=0;o<e.length;o++)for(var m=0;m<nE.length;m++)if(e[o].qid==nE[m].qid){var g=r[e[o].qid];null==r[e[o].qid]?(r[e[o].section]={},r[e[o].section].time=0):(h[e[o].section].total+=g.time,0==nE[o].marks?(h[e[o].section].unattempted+=g.time,p+=g.time):nE[o].marks==e[o].pm?(h[e[o].section].correct+=g.time,d+=g.time):(h[e[o].section].incorrect+=g.time,f+=g.time))}iE={questions:r,subject:h,correct:d,incorrect:f,unattempted:p}}function jT(){$T(this.id,this.innerText)}async function BT(t){var e,n=[],i=[],s=[],r="",o="";window.location.hash.includes("/attempt/")?(r=window.location.hash.split("#/attempt/")[1],o=Hb("Warning","Submitting Tests Answers: Please Do Not Close The Tab.")):window.location.hash.includes("/finished/")?r=window.location.hash.split("#/finished/")[1]:window.location.hash.includes("/testreport/")&&(r=window.location.hash.split("#/testreport/")[1]);var a=Qp(Fb,"tests",r,"responses",Vb.currentUser.uid),c=await hg(a);if(c.exists()){var l=c.data().answers;for(var u in s=c.data().info,l)n.push({qid:u,ans:l[u].ans,type:l[u].type,time:l[u].time})}a=Qp(Fb,"tests",r,"questions","answers"),(c=await hg(a)).exists()&&(e=c.data().questions);for(var h=0,d=0,f=0,p={Physics:{correct:0,unattempted:0,incorrect:0,total:0},Chemistry:{correct:0,unattempted:0,incorrect:0,total:0},Math:{correct:0,unattempted:0,incorrect:0,total:0},Biology:{correct:0,unattempted:0,incorrect:0,total:0},Computer:{correct:0,unattempted:0,incorrect:0,total:0},Statistics:{correct:0,unattempted:0,incorrect:0,total:0},Unfiled:{correct:0,unattempted:0,incorrect:0,total:0}},m=0;m<e.length;m++)for(var g=0;g<n.length;g++)if(e[m].qid==n[g].qid){var y=n[g];null==y.ans&&(y.ans=[]),0==y.ans.length?(i.push({qid:e[m].qid,marks:0,type:"unattempted"}),h+=parseFloat(e[m].pm),p[e[m].section].unattempted+=parseFloat(e[m].pm),p[e[m].section].total+=parseFloat(e[m].pm)):qb(e[m].answer,y.ans)?(i.push({qid:e[m].qid,marks:parseFloat(e[m].pm),type:"correct"}),d+=parseFloat(e[m].pm),p[e[m].section].correct+=parseFloat(e[m].pm),p[e[m].section].total+=parseFloat(e[m].pm)):(i.push({qid:e[m].qid,marks:parseFloat(e[m].nm),type:"incorrect"}),f+=parseFloat(e[m].nm),p[e[m].section].incorrect+=parseFloat(e[m].nm),p[e[m].section].total+=parseFloat(e[m].pm))}var v={correct:d,incorrect:f,unattempted:h,mList:i,total:p.Physics.total+p.Chemistry.total+p.Math.total+p.Biology.total+p.Computer.total+p.Statistics.total+p.Unfiled.total,usermarks:d+f,subjectmarks:p};1==t?Lb(v,s)||(Hb("NOTICE","Please Wait, Marks Are Being Updated"),await mg(Qp(Fb,"tests",r,"responses",Vb.currentUser.uid),{info:v}),await mg(Qp(Fb,"tests",r,"responses","finished"),{leaderboard:Tg({uid:JT.uuid,marks:v.usermarks,name:JT.name})}),Yb()):0==t&&(await mg(Qp(Fb,"tests",r,"responses",Vb.currentUser.uid),{info:v}),await mg(Qp(Fb,"tests",r,"responses","finished"),{leaderboard:Tg({uid:JT.uuid,marks:v.usermarks,name:JT.name})}),Yb("testend",1)),document.getElementById(o).style.visibility="hidden",document.getElementById(o).style.opacity="0"}function $T(t,e){var n=new Date;wE=0,window.location.hash.includes("/attempt/")&&EE!=t&&kE.push({type:"a",time:n,value:EE}),Ob("tt_qno").innerText=e;try{Ob(EE).style.border=""}catch{}EE=t,window.location.hash.includes("/attempt/")&&kE.push({type:"b",time:n,value:EE}),Ob(EE).style.border="purple 3px solid";for(let e of bE.questions)if(t==e.qid){Ob("tt_qtitle").innerHTML="";var i='<div class = "qb_q" id = "Q'+e.qid+'"><div class = "qb_ttl">'+e.title+'<div id = "qb_q_ty" class = "qb_q_ty qb_qt_ty" >('+e.type+")</div></div></div>";Ob("tt_qtitle").insertAdjacentHTML("beforeend",i);var s,r,o="";if("mcq"==e.type){var a=e.op;for(let t of a)o+='<li><input type="radio" class = "q_ans" value = "'+t+'" name = "q_op">'+t+"</input></li>";var c='<ol class = "qb_mcq" type = "A">'+o+"</ol>"}if("mcq_multiple"==e.type){a=e.op;for(let t of a)o+='<li><input type="checkbox" class = "q_ans" value = "'+t+'" name = "q_op">'+t+"</input></li>";c='<ol class = "qb_mcq" type = "A">'+o+"</ol>"}if("taf"==e.type&&(c='<ol class = "qb_mcq" type = "A"><li>True</li><li>False</li></ol>'),"explain"!=e.type&&"numerical"!=e.type||(c=""),"matrix"==e.type){for(var l=e.op1,u=e.op2,h=l.length,d=0;d<h;d++)o+="<tr><td>"+l[d]+"</td><td>"+u[d]+"</td>";c="<table>"+o+"</table>"}switch(Ob("tt_qtitle").insertAdjacentHTML("beforeend",c),e.type){case"mcq":case"mcq_multiple":s="";break;case"taf":s='<div id = "tt_mcq"><span><input type="radio" value="a" class = "q_ans" name = "q_op">True</span><span><input type="radio" value="b" class = "q_ans" name = "q_op">False</span></div> ';break;case"numerical":s='<div id = "tt_num"><input type = "number" class="q_ans"></div>';break;case"matrix":s='<div id = "tt_matrix"><div>A<span><input type="checkbox" value="a" id="q_ans_a" name = "q_op">1</span><span><input type="checkbox" value="b" id="q_ans_a" name = "q_op">2</span><span><input type="checkbox" value="c" id="q_ans_a" name = "q_op">3</span><span><input type="checkbox" value="d" id="q_ans_a" name = "q_op">4</span></div><div>B<span><input type="checkbox" value="a" id="q_ans_a" name = "q_op">1</span><span><input type="checkbox" value="b" id="q_ans_a" name = "q_op">2</span><span><input type="checkbox" value="c" id="q_ans_a" name = "q_op">3</span><span><input type="checkbox" value="d" id="q_ans_a" name = "q_op">4</span></div><div>C<span><input type="checkbox" value="a" id="q_ans_a" name = "q_op">1</span><span><input type="checkbox" value="b" id="q_ans_a" name = "q_op">2</span><span><input type="checkbox" value="c" id="q_ans_a" name = "q_op">3</span><span><input type="checkbox" value="d" id="q_ans_a" name = "q_op">4</span></div><div>D<span><input type="checkbox" value="a" id="q_ans_a" name = "q_op">1</span><span><input type="checkbox" value="b" id="q_ans_a" name = "q_op">2</span><span><input type="checkbox" value="c" id="q_ans_a" name = "q_op">3</span><span><input type="checkbox" value="d" id="q_ans_a" name = "q_op">4</span></div></div>';break;case"fill":s='<div id="tt_fill"><input type = "text" class = "q_ans"></div>'}if(Ob("tt_qtitle").insertAdjacentHTML("beforeend",s),!window.location.hash.includes("attempt"))for(let e of IE.questions)if(t==e.qid){r=e.answer,null!=iE&&(null==iE.questions[e.qid]?Ob("tt_timespent").innerText="0 seconds":Ob("tt_timespent").innerText=Rb(iE.questions[e.qid].time));var f='<div id="tg_answer">Answer: '+e.answer+'</div><div id="tg_expl">Explanation: '+e.expl+"</div>";Ob("tt_qtitle").insertAdjacentHTML("beforeend",f)}renderMathInElement(Ob("tt_qtitle"));for(let n of TE)if(n.qid==t){for(d=0;d<document.getElementsByClassName("q_ans").length;d++){var p=document.getElementsByClassName("q_ans")[d];if("mcq"==e.type||"mcq_multiple"==e.type){null==n.ans&&(n.ans=[]);for(let t of n.ans)if(p.value==t){p.checked=!0,1;break}}else p.value=n.ans,1}window.location.hash.includes("attempt")||(qb(n.ans,r)?Ob("tt_marksaward").innerHTML='<div style="color:lime">Correct(+4)</div>':0==n.ans.length?Ob("tt_marksaward").innerHTML='<div style="color:orange">Unanswered(0)</div>':Ob("tt_marksaward").innerHTML='<div style="color:red">Incorrect(-1)</div>')}for(var m=0;m<TE.length;m++)TE[m].qid==EE&&"tts_notvisit"==TE[m].type&&window.location.hash.includes("attempt")&&(TE[m].type="tts_notanswer",zT("tts_notanswer"),TE[m].ans=[],Ob(EE).classList.remove("tts_notanswer","tts_notvisit","tts_answered","tts_review","tts_ansreview"),Ob(EE).classList.add("tts_notanswer"));break}}function HT(){var t=1;for(let t of["tw_Physics","tw_Chemistry","tw_Math","tw_Computer","tw_Statistics","tw_Biology","tw_Unfiled"])Ob(t+"_c").innerHTML="",Ob(t).style.display="none";for(let n of bE.questions){var e='<span class = "tts_notvisit" id = "'+n.qid+'">'+t+"</span>";t+=1,Ob("tw_"+n.section+"_c").insertAdjacentHTML("beforeend",e),Ob("tw_"+n.section).style.display="flex",Ob(n.qid).addEventListener("click",jT)}if(window.location.hash.includes("attempt"))Ob("tt_sub").style.display="block";else{for(let t of TE){var n=t.qid;for(let e of IE.questions)if(n==e.qid){var i=e.answer;null==t.ans&&(t.ans=[]),qb(t.ans,i)?Ob(n).classList.add("t_crr"):0==t.ans.length?Ob(n).classList.add("t_unat"):Ob(n).classList.add("t_incrr")}}VT(2)}for(let t of TE)Ob(t.qid).classList.replace("tts_notvisit",t.type);$T(bE.questions[0].qid,1)}async function zT(t){if(!window.location.hash.includes("attempt"))return Hb("Error","Performing Test Operations in Test Reports Is Prohibited"),1;var e="answers."+EE,n=window.location.hash.split("#/attempt/")[1],i=Ob("qb_q_ty").innerText.split("(")[1];if("tts_notanswer"==t){await mg(Qp(Fb,"tests",n,"responses",Vb.currentUser.uid),{[`${e}`]:{ans:"",type:"tts_notanswer",time:bg()}});var s=0;for(let t of TE){if(t.qid==EE){for(var r=0;r<document.getElementsByClassName("q_ans").length;r++){var o=document.getElementsByClassName("q_ans")[r];if("mcq"==i||"mcq_multiple"==i)for(var a=0;a<t.ans.length;a++){var c=t.ans[a];o.value==c&&(o.checked=!1)}else t.value=""}TE.splice(s,1)}s+=1}}else{var l=[];for(r=0;r<document.getElementsByClassName("q_ans").length;r++){o=document.getElementsByClassName("q_ans")[r];"mcq)"==i||"mcq_multiple)"==i?1==o.checked&&l.push(o.value):l.push(o.value)}"tts_review"==t&&(l=""),await mg(Qp(Fb,"tests",n,"responses",Vb.currentUser.uid),{[`${e}`]:{ans:l,type:t,time:bg()}});var u=0;for(let e of TE)e.qid==EE&&(e.ans=l,e.type=t,u=1);0==u&&TE.push({qid:EE,ans:l,type:t})}Ob(EE).classList.remove("tts_notanswer","tts_notvisit","tts_answered","tts_review","tts_ansreview"),Ob(EE).classList.add(t)}async function KT(){if(!window.location.hash.includes("attempt"))return Hb("Error","Performing Test Operations in Test Reports Is Prohibited"),1;var t=new Date;kE.push({type:"a",time:t,value:EE}),kE.push({type:"end",time:t,value:"1"});var e=window.location.hash.split("#/attempt/")[1];window.onbeforeunload=function(){},window.onhashchange=Yb,await mg(Qp(Fb,"tests",e,"responses",Vb.currentUser.uid),{endon:bg(),actions:kE,warning:[]}).then((function(){TE=[]})),await mg(Qp(Fb,"tests",e,"responses","finished"),{finished:Tg(Vb.currentUser.uid)}).then(BT(0));var n=new Date(1e3*_E.endon.seconds);Ob("te_endtime").innerText=n,mE=[],gE=[],yE=[],vE=[],_E=[],bE=[],EE="",Ob("dsh_btn").style.display="block",Ob("tp_pnt").style.display="none",clearInterval(cT)}function GT(t){0==t&&Hb("WARNING","You Are Currently Offline.")}function WT(){"preview"==Ob("un_rendermode").value?(Ob("un_preview").style.display="block",Ob("un_preview").innerHTML="<h1 style = 'text-align:center'>"+Ob("un_title").value+"</h1><br>"+XT("un_editable"),Ob("un_edit").style.display="none"):"edit"==Ob("un_rendermode").value&&(Ob("un_edit").style.display="flex",Ob("un_preview").style.display="none");try{Ob("uno"+window.location.hash.split("usernotes/")[1]).style.backgroundColor=Ob("un_colorpicker").value}catch{}}function QT(){try{window.player.stopVideo()}catch{}}function XT(t){return $("#"+t).summernote("code")}function YT(t,e){$("#"+t).summernote("code",e)}aT(),async function(){var t=Qp(Fb,"forum","pinned"),e=await hg(t);if(e.exists()){t=e.data();Ob("pinnedtxt").innerText=t.message}}(),window.onbeforeunload=function(t){updatePoints()},window.addEventListener("online",(()=>GT(1))),window.addEventListener("offline",(()=>GT(0))),Ob("te_title").innerText="The Test Has Ended",$(document).ready((function(){$(".summernote").summernote({toolbar:[["style",["style"]],["font",["bold","italic","underline","clear"]],["fontname",["fontname"]],["color",["color"]],["para",["ul","ol","paragraph"]],["height",["height"]],["table",["table"]],["insert",["link","picture","hr"]],["view",["fullscreen","codeview"]],["help",["help"]]]})}));var JT,ZT,tE,eE,nE,iE,sE={copyright:"Mr Techtroid 2021-23",vno:"v0.4.2",author:"Mr Techtroid","last-updated":"10/02/2023(IST)",serverstatus:"firebase-online"},rE="login",oE=window.location.hash.split("#/")[1],aE={},cE=0,lE=[],uE=[],hE=0,dE="",fE=[],pE=0,mE=[],gE=[],yE=[],vE=[],_E=[],wE=0,bE=[],TE=[],EE="",kE=[],IE=[];window.onhashchange=Yb,function(t,e,n,i){z(t).onAuthStateChanged(e,n,i)}(cs(),qT),function(){function t(){Hb("Note","By Clicking on 'Accept And Register' you agree that you accept all Terms And Conditions and Privacy Policy of Quarkz!",Xb,"Accept And Register")}Ob("sim_btn").addEventListener("click",(function(){OT("simlist")})),Ob("sgn_in").addEventListener("click",Wb),Ob("reg_in").addEventListener("click",(function(){OT("register")}));var t=Ob("rg_in").addEventListener("click",t);Ob("lgt_btn").addEventListener("click",Qb),Ob("tmt_btn").addEventListener("click",(function(){OT("timetable")})),Ob("prf_btn").addEventListener("click",(function(){OT("profile")})),Ob("abt_btn").addEventListener("click",(function(){OT("about")})),Ob("shf_btn").addEventListener("click",NT),Ob("aq_ao").addEventListener("click",ST),Ob("aq_ro").addEventListener("click",xT),Ob("aq_re").addEventListener("click",yT),Ob("aq_mode").addEventListener("change",fT),Ob("aq_type").addEventListener("change",fT),Ob("dsh_btn").addEventListener("click",(function(){OT("dashboard")})),Ob("adi_btn").addEventListener("click",(function(){OT("functions")})),Ob("aq_tpc_save").addEventListener("click",(function(){vT(1)})),Ob("aq_qbc_save").addEventListener("click",(function(){vT(2)})),Ob("aq_tst_save").addEventListener("click",(function(){vT(3)})),Ob("aq_exam_save").addEventListener("click",(function(){vT(4)})),Ob("un_save").addEventListener("click",iT),Ob("un_print").addEventListener("click",sT),Ob("tstinf_btn").addEventListener("click",(function(){OT("testinfo")})),Ob("tpc_btn").addEventListener("click",(function(){OT("tpclist")})),Ob("usc_btn").addEventListener("click",(function(){OT("users")})),Ob("lvq_btn").addEventListener("click",(function(){OT("livequiz")})),Ob("frm_btn").addEventListener("click",(function(){OT("forum")})),Ob("tp_nxt").addEventListener("click",(function(){CT(2)})),Ob("tp_prv").addEventListener("click",(function(){CT(1)})),Ob("tp_sbm").addEventListener("click",LT),Ob("lgl_btn").addEventListener("click",(function(){OT("legal")})),Ob("qba_btn").addEventListener("click",(function(){OT("qblist")})),Ob("tp_pnt").addEventListener("click",DT),Ob("aq_export").addEventListener("click",DT),Ob("tp_edt").addEventListener("click",MT),Ob("cyb_btn").addEventListener("click",(function(){OT("cyberhunt")})),Ob("ti_act").addEventListener("click",(function(){FT("active")})),Ob("ti_upc").addEventListener("click",(function(){FT("upcoming")})),Ob("ti_fin").addEventListener("click",(function(){FT("finished")})),Ob("tt_save").addEventListener("click",(function(){zT("tts_answered")})),Ob("tt_clear").addEventListener("click",(function(){zT("tts_notanswer")})),Ob("tt_review").addEventListener("click",(function(){zT("tts_review")})),Ob("tt_ansreview").addEventListener("click",(function(){zT("tts_ansreview")})),Ob("psims").addEventListener("click",(function(){nT("physics")})),Ob("csims").addEventListener("click",(function(){nT("chemistry")})),Ob("msims").addEventListener("click",(function(){nT("maths")})),Ob("bsims").addEventListener("click",(function(){nT("biology")})),Ob("cosims").addEventListener("click",(function(){nT("computer")})),Ob("ssims").addEventListener("click",(function(){nT("statistics")})),Ob("usims").addEventListener("click",(function(){nT("unfiled")})),Ob("pchb").addEventListener("click",(function(){ET("physics")})),Ob("cchb").addEventListener("click",(function(){ET("chemistry")})),Ob("mchb").addEventListener("click",(function(){ET("maths")})),Ob("bchb").addEventListener("click",(function(){ET("biology")})),Ob("cochb").addEventListener("click",(function(){ET("computer")})),Ob("schb").addEventListener("click",(function(){ET("statistics")})),Ob("uchb").addEventListener("click",(function(){ET("unfiled")})),Ob("tt_sub").addEventListener("click",(function(){Hb("Warning","Are You Sure You Want To End The Test",KT,"Yes,Submit",1)})),Ob("chp_btn").addEventListener("click",(function(){OT("chplist")})),Ob("pass_rst_btn").addEventListener("click",RT),Ob("aq_sims_save").addEventListener("click",tT),Ob("un_rendermode").addEventListener("change",WT),Ob("un_viewership").addEventListener("change",WT),Ob("un_print").addEventListener("click",(function(){Ob("un_preview").style.display="none",Ob("un_preview").innerHTML="<h1 style = 'text-align:center;margin:0px'>"+Ob("un_title").value+"</h1>"+XT("un_editable"),window.idElementPrint(Ob("un_preview"),JT.name)})),Ob("qbnk_vid_btn_e").addEventListener("click",(function(){Ob("watermark").style.display="flex",Mb(Ob("qbnk_vid"))})),Ob("qbnk_vid_btn").addEventListener("click",(function(){hT()}))}(),function(){function t(t){return document.getElementById(t)}function e(e,n){t("c-output").insertAdjacentHTML("beforeend","<div style = "+n+">"+e+"</div>")}console,console={},console={log:function(t){e("",t)},error:function(t){e("",t)}},t("c-exec").addEventListener("click",(t("c-input").value,t("c-input").value,void document.querySelector("body").insertAdjacentHTML("beforeend","<script><\/script>"))),console,e("Ariel","color:pink;align-text:center;")}();
//# sourceMappingURL=index.299c83d4.js.map
