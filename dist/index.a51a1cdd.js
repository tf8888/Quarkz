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
 */function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(e===setTimeout)return setTimeout(t,0);if((e===r||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:r}catch(t){e=r}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(t){n=o}}();var l,c=[],u=!1,h=-1;function d(){u&&l&&(u=!1,l.length?c=l.concat(c):h=-1,c.length&&p())}function p(){if(!u){var t=a(d);u=!0;for(var e=c.length;e;){for(l=c,c=[];++h<e;)l&&l[h].run();h=-1,e=c.length}l=null,u=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{return n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function f(t,e){this.fun=t,this.array=e}function m(){}s.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new f(t,e)),1!==c.length||u||a(p)},f.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=m,s.addListener=m,s.once=m,s.off=m,s.removeListener=m,s.removeAllListeners=m,s.emit=m,s.prependListener=m,s.prependOnceListener=m,s.listeners=function(t){return[]},s.binding=function(t){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(t){throw new Error("process.chdir is not supported")},s.umask=function(){return 0};const g=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296==(64512&s)&&i+1<t.length&&56320==(64512&t.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++i)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},y={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let e=0;e<t.length;e+=3){const s=t[e],r=e+1<t.length,o=r?t[e+1]:0,a=e+2<t.length,l=a?t[e+2]:0,c=s>>2,u=(3&s)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,r||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(g(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[i++]=String.fromCharCode(55296+(r>>10)),e[i++]=String.fromCharCode(56320+(1023&r))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let e=0;e<t.length;){const s=n[t.charAt(e++)],r=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==s||null==r||null==o||null==a)throw Error();const l=s<<2|r>>4;if(i.push(l),64!==o){const t=r<<4&240|o>>2;if(i.push(t),64!==a){const t=o<<6&192|a;i.push(t)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},v=function(t){return function(t){const e=g(t);return y.encodeByteArray(e,!0)}(t).replace(/\./g,"")},_=function(t){try{return y.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==i)return i;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,b=()=>{try{return w()||(()=>{if(void 0===t||void 0===t.env)return})()||(()=>{if("undefined"==typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=t&&_(t[1]);return e&&JSON.parse(e)})()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},T=t=>{var e,n;return null===(n=null===(e=b())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},E=t=>{const e=T(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),i]:[e.substring(0,n),i]},k=()=>{var t;return null===(t=b())||void 0===t?void 0:t.config},A=t=>{var e;return null===(e=b())||void 0===e?void 0:e[`_${t}`]};
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
class I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
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
 */function x(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[v(JSON.stringify({alg:"none",type:"JWT"})),v(JSON.stringify(r)),""].join(".")}
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
 */function C(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function S(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function q(){const t=C();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function N(){try{return"object"==typeof indexedDB}catch(t){return!1}}class D extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},i=`${this.service}/${t}`,s=this.errors[t],r=s?function(t,e){return t.replace(L,((t,n)=>{const i=e[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new D(i,o,n)}}const L=/\{\$([^}]+)}/g;
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
 */function B(t,e){const n=new j(t,e);return n.subscribe.bind(n)}class j{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let i;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");i=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===i.next&&(i.next=z),void 0===i.error&&(i.error=z),void 0===i.complete&&(i.complete=z);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(t){}})),this.observers.push(i),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function z(){}
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
function H(t){return t&&t._delegate?t._delegate:t}class W{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */class K{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new I;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),i=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(i)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:G})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=G){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=G){return this.instances.has(t)}getOptions(t=G){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(i)}return i}onInit(t,e){var n;const i=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&t(r,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=t,i===G?void 0:i),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var i;return n||null}normalizeInstanceIdentifier(t=G){return this.component?this.component.multipleInstances?t:G:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Q{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new K(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
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
 */const Y=[];var X,J;(J=X||(X={}))[J.DEBUG=0]="DEBUG",J[J.VERBOSE=1]="VERBOSE",J[J.INFO=2]="INFO",J[J.WARN=3]="WARN",J[J.ERROR=4]="ERROR",J[J.SILENT=5]="SILENT";const Z={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},tt=X.INFO,et={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},nt=(t,e,...n)=>{if(e<t.logLevel)return;const i=(new Date).toISOString(),s=et[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${i}]  ${t.name}:`,...n)};class it{constructor(t){this.name=t,this._logLevel=tt,this._logHandler=nt,this._userLogHandler=null,Y.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in X))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?Z[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...t),this._logHandler(this,X.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...t),this._logHandler(this,X.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,X.INFO,...t),this._logHandler(this,X.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,X.WARN,...t),this._logHandler(this,X.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...t),this._logHandler(this,X.ERROR,...t)}}const st=(t,e)=>e.some((e=>t instanceof e));let rt,ot;const at=new WeakMap,lt=new WeakMap,ct=new WeakMap,ut=new WeakMap,ht=new WeakMap;let dt={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return lt.get(t);if("objectStoreNames"===e)return t.objectStoreNames||ct.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mt(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function pt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ot||(ot=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(gt(this),e),mt(at.get(this))}:function(...e){return mt(t.apply(gt(this),e))}:function(e,...n){const i=t.call(gt(this),e,...n);return ct.set(i,e.sort?e.sort():[e]),mt(i)}}function ft(t){return"function"==typeof t?pt(t):(t instanceof IDBTransaction&&function(t){if(lt.has(t))return;const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",r),t.removeEventListener("abort",r)},s=()=>{e(),i()},r=()=>{n(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",r),t.addEventListener("abort",r)}));lt.set(t,e)}(t),st(t,rt||(rt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(t,dt):t)}function mt(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",r)},s=()=>{e(mt(t.result)),i()},r=()=>{n(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",r)}));return e.then((e=>{e instanceof IDBCursor&&at.set(e,t)})).catch((()=>{})),ht.set(e,t),e}(t);if(ut.has(t))return ut.get(t);const e=ft(t);return e!==t&&(ut.set(t,e),ht.set(e,t)),e}const gt=t=>ht.get(t);function yt(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=mt(o);return i&&o.addEventListener("upgradeneeded",(t=>{i(mt(o.result),t.oldVersion,t.newVersion,mt(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{r&&t.addEventListener("close",(()=>r())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const vt=["get","getKey","getAll","getAllKeys","count"],_t=["put","add","delete","clear"],wt=new Map;function bt(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(wt.get(e))return wt.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=_t.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!vt.includes(n))return;const r=async function(t,...e){const r=this.transaction(t,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&r.done]))[0]};return wt.set(e,r),r}dt=(t=>({...t,get:(e,n,i)=>bt(e,n)||t.get(e,n,i),has:(e,n)=>!!bt(e,n)||t.has(e,n)}))(dt);
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
class Tt{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const Et="@firebase/app",kt="0.9.3",At=new it("@firebase/app"),It="[DEFAULT]",xt={[Et]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ct=new Map,St=new Map;function qt(t,e){try{t.container.addComponent(e)}catch(n){At.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nt(t){const e=t.name;if(St.has(e))return At.debug(`There were multiple attempts to register component ${e}.`),!1;St.set(e,t);for(const e of Ct.values())qt(e,t);return!0}function Dt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
const Rt=new R("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class Lt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new W("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Rt.create("app-deleted",{appName:this._name})}}
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
 */const Mt="9.17.1";function Ot(t,e={}){let n=t;if("object"!=typeof e){e={name:e}}const i=Object.assign({name:It,automaticDataCollectionEnabled:!1},e),s=i.name;if("string"!=typeof s||!s)throw Rt.create("bad-app-name",{appName:String(s)});if(n||(n=k()),!n)throw Rt.create("no-options");const r=Ct.get(s);if(r){if(O(n,r.options)&&O(i,r.config))return r;throw Rt.create("duplicate-app",{appName:s})}const o=new Q(s);for(const t of St.values())o.addComponent(t);const a=new Lt(n,i,o);return Ct.set(s,a),a}function Pt(t=It){const e=Ct.get(t);if(!e&&t===It)return Ot();if(!e)throw Rt.create("no-app",{appName:t});return e}function Ut(t,e,n){var i;let s=null!==(i=xt[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${s}" with version "${e}":`];return r&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void At.warn(t.join(" "))}Nt(new W(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
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
const Ft="firebase-heartbeat-database",Vt=1,Bt="firebase-heartbeat-store";let jt=null;function zt(){return jt||(jt=yt(Ft,Vt,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(Bt)}}).catch((t=>{throw Rt.create("idb-open",{originalErrorMessage:t.message})}))),jt}async function Ht(t,e){try{const n=(await zt()).transaction(Bt,"readwrite"),i=n.objectStore(Bt);return await i.put(e,$t(t)),n.done}catch(t){if(t instanceof D)At.warn(t.message);else{const e=Rt.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});At.warn(e.message)}}}function $t(t){return`${t.name}!${t.options.appId}`}
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
 */const Wt=1024;class Gt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Qt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=Kt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Kt(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=Wt){const n=[];let i=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),Yt(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Yt(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=v(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Kt(){return(new Date).toISOString().substring(0,10)}class Qt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!N()&&new Promise(((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){try{return(await zt()).transaction(Bt).objectStore(Bt).get($t(t))}catch(t){if(t instanceof D)At.warn(t.message);else{const e=Rt.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});At.warn(e.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ht(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ht(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Yt(t){return v(JSON.stringify({version:2,heartbeats:t})).length}
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
 */var Xt;Xt="",Nt(new W("platform-logger",(t=>new Tt(t)),"PRIVATE")),Nt(new W("heartbeat",(t=>new Gt(t)),"PRIVATE")),Ut(Et,kt,Xt),Ut(Et,kt,"esm2017"),Ut("fire-js","");
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
Ut("firebase","9.17.1","app");function Jt(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]])}return n}Object.create;Object.create;function Zt(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const te=Zt,ee=new R("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),ne=new it("@firebase/auth");function ie(t,...e){ne.logLevel<=X.ERROR&&ne.error(`Auth (${Mt}): ${t}`,...e)}
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
 */function se(t,...e){throw ae(t,...e)}function re(t,...e){return ae(t,...e)}function oe(t,e,n){const i=Object.assign(Object.assign({},te()),{[e]:n});return new R("auth","Firebase",i).create(e,{appName:t.name})}function ae(t,...e){if("string"!=typeof t){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return ee.create(t,...e)}function le(t,e,...n){if(!t)throw ae(e,...n)}function ce(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ie(e),new Error(e)}function ue(t,e){t||ce(e)}
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
function pe(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function fe(){return"http:"===me()||"https:"===me()}function me(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
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
 */function ge(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(fe()||S()||"connection"in navigator))||navigator.onLine}
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
class ye{constructor(t,e){this.shortDelay=t,this.longDelay=e,ue(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(C())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return ge()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */class _e{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ce("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ce("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ce("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */function Te(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ee(t,e,n,i,s={}){return ke(t,s,(async()=>{let s={},r={};i&&("GET"===e?r=i:s={body:JSON.stringify(i)});const o=U(Object.assign({key:t.config.apiKey},r)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),_e.fetch()(Ie(t,t.config.apiHost,n,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))}))}async function ke(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},we),e);try{const e=new xe(t),s=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const r=await s.json();if("needConfirmation"in r)throw Ce(t,"account-exists-with-different-credential",r);if(s.ok&&!("errorMessage"in r))return r;{const e=s.ok?r.errorMessage:r.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Ce(t,"credential-already-in-use",r);if("EMAIL_EXISTS"===n)throw Ce(t,"email-already-in-use",r);if("USER_DISABLED"===n)throw Ce(t,"user-disabled",r);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw oe(t,a,o);se(t,a)}}catch(e){if(e instanceof D)throw e;se(t,"network-request-failed")}}async function Ae(t,e,n,i,s={}){const r=await Ee(t,e,n,i,s);return"mfaPendingCredential"in r&&se(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Ie(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?ve(t.config,s):`${t.config.apiScheme}://${s}`}class xe{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(re(this.auth,"network-request-failed"))),be.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ce(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=re(t,e,i);return s.customData._tokenResponse=n,s}
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
function Se(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
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
 */function qe(t){return 1e3*Number(t)}function Ne(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return ie("JWT malformed, contained fewer than 3 sections"),null;try{const t=_(n);return t?JSON.parse(t):(ie("Failed to decode base64 JWT payload"),null)}catch(t){return ie("Caught error parsing JWT payload as JSON",null==t?void 0:t.toString()),null}}
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
async function De(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof D&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class Re{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null==t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
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
 */class Le{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=Se(this.lastLoginAt),this.creationTime=Se(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Me(t){var e;const n=t.auth,i=await t.getIdToken(),s=await De(t,async function(t,e){return Ee(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:i}));le(null==s?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=(null===(e=r.providerUserInfo)||void 0===e?void 0:e.length)?r.providerUserInfo.map((t=>{var{providerId:e}=t,n=Jt(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=t.providerData,c=o,[...l.filter((t=>!c.some((e=>e.providerId===t.providerId)))),...c]);var l,c;const u=t.isAnonymous,h=!(t.email&&r.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,p={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Le(r.createdAt,r.lastLoginAt),isAnonymous:d};Object.assign(t,p)}
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
class Oe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){le(t.idToken,"internal-error"),le(void 0!==t.idToken,"internal-error"),le(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=Ne(t);return le(e,"internal-error"),le(void 0!==e.exp,"internal-error"),le(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return le(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:s}=await
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
async function(t,e){const n=await ke(t,{},(async()=>{const n=U({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,r=Ie(t,i,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",_e.fetch()(r,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:i,expirationTime:s}=e,r=new Oe;return n&&(le("string"==typeof n,"internal-error",{appName:t}),r.refreshToken=n),i&&(le("string"==typeof i,"internal-error",{appName:t}),r.accessToken=i),s&&(le("number"==typeof s,"internal-error",{appName:t}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Oe,this.toJSON())}_performRefresh(){return ce("not implemented")}}
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
 */function Pe(t,e){le("string"==typeof t||void 0===t,"internal-error",{appName:e})}class Ue{constructor(t){var{uid:e,auth:n,stsTokenManager:i}=t,s=Jt(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Re(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Le(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await De(this,this.stsTokenManager.getToken(this.auth,t));return le(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=H(t),i=await n.getIdToken(e),s=Ne(i);le(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r="object"==typeof s.firebase?s.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Se(qe(s.auth_time)),issuedAtTime:Se(qe(s.iat)),expirationTime:Se(qe(s.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=H(t);await Me(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(le(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new Ue(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await Me(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await De(this,async function(t,e){return Ee(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,i,s,r,o,a,l,c;const u=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(i=e.email)&&void 0!==i?i:void 0,d=null!==(s=e.phoneNumber)&&void 0!==s?s:void 0,p=null!==(r=e.photoURL)&&void 0!==r?r:void 0,f=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=e.createdAt)&&void 0!==l?l:void 0,y=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:_,isAnonymous:w,providerData:b,stsTokenManager:T}=e;le(v&&T,t,"internal-error");const E=Oe.fromJSON(this.name,T);le("string"==typeof v,t,"internal-error"),Pe(u,t.name),Pe(h,t.name),le("boolean"==typeof _,t,"internal-error"),le("boolean"==typeof w,t,"internal-error"),Pe(d,t.name),Pe(p,t.name),Pe(f,t.name),Pe(m,t.name),Pe(g,t.name),Pe(y,t.name);const k=new Ue({uid:v,auth:t,email:h,emailVerified:_,displayName:u,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:E,createdAt:g,lastLoginAt:y});return b&&Array.isArray(b)&&(k.providerData=b.map((t=>Object.assign({},t)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(t,e,n=!1){const i=new Oe;i.updateFromServerResponse(e);const s=new Ue({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:n});return await Me(s),s}}
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
 */function Be(t,e,n){return`firebase:${t}:${e}:${n}`}class je{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=Be(this.userKey,i.apiKey,s),this.fullPersistenceKey=Be("persistence",i.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Ue._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new je(de(Ve),t,n);const i=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let s=i[0]||de(Ve);const r=Be(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(r);if(e){const i=Ue._fromJSON(t,e);n!==s&&(o=i),s=n;break}}catch(t){}const a=i.filter((t=>t._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==s)try{await t._remove(r)}catch(t){}}))),new je(s,t,n)):new je(s,t,n)}}
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
 */function ze(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ge(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(He(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qe(e))return"Blackberry";if(Ye(e))return"Webos";if($e(e))return"Safari";if((e.includes("chrome/")||We(e))&&!e.includes("edge/"))return"Chrome";if(Ke(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function He(t=C()){return/firefox\//i.test(t)}function $e(t=C()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function We(t=C()){return/crios\//i.test(t)}function Ge(t=C()){return/iemobile/i.test(t)}function Ke(t=C()){return/android/i.test(t)}function Qe(t=C()){return/blackberry/i.test(t)}function Ye(t=C()){return/webos/i.test(t)}function Xe(t=C()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Je(){return q()&&10===document.documentMode}function Ze(t=C()){return Xe(t)||Ke(t)||Ye(t)||Qe(t)||/windows phone/i.test(t)||Ge(t)}
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
function tn(t,e=[]){let n;switch(t){case"Browser":n=ze(C());break;case"Worker":n=`${ze(C())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mt}/${i}`}
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
 */class nn{constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new rn(this),this.idTokenSubscription=new rn(this),this.beforeStateQueue=new en(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ee,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=de(e)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await je.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,r=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==r||!(null==o?void 0:o.user)||(i=o.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(t){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Me(t)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?H(t):null;return e&&le(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&le(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(de(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new R("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&de(t)||this._popupRedirectResolver;le(e,this,"argument-error"),this.redirectPersistenceManager=await je.create(this,[de(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,i){if(this._deleted)return()=>{};const s="function"==typeof e?e:e.next.bind(e),r=this._isInitialized?Promise.resolve():this._initializationPromise;return le(r,this,"internal-error"),r.then((()=>s(this.currentUser))),"function"==typeof e?t.addObserver(e,n,i):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=tn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}}function sn(t){return H(t)}class rn{constructor(t){this.auth=t,this.observer=null,this.addObserver=B((t=>this.observer=t))}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function on(t,e,n){const i=sn(t);le(i._canInitEmulator,i,"emulator-config-failed"),le(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(null==n?void 0:n.disableWarnings),r=an(e),{host:o,port:a}=function(t){const e=an(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const t=s[1];return{host:t,port:ln(i.substr(t.length+1))}}{const[t,e]=i.split(":");return{host:t,port:ln(e)}}}(e),l=null===a?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||function(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
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
 */()}function an(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ln(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}class cn{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return ce("not implemented")}_getIdTokenResponse(t){return ce("not implemented")}_linkToIdToken(t,e){return ce("not implemented")}_getReauthenticationResolver(t){return ce("not implemented")}}
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
class dn extends cn{constructor(t,e,n,i=null){super("password",n),this._email=t,this._password=e,this._tenantId=i}static _fromEmailAndPassword(t,e){return new dn(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new dn(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
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
return async function(t,e){return Ae(t,"POST","/v1/accounts:signInWithPassword",Te(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(t,e){return Ae(t,"POST","/v1/accounts:signInWithEmailLink",Te(t,e))}(t,{email:this._email,oobCode:this._password});default:se(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return un(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return Ae(t,"POST","/v1/accounts:signInWithEmailLink",Te(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:se(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
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
 */async function pn(t,e){return Ae(t,"POST","/v1/accounts:signInWithIdp",Te(t,e))}
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
 */class fn extends cn{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new fn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):se("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:i}=e,s=Jt(e,["providerId","signInMethod"]);if(!n||!i)return null;const r=new fn(n,i);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}_getIdTokenResponse(t){return pn(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,pn(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,pn(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=U(e)}return t}}
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
class gn extends cn{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new gn({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new gn({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return Ae(t,"POST","/v1/accounts:signInWithPhoneNumber",Te(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await Ae(t,"POST","/v1/accounts:signInWithPhoneNumber",Te(t,e));if(n.temporaryProof)throw Ce(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return Ae(t,"POST","/v1/accounts:signInWithPhoneNumber",Te(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),mn)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:i}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:i}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:s}=t;return n||e||i||s?new gn({verificationId:e,verificationCode:n,phoneNumber:i,temporaryProof:s}):null}}
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
 */class yn{constructor(t){var e,n,i,s,r,o;const a=F(V(t)),l=null!==(e=a.apiKey)&&void 0!==e?e:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);le(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(s=a.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(r=a.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(t){const e=function(t){const e=F(V(t)).link,n=e?F(V(e)).deep_link_id:null,i=F(V(t)).deep_link_id;return(i?F(V(i)).link:null)||i||n||e||t}(t);try{return new yn(e)}catch(t){return null}}}
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
class vn{constructor(){this.providerId=vn.PROVIDER_ID}static credential(t,e){return dn._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=yn.parseLink(e);return le(n,"argument-error"),dn._fromEmailAndCode(t,n.code,n.tenantId)}}vn.PROVIDER_ID="password",vn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",vn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class bn extends wn{constructor(){super("facebook.com")}static credential(t){return fn._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return bn.credentialFromTaggedObject(t)}static credentialFromError(t){return bn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return bn.credential(t.oauthAccessToken)}catch(t){return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com",bn.PROVIDER_ID="facebook.com";
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
class Tn extends wn{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return fn._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Tn.credentialFromTaggedObject(t)}static credentialFromError(t){return Tn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return Tn.credential(e,n)}catch(t){return null}}}Tn.GOOGLE_SIGN_IN_METHOD="google.com",Tn.PROVIDER_ID="google.com";
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
class En extends wn{constructor(){super("github.com")}static credential(t){return fn._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return En.credentialFromTaggedObject(t)}static credentialFromError(t){return En.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return En.credential(t.oauthAccessToken)}catch(t){return null}}}En.GITHUB_SIGN_IN_METHOD="github.com",En.PROVIDER_ID="github.com";
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
class kn extends wn{constructor(){super("twitter.com")}static credential(t,e){return fn._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return kn.credentialFromTaggedObject(t)}static credentialFromError(t){return kn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return kn.credential(e,n)}catch(t){return null}}}
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
async function An(t,e){return Ae(t,"POST","/v1/accounts:signUp",Te(t,e))}
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
 */kn.TWITTER_SIGN_IN_METHOD="twitter.com",kn.PROVIDER_ID="twitter.com";class In{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,i=!1){const s=await Ue._fromIdTokenResponse(t,n,i),r=xn(n);return new In({user:s,providerId:r,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const i=xn(n);return new In({user:t,providerId:i,_tokenResponse:n,operationType:e})}}function xn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
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
class Cn extends D{constructor(t,e,n,i){var s;super(e.code,e.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Cn.prototype),this.customData={appName:t.name,tenantId:null!==(s=t.tenantId)&&void 0!==s?s:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,i){return new Cn(t,e,n,i)}}function Sn(t,e,n,i){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Cn._fromErrorAndOperation(t,n,e,i);throw n}))}
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
 */async function qn(t,e,n=!1){const i=await De(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return In._forOperation(t,"link",i)}
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
async function Nn(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await De(t,Sn(i,s,e,t),n);le(r.idToken,i,"internal-error");const o=Ne(r.idToken);le(o,i,"internal-error");const{sub:a}=o;return le(t.uid===a,i,"user-mismatch"),In._forOperation(t,s,r)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&se(i,"user-mismatch"),t}}
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
 */async function Dn(t,e,n=!1){const i="signIn",s=await Sn(t,i,e),r=await In._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function Rn(t,e){return Dn(sn(t),e)}
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
function Ln(t,e,n){var i;le((null===(i=n.url)||void 0===i?void 0:i.length)>0,t,"invalid-continue-uri"),le(void 0===n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(le(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(le(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}
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
 */async function Mn(t,e,n){const i=H(t),s={requestType:"PASSWORD_RESET",email:e};n&&Ln(i,s,n),await async function(t,e){return hn(t,e)}(i,s)}async function On(t,e,n){const i=sn(t),s=await An(i,{returnSecureToken:!0,email:e,password:n}),r=await In._fromIdTokenResponse(i,"signIn",s);return await i._updateCurrentUser(r.user),r}function Pn(t,e,n){return Rn(H(t),vn.credential(e,n))}
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
 */function Un(t){return H(t).signOut()}new WeakMap;const Fn="__sak";
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
 */class Bn extends Vn{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=C();return $e(t)||Xe(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=Ze(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),i=this.localCache[e];n!==i&&t(e,i,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(t.newValue!==i)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},s=this.storage.getItem(n);Je()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,10):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Bn.type="LOCAL";const jn=Bn;
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
 */class zn extends Vn{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}zn.type="SESSION";const Hn=zn;
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
class $n{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new $n(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:i,data:s}=e.data,r=this.handlersMap[i];if(!(null==r?void 0:r.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(r).map((async t=>t(e.origin,s))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Wn(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
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
 */$n.receivers=[];class Gn{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const l=Wn("",20);i.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);r={messageChannel:i,onMessage(t){const e=t;if(e.data.eventId===l)switch(e.data.status){case"ack":clearTimeout(c),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(e.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[i.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
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
 */function Kn(){return window}
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
function Qn(){return void 0!==Kn().WorkerGlobalScope&&"function"==typeof Kn().importScripts}
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
const Yn="firebaseLocalStorageDb",Xn=1,Jn="firebaseLocalStorage",Zn="fbase_key";class ti{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function ei(t,e){return t.transaction([Jn],e?"readwrite":"readonly").objectStore(Jn)}function ni(){const t=indexedDB.open(Yn,Xn);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Jn,{keyPath:Zn})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Jn)?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(Yn);return new ti(t).toPromise()}(),e(await ni()))}))}))}async function ii(t,e,n){const i=ei(t,!0).put({[Zn]:e,value:n});return new ti(i).toPromise()}function si(t,e){const n=ei(t,!0).delete(e);return new ti(n).toPromise()}class ri{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ni()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$n._getInstance(Qn()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Gn(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ni();return await ii(t,Fn,"1"),await si(t,Fn),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>ii(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=ei(t,!1).get(e),i=await new ti(n).toPromise();return void 0===i?null:i.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>si(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=ei(t,!1).getAll();return new ti(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:i,value:s}of t)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),e.push(i));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ri.type="LOCAL";const oi=ri;
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
var s,r;i.setAttribute("src",t),i.onload=e,i.onerror=t=>{const e=re("internal-error");e.customData=t,n(e)},i.type="text/javascript",i.charset="UTF-8",(null!==(r=null===(s=document.getElementsByTagName("head"))||void 0===s?void 0:s[0])&&void 0!==r?r:document).appendChild(i)}))}function li(t){return`__${t}${Math.floor(1e6*Math.random())}`}
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
li("rcb"),new ye(3e4,6e4);
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
const ci="recaptcha";async function ui(t,e,n){var i;const s=await n.verify();try{let r;if(le("string"==typeof s,t,"argument-error"),le(n.type===ci,t,"argument-error"),r="string"==typeof e?{phoneNumber:e}:e,"session"in r){const e=r.session;if("phoneNumber"in r){le("enroll"===e.type,t,"internal-error");const n=await
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
function(t,e){return Ee(t,"POST","/v2/accounts/mfaEnrollment:start",Te(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:s}});return n.phoneSessionInfo.sessionInfo}{le("signin"===e.type,t,"internal-error");const n=(null===(i=r.multiFactorHint)||void 0===i?void 0:i.uid)||r.multiFactorUid;le(n,t,"missing-multi-factor-info");const o=await function(t,e){return Ee(t,"POST","/v2/accounts/mfaSignIn:start",Te(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:s}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return Ee(t,"POST","/v1/accounts:sendVerificationCode",Te(t,e))}(t,{phoneNumber:r.phoneNumber,recaptchaToken:s});return e}}finally{n._reset()}}
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
class hi{constructor(t){this.providerId=hi.PROVIDER_ID,this.auth=sn(t)}verifyPhoneNumber(t,e){return ui(this.auth,t,H(e))}static credential(t,e){return gn._fromVerification(t,e)}static credentialFromResult(t){const e=t;return hi.credentialFromTaggedObject(e)}static credentialFromError(t){return hi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?gn._fromTokenResponse(e,n):null}}
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
function di(t,e){return e?de(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
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
 */hi.PROVIDER_ID="phone",hi.PHONE_SIGN_IN_METHOD="phone";class pi extends cn{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return pn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return pn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return pn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function fi(t){return Dn(t.auth,new pi(t),t.bypassAuthState)}function mi(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),Nn(n,new pi(t),t.bypassAuthState)}async function gi(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),qn(n,new pi(t),t.bypassAuthState)}
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
 */class yi{constructor(t,e,n,i,s=!1){this.auth=t,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:i,tenantId:s,error:r,type:o}=t;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return fi;case"linkViaPopup":case"linkViaRedirect":return gi;case"reauthViaPopup":case"reauthViaRedirect":return mi;default:se(this.auth,"internal-error")}}resolve(t){ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){ue(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const vi=new ye(2e3,1e4);class _i extends yi{constructor(t,e,n,i,s){super(t,e,i,s),this.provider=n,this.authWindow=null,this.pollId=null,_i.currentPopupAction&&_i.currentPopupAction.cancel(),_i.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return le(t,this.auth,"internal-error"),t}async onExecution(){ue(1===this.filter.length,"Popup operations only handle one event");const t=Wn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(re(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(re(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_i.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(re(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,vi.get())};t()}}_i.currentPopupAction=null;
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
const wi="pendingRedirect",bi=new Map;class Ti extends yi{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=bi.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=Ai(e),i=ki(t);if(!await i._isAvailable())return!1;const s="true"===await i._get(n);return await i._remove(n),s}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}bi.set(this.auth._key(),t)}return this.bypassAuthState||bi.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Ei(t,e){bi.set(t._key(),e)}function ki(t){return de(t._redirectPersistence)}function Ai(t){return Be(wi,t.config.apiKey,t.name)}
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
 */async function Ii(t,e,n=!1){const i=sn(t),s=di(i,e),r=new Ti(i,s,n),o=await r.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}class xi{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Si(t);default:return!1}}
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
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Si(t)){const i=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(re(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ci(t))}saveEventToCache(t){this.cachedEventUids.add(Ci(t)),this.lastProcessedEventTime=Date.now()}}function Ci(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Si({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
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
const qi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ni=/^https?/;async function Di(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return Ee(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Ri(t))return}catch(t){}se(t,"unauthorized-domain")}function Ri(t){const e=pe(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return""===s.hostname&&""===i?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&s.hostname===i}if(!Ni.test(n))return!1;if(qi.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}
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
 */const Li=new ye(3e4,6e4);function Mi(){const t=Kn().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let Oi=null;function Pi(t){return Oi=Oi||function(t){return new Promise(((e,n)=>{var i,s,r;function o(){Mi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mi(),n(re(t,"network-request-failed"))},timeout:Li.get()})}if(null===(s=null===(i=Kn().gapi)||void 0===i?void 0:i.iframes)||void 0===s?void 0:s.Iframe)e(gapi.iframes.getContext());else{if(!(null===(r=Kn().gapi)||void 0===r?void 0:r.load)){const e=li("iframefcb");return Kn()[e]=()=>{gapi.load?o():n(re(t,"network-request-failed"))},ai(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Oi=null,t}))}(t),Oi}
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
 */const Ui=new ye(5e3,15e3),Fi="__/auth/iframe",Vi="emulator/auth/iframe",Bi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ji=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zi(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ve(e,Vi):`https://${t.config.authDomain}/${Fi}`,i={apiKey:e.apiKey,appName:t.name,v:Mt},s=ji.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${U(i).slice(1)}`}
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
const Hi={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$i=500,Wi=600,Gi="_blank",Ki="http://localhost";class Qi{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function Yi(t,e,n,i=$i,s=Wi){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Hi),{width:i.toString(),height:s.toString(),top:r,left:o}),c=C().toLowerCase();n&&(a=We(c)?Gi:n),He(c)&&(e=e||Ki,l.scrollbars="yes");const u=Object.entries(l).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=C()){var e;return Xe(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(c)&&"_self"!==a)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
 */(e||"",a),new Qi(null);const h=window.open(e||"",a,u);le(h,t,"popup-blocked");try{h.focus()}catch(t){}return new Qi(h)}const Xi="__/auth/handler",Ji="emulator/auth/handler";function Zi(t,e,n,i,s,r){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Mt,eventId:s};if(e instanceof _n){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",M(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(r||{}))o[t]=e}if(e instanceof wn){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];return`${function({config:t}){return t.emulator?ve(t,Ji):`https://${t.authDomain}/${Xi}`}
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
 */(t)}?${U(a).slice(1)}`}const ts="webStorageSupport";const es=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hn,this._completeRedirectFn=Ii,this._overrideRedirectResult=Ei}async _openPopup(t,e,n,i){var s;ue(null===(s=this.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()");return Yi(t,Zi(t,e,n,pe(),i),Wn())}async _openRedirect(t,e,n,i){var s;return await this._originValidation(t),s=Zi(t,e,n,pe(),i),Kn().location.href=s,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(ue(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await async function(t){const e=await Pi(t),n=Kn().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:zi(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bi,dontclear:!0},(e=>new Promise((async(n,i)=>{await e.restyle({setHideOnLeave:!1});const s=re(t,"network-request-failed"),r=Kn().setTimeout((()=>{i(s)}),Ui.get());function o(){Kn().clearTimeout(r),n(e)}e.ping(o).then(o,(()=>{i(s)}))}))))}(t),n=new xi(t);return e.register("authEvent",(e=>{le(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(ts,{type:ts},(n=>{var i;const s=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i[ts];void 0!==s&&e(!!s),se(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Di(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Ze()||$e()||Xe()}};var ns="@firebase/auth",is="0.21.3";
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
class ss{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null==e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const rs=A("authIdTokenMaxAge")||300;let os=null;const as=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>rs)return;const s=null==n?void 0:n.token;os!==s&&(os=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function ls(t=Pt()){const e=Dt(t,"auth");if(e.isInitialized())return e.getImmediate();const n=function(t,e){const n=Dt(t,"auth");if(n.isInitialized()){const t=n.getImmediate();if(O(n.getOptions(),null!=e?e:{}))return t;se(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:es,persistence:[oi,jn,Hn]}),i=A("authTokenSyncURL");if(i){const t=as(i);!function(t,e,n){H(t).beforeAuthStateChanged(e,n)}(n,t,(()=>t(n.currentUser))),function(t,e,n,i){H(t).onIdTokenChanged(e,n,i)}(n,(e=>t(e)))}const s=T("auth");return s&&on(n,`http://${s}`),n}var cs;cs="Browser",Nt(new W("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:r}=n.options;return((t,n)=>{le(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),le(!(null==r?void 0:r.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:r,clientPlatform:cs,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:tn(cs)},o=new nn(t,n,i);return function(t,e){const n=(null==e?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(de);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,null==e?void 0:e.popupRedirectResolver)}(o,e),o})(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),Nt(new W("auth-internal",(t=>(t=>new ss(t))(sn(t.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Ut(ns,is,function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(cs)),Ut(ns,is,"esm2017");var us,hs="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==i?i:"undefined"!=typeof self?self:{},ds={},ps=ps||{},fs=hs||self;function ms(){}function gs(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function ys(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var vs="closure_uid_"+(1e9*Math.random()>>>0),_s=0;function ws(t,e,n){return t.call.apply(t.bind,arguments)}function bs(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Ts(t,e,n){return(Ts=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ws:bs).apply(null,arguments)}function Es(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function ks(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)}}function As(){this.s=this.s,this.o=this.o}As.prototype.s=!1,As.prototype.na=function(){var t;!this.s&&(this.s=!0,this.M(),0)&&(t=this,Object.prototype.hasOwnProperty.call(t,vs)&&t[vs]||(t[vs]=++_s))},As.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Is=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function xs(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Cs(t,e){for(let e=1;e<arguments.length;e++){const n=arguments[e];if(gs(n)){const e=t.length||0,i=n.length||0;t.length=e+i;for(let s=0;s<i;s++)t[e+s]=n[s]}else t.push(n)}}function Ss(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ss.prototype.h=function(){this.defaultPrevented=!0};var qs=function(){if(!fs.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{fs.addEventListener("test",ms,e),fs.removeEventListener("test",ms,e)}catch(t){}return t}();function Ns(t){return/^[\s\xa0]*$/.test(t)}var Ds=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Rs(t,e){return t<e?-1:t>e?1:0}function Ls(){var t=fs.navigator;return t&&(t=t.userAgent)?t:""}function Ms(t){return-1!=Ls().indexOf(t)}function Os(t){return Os[" "](t),t}Os[" "]=ms;var Ps,Us,Fs=Ms("Opera"),Vs=Ms("Trident")||Ms("MSIE"),Bs=Ms("Edge"),js=Bs||Vs,zs=Ms("Gecko")&&!(-1!=Ls().toLowerCase().indexOf("webkit")&&!Ms("Edge"))&&!(Ms("Trident")||Ms("MSIE"))&&!Ms("Edge"),Hs=-1!=Ls().toLowerCase().indexOf("webkit")&&!Ms("Edge");function $s(){var t=fs.document;return t?t.documentMode:void 0}t:{var Ws="",Gs=(Us=Ls(),zs?/rv:([^\);]+)(\)|;)/.exec(Us):Bs?/Edge\/([\d\.]+)/.exec(Us):Vs?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Us):Hs?/WebKit\/(\S+)/.exec(Us):Fs?/(?:Version)[ \/]?(\S+)/.exec(Us):void 0);if(Gs&&(Ws=Gs?Gs[1]:""),Vs){var Ks=$s();if(null!=Ks&&Ks>parseFloat(Ws)){Ps=String(Ks);break t}}Ps=Ws}var Qs,Ys={};function Xs(){return function(t){var e=Ys;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=Ds(String(Ps)).split("."),n=Ds("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;t=Rs(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||Rs(0==s[2].length,0==r[2].length)||Rs(s[2],r[2]),s=s[3],r=r[3]}while(0==t)}return 0<=t}))}if(fs.document&&Vs){var Js=$s();Qs=Js||(parseInt(Ps,10)||void 0)}else Qs=void 0;var Zs=Qs;function tr(t,e){if(Ss.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(zs){t:{try{Os(e.nodeName);var s=!0;break t}catch(t){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:er[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&tr.X.h.call(this)}}ks(tr,Ss);var er={2:"touch",3:"pen",4:"mouse"};tr.prototype.h=function(){tr.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var nr="closure_listenable_"+(1e6*Math.random()|0),ir=0;function sr(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ha=s,this.key=++ir,this.ba=this.ea=!1}function rr(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function or(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function ar(t){const e={};for(const n in t)e[n]=t[n];return e}const lr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function cr(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<lr.length;e++)n=lr[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function ur(t){this.src=t,this.g={},this.h=0}function hr(t,e){var n=e.type;if(n in t.g){var i,s=t.g[n],r=Is(s,e);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(rr(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function dr(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==i)return s}return-1}ur.prototype.add=function(t,e,n,i,s){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=dr(t,e,i,s);return-1<o?(e=t[o],n||(e.ea=!1)):((e=new sr(e,this.src,r,!!i,s)).ea=n,t.push(e)),e};var pr="closure_lm_"+(1e6*Math.random()|0),fr={};function mr(t,e,n,i,s){if(i&&i.once)return yr(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)mr(t,e[r],n,i,s);return null}return n=kr(n),t&&t[nr]?t.N(e,n,ys(i)?!!i.capture:!!i,s):gr(t,e,n,!1,i,s)}function gr(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=ys(s)?!!s.capture:!!s,a=Tr(t);if(a||(t[pr]=a=new ur(t)),(n=a.add(e,n,i,o,r)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}const e=br;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)qs||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(wr(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function yr(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)yr(t,e[r],n,i,s);return null}return n=kr(n),t&&t[nr]?t.O(e,n,ys(i)?!!i.capture:!!i,s):gr(t,e,n,!0,i,s)}function vr(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)vr(t,e[r],n,i,s);else i=ys(i)?!!i.capture:!!i,n=kr(n),t&&t[nr]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=dr(r=t.g[e],n,i,s))&&(rr(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Tr(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dr(e,n,i,s)),(n=-1<t?e[t]:null)&&_r(n))}function _r(t){if("number"!=typeof t&&t&&!t.ba){var e=t.src;if(e&&e[nr])hr(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(wr(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Tr(e))?(hr(n,t),0==n.h&&(n.src=null,e[pr]=null)):rr(t)}}}function wr(t){return t in fr?fr[t]:fr[t]="on"+t}function br(t,e){if(t.ba)t=!0;else{e=new tr(e,this);var n=t.listener,i=t.ha||t.src;t.ea&&_r(t),t=n.call(i,e)}return t}function Tr(t){return(t=t[pr])instanceof ur?t:null}var Er="__closure_events_fn_"+(1e9*Math.random()>>>0);function kr(t){return"function"==typeof t?t:(t[Er]||(t[Er]=function(e){return t.handleEvent(e)}),t[Er])}function Ar(){As.call(this),this.i=new ur(this),this.P=this,this.I=null}function Ir(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new Ss(e,t);else if(e instanceof Ss)e.target=e.target||t;else{var s=e;cr(e=new Ss(i,t),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=xr(o,i,!0,e)&&s}if(s=xr(o=e.g=t,i,!0,e)&&s,s=xr(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)s=xr(o=e.g=n[r],i,!1,e)&&s}function xr(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&hr(t.i,o),s=!1!==a.call(l,i)&&s}}return s&&!i.defaultPrevented}ks(Ar,As),Ar.prototype[nr]=!0,Ar.prototype.removeEventListener=function(t,e,n,i){vr(this,t,e,n,i)},Ar.prototype.M=function(){if(Ar.X.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)rr(n[i]);delete e.g[t],e.h--}}this.I=null},Ar.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Ar.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var Cr=fs.JSON.stringify;function Sr(){var t=Or;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var qr,Nr=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Dr),(t=>t.reset()));class Dr{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Rr(t){fs.setTimeout((()=>{throw t}),0)}function Lr(t,e){qr||function(){var t=fs.Promise.resolve(void 0);qr=function(){t.then(Pr)}}(),Mr||(qr(),Mr=!0),Or.add(t,e)}var Mr=!1,Or=new class{constructor(){this.h=this.g=null}add(t,e){const n=Nr.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}};function Pr(){for(var t;t=Sr();){try{t.h.call(t.g)}catch(t){Rr(t)}var e=Nr;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Mr=!1}function Ur(t,e){Ar.call(this),this.h=t||1,this.g=e||fs,this.j=Ts(this.lb,this),this.l=Date.now()}function Fr(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}function Vr(t,e,n){if("function"==typeof t)n&&(t=Ts(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Ts(t.handleEvent,t)}return 2147483647<Number(e)?-1:fs.setTimeout(t,e||0)}function Br(t){t.g=Vr((()=>{t.g=null,t.i&&(t.i=!1,Br(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}ks(Ur,Ar),(us=Ur.prototype).ca=!1,us.R=null,us.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ir(this,"tick"),this.ca&&(Fr(this),this.start()))}},us.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},us.M=function(){Ur.X.M.call(this),Fr(this),delete this.g};class jr extends As{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Br(this)}M(){super.M(),this.g&&(fs.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zr(t){As.call(this),this.h=t,this.g={}}ks(zr,As);var Hr=[];function $r(t,e,n,i){Array.isArray(n)||(n&&(Hr[0]=n.toString()),n=Hr);for(var s=0;s<n.length;s++){var r=mr(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Wr(t){or(t.g,(function(t,e){this.g.hasOwnProperty(e)&&_r(t)}),t),t.g={}}function Gr(){this.g=!0}function Kr(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return Cr(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}zr.prototype.M=function(){zr.X.M.call(this),Wr(this)},zr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Gr.prototype.Aa=function(){this.g=!1},Gr.prototype.info=function(){};var Qr={},Yr=null;function Xr(){return Yr=Yr||new Ar}function Jr(t){Ss.call(this,Qr.Pa,t)}function Zr(t){const e=Xr();Ir(e,new Jr(e))}function to(t,e){Ss.call(this,Qr.STAT_EVENT,t),this.stat=e}function eo(t){const e=Xr();Ir(e,new to(e,t))}function no(t,e){Ss.call(this,Qr.Qa,t),this.size=e}function io(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return fs.setTimeout((function(){t()}),e)}Qr.Pa="serverreachability",ks(Jr,Ss),Qr.STAT_EVENT="statevent",ks(to,Ss),Qr.Qa="timingevent",ks(no,Ss);var so={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ro={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function oo(){}function ao(t){return t.h||(t.h=t.i())}function lo(){}oo.prototype.h=null;var co,uo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function ho(){Ss.call(this,"d")}function po(){Ss.call(this,"c")}function fo(){}function mo(t,e,n,i){this.l=t,this.j=e,this.m=n,this.U=i||1,this.S=new zr(this),this.O=yo,t=js?125:void 0,this.T=new Ur(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new go}function go(){this.i=null,this.g="",this.h=!1}ks(ho,Ss),ks(po,Ss),ks(fo,oo),fo.prototype.g=function(){return new XMLHttpRequest},fo.prototype.i=function(){return{}},co=new fo;var yo=45e3,vo={},_o={};function wo(t,e,n){t.K=1,t.v=Fo(Lo(e)),t.s=n,t.P=!0,bo(t,null)}function bo(t,e){t.F=Date.now(),Ao(t),t.A=Lo(t.v);var n=t.A,i=t.U;Array.isArray(i)||(i=[String(i)]),Jo(n.i,"t",i),t.C=0,n=t.l.H,t.h=new go,t.g=Xa(t.l,n?e:null,!t.s),0<t.N&&(t.L=new jr(Ts(t.La,t,t.g),t.N)),$r(t.S,t.g,"readystatechange",t.ib),e=t.H?ar(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Zr(),function(t,e,n,i,s,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.U,t.s)}function To(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Da)}function Eo(t,e,n){let i,s=!0;for(;!t.I&&t.C<n.length;){if(i=ko(t,n),i==_o){4==e&&(t.o=4,eo(14),s=!1),Kr(t.j,t.m,null,"[Incomplete Response]");break}if(i==vo){t.o=4,eo(15),Kr(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}Kr(t.j,t.m,i,null),qo(t,i)}To(t)&&i!=_o&&i!=vo&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,eo(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,(e=t.l).g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),za(e),e.K=!0,eo(11))):(Kr(t.j,t.m,n,"[Invalid Chunked Response]"),So(t),Co(t))}function ko(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?_o:(n=Number(e.substring(n,i)),isNaN(n)?vo:(i+=1)+n>e.length?_o:(e=e.substr(i,n),t.C=i+n,e))}function Ao(t){t.V=Date.now()+t.O,Io(t,t.O)}function Io(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=io(Ts(t.gb,t),e)}function xo(t){t.B&&(fs.clearTimeout(t.B),t.B=null)}function Co(t){0==t.l.G||t.I||Wa(t.l,t)}function So(t){xo(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Fr(t.T),Wr(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function qo(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||sa(n.h,t)))if(!t.J&&sa(n.h,t)&&3==n.G){try{var i=n.Fa.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;$a(n),Ma(n)}ja(n),eo(18)}}else n.Ba=s[1],0<n.Ba-n.T&&37500>s[2]&&n.L&&0==n.A&&!n.v&&(n.v=io(Ts(n.cb,n),6e3));if(1>=ia(n.h)&&n.ja){try{n.ja()}catch(t){}n.ja=void 0}}else Ka(n,11)}else if((t.J||n.g==t)&&$a(n),!Ns(e))for(s=n.Fa.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.I=c[1],n.ka=c[2];const e=c[3];null!=e&&(n.ma=e,n.j.info("VER="+n.ma));const s=c[4];null!=s&&(n.Ca=s,n.j.info("SVER="+n.Ca));const u=c[5];null!=u&&"number"==typeof u&&0<u&&(i=1.5*u,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.h;r.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(r.j=r.l,r.g=new Set,r.h&&(ra(r,r.h),r.h=null))}if(i.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.za=t,Uo(i.F,i.D,t))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=t;if((i=n).sa=Ya(i,i.H?i.ka:null,i.V),o.J){oa(i.h,o);var a=o,l=i.J;l&&a.setTimeout(l),a.B&&(xo(a),Ao(a)),i.g=o}else Ba(i);0<n.i.length&&Pa(n)}else"stop"!=c[0]&&"close"!=c[0]||Ka(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?Ka(n,7):La(n):"noop"!=c[0]&&n.l&&n.l.wa(c),n.A=0)}Zr()}catch(t){}}function No(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(gs(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.oa&&"function"==typeof t.oa)return t.oa();if(!t.W||"function"!=typeof t.W){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(gs(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}(t),i=function(t){if(t.W&&"function"==typeof t.W)return t.W();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(gs(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}(us=mo.prototype).setTimeout=function(t){this.O=t},us.ib=function(t){t=t.target;const e=this.L;e&&3==Ca(t)?e.l():this.La(t)},us.La=function(t){try{if(t==this.g)t:{const u=Ca(this.g);var e=this.g.Ea();this.g.aa();if(!(3>u)&&(3!=u||js||this.g&&(this.h.h||this.g.fa()||Sa(this.g)))){this.I||4!=u||7==e||Zr(),xo(this);var n=this.g.aa();this.Y=n;e:if(To(this)){var i=Sa(this.g);t="";var s=i.length,r=4==Ca(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){So(this),Co(this);var o="";break e}this.h.i=new fs.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,function(t,e,n,i,s,r,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.U,u,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ns(a)){var c=a;break e}}c=null}if(!(n=c)){this.i=!1,this.o=3,eo(12),So(this),Co(this);break t}Kr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,qo(this,n)}this.P?(Eo(this,u,o),js&&this.i&&3==u&&($r(this.S,this.T,"tick",this.hb),this.T.start())):(Kr(this.j,this.m,o,null),qo(this,o)),4==u&&So(this),this.i&&!this.I&&(4==u?Wa(this.l,this):(this.i=!1,Ao(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,eo(12)):(this.o=0,eo(13)),So(this),Co(this)}}}catch(t){}},us.hb=function(){if(this.g){var t=Ca(this.g),e=this.g.fa();this.C<e.length&&(xo(this),Eo(this,t,e),this.i&&4!=t&&Ao(this))}},us.cancel=function(){this.I=!0,So(this)},us.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Zr(),eo(17)),So(this),this.o=2,Co(this)):Io(this,this.V-t)};var Do=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ro(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ro){this.h=void 0!==e?e:t.h,Mo(this,t.j),this.s=t.s,this.g=t.g,Oo(this,t.m),this.l=t.l,e=t.i;var n=new Ko;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Po(this,n),this.o=t.o}else t&&(n=String(t).match(Do))?(this.h=!!e,Mo(this,n[1]||"",!0),this.s=Vo(n[2]||""),this.g=Vo(n[3]||"",!0),Oo(this,n[4]),this.l=Vo(n[5]||"",!0),Po(this,n[6]||"",!0),this.o=Vo(n[7]||"")):(this.h=!!e,this.i=new Ko(null,this.h))}function Lo(t){return new Ro(t)}function Mo(t,e,n){t.j=n?Vo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Oo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Po(t,e,n){e instanceof Ko?(t.i=e,function(t,e){e&&!t.j&&(Qo(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Yo(this,e),Jo(this,n,t))}),t)),t.j=e}(t.i,t.h)):(n||(e=Bo(e,Wo)),t.i=new Ko(e,t.h))}function Uo(t,e,n){t.i.set(e,n)}function Fo(t){return Uo(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Vo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Bo(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,jo),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function jo(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Ro.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Bo(e,zo,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Bo(e,zo,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Bo(n,"/"==n.charAt(0)?$o:Ho,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Bo(n,Go)),t.join("")};var zo=/[#\/\?@]/g,Ho=/[#\?:]/g,$o=/[#\?]/g,Wo=/[#\?@]/g,Go=/#/g;function Ko(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Qo(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Yo(t,e){Qo(t),e=Zo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Xo(t,e){return Qo(t),e=Zo(t,e),t.g.has(e)}function Jo(t,e,n){Yo(t,e),0<n.length&&(t.i=null,t.g.set(Zo(t,e),xs(n)),t.h+=n.length)}function Zo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(us=Ko.prototype).add=function(t,e){Qo(this),this.i=null,t=Zo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},us.forEach=function(t,e){Qo(this),this.g.forEach((function(n,i){n.forEach((function(n){t.call(e,n,i,this)}),this)}),this)},us.oa=function(){Qo(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let t=0;t<s.length;t++)n.push(e[i])}return n},us.W=function(t){Qo(this);let e=[];if("string"==typeof t)Xo(this,t)&&(e=e.concat(this.g.get(Zo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},us.set=function(t,e){return Qo(this),this.i=null,Xo(this,t=Zo(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},us.get=function(t,e){return t&&0<(t=this.W(t)).length?String(t[0]):e},us.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var s=r;""!==o[i]&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function ta(t){this.l=t||ea,fs.PerformanceNavigationTiming?t=0<(t=fs.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(fs.g&&fs.g.Ga&&fs.g.Ga()&&fs.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ea=10;function na(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ia(t){return t.h?1:t.g?t.g.size:0}function sa(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ra(t,e){t.g?t.g.add(e):t.h=e}function oa(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function aa(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return xs(t.i)}function la(){}function ca(){this.g=new la}function ua(t,e,n){const i=n||"";try{No(t,(function(t,n){let s=t;ys(t)&&(s=Cr(t)),e.push(i+n+"="+encodeURIComponent(s))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function ha(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch(t){}}function da(t){this.l=t.ac||null,this.j=t.jb||!1}function pa(t,e){Ar.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=fa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ta.prototype.cancel=function(){if(this.i=aa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},la.prototype.stringify=function(t){return fs.JSON.stringify(t,void 0)},la.prototype.parse=function(t){return fs.JSON.parse(t,void 0)},ks(da,oo),da.prototype.g=function(){return new pa(this.l,this.j)},da.prototype.i=function(t){return function(){return t}}({}),ks(pa,Ar);var fa=0;function ma(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}function ga(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ya(t)}function ya(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(us=pa.prototype).open=function(t,e){if(this.readyState!=fa)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ya(this)},us.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||fs).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))},us.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ga(this)),this.readyState=fa},us.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ya(this)),this.g&&(this.readyState=3,ya(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(void 0!==fs.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ma(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))},us.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ga(this):ya(this),3==this.readyState&&ma(this)}},us.Va=function(t){this.g&&(this.response=this.responseText=t,ga(this))},us.Ua=function(t){this.g&&(this.response=t,ga(this))},us.ga=function(){this.g&&ga(this)},us.setRequestHeader=function(t,e){this.v.append(t,e)},us.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},us.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(pa.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var va=fs.JSON.parse;function _a(t){Ar.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=wa,this.K=this.L=!1}ks(_a,Ar);var wa="",ba=/^https?$/i,Ta=["POST","PUT"];function Ea(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ka(t),Ia(t)}function ka(t){t.D||(t.D=!0,Ir(t,"complete"),Ir(t,"error"))}function Aa(t){if(t.h&&void 0!==ps&&(!t.C[1]||4!=Ca(t)||2!=t.aa()))if(t.v&&4==Ca(t))Vr(t.Ha,0,t);else if(Ir(t,"readystatechange"),4==Ca(t)){t.h=!1;try{const a=t.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var s=String(t.H).match(Do)[1]||null;if(!s&&fs.self&&fs.self.location){var r=fs.self.location.protocol;s=r.substr(0,r.length-1)}i=!ba.test(s?s.toLowerCase():"")}n=i}if(n)Ir(t,"complete"),Ir(t,"success");else{t.m=6;try{var o=2<Ca(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.aa()+"]",ka(t)}}finally{Ia(t)}}}function Ia(t,e){if(t.g){xa(t);const n=t.g,i=t.C[0]?ms:null;t.g=null,t.C=null,e||Ir(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function xa(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(fs.clearTimeout(t.A),t.A=null)}function Ca(t){return t.g?t.g.readyState:0}function Sa(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case wa:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function qa(t){let e="";return or(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Na(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=qa(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Uo(t,e,n))}function Da(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ra(t){this.Ca=0,this.i=[],this.j=new Gr,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Da("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Da("baseRetryDelayMs",5e3,t),this.bb=Da("retryDelaySeedMs",1e4,t),this.$a=Da("forwardChannelMaxRetries",2,t),this.ta=Da("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new ta(t&&t.concurrentRequestLimit),this.Fa=new ca,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function La(t){if(Oa(t),3==t.G){var e=t.U++,n=Lo(t.F);Uo(n,"SID",t.I),Uo(n,"RID",e),Uo(n,"TYPE","terminate"),Fa(t,n),(e=new mo(t,t.j,e,void 0)).K=2,e.v=Fo(Lo(n)),n=!1,fs.navigator&&fs.navigator.sendBeacon&&(n=fs.navigator.sendBeacon(e.v.toString(),"")),!n&&fs.Image&&((new Image).src=e.v,n=!0),n||(e.g=Xa(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ao(e)}Qa(t)}function Ma(t){t.g&&(za(t),t.g.cancel(),t.g=null)}function Oa(t){Ma(t),t.u&&(fs.clearTimeout(t.u),t.u=null),$a(t),t.h.cancel(),t.m&&("number"==typeof t.m&&fs.clearTimeout(t.m),t.m=null)}function Pa(t){na(t.h)||t.m||(t.m=!0,Lr(t.Ja,t),t.C=0)}function Ua(t,e){var n;n=e?e.m:t.U++;const i=Lo(t.F);Uo(i,"SID",t.I),Uo(i,"RID",n),Uo(i,"AID",t.T),Fa(t,i),t.o&&t.s&&Na(i,t.o,t.s),n=new mo(t,t.j,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Va(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),ra(t.h,n),wo(n,i,e)}function Fa(t,e){t.ia&&or(t.ia,(function(t,n){Uo(e,n,t)})),t.l&&No({},(function(t,n){Uo(e,n,t)}))}function Va(t,e,n){n=Math.min(t.i.length,n);var i=t.l?Ts(t.l.Ra,t.l,t):null;t:{var s=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),r=!1;else try{ua(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(r){i=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,i}function Ba(t){t.g||t.u||(t.Z=1,Lr(t.Ia,t),t.A=0)}function ja(t){return!(t.g||t.u||3<=t.A)&&(t.Z++,t.u=io(Ts(t.Ia,t),Ga(t,t.A)),t.A++,!0)}function za(t){null!=t.B&&(fs.clearTimeout(t.B),t.B=null)}function Ha(t){t.g=new mo(t,t.j,"rpc",t.Z),null===t.o&&(t.g.H=t.s),t.g.N=0;var e=Lo(t.sa);Uo(e,"RID","rpc"),Uo(e,"SID",t.I),Uo(e,"CI",t.L?"0":"1"),Uo(e,"AID",t.T),Uo(e,"TYPE","xmlhttp"),Fa(t,e),t.o&&t.s&&Na(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Fo(Lo(e)),n.s=null,n.P=!0,bo(n,t)}function $a(t){null!=t.v&&(fs.clearTimeout(t.v),t.v=null)}function Wa(t,e){var n=null;if(t.g==e){$a(t),za(t),t.g=null;var i=2}else{if(!sa(t.h,e))return;n=e.D,oa(t.h,e),i=1}if(0!=t.G)if(t.pa=e.Y,e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;Ir(i=Xr(),new no(i,n)),Pa(t)}else Ba(t);else if(3==(s=e.o)||0==s&&0<t.pa||!(1==i&&function(t,e){return!(ia(t.h)>=t.h.j-(t.m?1:0)||(t.m?(t.i=e.D.concat(t.i),0):1==t.G||2==t.G||t.C>=(t.Za?0:t.$a)||(t.m=io(Ts(t.Ja,t,e),Ga(t,t.C)),t.C++,0)))}(t,e)||2==i&&ja(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:Ka(t,5);break;case 4:Ka(t,10);break;case 3:Ka(t,6);break;default:Ka(t,2)}}function Ga(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ka(t,e){if(t.j.info("Error code "+e),2==e){var n=null;t.l&&(n=null);var i=Ts(t.kb,t);n||(n=new Ro("//www.google.com/images/cleardot.gif"),fs.location&&"http"==fs.location.protocol||Mo(n,"https"),Fo(n)),function(t,e){const n=new Gr;if(fs.Image){const i=new Image;i.onload=Es(ha,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Es(ha,n,i,"TestLoadImage: error",!1,e),i.onabort=Es(ha,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Es(ha,n,i,"TestLoadImage: timeout",!1,e),fs.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else eo(2);t.G=0,t.l&&t.l.va(e),Qa(t),Oa(t)}function Qa(t){if(t.G=0,t.la=[],t.l){const e=aa(t.h);0==e.length&&0==t.i.length||(Cs(t.la,e),Cs(t.la,t.i),t.h.i.length=0,xs(t.i),t.i.length=0),t.l.ua()}}function Ya(t,e,n){var i=n instanceof Ro?Lo(n):new Ro(n,void 0);if(""!=i.g)e&&(i.g=e+"."+i.g),Oo(i,i.m);else{var s=fs.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new Ro(null,void 0);i&&Mo(r,i),e&&(r.g=e),s&&Oo(r,s),n&&(r.l=n),i=r}return n=t.D,e=t.za,n&&e&&Uo(i,n,e),Uo(i,"VER",t.ma),Fa(t,i),i}function Xa(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Da&&!t.ra?new _a(new da({jb:!0})):new _a(t.ra)).Ka(t.H),e}function Ja(){}function Za(){if(Vs&&!(10<=Number(Zs)))throw Error("Environmental error: no available transport.")}function tl(t,e){Ar.call(this),this.g=new Ra(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ns(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ns(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new il(this)}function el(t){ho.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function nl(){po.call(this),this.status=1}function il(t){this.g=t}(us=_a.prototype).Ka=function(t){this.L=t},us.da=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():co.g(),this.C=this.u?ao(this.u):ao(co),this.g.onreadystatechange=Ts(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void Ea(this,t)}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else{if("function"!=typeof i.keys||"function"!=typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const t of i.keys())n.set(t,i.get(t))}i=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),s=fs.FormData&&t instanceof fs.FormData,!(0<=Is(Ta,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[t,e]of n)this.g.setRequestHeader(t,e);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{xa(this),0<this.B&&((this.K=function(t){return Vs&&Xs()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ts(this.qa,this)):this.A=Vr(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){Ea(this,t)}},us.qa=function(){void 0!==ps&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ir(this,"timeout"),this.abort(8))},us.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ir(this,"complete"),Ir(this,"abort"),Ia(this))},us.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ia(this,!0)),_a.X.M.call(this)},us.Ha=function(){this.s||(this.F||this.v||this.l?Aa(this):this.fb())},us.fb=function(){Aa(this)},us.aa=function(){try{return 2<Ca(this)?this.g.status:-1}catch(t){return-1}},us.fa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},us.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),va(e)}},us.Ea=function(){return this.m},us.Oa=function(){return"string"==typeof this.j?this.j:String(this.j)},(us=Ra.prototype).ma=8,us.G=1,us.Ja=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const s=new mo(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=ar(r),cr(r,this.S)):r=this.S),null!==this.o||this.N||(s.H=r,r=null),this.O)t:{for(var e=0,n=0;n<this.i.length;n++){var i=this.i[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Va(this,s,e),Uo(n=Lo(this.F),"RID",t),Uo(n,"CVER",22),this.D&&Uo(n,"X-HTTP-Session-Id",this.D),Fa(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(qa(r)))+"&"+e:this.o&&Na(n,this.o,r)),ra(this.h,s),this.Ya&&Uo(n,"TYPE","init"),this.O?(Uo(n,"$req",e),Uo(n,"SID","null"),s.Z=!0,wo(s,n,null)):wo(s,n,e),this.G=2}}else 3==this.G&&(t?Ua(this,t):0==this.i.length||na(this.h)||Ua(this))},us.Ia=function(){if(this.u=null,Ha(this),this.$&&!(this.K||null==this.g||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=io(Ts(this.eb,this),t)}},us.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,eo(10),Ma(this),Ha(this))},us.cb=function(){null!=this.v&&(this.v=null,Ma(this),ja(this),eo(19))},us.kb=function(t){t?(this.j.info("Successfully pinged google.com"),eo(2)):(this.j.info("Failed to ping google.com"),eo(1))},(us=Ja.prototype).xa=function(){},us.wa=function(){},us.va=function(){},us.ua=function(){},us.Ra=function(){},Za.prototype.g=function(t,e){return new tl(t,e)},ks(tl,Ar),tl.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;eo(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Ya(t,null,t.V),Pa(t)},tl.prototype.close=function(){La(this.g)},tl.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=Cr(t),t=n);e.i.push(new class{constructor(t,e){this.h=t,this.g=e}}(e.ab++,t)),3==e.G&&Pa(e)},tl.prototype.M=function(){this.g.l=null,delete this.j,La(this.g),delete this.g,tl.X.M.call(this)},ks(el,ho),ks(nl,po),ks(il,Ja),il.prototype.xa=function(){Ir(this.g,"a")},il.prototype.wa=function(t){Ir(this.g,new el(t))},il.prototype.va=function(t){Ir(this.g,new nl)},il.prototype.ua=function(){Ir(this.g,"b")},Za.prototype.createWebChannel=Za.prototype.g,tl.prototype.send=tl.prototype.u,tl.prototype.open=tl.prototype.m,tl.prototype.close=tl.prototype.close,so.NO_ERROR=0,so.TIMEOUT=8,so.HTTP_ERROR=6,ro.COMPLETE="complete",lo.EventType=uo,uo.OPEN="a",uo.CLOSE="b",uo.ERROR="c",uo.MESSAGE="d",Ar.prototype.listen=Ar.prototype.N,_a.prototype.listenOnce=_a.prototype.O,_a.prototype.getLastError=_a.prototype.Oa,_a.prototype.getLastErrorCode=_a.prototype.Ea,_a.prototype.getStatus=_a.prototype.aa,_a.prototype.getResponseJson=_a.prototype.Sa,_a.prototype.getResponseText=_a.prototype.fa,_a.prototype.send=_a.prototype.da,_a.prototype.setWithCredentials=_a.prototype.Ka;var sl=ds.createWebChannelTransport=function(){return new Za},rl=ds.getStatEventTarget=function(){return Xr()},ol=ds.ErrorCode=so,al=ds.EventType=ro,ll=ds.Event=Qr,cl=ds.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},ul=ds.FetchXmlHttpFactory=da,hl=ds.WebChannel=lo,dl=ds.XhrIo=_a;const pl="@firebase/firestore";
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
 */class fl{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}fl.UNAUTHENTICATED=new fl(null),fl.GOOGLE_CREDENTIALS=new fl("google-credentials-uid"),fl.FIRST_PARTY=new fl("first-party-uid"),fl.MOCK_USER=new fl("mock-user");
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
let ml="9.17.1";
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
 */const gl=new it("@firebase/firestore");function yl(){return gl.logLevel}function vl(t,...e){if(gl.logLevel<=X.DEBUG){const n=e.map(bl);gl.debug(`Firestore (${ml}): ${t}`,...n)}}function _l(t,...e){if(gl.logLevel<=X.ERROR){const n=e.map(bl);gl.error(`Firestore (${ml}): ${t}`,...n)}}function wl(t,...e){if(gl.logLevel<=X.WARN){const n=e.map(bl);gl.warn(`Firestore (${ml}): ${t}`,...n)}}function bl(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function Tl(t="Unexpected state"){const e=`FIRESTORE (${ml}) INTERNAL ASSERTION FAILED: `+t;throw _l(e),new Error(e)}function El(t,e){t||Tl()}function kl(t,e){return t}
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
 */const Al={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Il extends D{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class xl{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class Cl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Sl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(fl.UNAUTHENTICATED)))}shutdown(){}}class ql{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Nl{constructor(t){this.t=t,this.currentUser=fl.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new xl;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new xl,t.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{vl("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(vl("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new xl)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(vl("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(El("string"==typeof e.accessToken),new Cl(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return El(null===t||"string"==typeof t),new fl(t)}}class Dl{constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i,this.type="FirstParty",this.user=fl.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(El(!("object"!=typeof this.h||null===this.h||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const t=this.I();return t&&this.p.set("Authorization",t),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Rl{constructor(t,e,n,i){this.h=t,this.l=e,this.m=n,this.g=i}getToken(){return Promise.resolve(new Dl(this.h,this.l,this.m,this.g))}start(t,e){t.enqueueRetryable((()=>e(fl.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ll{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ml{constructor(t){this.T=t,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(t,e){const n=t=>{null!=t.error&&vl("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.A;return this.A=t.token,vl("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{vl("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.T.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.T.getImmediate({optional:!0});t?i(t):vl("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(El("string"==typeof t.token),this.A=t.token,new Ll(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function Ol(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
 */class Pl{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=Ol(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<e&&(n+=t.charAt(i[s]%t.length))}return n}}function Ul(t,e){return t<e?-1:t>e?1:0}function Fl(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
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
class Vl{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Il(Al.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Il(Al.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Il(Al.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Il(Al.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Vl.fromMillis(Date.now())}static fromDate(t){return Vl.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Vl(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Ul(this.nanoseconds,t.nanoseconds):Ul(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class Bl{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Bl(t)}static min(){return new Bl(new Vl(0,0))}static max(){return new Bl(new Vl(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class jl{constructor(t,e,n){void 0===e?e=0:e>t.length&&Tl(),void 0===n?n=t.length-e:n>t.length-e&&Tl(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===jl.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof jl?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),s=e.get(i);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class zl extends jl{construct(t,e,n){return new zl(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Il(Al.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new zl(e)}static emptyPath(){return new zl([])}}const Hl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $l extends jl{construct(t,e,n){return new $l(t,e,n)}static isValidIdentifier(t){return Hl.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$l.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new $l(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const s=()=>{if(0===n.length)throw new Il(Al.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new Il(Al.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Il(Al.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(r=!r,i++):"."!==e||r?(n+=e,i++):(s(),i++)}if(s(),r)throw new Il(Al.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new $l(e)}static emptyPath(){return new $l([])}}
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
 */class Wl{constructor(t){this.path=t}static fromPath(t){return new Wl(zl.fromString(t))}static fromName(t){return new Wl(zl.fromString(t).popFirst(5))}static empty(){return new Wl(zl.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===zl.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return zl.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Wl(new zl(t.slice()))}}
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
 */class Gl{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}Gl.UNKNOWN_ID=-1;function Kl(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=Bl.fromTimestamp(1e9===i?new Vl(n+1,0):new Vl(n,i));return new Yl(s,Wl.empty(),e)}function Ql(t){return new Yl(t.readTime,t.key,-1)}class Yl{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Yl(Bl.min(),Wl.empty(),-1)}static max(){return new Yl(Bl.max(),Wl.empty(),-1)}}function Xl(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Wl.comparator(t.documentKey,e.documentKey),0!==n?n:Ul(t.largestBatchId,e.largestBatchId))}
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
 */const Jl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zl{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */async function tc(t){if(t.code!==Al.FAILED_PRECONDITION||t.message!==Jl)throw t;vl("LocalStore","Unexpectedly lost primary lease")}
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
 */class ec{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Tl(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ec(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof ec?e:ec.resolve(e)}catch(t){return ec.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):ec.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):ec.reject(e)}static resolve(t){return new ec(((e,n)=>{e(t)}))}static reject(t){return new ec(((e,n)=>{n(t)}))}static waitFor(t){return new ec(((e,n)=>{let i=0,s=0,r=!1;t.forEach((t=>{++i,t.next((()=>{++s,r&&s===i&&e()}),(t=>n(t)))})),r=!0,s===i&&e()}))}static or(t){let e=ec.resolve(!1);for(const n of t)e=e.next((t=>t?ec.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new ec(((n,i)=>{const s=t.length,r=new Array(s);let o=0;for(let a=0;a<s;a++){const l=a;e(t[l]).next((t=>{r[l]=t,++o,o===s&&n(r)}),(t=>i(t)))}}))}static doWhile(t,e){return new ec(((n,i)=>{const s=()=>{!0===t()?e().next((()=>{s()}),i):n()};s()}))}}
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
 */function nc(t){return"IndexedDbTransactionError"===t.name}
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
class ic{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ut(t),this.ct=t=>e.writeSequenceNumber(t))}ut(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ct&&this.ct(t),t}}ic.at=-1;
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
class sc{constructor(t,e,n,i,s,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class rc{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new rc("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof rc&&t.projectId===this.projectId&&t.database===this.database}}
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
 */function oc(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ac(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function lc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */function cc(t){return null==t}function uc(t){return 0===t&&1/t==-1/0}function hc(t){return"number"==typeof t&&Number.isInteger(t)&&!uc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
class dc{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new dc(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new dc(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ul(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}dc.EMPTY_BYTE_STRING=new dc("");const pc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fc(t){if(El(!!t),"string"==typeof t){let e=0;const n=pc.exec(t);if(El(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:mc(t.seconds),nanos:mc(t.nanos)}}function mc(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function gc(t){return"string"==typeof t?dc.fromBase64String(t):dc.fromUint8Array(t)}
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
 */function yc(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function vc(t){const e=t.mapValue.fields.__previous_value__;return yc(e)?vc(e):e}function _c(t){const e=fc(t.mapValue.fields.__local_write_time__.timestampValue);return new Vl(e.seconds,e.nanos)}
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
 */const wc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function bc(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?yc(t)?4:Mc(t)?9007199254740991:10:Tl()}function Tc(t,e){if(t===e)return!0;const n=bc(t);if(n!==bc(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _c(t).isEqual(_c(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=fc(t.timestampValue),i=fc(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return gc(t.bytesValue).isEqual(gc(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return mc(t.geoPointValue.latitude)===mc(e.geoPointValue.latitude)&&mc(t.geoPointValue.longitude)===mc(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return mc(t.integerValue)===mc(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=mc(t.doubleValue),i=mc(e.doubleValue);return n===i?uc(n)===uc(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return Fl(t.arrayValue.values||[],e.arrayValue.values||[],Tc);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(oc(n)!==oc(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!Tc(n[t],i[t])))return!1;return!0}(t,e);default:return Tl()}}function Ec(t,e){return void 0!==(t.values||[]).find((t=>Tc(t,e)))}function kc(t,e){if(t===e)return 0;const n=bc(t),i=bc(e);if(n!==i)return Ul(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ul(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=mc(t.integerValue||t.doubleValue),i=mc(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Ac(t.timestampValue,e.timestampValue);case 4:return Ac(_c(t),_c(e));case 5:return Ul(t.stringValue,e.stringValue);case 6:return function(t,e){const n=gc(t),i=gc(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=Ul(n[t],i[t]);if(0!==e)return e}return Ul(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Ul(mc(t.latitude),mc(e.latitude));return 0!==n?n:Ul(mc(t.longitude),mc(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=kc(n[t],i[t]);if(e)return e}return Ul(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===wc.mapValue&&e===wc.mapValue)return 0;if(t===wc.mapValue)return 1;if(e===wc.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),s=e.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let t=0;t<i.length&&t<r.length;++t){const e=Ul(i[t],r[t]);if(0!==e)return e;const o=kc(n[i[t]],s[r[t]]);if(0!==o)return o}return Ul(i.length,r.length)}(t.mapValue,e.mapValue);default:throw Tl()}}function Ac(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Ul(t,e);const n=fc(t),i=fc(e),s=Ul(n.seconds,i.seconds);return 0!==s?s:Ul(n.nanos,i.nanos)}function Ic(t){return xc(t)}function xc(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=fc(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?gc(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Wl.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=xc(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const s of e)i?i=!1:n+=",",n+=`${s}:${xc(t.fields[s])}`;return n+"}"}(t.mapValue):Tl()}function Cc(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Sc(t){return!!t&&"integerValue"in t}function qc(t){return!!t&&"arrayValue"in t}function Nc(t){return!!t&&"nullValue"in t}function Dc(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Rc(t){return!!t&&"mapValue"in t}function Lc(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ac(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Lc(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Lc(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Mc(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Oc{constructor(t,e){this.position=t,this.inclusive=e}}function Pc(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(i=r.field.isKeyField()?Wl.comparator(Wl.fromName(o.referenceValue),n.key):kc(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function Uc(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Tc(t.position[n],e.position[n]))return!1;return!0}
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
 */class Fc{}class Vc extends Fc{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Kc(t,e,n):"array-contains"===e?new Jc(t,n):"in"===e?new Zc(t,n):"not-in"===e?new tu(t,n):"array-contains-any"===e?new eu(t,n):new Vc(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new Qc(t,n):new Yc(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(kc(e,this.value)):null!==e&&bc(this.value)===bc(e)&&this.matchesComparison(kc(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Tl()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Bc extends Fc{constructor(t,e){super(),this.filters=t,this.op=e,this.ht=null}static create(t,e){return new Bc(t,e)}matches(t){return jc(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt((t=>t.isInequality()));return null!==t?t.field:null}lt(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function jc(t){return"and"===t.op}function zc(t){return Hc(t)&&jc(t)}function Hc(t){for(const e of t.filters)if(e instanceof Bc)return!1;return!0}function $c(t){if(t instanceof Vc)return t.field.canonicalString()+t.op.toString()+Ic(t.value);if(zc(t))return t.filters.map((t=>$c(t))).join(",");{const e=t.filters.map((t=>$c(t))).join(",");return`${t.op}(${e})`}}function Wc(t,e){return t instanceof Vc?function(t,e){return e instanceof Vc&&t.op===e.op&&t.field.isEqual(e.field)&&Tc(t.value,e.value)}(t,e):t instanceof Bc?function(t,e){return e instanceof Bc&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,i)=>t&&Wc(n,e.filters[i])),!0)}(t,e):void Tl()}function Gc(t){return t instanceof Vc?function(t){return`${t.field.canonicalString()} ${t.op} ${Ic(t.value)}`}(t):t instanceof Bc?function(t){return t.op.toString()+" {"+t.getFilters().map(Gc).join(" ,")+"}"}(t):"Filter"}class Kc extends Vc{constructor(t,e,n){super(t,e,n),this.key=Wl.fromName(n.referenceValue)}matches(t){const e=Wl.comparator(t.key,this.key);return this.matchesComparison(e)}}class Qc extends Vc{constructor(t,e){super(t,"in",e),this.keys=Xc("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Yc extends Vc{constructor(t,e){super(t,"not-in",e),this.keys=Xc("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Xc(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Wl.fromName(t.referenceValue)))}class Jc extends Vc{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return qc(e)&&Ec(e.arrayValue,this.value)}}class Zc extends Vc{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Ec(this.value.arrayValue,e)}}class tu extends Vc{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ec(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Ec(this.value.arrayValue,e)}}class eu extends Vc{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!qc(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Ec(this.value.arrayValue,t)))}}
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
 */class su{constructor(t,e){this.comparator=t,this.root=e||ou.EMPTY}insert(t,e){return new su(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ou.BLACK,null,null))}remove(t){return new su(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ou.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ru(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ru(this.root,t,this.comparator,!1)}getReverseIterator(){return new ru(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ru(this.root,t,this.comparator,!0)}}class ru{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ou{constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:ou.RED,this.left=null!=i?i:ou.EMPTY,this.right=null!=s?s:ou.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,s){return new ou(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ou.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return ou.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ou.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ou.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Tl();if(this.right.isRed())throw Tl();const t=this.left.check();if(t!==this.right.check())throw Tl();return t+(this.isRed()?0:1)}}ou.EMPTY=null,ou.RED=!0,ou.BLACK=!1,ou.EMPTY=new class{constructor(){this.size=0}get key(){throw Tl()}get value(){throw Tl()}get color(){throw Tl()}get left(){throw Tl()}get right(){throw Tl()}copy(t,e,n,i,s){return this}insert(t,e,n){return new ou(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class au{constructor(t){this.comparator=t,this.data=new su(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new lu(this.data.getIterator())}getIteratorFrom(t){return new lu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof au))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new au(this.comparator);return e.data=t,e}}class lu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class cu{constructor(t){this.fields=t,t.sort($l.comparator)}static empty(){return new cu([])}unionWith(t){let e=new au($l.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new cu(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Fl(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
 */class uu{constructor(t){this.value=t}static empty(){return new uu({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Rc(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Lc(e)}setAll(t){let e=$l.emptyPath(),n={},i=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=s.popLast()}t?n[s.lastSegment()]=Lc(t):i.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,i)}delete(t){const e=this.field(t.popLast());Rc(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Tc(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Rc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){ac(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new uu(Lc(this.value))}}function hu(t){const e=[];return ac(t.fields,((t,n)=>{const i=new $l([t]);if(Rc(n)){const t=hu(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new cu(e)
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
 */}class du{constructor(t,e,n,i,s,r,o){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=s,this.data=r,this.documentState=o}static newInvalidDocument(t){return new du(t,0,Bl.min(),Bl.min(),Bl.min(),uu.empty(),0)}static newFoundDocument(t,e,n,i){return new du(t,1,e,Bl.min(),n,i,0)}static newNoDocument(t,e){return new du(t,2,e,Bl.min(),Bl.min(),uu.empty(),0)}static newUnknownDocument(t,e){return new du(t,3,e,Bl.min(),Bl.min(),uu.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Bl.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=uu.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=uu.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Bl.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof du&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new du(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class pu{constructor(t,e=null,n=[],i=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.ft=null}}function fu(t,e=null,n=[],i=[],s=null,r=null,o=null){return new pu(t,e,n,i,s,r,o)}function mu(t){const e=kl(t);if(null===e.ft){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>$c(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),cc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Ic(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Ic(t))).join(",")),e.ft=t}return e.ft}function gu(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!iu(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Wc(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Uc(t.startAt,e.startAt)&&Uc(t.endAt,e.endAt)}function yu(t){return Wl.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
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
class vu{constructor(t,e=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.dt=null,this._t=null,this.startAt,this.endAt}}function _u(t,e,n,i,s,r,o,a){return new vu(t,e,n,i,s,r,o,a)}function wu(t){return new vu(t)}function bu(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Tu(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Eu(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function ku(t){return null!==t.collectionGroup}function Au(t){const e=kl(t);if(null===e.dt){e.dt=[];const t=Eu(e),n=Tu(e);if(null!==t&&null===n)t.isKeyField()||e.dt.push(new nu(t)),e.dt.push(new nu($l.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.dt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new nu($l.keyField(),t))}}}return e.dt}function Iu(t){const e=kl(t);if(!e._t)if("F"===e.limitType)e._t=fu(e.path,e.collectionGroup,Au(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Au(e)){const e="desc"===n.dir?"asc":"desc";t.push(new nu(n.field,e))}const n=e.endAt?new Oc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Oc(e.startAt.position,e.startAt.inclusive):null;e._t=fu(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e._t}function xu(t,e){e.getFirstInequalityField(),Eu(t);const n=t.filters.concat([e]);return new vu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Cu(t,e,n){return new vu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Su(t,e){return gu(Iu(t),Iu(e))&&t.limitType===e.limitType}function qu(t){return`${mu(Iu(t))}|lt:${t.limitType}`}function Nu(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Gc(t))).join(", ")}]`),cc(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Ic(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Ic(t))).join(",")),`Target(${e})`}(Iu(t))}; limitType=${t.limitType})`}function Du(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Wl.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Au(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const i=Pc(t,e,n);return t.inclusive?i<=0:i<0}(t.startAt,Au(t),e))&&!(t.endAt&&!function(t,e,n){const i=Pc(t,e,n);return t.inclusive?i>=0:i>0}(t.endAt,Au(t),e))}(t,e)}function Ru(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Lu(t){return(e,n)=>{let i=!1;for(const s of Au(t)){const t=Mu(s,e,n);if(0!==t)return t;i=i||s.field.isKeyField()}return 0}}function Mu(t,e,n){const i=t.field.isKeyField()?Wl.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),s=n.data.field(t);return null!==i&&null!==s?kc(i,s):Tl()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Tl()}}
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
 */function Ou(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uc(e)?"-0":e}}function Pu(t){return{integerValue:""+t}}function Uu(t,e){return hc(e)?Pu(e):Ou(t,e)}
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
 */class Fu{constructor(){this._=void 0}}function Vu(t,e,n){return t instanceof zu?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Hu?$u(t,e):t instanceof Wu?Gu(t,e):function(t,e){const n=ju(t,e),i=Qu(n)+Qu(t.gt);return Sc(n)&&Sc(t.gt)?Pu(i):Ou(t.yt,i)}(t,e)}function Bu(t,e,n){return t instanceof Hu?$u(t,e):t instanceof Wu?Gu(t,e):n}function ju(t,e){var n;return t instanceof Ku?Sc(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null}class zu extends Fu{}class Hu extends Fu{constructor(t){super(),this.elements=t}}function $u(t,e){const n=Yu(e);for(const e of t.elements)n.some((t=>Tc(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Wu extends Fu{constructor(t){super(),this.elements=t}}function Gu(t,e){let n=Yu(e);for(const e of t.elements)n=n.filter((t=>!Tc(t,e)));return{arrayValue:{values:n}}}class Ku extends Fu{constructor(t,e){super(),this.yt=t,this.gt=e}}function Qu(t){return mc(t.integerValue||t.doubleValue)}function Yu(t){return qc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */class Xu{constructor(t,e){this.field=t,this.transform=e}}class Ju{constructor(t,e){this.version=t,this.transformResults=e}}class Zu{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Zu}static exists(t){return new Zu(void 0,t)}static updateTime(t){return new Zu(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function th(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class eh{}function nh(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new dh(t.key,Zu.none()):new ah(t.key,t.data,Zu.none());{const n=t.data,i=uu.empty();let s=new au($l.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),s=s.add(t)}return new lh(t.key,i,new cu(s.toArray()),Zu.none())}}function ih(t,e,n){t instanceof ah?function(t,e,n){const i=t.value.clone(),s=uh(t.fieldTransforms,e,n.transformResults);i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof lh?function(t,e,n){if(!th(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=uh(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(ch(t)),s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function sh(t,e,n,i){return t instanceof ah?function(t,e,n,i){if(!th(t.precondition,e))return n;const s=t.value.clone(),r=hh(t.fieldTransforms,i,e);return s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,i):t instanceof lh?function(t,e,n,i){if(!th(t.precondition,e))return n;const s=hh(t.fieldTransforms,i,e),r=e.data;return r.setAll(ch(t)),r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):function(t,e,n){return th(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function rh(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),s=ju(i.transform,t||null);null!=s&&(null===n&&(n=uu.empty()),n.set(i.field,s))}return n||null}function oh(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&Fl(t,e,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Hu&&e instanceof Hu||t instanceof Wu&&e instanceof Wu?Fl(t.elements,e.elements,Tc):t instanceof Ku&&e instanceof Ku?Tc(t.gt,e.gt):t instanceof zu&&e instanceof zu}(t.transform,e.transform)}(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ah extends eh{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class lh extends eh{constructor(t,e,n,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ch(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function uh(t,e,n){const i=new Map;El(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,Bu(o,a,n[s]))}return i}function hh(t,e,n){const i=new Map;for(const s of t){const t=s.transform,r=n.data.field(s.field);i.set(s.field,Vu(t,r,e))}return i}class dh extends eh{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ph extends eh{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
 */class fh{constructor(t){this.count=t}}
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
 */var mh,gh;function yh(t){switch(t){default:return Tl();case Al.CANCELLED:case Al.UNKNOWN:case Al.DEADLINE_EXCEEDED:case Al.RESOURCE_EXHAUSTED:case Al.INTERNAL:case Al.UNAVAILABLE:case Al.UNAUTHENTICATED:return!1;case Al.INVALID_ARGUMENT:case Al.NOT_FOUND:case Al.ALREADY_EXISTS:case Al.PERMISSION_DENIED:case Al.FAILED_PRECONDITION:case Al.ABORTED:case Al.OUT_OF_RANGE:case Al.UNIMPLEMENTED:case Al.DATA_LOSS:return!0}}function vh(t){if(void 0===t)return _l("GRPC error has no .code"),Al.UNKNOWN;switch(t){case mh.OK:return Al.OK;case mh.CANCELLED:return Al.CANCELLED;case mh.UNKNOWN:return Al.UNKNOWN;case mh.DEADLINE_EXCEEDED:return Al.DEADLINE_EXCEEDED;case mh.RESOURCE_EXHAUSTED:return Al.RESOURCE_EXHAUSTED;case mh.INTERNAL:return Al.INTERNAL;case mh.UNAVAILABLE:return Al.UNAVAILABLE;case mh.UNAUTHENTICATED:return Al.UNAUTHENTICATED;case mh.INVALID_ARGUMENT:return Al.INVALID_ARGUMENT;case mh.NOT_FOUND:return Al.NOT_FOUND;case mh.ALREADY_EXISTS:return Al.ALREADY_EXISTS;case mh.PERMISSION_DENIED:return Al.PERMISSION_DENIED;case mh.FAILED_PRECONDITION:return Al.FAILED_PRECONDITION;case mh.ABORTED:return Al.ABORTED;case mh.OUT_OF_RANGE:return Al.OUT_OF_RANGE;case mh.UNIMPLEMENTED:return Al.UNIMPLEMENTED;case mh.DATA_LOSS:return Al.DATA_LOSS;default:return Tl()}}(gh=mh||(mh={}))[gh.OK=0]="OK",gh[gh.CANCELLED=1]="CANCELLED",gh[gh.UNKNOWN=2]="UNKNOWN",gh[gh.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",gh[gh.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",gh[gh.NOT_FOUND=5]="NOT_FOUND",gh[gh.ALREADY_EXISTS=6]="ALREADY_EXISTS",gh[gh.PERMISSION_DENIED=7]="PERMISSION_DENIED",gh[gh.UNAUTHENTICATED=16]="UNAUTHENTICATED",gh[gh.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",gh[gh.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",gh[gh.ABORTED=10]="ABORTED",gh[gh.OUT_OF_RANGE=11]="OUT_OF_RANGE",gh[gh.UNIMPLEMENTED=12]="UNIMPLEMENTED",gh[gh.INTERNAL=13]="INTERNAL",gh[gh.UNAVAILABLE=14]="UNAVAILABLE",gh[gh.DATA_LOSS=15]="DATA_LOSS";
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
class _h{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){ac(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return lc(this.inner)}size(){return this.innerSize}}
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
 */const wh=new su(Wl.comparator);function bh(){return wh}const Th=new su(Wl.comparator);function Eh(...t){let e=Th;for(const n of t)e=e.insert(n.key,n);return e}function kh(t){let e=Th;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Ah(){return xh()}function Ih(){return xh()}function xh(){return new _h((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Ch=new su(Wl.comparator),Sh=new au(Wl.comparator);function qh(...t){let e=Sh;for(const n of t)e=e.add(n);return e}const Nh=new au(Ul);function Dh(){return Nh}
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
 */class Rh{constructor(t,e,n,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,Lh.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Rh(Bl.min(),i,Dh(),bh(),qh())}}class Lh{constructor(t,e,n,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Lh(n,e,qh(),qh(),qh())}}
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
 */class Mh{constructor(t,e,n,i){this.It=t,this.removedTargetIds=e,this.key=n,this.Tt=i}}class Oh{constructor(t,e){this.targetId=t,this.Et=e}}class Ph{constructor(t,e,n=dc.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Uh{constructor(){this.At=0,this.Rt=Bh(),this.bt=dc.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return 0!==this.At}get St(){return this.vt}Dt(t){t.approximateByteSize()>0&&(this.vt=!0,this.bt=t)}Ct(){let t=qh(),e=qh(),n=qh();return this.Rt.forEach(((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:Tl()}})),new Lh(this.bt,this.Pt,t,e,n)}xt(){this.vt=!1,this.Rt=Bh()}Nt(t,e){this.vt=!0,this.Rt=this.Rt.insert(t,e)}kt(t){this.vt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class Fh{constructor(t){this.$t=t,this.Bt=new Map,this.Lt=bh(),this.qt=Vh(),this.Ut=new au(Ul)}Kt(t){for(const e of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(e,t.Tt):this.Qt(e,t.key,t.Tt);for(const e of t.removedTargetIds)this.Qt(e,t.key,t.Tt)}jt(t){this.forEachTarget(t,(e=>{const n=this.Wt(e);switch(t.state){case 0:this.zt(e)&&n.Dt(t.resumeToken);break;case 1:n.Mt(),n.Vt||n.xt(),n.Dt(t.resumeToken);break;case 2:n.Mt(),n.Vt||this.removeTarget(e);break;case 3:this.zt(e)&&(n.Ft(),n.Dt(t.resumeToken));break;case 4:this.zt(e)&&(this.Ht(e),n.Dt(t.resumeToken));break;default:Tl()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Bt.forEach(((t,n)=>{this.zt(n)&&e(n)}))}Jt(t){const e=t.targetId,n=t.Et.count,i=this.Yt(e);if(i){const t=i.target;if(yu(t))if(0===n){const n=new Wl(t.path);this.Qt(e,n,du.newNoDocument(n,Bl.min()))}else El(1===n);else this.Xt(e)!==n&&(this.Ht(e),this.Ut=this.Ut.add(e))}}Zt(t){const e=new Map;this.Bt.forEach(((n,i)=>{const s=this.Yt(i);if(s){if(n.current&&yu(s.target)){const e=new Wl(s.target.path);null!==this.Lt.get(e)||this.te(i,e)||this.Qt(i,e,du.newNoDocument(e,t))}n.St&&(e.set(i,n.Ct()),n.xt())}}));let n=qh();this.qt.forEach(((t,e)=>{let i=!0;e.forEachWhile((t=>{const e=this.Yt(t);return!e||2===e.purpose||(i=!1,!1)})),i&&(n=n.add(t))})),this.Lt.forEach(((e,n)=>n.setReadTime(t)));const i=new Rh(t,e,this.Ut,this.Lt,n);return this.Lt=bh(),this.qt=Vh(),this.Ut=new au(Ul),i}Gt(t,e){if(!this.zt(t))return;const n=this.te(t,e.key)?2:0;this.Wt(t).Nt(e.key,n),this.Lt=this.Lt.insert(e.key,e),this.qt=this.qt.insert(e.key,this.ee(e.key).add(t))}Qt(t,e,n){if(!this.zt(t))return;const i=this.Wt(t);this.te(t,e)?i.Nt(e,1):i.kt(e),this.qt=this.qt.insert(e,this.ee(e).delete(t)),n&&(this.Lt=this.Lt.insert(e,n))}removeTarget(t){this.Bt.delete(t)}Xt(t){const e=this.Wt(t).Ct();return this.$t.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Ot(t){this.Wt(t).Ot()}Wt(t){let e=this.Bt.get(t);return e||(e=new Uh,this.Bt.set(t,e)),e}ee(t){let e=this.qt.get(t);return e||(e=new au(Ul),this.qt=this.qt.insert(t,e)),e}zt(t){const e=null!==this.Yt(t);return e||vl("WatchChangeAggregator","Detected inactive target",t),e}Yt(t){const e=this.Bt.get(t);return e&&e.Vt?null:this.$t.ne(t)}Ht(t){this.Bt.set(t,new Uh),this.$t.getRemoteKeysForTarget(t).forEach((e=>{this.Qt(t,e,null)}))}te(t,e){return this.$t.getRemoteKeysForTarget(t).has(e)}}function Vh(){return new su(Wl.comparator)}function Bh(){return new su(Wl.comparator)}
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
 */const jh={asc:"ASCENDING",desc:"DESCENDING"},zh={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Hh={and:"AND",or:"OR"};class $h{constructor(t,e){this.databaseId=t,this.wt=e}}function Wh(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Gh(t,e){return t.wt?e.toBase64():e.toUint8Array()}function Kh(t,e){return Wh(t,e.toTimestamp())}function Qh(t){return El(!!t),Bl.fromTimestamp(function(t){const e=fc(t);return new Vl(e.seconds,e.nanos)}(t))}function Yh(t,e){return function(t){return new zl(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Xh(t){const e=zl.fromString(t);return El(yd(e)),e}function Jh(t,e){return Yh(t.databaseId,e.path)}function Zh(t,e){const n=Xh(e);if(n.get(1)!==t.databaseId.projectId)throw new Il(Al.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Il(Al.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Wl(id(n))}function td(t,e){return Yh(t.databaseId,e)}function ed(t){const e=Xh(t);return 4===e.length?zl.emptyPath():id(e)}function nd(t){return new zl(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function id(t){return El(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function sd(t,e,n){return{name:Jh(t,e),fields:n.value.mapValue.fields}}function rd(t,e){let n;if(e instanceof ah)n={update:sd(t,e.key,e.value)};else if(e instanceof dh)n={delete:Jh(t,e.key)};else if(e instanceof lh)n={update:sd(t,e.key,e.data),updateMask:gd(e.fieldMask)};else{if(!(e instanceof ph))return Tl();n={verify:Jh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof zu)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Hu)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Wu)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ku)return{fieldPath:e.field.canonicalString(),increment:n.gt};throw Tl()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Kh(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Tl()}(t,e.precondition)),n}function od(t,e){return{documents:[td(t,e.path)]}}function ad(t,e){const n={structuredQuery:{}},i=e.path;null!==e.collectionGroup?(n.parent=td(t,i),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=td(t,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const s=function(t){if(0!==t.length)return md(Bc.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const r=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:pd(t.field),direction:ud(t.dir)}}(t)))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(t,e){return t.wt||cc(e)?e:{value:e}}(t,e.limit);var a;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function ld(t){let e=ed(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){El(1===i);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=function(t){const e=cd(t);return e instanceof Bc&&zc(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new nu(fd(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,cc(e)?null:e}(n.limit));let l=null;n.startAt&&(l=function(t){const e=!!t.before,n=t.values||[];return new Oc(n,e)}(n.startAt));let c=null;return n.endAt&&(c=function(t){const e=!t.before,n=t.values||[];return new Oc(n,e)}(n.endAt)),_u(e,s,o,r,a,"F",l,c)}function cd(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=fd(t.unaryFilter.field);return Vc.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=fd(t.unaryFilter.field);return Vc.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=fd(t.unaryFilter.field);return Vc.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=fd(t.unaryFilter.field);return Vc.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Tl()}}(t):void 0!==t.fieldFilter?function(t){return Vc.create(fd(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Tl()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Bc.create(t.compositeFilter.filters.map((t=>cd(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return Tl()}}(t.compositeFilter.op))}(t):Tl()}function ud(t){return jh[t]}function hd(t){return zh[t]}function dd(t){return Hh[t]}function pd(t){return{fieldPath:t.canonicalString()}}function fd(t){return $l.fromServerFormat(t.fieldPath)}function md(t){return t instanceof Vc?function(t){if("=="===t.op){if(Dc(t.value))return{unaryFilter:{field:pd(t.field),op:"IS_NAN"}};if(Nc(t.value))return{unaryFilter:{field:pd(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Dc(t.value))return{unaryFilter:{field:pd(t.field),op:"IS_NOT_NAN"}};if(Nc(t.value))return{unaryFilter:{field:pd(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pd(t.field),op:hd(t.op),value:t.value}}}(t):t instanceof Bc?function(t){const e=t.getFilters().map((t=>md(t)));return 1===e.length?e[0]:{compositeFilter:{op:dd(t.op),filters:e}}}(t):Tl()}function gd(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function yd(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
class bd{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&ih(i,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=sh(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=sh(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Ih();return this.mutations.forEach((i=>{const s=t.get(i.key),r=s.overlayedDocument;let o=this.applyToLocalView(r,s.mutatedFields);o=e.has(i.key)?null:o;const a=nh(r,o);null!==a&&n.set(i.key,a),r.isValidDocument()||r.convertToNoDocument(Bl.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),qh())}isEqual(t){return this.batchId===t.batchId&&Fl(this.mutations,t.mutations,((t,e)=>oh(t,e)))&&Fl(this.baseMutations,t.baseMutations,((t,e)=>oh(t,e)))}}class Td{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){El(t.mutations.length===n.length);let i=Ch;const s=t.mutations;for(let t=0;t<s.length;t++)i=i.insert(s[t].key,n[t].version);return new Td(t,e,n,i)}}
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
 */class kd{constructor(t,e,n,i,s=Bl.min(),r=Bl.min(),o=dc.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=o}withSequenceNumber(t){return new kd(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new kd(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new kd(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
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
 */class Ad{constructor(t){this.ie=t}}function Id(t){const e=ld({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Cu(e,e.limit,"L"):e}
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
 */class xd{constructor(){}ue(t,e){this.ce(t,e),e.ae()}ce(t,e){if("nullValue"in t)this.he(e,5);else if("booleanValue"in t)this.he(e,10),e.le(t.booleanValue?1:0);else if("integerValue"in t)this.he(e,15),e.le(mc(t.integerValue));else if("doubleValue"in t){const n=mc(t.doubleValue);isNaN(n)?this.he(e,13):(this.he(e,15),uc(n)?e.le(0):e.le(n))}else if("timestampValue"in t){const n=t.timestampValue;this.he(e,20),"string"==typeof n?e.fe(n):(e.fe(`${n.seconds||""}`),e.le(n.nanos||0))}else if("stringValue"in t)this.de(t.stringValue,e),this._e(e);else if("bytesValue"in t)this.he(e,30),e.we(gc(t.bytesValue)),this._e(e);else if("referenceValue"in t)this.me(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.he(e,45),e.le(n.latitude||0),e.le(n.longitude||0)}else"mapValue"in t?Mc(t)?this.he(e,Number.MAX_SAFE_INTEGER):(this.ge(t.mapValue,e),this._e(e)):"arrayValue"in t?(this.ye(t.arrayValue,e),this._e(e)):Tl()}de(t,e){this.he(e,25),this.pe(t,e)}pe(t,e){e.fe(t)}ge(t,e){const n=t.fields||{};this.he(e,55);for(const t of Object.keys(n))this.de(t,e),this.ce(n[t],e)}ye(t,e){const n=t.values||[];this.he(e,50);for(const t of n)this.ce(t,e)}me(t,e){this.he(e,37),Wl.fromName(t).path.forEach((t=>{this.he(e,60),this.pe(t,e)}))}he(t,e){t.le(e)}_e(t){t.le(2)}}xd.Ie=new xd;
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
class Cd{constructor(){this.Je=new Sd}addToCollectionParentIndex(t,e){return this.Je.add(e),ec.resolve()}getCollectionParents(t,e){return ec.resolve(this.Je.getEntries(e))}addFieldIndex(t,e){return ec.resolve()}deleteFieldIndex(t,e){return ec.resolve()}getDocumentsMatchingTarget(t,e){return ec.resolve(null)}getIndexType(t,e){return ec.resolve(0)}getFieldIndexes(t,e){return ec.resolve([])}getNextCollectionGroupToUpdate(t){return ec.resolve(null)}getMinOffset(t,e){return ec.resolve(Yl.min())}getMinOffsetFromCollectionGroup(t,e){return ec.resolve(Yl.min())}updateCollectionGroup(t,e,n){return ec.resolve()}updateIndexEntries(t,e){return ec.resolve()}}class Sd{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new au(zl.comparator),s=!i.has(n);return this.index[e]=i.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new au(zl.comparator)).toArray()}}
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
 */new Uint8Array(0);class qd{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new qd(t,qd.DEFAULT_COLLECTION_PERCENTILE,qd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */qd.DEFAULT_COLLECTION_PERCENTILE=10,qd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,qd.DEFAULT=new qd(41943040,qd.DEFAULT_COLLECTION_PERCENTILE,qd.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),qd.DISABLED=new qd(-1,0,0);
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
class Nd{constructor(t){this.bn=t}next(){return this.bn+=2,this.bn}static Pn(){return new Nd(0)}static vn(){return new Nd(-1)}}
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
class Dd{constructor(){this.changes=new _h((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,du.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ec.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
class Rd{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class Ld{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&sh(n.mutation,t,cu.empty(),Vl.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,qh()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=qh()){const i=Ah();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=Eh();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Ah();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,qh())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let s=bh();const r=xh(),o=xh();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof lh)?s=s.insert(e.key,e):void 0!==o?(r.set(e.key,o.mutation.getFieldMask()),sh(o.mutation,e,o.mutation.getFieldMask(),Vl.now())):r.set(e.key,cu.empty())})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Rd(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=xh();let i=new su(((t,e)=>t-e)),s=qh();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||cu.empty();o=s.applyToLocalView(r,o),n.set(t,o);const a=(i.get(s.batchId)||qh()).add(t);i=i.insert(s.batchId,a)}))})).next((()=>{const r=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,l=i.value,c=Ih();l.forEach((t=>{if(!s.has(t)){const i=nh(e.get(t),n.get(t));null!==i&&c.set(t,i),s=s.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,c))}return ec.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return Wl.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ku(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((s=>{const r=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-s.size):ec.resolve(Ah());let o=-1,a=s;return r.next((e=>ec.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?ec.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,qh()))).next((t=>({batchId:o,changes:kh(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Wl(e)).next((t=>{let e=Eh();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const i=e.collectionGroup;let s=Eh();return this.indexManager.getCollectionParents(t,i).next((r=>ec.forEach(r,(r=>{const o=function(t,e){return new vu(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,r.child(i));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i)))).next((t=>{i.forEach(((e,n)=>{const i=n.getKey();null===t.get(i)&&(t=t.insert(i,du.newInvalidDocument(i)))}));let n=Eh();return t.forEach(((t,s)=>{const r=i.get(t);void 0!==r&&sh(r.mutation,s,cu.empty(),Vl.now()),Du(e,s)&&(n=n.insert(t,s))})),n}))}}
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
 */class Md{constructor(t){this.yt=t,this.Zn=new Map,this.ts=new Map}getBundleMetadata(t,e){return ec.resolve(this.Zn.get(e))}saveBundleMetadata(t,e){var n;return this.Zn.set(e.id,{id:(n=e).id,version:n.version,createTime:Qh(n.createTime)}),ec.resolve()}getNamedQuery(t,e){return ec.resolve(this.ts.get(e))}saveNamedQuery(t,e){return this.ts.set(e.name,function(t){return{name:t.name,query:Id(t.bundledQuery),readTime:Qh(t.readTime)}}(e)),ec.resolve()}}
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
 */class Od{constructor(){this.overlays=new su(Wl.comparator),this.es=new Map}getOverlay(t,e){return ec.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Ah();return ec.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.oe(t,e,i)})),ec.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.es.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.es.delete(n)),ec.resolve()}getOverlaysForCollection(t,e,n){const i=Ah(),s=e.length+1,r=new Wl(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===s&&t.largestBatchId>n&&i.set(t.getKey(),t)}return ec.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let s=new su(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=Ah(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Ah(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=i)););return ec.resolve(o)}oe(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.es.get(i.largestBatchId).delete(n.key);this.es.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Ed(e,n));let s=this.es.get(e);void 0===s&&(s=qh(),this.es.set(e,s)),this.es.set(e,s.add(n.key))}}
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
 */class Pd{constructor(){this.ns=new au(Ud.ss),this.rs=new au(Ud.os)}isEmpty(){return this.ns.isEmpty()}addReference(t,e){const n=new Ud(t,e);this.ns=this.ns.add(n),this.rs=this.rs.add(n)}us(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.cs(new Ud(t,e))}hs(t,e){t.forEach((t=>this.removeReference(t,e)))}ls(t){const e=new Wl(new zl([])),n=new Ud(e,t),i=new Ud(e,t+1),s=[];return this.rs.forEachInRange([n,i],(t=>{this.cs(t),s.push(t.key)})),s}fs(){this.ns.forEach((t=>this.cs(t)))}cs(t){this.ns=this.ns.delete(t),this.rs=this.rs.delete(t)}ds(t){const e=new Wl(new zl([])),n=new Ud(e,t),i=new Ud(e,t+1);let s=qh();return this.rs.forEachInRange([n,i],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new Ud(t,0),n=this.ns.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Ud{constructor(t,e){this.key=t,this._s=e}static ss(t,e){return Wl.comparator(t.key,e.key)||Ul(t._s,e._s)}static os(t,e){return Ul(t._s,e._s)||Wl.comparator(t.key,e.key)}}
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
 */class Fd{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.ws=1,this.gs=new au(Ud.ss)}checkEmpty(t){return ec.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new bd(s,e,n,i);this.mutationQueue.push(r);for(const e of i)this.gs=this.gs.add(new Ud(e.key,s)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return ec.resolve(r)}lookupMutationBatch(t,e){return ec.resolve(this.ys(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ps(n),s=i<0?0:i;return ec.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return ec.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(t){return ec.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ud(e,0),i=new Ud(e,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([n,i],(t=>{const e=this.ys(t._s);s.push(e)})),ec.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new au(Ul);return e.forEach((t=>{const e=new Ud(t,0),i=new Ud(t,Number.POSITIVE_INFINITY);this.gs.forEachInRange([e,i],(t=>{n=n.add(t._s)}))})),ec.resolve(this.Is(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let s=n;Wl.isDocumentKey(s)||(s=s.child(""));const r=new Ud(new Wl(s),0);let o=new au(Ul);return this.gs.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t._s)),!0)}),r),ec.resolve(this.Is(o))}Is(t){const e=[];return t.forEach((t=>{const n=this.ys(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){El(0===this.Ts(e.batchId,"removed")),this.mutationQueue.shift();let n=this.gs;return ec.forEach(e.mutations,(i=>{const s=new Ud(i.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.gs=n}))}An(t){}containsKey(t,e){const n=new Ud(e,0),i=this.gs.firstAfterOrEqual(n);return ec.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,ec.resolve()}Ts(t,e){return this.ps(t)}ps(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}ys(t){const e=this.ps(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class Vd{constructor(t){this.Es=t,this.docs=new su(Wl.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),s=i?i.size:0,r=this.Es(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ec.resolve(n?n.document.mutableCopy():du.newInvalidDocument(e))}getEntries(t,e){let n=bh();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():du.newInvalidDocument(t))})),ec.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let s=bh();const r=e.path,o=new Wl(r.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!r.isPrefixOf(t.path))break;t.path.length>r.length+1||Xl(Ql(o),n)<=0||(i.has(o.key)||Du(e,o))&&(s=s.insert(o.key,o.mutableCopy()))}return ec.resolve(s)}getAllFromCollectionGroup(t,e,n,i){Tl()}As(t,e){return ec.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Bd(this)}getSize(t){return ec.resolve(this.size)}}class Bd extends Dd{constructor(t){super(),this.Yn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.Yn.addEntry(t,i)):this.Yn.removeEntry(n)})),ec.waitFor(e)}getFromCache(t,e){return this.Yn.getEntry(t,e)}getAllFromCache(t,e){return this.Yn.getEntries(t,e)}}
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
 */class jd{constructor(t){this.persistence=t,this.Rs=new _h((t=>mu(t)),gu),this.lastRemoteSnapshotVersion=Bl.min(),this.highestTargetId=0,this.bs=0,this.Ps=new Pd,this.targetCount=0,this.vs=Nd.Pn()}forEachTarget(t,e){return this.Rs.forEach(((t,n)=>e(n))),ec.resolve()}getLastRemoteSnapshotVersion(t){return ec.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ec.resolve(this.bs)}allocateTargetId(t){return this.highestTargetId=this.vs.next(),ec.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.bs&&(this.bs=e),ec.resolve()}Dn(t){this.Rs.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.vs=new Nd(e),this.highestTargetId=e),t.sequenceNumber>this.bs&&(this.bs=t.sequenceNumber)}addTargetData(t,e){return this.Dn(e),this.targetCount+=1,ec.resolve()}updateTargetData(t,e){return this.Dn(e),ec.resolve()}removeTargetData(t,e){return this.Rs.delete(e.target),this.Ps.ls(e.targetId),this.targetCount-=1,ec.resolve()}removeTargets(t,e,n){let i=0;const s=[];return this.Rs.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Rs.delete(r),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),ec.waitFor(s).next((()=>i))}getTargetCount(t){return ec.resolve(this.targetCount)}getTargetData(t,e){const n=this.Rs.get(e)||null;return ec.resolve(n)}addMatchingKeys(t,e,n){return this.Ps.us(e,n),ec.resolve()}removeMatchingKeys(t,e,n){this.Ps.hs(e,n);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach((e=>{s.push(i.markPotentiallyOrphaned(t,e))})),ec.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Ps.ls(e),ec.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Ps.ds(e);return ec.resolve(n)}containsKey(t,e){return ec.resolve(this.Ps.containsKey(e))}}
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
 */class zd{constructor(t,e){this.Vs={},this.overlays={},this.Ss=new ic(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=t(this),this.Cs=new jd(this),this.indexManager=new Cd,this.remoteDocumentCache=function(t){return new Vd(t)}((t=>this.referenceDelegate.xs(t))),this.yt=new Ad(e),this.Ns=new Md(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Od,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Vs[t.toKey()];return n||(n=new Fd(e,this.referenceDelegate),this.Vs[t.toKey()]=n),n}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(t,e,n){vl("MemoryPersistence","Starting transaction:",t);const i=new Hd(this.Ss.next());return this.referenceDelegate.ks(),n(i).next((t=>this.referenceDelegate.Os(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ms(t,e){return ec.or(Object.values(this.Vs).map((n=>()=>n.containsKey(t,e))))}}class Hd extends Zl{constructor(t){super(),this.currentSequenceNumber=t}}class $d{constructor(t){this.persistence=t,this.Fs=new Pd,this.$s=null}static Bs(t){return new $d(t)}get Ls(){if(this.$s)return this.$s;throw Tl()}addReference(t,e,n){return this.Fs.addReference(n,e),this.Ls.delete(n.toString()),ec.resolve()}removeReference(t,e,n){return this.Fs.removeReference(n,e),this.Ls.add(n.toString()),ec.resolve()}markPotentiallyOrphaned(t,e){return this.Ls.add(e.toString()),ec.resolve()}removeTarget(t,e){this.Fs.ls(e.targetId).forEach((t=>this.Ls.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Ls.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}ks(){this.$s=new Set}Os(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ec.forEach(this.Ls,(n=>{const i=Wl.fromPath(n);return this.qs(t,i).next((t=>{t||e.removeEntry(i,Bl.min())}))})).next((()=>(this.$s=null,e.apply(t))))}updateLimboDocument(t,e){return this.qs(t,e).next((t=>{t?this.Ls.delete(e.toString()):this.Ls.add(e.toString())}))}xs(t){return 0}qs(t,e){return ec.or([()=>ec.resolve(this.Fs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ms(t,e)])}}
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
class Wd{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Si=n,this.Di=i}static Ci(t,e){let n=qh(),i=qh();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new Wd(t,e.fromCache,n,i)}}
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
 */class Gd{constructor(){this.xi=!1}initialize(t,e){this.Ni=t,this.indexManager=e,this.xi=!0}getDocumentsMatchingQuery(t,e,n,i){return this.ki(t,e).next((s=>s||this.Oi(t,e,i,n))).next((n=>n||this.Mi(t,e)))}ki(t,e){if(bu(e))return ec.resolve(null);let n=Iu(e);return this.indexManager.getIndexType(t,n).next((i=>0===i?null:(null!==e.limit&&1===i&&(e=Cu(e,null,"F"),n=Iu(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((i=>{const s=qh(...i);return this.Ni.getDocuments(t,s).next((i=>this.indexManager.getMinOffset(t,n).next((n=>{const r=this.Fi(e,i);return this.$i(e,r,s,n.readTime)?this.ki(t,Cu(e,null,"F")):this.Bi(t,r,e,n)}))))})))))}Oi(t,e,n,i){return bu(e)||i.isEqual(Bl.min())?this.Mi(t,e):this.Ni.getDocuments(t,n).next((s=>{const r=this.Fi(e,s);return this.$i(e,r,n,i)?this.Mi(t,e):(yl()<=X.DEBUG&&vl("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Nu(e)),this.Bi(t,r,e,Kl(i,-1)))}))}Fi(t,e){let n=new au(Lu(t));return e.forEach(((e,i)=>{Du(t,i)&&(n=n.add(i))})),n}$i(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(t,e){return yl()<=X.DEBUG&&vl("QueryEngine","Using full collection scan to execute query:",Nu(e)),this.Ni.getDocumentsMatchingQuery(t,e,Yl.min())}Bi(t,e,n,i){return this.Ni.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */class Kd{constructor(t,e,n,i){this.persistence=t,this.Li=e,this.yt=i,this.qi=new su(Ul),this.Ui=new _h((t=>mu(t)),gu),this.Ki=new Map,this.Gi=t.getRemoteDocumentCache(),this.Cs=t.getTargetCache(),this.Ns=t.getBundleCache(),this.Qi(n)}Qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ld(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.qi)))}}function Qd(t,e,n,i){return new Kd(t,e,n,i)}async function Yd(t,e){const n=kl(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],r=[];let o=qh();for(const t of i){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ji:t,removedBatchIds:s,addedBatchIds:r})))}))}))}function Xd(t){const e=kl(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Cs.getLastRemoteSnapshotVersion(t)))}function Jd(t,e,n){let i=qh(),s=qh();return n.forEach((t=>i=i.add(t))),e.getEntries(t,i).next((t=>{let i=bh();return n.forEach(((n,r)=>{const o=t.get(n);r.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),r.isNoDocument()&&r.version.isEqual(Bl.min())?(e.removeEntry(n,r.readTime),i=i.insert(n,r)):!o.isValidDocument()||r.version.compareTo(o.version)>0||0===r.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(r),i=i.insert(n,r)):vl("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",r.version)})),{Wi:i,zi:s}}))}function Zd(t,e){const n=kl(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function tp(t,e){const n=kl(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let i;return n.Cs.getTargetData(t,e).next((s=>s?(i=s,ec.resolve(i)):n.Cs.allocateTargetId(t).next((s=>(i=new kd(e,s,0,t.currentSequenceNumber),n.Cs.addTargetData(t,i).next((()=>i)))))))})).then((t=>{const i=n.qi.get(t.targetId);return(null===i||t.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(t.targetId,t),n.Ui.set(e,t.targetId)),t}))}async function ep(t,e,n){const i=kl(t),s=i.qi.get(e),r=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",r,(t=>i.persistence.referenceDelegate.removeTarget(t,s)))}catch(t){if(!nc(t))throw t;vl("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}i.qi=i.qi.remove(e),i.Ui.delete(s.target)}function np(t,e,n){const i=kl(t);let s=Bl.min(),r=qh();return i.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const i=kl(t),s=i.Ui.get(n);return void 0!==s?ec.resolve(i.qi.get(s)):i.Cs.getTargetData(e,n)}(i,t,Iu(e)).next((e=>{if(e)return s=e.lastLimboFreeSnapshotVersion,i.Cs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{r=t}))})).next((()=>i.Li.getDocumentsMatchingQuery(t,e,n?s:Bl.min(),n?r:qh()))).next((t=>(ip(i,Ru(e),t),{documents:t,Hi:r})))))}function ip(t,e,n){let i=t.Ki.get(e)||Bl.min();n.forEach(((t,e)=>{e.readTime.compareTo(i)>0&&(i=e.readTime)})),t.Ki.set(e,i)}class sp{constructor(){this.activeTargetIds=Dh()}er(t){this.activeTargetIds=this.activeTargetIds.add(t)}nr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}tr(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class rp{constructor(){this.Lr=new sp,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Lr.er(t),this.qr[t]||"not-current"}updateQueryState(t,e,n){this.qr[t]=e}removeLocalQueryTarget(t){this.Lr.nr(t)}isLocalQueryTarget(t){return this.Lr.activeTargetIds.has(t)}clearQueryState(t){delete this.qr[t]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(t){return this.Lr.activeTargetIds.has(t)}start(){return this.Lr=new sp,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class op{Ur(t){}shutdown(){}}
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
 */class ap{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(t){this.Wr.push(t)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){vl("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Wr)t(0)}jr(){vl("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Wr)t(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const lp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
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
 */class cp{constructor(t){this.Hr=t.Hr,this.Jr=t.Jr}Yr(t){this.Xr=t}Zr(t){this.eo=t}onMessage(t){this.no=t}close(){this.Jr()}send(t){this.Hr(t)}so(){this.Xr()}io(t){this.eo(t)}ro(t){this.no(t)}}
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
 */class up extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.oo=e+"://"+t.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(t,e,n,i,s){const r=this.ho(t,e);vl("RestConnection","Sending: ",r,n);const o={};return this.lo(o,i,s),this.fo(t,r,o,n).then((t=>(vl("RestConnection","Received: ",t),t)),(e=>{throw wl("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}_o(t,e,n,i,s,r){return this.ao(t,e,n,i,s)}lo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+ml,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}ho(t,e){const n=lp[t];return`${this.oo}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}fo(t,e,n,i){return new Promise(((s,r)=>{const o=new dl;o.setWithCredentials(!0),o.listenOnce(al.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case ol.NO_ERROR:const e=o.getResponseJson();vl("Connection","XHR received:",JSON.stringify(e)),s(e);break;case ol.TIMEOUT:vl("Connection",'RPC "'+t+'" timed out'),r(new Il(Al.DEADLINE_EXCEEDED,"Request time out"));break;case ol.HTTP_ERROR:const n=o.getStatus();if(vl("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){let t=o.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Al).indexOf(e)>=0?e:Al.UNKNOWN}(e.status);r(new Il(t,e.message))}else r(new Il(Al.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new Il(Al.UNAVAILABLE,"Connection failed."));break;default:Tl()}}finally{vl("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(i);o.send(e,"POST",a,n,15)}))}wo(t,e,n){const i=[this.oo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=sl(),r=rl(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new ul({})),this.lo(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const a=i.join("");vl("Connection","Creating WebChannel: "+a,o);const l=s.createWebChannel(a,o);let c=!1,u=!1;const h=new cp({Hr:t=>{u?vl("Connection","Not sending because WebChannel is closed:",t):(c||(vl("Connection","Opening WebChannel transport."),l.open(),c=!0),vl("Connection","WebChannel sending:",t),l.send(t))},Jr:()=>l.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(l,hl.EventType.OPEN,(()=>{u||vl("Connection","WebChannel transport opened.")})),d(l,hl.EventType.CLOSE,(()=>{u||(u=!0,vl("Connection","WebChannel transport closed"),h.io())})),d(l,hl.EventType.ERROR,(t=>{u||(u=!0,wl("Connection","WebChannel transport errored:",t),h.io(new Il(Al.UNAVAILABLE,"The operation could not be completed")))})),d(l,hl.EventType.MESSAGE,(t=>{var e;if(!u){const n=t.data[0];El(!!n);const i=n,s=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(s){vl("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=mh[t];if(void 0!==e)return vh(e)}(t),n=s.message;void 0===e&&(e=Al.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),u=!0,h.io(new Il(e,n)),l.close()}else vl("Connection","WebChannel received:",n),h.ro(n)}})),d(r,ll.STAT_EVENT,(t=>{t.stat===cl.PROXY?vl("Connection","Detected buffering proxy"):t.stat===cl.NOPROXY&&vl("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.so()}),0),h}}
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
 */function hp(){return"undefined"!=typeof document?document:null}
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
 */function dp(t){return new $h(t,!0)}class pp{constructor(t,e,n=1e3,i=1.5,s=6e4){this.Hs=t,this.timerId=e,this.mo=n,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(t){this.cancel();const e=Math.floor(this.Io+this.bo()),n=Math.max(0,Date.now()-this.Eo),i=Math.max(0,e-n);i>0&&vl("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,(()=>(this.Eo=Date.now(),t()))),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){null!==this.To&&(this.To.skipDelay(),this.To=null)}cancel(){null!==this.To&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}
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
 */class fp{constructor(t,e,n,i,s,r,o,a){this.Hs=t,this.vo=n,this.Vo=i,this.connection=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new pp(t,e)}No(){return 1===this.state||5===this.state||this.ko()}ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&null===this.Do&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,(()=>this.$o())))}Bo(t){this.Lo(),this.stream.send(t)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(t,e){this.Lo(),this.qo(),this.xo.cancel(),this.So++,4!==t?this.xo.reset():e&&e.code===Al.RESOURCE_EXHAUSTED?(_l(e.toString()),_l("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):e&&e.code===Al.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Uo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(e)}Uo(){}auth(){this.state=1;const t=this.Ko(this.So),e=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.So===e&&this.Go(t,n)}),(e=>{t((()=>{const t=new Il(Al.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Qo(t)}))}))}Go(t,e){const n=this.Ko(this.So);this.stream=this.jo(t,e),this.stream.Yr((()=>{n((()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,(()=>(this.ko()&&(this.state=3),Promise.resolve()))),this.listener.Yr())))})),this.stream.Zr((t=>{n((()=>this.Qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Oo(){this.state=5,this.xo.Ro((async()=>{this.state=0,this.start()}))}Qo(t){return vl("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Ko(t){return e=>{this.Hs.enqueueAndForget((()=>this.So===t?e():(vl("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class mp extends fp{constructor(t,e,n,i,s,r){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,r),this.yt=s}jo(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.xo.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:Tl()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],r=function(t,e){return t.wt?(El(void 0===e||"string"==typeof e),dc.fromBase64String(e||"")):(El(void 0===e||e instanceof Uint8Array),dc.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?Al.UNKNOWN:vh(t.code);return new Il(e,t.message||"")}(o);n=new Ph(i,s,r,a||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Zh(t,i.document.name),r=Qh(i.document.updateTime),o=i.document.createTime?Qh(i.document.createTime):Bl.min(),a=new uu({mapValue:{fields:i.document.fields}}),l=du.newFoundDocument(s,r,o,a),c=i.targetIds||[],u=i.removedTargetIds||[];n=new Mh(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Zh(t,i.document),r=i.readTime?Qh(i.readTime):Bl.min(),o=du.newNoDocument(s,r),a=i.removedTargetIds||[];n=new Mh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Zh(t,i.document),r=i.removedTargetIds||[];n=new Mh([],r,s,null)}else{if(!("filter"in e))return Tl();{e.filter;const t=e.filter;t.targetId;const i=t.count||0,s=new fh(i),r=t.targetId;n=new Oh(r,s)}}return n}(this.yt,t),n=function(t){if(!("targetChange"in t))return Bl.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Bl.min():e.readTime?Qh(e.readTime):Bl.min()}(t);return this.listener.Wo(e,n)}zo(t){const e={};e.database=nd(this.yt),e.addTarget=function(t,e){let n;const i=e.target;return n=yu(i)?{documents:od(t,i)}:{query:ad(t,i)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Gh(t,e.resumeToken):e.snapshotVersion.compareTo(Bl.min())>0&&(n.readTime=Wh(t,e.snapshotVersion.toTimestamp())),n}(this.yt,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Tl()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.yt,t);n&&(e.labels=n),this.Bo(e)}Ho(t){const e={};e.database=nd(this.yt),e.removeTarget=t,this.Bo(e)}}class gp extends fp{constructor(t,e,n,i,s,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,r),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(t,e){return this.connection.wo("Write",t,e)}onMessage(t){if(El(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Jo){this.xo.reset();const e=function(t,e){return t&&t.length>0?(El(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Qh(t.updateTime):Qh(e);return n.isEqual(Bl.min())&&(n=Qh(e)),new Ju(n,t.transformResults||[])}(t,e)))):[]}(t.writeResults,t.commitTime),n=Qh(t.commitTime);return this.listener.Zo(n,e)}return El(!t.writeResults||0===t.writeResults.length),this.Jo=!0,this.listener.tu()}eu(){const t={};t.database=nd(this.yt),this.Bo(t)}Xo(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>rd(this.yt,t)))};this.Bo(e)}}
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
 */class yp extends class{}{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.yt=i,this.nu=!1}su(){if(this.nu)throw new Il(Al.FAILED_PRECONDITION,"The client has already been terminated.")}ao(t,e,n){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.ao(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Al.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Il(Al.UNKNOWN,t.toString())}))}_o(t,e,n,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,r])=>this.connection._o(t,e,n,s,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Al.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Il(Al.UNKNOWN,t.toString())}))}terminate(){this.nu=!0}}class vp{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){0===this.iu&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve()))))}hu(t){"Online"===this.state?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.cu("Offline")))}set(t){this.lu(),this.iu=0,"Online"===t&&(this.ou=!1),this.cu(t)}cu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}au(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(_l(e),this.ou=!1):vl("OnlineStateTracker",e)}lu(){null!==this.ru&&(this.ru.cancel(),this.ru=null)}}
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
 */class _p{constructor(t,e,n,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur((t=>{n.enqueueAndForget((async()=>{Cp(this)&&(vl("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=kl(t);e._u.add(4),await bp(e),e.gu.set("Unknown"),e._u.delete(4),await wp(e)}(this))}))})),this.gu=new vp(n,i)}}async function wp(t){if(Cp(t))for(const e of t.wu)await e(!0)}async function bp(t){for(const e of t.wu)await e(!1)}function Tp(t,e){const n=kl(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),xp(n)?Ip(n):Wp(n).ko()&&kp(n,e))}function Ep(t,e){const n=kl(t),i=Wp(n);n.du.delete(e),i.ko()&&Ap(n,e),0===n.du.size&&(i.ko()?i.Fo():Cp(n)&&n.gu.set("Unknown"))}function kp(t,e){t.yu.Ot(e.targetId),Wp(t).zo(e)}function Ap(t,e){t.yu.Ot(e),Wp(t).Ho(e)}function Ip(t){t.yu=new Fh({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Wp(t).start(),t.gu.uu()}function xp(t){return Cp(t)&&!Wp(t).No()&&t.du.size>0}function Cp(t){return 0===kl(t)._u.size}function Sp(t){t.yu=void 0}async function qp(t){t.du.forEach(((e,n)=>{kp(t,e)}))}async function Np(t,e){Sp(t),xp(t)?(t.gu.hu(e),Ip(t)):t.gu.set("Unknown")}async function Dp(t,e,n){if(t.gu.set("Online"),e instanceof Ph&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const i of e.targetIds)t.du.has(i)&&(await t.remoteSyncer.rejectListen(i,n),t.du.delete(i),t.yu.removeTarget(i))}(t,e)}catch(n){vl("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Rp(t,n)}else if(e instanceof Mh?t.yu.Kt(e):e instanceof Oh?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(Bl.min()))try{const e=await Xd(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.yu.Zt(e);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const s=t.du.get(i);s&&t.du.set(i,s.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.du.get(e);if(!n)return;t.du.set(e,n.withResumeToken(dc.EMPTY_BYTE_STRING,n.snapshotVersion)),Ap(t,e);const i=new kd(n.target,e,1,n.sequenceNumber);kp(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){vl("RemoteStore","Failed to raise snapshot:",e),await Rp(t,e)}}async function Rp(t,e,n){if(!nc(e))throw e;t._u.add(1),await bp(t),t.gu.set("Offline"),n||(n=()=>Xd(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{vl("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await wp(t)}))}function Lp(t,e){return e().catch((n=>Rp(t,n,e)))}async function Mp(t){const e=kl(t),n=Gp(e);let i=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;Op(e);)try{const t=await Zd(e.localStore,i);if(null===t){0===e.fu.length&&n.Fo();break}i=t.batchId,Pp(e,t)}catch(t){await Rp(e,t)}Up(e)&&Fp(e)}function Op(t){return Cp(t)&&t.fu.length<10}function Pp(t,e){t.fu.push(e);const n=Gp(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function Up(t){return Cp(t)&&!Gp(t).No()&&t.fu.length>0}function Fp(t){Gp(t).start()}async function Vp(t){Gp(t).eu()}async function Bp(t){const e=Gp(t);for(const n of t.fu)e.Xo(n.mutations)}async function jp(t,e,n){const i=t.fu.shift(),s=Td.from(i,e,n);await Lp(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Mp(t)}async function zp(t,e){e&&Gp(t).Yo&&await async function(t,e){if(yh(n=e.code)&&n!==Al.ABORTED){const n=t.fu.shift();Gp(t).Mo(),await Lp(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Mp(t)}var n}(t,e),Up(t)&&Fp(t)}async function Hp(t,e){const n=kl(t);n.asyncQueue.verifyOperationInProgress(),vl("RemoteStore","RemoteStore received new credentials");const i=Cp(n);n._u.add(3),await bp(n),i&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await wp(n)}async function $p(t,e){const n=kl(t);e?(n._u.delete(2),await wp(n)):e||(n._u.add(2),await bp(n),n.gu.set("Unknown"))}function Wp(t){return t.pu||(t.pu=function(t,e,n){const i=kl(t);return i.su(),new mp(e,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,n)}(t.datastore,t.asyncQueue,{Yr:qp.bind(null,t),Zr:Np.bind(null,t),Wo:Dp.bind(null,t)}),t.wu.push((async e=>{e?(t.pu.Mo(),xp(t)?Ip(t):t.gu.set("Unknown")):(await t.pu.stop(),Sp(t))}))),t.pu}function Gp(t){return t.Iu||(t.Iu=function(t,e,n){const i=kl(t);return i.su(),new gp(e,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,n)}(t.datastore,t.asyncQueue,{Yr:Vp.bind(null,t),Zr:zp.bind(null,t),tu:Bp.bind(null,t),Zo:jp.bind(null,t)}),t.wu.push((async e=>{e?(t.Iu.Mo(),await Mp(t)):(await t.Iu.stop(),t.fu.length>0&&(vl("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))}))),t.Iu
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
 */}class Kp{constructor(t,e,n,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new xl,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,i,s){const r=Date.now()+n,o=new Kp(t,e,r,i,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Il(Al.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qp(t,e){if(_l("AsyncQueue",`${e}: ${t}`),nc(t))return new Il(Al.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class Yp{constructor(t){this.comparator=t?(e,n)=>t(e,n)||Wl.comparator(e.key,n.key):(t,e)=>Wl.comparator(t.key,e.key),this.keyedMap=Eh(),this.sortedSet=new su(this.comparator)}static emptySet(t){return new Yp(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Yp))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(!t.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Yp;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
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
 */class Xp{constructor(){this.Tu=new su(Wl.comparator)}track(t){const e=t.doc.key,n=this.Tu.get(e);n?0!==t.type&&3===n.type?this.Tu=this.Tu.insert(e,t):3===t.type&&1!==n.type?this.Tu=this.Tu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Tu=this.Tu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Tu=this.Tu.remove(e):1===t.type&&2===n.type?this.Tu=this.Tu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Tu=this.Tu.insert(e,{type:2,doc:t.doc}):Tl():this.Tu=this.Tu.insert(e,t)}Eu(){const t=[];return this.Tu.inorderTraversal(((e,n)=>{t.push(n)})),t}}class Jp{constructor(t,e,n,i,s,r,o,a,l){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=s,this.fromCache=r,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=l}static fromInitialDocuments(t,e,n,i,s){const r=[];return e.forEach((t=>{r.push({type:0,doc:t})})),new Jp(t,e,Yp.emptySet(e),r,n,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Su(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
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
 */class Zp{constructor(){this.Au=void 0,this.listeners=[]}}class tf{constructor(){this.queries=new _h((t=>qu(t)),Su),this.onlineState="Unknown",this.Ru=new Set}}async function ef(t,e){const n=kl(t),i=e.query;let s=!1,r=n.queries.get(i);if(r||(s=!0,r=new Zp),s)try{r.Au=await n.onListen(i)}catch(t){const n=Qp(t,`Initialization of query '${Nu(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,r),r.listeners.push(e),e.bu(n.onlineState),r.Au&&e.Pu(r.Au)&&of(n)}async function nf(t,e){const n=kl(t),i=e.query;let s=!1;const r=n.queries.get(i);if(r){const t=r.listeners.indexOf(e);t>=0&&(r.listeners.splice(t,1),s=0===r.listeners.length)}if(s)return n.queries.delete(i),n.onUnlisten(i)}function sf(t,e){const n=kl(t);let i=!1;for(const t of e){const e=t.query,s=n.queries.get(e);if(s){for(const e of s.listeners)e.Pu(t)&&(i=!0);s.Au=t}}i&&of(n)}function rf(t,e,n){const i=kl(t),s=i.queries.get(e);if(s)for(const t of s.listeners)t.onError(n);i.queries.delete(e)}function of(t){t.Ru.forEach((t=>{t.next()}))}class af{constructor(t,e,n){this.query=t,this.vu=e,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=n||{}}Pu(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Jp(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Vu?this.Du(t)&&(this.vu.next(t),e=!0):this.Cu(t,this.onlineState)&&(this.xu(t),e=!0),this.Su=t,e}onError(t){this.vu.error(t)}bu(t){this.onlineState=t;let e=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,t)&&(this.xu(this.Su),e=!0),e}Cu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.Nu||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Du(t){if(t.docChanges.length>0)return!0;const e=this.Su&&this.Su.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}xu(t){t=Jp.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Vu=!0,this.vu.next(t)}}
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
class lf{constructor(t){this.key=t}}class cf{constructor(t){this.key=t}}class uf{constructor(t,e){this.query=t,this.qu=e,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=qh(),this.mutatedKeys=qh(),this.Gu=Lu(t),this.Qu=new Yp(this.Gu)}get ju(){return this.qu}Wu(t,e){const n=e?e.zu:new Xp,i=e?e.Qu:this.Qu;let s=e?e.mutatedKeys:this.mutatedKeys,r=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,l="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((t,e)=>{const c=i.get(t),u=Du(this.query,e)?e:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let p=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),p=!0):this.Hu(c,u)||(n.track({type:2,doc:u}),p=!0,(a&&this.Gu(u,a)>0||l&&this.Gu(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),p=!0):c&&!u&&(n.track({type:1,doc:c}),p=!0,(a||l)&&(o=!0)),p&&(u?(r=r.add(u),s=d?s.add(t):s.delete(t)):(r=r.delete(t),s=s.delete(t)))})),null!==this.query.limit)for(;r.size>this.query.limit;){const t="F"===this.query.limitType?r.last():r.first();r=r.delete(t.key),s=s.delete(t.key),n.track({type:1,doc:t})}return{Qu:r,zu:n,$i:o,mutatedKeys:s}}Hu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const i=this.Qu;this.Qu=t.Qu,this.mutatedKeys=t.mutatedKeys;const s=t.zu.Eu();s.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Tl()}};return n(t)-n(e)}(t.type,e.type)||this.Gu(t.doc,e.doc))),this.Ju(n);const r=e?this.Yu():[],o=0===this.Ku.size&&this.current?1:0,a=o!==this.Uu;return this.Uu=o,0!==s.length||a?{snapshot:new Jp(this.query,t.Qu,i,s,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Xu:r}:{Xu:r}}bu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Xp,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(t){return!this.qu.has(t)&&!!this.Qu.has(t)&&!this.Qu.get(t).hasLocalMutations}Ju(t){t&&(t.addedDocuments.forEach((t=>this.qu=this.qu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.qu=this.qu.delete(t))),this.current=t.current)}Yu(){if(!this.current)return[];const t=this.Ku;this.Ku=qh(),this.Qu.forEach((t=>{this.Zu(t.key)&&(this.Ku=this.Ku.add(t.key))}));const e=[];return t.forEach((t=>{this.Ku.has(t)||e.push(new cf(t))})),this.Ku.forEach((n=>{t.has(n)||e.push(new lf(n))})),e}tc(t){this.qu=t.Hi,this.Ku=qh();const e=this.Wu(t.documents);return this.applyChanges(e,!0)}ec(){return Jp.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,0===this.Uu,this.hasCachedResults)}}class hf{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class df{constructor(t){this.key=t,this.nc=!1}}class pf{constructor(t,e,n,i,s,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.sc={},this.ic=new _h((t=>qu(t)),Su),this.rc=new Map,this.oc=new Set,this.uc=new su(Wl.comparator),this.cc=new Map,this.ac=new Pd,this.hc={},this.lc=new Map,this.fc=Nd.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return!0===this.dc}}async function ff(t,e){const n=Df(t);let i,s;const r=n.ic.get(e);if(r)i=r.targetId,n.sharedClientState.addLocalQueryTarget(i),s=r.view.ec();else{const t=await tp(n.localStore,Iu(e));n.isPrimaryClient&&Tp(n.remoteStore,t);const r=n.sharedClientState.addLocalQueryTarget(t.targetId);i=t.targetId,s=await mf(n,e,i,"current"===r,t.resumeToken)}return s}async function mf(t,e,n,i,s){t._c=(e,n,i)=>async function(t,e,n,i){let s=e.view.Wu(n);s.$i&&(s=await np(t.localStore,e.query,!1).then((({documents:t})=>e.view.Wu(t,s))));const r=i&&i.targetChanges.get(e.targetId),o=e.view.applyChanges(s,t.isPrimaryClient,r);return If(t,e.targetId,o.Xu),o.snapshot}(t,e,n,i);const r=await np(t.localStore,e,!0),o=new uf(e,r.Hi),a=o.Wu(r.documents),l=Lh.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==t.onlineState,s),c=o.applyChanges(a,t.isPrimaryClient,l);If(t,n,c.Xu);const u=new hf(e,n,o);return t.ic.set(e,u),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),c.snapshot}async function gf(t,e){const n=kl(t),i=n.ic.get(e),s=n.rc.get(i.targetId);if(s.length>1)return n.rc.set(i.targetId,s.filter((t=>!Su(t,e)))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await ep(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Ep(n.remoteStore,i.targetId),kf(n,i.targetId)})).catch(tc)):(kf(n,i.targetId),await ep(n.localStore,i.targetId,!0))}async function yf(t,e){const n=kl(t);try{const t=await function(t,e){const n=kl(t),i=e.snapshotVersion;let s=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const r=n.Gi.newChangeBuffer({trackRemovals:!0});s=n.qi;const o=[];e.targetChanges.forEach(((r,a)=>{const l=s.get(a);if(!l)return;o.push(n.Cs.removeMatchingKeys(t,r.removedDocuments,a).next((()=>n.Cs.addMatchingKeys(t,r.addedDocuments,a))));let c=l.withSequenceNumber(t.currentSequenceNumber);e.targetMismatches.has(a)?c=c.withResumeToken(dc.EMPTY_BYTE_STRING,Bl.min()).withLastLimboFreeSnapshotVersion(Bl.min()):r.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(r.resumeToken,i)),s=s.insert(a,c),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(l,c,r)&&o.push(n.Cs.updateTargetData(t,c))}));let a=bh(),l=qh();if(e.documentUpdates.forEach((i=>{e.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,i))})),o.push(Jd(t,r,e.documentUpdates).next((t=>{a=t.Wi,l=t.zi}))),!i.isEqual(Bl.min())){const e=n.Cs.getLastRemoteSnapshotVersion(t).next((e=>n.Cs.setTargetsMetadata(t,t.currentSequenceNumber,i)));o.push(e)}return ec.waitFor(o).next((()=>r.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,l))).next((()=>a))})).then((t=>(n.qi=s,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const i=n.cc.get(e);i&&(El(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?i.nc=!0:t.modifiedDocuments.size>0?El(i.nc):t.removedDocuments.size>0&&(El(i.nc),i.nc=!1))})),await Sf(n,t,e)}catch(t){await tc(t)}}function vf(t,e,n){const i=kl(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.ic.forEach(((n,i)=>{const s=i.view.bu(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=kl(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.bu(e)&&(i=!0)})),i&&of(n)}(i.eventManager,e),t.length&&i.sc.Wo(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function _f(t,e,n){const i=kl(t);i.sharedClientState.updateQueryState(e,"rejected",n);const s=i.cc.get(e),r=s&&s.key;if(r){let t=new su(Wl.comparator);t=t.insert(r,du.newNoDocument(r,Bl.min()));const n=qh().add(r),s=new Rh(Bl.min(),new Map,new au(Ul),t,n);await yf(i,s),i.uc=i.uc.remove(r),i.cc.delete(e),Cf(i)}else await ep(i.localStore,e,!1).then((()=>kf(i,e,n))).catch(tc)}async function wf(t,e){const n=kl(t),i=e.batch.batchId;try{const t=await function(t,e){const n=kl(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const s=n.batch,r=s.keys();let o=ec.resolve();return r.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);El(null!==r),e.version.compareTo(r)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=qh();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(n.localStore,e);Ef(n,i,null),Tf(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Sf(n,t)}catch(t){await tc(t)}}async function bf(t,e,n){const i=kl(t);try{const t=await function(t,e){const n=kl(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(El(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);Ef(i,e,n),Tf(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Sf(i,t)}catch(n){await tc(n)}}function Tf(t,e){(t.lc.get(e)||[]).forEach((t=>{t.resolve()})),t.lc.delete(e)}function Ef(t,e,n){const i=kl(t);let s=i.hc[i.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),i.hc[i.currentUser.toKey()]=s}}function kf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.rc.get(e))t.ic.delete(i),n&&t.sc.wc(i,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach((e=>{t.ac.containsKey(e)||Af(t,e)}))}function Af(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);null!==n&&(Ep(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),Cf(t))}function If(t,e,n){for(const i of n)i instanceof lf?(t.ac.addReference(i.key,e),xf(t,i)):i instanceof cf?(vl("SyncEngine","Document no longer in limbo: "+i.key),t.ac.removeReference(i.key,e),t.ac.containsKey(i.key)||Af(t,i.key)):Tl()}function xf(t,e){const n=e.key,i=n.path.canonicalString();t.uc.get(n)||t.oc.has(i)||(vl("SyncEngine","New document in limbo: "+n),t.oc.add(i),Cf(t))}function Cf(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new Wl(zl.fromString(e)),i=t.fc.next();t.cc.set(i,new df(n)),t.uc=t.uc.insert(n,i),Tp(t.remoteStore,new kd(Iu(wu(n.path)),i,2,ic.at))}}async function Sf(t,e,n){const i=kl(t),s=[],r=[],o=[];i.ic.isEmpty()||(i.ic.forEach(((t,a)=>{o.push(i._c(a,e,n).then((t=>{if((t||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){s.push(t);const e=Wd.Ci(a.targetId,t);r.push(e)}})))})),await Promise.all(o),i.sc.Wo(s),await async function(t,e){const n=kl(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>ec.forEach(e,(e=>ec.forEach(e.Si,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>ec.forEach(e.Di,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!nc(t))throw t;vl("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.qi.get(e),i=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(i);n.qi=n.qi.insert(e,s)}}}(i.localStore,r))}async function qf(t,e){const n=kl(t);if(!n.currentUser.isEqual(e)){vl("SyncEngine","User change. New user:",e.toKey());const t=await Yd(n.localStore,e);n.currentUser=e,function(t,e){t.lc.forEach((t=>{t.forEach((t=>{t.reject(new Il(Al.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.lc.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Sf(n,t.ji)}}function Nf(t,e){const n=kl(t),i=n.cc.get(e);if(i&&i.nc)return qh().add(i.key);{let t=qh();const i=n.rc.get(e);if(!i)return t;for(const e of i){const i=n.ic.get(e);t=t.unionWith(i.view.ju)}return t}}function Df(t){const e=kl(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Nf.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_f.bind(null,e),e.sc.Wo=sf.bind(null,e.eventManager),e.sc.wc=rf.bind(null,e.eventManager),e}function Rf(t){const e=kl(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wf.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bf.bind(null,e),e}class Lf{constructor(){this.synchronizeTabs=!1}async initialize(t){this.yt=dp(t.databaseInfo.databaseId),this.sharedClientState=this.gc(t),this.persistence=this.yc(t),await this.persistence.start(),this.localStore=this.Ic(t),this.gcScheduler=this.Tc(t,this.localStore),this.indexBackfillerScheduler=this.Ec(t,this.localStore)}Tc(t,e){return null}Ec(t,e){return null}Ic(t){return Qd(this.persistence,new Gd,t.initialUser,this.yt)}yc(t){return new zd($d.Bs,this.yt)}gc(t){return new rp}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Mf{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>vf(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=qf.bind(null,this.syncEngine),await $p(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new tf}createDatastore(t){const e=dp(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new up(i));var i;return function(t,e,n,i){return new yp(t,e,n,i)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){var e,n,i,s,r;return e=this.localStore,n=this.datastore,i=t.asyncQueue,s=t=>vf(this.syncEngine,t,0),r=ap.C()?new ap:new op,new _p(e,n,i,s,r)}createSyncEngine(t,e){return function(t,e,n,i,s,r,o){const a=new pf(t,e,n,i,s,r);return o&&(a.dc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=kl(t);vl("RemoteStore","RemoteStore shutting down."),e._u.add(5),await bp(e),e.mu.shutdown(),e.gu.set("Unknown")}(this.remoteStore)}}
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
 */function Of(t,e,n){if(!n)throw new Il(Al.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Pf(t){if(!Wl.isDocumentKey(t))throw new Il(Al.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Uf(t){if(Wl.isDocumentKey(t))throw new Il(Al.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ff(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Tl()}function Vf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Il(Al.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ff(t);throw new Il(Al.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Bf(t,e){if(e<=0)throw new Il(Al.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
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
 */const jf=new Map;class zf{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Il(Al.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Il(Al.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new Il(Al.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
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
 */class Hf{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Il(Al.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Il(Al.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zf(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Sl;switch(t.type){case"gapi":const e=t.client;return new Rl(e,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new Il(Al.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=jf.get(t);e&&(vl("ComponentProvider","Removing Datastore"),jf.delete(t),e.terminate())}(this),Promise.resolve()}}
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
class $f{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Gf(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new $f(this.firestore,t,this._key)}}class Wf{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Wf(this.firestore,t,this._query)}}class Gf extends Wf{constructor(t,e,n){super(t,e,wu(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new $f(this.firestore,null,new Wl(t))}withConverter(t){return new Gf(this.firestore,t,this._path)}}function Kf(t,e,...n){if(t=H(t),Of("collection","path",e),t instanceof Hf){const i=zl.fromString(e,...n);return Uf(i),new Gf(t,null,i)}{if(!(t instanceof $f||t instanceof Gf))throw new Il(Al.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(zl.fromString(e,...n));return Uf(i),new Gf(t.firestore,null,i)}}function Qf(t,e,...n){if(t=H(t),1===arguments.length&&(e=Pl.R()),Of("doc","path",e),t instanceof Hf){const i=zl.fromString(e,...n);return Pf(i),new $f(t,null,new Wl(i))}{if(!(t instanceof $f||t instanceof Gf))throw new Il(Al.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(zl.fromString(e,...n));return Pf(i),new $f(t.firestore,t instanceof Gf?t.converter:null,new Wl(i))}}
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
class Yf{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Rc(this.observer.next,t)}error(t){this.observer.error?this.Rc(this.observer.error,t):_l("Uncaught Error in snapshot listener:",t.toString())}bc(){this.muted=!0}Rc(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
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
class Xf{constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=fl.UNAUTHENTICATED,this.clientId=Pl.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{vl("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(vl("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Il(Al.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new xl;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Qp(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Jf(t,e){t.asyncQueue.verifyOperationInProgress(),vl("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await Yd(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function Zf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await tm(t);vl("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>Hp(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Hp(e.remoteStore,n))),t.onlineComponents=e}async function tm(t){return t.offlineComponents||(vl("FirestoreClient","Using default OfflineComponentProvider"),await Jf(t,new Lf)),t.offlineComponents}async function em(t){return t.onlineComponents||(vl("FirestoreClient","Using default OnlineComponentProvider"),await Zf(t,new Mf)),t.onlineComponents}function nm(t){return em(t).then((t=>t.syncEngine))}async function im(t){const e=await em(t),n=e.eventManager;return n.onListen=ff.bind(null,e.syncEngine),n.onUnlisten=gf.bind(null,e.syncEngine),n}function sm(t,e,n={}){const i=new xl;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,s){const r=new Yf({next:r=>{e.enqueueAndForget((()=>nf(t,o)));const a=r.docs.has(n);!a&&r.fromCache?s.reject(new Il(Al.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&r.fromCache&&i&&"server"===i.source?s.reject(new Il(Al.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(r)},error:t=>s.reject(t)}),o=new af(wu(n.path),r,{includeMetadataChanges:!0,Nu:!0});return ef(t,o)}(await im(t),t.asyncQueue,e,n,i))),i.promise}function rm(t,e,n={}){const i=new xl;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,i,s){const r=new Yf({next:n=>{e.enqueueAndForget((()=>nf(t,o))),n.fromCache&&"server"===i.source?s.reject(new Il(Al.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:t=>s.reject(t)}),o=new af(n,r,{includeMetadataChanges:!0,Nu:!0});return ef(t,o)}(await im(t),t.asyncQueue,e,n,i))),i.promise}class om{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new pp(this,"async_queue_retry"),this.Wc=()=>{const t=hp();t&&vl("AsyncQueue","Visibility state changed to "+t.visibilityState),this.xo.Po()};const t=hp();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.zc(),this.Hc(t)}enterRestrictedMode(t){if(!this.qc){this.qc=!0,this.Qc=t||!1;const e=hp();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Wc)}}enqueue(t){if(this.zc(),this.qc)return new Promise((()=>{}));const e=new xl;return this.Hc((()=>this.qc&&this.Qc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Lc.push(t),this.Jc())))}async Jc(){if(0!==this.Lc.length){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(t){if(!nc(t))throw t;vl("AsyncQueue","Operation failed with retryable error: "+t)}this.Lc.length>0&&this.xo.Ro((()=>this.Jc()))}}Hc(t){const e=this.Bc.then((()=>(this.Gc=!0,t().catch((t=>{this.Kc=t,this.Gc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t);throw _l("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Gc=!1,t))))));return this.Bc=e,e}enqueueAfterDelay(t,e,n){this.zc(),this.jc.indexOf(t)>-1&&(e=0);const i=Kp.createAndSchedule(this,t,e,n,(t=>this.Yc(t)));return this.Uc.push(i),i}zc(){this.Kc&&Tl()}verifyOperationInProgress(){}async Xc(){let t;do{t=this.Bc,await t}while(t!==this.Bc)}Zc(t){for(const e of this.Uc)if(e.timerId===t)return!0;return!1}ta(t){return this.Xc().then((()=>{this.Uc.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.Uc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Xc()}))}ea(t){this.jc.push(t)}Yc(t){const e=this.Uc.indexOf(t);this.Uc.splice(e,1)}}function am(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of["next","error","complete"])if(t in n&&"function"==typeof n[t])return!0;return!1}(t)}class lm extends Hf{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new om,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hm(this),this._firestoreClient.terminate()}}function cm(t,e){const n="string"==typeof t?t:e||"(default)",i=Dt("object"==typeof t?t:Pt(),"firestore").getImmediate({identifier:n});if(!i._initialized){const t=E("firestore");t&&function(t,e,n,i={}){var s;const r=(t=Vf(t,Hf))._getSettings();if("firestore.googleapis.com"!==r.host&&r.host!==e&&wl("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),i.mockUserToken){let e,n;if("string"==typeof i.mockUserToken)e=i.mockUserToken,n=fl.MOCK_USER;else{e=x(i.mockUserToken,null===(s=t._app)||void 0===s?void 0:s.options.projectId);const r=i.mockUserToken.sub||i.mockUserToken.user_id;if(!r)throw new Il(Al.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new fl(r)}t._authCredentials=new ql(new Cl(e,n))}}(i,...t)}return i}function um(t){return t._firestoreClient||hm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function hm(t){var e;const n=t._freezeSettings(),i=function(t,e,n,i){return new sc(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Xf(t._authCredentials,t._appCheckCredentials,t._queue,i)}
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
class dm{constructor(t){this._byteString=t}static fromBase64String(t){try{return new dm(dc.fromBase64String(t))}catch(t){throw new Il(Al.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new dm(dc.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class pm{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Il(Al.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $l(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class fm{constructor(t){this._methodName=t}}
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
 */class mm{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Il(Al.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Il(Al.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Ul(this._lat,t._lat)||Ul(this._long,t._long)}}
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
 */const gm=/^__.*__$/;class ym{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new lh(t,this.data,this.fieldMask,e,this.fieldTransforms):new ah(t,this.data,e,this.fieldTransforms)}}class vm{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new lh(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function _m(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Tl()}}class wm{constructor(t,e,n,i,s,r){this.settings=t,this.databaseId=e,this.yt=n,this.ignoreUndefinedProperties=i,void 0===s&&this.na(),this.fieldTransforms=s||[],this.fieldMask=r||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(t){return new wm(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ia({path:n,oa:!1});return i.ua(t),i}ca(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ia({path:n,oa:!1});return i.na(),i}aa(t){return this.ia({path:void 0,oa:!0})}ha(t){return Um(t,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}na(){if(this.path)for(let t=0;t<this.path.length;t++)this.ua(this.path.get(t))}ua(t){if(0===t.length)throw this.ha("Document fields must not be empty");if(_m(this.sa)&&gm.test(t))throw this.ha('Document fields cannot begin and end with "__"')}}class bm{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.yt=n||dp(t)}da(t,e,n,i=!1){return new wm({sa:t,methodName:e,fa:n,path:$l.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function Tm(t){const e=t._freezeSettings(),n=dp(t._databaseId);return new bm(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Em(t,e,n,i,s,r={}){const o=t.da(r.merge||r.mergeFields?2:0,e,n,s);Lm("Data must be an object, but it was:",o,i);const a=Dm(i,o);let l,c;if(r.merge)l=new cu(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const i of r.mergeFields){const s=Mm(e,i,n);if(!o.contains(s))throw new Il(Al.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Fm(t,s)||t.push(s)}l=new cu(t),c=o.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,c=o.fieldTransforms;return new ym(new uu(a),l,c)}class km extends fm{_toFieldTransform(t){if(2!==t.sa)throw 1===t.sa?t.ha(`${this._methodName}() can only appear at the top level of your update data`):t.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof km}}function Am(t,e,n){return new wm({sa:3,fa:e.settings.fa,methodName:t._methodName,oa:n},e.databaseId,e.yt,e.ignoreUndefinedProperties)}class Im extends fm{_toFieldTransform(t){return new Xu(t.path,new zu)}isEqual(t){return t instanceof Im}}class xm extends fm{constructor(t,e){super(t),this._a=e}_toFieldTransform(t){const e=Am(this,t,!0),n=this._a.map((t=>Nm(t,e))),i=new Hu(n);return new Xu(t.path,i)}isEqual(t){return this===t}}function Cm(t,e,n,i){const s=t.da(1,e,n);Lm("Data must be an object, but it was:",s,i);const r=[],o=uu.empty();ac(i,((t,i)=>{const a=Pm(e,t,n);i=H(i);const l=s.ca(a);if(i instanceof km)r.push(a);else{const t=Nm(i,l);null!=t&&(r.push(a),o.set(a,t))}}));const a=new cu(r);return new vm(o,a,s.fieldTransforms)}function Sm(t,e,n,i,s,r){const o=t.da(1,e,n),a=[Mm(e,i,n)],l=[s];if(r.length%2!=0)throw new Il(Al.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<r.length;t+=2)a.push(Mm(e,r[t])),l.push(r[t+1]);const c=[],u=uu.empty();for(let t=a.length-1;t>=0;--t)if(!Fm(c,a[t])){const e=a[t];let n=l[t];n=H(n);const i=o.ca(e);if(n instanceof km)c.push(e);else{const t=Nm(n,i);null!=t&&(c.push(e),u.set(e,t))}}const h=new cu(c);return new vm(u,h,o.fieldTransforms)}function qm(t,e,n,i=!1){return Nm(n,t.da(i?4:3,e))}function Nm(t,e){if(Rm(t=H(t)))return Lm("Unsupported field value:",e,t),Dm(t,e);if(t instanceof fm)return function(t,e){if(!_m(e.sa))throw e.ha(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.ha(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&4!==e.sa)throw e.ha("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const s of t){let t=Nm(s,e.aa(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=H(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Uu(e.yt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Vl.fromDate(t);return{timestampValue:Wh(e.yt,n)}}if(t instanceof Vl){const n=new Vl(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Wh(e.yt,n)}}if(t instanceof mm)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof dm)return{bytesValue:Gh(e.yt,t._byteString)};if(t instanceof $f){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.ha(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Yh(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.ha(`Unsupported field value: ${Ff(t)}`)}(t,e)}function Dm(t,e){const n={};return lc(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ac(t,((t,i)=>{const s=Nm(i,e.ra(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function Rm(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Vl||t instanceof mm||t instanceof dm||t instanceof $f||t instanceof fm)}function Lm(t,e,n){if(!Rm(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const i=Ff(n);throw"an object"===i?e.ha(t+" a custom object"):e.ha(t+" "+i)}}function Mm(t,e,n){if((e=H(e))instanceof pm)return e._internalPath;if("string"==typeof e)return Pm(t,e);throw Um("Field path arguments must be of type string or ",t,!1,void 0,n)}const Om=new RegExp("[~\\*/\\[\\]]");function Pm(t,e,n){if(e.search(Om)>=0)throw Um(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new pm(...e.split("."))._internalPath}catch(i){throw Um(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Um(t,e,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new Il(Al.INVALID_ARGUMENT,a+t+l)}function Fm(t,e){return t.some((t=>t.isEqual(e)))}
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
 */class Vm{constructor(t,e,n,i,s){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new $f(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Bm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(jm("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Bm extends Vm{data(){return super.data()}}function jm(t,e){return"string"==typeof e?Pm(t,e):e instanceof pm?e._internalPath:e._delegate._internalPath}
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
 */function zm(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new Il(Al.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hm{}class $m extends Hm{}function Wm(t,e,...n){let i=[];e instanceof Hm&&i.push(e),i=i.concat(n),function(t){const e=t.filter((t=>t instanceof Qm)).length,n=t.filter((t=>t instanceof Gm)).length;if(e>1||e>0&&n>0)throw new Il(Al.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const e of i)t=e._apply(t);return t}class Gm extends $m{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Gm(t,e,n)}_apply(t){const e=this._parse(t);return ng(t._query,e),new Wf(t.firestore,t.converter,xu(t._query,e))}_parse(t){const e=Tm(t.firestore),n=function(t,e,n,i,s,r,o){let a;if(s.isKeyField()){if("array-contains"===r||"array-contains-any"===r)throw new Il(Al.INVALID_ARGUMENT,`Invalid Query. You can't perform '${r}' queries on documentId().`);if("in"===r||"not-in"===r){eg(o,r);const e=[];for(const n of o)e.push(tg(i,t,n));a={arrayValue:{values:e}}}else a=tg(i,t,o)}else"in"!==r&&"not-in"!==r&&"array-contains-any"!==r||eg(o,r),a=qm(n,"where",o,"in"===r||"not-in"===r);return Vc.create(s,r,a)}(t._query,0,e,t.firestore._databaseId,this._field,this._op,this._value);return n}}function Km(t,e,n){const i=e,s=jm("where",t);return Gm._create(s,i,n)}class Qm extends Hm{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Qm(t,e)}_parse(t){const e=this._queryConstraints.map((e=>e._parse(t))).filter((t=>t.getFilters().length>0));return 1===e.length?e[0]:Bc.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return 0===e.getFilters().length?t:(function(t,e){let n=t;const i=e.getFlattenedFilters();for(const t of i)ng(n,t),n=xu(n,t)}(t._query,e),new Wf(t.firestore,t.converter,xu(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class Ym extends $m{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Ym(t,e)}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new Il(Al.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new Il(Al.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const i=new nu(e,n);return function(t,e){if(null===Tu(t)){const n=Eu(t);null!==n&&ig(t,n,e.field)}}(t,i),i}(t._query,this._field,this._direction);return new Wf(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new vu(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function Xm(t,e="asc"){const n=e,i=jm("orderBy",t);return Ym._create(i,n)}class Jm extends $m{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new Jm(t,e,n)}_apply(t){return new Wf(t.firestore,t.converter,Cu(t._query,this._limit,this._limitType))}}function Zm(t){return Bf("limit",t),Jm._create("limit",t,"F")}function tg(t,e,n){if("string"==typeof(n=H(n))){if(""===n)throw new Il(Al.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ku(e)&&-1!==n.indexOf("/"))throw new Il(Al.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(zl.fromString(n));if(!Wl.isDocumentKey(i))throw new Il(Al.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Cc(t,new Wl(i))}if(n instanceof $f)return Cc(t,n._key);throw new Il(Al.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ff(n)}.`)}function eg(t,e){if(!Array.isArray(t)||0===t.length)throw new Il(Al.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new Il(Al.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function ng(t,e){if(e.isInequality()){const n=Eu(t),i=e.field;if(null!==n&&!n.isEqual(i))throw new Il(Al.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${i.toString()}'`);const s=Tu(t);null!==s&&ig(t,i,s)}const n=function(t,e){for(const n of t)for(const t of n.getFlattenedFilters())if(e.indexOf(t.op)>=0)return t.op;return null}(t.filters,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new Il(Al.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Il(Al.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function ig(t,e,n){if(!n.isEqual(e))throw new Il(Al.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class sg{convertValue(t,e="none"){switch(bc(t)){case 0:return null;case 1:return t.booleanValue;case 2:return mc(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(gc(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw Tl()}}convertObject(t,e){const n={};return ac(t.fields,((t,i)=>{n[t]=this.convertValue(i,e)})),n}convertGeoPoint(t){return new mm(mc(t.latitude),mc(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=vc(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(_c(t));default:return null}}convertTimestamp(t){const e=fc(t);return new Vl(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=zl.fromString(t);El(yd(n));const i=new rc(n.get(1),n.get(3)),s=new Wl(n.popFirst(5));return i.isEqual(e)||_l(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}
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
class og{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ag extends Vm{constructor(t,e,n,i,s,r){super(t,e,n,i,r),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new lg(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(jm("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class lg extends ag{data(t={}){return super.data(t)}}class cg{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new og(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new lg(this._firestore,this._userDataWriter,n.key,n,new og(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new Il(Al.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const i=new lg(t._firestore,t._userDataWriter,n.doc.key,n.doc,new og(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const i=new lg(t._firestore,t._userDataWriter,e.doc.key,e.doc,new og(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let s=-1,r=-1;return 0!==e.type&&(s=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),r=n.indexOf(e.doc.key)),{type:ug(e.type),doc:i,oldIndex:s,newIndex:r}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function ug(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Tl()}}
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
function hg(t){t=Vf(t,$f);const e=Vf(t.firestore,lm);return sm(um(e),t._key).then((n=>wg(e,t,n)))}class dg extends sg{constructor(t){super(),this.firestore=t}convertBytes(t){return new dm(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new $f(this.firestore,null,e)}}function pg(t){t=Vf(t,Wf);const e=Vf(t.firestore,lm),n=um(e),i=new dg(e);return zm(t._query),rm(n,t._query).then((n=>new cg(e,i,t,n)))}function fg(t,e,n){t=Vf(t,$f);const i=Vf(t.firestore,lm),s=rg(t.converter,e,n);return _g(i,[Em(Tm(i),"setDoc",t._key,s,null!==t.converter,n).toMutation(t._key,Zu.none())])}function mg(t,e,n,...i){t=Vf(t,$f);const s=Vf(t.firestore,lm),r=Tm(s);let o;return o="string"==typeof(e=H(e))||e instanceof pm?Sm(r,"updateDoc",t._key,e,n,i):Cm(r,"updateDoc",t._key,e),_g(s,[o.toMutation(t._key,Zu.exists(!0))])}function gg(t){return _g(Vf(t.firestore,lm),[new dh(t._key,Zu.none())])}function yg(t,e){const n=Vf(t.firestore,lm),i=Qf(t),s=rg(t.converter,e);return _g(n,[Em(Tm(t.firestore),"addDoc",i._key,s,null!==t.converter,{}).toMutation(i._key,Zu.exists(!1))]).then((()=>i))}function vg(t,...e){var n,i,s;t=H(t);let r={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||am(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(am(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(i=t.error)||void 0===i?void 0:i.bind(t),e[o+2]=null===(s=t.complete)||void 0===s?void 0:s.bind(t)}let l,c,u;if(t instanceof $f)c=Vf(t.firestore,lm),u=wu(t._key.path),l={next:n=>{e[o]&&e[o](wg(c,t,n))},error:e[o+1],complete:e[o+2]};else{const n=Vf(t,Wf);c=Vf(n.firestore,lm),u=n._query;const i=new dg(c);l={next:t=>{e[o]&&e[o](new cg(c,i,n,t))},error:e[o+1],complete:e[o+2]},zm(t._query)}return function(t,e,n,i){const s=new Yf(i),r=new af(e,s,n);return t.asyncQueue.enqueueAndForget((async()=>ef(await im(t),r))),()=>{s.bc(),t.asyncQueue.enqueueAndForget((async()=>nf(await im(t),r)))}}(um(c),u,a,l)}function _g(t,e){return function(t,e){const n=new xl;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const i=Rf(t);try{const t=await function(t,e){const n=kl(t),i=Vl.now(),s=e.reduce(((t,e)=>t.add(e.key)),qh());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=bh(),l=qh();return n.Gi.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(l=l.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{r=s;const o=[];for(const t of e){const e=rh(t,r.get(t.key).overlayedDocument);null!=e&&o.push(new lh(t.key,e,hu(e.value.mapValue),Zu.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(r,l);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:kh(r)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.hc[t.currentUser.toKey()];i||(i=new su(Ul)),i=i.insert(e,n),t.hc[t.currentUser.toKey()]=i}(i,t.batchId,n),await Sf(i,t.changes),await Mp(i.remoteStore)}catch(t){const e=Qp(t,"Failed to persist write");n.reject(e)}}(await nm(t),e,n))),n.promise}(um(t),e)}function wg(t,e,n){const i=n.docs.get(e._key),s=new dg(t);return new ag(t,s,e._key,i,new og(n.hasPendingWrites,n.fromCache),e.converter)}
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
 */function bg(){return new Im("serverTimestamp")}function Tg(...t){return new xm("arrayUnion",t)}!function(t,e=!0){ml=Mt,Nt(new W("firestore",((t,{instanceIdentifier:n,options:i})=>{const s=t.getProvider("app").getImmediate(),r=new lm(new Nl(t.getProvider("auth-internal")),new Ml(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Il(Al.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rc(t.options.projectId,e)}(s,n),s);return i=Object.assign({useFetchStreams:e},i),r._setSettings(i),r}),"PUBLIC").setMultipleInstances(!0)),Ut(pl,"3.8.3",t),Ut(pl,"3.8.3","esm2017")}();
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
class Ag extends D{constructor(t,e,n=0){super(qg(t),`Firebase Storage: ${e} (${qg(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ag.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return qg(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ig,xg,Cg,Sg;function qg(t){return"storage/"+t}function Ng(){return new Ag(Ig.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function Dg(){return new Ag(Ig.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Rg(){return new Ag(Ig.CANCELED,"User canceled the upload/download.")}function Lg(t){return new Ag(Ig.INVALID_ARGUMENT,t)}function Mg(){return new Ag(Ig.APP_DELETED,"The Firebase app was deleted.")}function Og(t){throw new Ag(Ig.INTERNAL_ERROR,"Internal error: "+t)}
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
 */(xg=Ig||(Ig={})).UNKNOWN="unknown",xg.OBJECT_NOT_FOUND="object-not-found",xg.BUCKET_NOT_FOUND="bucket-not-found",xg.PROJECT_NOT_FOUND="project-not-found",xg.QUOTA_EXCEEDED="quota-exceeded",xg.UNAUTHENTICATED="unauthenticated",xg.UNAUTHORIZED="unauthorized",xg.UNAUTHORIZED_APP="unauthorized-app",xg.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",xg.INVALID_CHECKSUM="invalid-checksum",xg.CANCELED="canceled",xg.INVALID_EVENT_NAME="invalid-event-name",xg.INVALID_URL="invalid-url",xg.INVALID_DEFAULT_BUCKET="invalid-default-bucket",xg.NO_DEFAULT_BUCKET="no-default-bucket",xg.CANNOT_SLICE_BLOB="cannot-slice-blob",xg.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",xg.NO_DOWNLOAD_URL="no-download-url",xg.INVALID_ARGUMENT="invalid-argument",xg.INVALID_ARGUMENT_COUNT="invalid-argument-count",xg.APP_DELETED="app-deleted",xg.INVALID_ROOT_OPERATION="invalid-root-operation",xg.INVALID_FORMAT="invalid-format",xg.INTERNAL_ERROR="internal-error",xg.UNSUPPORTED_ENVIRONMENT="unsupported-environment";class Pg{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=Pg.makeFromUrl(t,e)}catch(e){return new Pg(t,"")}if(""===n.path)return n;throw i=t,new Ag(Ig.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+i+"'.");var i}static makeFromUrl(t,e){let n=null;const i="([A-Za-z0-9.\\-_]+)";const s=new RegExp("^gs://"+i+"(/(.*))?$","i");function r(t){t.path_=decodeURIComponent(t.path)}const o=e.replace(/[.]/g,"\\."),a=[{regex:s,indices:{bucket:1,path:3},postModify:function(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${o}/v[A-Za-z0-9_]+/b/${i}/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:r},{regex:new RegExp(`^https?://${e===Eg?"(?:storage.googleapis.com|storage.cloud.google.com)":e}/${i}/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:r}];for(let e=0;e<a.length;e++){const i=a[e],s=i.regex.exec(t);if(s){const t=s[i.indices.bucket];let e=s[i.indices.path];e||(e=""),n=new Pg(t,e),i.postModify(n);break}}if(null==n)throw function(t){return new Ag(Ig.INVALID_URL,"Invalid URL '"+t+"'.")}(t);return n}}class Ug{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
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
 */function Fg(t){return"string"==typeof t||t instanceof String}function Vg(t,e,n,i){if(i<e)throw Lg(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Lg(`Invalid value for '${t}'. Expected ${n} or less.`)}
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
 */function Bg(t,e,n){let i=e;return null==n&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function jg(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){n=n+(e(i)+"="+e(t[i]))+"&"}return n=n.slice(0,-1),n}
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
function zg(t,e){const n=t>=500&&t<600,i=-1!==[408,429].indexOf(t),s=-1!==e.indexOf(t);return n||i||s}
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
 */(Sg=Cg||(Cg={}))[Sg.NO_ERROR=0]="NO_ERROR",Sg[Sg.NETWORK_ERROR=1]="NETWORK_ERROR",Sg[Sg.ABORT=2]="ABORT";class Hg{constructor(t,e,n,i,s,r,o,a,l,c,u,h=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=r,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=u,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()}))}start_(){const t=(t,e)=>{const n=this.resolve_,i=this.reject_,s=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(s,s.getResponse());void 0!==t?n(t):n()}catch(t){i(t)}else if(null!==s){const t=Ng();t.serverResponse=s.getErrorText(),this.errorCallback_?i(this.errorCallback_(s,t)):i(t)}else if(e.canceled){i(this.appDelete_?Mg():Rg())}else{i(Dg())}};this.canceled_?t(0,new $g(!1,null,!0)):this.backoffId_=function(t,e,n){let i=1,s=null,r=null,o=!1,a=0;function l(){return 2===a}let c=!1;function u(...t){c||(c=!0,e.apply(null,t))}function h(e){s=setTimeout((()=>{s=null,t(p,l())}),e)}function d(){r&&clearTimeout(r)}function p(t,...e){if(c)return void d();if(t)return d(),void u.call(null,t,...e);if(l()||o)return d(),void u.call(null,t,...e);let n;i<64&&(i*=2),1===a?(a=2,n=0):n=1e3*(i+Math.random()),h(n)}let f=!1;function m(t){f||(f=!0,d(),c||(null!==s?(t||(a=2),clearTimeout(s),h(0)):t||(a=1)))}return h(0),r=setTimeout((()=>{o=!0,m(!0)}),n),m}(((t,e)=>{if(e)return void t(!1,new $g(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const e=n.getErrorCode()===Cg.NO_ERROR,s=n.getStatus();if(!e||zg(s,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===Cg.ABORT;return void t(!1,new $g(!1,null,e))}const r=-1!==this.successCodes_.indexOf(s);t(!0,new $g(r,n))}))}),t,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class $g{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}
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
function Wg(t){let e;try{e=JSON.parse(t)}catch(t){return null}return"object"!=typeof(n=e)||Array.isArray(n)?null:e;var n}
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
 */function Kg(t,e){return e}class Qg{constructor(t,e,n,i){this.server=t,this.local=e||t,this.writable=!!n,this.xform=i||Kg}}let Yg=null;function Xg(){if(Yg)return Yg;const t=[];t.push(new Qg("bucket")),t.push(new Qg("generation")),t.push(new Qg("metageneration")),t.push(new Qg("name","fullPath",!0));const e=new Qg("name");e.xform=function(t,e){return function(t){return!Fg(t)||t.length<2?t:Gg(t)}(e)},t.push(e);const n=new Qg("size");return n.xform=function(t,e){return void 0!==e?Number(e):e},t.push(n),t.push(new Qg("timeCreated")),t.push(new Qg("updated")),t.push(new Qg("md5Hash",null,!0)),t.push(new Qg("cacheControl",null,!0)),t.push(new Qg("contentDisposition",null,!0)),t.push(new Qg("contentEncoding",null,!0)),t.push(new Qg("contentLanguage",null,!0)),t.push(new Qg("contentType",null,!0)),t.push(new Qg("metadata","customMetadata",!0)),Yg=t,Yg}function Jg(t,e,n){const i={type:"file"},s=n.length;for(let t=0;t<s;t++){const s=n[t];i[s.local]=s.xform(i,e[s.server])}return function(t,e){Object.defineProperty(t,"ref",{get:function(){const n=t.bucket,i=t.fullPath,s=new Pg(n,i);return e._makeStorageReference(s)}})}(i,t),i}function Zg(t,e,n){const i=Wg(e);if(null===i)return null;return Jg(t,i,n)}class ty{constructor(t,e,n,i){this.url=t,this.method=e,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
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
 */function ey(t){if(!t)throw Ng()}function ny(t,e){return function(n,i){const s=Zg(t,i,e);return ey(null!==s),function(t,e,n,i){const s=Wg(e);if(null===s)return null;if(!Fg(s.downloadTokens))return null;const r=s.downloadTokens;if(0===r.length)return null;const o=encodeURIComponent;return r.split(",").map((e=>{const s=t.bucket,r=t.fullPath;return Bg("/b/"+o(s)+"/o/"+o(r),n,i)+jg({alt:"media",token:e})}))[0]}(s,i,t.host,t._protocol)}}function iy(t){return function(e,n){let i;var s,r;return 401===e.getStatus()?i=e.getErrorText().includes("Firebase App Check token is invalid")?new Ag(Ig.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new Ag(Ig.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===e.getStatus()?(r=t.bucket,i=new Ag(Ig.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===e.getStatus()?(s=t.path,i=new Ag(Ig.UNAUTHORIZED,"User does not have permission to access '"+s+"'.")):i=n,i.status=e.getStatus(),i.serverResponse=n.serverResponse,i}}function sy(t){const e=iy(t);return function(n,i){let s=e(n,i);var r;return 404===n.getStatus()&&(r=t.path,s=new Ag(Ig.OBJECT_NOT_FOUND,"Object '"+r+"' does not exist.")),s.serverResponse=i.serverResponse,s}}
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
 */let ry=null;class oy{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Cg.NO_ERROR,this.sendPromise_=new Promise((t=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=Cg.ABORT,t()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=Cg.NETWORK_ERROR,t()})),this.xhr_.addEventListener("load",(()=>{t()}))}))}send(t,e,n,i){if(this.sent_)throw Og("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==i)for(const t in i)i.hasOwnProperty(t)&&this.xhr_.setRequestHeader(t,i[t].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Og("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Og("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponse(){if(!this.sent_)throw Og("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Og("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class ay extends oy{initXhr(){this.xhr_.responseType="text"}}function ly(){return ry?ry():new ay}
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
class cy{constructor(t,e){this._service=t,this._location=e instanceof Pg?e:Pg.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new cy(t,e)}get root(){const t=new Pg(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Gg(this._location.path)}get storage(){return this._service}get parent(){const t=function(t){if(0===t.length)return null;const e=t.lastIndexOf("/");return-1===e?"":t.slice(0,e)}(this._location.path);if(null===t)return null;const e=new Pg(this._location.bucket,t);return new cy(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw function(t){return new Ag(Ig.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(t)}}function uy(t){t._throwIfRoot("getDownloadURL");const e=function(t,e,n){const i=Bg(e.fullServerUrl(),t.host,t._protocol),s=t.maxOperationRetryTime,r=new ty(i,"GET",ny(t,n),s);return r.errorHandler=sy(e),r}(t.storage,t._location,Xg());return t.storage.makeRequestWithTokens(e,ly).then((t=>{if(null===t)throw new Ag(Ig.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return t}))}function hy(t,e){const n=function(t,e){const n=e.split("/").filter((t=>t.length>0)).join("/");return 0===t.length?n:t+"/"+n}(t._location.path,e),i=new Pg(t._location.bucket,n);return new cy(t.storage,i)}
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
 */function dy(t,e){if(t instanceof my){const n=t;if(null==n._bucket)throw new Ag(Ig.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+kg+"' property when initializing the app?");const i=new cy(n,n._bucket);return null!=e?dy(i,e):i}return void 0!==e?hy(t,e):t}function py(t,e){if(e&&/^[A-Za-z]+:\/\//.test(e)){if(t instanceof my)return new cy(t,e);throw Lg("To use ref(service, url), the first argument must be a Storage instance.")}return dy(t,e)}function fy(t,e){const n=null==e?void 0:e[kg];return null==n?null:Pg.makeFromBucketSpec(n,t)}class my{constructor(t,e,n,i,s){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Eg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=i?Pg.makeFromBucketSpec(i,this._host):fy(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=Pg.makeFromBucketSpec(this._url,t):this._bucket=fy(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Vg("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Vg("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){return(await t.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((t=>t.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new cy(this,t)}_makeRequest(t,e,n,i,s=!0){if(this._deleted)return new Ug(Mg());{const r=function(t,e,n,i,s,r,o=!0){const a=jg(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return function(t,e){e&&(t["X-Firebase-GMPID"]=e)}(c,e),function(t,e){null!==e&&e.length>0&&(t.Authorization="Firebase "+e)}(c,n),function(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!=e?e:"AppManager")}(c,r),function(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}(c,i),new Hg(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}
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
 */(t,this._appId,n,i,e,this._firebaseVersion,s);return this._requests.add(r),r.getPromise().then((()=>this._requests.delete(r)),(()=>this._requests.delete(r))),r}}async makeRequestWithTokens(t,e){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,i).getPromise()}}const gy="@firebase/storage",yy="0.11.1",vy="storage";function _y(t){return uy(t=H(t))}function wy(t,e){return py(t=H(t),e)}function by(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new my(n,i,s,e,Mt)}Nt(new W(vy,by,"PUBLIC").setMultipleInstances(!0)),Ut(gy,yy,""),Ut(gy,yy,"esm2017");let Ty='\n<span class="in_t">About</span>\n        <img id="abt_tab_t_t_img" alt="MTT Logo" src="https://avatars1.githubusercontent.com/u/64828294?s=460&amp;v=4">\n        <div id="abt_tab_t_hold">\n            <span id="abt_name">Mr Techtroid</span>\n            <span class="abt_det">\n                <span id="abt_email">mrtechtroid@outlook.com</span>\n            </span>\n            <div style="font-size: 12px;width:400px;align-items: flex-end;">\n                <span>I Am Mr Techtroid The Main Developer Of <span class="sp_txt">Quarkz!</span></span>\n                <span>I Built This Website As A Way For Schools To Head Towards Online Learning</span>\n                <span>Its Built In A Way That It Is Easy For Both Teachers And Students To Use</span>\n                <span>Quarkz Is Currently Under Beta Version And Many Features Will Come In The Future</span>\n            </div>\n        </div>\n        <div id="abt_c_1">\n            <button id="lgl_btn" class="tst_btn rpl">Legal</button>\n            <button id="rbu_btn" class="tst_btn rpl" onclick="window.location = \'/#/bugreport\'">Report Bugs</button>\n            <button id="apinf_btn" class="tst_btn rpl" onclick="window.location = \'/#/appinfo\'">App Info</button>\n            <a id="contq_btn"\n                href="https://docs.google.com/forms/d/e/1FAIpQLSfLZ2_GUDv6EYRR3kz53BYtsP3SaTIMfCo8az-xPzUi1nb91A/viewform"\n                class="tst_btn rpl" target="_blank">Contact Us</a>\n        </div>\n';let Ey='\n<span class="in_t">Chapters</span>\n        <hr color="white" width="100%">\n        <div style="display: flex;flex-direction: row;flex-wrap: wrap;">\n            <button class="tst_btn rpl" id="pchb">Physics</button>\n            <button class="tst_btn rpl" id="cchb">Chemistry</button>\n            <button class="tst_btn rpl" id="mchb">Maths</button>\n            <button class="tst_btn rpl" id="bchb">Biology</button>\n            <button class="tst_btn rpl" id="cochb">Computer</button>\n            <button class="tst_btn rpl" id="schb">Statistics</button>\n            <button class="tst_btn rpl" id="uchb">Unfiled</button>\n        </div>\n        <div id="qb_cont_2" style="overflow-y: scroll;height:50vh;" class="flex_type">\n        </div>',ky='\n<span class="in_t" id="chp_chaptername">Topic</span><button class="tst_btn rpl" id="chp_edit">Edit</button>\n        <div class = "flex_type" style="flex-direction: row;flex-wrap: wrap;">\n            <div id="chpt_topics" class = "db_class">\n                <span style="font-size: 25px;color:yellow">Topics</span>\n                <div id="chp_tpc_list" style="overflow-y: scroll;height:60vh;" class="flex_type"></div>\n            </div>\n            <div id="chpt_qbanks" class = "db_class">\n                <span style="font-size: 25px;color:yellow">Question Banks</span>\n                <div id="chp_qbk_list" style="overflow-y: scroll;height:60vh;" class="flex_type"></div>\n            </div>\n        </div>';let Ay='<div id="cyberhunt" class="full_page flex_type">\n        <div id="cyb_code" class="flex_type">\n            <span class="in_t">Join Cyberhunt!</span>\n            <hr color="white" width="100%">\n            <span>Do You Want To Join A Cyberhunt?Enter The Cyberhunt Code Below:</span>\n            <input id="cyb_cd_in" class="_in_aq" placeholder="i2a01pmzshn1">\n            <button class="tst_btn rpl" id="cyb_cd_sbm"\n                onclick="if (document.getElementById(\'cyb_cd_in\').value != \'\'){window.location.hash = \'/cyberhunt/\'+document.getElementById(\'cyb_cd_in\').value}">Submit</button>\n            <span>Joined Cyberhunts</span>\n            <div id="cyb_joined"\n                style="overflow-y: scroll;display: flex;flex-direction: column;height: 30vh;width: 40vw;border: 3px greenyellow solid;padding-left: 6px;">\n            </div>\n        </div>\n        <div id="cyb_edit">\n\n        </div>\n        <div id="cyb_viewer" class="flex_type" style="width:100%;height:100%">\n            <div\n                style="display:flex;flex-direction:column;justify-content: left;width:100%;margin-left:5vw;margin-top:10px;">\n                <span style="font-size: 16px;">Welcome to</span>\n                <span id="cyb_v_name" style="font-size: 30px">CyberHunt Name</span>\n                <span id="cyb_v_status" style="font-size: 18px">started on XX:XX</span>\n                <span id="cyb_v_crtby" style="font-size: 15px">By Mr Techtroid</span>\n            </div>\n            <span style="font-size: 16px;">Participants List</span>\n            <div id="cyb_v_plist"\n                style="display:flex;flex-direction:row;flex-wrap:wrap;border: solid grey 2px;border-radius: 10px 10px 10px;width:90%;height:40vh;padding:10px;overflow-y: scroll;">\n                <div class="cyb_v_plist_p"\n                    style="display: flex;flex-direction: column;width:100px;height:50px;border: solid grey 2px;border-radius: 10px 10px 10px;text-align: center;">\n                    <span>Mr Techtroid</span>\n                </div>\n            </div>\n        </div>\n\n    </div>';let Iy='\n<div id="sidebar">\n            <div id="options_tab"\n                style="display: flex;flex-direction: row;align-items:center;height:50px;justify-content: space-evenly;width: 25vw;max-width: 250px;">\n                <span class="material-symbols-outlined rpl" onclick="window.location = \'#/settings\'">settings</span>\n                <span class="material-symbols-outlined rpl" id="abt_btn">info</span>\n                <span class="material-symbols-outlined rpl" onclick="window.location = \'#/update\'">notifications</span>\n                <span class="material-symbols-outlined rpl" id="prf_btn">account_circle</span>\n                <span class="material-symbols-outlined rpl" id="lgt_btn">logout</span>\n            </div>\n            <hr style="width: 100%;">\n            <div id="profile_tab"\n                style="display: flex;flex-direction: column;align-items: center;height:170px;max-width: 250px;">\n                <div id="prf_tab_img" style="width: 100px;height:100px;object-fit: cover;margin:5px;"></div>\n                <span style="color:rgb(0, 255, 221)" id="dshd_name">NAME</span>\n                <span style="color:rgb(104, 104, 92);font-size: small;" id="dshd_uname">@username</span>\n                <span style="color:rgb(251, 255, 0)" id="dshd_batch">BATCH</span>\n            </div>\n            <hr style="width: 100%;">\n            <div class="flex_type"\n                style="flex-direction: column;align-items: center;overflow-y: scroll;width: 30vw;height:250px;max-width: 250px;">\n                <div class="dshbox_v2 " id="tmt_btn">Time Table</div>\n                <div class="dshbox_v2" id="chp_btn">Chapters</div>\n                <div class="dshbox_v2" id="tstinf_btn">Test Infos</div>\n                <div class="dshbox_v2" id="usn_btn" onclick="window.location.hash = \'/usernotes/\'">Your Notes</div>\n                <div class="dshbox_v2" id="tpc_btn" style="display: none;">Topics</div>\n                <div class="dshbox_v2" id="lvq_btn" style="display:none">Live Quiz</div>\n                <div class="dshbox_v2" id="frm_btn">Forum</div>\n                <div class="dshbox_v2" id="qba_btn" style="display: none;">Question Bank</div>\n                <div class="dshbox_v2" id="sim_btn">Simulations</div>\n                <div class="dshbox_v2" id="cyb_btn">Cyberhunts</div>\n                <div id="adminonly" style="display:none;flex-direction:column;">\n                    <div class="dshbox_v2" id="adi_btn">Admin Functions</div>\n                    <div class="dshbox_v2" id="usc_btn">Users</div>\n                </div>\n            </div>\n            <hr style="width: 100%;">\n            <span style="font-size: small;">© 2021-23 Quarkz!</span>\n        </div>\n        <div\n            style="display: flex;flex-direction: row;flex-wrap: wrap;margin-left: 10px;align-items: flex-start;height:100%;margin-top: 15px;justify-content: space-evenly;overflow-y: scroll;">\n            <div id="db_exam_info" class = "db_class" style="max-height: 30vh;">\n                <span style="font-size: 25px;color:yellow">Exam Info</span>\n                <div id="db_exam_list"></div>\n            </div>\n            <div id="db_social_media" class = "db_class">\n                <span style="font-size: 25px;color:yellow">We\'re on Social Media</span>\n                <span style="font-size: 14px;color:grey;margin-left: 10px;">Follow us, & share with your friends. It motivates us to keep\n                    working hard for you to bring new features. </span>\n                <img style="width:50px;" alt="Youtube Logo" class="rpl"\n                    onclick="window.open(\'https://www.youtube.com/@quarkz./\', \'_blank\');"\n                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAABaCAMAAABHRa6wAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACcFBMVEUAAAD/Ly//BQX/AAD/ExP/MDD/LS3/LCz/PDz/Z2f/X1//EhL/CAj/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/CAj/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/AAD/R0f/Q0P/Wlr/QED/Vlb/PT3/UlL/PDz/UFD/Ojr/Tk7/OTn/TEz/ODj/S0v/Nzf/Skr/Nzf/SUn/Njb/SEj/Njb/SEj/Njb/R0f/NTX/R0f/NTX/R0f/NTX/Rkb/NTX/NTX/AAD/AAD/AAD/CAj/Hh7/HBz/HBz/Gxv/Gxv/Ghr/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/FBT/HR3/AAD/AQH/BQX/wcH/EBD/////jY3/X1//7+//MzP/x8f/DQ3/mZn/Zmb/9vb/Ojr/0ND/EhL/oqL/dXX/+vr/QkL/1dX/GRn/qKj/fHz/SUn/3Nz/Hh7/sbH/paX/S0s8CEr+AAAAsHRSTlMAAAAAAAAAAAAAAAAABhMhKzdCUVlkbnqHjpidpqi3us7C1tnP3uLl7uzn18W2saV8ZVtQRjYBHDxaq8HT5vP98uivXkAiBidyrN3ksnkvCpenGaG5VfWCqhXb+kNxs8bp9ESQjLjN8OP5AQ4JIBYxJkE4VUhlVnJlgHSOgJiKoZOpnrKftKu9r8LA9/bYAQ4bJC88R1BYYnB6goqQlZykp7WzvL69xcrJzNrZxqmjGt/aNR4AAAABYktHRLUzDlpLAAAAB3RJTUUH5wEdCycyRsErbAAAAv5JREFUaN7dmudXE1EQxR8bu0KiKCSgggFi1KhRUexKVEQFxV6xYa/Yu2LBrkjvKE0CtmcZe+/df8nNCgfhgLi7z9xznE/58ub+srtvd97MZewP4SNJBl8/o6lzF/+u3QICzZag4O49eoaE9rKGhUfYbLbe9j5y2PvKPyPC+1kdoSH9BwwMDrKYnQGDBg+JHGoy+vkaJMmHqQtpWNTwEYGWkaNGjxk7juuP8dFWh8vinDBxUoyhRe3JsVOmCtBsNqbFxU9vnmJGwr/Uro+Zs5r+97O9I++JOU1cBZP35D0R2Vh/rnf1OXc21Pf3tj7n8b/rG72v3+AuGOYhAHj9kzgfos8X1Om3wuhzvrAWIBYFkFALsAgFsFhS9GNQ+pwbFYAlOIBEBcCMA1iqACzDASz31CqtV+AAlHeRAajPPZVBFBJgJXYT/NoGiUiAJBlgFRJgtQzgQgJYZYA1ahfdFgiwtg1ru07tojt374kjaMfar1e9iOi+MIANrIP6RSTHA0EAG9kmbQD08JEQgM1si0YAosdPBABsZcmaAYie6gfYxrbrACB6phdgB9upC4Cev9AHsIvt1gdA9PKVHoA9bK9eAKLXOgD2sf36AYjeaAY4wA6KAKC37zQCHGKHhQAQvf+gCeAISxEEQPRRC8BRdkwYANEn9bmOsxMCAYg+q82Vyk4KBaAvX9XlOsVOiwUg+qYq1xnxAETfVeQ6+x8CqL0F8IdQ7Db8oTZXKv5FlCIMQOOrGP4xgn+O4QUJvCSDF6Xwshx+MEnWASDkaAY/nMKP5/AGBbxFA29Swdt0+EYlvFULb1bD2/XwgQV8ZAMfWsHHdvjBJXx0Cx9ew8f3eAMD3MIBN7HgbTxwIxPeyoU3s+HtfHhDI97SqVwFrKm1jsJj63VaXI6w6HMiRM/bLzjikv7O1tsofCSp48W0S+kZmVnZObl5+QWFRcUll6+UlpVXVF6tcrura67JUVPtdlddr6woLyu9cbOkuKiwID8vNyc7KzMj/VZap5aMzT8BRpXwJFof0ooAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDEtMjlUMTE6Mzk6NTArMDA6MDCGz66vAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAxLTI5VDExOjM5OjUwKzAwOjAw95IWEwAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA5MDwVcVIAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgAMTI40I0R3QAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAARdEVYdFRodW1iOjpTaXplADE1NDVC02RgawAAABZ0RVh0VGh1bWI6OlVSSQBmaWxlOi8vUE5HOqYqZyIAAAAASUVORK5CYII=">\n            </div>\n            <div id="db_study_resources" class = "db_class">\n                <span style="font-size: 25px;color:yellow">Additional Study Resources</span>\n                <div class="tlinks_min rpl" onclick="window.location.hash = \'/mainsformulas\'"><span\n                        style="font-size: 16px;">JEE Mains Formula Sheets</span></div>\n                <div class="tlinks_min rpl" onclick="window.location.hash = \'/downloads\'"><span\n                        style="font-size: 16px;">FREE PDF Downloads</span></div>\n            </div>\n        </div>',xy='\n<iframe id="bgrep_frame"\n            src="https://docs.google.com/forms/d/e/1FAIpQLSeo2JZDaBApBiTeXmAnkVX60hSuJGHJkd9jsF9ePg0iM9ufjA/viewform?embedded=true"\n            frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>',Cy='\n<span class="in_t">App Info</span>\n        <pre id="ren_appinf"></pre>',Sy='\n<span class="in_t">Schedule</span>\n        <iframe id="tmt_frame" width="100%" height="90%" frameborder="0" scrolling="no"></iframe>',qy='\n<span class="in_t">404</span>\n        <hr color="white" width="100%">\n        <span style="font-size: 3vh;">You don\'t have access to this page.</span>\n        <a class="tst_btn rpl" href="/#/dashboard">Go To Dashboard</a>',Ny='\n<div style="position: fixed;">\n            <embed id="nt_id" style="width: 95vw;height: 90vh;">\n            <div id = "nt_nocontrol">Quarkz!</div>\n        </div>',Dy='\n<div id="c-output"\n            style="color:yellow;overflow-y: scroll;display: flex;flex-direction: column;height: 80vh;width: 90vw;border: 3px greenyellow solid;padding-left: 6px;">\n\n        </div>\n        <div>\n            <input type="text" id="c-input" class="_in_aq" placeholder="Command">\n            <button class="tst_btn rpl" id="c-exec">Execute</button>\n        </div>';let Ry='\n    <span style="font-size: 5vh;color:yellow" id="fm_title">Mains Formula Sheet</span>\n    <hr color="white" width="100%">\n    <div style="overflow-y: scroll;height:50vh;" class="flex_type">\n    <span class="tlinks rpl" onclick = "window.location.hash = \'/notes/PHYFORMULAS\'">Physics Formula Sheet</span>\n    <span class="tlinks rpl" onclick = "window.location.hash = \'/notes/MATHFORMULAS\'">Maths Formula Sheet</span>\n    <span class="tlinks rpl" onclick = "window.location.hash = \'/notes/PCHEMNOTES\'">Physical Chemistry Formula Sheet</span>\n    <span class="tlinks rpl" onclick = "window.location.hash = \'/notes/OCHEMNOTES\'">Organic Chemistry Formula Sheet</span>\n    <span class="tlinks rpl" onclick = "window.location.hash = \'/notes/ICHEMNOTES\'">Inorganic Chemistry Formula Sheet</span>\n    </div>\n    <span style="font-size: 8px;">All PDF\'s Are Owned by their Respective Owners</span>\n',Ly='\n<span style="font-size: 5vh;color:yellow" id="fm_title">Downloads</span>\n    <hr color="white" width="100%">\n    <div style="overflow-y: scroll;height:50vh;" class="flex_type">\n      \n    </div>\n';let My='\n<span style="font-size: 5vh;color:yellow" id="fti_title">Test Name</span>\n        <hr color="white" width="100%">\n        <div id="fto_overview" style="display: flex;flex-direction: row;flex-wrap:wrap">\n            <div class="fto_box">\n                <div class="fto_box_title">TOTAL MARKS</div>\n                <div class="fto_box_content" id="fto_total">100/100</div>\n            </div>\n            <div class="fto_box">\n                <div class="fto_box_title">CORRECT</div>\n                <div class="fto_box_content"><span id="fto_correct">45</span><span class="fto_small">marks</span></div>\n            </div>\n            <div class="fto_box">\n                <div class="fto_box_title">INCORRECT</div>\n                <div class="fto_box_content"><span id="fto_incorrect">45</span><span class="fto_small">marks</span>\n                </div>\n            </div>\n            <div class="fto_box">\n                <div class="fto_box_title">UNANSWERED</div>\n                <div class="fto_box_content"><span id="fto_unanswered">45</span><span class="fto_small">marks</span>\n                </div>\n            </div>\n            <div class="fto_box">\n                <div class="fto_box_title">RANK</div>\n                <div class="fto_box_content" id="fto_rank">5</div>\n            </div>\n        </div>\n        <hr color="white" width="100%">\n        <div id="fto_overview" style="display: flex;flex-direction: row;flex-wrap:wrap">\n            <button class="tst_btn rpl" id="fto_detail"\n                onclick=\'window.location.hash = "#/testreport/" + window.location.hash.split("#/finished/")[1]\'>Detailed\n                View</button>\n        </div>\n        <div style="display:flex;flex-direction:row;flex-wrap:wrap;">\n            <div style="display:flex;flex-direction:column;flex-wrap:wrap;">\n                <span style="font-size: 3vh;">Section Wise Scores</span>\n                <div id="fto_percents" style="display: flex;flex-direction: column;"></div>\n                <div>Legend: <span style="color:green">Correct</span>&nbsp;<span\n                        style="color:red">Incorrect</span>&nbsp;<span style="color:orange">Unattempted</span></div>\n            </div>\n            <div style="margin-left:20px;display:flex;flex-direction:column;">\n                <span style="font-size: 3vh;">Leaderboard</span>\n                <div id="fto_leaderboard"></div>\n            </div>\n        </div>\n        <div style="display:flex;flex-direction:column;flex-wrap:wrap;">\n            <span style="font-size: 3vh;">Section Wise Time Spent</span>\n            <div id="fto_time" style="display: flex;flex-direction: column;"></div>\n            <div>Legend: <span style="color:green">Correct</span>&nbsp;<span\n                    style="color:red">Incorrect</span>&nbsp;<span style="color:orange">Unattempted</span></div>\n        </div>\n        <div style="display:flex;flex-direction:column;flex-wrap:wrap;">\n            <span style="font-size: 3vh;">Time Spent Per Question</span>\n            <div id="fto_draw" style="display: flex;flex-direction: column;"></div>\n        </div>';let Oy='\n<span style="font-size: 5vh;color:yellow" id="fm_title">Forum</span>\n        <hr width="100%" color="white">\n        <div style="border:hotpink 3px solid;width:80%;">\n            <div id=\'pinned_msg\'\n                style="background-color: rgb(38, 44, 31);color:rgb(21, 209, 209);overflow-y: scroll;height:30px;">Pinned\n                Message:<span id=\'pinnedtxt\'>1</span></div>\n            <div id="forum_live" style="height:60vh;overflow-y: scroll;display: flex;flex-direction: column;">\n            </div>\n        </div>\n\n        <div>\n            <input type="text" id="fm_message" class="_in_aq" placeholder="Message">\n            <button class="tst_btn rpl" id="fm_send">Send</button>\n        </div>\n';let Py='\n<span class="in_t" class="">Functions</span>\n        <div class = "flex_type" style = "flex-direction: row;flex-wrap: wrap;">\n            <div id="fc_topics" class = "db_class">\n                <span style="font-size: 25px;color:yellow">Chapters/Topics</span>\n                <div class="dshbox_v2 rpl" onclick="window.location.hash = \'#/add/tpc\'">Add Topics</div>\n            </div>\n            <div id="fc_sims" class = "db_class">\n                <span style="font-size: 25px;color:yellow">Question Banks/Sims</span>\n                <div class="dshbox_v2 rpl" onclick="window.location.hash = \'#/add/simulation\'">Add Simulations</div>\n                <div class="dshbox_v2 rpl" onclick="window.location.hash = \'#/add/qubank\'">Add Question Bank</div>\n            </div>\n            <div id="fc_tests" class = "db_class">\n                <span style="font-size: 25px;color:yellow">Tests</span>\n                <div class="dshbox_v2 rpl" onclick="window.location.hash = \'#/add/tests\'">Add Test</div>\n                <div class="dshbox_v2 rpl" onclick="window.location.hash = \'#/update/tests\'">Update Test</div>\n            </div>\n            <div id="fc_batch" class = "db_class">\n                <span style="font-size: 25px;color:yellow">Batches</span>\n                <div class="dshbox_v2 rpl" onclick="window.location.hash = \'#/add/batch\'">Add New Batch</div>\n                <div class="dshbox_v2 rpl" onclick="window.location.hash = \'#/list/batch\'">Update Batches</div>\n                <div class="dshbox_v2 rpl" onclick="window.location.hash = \'#/update/batch\'">Update Batches</div>\n            </div>\n            <div id="fc_misc" class = "db_class">\n                <span style="font-size: 25px;color:yellow">Misc</span>\n                <div class="dshbox_v2 rpl" onclick="window.location.hash = \'#/edit_exams\'">Edit Exams</div>\n            </div>\n        </div>\n';function Uy(t,e,n,i,s){var r=Math.floor(1e4*Math.random()),o='\n    <div id="msg_popup_'+r+'" class="overlay">\n    <div class="popup">\n        <center>\n            <h2 id="msg_popup_txt_'+r+'">Note</h2>\n        </center>\n        <a class="close"\n            onclick="document.getElementById(\'msg_popup_'+r+'\').remove()">&times;</a>\n        <p id="msg_popup_content_'+r+'"></p>\n        <button class="tst_btn rpl" id="msg_action_'+r+'"></button>\n    </div>\n    </div>\n    ';return 1==s?dE("output").insertAdjacentHTML("beforeend",o):dE("quarkz_body").insertAdjacentHTML("beforeend",o),dE("msg_popup_"+r).style.visibility="visible",dE("msg_popup_"+r).style.opacity="1",dE("msg_action_"+r).style.display="none",document.getElementById("msg_popup_txt_"+r).innerText=t,document.getElementById("msg_popup_content_"+r).innerText=e,null==n?n=function(){}:dE("msg_action_"+r).style.display="block",null==i&&(i=""),dE("msg_action_"+r).onclick=n,dE("msg_action_"+r).innerText=i,"msg_popup_"+r}let Fy='\n<div id="lgn_bx">\n    <span class="in_t">Welcome to Quarkz</span>\n    <input type="text" id="lg_uname" class="text_bx_1" placeholder="Username">\n    <input type="password" id="lg_pass" class="text_bx_1" placeholder="Password">\n    <div>\n        <button class="tst_btn rpl" id="sgn_in">Sign In</button>\n        <button class="tst_btn rpl" id="reg_in">Register</button>\n    </div>\n    <span id="lgn_err" class="err_txt">ERROR:Wrong Username Or Password</span>\n    <span class="lgn_c_1"><a href="/#/about">About</a>&nbsp;&nbsp;<a href="/#/legal">Legal</a>&nbsp;&nbsp;<a\n            href="/#/bugreport">Report A Bug</a>\n    </span>\n    <span class="lgn_c_1">\n        <a href="/#/mainsformulas">Formula Sheets</a>&nbsp;&nbsp;\n        <a href="/#/downloads">Downloads</a>\n    </span>\n</div>\n';let Vy='\n<span class=" in_t no-print">Export</span>\n        <hr color="white" width="100%" class="no-print">\n        <span class="no-print"><button class="tst_btn rpl no-print" onclick="print()">Print</button><button\n                class="tst_btn rpl no-print" id="shf_btn">Shuffle</button><button class="tst_btn rpl no-print"\n                id="tsinf_btn">Update Bank\n                Info</button><button class="tst_btn rpl no-print" id="tans_btn">Answers</button><button\n                class="tst_btn rpl no-print" id="tansexpl_btn">Explanation And Answers</button><button\n                class="tst_btn rpl no-print" id="tremove_btn">Remove\n                All</button></span>\n        <hr color="white" width="100%">\n        <span class="in_t_3" id="qb_title">ERROR</span>\n        <hr color="white" width="100%">\n        <div id="pe_tst_info" class="flex_type no-print">\n            <span>Test<input id="pe_tst_type_1" type="checkbox"></span>\n            <span id="">General Instructions<input id="pe_tst_type_2" type="checkbox"></span>\n            <textarea type="answer" id="pe_gi_ins" class="_in_aq" placeholder="General Instructions"></textarea>\n            <div id="pe_tst_mrk">\n                <span>MCQ:<input type="number" id="pe_mcq_pno" class="_in_pq" value="3"><input type="number"\n                        id="pe_mcq_nno" class="_in_pq" value="-1"></span>\n                <span>MCQ Multiple:<input type="number" id="pe_mcmul_pno" class="_in_pq" value="3"><input type="number"\n                        id="pe_mcmul_nno" class="_in_pq" value="-1"></span>\n                <span>Numerical:<input type="number" id="pe_num_pno" class="_in_pq" value="4"><input type="number"\n                        id="pe_num_nno" class="_in_pq" value="0"></span>\n                <span>True Or False:<input type="number" id="pe_taf_pno" class="_in_pq" value="1"><input type="number"\n                        id="pe_taf_fno" class="_in_pq" value="0"></span>\n                <span>Explain:<input type="number" id="pe_exp_pno" class="_in_pq" value="4"><input type="number"\n                        id="pe_exp_nno" class="_in_pq" value="0"></span>\n                <span>Matrix<input type="number" id="pe_mat_pno" class="_in_pq" value="12"><input type="number"\n                        id="pe_mat_nno" class="_in_pq" value="-4"></span>\n            </div>\n        </div>\n        <div id="eqb_instr"><span style="color: green;">General\n                Instructions:&nbsp;&nbsp;</span><span id="equ_gi"></span>\n            <hr color="white" width="100%">\n        </div>\n\n        <div id="eqb_add" type="1">\n        </div>\n\n';let By='\n<div id="prf_tab_t">\n            <div id="prf_tab_t_t">\n                <div id="prf_tab_t_t_img"></div>\n                <div id="prf_tab_t_hold">\n                    <span id="prf_name"></span>\n                    <span class="prf_det">\n                        <span id="prf_email"></span>&nbsp;•&nbsp;<span id="prf_gender"></span>\n                    </span>\n                    <span class="prf_det">\n                        <span id="prf_phone"></span>&nbsp;•&nbsp;<span id="prf_class"></span>\n                    </span>\n                    <span class="prf_det">\n                        <span id="prf_batch"></span>&nbsp;•&nbsp;<span id="prf_crton"></span>\n                    </span>\n                </div>\n            </div>\n        </div>\n';let jy='\n<button id="qbnk_vid_btn" class="tst_btn rpl">Start</button>\n        <button id="qbnk_vid_btn_e" class="tst_btn rpl" style="display: none;">Stop</button>\n        <span style="font-size: 5vh;color:yellow;font-family: Nunito;" id="tb_q_title">Topic Name</span>\n        <hr width="100%" color="white">\n        <div class="div-qbnk">Quarkz!</div>\n        <img alt="Quarkz Logo" src="assets/Quarkz-T.png"\n            style="position:absolute;height:100px;width: 100px;top:0;left:0;z-index: 1;">\n        <div id="qbnk_vid_q" style="display: flex;flex-direction: column;align-items: center;z-index: 2;">\n            <div class="div-qbnk1"><span>Pause The Video If You Need More Time.Each Question Will Be Shown For 10\n                    Seconds.</span><span id="qbnk_timer" style="font-size: 80px;color:rgb(0, 255, 255)">0</span></div>\n            <span style="width: 60vw;"><span id="tb_q_qno" style="color: coral;"></span>\n                <div id="tb_q_qtext" style="width:100%;height:max-content;min-height: 12vh;">Question</div>\n            </span>\n            <div id="tb_q_ans_hold">\n                <input type="answer" id="tb_q_answer" class="_in_aq" placeholder="Answer">\n                <div id="tb_q_mcq_con" class="flex_type">\n                </div>\n                <div id="tb_q_matrix">\n                    <table>\n                        <tr>\n                            <td><span class="tb_q_i1"></span><span class="tb_q_i2"></span></td>\n                        </tr>\n                        <tr>\n                            <td><span class="tb_q_i1"></span><span class="tb_q_i2"></span></td>\n                        </tr>\n                        <tr>\n                            <td><span class="tb_q_i1"></span><span class="tb_q_i2"></span></td>\n                        </tr>\n                        <tr>\n                            <td><span class="tb_q_i1"></span><span class="tb_q_i2"></span></td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <div id="qbnk_vid_ans" style="display: flex;flex-direction: column;align-items: center;">\n            <span style="font-size: 5vh;color:yellow;">Answer</span>\n            <div id="tb_q_hint" style="width:80%;height:max-content;min-height: 12vh;"></div>\n            <div id="tb_q_ans" style="height:max-content;min-height: 12vh;"></div>\n            <div id="tb_q_expl" style="width:80%;height:max-content;min-height: 12vh;"></div>\n        </div>\n        <div id="qbnk_vid_title"\n            style="display:flex;flex-direction: column;align-items: center;justify-content: center;height:60vh">\n            <span style="font-size: 15vh;color:yellow;font-family: Nunito;" id="qb_vid_ti"></span>\n        </div>\n        <div id="qbnk_vid_end" style="display:flex;flex-direction: column;align-items: center;justify-content: center;">\n            <span style="font-size: 5vh;color:yellow">Thanks For Watching</span>\n            <span style="font-size: 3vh;color:yellow">Subscribe To Quarkz! For More Such Videos</span>\n\n        </div>';let zy='\n<span class="in_t">Register</span>\n        <input type="tel" id="rg_mbleno" class="_in_reg" placeholder="Mobile No">\n        <input type="text" id="rg_uname" class="_in_reg" placeholder="Email Address">\n        <input type="password" id="rg_pass" class="_in_reg" placeholder="Password">\n        <input type="password" id="rg_pass1" class="_in_reg" placeholder="Confirm Password">\n        <input type="text" id="rg_name" class="_in_reg" placeholder="Name">\n        <label for="class">Class</label>\n        <input name = "rg_dob" type="date" id="rg_dob" class="_in_reg">\n        <label for="class">Class</label>\n        <select name="class" id="rg_class">\n            <option value="6">6</option>\n            <option value="7">7</option>\n            <option value="8">8</option>\n            <option value="9">9</option>\n            <option value="10">10</option>\n            <option value="11">11</option>\n            <option value="12">12</option>\n        </select>\n        <label for="gender">Gender</label>\n        <select name="gender" id="rg_gender">\n            <option value="Male">Male</option>\n            <option value="Female">Female</option>\n        </select>\n\n        <button class="tst_btn rpl" id="rg_in">Register</button>\n\n',Hy='\n<span class="in_t">Settings</span>\n        <hr color="white" width="100%">\n        <div class = "flex_type" style = "flex-direction: row;flex-wrap: wrap;">\n            <div id="st_accinfo" class = "db_class">\n                <span style="font-size: 25px;color:yellow">Account Info</span>\n                <button id="pass_rst_btn" class="tst_btn rpl">Reset/Change Password</button>\n            </div>\n            <div id="st_notif" class = "db_class">\n                <span style="font-size: 25px;color:yellow">Notifications</span>\n                <button id="pass_rst_btn" class="tst_btn rpl">Reset/Change Password</button>\n            </div>\n        </div>';let $y='\n<span class="in_t" class="">Add/Edit Simulation</span>\n        <input type="text" id="aq_simname" class="_in_aq" placeholder="Simulation Name">\n        <input type="url" id="aq_simurl" class="_in_aq" placeholder="Simulation URL">\n        <input type="text" id="aq_simprov" class="_in_aq" placeholder="Simulation Provider">\n        <input type="text" id="aq_simlicense" class="_in_aq" placeholder="Simulation License">\n        <select name="type" id="aq_simsubj" class="_in_aq col-red">\n            <option value="physics">Physics</option>\n            <option value="chemistry">Chemistry</option>\n            <option value="maths">Maths</option>\n            <option value="biology">Biology</option>\n            <option value="computer">Computer</option>\n            <option value="statistics">Statistics</option>\n            <option value="unfiled">Unfiled</option>\n        </select>\n        <button class="tst_btn rpl" id="aq_sims_save">Save</button>\n\n',Wy='\n<span class="in_t">Simulations</span>\n        <hr color="white" width="100%">\n        <div style="display: flex;flex-direction: row;flex-wrap: wrap;"><span class="in_t" id="sms_name">Sim\n                Name</span><button class="tst_btn rpl" id="sms_edit" style="display: none;"\n                onclick=\'window.location.hash = "#/edit_sim/" + window.location.hash.split("#/sims/")[1]\'>Edit\n                Sim</button></div>\n        <div>\n            <iframe id="sim_frame" frameborder="0"\n                style="width:80vw;height:70vh;background-color: black;color:white;scroll-behavior: smooth;"></iframe>\n        </div>\n        <div>\n            <span style="font-size: 2vh;">Provided By</span>\n            <span style="font-size: 2vh;" id="sms_prov">Sim Name</span>\n        </div>',Gy='\n<span class="in_t">Simulations List</span>\n        <hr color="white" width="100%">\n        <div style="display: flex;flex-direction: row;flex-wrap: wrap;">\n            <button class="tst_btn rpl" id="psims">Physics</button>\n            <button class="tst_btn rpl" id="csims">Chemistry</button>\n            <button class="tst_btn rpl" id="msims">Maths</button>\n            <button class="tst_btn rpl" id="bsims">Biology</button>\n            <button class="tst_btn rpl" id="cosims">Computer</button>\n            <button class="tst_btn rpl" id="ssims">Statistics</button>\n            <button class="tst_btn rpl" id="usims">Unfiled</button>\n        </div>\n        <div id="sim_cont" style="overflow-y: scroll;height:50vh;" class="flex_type">\n        </div>';let Ky='\n<span class="in_t">Test Instructions</span>\n        <hr color="white" width="100%">\n        <div style="width:80vw;overflow-y: scroll;border:yellow 3px solid;display: flex;flex-direction: column;">\n            <span style="font-size:5vh;text-align: center;">Please Read The Instructions And Terms Carefully</span>\n            <span style="font-size:18px;">General Instructions:</span>\n            <ol style="font-size: 14px;">\n                <li>The Exam Must Be Completed In 1 Sitting. You Will Be Able To Open This Test Window Only Once. </li>\n                <li>Read Every Question Carefully And Select Your Answer and Try To Answer As Many Questions As Possible\n                    In The Exam.</li>\n                <li>The Questions Palette displayed on the right side of screen will show the status of each question\n                    using one of the following symbols:</li>\n                <div>\n                    <div style="margin:9px"><span class="tts_notvisit">12</span>You have not visited the question yet.\n                    </div>\n                    <div style="margin:9px"><span class="tts_notanswer">21</span>You have not answered the question.\n                    </div>\n                    <div style="margin:9px"><span class="tts_answered">45</span>You have answered the question.</div>\n                    <div style="margin:9px"><span class="tts_review">30</span>You have NOT answered the question, but\n                        have marked the question for review.</div>\n                    <div style="margin:9px"><span class="tts_ansreview">37</span>The question(s) "Answered and Marked\n                        for Review" will be considered for evalution.</div>\n                </div>\n                <li>When the timer reaches zero, the examination will end by itself. You will not be required to end or\n                    submit your examination.</li>\n                <li>Make Sure To Have A Good Internet Connection. Loss in Internet Connectivity may prevent submission\n                    of answers. </li>\n                <li>DO NOT TRY TO Minimise The Full Screen Mode Of The Exam. You Will Recieive 1 Warning For Doing So\n                    After Which Your Test Will End</li>\n            </ol>\n            <span style="font-size:18px;">Navigating to a Question:</span>\n            <ol style="font-size:14px;">\n                <li>To view/answer a question, do the following: Click on the question number in the Question Palette at\n                    the right of your screen to go to that numbered question directly. Note that using this option does\n                    NOT save your answer to the current question.</li>\n            </ol>\n            <span style="font-size:18px;">Answering a Question:</span>\n            <ol style="font-size:14px;">\n                Procedure for answering a multiple choice type question:\n                <li>To select you answer, click on the button of one of the options.</li>\n                <li>To deselect your chosen answer, click on the button of the chosen option again or click on the Clear\n                    Response button</li>\n                <li>To change your chosen answer, click on the button of another option</li>\n                <li>To save your answer, you MUST click on the Save button.</li>\n                <li>To mark the question for review, click on the Mark for Review button.</li>\n                <li>To change your answer to a question that has already been answered, first select that question for\n                    answering and then follow the procedure for answering that type of question.</li>\n            </ol>\n            <span style="font-size:18px;">Navigating through sections:</span>\n            <ol style="font-size:14px;">\n                <li>All Questions are Visible in the Question Pallete along under the respective sections/subjects</li>\n            </ol>\n            <span style="font-size:18px;">Terms And Conditions:</span>\n            <span style="font-size:14px;">By Clicking On Start I Agree On All Terms And Conditions:</span>\n            <ol style="font-size:14px;">\n                <li>I have read and understood all the instructions. </li>\n                <li>I agree that all computer hardware allotted to me are in proper working condition. </li>\n                <li>I declare that i am not in possession of / not wearing / not carrying any prohibited gadget like\n                    mobile phone,bluetooth devices etc. /any prohibited material with me into the Examination Hall.</li>\n                <li>I also agree that I will not tamper with any software/technologies/devices alloted to me while\n                    attempting\n                    this test.\n                </li>\n                <li>I agree that in case of not adhering to the instructions, I shall be liable to be debarred from this\n                    Test and/or to disciplinary action, which may include ban from future Test / Examinations</li>\n            </ol>\n            <span style="font-size:5vh;text-align: center;">👍 All The Best! 👍</span>\n            <button class="tst_btn rpl" id="tin_start"\n                onclick=\'window.location.hash = "#/attempt/" + window.location.hash.split("#/instructions/")[1]\'>Start</button>\n        </div>\n';let Qy='\n<span class="in_t">Tests</span>\n        <hr color="white" width="100%">\n        <div><button class="tst_btn rpl" id="ti_act">Active Tests</button><button class="tst_btn rpl"\n                id="ti_fin">Finished Tests</button><button class="tst_btn rpl" id="ti_upc">Upcoming Tests</button></div>\n        <div id="testlinks">\n        </div>',Yy='\n<div style="border: grey 2px dashed;flex-direction: row;margin:10px;" class="flex_type">\n            <div style="display: flex;flex-direction: column;width: 60vw;height:80vh;margin:10px;min-width: 300px;">\n                <div id="tt_extrabx" style="display: flex;flex-direction:row;height: 40px;margin:10px;">\n                    <span id="tt_timeleft">00:00:00</span>\n                    <span id="tt_marksaward"></span>\n                    <span id="tt_timespent" style="margin-left:5px;"></span>\n                    <span id="tt_testname" style="width: 100%;text-align: right;margin-left: 5px;">TEST\n                        NAME</span>\n                    <button id="tt_sub" class="tst_btn rpl">Submit</button>\n                </div>\n                <div id="tt_question">\n                    <div style="font-size: larger;">Question <span id="tt_qno">12</span></div>\n                    <hr>\n                    <div id="tt_qtitle">Who Is The President Of India?</div>\n                    <hr>\n                </div>\n                <div id="tt_footer" style="display:flex;">\n                    <button class="tst_btn rpl" id="tt_save">Save</button>\n                    <button class="tst_btn rpl" id="tt_clear">Clear</button>\n                    <button class="tst_btn rpl" id="tt_review">Mark For Review</button>\n                    <button class="tst_btn rpl" id="tt_ansreview">Save And Mark For Review</button>\n                </div>\n            </div>\n            <div>\n                <div id="tt_infobx">\n                    <div style="margin:9px"><span class="tts_notvisit">12</span>Not Visited</div>\n                    <div style="margin:9px"><span class="tts_notanswer">21</span>Not Answered</div>\n                    <div style="margin:9px"><span class="tts_answered">45</span>Answered</div>\n                    <div style="margin:9px"><span class="tts_review">30</span>Review</div>\n                    <div style="margin:9px"><span class="tts_ansreview">37</span>Review And Answered</div>\n                </div>\n                <div id="tt_qnobx">\n                    <div>\n                        <div id="tw_Physics"><span>Physics</span>\n                            <div id="tw_Physics_c"></div>\n                        </div>\n                        <div id="tw_Chemistry"><span>Chemistry</span>\n                            <div id="tw_Chemistry_c"></div>\n                        </div>\n                        <div id="tw_Math"><span>Math</span>\n                            <div id="tw_Math_c"></div>\n                        </div>\n                        <div id="tw_Computer"><span>Computer</span>\n                            <div id="tw_Computer_c"></div>\n                        </div>\n                        <div id="tw_Biology"><span>Biology</span>\n                            <div id="tw_Biology_c"></div>\n                        </div>\n                        <div id="tw_Statistics"><span>Statistics</span>\n                            <div id="tw_Statistics_c"></div>\n                        </div>\n                        <div id="tw_Unfiled"><span>Unfiled</span>\n                            <div id="tw_Unfiled_c"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>',Xy='\n<span class="in_t" id="te_title">The Test Has Ended</span>\n        <span style="font-size:3vh;">Your Results Will Be Released After<span id="te_endtime"></span></span>\n        <a class="tst_btn rpl" href="/#/dashboard">Go To Dashboard</a>\n        <hr color="white" width="100%">';let Jy='\n<span class="in_t">Terms And Conditions</span>\n        <span class="sp_txt">Copyright 2021-23 Quarkz By Mr Techtroid</span>\n        <span class="in_t_2">Last Updated: 04 April 2023(IST)</span>\n<div id="lgl_container">\n    <ol>\n        <h3>A. Acceptance of Terms and Conditions</h3>\n        <li>By using the Quarkz website, you acknowledge and agree to the terms and conditions set forth below. If you do not agree to these terms and conditions, you should not use the Quarkz website.</li>\n        <h3>B. Account Information And User Generated Content</h3>\n        <li>By creating an account on the Quarkz website, you agree to provide accurate and complete information about yourself as requested in the registration form. You also agree to keep your account information up-to-date and secure. </li>\n        <li>All user-generated content on the Quarkz website, including but not limited to quizzes, tests, assignments, notes, and forum posts, may be accessed by Quarkz admins or authorized moderators. When you request account deletion, no user-generated data will be deleted. Instead, the account will be unlinked from our authentication services. However, this data will continue to be accessible to ONLY Quarkz admins.\n        <h3>C. Account Information And User Generated Content</h3>\n        <li>Any content uploaded, published, submitted, or posted by you on the Quarkz platform, including without limitation, text, graphics, images, videos, and audio, will be owned by you, but we are also granted a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, share, display, publish, retain, make available online, and/or electronically transmit such user-generated content as well as technical information collected. You represent and warrant that you have all necessary rights to grant us this license.</li>\n        <h3>D. Code of Conduct</h3>\n        <li>You agree to use the Quarkz website in a lawful and ethical manner. You agree not to engage in any activity that could damage, disable, overburden, or impair the website, or interfere with any other user\'s access to the website. You agree not to post or transmit any content that is obscene, defamatory, libelous, abusive, discriminatory, or otherwise offensive. You agree not to harass or bully other users on the website.</li>\n        <h3>E. Termination of Access</h3>\n        <li>We reserve the right to terminate access to the Quarkz website, or any part thereof, to any user at any time, without prior notice, for any reason, including without limitation, for a violation of these terms and conditions.</li>\n        <h3>F. Age Restrictions</h3>\n        <li>By creating an account on the Quarkz website, you represent and warrant that you are 13 years of age or older. If you are under 13 years of age, you must obtain permission from your guardians or parents to use the Quarkz website. We do not knowingly collect any personal information from users under 13 years of age. If we become aware that we have collected personal information from a user under 13 years of age, we will take steps to delete that information.</li>\n        <h3>G. Free Use Disclaimer</h3>\n        <li>The Quarkz website may contain copyrighted material that has not been specifically authorized by the copyright owner. Such material is made available for educational purposes under the "fair use" provision of the Copyright Act. Quarkz respects the intellectual property rights of others, and we ask that our users do the same.</li>\n        <li>Copyright Disclaimer under section 107 of the Copyright Act 1976, allowance is made for “fair use”\n            for purposes such as criticism, comment, news reporting, teaching, scholarship, education and\n            research. </li>\n        <h3>H. Licensing And Assets</h3>\n        <li>All codes, graphics, assets, files, and information located on the Quarkz website <span class="sp_txt">quarkz.netlify.app</span> or any of our storage services, such as Firebase, are part of Quarkz. Any usage, reproduction of any of the same without prior consent of owner Mr. Techtroid or Quarkz team is prohibited. </li>\n        <li>YouTube videos used on this website belong to their respective channel owners. Usage of questions and notes are from fair use under education, teaching, and research categories. Simulations used on this website belong to the respective providers.</li>\n        <li>If You Feel Any Content is violating your Copyright and want it to be removed from this site, contact us at the contact us page. We will make sure that we will remove the content in 24 Hours.</li>\n        <h3>I. User Conduct</h3>\n        <li>When using Quarkz, you agree to abide by all applicable laws and regulations, as well as our community guidelines. You also agree to respect the rights and dignity of others and not engage in any conduct that is discriminatory, harassing, or harmful in any way. Any violation of these rules may result in the termination of your account and may also lead to legal action.\n        <h3>J. Indemnification</h3>\n        <li>You agree to indemnify and hold Quarkz, its affiliates, licensors, and their respective directors, officers, agents, and employees, harmless from and against any and all claims, losses, liabilities, damages, costs, and expenses, including reasonable attorneys\' fees, arising out of or related to your use of our website, your violation of these Terms and Conditions, or any unauthorized use of your account.</li>\n        <h3>K. Disclaimer of Warranties</h3>\n        <li>Quarkz does not warrant that the site will be error-free, uninterrupted, or secure. You acknowledge and agree that your use of the site is at your own risk. Quarkz makes no representations or warranties of any kind, express or implied, regarding the accuracy, completeness, reliability, suitability, or availability of the site or the information, products, services, or related graphics contained on the site for any purpose. To the fullest extent permitted by law, Quarkz disclaims all warranties, including but not limited to warranties of title, non-infringement, merchantability, and fitness for a particular purpose.</li>\n        <h3>L. Limitation of Liability</h3>\n        <li>In no event shall Quarkz be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of or inability to use the site, or for any information, products, services, or related graphics obtained through the site, even if Quarkz has been advised of the possibility of such damages. Some jurisdictions do not allow the exclusion or limitation of liability for incidental or consequential damages, so the above limitation may not apply to you.</li>\n        <h3>M. Governing Law and Jurisdiction</h3>\n        <li>These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without giving effect to any principles of conflicts of law. You agree that any dispute arising from or relating to these Terms and Conditions or your use of the site shall be brought exclusively in the courts located in India, and you hereby consent to the personal jurisdiction and venue of such courts.</li>\n        <h3>N. Termination</h3>\n        <li>We may terminate your access to the site, without cause or notice, which may result in the forfeiture and destruction of all information associated with your account. All provisions of these Terms and Conditions that by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.</li>\n        <h3>O. Entire Agreement</h3>\n        <li>These Terms and Conditions constitute the entire agreement between you and Quarkz and supersedes all prior or contemporaneous agreements, representations, warranties, and understandings, whether written or oral, relating to the site.</li>\n        <h3>P. Contact Us</h3>\n        <li>If you have any questions or comments about these Terms and Conditions or our website, please contact us through our "Contact Us" page.</li>\n    </ol>\n</div>';let Zy='\n<span class="in_t" class="" id="fu_topic_title">Add/Edit Topic</span>\n        <div id="aq_basic" style="flex-direction: column;">\n            <input type="text" id="aq_tpcname" class="_in_aq" placeholder="Tests/Topic/Question Bank Name">\n            <select name="type" id="aq_tpclevel" class="_in_aq col-red">\n                <option value="jee">JEE</option>\n                <option value="neet">NEET</option>\n                <option value="foundation">Foundation</option>\n            </select>\n            <input type="text" id="aq_tpc_chapterid" class="_in_aq" placeholder="Chapter ID">\n            <select name="type" id="aq_tpc_subj" class="_in_aq col-red">\n                <option value="physics">Physics</option>\n                <option value="chemistry">Chemistry</option>\n                <option value="maths">Maths</option>\n                <option value="biology">Biology</option>\n                <option value="computer">Computer</option>\n                <option value="statistics">Statistics</option>\n                <option value="unfiled">Unfiled</option>\n            </select>\n        </div>\n        <div id="aq_test_extra" style="flex-direction: column;">\n            <input type="text" id="aq_tst_batches" class="_in_aq" placeholder="Batch ID">\n            <input type="datetime-local" id="aq_tst_stron" class="_in_aq">\n            <input type="datetime-local" id="aq_tst_endon" class="_in_aq">\n            <input type="text" id="aq_tst_syllabi" class="_in_aq" placeholder="Syllabus">\n            <input type="number" id="aq_tst_timealotted" class="_in_aq" placeholder="Time Alloted">\n        </div>\n        <div id="lqadd" style="display: flex;flex-direction: row;margin:10px;height: 50vh;">\n            <div id="question_list"\n                style="border: 2px lime solid;width: 15vw;height:50vh;display: flex;flex-direction: column;align-items: center;text-align: center;font-size: 3vh;overflow-y: scroll;"\n                class="title-notes"></span>\n            </div>\n            <div\n                style="border: 2px lime solid;width:75vw;display: flex;flex-direction: column;overflow-y: scroll;height:50vh;">\n                <select name="type" id="aq_mode" class="_in_aq col-red">\n                    <option value="question">Question</option>\n                    <option value="lesson">Lesson</option>\n                    <option value="exam">Exam</option>\n                </select>\n                <div class="flex_type" id="aq_exams">\n                    <input type="text" id="aq_examname" class="_in_aq" placeholder="Exam Names">\n                    <input type="text" id="aq_examdate" class="_in_aq" placeholder="Exam Dates">\n                    <input type="text" id="aq_examinfo" class="_in_aq" placeholder="Exam Info Link">\n                    <input type="text" id="aq_examsyllabus" class="_in_aq" placeholder="Syllabus Link">\n                </div>\n                <div class="flex_type" id="aq_all" style="align-items: unset;" id="aq_uiad">\n                    <div class="summernote" id="aq_qtext">Question</div>\n                    <input type="text" id="aq_answer" class="_in_aq" placeholder="Answer">\n                    <input type="url" id="aq_yurl" class="_in_aq" placeholder="Youtube ID">\n                    <div class="summernote" id="aq_expl">Explanation</div>\n                    <textarea type="answer" id="aq_hint" class="_in_aq" style="resize: none;overflow-y: scroll;"\n                        placeholder="Hint"></textarea>\n                    <input type="number" id="aq_posmrks" class="_in_aq" placeholder="Marks For Correct">\n                    <input type="number" id="aq_negmrks" class="_in_aq" placeholder="Marks For Incorrect">\n                    <select name="type" id="aq_section" class="_in_aq col-red">\n                        <option value="Physics">Physics</option>\n                        <option value="Chemistry">Chemistry</option>\n                        <option value="Math">Math</option>\n                        <option value="Biology">Biology</option>\n                        <option value="Computer">Computer</option>\n                        <option value="Statistics">Statistics</option>\n                        <option value="Unfiled">Unfiled</option>\n                    </select>\n                </div>\n                <div id="aq_ans_hold">\n                    <select name="type" id="aq_type" class="_in_aq col-red">\n                        <option value="mcq">MCQ</option>\n                        <option value="mcq_multiple">MCQ Multiple</option>\n                        <option value="matrix">Matrix</option>\n                        <option value="numerical">Numerical</option>\n                        <option value="explain">Explain</option>\n                        <option value="fill">Fill In The Blanks</option>\n                    </select>\n                    <div id="aq_mcq_con" class="flex_type">\n                        <div class="aq_mcq_p" onclick="changeColor(this)"><input class="aq_mcq"></div>\n                        <div class="aq_mcq_p" onclick="changeColor(this)"><input class="aq_mcq"></div>\n                        <div class="aq_mcq_p" onclick="changeColor(this)"><input class="aq_mcq"></div>\n                        <div class="aq_mcq_p" onclick="changeColor(this)"><input class="aq_mcq"></div>\n                    </div>\n                    <div id="aq_matrix">\n                        <table>\n                            <tr>\n                                <td><input class="aq_i1"><input class="aq_i2"></td>\n                            </tr>\n                            <tr>\n                                <td><input class="aq_i1"><input class="aq_i2"></td>\n                            </tr>\n                            <tr>\n                                <td><input class="aq_i1"><input class="aq_i2"></td>\n                            </tr>\n                            <tr>\n                                <td><input class="aq_i1"><input class="aq_i2"></td>\n                            </tr>\n                        </table>\n                    </div>\n                    <button class="tst_btn rpl" id="aq_ao">Add Option</button>\n                    <button class="tst_btn rpl" id="aq_ro">Remove Option</button>\n                </div>\n                <button class="tst_btn rpl" id="aq_re">Remove Entry</button>\n            </div>\n        </div>\n        <button class="tst_btn rpl" id="aq_tpc_save">Save/Update Topic</button>\n        <button class="tst_btn rpl" id="aq_qbc_save">Save/Update QBank</button>\n        <button class="tst_btn rpl" id="aq_tst_save">Save/Update Test</button>\n        <button class="tst_btn rpl" id="aq_exam_save">Save/Update Exams</button>\n        <button class="tst_btn rpl" id="aq_export">Export</button>\n\n',tv='\n<span style="font-size: 5vh;color:yellow" id="tp_title">Topic Name</span>\n        <hr width="100%" color="white">\n        <div class="flex_type" style="flex-direction: row;flex-wrap: wrap;">\n            <span style="font-size: 3vh;color:yellow" id="tp_lsno">Lesson Name</span>\n            <button class="tst_btn rpl" id="tp_nxt">Next</button>\n            <button class="tst_btn rpl" id="tp_prv">Previous</button>\n            <button class="tst_btn rpl" id="tp_pnt" style="display: none;">Export</button>\n            <button class="tst_btn rpl" id="tp_edt" style="display: none;">Edit</button>\n        </div>\n        <hr width="100%" color="white">\n        <div id="tp_lesson" style="width: 80%;">\n            <div id="tp_full_vid">\n                \x3c!-- <iframe id = "video" style = "width:80%; height: 450px; border-style: solid; ;border-width: 10px;" hidden = "True"  allow = "autoplay"></iframe> --\x3e\n                <div style="pointer-events: none;width:100%;">\n                    <div>\n                        <div id="player" style="width: 100%;"></div>\n                    </div>\n                    <div id="yt_progressBar" style="width:100%;">\n                        <div id="yt_progressBar_in"></div>\n                    </div>\n                </div>\n                <div id="toolbar"\n                    style="border:3px solid grey; border-radius: 10px 10px 10px 10px;padding-left: 5px;padding-right: 5px;">\n                    <span class="material-icons" id="tp_bw_btn" onclick="player.seekTo(player.getCurrentTime()-10)"\n                        title="-10 Seconds">fast_rewind</span>\n                    <span class="material-icons" id="tp_pl_btn" title="Play"\n                        onclick="player.playVideo()">play_arrow</span>\n                    <span class="material-icons" id="tb_pa_btn" title="Pause" onclick="player.pauseVideo()">pause</span>\n                    <span class="material-icons" onclick="player.stopVideo()" id="tb_st_btn" title="Stop">stop</span>\n                    <span class="material-icons" id="tb_fw_btn" onclick="player.seekTo(player.getCurrentTime()+10)"\n                        title="+10 Seconds">fast_forward</span>\n                    <span id="mute" class="material-icons" id="tb_um_btn" onclick="volumetype()"\n                        title="Mute/Unmute">volume_up</span>\n                    <span id="mute" class="material-icons" id="tb_um_btn" title="Mute/Unmute"\n                        onclick="fullscreen()">fit_screen</span>\n                    <span class="material-symbols-outlined" id="tb_wy_btn" onclick="window.open(player.getVideoUrl())"\n                        title="Watch On Youtube">youtube_activity</span>\n                    <input type="range" min="0" max="100" value="50" id="tb_vl_br" style="background-color: grey;"\n                        onchange="volumechange()" oninput="volumechange()">\n                </div>\n            </div>\n            <div>\n                <div id="tp_expl" style="height:max-content;min-height: 12vh;text-align: left;">Explanation</div>\n                <img id="tp_lsimg">\n            </div>\n        </div>\n\n        <div id="tp_question" style="width: 80%;align-items: center;display: flex;flex-direction: column;">\n            <div id="tp_qtext" style="width:80%;height:max-content;min-height: 12vh;">Question</div>\n            <div id="tp_ans_hold">\n                <input type="answer" id="tp_answer" class="_in_aq" placeholder="Answer">\n                <div id="tp_mcq_con" class="flex_type">\n                </div>\n                <div id="tp_matrix">\n                    <table>\n                        <tr>\n                            <td><span class="tp_i1"></span><span class="tp_i2"></span></td>\n                        </tr>\n                        <tr>\n                            <td><span class="tp_i1"></span><span class="tp_i2"></span></td>\n                        </tr>\n                        <tr>\n                            <td><span class="tp_i1"></span><span class="tp_i2"></span></td>\n                        </tr>\n                        <tr>\n                            <td><span class="tp_i1"></span><span class="tp_i2"></span></td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n\n            <div>\n                <button class="tst_btn rpl" id="tp_sbm">Submit</button>\n                <div id="tp_status"></div>\n            </div>\n            <div id="tp_hint" style="display: none;">Hint</div>\n            <div id="tp_e_answer" style="display: none;">Answer</div>\n            <div id="tp_a_expl" style="display: none;">Explanation</div>\n        </div>';let ev='\n<span class="in_t">Users</span>\n        <hr color="white" width="100%">\n        <div\n            style="border:orangered 3px solid;border-radius: 30px;display: flex;flex-direction: column;align-items: center;width:80%;">\n            <span style="font-size:3vh;color:yellow;width:80%;">Add Users</span><iframe\n                href="index.html#/register"></iframe>\n        </div>\n        <hr color="white" width="50%">\n        <input type="answer" id="us_user" class="_in_aq" placeholder="username">\n\n';let nv='\n<div id="un_list" style="border:3px solid grey;width:25vw;height:90%"></div>\n        <div id="un_render" style="width:77vw;height:100%">\n            <div id="un_tools" style="width:100%;display: flex;flex-direction: row;flex-wrap: wrap;">\n                <select id="un_rendermode" class="_in_aq" style="width: 100px;color:red;"\n                    value="edit">\n                    <option value="edit">edit</option>\n                    <option value="preview">preview</option>\n                </select>\n                <select id="un_viewership" class="_in_aq" style="width: 100px;color:red;">\n                    <option value="private">private</option>\n                    <option value="public_view">public(view_only)</option>\n                    <option value="public">public</option>\n                </select>\n                <input id="un_title" type="text" class="_in_aq" style="width:20vw;" value="Notes Title">\n                <button id="un_save" class="rpl tst_btn" style="height: 30px;">Save</button>\n                <button id="un_print" class="rpl tst_btn" style="height: 30px;">Print</button>\n                <input id="un_colorpicker" type="color" name="favcolor" value="#ff0000"\n                    style="width:5vw;height:30px;background-color: transparent;border:none" onchange="notesUIHandler()">\n            </div>\n            <div id="un_edit" style="height:90%;width:100%">\n                <div class="summernote" id="un_editable" style="height:90%">Notes</div>\n            </div>\n            <div id="un_preview" style="height:90%;width:100%;overflow:scroll">\n            </div>\n            <iframe style="display: none;" id="un_print_iframe"></iframe>\n        </div>\n';async function iv(){return await navigator.mediaDevices.getDisplayMedia({audio:!0,video:{mediaSource:"screen"}})}function sv(t,e){let n=[];const i=new MediaRecorder(t);return i.ondataavailable=function(t){t.data.size>0&&n.push(t.data)},i.onstop=function(){rv(n),n=[]},i.start(200),i}function rv(t){const e=new Blob(t,{type:"video/webm"});let n=window.prompt("Enter file name"),i=document.createElement("a");i.href=URL.createObjectURL(e),i.download=`${n}.webm`,document.body.appendChild(i),i.click(),URL.revokeObjectURL(e),document.body.removeChild(i)}function ov(t){return t}var av=1,lv=2,cv=3,uv=4,hv=1e-6;function dv(t){return"translate("+t+",0)"}function pv(t){return"translate(0,"+t+")"}function fv(t){return e=>+t(e)}function mv(t,e){return e=Math.max(0,t.bandwidth()-2*e)/2,t.round()&&(e=Math.round(e)),n=>+t(n)+e}function gv(){return!this.__axis}function yv(t,e){var n=[],i=null,s=null,r=6,o=6,a=3,l="undefined"!=typeof window&&window.devicePixelRatio>1?0:.5,c=t===av||t===uv?-1:1,u=t===uv||t===lv?"x":"y",h=t===av||t===cv?dv:pv;function d(d){var p=null==i?e.ticks?e.ticks.apply(e,n):e.domain():i,f=null==s?e.tickFormat?e.tickFormat.apply(e,n):ov:s,m=Math.max(r,0)+a,g=e.range(),y=+g[0]+l,v=+g[g.length-1]+l,_=(e.bandwidth?mv:fv)(e.copy(),l),w=d.selection?d.selection():d,b=w.selectAll(".domain").data([null]),T=w.selectAll(".tick").data(p,e).order(),E=T.exit(),k=T.enter().append("g").attr("class","tick"),A=T.select("line"),I=T.select("text");b=b.merge(b.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),T=T.merge(k),A=A.merge(k.append("line").attr("stroke","currentColor").attr(u+"2",c*r)),I=I.merge(k.append("text").attr("fill","currentColor").attr(u,c*m).attr("dy",t===av?"0em":t===cv?"0.71em":"0.32em")),d!==w&&(b=b.transition(d),T=T.transition(d),A=A.transition(d),I=I.transition(d),E=E.transition(d).attr("opacity",hv).attr("transform",(function(t){return isFinite(t=_(t))?h(t+l):this.getAttribute("transform")})),k.attr("opacity",hv).attr("transform",(function(t){var e=this.parentNode.__axis;return h((e&&isFinite(e=e(t))?e:_(t))+l)}))),E.remove(),b.attr("d",t===uv||t===lv?o?"M"+c*o+","+y+"H"+l+"V"+v+"H"+c*o:"M"+l+","+y+"V"+v:o?"M"+y+","+c*o+"V"+l+"H"+v+"V"+c*o:"M"+y+","+l+"H"+v),T.attr("opacity",1).attr("transform",(function(t){return h(_(t)+l)})),A.attr(u+"2",c*r),I.attr(u,c*m).text(f),w.filter(gv).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===lv?"start":t===uv?"end":"middle"),w.each((function(){this.__axis=_}))}return d.scale=function(t){return arguments.length?(e=t,d):e},d.ticks=function(){return n=Array.from(arguments),d},d.tickArguments=function(t){return arguments.length?(n=null==t?[]:Array.from(t),d):n.slice()},d.tickValues=function(t){return arguments.length?(i=null==t?null:Array.from(t),d):i&&i.slice()},d.tickFormat=function(t){return arguments.length?(s=t,d):s},d.tickSize=function(t){return arguments.length?(r=o=+t,d):r},d.tickSizeInner=function(t){return arguments.length?(r=+t,d):r},d.tickSizeOuter=function(t){return arguments.length?(o=+t,d):o},d.tickPadding=function(t){return arguments.length?(a=+t,d):a},d.offset=function(t){return arguments.length?(l=+t,d):l},d}var vv={value:()=>{}};function _v(){for(var t,e=0,n=arguments.length,i={};e<n;++e){if(!(t=arguments[e]+"")||t in i||/[\s.]/.test(t))throw new Error("illegal type: "+t);i[t]=[]}return new wv(i)}function wv(t){this._=t}function bv(t,e){for(var n,i=0,s=t.length;i<s;++i)if((n=t[i]).name===e)return n.value}function Tv(t,e,n){for(var i=0,s=t.length;i<s;++i)if(t[i].name===e){t[i]=vv,t=t.slice(0,i).concat(t.slice(i+1));break}return null!=n&&t.push({name:e,value:n}),t}wv.prototype=_v.prototype={constructor:wv,on:function(t,e){var n,i,s=this._,r=(i=s,(t+"").trim().split(/^|\s+/).map((function(t){var e="",n=t.indexOf(".");if(n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),t&&!i.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}}))),o=-1,a=r.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++o<a;)if(n=(t=r[o]).type)s[n]=Tv(s[n],t.name,e);else if(null==e)for(n in s)s[n]=Tv(s[n],t.name,null);return this}for(;++o<a;)if((n=(t=r[o]).type)&&(n=bv(s[n],t.name)))return n},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new wv(t)},call:function(t,e){if((n=arguments.length-2)>0)for(var n,i,s=new Array(n),r=0;r<n;++r)s[r]=arguments[r+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(r=0,n=(i=this._[t]).length;r<n;++r)i[r].value.apply(e,s)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],s=0,r=i.length;s<r;++s)i[s].value.apply(e,n)}};var Ev=_v;function kv(){}function Av(t){return null==t?kv:function(){return this.querySelector(t)}}function Iv(){return[]}function xv(t){return null==t?Iv:function(){return this.querySelectorAll(t)}}function Cv(t){return function(){return null==(e=t.apply(this,arguments))?[]:Array.isArray(e)?e:Array.from(e);var e}}function Sv(t){return function(){return this.matches(t)}}function qv(t){return function(e){return e.matches(t)}}var Nv=Array.prototype.find;function Dv(){return this.firstElementChild}var Rv=Array.prototype.filter;function Lv(){return Array.from(this.children)}function Mv(t){return new Array(t.length)}function Ov(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}function Pv(t,e,n,i,s,r){for(var o,a=0,l=e.length,c=r.length;a<c;++a)(o=e[a])?(o.__data__=r[a],i[a]=o):n[a]=new Ov(t,r[a]);for(;a<l;++a)(o=e[a])&&(s[a]=o)}function Uv(t,e,n,i,s,r,o){var a,l,c,u=new Map,h=e.length,d=r.length,p=new Array(h);for(a=0;a<h;++a)(l=e[a])&&(p[a]=c=o.call(l,l.__data__,a,e)+"",u.has(c)?s[a]=l:u.set(c,l));for(a=0;a<d;++a)c=o.call(t,r[a],a,r)+"",(l=u.get(c))?(i[a]=l,l.__data__=r[a],u.delete(c)):n[a]=new Ov(t,r[a]);for(a=0;a<h;++a)(l=e[a])&&u.get(p[a])===l&&(s[a]=l)}function Fv(t){return t.__data__}function Vv(t){return"object"==typeof t&&"length"in t?t:Array.from(t)}function Bv(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}Ov.prototype={constructor:Ov,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var jv="http://www.w3.org/1999/xhtml",zv={svg:"http://www.w3.org/2000/svg",xhtml:jv,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Hv(t){var e=t+="",n=e.indexOf(":");return n>=0&&"xmlns"!==(e=t.slice(0,n))&&(t=t.slice(n+1)),zv.hasOwnProperty(e)?{space:zv[e],local:t}:t}function $v(t){return function(){this.removeAttribute(t)}}function Wv(t){return function(){this.removeAttributeNS(t.space,t.local)}}function Gv(t,e){return function(){this.setAttribute(t,e)}}function Kv(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function Qv(t,e){return function(){var n=e.apply(this,arguments);null==n?this.removeAttribute(t):this.setAttribute(t,n)}}function Yv(t,e){return function(){var n=e.apply(this,arguments);null==n?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}function Xv(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function Jv(t){return function(){this.style.removeProperty(t)}}function Zv(t,e,n){return function(){this.style.setProperty(t,e,n)}}function t_(t,e,n){return function(){var i=e.apply(this,arguments);null==i?this.style.removeProperty(t):this.style.setProperty(t,i,n)}}function e_(t,e){return t.style.getPropertyValue(e)||Xv(t).getComputedStyle(t,null).getPropertyValue(e)}function n_(t){return function(){delete this[t]}}function i_(t,e){return function(){this[t]=e}}function s_(t,e){return function(){var n=e.apply(this,arguments);null==n?delete this[t]:this[t]=n}}function r_(t){return t.trim().split(/^|\s+/)}function o_(t){return t.classList||new a_(t)}function a_(t){this._node=t,this._names=r_(t.getAttribute("class")||"")}function l_(t,e){for(var n=o_(t),i=-1,s=e.length;++i<s;)n.add(e[i])}function c_(t,e){for(var n=o_(t),i=-1,s=e.length;++i<s;)n.remove(e[i])}function u_(t){return function(){l_(this,t)}}function h_(t){return function(){c_(this,t)}}function d_(t,e){return function(){(e.apply(this,arguments)?l_:c_)(this,t)}}function p_(){this.textContent=""}function f_(t){return function(){this.textContent=t}}function m_(t){return function(){var e=t.apply(this,arguments);this.textContent=null==e?"":e}}function g_(){this.innerHTML=""}function y_(t){return function(){this.innerHTML=t}}function v_(t){return function(){var e=t.apply(this,arguments);this.innerHTML=null==e?"":e}}function __(){this.nextSibling&&this.parentNode.appendChild(this)}function w_(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function b_(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===jv&&e.documentElement.namespaceURI===jv?e.createElement(t):e.createElementNS(n,t)}}function T_(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function E_(t){var e=Hv(t);return(e.local?T_:b_)(e)}function k_(){return null}function A_(){var t=this.parentNode;t&&t.removeChild(this)}function I_(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function x_(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function C_(t){return function(){var e=this.__on;if(e){for(var n,i=0,s=-1,r=e.length;i<r;++i)n=e[i],t.type&&n.type!==t.type||n.name!==t.name?e[++s]=n:this.removeEventListener(n.type,n.listener,n.options);++s?e.length=s:delete this.__on}}}function S_(t,e,n){return function(){var i,s=this.__on,r=function(t){return function(e){t.call(this,e,this.__data__)}}(e);if(s)for(var o=0,a=s.length;o<a;++o)if((i=s[o]).type===t.type&&i.name===t.name)return this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=r,i.options=n),void(i.value=e);this.addEventListener(t.type,r,n),i={type:t.type,name:t.name,value:e,listener:r,options:n},s?s.push(i):this.__on=[i]}}function q_(t,e,n){var i=Xv(t),s=i.CustomEvent;"function"==typeof s?s=new s(e,n):(s=i.document.createEvent("Event"),n?(s.initEvent(e,n.bubbles,n.cancelable),s.detail=n.detail):s.initEvent(e,!1,!1)),t.dispatchEvent(s)}function N_(t,e){return function(){return q_(this,t,e)}}function D_(t,e){return function(){return q_(this,t,e.apply(this,arguments))}}a_.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var R_=[null];function L_(t,e){this._groups=t,this._parents=e}function M_(){return new L_([[document.documentElement]],R_)}L_.prototype=M_.prototype={constructor:L_,select:function(t){"function"!=typeof t&&(t=Av(t));for(var e=this._groups,n=e.length,i=new Array(n),s=0;s<n;++s)for(var r,o,a=e[s],l=a.length,c=i[s]=new Array(l),u=0;u<l;++u)(r=a[u])&&(o=t.call(r,r.__data__,u,a))&&("__data__"in r&&(o.__data__=r.__data__),c[u]=o);return new L_(i,this._parents)},selectAll:function(t){t="function"==typeof t?Cv(t):xv(t);for(var e=this._groups,n=e.length,i=[],s=[],r=0;r<n;++r)for(var o,a=e[r],l=a.length,c=0;c<l;++c)(o=a[c])&&(i.push(t.call(o,o.__data__,c,a)),s.push(o));return new L_(i,s)},selectChild:function(t){return this.select(null==t?Dv:function(t){return function(){return Nv.call(this.children,t)}}("function"==typeof t?t:qv(t)))},selectChildren:function(t){return this.selectAll(null==t?Lv:function(t){return function(){return Rv.call(this.children,t)}}("function"==typeof t?t:qv(t)))},filter:function(t){"function"!=typeof t&&(t=Sv(t));for(var e=this._groups,n=e.length,i=new Array(n),s=0;s<n;++s)for(var r,o=e[s],a=o.length,l=i[s]=[],c=0;c<a;++c)(r=o[c])&&t.call(r,r.__data__,c,o)&&l.push(r);return new L_(i,this._parents)},data:function(t,e){if(!arguments.length)return Array.from(this,Fv);var n,i=e?Uv:Pv,s=this._parents,r=this._groups;"function"!=typeof t&&(n=t,t=function(){return n});for(var o=r.length,a=new Array(o),l=new Array(o),c=new Array(o),u=0;u<o;++u){var h=s[u],d=r[u],p=d.length,f=Vv(t.call(h,h&&h.__data__,u,s)),m=f.length,g=l[u]=new Array(m),y=a[u]=new Array(m);i(h,d,g,y,c[u]=new Array(p),f,e);for(var v,_,w=0,b=0;w<m;++w)if(v=g[w]){for(w>=b&&(b=w+1);!(_=y[b])&&++b<m;);v._next=_||null}}return(a=new L_(a,s))._enter=l,a._exit=c,a},enter:function(){return new L_(this._enter||this._groups.map(Mv),this._parents)},exit:function(){return new L_(this._exit||this._groups.map(Mv),this._parents)},join:function(t,e,n){var i=this.enter(),s=this,r=this.exit();return"function"==typeof t?(i=t(i))&&(i=i.selection()):i=i.append(t+""),null!=e&&(s=e(s))&&(s=s.selection()),null==n?r.remove():n(r),i&&s?i.merge(s).order():s},merge:function(t){for(var e=t.selection?t.selection():t,n=this._groups,i=e._groups,s=n.length,r=i.length,o=Math.min(s,r),a=new Array(s),l=0;l<o;++l)for(var c,u=n[l],h=i[l],d=u.length,p=a[l]=new Array(d),f=0;f<d;++f)(c=u[f]||h[f])&&(p[f]=c);for(;l<s;++l)a[l]=n[l];return new L_(a,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var i,s=t[e],r=s.length-1,o=s[r];--r>=0;)(i=s[r])&&(o&&4^i.compareDocumentPosition(o)&&o.parentNode.insertBefore(i,o),o=i);return this},sort:function(t){function e(e,n){return e&&n?t(e.__data__,n.__data__):!e-!n}t||(t=Bv);for(var n=this._groups,i=n.length,s=new Array(i),r=0;r<i;++r){for(var o,a=n[r],l=a.length,c=s[r]=new Array(l),u=0;u<l;++u)(o=a[u])&&(c[u]=o);c.sort(e)}return new L_(s,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],s=0,r=i.length;s<r;++s){var o=i[s];if(o)return o}return null},size:function(){let t=0;for(const e of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var e=this._groups,n=0,i=e.length;n<i;++n)for(var s,r=e[n],o=0,a=r.length;o<a;++o)(s=r[o])&&t.call(s,s.__data__,o,r);return this},attr:function(t,e){var n=Hv(t);if(arguments.length<2){var i=this.node();return n.local?i.getAttributeNS(n.space,n.local):i.getAttribute(n)}return this.each((null==e?n.local?Wv:$v:"function"==typeof e?n.local?Yv:Qv:n.local?Kv:Gv)(n,e))},style:function(t,e,n){return arguments.length>1?this.each((null==e?Jv:"function"==typeof e?t_:Zv)(t,e,null==n?"":n)):e_(this.node(),t)},property:function(t,e){return arguments.length>1?this.each((null==e?n_:"function"==typeof e?s_:i_)(t,e)):this.node()[t]},classed:function(t,e){var n=r_(t+"");if(arguments.length<2){for(var i=o_(this.node()),s=-1,r=n.length;++s<r;)if(!i.contains(n[s]))return!1;return!0}return this.each(("function"==typeof e?d_:e?u_:h_)(n,e))},text:function(t){return arguments.length?this.each(null==t?p_:("function"==typeof t?m_:f_)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?g_:("function"==typeof t?v_:y_)(t)):this.node().innerHTML},raise:function(){return this.each(__)},lower:function(){return this.each(w_)},append:function(t){var e="function"==typeof t?t:E_(t);return this.select((function(){return this.appendChild(e.apply(this,arguments))}))},insert:function(t,e){var n="function"==typeof t?t:E_(t),i=null==e?k_:"function"==typeof e?e:Av(e);return this.select((function(){return this.insertBefore(n.apply(this,arguments),i.apply(this,arguments)||null)}))},remove:function(){return this.each(A_)},clone:function(t){return this.select(t?x_:I_)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,e,n){var i,s,r=function(t){return t.trim().split(/^|\s+/).map((function(t){var e="",n=t.indexOf(".");return n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),{type:t,name:e}}))}(t+""),o=r.length;if(!(arguments.length<2)){for(a=e?S_:C_,i=0;i<o;++i)this.each(a(r[i],e,n));return this}var a=this.node().__on;if(a)for(var l,c=0,u=a.length;c<u;++c)for(i=0,l=a[c];i<o;++i)if((s=r[i]).type===l.type&&s.name===l.name)return l.value},dispatch:function(t,e){return this.each(("function"==typeof e?D_:N_)(t,e))},[Symbol.iterator]:function*(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i,s=t[e],r=0,o=s.length;r<o;++r)(i=s[r])&&(yield i)}};var O_=M_;function P_(t,e,n){t.prototype=e.prototype=n,n.constructor=t}function U_(t,e){var n=Object.create(t.prototype);for(var i in e)n[i]=e[i];return n}function F_(){}var V_=.7,B_=1.4285714285714286,j_="\\s*([+-]?\\d+)\\s*",z_="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",H_="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",$_=/^#([0-9a-f]{3,8})$/,W_=new RegExp(`^rgb\\(${j_},${j_},${j_}\\)$`),G_=new RegExp(`^rgb\\(${H_},${H_},${H_}\\)$`),K_=new RegExp(`^rgba\\(${j_},${j_},${j_},${z_}\\)$`),Q_=new RegExp(`^rgba\\(${H_},${H_},${H_},${z_}\\)$`),Y_=new RegExp(`^hsl\\(${z_},${H_},${H_}\\)$`),X_=new RegExp(`^hsla\\(${z_},${H_},${H_},${z_}\\)$`),J_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function Z_(){return this.rgb().formatHex()}function tw(){return this.rgb().formatRgb()}function ew(t){var e,n;return t=(t+"").trim().toLowerCase(),(e=$_.exec(t))?(n=e[1].length,e=parseInt(e[1],16),6===n?nw(e):3===n?new rw(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1):8===n?iw(e>>24&255,e>>16&255,e>>8&255,(255&e)/255):4===n?iw(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|240&e,((15&e)<<4|15&e)/255):null):(e=W_.exec(t))?new rw(e[1],e[2],e[3],1):(e=G_.exec(t))?new rw(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=K_.exec(t))?iw(e[1],e[2],e[3],e[4]):(e=Q_.exec(t))?iw(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=Y_.exec(t))?hw(e[1],e[2]/100,e[3]/100,1):(e=X_.exec(t))?hw(e[1],e[2]/100,e[3]/100,e[4]):J_.hasOwnProperty(t)?nw(J_[t]):"transparent"===t?new rw(NaN,NaN,NaN,0):null}function nw(t){return new rw(t>>16&255,t>>8&255,255&t,1)}function iw(t,e,n,i){return i<=0&&(t=e=n=NaN),new rw(t,e,n,i)}function sw(t,e,n,i){return 1===arguments.length?((s=t)instanceof F_||(s=ew(s)),s?new rw((s=s.rgb()).r,s.g,s.b,s.opacity):new rw):new rw(t,e,n,null==i?1:i);var s}function rw(t,e,n,i){this.r=+t,this.g=+e,this.b=+n,this.opacity=+i}function ow(){return`#${uw(this.r)}${uw(this.g)}${uw(this.b)}`}function aw(){const t=lw(this.opacity);return`${1===t?"rgb(":"rgba("}${cw(this.r)}, ${cw(this.g)}, ${cw(this.b)}${1===t?")":`, ${t})`}`}function lw(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function cw(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function uw(t){return((t=cw(t))<16?"0":"")+t.toString(16)}function hw(t,e,n,i){return i<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new pw(t,e,n,i)}function dw(t){if(t instanceof pw)return new pw(t.h,t.s,t.l,t.opacity);if(t instanceof F_||(t=ew(t)),!t)return new pw;if(t instanceof pw)return t;var e=(t=t.rgb()).r/255,n=t.g/255,i=t.b/255,s=Math.min(e,n,i),r=Math.max(e,n,i),o=NaN,a=r-s,l=(r+s)/2;return a?(o=e===r?(n-i)/a+6*(n<i):n===r?(i-e)/a+2:(e-n)/a+4,a/=l<.5?r+s:2-r-s,o*=60):a=l>0&&l<1?0:o,new pw(o,a,l,t.opacity)}function pw(t,e,n,i){this.h=+t,this.s=+e,this.l=+n,this.opacity=+i}function fw(t){return(t=(t||0)%360)<0?t+360:t}function mw(t){return Math.max(0,Math.min(1,t||0))}function gw(t,e,n){return 255*(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)}function yw(t,e,n,i,s){var r=t*t,o=r*t;return((1-3*t+3*r-o)*e+(4-6*r+3*o)*n+(1+3*t+3*r-3*o)*i+o*s)/6}P_(F_,ew,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:Z_,formatHex:Z_,formatHex8:function(){return this.rgb().formatHex8()},formatHsl:function(){return dw(this).formatHsl()},formatRgb:tw,toString:tw}),P_(rw,sw,U_(F_,{brighter(t){return t=null==t?B_:Math.pow(B_,t),new rw(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=null==t?V_:Math.pow(V_,t),new rw(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new rw(cw(this.r),cw(this.g),cw(this.b),lw(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:ow,formatHex:ow,formatHex8:function(){return`#${uw(this.r)}${uw(this.g)}${uw(this.b)}${uw(255*(isNaN(this.opacity)?1:this.opacity))}`},formatRgb:aw,toString:aw})),P_(pw,(function(t,e,n,i){return 1===arguments.length?dw(t):new pw(t,e,n,null==i?1:i)}),U_(F_,{brighter(t){return t=null==t?B_:Math.pow(B_,t),new pw(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=null==t?V_:Math.pow(V_,t),new pw(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,i=n+(n<.5?n:1-n)*e,s=2*n-i;return new rw(gw(t>=240?t-240:t+120,s,i),gw(t,s,i),gw(t<120?t+240:t-120,s,i),this.opacity)},clamp(){return new pw(fw(this.h),mw(this.s),mw(this.l),lw(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=lw(this.opacity);return`${1===t?"hsl(":"hsla("}${fw(this.h)}, ${100*mw(this.s)}%, ${100*mw(this.l)}%${1===t?")":`, ${t})`}`}}));var vw=t=>()=>t;function _w(t,e){return function(n){return t+n*e}}function ww(t){return 1==(t=+t)?bw:function(e,n){return n-e?function(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(i){return Math.pow(t+i*e,n)}}(e,n,t):vw(isNaN(e)?n:e)}}function bw(t,e){var n=e-t;return n?_w(t,n):vw(isNaN(t)?e:t)}var Tw=function t(e){var n=ww(e);function i(t,e){var i=n((t=sw(t)).r,(e=sw(e)).r),s=n(t.g,e.g),r=n(t.b,e.b),o=bw(t.opacity,e.opacity);return function(e){return t.r=i(e),t.g=s(e),t.b=r(e),t.opacity=o(e),t+""}}return i.gamma=t,i}(1);function Ew(t){return function(e){var n,i,s=e.length,r=new Array(s),o=new Array(s),a=new Array(s);for(n=0;n<s;++n)i=sw(e[n]),r[n]=i.r||0,o[n]=i.g||0,a[n]=i.b||0;return r=t(r),o=t(o),a=t(a),i.opacity=1,function(t){return i.r=r(t),i.g=o(t),i.b=a(t),i+""}}}Ew((function(t){var e=t.length-1;return function(n){var i=n<=0?n=0:n>=1?(n=1,e-1):Math.floor(n*e),s=t[i],r=t[i+1],o=i>0?t[i-1]:2*s-r,a=i<e-1?t[i+2]:2*r-s;return yw((n-i/e)*e,o,s,r,a)}})),Ew((function(t){var e=t.length;return function(n){var i=Math.floor(((n%=1)<0?++n:n)*e),s=t[(i+e-1)%e],r=t[i%e],o=t[(i+1)%e],a=t[(i+2)%e];return yw((n-i/e)*e,s,r,o,a)}}));function kw(t,e){return t=+t,e=+e,function(n){return t*(1-n)+e*n}}var Aw=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Iw=new RegExp(Aw.source,"g");function xw(t,e){var n,i,s,r=Aw.lastIndex=Iw.lastIndex=0,o=-1,a=[],l=[];for(t+="",e+="";(n=Aw.exec(t))&&(i=Iw.exec(e));)(s=i.index)>r&&(s=e.slice(r,s),a[o]?a[o]+=s:a[++o]=s),(n=n[0])===(i=i[0])?a[o]?a[o]+=i:a[++o]=i:(a[++o]=null,l.push({i:o,x:kw(n,i)})),r=Iw.lastIndex;return r<e.length&&(s=e.slice(r),a[o]?a[o]+=s:a[++o]=s),a.length<2?l[0]?function(t){return function(e){return t(e)+""}}(l[0].x):function(t){return function(){return t}}(e):(e=l.length,function(t){for(var n,i=0;i<e;++i)a[(n=l[i]).i]=n.x(t);return a.join("")})}var Cw,Sw,qw=0,Nw=0,Dw=0,Rw=1e3,Lw=0,Mw=0,Ow=0,Pw="object"==typeof performance&&performance.now?performance:Date,Uw="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function Fw(){return Mw||(Uw(Vw),Mw=Pw.now()+Ow)}function Vw(){Mw=0}function Bw(){this._call=this._time=this._next=null}function jw(t,e,n){var i=new Bw;return i.restart(t,e,n),i}function zw(){Mw=(Lw=Pw.now())+Ow,qw=Nw=0;try{!function(){Fw(),++qw;for(var t,e=Cw;e;)(t=Mw-e._time)>=0&&e._call.call(void 0,t),e=e._next;--qw}()}finally{qw=0,function(){var t,e,n=Cw,i=1/0;for(;n;)n._call?(i>n._time&&(i=n._time),t=n,n=n._next):(e=n._next,n._next=null,n=t?t._next=e:Cw=e);Sw=t,$w(i)}(),Mw=0}}function Hw(){var t=Pw.now(),e=t-Lw;e>Rw&&(Ow-=e,Lw=t)}function $w(t){qw||(Nw&&(Nw=clearTimeout(Nw)),t-Mw>24?(t<1/0&&(Nw=setTimeout(zw,t-Pw.now()-Ow)),Dw&&(Dw=clearInterval(Dw))):(Dw||(Lw=Pw.now(),Dw=setInterval(Hw,Rw)),qw=1,Uw(zw)))}function Ww(t,e,n){var i=new Bw;return e=null==e?0:+e,i.restart((n=>{i.stop(),t(n+e)}),e,n),i}Bw.prototype=jw.prototype={constructor:Bw,restart:function(t,e,n){if("function"!=typeof t)throw new TypeError("callback is not a function");n=(null==n?Fw():+n)+(null==e?0:+e),this._next||Sw===this||(Sw?Sw._next=this:Cw=this,Sw=this),this._call=t,this._time=n,$w()},stop:function(){this._call&&(this._call=null,this._time=1/0,$w())}};var Gw=Ev("start","end","cancel","interrupt"),Kw=[],Qw=0,Yw=1,Xw=2,Jw=3,Zw=4,tb=5,eb=6;function nb(t,e,n,i,s,r){var o=t.__transition;if(o){if(n in o)return}else t.__transition={};!function(t,e,n){var i,s=t.__transition;function r(t){n.state=Yw,n.timer.restart(o,n.delay,n.time),n.delay<=t&&o(t-n.delay)}function o(r){var c,u,h,d;if(n.state!==Yw)return l();for(c in s)if((d=s[c]).name===n.name){if(d.state===Jw)return Ww(o);d.state===Zw?(d.state=eb,d.timer.stop(),d.on.call("interrupt",t,t.__data__,d.index,d.group),delete s[c]):+c<e&&(d.state=eb,d.timer.stop(),d.on.call("cancel",t,t.__data__,d.index,d.group),delete s[c])}if(Ww((function(){n.state===Jw&&(n.state=Zw,n.timer.restart(a,n.delay,n.time),a(r))})),n.state=Xw,n.on.call("start",t,t.__data__,n.index,n.group),n.state===Xw){for(n.state=Jw,i=new Array(h=n.tween.length),c=0,u=-1;c<h;++c)(d=n.tween[c].value.call(t,t.__data__,n.index,n.group))&&(i[++u]=d);i.length=u+1}}function a(e){for(var s=e<n.duration?n.ease.call(null,e/n.duration):(n.timer.restart(l),n.state=tb,1),r=-1,o=i.length;++r<o;)i[r].call(t,s);n.state===tb&&(n.on.call("end",t,t.__data__,n.index,n.group),l())}function l(){for(var i in n.state=eb,n.timer.stop(),delete s[e],s)return;delete t.__transition}s[e]=n,n.timer=jw(r,0,n.time)}(t,n,{name:e,index:i,group:s,on:Gw,tween:Kw,time:r.time,delay:r.delay,duration:r.duration,ease:r.ease,timer:null,state:Qw})}function ib(t,e){var n=rb(t,e);if(n.state>Qw)throw new Error("too late; already scheduled");return n}function sb(t,e){var n=rb(t,e);if(n.state>Jw)throw new Error("too late; already running");return n}function rb(t,e){var n=t.__transition;if(!n||!(n=n[e]))throw new Error("transition not found");return n}function ob(t,e){var n,i,s,r=t.__transition,o=!0;if(r){for(s in e=null==e?null:e+"",r)(n=r[s]).name===e?(i=n.state>Xw&&n.state<tb,n.state=eb,n.timer.stop(),n.on.call(i?"interrupt":"cancel",t,t.__data__,n.index,n.group),delete r[s]):o=!1;o&&delete t.__transition}}var ab,lb=180/Math.PI,cb={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function ub(t,e,n,i,s,r){var o,a,l;return(o=Math.sqrt(t*t+e*e))&&(t/=o,e/=o),(l=t*n+e*i)&&(n-=t*l,i-=e*l),(a=Math.sqrt(n*n+i*i))&&(n/=a,i/=a,l/=a),t*i<e*n&&(t=-t,e=-e,l=-l,o=-o),{translateX:s,translateY:r,rotate:Math.atan2(e,t)*lb,skewX:Math.atan(l)*lb,scaleX:o,scaleY:a}}function hb(t,e,n,i){function s(t){return t.length?t.pop()+" ":""}return function(r,o){var a=[],l=[];return r=t(r),o=t(o),function(t,i,s,r,o,a){if(t!==s||i!==r){var l=o.push("translate(",null,e,null,n);a.push({i:l-4,x:kw(t,s)},{i:l-2,x:kw(i,r)})}else(s||r)&&o.push("translate("+s+e+r+n)}(r.translateX,r.translateY,o.translateX,o.translateY,a,l),function(t,e,n,r){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),r.push({i:n.push(s(n)+"rotate(",null,i)-2,x:kw(t,e)})):e&&n.push(s(n)+"rotate("+e+i)}(r.rotate,o.rotate,a,l),function(t,e,n,r){t!==e?r.push({i:n.push(s(n)+"skewX(",null,i)-2,x:kw(t,e)}):e&&n.push(s(n)+"skewX("+e+i)}(r.skewX,o.skewX,a,l),function(t,e,n,i,r,o){if(t!==n||e!==i){var a=r.push(s(r)+"scale(",null,",",null,")");o.push({i:a-4,x:kw(t,n)},{i:a-2,x:kw(e,i)})}else 1===n&&1===i||r.push(s(r)+"scale("+n+","+i+")")}(r.scaleX,r.scaleY,o.scaleX,o.scaleY,a,l),r=o=null,function(t){for(var e,n=-1,i=l.length;++n<i;)a[(e=l[n]).i]=e.x(t);return a.join("")}}}var db=hb((function(t){const e=new("function"==typeof DOMMatrix?DOMMatrix:WebKitCSSMatrix)(t+"");return e.isIdentity?cb:ub(e.a,e.b,e.c,e.d,e.e,e.f)}),"px, ","px)","deg)"),pb=hb((function(t){return null==t?cb:(ab||(ab=document.createElementNS("http://www.w3.org/2000/svg","g")),ab.setAttribute("transform",t),(t=ab.transform.baseVal.consolidate())?ub((t=t.matrix).a,t.b,t.c,t.d,t.e,t.f):cb)}),", ",")",")");function fb(t,e){var n,i;return function(){var s=sb(this,t),r=s.tween;if(r!==n)for(var o=0,a=(i=n=r).length;o<a;++o)if(i[o].name===e){(i=i.slice()).splice(o,1);break}s.tween=i}}function mb(t,e,n){var i,s;if("function"!=typeof n)throw new Error;return function(){var r=sb(this,t),o=r.tween;if(o!==i){s=(i=o).slice();for(var a={name:e,value:n},l=0,c=s.length;l<c;++l)if(s[l].name===e){s[l]=a;break}l===c&&s.push(a)}r.tween=s}}function gb(t,e,n){var i=t._id;return t.each((function(){var t=sb(this,i);(t.value||(t.value={}))[e]=n.apply(this,arguments)})),function(t){return rb(t,i).value[e]}}function yb(t,e){var n;return("number"==typeof e?kw:e instanceof ew?Tw:(n=ew(e))?(e=n,Tw):xw)(t,e)}function vb(t){return function(){this.removeAttribute(t)}}function _b(t){return function(){this.removeAttributeNS(t.space,t.local)}}function wb(t,e,n){var i,s,r=n+"";return function(){var o=this.getAttribute(t);return o===r?null:o===i?s:s=e(i=o,n)}}function bb(t,e,n){var i,s,r=n+"";return function(){var o=this.getAttributeNS(t.space,t.local);return o===r?null:o===i?s:s=e(i=o,n)}}function Tb(t,e,n){var i,s,r;return function(){var o,a,l=n(this);if(null!=l)return(o=this.getAttribute(t))===(a=l+"")?null:o===i&&a===s?r:(s=a,r=e(i=o,l));this.removeAttribute(t)}}function Eb(t,e,n){var i,s,r;return function(){var o,a,l=n(this);if(null!=l)return(o=this.getAttributeNS(t.space,t.local))===(a=l+"")?null:o===i&&a===s?r:(s=a,r=e(i=o,l));this.removeAttributeNS(t.space,t.local)}}function kb(t,e){var n,i;function s(){var s=e.apply(this,arguments);return s!==i&&(n=(i=s)&&function(t,e){return function(n){this.setAttributeNS(t.space,t.local,e.call(this,n))}}(t,s)),n}return s._value=e,s}function Ab(t,e){var n,i;function s(){var s=e.apply(this,arguments);return s!==i&&(n=(i=s)&&function(t,e){return function(n){this.setAttribute(t,e.call(this,n))}}(t,s)),n}return s._value=e,s}function Ib(t,e){return function(){ib(this,t).delay=+e.apply(this,arguments)}}function xb(t,e){return e=+e,function(){ib(this,t).delay=e}}function Cb(t,e){return function(){sb(this,t).duration=+e.apply(this,arguments)}}function Sb(t,e){return e=+e,function(){sb(this,t).duration=e}}var qb=O_.prototype.constructor;function Nb(t){return function(){this.style.removeProperty(t)}}var Db=0;function Rb(t,e,n,i){this._groups=t,this._parents=e,this._name=n,this._id=i}function Lb(){return++Db}var Mb=O_.prototype;Rb.prototype=function(t){return O_().transition(t)}.prototype={constructor:Rb,select:function(t){var e=this._name,n=this._id;"function"!=typeof t&&(t=Av(t));for(var i=this._groups,s=i.length,r=new Array(s),o=0;o<s;++o)for(var a,l,c=i[o],u=c.length,h=r[o]=new Array(u),d=0;d<u;++d)(a=c[d])&&(l=t.call(a,a.__data__,d,c))&&("__data__"in a&&(l.__data__=a.__data__),h[d]=l,nb(h[d],e,n,d,h,rb(a,n)));return new Rb(r,this._parents,e,n)},selectAll:function(t){var e=this._name,n=this._id;"function"!=typeof t&&(t=xv(t));for(var i=this._groups,s=i.length,r=[],o=[],a=0;a<s;++a)for(var l,c=i[a],u=c.length,h=0;h<u;++h)if(l=c[h]){for(var d,p=t.call(l,l.__data__,h,c),f=rb(l,n),m=0,g=p.length;m<g;++m)(d=p[m])&&nb(d,e,n,m,p,f);r.push(p),o.push(l)}return new Rb(r,o,e,n)},selectChild:Mb.selectChild,selectChildren:Mb.selectChildren,filter:function(t){"function"!=typeof t&&(t=Sv(t));for(var e=this._groups,n=e.length,i=new Array(n),s=0;s<n;++s)for(var r,o=e[s],a=o.length,l=i[s]=[],c=0;c<a;++c)(r=o[c])&&t.call(r,r.__data__,c,o)&&l.push(r);return new Rb(i,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error;for(var e=this._groups,n=t._groups,i=e.length,s=n.length,r=Math.min(i,s),o=new Array(i),a=0;a<r;++a)for(var l,c=e[a],u=n[a],h=c.length,d=o[a]=new Array(h),p=0;p<h;++p)(l=c[p]||u[p])&&(d[p]=l);for(;a<i;++a)o[a]=e[a];return new Rb(o,this._parents,this._name,this._id)},selection:function(){return new qb(this._groups,this._parents)},transition:function(){for(var t=this._name,e=this._id,n=Lb(),i=this._groups,s=i.length,r=0;r<s;++r)for(var o,a=i[r],l=a.length,c=0;c<l;++c)if(o=a[c]){var u=rb(o,e);nb(o,t,n,c,a,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new Rb(i,this._parents,t,n)},call:Mb.call,nodes:Mb.nodes,node:Mb.node,size:Mb.size,empty:Mb.empty,each:Mb.each,on:function(t,e){var n=this._id;return arguments.length<2?rb(this.node(),n).on.on(t):this.each(function(t,e,n){var i,s,r=function(t){return(t+"").trim().split(/^|\s+/).every((function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||"start"===t}))}(e)?ib:sb;return function(){var o=r(this,t),a=o.on;a!==i&&(s=(i=a).copy()).on(e,n),o.on=s}}(n,t,e))},attr:function(t,e){var n=Hv(t),i="transform"===n?pb:yb;return this.attrTween(t,"function"==typeof e?(n.local?Eb:Tb)(n,i,gb(this,"attr."+t,e)):null==e?(n.local?_b:vb)(n):(n.local?bb:wb)(n,i,e))},attrTween:function(t,e){var n="attr."+t;if(arguments.length<2)return(n=this.tween(n))&&n._value;if(null==e)return this.tween(n,null);if("function"!=typeof e)throw new Error;var i=Hv(t);return this.tween(n,(i.local?kb:Ab)(i,e))},style:function(t,e,n){var i="transform"==(t+="")?db:yb;return null==e?this.styleTween(t,function(t,e){var n,i,s;return function(){var r=e_(this,t),o=(this.style.removeProperty(t),e_(this,t));return r===o?null:r===n&&o===i?s:s=e(n=r,i=o)}}(t,i)).on("end.style."+t,Nb(t)):"function"==typeof e?this.styleTween(t,function(t,e,n){var i,s,r;return function(){var o=e_(this,t),a=n(this),l=a+"";return null==a&&(this.style.removeProperty(t),l=a=e_(this,t)),o===l?null:o===i&&l===s?r:(s=l,r=e(i=o,a))}}(t,i,gb(this,"style."+t,e))).each(function(t,e){var n,i,s,r,o="style."+e,a="end."+o;return function(){var l=sb(this,t),c=l.on,u=null==l.value[o]?r||(r=Nb(e)):void 0;c===n&&s===u||(i=(n=c).copy()).on(a,s=u),l.on=i}}(this._id,t)):this.styleTween(t,function(t,e,n){var i,s,r=n+"";return function(){var o=e_(this,t);return o===r?null:o===i?s:s=e(i=o,n)}}(t,i,e),n).on("end.style."+t,null)},styleTween:function(t,e,n){var i="style."+(t+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(null==e)return this.tween(i,null);if("function"!=typeof e)throw new Error;return this.tween(i,function(t,e,n){var i,s;function r(){var r=e.apply(this,arguments);return r!==s&&(i=(s=r)&&function(t,e,n){return function(i){this.style.setProperty(t,e.call(this,i),n)}}(t,r,n)),i}return r._value=e,r}(t,e,null==n?"":n))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var e=t(this);this.textContent=null==e?"":e}}(gb(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},textTween:function(t){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(null==t)return this.tween(e,null);if("function"!=typeof t)throw new Error;return this.tween(e,function(t){var e,n;function i(){var i=t.apply(this,arguments);return i!==n&&(e=(n=i)&&function(t){return function(e){this.textContent=t.call(this,e)}}(i)),e}return i._value=t,i}(t))},remove:function(){return this.on("end.remove",(t=this._id,function(){var e=this.parentNode;for(var n in this.__transition)if(+n!==t)return;e&&e.removeChild(this)}));var t},tween:function(t,e){var n=this._id;if(t+="",arguments.length<2){for(var i,s=rb(this.node(),n).tween,r=0,o=s.length;r<o;++r)if((i=s[r]).name===t)return i.value;return null}return this.each((null==e?fb:mb)(n,t,e))},delay:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?Ib:xb)(e,t)):rb(this.node(),e).delay},duration:function(t){var e=this._id;return arguments.length?this.each(("function"==typeof t?Cb:Sb)(e,t)):rb(this.node(),e).duration},ease:function(t){var e=this._id;return arguments.length?this.each(function(t,e){if("function"!=typeof e)throw new Error;return function(){sb(this,t).ease=e}}(e,t)):rb(this.node(),e).ease},easeVarying:function(t){if("function"!=typeof t)throw new Error;return this.each(function(t,e){return function(){var n=e.apply(this,arguments);if("function"!=typeof n)throw new Error;sb(this,t).ease=n}}(this._id,t))},end:function(){var t,e,n=this,i=n._id,s=n.size();return new Promise((function(r,o){var a={value:o},l={value:function(){0==--s&&r()}};n.each((function(){var n=sb(this,i),s=n.on;s!==t&&((e=(t=s).copy())._.cancel.push(a),e._.interrupt.push(a),e._.end.push(l)),n.on=e})),0===s&&r()}))},[Symbol.iterator]:Mb[Symbol.iterator]};var Ob={time:null,delay:0,duration:250,ease:function(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}};function Pb(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))throw new Error(`transition ${e} not found`);return n}O_.prototype.interrupt=function(t){return this.each((function(){ob(this,t)}))},O_.prototype.transition=function(t){var e,n;t instanceof Rb?(e=t._id,t=t._name):(e=Lb(),(n=Ob).time=Fw(),t=null==t?null:t+"");for(var i=this._groups,s=i.length,r=0;r<s;++r)for(var o,a=i[r],l=a.length,c=0;c<l;++c)(o=a[c])&&nb(o,t,e,c,a,n||Pb(o,e));return new Rb(i,this._parents,t,e)};const{abs:Ub,max:Fb,min:Vb}=Math;function Bb(t){return[+t[0],+t[1]]}function jb(t){return[Bb(t[0]),Bb(t[1])]}["w","e"].map(zb),["n","s"].map(zb),["n","w","e","s","nw","ne","sw","se"].map(zb);function zb(t){return{type:t}}Math.sqrt(50),Math.sqrt(10),Math.sqrt(2);function Hb(t,e){return null==t||null==e?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function $b(t,e){return null==t||null==e?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function Wb(t){let e,n,i;function s(t,i,s=0,r=t.length){if(s<r){if(0!==e(i,i))return r;do{const e=s+r>>>1;n(t[e],i)<0?s=e+1:r=e}while(s<r)}return s}return 2!==t.length?(e=Hb,n=(e,n)=>Hb(t(e),n),i=(e,n)=>t(e)-n):(e=t===Hb||t===$b?t:Gb,n=t,i=t),{left:s,center:function(t,e,n=0,r=t.length){const o=s(t,e,n,r-1);return o>n&&i(t[o-1],e)>-i(t[o],e)?o-1:o},right:function(t,i,s=0,r=t.length){if(s<r){if(0!==e(i,i))return r;do{const e=s+r>>>1;n(t[e],i)<=0?s=e+1:r=e}while(s<r)}return s}}}function Gb(){return 0}const Kb=Wb(Hb);Kb.right,Kb.left,Wb((function(t){return null===t?NaN:+t})).center;function Qb(t,e){if((n=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null;var n,i=t.slice(0,n);return[i.length>1?i[0]+i.slice(2):i,+t.slice(n+1)]}function Yb(t){return(t=Qb(Math.abs(t)))?t[1]:NaN}function Xb(t){return function(e){return e.replace(/[0-9]/g,(function(e){return t[+e]}))}}var Jb,Zb=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function tT(t){if(!(e=Zb.exec(t)))throw new Error("invalid format: "+t);var e;return new eT({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}function eT(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function nT(t){t:for(var e,n=t.length,i=1,s=-1;i<n;++i)switch(t[i]){case".":s=e=i;break;case"0":0===s&&(s=i),e=i;break;default:if(!+t[i])break t;s>0&&(s=0)}return s>0?t.slice(0,s)+t.slice(e+1):t}function iT(t,e){var n=Qb(t,e);if(!n)return t+"";var i=n[0],s=n[1];return s<0?"0."+new Array(-s).join("0")+i:i.length>s+1?i.slice(0,s+1)+"."+i.slice(s+1):i+new Array(s-i.length+2).join("0")}tT.prototype=eT.prototype,eT.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var sT={"%":(t,e)=>(100*t).toFixed(e),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,e)=>t.toExponential(e),f:(t,e)=>t.toFixed(e),g:(t,e)=>t.toPrecision(e),o:t=>Math.round(t).toString(8),p:(t,e)=>iT(100*t,e),r:iT,s:function(t,e){var n=Qb(t,e);if(!n)return t+"";var i=n[0],s=n[1],r=s-(Jb=3*Math.max(-8,Math.min(8,Math.floor(s/3))))+1,o=i.length;return r===o?i:r>o?i+new Array(r-o+1).join("0"):r>0?i.slice(0,r)+"."+i.slice(r):"0."+new Array(1-r).join("0")+Qb(t,Math.max(0,e+r-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function rT(t){return t}var oT,aT=Array.prototype.map,lT=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function cT(t){var e,n,i=void 0===t.grouping||void 0===t.thousands?rT:(e=aT.call(t.grouping,Number),n=t.thousands+"",function(t,i){for(var s=t.length,r=[],o=0,a=e[0],l=0;s>0&&a>0&&(l+a+1>i&&(a=Math.max(1,i-l)),r.push(t.substring(s-=a,s+a)),!((l+=a+1)>i));)a=e[o=(o+1)%e.length];return r.reverse().join(n)}),s=void 0===t.currency?"":t.currency[0]+"",r=void 0===t.currency?"":t.currency[1]+"",o=void 0===t.decimal?".":t.decimal+"",a=void 0===t.numerals?rT:Xb(aT.call(t.numerals,String)),l=void 0===t.percent?"%":t.percent+"",c=void 0===t.minus?"−":t.minus+"",u=void 0===t.nan?"NaN":t.nan+"";function h(t){var e=(t=tT(t)).fill,n=t.align,h=t.sign,d=t.symbol,p=t.zero,f=t.width,m=t.comma,g=t.precision,y=t.trim,v=t.type;"n"===v?(m=!0,v="g"):sT[v]||(void 0===g&&(g=12),y=!0,v="g"),(p||"0"===e&&"="===n)&&(p=!0,e="0",n="=");var _="$"===d?s:"#"===d&&/[boxX]/.test(v)?"0"+v.toLowerCase():"",w="$"===d?r:/[%p]/.test(v)?l:"",b=sT[v],T=/[defgprs%]/.test(v);function E(t){var s,r,l,d=_,E=w;if("c"===v)E=b(t)+E,t="";else{var k=(t=+t)<0||1/t<0;if(t=isNaN(t)?u:b(Math.abs(t),g),y&&(t=nT(t)),k&&0==+t&&"+"!==h&&(k=!1),d=(k?"("===h?h:c:"-"===h||"("===h?"":h)+d,E=("s"===v?lT[8+Jb/3]:"")+E+(k&&"("===h?")":""),T)for(s=-1,r=t.length;++s<r;)if(48>(l=t.charCodeAt(s))||l>57){E=(46===l?o+t.slice(s+1):t.slice(s))+E,t=t.slice(0,s);break}}m&&!p&&(t=i(t,1/0));var A=d.length+t.length+E.length,I=A<f?new Array(f-A+1).join(e):"";switch(m&&p&&(t=i(I+t,I.length?f-E.length:1/0),I=""),n){case"<":t=d+t+E+I;break;case"=":t=d+I+t+E;break;case"^":t=I.slice(0,A=I.length>>1)+d+t+E+I.slice(A);break;default:t=I+d+t+E}return a(t)}return g=void 0===g?6:/[gprs]/.test(v)?Math.max(1,Math.min(21,g)):Math.max(0,Math.min(20,g)),E.toString=function(){return t+""},E}return{format:h,formatPrefix:function(t,e){var n=h(((t=tT(t)).type="f",t)),i=3*Math.max(-8,Math.min(8,Math.floor(Yb(e)/3))),s=Math.pow(10,-i),r=lT[8+i/3];return function(t){return n(s*t)+r}}}}oT=cT({thousands:",",grouping:[3],currency:["$",""]}),oT.format,oT.formatPrefix;class uT extends Map{constructor(t,e=$85729e8e64a60b52$var$keyof){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),null!=t)for(const[e,n]of t)this.set(e,n)}get(t){return super.get($85729e8e64a60b52$var$intern_get(this,t))}has(t){return super.has($85729e8e64a60b52$var$intern_get(this,t))}set(t,e){return super.set($85729e8e64a60b52$var$intern_set(this,t),e)}delete(t){return super.delete($85729e8e64a60b52$var$intern_delete(this,t))}}class hT extends Set{constructor(t,e=$85729e8e64a60b52$var$keyof){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:e}}),null!=t)for(const e of t)this.add(e)}has(t){return super.has($85729e8e64a60b52$var$intern_get(this,t))}add(t){return super.add($85729e8e64a60b52$var$intern_set(this,t))}delete(t){return super.delete($85729e8e64a60b52$var$intern_delete(this,t))}}Symbol("implicit");var dT=1e-12;function pT(t){return((t=Math.exp(t))+1/t)/2}(function t(e,n,i){function s(t,s){var r,o,a=t[0],l=t[1],c=t[2],u=s[0],h=s[1],d=s[2],p=u-a,f=h-l,m=p*p+f*f;if(m<dT)o=Math.log(d/c)/e,r=function(t){return[a+t*p,l+t*f,c*Math.exp(e*t*o)]};else{var g=Math.sqrt(m),y=(d*d-c*c+i*m)/(2*c*n*g),v=(d*d-c*c-i*m)/(2*d*n*g),_=Math.log(Math.sqrt(y*y+1)-y),w=Math.log(Math.sqrt(v*v+1)-v);o=(w-_)/e,r=function(t){var i,s=t*o,r=pT(_),u=c/(n*g)*(r*(i=e*s+_,((i=Math.exp(2*i))-1)/(i+1))-function(t){return((t=Math.exp(t))-1/t)/2}(_));return[a+u*p,l+u*f,c*r/pT(e*s+_)]}}return r.duration=1e3*o*e/Math.SQRT2,r}return s.rho=function(e){var n=Math.max(.001,+e),i=n*n;return t(n,i,i*i)},s})(Math.SQRT2,2,4);function fT(t,e,n){this.k=t,this.x=e,this.y=n}fT.prototype={constructor:fT,scale:function(t){return 1===t?this:new fT(this.k*t,this.x,this.y)},translate:function(t,e){return 0===t&0===e?this:new fT(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};new fT(1,0,0);function mT(t){t=Number(t);var e=Math.floor(t/86400),n=Math.floor(t%86400/3600),i=Math.floor(t%3600/60),s=Math.floor(t%60);return(e>0?e+(1==e?" day, ":" days, "):"")+(n>0?n+(1==n?" hour, ":" hours, "):"")+(i>0?i+(1==i?" minute, ":" minutes, "):"")+(s>0?s+(1==s?" second":" seconds"):"")}function gT(t,e){let n=t.length;if(n!=e.length)return!1;t.sort(),e.sort();for(let i=0;i<n;i++)if(t[i]!=e[i])return!1;return!0}function yT(t,e){const n=Object.keys,i=typeof t;return t&&e&&"object"===i&&i===typeof e?n(t).length===n(e).length&&n(t).every((n=>yT(t[n],e[n]))):t===e}function vT(t){fetch(t).then((t=>{var e;for(var n of t.headers.entries())"date"===n[0]&&(e=new Date(n[1]).getTime());return e}))}function _T(t){t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()}fT.prototype;const wT=(t,e)=>t.map((t=>({...e.find((e=>e.qid===t.qid&&e)),...t})));function bT(t){return document.getElementById(t)}function TT(t,e,n){var i;return 0==n&&(i=t=>(e,n)=>e[t]>n[t]?1:-1),1==n&&(i=t=>(e,n)=>e[t]>n[t]?-1:1),t.sort(i(e))}function ET(t,e,n,i){var s;return 0==i?s=(t,e)=>(n,i)=>n[t]===i[t]?n[e]>i[e]?1:-1:n[t]>i[t]?1:-1:1==i&&(s=(t,e)=>(n,i)=>n[t]===i[t]?n[e]>i[e]?-1:1:n[t]>i[t]?-1:1),t.sort(s(e,n))}Ot({apiKey:"AIzaSyDN8T7Pmw5e-LzmC3nAHEqI0Uk7FF7y6fc",authDomain:"quarkz.firebaseapp.com",projectId:"quarkz",storageBucket:"quarkz.appspot.com",messagingSenderId:"1050835442263",appId:"1:1050835442263:web:e7d05ca9373f2f6083a112",measurementId:"G-1Y3S45VWFH"});const kT=cm(),AT=ls();
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
var IT,xT;(IT=AT,xT=jn,H(IT).setPersistence(xT)).then((()=>Pn(AT,email,password))).catch((t=>{}));const CT=function(t=Pt(),e){const n=Dt(t=H(t),vy).getImmediate({identifier:e}),i=E("storage");return i&&function(t,e,n,i={}){!function(t,e,n,i={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=i;s&&(t._overrideAuthToken="string"==typeof s?s:x(s,t.app.options.projectId))}(t,e,n,i)}
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
 */(n,...i),n}();async function ST(){var t=bT("lg_uname").value,e=bT("lg_pass").value;Pn(AT,t,e).then((e=>{e.user;tk.email=t,DT("dashboard",1)})).catch((t=>{t.code,t.message;bT("lgn_err").style.display="block",bT("lg_pass").value=""}))}function qT(){Un(ls()),tk=[],DT("login",1),window.location.reload()}function NT(){var t=bT("rg_uname").value,e=bT("rg_pass").value,n=bT("rg_name").value,i=bT("rg_mbleno").value,s=bT("rg_class").value,r=bT("rg_gender").value;""!=t&&""!=e&&""!=n&&""!=i&&""!=s||alert("Details Cannot Be Empty"),e!=bT("rg_pass1").value||On(AT,t,e).then((e=>{const o=e.user;!async function(){try{await fg(Qf(kT,"users",o.uid),{name:n,class:s,mblno:i,email:t,spoints:0,gen:r,batch:"guest",sgndon:bg(),roles:{user:!0}}).then((function(){window.location.hash="#/dashboard",window.location.reload()}))}catch(t){console.error("Error Adding New User",t)}}()})).catch((t=>{t.code,t.message}))}function DT(t,e){!function(t,e){1==e&&(window.location.hash="#/"+t);switch(t,YE=window.location.hash.split("#/")[1]){case"profile":"profile",RT(By,"",""),async function(){bT("prf_pphoto");var t=bT("prf_name"),e=bT("prf_phone"),n=bT("prf_email"),i=bT("prf_class"),s=(bT("prf_batch"),bT("prf_gender")),r=bT("prf_crton"),o=(bT("tmt_frame"),bT("spoints"));t.textContent=zE.name,e.textContent=zE.mblno,n.textContent=zE.email,i.textContent=zE.class,r.textContent=new Date(1e3*zE.sgndon.seconds).toDateString(),s.textContent=zE.gen,zE.batch,zE.course,o.textContent=zE.spoints,zE.usernotes=zE.usernotes,"Male"==zE.gen?(bT("prf_tab_t_t_img").classList.remove("prf_male","prf_female"),bT("prf_tab_t_t_img").classList.add("prf_male")):"Female"==zE.gen&&(bT("prf_tab_t_t_img").classList.remove("prf_male","prf_female"),bT("prf_tab_t_t_img").classList.add("prf_female"))}();break;case"about":function n(){AE("legal",1)}"aboutus",RT(Ty,"text-align: center;overflow-y: scroll;",""),bT("lgl_btn").addEventListener("click",n);break;case"login":function i(){AE("register",1)}"login",RT(Fy,"justify-content: center;",""),bT("sgn_in").addEventListener("click",ST),bT("reg_in").addEventListener("click",i);break;case"dashboard":"dashboard",RT(Iy,"display: flex;flex-direction: row;",""),function(){function t(){AE("simlist",1)}function e(){AE("cyberhunt",1)}function n(){AE("about",1)}function i(){AE("timetable",1)}function s(){AE("profile",1)}function r(){AE("functions",1)}function o(){AE("testinfo",1)}function a(){AE("users",1)}function l(){AE("tpclist",1)}function c(){AE("livequiz",1)}function u(){AE("forum",1)}function h(){AE("qblist",1)}function d(){AE("chplist",1)}bT("sim_btn").addEventListener("click",t),bT("lgt_btn").addEventListener("click",qT),bT("tmt_btn").addEventListener("click",i),bT("prf_btn").addEventListener("click",s),bT("abt_btn").addEventListener("click",n),bT("tmt_btn").addEventListener("click",i),bT("prf_btn").addEventListener("click",s),bT("abt_btn").addEventListener("click",n),bT("tpc_btn").addEventListener("click",l),bT("usc_btn").addEventListener("click",a),bT("lvq_btn").addEventListener("click",c),bT("frm_btn").addEventListener("click",u),bT("adi_btn").addEventListener("click",r),bT("qba_btn").addEventListener("click",h),bT("cyb_btn").addEventListener("click",e),bT("chp_btn").addEventListener("click",d),bT("tstinf_btn").addEventListener("click",o),bT("lgt_btn").addEventListener("click",qT);bT("dshd_uname").innerText=zE.email,bT("dshd_name").innerText=zE.name,bT("dshd_batch").innerText=zE.batchname,"Male"==zE.gen?(bT("prf_tab_img").classList.remove("prf_male","prf_female"),bT("prf_tab_img").classList.add("prf_male")):"Female"==zE.gen&&(bT("prf_tab_img").classList.remove("prf_male","prf_female"),bT("prf_tab_img").classList.add("prf_female"));!function(){for(let e=0;e<zE.examslist.examinfo.length;e++){var t=zE.examslist.examinfo[e];bT("db_exam_list").insertAdjacentHTML("beforeend",'<div class = "tlinks_min rpl"><span style="font-size: 16px;" onclick = "examlog(\''+t.name+"','"+t.date+"','"+t.info+"','"+t.syllabus+"')\">"+t.name+"</span></div>")}}()}();break;case"timetable":"schedule",RT(Sy,"",""),HT(),bT("tmt_frame").src=zE.timetableurl;break;case"logout":Un();break;case"mainsformulas":"mainsformulas",RT(Ry,"","");break;case"downloads":"downloads",RT(Ly,"","");break;case"register":"register",RT(zy,"",""),bT("rg_in").addEventListener("click",FE);break;case"testinfo":"testinfo",RT(Qy,"",""),CE("active");break;case"legal":"legal",RT(Jy,"","");break;case"appinfo":"appinfo",RT(Cy,"",""),bT("ren_appinf").textContent=JSON.stringify(QE,void 0,2);break;case"forum":"forum",RT(Oy,"","");bT("fm_send").addEventListener("click",GT);QT(),async function(){var t=Qf(kT,"forum","pinned"),e=await hg(t);if(e.exists()){t=e.data();bT("pinnedtxt").innerText=t.message}}();break;case"bugreport":"bugreport",RT(xy,"","");break;case"simlist":"simlist",RT(Gy,"",""),function(){function t(){BT("physics")}function e(){BT("chemistry")}function n(){BT("maths")}function i(){BT("biology")}function s(){BT("computer")}function r(){BT("statistics")}function o(){BT("unfiled")}bT("psims").addEventListener("click",t),bT("csims").addEventListener("click",e),bT("msims").addEventListener("click",n),bT("bsims").addEventListener("click",i),bT("cosims").addEventListener("click",s),bT("ssims").addEventListener("click",r),bT("usims").addEventListener("click",o)}(),BT();break;case"testend":"test_end",RT(Xy,"",""),bT("te_title").innerText="The Test Has Ended";break;case"add/lesson":"fu_lesson",newLesson();break;case"add/tpc":"fu_topic",async function(){try{DT("edit_tpc/"+(await yg(Kf(kT,"topic"),{name:"",qllist:[],level:"jee",chid:"",chname:"",subject:""})).id,1)}catch{}}();break;case"add/qubank":"fu_topic",async function(){try{DT("edit_qubank/"+(await yg(Kf(kT,"qbank"),{name:"",qllist:[],level:"jee",chid:"",chname:"",subject:""})).id,1)}catch{}}();break;case"add/simulation":"fu_simulation",async function(){try{DT("edit_sim/"+(await yg(Kf(kT,"sims"),{name:"",license:"",provider:"",url:""})).id,1)}catch{}}();break;case"add/tests":"fu_topic",async function(){try{const t=await yg(Kf(kT,"tests"),{title:"",totalmarks:0,timeallotted:0,syllabus:"",strton:bg(),endon:bg(),questionnos:0,finished:[],batch:[]});await fg(Qf(kT,"tests",t.id,"questions","questions"),{questions:[]}),await fg(Qf(kT,"tests",t.id,"questions","answers"),{questions:[]}),await fg(Qf(kT,"tests",t.id,"responses","finished"),{finished:[],leaderboard:[]});DT("edit_tests/"+t.id,1)}catch{}}();break;case"add/batch":"fu_topic",async function(){try{const t=await yg(Kf(kT,"batch"),{name:"",timetable:"",crton:bg(),class:12,chlist:[],delon:bg()});await fg(Qf(kT,"batch",t.id,"info","tests"),{tests:[]}),await fg(Qf(kT,"batch",t.id,"info","updates"),{u:[]});DT("edit_batch/"+t.id,1)}catch{}}();break;case"settings":"settings",RT(Hy,"",""),bT("pass_rst_btn").addEventListener("click",wE);break;case"chplist":"chapterlist",RT(Ey,"",""),function(){function t(){pE("physics")}function e(){pE("chemistry")}function n(){pE("maths")}function i(){pE("biology")}function s(){pE("computer")}function r(){pE("statistics")}function o(){pE("unfiled")}bT("pchb").addEventListener("click",t),bT("cchb").addEventListener("click",e),bT("mchb").addEventListener("click",n),bT("bchb").addEventListener("click",i),bT("cochb").addEventListener("click",s),bT("schb").addEventListener("click",r),bT("uchb").addEventListener("click",o)}(),pE();break;default:"error_page",RT(qy,"","")}var s=1==$E||1==HE;YE.includes("instructions")&&("test_instructions",RT(Ky,"",""));YE.includes("cyberhunt")&&("cyberhunt",RT(Ay,"",""),async function(){""==window.location.hash.split("/cyberhunt/")[1]||""==window.location.hash.split("/cyberhunt")[1]?(bT("cyb_code").style.display="flex",bT("cyb_viewer").style.display="none",bT("cyb_edit").style.display="none"):(bT("cyb_code").style.display="none",bT("cyb_viewer").style.display="flex",bT("cyb_edit").style.display="none")}());YE.includes("notes")&&!YE.includes("usernotes")&&("notes",RT(Ny,"",""),async function(){var t=window.location.hash.split("notes/")[1];_y(wy(CT,"public/"+t+".pdf")).then((t=>{bT("nt_id").src="https://docs.google.com/gview?url="+encodeURI(t)+"&embedded=true"})).catch((t=>{switch(t.code){case"storage/object-not-found":bT("nt_id").src="https://docs.google.com/gview?url="+encodeURI("https://firebasestorage.googleapis.com/v0/b/quarkz.appspot.com/o/public%2F404.pdf?alt=media&token=8cc8f23a-6e24-41d6-984b-6d2cc9b89d11")+"&embedded=true";break;case"storage/unauthorized":Uy("Unauthorised","You dont have necessary permissions to The file you requested.")}}))}());YE.includes("sims")&&("simulations",RT(Wy,"",""),HT(),async function(){var t=window.location.hash.split("sims/")[1],e=Qf(kT,"sims",t),n=await hg(e);if(!n.exists())throw DT("error_page",1),new Error;var i=n.data();bT("sms_name").innerText=i.name,bT("sms_prov").innerText=i.provider,bT("sim_frame").src=i.url}());YE.includes("chapter")&&("chapter",RT(ky,"",""),async function(){bT("chp_chaptername").innerHTML="",bT("chp_qbk_list").innerHTML="",bT("chp_tpc_list").innerHTML="";var t=Qf(kT,"chapter",window.location.hash.split("#/chapter/")[1]),e=await hg(t);if(e.exists()){var n=e.data();bT("chp_chaptername").innerText=n.name;try{for(let t of n.qbanks)bT("chp_qbk_list").insertAdjacentHTML("beforeend",'<span class="tlinks_min rpl" style = "color:pink" id="chpqbk'+btoa(t.id)+'">'+t.title+"</span>"),bT("chpqbk"+btoa(t.id)).addEventListener("click",lE)}catch{}try{for(let t of n.topics)bT("chp_tpc_list").insertAdjacentHTML("beforeend",'<span class="tlinks_min rpl" style = "color:pink" id="chptpc'+btoa(t.id)+'">'+t.title+"</span>"),bT("chptpc"+btoa(t.id)).addEventListener("click",cE)}catch{}}}());YE.includes("qbanks")&&("topic",RT(tv,"height:max-content;",""),LT(),uE(2));YE.includes("usernotes")&&("usernotes",RT(nv,"flex-direction: row;",""),function(){bT("un_save").addEventListener("click",jT),bT("un_print").addEventListener("click",zT),bT("un_rendermode").addEventListener("change",UE),bT("un_viewership").addEventListener("change",UE);bT("un_print").addEventListener("click",(function(){bT("un_preview").style.display="none",bT("un_preview").innerHTML="<h1 style = 'text-align:center;margin:0px'>"+bT("un_title").value+"</h1>"+BE("un_editable"),window.idElementPrint(bT("un_preview"),zE.name)}))}(),async function(){try{UE()}catch{}if(window.location.hash.includes("usernotes/add")){var t=await yg(Kf(kT,"usernotes"),{title:"Notes Title",notes:"",uuid:zE.uuid,crton:bg(),type:"private",lastupdated:bg()});await mg(Qf(kT,"users",zE.uuid),{usernotes:Tg({color:"black",id:t.id,title:"Notes Title"})}),DT("usernotes/"+t.id,1)}else if(window.location.hash.includes("usernotes/delete"))await gg(Qf(kT,"usernotes",window.location.hash.split("usernotes/delete/")[1]));else if("#/usernotes/"==window.location.hash)WT();else if(window.location.hash.includes("usernotes")){WT();t=Qf(kT,"usernotes",window.location.hash.split("usernotes/")[1]);var e=await hg(t);if(e.exists()){t=e.data();bT("un_title").value=t.title,jE("un_editable",t.notes),bT("un_viewership").value=t.type,"public_view"==t.type&&zE.uuid!=t.uuid?(bT("un_rendermode").innerHTML='<option value="preview">preview</option>',bT("un_rendermode").value="preview",bT("un_save").style.display="none",bT("un_colorpicker").style.display="none",bT("un_viewership").style.display="none",bT("un_title").style.display="none"):(bT("un_rendermode").innerHTML='<option value="edit">edit</option><option value="preview">preview</option>',bT("un_rendermode").value="edit",bT("un_save").style.display="block",bT("un_colorpicker").style.display="block",bT("un_viewership").style.display="block",bT("un_title").style.display="block"),UE()}}}());if(YE.includes("qbnk_vid")){function r(){bT("watermark").style.display="flex",_T(bT("qbnk_vid"))}"qbnk_vid",RT(jy,"height:90vh;position: relative;",""),bT("qbnk_vid_btn").style.display="block",bT("qbnk_vid_btn").addEventListener("click",tE),bT("qbnk_vid_btn_e").addEventListener("click",r)}YE.includes("attempt")&&("testv1",RT(Yy,"",""),function(){function t(){ME("tts_answered")}function e(){ME("tts_notanswer")}function n(){ME("tts_review")}function i(){ME("tts_ansreview")}function s(){Uy("Warning","Are You Sure You Want To End The Test",OE,"Yes,Submit",1)}bT("tt_save").addEventListener("click",t),bT("tt_clear").addEventListener("click",e),bT("tt_review").addEventListener("click",n),bT("tt_ansreview").addEventListener("click",i),bT("tt_sub").addEventListener("click",s)}(),async function(){bT("tt_footer").style.display="flex",bT("tt_sub").style.display="block",bT("tt_timeleft").style.display="block",bT("tt_marksaward").style.display="none";var t=window.location.hash.split("#/attempt/")[1],e=Qf(kT,"tests",t),n=await hg(e);if(n.exists()&&(ck=n.data(),e=Qf(kT,"tests",t,"responses","finished"),(n=await hg(e)).exists()))for(var i of n.data().finished)if(AT.currentUser.uid==i)return DT("testend",1),bT("te_title").innerText="You Have Already Attempted This Test",0;try{e=Qf(kT,"tests",t,"questions","questions"),(n=await hg(e)).exists()&&(hk=n.data())}catch{return bT("te_title").innerText="The Test Hasnt Started Yet",DT("testend",1),0}if(e=Qf(kT,"tests",t,"responses",AT.currentUser.uid),(n=await hg(e)).exists()){var s=n.data().answers;for(var r in fk=n.data().actions,s)dk.push({qid:r,ans:s[r].ans,type:s[r].type,time:s[r].time})}else{for(var o={},a=0;a<hk.questions.length;a++)o[`${hk.questions[a].qid}`]={type:"tts_notvisit",answer:[]},dk.push({qid:hk.questions[a].qid,type:"tts_notvisit",answer:[],timetaken:0});var l=new Date;await fg(Qf(kT,"tests",t,"responses",AT.currentUser.uid),{answers:o,strton:bg(),warning:[],actions:[{type:"start",time:l,value:"1"}],testversion:"1"}),fk.push({type:"start",time:l,value:"1"})}window.location.hash.includes("/attempt/")&&(qE=setInterval((function(){var t=ck.timeallotted-1;ck.timeallotted-=1,bT("tt_timeleft").innerText=Math.floor(t%86400/3600)+":"+Math.floor(t%3600/60)+":"+Math.floor(t%60),uk+=1,bT("tt_timespent").innerText=Math.floor(uk%86400/3600)+":"+Math.floor(uk%3600/60)+":"+Math.floor(uk%60),0==t&&OE()}),1e3));window.onbeforeunload=function(t){t.preventDefault,OE()},window.onhashchange=function(t){DT(),OE()},bT("tt_testname").innerText=ck.title,bT("dsh_btn").style.display="none";var c=bT("output");try{_T(c)}catch{}LE()}());YE.includes("finished")&&("finishedtestinfo",RT(My,"overflow-y: scroll;",""),async function(){var t=window.location.hash.split("#/finished/")[1],e=Qf(kT,"tests",t),n=await hg(e);if(n.exists()){ck=n.data();var i=0;if(bT("fti_title").innerText=ck.title,e=Qf(kT,"tests",t,"responses","finished"),(n=await hg(e)).exists())for(var s of n.data().finished)if(AT.currentUser.uid==s){i=1;break}if(0==i)DT("testend",1),bT("te_title").innerText="You Have NOT Attempted This Test";else try{try{DE(1)}catch{}try{e=Qf(kT,"tests",t,"responses",AT.currentUser.uid);var r=(n=await hg(e)).data();if(n.exists()){function o(t,e,n,i,s){var r=s-(e-4*n);return"<div><span>"+t+"("+(e+n)+' Marks)</span><div style = "width:40vw;height:30px;display:flex;flex-direction:row;"><div style="width:'+e/s*40+'vw;background-color:green;height:30px;text-align:center;color:white">'+e+"/"+s+'</div><div style="width:'+Math.abs(4*n/s*40)+'vw;background-color:red;height:30px;text-align:center;color:white">'+n+"/"+s+'</div><div style="width:'+40*(1-(e-4*n)/s)+'vw;background-color:orange;height:30px;text-align:center;color:black">'+r+"/"+s+"</div></div></div>"}bT("fto_total").innerText=r.info.usermarks+"/"+r.info.total,bT("fto_correct").innerText=r.info.correct,bT("fto_incorrect").innerText=r.info.incorrect,bT("fto_unanswered").innerText=r.info.unattempted,fk=r.actions,GE=r.info.mList,bT("fto_rank").innerText="0";var a=["Physics","Chemistry","Math","Biology","Statistics","Computer","Unfiled"];for(var l of(bT("fto_percents").innerHTML="",a)){var c=r.info.subjectmarks[l];yT(c,{correct:0,unattempted:0,incorrect:0,total:0})||bT("fto_percents").insertAdjacentHTML("beforeend",o(l,c.correct,c.incorrect,c.unattempted,c.total))}SE(1).then((function(){function t(t,e,n,i,s){var r=s-(e+n);return"<div><span>"+t+"("+mT(s)+')</span><div style = "width:80vw;height:30px;display:flex;flex-direction:row;"><div style="width:'+e/s*80+'vw;background-color:green;height:30px;text-align:center;color:white">'+mT(e)+'</div><div style="width:'+n/s*80+'vw;background-color:red;height:30px;text-align:center;color:white">'+mT(n)+'</div><div style="width:'+80*(1-(e+n)/s)+'vw;background-color:orange;height:30px;text-align:center;color:black">'+mT(r)+"</div></div></div>"}var e=["Physics","Chemistry","Math","Biology","Statistics","Computer","Unfiled"];for(var n of(bT("fto_time").innerHTML="",e)){var i=KE.subject[n];yT(i,{correct:0,unattempted:0,incorrect:0,total:0})||bT("fto_time").insertAdjacentHTML("beforeend",t(n,i.correct,i.incorrect,i.unattempted,i.total))}}))}try{var u;e=Qf(kT,"tests",t,"responses","finished"),(n=await hg(e)).exists()&&(u=n.data().leaderboard),bT("fto_leaderboard").innerHTML="",u=TT(u,"marks",1);for(var h=0;h<u.length;h++){var d=h+1;zE.uuid==u[h].uid&&(bT("fto_rank").innerText=d),bT("fto_leaderboard").insertAdjacentHTML("beforeend",'<div class = "tlinks" style = "flex-direction:row;width:25vw;justify-content:space-between;"><span class = "t_gre">&nbsp;'+d+'</span><span class = "t_name">'+u[h].name+'</span><span class = "t_gre">&nbsp;&nbsp;'+u[h].marks+"</span></div>")}}catch{}var p=[];for(h=0;h<GE.length;h++)null==KE.questions[GE[h].qid]?p.push({qid:GE[h].qid,type:GE[h].type,time:0,no:h+1}):p.push({qid:GE[h].qid,type:GE[h].type,time:KE.questions[GE[h].qid].time,no:h+1});!function(t,e){try{const i={top:20,right:20,bottom:50,left:50},s=800-i.left-i.right,r=400-i.top-i.bottom;bT(t).innerHTML="";const o=$60335d5fa2b61a3a$exports.select("#"+t).append("svg").attr("width",s+i.left+i.right).attr("height",r+i.top+i.bottom).append("g").attr("transform",`translate(${i.left}, ${i.top})`),a=$60335d5fa2b61a3a$exports.scaleOrdinal().domain(["correct","incorrect","unattempted"]).range(["#2ecc71","#e74c3c","#f39c12"]),l=$60335d5fa2b61a3a$exports.scaleLinear().domain([0,$60335d5fa2b61a3a$exports.max(e,(t=>t.time))]).range([5,30]),c=$60335d5fa2b61a3a$exports.scaleLinear().domain([1,e.length]).range([0,s]),u=$60335d5fa2b61a3a$exports.scaleLinear().domain([0,$60335d5fa2b61a3a$exports.max(e,(t=>t.time))]).range([r,0]);o.append("text").attr("class","axis-label").attr("text-anchor","middle").attr("x",s-120).attr("y",r+40).attr("color","white").text("Question Number"),o.append("text").attr("class","axis-label").attr("text-anchor","middle").attr("transform","rotate(-90)").attr("x",-innerHeight/2+40).attr("y",25-i.left).text("Time Taken(in s)").attr("color","white"),o.append("g").attr("transform",`translate(0, ${r})`).call(yv(cv,c)),o.append("g").call(function(t){return yv(uv,t)}(u)),o.selectAll("circle").data(e).enter().append("circle").attr("cx",((t,e)=>c(e+1))).attr("cy",(t=>u(t.time))).attr("r",(t=>l(t.time))).attr("fill",(t=>a(t.type))).append("text").text((function(t){return t.no}));var n=o.selectAll("g").data(e).enter().append("g").attr("transform",(function(t){return"translate("+c(t.time)+","+u(t.questionNumber)+")"}));n.append("circle").attr("r",(function(t){return sizeScale(t.time)})).attr("fill",(function(t){return"correct"==t.result?"green":"incorrect"==t.result?"red":"gray"})),n.append("text").text((function(t){return"Q"+t.no})).attr("x",(function(t){return sizeScale(t.time)+5})).attr("y",5)}catch{}}("fto_draw",p)}catch{return bT("te_title").innerText="ERROR",DT("testend",1),0}}catch{}}}());YE.includes("testreport")&&("testv1",RT(Yy,"",""),async function(){bT("tt_footer").style.display="none",bT("tt_sub").style.display="none",bT("tt_timeleft").style.display="none",bT("tt_marksaward").style.display="block";var t=window.location.hash.split("#/testreport/")[1],e=Qf(kT,"tests",t),n=await hg(e);if(n.exists()){ck=n.data();var i=0;if(bT("tt_testname").innerText=ck.title,e=Qf(kT,"tests",t,"responses","finished"),(n=await hg(e)).exists())for(var s of n.data().finished)if(AT.currentUser.uid==s){i=1;break}if(0==i)DT("testend",1),bT("te_title").innerText="You Have NOT Attempted This Test";else if(Date.now()/1e3<=ck.endon.seconds&&0==ck.noresult)DT("testend",1),bT("te_title").innerText="Detailed Test Reports will be available after deadline";else{try{if(e=Qf(kT,"tests",t,"questions","questions"),(n=await hg(e)).exists()&&(hk=n.data()),e=Qf(kT,"tests",t,"responses",AT.currentUser.uid),(n=await hg(e)).exists()){var r=n.data().answers;for(var o in fk=n.data().actions,r)dk.push({qid:o,ans:r[o].ans,type:r[o].type,time:r[o].time})}e=Qf(kT,"tests",t,"questions","answers"),(n=await hg(e)).exists()&&(mk=n.data())}catch{return bT("te_title").innerText="ERROR",DT("testend",1),0}LE()}}}());if(YE.includes("printable/qbank")&&1==s){"printable",RT(Vy,"height:max-content;",""),OT();bT("shf_btn").addEventListener("click",_E);fE(1)}YE.includes("ARIEL")&&1==s&&("Ariel",RT(Dy,"",""));if(YE.includes("printable/tests")&&1==s){"printable",RT(Vy,"height:max-content;",""),OT();bT("shf_btn").addEventListener("click",_E);fE(3)}"functions"==YE&&1==s&&("functions",RT(Py,"",""),nE());YE.includes("users")&&1==s&&("users",RT(ev,"",""),userUpdate());YE.includes("topic")&&("topic",RT(tv,"height: max-content;",""),LT(),uE(1));YE.includes("printable/topic")&&1==s&&("printable",RT(Vy,"height:max-content;",""),fE(2));YE.includes("edit_sim")&&1==s&&("fu_simulation",RT($y,"","ovr-scroll"),bT("aq_sims_save").addEventListener("click",FT),async function(){try{let e=await hg(Qf(kT,"sims",window.location.hash.split("edit_sim/")[1]));if(e.exists()){var t=e.data();bT("aq_simname").value=t.name,bT("aq_simprov").value=t.provider,bT("aq_simurl").value=t.url,bT("aq_simlicense").value=t.license,bT("aq_simsubj").value=t.subject}}catch{}}());YE.includes("edit_lesson")&&1==s&&("fu_simulation",RT($y,"","ovr-scroll"),prepareLesson());YE.includes("edit_tpc")&&1==s&&("fu_topic",RT(Zy,"","ovr-scroll"),bT("aq_tpc_save").addEventListener("click",(function(){aE(1)})),MT(),rE(1));YE.includes("edit_test")&&1==s&&("fu_topic",RT(Zy,"","ovr-scroll"),bT("aq_tst_save").addEventListener("click",(function(){aE(3)})),MT(),rE(3));YE.includes("edit_qubank")&&1==s&&("fu_topic",RT(Zy,"","ovr-scroll"),bT("aq_qbc_save").addEventListener("click",(function(){aE(2)})),MT(),rE(2));YE.includes("edit_exams")&&1==s&&("fu_topic",RT(Zy,"","ovr-scroll"),bT("aq_exam_save").addEventListener("click",(function(){aE(4)})),MT(),rE(4));0!=WE&&null!=WE&&null!=WE||"login"==YE||"register"==YE||YE.includes("notes")||"legal"==YE||"about"==YE||"bugreport"==YE||"appinfo"==YE||"mainsformulas"==YE||"downloads"==YE||"error_page";s&&(window.location.hash.includes("dashboard")&&(bT("adminonly").style.display="flex"),(window.location.hash.includes("topic")||window.location.hash.includes("qbanks"))&&(bT("tp_pnt").style.display="block",bT("tp_edt").style.display="block"),window.location.hash.includes("sims")&&(bT("sms_edit").style.display="block"));VE(),ik=[],"forum"==YE?QT(1):(QT(2),XT=1,JT="afterbegin");hk=[],dk=[],ck=[],pk=""}(t,e)}function RT(t,e,n){bT("output").style="",bT("output").classList.remove("ovr-scroll"),bT("output").innerHTML=t,null!=n&&""!=n&&bT("output").classList.add(n),bT("output").style=e}function LT(){bT("tp_nxt").addEventListener("click",(function(){gE(2)})),bT("tp_prv").addEventListener("click",(function(){gE(1)})),bT("tp_edt").addEventListener("click",kE),bT("tp_sbm").addEventListener("click",TE),bT("tp_pnt").addEventListener("click",EE)}function MT(){bT("aq_mode").addEventListener("change",nE),bT("aq_type").addEventListener("change",nE),bT("aq_ao").addEventListener("click",yE),bT("aq_ro").addEventListener("click",vE),bT("aq_re").addEventListener("click",oE),bT("aq_export").addEventListener("click",EE)}bT("dsh_btn").addEventListener("click",(function(){AE("dashboard",1)}));function OT(){document.getElementById("pe_tst_type_1").addEventListener("change",updateUI),document.getElementById("pe_tst_type_2").addEventListener("change",updateUI),document.getElementById("tsinf_btn").addEventListener("change",updateUI),document.getElementById("tans_btn").addEventListener("click",(function(){for(var t=0;t<document.getElementsByClassName("q_ans_1").length;t++)document.getElementsByClassName("q_ans_1")[t].style.display="flex"})),document.getElementById("tansexpl_btn").addEventListener("click",(function(){for(var t=0;t<document.getElementsByClassName("q_ans_1").length;t++)document.getElementsByClassName("q_ans_1")[t].style.display="flex";for(t=0;t<document.getElementsByClassName("q_ans_expl").length;t++)document.getElementsByClassName("q_ans_expl")[t].style.display="flex"})),document.getElementById("tremove_btn").addEventListener("click",(function(){for(var t=0;t<document.getElementsByClassName("q_ans_1").length;t++)document.getElementsByClassName("q_ans_1")[t].style.display="none";for(t=0;t<document.getElementsByClassName("q_ans_expl").length;t++)document.getElementsByClassName("q_ans_expl")[t].style.display="none"}))}let PT,UT=[];async function FT(){try{await mg(Qf(kT,"sims",window.location.hash.split("edit_sim/")[1]),{name:bT("aq_simname").value,license:bT("aq_simlicense").value,provider:bT("aq_simprov").value,url:bT("aq_simurl").value,subject:bT("aq_simsubj").value});var t=bT("aq_simsubj").value;"physics"==t&&await mg(Qf(kT,"sims","sims"),{physics:Tg(bT("aq_simname").value)}),"chemistry"==t&&await mg(Qf(kT,"sims","sims"),{chemistry:Tg(bT("aq_simname").value)}),"maths"==t&&await mg(Qf(kT,"sims","sims"),{maths:Tg(bT("aq_simname").value)}),"computer"==t&&await mg(Qf(kT,"sims","sims"),{computer:Tg(bT("aq_simname").value)}),"biology"==t&&await mg(Qf(kT,"sims","sims"),{biology:Tg(bT("aq_simname").value)}),"statistics"==t&&await mg(Qf(kT,"sims","sims"),{statistics:Tg(bT("aq_simname").value)}),"unfiled"==t&&await mg(Qf(kT,"sims","sims"),{unfiled:Tg(bT("aq_simname").value)}),function(){jE("aq_qtext",""),jE("aq_expl",""),bT("aq_answer").value="",bT("aq_yurl").value="",bT("aq_hint").value="";for(var t=0;t<document.getElementsByClassName("aq_mcq").length;t++)document.getElementsByClassName("aq_mcq")[t].value="";for(t=0;t<document.getElementsByClassName("aq_i1").length;t++)document.getElementsByClassName("aq_i1")[t].value="";for(t=0;t<document.getElementsByClassName("aq_i2").length;t++)document.getElementsByClassName("aq_i2")[t].value=""}()}catch(t){console.error("Error writing new message to Firebase Database",t)}}function VT(){!async function(t){var e;const n=Wm(Kf(kT,"sims"),Km("name","==",t));(await pg(n)).forEach((t=>{e=t.id})),DT("sims/"+e,1)}(this.innerText)}async function BT(t){if(bT("sim_cont").innerHTML="",0==UT.length){var e=Qf(kT,"sims","sims"),n=await hg(e);if(!n.exists())throw DT("error_page",1),new Error;var i=n.data();UT=i}if("physics"==t)try{for(let t of UT.physics)""!=t&&(bT("sim_cont").insertAdjacentHTML("beforeend",'<span class="tlinks rpl" style = "color:pink" id="sim'+btoa(t)+'">'+t+"</span>"),bT("sim"+btoa(t)).addEventListener("click",VT))}catch{}if("chemistry"==t)try{for(let t of UT.chemistry)""!=t&&(bT("sim_cont").insertAdjacentHTML("beforeend",'<span class="tlinks rpl" style = "color:crimson" id="sim'+btoa(t)+'">'+t+"</span>"),bT("sim"+btoa(t)).addEventListener("click",VT))}catch{}if("maths"==t)try{for(let t of UT.maths)""!=t&&(bT("sim_cont").insertAdjacentHTML("beforeend",'<span class="tlinks rpl" style = "color:turquoise" id="sim'+btoa(t)+'">'+t+"</span>"),bT("sim"+btoa(t)).addEventListener("click",VT))}catch{}if("biology"==t)try{for(let t of UT.biology)""!=t&&(bT("sim_cont").insertAdjacentHTML("beforeend",'<span class="tlinks rpl" style = "color:lime" id="sim'+btoa(t)+'">'+t+"</span>"),bT("sim"+btoa(t)).addEventListener("click",VT))}catch{}if("computer"==t)try{for(let t of UT.computer)""!=t&&(bT("sim_cont").insertAdjacentHTML("beforeend",'<span class="tlinks rpl" style = "color:violet" id="sim'+btoa(t)+'">'+t+"</span>"),bT("sim"+btoa(t)).addEventListener("click",VT))}catch{}if("statistics"==t)try{for(let t of UT.statistics)""!=t&&(bT("sim_cont").insertAdjacentHTML("beforeend",'<span class="tlinks rpl" style = "color:orange" id="sim'+btoa(t)+'">'+t+"</span>"),bT("sim"+btoa(t)).addEventListener("click",VT))}catch{}if("unfiled"==t)try{for(let t of UT.unfiled)""!=t&&(bT("sim_cont").insertAdjacentHTML("beforeend",'<span class="tlinks rpl" style = "color:white" id="sim'+btoa(t)+'">'+t+"</span>"),bT("sim"+btoa(t)).addEventListener("click",VT))}catch{}}async function jT(){await mg(Qf(kT,"usernotes",window.location.hash.split("usernotes/")[1]),{title:bT("un_title").value,notes:BE("un_editable"),lastupdated:bg(),type:bT("un_viewership").value})}function zT(){}function HT(){const t=document.querySelector("iframe");var e="";t.addEventListener("loadstart",(()=>{e=Uy("Loading","Content Is Loading. Please Wait")})),t.addEventListener("load",(()=>{document.getElementById(e).remove()}))}function $T(){window.location.hash="#/usernotes/"+this.id.split("uno")[1]}async function WT(){for(var t=0;t<zE.usernotes.length;t++)bT("un_list").insertAdjacentHTML("beforeend","<div class='t_notes' id='uno"+zE.usernotes[t].id+"' style='background-color: "+zE.usernotes[t].color+"'><span class='tntc2' id='"+zE.usernotes[t].id+"'>"+zE.usernotes[t].title+"</span></div>"),bT("uno"+zE.usernotes[t].id).addEventListener("click",$T)}async function GT(){var t=bT("fm_message").value;if(t.includes("/pinned")){t=t.split("/pinned")[1];try{await mg(Qf(kT,"forum","pinned"),{message:t})}catch{alert("You Dont Have The Privilages For This Command")}var e=await vT("http://localhost:5500/time.html").then(async function(e){await mg(Qf(kT,"forum","ppinned"),{ppinned:Tg({message:t,user:zE.uuid,time:e})})}(e))}else""!=t&&null!=t?(await yg(Kf(kT,"forum"),{name:zE.name,message:t,userid:zE.uuid,sgndon:bg()}),bT("fm_message").value=""):alert("Message Cannot Be Empty")}let KT=function(){};async function QT(t){1==t?(bT("forum_live").innerHTML="",PT=Wm(Kf(cm(),"forum"),Xm("sgndon","desc"),Zm(10)),KT=vg(PT,(function(t){t.docChanges().forEach((function(t){if("removed"===t.type)bT("dM"+t.doc.id).remove();else if("added"==t.type){XT>=11&&(JT="beforeend");var e=t.doc.data();!function(t,e,n,i,s){if("shh5oUIhRpdBkEKQ3GCZwoKE9u42"==s){var r="<div id = 'dM"+t+"'><span class = 'dmName'>"+n+"👑: </span><span class = 'dmText'>"+i+"</span><span class = 'dmtime'>"+e+"</span></div>";bT("forum_live").insertAdjacentHTML(JT,r)}else r="<div id = 'dM"+t+"'><span class = 'dmName'>"+n+": </span><span class = 'dmText'>"+i+"</span><span class = 'dmtime'>"+e+"</span></div>",bT("forum_live").insertAdjacentHTML(JT,r)}(t.doc.id,"",e.name,e.message,e.userid),XT+=1}}))}))):2==t&&(KT(),KT=function(){})}var XT=1,JT="afterbegin";let ZT;async function tE(){bT("qbnk_vid_btn").style.display="none",bT("qbnk_vid_btn_e").style.display="none";try{let o=await hg(Qf(kT,"qbank",window.location.hash.split("qbnk_vid/")[1]));if(o.exists()){var t=o.data();bT("tb_q_title").innerText=t.name,bT("qb_vid_ti").innerText=t.name,bT("qbnk_vid_q").style.display="none",bT("qbnk_vid_ans").style.display="none",bT("qbnk_vid_title").style.display="flex",bT("qbnk_vid_end").style.display="none",bT("watermark").style.display="none";let a=t.qllist,l=await iv();_T(bT("qbnk_vid")),ZT=sv(l);var e,n=0,i=0,s=0,r=setInterval((function(){if(bT("qbnk_vid_q").style.display="none",bT("qbnk_vid_ans").style.display="none",bT("qbnk_vid_title").style.display="none",bT("qbnk_vid_end").style.display="none",0==i)bT("qbnk_vid_title").style.display="flex",i++;else if(s==a.length-1)bT("qbnk_vid_end").style.display="flex",setTimeout((function(){ZT.stop(),bT("qbnk_vid_btn").style.display="block"}),5e3),clearInterval(r);else if(0==n||1==n){!function(t){function e(t){t.style.display="none"}function n(t){t.style.display="block"}function i(t){t.style.display="flex"}var s=bT("tb_q_mcq_con"),r=bT("tb_q_matrix"),o=bT("tb_q_answer");if(s.innerHTML="",bT("tb_q_qtext").innerHTML=t.title+"<span class = 'sp_txt'>("+t.type+")</span>","mcq"==t.type||"mcq_multiple"==t.type){i(s),e(r),e(o);var a=t.op,l="";for(let t of a)l+='<div class="tb_q_mcq_p rpl">'+t+"</div>";bT("tb_q_mcq_con").insertAdjacentHTML("beforeend",l)}else if("matrix"==t.type){e(s),n(r),e(o);for(var c=t.op1,u=t.op2,h=c.length,d=0;d<h;d++)document.getElementsByClassName("tp_i1")[d].innerHTML=c[d];for(d=0;d<h;d++)document.getElementsByClassName("tp_i2")[d].innerHTML=u[d]}else"numerical"==t.type||"fill"==t.type?(e(s),e(r),n(o)):"taf"==t.type?(i(s),e(r),e(o),l='<div class="tp_mcq_p rpl">True</div><div class="tp_mcq_p rpl">False</div>',bT("tp_mcq_con").insertAdjacentHTML("beforeend",l)):(e(s),e(r),e(o));renderMathInElement(bT("tp_ans_hold")),renderMathInElement(bT("tp_qtext"))}(a[s]);var t=s+1;0==n&&(bT("qbnk_timer").innerText=10,e=setInterval((function(){bT("qbnk_timer").innerText=bT("qbnk_timer").innerText-1}),1e3)),bT("tb_q_qno").innerText="Question "+t+":",bT("qbnk_vid_q").style.display="flex",n++}else if(2==n){bT("qbnk_vid_ans").style.display="flex",clearInterval(e);for(var o="",l=0;l<a[s].answer.length;l++)o+='<div class="tb_q_mcq_p rpl" style = "background-color:green">'+a[s].answer[l]+"</div>";bT("tb_q_ans").innerHTML=o,bT("tb_q_hint").innerHTML=a[s].hint,bT("tb_q_expl").innerHTML=a[s].expl,n=0,s++}}),5e3)}}catch{}}function eE(){var t=[bT("aq_answer").value],e=bT("aq_type").value,n=[],i=[],s=[];if("mcq"==e||"mcq_multiple"==e)for(t=[],o=0;o<document.getElementsByClassName("aq_mcq_ans").length;o++){var r=document.getElementsByClassName("aq_mcq_ans")[o].value;t[o]=r}for(var o=0;o<document.getElementsByClassName("aq_mcq").length;o++)n.push(document.getElementsByClassName("aq_mcq")[o].value);for(o=0;o<document.getElementsByClassName("aq_i1").length;o++)i.push(document.getElementsByClassName("aq_i1")[o].value);for(o=0;o<document.getElementsByClassName("aq_i2").length;o++)s.push(document.getElementsByClassName("aq_i2")[o].value);if(YE.includes("edit_test"))var a={qid:nk,mode:bT("aq_mode").value,title:BE("aq_qtext"),y_url:bT("aq_yurl").value,hint:bT("aq_hint").value,expl:BE("aq_expl"),type:e,answer:t,op:n,op1:i,op2:s,section:bT("aq_section").value,pm:bT("aq_posmrks").value,nm:bT("aq_negmrks").value};else if(YE.includes("edit_exams"))a={id:nk,name:bT("aq_examname").value,date:bT("aq_examdate").value,info:bT("aq_examinfo").value,syllabus:bT("aq_examsyllabus").value,mode:"exams"};else a={id:nk,mode:bT("aq_mode").value,title:BE("aq_qtext"),y_url:bT("aq_yurl").value,hint:bT("aq_hint").value,expl:BE("aq_expl"),type:e,answer:t,op:n,op1:i,op2:s,section:bT("aq_section").value,pm:bT("aq_posmrks").value,nm:bT("aq_negmrks").value};return a}async function nE(t){function e(t){t.style.display="none"}function n(t){t.style.display="block"}function i(t){t.style.display="flex"}var s=bT("aq_mode").value,r=bT("aq_ans_hold"),o=bT("aq_type"),a=bT("aq_answer"),l=bT("aq_yurl"),c=bT("aq_mcq_con"),u=bT("aq_matrix"),h=(bT("aq_upl"),bT("aq_all"));bT("aq_tpc"),bT("aq_qbk"),bT("aq_sims");"question"==s?(e(l),n(r),n(o),n(a),i(h)):"lesson"==s?(n(l),e(r),e(o),e(a),i(h)):"exams"==s&&(e(l),e(r),e(o),e(a),e(h)),"mcq"==o.value||"mcq_multiple"==o.value?(i(c),e(u),e(a)):"matrix"==o.value?(n(u),e(c),e(a)):(e(u),e(c),n(a))}function iE(t){sE(this.innerText)}function sE(t){if("+"==t){let e=ik.length;window.location.hash.includes("edit_exams")?ik[e]={id:Date.now()+Math.random().toString(36).substr(2),name:"",date:"",info:"",syllabus:"",mode:"exams"}:ik[e]={id:Date.now()+Math.random().toString(36).substr(2),mode:"",title:"",y_url:"",img:"",hint:"",expl:"",type:"mcq",answer:["1"],op:["1","2","3","4"],op1:[],op2:[],section:"Unfiled",pm:4,nm:-1},(window.location.hash.includes("edit_qubank")||window.location.hash.includes("edit_test"))&&(ik[e].mode="question"),YE.includes("edit_test")&&(ik[e].qid=ik[e].id),t=e}bT("question_list").innerHTML="";for(var e=1;e<ik.length+1;e++)bT("question_list").insertAdjacentHTML("beforeend",'<span class = "t_no_qno" id = "t_no_qno_'+e+'">'+e+"</span>"),bT("t_no_qno_"+e).addEventListener("click",iE);bT("question_list").insertAdjacentHTML("beforeend",'<span class = "t_no_qno" id = "t_no_qno_add">+</span>'),bT("t_no_qno_add").addEventListener("click",iE),0!=t&&(ik[ek-1]=eE(),ek=t);var n=ik[ek-1];if(window.location.href.includes("edit_exams"))return bT("aq_examname").value=n.name,bT("aq_examdate").value=n.date,bT("aq_examinfo").value=n.info,bT("aq_examsyllabus").value=n.syllabus,void nE();if(nk=YE.includes("edit_test")?n.qid:n.id,bT("aq_mode").value=n.mode,jE("aq_qtext",n.title),bT("aq_yurl").value=n.y_url,bT("aq_type").value=n.type,bT("aq_hint").value=n.hint,bT("aq_section").value=n.section,bT("aq_posmrks").value=n.pm,bT("aq_negmrks").value=n.nm,jE("aq_expl",n.expl),"mcq"==n.type||"mcq_multiple"==n.type){bT("aq_mcq_con").innerHTML="";for(var i=0;i<n.op.length;i++){yE(),document.getElementsByClassName("aq_mcq")[i].value=n.op[i];for(var s=0;s<n.answer.length;s++)n.op[i]==n.answer[s]&&(document.getElementsByClassName("aq_mcq")[i].classList.add("aq_mcq_ans"),document.getElementsByClassName("aq_mcq_p")[i].style.borderColor="lime")}}else"numerical"!=n.type&&"explain"!=n.type&&"fill"!=n.type&&"taf"!=n.type||(bT("aq_answer").value=n.answer[0]);nE()}async function rE(t){var e,n;bT("aq_basic").style.display="flex",1==t?(e="topic",n=window.location.hash.split("edit_tpc/")[1],bT("fu_topic_title").innerText="Add/Edit Topic",bT("aq_mode").innerHTML='<option value="question">Question</option><option value="lesson">Lesson</option>',bT("aq_tpc_save").style.display="block",bT("aq_qbc_save").style.display="none",bT("aq_tst_save").style.display="none",bT("aq_test_extra").style.display="none",bT("aq_exam_save").style.display="none",bT("aq_exams").style.display="none",bT("aq_all").style.display="flex",bT("aq_ans_hold").style.display="flex"):2==t?(e="qbank",n=window.location.hash.split("edit_qubank/")[1],bT("fu_topic_title").innerText="Add/Edit QBank",bT("aq_mode").innerHTML='<option value="question">Question</option>',bT("aq_tpc_save").style.display="none",bT("aq_tst_save").style.display="none",bT("aq_test_extra").style.display="none",bT("aq_qbc_save").style.display="block",bT("aq_exam_save").style.display="none",bT("aq_exams").style.display="none",bT("aq_all").style.display="flex",bT("aq_ans_hold").style.display="flex"):3==t?(e="tests",n=window.location.hash.split("edit_tests/")[1],bT("fu_topic_title").innerText="Add/Edit Tests",bT("aq_mode").innerHTML='<option value="question">Question</option>',bT("aq_tpc_save").style.display="none",bT("aq_qbc_save").style.display="none",bT("aq_test_extra").style.display="flex",bT("aq_tst_save").style.display="block",bT("aq_exam_save").style.display="none",bT("aq_exams").style.display="none",bT("aq_all").style.display="flex",bT("aq_ans_hold").style.display="flex"):4==t&&(e="quarkz",n="exams",bT("fu_topic_title").innerText="Add/Edit Exams",bT("aq_mode").innerHTML='<option value="exam">Exam</option>',bT("aq_tpc_save").style.display="none",bT("aq_qbc_save").style.display="none",bT("aq_test_extra").style.display="none",bT("aq_exam_save").style.display="block",bT("aq_tst_save").style.display="none",bT("aq_exams").style.display="flex",bT("aq_all").style.display="none",bT("aq_ans_hold").style.display="none",bT("aq_basic").style.display="none");try{let r=await hg(Qf(kT,e,n));if(r.exists())if(1==t||2==t){var i=r.data();bT("aq_tpcname").value=i.name,bT("aq_tpclevel").value=i.level,bT("aq_tpc_subj").value=i.subject,bT("aq_tpc_chapterid").value=i.chid,ik=i.qllist,sE(0)}else if(3==t){i=r.data();function s(t){var e=new Date(t);return e.setMinutes(e.getMinutes()-e.getTimezoneOffset()),e.toISOString().slice(0,16)}bT("aq_tpcname").value=i.title,bT("aq_tpclevel").value=i.level,bT("aq_tpc_subj").value=i.subject,bT("aq_tst_batches").value=i.batch.toString(),bT("aq_tst_stron").value=s(1e3*i.strton.seconds),bT("aq_tst_endon").value=s(1e3*i.endon.seconds),bT("aq_tst_timealotted").value=i.timeallotted,bT("aq_tst_syllabi").value=i.syllabus;let o=await hg(Qf(kT,"tests",n,"questions","questions")),a=await hg(Qf(kT,"tests",n,"questions","answers")),l=[],c=[];if(o.exists())l=o.data().questions;if(a.exists())c=a.data().questions;ik=wT(l,c),sE(0)}else if(4==t){i=r.data();ik=i.examinfo,sE(0)}}catch{}}function oE(){for(var t=0;t<ik.length;t++)ik[t].qid!=nk&&ik[t].id!=nk||(ik.splice(t,1),sE(0),null==(nk=ik[t-1].qid||ik[t-1].id)&&(nk=""))}async function aE(t){for(var e=0;e<ik.length;e++)ik[e].qid!=nk&&ik.id!=nk||(ik[e]=eE());var n,i;if(1==t?(n="topic",i=window.location.hash.split("edit_tpc/")[1]):2==t?(n="qbank",i=window.location.hash.split("edit_qubank/")[1]):3==t?(n="tests",i=window.location.hash.split("edit_tests/")[1]):4==t&&(n="quarkz",i="exams"),1==t||2==t)try{await mg(Qf(kT,n,i),{name:bT("aq_tpcname").value,qllist:ik,level:bT("aq_tpclevel").value,chid:bT("aq_tpc_chapterid").value,subject:bT("aq_tpc_subj").value})}catch{}else if(3==t){try{var s=new Date(bT("aq_tst_stron").value),r=new Date(bT("aq_tst_endon").value),o=bT("aq_tst_batches").value.split(",");await mg(Qf(kT,n,i),{title:bT("aq_tpcname").value,timeallotted:bT("aq_tst_timealotted").value,syllabus:bT("aq_tst_syllabi").value,strton:s,endon:r,batch:o})}catch{}var a=[],l=[];for(e=0;e<ik.length;e++){var c=ik[e];a.push({qid:c.qid,mode:c.mode,title:c.title,type:c.type,op:c.op,op1:c.op1,op2:c.op2,section:c.section,pm:c.pm,nm:c.nm}),l.push({qid:c.qid,hint:c.hint,expl:c.expl,answer:c.answer,section:c.section,pm:c.pm,nm:c.nm})}try{await mg(Qf(kT,n,i,"questions","questions"),{questions:a})}catch(t){Uy(t)}try{await mg(Qf(kT,n,i,"questions","answers"),{questions:l})}catch{}}else if(4==t){await mg(Qf(kT,n,i),{examinfo:ik})}}function lE(){window.location.hash="#/qbanks/"+atob(this.id.split("chpqbk")[1])}function cE(){window.location.hash="#/topic/"+atob(this.id.split("chptpc")[1])}async function uE(t){var e="",n="";1==t?(e="topic",n="topic"):2==t?(n="qbanks",e="qbank"):e="topic";var i=n+"/",s=window.location.hash.split(i)[1],r=Qf(kT,e,s),o=await hg(r);if(!o.exists())throw DT("error_page",1),new Error;var a=o.data();(XE={}).title=a.name,XE.qllist=a.qllist,gE(3)}function hE(){window.location.hash="#/chapter/"+atob(this.id.split("qb")[1])}function pE(t){bT("qb_cont_2").innerHTML="";for(var e=0;e<ZE.length;e++){var n=ZE[e];n.subject==t&&(bT("qb_cont_2").insertAdjacentHTML("beforeend",'<span class="tlinks rpl" style = "color:pink" id="qb'+btoa(n.id)+'">'+n.name+"</span>"),bT("qb"+btoa(n.id)).addEventListener("click",hE))}}async function fE(t){var e="";1==t?(e="qbank",bT("pe_tst_info").style.display="flex",bT("eqb_instr").style.display="none"):2==t?(e="topic",bT("pe_tst_info").style.display="none",bT("eqb_instr").style.display="none"):e=3==t?"tests":"qbank";var n,i,s,r,o=window.location.hash.split("printable/"+e+"/")[1],a=bT("qb_title"),l=Qf(kT,e,o),c=await hg(l);if(!c.exists())throw DT("error_page",1),new Error;n=(b=c.data()).qllist,a.innerText=b.name,bT("eqb_add").innerHTML="";for(let t of n)if("question"==t.mode){i=(b=t).title,s=b.type,null==(r=b.img)&&(r="");var u='<div class = "q_ans_expl" style = "font-weight:bold;color:green;font-size:10px;flex-direction:row;display:none;">Explaination:'+b.expl+"</div>",h="<div style = 'font-weight:bold;color:green;font-size:10px;flex-direction:row;display:none' class = 'q_ans_1'>Answer:",d='<div class = "qbtp_q"><div id = "'+t.id+'">'+i+'<div class = "qb_q_ty">('+s+")</div></div>";if(bT("eqb_add").insertAdjacentHTML("beforeend",d),""!=r){var p='<div class = "qb_img"><img src = "'+r+'"></div>';bT(t.id).insertAdjacentHTML("beforeend",p)}var f="";if("mcq"==s||"mcq_multiple"==s){var m=b.op;for(let t of m)f+="<div class = 'qb_mcq_opt'>"+t+"</div>";var g='<div class = "qb_mcq_exp" type = "a">'+f+"</div>";for(let t of b.answer)h+="<div class = 'qb_mcq_ans'>"+t+"</div>"}if("taf"==s&&(g='<ol class = "qb_mcq_exp" type = "a"><li>True</li><li>False</li></ol>'),"explain"!=s&&"numerical"!=s&&"fill"!=s||(g=""),"matrix"==s){for(var y=b.op1,v=b.op2,_=y.length,w=0;w<_;w++)f+="<tr><td>"+y[w]+"</td><td>"+v[w]+"</td>";g="<table>"+f+"</table>"}bT(t.id).insertAdjacentHTML("beforeend",g),bT(t.id).insertAdjacentHTML("beforeend",h+"</div>"),bT(t.id).insertAdjacentHTML("beforeend",u),renderMathInElement(bT("eqb_add"))}else if("lesson"==t.mode){var b;i=(b=t).title,s=b.type,r=b.img;d='<div class = "les_q"><div id = "'+t.id+'"><div style = "font-size:3vh;">'+i+'</div><hr color="white" width="100%"></div>';bT("eqb_add").insertAdjacentHTML("beforeend",d);u='<div class = "les_expl" style = "">'+b.expl+'</div><hr color="white" width="100%">';bT(t.id).insertAdjacentHTML("beforeend",u),renderMathInElement(bT("eqb_add"))}bT("printable").insertAdjacentHTML("beforeend","<br></br>")}async function mE(t){var e,n;bT("tp_question").style.display="none",bT("tp_lesson").style.display="block",""==t.y_url?bT("tp_full_vid").style.display="none":(bT("tp_full_vid").style.display="flex",e=t.y_url,n=.8*window.innerWidth||.8*document.documentElement.clientWidth||.8*document.body.clientWidth,null==player||"div"==bT("player").tagName?window.player=new YT.Player("player",{height:"500",width:n,origin:window.location.origin,videoId:e,playerVars:{playsinline:1,controls:0,modestbranding:1},events:{onReady:onPlayerReady,onStateChange:onPlayerStateChange}}):window.player.loadVideoById(e)),bT("tp_lsno").innerText=t.title,bT("tp_expl").innerHTML=t.expl}async function gE(t){var e;e=1==t?-1:1,(JE<XE.qllist.length&&2==t||1==t&&JE>0)&&(JE+=e),3==t&&(JE=0);var n=XE.title;bT("tp_title").innerText=n;var i=XE.qllist[JE];"lesson"==i.mode?mE(i):"question"==i.mode&&async function(t,e){function n(t){t.style.display="none"}function i(t){t.style.display="block"}function s(t){t.style.display="flex"}n(bT("tp_hint")),n(bT("tp_a_expl")),n(bT("tp_e_answer")),n(bT("tp_status"));var r=bT("tp_mcq_con"),o=bT("tp_matrix"),a=bT("tp_answer");if(bT("tp_lsno").innerText="Question",bT("tp_question").style.display="flex",bT("tp_lesson").style.display="none",bT("tp_question").setAttribute("dataid",t.id),bT("tp_question").setAttribute("qtype",t.type),r.innerHTML="",bT("tp_qtext").innerHTML=t.title,"mcq"==t.type||"mcq_multiple"==t.type){s(r),n(o),n(a);var l=t.op,c="";for(let t of l)c+='<div class="tp_mcq_p rpl" onclick = "mcqchose(this)">'+t+"</div>";bT("tp_mcq_con").insertAdjacentHTML("beforeend",c)}else if("matrix"==t.type){n(r),i(o),n(a);for(var u=t.op1,h=t.op2,d=u.length,p=0;p<d;p++)document.getElementsByClassName("tp_i1")[p].innerText=u[p];for(p=0;p<d;p++)document.getElementsByClassName("tp_i2")[p].innerText=h[p]}else"numerical"==t.type||"fill"==t.type?(n(r),n(o),i(a)):"taf"==t.type?(s(r),n(o),n(a),c='<div class="tp_mcq_p rpl">True</div><div class="tp_mcq_p rpl">False</div>',bT("tp_mcq_con").insertAdjacentHTML("beforeend",c)):(n(r),n(o),n(a));renderMathInElement(bT("tp_ans_hold")),renderMathInElement(bT("tp_qtext"))}(i),VE()}function yE(){bT("aq_mcq_con").insertAdjacentHTML("beforeend",'<div class="aq_mcq_p" onclick="changeColor(this)"><input class="aq_mcq"></div>')}function vE(){document.getElementsByClassName("aq_mcq_p")[document.getElementsByClassName("aq_mcq").length-1].remove()}function _E(){for(var t=bT("eqb_add"),e=t.children.length;e>=0;e--)t.appendChild(t.children[Math.random()*e|0])}function wE(){Mn(AT,zE.email).then((()=>{Uy("Success","Password Reset Email sent.")})).catch((t=>{t.code;Uy("Failure",t.message)}))}async function bE(t){var e;if(t){var n=Qf(kT,"users",t.uid);if((r=await hg(n)).exists()){var i=r.data();(zE=i).uuid=t.uid,e=zE.batch,WE=zE.roles.user,HE=zE.roles.editor,$E=zE.roles.admin,bT("spoints").innerText=zE.spoints,null==i.usernotes&&(zE.usernotes=[])}1==i.deleted&&(Uy("Warning","User Account Has Been Deleted"),qT());try{n=Qf(kT,"batch",e);if((r=await hg(n)).exists()){i=r.data();if(zE.batchname=i.name,zE.timetable=i.timetable,async function(t,e){if(rk!=[]){var n=Qf(kT,"batch",t,"info","tests"),i=await hg(n);if(i.exists()){var s=i.data();rk=s.tests}}if(lk!=[]){const t=Wm(Kf(kT,"tests"),Km("finished","array-contains",e),Zm(5));(await pg(t)).forEach((t=>{var e=t.data(),n={title:e.title,testid:t.id,finished:!0,strton:e.strton,endon:e.endon};lk.push(n);var i=0;for(let t of rk)t.testid==n.testid?rk[i].finished=!0:rk[i].finished=!1,i+=1}))}for(var r=parseInt(Date.now()/1e3),o=0;o<rk.length;o++)r>rk[o].strton.seconds&&r<rk[o].endon.seconds?ok.push(rk[o]):r<rk[o].strton.seconds&&ak.push(rk[o])}(e,t.uid),zE.timetableurl="https://calendar.google.com/calendar/embed??height=600&wkst=2&bgcolor=%23ffffff&ctz=Asia%2FKolkata&showTitle=0&showCalendars=0&showTabs=0&showPrint=0&showDate=1&src="+i.timetable+"%40group.calendar.google.com&amp;ctz=Asia%2FKolkata",i.delon.seconds<=parseInt(Date.now()/1e3))throw Uy("Warning","This Batch Has Been Deleted"),qT(),window.reload(),new Error("DENIED");for(var s=0;s<i.chlist.length;s++)ZE.push({name:i.chlist[s].name,id:i.chlist[s].id,subject:i.chlist[s].subject})}}catch{}spoints.style.display="block",bT("dsh_btn").style.display="block",""!=window.location.hash&&null!=window.location.hash&&null!=window.location.hash||(window.location.hash="#/dashboard",sk=1);var r;n=Qf(kT,"quarkz","exams");if((r=await hg(n)).exists()){i=r.data();zE.examslist=i,""!=i.warning&&Uy("Notice",i.warning,(function(){window.location.hash="#/usernotes/releasenotes"}),"Release Notes")}DT(window.location.hash.split("#/")[1],1)}else spoints.textContent="",spoints.style.display="none",bT("dsh_btn").style.display="none",DT("login",1),1==sk&&document.location.reload()}function TE(){for(var t,e,n,i,s=bT("tp_question").getAttribute("dataid"),r=bT("tp_question").getAttribute("qtype"),o=0;o<XE.qllist.length;o++)if(XE.qllist[o].id==s){e=XE.qllist[o].answer,n=XE.qllist[o].expl,i=XE.qllist[o].hint;break}if("numerical"!=r&&"fill"!=r||(e==(t=bT("tp_answer").value)?(bT("tp_status").innerText="Correct Answer",1):(bT("tp_status").innerText="Wrong Answer",0)),"mcq"==r||"mcq_multiple"==r||"taf"==r){t=[];for(var a=0;a<document.getElementsByClassName("tp_mcq_p").length;a++)document.getElementsByClassName("tp_mcq_p")[a].classList.contains("aq_mcq_ans")&&t.push(document.getElementsByClassName("tp_mcq_p")[a].innerText);gT(t,e)?(bT("tp_status").innerText="Correct Answer",1):(bT("tp_status").innerText="Wrong Answer",0)}bT("tp_status").style.display="block",bT("tp_hint").style.display="block",bT("tp_a_expl").style.display="block",bT("tp_e_answer").style.display="block",bT("tp_a_expl").innerHTML=n,bT("tp_hint").innerHTML=i,bT("tp_e_answer").innerHTML="Answer:"+e}function EE(){window.location.hash.includes("topic")?AE("printable/topic/"+window.location.hash.split("topic/")[1],1):window.location.hash.includes("qbanks")&&AE("printable/qbank/"+window.location.hash.split("qbanks/")[1],1),window.location.hash.includes("edit_tpc/")?AE("printable/topic/"+window.location.hash.split("edit_tpc/")[1],1):window.location.hash.includes("edit_qubank/")&&AE("printable/qbank/"+window.location.hash.split("edit_qubank/")[1],1)}function kE(){window.location.hash.includes("topic")?AE("edit_tpc/"+window.location.hash.split("topic/")[1],1):window.location.hash.includes("qbanks")&&AE("edit_qubank/"+window.location.hash.split("qbanks/")[1],1)}function AE(t,e){window.location.hash="#/"+t,"dashboard"==t&&DT("dashboard",1)}function IE(){window.location.hash="#/instructions/"+this.id}function xE(){window.location.hash="#/finished/"+this.id}function CE(t){var e;for(var n of("active"==t?e=ok:"upcoming"==t?e=ak:"finished"==t&&(e=lk),bT("testlinks").innerHTML="",e)){var i=new Date(1e3*n.strton.seconds),s=new Date(1e3*n.endon.seconds),r='<div class="tlinks" id = "'+n.testid+'"><span class = "t_title">'+n.title+'</span><span class = "t_stron">Starts At:'+i+'</span><span class ="t_endon">Ends At:'+s+"</div>";"finished"!=t&&0==n.finished?(bT("testlinks").insertAdjacentHTML("beforeend",r),bT(n.testid).addEventListener("click",IE)):"finished"==t&&(bT("testlinks").insertAdjacentHTML("beforeend",r),bT(n.testid).addEventListener("click",xE))}}async function SE(t){var e;if(1==t){var n=window.location.hash.split("/finished/")[1],i=Qf(kT,"tests",n,"questions","questions"),s=await hg(i);s.exists()&&(e=s.data().questions)}else 2==t&&(e=[],e=hk);for(var r={},o=0;o<fk.length;o++)fk[o].time=fk[o].time.seconds;var a,l,c=ET(fk,"time","type",0),u="";for(o=0;o<c.length;o++)"b"==c[o].type?(a=c[o].time,u=c[o].value):"a"==c[o].type&&u==c[o].value&&(l=c[o].time,null==r[c[o].value]&&(r[c[o].value]={},r[c[o].value].time=0),r[c[o].value].time+=l-a,a=l,l=0);var h={Physics:{correct:0,unattempted:0,incorrect:0,total:0},Chemistry:{correct:0,unattempted:0,incorrect:0,total:0},Math:{correct:0,unattempted:0,incorrect:0,total:0},Biology:{correct:0,unattempted:0,incorrect:0,total:0},Computer:{correct:0,unattempted:0,incorrect:0,total:0},Statistics:{correct:0,unattempted:0,incorrect:0,total:0},Unfiled:{correct:0,unattempted:0,incorrect:0,total:0}},d=0,p=0,f=0;for(o=0;o<e.length;o++)for(var m=0;m<GE.length;m++)if(e[o].qid==GE[m].qid){var g=r[e[o].qid];null==r[e[o].qid]?(r[e[o].section]={},r[e[o].section].time=0):(h[e[o].section].total+=g.time,0==GE[o].marks?(h[e[o].section].unattempted+=g.time,f+=g.time):GE[o].marks==e[o].pm?(h[e[o].section].correct+=g.time,d+=g.time):(h[e[o].section].incorrect+=g.time,p+=g.time))}KE={questions:r,subject:h,correct:d,incorrect:p,unattempted:f}}var qE;function NE(){RE(this.id,this.innerText)}async function DE(t){var e,n=[],i=[],s=[],r="",o="";window.location.hash.includes("/attempt/")?(r=window.location.hash.split("#/attempt/")[1],o=Uy("Warning","Submitting Tests Answers: Please Do Not Close The Tab.")):window.location.hash.includes("/finished/")?r=window.location.hash.split("#/finished/")[1]:window.location.hash.includes("/testreport/")&&(r=window.location.hash.split("#/testreport/")[1]);var a=Qf(kT,"tests",r,"responses",AT.currentUser.uid),l=await hg(a);if(l.exists()){var c=l.data().answers;for(var u in s=l.data().info,c)n.push({qid:u,ans:c[u].ans,type:c[u].type,time:c[u].time})}a=Qf(kT,"tests",r,"questions","answers"),(l=await hg(a)).exists()&&(e=l.data().questions);for(var h=0,d=0,p=0,f={Physics:{correct:0,unattempted:0,incorrect:0,total:0},Chemistry:{correct:0,unattempted:0,incorrect:0,total:0},Math:{correct:0,unattempted:0,incorrect:0,total:0},Biology:{correct:0,unattempted:0,incorrect:0,total:0},Computer:{correct:0,unattempted:0,incorrect:0,total:0},Statistics:{correct:0,unattempted:0,incorrect:0,total:0},Unfiled:{correct:0,unattempted:0,incorrect:0,total:0}},m=0;m<e.length;m++)for(var g=0;g<n.length;g++)if(e[m].qid==n[g].qid){var y=n[g];null==y.ans&&(y.ans=[]),0==y.ans.length?(i.push({qid:e[m].qid,marks:0,type:"unattempted"}),h+=parseFloat(e[m].pm),f[e[m].section].unattempted+=parseFloat(e[m].pm),f[e[m].section].total+=parseFloat(e[m].pm)):gT(e[m].answer,y.ans)?(i.push({qid:e[m].qid,marks:parseFloat(e[m].pm),type:"correct"}),d+=parseFloat(e[m].pm),f[e[m].section].correct+=parseFloat(e[m].pm),f[e[m].section].total+=parseFloat(e[m].pm)):(i.push({qid:e[m].qid,marks:parseFloat(e[m].nm),type:"incorrect"}),p+=parseFloat(e[m].nm),f[e[m].section].incorrect+=parseFloat(e[m].nm),f[e[m].section].total+=parseFloat(e[m].pm))}var v={correct:d,incorrect:p,unattempted:h,mList:i,total:f.Physics.total+f.Chemistry.total+f.Math.total+f.Biology.total+f.Computer.total+f.Statistics.total+f.Unfiled.total,usermarks:d+p,subjectmarks:f};1==t?yT(v,s)||(Uy("NOTICE","Please Wait, Marks Are Being Updated"),await mg(Qf(kT,"tests",r,"responses",AT.currentUser.uid),{info:v}),await mg(Qf(kT,"tests",r,"responses","finished"),{leaderboard:Tg({uid:zE.uuid,marks:v.usermarks,name:zE.name})}),DT()):0==t&&(await mg(Qf(kT,"tests",r,"responses",AT.currentUser.uid),{info:v}),await mg(Qf(kT,"tests",r,"responses","finished"),{leaderboard:Tg({uid:zE.uuid,marks:v.usermarks,name:zE.name})}),DT("testend",1)),document.getElementById(o).style.visibility="hidden",document.getElementById(o).style.opacity="0"}function RE(t,e){var n=new Date;uk=0,window.location.hash.includes("/attempt/")&&pk!=t&&fk.push({type:"a",time:n,value:pk}),bT("tt_qno").innerText=e;try{bT(pk).style.border=""}catch{}pk=t,window.location.hash.includes("/attempt/")&&fk.push({type:"b",time:n,value:pk}),bT(pk).style.border="purple 3px solid";for(let e of hk.questions)if(t==e.qid){bT("tt_qtitle").innerHTML="";var i='<div class = "qb_q" id = "Q'+e.qid+'"><div class = "qb_ttl">'+e.title+'<div id = "qb_q_ty" class = "qb_q_ty qb_qt_ty" >('+e.type+")</div></div></div>";bT("tt_qtitle").insertAdjacentHTML("beforeend",i);var s,r,o="";if("mcq"==e.type){var a=e.op;for(let t of a)o+='<li><input type="radio" class = "q_ans" value = "'+t+'" name = "q_op">'+t+"</input></li>";var l='<ol class = "qb_mcq" type = "A">'+o+"</ol>"}if("mcq_multiple"==e.type){a=e.op;for(let t of a)o+='<li><input type="checkbox" class = "q_ans" value = "'+t+'" name = "q_op">'+t+"</input></li>";l='<ol class = "qb_mcq" type = "A">'+o+"</ol>"}if("taf"==e.type&&(l='<ol class = "qb_mcq" type = "A"><li>True</li><li>False</li></ol>'),"explain"!=e.type&&"numerical"!=e.type||(l=""),"matrix"==e.type){for(var c=e.op1,u=e.op2,h=c.length,d=0;d<h;d++)o+="<tr><td>"+c[d]+"</td><td>"+u[d]+"</td>";l="<table>"+o+"</table>"}switch(bT("tt_qtitle").insertAdjacentHTML("beforeend",l),e.type){case"mcq":case"mcq_multiple":s="";break;case"taf":s='<div id = "tt_mcq"><span><input type="radio" value="a" class = "q_ans" name = "q_op">True</span><span><input type="radio" value="b" class = "q_ans" name = "q_op">False</span></div> ';break;case"numerical":s='<div id = "tt_num"><input type = "number" class="q_ans"></div>';break;case"matrix":s='<div id = "tt_matrix"><div>A<span><input type="checkbox" value="a" id="q_ans_a" name = "q_op">1</span><span><input type="checkbox" value="b" id="q_ans_a" name = "q_op">2</span><span><input type="checkbox" value="c" id="q_ans_a" name = "q_op">3</span><span><input type="checkbox" value="d" id="q_ans_a" name = "q_op">4</span></div><div>B<span><input type="checkbox" value="a" id="q_ans_a" name = "q_op">1</span><span><input type="checkbox" value="b" id="q_ans_a" name = "q_op">2</span><span><input type="checkbox" value="c" id="q_ans_a" name = "q_op">3</span><span><input type="checkbox" value="d" id="q_ans_a" name = "q_op">4</span></div><div>C<span><input type="checkbox" value="a" id="q_ans_a" name = "q_op">1</span><span><input type="checkbox" value="b" id="q_ans_a" name = "q_op">2</span><span><input type="checkbox" value="c" id="q_ans_a" name = "q_op">3</span><span><input type="checkbox" value="d" id="q_ans_a" name = "q_op">4</span></div><div>D<span><input type="checkbox" value="a" id="q_ans_a" name = "q_op">1</span><span><input type="checkbox" value="b" id="q_ans_a" name = "q_op">2</span><span><input type="checkbox" value="c" id="q_ans_a" name = "q_op">3</span><span><input type="checkbox" value="d" id="q_ans_a" name = "q_op">4</span></div></div>';break;case"fill":s='<div id="tt_fill"><input type = "text" class = "q_ans"></div>'}if(bT("tt_qtitle").insertAdjacentHTML("beforeend",s),!window.location.hash.includes("attempt"))for(let e of mk.questions)if(t==e.qid){r=e.answer,null!=KE&&(null==KE.questions[e.qid]?bT("tt_timespent").innerText="0 seconds":bT("tt_timespent").innerText=mT(KE.questions[e.qid].time));var p='<div id="tg_answer">Answer: '+e.answer+'</div><div id="tg_expl">Explanation: '+e.expl+"</div>";bT("tt_qtitle").insertAdjacentHTML("beforeend",p)}renderMathInElement(bT("tt_qtitle"));for(let n of dk)if(n.qid==t){for(d=0;d<document.getElementsByClassName("q_ans").length;d++){var f=document.getElementsByClassName("q_ans")[d];if("mcq"==e.type||"mcq_multiple"==e.type){null==n.ans&&(n.ans=[]);for(let t of n.ans)if(f.value==t){f.checked=!0,1;break}}else f.value=n.ans,1}window.location.hash.includes("attempt")||(gT(n.ans,r)?bT("tt_marksaward").innerHTML='<div style="color:lime">Correct(+4)</div>':0==n.ans.length?bT("tt_marksaward").innerHTML='<div style="color:orange">Unanswered(0)</div>':bT("tt_marksaward").innerHTML='<div style="color:red">Incorrect(-1)</div>')}for(var m=0;m<dk.length;m++)dk[m].qid==pk&&"tts_notvisit"==dk[m].type&&window.location.hash.includes("attempt")&&(dk[m].type="tts_notanswer",ME("tts_notanswer"),dk[m].ans=[],bT(pk).classList.remove("tts_notanswer","tts_notvisit","tts_answered","tts_review","tts_ansreview"),bT(pk).classList.add("tts_notanswer"));break}}function LE(){var t=1;for(let t of["tw_Physics","tw_Chemistry","tw_Math","tw_Computer","tw_Statistics","tw_Biology","tw_Unfiled"])bT(t+"_c").innerHTML="",bT(t).style.display="none";for(let n of hk.questions){var e='<span class = "tts_notvisit" id = "'+n.qid+'">'+t+"</span>";t+=1,bT("tw_"+n.section+"_c").insertAdjacentHTML("beforeend",e),bT("tw_"+n.section).style.display="flex",bT(n.qid).addEventListener("click",NE)}if(window.location.hash.includes("attempt"))bT("tt_sub").style.display="block";else{for(let t of dk){var n=t.qid;for(let e of mk.questions)if(n==e.qid){var i=e.answer;null==t.ans&&(t.ans=[]),gT(t.ans,i)?bT(n).classList.add("t_crr"):0==t.ans.length?bT(n).classList.add("t_unat"):bT(n).classList.add("t_incrr")}}SE(2)}for(let t of dk)bT(t.qid).classList.replace("tts_notvisit",t.type);RE(hk.questions[0].qid,1)}async function ME(t){if(!window.location.hash.includes("attempt"))return Uy("Error","Performing Test Operations in Test Reports Is Prohibited"),1;var e="answers."+pk,n=window.location.hash.split("#/attempt/")[1],i=bT("qb_q_ty").innerText.split("(")[1];if("tts_notanswer"==t){await mg(Qf(kT,"tests",n,"responses",AT.currentUser.uid),{[`${e}`]:{ans:"",type:"tts_notanswer",time:bg()}});var s=0;for(let t of dk){if(t.qid==pk){for(var r=0;r<document.getElementsByClassName("q_ans").length;r++){var o=document.getElementsByClassName("q_ans")[r];if("mcq"==i||"mcq_multiple"==i)for(var a=0;a<t.ans.length;a++){var l=t.ans[a];o.value==l&&(o.checked=!1)}else t.value=""}dk.splice(s,1)}s+=1}}else{var c=[];for(r=0;r<document.getElementsByClassName("q_ans").length;r++){o=document.getElementsByClassName("q_ans")[r];"mcq)"==i||"mcq_multiple)"==i?1==o.checked&&c.push(o.value):c.push(o.value)}"tts_review"==t&&(c=""),await mg(Qf(kT,"tests",n,"responses",AT.currentUser.uid),{[`${e}`]:{ans:c,type:t,time:bg()}});var u=0;for(let e of dk)e.qid==pk&&(e.ans=c,e.type=t,u=1);0==u&&dk.push({qid:pk,ans:c,type:t})}bT(pk).classList.remove("tts_notanswer","tts_notvisit","tts_answered","tts_review","tts_ansreview"),bT(pk).classList.add(t)}async function OE(){if(!window.location.hash.includes("attempt"))return Uy("Error","Performing Test Operations in Test Reports Is Prohibited"),1;var t=new Date;fk.push({type:"a",time:t,value:pk}),fk.push({type:"end",time:t,value:"1"});var e=window.location.hash.split("#/attempt/")[1];window.onbeforeunload=function(){},window.onhashchange=DT,await mg(Qf(kT,"tests",e,"responses",AT.currentUser.uid),{endon:bg(),actions:fk,warning:[]}).then((function(){dk=[]})),await mg(Qf(kT,"tests",e,"responses","finished"),{finished:Tg(AT.currentUser.uid)}).then(DE(0));var n=new Date(1e3*ck.endon.seconds);bT("te_endtime").innerText=n,rk=[],ok=[],ak=[],lk=[],ck=[],hk=[],pk="",bT("dsh_btn").style.display="block",bT("tp_pnt").style.display="none",clearInterval(qE)}function PE(t){0==t&&Uy("WARNING","You Are Currently Offline.")}function UE(){"preview"==bT("un_rendermode").value?(bT("un_preview").style.display="block",bT("un_preview").innerHTML="<h1 style = 'text-align:center'>"+bT("un_title").value+"</h1><br>"+BE("un_editable"),bT("un_edit").style.display="none"):"edit"==bT("un_rendermode").value&&(bT("un_edit").style.display="flex",bT("un_preview").style.display="none");try{bT("uno"+window.location.hash.split("usernotes/")[1]).style.backgroundColor=bT("un_colorpicker").value}catch{}}function FE(){let t=document.querySelector("#rg_mbleno").value,e=document.querySelector("#rg_uname").value,n=document.querySelector("#rg_pass").value,i=document.querySelector("#rg_pass1").value,s=document.querySelector("#rg_name").value,r=document.querySelector("#rg_dob").value,o=document.querySelector("#rg_class").value,a=document.querySelector("#rg_gender").value;if(t&&e&&n&&i&&s&&r&&o&&a){{const s=/^\+91\d{10}$/;if(!t.match(s))return void Uy("Warning","Mobile number should be in the format +91XXXXXXXXXX");const r=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;if(!e.match(r))return void Uy("Warning","Please enter a valid email address");if(n.length<8)return void Uy("Warning","Password should be at least 8 characters long");if(n!==i)return void Uy("Warning","Passwords do not match")}Uy("Note","By Clicking on 'Accept And Register' you agree that you accept all Terms And Conditions and Privacy Policy of Quarkz!",NT,"Accept And Register")}else Uy("Warning","Please fill in all fields")}function VE(){try{window.player.stopVideo(),window.location.hash.includes("topic")||(window.player=void 0)}catch{}}function BE(t){return $("#"+t).summernote("code")}function jE(t,e){$("#"+t).summernote("code",e)}window.onbeforeunload=function(t){updatePoints()},window.addEventListener("online",(()=>PE(1))),window.addEventListener("offline",(()=>PE(0))),$(document).ready((function(){$(".summernote").summernote({toolbar:[["style",["style"]],["font",["bold","italic","underline","clear"]],["fontname",["fontname"]],["color",["color"]],["para",["ul","ol","paragraph"]],["height",["height"]],["table",["table"]],["insert",["link","picture","hr"]],["view",["fullscreen","codeview"]],["help",["help"]]]})}));var zE,HE,$E,WE,GE,KE,QE={copyright:"Mr Techtroid 2021-23",vno:"v0.5.0",author:"Mr Techtroid","last-updated":"10/02/2023(IST)",serverstatus:"firebase-online"},YE=window.location.hash.split("#/")[1],XE={},JE=0,ZE=[],tk=[],ek=0,nk="",ik=[],sk=0,rk=[],ok=[],ak=[],lk=[],ck=[],uk=0,hk=[],dk=[],pk="",fk=[],mk=[];window.onhashchange=DT,function(t,e,n,i){H(t).onAuthStateChanged(e,n,i)}(ls(),bE),console,console={},console={log:function(t){},error:function(t){}},console;
//# sourceMappingURL=index.a51a1cdd.js.map
