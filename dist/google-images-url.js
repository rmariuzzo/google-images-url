!function(e,i){if("object"==typeof exports&&"object"==typeof module)module.exports=i();else if("function"==typeof define&&define.amd)define([],i);else{var r=i();for(var t in r)("object"==typeof exports?exports:e)[t]=r[t]}}(this,function(){return function(e){function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}var r={};return i.m=e,i.c=r,i.i=function(e){return e},i.d=function(e,r,t){i.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:t})},i.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(r,"a",r),r},i.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},i.p="",i(i.s=5)}([function(e,i,r){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t={orange:"ic:specific,isc:orange",yellow:"ic:specific,isc:yellow",green:"ic:specific,isc:green",teal:"ic:specific,isc:teal",blue:"ic:specific,isc:blue",purple:"ic:specific,isc:purple",pink:"ic:specific,isc:pink",white:"ic:specific,isc:white",gray:"ic:specific,isc:gray",black:"ic:specific,isc:black",brown:"ic:specific,isc:brown"},n=function(e){if(e){if("string"==typeof e){var i=t[e];return i||(console.warn("[google-images-url] Unknown color specified:",e),"")}return console.warn("[google-images-url] Invalid color specified:",e),""}return""};i.default=n,i.colors=t},function(e,i,r){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t={icon:"isz:i",medium:"isz:m",large:"isz:l"},n=function(e){if(e){if("string"==typeof e){var i=t[e];return i||(console.warn("[google-images-url] Unknown size specified:",e),"")}return e.width&&e.height?"isz:ex,iszw:"+e.width+",iszh:"+e.height:(console.warn("[google-images-url] Invalid size specified:",e),"")}return""};i.default=n,i.sizes=t},function(e,i,r){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t={date:"sbd:1",relevance:"sbd:0"},n=function(e){if(e){if("string"==typeof e){var i=t[e];return i||(console.warn("[google-images-url] Unknown sortBy specified:",e),"")}return console.warn("[google-images-url] Invalid sortBy specified:",e),""}return""};i.default=n,i.sortBys=t},function(e,i,r){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t={anytime:"qdr:a",second:"qdr:s",minute:"qdr:n",hour:"qdr:h",day:"qdr:d",week:"qdr:w",month:"qdr:m",year:"qdr:year"},n=function(e){if(e){if("string"==typeof e){var i=t[e];return i||(console.warn("[google-images-url] Unknown time specified:",e),"")}return e.from&&e.to?"cdr:1,cd_min:"+e.from+",cd_max"+e.to:(console.warn("[google-images-url] Invalid time specified:",e),"")}return""};i.default=n,i.times=t},function(e,i,r){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var t={face:"itp:face",photo:"itp:photo",clipart:"itp:clipart",lineart:"itp:lineart",animated:"itp:animated"},n=function(e){if(e){if("string"==typeof e){var i=t[e];return i||(console.warn("[google-images-url] Unknown type specified:",e),"")}return console.warn("[google-images-url] Invalid type specified:",e),""}return""};i.default=n,i.types=t},function(e,i,r){"use strict";function t(e){return e&&e.__esModule?e:{default:e}}var n=r(0),o=t(n),c=r(1),s=t(c),l=r(4),u=t(l),a=r(3),f=t(a),p=r(2),d=t(p),g={size:null,color:null,type:null,group:null,showSizes:null,time:"anytime",sortBy:null},m=function(e){return e?"string"==typeof e?encodeURIComponent(e):(console.warn("[google-images-url] Invalid query specified:",e),""):""},y={create:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",i=arguments[1];return i=Object.assign({},g,i),"https://www.google.com/search?q="+m(e)+"&tbs="+[(0,s.default)(i.size),(0,o.default)(i.color),(0,u.default)(i.type),(0,f.default)(i.time),(0,d.default)(i.sortBy),i.showSizes?"imgo:1":""].filter(function(e){return e}).join(",")+"&tbm=isch"}};e.exports=y}])});