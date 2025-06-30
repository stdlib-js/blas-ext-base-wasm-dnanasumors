"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var p=u(function(G,c){
var R=require("path").resolve,W=require('@stdlib/fs-read-wasm/dist').sync,A=W(R(__dirname,"..","src","main.wasm"));c.exports=A
});var d=u(function(H,m){
var O=require('@stdlib/assert-is-wasm-memory/dist'),y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=require('@stdlib/utils-inherit/dist'),q=require('@stdlib/wasm-module-wrapper/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist'),j=p();function i(e){if(!(this instanceof i))return new i(e);if(!O(e))throw new TypeError(g('2GDH0',e));return q.call(this,j,e,{env:{memory:e}}),this}S(i,q);y(i.prototype,"main",function(r,a,t){return this._instance.exports.stdlib_strided_dnanasumors(r,a,t)});y(i.prototype,"ndarray",function(r,a,t,o){return this._instance.exports.stdlib_strided_dnanasumors_ndarray(r,a,t,o)});m.exports=i
});var w=u(function(I,h){
var f=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=require('@stdlib/utils-inherit/dist'),B=require('@stdlib/strided-base-stride2offset/dist'),E=require('@stdlib/wasm-memory/dist'),T=require('@stdlib/wasm-base-arrays2ptrs/dist'),V=require('@stdlib/wasm-base-strided2object/dist'),v=d();function s(){return this instanceof s?(v.call(this,new E({initial:0})),this):new s}z(s,v);f(s.prototype,"main",function(r,a,t){return this.ndarray(r,a,t,B(r,t))});f(s.prototype,"ndarray",function(r,a,t,o){var l,n;return l=T(this,[V(r,a,t,o)]),n=l[0],v.prototype.ndarray.call(this,r,n.ptr,n.stride,n.offset)});h.exports=s
});var b=u(function(J,_){
var k=w(),M=new k;M.initializeSync();_.exports=M
});var C=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=b(),D=d();C(x,"Module",D);module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
