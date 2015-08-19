/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license */
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);
/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2013, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/
(function(e,t,n,r){"use strict";function i(e){var t,n=this;this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=10,this.layer=e;if(!e||!e.nodeType)throw new TypeError("Layer must be a document node");this.onClick=function(){return i.prototype.onClick.apply(n,arguments)},this.onMouse=function(){return i.prototype.onMouse.apply(n,arguments)},this.onTouchStart=function(){return i.prototype.onTouchStart.apply(n,arguments)},this.onTouchMove=function(){return i.prototype.onTouchMove.apply(n,arguments)},this.onTouchEnd=function(){return i.prototype.onTouchEnd.apply(n,arguments)},this.onTouchCancel=function(){return i.prototype.onTouchCancel.apply(n,arguments)};if(i.notNeeded(e))return;this.deviceIsAndroid&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,r){var i=Node.prototype.removeEventListener;t==="click"?i.call(e,t,n.hijacked||n,r):i.call(e,t,n,r)},e.addEventListener=function(t,n,r){var i=Node.prototype.addEventListener;t==="click"?i.call(e,t,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e)}),r):i.call(e,t,n,r)}),typeof e.onclick=="function"&&(t=e.onclick,e.addEventListener("click",function(e){t(e)},!1),e.onclick=null)}function o(e){if(typeof e=="string"||e instanceof String)e=e.replace(/^[\\/'"]+|(;\s?})+|[\\/'"]+$/g,"");return e}e("head").has(".foundation-mq-small").length===0&&e("head").append('<meta class="foundation-mq-small">'),e("head").has(".foundation-mq-medium").length===0&&e("head").append('<meta class="foundation-mq-medium">'),e("head").has(".foundation-mq-large").length===0&&e("head").append('<meta class="foundation-mq-large">'),e("head").has(".foundation-mq-xlarge").length===0&&e("head").append('<meta class="foundation-mq-xlarge">'),e("head").has(".foundation-mq-xxlarge").length===0&&e("head").append('<meta class="foundation-mq-xxlarge">'),i.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,i.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),i.prototype.deviceIsIOS4=i.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),i.prototype.deviceIsIOSWithBadTarget=i.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),i.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(this.deviceIsIOS&&e.type==="file"||e.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(e.className)},i.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":case"select":return!0;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},i.prototype.sendClick=function(e,r){var i,s;n.activeElement&&n.activeElement!==e&&n.activeElement.blur(),s=r.changedTouches[0],i=n.createEvent("MouseEvents"),i.initMouseEvent("click",!0,!0,t,1,s.screenX,s.screenY,s.clientX,s.clientY,!1,!1,!1,!1,0,null),i.forwardedTouchEvent=!0,e.dispatchEvent(i)},i.prototype.focus=function(e){var t;this.deviceIsIOS&&e.setSelectionRange?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},i.prototype.updateScrollParent=function(e){var t,n;t=e.fastClickScrollParent;if(!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)},i.prototype.getTargetElementFromEventTarget=function(e){return e.nodeType===Node.TEXT_NODE?e.parentNode:e},i.prototype.onTouchStart=function(e){var n,r,i;if(e.targetTouches.length>1)return!0;n=this.getTargetElementFromEventTarget(e.target),r=e.targetTouches[0];if(this.deviceIsIOS){i=t.getSelection();if(i.rangeCount&&!i.isCollapsed)return!0;if(!this.deviceIsIOS4){if(r.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=r.identifier,this.updateScrollParent(n)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=n,this.touchStartX=r.pageX,this.touchStartY=r.pageY,e.timeStamp-this.lastClickTime<200&&e.preventDefault(),!0},i.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n?!0:!1},i.prototype.onTouchMove=function(e){if(!this.trackingClick)return!0;if(this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))this.trackingClick=!1,this.targetElement=null;return!0},i.prototype.findControl=function(e){return e.control!==r?e.control:e.htmlFor?n.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},i.prototype.onTouchEnd=function(e){var r,i,s,o,u,a=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<200)return this.cancelNextClick=!0,!0;this.lastClickTime=e.timeStamp,i=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,this.deviceIsIOSWithBadTarget&&(u=e.changedTouches[0],a=n.elementFromPoint(u.pageX-t.pageXOffset,u.pageY-t.pageYOffset)||a,a.fastClickScrollParent=this.targetElement.fastClickScrollParent),s=a.tagName.toLowerCase();if(s==="label"){r=this.findControl(a);if(r){this.focus(a);if(this.deviceIsAndroid)return!1;a=r}}else if(this.needsFocus(a)){if(e.timeStamp-i>100||this.deviceIsIOS&&t.top!==t&&s==="input")return this.targetElement=null,!1;this.focus(a);if(!this.deviceIsIOS4||s!=="select")this.targetElement=null,e.preventDefault();return!1}if(this.deviceIsIOS&&!this.deviceIsIOS4){o=a.fastClickScrollParent;if(o&&o.fastClickLastScrollTop!==o.scrollTop)return!0}return this.needsClick(a)||(e.preventDefault(),this.sendClick(a,e)),!1},i.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},i.prototype.onMouse=function(e){return this.targetElement?e.forwardedTouchEvent?!0:e.cancelable?!this.needsClick(this.targetElement)||this.cancelNextClick?(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1):!0:!0:!0},i.prototype.onClick=function(e){var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):e.target.type==="submit"&&e.detail===0?!0:(t=this.onMouse(e),t||(this.targetElement=null),t)},i.prototype.destroy=function(){var e=this.layer;this.deviceIsAndroid&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},i.notNeeded=function(e){var r;if(typeof t.ontouchstart=="undefined")return!0;if(/Chrome\/[0-9]+/.test(navigator.userAgent)){if(!i.prototype.deviceIsAndroid)return!0;r=n.querySelector("meta[name=viewport]");if(r&&r.content.indexOf("user-scalable=no")!==-1)return!0}return e.style.msTouchAction==="none"?!0:!1},i.attach=function(e){return new i(e)},typeof define!="undefined"&&define.amd?define(function(){return i}):typeof module!="undefined"&&module.exports?(module.exports=i.attach,module.exports.FastClick=i):t.FastClick=i,typeof i!="undefined"&&i.attach(n.body);var s=function(t,r){return typeof t=="string"?r?e(r.querySelectorAll(t)):e(n.querySelectorAll(t)):e(t,r)};t.matchMedia=t.matchMedia||function(e,t){var n,r=e.documentElement,i=r.firstElementChild||r.firstChild,s=e.createElement("body"),o=e.createElement("div");return o.id="mq-test-1",o.style.cssText="position:absolute;top:-100em",s.style.background="none",s.appendChild(o),function(e){return o.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',r.insertBefore(s,i),n=o.offsetWidth===42,r.removeChild(s),{matches:n,media:e}}}(n),function(e){function u(){n&&(s(u),jQuery.fx.tick())}var n,r=0,i=["webkit","moz"],s=t.requestAnimationFrame,o=t.cancelAnimationFrame;for(;r<i.length&&!s;r++)s=t[i[r]+"RequestAnimationFrame"],o=o||t[i[r]+"CancelAnimationFrame"]||t[i[r]+"CancelRequestAnimationFrame"];s?(t.requestAnimationFrame=s,t.cancelAnimationFrame=o,jQuery.fx.timer=function(e){e()&&jQuery.timers.push(e)&&!n&&(n=!0,u())},jQuery.fx.stop=function(){n=!1}):(t.requestAnimationFrame=function(e,n){var i=(new Date).getTime(),s=Math.max(0,16-(i-r)),o=t.setTimeout(function(){e(i+s)},s);return r=i+s,o},t.cancelAnimationFrame=function(e){clearTimeout(e)})}(jQuery),t.Foundation={name:"Foundation",version:"5.0.0",media_queries:{small:s(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),medium:s(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),large:s(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xlarge:s(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xxlarge:s(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,"")},stylesheet:e("<style></style>").appendTo("head")[0].sheet,init:function(e,t,n,r,i){var o,u=[e,n,r,i],a=[];this.rtl=/rtl/i.test(s("html").attr("dir")),this.scope=e||this.scope;if(t&&typeof t=="string"&&!/reflow/i.test(t))this.libs.hasOwnProperty(t)&&a.push(this.init_lib(t,u));else for(var f in this.libs)a.push(this.init_lib(f,t));return e},init_lib:function(e,t){return this.libs.hasOwnProperty(e)?(this.patch(this.libs[e]),t&&t.hasOwnProperty(e)?this.libs[e].init.apply(this.libs[e],[this.scope,t[e]]):this.libs[e].init.apply(this.libs[e],t)):function(){}},patch:function(e){e.scope=this.scope,e.data_options=this.lib_methods.data_options,e.bindings=this.lib_methods.bindings,e.S=s,e.rtl=this.rtl},inherit:function(e,t){var n=t.split(" ");for(var r=n.length-1;r>=0;r--)this.lib_methods.hasOwnProperty(n[r])&&(this.libs[e.name][n[r]]=this.lib_methods[n[r]])},random_str:function(e){var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");e||(e=Math.floor(Math.random()*t.length));var n="";for(var r=0;r<e;r++)n+=t[Math.floor(Math.random()*t.length)];return n},libs:{},lib_methods:{throttle:function(e,t){var n=null;return function(){var r=this,i=arguments;clearTimeout(n),n=setTimeout(function(){e.apply(r,i)},t)}},data_options:function(t){function a(e){return!isNaN(e-0)&&e!==null&&e!==""&&e!==!1&&e!==!0}function f(t){return typeof t=="string"?e.trim(t):t}var n={},r,i,s,o,u=t.data("options");if(typeof u=="object")return u;s=(u||":").split(";"),o=s.length;for(r=o-1;r>=0;r--)i=s[r].split(":"),/true/i.test(i[1])&&(i[1]=!0),/false/i.test(i[1])&&(i[1]=!1),a(i[1])&&(i[1]=parseInt(i[1],10)),i.length===2&&i[0].length>0&&(n[f(i[0])]=f(i[1]));return n},delay:function(e,t){return setTimeout(e,t)},empty:function(e){if(e.length&&e.length>0)return!1;if(e.length&&e.length===0)return!0;for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0},register_media:function(t,n){Foundation.media_queries[t]===r&&(e("head").append('<meta class="'+n+'">'),Foundation.media_queries[t]=o(e("."+n).css("font-family")))},addCustomRule:function(e,t){if(t===r)Foundation.stylesheet.insertRule(e,Foundation.stylesheet.cssRules.length);else{var n=Foundation.media_queries[t];n!==r&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[t]+"{ "+e+" }")}},loaded:function(e,t){function n(){t(e[0])}function r(){this.one("load",n);if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var e=this.attr("src"),t=e.match(/\?/)?"&":"?";t+="random="+(new Date).getTime(),this.attr("src",e+t)}}if(!e.attr("src")){n();return}e[0].complete||e[0].readyState===4?n():r.call(e)},bindings:function(t,n){var r=this,i=!s(this).data(this.name+"-init");if(typeof t=="string")return this[t].call(this);s(this.scope).is("[data-"+this.name+"]")?(s(this.scope).data(this.name+"-init",e.extend({},this.settings,n||t,this.data_options(s(this.scope)))),i&&this.events(this.scope)):s("[data-"+this.name+"]",this.scope).each(function(){var i=!s(this).data(r.name+"-init");s(this).data(r.name+"-init",e.extend({},r.settings,n||t,r.data_options(s(this)))),i&&r.events(this)})}}},e.fn.foundation=function(){var e=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(e)),this})}})(jQuery,this,this.document),function(e,t,n,r){"use strict";var i=i||!1;Foundation.libs.joyride={name:"joyride",version:"5.0.0",defaults:{expose:!1,modal:!0,tip_location:"bottom",nub_position:"auto",scroll_speed:1500,scroll_animation:"linear",timer:0,start_timer_on_click:!0,start_offset:0,next_button:!0,tip_animation:"fade",pause_after:[],exposed:[],tip_animation_fade_speed:300,cookie_monster:!1,cookie_name:"joyride",cookie_domain:!1,cookie_expires:365,tip_container:"body",tip_location_patterns:{top:["bottom"],bottom:[],left:["right","top","bottom"],right:["left","top","bottom"]},post_ride_callback:function(){},post_step_callback:function(){},pre_step_callback:function(){},pre_ride_callback:function(){},post_expose_callback:function(){},template:{link:'<a href="#close" class="joyride-close-tip">&times;</a>',timer:'<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',tip:'<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',wrapper:'<div class="joyride-content-wrapper"></div>',button:'<a href="#" class="small button joyride-next-tip"></a>',modal:'<div class="joyride-modal-bg"></div>',expose:'<div class="joyride-expose-wrapper"></div>',expose_cover:'<div class="joyride-expose-cover"></div>'},expose_add_class:""},init:function(e,t,n){Foundation.inherit(this,"throttle delay"),this.settings=this.defaults,this.bindings(t,n)},events:function(){var n=this;e(this.scope).off(".joyride").on("click.fndtn.joyride",".joyride-next-tip, .joyride-modal-bg",function(e){e.preventDefault(),this.settings.$li.next().length<1?this.end():this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(),this.startTimer()):(this.hide(),this.show())}.bind(this)).on("click.fndtn.joyride",".joyride-close-tip",function(e){e.preventDefault(),this.end()}.bind(this)),e(t).off(".joyride").on("resize.fndtn.joyride",n.throttle(function(){if(e("[data-joyride]").length>0&&n.settings.$next_tip){if(n.settings.exposed.length>0){var t=e(n.settings.exposed);t.each(function(){var t=e(this);n.un_expose(t),n.expose(t)})}n.is_phone()?n.pos_phone():n.pos_default(!1,!0)}},100))},start:function(){var t=this,n=e("[data-joyride]",this.scope),r=["timer","scrollSpeed","startOffset","tipAnimationFadeSpeed","cookieExpires"],i=r.length;if(!n.length>0)return;this.settings.init||this.events(),this.settings=n.data("joyride-init"),this.settings.$content_el=n,this.settings.$body=e(this.settings.tip_container),this.settings.body_offset=e(this.settings.tip_container).position(),this.settings.$tip_content=this.settings.$content_el.find("> li"),this.settings.paused=!1,this.settings.attempts=0,typeof e.cookie!="function"&&(this.settings.cookie_monster=!1);if(!this.settings.cookie_monster||this.settings.cookie_monster&&e.cookie(this.settings.cookie_name)===null)this.settings.$tip_content.each(function(n){var s=e(this);this.settings=e.extend({},t.defaults,t.data_options(s));for(var o=i-1;o>=0;o--)t.settings[r[o]]=parseInt(t.settings[r[o]],10);t.create({$li:s,index:n})}),!this.settings.start_timer_on_click&&this.settings.timer>0?(this.show("init"),this.startTimer()):this.show("init")},resume:function(){this.set_li(),this.show()},tip_template:function(t){var n,r;return t.tip_class=t.tip_class||"",n=e(this.settings.template.tip).addClass(t.tip_class),r=e.trim(e(t.li).html())+this.button_text(t.button_text)+this.settings.template.link+this.timer_instance(t.index),n.append(e(this.settings.template.wrapper)),n.first().attr("data-index",t.index),e(".joyride-content-wrapper",n).append(r),n[0]},timer_instance:function(t){var n;return t===0&&this.settings.start_timer_on_click&&this.settings.timer>0||this.settings.timer===0?n="":n=e(this.settings.template.timer)[0].outerHTML,n},button_text:function(t){return this.settings.next_button?(t=e.trim(t)||"Next",t=e(this.settings.template.button).append(t)[0].outerHTML):t="",t},create:function(t){var n=t.$li.attr("data-button")||t.$li.attr("data-text"),r=t.$li.attr("class"),i=e(this.tip_template({tip_class:r,index:t.index,button_text:n,li:t.$li}));e(this.settings.tip_container).append(i)},show:function(t){var n=null;this.settings.$li===r||e.inArray(this.settings.$li.index(),this.settings.pause_after)===-1?(this.settings.paused?this.settings.paused=!1:this.set_li(t),this.settings.attempts=0,this.settings.$li.length&&this.settings.$target.length>0?(t&&(this.settings.pre_ride_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.show_modal()),this.settings.pre_step_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.settings.expose&&this.expose(),this.settings.tip_settings=e.extend({},this.settings,this.data_options(this.settings.$li)),this.settings.timer=parseInt(this.settings.timer,10),this.settings.tip_settings.tip_location_pattern=this.settings.tip_location_patterns[this.settings.tip_settings.tip_location],/body/i.test(this.settings.$target.selector)||this.scroll_to(),this.is_phone()?this.pos_phone(!0):this.pos_default(!0),n=this.settings.$next_tip.find(".joyride-timer-indicator"),/pop/i.test(this.settings.tip_animation)?(n.width(0),this.settings.timer>0?(this.settings.$next_tip.show(),this.delay(function(){n.animate({width:n.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.show()):/fade/i.test(this.settings.tip_animation)&&(n.width(0),this.settings.timer>0?(this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(),this.delay(function(){n.animate({width:n.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fadeSpeed)):this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)),this.settings.$current_tip=this.settings.$next_tip):this.settings.$li&&this.settings.$target.length<1?this.show():this.end()):this.settings.paused=!0},is_phone:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},hide:function(){this.settings.modal&&this.settings.expose&&this.un_expose(),this.settings.modal||e(".joyride-modal-bg").hide(),this.settings.$current_tip.css("visibility","hidden"),setTimeout(e.proxy(function(){this.hide(),this.css("visibility","visible")},this.settings.$current_tip),0),this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip)},set_li:function(e){e?(this.settings.$li=this.settings.$tip_content.eq(this.settings.start_offset),this.set_next_tip(),this.settings.$current_tip=this.settings.$next_tip):(this.settings.$li=this.settings.$li.next(),this.set_next_tip()),this.set_target()},set_next_tip:function(){this.settings.$next_tip=e(".joyride-tip-guide").eq(this.settings.$li.index()),this.settings.$next_tip.data("closed","")},set_target:function(){var t=this.settings.$li.attr("data-class"),r=this.settings.$li.attr("data-id"),i=function(){return r?e(n.getElementById(r)):t?e("."+t).first():e("body")};this.settings.$target=i()},scroll_to:function(){var n,r;n=e(t).height()/2,r=Math.ceil(this.settings.$target.offset().top-n+this.settings.$next_tip.outerHeight()),r>0&&e("html, body").animate({scrollTop:r},this.settings.scroll_speed,"swing")},paused:function(){return e.inArray(this.settings.$li.index()+1,this.settings.pause_after)===-1},restart:function(){this.hide(),this.settings.$li=r,this.show("init")},pos_default:function(n,r){var i=Math.ceil(e(t).height()/2),s=this.settings.$next_tip.offset(),o=this.settings.$next_tip.find(".joyride-nub"),u=Math.ceil(o.outerWidth()/2),a=Math.ceil(o.outerHeight()/2),f=n||!1;f&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),typeof r=="undefined"&&(r=!1);if(!/body/i.test(this.settings.$target.selector)){if(this.bottom()){var l=this.settings.$target.offset().left;Foundation.rtl&&(l=this.settings.$target.offset().width-this.settings.$next_tip.width()+l),this.settings.$next_tip.css({top:this.settings.$target.offset().top+a+this.settings.$target.outerHeight(),left:l}),this.nub_position(o,this.settings.tip_settings.nub_position,"top")}else if(this.top()){var l=this.settings.$target.offset().left;Foundation.rtl&&(l=this.settings.$target.offset().width-this.settings.$next_tip.width()+l),this.settings.$next_tip.css({top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-a,left:l}),this.nub_position(o,this.settings.tip_settings.nub_position,"bottom")}else this.right()?(this.settings.$next_tip.css({top:this.settings.$target.offset().top,left:this.outerWidth(this.settings.$target)+this.settings.$target.offset().left+u}),this.nub_position(o,this.settings.tip_settings.nub_position,"left")):this.left()&&(this.settings.$next_tip.css({top:this.settings.$target.offset().top,left:this.settings.$target.offset().left-this.outerWidth(this.settings.$next_tip)-u}),this.nub_position(o,this.settings.tip_settings.nub_position,"right"));!this.visible(this.corners(this.settings.$next_tip))&&this.settings.attempts<this.settings.tip_settings.tip_location_pattern.length&&(o.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),this.settings.tip_settings.tip_location=this.settings.tip_settings.tip_location_pattern[this.settings.attempts],this.settings.attempts++,this.pos_default())}else this.settings.$li.length&&this.pos_modal(o);f&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_phone:function(t){var n=this.settings.$next_tip.outerHeight(),r=this.settings.$next_tip.offset(),i=this.settings.$target.outerHeight(),s=e(".joyride-nub",this.settings.$next_tip),o=Math.ceil(s.outerHeight()/2),u=t||!1;s.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),u&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector)?this.settings.$li.length&&this.pos_modal(s):this.top()?(this.settings.$next_tip.offset({top:this.settings.$target.offset().top-n-o}),s.addClass("bottom")):(this.settings.$next_tip.offset({top:this.settings.$target.offset().top+i+o}),s.addClass("top")),u&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_modal:function(e){this.center(),e.hide(),this.show_modal()},show_modal:function(){if(!this.settings.$next_tip.data("closed")){var t=e(".joyride-modal-bg");t.length<1&&e("body").append(this.settings.template.modal).show(),/pop/i.test(this.settings.tip_animation)?t.show():t.fadeIn(this.settings.tip_animation_fade_speed)}},expose:function(){var n,r,i,s,o,u="expose-"+Math.floor(Math.random()*1e4);if(arguments.length>0&&arguments[0]instanceof e)i=arguments[0];else{if(!this.settings.$target||!!/body/i.test(this.settings.$target.selector))return!1;i=this.settings.$target}if(i.length<1)return t.console&&console.error("element not valid",i),!1;n=e(this.settings.template.expose),this.settings.$body.append(n),n.css({top:i.offset().top,left:i.offset().left,width:i.outerWidth(!0),height:i.outerHeight(!0)}),r=e(this.settings.template.expose_cover),s={zIndex:i.css("z-index"),position:i.css("position")},o=i.attr("class")==null?"":i.attr("class"),i.css("z-index",parseInt(n.css("z-index"))+1),s.position=="static"&&i.css("position","relative"),i.data("expose-css",s),i.data("orig-class",o),i.attr("class",o+" "+this.settings.expose_add_class),r.css({top:i.offset().top,left:i.offset().left,width:i.outerWidth(!0),height:i.outerHeight(!0)}),this.settings.modal&&this.show_modal(),this.settings.$body.append(r),n.addClass(u),r.addClass(u),i.data("expose",u),this.settings.post_expose_callback(this.settings.$li.index(),this.settings.$next_tip,i),this.add_exposed(i)},un_expose:function(){var n,r,i,s,o,u=!1;if(arguments.length>0&&arguments[0]instanceof e)r=arguments[0];else{if(!this.settings.$target||!!/body/i.test(this.settings.$target.selector))return!1;r=this.settings.$target}if(r.length<1)return t.console&&console.error("element not valid",r),!1;n=r.data("expose"),i=e("."+n),arguments.length>1&&(u=arguments[1]),u===!0?e(".joyride-expose-wrapper,.joyride-expose-cover").remove():i.remove(),s=r.data("expose-css"),s.zIndex=="auto"?r.css("z-index",""):r.css("z-index",s.zIndex),s.position!=r.css("position")&&(s.position=="static"?r.css("position",""):r.css("position",s.position)),o=r.data("orig-class"),r.attr("class",o),r.removeData("orig-classes"),r.removeData("expose"),r.removeData("expose-z-index"),this.remove_exposed(r)},add_exposed:function(t){this.settings.exposed=this.settings.exposed||[],t instanceof e||typeof t=="object"?this.settings.exposed.push(t[0]):typeof t=="string"&&this.settings.exposed.push(t)},remove_exposed:function(t){var n,r;t instanceof e?n=t[0]:typeof t=="string"&&(n=t),this.settings.exposed=this.settings.exposed||[],r=this.settings.exposed.length;for(var i=0;i<r;i++)if(this.settings.exposed[i]==n){this.settings.exposed.splice(i,1);return}},center:function(){var n=e(t);return this.settings.$next_tip.css({top:(n.height()-this.settings.$next_tip.outerHeight())/2+n.scrollTop(),left:(n.width()-this.settings.$next_tip.outerWidth())/2+n.scrollLeft()}),!0},bottom:function(){return/bottom/i.test(this.settings.tip_settings.tip_location)},top:function(){return/top/i.test(this.settings.tip_settings.tip_location)},right:function(){return/right/i.test(this.settings.tip_settings.tip_location)},left:function(){return/left/i.test(this.settings.tip_settings.tip_location)},corners:function(n){var r=e(t),i=r.height()/2,s=Math.ceil(this.settings.$target.offset().top-i+this.settings.$next_tip.outerHeight()),o=r.width()+r.scrollLeft(),u=r.height()+s,a=r.height()+r.scrollTop(),f=r.scrollTop();return s<f&&(s<0?f=0:f=s),u>a&&(a=u),[n.offset().top<f,o<n.offset().left+n.outerWidth(),a<n.offset().top+n.outerHeight(),r.scrollLeft()>n.offset().left]},visible:function(e){var t=e.length;while(t--)if(e[t])return!1;return!0},nub_position:function(e,t,n){t==="auto"?e.addClass(n):e.addClass(t)},startTimer:function(){this.settings.$li.length?this.settings.automate=setTimeout(function(){this.hide(),this.show(),this.startTimer()}.bind(this),this.settings.timer):clearTimeout(this.settings.automate)},end:function(){this.settings.cookie_monster&&e.cookie(this.settings.cookie_name,"ridden",{expires:this.settings.cookie_expires,domain:this.settings.cookie_domain}),this.settings.timer>0&&clearTimeout(this.settings.automate),this.settings.modal&&this.settings.expose&&this.un_expose(),this.settings.$next_tip.data("closed",!0),e(".joyride-modal-bg").hide(),this.settings.$current_tip.hide(),this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip),this.settings.post_ride_callback(this.settings.$li.index(),this.settings.$current_tip),e(".joyride-tip-guide").remove()},off:function(){e(this.scope).off(".joyride"),e(t).off(".joyride"),e(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"),e(".joyride-tip-guide, .joyride-modal-bg").remove(),clearTimeout(this.settings.automate),this.settings={}},reflow:function(){}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";Foundation.libs.dropdown={name:"dropdown",version:"5.0.0",settings:{active_class:"open",is_hover:!1,opened:function(){},closed:function(){}},init:function(e,t,n){Foundation.inherit(this,"throttle"),this.bindings(t,n)},events:function(n){var r=this;e(this.scope).off(".dropdown").on("click.fndtn.dropdown","[data-dropdown]",function(t){var n=e(this).data("dropdown-init");t.preventDefault(),(!n.is_hover||Modernizr.touch)&&r.toggle(e(this))}).on("mouseenter.fndtn.dropdown","[data-dropdown], [data-dropdown-content]",function(t){var n=e(this);clearTimeout(r.timeout);if(n.data("dropdown"))var i=e("#"+n.data("dropdown")),s=n;else{var i=n;s=e("[data-dropdown='"+i.attr("id")+"']")}var o=s.data("dropdown-init");o.is_hover&&r.open.apply(r,[i,s])}).on("mouseleave.fndtn.dropdown","[data-dropdown], [data-dropdown-content]",function(t){var n=e(this);r.timeout=setTimeout(function(){if(n.data("dropdown")){var t=n.data("dropdown-init");t.is_hover&&r.close.call(r,e("#"+n.data("dropdown")))}else{var i=e('[data-dropdown="'+e(this).attr("id")+'"]'),t=i.data("dropdown-init");t.is_hover&&r.close.call(r,n)}}.bind(this),150)}).on("click.fndtn.dropdown",function(t){var n=e(t.target).closest("[data-dropdown-content]");if(e(t.target).data("dropdown")||e(t.target).parent().data("dropdown"))return;if(!e(t.target).data("revealId")&&n.length>0&&(e(t.target).is("[data-dropdown-content]")||e.contains(n.first()[0],t.target))){t.stopPropagation();return}r.close.call(r,e("[data-dropdown-content]"))}).on("opened.fndtn.dropdown","[data-dropdown-content]",this.settings.opened).on("closed.fndtn.dropdown","[data-dropdown-content]",this.settings.closed),e(t).off(".dropdown").on("resize.fndtn.dropdown",r.throttle(function(){r.resize.call(r)},50)).trigger("resize")},close:function(t){var n=this;t.each(function(){e(this).hasClass(n.settings.active_class)&&(e(this).css(Foundation.rtl?"right":"left","-99999px").removeClass(n.settings.active_class),e(this).trigger("closed"))})},open:function(e,t){this.css(e.addClass(this.settings.active_class),t),e.trigger("opened")},toggle:function(t){var n=e("#"+t.data("dropdown"));if(n.length===0)return;this.close.call(this,e("[data-dropdown-content]").not(n)),n.hasClass(this.settings.active_class)?this.close.call(this,n):(this.close.call(this,e("[data-dropdown-content]")),this.open.call(this,n,t))},resize:function(){var t=e("[data-dropdown-content].open"),n=e("[data-dropdown='"+t.attr("id")+"']");t.length&&n.length&&this.css(t,n)},css:function(n,r){var i=n.offsetParent(),s=r.offset();s.top-=i.offset().top,s.left-=i.offset().left;if(this.small())n.css({position:"absolute",width:"95%","max-width":"none",top:s.top+r.outerHeight()}),n.css(Foundation.rtl?"right":"left","2.5%");else{if(!Foundation.rtl&&e(t).width()>n.outerWidth()+r.offset().left){var o=s.left;n.hasClass("right")&&n.removeClass("right")}else{n.hasClass("right")||n.addClass("right");var o=s.left-(n.outerWidth()-r.outerWidth())}n.attr("style","").css({position:"absolute",top:s.top+r.outerHeight(),left:o})}return n},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},off:function(){e(this.scope).off(".fndtn.dropdown"),e("html, body").off(".fndtn.dropdown"),e(t).off(".fndtn.dropdown"),e("[data-dropdown-content]").off(".fndtn.dropdown"),this.settings.init=!1},reflow:function(){}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";Foundation.libs.clearing={name:"clearing",version:"5.0.0",settings:{templates:{viewing:'<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><img src="//:0"><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'},close_selectors:".clearing-close",init:!1,locked:!1},init:function(t,n,r){var i=this;Foundation.inherit(this,"throttle loaded"),this.bindings(n,r),e(this.scope).is("[data-clearing]")?this.assemble(e("li",this.scope)):e("[data-clearing]",this.scope).each(function(){i.assemble(e("li",this))})},events:function(n){var r=this;e(this.scope).off(".clearing").on("click.fndtn.clearing","ul[data-clearing] li",function(t,n,i){var n=n||e(this),i=i||n,s=n.next("li"),o=n.closest("[data-clearing]").data("clearing-init"),u=e(t.target);t.preventDefault(),o||(r.init(),o=n.closest("[data-clearing]").data("clearing-init")),i.hasClass("visible")&&n[0]===i[0]&&s.length>0&&r.is_open(n)&&(i=s,u=e("img",i)),r.open(u,n,i),r.update_paddles(i)}).on("click.fndtn.clearing",".clearing-main-next",function(e){r.nav(e,"next")}).on("click.fndtn.clearing",".clearing-main-prev",function(e){r.nav(e,"prev")}).on("click.fndtn.clearing",this
.settings.close_selectors,function(e){Foundation.libs.clearing.close(e,this)}).on("keydown.fndtn.clearing",function(e){r.keydown(e)}),e(t).off(".clearing").on("resize.fndtn.clearing",function(){r.resize()}),this.swipe_events(n)},swipe_events:function(t){var n=this;e(this.scope).on("touchstart.fndtn.clearing",".visible-img",function(t){t.touches||(t=t.originalEvent);var n={start_page_x:t.touches[0].pageX,start_page_y:t.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:r};e(this).data("swipe-transition",n),t.stopPropagation()}).on("touchmove.fndtn.clearing",".visible-img",function(t){t.touches||(t=t.originalEvent);if(t.touches.length>1||t.scale&&t.scale!==1)return;var r=e(this).data("swipe-transition");typeof r=="undefined"&&(r={}),r.delta_x=t.touches[0].pageX-r.start_page_x,typeof r.is_scrolling=="undefined"&&(r.is_scrolling=!!(r.is_scrolling||Math.abs(r.delta_x)<Math.abs(t.touches[0].pageY-r.start_page_y)));if(!r.is_scrolling&&!r.active){t.preventDefault();var i=r.delta_x<0?"next":"prev";r.active=!0,n.nav(t,i)}}).on("touchend.fndtn.clearing",".visible-img",function(t){e(this).data("swipe-transition",{}),t.stopPropagation()})},assemble:function(t){var n=t.parent();if(n.parent().hasClass("carousel"))return;n.after('<div id="foundationClearingHolder"></div>');var r=e("#foundationClearingHolder"),i=n.data("clearing-init"),s=n.detach(),o={grid:'<div class="carousel">'+s[0].outerHTML+"</div>",viewing:i.templates.viewing},u='<div class="clearing-assembled"><div>'+o.viewing+o.grid+"</div></div>";return r.after(u).remove()},open:function(t,n,r){var i=r.closest(".clearing-assembled"),s=e("div",i).first(),o=e(".visible-img",s),u=e("img",o).not(t);this.locked()||(u.attr("src",this.load(t)).css("visibility","hidden"),this.loaded(u,function(){u.css("visibility","visible"),i.addClass("clearing-blackout"),s.addClass("clearing-container"),o.show(),this.fix_height(r).caption(e(".clearing-caption",o),t).center(u).shift(n,r,function(){r.siblings().removeClass("visible"),r.addClass("visible")})}.bind(this)))},close:function(t,n){t.preventDefault();var r=function(e){return/blackout/.test(e.selector)?e:e.closest(".clearing-blackout")}(e(n)),i,s;return n===t.target&&r&&(i=e("div",r).first(),s=e(".visible-img",i),this.settings.prev_index=0,e("ul[data-clearing]",r).attr("style","").closest(".clearing-blackout").removeClass("clearing-blackout"),i.removeClass("clearing-container"),s.hide()),!1},is_open:function(e){return e.parent().prop("style").length>0},keydown:function(t){var n=e("ul[data-clearing]",".clearing-blackout");t.which===39&&this.go(n,"next"),t.which===37&&this.go(n,"prev"),t.which===27&&e("a.clearing-close").trigger("click")},nav:function(t,n){var r=e("ul[data-clearing]",".clearing-blackout");t.preventDefault(),this.go(r,n)},resize:function(){var t=e("img",".clearing-blackout .visible-img");t.length&&this.center(t)},fix_height:function(t){var n=t.parent().children(),r=this;return n.each(function(){var t=e(this),n=t.find("img");t.height()>n.outerHeight()&&t.addClass("fix-height")}).closest("ul").width(n.length*100+"%"),this},update_paddles:function(t){var n=t.closest(".carousel").siblings(".visible-img");t.next().length>0?e(".clearing-main-next",n).removeClass("disabled"):e(".clearing-main-next",n).addClass("disabled"),t.prev().length>0?e(".clearing-main-prev",n).removeClass("disabled"):e(".clearing-main-prev",n).addClass("disabled")},center:function(e){return this.rtl?e.css({marginRight:-(e.outerWidth()/2),marginTop:-(e.outerHeight()/2)}):e.css({marginLeft:-(e.outerWidth()/2),marginTop:-(e.outerHeight()/2)}),this},load:function(e){if(e[0].nodeName==="A")var t=e.attr("href");else var t=e.parent().attr("href");return this.preload(e),t?t:e.attr("src")},preload:function(e){this.img(e.closest("li").next()).img(e.closest("li").prev())},img:function(t){if(t.length){var n=new Image,r=e("a",t);r.length?n.src=r.attr("href"):n.src=e("img",t).attr("src")}return this},caption:function(e,t){var n=t.data("caption");return n?e.html(n).show():e.text("").hide(),this},go:function(t,n){var r=e(".visible",t),i=r[n]();i.length&&e("img",i).trigger("click",[r,i])},shift:function(e,t,n){var r=t.parent(),i=this.settings.prev_index||t.index(),s=this.direction(r,e,t),o=parseInt(r.css("left"),10),u=t.outerWidth(),a;t.index()!==i&&!/skip/.test(s)?/left/.test(s)?(this.lock(),r.animate({left:o+u},300,this.unlock())):/right/.test(s)&&(this.lock(),r.animate({left:o-u},300,this.unlock())):/skip/.test(s)&&(a=t.index()-this.settings.up_count,this.lock(),a>0?r.animate({left:-(a*u)},300,this.unlock()):r.animate({left:0},300,this.unlock())),n()},direction:function(t,n,r){var i=e("li",t),s=i.outerWidth()+i.outerWidth()/4,o=Math.floor(e(".clearing-container").outerWidth()/s)-1,u=i.index(r),a;return this.settings.up_count=o,this.adjacent(this.settings.prev_index,u)?u>o&&u>this.settings.prev_index?a="right":u>o-1&&u<=this.settings.prev_index?a="left":a=!1:a="skip",this.settings.prev_index=u,a},adjacent:function(e,t){for(var n=t+1;n>=t-1;n--)if(n===e)return!0;return!1},lock:function(){this.settings.locked=!0},unlock:function(){this.settings.locked=!1},locked:function(){return this.settings.locked},off:function(){e(this.scope).off(".fndtn.clearing"),e(t).off(".fndtn.clearing")},reflow:function(){this.init()}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";var i=function(){},s=function(i,s){if(i.hasClass(s.slides_container_class))return this;var f=this,l,c=i,h,p,d,v=0,m,g,y=!1,b=!1;c.children().first().addClass(s.active_slide_class),f.update_slide_number=function(t){s.slide_number&&(h.find("span:first").text(parseInt(t)+1),h.find("span:last").text(c.children().length)),s.bullets&&(p.children().removeClass(s.bullets_active_class),e(p.children().get(t)).addClass(s.bullets_active_class))},f.update_active_link=function(t){var n=e('a[data-orbit-link="'+c.children().eq(t).attr("data-orbit-slide")+'"]');n.parents("ul").find("[data-orbit-link]").removeClass(s.bullets_active_class),n.addClass(s.bullets_active_class)},f.build_markup=function(){c.wrap('<div class="'+s.container_class+'"></div>'),l=c.parent(),c.addClass(s.slides_container_class),s.navigation_arrows&&(l.append(e('<a href="#"><span></span></a>').addClass(s.prev_class)),l.append(e('<a href="#"><span></span></a>').addClass(s.next_class))),s.timer&&(d=e("<div>").addClass(s.timer_container_class),d.append("<span>"),d.append(e("<div>").addClass(s.timer_progress_class)),d.addClass(s.timer_paused_class),l.append(d)),s.slide_number&&(h=e("<div>").addClass(s.slide_number_class),h.append("<span></span> "+s.slide_number_text+" <span></span>"),l.append(h)),s.bullets&&(p=e("<ol>").addClass(s.bullets_container_class),l.append(p),p.wrap('<div class="orbit-bullets-container"></div>'),c.children().each(function(t,n){var r=e("<li>").attr("data-orbit-slide",t);p.append(r)})),s.stack_on_small&&l.addClass(s.stack_on_small_class),f.update_slide_number(0),f.update_active_link(0)},f._goto=function(t,n){if(t===v)return!1;typeof g=="object"&&g.restart();var r=c.children(),i="next";y=!0,t<v&&(i="prev"),t>=r.length?t=0:t<0&&(t=r.length-1);var o=e(r.get(v)),u=e(r.get(t));o.css("zIndex",2),o.removeClass(s.active_slide_class),u.css("zIndex",4).addClass(s.active_slide_class),c.trigger("before-slide-change.fndtn.orbit"),s.before_slide_change(),f.update_active_link(t);var a=function(){var e=function(){v=t,y=!1,n===!0&&(g=f.create_timer(),g.start()),f.update_slide_number(v),c.trigger("after-slide-change.fndtn.orbit",[{slide_number:v,total_slides:r.length}]),s.after_slide_change(v,r.length)};c.height()!=u.height()&&s.variable_height?c.animate({height:u.height()},250,"linear",e):e()};if(r.length===1)return a(),!1;var l=function(){i==="next"&&m.next(o,u,a),i==="prev"&&m.prev(o,u,a)};u.height()>c.height()&&s.variable_height?c.animate({height:u.height()},250,"linear",l):l()},f.next=function(e){e.stopImmediatePropagation(),e.preventDefault(),f._goto(v+1)},f.prev=function(e){e.stopImmediatePropagation(),e.preventDefault(),f._goto(v-1)},f.link_custom=function(t){t.preventDefault();var n=e(this).attr("data-orbit-link");if(typeof n=="string"&&(n=e.trim(n))!=""){var r=l.find("[data-orbit-slide="+n+"]");r.index()!=-1&&f._goto(r.index())}},f.link_bullet=function(t){var n=e(this).attr("data-orbit-slide");typeof n=="string"&&(n=e.trim(n))!=""&&f._goto(parseInt(n))},f.timer_callback=function(){f._goto(v+1,!0)},f.compute_dimensions=function(){var t=e(c.children().get(v)),n=t.height();s.variable_height||c.children().each(function(){e(this).height()>n&&(n=e(this).height())}),c.height(n)},f.create_timer=function(){var e=new o(l.find("."+s.timer_container_class),s,f.timer_callback);return e},f.stop_timer=function(){typeof g=="object"&&g.stop()},f.toggle_timer=function(){var e=l.find("."+s.timer_container_class);e.hasClass(s.timer_paused_class)?(typeof g=="undefined"&&(g=f.create_timer()),g.start()):typeof g=="object"&&g.stop()},f.init=function(){f.build_markup(),s.timer&&(g=f.create_timer(),g.start()),m=new a(s,c),s.animation==="slide"&&(m=new u(s,c)),l.on("click","."+s.next_class,f.next),l.on("click","."+s.prev_class,f.prev),l.on("click","[data-orbit-slide]",f.link_bullet),l.on("click",f.toggle_timer),s.swipe&&l.on("touchstart.fndtn.orbit",function(e){e.touches||(e=e.originalEvent);var t={start_page_x:e.touches[0].pageX,start_page_y:e.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:r};l.data("swipe-transition",t),e.stopPropagation()}).on("touchmove.fndtn.orbit",function(e){e.touches||(e=e.originalEvent);if(e.touches.length>1||e.scale&&e.scale!==1)return;var t=l.data("swipe-transition");typeof t=="undefined"&&(t={}),t.delta_x=e.touches[0].pageX-t.start_page_x,typeof t.is_scrolling=="undefined"&&(t.is_scrolling=!!(t.is_scrolling||Math.abs(t.delta_x)<Math.abs(e.touches[0].pageY-t.start_page_y)));if(!t.is_scrolling&&!t.active){e.preventDefault();var n=t.delta_x<0?v+1:v-1;t.active=!0,f._goto(n)}}).on("touchend.fndtn.orbit",function(e){l.data("swipe-transition",{}),e.stopPropagation()}),l.on("mouseenter.fndtn.orbit",function(e){s.timer&&s.pause_on_hover&&f.stop_timer()}).on("mouseleave.fndtn.orbit",function(e){s.timer&&s.resume_on_mouseout&&g.start()}),e(n).on("click","[data-orbit-link]",f.link_custom),e(t).on("resize",f.compute_dimensions),e(t).on("load",f.compute_dimensions),e(t).on("load",function(){l.prev(".preloader").css("display","none")}),c.trigger("ready.fndtn.orbit")},f.init()},o=function(e,t,n){var r=this,i=t.timer_speed,s=e.find("."+t.timer_progress_class),o,u,a=-1;this.update_progress=function(e){var t=s.clone();t.attr("style",""),t.css("width",e+"%"),s.replaceWith(t),s=t},this.restart=function(){clearTimeout(u),e.addClass(t.timer_paused_class),a=-1,r.update_progress(0)},this.start=function(){if(!e.hasClass(t.timer_paused_class))return!0;a=a===-1?i:a,e.removeClass(t.timer_paused_class),o=(new Date).getTime(),s.animate({width:"100%"},a,"linear"),u=setTimeout(function(){r.restart(),n()},a),e.trigger("timer-started.fndtn.orbit")},this.stop=function(){if(e.hasClass(t.timer_paused_class))return!0;clearTimeout(u),e.addClass(t.timer_paused_class);var n=(new Date).getTime();a-=n-o;var s=100-a/i*100;r.update_progress(s),e.trigger("timer-stopped.fndtn.orbit")}},u=function(t,n){var r=t.animation_speed,i=e("html[dir=rtl]").length===1,s=i?"marginRight":"marginLeft",o={};o[s]="0%",this.next=function(e,t,n){e.animate({marginLeft:"-100%"},r),t.animate(o,r,function(){e.css(s,"100%"),n()})},this.prev=function(e,t,n){e.animate({marginLeft:"100%"},r),t.css(s,"-100%"),t.animate(o,r,function(){e.css(s,"100%"),n()})}},a=function(t,n){var r=t.animation_speed,i=e("html[dir=rtl]").length===1,s=i?"marginRight":"marginLeft";this.next=function(e,t,n){t.css({margin:"0%",opacity:"0.01"}),t.animate({opacity:"1"},r,"linear",function(){e.css("margin","100%"),n()})},this.prev=function(e,t,n){t.css({margin:"0%",opacity:"0.01"}),t.animate({opacity:"1"},r,"linear",function(){e.css("margin","100%"),n()})}};Foundation.libs=Foundation.libs||{},Foundation.libs.orbit={name:"orbit",version:"5.0.0",settings:{animation:"slide",timer_speed:1e4,pause_on_hover:!0,resume_on_mouseout:!1,animation_speed:500,stack_on_small:!1,navigation_arrows:!0,slide_number:!0,slide_number_text:"of",container_class:"orbit-container",stack_on_small_class:"orbit-stack-on-small",next_class:"orbit-next",prev_class:"orbit-prev",timer_container_class:"orbit-timer",timer_paused_class:"paused",timer_progress_class:"orbit-progress",slides_container_class:"orbit-slides-container",bullets_container_class:"orbit-bullets",bullets_active_class:"active",slide_number_class:"orbit-slide-number",caption_class:"orbit-caption",active_slide_class:"active",orbit_transition_class:"orbit-transitioning",bullets:!0,timer:!0,variable_height:!1,swipe:!0,before_slide_change:i,after_slide_change:i},init:function(t,n,r){var i=this;typeof n=="object"&&e.extend(!0,i.settings,n);if(e(t).is("[data-orbit]")){var o=e(t),u=i.data_options(o);new s(o,e.extend({},i.settings,u))}e("[data-orbit]",t).each(function(t,n){var r=e(n),o=i.data_options(r);new s(r,e.extend({},i.settings,o))})}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";Foundation.libs.offcanvas={name:"offcanvas",version:"5.0.0",settings:{},init:function(e,t,n){this.events()},events:function(){e(this.scope).off(".offcanvas").on("click.fndtn.offcanvas",".left-off-canvas-toggle",function(t){t.preventDefault(),e(this).closest(".off-canvas-wrap").toggleClass("move-right")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(t){t.preventDefault(),e(".off-canvas-wrap").removeClass("move-right")}).on("click.fndtn.offcanvas",".right-off-canvas-toggle",function(t){t.preventDefault(),e(this).closest(".off-canvas-wrap").toggleClass("move-left")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(t){t.preventDefault(),e(".off-canvas-wrap").removeClass("move-left")})},reflow:function(){}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";Foundation.libs.alert={name:"alert",version:"5.0.0",settings:{animation:"fadeOut",speed:300,callback:function(){}},init:function(e,t,n){this.bindings(t,n)},events:function(){e(this.scope).off(".alert").on("click.fndtn.alert","[data-alert] a.close",function(t){var n=e(this).closest("[data-alert]"),r=n.data("alert-init");t.preventDefault(),n[r.animation](r.speed,function(){e(this).trigger("closed").remove(),r.callback()})})},reflow:function(){}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";Foundation.libs.reveal={name:"reveal",version:"5.0.0",locked:!1,settings:{animation:"fadeAndPop",animation_speed:250,close_on_background_click:!0,close_on_esc:!0,dismiss_modal_class:"close-reveal-modal",bg_class:"reveal-modal-bg",open:function(){},opened:function(){},close:function(){},closed:function(){},bg:e(".reveal-modal-bg"),css:{open:{opacity:0,visibility:"visible",display:"block"},close:{opacity:1,visibility:"hidden",display:"none"}}},init:function(e,t,n){Foundation.inherit(this,"delay"),this.bindings(t,n)},events:function(t){var n=this;return e("[data-reveal-id]",this.scope).off(".reveal").on("click.fndtn.reveal",function(t){t.preventDefault();if(!n.locked){var r=e(this),i=r.data("reveal-ajax");n.locked=!0;if(typeof i=="undefined")n.open.call(n,r);else{var s=i===!0?r.attr("href"):i;n.open.call(n,r,{url:s})}}}),e(this.scope).off(".reveal").on("click.fndtn.reveal",this.close_targets(),function(t){t.preventDefault();if(!n.locked){var r=e("[data-reveal].open").data("reveal-init"),i=e(t.target)[0]===e("."+r.bg_class)[0];if(i&&!r.close_on_background_click)return;n.locked=!0,n.close.call(n,i?e("[data-reveal].open"):e(this).closest("[data-reveal]"))}}),e("[data-reveal]",this.scope).length>0?e(this.scope).on("open.fndtn.reveal",this.settings.open).on("opened.fndtn.reveal",this.settings.opened).on("opened.fndtn.reveal",this.open_video).on("close.fndtn.reveal",this.settings.close).on("closed.fndtn.reveal",this.settings.closed).on("closed.fndtn.reveal",this.close_video):e(this.scope).on("open.fndtn.reveal","[data-reveal]",this.settings.open).on("opened.fndtn.reveal","[data-reveal]",this.settings.opened).on("opened.fndtn.reveal","[data-reveal]",this.open_video).on("close.fndtn.reveal","[data-reveal]",this.settings.close).on("closed.fndtn.reveal","[data-reveal]",this.settings.closed).on("closed.fndtn.reveal","[data-reveal]",this.close_video),e("body").on("keyup.fndtn.reveal",function(t){var n=e("[data-reveal].open"),r=n.data("reveal-init");t.which===27&&r.close_on_esc&&n.foundation("reveal","close")}),!0},open:function(t,n){if(t)if(typeof t.selector!="undefined")var r=e("#"+t.data("reveal-id"));else{var r=e(this.scope);n=t}else var r=e(this.scope);if(!r.hasClass("open")){var i=e("[data-reveal].open");typeof r.data("css-top")=="undefined"&&r.data("css-top",parseInt(r.css("top"),10)).data("offset",this.cache_offset(r)),r.trigger("open"),i.length<1&&this.toggle_bg();if(typeof n=="undefined"||!n.url)this.hide(i,this.settings.css.close),this.show(r,this.settings.css.open);else{var s=this,o=typeof n.success!="undefined"?n.success:null;e.extend(n,{success:function(t,n,u){e.isFunction(o)&&o(t,n,u),r.html(t),e(r).foundation("section","reflow"),s.hide(i,s.settings.css.close),s.show(r,s.settings.css.open)}}),e.ajax(n)}}},close:function(t){var t=t&&t.length?t:e(this.scope),n=e("[data-reveal].open");n.length>0&&(this.locked=!0,t.trigger("close"),this.toggle_bg(),this.hide(n,this.settings.css.close))},close_targets:function(){var e="."+this.settings.dismiss_modal_class;return this.settings.close_on_background_click?e+", ."+this.settings.bg_class:e},toggle_bg:function(){e("."+this.settings.bg_class).length===0&&(this.settings.bg=e("<div />",{"class":this.settings.bg_class}).appendTo("body")),this.settings.bg.filter(":visible").length>0?this.hide(this.settings.bg):this.show(this.settings.bg)},show:function(n,r){if(r){if(n.parent("body").length===0){var i=n.wrap('<div style="display: none;" />').parent();n.on("closed.fndtn.reveal.wrapped",function(){n.detach().appendTo(i),n.unwrap().unbind("closed.fndtn.reveal.wrapped")}),n.detach().appendTo("body")}if(/pop/i.test(this.settings.animation)){r.top=e(t).scrollTop()-n.data("offset")+"px";var s={top:e(t).scrollTop()+n.data("css-top")+"px",opacity:1};return this.delay(function(){return n.css(r).animate(s,this.settings.animation_speed,"linear",function(){this.locked=!1,n.trigger("opened")}.bind(this)).addClass("open")}.bind(this),this.settings.animation_speed/2)}if(/fade/i.test(this.settings.animation)){var s={opacity:1};return this.delay(function(){return n.css(r).animate(s,this.settings.animation_speed,"linear",function(){this.locked=!1,n.trigger("opened")}.bind(this)).addClass("open")}.bind(this),this.settings.animation_speed/2)}return n.css(r).show().css({opacity:1}).addClass("open").trigger("opened")}return/fade/i.test(this.settings.animation)?n.fadeIn(this.settings.animation_speed/2):n.show()},hide:function(n,r){if(r){if(/pop/i.test(this.settings.animation)){var i={top:-e(t).scrollTop()-n.data("offset")+"px",opacity:0};return this.delay(function(){return n.animate(i,this.settings.animation_speed,"linear",function(){this.locked=!1,n.css(r).trigger("closed")}.bind(this)).removeClass("open")}.bind(this),this.settings.animation_speed/2)}if(/fade/i.test(this.settings.animation)){var i={opacity:0};return this.delay(function(){return n.animate(i,this.settings.animation_speed,"linear",function(){this.locked=!1,n.css(r).trigger("closed")}.bind(this)).removeClass("open")}.bind(this),this.settings.animation_speed/2)}return n.hide().css(r).removeClass("open").trigger("closed")}return/fade/i.test(this.settings.animation)?n.fadeOut(this.settings.animation_speed/2):n.hide()},close_video:function(t){var n=e(this).find(".flex-video"),r=n.find("iframe");r.length>0&&(r.attr("data-src",r[0].src),r.attr("src","about:blank"),n.hide())},open_video:function(t){var n=e(this).find(".flex-video"),i=n.find("iframe");if(i.length>0){var s=i.attr("data-src");if(typeof s=="string")i[0].src=i.attr("data-src");else{var o=i[0].src;i[0].src=r,i[0].src=o}n.show()}},cache_offset:function(e){var t=e.show().height()+parseInt(e.css("top"),10);return e.hide(),t},off:function(){e(this.scope).off(".fndtn.reveal")},reflow:function(){}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";Foundation.libs.interchange={name:"interchange",version:"5.0.0",cache:{},images_loaded:!1,nodes_loaded:!1,settings:{load_attr:"interchange",named_queries:{"default":Foundation.media_queries.small,small:Foundation.media_queries.small,medium:Foundation.media_queries.medium,large:Foundation.media_queries.large,xlarge:Foundation.media_queries.xlarge,xxlarge:Foundation.media_queries.xxlarge,landscape:"only screen and (orientation: landscape)",portrait:"only screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"},directives:{replace:function(t,n,r){if(/IMG/.test(t[0].nodeName)){var i=t[0].src;if((new RegExp(n,"i")).test(i))return;return t[0].src=n,r(t[0].src)}var s=t.data("interchange-last-path");if(s==n)return;return e.get(n,function(e){t.html(e),t.data("interchange-last-path",n),r()})}}},init:function(e,t,n){Foundation.inherit(this,"throttle"),this.data_attr="data-"+this.settings.load_attr,this.bindings(t,n),this.load("images"),this.load("nodes")},events:function(){var n=this;return e(t).off(".interchange").on("resize.fndtn.interchange",n.throttle(function(){n.resize.call(n)},50)),this},resize:function(){var t=this.cache;if(!this.images_loaded||!this.nodes_loaded){setTimeout(e.proxy(this.resize,this),50);return}for(var n in t)if(t.hasOwnProperty(n)){var r=this.results(n,t[n]);r&&this.settings.directives[r.scenario[1]](r.el,r.scenario[0],function(){if(arguments[0]instanceof Array)var e=arguments[0];else var e=Array.prototype.slice.call(arguments,0);r.el.trigger(r.scenario[1],e)})}},results:function(e,t){var n=t.length;if(n>0){var r=this.S('[data-uuid="'+e+'"]');for(var i=n-1;i>=0;i--){var s,o=t[i][2];this.settings.named_queries.hasOwnProperty(o)?s=matchMedia(this.settings.named_queries[o]):s=matchMedia(o);if(s.matches)return{el:r,scenario:t[i]}}}return!1},load:function(e,t){return(typeof this["cached_"+e]=="undefined"||t)&&this["update_"+e](),this["cached_"+e]},update_images:function(){var e=this.S("img["+this.data_attr+"]"),t=e.length,n=0,r=this.data_attr;this.cache={},this.cached_images=[],this.images_loaded=t===0;for(var i=t-1;i>=0;i--){n++;if(e[i]){var s=e[i].getAttribute(r)||"";s.length>0&&this.cached_images.push(e[i])}n===t&&(this.images_loaded=!0,this.enhance("images"))}return this},update_nodes:function(){var e=this.S("["+this.data_attr+"]:not(img)"),t=e.length,n=0,r=this.data_attr;this.cached_nodes=[],this.nodes_loaded=t===0;for(var i=t-1;i>=0;i--){n++;var s=e[i].getAttribute(r)||"";s.length>0&&this.cached_nodes.push(e[i]),n===t&&(this.nodes_loaded=!0,this.enhance("nodes"))}return this},enhance:function(n){var r=this["cached_"+n].length;for(var i=r-1;i>=0;i--)this.object(e(this["cached_"+n][i]));return e(t).trigger("resize")},parse_params:function(e,t,n){return[this.trim(e),this.convert_directive(t),this.trim(n)]},convert_directive:function(e){var t=this.trim(e);return t.length>0?t:"replace"},object:function(e){var t=this.parse_data_attr(e),n=[],r=t.length;if(r>0)for(var i=r-1;i>=0;i--){var s=t[i].split(/\((.*?)(\))$/);if(s.length>1){var o=s[0].split(","),u=this.parse_params(o[0],o[1],s[1]);n.push(u)}}return this.store(e,n)},uuid:function(e){function n(){return((1+Math.random())*65536|0).toString(16).substring(1)}var t=e||"-";return n()+n()+t+n()+t+n()+t+n()+t+n()+n()+n()},store:function(e,t){var n=this.uuid(),r=e.data("uuid");return r?this.cache[r]:(e.attr("data-uuid",n),this.cache[n]=t)},trim:function(t){return typeof t=="string"?e.trim(t):t},parse_data_attr:function(e){var t=e.data(this.settings.load_attr).split(/\[(.*?)\]/),n=t.length,r=[];for(var i=n-1;i>=0;i--)t[i].replace(/[\W\d]+/,"").length>4&&r.push(t[i]);return r},reflow:function(){this.load("images",!0),this.load("nodes",!0)}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";Foundation.libs.magellan={name:"magellan",version:"5.0.0",settings:{active_class:"active",threshold:0},init:function(t,n,r){this.fixed_magellan=e("[data-magellan-expedition]"),this.set_threshold(),this.last_destination=e("[data-magellan-destination]").last(),this.events()},events:function(){var n=this;e(this.scope).off(".magellan").on("arrival.fndtn.magellan","[data-magellan-arrival]",function(t){var r=e(this),i=r.closest("[data-magellan-expedition]"),s=i.attr("data-magellan-active-class")||n.settings.active_class;r.closest("[data-magellan-expedition]").find("[data-magellan-arrival]").not(r).removeClass(s),r.addClass(s)}),this.fixed_magellan.off(".magellan").on("update-position.fndtn.magellan",function(){var t=e(this)}).trigger("update-position"),e(t).off(".magellan").on("resize.fndtn.magellan",function(){this.fixed_magellan.trigger("update-position")}.bind(this)).on("scroll.fndtn.magellan",function(){var r=e(t).scrollTop();n.fixed_magellan.each(function(){var t=e(this);typeof t.data("magellan-top-offset")=="undefined"&&t.data("magellan-top-offset",t.offset().top),typeof t.data("magellan-fixed-position")=="undefined"&&t.data("magellan-fixed-position",!1);var i=r+n.settings.threshold>t.data("magellan-top-offset"),s=t.attr("data-magellan-top-offset");t.data("magellan-fixed-position")!=i&&(t.data("magellan-fixed-position",i),i?(t.addClass("fixed"),t.css({position:"fixed",top:0})):(t.removeClass("fixed"),t.css({position:"",top:""})),i&&typeof s!="undefined"&&s!=0&&t.css({position:"fixed",top:s+"px"}))})}),this.last_destination.length>0&&e(t).on("scroll.fndtn.magellan",function(r){var i=e(t).scrollTop(),s=i+e(t).height(),o=Math.ceil(n.last_destination.offset().top);e("[data-magellan-destination]").each(function(){var t=e(this),r=t.attr("data-magellan-destination"),u=t.offset().top-t.outerHeight(!0)-i;u<=n.settings.threshold&&e("[data-magellan-arrival='"+r+"']").trigger("arrival"),s>=e(n.scope).height()&&o>i&&o<s&&e("[data-magellan-arrival]").last().trigger("arrival")})})},set_threshold:function(){typeof this.settings.threshold!="number"&&(this.settings.threshold=this.fixed_magellan.length>0?this.fixed_magellan.outerHeight(!0):0)},off:function(){e(this.scope).off(".fndtn.magellan"),e(t).off(".fndtn.magellan")},reflow:function(){}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";Foundation.libs.accordion={name:"accordion",version:"5.0.1",settings:{active_class:"active",toggleable:!0},init:function(e,t,n){this.bindings(t,n)},events:function(){e(this.scope).off(".accordion").on("click.fndtn.accordion","[data-accordion] > dd > a",function(t){var n=e(this).parent(),r=e("#"+this.href.split("#")[1]),i=e("> dd > .content",r.closest("[data-accordion]")),s=n.parent().data("accordion-init"),o=e("> dd > .content."+s.active_class,n.parent());t.preventDefault();if(o[0]==r[0]&&s.toggleable)return r.toggleClass(s.active_class);i.removeClass(s.active_class),r.addClass(s.active_class)})},off:function(){},reflow:function(){}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";Foundation.libs.topbar={name:"topbar",version:"5.0.1",settings:{index:0,sticky_class:"sticky",custom_back_text:!0,back_text:"Back",is_hover:!0,mobile_show_parent_link:!1,scrolltop:!0},init:function(t,n,r){Foundation.inherit(this,"addCustomRule register_media throttle");var i=this;i.register_media("topbar","foundation-mq-topbar"),this.bindings(n,r),e("[data-topbar]",this.scope).each(function(){var t=e(this),n=t.data("topbar-init"),r=e("section",this),s=e("> ul",this).first();t.data("index",0);var o=t.parent();o.hasClass("fixed")||o.hasClass(n.sticky_class)?(i.settings.sticky_class=n.sticky_class,i.settings.sticky_topbar=t,t.data("height",o.outerHeight()),t.data("stickyoffset",o.offset().top)):t.data("height",t.outerHeight()),n.assembled||i.assemble(t),n.is_hover?e(".has-dropdown",t).addClass("not-click"):e(".has-dropdown",t).removeClass("not-click"),i.addCustomRule(".f-topbar-fixed { padding-top: "+t.data("height")+"px }"),o.hasClass("fixed")&&e("body").addClass("f-topbar-fixed")})},toggle:function(n){var r=this;if(n)var i=e(n).closest("[data-topbar]");else var i=e("[data-topbar]");var s=i.data("topbar-init"),o=e("section, .section",i);r.breakpoint()&&(r.rtl?(o.css({right:"0%"}),e(">.name",o).css({right:"100%"})):(o.css({left:"0%"}),e(">.name",o).css({left:"100%"})),e("li.moved",o).removeClass("moved"),i.data("index",0),i.toggleClass("expanded").css("height","")),s.scrolltop?i.hasClass("expanded")?i.parent().hasClass("fixed")&&(s.scrolltop?(i.parent().removeClass("fixed"),i.addClass("fixed"),e("body").removeClass("f-topbar-fixed"),t.scrollTo(0,0)):i.parent().removeClass("expanded")):i.hasClass("fixed")&&(i.parent().addClass("fixed"),i.removeClass("fixed"),e("body").addClass("f-topbar-fixed")):(i.parent().hasClass(r.settings.sticky_class)&&i.parent().addClass("fixed"),i.parent().hasClass("fixed")&&(i.hasClass("expanded")?(i.addClass("fixed"),i.parent().addClass("expanded")):(i.removeClass("fixed"),i.parent().removeClass("expanded"),r.update_sticky_positioning())))},timer:null,events:function(n){var r=this;e(this.scope).off(".topbar").on("click.fndtn.topbar","[data-topbar] .toggle-topbar",function(e){e.preventDefault(),r.toggle(this)}).on("click.fndtn.topbar","[data-topbar] li.has-dropdown",function(t){var n=e(this),i=e(t.target),s=n.closest("[data-topbar]"),o=s.data("topbar-init");if(i.data("revealId")){r.toggle();return}if(r.breakpoint())return;if(o.is_hover&&!Modernizr.touch)return;t.stopImmediatePropagation(),n.hasClass("hover")?(n.removeClass("hover").find("li").removeClass("hover"),n.parents("li.hover").removeClass("hover")):(n.addClass("hover"),i[0].nodeName==="A"&&i.parent().hasClass("has-dropdown")&&t.preventDefault())}).on("click.fndtn.topbar","[data-topbar] .has-dropdown>a",function(t){if(r.breakpoint()){t.preventDefault();var n=e(this),i=n.closest("[data-topbar]"),s=i.find("section, .section"),o=n.next(".dropdown").outerHeight(),u=n.closest("li");i.data("index",i.data("index")+1),u.addClass("moved"),r.rtl?(s.css({right:-(100*i.data("index"))+"%"}),s.find(">.name").css({right:100*i.data("index")+"%"})):(s.css({left:-(100*i.data("index"))+"%"}),s.find(">.name").css({left:100*i.data("index")+"%"})),i.css("height",n.siblings("ul").outerHeight(!0)+i.data("height"))}}),e(t).off(".topbar").on("resize.fndtn.topbar",r.throttle(function(){r.resize.call(r)},50)).trigger("resize"),e("body").off(".topbar").on("click.fndtn.topbar touchstart.fndtn.topbar",function(t){var n=e(t.target).closest("li").closest("li.hover");if(n.length>0)return;e("[data-topbar] li").removeClass("hover")}),e(this.scope).on("click.fndtn.topbar","[data-topbar] .has-dropdown .back",function(t){t.preventDefault();var n=e(this),i=n.closest("[data-topbar]"),s=i.find("section, .section"),o=i.data("topbar-init"),u=n.closest("li.moved"),a=u.parent();i.data("index",i.data("index")-1),r.rtl?(s.css({right:-(100*i.data("index"))+"%"}),s.find(">.name").css({right:100*i.data("index")+"%"})):(s.css({left:-(100*i.data("index"))+"%"}),s.find(">.name").css({left:100*i.data("index")+"%"})),i.data("index")===0?i.css("height",""):i.css("height",a.outerHeight(!0)+i.data("height")),setTimeout(function(){u.removeClass("moved")},300)})},resize:function(){var t=this;e("[data-topbar]").each(function(){var r=e(this),i=r.data("topbar-init"),s=r.parent("."+t.settings.sticky_class),o;if(!t.breakpoint()){var u=r.hasClass("expanded");r.css("height","").removeClass("expanded").find("li").removeClass("hover"),u&&t.toggle(r)}s.length>0&&(s.hasClass("fixed")?(s.removeClass("fixed"),o=s.offset().top,e(n.body).hasClass("f-topbar-fixed")&&(o-=r.data("height")),r.data("stickyoffset",o),s.addClass("fixed")):(o=s.offset().top,r.data("stickyoffset",o)))})},breakpoint:function(){return!matchMedia(Foundation.media_queries.topbar).matches},assemble:function(t){var n=this,r=t.data("topbar-init"),i=e("section",t),s=e("> ul",t).first();i.detach(),e(".has-dropdown>a",i).each(function(){var t=e(this),n=t.siblings(".dropdown"),i=t.attr("href");if(r.mobile_show_parent_link&&i&&i.length>1)var s=e('<li class="title back js-generated"><h5><a href="#"></a></h5></li><li><a class="parent-link js-generated" href="'+i+'">'+t.text()+"</a></li>");else var s=e('<li class="title back js-generated"><h5><a href="#"></a></h5></li>');r.custom_back_text==1?e("h5>a",s).html(r.back_text):e("h5>a",s).html("&laquo; "+t.html()),n.prepend(s)}),i.appendTo(t),this.sticky(),this.assembled(t)},assembled:function(t){t.data("topbar-init",e.extend({},t.data("topbar-init"),{assembled:!0}))},height:function(t){var n=0,r=this;return e("> li",t).each(function(){n+=e(this).outerHeight(!0)}),n},sticky:function(
){var n=e(t),r=this;e(t).on("scroll",function(){r.update_sticky_positioning()})},update_sticky_positioning:function(){var n="."+this.settings.sticky_class,r=e(t);if(e(n).length>0){var i=this.settings.sticky_topbar.data("stickyoffset");e(n).hasClass("expanded")||(r.scrollTop()>i?e(n).hasClass("fixed")||(e(n).addClass("fixed"),e("body").addClass("f-topbar-fixed")):r.scrollTop()<=i&&e(n).hasClass("fixed")&&(e(n).removeClass("fixed"),e("body").removeClass("f-topbar-fixed")))}},off:function(){e(this.scope).off(".fndtn.topbar"),e(t).off(".fndtn.topbar")},reflow:function(){}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";Foundation.libs.tab={name:"tab",version:"5.0.1",settings:{active_class:"active"},init:function(e,t,n){this.bindings(t,n)},events:function(){e(this.scope).off(".tab").on("click.fndtn.tab","[data-tab] > dd > a",function(t){t.preventDefault();var n=e(this).parent(),r=e("#"+this.href.split("#")[1]),i=n.siblings(),s=n.closest("[data-tab]").data("tab-init");n.addClass(s.active_class),i.removeClass(s.active_class),r.siblings().removeClass(s.active_class).end().addClass(s.active_class)})},off:function(){},reflow:function(){}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";Foundation.libs.abide={name:"abide",version:"5.0.0",settings:{focus_on_invalid:!0,timeout:1e3,patterns:{alpha:/[a-zA-Z]+/,alpha_numeric:/[a-zA-Z0-9]+/,integer:/-?\d+/,number:/-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?/,password:/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,url:/(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?/,domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,datetime:/([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))/,date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))/,time:/(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}/,dateISO:/\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/,month_day_year:/(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/,color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/}},timer:null,init:function(e,t,n){this.bindings(t,n)},events:function(t){var n=this,r=e(t).attr("novalidate","novalidate"),i=r.data("abide-init");r.off(".abide").on("submit.fndtn.abide validate.fndtn.abide",function(t){var r=/ajax/i.test(e(this).attr("data-abide"));return n.validate(e(this).find("input, textarea, select").get(),t,r)}).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide",function(e){n.validate([this],e)}).on("keydown.fndtn.abide",function(t){var r=e(this).closest("form").data("abide-init");clearTimeout(n.timer),n.timer=setTimeout(function(){n.validate([this],t)}.bind(this),r.timeout)})},validate:function(t,n,r){var i=this.parse_patterns(t),s=i.length,o=e(t[0]).closest("form"),u=/submit/.test(n.type);for(var a=0;a<s;a++)if(!i[a]&&(u||r))return this.settings.focus_on_invalid&&t[a].focus(),o.trigger("invalid"),e(t[a]).closest("form").attr("data-invalid",""),!1;return(u||r)&&o.trigger("valid"),o.removeAttr("data-invalid"),r?!1:!0},parse_patterns:function(e){var t=e.length,n=[];for(var r=t-1;r>=0;r--)n.push(this.pattern(e[r]));return this.check_validation_and_apply_styles(n)},pattern:function(e){var t=e.getAttribute("type"),n=typeof e.getAttribute("required")=="string";if(this.settings.patterns.hasOwnProperty(t))return[e,this.settings.patterns[t],n];var r=e.getAttribute("pattern")||"";return this.settings.patterns.hasOwnProperty(r)&&r.length>0?[e,this.settings.patterns[r],n]:r.length>0?[e,new RegExp(r),n]:(r=/.*/,[e,r,n])},check_validation_and_apply_styles:function(t){var n=t.length,r=[];for(var i=n-1;i>=0;i--){var s=t[i][0],o=t[i][2],u=s.value,a=s.getAttribute("data-equalto"),f=s.type==="radio",l=o?s.value.length>0:!0;f&&o?r.push(this.valid_radio(s,o)):a&&o?r.push(this.valid_equal(s,o)):t[i][1].test(u)&&l||!o&&s.value.length<1?(e(s).removeAttr("data-invalid").parent().removeClass("error"),r.push(!0)):(e(s).attr("data-invalid","").parent().addClass("error"),r.push(!1))}return r},valid_radio:function(t,r){var i=t.getAttribute("name"),s=n.getElementsByName(i),o=s.length,u=!1;for(var a=0;a<o;a++)s[a].checked&&(u=!0);for(var a=0;a<o;a++)u?e(s[a]).removeAttr("data-invalid").parent().removeClass("error"):e(s[a]).attr("data-invalid","").parent().addClass("error");return u},valid_equal:function(t,r){var i=n.getElementById(t.getAttribute("data-equalto")).value,s=t.value,o=i===s;return o?e(t).removeAttr("data-invalid").parent().removeClass("error"):e(t).attr("data-invalid","").parent().addClass("error"),o}}}(jQuery,this,this.document),function(e,t,n,r){"use strict";Foundation.libs.tooltip={name:"tooltip",version:"5.0.0",settings:{additional_inheritable_classes:[],tooltip_class:".tooltip",append_to:"body",touch_close_text:"Tap To Close",disable_for_touch:!1,tip_template:function(e,t){return'<span data-selector="'+e+'" class="'+Foundation.libs.tooltip.settings.tooltip_class.substring(1)+'">'+t+'<span class="nub"></span></span>'}},cache:{},init:function(e,t,n){this.bindings(t,n)},events:function(){var t=this;Modernizr.touch?e(this.scope).off(".tooltip").on("click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip","[data-tooltip]",function(n){var r=e.extend({},t.settings,t.data_options(e(this)));r.disable_for_touch||(n.preventDefault(),e(r.tooltip_class).hide(),t.showOrCreateTip(e(this)))}).on("click.fndtn.tooltip touchstart.fndtn.tooltip touchend.fndtn.tooltip",this.settings.tooltip_class,function(t){t.preventDefault(),e(this).fadeOut(150)}):e(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip","[data-tooltip]",function(n){var r=e(this);/enter|over/i.test(n.type)?t.showOrCreateTip(r):(n.type==="mouseout"||n.type==="mouseleave")&&t.hide(r)})},showOrCreateTip:function(e){var t=this.getTip(e);return t&&t.length>0?this.show(e):this.create(e)},getTip:function(t){var n=this.selector(t),r=null;return n&&(r=e('span[data-selector="'+n+'"]'+this.settings.tooltip_class)),typeof r=="object"?r:!1},selector:function(e){var t=e.attr("id"),n=e.attr("data-tooltip")||e.attr("data-selector");return(t&&t.length<1||!t)&&typeof n!="string"&&(n="tooltip"+Math.random().toString(36).substring(7),e.attr("data-selector",n)),t&&t.length>0?t:n},create:function(t){var n=e(this.settings.tip_template(this.selector(t),e("<div></div>").html(t.attr("title")).html())),r=this.inheritable_classes(t);n.addClass(r).appendTo(this.settings.append_to),Modernizr.touch&&n.append('<span class="tap-to-close">'+this.settings.touch_close_text+"</span>"),t.removeAttr("title").attr("title",""),this.show(t)},reposition:function(t,n,r){var i,s,o,u,a,f;n.css("visibility","hidden").show(),i=t.data("width"),s=n.children(".nub"),o=s.outerHeight(),u=s.outerHeight(),f=function(e,t,n,r,i,s){return e.css({top:t?t:"auto",bottom:r?r:"auto",left:i?i:"auto",right:n?n:"auto",width:s?s:"auto"}).end()},f(n,t.offset().top+t.outerHeight()+10,"auto","auto",t.offset().left,i);if(this.small())f(n,t.offset().top+t.outerHeight()+10,"auto","auto",12.5,e(this.scope).width()),n.addClass("tip-override"),f(s,-o,"auto","auto",t.offset().left);else{var l=t.offset().left;Foundation.rtl&&(l=t.offset().left+t.offset().width-n.outerWidth()),f(n,t.offset().top+t.outerHeight()+10,"auto","auto",l,i),n.removeClass("tip-override"),r&&r.indexOf("tip-top")>-1?f(n,t.offset().top-n.outerHeight(),"auto","auto",l,i).removeClass("tip-override"):r&&r.indexOf("tip-left")>-1?f(n,t.offset().top+t.outerHeight()/2-o*2.5,"auto","auto",t.offset().left-n.outerWidth()-o,i).removeClass("tip-override"):r&&r.indexOf("tip-right")>-1&&f(n,t.offset().top+t.outerHeight()/2-o*2.5,"auto","auto",t.offset().left+t.outerWidth()+o,i).removeClass("tip-override")}n.css("visibility","visible").hide()},small:function(){return matchMedia(Foundation.media_queries.small).matches},inheritable_classes:function(t){var n=["tip-top","tip-left","tip-bottom","tip-right","noradius"].concat(this.settings.additional_inheritable_classes),r=t.attr("class"),i=r?e.map(r.split(" "),function(t,r){if(e.inArray(t,n)!==-1)return t}).join(" "):"";return e.trim(i)},show:function(e){var t=this.getTip(e);this.reposition(e,t,e.attr("class")),t.fadeIn(150)},hide:function(e){var t=this.getTip(e);t.fadeOut(150)},reload:function(){var t=e(this);return t.data("fndtn-tooltips")?t.foundationTooltips("destroy").foundationTooltips("init"):t.foundationTooltips("init")},off:function(){e(this.scope).off(".fndtn.tooltip"),e(this.settings.tooltip_class).each(function(t){e("[data-tooltip]").get(t).attr("title",e(this).text())}).remove()},reflow:function(){}}}(jQuery,this,this.document);
/*
 * Inline Form Validation Engine 2.6.2, jQuery plugin
 *
 * Copyright(c) 2010, Cedric Dugas
 * http://www.position-absolute.com
 *
 * 2.0 Rewrite by Olivier Refalo
 * http://www.crionics.com
 *
 * Form validation engine allowing custom regex rules to be added.
 * Licensed under the MIT License
 */
 (function($) {

	"use strict";

	var methods = {

		/**
		* Kind of the constructor, called before any action
		* @param {Map} user options
		*/
		init: function(options) {
			var form = this;
			if (!form.data('jqv') || form.data('jqv') == null ) {
				options = methods._saveOptions(form, options);
				// bind all formError elements to close on click
				$(document).on("click", ".formError", function() {
					$(this).fadeOut(150, function() {
						// remove prompt once invisible
						$(this).parent('.formErrorOuter').remove();
						$(this).remove();
					});
				});
			}
			return this;
		 },
		/**
		* Attachs jQuery.validationEngine to form.submit and field.blur events
		* Takes an optional params: a list of options
		* ie. jQuery("#formID1").validationEngine('attach', {promptPosition : "centerRight"});
		*/
		attach: function(userOptions) {

			var form = this;
			var options;

			if(userOptions)
				options = methods._saveOptions(form, userOptions);
			else
				options = form.data('jqv');

			options.validateAttribute = (form.find("[data-validation-engine*=validate]").length) ? "data-validation-engine" : "class";
			if (options.binded) {

				// delegate fields
				form.on(options.validationEventTrigger, "["+options.validateAttribute+"*=validate]:not([type=checkbox]):not([type=radio]):not(.datepicker)", methods._onFieldEvent);
				form.on("click", "["+options.validateAttribute+"*=validate][type=checkbox],["+options.validateAttribute+"*=validate][type=radio]", methods._onFieldEvent);
				form.on(options.validationEventTrigger,"["+options.validateAttribute+"*=validate][class*=datepicker]", {"delay": 300}, methods._onFieldEvent);
			}
			if (options.autoPositionUpdate) {
				$(window).bind("resize", {
					"noAnimation": true,
					"formElem": form
				}, methods.updatePromptsPosition);
			}
			form.on("click","a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", methods._submitButtonClick);
			form.removeData('jqv_submitButton');

			// bind form.submit
			form.on("submit", methods._onSubmitEvent);
			return this;
		},
		/**
		* Unregisters any bindings that may point to jQuery.validaitonEngine
		*/
		detach: function() {

			var form = this;
			var options = form.data('jqv');

			// unbind fields
			form.find("["+options.validateAttribute+"*=validate]").not("[type=checkbox]").off(options.validationEventTrigger, methods._onFieldEvent);
			form.find("["+options.validateAttribute+"*=validate][type=checkbox],[class*=validate][type=radio]").off("click", methods._onFieldEvent);

			// unbind form.submit
			form.off("submit", methods._onSubmitEvent);
			form.removeData('jqv');
            
			form.off("click", "a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']", methods._submitButtonClick);
			form.removeData('jqv_submitButton');

			if (options.autoPositionUpdate)
				$(window).off("resize", methods.updatePromptsPosition);

			return this;
		},
		/**
		* Validates either a form or a list of fields, shows prompts accordingly.
		* Note: There is no ajax form validation with this method, only field ajax validation are evaluated
		*
		* @return true if the form validates, false if it fails
		*/
		validate: function() {
			var element = $(this);
			var valid = null;

			if (element.is("form") || element.hasClass("validationEngineContainer")) {
				if (element.hasClass('validating')) {
					// form is already validating.
					// Should abort old validation and start new one. I don't know how to implement it.
					return false;
				} else {				
					element.addClass('validating');
					var options = element.data('jqv');
					var valid = methods._validateFields(this);

					// If the form doesn't validate, clear the 'validating' class before the user has a chance to submit again
					setTimeout(function(){
						element.removeClass('validating');
					}, 100);
					if (valid && options.onSuccess) {
						options.onSuccess();
					} else if (!valid && options.onFailure) {
						options.onFailure();
					}
				}
			} else if (element.is('form') || element.hasClass('validationEngineContainer')) {
				element.removeClass('validating');
			} else {
				// field validation
				var form = element.closest('form, .validationEngineContainer'),
					options = (form.data('jqv')) ? form.data('jqv') : $.validationEngine.defaults,
					valid = methods._validateField(element, options);

				if (valid && options.onFieldSuccess)
					options.onFieldSuccess();
				else if (options.onFieldFailure && options.InvalidFields.length > 0) {
					options.onFieldFailure();
				}
			}
			if(options.onValidationComplete) {
				// !! ensures that an undefined return is interpreted as return false but allows a onValidationComplete() to possibly return true and have form continue processing
				return !!options.onValidationComplete(form, valid);
			}
			return valid;
		},
		/**
		*  Redraw prompts position, useful when you change the DOM state when validating
		*/
		updatePromptsPosition: function(event) {

			if (event && this == window) {
				var form = event.data.formElem;
				var noAnimation = event.data.noAnimation;
			}
			else
				var form = $(this.closest('form, .validationEngineContainer'));

			var options = form.data('jqv');
			// No option, take default one
			form.find('['+options.validateAttribute+'*=validate]').not(":disabled").each(function(){
				var field = $(this);
				if (options.prettySelect && field.is(":hidden"))
				  field = form.find("#" + options.usePrefix + field.attr('id') + options.useSuffix);
				var prompt = methods._getPrompt(field);
				var promptText = $(prompt).find(".formErrorContent").html();

				if(prompt)
					methods._updatePrompt(field, $(prompt), promptText, undefined, false, options, noAnimation);
			});
			return this;
		},
		/**
		* Displays a prompt on a element.
		* Note that the element needs an id!
		*
		* @param {String} promptText html text to display type
		* @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
		* @param {String} possible values topLeft, topRight, bottomLeft, centerRight, bottomRight
		*/
		showPrompt: function(promptText, type, promptPosition, showArrow) {
			var form = this.closest('form, .validationEngineContainer');
			var options = form.data('jqv');
			// No option, take default one
			if(!options)
				options = methods._saveOptions(this, options);
			if(promptPosition)
				options.promptPosition=promptPosition;
			options.showArrow = showArrow==true;

			methods._showPrompt(this, promptText, type, false, options);
			return this;
		},
		/**
		* Closes form error prompts, CAN be invidual
		*/
		hide: function() {
			 var form = $(this).closest('form, .validationEngineContainer');
			 var options = form.data('jqv');
			 var fadeDuration = (options && options.fadeDuration) ? options.fadeDuration : 0.3;
			 var closingtag;
			 
			 if($(this).is("form") || $(this).hasClass("validationEngineContainer")) {
				 closingtag = "parentForm"+methods._getClassName($(this).attr("id"));
			 } else {
				 closingtag = methods._getClassName($(this).attr("id")) +"formError";
			 }
			 $('.'+closingtag).fadeTo(fadeDuration, 0.3, function() {
				 $(this).parent('.formErrorOuter').remove();
				 $(this).remove();
			 });
			 return this;
		 },
		 /**
		 * Closes all error prompts on the page
		 */
		 hideAll: function() {

			 var form = this;
			 var options = form.data('jqv');
			 var duration = options ? options.fadeDuration:300;
			 $('.formError').fadeTo(duration, 300, function() {
				 $(this).parent('.formErrorOuter').remove();
				 $(this).remove();
			 });
			 return this;
		 },
		/**
		* Typically called when user exists a field using tab or a mouse click, triggers a field
		* validation
		*/
		_onFieldEvent: function(event) {
			var field = $(this);
			var form = field.closest('form, .validationEngineContainer');
			var options = form.data('jqv');
			options.eventTrigger = "field";
			// validate the current field
			window.setTimeout(function() {
				methods._validateField(field, options);
				if (options.InvalidFields.length == 0 && options.onFieldSuccess) {
					options.onFieldSuccess();
				} else if (options.InvalidFields.length > 0 && options.onFieldFailure) {
					options.onFieldFailure();
				}
			}, (event.data) ? event.data.delay : 0);

		},
		/**
		* Called when the form is submited, shows prompts accordingly
		*
		* @param {jqObject}
		*            form
		* @return false if form submission needs to be cancelled
		*/
		_onSubmitEvent: function() {
			var form = $(this);
			var options = form.data('jqv');
			
			//check if it is trigger from skipped button
			if (form.data("jqv_submitButton")){
				var submitButton = $("#" + form.data("jqv_submitButton"));
				if (submitButton){
					if (submitButton.length > 0){
						if (submitButton.hasClass("validate-skip") || submitButton.attr("data-validation-engine-skip") == "true")
							return true;
					}
				}
			}

			options.eventTrigger = "submit";

			// validate each field 
			// (- skip field ajax validation, not necessary IF we will perform an ajax form validation)
			var r=methods._validateFields(form);

			if (r && options.ajaxFormValidation) {
				methods._validateFormWithAjax(form, options);
				// cancel form auto-submission - process with async call onAjaxFormComplete
				return false;
			}

			if(options.onValidationComplete) {
				// !! ensures that an undefined return is interpreted as return false but allows a onValidationComplete() to possibly return true and have form continue processing
				return !!options.onValidationComplete(form, r);
			}
			return r;
		},
		/**
		* Return true if the ajax field validations passed so far
		* @param {Object} options
		* @return true, is all ajax validation passed so far (remember ajax is async)
		*/
		_checkAjaxStatus: function(options) {
			var status = true;
			$.each(options.ajaxValidCache, function(key, value) {
				if (!value) {
					status = false;
					// break the each
					return false;
				}
			});
			return status;
		},
		
		/**
		* Return true if the ajax field is validated
		* @param {String} fieldid
		* @param {Object} options
		* @return true, if validation passed, false if false or doesn't exist
		*/
		_checkAjaxFieldStatus: function(fieldid, options) {
			return options.ajaxValidCache[fieldid] == true;
		},
		/**
		* Validates form fields, shows prompts accordingly
		*
		* @param {jqObject}
		*            form
		* @param {skipAjaxFieldValidation}
		*            boolean - when set to true, ajax field validation is skipped, typically used when the submit button is clicked
		*
		* @return true if form is valid, false if not, undefined if ajax form validation is done
		*/
		_validateFields: function(form) {
			var options = form.data('jqv');

			// this variable is set to true if an error is found
			var errorFound = false;

			// Trigger hook, start validation
			form.trigger("jqv.form.validating");
			// first, evaluate status of non ajax fields
			var first_err=null;
			form.find('['+options.validateAttribute+'*=validate]').not(":disabled").each( function() {
				var field = $(this);
				var names = [];
				if ($.inArray(field.attr('name'), names) < 0) {
					errorFound |= methods._validateField(field, options);
					if (errorFound && first_err==null)
						if (field.is(":hidden") && options.prettySelect)
							first_err = field = form.find("#" + options.usePrefix + methods._jqSelector(field.attr('id')) + options.useSuffix);
						else {

							//Check if we need to adjust what element to show the prompt on
							//and and such scroll to instead
							if(field.data('jqv-prompt-at') instanceof jQuery ){
								field = field.data('jqv-prompt-at');
							} else if(field.data('jqv-prompt-at')) {
								field = $(field.data('jqv-prompt-at'));
							}
							first_err=field;
						}
					if (options.doNotShowAllErrosOnSubmit)
						return false;
					names.push(field.attr('name'));

					//if option set, stop checking validation rules after one error is found
					if(options.showOneMessage == true && errorFound){
						return false;
					}
				}
			});

			// second, check to see if all ajax calls completed ok
			// errorFound |= !methods._checkAjaxStatus(options);

			// third, check status and scroll the container accordingly
			form.trigger("jqv.form.result", [errorFound]);

			if (errorFound) {
				if (options.scroll) {
					var destination=first_err.offset().top;
					var fixleft = first_err.offset().left;

					//prompt positioning adjustment support. Usage: positionType:Xshift,Yshift (for ex.: bottomLeft:+20 or bottomLeft:-20,+10)
					var positionType=options.promptPosition;
					if (typeof(positionType)=='string' && positionType.indexOf(":")!=-1)
						positionType=positionType.substring(0,positionType.indexOf(":"));

					if (positionType!="bottomRight" && positionType!="bottomLeft") {
						var prompt_err= methods._getPrompt(first_err);
						if (prompt_err) {
							destination=prompt_err.offset().top;
						}
					}
					
					// Offset the amount the page scrolls by an amount in px to accomodate fixed elements at top of page
					if (options.scrollOffset) {
						destination -= options.scrollOffset;
					}

					// get the position of the first error, there should be at least one, no need to check this
					//var destination = form.find(".formError:not('.greenPopup'):first").offset().top;
					if (options.isOverflown) {
						var overflowDIV = $(options.overflownDIV);
						if(!overflowDIV.length) return false;
						var scrollContainerScroll = overflowDIV.scrollTop();
						var scrollContainerPos = -parseInt(overflowDIV.offset().top);

						destination += scrollContainerScroll + scrollContainerPos - 5;
						var scrollContainer = $(options.overflownDIV + ":not(:animated)");

						scrollContainer.animate({ scrollTop: destination }, 1100, function(){
							if(options.focusFirstField) first_err.focus();
						});

					} else {
						$("html, body").animate({
							scrollTop: destination
						}, 1100, function(){
							if(options.focusFirstField) first_err.focus();
						});
						$("html, body").animate({scrollLeft: fixleft},1100)
					}

				} else if(options.focusFirstField)
					first_err.focus();
				return false;
			}
			return true;
		},
		/**
		* This method is called to perform an ajax form validation.
		* During this process all the (field, value) pairs are sent to the server which returns a list of invalid fields or true
		*
		* @param {jqObject} form
		* @param {Map} options
		*/
		_validateFormWithAjax: function(form, options) {

			var data = form.serialize();
									var type = (options.ajaxFormValidationMethod) ? options.ajaxFormValidationMethod : "GET";
			var url = (options.ajaxFormValidationURL) ? options.ajaxFormValidationURL : form.attr("action");
									var dataType = (options.dataType) ? options.dataType : "json";
			$.ajax({
				type: type,
				url: url,
				cache: false,
				dataType: dataType,
				data: data,
				form: form,
				methods: methods,
				options: options,
				beforeSend: function() {
					return options.onBeforeAjaxFormValidation(form, options);
				},
				error: function(data, transport) {
					methods._ajaxError(data, transport);
				},
				success: function(json) {
					if ((dataType == "json") && (json !== true)) {
						// getting to this case doesn't necessary means that the form is invalid
						// the server may return green or closing prompt actions
						// this flag helps figuring it out
						var errorInForm=false;
						for (var i = 0; i < json.length; i++) {
							var value = json[i];

							var errorFieldId = value[0];
							var errorField = $($("#" + errorFieldId)[0]);

							// make sure we found the element
							if (errorField.length == 1) {

								// promptText or selector
								var msg = value[2];
								// if the field is valid
								if (value[1] == true) {

									if (msg == ""  || !msg){
										// if for some reason, status==true and error="", just close the prompt
										methods._closePrompt(errorField);
									} else {
										// the field is valid, but we are displaying a green prompt
										if (options.allrules[msg]) {
											var txt = options.allrules[msg].alertTextOk;
											if (txt)
												msg = txt;
										}
										if (options.showPrompts) methods._showPrompt(errorField, msg, "pass", false, options, true);
									}
								} else {
									// the field is invalid, show the red error prompt
									errorInForm|=true;
									if (options.allrules[msg]) {
										var txt = options.allrules[msg].alertText;
										if (txt)
											msg = txt;
									}
									if(options.showPrompts) methods._showPrompt(errorField, msg, "", false, options, true);
								}
							}
						}
						options.onAjaxFormComplete(!errorInForm, form, json, options);
					} else
						options.onAjaxFormComplete(true, form, json, options);

				}
			});

		},
		/**
		* Validates field, shows prompts accordingly
		*
		* @param {jqObject}
		*            field
		* @param {Array[String]}
		*            field's validation rules
		* @param {Map}
		*            user options
		* @return false if field is valid (It is inversed for *fields*, it return false on validate and true on errors.)
		*/
		_validateField: function(field, options, skipAjaxValidation) {
			if (!field.attr("id")) {
				field.attr("id", "form-validation-field-" + $.validationEngine.fieldIdCounter);
				++$.validationEngine.fieldIdCounter;
			}

           if (!options.validateNonVisibleFields && (field.is(":hidden") && !options.prettySelect || field.parent().is(":hidden")))
				return false;

			var rulesParsing = field.attr(options.validateAttribute);
			var getRules = /validate\[(.*)\]/.exec(rulesParsing);

			if (!getRules)
				return false;
			var str = getRules[1];
			var rules = str.split(/\[|,|\]/);

			// true if we ran the ajax validation, tells the logic to stop messing with prompts
			var isAjaxValidator = false;
			var fieldName = field.attr("name");
			var promptText = "";
			var promptType = "";
			var required = false;
			var limitErrors = false;
			options.isError = false;
			options.showArrow = true;
			
			// If the programmer wants to limit the amount of error messages per field,
			if (options.maxErrorsPerField > 0) {
				limitErrors = true;
			}

			var form = $(field.closest("form, .validationEngineContainer"));
			// Fix for adding spaces in the rules
			for (var i = 0; i < rules.length; i++) {
				rules[i] = rules[i].replace(" ", "");
				// Remove any parsing errors
				if (rules[i] === '') {
					delete rules[i];
				}
			}

			for (var i = 0, field_errors = 0; i < rules.length; i++) {
				
				// If we are limiting errors, and have hit the max, break
				if (limitErrors && field_errors >= options.maxErrorsPerField) {
					// If we haven't hit a required yet, check to see if there is one in the validation rules for this
					// field and that it's index is greater or equal to our current index
					if (!required) {
						var have_required = $.inArray('required', rules);
						required = (have_required != -1 &&  have_required >= i);
					}
					break;
				}
				
				
				var errorMsg = undefined;
				switch (rules[i]) {

					case "required":
						required = true;
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._required);
						break;
					case "custom":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._custom);
						break;
					case "groupRequired":
						// Check is its the first of group, if not, reload validation with first field
						// AND continue normal validation on present field
						var classGroup = "["+options.validateAttribute+"*=" +rules[i + 1] +"]";
						var firstOfGroup = form.find(classGroup).eq(0);
						if(firstOfGroup[0] != field[0]){

							methods._validateField(firstOfGroup, options, skipAjaxValidation); 
							options.showArrow = true;

						}
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._groupRequired);
						if(errorMsg)  required = true;
						options.showArrow = false;
						break;
					case "ajax":
						// AJAX defaults to returning it's loading message
						errorMsg = methods._ajax(field, rules, i, options);
						if (errorMsg) {
							promptType = "load";
						}
						break;
					case "minSize":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._minSize);
						break;
					case "maxSize":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._maxSize);
						break;
					case "min":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._min);
						break;
					case "max":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._max);
						break;
					case "past":
						errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._past);
						break;
					case "future":
						errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._future);
						break;
					case "dateRange":
						var classGroup = "["+options.validateAttribute+"*=" + rules[i + 1] + "]";
						options.firstOfGroup = form.find(classGroup).eq(0);
						options.secondOfGroup = form.find(classGroup).eq(1);

						//if one entry out of the pair has value then proceed to run through validation
						if (options.firstOfGroup[0].value || options.secondOfGroup[0].value) {
							errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._dateRange);
						}
						if (errorMsg) required = true;
						options.showArrow = false;
						break;

					case "dateTimeRange":
						var classGroup = "["+options.validateAttribute+"*=" + rules[i + 1] + "]";
						options.firstOfGroup = form.find(classGroup).eq(0);
						options.secondOfGroup = form.find(classGroup).eq(1);

						//if one entry out of the pair has value then proceed to run through validation
						if (options.firstOfGroup[0].value || options.secondOfGroup[0].value) {
							errorMsg = methods._getErrorMessage(form, field,rules[i], rules, i, options, methods._dateTimeRange);
						}
						if (errorMsg) required = true;
						options.showArrow = false;
						break;
					case "maxCheckbox":
						field = $(form.find("input[name='" + fieldName + "']"));
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._maxCheckbox);
						break;
					case "minCheckbox":
						field = $(form.find("input[name='" + fieldName + "']"));
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._minCheckbox);
						break;
					case "equals":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._equals);
						break;
					case "funcCall":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._funcCall);
						break;
					case "creditCard":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._creditCard);
						break;
					case "condRequired":
						errorMsg = methods._getErrorMessage(form, field, rules[i], rules, i, options, methods._condRequired);
						if (errorMsg !== undefined) {
							required = true;
						}
						break;

					default:
				}
				
				var end_validation = false;
				
				// If we were passed back an message object, check what the status was to determine what to do
				if (typeof errorMsg == "object") {
					switch (errorMsg.status) {
						case "_break":
							end_validation = true;
							break;
						// If we have an error message, set errorMsg to the error message
						case "_error":
							errorMsg = errorMsg.message;
							break;
						// If we want to throw an error, but not show a prompt, return early with true
						case "_error_no_prompt":
							return true;
							break;
						// Anything else we continue on
						default:
							break;
					}
				}
				
				// If it has been specified that validation should end now, break
				if (end_validation) {
					break;
				}
				
				// If we have a string, that means that we have an error, so add it to the error message.
				if (typeof errorMsg == 'string') {
					promptText += errorMsg + "<br/>";
					options.isError = true;
					field_errors++;
				}	
			}
			// If the rules required is not added, an empty field is not validated
			if(!required && !(field.val()) && field.val().length < 1) options.isError = false;

			// Hack for radio/checkbox group button, the validation go into the
			// first radio/checkbox of the group
			var fieldType = field.prop("type");
			var positionType=field.data("promptPosition") || options.promptPosition;

			if ((fieldType == "radio" || fieldType == "checkbox") && form.find("input[name='" + fieldName + "']").size() > 1) {
				if(positionType === 'inline') {
					field = $(form.find("input[name='" + fieldName + "'][type!=hidden]:last"));
				} else {
				field = $(form.find("input[name='" + fieldName + "'][type!=hidden]:first"));
				}
				options.showArrow = false;
			}

			if(field.is(":hidden") && options.prettySelect) {
				field = form.find("#" + options.usePrefix + methods._jqSelector(field.attr('id')) + options.useSuffix);
			}

			if (options.isError && options.showPrompts){
				methods._showPrompt(field, promptText, promptType, false, options);
			}else{
				if (!isAjaxValidator) methods._closePrompt(field);
			}

			if (!isAjaxValidator) {
				field.trigger("jqv.field.result", [field, options.isError, promptText]);
			}

			/* Record error */
			var errindex = $.inArray(field[0], options.InvalidFields);
			if (errindex == -1) {
				if (options.isError)
				options.InvalidFields.push(field[0]);
			} else if (!options.isError) {
				options.InvalidFields.splice(errindex, 1);
			}
				
			methods._handleStatusCssClasses(field, options);
	
			/* run callback function for each field */
			if (options.isError && options.onFieldFailure)
				options.onFieldFailure(field);

			if (!options.isError && options.onFieldSuccess)
				options.onFieldSuccess(field);

			return options.isError;
		},
		/**
		* Handling css classes of fields indicating result of validation 
		*
		* @param {jqObject}
		*            field
		* @param {Array[String]}
		*            field's validation rules            
		* @private
		*/
		_handleStatusCssClasses: function(field, options) {
			/* remove all classes */
			if(options.addSuccessCssClassToField)
				field.removeClass(options.addSuccessCssClassToField);
			
			if(options.addFailureCssClassToField)
				field.removeClass(options.addFailureCssClassToField);
			
			/* Add classes */
			if (options.addSuccessCssClassToField && !options.isError)
				field.addClass(options.addSuccessCssClassToField);
			
			if (options.addFailureCssClassToField && options.isError)
				field.addClass(options.addFailureCssClassToField);		
		},
		
		 /********************
		  * _getErrorMessage
		  *
		  * @param form
		  * @param field
		  * @param rule
		  * @param rules
		  * @param i
		  * @param options
		  * @param originalValidationMethod
		  * @return {*}
		  * @private
		  */
		 _getErrorMessage:function (form, field, rule, rules, i, options, originalValidationMethod) {
			 // If we are using the custon validation type, build the index for the rule.
			 // Otherwise if we are doing a function call, make the call and return the object
			 // that is passed back.
	 		 var rule_index = jQuery.inArray(rule, rules);
			 if (rule === "custom" || rule === "funcCall") {
				 var custom_validation_type = rules[rule_index + 1];
				 rule = rule + "[" + custom_validation_type + "]";
				 // Delete the rule from the rules array so that it doesn't try to call the
			    // same rule over again
			    delete(rules[rule_index]);
			 }
			 // Change the rule to the composite rule, if it was different from the original
			 var alteredRule = rule;


			 var element_classes = (field.attr("data-validation-engine")) ? field.attr("data-validation-engine") : field.attr("class");
			 var element_classes_array = element_classes.split(" ");

			 // Call the original validation method. If we are dealing with dates or checkboxes, also pass the form
			 var errorMsg;
			 if (rule == "future" || rule == "past"  || rule == "maxCheckbox" || rule == "minCheckbox") {
				 errorMsg = originalValidationMethod(form, field, rules, i, options);
			 } else {
				 errorMsg = originalValidationMethod(field, rules, i, options);
			 }

			 // If the original validation method returned an error and we have a custom error message,
			 // return the custom message instead. Otherwise return the original error message.
			 if (errorMsg != undefined) {
				 var custom_message = methods._getCustomErrorMessage($(field), element_classes_array, alteredRule, options);
				 if (custom_message) errorMsg = custom_message;
			 }
			 return errorMsg;

		 },
		 _getCustomErrorMessage:function (field, classes, rule, options) {
			var custom_message = false;
			var validityProp = /^custom\[.*\]$/.test(rule) ? methods._validityProp["custom"] : methods._validityProp[rule];
			 // If there is a validityProp for this rule, check to see if the field has an attribute for it
			if (validityProp != undefined) {
				custom_message = field.attr("data-errormessage-"+validityProp);
				// If there was an error message for it, return the message
				if (custom_message != undefined) 
					return custom_message;
			}
			custom_message = field.attr("data-errormessage");
			 // If there is an inline custom error message, return it
			if (custom_message != undefined) 
				return custom_message;
			var id = '#' + field.attr("id");
			// If we have custom messages for the element's id, get the message for the rule from the id.
			// Otherwise, if we have custom messages for the element's classes, use the first class message we find instead.
			if (typeof options.custom_error_messages[id] != "undefined" &&
				typeof options.custom_error_messages[id][rule] != "undefined" ) {
						  custom_message = options.custom_error_messages[id][rule]['message'];
			} else if (classes.length > 0) {
				for (var i = 0; i < classes.length && classes.length > 0; i++) {
					 var element_class = "." + classes[i];
					if (typeof options.custom_error_messages[element_class] != "undefined" &&
						typeof options.custom_error_messages[element_class][rule] != "undefined") {
							custom_message = options.custom_error_messages[element_class][rule]['message'];
							break;
					}
				}
			}
			if (!custom_message &&
				typeof options.custom_error_messages[rule] != "undefined" &&
				typeof options.custom_error_messages[rule]['message'] != "undefined"){
					 custom_message = options.custom_error_messages[rule]['message'];
			 }
			 return custom_message;
		 },
		 _validityProp: {
			 "required": "value-missing",
			 "custom": "custom-error",
			 "groupRequired": "value-missing",
			 "ajax": "custom-error",
			 "minSize": "range-underflow",
			 "maxSize": "range-overflow",
			 "min": "range-underflow",
			 "max": "range-overflow",
			 "past": "type-mismatch",
			 "future": "type-mismatch",
			 "dateRange": "type-mismatch",
			 "dateTimeRange": "type-mismatch",
			 "maxCheckbox": "range-overflow",
			 "minCheckbox": "range-underflow",
			 "equals": "pattern-mismatch",
			 "funcCall": "custom-error",
			 "creditCard": "pattern-mismatch",
			 "condRequired": "value-missing"
		 },
		/**
		* Required validation
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @param {bool} condRequired flag when method is used for internal purpose in condRequired check
		* @return an error string if validation failed
		*/
		_required: function(field, rules, i, options, condRequired) {
			switch (field.prop("type")) {
				case "text":
				case "password":
				case "textarea":
				case "file":
				case "select-one":
				case "select-multiple":
				default:
					var field_val      = $.trim( field.val()                               );
					var dv_placeholder = $.trim( field.attr("data-validation-placeholder") );
					var placeholder    = $.trim( field.attr("placeholder")                 );
					if (
						   ( !field_val                                    )
						|| ( dv_placeholder && field_val == dv_placeholder )
						|| ( placeholder    && field_val == placeholder    )
					) {
						return options.allrules[rules[i]].alertText;
					}
					break;
				case "radio":
				case "checkbox":
					// new validation style to only check dependent field
					if (condRequired) {
						if (!field.attr('checked')) {
							return options.allrules[rules[i]].alertTextCheckboxMultiple;
						}
						break;
					}
					// old validation style
					var form = field.closest("form, .validationEngineContainer");
					var name = field.attr("name");
					if (form.find("input[name='" + name + "']:checked").size() == 0) {
						if (form.find("input[name='" + name + "']:visible").size() == 1)
							return options.allrules[rules[i]].alertTextCheckboxe;
						else
							return options.allrules[rules[i]].alertTextCheckboxMultiple;
					}
					break;
			}
		},
		/**
		* Validate that 1 from the group field is required
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_groupRequired: function(field, rules, i, options) {
			var classGroup = "["+options.validateAttribute+"*=" +rules[i + 1] +"]";
			var isValid = false;
			// Check all fields from the group
			field.closest("form, .validationEngineContainer").find(classGroup).each(function(){
				if(!methods._required($(this), rules, i, options)){
					isValid = true;
					return false;
				}
			}); 

			if(!isValid) {
		  return options.allrules[rules[i]].alertText;
		}
		},
		/**
		* Validate rules
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_custom: function(field, rules, i, options) {
			var customRule = rules[i + 1];
			var rule = options.allrules[customRule];
			var fn;
			if(!rule) {
				alert("jqv:custom rule not found - "+customRule);
				return;
			}
			
			if(rule["regex"]) {
				 var ex=rule.regex;
					if(!ex) {
						alert("jqv:custom regex not found - "+customRule);
						return;
					}
					var pattern = new RegExp(ex);

					if (!pattern.test(field.val())) return options.allrules[customRule].alertText;
					
			} else if(rule["func"]) {
				fn = rule["func"]; 
				 
				if (typeof(fn) !== "function") {
					alert("jqv:custom parameter 'function' is no function - "+customRule);
						return;
				}
				 
				if (!fn(field, rules, i, options))
					return options.allrules[customRule].alertText;
			} else {
				alert("jqv:custom type not allowed "+customRule);
					return;
			}
		},
		/**
		* Validate custom function outside of the engine scope
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_funcCall: function(field, rules, i, options) {
			var functionName = rules[i + 1];
			var fn;
			if(functionName.indexOf('.') >-1)
			{
				var namespaces = functionName.split('.');
				var scope = window;
				while(namespaces.length)
				{
					scope = scope[namespaces.shift()];
				}
				fn = scope;
			}
			else
				fn = window[functionName] || options.customFunctions[functionName];
			if (typeof(fn) == 'function')
				return fn(field, rules, i, options);

		},
		/**
		* Field match
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_equals: function(field, rules, i, options) {
			var equalsField = rules[i + 1];

			if (field.val() != $("#" + equalsField).val())
				return options.allrules.equals.alertText;
		},
		/**
		* Check the maximum size (in characters)
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_maxSize: function(field, rules, i, options) {
			var max = rules[i + 1];
			var len = field.val().length;

			if (len > max) {
				var rule = options.allrules.maxSize;
				return rule.alertText + max + rule.alertText2;
			}
		},
		/**
		* Check the minimum size (in characters)
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_minSize: function(field, rules, i, options) {
			var min = rules[i + 1];
			var len = field.val().length;

			if (len < min) {
				var rule = options.allrules.minSize;
				return rule.alertText + min + rule.alertText2;
			}
		},
		/**
		* Check number minimum value
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_min: function(field, rules, i, options) {
			var min = parseFloat(rules[i + 1]);
			var len = parseFloat(field.val());

			if (len < min) {
				var rule = options.allrules.min;
				if (rule.alertText2) return rule.alertText + min + rule.alertText2;
				return rule.alertText + min;
			}
		},
		/**
		* Check number maximum value
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_max: function(field, rules, i, options) {
			var max = parseFloat(rules[i + 1]);
			var len = parseFloat(field.val());

			if (len >max ) {
				var rule = options.allrules.max;
				if (rule.alertText2) return rule.alertText + max + rule.alertText2;
				//orefalo: to review, also do the translations
				return rule.alertText + max;
			}
		},
		/**
		* Checks date is in the past
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_past: function(form, field, rules, i, options) {

			var p=rules[i + 1];
			var fieldAlt = $(form.find("input[name='" + p.replace(/^#+/, '') + "']"));
			var pdate;

			if (p.toLowerCase() == "now") {
				pdate = new Date();
			} else if (undefined != fieldAlt.val()) {
				if (fieldAlt.is(":disabled"))
					return;
				pdate = methods._parseDate(fieldAlt.val());
			} else {
				pdate = methods._parseDate(p);
			}
			var vdate = methods._parseDate(field.val());

			if (vdate > pdate ) {
				var rule = options.allrules.past;
				if (rule.alertText2) return rule.alertText + methods._dateToString(pdate) + rule.alertText2;
				return rule.alertText + methods._dateToString(pdate);
			}
		},
		/**
		* Checks date is in the future
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_future: function(form, field, rules, i, options) {

			var p=rules[i + 1];
			var fieldAlt = $(form.find("input[name='" + p.replace(/^#+/, '') + "']"));
			var pdate;

			if (p.toLowerCase() == "now") {
				pdate = new Date();
			} else if (undefined != fieldAlt.val()) {
				if (fieldAlt.is(":disabled"))
					return;
				pdate = methods._parseDate(fieldAlt.val());
			} else {
				pdate = methods._parseDate(p);
			}
			var vdate = methods._parseDate(field.val());

			if (vdate < pdate ) {
				var rule = options.allrules.future;
				if (rule.alertText2)
					return rule.alertText + methods._dateToString(pdate) + rule.alertText2;
				return rule.alertText + methods._dateToString(pdate);
			}
		},
		/**
		* Checks if valid date
		*
		* @param {string} date string
		* @return a bool based on determination of valid date
		*/
		_isDate: function (value) {
			var dateRegEx = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/);
			return dateRegEx.test(value);
		},
		/**
		* Checks if valid date time
		*
		* @param {string} date string
		* @return a bool based on determination of valid date time
		*/
		_isDateTime: function (value){
			var dateTimeRegEx = new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/);
			return dateTimeRegEx.test(value);
		},
		//Checks if the start date is before the end date
		//returns true if end is later than start
		_dateCompare: function (start, end) {
			return (new Date(start.toString()) < new Date(end.toString()));
		},
		/**
		* Checks date range
		*
		* @param {jqObject} first field name
		* @param {jqObject} second field name
		* @return an error string if validation failed
		*/
		_dateRange: function (field, rules, i, options) {
			//are not both populated
			if ((!options.firstOfGroup[0].value && options.secondOfGroup[0].value) || (options.firstOfGroup[0].value && !options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}

			//are not both dates
			if (!methods._isDate(options.firstOfGroup[0].value) || !methods._isDate(options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}

			//are both dates but range is off
			if (!methods._dateCompare(options.firstOfGroup[0].value, options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}
		},
		/**
		* Checks date time range
		*
		* @param {jqObject} first field name
		* @param {jqObject} second field name
		* @return an error string if validation failed
		*/
		_dateTimeRange: function (field, rules, i, options) {
			//are not both populated
			if ((!options.firstOfGroup[0].value && options.secondOfGroup[0].value) || (options.firstOfGroup[0].value && !options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}
			//are not both dates
			if (!methods._isDateTime(options.firstOfGroup[0].value) || !methods._isDateTime(options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}
			//are both dates but range is off
			if (!methods._dateCompare(options.firstOfGroup[0].value, options.secondOfGroup[0].value)) {
				return options.allrules[rules[i]].alertText + options.allrules[rules[i]].alertText2;
			}
		},
		/**
		* Max number of checkbox selected
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_maxCheckbox: function(form, field, rules, i, options) {

			var nbCheck = rules[i + 1];
			var groupname = field.attr("name");
			var groupSize = form.find("input[name='" + groupname + "']:checked").size();
			if (groupSize > nbCheck) {
				options.showArrow = false;
				if (options.allrules.maxCheckbox.alertText2)
					 return options.allrules.maxCheckbox.alertText + " " + nbCheck + " " + options.allrules.maxCheckbox.alertText2;
				return options.allrules.maxCheckbox.alertText;
			}
		},
		/**
		* Min number of checkbox selected
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_minCheckbox: function(form, field, rules, i, options) {

			var nbCheck = rules[i + 1];
			var groupname = field.attr("name");
			var groupSize = form.find("input[name='" + groupname + "']:checked").size();
			if (groupSize < nbCheck) {
				options.showArrow = false;
				return options.allrules.minCheckbox.alertText + " " + nbCheck + " " + options.allrules.minCheckbox.alertText2;
			}
		},
		/**
		* Checks that it is a valid credit card number according to the
		* Luhn checksum algorithm.
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return an error string if validation failed
		*/
		_creditCard: function(field, rules, i, options) {
			//spaces and dashes may be valid characters, but must be stripped to calculate the checksum.
			var valid = false, cardNumber = field.val().replace(/ +/g, '').replace(/-+/g, '');

			var numDigits = cardNumber.length;
			if (numDigits >= 14 && numDigits <= 16 && parseInt(cardNumber) > 0) {

				var sum = 0, i = numDigits - 1, pos = 1, digit, luhn = new String();
				do {
					digit = parseInt(cardNumber.charAt(i));
					luhn += (pos++ % 2 == 0) ? digit * 2 : digit;
				} while (--i >= 0)

				for (i = 0; i < luhn.length; i++) {
					sum += parseInt(luhn.charAt(i));
				}
				valid = sum % 10 == 0;
			}
			if (!valid) return options.allrules.creditCard.alertText;
		},
		/**
		* Ajax field validation
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		*            user options
		* @return nothing! the ajax validator handles the prompts itself
		*/
		 _ajax: function(field, rules, i, options) {

			 var errorSelector = rules[i + 1];
			 var rule = options.allrules[errorSelector];
			 var extraData = rule.extraData;
			 var extraDataDynamic = rule.extraDataDynamic;
			 var data = {
				"fieldId" : field.attr("id"),
				"fieldValue" : field.val()
			 };

			 if (typeof extraData === "object") {
				$.extend(data, extraData);
			 } else if (typeof extraData === "string") {
				var tempData = extraData.split("&");
				for(var i = 0; i < tempData.length; i++) {
					var values = tempData[i].split("=");
					if (values[0] && values[0]) {
						data[values[0]] = values[1];
					}
				}
			 }

			 if (extraDataDynamic) {
				 var tmpData = [];
				 var domIds = String(extraDataDynamic).split(",");
				 for (var i = 0; i < domIds.length; i++) {
					 var id = domIds[i];
					 if ($(id).length) {
						 var inputValue = field.closest("form, .validationEngineContainer").find(id).val();
						 var keyValue = id.replace('#', '') + '=' + escape(inputValue);
						 data[id.replace('#', '')] = inputValue;
					 }
				 }
			 }
			 
			 // If a field change event triggered this we want to clear the cache for this ID
			 if (options.eventTrigger == "field") {
				delete(options.ajaxValidCache[field.attr("id")]);
			 }

			 // If there is an error or if the the field is already validated, do not re-execute AJAX
			 if (!options.isError && !methods._checkAjaxFieldStatus(field.attr("id"), options)) {
				 $.ajax({
					 type: options.ajaxFormValidationMethod,
					 url: rule.url,
					 cache: false,
					 dataType: "json",
					 data: data,
					 field: field,
					 rule: rule,
					 methods: methods,
					 options: options,
					 beforeSend: function() {},
					 error: function(data, transport) {
						 methods._ajaxError(data, transport);
					 },
					 success: function(json) {

						 // asynchronously called on success, data is the json answer from the server
						 var errorFieldId = json[0];
						 //var errorField = $($("#" + errorFieldId)[0]);
						 var errorField = $("#"+ errorFieldId).eq(0);

						 // make sure we found the element
						 if (errorField.length == 1) {
							 var status = json[1];
							 // read the optional msg from the server
							 var msg = json[2];
							 if (!status) {
								 // Houston we got a problem - display an red prompt
								 options.ajaxValidCache[errorFieldId] = false;
								 options.isError = true;

								 // resolve the msg prompt
								 if(msg) {
									 if (options.allrules[msg]) {
										 var txt = options.allrules[msg].alertText;
										 if (txt) {
											msg = txt;
							}
									 }
								 }
								 else
									msg = rule.alertText;

								 if (options.showPrompts) methods._showPrompt(errorField, msg, "", true, options);
							 } else {
								 options.ajaxValidCache[errorFieldId] = true;

								 // resolves the msg prompt
								 if(msg) {
									 if (options.allrules[msg]) {
										 var txt = options.allrules[msg].alertTextOk;
										 if (txt) {
											msg = txt;
							}
									 }
								 }
								 else
								 msg = rule.alertTextOk;

								 if (options.showPrompts) {
									 // see if we should display a green prompt
									 if (msg)
										methods._showPrompt(errorField, msg, "pass", true, options);
									 else
										methods._closePrompt(errorField);
								}
								
								 // If a submit form triggered this, we want to re-submit the form
								 if (options.eventTrigger == "submit")
									field.closest("form").submit();
							 }
						 }
						 errorField.trigger("jqv.field.result", [errorField, options.isError, msg]);
					 }
				 });
				 
				 return rule.alertTextLoad;
			 }
		 },
		/**
		* Common method to handle ajax errors
		*
		* @param {Object} data
		* @param {Object} transport
		*/
		_ajaxError: function(data, transport) {
			if(data.status == 0 && transport == null)
				alert("The page is not served from a server! ajax call failed");
			else if(typeof console != "undefined")
				console.log("Ajax error: " + data.status + " " + transport);
		},
		/**
		* date -> string
		*
		* @param {Object} date
		*/
		_dateToString: function(date) {
			return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
		},
		/**
		* Parses an ISO date
		* @param {String} d
		*/
		_parseDate: function(d) {

			var dateParts = d.split("-");
			if(dateParts==d)
				dateParts = d.split("/");
			if(dateParts==d) {
				dateParts = d.split(".");
				return new Date(dateParts[2], (dateParts[1] - 1), dateParts[0]);
			}
			return new Date(dateParts[0], (dateParts[1] - 1) ,dateParts[2]);
		},
		/**
		* Builds or updates a prompt with the given information
		*
		* @param {jqObject} field
		* @param {String} promptText html text to display type
		* @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
		* @param {boolean} ajaxed - use to mark fields than being validated with ajax
		* @param {Map} options user options
		*/
		 _showPrompt: function(field, promptText, type, ajaxed, options, ajaxform) {
		 	//Check if we need to adjust what element to show the prompt on
			if(field.data('jqv-prompt-at') instanceof jQuery ){
				field = field.data('jqv-prompt-at');
			} else if(field.data('jqv-prompt-at')) {
				field = $(field.data('jqv-prompt-at'));
			}

			 var prompt = methods._getPrompt(field);
			 // The ajax submit errors are not see has an error in the form,
			 // When the form errors are returned, the engine see 2 bubbles, but those are ebing closed by the engine at the same time
			 // Because no error was found befor submitting
			 if(ajaxform) prompt = false;
			 // Check that there is indded text
			 if($.trim(promptText)){ 
				 if (prompt)
					methods._updatePrompt(field, prompt, promptText, type, ajaxed, options);
				 else
					methods._buildPrompt(field, promptText, type, ajaxed, options);
			}
		 },
		/**
		* Builds and shades a prompt for the given field.
		*
		* @param {jqObject} field
		* @param {String} promptText html text to display type
		* @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
		* @param {boolean} ajaxed - use to mark fields than being validated with ajax
		* @param {Map} options user options
		*/
		_buildPrompt: function(field, promptText, type, ajaxed, options) {

			// create the prompt
			var prompt = $('<div>');
			prompt.addClass(methods._getClassName(field.attr("id")) + "formError");
			// add a class name to identify the parent form of the prompt
			prompt.addClass("parentForm"+methods._getClassName(field.closest('form, .validationEngineContainer').attr("id")));
			prompt.addClass("formError");

			switch (type) {
				case "pass":
					prompt.addClass("greenPopup");
					break;
				case "load":
					prompt.addClass("blackPopup");
					break;
				default:
					/* it has error  */
					//alert("unknown popup type:"+type);
			}
			if (ajaxed)
				prompt.addClass("ajaxed");

			// create the prompt content
			var promptContent = $('<div>').addClass("formErrorContent").html(promptText).appendTo(prompt);

			// determine position type
			var positionType=field.data("promptPosition") || options.promptPosition;

			// create the css arrow pointing at the field
			// note that there is no triangle on max-checkbox and radio
			if (options.showArrow) {
				var arrow = $('<div>').addClass("formErrorArrow");

				//prompt positioning adjustment support. Usage: positionType:Xshift,Yshift (for ex.: bottomLeft:+20 or bottomLeft:-20,+10)
				if (typeof(positionType)=='string') 
				{
					var pos=positionType.indexOf(":");
					if(pos!=-1)
						positionType=positionType.substring(0,pos);
				}

				switch (positionType) {
					case "bottomLeft":
					case "bottomRight":
						prompt.find(".formErrorContent").before(arrow);
						arrow.addClass("formErrorArrowBottom").html('<div class="line1"><!-- --></div><div class="line2"><!-- --></div><div class="line3"><!-- --></div><div class="line4"><!-- --></div><div class="line5"><!-- --></div><div class="line6"><!-- --></div><div class="line7"><!-- --></div><div class="line8"><!-- --></div><div class="line9"><!-- --></div><div class="line10"><!-- --></div>');
						break;
					case "topLeft":
					case "topRight":
						arrow.html('<div class="line10"><!-- --></div><div class="line9"><!-- --></div><div class="line8"><!-- --></div><div class="line7"><!-- --></div><div class="line6"><!-- --></div><div class="line5"><!-- --></div><div class="line4"><!-- --></div><div class="line3"><!-- --></div><div class="line2"><!-- --></div><div class="line1"><!-- --></div>');
						prompt.append(arrow);
						break;
				}
			}
			// Add custom prompt class
			if (options.addPromptClass)
				prompt.addClass(options.addPromptClass);

            // Add custom prompt class defined in element
            var requiredOverride = field.attr('data-required-class');
            if(requiredOverride !== undefined) {
                prompt.addClass(requiredOverride);
            } else {
                if(options.prettySelect) {
                    if($('#' + field.attr('id')).next().is('select')) {
                        var prettyOverrideClass = $('#' + field.attr('id').substr(options.usePrefix.length).substring(options.useSuffix.length)).attr('data-required-class');
                        if(prettyOverrideClass !== undefined) {
                            prompt.addClass(prettyOverrideClass);
                        }
                    }
                }
            }

			prompt.css({
				"opacity": 0
			});
			if(positionType === 'inline') {
				prompt.addClass("inline");
				if(typeof field.attr('data-prompt-target') !== 'undefined' && $('#'+field.attr('data-prompt-target')).length > 0) {
					prompt.appendTo($('#'+field.attr('data-prompt-target')));
				} else {
					field.after(prompt);
				}
			} else {
				field.before(prompt);				
			}
			
			var pos = methods._calculatePosition(field, prompt, options);
			prompt.css({
				'position': positionType === 'inline' ? 'relative' : 'absolute',
				"top": pos.callerTopPosition,
				"left": pos.callerleftPosition,
				"marginTop": pos.marginTopSize,
				"opacity": 0
			}).data("callerField", field);
			

			if (options.autoHidePrompt) {
				setTimeout(function(){
					prompt.animate({
						"opacity": 0
					},function(){
						prompt.closest('.formErrorOuter').remove();
						prompt.remove();
					});
				}, options.autoHideDelay);
			} 
			return prompt.animate({
				"opacity": 0.87
			});
		},
		/**
		* Updates the prompt text field - the field for which the prompt
		* @param {jqObject} field
		* @param {String} promptText html text to display type
		* @param {String} type the type of bubble: 'pass' (green), 'load' (black) anything else (red)
		* @param {boolean} ajaxed - use to mark fields than being validated with ajax
		* @param {Map} options user options
		*/
		_updatePrompt: function(field, prompt, promptText, type, ajaxed, options, noAnimation) {

			if (prompt) {
				if (typeof type !== "undefined") {
					if (type == "pass")
						prompt.addClass("greenPopup");
					else
						prompt.removeClass("greenPopup");

					if (type == "load")
						prompt.addClass("blackPopup");
					else
						prompt.removeClass("blackPopup");
				}
				if (ajaxed)
					prompt.addClass("ajaxed");
				else
					prompt.removeClass("ajaxed");

				prompt.find(".formErrorContent").html(promptText);

				var pos = methods._calculatePosition(field, prompt, options);
				var css = {"top": pos.callerTopPosition,
				"left": pos.callerleftPosition,
				"marginTop": pos.marginTopSize};

				if (noAnimation)
					prompt.css(css);
				else
					prompt.animate(css);
			}
		},
		/**
		* Closes the prompt associated with the given field
		*
		* @param {jqObject}
		*            field
		*/
		 _closePrompt: function(field) {
			 var prompt = methods._getPrompt(field);
			 if (prompt)
				 prompt.fadeTo("fast", 0, function() {
					 prompt.parent('.formErrorOuter').remove();
					 prompt.remove();
				 });
		 },
		 closePrompt: function(field) {
			 return methods._closePrompt(field);
		 },
		/**
		* Returns the error prompt matching the field if any
		*
		* @param {jqObject}
		*            field
		* @return undefined or the error prompt (jqObject)
		*/
		_getPrompt: function(field) {
				var formId = $(field).closest('form, .validationEngineContainer').attr('id');
			var className = methods._getClassName(field.attr("id")) + "formError";
				var match = $("." + methods._escapeExpression(className) + '.parentForm' + methods._getClassName(formId))[0];
			if (match)
			return $(match);
		},
		/**
		  * Returns the escapade classname
		  *
		  * @param {selector}
		  *            className
		  */
		  _escapeExpression: function (selector) {
			  return selector.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g, "\\$1");
		  },
		/**
		 * returns true if we are in a RTLed document
		 *
		 * @param {jqObject} field
		 */
		isRTL: function(field)
		{
			var $document = $(document);
			var $body = $('body');
			var rtl =
				(field && field.hasClass('rtl')) ||
				(field && (field.attr('dir') || '').toLowerCase()==='rtl') ||
				$document.hasClass('rtl') ||
				($document.attr('dir') || '').toLowerCase()==='rtl' ||
				$body.hasClass('rtl') ||
				($body.attr('dir') || '').toLowerCase()==='rtl';
			return Boolean(rtl);
		},
		/**
		* Calculates prompt position
		*
		* @param {jqObject}
		*            field
		* @param {jqObject}
		*            the prompt
		* @param {Map}
		*            options
		* @return positions
		*/
		_calculatePosition: function (field, promptElmt, options) {

			var promptTopPosition, promptleftPosition, marginTopSize;
			var fieldWidth 	= field.width();
			var fieldLeft 	= field.position().left; 
			var fieldTop 	=  field.position().top;
			var fieldHeight 	=  field.height();	
			var promptHeight = promptElmt.height();


			// is the form contained in an overflown container?
			promptTopPosition = promptleftPosition = 0;
			// compensation for the arrow
			marginTopSize = -promptHeight;
		

			//prompt positioning adjustment support
			//now you can adjust prompt position
			//usage: positionType:Xshift,Yshift
			//for example:
			//   bottomLeft:+20 means bottomLeft position shifted by 20 pixels right horizontally
			//   topRight:20, -15 means topRight position shifted by 20 pixels to right and 15 pixels to top
			//You can use +pixels, - pixels. If no sign is provided than + is default.
			var positionType=field.data("promptPosition") || options.promptPosition;
			var shift1="";
			var shift2="";
			var shiftX=0;
			var shiftY=0;
			if (typeof(positionType)=='string') {
				//do we have any position adjustments ?
				if (positionType.indexOf(":")!=-1) {
					shift1=positionType.substring(positionType.indexOf(":")+1);
					positionType=positionType.substring(0,positionType.indexOf(":"));

					//if any advanced positioning will be needed (percents or something else) - parser should be added here
					//for now we use simple parseInt()

					//do we have second parameter?
					if (shift1.indexOf(",") !=-1) {
						shift2=shift1.substring(shift1.indexOf(",") +1);
						shift1=shift1.substring(0,shift1.indexOf(","));
						shiftY=parseInt(shift2);
						if (isNaN(shiftY)) shiftY=0;
					};

					shiftX=parseInt(shift1);
					if (isNaN(shift1)) shift1=0;

				};
			};

			
			switch (positionType) {
				default:
				case "topRight":
					promptleftPosition +=  fieldLeft + fieldWidth - 30;
					promptTopPosition +=  fieldTop;
					break;

				case "topLeft":
					promptTopPosition +=  fieldTop;
					promptleftPosition += fieldLeft; 
					break;

				case "centerRight":
					promptTopPosition = fieldTop+4;
					marginTopSize = 0;
					promptleftPosition= fieldLeft + field.outerWidth(true)+5;
					break;
				case "centerLeft":
					promptleftPosition = fieldLeft - (promptElmt.width() + 2);
					promptTopPosition = fieldTop+4;
					marginTopSize = 0;
					
					break;

				case "bottomLeft":
					promptTopPosition = fieldTop + field.height() + 5;
					marginTopSize = 0;
					promptleftPosition = fieldLeft;
					break;
				case "bottomRight":
					promptleftPosition = fieldLeft + fieldWidth - 30;
					promptTopPosition =  fieldTop +  field.height() + 5;
					marginTopSize = 0;
					break;
				case "inline":
					promptleftPosition = 0;
					promptTopPosition = 0;
					marginTopSize = 0;
			};

		

			//apply adjusments if any
			promptleftPosition += shiftX;
			promptTopPosition  += shiftY;

			return {
				"callerTopPosition": promptTopPosition + "px",
				"callerleftPosition": promptleftPosition + "px",
				"marginTopSize": marginTopSize + "px"
			};
		},
		/**
		* Saves the user options and variables in the form.data
		*
		* @param {jqObject}
		*            form - the form where the user option should be saved
		* @param {Map}
		*            options - the user options
		* @return the user options (extended from the defaults)
		*/
		 _saveOptions: function(form, options) {

			 // is there a language localisation ?
			 if ($.validationEngineLanguage)
			 var allRules = $.validationEngineLanguage.allRules;
			 else
			 $.error("jQuery.validationEngine rules are not loaded, plz add localization files to the page");
			 // --- Internals DO NOT TOUCH or OVERLOAD ---
			 // validation rules and i18
			 $.validationEngine.defaults.allrules = allRules;

			 var userOptions = $.extend(true,{},$.validationEngine.defaults,options);

			 form.data('jqv', userOptions);
			 return userOptions;
		 },

		 /**
		 * Removes forbidden characters from class name
		 * @param {String} className
		 */
		 _getClassName: function(className) {
			 if(className)
				 return className.replace(/:/g, "_").replace(/\./g, "_");
					  },
		/**
		 * Escape special character for jQuery selector
		 * http://totaldev.com/content/escaping-characters-get-valid-jquery-id
		 * @param {String} selector
		 */
		 _jqSelector: function(str){
			return str.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1');
		},
		/**
		* Conditionally required field
		*
		* @param {jqObject} field
		* @param {Array[String]} rules
		* @param {int} i rules index
		* @param {Map}
		* user options
		* @return an error string if validation failed
		*/
		_condRequired: function(field, rules, i, options) {
			var idx, dependingField;

			for(idx = (i + 1); idx < rules.length; idx++) {
				dependingField = jQuery("#" + rules[idx]).first();

				/* Use _required for determining wether dependingField has a value.
				 * There is logic there for handling all field types, and default value; so we won't replicate that here
				 * Indicate this special use by setting the last parameter to true so we only validate the dependingField on chackboxes and radio buttons (#462)
				 */
				if (dependingField.length && methods._required(dependingField, ["required"], 0, options, true) == undefined) {
					/* We now know any of the depending fields has a value,
					 * so we can validate this field as per normal required code
					 */
					return methods._required(field, ["required"], 0, options);
				}
			}
		},

	    _submitButtonClick: function(event) {
	        var button = $(this);
	        var form = button.closest('form, .validationEngineContainer');
	        form.data("jqv_submitButton", button.attr("id"));
	    }
		  };

	 /**
	 * Plugin entry point.
	 * You may pass an action as a parameter or a list of options.
	 * if none, the init and attach methods are being called.
	 * Remember: if you pass options, the attached method is NOT called automatically
	 *
	 * @param {String}
	 *            method (optional) action
	 */
	 $.fn.validationEngine = function(method) {

		 var form = $(this);
		 if(!form[0]) return form;  // stop here if the form does not exist

		 if (typeof(method) == 'string' && method.charAt(0) != '_' && methods[method]) {

			 // make sure init is called once
			 if(method != "showPrompt" && method != "hide" && method != "hideAll")
			 methods.init.apply(form);

			 return methods[method].apply(form, Array.prototype.slice.call(arguments, 1));
		 } else if (typeof method == 'object' || !method) {

			 // default constructor with or without arguments
			 methods.init.apply(form, arguments);
			 return methods.attach.apply(form);
		 } else {
			 $.error('Method ' + method + ' does not exist in jQuery.validationEngine');
		 }
	};



	// LEAK GLOBAL OPTIONS
	$.validationEngine= {fieldIdCounter: 0,defaults:{

		// Name of the event triggering field validation
		validationEventTrigger: "blur",
		// Automatically scroll viewport to the first error
		scroll: true,
		// Focus on the first input
		focusFirstField:true,
		// Show prompts, set to false to disable prompts
		showPrompts: true,
       // Should we attempt to validate non-visible input fields contained in the form? (Useful in cases of tabbed containers, e.g. jQuery-UI tabs)
       validateNonVisibleFields: false,
		// Opening box position, possible locations are: topLeft,
		// topRight, bottomLeft, centerRight, bottomRight, inline
		// inline gets inserted after the validated field or into an element specified in data-prompt-target
		promptPosition: "topRight",
		bindMethod:"bind",
		// internal, automatically set to true when it parse a _ajax rule
		inlineAjax: false,
		// if set to true, the form data is sent asynchronously via ajax to the form.action url (get)
		ajaxFormValidation: false,
		// The url to send the submit ajax validation (default to action)
		ajaxFormValidationURL: false,
		// HTTP method used for ajax validation
		ajaxFormValidationMethod: 'get',
		// Ajax form validation callback method: boolean onComplete(form, status, errors, options)
		// retuns false if the form.submit event needs to be canceled.
		onAjaxFormComplete: $.noop,
		// called right before the ajax call, may return false to cancel
		onBeforeAjaxFormValidation: $.noop,
		// Stops form from submitting and execute function assiciated with it
		onValidationComplete: false,

		// Used when you have a form fields too close and the errors messages are on top of other disturbing viewing messages
		doNotShowAllErrosOnSubmit: false,
		// Object where you store custom messages to override the default error messages
		custom_error_messages:{},
		// true if you want to vind the input fields
		binded: true,
		// set to true, when the prompt arrow needs to be displayed
		showArrow: true,
		// did one of the validation fail ? kept global to stop further ajax validations
		isError: false,
		// Limit how many displayed errors a field can have
		maxErrorsPerField: false,
		
		// Caches field validation status, typically only bad status are created.
		// the array is used during ajax form validation to detect issues early and prevent an expensive submit
		ajaxValidCache: {},
		// Auto update prompt position after window resize
		autoPositionUpdate: false,

		InvalidFields: [],
		onFieldSuccess: false,
		onFieldFailure: false,
		onSuccess: false,
		onFailure: false,
		validateAttribute: "class",
		addSuccessCssClassToField: "",
		addFailureCssClassToField: "",
		
		// Auto-hide prompt
		autoHidePrompt: false,
		// Delay before auto-hide
		autoHideDelay: 10000,
		// Fade out duration while hiding the validations
		fadeDuration: 0.3,
	 // Use Prettify select library
	 prettySelect: false,
	 // Add css class on prompt
	 addPromptClass : "",
	 // Custom ID uses prefix
	 usePrefix: "",
	 // Custom ID uses suffix
	 useSuffix: "",
	 // Only show one message per error prompt
	 showOneMessage: false
	}};
	$(function(){$.validationEngine.defaults.promptPosition = methods.isRTL()?'topLeft':"topRight"});
})(jQuery);


/*
 * Remote Chained - jQuery AJAX(J) chained selects plugin
 *
 * Copyright (c) 2010-2013 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  0.9.3
 *
 */
(function(a){"use strict",a.fn.remoteChained=function(b,c,d){return this.each(function(){var d=this,e=a(d).clone();a(b).each(function(){a(this).bind("change",function(){var e={};a(b).each(function(){var b=a(this).attr("id"),c=a(":selected",this).val();e[b]=c}),a.getJSON(c,e,function(b){var c=a(":selected",d).val();a("option",d).remove();var e=[];if(a.isArray(b))e=b;else for(var f in b)b.hasOwnProperty(f)&&e.push([f,b[f]]);for(var g=0;g!==e.length;g++){var f=e[g][0],h=e[g][1];if("selected"===f){c=h;continue}var i=a("<option />").val(f).append(h);a(d).append(i)}a(d).children().each(function(){a(this).val()===c&&a(this).attr("selected","selected")}),1===a("option",d).size()&&a(d).val()===""?a(d).attr("disabled","disabled"):a(d).removeAttr("disabled"),a(d).trigger("change")})}),a(this).trigger("change")})})},a.fn.remoteChainedTo=a.fn.remoteChained})(jQuery)
/*
 IntegraXor Web SCADA - JavaScript Number Formatter
 http://www.integraxor.com/
 author: KPL, KHL
 (c)2011 ecava
 Dual licensed under the MIT or GPL Version 2 licenses.
*/
window.format=function(b,a){if(!b||isNaN(+a))return a;var a=b.charAt(0)=="-"?-a:+a,j=a<0?a=-a:0,e=b.match(/[^\d\-\+#]/g),h=e&&e[e.length-1]||".",e=e&&e[1]&&e[0]||",",b=b.split(h),a=a.toFixed(b[1]&&b[1].length),a=+a+"",d=b[1]&&b[1].lastIndexOf("0"),c=a.split(".");if(!c[1]||c[1]&&c[1].length<=d)a=(+a).toFixed(d+1);d=b[0].split(e);b[0]=d.join("");var f=b[0]&&b[0].indexOf("0");if(f>-1)for(;c[0].length<b[0].length-f;)c[0]="0"+c[0];else+c[0]==0&&(c[0]="");a=a.split(".");a[0]=c[0];if(c=d[1]&&d[d.length-
1].length){for(var d=a[0],f="",k=d.length%c,g=0,i=d.length;g<i;g++)f+=d.charAt(g),!((g-k+1)%c)&&g<i-c&&(f+=e);a[0]=f}a[1]=b[1]&&a[1]?h+a[1]:"";return(j?"-":"")+a[0]+a[1]};
// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.1.0 - JavaScript Vector Library                          │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\
// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\
// └────────────────────────────────────────────────────────────────────┘ \\

(function(a){var b="0.3.4",c="hasOwnProperty",d=/[\.\/]/,e="*",f=function(){},g=function(a,b){return a-b},h,i,j={n:{}},k=function(a,b){var c=j,d=i,e=Array.prototype.slice.call(arguments,2),f=k.listeners(a),l=0,m=!1,n,o=[],p={},q=[],r=h,s=[];h=a,i=0;for(var t=0,u=f.length;t<u;t++)"zIndex"in f[t]&&(o.push(f[t].zIndex),f[t].zIndex<0&&(p[f[t].zIndex]=f[t]));o.sort(g);while(o[l]<0){n=p[o[l++]],q.push(n.apply(b,e));if(i){i=d;return q}}for(t=0;t<u;t++){n=f[t];if("zIndex"in n)if(n.zIndex==o[l]){q.push(n.apply(b,e));if(i)break;do{l++,n=p[o[l]],n&&q.push(n.apply(b,e));if(i)break}while(n)}else p[n.zIndex]=n;else{q.push(n.apply(b,e));if(i)break}}i=d,h=r;return q.length?q:null};k.listeners=function(a){var b=a.split(d),c=j,f,g,h,i,k,l,m,n,o=[c],p=[];for(i=0,k=b.length;i<k;i++){n=[];for(l=0,m=o.length;l<m;l++){c=o[l].n,g=[c[b[i]],c[e]],h=2;while(h--)f=g[h],f&&(n.push(f),p=p.concat(f.f||[]))}o=n}return p},k.on=function(a,b){var c=a.split(d),e=j;for(var g=0,h=c.length;g<h;g++)e=e.n,!e[c[g]]&&(e[c[g]]={n:{}}),e=e[c[g]];e.f=e.f||[];for(g=0,h=e.f.length;g<h;g++)if(e.f[g]==b)return f;e.f.push(b);return function(a){+a==+a&&(b.zIndex=+a)}},k.stop=function(){i=1},k.nt=function(a){if(a)return(new RegExp("(?:\\.|\\/|^)"+a+"(?:\\.|\\/|$)")).test(h);return h},k.off=k.unbind=function(a,b){var f=a.split(d),g,h,i,k,l,m,n,o=[j];for(k=0,l=f.length;k<l;k++)for(m=0;m<o.length;m+=i.length-2){i=[m,1],g=o[m].n;if(f[k]!=e)g[f[k]]&&i.push(g[f[k]]);else for(h in g)g[c](h)&&i.push(g[h]);o.splice.apply(o,i)}for(k=0,l=o.length;k<l;k++){g=o[k];while(g.n){if(b){if(g.f){for(m=0,n=g.f.length;m<n;m++)if(g.f[m]==b){g.f.splice(m,1);break}!g.f.length&&delete g.f}for(h in g.n)if(g.n[c](h)&&g.n[h].f){var p=g.n[h].f;for(m=0,n=p.length;m<n;m++)if(p[m]==b){p.splice(m,1);break}!p.length&&delete g.n[h].f}}else{delete g.f;for(h in g.n)g.n[c](h)&&g.n[h].f&&delete g.n[h].f}g=g.n}}},k.once=function(a,b){var c=function(){var d=b.apply(this,arguments);k.unbind(a,c);return d};return k.on(a,c)},k.version=b,k.toString=function(){return"You are running Eve "+b},typeof module!="undefined"&&module.exports?module.exports=k:typeof define!="undefined"?define("eve",[],function(){return k}):a.eve=k})(this),function(){function cF(a){for(var b=0;b<cy.length;b++)cy[b].el.paper==a&&cy.splice(b--,1)}function cE(b,d,e,f,h,i){e=Q(e);var j,k,l,m=[],o,p,q,t=b.ms,u={},v={},w={};if(f)for(y=0,z=cy.length;y<z;y++){var x=cy[y];if(x.el.id==d.id&&x.anim==b){x.percent!=e?(cy.splice(y,1),l=1):k=x,d.attr(x.totalOrigin);break}}else f=+v;for(var y=0,z=b.percents.length;y<z;y++){if(b.percents[y]==e||b.percents[y]>f*b.top){e=b.percents[y],p=b.percents[y-1]||0,t=t/b.top*(e-p),o=b.percents[y+1],j=b.anim[e];break}f&&d.attr(b.anim[b.percents[y]])}if(!!j){if(!k){for(var A in j)if(j[g](A))if(U[g](A)||d.paper.customAttributes[g](A)){u[A]=d.attr(A),u[A]==null&&(u[A]=T[A]),v[A]=j[A];switch(U[A]){case C:w[A]=(v[A]-u[A])/t;break;case"colour":u[A]=a.getRGB(u[A]);var B=a.getRGB(v[A]);w[A]={r:(B.r-u[A].r)/t,g:(B.g-u[A].g)/t,b:(B.b-u[A].b)/t};break;case"path":var D=bR(u[A],v[A]),E=D[1];u[A]=D[0],w[A]=[];for(y=0,z=u[A].length;y<z;y++){w[A][y]=[0];for(var F=1,G=u[A][y].length;F<G;F++)w[A][y][F]=(E[y][F]-u[A][y][F])/t}break;case"transform":var H=d._,I=ca(H[A],v[A]);if(I){u[A]=I.from,v[A]=I.to,w[A]=[],w[A].real=!0;for(y=0,z=u[A].length;y<z;y++){w[A][y]=[u[A][y][0]];for(F=1,G=u[A][y].length;F<G;F++)w[A][y][F]=(v[A][y][F]-u[A][y][F])/t}}else{var J=d.matrix||new cb,K={_:{transform:H.transform},getBBox:function(){return d.getBBox(1)}};u[A]=[J.a,J.b,J.c,J.d,J.e,J.f],b$(K,v[A]),v[A]=K._.transform,w[A]=[(K.matrix.a-J.a)/t,(K.matrix.b-J.b)/t,(K.matrix.c-J.c)/t,(K.matrix.d-J.d)/t,(K.matrix.e-J.e)/t,(K.matrix.f-J.f)/t]}break;case"csv":var L=r(j[A])[s](c),M=r(u[A])[s](c);if(A=="clip-rect"){u[A]=M,w[A]=[],y=M.length;while(y--)w[A][y]=(L[y]-u[A][y])/t}v[A]=L;break;default:L=[][n](j[A]),M=[][n](u[A]),w[A]=[],y=d.paper.customAttributes[A].length;while(y--)w[A][y]=((L[y]||0)-(M[y]||0))/t}}var O=j.easing,P=a.easing_formulas[O];if(!P){P=r(O).match(N);if(P&&P.length==5){var R=P;P=function(a){return cC(a,+R[1],+R[2],+R[3],+R[4],t)}}else P=bf}q=j.start||b.start||+(new Date),x={anim:b,percent:e,timestamp:q,start:q+(b.del||0),status:0,initstatus:f||0,stop:!1,ms:t,easing:P,from:u,diff:w,to:v,el:d,callback:j.callback,prev:p,next:o,repeat:i||b.times,origin:d.attr(),totalOrigin:h},cy.push(x);if(f&&!k&&!l){x.stop=!0,x.start=new Date-t*f;if(cy.length==1)return cA()}l&&(x.start=new Date-x.ms*f),cy.length==1&&cz(cA)}else k.initstatus=f,k.start=new Date-k.ms*f;eve("raphael.anim.start."+d.id,d,b)}}function cD(a,b){var c=[],d={};this.ms=b,this.times=1;if(a){for(var e in a)a[g](e)&&(d[Q(e)]=a[e],c.push(Q(e)));c.sort(bd)}this.anim=d,this.top=c[c.length-1],this.percents=c}function cC(a,b,c,d,e,f){function o(a,b){var c,d,e,f,j,k;for(e=a,k=0;k<8;k++){f=m(e)-a;if(z(f)<b)return e;j=(3*i*e+2*h)*e+g;if(z(j)<1e-6)break;e=e-f/j}c=0,d=1,e=a;if(e<c)return c;if(e>d)return d;while(c<d){f=m(e);if(z(f-a)<b)return e;a>f?c=e:d=e,e=(d-c)/2+c}return e}function n(a,b){var c=o(a,b);return((l*c+k)*c+j)*c}function m(a){return((i*a+h)*a+g)*a}var g=3*b,h=3*(d-b)-g,i=1-g-h,j=3*c,k=3*(e-c)-j,l=1-j-k;return n(a,1/(200*f))}function cq(){return this.x+q+this.y+q+this.width+" × "+this.height}function cp(){return this.x+q+this.y}function cb(a,b,c,d,e,f){a!=null?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function bH(b,c,d){b=a._path2curve(b),c=a._path2curve(c);var e,f,g,h,i,j,k,l,m,n,o=d?0:[];for(var p=0,q=b.length;p<q;p++){var r=b[p];if(r[0]=="M")e=i=r[1],f=j=r[2];else{r[0]=="C"?(m=[e,f].concat(r.slice(1)),e=m[6],f=m[7]):(m=[e,f,e,f,i,j,i,j],e=i,f=j);for(var s=0,t=c.length;s<t;s++){var u=c[s];if(u[0]=="M")g=k=u[1],h=l=u[2];else{u[0]=="C"?(n=[g,h].concat(u.slice(1)),g=n[6],h=n[7]):(n=[g,h,g,h,k,l,k,l],g=k,h=l);var v=bG(m,n,d);if(d)o+=v;else{for(var w=0,x=v.length;w<x;w++)v[w].segment1=p,v[w].segment2=s,v[w].bez1=m,v[w].bez2=n;o=o.concat(v)}}}}}return o}function bG(b,c,d){var e=a.bezierBBox(b),f=a.bezierBBox(c);if(!a.isBBoxIntersect(e,f))return d?0:[];var g=bB.apply(0,b),h=bB.apply(0,c),i=~~(g/5),j=~~(h/5),k=[],l=[],m={},n=d?0:[];for(var o=0;o<i+1;o++){var p=a.findDotsAtSegment.apply(a,b.concat(o/i));k.push({x:p.x,y:p.y,t:o/i})}for(o=0;o<j+1;o++)p=a.findDotsAtSegment.apply(a,c.concat(o/j)),l.push({x:p.x,y:p.y,t:o/j});for(o=0;o<i;o++)for(var q=0;q<j;q++){var r=k[o],s=k[o+1],t=l[q],u=l[q+1],v=z(s.x-r.x)<.001?"y":"x",w=z(u.x-t.x)<.001?"y":"x",x=bD(r.x,r.y,s.x,s.y,t.x,t.y,u.x,u.y);if(x){if(m[x.x.toFixed(4)]==x.y.toFixed(4))continue;m[x.x.toFixed(4)]=x.y.toFixed(4);var y=r.t+z((x[v]-r[v])/(s[v]-r[v]))*(s.t-r.t),A=t.t+z((x[w]-t[w])/(u[w]-t[w]))*(u.t-t.t);y>=0&&y<=1&&A>=0&&A<=1&&(d?n++:n.push({x:x.x,y:x.y,t1:y,t2:A}))}}return n}function bF(a,b){return bG(a,b,1)}function bE(a,b){return bG(a,b)}function bD(a,b,c,d,e,f,g,h){if(!(x(a,c)<y(e,g)||y(a,c)>x(e,g)||x(b,d)<y(f,h)||y(b,d)>x(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(!k)return;var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(n<+y(a,c).toFixed(2)||n>+x(a,c).toFixed(2)||n<+y(e,g).toFixed(2)||n>+x(e,g).toFixed(2)||o<+y(b,d).toFixed(2)||o>+x(b,d).toFixed(2)||o<+y(f,h).toFixed(2)||o>+x(f,h).toFixed(2))return;return{x:l,y:m}}}function bC(a,b,c,d,e,f,g,h,i){if(!(i<0||bB(a,b,c,d,e,f,g,h)<i)){var j=1,k=j/2,l=j-k,m,n=.01;m=bB(a,b,c,d,e,f,g,h,l);while(z(m-i)>n)k/=2,l+=(m<i?1:-1)*k,m=bB(a,b,c,d,e,f,g,h,l);return l}}function bB(a,b,c,d,e,f,g,h,i){i==null&&(i=1),i=i>1?1:i<0?0:i;var j=i/2,k=12,l=[-0.1252,.1252,-0.3678,.3678,-0.5873,.5873,-0.7699,.7699,-0.9041,.9041,-0.9816,.9816],m=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],n=0;for(var o=0;o<k;o++){var p=j*l[o]+j,q=bA(p,a,c,e,g),r=bA(p,b,d,f,h),s=q*q+r*r;n+=m[o]*w.sqrt(s)}return j*n}function bA(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function by(a,b){var c=[];for(var d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}function bx(){return this.hex}function bv(a,b,c){function d(){var e=Array.prototype.slice.call(arguments,0),f=e.join("␀"),h=d.cache=d.cache||{},i=d.count=d.count||[];if(h[g](f)){bu(i,f);return c?c(h[f]):h[f]}i.length>=1e3&&delete h[i.shift()],i.push(f),h[f]=a[m](b,e);return c?c(h[f]):h[f]}return d}function bu(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function bm(a){if(Object(a)!==a)return a;var b=new a.constructor;for(var c in a)a[g](c)&&(b[c]=bm(a[c]));return b}function a(c){if(a.is(c,"function"))return b?c():eve.on("raphael.DOMload",c);if(a.is(c,E))return a._engine.create[m](a,c.splice(0,3+a.is(c[0],C))).add(c);var d=Array.prototype.slice.call(arguments,0);if(a.is(d[d.length-1],"function")){var e=d.pop();return b?e.call(a._engine.create[m](a,d)):eve.on("raphael.DOMload",function(){e.call(a._engine.create[m](a,d))})}return a._engine.create[m](a,arguments)}a.version="2.1.0",a.eve=eve;var b,c=/[, ]+/,d={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},e=/\{(\d+)\}/g,f="prototype",g="hasOwnProperty",h={doc:document,win:window},i={was:Object.prototype[g].call(h.win,"Raphael"),is:h.win.Raphael},j=function(){this.ca=this.customAttributes={}},k,l="appendChild",m="apply",n="concat",o="createTouch"in h.doc,p="",q=" ",r=String,s="split",t="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[s](q),u={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},v=r.prototype.toLowerCase,w=Math,x=w.max,y=w.min,z=w.abs,A=w.pow,B=w.PI,C="number",D="string",E="array",F="toString",G="fill",H=Object.prototype.toString,I={},J="push",K=a._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,L=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,M={NaN:1,Infinity:1,"-Infinity":1},N=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,O=w.round,P="setAttribute",Q=parseFloat,R=parseInt,S=r.prototype.toUpperCase,T=a._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},U=a._availableAnimAttrs={blur:C,"clip-rect":"csv",cx:C,cy:C,fill:"colour","fill-opacity":C,"font-size":C,height:C,opacity:C,path:"path",r:C,rx:C,ry:C,stroke:"colour","stroke-opacity":C,"stroke-width":C,transform:"transform",width:C,x:C,y:C},V=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,W=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,X={hs:1,rg:1},Y=/,?([achlmqrstvxz]),?/gi,Z=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,$=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig,_=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig,ba=a._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,bb={},bc=function(a,b){return a.key-b.key},bd=function(a,b){return Q(a)-Q(b)},be=function(){},bf=function(a){return a},bg=a._rectPath=function(a,b,c,d,e){if(e)return[["M",a+e,b],["l",c-e*2,0],["a",e,e,0,0,1,e,e],["l",0,d-e*2],["a",e,e,0,0,1,-e,e],["l",e*2-c,0],["a",e,e,0,0,1,-e,-e],["l",0,e*2-d],["a",e,e,0,0,1,e,-e],["z"]];return[["M",a,b],["l",c,0],["l",0,d],["l",-c,0],["z"]]},bh=function(a,b,c,d){d==null&&(d=c);return[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d],["z"]]},bi=a._getPath={path:function(a){return a.attr("path")},circle:function(a){var b=a.attrs;return bh(b.cx,b.cy,b.r)},ellipse:function(a){var b=a.attrs;return bh(b.cx,b.cy,b.rx,b.ry)},rect:function(a){var b=a.attrs;return bg(b.x,b.y,b.width,b.height,b.r)},image:function(a){var b=a.attrs;return bg(b.x,b.y,b.width,b.height)},text:function(a){var b=a._getBBox();return bg(b.x,b.y,b.width,b.height)}},bj=a.mapPath=function(a,b){if(!b)return a;var c,d,e,f,g,h,i;a=bR(a);for(e=0,g=a.length;e<g;e++){i=a[e];for(f=1,h=i.length;f<h;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d}return a};a._g=h,a.type=h.win.SVGAngle||h.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML";if(a.type=="VML"){var bk=h.doc.createElement("div"),bl;bk.innerHTML='<v:shape adj="1"/>',bl=bk.firstChild,bl.style.behavior="url(#default#VML)";if(!bl||typeof bl.adj!="object")return a.type=p;bk=null}a.svg=!(a.vml=a.type=="VML"),a._Paper=j,a.fn=k=j.prototype=a.prototype,a._id=0,a._oid=0,a.is=function(a,b){b=v.call(b);if(b=="finite")return!M[g](+a);if(b=="array")return a instanceof Array;return b=="null"&&a===null||b==typeof a&&a!==null||b=="object"&&a===Object(a)||b=="array"&&Array.isArray&&Array.isArray(a)||H.call(a).slice(8,-1).toLowerCase()==b},a.angle=function(b,c,d,e,f,g){if(f==null){var h=b-d,i=c-e;if(!h&&!i)return 0;return(180+w.atan2(-i,-h)*180/B+360)%360}return a.angle(b,c,f,g)-a.angle(d,e,f,g)},a.rad=function(a){return a%360*B/180},a.deg=function(a){return a*180/B%360},a.snapTo=function(b,c,d){d=a.is(d,"finite")?d:10;if(a.is(b,E)){var e=b.length;while(e--)if(z(b[e]-c)<=d)return b[e]}else{b=+b;var f=c%b;if(f<d)return c-f;if(f>b-d)return c-f+b}return c};var bn=a.createUUID=function(a,b){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a,b).toUpperCase()}}(/[xy]/g,function(a){var b=w.random()*16|0,c=a=="x"?b:b&3|8;return c.toString(16)});a.setWindow=function(b){eve("raphael.setWindow",a,h.win,b),h.win=b,h.doc=h.win.document,a._engine.initWin&&a._engine.initWin(h.win)};var bo=function(b){if(a.vml){var c=/^\s+|\s+$/g,d;try{var e=new ActiveXObject("htmlfile");e.write("<body>"),e.close(),d=e.body}catch(f){d=createPopup().document.body}var g=d.createTextRange();bo=bv(function(a){try{d.style.color=r(a).replace(c,p);var b=g.queryCommandValue("ForeColor");b=(b&255)<<16|b&65280|(b&16711680)>>>16;return"#"+("000000"+b.toString(16)).slice(-6)}catch(e){return"none"}})}else{var i=h.doc.createElement("i");i.title="Raphaël Colour Picker",i.style.display="none",h.doc.body.appendChild(i),bo=bv(function(a){i.style.color=a;return h.doc.defaultView.getComputedStyle(i,p).getPropertyValue("color")})}return bo(b)},bp=function(){return"hsb("+[this.h,this.s,this.b]+")"},bq=function(){return"hsl("+[this.h,this.s,this.l]+")"},br=function(){return this.hex},bs=function(b,c,d){c==null&&a.is(b,"object")&&"r"in b&&"g"in b&&"b"in b&&(d=b.b,c=b.g,b=b.r);if(c==null&&a.is(b,D)){var e=a.getRGB(b);b=e.r,c=e.g,d=e.b}if(b>1||c>1||d>1)b/=255,c/=255,d/=255;return[b,c,d]},bt=function(b,c,d,e){b*=255,c*=255,d*=255;var f={r:b,g:c,b:d,hex:a.rgb(b,c,d),toString:br};a.is(e,"finite")&&(f.opacity=e);return f};a.color=function(b){var c;a.is(b,"object")&&"h"in b&&"s"in b&&"b"in b?(c=a.hsb2rgb(b),b.r=c.r,b.g=c.g,b.b=c.b,b.hex=c.hex):a.is(b,"object")&&"h"in b&&"s"in b&&"l"in b?(c=a.hsl2rgb(b),b.r=c.r,b.g=c.g,b.b=c.b,b.hex=c.hex):(a.is(b,"string")&&(b=a.getRGB(b)),a.is(b,"object")&&"r"in b&&"g"in b&&"b"in b?(c=a.rgb2hsl(b),b.h=c.h,b.s=c.s,b.l=c.l,c=a.rgb2hsb(b),b.v=c.b):(b={hex:"none"},b.r=b.g=b.b=b.h=b.s=b.v=b.l=-1)),b.toString=br;return b},a.hsb2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"b"in a&&(c=a.b,b=a.s,a=a.h,d=a.o),a*=360;var e,f,g,h,i;a=a%360/60,i=c*b,h=i*(1-z(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a];return bt(e,f,g,d)},a.hsl2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"l"in a&&(c=a.l,b=a.s,a=a.h);if(a>1||b>1||c>1)a/=360,b/=100,c/=100;a*=360;var e,f,g,h,i;a=a%360/60,i=2*b*(c<.5?c:1-c),h=i*(1-z(a%2-1)),e=f=g=c-i/2,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a];return bt(e,f,g,d)},a.rgb2hsb=function(a,b,c){c=bs(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;f=x(a,b,c),g=f-y(a,b,c),d=g==0?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=(d+360)%6*60/360,e=g==0?0:g/f;return{h:d,s:e,b:f,toString:bp}},a.rgb2hsl=function(a,b,c){c=bs(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;g=x(a,b,c),h=y(a,b,c),i=g-h,d=i==0?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=(d+360)%6*60/360,f=(g+h)/2,e=i==0?0:f<.5?i/(2*f):i/(2-2*f);return{h:d,s:e,l:f,toString:bq}},a._path2string=function(){return this.join(",").replace(Y,"$1")};var bw=a._preload=function(a,b){var c=h.doc.createElement("img");c.style.cssText="position:absolute;left:-9999em;top:-9999em",c.onload=function(){b.call(this),this.onload=null,h.doc.body.removeChild(this)},c.onerror=function(){h.doc.body.removeChild(this)},h.doc.body.appendChild(c),c.src=a};a.getRGB=bv(function(b){if(!b||!!((b=r(b)).indexOf("-")+1))return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:bx};if(b=="none")return{r:-1,g:-1,b:-1,hex:"none",toString:bx};!X[g](b.toLowerCase().substring(0,2))&&b.charAt()!="#"&&(b=bo(b));var c,d,e,f,h,i,j,k=b.match(L);if(k){k[2]&&(f=R(k[2].substring(5),16),e=R(k[2].substring(3,5),16),d=R(k[2].substring(1,3),16)),k[3]&&(f=R((i=k[3].charAt(3))+i,16),e=R((i=k[3].charAt(2))+i,16),d=R((i=k[3].charAt(1))+i,16)),k[4]&&(j=k[4][s](W),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),k[1].toLowerCase().slice(0,4)=="rgba"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100));if(k[5]){j=k[5][s](W),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),(j[0].slice(-3)=="deg"||j[0].slice(-1)=="°")&&(d/=360),k[1].toLowerCase().slice(0,4)=="hsba"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100);return a.hsb2rgb(d,e,f,h)}if(k[6]){j=k[6][s](W),d=Q(j[0]),j[0].slice(-1)=="%"&&(d*=2.55),e=Q(j[1]),j[1].slice(-1)=="%"&&(e*=2.55),f=Q(j[2]),j[2].slice(-1)=="%"&&(f*=2.55),(j[0].slice(-3)=="deg"||j[0].slice(-1)=="°")&&(d/=360),k[1].toLowerCase().slice(0,4)=="hsla"&&(h=Q(j[3])),j[3]&&j[3].slice(-1)=="%"&&(h/=100);return a.hsl2rgb(d,e,f,h)}k={r:d,g:e,b:f,toString:bx},k.hex="#"+(16777216|f|e<<8|d<<16).toString(16).slice(1),a.is(h,"finite")&&(k.opacity=h);return k}return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:bx}},a),a.hsb=bv(function(b,c,d){return a.hsb2rgb(b,c,d).hex}),a.hsl=bv(function(b,c,d){return a.hsl2rgb(b,c,d).hex}),a.rgb=bv(function(a,b,c){return"#"+(16777216|c|b<<8|a<<16).toString(16).slice(1)}),a.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||.75},c=this.hsb2rgb(b.h,b.s,b.b);b.h+=.075,b.h>1&&(b.h=0,b.s-=.2,b.s<=0&&(this.getColor.start={h:0,s:1,b:b.b}));return c.hex},a.getColor.reset=function(){delete this.start},a.parsePathString=function(b){if(!b)return null;var c=bz(b);if(c.arr)return bJ(c.arr);var d={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},e=[];a.is(b,E)&&a.is(b[0],E)&&(e=bJ(b)),e.length||r(b).replace(Z,function(a,b,c){var f=[],g=b.toLowerCase();c.replace(_,function(a,b){b&&f.push(+b)}),g=="m"&&f.length>2&&(e.push([b][n](f.splice(0,2))),g="l",b=b=="m"?"l":"L");if(g=="r")e.push([b][n](f));else while(f.length>=d[g]){e.push([b][n](f.splice(0,d[g])));if(!d[g])break}}),e.toString=a._path2string,c.arr=bJ(e);return e},a.parseTransformString=bv(function(b){if(!b)return null;var c={r:3,s:4,t:2,m:6},d=[];a.is(b,E)&&a.is(b[0],E)&&(d=bJ(b)),d.length||r(b).replace($,function(a,b,c){var e=[],f=v.call(b);c.replace(_,function(a,b){b&&e.push(+b)}),d.push([b][n](e))}),d.toString=a._path2string;return d});var bz=function(a){var b=bz.ps=bz.ps||{};b[a]?b[a].sleep=100:b[a]={sleep:100},setTimeout(function(){for(var c in b)b[g](c)&&c!=a&&(b[c].sleep--,!b[c].sleep&&delete b[c])});return b[a]};a.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=A(j,3),l=A(j,2),m=i*i,n=m*i,o=k*a+l*3*i*c+j*3*i*i*e+n*g,p=k*b+l*3*i*d+j*3*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,x=j*e+i*g,y=j*f+i*h,z=90-w.atan2(q-s,r-t)*180/B;(q>s||r<t)&&(z+=180);return{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:x,y:y},alpha:z}},a.bezierBBox=function(b,c,d,e,f,g,h,i){a.is(b,"array")||(b=[b,c,d,e,f,g,h,i]);var j=bQ.apply(null,b);return{x:j.min.x,y:j.min.y,x2:j.max.x,y2:j.max.y,width:j.max.x-j.min.x,height:j.max.y-j.min.y}},a.isPointInsideBBox=function(a,b,c){return b>=a.x&&b<=a.x2&&c>=a.y&&c<=a.y2},a.isBBoxIntersect=function(b,c){var d=a.isPointInsideBBox;return d(c,b.x,b.y)||d(c,b.x2,b.y)||d(c,b.x,b.y2)||d(c,b.x2,b.y2)||d(b,c.x,c.y)||d(b,c.x2,c.y)||d(b,c.x,c.y2)||d(b,c.x2,c.y2)||(b.x<c.x2&&b.x>c.x||c.x<b.x2&&c.x>b.x)&&(b.y<c.y2&&b.y>c.y||c.y<b.y2&&c.y>b.y)},a.pathIntersection=function(a,b){return bH(a,b)},a.pathIntersectionNumber=function(a,b){return bH(a,b,1)},a.isPointInsidePath=function(b,c,d){var e=a.pathBBox(b);return a.isPointInsideBBox(e,c,d)&&bH(b,[["M",c,d],["H",e.x2+10]],1)%2==1},a._removedFactory=function(a){return function(){eve("raphael.log",null,"Raphaël: you are calling to method “"+a+"” of removed object",a)}};var bI=a.pathBBox=function(a){var b=bz(a);if(b.bbox)return b.bbox;if(!a)return{x:0,y:0,width:0,height:0,x2:0,y2:0};a=bR(a);var c=0,d=0,e=[],f=[],g;for(var h=0,i=a.length;h<i;h++){g=a[h];if(g[0]=="M")c=g[1],d=g[2],e.push(c),f.push(d);else{var j=bQ(c,d,g[1],g[2],g[3],g[4],g[5],g[6]);e=e[n](j.min.x,j.max.x),f=f[n](j.min.y,j.max.y),c=g[5],d=g[6]}}var k=y[m](0,e),l=y[m](0,f),o=x[m](0,e),p=x[m](0,f),q={x:k,y:l,x2:o,y2:p,width:o-k,height:p-l};b.bbox=bm(q);return q},bJ=function(b){var c=bm(b);c.toString=a._path2string;return c},bK=a._pathToRelative=function(b){var c=bz(b);if(c.rel)return bJ(c.rel);if(!a.is(b,E)||!a.is(b&&b[0],E))b=a.parsePathString(b);var d=[],e=0,f=0,g=0,h=0,i=0;b[0][0]=="M"&&(e=b[0][1],f=b[0][2],g=e,h=f,i++,d.push(["M",e,f]));for(var j=i,k=b.length;j<k;j++){var l=d[j]=[],m=b[j];if(m[0]!=v.call(m[0])){l[0]=v.call(m[0]);switch(l[0]){case"a":l[1]=m[1],l[2]=m[2],l[3]=m[3],l[4]=m[4],l[5]=m[5],l[6]=+(m[6]-e).toFixed(3),l[7]=+(m[7]-f).toFixed(3);break;case"v":l[1]=+(m[1]-f).toFixed(3);break;case"m":g=m[1],h=m[2];default:for(var n=1,o=m.length;n<o;n++)l[n]=+(m[n]-(n%2?e:f)).toFixed(3)}}else{l=d[j]=[],m[0]=="m"&&(g=m[1]+e,h=m[2]+f);for(var p=0,q=m.length;p<q;p++)d[j][p]=m[p]}var r=d[j].length;switch(d[j][0]){case"z":e=g,f=h;break;case"h":e+=+d[j][r-1];break;case"v":f+=+d[j][r-1];break;default:e+=+d[j][r-2],f+=+d[j][r-1]}}d.toString=a._path2string,c.rel=bJ(d);return d},bL=a._pathToAbsolute=function(b){var c=bz(b);if(c.abs)return bJ(c.abs);if(!a.is(b,E)||!a.is(b&&b[0],E))b=a.parsePathString(b);if(!b||!b.length)return[["M",0,0]];var d=[],e=0,f=0,g=0,h=0,i=0;b[0][0]=="M"&&(e=+b[0][1],f=+b[0][2],g=e,h=f,i++,d[0]=["M",e,f]);var j=b.length==3&&b[0][0]=="M"&&b[1][0].toUpperCase()=="R"&&b[2][0].toUpperCase()=="Z";for(var k,l,m=i,o=b.length;m<o;m++){d.push(k=[]),l=b[m];if(l[0]!=S.call(l[0])){k[0]=S.call(l[0]);switch(k[0]){case"A":k[1]=l[1],k[2]=l[2],k[3]=l[3],k[4]=l[4],k[5]=l[5],k[6]=+(l[6]+e),k[7]=+(l[7]+f);break;case"V":k[1]=+l[1]+f;break;case"H":k[1]=+l[1]+e;break;case"R":var p=[e,f][n](l.slice(1));for(var q=2,r=p.length;q<r;q++)p[q]=+p[q]+e,p[++q]=+p[q]+f;d.pop(),d=d[n](by(p,j));break;case"M":g=+l[1]+e,h=+l[2]+f;default:for(q=1,r=l.length;q<r;q++)k[q]=+l[q]+(q%2?e:f)}}else if(l[0]=="R")p=[e,f][n](l.slice(1)),d.pop(),d=d[n](by(p,j)),k=["R"][n](l.slice(-2));else for(var s=0,t=l.length;s<t;s++)k[s]=l[s];switch(k[0]){case"Z":e=g,f=h;break;case"H":e=k[1];break;case"V":f=k[1];break;case"M":g=k[k.length-2],h=k[k.length-1];default:e=k[k.length-2],f=k[k.length-1]}}d.toString=a._path2string,c.abs=bJ(d);return d},bM=function(a,b,c,d){return[a,b,c,d,c,d]},bN=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},bO=function(a,b,c,d,e,f,g,h,i,j){var k=B*120/180,l=B/180*(+e||0),m=[],o,p=bv(function(a,b,c){var d=a*w.cos(c)-b*w.sin(c),e=a*w.sin(c)+b*w.cos(c);return{x:d,y:e}});if(!j){o=p(a,b,-l),a=o.x,b=o.y,o=p(h,i,-l),h=o.x,i=o.y;var q=w.cos(B/180*e),r=w.sin(B/180*e),t=(a-h)/2,u=(b-i)/2,v=t*t/(c*c)+u*u/(d*d);v>1&&(v=w.sqrt(v),c=v*c,d=v*d);var x=c*c,y=d*d,A=(f==g?-1:1)*w.sqrt(z((x*y-x*u*u-y*t*t)/(x*u*u+y*t*t))),C=A*c*u/d+(a+h)/2,D=A*-d*t/c+(b+i)/2,E=w.asin(((b-D)/d).toFixed(9)),F=w.asin(((i-D)/d).toFixed(9));E=a<C?B-E:E,F=h<C?B-F:F,E<0&&(E=B*2+E),F<0&&(F=B*2+F),g&&E>F&&(E=E-B*2),!g&&F>E&&(F=F-B*2)}else E=j[0],F=j[1],C=j[2],D=j[3];var G=F-E;if(z(G)>k){var H=F,I=h,J=i;F=E+k*(g&&F>E?1:-1),h=C+c*w.cos(F),i=D+d*w.sin(F),m=bO(h,i,c,d,e,0,g,I,J,[F,H,C,D])}G=F-E;var K=w.cos(E),L=w.sin(E),M=w.cos(F),N=w.sin(F),O=w.tan(G/4),P=4/3*c*O,Q=4/3*d*O,R=[a,b],S=[a+P*L,b-Q*K],T=[h+P*N,i-Q*M],U=[h,i];S[0]=2*R[0]-S[0],S[1]=2*R[1]-S[1];if(j)return[S,T,U][n](m);m=[S,T,U][n](m).join()[s](",");var V=[];for(var W=0,X=m.length;W<X;W++)V[W]=W%2?p(m[W-1],m[W],l).y:p(m[W],m[W+1],l).x;return V},bP=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:A(j,3)*a+A(j,2)*3*i*c+j*3*i*i*e+A(i,3)*g,y:A(j,3)*b+A(j,2)*3*i*d+j*3*i*i*f+A(i,3)*h}},bQ=bv(function(a,b,c,d,e,f,g,h){var i=e-2*c+a-(g-2*e+c),j=2*(c-a)-2*(e-c),k=a-c,l=(-j+w.sqrt(j*j-4*i*k))/2/i,n=(-j-w.sqrt(j*j-4*i*k))/2/i,o=[b,h],p=[a,g],q;z(l)>"1e12"&&(l=.5),z(n)>"1e12"&&(n=.5),l>0&&l<1&&(q=bP(a,b,c,d,e,f,g,h,l),p.push(q.x),o.push(q.y)),n>0&&n<1&&(q=bP(a,b,c,d,e,f,g,h,n),p.push(q.x),o.push(q.y)),i=f-2*d+b-(h-2*f+d),j=2*(d-b)-2*(f-d),k=b-d,l=(-j+w.sqrt(j*j-4*i*k))/2/i,n=(-j-w.sqrt(j*j-4*i*k))/2/i,z(l)>"1e12"&&(l=.5),z(n)>"1e12"&&(n=.5),l>0&&l<1&&(q=bP(a,b,c,d,e,f,g,h,l),p.push(q.x),o.push(q.y)),n>0&&n<1&&(q=bP(a,b,c,d,e,f,g,h,n),p.push(q.x),o.push(q.y));return{min:{x:y[m](0,p),y:y[m](0,o)},max:{x:x[m](0,p),y:x[m](0,o)}}}),bR=a._path2curve=bv(function(a,b){var c=!b&&bz(a);if(!b&&c.curve)return bJ(c.curve);var d=bL(a),e=b&&bL(b),f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},h=function(a,b){var c,d;if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];!(a[0]in{T:1,Q:1})&&(b.qx=b.qy=null);switch(a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"][n](bO[m](0,[b.x,b.y][n](a.slice(1))));break;case"S":c=b.x+(b.x-(b.bx||b.x)),d=b.y+(b.y-(b.by||b.y)),a=["C",c,d][n](a.slice(1));break;case"T":b.qx=b.x+(b.x-(b.qx||b.x)),b.qy=b.y+(b.y-(b.qy||b.y)),a=["C"][n](bN(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"][n](bN(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"][n](bM(b.x,b.y,a[1],a[2]));break;case"H":a=["C"][n](bM(b.x,b.y,a[1],b.y));break;case"V":a=["C"][n](bM(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"][n](bM(b.x,b.y,b.X,b.Y))}return a},i=function(a,b){if(a[b].length>7){a[b].shift();var c=a[b];while(c.length)a.splice(b++,0,["C"][n](c.splice(0,6)));a.splice(b,1),l=x(d.length,e&&e.length||0)}},j=function(a,b,c,f,g){a&&b&&a[g][0]=="M"&&b[g][0]!="M"&&(b.splice(g,0,["M",f.x,f.y]),c.bx=0,c.by=0,c.x=a[g][1],c.y=a[g][2],l=x(d.length,e&&e.length||0))};for(var k=0,l=x(d.length,e&&e.length||0);k<l;k++){d[k]=h(d[k],f),i(d,k),e&&(e[k]=h(e[k],g)),e&&i(e,k),j(d,e,f,g,k),j(e,d,g,f,k);var o=d[k],p=e&&e[k],q=o.length,r=e&&p.length;f.x=o[q-2],f.y=o[q-1],f.bx=Q(o[q-4])||f.x,f.by=Q(o[q-3])||f.y,g.bx=e&&(Q(p[r-4])||g.x),g.by=e&&(Q(p[r-3])||g.y),g.x=e&&p[r-2],g.y=e&&p[r-1]}e||(c.curve=bJ(d));return e?[d,e]:d},null,bJ),bS=a._parseDots=bv(function(b){var c=[];for(var d=0,e=b.length;d<e;d++){var f={},g=b[d].match(/^([^:]*):?([\d\.]*)/);f.color=a.getRGB(g[1]);if(f.color.error)return null;f.color=f.color.hex,g[2]&&(f.offset=g[2]+"%"),c.push(f)}for(d=1,e=c.length-1;d<e;d++)if(!c[d].offset){var h=Q(c[d-1].offset||0),i=0;for(var j=d+1;j<e;j++)if(c[j].offset){i=c[j].offset;break}i||(i=100,j=e),i=Q(i);var k=(i-h)/(j-d+1);for(;d<j;d++)h+=k,c[d].offset=h+"%"}return c}),bT=a._tear=function(a,b){a==b.top&&(b.top=a.prev),a==b.bottom&&(b.bottom=a.next),a.next&&(a.next.prev=a.prev),a.prev&&(a.prev.next=a.next)},bU=a._tofront=function(a,b){b.top!==a&&(bT(a,b),a.next=null,a.prev=b.top,b.top.next=a,b.top=a)},bV=a._toback=function(a,b){b.bottom!==a&&(bT(a,b),a.next=b.bottom,a.prev=null,b.bottom.prev=a,b.bottom=a)},bW=a._insertafter=function(a,b,c){bT(a,c),b==c.top&&(c.top=a),b.next&&(b.next.prev=a),a.next=b.next,a.prev=b,b.next=a},bX=a._insertbefore=function(a,b,c){bT(a,c),b==c.bottom&&(c.bottom=a),b.prev&&(b.prev.next=a),a.prev=b.prev,b.prev=a,a.next=b},bY=a.toMatrix=function(a,b){var c=bI(a),d={_:{transform:p},getBBox:function(){return c}};b$(d,b);return d.matrix},bZ=a.transformPath=function(a,b){return bj(a,bY(a,b))},b$=a._extractTransform=function(b,c){if(c==null)return b._.transform;c=r(c).replace(/\.{3}|\u2026/g,b._.transform||p);var d=a.parseTransformString(c),e=0,f=0,g=0,h=1,i=1,j=b._,k=new cb;j.transform=d||[];if(d)for(var l=0,m=d.length;l<m;l++){var n=d[l],o=n.length,q=r(n[0]).toLowerCase(),s=n[0]!=q,t=s?k.invert():0,u,v,w,x,y;q=="t"&&o==3?s?(u=t.x(0,0),v=t.y(0,0),w=t.x(n[1],n[2]),x=t.y(n[1],n[2]),k.translate(w-u,x-v)):k.translate(n[1],n[2]):q=="r"?o==2?(y=y||b.getBBox(1),k.rotate(n[1],y.x+y.width/2,y.y+y.height/2),e+=n[1]):o==4&&(s?(w=t.x(n[2],n[3]),x=t.y(n[2],n[3]),k.rotate(n[1],w,x)):k.rotate(n[1],n[2],n[3]),e+=n[1]):q=="s"?o==2||o==3?(y=y||b.getBBox(1),k.scale(n[1],n[o-1],y.x+y.width/2,y.y+y.height/2),h*=n[1],i*=n[o-1]):o==5&&(s?(w=t.x(n[3],n[4]),x=t.y(n[3],n[4]),k.scale(n[1],n[2],w,x)):k.scale(n[1],n[2],n[3],n[4]),h*=n[1],i*=n[2]):q=="m"&&o==7&&k.add(n[1],n[2],n[3],n[4],n[5],n[6]),j.dirtyT=1,b.matrix=k}b.matrix=k,j.sx=h,j.sy=i,j.deg=e,j.dx=f=k.e,j.dy=g=k.f,h==1&&i==1&&!e&&j.bbox?(j.bbox.x+=+f,j.bbox.y+=+g):j.dirtyT=1},b_=function(a){var b=a[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":return a.length==4?[b,0,a[2],a[3]]:[b,0];case"s":return a.length==5?[b,1,1,a[3],a[4]]:a.length==3?[b,1,1]:[b,1]}},ca=a._equaliseTransform=function(b,c){c=r(c).replace(/\.{3}|\u2026/g,b),b=a.parseTransformString(b)||[],c=a.parseTransformString(c)||[];var d=x(b.length,c.length),e=[],f=[],g=0,h,i,j,k;for(;g<d;g++){j=b[g]||b_(c[g]),k=c[g]||b_(j);if(j[0]!=k[0]||j[0].toLowerCase()=="r"&&(j[2]!=k[2]||j[3]!=k[3])||j[0].toLowerCase()=="s"&&(j[3]!=k[3]||j[4]!=k[4]))return;e[g]=[],f[g]=[];for(h=0,i=x(j.length,k.length);h<i;h++)h in j&&(e[g][h]=j[h]),h in k&&(f[g][h]=k[h])}return{from:e,to:f}};a._getContainer=function(b,c,d,e){var f;f=e==null&&!a.is(b,"object")?h.doc.getElementById(b):b;if(f!=null){if(f.tagName)return c==null?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:c,height:d};return{container:1,x:b,y:c,width:d,height:e}}},a.pathToRelative=bK,a._engine={},a.path2curve=bR,a.matrix=function(a,b,c,d,e,f){return new cb(a,b,c,d,e,f)},function(b){function d(a){var b=w.sqrt(c(a));a[0]&&(a[0]/=b),a[1]&&(a[1]/=b)}function c(a){return a[0]*a[0]+a[1]*a[1]}b.add=function(a,b,c,d,e,f){var g=[[],[],[]],h=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],i=[[a,c,e],[b,d,f],[0,0,1]],j,k,l,m;a&&a instanceof cb&&(i=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]);for(j=0;j<3;j++)for(k=0;k<3;k++){m=0;for(l=0;l<3;l++)m+=h[j][l]*i[l][k];g[j][k]=m}this.a=g[0][0],this.b=g[1][0],this.c=g[0][1],this.d=g[1][1],this.e=g[0][2],this.f=g[1][2]},b.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new cb(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},b.clone=function(){return new cb(this.a,this.b,this.c,this.d,this.e,this.f)},b.translate=function(a,b){this.add(1,0,0,1,a,b)},b.scale=function(a,b,c,d){b==null&&(b=a),(c||d)&&this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&&this.add(1,0,0,1,-c,-d)},b.rotate=function(b,c,d){b=a.rad(b),c=c||0,d=d||0;var e=+w.cos(b).toFixed(9),f=+w.sin(b).toFixed(9);this.add(e,f,-f,e,c,d),this.add(1,0,0,1,-c,-d)},b.x=function(a,b){return a*this.a+b*this.c+this.e},b.y=function(a,b){return a*this.b+b*this.d+this.f},b.get=function(a){return+this[r.fromCharCode(97+a)].toFixed(4)},b.toString=function(){return a.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},b.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},b.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},b.split=function(){var b={};b.dx=this.e,b.dy=this.f;var e=[[this.a,this.c],[this.b,this.d]];b.scalex=w.sqrt(c(e[0])),d(e[0]),b.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*b.shear,e[1][1]-e[0][1]*b.shear],b.scaley=w.sqrt(c(e[1])),d(e[1]),b.shear/=b.scaley;var f=-e[0][1],g=e[1][1];g<0?(b.rotate=a.deg(w.acos(g)),f<0&&(b.rotate=360-b.rotate)):b.rotate=a.deg(w.asin(f)),b.isSimple=!+b.shear.toFixed(9)&&(b.scalex.toFixed(9)==b.scaley.toFixed(9)||!b.rotate),b.isSuperSimple=!+b.shear.toFixed(9)&&b.scalex.toFixed(9)==b.scaley.toFixed(9)&&!b.rotate,b.noRotation=!+b.shear.toFixed(9)&&!b.rotate;return b},b.toTransformString=function(a){var b=a||this[s]();if(b.isSimple){b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4);return(b.dx||b.dy?"t"+[b.dx,b.dy]:p)+(b.scalex!=1||b.scaley!=1?"s"+[b.scalex,b.scaley,0,0]:p)+(b.rotate?"r"+[b.rotate,0,0]:p)}return"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(cb.prototype);var cc=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);navigator.vendor=="Apple Computer, Inc."&&(cc&&cc[1]<4||navigator.platform.slice(0,2)=="iP")||navigator.vendor=="Google Inc."&&cc&&cc[1]<8?k.safari=function(){var a=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){a.remove()})}:k.safari=be;var cd=function(){this.returnValue=!1},ce=function(){return this.originalEvent.preventDefault()},cf=function(){this.cancelBubble=!0},cg=function(){return this.originalEvent.stopPropagation()},ch=function(){if(h.doc.addEventListener)return function(a,b,c,d){var e=o&&u[b]?u[b]:b,f=function(e){var f=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,i=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,j=e.clientX+i,k=e.clientY+f;if(o&&u[g](b))for(var l=0,m=e.targetTouches&&e.targetTouches.length;l<m;l++)if(e.targetTouches[l].target==a){var n=e;e=e.targetTouches[l],e.originalEvent=n,e.preventDefault=ce,e.stopPropagation=cg;break}return c.call(d,e,j,k)};a.addEventListener(e,f,!1);return function(){a.removeEventListener(e,f,!1);return!0}};if(h.doc.attachEvent)return function(a,b,c,d){var e=function(a){a=a||h.win.event;var b=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,e=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,f=a.clientX+e,g=a.clientY+b;a.preventDefault=a.preventDefault||cd,a.stopPropagation=a.stopPropagation||cf;return c.call(d,a,f,g)};a.attachEvent("on"+b,e);var f=function(){a.detachEvent("on"+b,e);return!0};return f}}(),ci=[],cj=function(a){var b=a.clientX,c=a.clientY,d=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,e=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft,f,g=ci.length;while(g--){f=ci[g];if(o){var i=a.touches.length,j;while(i--){j=a.touches[i];if(j.identifier==f.el._drag.id){b=j.clientX,c=j.clientY,(a.originalEvent?a.originalEvent:a).preventDefault();break}}}else a.preventDefault();var k=f.el.node,l,m=k.nextSibling,n=k.parentNode,p=k.style.display;h.win.opera&&n.removeChild(k),k.style.display="none",l=f.el.paper.getElementByPoint(b,c),k.style.display=p,h.win.opera&&(m?n.insertBefore(k,m):n.appendChild(k)),l&&eve("raphael.drag.over."+f.el.id,f.el,l),b+=e,c+=d,eve("raphael.drag.move."+f.el.id,f.move_scope||f.el,b-f.el._drag.x,c-f.el._drag.y,b,c,a)}},ck=function(b){a.unmousemove(cj).unmouseup(ck);var c=ci.length,d;while(c--)d=ci[c],d.el._drag={},eve("raphael.drag.end."+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,b);ci=[]},cl=a.el={};for(var cm=t.length;cm--;)(function(b){a[b]=cl[b]=function(c,d){a.is(c,"function")&&(this.events=this.events||[],this.events.push({name:b,f:c,unbind:ch(this.shape||this.node||h.doc,b,c,d||this)}));return this},a["un"+b]=cl["un"+b]=function(a){var c=this.events||[],d=c.length;while(d--)if(c[d].name==b&&c[d].f==a){c[d].unbind(),c.splice(d,1),!c.length&&delete this.events;return this}return this}})(t[cm]);cl.data=function(b,c){var d=bb[this.id]=bb[this.id]||{};if(arguments.length==1){if(a.is(b,"object")){for(var e in b)b[g](e)&&this.data(e,b[e]);return this}eve("raphael.data.get."+this.id,this,d[b],b);return d[b]}d[b]=c,eve("raphael.data.set."+this.id,this,c,b);return this},cl.removeData=function(a){a==null?bb[this.id]={}:bb[this.id]&&delete bb[this.id][a];return this},cl.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},cl.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var cn=[];cl.drag=function(b,c,d,e,f,g){function i(i){(i.originalEvent||i).preventDefault();var j=h.doc.documentElement.scrollTop||h.doc.body.scrollTop,k=h.doc.documentElement.scrollLeft||h.doc.body.scrollLeft;this._drag.x=i.clientX+k,this._drag.y=i.clientY+j,this._drag.id=i.identifier,!ci.length&&a.mousemove(cj).mouseup(ck),ci.push({el:this,move_scope:e,start_scope:f,end_scope:g}),c&&eve.on("raphael.drag.start."+this.id,c),b&&eve.on("raphael.drag.move."+this.id,b),d&&eve.on("raphael.drag.end."+this.id,d),eve("raphael.drag.start."+this.id,f||e||this,i.clientX+k,i.clientY+j,i)}this._drag={},cn.push({el:this,start:i}),this.mousedown(i);return this},cl.onDragOver=function(a){a?eve.on("raphael.drag.over."+this.id,a):eve.unbind("raphael.drag.over."+this.id)},cl.undrag=function(){var b=cn.length;while(b--)cn[b].el==this&&(this.unmousedown(cn[b].start),cn.splice(b,1),eve.unbind("raphael.drag.*."+this.id));!cn.length&&a.unmousemove(cj).unmouseup(ck)},k.circle=function(b,c,d){var e=a._engine.circle(this,b||0,c||0,d||0);this.__set__&&this.__set__.push(e);return e},k.rect=function(b,c,d,e,f){var g=a._engine.rect(this,b||0,c||0,d||0,e||0,f||0);this.__set__&&this.__set__.push(g);return g},k.ellipse=function(b,c,d,e){var f=a._engine.ellipse(this,b||0,c||0,d||0,e||0);this.__set__&&this.__set__.push(f);return f},k.path=function(b){b&&!a.is(b,D)&&!a.is(b[0],E)&&(b+=p);var c=a._engine.path(a.format[m](a,arguments),this);this.__set__&&this.__set__.push(c);return c},k.image=function(b,c,d,e,f){var g=a._engine.image(this,b||"about:blank",c||0,d||0,e||0,f||0);this.__set__&&this.__set__.push(g);return g},k.text=function(b,c,d){var e=a._engine.text(this,b||0,c||0,r(d));this.__set__&&this.__set__.push(e);return e},k.set=function(b){!a.is(b,"array")&&(b=Array.prototype.splice.call(arguments,0,arguments.length));var c=new cG(b);this.__set__&&this.__set__.push(c);return c},k.setStart=function(a){this.__set__=a||this.set()},k.setFinish=function(a){var b=this.__set__;delete this.__set__;return b},k.setSize=function(b,c){return a._engine.setSize.call(this,b,c)},k.setViewBox=function(b,c,d,e,f){return a._engine.setViewBox.call(this,b,c,d,e,f)},k.top=k.bottom=null,k.raphael=a;var co=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,i=b.top+(h.win.pageYOffset||e.scrollTop||d.scrollTop)-f,j=b.left+(h.win.pageXOffset||e.scrollLeft||d.scrollLeft)-g;return{y:i,x:j}};k.getElementByPoint=function(a,b){var c=this,d=c.canvas,e=h.doc.elementFromPoint(a,b);if(h.win.opera&&e.tagName=="svg"){var f=co(d),g=d.createSVGRect();g.x=a-f.x,g.y=b-f.y,g.width=g.height=1;var i=d.getIntersectionList(g,null);i.length&&(e=i[i.length-1])}if(!e)return null;while(e.parentNode&&e!=d.parentNode&&!e.raphael)e=e.parentNode;e==c.canvas.parentNode&&(e=d),e=e&&e.raphael?c.getById(e.raphaelid):null;return e},k.getById=function(a){var b=this.bottom;while(b){if(b.id==a)return b;b=b.next}return null},k.forEach=function(a,b){var c=this.bottom;while(c){if(a.call(b,c)===!1)return this;c=c.next}return this},k.getElementsByPoint=function(a,b){var c=this.set();this.forEach(function(d){d.isPointInside(a,b)&&c.push(d)});return c},cl.isPointInside=function(b,c){var d=this.realPath=this.realPath||bi[this.type](this);return a.isPointInsidePath(d,b,c)},cl.getBBox=function(a){if(this.removed)return{};var b=this._;if(a){if(b.dirty||!b.bboxwt)this.realPath=bi[this.type](this),b.bboxwt=bI(this.realPath),b.bboxwt.toString=cq,b.dirty=0;return b.bboxwt}if(b.dirty||b.dirtyT||!b.bbox){if(b.dirty||!this.realPath)b.bboxwt=0,this.realPath=bi[this.type](this);b.bbox=bI(bj(this.realPath,this.matrix)),b.bbox.toString=cq,b.dirty=b.dirtyT=0}return b.bbox},cl.clone=function(){if(this.removed)return null;var a=this.paper[this.type]().attr(this.attr());this.__set__&&this.__set__.push(a);return a},cl.glow=function(a){if(this.type=="text")return null;a=a||{};var b={width:(a.width||10)+(+this.attr("stroke-width")||1),fill:a.fill||!1,opacity:a.opacity||.5,offsetx:a.offsetx||0,offsety:a.offsety||0,color:a.color||"#000"},c=b.width/2,d=this.paper,e=d.set(),f=this.realPath||bi[this.type](this);f=this.matrix?bj(f,this.matrix):f;for(var g=1;g<c+1;g++)e.push(d.path(f).attr({stroke:b.color,fill:b.fill?b.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(b.width/c*g).toFixed(3),opacity:+(b.opacity/c).toFixed(3)}));return e.insertBefore(this).translate(b.offsetx,b.offsety)};var cr={},cs=function(b,c,d,e,f,g,h,i,j){return j==null?bB(b,c,d,e,f,g,h,i):a.findDotsAtSegment(b,c,d,e,f,g,h,i,bC(b,c,d,e,f,g,h,i,j))},ct=function(b,c){return function(d,e,f){d=bR(d);var g,h,i,j,k="",l={},m,n=0;for(var o=0,p=d.length;o<p;o++){i=d[o];if(i[0]=="M")g=+i[1],h=+i[2];else{j=cs(g,h,i[1],i[2],i[3],i[4],i[5],i[6]);if(n+j>e){if(c&&!l.start){m=cs(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),k+=["C"+m.start.x,m.start.y,m.m.x,m.m.y,m.x,m.y];if(f)return k;l.start=k,k=["M"+m.x,m.y+"C"+m.n.x,m.n.y,m.end.x,m.end.y,i[5],i[6]].join(),n+=j,g=+i[5],h=+i[6];continue}if(!b&&!c){m=cs(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n);return{x:m.x,y:m.y,alpha:m.alpha}}}n+=j,g=+i[5],h=+i[6]}k+=i.shift()+i}l.end=k,m=b?n:c?l:a.findDotsAtSegment(g,h,i[0],i[1],i[2],i[3],i[4],i[5],1),m.alpha&&(m={x:m.x,y:m.y,alpha:m.alpha});return m}},cu=ct(1),cv=ct(),cw=ct(0,1);a.getTotalLength=cu,a.getPointAtLength=cv,a.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return cw(a,b).end;var d=cw(a,c,1);return b?cw(d,b).end:d},cl.getTotalLength=function(){if(this.type=="path"){if(this.node.getTotalLength)return this.node.getTotalLength();return cu(this.attrs.path)}},cl.getPointAtLength=function(a){if(this.type=="path")return cv(this.attrs.path,a)},cl.getSubpath=function(b,c){if(this.type=="path")return a.getSubpath(this.attrs.path,b,c)};var cx=a.easing_formulas={linear:function(a){return a},"<":function(a){return A(a,1.7)},">":function(a){return A(a,.48)},"<>":function(a){var b=.48-a/1.04,c=w.sqrt(.1734+b*b),d=c-b,e=A(z(d),1/3)*(d<0?-1:1),f=-c-b,g=A(z(f),1/3)*(f<0?-1:1),h=e+g+.5;return(1-h)*3*h*h+h*h*h},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a=a-1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){if(a==!!a)return a;return A(2,-10*a)*w.sin((a-.075)*2*B/.3)+1},bounce:function(a){var b=7.5625,c=2.75,d;a<1/c?d=b*a*a:a<2/c?(a-=1.5/c,d=b*a*a+.75):a<2.5/c?(a-=2.25/c,d=b*a*a+.9375):(a-=2.625/c,d=b*a*a+.984375);return d}};cx.easeIn=cx["ease-in"]=cx["<"],cx.easeOut=cx["ease-out"]=cx[">"],cx.easeInOut=cx["ease-in-out"]=cx["<>"],cx["back-in"]=cx.backIn,cx["back-out"]=cx.backOut;var cy=[],cz=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){setTimeout(a,16)},cA=function(){var b=+(new Date),c=0;for(;c<cy.length;c++){var d=cy[c];if(d.el.removed||d.paused)continue;var e=b-d.start,f=d.ms,h=d.easing,i=d.from,j=d.diff,k=d.to,l=d.t,m=d.el,o={},p,r={},s;d.initstatus?(e=(d.initstatus*d.anim.top-d.prev)/(d.percent-d.prev)*f,d.status=d.initstatus,delete d.initstatus,d.stop&&cy.splice(c--,1)):d.status=(d.prev+(d.percent-d.prev)*(e/f))/d.anim.top;if(e<0)continue;if(e<f){var t=h(e/f);for(var u in i)if(i[g](u)){switch(U[u]){case C:p=+i[u]+t*f*j[u];break;case"colour":p="rgb("+[cB(O(i[u].r+t*f*j[u].r)),cB(O(i[u].g+t*f*j[u].g)),cB(O(i[u].b+t*f*j[u].b))].join(",")+")";break;case"path":p=[];for(var v=0,w=i[u].length;v<w;v++){p[v]=[i[u][v][0]];for(var x=1,y=i[u][v].length;x<y;x++)p[v][x]=+i[u][v][x]+t*f*j[u][v][x];p[v]=p[v].join(q)}p=p.join(q);break;case"transform":if(j[u].real){p=[];for(v=0,w=i[u].length;v<w;v++){p[v]=[i[u][v][0]];for(x=1,y=i[u][v].length;x<y;x++)p[v][x]=i[u][v][x]+t*f*j[u][v][x]}}else{var z=function(a){return+i[u][a]+t*f*j[u][a]};p=[["m",z(0),z(1),z(2),z(3),z(4),z(5)]]}break;case"csv":if(u=="clip-rect"){p=[],v=4;while(v--)p[v]=+i[u][v]+t*f*j[u][v]}break;default:var A=[][n](i[u]);p=[],v=m.paper.customAttributes[u].length;while(v--)p[v]=+A[v]+t*f*j[u][v]}o[u]=p}m.attr(o),function(a,b,c){setTimeout(function(){eve("raphael.anim.frame."+a,b,c)})}(m.id,m,d.anim)}else{(function(b,c,d){setTimeout(function(){eve("raphael.anim.frame."+c.id,c,d),eve("raphael.anim.finish."+c.id,c,d),a.is(b,"function")&&b.call(c)})})(d.callback,m,d.anim),m.attr(k),cy.splice(c--,1);if(d.repeat>1&&!d.next){for(s in k)k[g](s)&&(r[s]=d.totalOrigin[s]);d.el.attr(r),cE(d.anim,d.el,d.anim.percents[0],null,d.totalOrigin,d.repeat-1)}d.next&&!d.stop&&cE(d.anim,d.el,d.next,null,d.totalOrigin,d.repeat)}}a.svg&&m&&m.paper&&m.paper.safari(),cy.length&&cz(cA)},cB=function(a){return a>255?255:a<0?0:a};cl.animateWith=function(b,c,d,e,f,g){var h=this;if(h.removed){g&&g.call(h);return h}var i=d instanceof cD?d:a.animation(d,e,f,g),j,k;cE(i,h,i.percents[0],null,h.attr());for(var l=0,m=cy.length;l<m;l++)if(cy[l].anim==c&&cy[l].el==b){cy[m-1].start=cy[l].start;break}return h},cl.onAnimation=function(a){a?eve.on("raphael.anim.frame."+this.id,a):eve.unbind("raphael.anim.frame."+this.id);return this},cD.prototype.delay=function(a){var b=new cD(this.anim,this.ms);b.times=this.times,b.del=+a||0;return b},cD.prototype.repeat=function(a){var b=new cD(this.anim,this.ms);b.del=this.del,b.times=w.floor(x(a,0))||1;return b},a.animation=function(b,c,d,e){if(b instanceof cD)return b;if(a.is(d,"function")||!d)e=e||d||null,d=null;b=Object(b),c=+c||0;var f={},h,i;for(i in b)b[g](i)&&Q(i)!=i&&Q(i)+"%"!=i&&(h=!0,f[i]=b[i]);if(!h)return new cD(b,c);d&&(f.easing=d),e&&(f.callback=e);return new cD({100:f},c)},cl.animate=function(b,c,d,e){var f=this;if(f.removed){e&&e.call(f);return f}var g=b instanceof cD?b:a.animation(b,c,d,e);cE(g,f,g.percents[0],null,f.attr());return f},cl.setTime=function(a,b){a&&b!=null&&this.status(a,y(b,a.ms)/a.ms);return this},cl.status=function(a,b){var c=[],d=0,e,f;if(b!=null){cE(a,this,-1,y(b,1));return this}e=cy.length;for(;d<e;d++){f=cy[d];if(f.el.id==this.id&&(!a||f.anim==a)){if(a)return f.status;c.push({anim:f.anim,status:f.status})}}if(a)return 0;return c},cl.pause=function(a){for(var b=0;b<cy.length;b++)cy[b].el.id==this.id&&(!a||cy[b].anim==a)&&eve("raphael.anim.pause."+this.id,this,cy[b].anim)!==!1&&(cy[b].paused=!0);return this},cl.resume=function(a){for(var b=0;b<cy.length;b++)if(cy[b].el.id==this.id&&(!a||cy[b].anim==a)){var c=cy[b];eve("raphael.anim.resume."+this.id,this,c.anim)!==!1&&(delete c.paused,this.status(c.anim,c.status))}return this},cl.stop=function(a){for(var b=0;b<cy.length;b++)cy[b].el.id==this.id&&(!a||cy[b].anim==a)&&eve("raphael.anim.stop."+this.id,this,cy[b].anim)!==!1&&cy.splice(b--,1);return this},eve.on("raphael.remove",cF),eve.on("raphael.clear",cF),cl.toString=function(){return"Raphaël’s object"};var cG=function(a){this.items=[],this.length=0,this.type="set";if(a)for(var b=0,c=a.length;b<c;b++)a[b]&&(a[b].constructor==cl.constructor||a[b].constructor==cG)&&(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},cH=cG.prototype;cH.push=function(){var a,b;for(var c=0,d=arguments.length;c<d;c++)a=arguments[c],a&&(a.constructor==cl.constructor||a.constructor==cG)&&(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},cH.pop=function(){this.length&&delete this[this.length--];return this.items.pop()},cH.forEach=function(a,b){for(var c=0,d=this.items.length;c<d;c++)if(a.call(b,this.items[c],c)===!1)return this;return this};for(var cI in cl)cl[g](cI)&&(cH[cI]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a][m](c,b)})}}(cI));cH.attr=function(b,c){if(b&&a.is(b,E)&&a.is(b[0],"object"))for(var d=0,e=b.length;d<e;d++)this.items[d].attr(b[d]);else for(var f=0,g=this.items.length;f<g;f++)this.items[f].attr(b,c);return this},cH.clear=function(){while(this.length)this.pop()},cH.splice=function(a,b,c){a=a<0?x(this.length+a,0):a,b=x(0,y(this.length-a,b));var d=[],e=[],f=[],g;for(g=2;g<arguments.length;g++)f.push(arguments[g]);for(g=0;g<b;g++)e.push(this[a+g]);for(;g<this.length-a;g++)d.push(this[a+g]);var h=f.length;for(g=0;g<h+d.length;g++)this.items[a+g]=this[a+g]=g<h?f[g]:d[g-h];g=this.items.length=this.length-=b-h;while(this[g])delete this[g++];return new cG(e)},cH.exclude=function(a){for(var b=0,c=this.length;b<c;b++)if(this[b]==a){this.splice(b,1);return!0}},cH.animate=function(b,c,d,e){(a.is(d,"function")||!d)&&(e=d||null);var f=this.items.length,g=f,h,i=this,j;if(!f)return this;e&&(j=function(){!--f&&e.call(i)}),d=a.is(d,D)?d:j;var k=a.animation(b,c,d,j);h=this.items[--g].animate(k);while(g--)this.items[g]&&!this.items[g].removed&&this.items[g].animateWith(h,k,k);return this},cH.insertAfter=function(a){var b=this.items.length;while(b--)this.items[b].insertAfter(a);return this},cH.getBBox=function(){var a=[],b=[],c=[],d=[];for(var e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}a=y[m](0,a),b=y[m](0,b),c=x[m](0,c),d=x[m](0,d);return{x:a,y:b,x2:c,y2:d,width:c-a,height:d-b}},cH.clone=function(a){a=new cG;for(var b=0,c=this.items.length;b<c;b++)a.push(this.items[b].clone());return a},cH.toString=function(){return"Raphaël‘s set"},a.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face["font-family"];for(var d in a.face)a.face[g](d)&&(b.face[d]=a.face[d]);this.fonts[c]?this.fonts[c].push(b):this.fonts[c]=[b];if(!a.svg){b.face["units-per-em"]=R(a.face["units-per-em"],10);for(var e in a.glyphs)if(a.glyphs[g](e)){var f=a.glyphs[e];b.glyphs[e]={w:f.w,k:{},d:f.d&&"M"+f.d.replace(/[mlcxtrv]/g,function(a){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[a]||"M"})+"z"};if(f.k)for(var h in f.k)f[g](h)&&(b.glyphs[e].k[h]=f.k[h])}}return a},k.getFont=function(b,c,d,e){e=e||"normal",d=d||"normal",c=+c||{normal:400,bold:700,lighter:300,bolder:800}[c]||400;if(!!a.fonts){var f=a.fonts[b];if(!f){var h=new RegExp("(^|\\s)"+b.replace(/[^\w\d\s+!~.:_-]/g,p)+"(\\s|$)","i");for(var i in a.fonts)if(a.fonts[g](i)&&h.test(i)){f=a.fonts[i];break}}var j;if(f)for(var k=0,l=f.length;k<l;k++){j=f[k];if(j.face["font-weight"]==c&&(j.face["font-style"]==d||!j.face["font-style"])&&j.face["font-stretch"]==e)break}return j}},k.print=function(b,d,e,f,g,h,i){h=h||"middle",i=x(y(i||0,1),-1);var j=r(e)[s](p),k=0,l=0,m=p,n;a.is(f,e)&&(f=this.getFont(f));if(f){n=(g||16)/f.face["units-per-em"];var o=f.face.bbox[s](c),q=+o[0],t=o[3]-o[1],u=0,v=+o[1]+(h=="baseline"?t+ +f.face.descent:t/2);for(var w=0,z=j.length;w<z;w++){if(j[w]=="\n")k=0,B=0,l=0,u+=t;else{var A=l&&f.glyphs[j[w-1]]||{},B=f.glyphs[j[w]];k+=l?(A.w||f.w)+(A.k&&A.k[j[w]]||0)+f.w*i:0,l=1}B&&B.d&&(m+=a.transformPath(B.d,["t",k*n,u*n,"s",n,n,q,v,"t",(b-q)/n,(d-v)/n]))}}return this.path(m).attr({fill:"#000",stroke:"none"})},k.add=function(b){if(a.is(b,"array")){var c=this.set(),e=0,f=b.length,h;for(;e<f;e++)h=b[e]||{},d[g](h.type)&&c.push(this[h.type]().attr(h))}return c},a.format=function(b,c){var d=a.is(c,E)?[0][n](c):arguments;b&&a.is(b,D)&&d.length-1&&(b=b.replace(e,function(a,b){return d[++b]==null?p:d[b]}));return b||p},a.fullfill=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),typeof e=="function"&&f&&(e=e()))}),e=(e==null||e==d?a:e)+"";return e};return function(b,d){return String(b).replace(a,function(a,b){return c(a,b,d)})}}(),a.ninja=function(){i.was?h.win.Raphael=i.is:delete Raphael;return a},a.st=cH,function(b,c,d){function e(){/in/.test(b.readyState)?setTimeout(e,9):a.eve("raphael.DOMload")}b.readyState==null&&b.addEventListener&&(b.addEventListener(c,d=function(){b.removeEventListener(c,d,!1),b.readyState="complete"},!1),b.readyState="loading"),e()}(document,"DOMContentLoaded"),i.was?h.win.Raphael=a:Raphael=a,eve.on("raphael.DOMload",function(){b=!0})}(),window.Raphael.svg&&function(a){var b="hasOwnProperty",c=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.abs,i=f.pow,j=/[, ]+/,k=a.eve,l="",m=" ",n="http://www.w3.org/1999/xlink",o={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},p={};a.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var q=function(d,e){if(e){typeof d=="string"&&(d=q(d));for(var f in e)e[b](f)&&(f.substring(0,6)=="xlink:"?d.setAttributeNS(n,f.substring(6),c(e[f])):d.setAttribute(f,c(e[f])))}else d=a._g.doc.createElementNS("http://www.w3.org/2000/svg",d),d.style&&(d.style.webkitTapHighlightColor="rgba(0,0,0,0)");return d},r=function(b,e){var j="linear",k=b.id+e,m=.5,n=.5,o=b.node,p=b.paper,r=o.style,s=a._g.doc.getElementById(k);if(!s){e=c(e).replace(a._radial_gradient,function(a,b,c){j="radial";if(b&&c){m=d(b),n=d(c);var e=(n>.5)*2-1;i(m-.5,2)+i(n-.5,2)>.25&&(n=f.sqrt(.25-i(m-.5,2))*e+.5)&&n!=.5&&(n=n.toFixed(5)-1e-5*e)}return l}),e=e.split(/\s*\-\s*/);if(j=="linear"){var t=e.shift();t=-d(t);if(isNaN(t))return null;var u=[0,0,f.cos(a.rad(t)),f.sin(a.rad(t))],v=1/(g(h(u[2]),h(u[3]))||1);u[2]*=v,u[3]*=v,u[2]<0&&(u[0]=-u[2],u[2]=0),u[3]<0&&(u[1]=-u[3],u[3]=0)}var w=a._parseDots(e);if(!w)return null;k=k.replace(/[\(\)\s,\xb0#]/g,"_"),b.gradient&&k!=b.gradient.id&&(p.defs.removeChild(b.gradient),delete b.gradient);if(!b.gradient){s=q(j+"Gradient",{id:k}),b.gradient=s,q(s,j=="radial"?{fx:m,fy:n}:{x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientTransform:b.matrix.invert()}),p.defs.appendChild(s);for(var x=0,y=w.length;x<y;x++)s.appendChild(q("stop",{offset:w[x].offset?w[x].offset:x?"100%":"0%","stop-color":w[x].color||"#fff"}))}}q(o,{fill:"url(#"+k+")",opacity:1,"fill-opacity":1}),r.fill=l,r.opacity=1,r.fillOpacity=1;return 1},s=function(a){var b=a.getBBox(1);q(a.pattern,{patternTransform:a.matrix.invert()+" translate("+b.x+","+b.y+")"})},t=function(d,e,f){if(d.type=="path"){var g=c(e).toLowerCase().split("-"),h=d.paper,i=f?"end":"start",j=d.node,k=d.attrs,m=k["stroke-width"],n=g.length,r="classic",s,t,u,v,w,x=3,y=3,z=5;while(n--)switch(g[n]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":r=g[n];break;case"wide":y=5;break;case"narrow":y=2;break;case"long":x=5;break;case"short":x=2}r=="open"?(x+=2,y+=2,z+=2,u=1,v=f?4:1,w={fill:"none",stroke:k.stroke}):(v=u=x/2,w={fill:k.stroke,stroke:"none"}),d._.arrows?f?(d._.arrows.endPath&&p[d._.arrows.endPath]--,d._.arrows.endMarker&&p[d._.arrows.endMarker]--):(d._.arrows.startPath&&p[d._.arrows.startPath]--,d._.arrows.startMarker&&p[d._.arrows.startMarker]--):d._.arrows={};if(r!="none"){var A="raphael-marker-"+r,B="raphael-marker-"+i+r+x+y;a._g.doc.getElementById(A)?p[A]++:(h.defs.appendChild(q(q("path"),{"stroke-linecap":"round",d:o[r],id:A})),p[A]=1);var C=a._g.doc.getElementById(B),D;C?(p[B]++,D=C.getElementsByTagName("use")[0]):(C=q(q("marker"),{id:B,markerHeight:y,markerWidth:x,orient:"auto",refX:v,refY:y/2}),D=q(q("use"),{"xlink:href":"#"+A,transform:(f?"rotate(180 "+x/2+" "+y/2+") ":l)+"scale("+x/z+","+y/z+")","stroke-width":(1/((x/z+y/z)/2)).toFixed(4)}),C.appendChild(D),h.defs.appendChild(C),p[B]=1),q(D,w);var F=u*(r!="diamond"&&r!="oval");f?(s=d._.arrows.startdx*m||0,t=a.getTotalLength(k.path)-F*m):(s=F*m,t=a.getTotalLength(k.path)-(d._.arrows.enddx*m||0)),w={},w["marker-"+i]="url(#"+B+")";if(t||s)w.d=Raphael.getSubpath(k.path,s,t);q(j,w),d._.arrows[i+"Path"]=A,d._.arrows[i+"Marker"]=B,d._.arrows[i+"dx"]=F,d._.arrows[i+"Type"]=r,d._.arrows[i+"String"]=e}else f?(s=d._.arrows.startdx*m||0,t=a.getTotalLength(k.path)-s):(s=0,t=a.getTotalLength(k.path)-(d._.arrows.enddx*m||0)),d._.arrows[i+"Path"]&&q(j,{d:Raphael.getSubpath(k.path,s,t)}),delete d._.arrows[i+"Path"],delete d._.arrows[i+"Marker"],delete d._.arrows[i+"dx"],delete d._.arrows[i+"Type"],delete d._.arrows[i+"String"];for(w in p)if(p[b](w)&&!p[w]){var G=a._g.doc.getElementById(w);G&&G.parentNode.removeChild(G)}}},u={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},v=function(a,b,d){b=u[c(b).toLowerCase()];if(b){var e=a.attrs["stroke-width"]||"1",f={round:e,square:e,butt:0}[a.attrs["stroke-linecap"]||d["stroke-linecap"]]||0,g=[],h=b.length;while(h--)g[h]=b[h]*e+(h%2?1:-1)*f;q(a.node,{"stroke-dasharray":g.join(",")})}},w=function(d,f){var i=d.node,k=d.attrs,m=i.style.visibility;i.style.visibility="hidden";for(var o in f)if(f[b](o)){if(!a._availableAttrs[b](o))continue;var p=f[o];k[o]=p;switch(o){case"blur":d.blur(p);break;case"href":case"title":case"target":var u=i.parentNode;if(u.tagName.toLowerCase()!="a"){var w=q("a");u.insertBefore(w,i),w.appendChild(i),u=w}o=="target"?u.setAttributeNS(n,"show",p=="blank"?"new":p):u.setAttributeNS(n,o,p);break;case"cursor":i.style.cursor=p;break;case"transform":d.transform(p);break;case"arrow-start":t(d,p);break;case"arrow-end":t(d,p,1);break;case"clip-rect":var x=c(p).split(j);if(x.length==4){d.clip&&d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);var z=q("clipPath"),A=q("rect");z.id=a.createUUID(),q(A,{x:x[0],y:x[1],width:x[2],height:x[3]}),z.appendChild(A),d.paper.defs.appendChild(z),q(i,{"clip-path":"url(#"+z.id+")"}),d.clip=A}if(!p){var B=i.getAttribute("clip-path");if(B){var C=a._g.doc.getElementById(B.replace(/(^url\(#|\)$)/g,l));C&&C.parentNode.removeChild(C),q(i,{"clip-path":l}),delete d.clip}}break;case"path":d.type=="path"&&(q(i,{d:p?k.path=a._pathToAbsolute(p):"M0,0"}),d._.dirty=1,d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1)));break;case"width":i.setAttribute(o,p),d._.dirty=1;if(k.fx)o="x",p=k.x;else break;case"x":k.fx&&(p=-k.x-(k.width||0));case"rx":if(o=="rx"&&d.type=="rect")break;case"cx":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"height":i.setAttribute(o,p),d._.dirty=1;if(k.fy)o="y",p=k.y;else break;case"y":k.fy&&(p=-k.y-(k.height||0));case"ry":if(o=="ry"&&d.type=="rect")break;case"cy":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"r":d.type=="rect"?q(i,{rx:p,ry:p}):i.setAttribute(o,p),d._.dirty=1;break;case"src":d.type=="image"&&i.setAttributeNS(n,"href",p);break;case"stroke-width":if(d._.sx!=1||d._.sy!=1)p/=g(h(d._.sx),h(d._.sy))||1;d.paper._vbSize&&(p*=d.paper._vbSize),i.setAttribute(o,p),k["stroke-dasharray"]&&v(d,k["stroke-dasharray"],f),d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"stroke-dasharray":v(d,p,f);break;case"fill":var D=c(p).match(a._ISURL);if(D){z=q("pattern");var F=q("image");z.id=a.createUUID(),q(z,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),q(F,{x:0,y:0,"xlink:href":D[1]}),z.appendChild(F),function(b){a._preload(D[1],function(){var a=this.offsetWidth,c=this.offsetHeight;q(b,{width:a,height:c}),q(F,{width:a,height:c}),d.paper.safari()})}(z),d.paper.defs.appendChild(z),q(i,{fill:"url(#"+z.id+")"}),d.pattern=z,d.pattern&&s(d);break}var G=a.getRGB(p);if(!G.error)delete f.gradient,delete k.gradient,!a.is(k.opacity,"undefined")&&a.is(f.opacity,"undefined")&&q(i,{opacity:k.opacity}),!a.is(k["fill-opacity"],"undefined")&&a.is(f["fill-opacity"],"undefined")&&q(i,{"fill-opacity":k["fill-opacity"]});else if((d.type=="circle"||d.type=="ellipse"||c(p).charAt()!="r")&&r(d,p)){if("opacity"in k||"fill-opacity"in k){var H=a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l));if(H){var I=H.getElementsByTagName("stop");q(I[I.length-1],{"stop-opacity":("opacity"in k?k.opacity:1)*("fill-opacity"in k?k["fill-opacity"]:1)})}}k.gradient=p,k.fill="none";break}G[b]("opacity")&&q(i,{"fill-opacity":G.opacity>1?G.opacity/100:G.opacity});case"stroke":G=a.getRGB(p),i.setAttribute(o,G.hex),o=="stroke"&&G[b]("opacity")&&q(i,{"stroke-opacity":G.opacity>1?G.opacity/100:G.opacity}),o=="stroke"&&d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"gradient":(d.type=="circle"||d.type=="ellipse"||c(p).charAt()!="r")&&r(d,p);break;case"opacity":k.gradient&&!k[b]("stroke-opacity")&&q(i,{"stroke-opacity":p>1?p/100:p});case"fill-opacity":if(k.gradient){H=a._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l)),H&&(I=H.getElementsByTagName("stop"),q(I[I.length-1],{"stop-opacity":p}));break};default:o=="font-size"&&(p=e(p,10)+"px");var J=o.replace(/(\-.)/g,function(a){return a.substring(1).toUpperCase()});i.style[J]=p,d._.dirty=1,i.setAttribute(o,p)}}y(d,f),i.style.visibility=m},x=1.2,y=function(d,f){if(d.type=="text"&&!!(f[b]("text")||f[b]("font")||f[b]("font-size")||f[b]("x")||f[b]("y"))){var g=d.attrs,h=d.node,i=h.firstChild?e(a._g.doc.defaultView.getComputedStyle(h.firstChild,l).getPropertyValue("font-size"),10):10;if(f[b]("text")){g.text=f.text;while(h.firstChild)h.removeChild(h.firstChild);var j=c(f.text).split("\n"),k=[],m;for(var n=0,o=j.length;n<o;n++)m=q("tspan"),n&&q(m,{dy:i*x,x:g.x}),m.appendChild(a._g.doc.createTextNode(j[n])),h.appendChild(m),k[n]=m}else{k=h.getElementsByTagName("tspan");for(n=0,o=k.length;n<o;n++)n?q(k[n],{dy:i*x,x:g.x}):q(k[0],{dy:0})}q(h,{x:g.x,y:g.y}),d._.dirty=1;var p=d._getBBox(),r=g.y-(p.y+p.height/2);r&&a.is(r,"finite")&&q(k[0],{dy:r})}},z=function(b,c){var d=0,e=0;this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.matrix=a.matrix(),this.realPath=null,this.paper=c,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!c.bottom&&(c.bottom=this),this.prev=c.top,c.top&&(c.top.next=this),c.top=this,this.next=null},A=a.el;z.prototype=A,A.constructor=z,a._engine.path=function(a,b){var c=q("path");b.canvas&&b.canvas.appendChild(c);var d=new z(c,b);d.type="path",w(d,{fill:"none",stroke:"#000",path:a});return d},A.rotate=function(a,b,e){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1]),e=d(a[2])),a=d(a[0]),e==null&&(b=e);if(b==null||e==null){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}this.transform(this._.transform.concat([["r",a,b,e]]));return this},A.scale=function(a,b,e,f){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1]),e=d(a[2]),f=d(a[3])),a=d(a[0]),b==null&&(b=a),f==null&&(e=f);if(e==null||f==null)var g=this.getBBox(1);e=e==null?g.x+g.width/2:e,f=f==null?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,b,e,f]]));return this},A.translate=function(a,b){if(this.removed)return this;a=c(a).split(j),a.length-1&&(b=d(a[1])),a=d(a[0])||0,b=+b||0,this.transform(this._.transform.concat([["t",a,b]]));return this},A.transform=function(c){var d=this._;if(c==null)return d.transform;a._extractTransform(this,c),this.clip&&q(this.clip,{transform:this.matrix.invert()}),this.pattern&&s(this),this.node&&q(this.node,{transform:this.matrix});if(d.sx!=1||d.sy!=1){var e=this.attrs[b]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":e})}return this},A.hide=function(){!this.removed&&this.paper.safari(this.node.style.display="none");return this},A.show=function(){!this.removed&&this.paper.safari(this.node.style.display="");return this},A.remove=function(){if(!this.removed&&!!this.node.parentNode){var b=this.paper;b.__set__&&b.__set__.exclude(this),k.unbind("raphael.*.*."+this.id),this.gradient&&b.defs.removeChild(this.gradient),a._tear(this,b),this.node.parentNode.tagName.toLowerCase()=="a"?this.node.parentNode.parentNode.removeChild(this.node.parentNode):this.node.parentNode.removeChild(this.node);for(var c in this)this[c]=typeof this[c]=="function"?a._removedFactory(c):null;this.removed=!0}},A._getBBox=function(){if(this.node.style.display=="none"){this.show();var a=!0}var b={};try{b=this.node.getBBox()}catch(c){}finally{b=b||{}}a&&this.hide();return b},A.attr=function(c,d){if(this.removed)return this;if(c==null){var e={};for(var f in this.attrs)this.attrs[b](f)&&(e[f]=this.attrs[f]);e.gradient&&e.fill=="none"&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform;return e}if(d==null&&a.is(c,"string")){if(c=="fill"&&this.attrs.fill=="none"&&this.attrs.gradient)return this.attrs.gradient;if(c=="transform")return this._.transform;var g=c.split(j),h={};for(var i=0,l=g.length;i<l;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is(this.paper.customAttributes[c],"function")?h[c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];return l-1?h:h[g[0]]}if(d==null&&a.is(c,"array")){h={};for(i=0,l=c.length;i<l;i++)h[c[i]]=this.attr(c[i]);return h}if(d!=null){var m={};m[c]=d}else c!=null&&a.is(c,"object")&&(m=c);for(var n in m)k("raphael.attr."+n+"."+this.id,this,m[n]);for(n in this.paper.customAttributes)if(this.paper.customAttributes[b](n)&&m[b](n)&&a.is(this.paper.customAttributes[n],"function")){var o=this.paper.customAttributes[n].apply(this,[].concat(m[n]));this.attrs[n]=m[n];for(var p in o)o[b](p)&&(m[p]=o[p])}w(this,m);return this},A.toFront=function(){if(this.removed)return this;this.node.parentNode.tagName.toLowerCase()=="a"?this.node.parentNode.parentNode.appendChild(this.node.parentNode):this.node.parentNode.appendChild(this.node);var b=this.paper;b.top!=this&&a._tofront(this,b);return this},A.toBack=function(){if(this.removed)return this;var b=this.node.parentNode;b.tagName.toLowerCase()=="a"?b.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild):b.firstChild!=this.node&&b.insertBefore(this.node,this.node.parentNode.firstChild),a._toback(this,this.paper);var c=this.paper;return this},A.insertAfter=function(b){if(this.removed)return this;var c=b.node||b[b.length-1].node;c.nextSibling?c.parentNode.insertBefore(this.node,c.nextSibling):c.parentNode.appendChild(this.node),a._insertafter(this,b,this.paper);return this},A.insertBefore=function(b){if(this.removed)return this;var c=b.node||b[0].node;c.parentNode.insertBefore(this.node,c),a._insertbefore(this,b,this.paper);return this},A.blur=function(b){var c=this;if(+b!==0){var d=q("filter"),e=q("feGaussianBlur");c.attrs.blur=b,d.id=a.createUUID(),q(e,{stdDeviation:+b||1.5}),d.appendChild(e),c.paper.defs.appendChild(d),c._blur=d,q(c.node,{filter:"url(#"+d.id+")"})}else c._blur&&(c._blur.parentNode.removeChild(c._blur),delete c._blur,delete c.attrs.blur),c.node.removeAttribute("filter")},a._engine.circle=function(a,b,c,d){var e=q("circle");a.canvas&&a.canvas.appendChild(e);var f=new z(e,a);f.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"},f.type="circle",q(e,f.attrs);return f},a._engine.rect=function(a,b,c,d,e,f){var g=q("rect");a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);h.attrs={x:b,y:c,width:d,height:e,r:f||0,rx:f||0,ry:f||0,fill:"none",stroke:"#000"},h.type="rect",q(g,h.attrs);return h},a._engine.ellipse=function(a,b,c,d,e){var f=q("ellipse");a.canvas&&a.canvas.appendChild(f);var g=new z(f,a);g.attrs={cx:b,cy:c,rx:d,ry:e,fill:"none",stroke:"#000"},g.type="ellipse",q(f,g.attrs);return g},a._engine.image=function(a,b,c,d,e,f){var g=q("image");q(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:"none"}),g.setAttributeNS(n,"href",b),a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);h.attrs={x:c,y:d,width:e,height:f,src:b},h.type="image";return h},a._engine.text=function(b,c,d,e){var f=q("text");b.canvas&&b.canvas.appendChild(f);var g=new z(f,b);g.attrs={x:c,y:d,"text-anchor":"middle",text:e,font:a._availableAttrs.font,stroke:"none",fill:"#000"},g.type="text",w(g,g.attrs);return g},a._engine.setSize=function(a,b){this.width=a||this.width,this.height=b||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox);return this},a._engine.create=function(){var b=a._getContainer.apply(0,arguments),c=b&&b.container,d=b.x,e=b.y,f=b.width,g=b.height;if(!c)throw new Error("SVG container not found.");var h=q("svg"),i="overflow:hidden;",j;d=d||0,e=e||0,f=f||512,g=g||342,q(h,{height:g,version:1.1,width:f,xmlns:"http://www.w3.org/2000/svg"}),c==1?(h.style.cssText=i+"position:absolute;left:"+d+"px;top:"+e+"px",a._g.doc.body.appendChild(h),j=1):(h.style.cssText=i+"position:relative",c.firstChild?c.insertBefore(h,c.firstChild):c.appendChild(h)),c=new a._Paper,c.width=f,c.height=g,c.canvas=h,c.clear(),c._left=c._top=0,j&&(c.renderfix=function(){}),c.renderfix();return c},a._engine.setViewBox=function(a,b,c,d,e){k("raphael.setViewBox",this,this._viewBox,[a,b,c,d,e]);var f=g(c/this.width,d/this.height),h=this.top,i=e?"meet":"xMinYMin",j,l;a==null?(this._vbSize&&(f=1),delete this._vbSize,j="0 0 "+this.width+m+this.height):(this._vbSize=f,j=a+m+b+m+c+m+d),q(this.canvas,{viewBox:j,preserveAspectRatio:i});while(f&&h)l="stroke-width"in h.attrs?h.attrs["stroke-width"]:1,h.attr({"stroke-width":l}),h._.dirty=1,h._.dirtyT=1,h=h.prev;this._viewBox=[a,b,c,d,!!e];return this},a.prototype.renderfix=function(){var a=this.canvas,b=a.style,c;try{c=a.getScreenCTM()||a.createSVGMatrix()}catch(d){c=a.createSVGMatrix()}var e=-c.e%1,f=-c.f%1;if(e||f)e&&(this._left=(this._left+e)%1,b.left=this._left+"px"),f&&(this._top=(this._top+f)%1,b.top=this._top+"px")},a.prototype.clear=function(){a.eve("raphael.clear",this);var b=this.canvas;while(b.firstChild)b.removeChild(b.firstChild);this.bottom=this.top=null,(this.desc=q("desc")).appendChild(a._g.doc.createTextNode("Created with Raphaël "+a.version)),b.appendChild(this.desc),b.appendChild(this.defs=q("defs"))},a.prototype.remove=function(){k("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null};var B=a.st;for(var C in A)A[b](C)&&!B[b](C)&&(B[C]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(C))}(window.Raphael),window.Raphael.vml&&function(a){var b="hasOwnProperty",c=String,d=parseFloat,e=Math,f=e.round,g=e.max,h=e.min,i=e.abs,j="fill",k=/[, ]+/,l=a.eve,m=" progid:DXImageTransform.Microsoft",n=" ",o="",p={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},q=/([clmz]),?([^clmz]*)/gi,r=/ progid:\S+Blur\([^\)]+\)/g,s=/-?[^,\s-]+/g,t="position:absolute;left:0;top:0;width:1px;height:1px",u=21600,v={path:1,rect:1,image:1},w={circle:1,ellipse:1},x=function(b){var d=/[ahqstv]/ig,e=a._pathToAbsolute;c(b).match(d)&&(e=a._path2curve),d=/[clmz]/g;if(e==a._pathToAbsolute&&!c(b).match(d)){var g=c(b).replace(q,function(a,b,c){var d=[],e=b.toLowerCase()=="m",g=p[b];c.replace(s,function(a){e&&d.length==2&&(g+=d+p[b=="m"?"l":"L"],d=[]),d.push(f(a*u))});return g+d});return g}var h=e(b),i,j;g=[];for(var k=0,l=h.length;k<l;k++){i=h[k],j=h[k][0].toLowerCase(),j=="z"&&(j="x");for(var m=1,r=i.length;m<r;m++)j+=f(i[m]*u)+(m!=r-1?",":o);g.push(j)}return g.join(n)},y=function(b,c,d){var e=a.matrix();e.rotate(-b,.5,.5);return{dx:e.x(c,d),dy:e.y(c,d)}},z=function(a,b,c,d,e,f){var g=a._,h=a.matrix,k=g.fillpos,l=a.node,m=l.style,o=1,p="",q,r=u/b,s=u/c;m.visibility="hidden";if(!!b&&!!c){l.coordsize=i(r)+n+i(s),m.rotation=f*(b*c<0?-1:1);if(f){var t=y(f,d,e);d=t.dx,e=t.dy}b<0&&(p+="x"),c<0&&(p+=" y")&&(o=-1),m.flip=p,l.coordorigin=d*-r+n+e*-s;if(k||g.fillsize){var v=l.getElementsByTagName(j);v=v&&v[0],l.removeChild(v),k&&(t=y(f,h.x(k[0],k[1]),h.y(k[0],k[1])),v.position=t.dx*o+n+t.dy*o),g.fillsize&&(v.size=g.fillsize[0]*i(b)+n+g.fillsize[1]*i(c)),l.appendChild(v)}m.visibility="visible"}};a.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var A=function(a,b,d){var e=c(b).toLowerCase().split("-"),f=d?"end":"start",g=e.length,h="classic",i="medium",j="medium";while(g--)switch(e[g]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":h=e[g];break;case"wide":case"narrow":j=e[g];break;case"long":case"short":i=e[g]}var k=a.node.getElementsByTagName("stroke")[0];k[f+"arrow"]=h,k[f+"arrowlength"]=i,k[f+"arrowwidth"]=j},B=function(e,i){e.attrs=e.attrs||{};var l=e.node,m=e.attrs,p=l.style,q,r=v[e.type]&&(i.x!=m.x||i.y!=m.y||i.width!=m.width||i.height!=m.height||i.cx!=m.cx||i.cy!=m.cy||i.rx!=m.rx||i.ry!=m.ry||i.r!=m.r),s=w[e.type]&&(m.cx!=i.cx||m.cy!=i.cy||m.r!=i.r||m.rx!=i.rx||m.ry!=i.ry),t=e;for(var y in i)i[b](y)&&(m[y]=i[y]);r&&(m.path=a._getPath[e.type](e),e._.dirty=1),i.href&&(l.href=i.href),i.title&&(l.title=i.title),i.target&&(l.target=i.target),i.cursor&&(p.cursor=i.cursor),"blur"in i&&e.blur(i.blur);if(i.path&&e.type=="path"||r)l.path=x(~c(m.path).toLowerCase().indexOf("r")?a._pathToAbsolute(m.path):m.path),e.type=="image"&&(e._.fillpos=[m.x,m.y],e._.fillsize=[m.width,m.height],z(e,1,1,0,0,0));"transform"in i&&e.transform(i.transform);if(s){var B=+m.cx,D=+m.cy,E=+m.rx||+m.r||0,G=+m.ry||+m.r||0;l.path=a.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",f((B-E)*u),f((D-G)*u),f((B+E)*u),f((D+G)*u),f(B*u))}if("clip-rect"in i){var H=c(i["clip-rect"]).split(k);if(H.length==4){H[2]=+H[2]+ +H[0],H[3]=+H[3]+ +H[1];var I=l.clipRect||a._g.doc.createElement("div"),J=I.style;J.clip=a.format("rect({1}px {2}px {3}px {0}px)",H),l.clipRect||(J.position="absolute",J.top=0,J.left=0,J.width=e.paper.width+"px",J.height=e.paper.height+"px",l.parentNode.insertBefore(I,l),I.appendChild(l),l.clipRect=I)}i["clip-rect"]||l.clipRect&&(l.clipRect.style.clip="auto")}if(e.textpath){var K=e.textpath.style;i.font&&(K.font=i.font),i["font-family"]&&(K.fontFamily='"'+i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,o)+'"'),i["font-size"]&&(K.fontSize=i["font-size"]),i["font-weight"]&&(K.fontWeight=i["font-weight"]),i["font-style"]&&(K.fontStyle=i["font-style"])}"arrow-start"in i&&A(t,i["arrow-start"]),"arrow-end"in i&&A(t,i["arrow-end"],1);if(i.opacity!=null||i["stroke-width"]!=null||i.fill!=null||i.src!=null||i.stroke!=null||i["stroke-width"]!=null||i["stroke-opacity"]!=null||i["fill-opacity"]!=null||i["stroke-dasharray"]!=null||i["stroke-miterlimit"]!=null||i["stroke-linejoin"]!=null||i["stroke-linecap"]!=null){var L=l.getElementsByTagName(j),M=!1;L=L&&L[0],!L&&(M=L=F(j)),e.type=="image"&&i.src&&(L.src=i.src),i.fill&&(L.on=!0);if(L.on==null||i.fill=="none"||i.fill===null)L.on=!1;if(L.on&&i.fill){var N=c(i.fill).match(a._ISURL);if(N){L.parentNode==l&&l.removeChild(L),L.rotate=!0,L.src=N[1],L.type="tile";var O=e.getBBox(1);L.position=O.x+n+O.y,e._.fillpos=[O.x,O.y],a._preload(N[1],function(){e._.fillsize=[this.offsetWidth,this.offsetHeight]})}else L.color=a.getRGB(i.fill).hex,L.src=o,L.type="solid",a.getRGB(i.fill).error&&(t.type in{circle:1,ellipse:1}||c(i.fill).charAt()!="r")&&C(t,i.fill,L)&&(m.fill="none",m.gradient=i.fill,L.rotate=!1)}if("fill-opacity"in i||"opacity"in i){var P=((+m["fill-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+a.getRGB(i.fill).o+1||2)-1);P=h(g(P,0),1),L.opacity=P,L.src&&(L.color="none")}l.appendChild(L);var Q=l.getElementsByTagName("stroke")&&l.getElementsByTagName("stroke")[0],T=!1;!Q&&(T=Q=F("stroke"));if(i.stroke&&i.stroke!="none"||i["stroke-width"]||i["stroke-opacity"]!=null||i["stroke-dasharray"]||i["stroke-miterlimit"]||i["stroke-linejoin"]||i["stroke-linecap"])Q.on=!0;(i.stroke=="none"||i.stroke===null||Q.on==null||i.stroke==0||i["stroke-width"]==0)&&(Q.on=!1);var U=a.getRGB(i.stroke);Q.on&&i.stroke&&(Q.color=U.hex),P=((+m["stroke-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+U.o+1||2)-1);var V=(d(i["stroke-width"])||1)*.75;P=h(g(P,0),1),i["stroke-width"]==null&&(V=m["stroke-width"]),i["stroke-width"]&&(Q.weight=V),V&&V<1&&(P*=V)&&(Q.weight=1),Q.opacity=P,i["stroke-linejoin"]&&(Q.joinstyle=i["stroke-linejoin"]||"miter"),Q.miterlimit=i["stroke-miterlimit"]||8,i["stroke-linecap"]&&(Q.endcap=i["stroke-linecap"]=="butt"?"flat":i["stroke-linecap"]=="square"?"square":"round");if(i["stroke-dasharray"]){var W={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};Q.dashstyle=W[b](i["stroke-dasharray"])?W[i["stroke-dasharray"]]:o}T&&l.appendChild(Q)}if(t.type=="text"){t.paper.canvas.style.display=o;var X=t.paper.span,Y=100,Z=m.font&&m.font.match(/\d+(?:\.\d*)?(?=px)/);p=X.style,m.font&&(p.font=m.font),m["font-family"]&&(p.fontFamily=m["font-family"]),m["font-weight"]&&(p.fontWeight=m["font-weight"]),m["font-style"]&&(p.fontStyle=m["font-style"]),Z=d(m["font-size"]||Z&&Z[0])||10,p.fontSize=Z*Y+"px",t.textpath.string&&(X.innerHTML=c(t.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var $=X.getBoundingClientRect();t.W=m.w=($.right-$.left)/Y,t.H=m.h=($.bottom-$.top)/Y,t.X=m.x,t.Y=m.y+t.H/2,("x"in i||"y"in i)&&(t.path.v=a.format("m{0},{1}l{2},{1}",f(m.x*u),f(m.y*u),f(m.x*u)+1));var _=["x","y","text","font","font-family","font-weight","font-style","font-size"];for(var ba=0,bb=_.length;ba<bb;ba++)if(_[ba]in i){t._.dirty=1;break}switch(m["text-anchor"]){case"start":t.textpath.style["v-text-align"]="left",t.bbx=t.W/2;break;case"end":t.textpath.style["v-text-align"]="right",t.bbx=-t.W/2;break;default:t.textpath.style["v-text-align"]="center",t.bbx=0}t.textpath.style["v-text-kern"]=!0}},C=function(b,f,g){b.attrs=b.attrs||{};var h=b.attrs,i=Math.pow,j,k,l="linear",m=".5 .5";b.attrs.gradient=f,f=c(f).replace(a._radial_gradient,function(a,b,c){l="radial",b&&c&&(b=d(b),c=d(c),i(b-.5,2)+i(c-.5,2)>.25&&(c=e.sqrt(.25-i(b-.5,2))*((c>.5)*2-1)+.5),m=b+n+c);return o}),f=f.split(/\s*\-\s*/);if(l=="linear"){var p=f.shift();p=-d(p);if(isNaN(p))return null}var q=a._parseDots(f);if(!q)return null;b=b.shape||b.node;if(q.length){b.removeChild(g),g.on=!0,g.method="none",g.color=q[0].color,g.color2=q[q.length-1].color;var r=[];for(var s=0,t=q.length;s<t;s++)q[s].offset&&r.push(q[s].offset+n+q[s].color);g.colors=r.length?r.join():"0% "+g.color,l=="radial"?(g.type="gradientTitle",g.focus="100%",g.focussize="0 0",g.focusposition=m,g.angle=0):(g.type="gradient",g.angle=(270-p)%360),b.appendChild(g)}return 1},D=function(b,c){this[0]=this.node=b,b.raphael=!0,this.id=a._oid++,b.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=c,this.matrix=a.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!c.bottom&&(c.bottom=this),this.prev=c.top,c.top&&(c.top.next=this),c.top=this,this.next=null},E=a.el;D.prototype=E,E.constructor=D,E.transform=function(b){if(b==null)return this._.transform;var d=this.paper._viewBoxShift,e=d?"s"+[d.scale,d.scale]+"-1-1t"+[d.dx,d.dy]:o,f;d&&(f=b=c(b).replace(/\.{3}|\u2026/g,this._.transform||o)),a._extractTransform(this,e+b);var g=this.matrix.clone(),h=this.skew,i=this.node,j,k=~c(this.attrs.fill).indexOf("-"),l=!c(this.attrs.fill).indexOf("url(");g.translate(-0.5,-0.5);if(l||k||this.type=="image"){h.matrix="1 0 0 1",h.offset="0 0",j=g.split();if(k&&j.noRotation||!j.isSimple){i.style.filter=g.toFilter();var m=this.getBBox(),p=this.getBBox(1),q=m.x-p.x,r=m.y-p.y;i.coordorigin=q*-u+n+r*-u,z(this,1,1,q,r,0)}else i.style.filter=o,z(this,j.scalex,j.scaley,j.dx,j.dy,j.rotate)}else i.style.filter=o,h.matrix=c(g),h.offset=g.offset();f&&(this._.transform=f);return this},E.rotate=function(a,b,e){if(this.removed)return this;if(a!=null){a=c(a).split(k),a.length-1&&(b=d(a[1]),e=d(a[2])),a=d(a[0]),e==null&&(b=e);if(b==null||e==null){var f=this.getBBox(1);b=f.x+f.width/2,e=f.y+f.height/2}this._.dirtyT=1,this.transform(this._.transform.concat([["r",a,b,e]]));return this}},E.translate=function(a,b){if(this.removed)return this;a=c(a).split(k),a.length-1&&(b=d(a[1])),a=d(a[0])||0,b=+b||0,this._.bbox&&(this._.bbox.x+=a,this._.bbox.y+=b),this.transform(this._.transform.concat([["t",a,b]]));return this},E.scale=function(a,b,e,f){if(this.removed)return this;a=c(a).split(k),a.length-1&&(b=d(a[1]),e=d(a[2]),f=d(a[3]),isNaN(e)&&(e=null),isNaN(f)&&(f=null)),a=d(a[0]),b==null&&(b=a),f==null&&(e=f);if(e==null||f==null)var g=this.getBBox(1);e=e==null?g.x+g.width/2:e,f=f==null?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,b,e,f]])),this._.dirtyT=1;return this},E.hide=function(){!this.removed&&(this.node.style.display="none");return this},E.show=function(){!this.removed&&(this.node.style.display=o);return this},E._getBBox=function(){if(this.removed)return{};return{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed&&!!this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),a.eve.unbind("raphael.*.*."+this.id),a._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null;this.removed=!0}},E.attr=function(c,d){if(this.removed)return this;if(c==null){var e={};for(var f in this.attrs)this.attrs[b](f)&&(e[f]=this.attrs[f]);e.gradient&&e.fill=="none"&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform;return e}if(d==null&&a.is(c,"string")){if(c==j&&this.attrs.fill=="none"&&this.attrs.gradient)return this.attrs.gradient;var g=c.split(k),h={};for(var i=0,m=g.length;i<m;i++)c=g[i],c in this.attrs?h[c]=this.attrs[c]:a.is(this.paper.customAttributes[c],"function")?h[c]=this.paper.customAttributes[c].def:h[c]=a._availableAttrs[c];return m-1?h:h[g[0]]}if(this.attrs&&d==null&&a.is(c,"array")){h={};for(i=0,m=c.length;i<m;i++)h[c[i]]=this.attr(c[i]);return h}var n;d!=null&&(n={},n[c]=d),d==null&&a.is(c,"object")&&(n=c);for(var o in n)l("raphael.attr."+o+"."+this.id,this,n[o]);if(n){for(o in this.paper.customAttributes)if(this.paper.customAttributes[b](o)&&n[b](o)&&a.is(this.paper.customAttributes[o],"function")){var p=this.paper.customAttributes[o].apply(this,[].concat(n[o]));this.attrs[o]=n[o];for(var q in p)p[b](q)&&(n[q]=p[q])}n.text&&this.type=="text"&&(this.textpath.string=n.text),B(this,n)}return this},E.toFront=function(){!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&a._tofront(this,this.paper);return this},E.toBack=function(){if(this.removed)return this;this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),a._toback(this,this.paper));return this},E.insertAfter=function(b){if(this.removed)return this;b.constructor==a.st.constructor&&(b=b[b.length-1]),b.node.nextSibling?b.node.parentNode.insertBefore(this.node,b.node.nextSibling):b.node.parentNode.appendChild(this.node),a._insertafter(this,b,this.paper);return this},E.insertBefore=function(b){if(this.removed)return this;b.constructor==a.st.constructor&&(b=b[0]),b.node.parentNode.insertBefore(this.node,b.node),a._insertbefore(this,b,this.paper);return this},E.blur=function(b){var c=this.node.runtimeStyle,d=c.filter;d=d.replace(r,o),+b!==0?(this.attrs.blur=b,c.filter=d+n+m+".Blur(pixelradius="+(+b||1.5)+")",c.margin=a.format("-{0}px 0 0 -{0}px",f(+b||1.5))):(c.filter=d,c.margin=0,delete this.attrs.blur)},a._engine.path=function(a,b){var c=F("shape");c.style.cssText=t,c.coordsize=u+n+u,c.coordorigin=b.coordorigin;var d=new D(c,b),e={fill:"none",stroke:"#000"};a&&(e.path=a),d.type="path",d.path=[],d.Path=o,B(d,e),b.canvas.appendChild(c);var f=F("skew");f.on=!0,c.appendChild(f),d.skew=f,d.transform(o);return d},a._engine.rect=function(b,c,d,e,f,g){var h=a._rectPath(c,d,e,f,g),i=b.path(h),j=i.attrs;i.X=j.x=c,i.Y=j.y=d,i.W=j.width=e,i.H=j.height=f,j.r=g,j.path=h,i.type="rect";return i},a._engine.ellipse=function(a,b,c,d,e){var f=a.path(),g=f.attrs;f.X=b-d,f.Y=c-e,f.W=d*2,f.H=e*2,f.type="ellipse",B(f,{cx:b,cy:c,rx:d,ry:e});return f},a._engine.circle=function(a,b,c,d){var e=a.path(),f=e.attrs;e.X=b-d,e.Y=c-d,e.W=e.H=d*2,e.type="circle",B(e,{cx:b,cy:c,r:d});return e},a._engine.image=function(b,c,d,e,f,g){var h=a._rectPath(d,e,f,g),i=b.path(h).attr({stroke:"none"}),k=i.attrs,l=i.node,m=l.getElementsByTagName(j)[0];k.src=c,i.X=k.x=d,i.Y=k.y=e,i.W=k.width=f,i.H=k.height=g,k.path=h,i.type="image",m.parentNode==l&&l.removeChild(m),m.rotate=!0,m.src=c,m.type="tile",i._.fillpos=[d,e],i._.fillsize=[f,g],l.appendChild(m),z(i,1,1,0,0,0);return i},a._engine.text=function(b,d,e,g){var h=F("shape"),i=F("path"),j=F("textpath");d=d||0,e=e||0,g=g||"",i.v=a.format("m{0},{1}l{2},{1}",f(d*u),f(e*u),f(d*u)+1),i.textpathok=!0,j.string=c(g),j.on=!0,h.style.cssText=t,h.coordsize=u+n+u,h.coordorigin="0 0";var k=new D(h,b),l={fill:"#000",stroke:"none",font:a._availableAttrs.font,text:g};k.shape=h,k.path=i,k.textpath=j,k.type="text",k.attrs.text=c(g),k.attrs.x=d,k.attrs.y=e,k.attrs.w=1,k.attrs.h=1,B(k,l),h.appendChild(j),h.appendChild(i),b.canvas.appendChild(h);var m=F("skew");m.on=!0,h.appendChild(m),k.skew=m,k.transform(o);return k},a._engine.setSize=function(b,c){var d=this.canvas.style;this.width=b,this.height=c,b==+b&&(b+="px"),c==+c&&(c+="px"),d.width=b,d.height=c,d.clip="rect(0 "+b+" "+c+" 0)",this._viewBox&&a._engine.setViewBox.apply(this,this._viewBox);return this},a._engine.setViewBox=function(b,c,d,e,f){a.eve("raphael.setViewBox",this,this._viewBox,[b,c,d,e,f]);var h=this.width,i=this.height,j=1/g(d/h,e/i),k,l;f&&(k=i/e,l=h/d,d*k<h&&(b-=(h-d*k)/2/k),e*l<i&&(c-=(i-e*l)/2/l)),this._viewBox=[b,c,d,e,!!f],this._viewBoxShift={dx:-b,dy:-c,scale:j},this.forEach(function(a){a.transform("...")});return this};var F;a._engine.initWin=function(a){var b=a.document;b.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!b.namespaces.rvml&&b.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),F=function(a){return b.createElement("<rvml:"+a+' class="rvml">')}}catch(c){F=function(a){return b.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},a._engine.initWin(a._g.win),a._engine.create=function(){var b=a._getContainer.apply(0,arguments),c=b.container,d=b.height,e,f=b.width,g=b.x,h=b.y;if(!c)throw new Error("VML container not found.");var i=new a._Paper,j=i.canvas=a._g.doc.createElement("div"),k=j.style;g=g||0,h=h||0,f=f||512,d=d||342,i.width=f,i.height=d,f==+f&&(f+="px"),d==+d&&(d+="px"),i.coordsize=u*1e3+n+u*1e3,i.coordorigin="0 0",i.span=a._g.doc.createElement("span"),i.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",j.appendChild(i.span),k.cssText=a.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",f,d),c==1?(a._g.doc.body.appendChild(j),k.left=g+"px",k.top=h+"px",k.position="absolute"):c.firstChild?c.insertBefore(j,c.firstChild):c.appendChild(j),i.renderfix=function(){};return i},a.prototype.clear=function(){a.eve("raphael.clear",this),this.canvas.innerHTML=o,this.span=a._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},a.prototype.remove=function(){a.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var b in this)this[b]=typeof this[b]=="function"?a._removedFactory(b):null;return!0};var G=a.st;for(var H in E)E[b](H)&&!G[b](H)&&(G[H]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(H))}(window.Raphael)/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 *//**
 * jQuery iView Slider v2.0
 * 
 * @version: 2.0.1 - August 17, 2012
 * 
 * @author: Hemn Chawroka
 *          hemn@iprodev.com
 *          http://iprodev.com/
 * 
 */ (function ($, window, undefined) {

	var iView = function (el, options) {
			//Get slider holder
			var iv = this;

			iv.options = options;

			iv.sliderContent = el, iv.sliderInner = iv.sliderContent.html();

			iv.sliderContent.html("<div class='iviewSlider'>" + iv.sliderInner + "</div>");

			//Get slider
			iv.slider = $('.iviewSlider', iv.sliderContent);
			iv.slider.css('position', 'relative');

			//Necessary variables.
			iv.defs = {
				slide: 0,
				total: 0,
				image: '',
				images: [],
				width: iv.sliderContent.width(),
				height: iv.sliderContent.height(),
				timer: options.timer.toLowerCase(),
				lock: false,
				paused: (options.autoAdvance) ? false : true,
				time: options.pauseTime,
				easing: options.easing
			};

			//Disable slider text selection
			iv.disableSelection(iv.slider[0]);

			//Find slides
			iv.slides = iv.slider.children();
			iv.slides.each(function (i) {
				var slide = $(this);

				//Find images & thumbnails
				iv.defs.images.push(slide.data("iview:image"));
				if (slide.data("iview:thumbnail")) iv.defs.images.push(slide.data("iview:thumbnail"));
				slide.css('display', 'none');

				//Find videos
				if (slide.data("iview:type") == "video") {
					var element = slide.children().eq(0),
						video = $('<div class="iview-video-show"><div class="iview-video-container"><a class="iview-video-close" title="' + options.closeLabel + '">&#735;</a></div></div>');
					slide.append(video);
					element.appendTo($('div.iview-video-container', video));
					video.css({
						width: iv.defs.width,
						height: iv.defs.height,
						top: '-' + iv.defs.height + 'px'
					}).hide();
					slide.addClass('iview-video').css({
						'cursor': 'pointer'
					});
				}

				iv.defs.total++;
			}).css({
				width: iv.defs.width,
				height: iv.defs.height
			});

			//Set Preloader Element
			iv.sliderContent.append('<div id="iview-preloader"><div></div></div>');
			var iviewPreloader = $('#iview-preloader', iv.sliderContent);
			var preloaderBar = $('div', iviewPreloader);
			iviewPreloader.css({
				top: ((iv.defs.height / 2) - (iviewPreloader.height() / 2)) + 'px',
				left: ((iv.defs.width / 2) - (iviewPreloader.width() / 2)) + 'px'
			});

			//Set Timer Element
			iv.sliderContent.append('<div id="iview-timer"><div></div></div>');
			iv.iviewTimer = $('#iview-timer', iv.sliderContent);
			iv.iviewTimer.hide();

			//Find captions
			$('.iview-caption', iv.slider).each(function (i) {
				var caption = $(this);
				caption.html('<div class="caption-contain">' + caption.html() + '</div>');
			});

			//If randomStart
			options.startSlide = (options.randomStart) ? Math.floor(Math.random() * iv.defs.total) : options.startSlide;

			//Set startSlide
			options.startSlide = (options.startSlide > 0 && options.startSlide >= iv.defs.total) ? iv.defs.total - 1 : options.startSlide;
			iv.defs.slide = options.startSlide;

			//Set first image
			iv.defs.image = iv.slides.eq(iv.defs.slide);

			//Set pauseTime
			iv.defs.time = (iv.defs.image.data('iview:pausetime')) ? iv.defs.image.data('iview:pausetime') : options.pauseTime;

			//Set easing
			iv.defs.easing = (iv.defs.image.data('iview:easing')) ? iv.defs.image.data('iview:easing') : options.easing;

			iv.pieDegree = 0;
			var padding = options.timerPadding,
				diameter = options.timerDiameter,
				stroke = options.timerStroke;

			if (iv.defs.total > 1 && iv.defs.timer != "bar") {
				//Start the Raphael
				stroke = (iv.defs.timer == "360bar") ? options.timerStroke : 0;
				var width = (diameter + (padding * 2) + (stroke * 2)),
					height = width,
					r = Raphael(iv.iviewTimer[0], width, height);

				iv.R = (diameter / 2);

				var param = {
					stroke: options.timerBg,
					"stroke-width": (stroke + (padding * 2))
				},
					param2 = {
						stroke: options.timerColor,
						"stroke-width": stroke,
						"stroke-linecap": "round"
					},
					param3 = {
						fill: options.timerColor,
						stroke: 'none',
						"stroke-width": 0
					},
					bgParam = {
						fill: options.timerBg,
						stroke: 'none',
						"stroke-width": 0
					};

				// Custom Arc Attribute
				r.customAttributes.arc = function (value, R) {
					var total = 360,
						alpha = 360 / total * value,
						a = (90 - alpha) * Math.PI / 180,
						cx = ((diameter / 2) + padding + stroke),
						cy = ((diameter / 2) + padding + stroke),
						x = cx + R * Math.cos(a),
						y = cy - R * Math.sin(a),
						path;
					if (total == value) {
						path = [["M", cx, cy - R], ["A", R, R, 0, 1, 1, 299.99, cy - R]];
					} else {
						path = [["M", cx, cy - R], ["A", R, R, 0, +(alpha > 180), 1, x, y]];
					}
					return {
						path: path
					};
				};

				// Custom Segment Attribute
				r.customAttributes.segment = function (angle, R) {
					var a1 = -90;
					R = R - 1;
					angle = (a1 + angle);
					var flag = (angle - a1) > 180,
						x = ((diameter / 2) + padding),
						y = ((diameter / 2) + padding);
					a1 = (a1 % 360) * Math.PI / 180;
					angle = (angle % 360) * Math.PI / 180;
					return {
						path: [["M", x, y], ["l", R * Math.cos(a1), R * Math.sin(a1)], ["A", R, R, 0, +flag, 1, x + R * Math.cos(angle), y + R * Math.sin(angle)], ["z"]]
					};
				};

				if (iv.defs.total > 1 && iv.defs.timer == "pie") {
					r.circle(iv.R + padding, iv.R + padding, iv.R + padding - 1).attr(bgParam);
				}
				iv.timerBgPath = r.path().attr(param), iv.timerPath = r.path().attr(param2), iv.pieTimer = r.path().attr(param3);
			}

			iv.barTimer = $('div', iv.iviewTimer);

			if (iv.defs.total > 1 && iv.defs.timer == "360bar") {
				iv.timerBgPath.attr({
					arc: [359.9, iv.R]
				});
			}

			//Set Timer Styles
			if (iv.defs.timer == "bar") {
				iv.iviewTimer.css({
					opacity: options.timerOpacity,
					width: diameter,
					height: stroke,
					border: options.timerBarStroke + 'px ' + options.timerBarStrokeColor + ' ' + options.timerBarStrokeStyle,
					padding: padding,
					background: options.timerBg
				});
				iv.barTimer.css({
					width: 0,
					height: stroke,
					background: options.timerColor,
					'float': 'left'
				});
			} else {
				iv.iviewTimer.css({
					opacity: options.timerOpacity,
					width: width,
					height: height
				});
			}

			//Set Timer Position
			iv.setTimerPosition();

			// Run Preloader
			new ImagePreload(iv.defs.images, function (i) {
				var percent = (i * 10);
				preloaderBar.stop().animate({
					width: percent + '%'
				});
			}, function () {
				preloaderBar.stop().animate({
					width: '100%'
				}, function () {
					iviewPreloader.remove();
					iv.startSlider();

					//Trigger the onAfterLoad callback
					options.onAfterLoad.call(this);
				});
			});

			//Touch navigation
			iv.sliderContent.bind('swipeleft', function () {
				if (iv.defs.lock) return false;
				iv.cleanTimer();
				iv.goTo('next');
			}).bind('swiperight', function () {
				if (iv.defs.lock) return false;
				iv.cleanTimer();
				iv.defs.slide -= 2;
				iv.goTo('prev');
			});



			//Keyboard Navigation
			if (options.keyboardNav) {
				$(document).bind('keyup.iView', function (event) {
					//Left
					if (event.keyCode == '37') {
						if (iv.defs.lock) return false;
						iv.cleanTimer();
						iv.defs.slide -= 2;
						iv.goTo('prev');
					}
					//Right
					if (event.keyCode == '39') {
						if (iv.defs.lock) return false;
						iv.cleanTimer();
						iv.goTo('next');
					}
				});
			}

			//Play/Pause action
			 $(document).on('click', iv.iviewTimer, function () { 
				if (iv.iviewTimer.hasClass('paused')) {
					iv.playSlider();
				} else {
					iv.stopSlider();
				}
			});

			//Bind the stop action
			iv.sliderContent.bind('iView:pause', function () {
				iv.stopSlider();
			});

			//Bind the start action
			iv.sliderContent.bind('iView:play', function () {
				iv.playSlider();
			});

			//Bind the start action
			iv.sliderContent.bind('iView:previous', function () {
				if (iv.defs.lock) return false;
				iv.cleanTimer();
				iv.defs.slide -= 2;
				iv.goTo('prev');
			});

			//Bind the start action
			iv.sliderContent.bind('iView:next', function () {
				if (iv.defs.lock) return false;
				iv.cleanTimer();
				iv.goTo('next');
			});

			//Bind the goSlide action
			iv.sliderContent.bind('iView:goSlide', function (event, slide) {
				if (iv.defs.lock || iv.defs.slide == slide) return false;
				if ($(this).hasClass('active')) return false;
				iv.cleanTimer();
				iv.slider.css('background', 'url("' + iv.defs.image.data('iview:image') + '") no-repeat');
				iv.defs.slide = slide - 1;
				iv.goTo('control');
			});
			
			//Bind the resize action
			iv.sliderContent.bind('resize', function () {
				
				t = $(this),
				tW = t.width(),
				tH = t.height(),
				width = iv.slider.width(),
				height = iv.slider.height();

				if(iv.defs.width != tW){
					var ratio = (tW / width),
						newHeight = Math.round(iv.defs.height * ratio);
					iv.slider.css({
						'-webkit-transform-origin' : '0 0',
						'-moz-transform-origin' : '0 0',
						'-o-transform-origin' : '0 0',
						'-ms-transform-origin' : '0 0',
						'transform-origin' : '0 0',
						'-webkit-transform' : 'scale('+ ratio +')',
						'-moz-transform' : 'scale('+ ratio +')',
						'-o-transform' : 'scale('+ ratio +')',
						'-ms-transform' : 'scale('+ ratio +')',
						'transform' : 'scale('+ ratio +')'
					});
					t.css({ height: newHeight });
					iv.defs.width = tW;
					
					//Set Timer Position
					iv.setTimerPosition();
				}
			});
			
			//Bind video display
			$('.iview-video', iv.slider).click(function(e){
				var t = $(this),
					video = $('.iview-video-show', t);
				if(!$(e.target).hasClass('iview-video-close') && !$(e.target).hasClass('iview-caption') && !$(e.target).parents().hasClass('iview-caption')){
					video.show().animate({ top: 0 }, 1000, 'easeOutBounce');
					iv.sliderContent.trigger('iView:pause');
				}
			});
			
			//Bind the video closer
			$('.iview-video-close', iv.slider).click(function(){
				var video = $(this).parents('.iview-video-show'),
					iframe = $('iframe', video),
					src = iframe.attr('src');
				
				iframe.removeAttr('src').attr('src',src);
				
				video.animate({ top: '-' + iv.defs.height + 'px' }, 1000, 'easeOutBounce', function(){
					video.hide();
					iv.sliderContent.trigger('iView:play');
				});
			});
			
		};

	//iView helper functions
	iView.prototype = {
		timer: null,

		//Start Slider
		startSlider: function () {
			var iv = this;
			
			var img = new Image();
			img.src = iv.slides.eq(0).data('iview:image');
			imgWidth = img.width;
			if(imgWidth != iv.defs.width){
				iv.defs.width = imgWidth;
				iv.sliderContent.trigger('resize');
			}

			iv.iviewTimer.show();

			//Show slide
			iv.slides.eq(iv.defs.slide).css('display', 'block');

			//Set first background
			iv.slider.css('background', 'url("' + iv.defs.image.data('iview:image') + '") no-repeat');

			//Set initial caption
			iv.setCaption(iv.options);

			iv.iviewTimer.addClass('paused').attr('title', iv.options.playLabel);

			if (iv.options.autoAdvance && iv.defs.total > 1) {
				iv.iviewTimer.removeClass('paused').attr('title', iv.options.pauseLabel);
				iv.setTimer();
			}

			//Add Direction nav
			if (iv.options.directionNav) {
				iv.sliderContent.append('<div class="iview-directionNav"><a class="iview-prevNav" title="' + iv.options.previousLabel + '">' + iv.options.previousLabel + '</a><a class="iview-nextNav" title="' + iv.options.nextLabel + '">' + iv.options.nextLabel + '</a></div>');

				//Animate Direction nav
				$('.iview-directionNav', iv.sliderContent).css({
					opacity: iv.options.directionNavHoverOpacity
				});
				iv.sliderContent.hover(function () {
					$('.iview-directionNav', iv.sliderContent).stop().animate({
						opacity: 1
					}, 300);
				}, function () {
					$('.iview-directionNav', iv.sliderContent).stop().animate({
						opacity: iv.options.directionNavHoverOpacity
					}, 300);
				});

				$(iv.sliderContent).on('click', 'a.iview-prevNav', function () {
					if (iv.defs.lock) return false;
					iv.cleanTimer();
					iv.defs.slide -= 2;
					iv.goTo('prev');
				});

				$(iv.sliderContent).on('click', 'a.iview-nextNav', function () { 
					if (iv.defs.lock) return false;
					iv.cleanTimer();
					iv.goTo('next');
				});
			}

			//Add Control nav
			if (iv.options.controlNav) {
				var iviewControl = '<div class="iview-controlNav">',
					iviewTooltip = '';
				if (!iv.options.directionNav && iv.options.controlNavNextPrev) iviewControl += '<a class="iview-controlPrevNav" title="' + iv.options.previousLabel + '">' + iv.options.previousLabel + '</a>';
				iviewControl += '<div class="iview-items"><ul>';
				for (var i = 0; i < iv.defs.total; i++) {
					var slide = iv.slides.eq(i);
					iviewControl += '<li>';
					if (iv.options.controlNavThumbs) {
						var thumb = (slide.data('iview:thumbnail')) ? slide.data('iview:thumbnail') : slide.data('iview:image');
						iviewControl += '<a class="iview-control" rel="' + i + '"><img src="' + thumb + '" /></a>';
					} else {
						var thumb = (slide.data('iview:thumbnail')) ? slide.data('iview:thumbnail') : slide.data('iview:image');
						iviewControl += '<a class="iview-control" rel="' + i + '">' + (i + 1) + '</a>';
						if (iv.options.controlNavTooltip) iviewTooltip += '<div rel="' + i + '"><img src="' + thumb + '" /></div>';
					}
					iviewControl += '</li>';
				}
				iviewControl += '</ul></div>';
				if (!iv.options.directionNav && iv.options.controlNavNextPrev) iviewControl += '<a class="iview-controlNextNav" title="' + iv.options.nextLabel + '">' + iv.options.nextLabel + '</a>';
				iviewControl += '</div>';

				if (!iv.options.controlNavThumbs && iv.options.controlNavTooltip) iviewControl += '<div id="iview-tooltip"><div class="holder"><div class="container">' + iviewTooltip + '</div></div></div>';

				iv.sliderContent.append(iviewControl);

				//Set initial active link
				$('.iview-controlNav a.iview-control:eq(' + iv.defs.slide + ')', iv.sliderContent).addClass('active');

				$(iv.sliderContent).on('click', 'a.iview-controlPrevNav', function () { 
					if (iv.defs.lock) return false;
					iv.cleanTimer();
					iv.defs.slide -= 2;
					iv.goTo('prev');
				});

				$(iv.sliderContent).on('click', 'a.iview-controlNextNav', function () { 
					if (iv.defs.lock) return false;
					iv.cleanTimer();
					iv.goTo('next');
				});

				$(iv.sliderContent).on('click', '.iview-controlNav a.iview-control', function () {
					if (iv.defs.lock) return false;
					if ($(this).hasClass('active')) return false;
					iv.cleanTimer();
					iv.slider.css('background', 'url("' + iv.defs.image.data('iview:image') + '") no-repeat');
					iv.defs.slide = $(this).attr('rel') - 1;
					iv.goTo('control');
				});

				//Animate Control nav
				$('.iview-controlNav', iv.sliderContent).css({
					opacity: iv.options.controlNavHoverOpacity
				});
				iv.sliderContent.hover(function () {
					$('.iview-controlNav', iv.sliderContent).stop().animate({
						opacity: 1
					}, 300);
					iv.sliderContent.addClass('iview-hover');
				}, function () {
					$('.iview-controlNav', iv.sliderContent).stop().animate({
						opacity: iv.options.controlNavHoverOpacity
					}, 300);
					iv.sliderContent.removeClass('iview-hover');
				});

				//Show Tooltip
				var tooltipTimer = null;

				$('.iview-controlNav a.iview-control', iv.sliderContent).hover(function (e) {
					var t = $(this),
						i = t.attr('rel'),
						tooltip = $('#iview-tooltip', iv.sliderContent),
						holder = $('div.holder', tooltip),
						x = t.offset().left - iv.sliderContent.offset().left - (tooltip.outerWidth() / 2) + iv.options.tooltipX,
						y = t.offset().top - iv.sliderContent.offset().top - tooltip.outerHeight() + iv.options.tooltipY,
						imD = $('div[rel=' + i + ']')
						scrollLeft = (i * imD.width());

					tooltip.stop().animate({
						left: x,
						top: y,
						opacity: 1
					}, 300);
					//tooltip.css({ opacity: 1 });
					if (tooltip.not(':visible')) tooltip.fadeIn(300);
					holder.stop().animate({
						scrollLeft: scrollLeft
					}, 300);

					clearTimeout(tooltipTimer);

				}, function (e) {
					var tooltip = $('#iview-tooltip', iv.sliderContent);
					tooltipTimer = setTimeout(function () {
						tooltip.animate({
							opacity: 0
						}, 300, function () {
							tooltip.hide();
						});
					}, 200);
				});
			}

			//Bind hover setting
			iv.sliderContent.bind('mouseover.iView mousemove.iView', function () {
				//Clear the timer
				if (iv.options.pauseOnHover && !iv.defs.paused) iv.cleanTimer();

				iv.sliderContent.addClass('iview-hover');
			}).bind('mouseout.iView', function () {
				//Restart the timer
				if (iv.options.pauseOnHover && !iv.defs.paused && iv.timer == null && iv.pieDegree <= 359 && iv.options.autoAdvance) iv.setTimer();
				
				iv.sliderContent.removeClass('iview-hover');
			});
		},

		// setCaption function
		setCaption: function () {
			var iv = this,
				slide = iv.slides.eq(iv.defs.slide),
				captions = $('.iview-caption', slide),
				timeEx = 0;
			captions.each(function (i) {
				var caption = $(this),
					fx = (caption.data('transition')) ? $.trim(caption.data('transition').toLowerCase()) : "fade",
					speed = (caption.data('speed')) ? caption.data('speed') : iv.options.captionSpeed,
					easing = (caption.data('easing')) ? caption.data('easing') : iv.options.captionEasing,
					x = (caption.data('x')!="undefined") ? caption.data('x') : "center",
					y = (caption.data('y')!="undefined") ? caption.data('y') : "center",
					w = (caption.data('width')) ? caption.data('width') : caption.width(),
					h = (caption.data('height')) ? caption.data('height') : caption.height(),
					oW = caption.outerWidth(),
					oH = caption.outerHeight();
					
					if(x == "center") x = ((iv.defs.width/2) - (oW/2));
					if(y == "center") y = ((iv.defs.height/2) - (oH/2));

				var captionContain = $('.caption-contain', caption);

				caption.css({
					opacity: 0
				});
				captionContain.css({
					opacity: 0,
					position: 'relative',
					width: w,
					height: h
				});

				switch (fx) {
				case "wipedown":
					caption.css({
						top: (y - h),
						left: x
					});
					captionContain.css({
						top: (h + (h * 3)),
						left: 0
					});
					break;
				case "wipeup":
					caption.css({
						top: (y + h),
						left: x
					});
					captionContain.css({
						top: (h - (h * 3)),
						left: 0
					});
					break;
				case "wiperight":
					caption.css({
						top: y,
						left: (x - w)
					});
					captionContain.css({
						top: 0,
						left: (w + (w * 2))
					});
					break;
				case "wipeleft":
					caption.css({
						top: y,
						left: (x + w)
					});
					captionContain.css({
						top: 0,
						left: (w - (w * 2))
					});
					break;
				case "fade":
					caption.css({
						top: y,
						left: x
					});
					captionContain.css({
						top: 0,
						left: 0
					});
					break;
				case "expanddown":
					caption.css({
						top: y,
						left: x,
						height: 0
					});
					captionContain.css({
						top: (h + (h * 3)),
						left: 0
					});
					break;
				case "expandup":
					caption.css({
						top: (y + h),
						left: x,
						height: 0
					});
					captionContain.css({
						top: (h - (h * 3)),
						left: 0
					});
					break;
				case "expandright":
					caption.css({
						top: y,
						left: x,
						width: 0
					});
					captionContain.css({
						top: 0,
						left: (w + (w * 2))
					});
					break;
				case "expandleft":
					caption.css({
						top: y,
						left: (x + w),
						width: 0
					});
					captionContain.css({
						top: 0,
						left: (w - (w * 2))
					});
					break;
				}

				setTimeout(function () {
					caption.animate({
						opacity: iv.options.captionOpacity,
						top: y,
						left: x,
						width: w,
						height: h
					}, speed, easing, function () {});
				}, timeEx);
				setTimeout(function () {
					captionContain.animate({
						opacity: iv.options.captionOpacity,
						top: 0,
						left: 0
					}, speed, easing);
				}, (timeEx + 100));
				timeEx += 250;
			});
		},

		//Process the timer
		processTimer: function () {
			var iv = this;
			if (iv.defs.timer == "360bar") {
				var degree = (iv.pieDegree == 0) ? 0 : iv.pieDegree + .9;
				iv.timerPath.attr({
					arc: [degree, iv.R]
				});
			} else if (iv.defs.timer == "pie") {
				var degree = (iv.pieDegree == 0) ? 0 : iv.pieDegree + .9;
				iv.pieTimer.attr({
					segment: [degree, iv.R]
				});
			} else {
				iv.barTimer.css({
					width: ((iv.pieDegree / 360) * 100) + '%'
				});
			}
			iv.pieDegree += 3;
		},

		//When Animation finishes
		transitionEnd: function (iv) {
			//Trigger the onAfterChange callback
			iv.options.onAfterChange.call(this);

			//Lock the slider
			iv.defs.lock = false;

			//Hide slider slides
			iv.slides.css('display', 'none');

			//Diplay the current slide
			iv.slides.eq(iv.defs.slide).show();

			iv.slider.css('background', 'url("' + iv.defs.image.data('iview:image') + '") no-repeat');

			// Remove any strips and blocks from last transition
			$('.iview-strip, .iview-block', iv.slider).remove();

			//Set slide pauseTime
			iv.defs.time = (iv.defs.image.data('iview:pausetime')) ? iv.defs.image.data('iview:pausetime') : iv.options.pauseTime;

			//Process timer
			iv.iviewTimer.animate({
				opacity: iv.options.timerOpacity
			});
			iv.pieDegree = 0;
			iv.processTimer();

			//Set caption
			iv.setCaption(iv.options);

			//Restart the timer
			if (iv.timer == null && !iv.defs.paused) iv.timer = setInterval(function () {
				iv.timerCall(iv);
			}, (iv.defs.time / 120));
		},

		// Add strips
		addStrips: function (vertical, opts) {
			var iv = this;
			opts = (opts) ? opts : iv.options;
			for (var i = 0; i < opts.strips; i++) {
				var stripWidth = Math.round(iv.slider.width() / opts.strips),
					stripHeight = Math.round(iv.slider.height() / opts.strips),
					bgPosition = '-' + ((stripWidth + (i * stripWidth)) - stripWidth) + 'px 0%',
					top = ((vertical) ? (stripHeight * i) + 'px' : '0px'),
					left = ((vertical) ? '0px' : (stripWidth * i) + 'px');
				if (vertical) bgPosition = '0% -' + ((stripHeight + (i * stripHeight)) - stripHeight) + 'px';

				if (i == opts.strips - 1) {
					var width = ((vertical) ? '0px' : (iv.slider.width() - (stripWidth * i)) + 'px'),
						height = ((vertical) ? (iv.slider.height() - (stripHeight * i)) + 'px' : '0px');
				} else {
					var width = ((vertical) ? '0px' : stripWidth + 'px'),
						height = ((vertical) ? stripHeight + 'px' : '0px');
				}
				
				var strip = $('<div class="iview-strip"></div>').css({
					width: width,
					height: height,
					top: top,
					left: left,
					background: 'url("' + iv.defs.image.data('iview:image') + '") no-repeat ' + bgPosition,
					opacity: 0
				});

				iv.slider.append(strip);
			}
		},

		// Add blocks
		addBlocks: function () {
			var iv = this,
				blockWidth = Math.round(iv.slider.width() / iv.options.blockCols),
				blockHeight = Math.round(iv.slider.height() / iv.options.blockRows);

			for (var rows = 0; rows < iv.options.blockRows; rows++) {
				for (var columns = 0; columns < iv.options.blockCols; columns++) {
					var top = (rows * blockHeight) + 'px',
						left = (columns * blockWidth) + 'px',
						width = blockWidth + 'px',
						height = blockHeight + 'px',
						bgPosition = '-' + ((blockWidth + (columns * blockWidth)) - blockWidth) + 'px -' + ((blockHeight + (rows * blockHeight)) - blockHeight) + 'px';

					if (columns == iv.options.blockCols - 1) width = (iv.slider.width() - (blockWidth * columns)) + 'px';

					var block = $('<div class="iview-block"></div>').css({
						width: blockWidth + 'px',
						height: blockHeight + 'px',
						top: (rows * blockHeight) + 'px',
						left: (columns * blockWidth) + 'px',
						background: 'url("' + iv.defs.image.data('iview:image') + '") no-repeat ' + bgPosition,
						opacity: 0
					});
					
					iv.slider.append(block);
				}
			}
		},

		runTransition: function (fx) {
			var iv = this;

			switch (fx) {
			case 'strip-up-right':
			case 'strip-up-left':
				iv.addStrips();
				var timeDelay = 0;
				i = 0, strips = $('.iview-strip', iv.slider);
				if (fx == 'strip-up-left') strips = $('.iview-strip', iv.slider).reverse();

				strips.each(function () {
					var strip = $(this);
					strip.css({
						top: '',
						bottom: '0px'
					});

					setTimeout(function () {
						strip.animate({
							height: '100%',
							opacity: '1.0'
						}, iv.options.animationSpeed, iv.defs.easing, function () {
							if (i == iv.options.strips - 1) iv.transitionEnd(iv);
							i++;
						});
					}, (100 + timeDelay));

					timeDelay += 50;
				});
				break;
			case 'strip-down':
			case 'strip-down-right':
			case 'strip-down-left':
				iv.addStrips();
				var timeDelay = 0,
					i = 0,
					strips = $('.iview-strip', iv.slider);
				if (fx == 'strip-down-left') strips = $('.iview-strip', iv.slider).reverse();

				strips.each(function () {
					var strip = $(this);
					strip.css({
						bottom: '',
						top: '0px'
					});
					
					setTimeout(function () {
						strip.animate({
							height: '100%',
							opacity: '1.0'
						}, iv.options.animationSpeed, iv.defs.easing, function () {
							if (i == iv.options.strips - 1) iv.transitionEnd(iv);
							i++;
						});
					}, (100 + timeDelay));
					timeDelay += 50;
				});
				break;
			case 'strip-left-right':
			case 'strip-left-right-up':
			case 'strip-left-right-down':
				iv.addStrips(true);
				var timeDelay = 0,
					i = 0,
					v = 0,
					strips = $('.iview-strip', iv.slider);
				if (fx == 'strip-left-right-down') strips = $('.iview-strip', iv.slider).reverse();

				strips.each(function () {
					var strip = $(this);
					if (i == 0) {
						strip.css({
							right: '',
							left: '0px'
						});
						i++;
					} else {
						strip.css({
							left: '',
							right: '0px'
						});
						i = 0;
					}

					setTimeout(function () {
						strip.animate({
							width: '100%',
							opacity: '1.0'
						}, iv.options.animationSpeed, iv.defs.easing, function () {
							if (v == iv.options.strips - 1) iv.transitionEnd(iv);
							v++;
						});
					}, (100 + timeDelay));
					timeDelay += 50;
				});
				break;
			case 'strip-up-down':
			case 'strip-up-down-right':
			case 'strip-up-down-left':
				iv.addStrips();
				var timeDelay = 0,
					i = 0,
					v = 0,
					strips = $('.iview-strip', iv.slider);
				if (fx == 'strip-up-down-left') strips = $('.iview-strip', iv.slider).reverse();

				strips.each(function () {
					var strip = $(this);
					if (i == 0) {
						strip.css({
							bottom: '',
							top: '0px'
						});
						i++;
					} else {
						strip.css({
							top: '',
							bottom: '0px'
						});
						i = 0;
					}

					setTimeout(function () {
						strip.animate({
							height: '100%',
							opacity: '1.0'
						}, iv.options.animationSpeed, iv.defs.easing, function () {
							if (v == iv.options.strips - 1) iv.transitionEnd(iv);
							v++;
						});
					}, (100 + timeDelay));
					timeDelay += 50;
				});
				break;
			case 'left-curtain':
			case 'right-curtain':
			case 'top-curtain':
			case 'bottom-curtain':
				if (fx == 'left-curtain' || fx == 'right-curtain') iv.addStrips();
				else iv.addStrips(true);
				var timeDelay = 0,
					i = 0,
					strips = $('.iview-strip', iv.slider);

				if (fx == 'right-curtain' || fx == 'bottom-curtain') strips = $('.iview-strip', iv.slider).reverse();

				strips.each(function () {
					var strip = $(this);
					var width = strip.width();
					var height = strip.height();
					if (fx == 'left-curtain' || fx == 'right-curtain') strip.css({
						top: '0px',
						height: '100%',
						width: '0px'
					});
					else strip.css({
						left: '0px',
						height: '0px',
						width: '100%'
					});
					setTimeout(function () {
						if (fx == 'left-curtain' || fx == 'right-curtain') strip.animate({
							width: width,
							opacity: '1.0'
						}, iv.options.animationSpeed, iv.defs.easing, function () {
							if (i == iv.options.strips - 1) iv.transitionEnd(iv);
							i++;
						});
						else strip.animate({
							height: height,
							opacity: '1.0'
						}, iv.options.animationSpeed, iv.defs.easing, function () {
							if (i == iv.options.strips - 1) iv.transitionEnd(iv);
							i++;
						});
					}, (100 + timeDelay));
					timeDelay += 50;
				});
				break;
			case 'strip-up-right':
			case 'strip-up-left':
				iv.addStrips();
				var timeDelay = 0,
					i = 0,
					strips = $('.iview-strip', iv.slider);
				if (fx == 'strip-up-left') strips = $('.iview-strip', iv.slider).reverse();

				strips.each(function () {
					var strip = $(this);
					strip.css({
						'bottom': '0px'
					});
					setTimeout(function () {
						strip.animate({
							height: '100%',
							opacity: '1.0'
						}, iv.options.animationSpeed, iv.defs.easing, function () {
							if (i == iv.options.strips - 1) iv.transitionEnd(iv);
							i++;
						});
					}, (100 + timeDelay));
					timeDelay += 50;
				});
				break;
			case 'strip-left-fade':
			case 'strip-right-fade':
			case 'strip-top-fade':
			case 'strip-bottom-fade':
				if (fx == 'strip-left-fade' || fx == 'strip-right-fade') iv.addStrips();
				else iv.addStrips(true);
				var timeDelay = 0,
					i = 0,
					strips = $('.iview-strip', iv.slider);

				if (fx == 'strip-right-fade' || fx == 'strip-bottom-fade') strips = $('.iview-strip', iv.slider).reverse();

				strips.each(function () {
					var strip = $(this);
					var width = strip.width();
					var height = strip.height();
					if (fx == 'strip-left-fade' || fx == 'strip-right-fade') strip.css({
						top: '0px',
						height: '100%',
						width: width
					});
					else strip.css({
						left: '0px',
						height: height,
						width: '100%'
					});
					setTimeout(function () {
						strip.animate({
							opacity: '1.0'
						}, iv.options.animationSpeed * 1.7, iv.defs.easing, function () {
							if (i == iv.options.strips - 1) iv.transitionEnd(iv);
							i++;
						});
					}, (100 + timeDelay));
					timeDelay += 35;
				});
				break;
			case 'slide-in-up':
			case 'slide-in-down':
				opts = {
					strips: 1
				};
				iv.addStrips(false, opts);

				var strip = $('.iview-strip:first', iv.slider),
					top = 0;

				if (fx == 'slide-in-up') top = '-' + iv.defs.height + 'px';
				else top = iv.defs.height + 'px';

				strip.css({
					top: top,
					'height': '100%',
					'width': iv.defs.width
				});

				strip.animate({
					'top': '0px',
					opacity: 1
				}, (iv.options.animationSpeed * 2), iv.defs.easing, function () {
					iv.transitionEnd(iv);
				});
				break;
			case 'zigzag-top':
			case 'zigzag-bottom':
			case 'zigzag-grow-top':
			case 'zigzag-grow-bottom':
			case 'zigzag-drop-top':
			case 'zigzag-drop-bottom':
				iv.addBlocks();

				var totalBlocks = (iv.options.blockCols * iv.options.blockRows),
					timeDelay = 0,
					blockToArr = new Array(),
					blocks = $('.iview-block', iv.slider);

				for (var rows = 0; rows < iv.options.blockRows; rows++) {
					var odd = (rows % 2),
						start = (rows * iv.options.blockCols),
						end = ((rows + 1) * iv.options.blockCols);
					if (odd == 1) {
						for (var columns = end - 1; columns >= start; columns--) {
							blockToArr.push($(blocks[columns]));
						}
					} else {
						for (var columns = start; columns < end; columns++) {
							blockToArr.push($(blocks[columns]));
						}
					}
				}

				if (fx == 'zigzag-bottom' || fx == 'zigzag-grow-bottom' || fx == 'zigzag-drop-bottom') blockToArr.reverse();

				// Run animation
				blocks.each(function (i) {
					var block = $(blockToArr[i]),
						h = block.height(),
						w = block.width(),
						top = block.css('top');

					if (fx == 'zigzag-grow-top' || fx == 'zigzag-grow-bottom') block.width(0).height(0);
					else if (fx == 'zigzag-drop-top' || fx == 'zigzag-drop-bottom') block.css({
						top: '-=50'
					});

					setTimeout(function () {
						if (fx == 'zigzag-grow-top' || fx == 'zigzag-grow-bottom') block.animate({
							opacity: '1',
							height: h,
							width: w
						}, iv.options.animationSpeed, iv.defs.easing, function () {
							if (i == totalBlocks - 1) iv.transitionEnd(iv);
						});
						else if (fx == 'zigzag-drop-top' || fx == 'zigzag-drop-bottom') block.animate({
							top: top,
							opacity: '1'
						}, iv.options.animationSpeed, iv.defs.easing, function () {
							if (i == totalBlocks - 1) iv.transitionEnd(iv);
						});
						else block.animate({
							opacity: '1'
						}, (iv.options.animationSpeed * 2), 'easeInOutExpo', function () {
							if (i == totalBlocks - 1) iv.transitionEnd(iv);
						});
					}, (100 + timeDelay));
					timeDelay += 20;
				});
				break;
			case 'block-fade':
			case 'block-fade-reverse':
			case 'block-expand':
			case 'block-expand-reverse':
				iv.addBlocks();

				var totalBlocks = (iv.options.blockCols * iv.options.blockRows),
					i = 0,
					timeDelay = 0;

				// Split blocks into array
				var rowIndex = 0;
				var colIndex = 0;
				var blockToArr = new Array();
				blockToArr[rowIndex] = new Array();
				var blocks = $('.iview-block', iv.slider);
				if (fx == 'block-fade-reverse' || fx == 'block-expand-reverse') {
					blocks = $('.iview-block', iv.slider).reverse();
				}
				blocks.each(function () {
					blockToArr[rowIndex][colIndex] = $(this);
					colIndex++;
					if (colIndex == iv.options.blockCols) {
						rowIndex++;
						colIndex = 0;
						blockToArr[rowIndex] = new Array();
					}
				});

				// Run animation
				for (var columns = 0; columns < (iv.options.blockCols * 2); columns++) {
					var Col = columns;
					for (var rows = 0; rows < iv.options.blockRows; rows++) {
						if (Col >= 0 && Col < iv.options.blockCols) {
							(function () {
								var block = $(blockToArr[rows][Col]);
								var w = block.width();
								var h = block.height();
								if (fx == 'block-expand' || fx == 'block-expand-reverse') {
									block.width(0).height(0);
								}
								
								setTimeout(function () {
									block.animate({
										opacity: '1',
										width: w,
										height: h
									}, iv.options.animationSpeed / 1.3, iv.defs.easing, function () {
										if (i == totalBlocks - 1) iv.transitionEnd(iv);
										i++;
									});
								}, (100 + timeDelay));
								
							})();
						}
						Col--;
					}
					timeDelay += 100;
				}
				break;
			case 'block-random':
			case 'block-expand-random':
			case 'block-drop-random':
				iv.addBlocks();

				var totalBlocks = (iv.options.blockCols * iv.options.blockRows),
					timeDelay = 0;

				var blocks = iv.shuffle($('.iview-block', iv.slider));
				blocks.each(function (i) {
					var block = $(this),
						h = block.height(),
						w = block.width(),
						top = block.css('top');
					if (fx == 'block-expand-random') block.width(0).height(0);
					if (fx == 'block-drop-random') block.css({
						top: '-=50'
					});
					
					setTimeout(function () {
						block.animate({
							top: top,
							opacity: '1',
							height: h,
							width: w
						}, iv.options.animationSpeed, iv.defs.easing, function () {
							if (i == totalBlocks - 1) iv.transitionEnd(iv);
						});
					}, (100 + timeDelay));
						
					timeDelay += 20;
				});
				break;
			case 'slide-in-right':
			case 'slide-in-left':
			case 'fade':
			default:
				opts = {
					strips: 1
				};
				iv.addStrips(false, opts);

				var strip = $('.iview-strip:first', iv.slider);
				strip.css({
					'height': '100%',
					'width': iv.defs.width,
                                        'background-position': 'top center',
				});
				if (fx == 'slide-in-right') strip.css({
					'height': '100%',
					'width': iv.defs.width,
					'left': iv.defs.width + 'px',
					'right': ''
				});
				else if (fx == 'slide-in-left') strip.css({
					'left': '-' + iv.defs.width + 'px'
				});

				strip.animate({
					left: '0px',
					opacity: 1
				}, (iv.options.animationSpeed * 2), iv.defs.easing, function () {
					iv.transitionEnd(iv);
				});
				break;
			}
		},

		// Shuffle an array
		shuffle: function (oldArray) {
			var newArray = oldArray.slice();
			var len = newArray.length;
			var i = len;
			while (i--) {
				var p = parseInt(Math.random() * len);
				var t = newArray[i];
				newArray[i] = newArray[p];
				newArray[p] = t;
			}
			return newArray;
		},

		// Timer interval caller
		timerCall: function (iv) {
			iv.processTimer();
			if (iv.pieDegree >= 360) {
				iv.cleanTimer();
				iv.goTo(false);
			}
		},

		//Set the timer function
		setTimer: function () {
			var iv = this;
			iv.timer = setInterval(function () {
				iv.timerCall(iv);
			}, (iv.defs.time / 120));
		},

		//Clean the timer function
		cleanTimer: function () {
			var iv = this;
			clearInterval(iv.timer);
			iv.timer = null;
		},


		// goTo function
		goTo: function (action) {
			var iv = this;
			//Trigger the onLastSlide callback
			if (iv.defs && (iv.defs.slide == iv.defs.total - 1)) {
				iv.options.onLastSlide.call(this);
			}

			iv.cleanTimer();

			iv.iviewTimer.animate({
				opacity: 0
			});

			//Trigger the onBeforeChange callback
			iv.options.onBeforeChange.call(this);

			//Set current background before change
			if (!action) {
				iv.slider.css('background', 'url("' + iv.defs.image.data('iview:image') + '") no-repeat');
			} else {
				if (action == 'prev' || action == 'next') {
					iv.slider.css('background', 'url("' + iv.defs.image.data('iview:image') + '") no-repeat');
				}
			}
			iv.defs.slide++;

			//Trigger the onSlideShowEnd callback
			if (iv.defs.slide == iv.defs.total) {
				iv.defs.slide = 0;
				iv.options.onSlideShowEnd.call(this);
			}
			if (iv.defs.slide < 0) iv.defs.slide = (iv.defs.total - 1);

			//Set iv.defs.image
			iv.defs.image = iv.slides.eq(iv.defs.slide);

			//Set active links
			if (iv.options.controlNav) {
				$('.iview-controlNav a.iview-control', iv.sliderContent).removeClass('active');
				$('.iview-controlNav a.iview-control:eq(' + iv.defs.slide + ')', iv.sliderContent).addClass('active');
			}

			var fx = iv.options.fx;

			//Generate random transition
			if (iv.options.fx.toLowerCase() == 'random') {
				var transitions = new Array('left-curtain', 'right-curtain', 'top-curtain', 'bottom-curtain', 'strip-down-right', 'strip-down-left', 'strip-up-right', 'strip-up-left', 'strip-up-down', 'strip-up-down-left', 'strip-left-right', 'strip-left-right-down', 'slide-in-right', 'slide-in-left', 'slide-in-up', 'slide-in-down', 'fade', 'block-random', 'block-fade', 'block-fade-reverse', 'block-expand', 'block-expand-reverse', 'block-expand-random', 'zigzag-top', 'zigzag-bottom', 'zigzag-grow-top', 'zigzag-grow-bottom', 'zigzag-drop-top', 'zigzag-drop-bottom', 'strip-left-fade', 'strip-right-fade', 'strip-top-fade', 'strip-bottom-fade', 'block-drop-random');
				fx = transitions[Math.floor(Math.random() * (transitions.length + 1))];
				if (fx == undefined) fx = 'fade';
				fx = $.trim(fx.toLowerCase());
			}

			//Run random transition from specified set (eg: effect:'strip-left-fade,right-curtain')
			if (iv.options.fx.indexOf(',') != -1) {
				var transitions = iv.options.fx.split(',');
				fx = transitions[Math.floor(Math.random() * (transitions.length))];
				if (fx == undefined) fx = 'fade';
				fx = $.trim(fx.toLowerCase());
			}

			//Custom transition as defined by "data-iview:transition" attribute
			if (iv.defs.image.data('iview:transition')) {
				var transitions = iv.defs.image.data('iview:transition').split(',');
				fx = transitions[Math.floor(Math.random() * (transitions.length))];
				fx = $.trim(fx.toLowerCase());
			}

			//Set slide easing
			iv.defs.easing = (iv.defs.image.data('iview:easing')) ? iv.defs.image.data('iview:easing') : iv.options.easing;

			//Start Transition
			iv.defs.lock = true;
			iv.runTransition(fx);
		},

		playSlider: function () {
			var iv = this;
			if (iv.timer == null && iv.defs.paused) {
				iv.iviewTimer.removeClass('paused').attr('title', iv.options.pauseLabel);
				iv.setTimer();
				iv.defs.paused = false;

				//Trigger the onPlay callback
				iv.options.onPlay.call(this);
			}
		},

		stopSlider: function () {
			var iv = this;
			iv.iviewTimer.addClass('paused').attr('title', iv.options.playLabel);
			iv.cleanTimer();
			iv.defs.paused = true;

			//Trigger the onPause callback
			iv.options.onPause.call(this);
		},

		//Set Timer Position function
		setTimerPosition: function(){
			var iv = this,
			position = iv.options.timerPosition.toLowerCase().split('-');
			for (var i = 0; i < position.length; i++) {
				if (position[i] == 'top') {
					iv.iviewTimer.css({
						top: iv.options.timerY + 'px',
						bottom: ''
					});
				} else if (position[i] == 'middle') {
					iv.iviewTimer.css({
						top: (iv.options.timerY + (iv.defs.height / 2) - (iv.options.timerDiameter / 2)) + 'px',
						bottom: ''
					});
				} else if (position[i] == 'bottom') {
					iv.iviewTimer.css({
						bottom: iv.options.timerY + 'px',
						top: ''
					});
				} else if (position[i] == 'left') {
					iv.iviewTimer.css({
						left: iv.options.timerX + 'px',
						right: ''
					});
				} else if (position[i] == 'center') {
					iv.iviewTimer.css({
						left: (iv.options.timerX + (iv.defs.width / 2) - (iv.options.timerDiameter / 2)) + 'px',
						right: ''
					});
				} else if (position[i] == 'right') {
					iv.iviewTimer.css({
						right: iv.options.timerX + 'px',
						left: ''
					});
				}
			}
		},
		
		disableSelection: function (target) {
			if (typeof target.onselectstart != "undefined") target.onselectstart = function () {
				return false;
			};
			else if (typeof target.style.MozUserSelect != "undefined") target.style.MozUserSelect = "none";
			else if (typeof target.style.webkitUserSelect != "undefined") target.style.webkitUserSelect = "none";
			else if (typeof target.style.userSelect != "undefined") target.style.userSelect = "none";
			else target.onmousedown = function () {
				return false;
			};
			target.unselectable = "on";
		},

		//touch
		isTouch: function () {
			return !!('ontouchstart' in window);
		}
	};

	//Image Preloader Function
	var ImagePreload = function (p_aImages, p_pfnPercent, p_pfnFinished) {
			this.m_pfnPercent = p_pfnPercent;
			this.m_pfnFinished = p_pfnFinished;
			this.m_nLoaded = 0;
			this.m_nProcessed = 0;
			this.m_aImages = new Array;
			this.m_nICount = p_aImages.length;
			for (var i = 0; i < p_aImages.length; i++) this.Preload(p_aImages[i])
		};

	ImagePreload.prototype = {
		Preload: function (p_oImage) {
			var oImage = new Image;
			this.m_aImages.push(oImage);
			oImage.onload = ImagePreload.prototype.OnLoad;
			oImage.onerror = ImagePreload.prototype.OnError;
			oImage.onabort = ImagePreload.prototype.OnAbort;
			oImage.oImagePreload = this;
			oImage.bLoaded = false;
			oImage.source = p_oImage;
			oImage.src = p_oImage
		},
		OnComplete: function () {
			this.m_nProcessed++;
			if (this.m_nProcessed == this.m_nICount) this.m_pfnFinished();
			else this.m_pfnPercent(Math.round((this.m_nProcessed / this.m_nICount) * 10))
		},
		OnLoad: function () {
			this.bLoaded = true;
			this.oImagePreload.m_nLoaded++;
			this.oImagePreload.OnComplete()
		},
		OnError: function () {
			this.bError = true;
			this.oImagePreload.OnComplete()
		},
		OnAbort: function () {
			this.bAbort = true;
			this.oImagePreload.OnComplete()
		}
	}



	// Begin the iView plugin
	$.fn.iView = function (options) {

		// Default options. Play carefully.
		options = jQuery.extend({
			fx: 'random',
			easing: 'easeOutQuad',
			strips: 20,
			blockCols: 10,
			blockRows: 5,
			animationSpeed: 500,
			pauseTime: 5000,
			startSlide: 0,
			directionNav: true,
			directionNavHoverOpacity: 0.6,
			controlNav: false,
			controlNavNextPrev: true,
			controlNavHoverOpacity: 0.6,
			controlNavThumbs: false,
			controlNavTooltip: true,
			captionSpeed: 500,
			captionEasing: 'easeInOutSine',
			captionOpacity: 1,
			autoAdvance: true,
			keyboardNav: true,
			touchNav: true,
			pauseOnHover: false,
			nextLabel: "Next",
			previousLabel: "Previous",
			playLabel: "Play",
			pauseLabel: "Pause",
			closeLabel: "Close",
			randomStart: false,
			timer: 'Pie',
			timerBg: '#000',
			timerColor: '#EEE',
			timerOpacity: 0.5,
			timerDiameter: 30,
			timerPadding: 4,
			timerStroke: 3,
			timerBarStroke: 1,
			timerBarStrokeColor: '#EEE',
			timerBarStrokeStyle: 'solid',
			timerPosition: 'top-right',
			timerX: 10,
			timerY: 10,
			tooltipX: 5,
			tooltipY: -5,
			onBeforeChange: function () {},
			onAfterChange: function () {},
			onAfterLoad: function () {},
			onLastSlide: function () {},
			onSlideShowEnd: function () {},
			onPause: function () {},
			onPlay: function () {}
		}, options);

		$(this).each(function () {
			var el = $(this);
			new iView(el, options);
		});

	};

	$.fn.reverse = [].reverse;

	var elems = $([]),
		jq_resize = $.resize = $.extend($.resize, {}),
		timeout_id, str_setTimeout = "setTimeout",
		str_resize = "resize",
		str_data = str_resize + "-special-event",
		str_delay = "delay",
		str_throttle = "throttleWindow";
	jq_resize[str_delay] = 250;
	jq_resize[str_throttle] = true;
	$.event.special[str_resize] = {
		setup: function () {
			if (!jq_resize[str_throttle] && this[str_setTimeout]) {
				return false
			}
			var elem = $(this);
			elems = elems.add(elem);
			$.data(this, str_data, {
				w: elem.width(),
				h: elem.height()
			});
			if (elems.length === 1) {
				loopy()
			}
		},
		teardown: function () {
			if (!jq_resize[str_throttle] && this[str_setTimeout]) {
				return false
			}
			var elem = $(this);
			elems = elems.not(elem);
			elem.removeData(str_data);
			if (!elems.length) {
				clearTimeout(timeout_id)
			}
		},
		add: function (handleObj) {
			if (!jq_resize[str_throttle] && this[str_setTimeout]) {
				return false
			}
			var old_handler;

			function new_handler(e, w, h) {
				var elem = $(this),
					data = $.data(this, str_data);
				data.w = w !== undefined ? w : elem.width();
				data.h = h !== undefined ? h : elem.height();
				old_handler.apply(this, arguments)
			}
			if ($.isFunction(handleObj)) {
				old_handler = handleObj;
				return new_handler
			} else {
				old_handler = handleObj.handler;
				handleObj.handler = new_handler
			}
		}
	};

	function loopy() {
		timeout_id = window[str_setTimeout](function () {
			elems.each(function () {
				var elem = $(this),
					width = elem.width(),
					height = elem.height(),
					data = $.data(this, str_data);
				if (width !== data.w || height !== data.h) {
					elem.trigger(str_resize, [data.w = width, data.h = height])
				}
			});
			loopy()
		}, jq_resize[str_delay])
	}


	var supportTouch = !! ('ontouchstart' in window),
		touchStartEvent = supportTouch ? "touchstart" : "mousedown",
		touchStopEvent = supportTouch ? "touchend" : "mouseup",
		touchMoveEvent = supportTouch ? "touchmove" : "mousemove";
	// also handles swipeleft, swiperight
	$.event.special.swipe = {
		scrollSupressionThreshold: 10, // More than this horizontal displacement, and we will suppress scrolling.

		durationThreshold: 1000, // More time than this, and it isn't a swipe.

		horizontalDistanceThreshold: 30, // Swipe horizontal displacement must be more than this.

		verticalDistanceThreshold: 75, // Swipe vertical displacement must be less than this.

		setup: function () {
			var thisObject = this,
				$this = $(thisObject);

			$this.bind(touchStartEvent, function (event) {
				var data = event.originalEvent.touches ? event.originalEvent.touches[0] : event,
					start = {
						time: (new Date()).getTime(),
						coords: [data.pageX, data.pageY],
						origin: $(event.target)
					},
					stop;

				function moveHandler(event) {

					if (!start) {
						return;
					}

					var data = event.originalEvent.touches ? event.originalEvent.touches[0] : event;

					stop = {
						time: (new Date()).getTime(),
						coords: [data.pageX, data.pageY]
					};

					// prevent scrolling
					if (Math.abs(start.coords[0] - stop.coords[0]) > $.event.special.swipe.scrollSupressionThreshold) {
						event.preventDefault();
					}
				}

				$this.bind(touchMoveEvent, moveHandler).one(touchStopEvent, function (event) {
					$this.unbind(touchMoveEvent, moveHandler);

					if (start && stop) {
						if (stop.time - start.time < $.event.special.swipe.durationThreshold && Math.abs(start.coords[0] - stop.coords[0]) > $.event.special.swipe.horizontalDistanceThreshold && Math.abs(start.coords[1] - stop.coords[1]) < $.event.special.swipe.verticalDistanceThreshold) {

							start.origin.trigger("swipe").trigger(start.coords[0] > stop.coords[0] ? "swipeleft" : "swiperight");
						}
					}
					start = stop = undefined;
				});
			});
		}
	};


	$.each({
		swipeleft: "swipe",
		swiperight: "swipe"
	}, function (event, sourceEvent) {

		$.event.special[event] = {
			setup: function () {
				$(this).bind(sourceEvent, $.noop);
			}
		};
	});

})(jQuery, this);
/*!
 * SmartMenus jQuery Plugin - v0.9.4 - December 1, 2013
 * http://www.smartmenus.org/
 *
 * Copyright 2013 Vasil Dinkov, Vadikom Web Ltd.
 * http://vadikom.com
 *
 * Licensed MIT
 */

(function($) {

	var menuTrees = [],
		IE = !!window.createPopup, // we need to detect it, unfortunately
		IElt9 = IE && !document.defaultView,
		IElt8 = IE && !document.querySelector,
		IE6 = IE && typeof document.documentElement.currentStyle.minWidth == 'undefined',
		mouse = false, // optimize for touch by default - we will detect for mouse input
		mouseDetectionEnabled = false;

	// Handle detection for mouse input (i.e. desktop browsers, tablets with a mouse, etc.)
	function initMouseDetection(disable) {
		if (!mouseDetectionEnabled && !disable) {
			// if we get two consecutive mousemoves within 2 pixels from each other and within 300ms, we assume a real mouse/cursor is present
			// in practice, this seems like impossible to trick unintentianally with a real mouse and a pretty safe detection on touch devices (even with older browsers that do not support touch events)
			var firstTime = true,
				lastMove = null;
			$(document).bind({
				'mousemove.smartmenus_mouse': function(e) {
					var thisMove = { x: e.pageX, y: e.pageY, timeStamp: new Date().getTime() };
					if (lastMove) {
						var deltaX = Math.abs(lastMove.x - thisMove.x),
							deltaY = Math.abs(lastMove.y - thisMove.y);
	 					if ((deltaX > 0 || deltaY > 0) && deltaX <= 2 && deltaY <= 2 && thisMove.timeStamp - lastMove.timeStamp <= 300) {
							mouse = true;
							// if this is the first check after page load, check if we are not over some item by chance and call the mouseenter handler if yes
							if (firstTime) {
								var $a = $(e.target);
								if (!$a.is('a')) {
									$a = $a.parentsUntil('a').parent();
								}
								if ($a.is('a')) {
									$.each(menuTrees, function() {
										if ($.contains(this.$root[0], $a[0])) {
											this.itemEnter({ currentTarget: $a[0] });
											return false;
										}
									});
								}
								firstTime = false;
							}
						}
					}
					lastMove = thisMove;
				},
				'touchstart.smartmenus_mouse pointerover.smartmenus_mouse MSPointerOver.smartmenus_mouse': function(e) {
					if (!/^(4|mouse)$/.test(e.originalEvent.pointerType)) {
						mouse = false;
					}
				}
			});
			mouseDetectionEnabled = true;
		} else if (mouseDetectionEnabled && disable) {
			$(document).unbind('.smartmenus_mouse');
			mouseDetectionEnabled = false;
		}
	};

	$.SmartMenus = function(elm, options) {
		this.$root = $(elm);
		this.opts = options;
		this.rootId = ''; // internal
		this.$subArrow = null;
		this.subMenus = []; // all sub menus in the tree (UL elms) in no particular order (only real - e.g. UL's in mega sub menus won't be counted)
		this.activatedItems = []; // stores last activated A's for each level
		this.visibleSubMenus = []; // stores visible sub menus UL's
		this.showTimeout = 0;
		this.hideTimeout = 0;
		this.scrollTimeout = 0;
		this.clickActivated = false;
		this.zIndexInc = 0;
		this.$firstLink = null; // we'll use these for some tests
		this.$firstSub = null; // at runtime so we'll cache them
		this.disabled = false;
		this.$disableOverlay = null;
		this.init();
	};

	$.extend($.SmartMenus, {
		hideAll: function() {
			$.each(menuTrees, function() {
				this.menuHideAll();
			});
		},
		destroy: function() {
			while (menuTrees.length) {
				menuTrees[0].destroy();
			}
			initMouseDetection(true);
		},
		prototype: {
			init: function(refresh) {
				var self = this;

				if (!refresh) {
					menuTrees.push(this);

					this.rootId = (new Date().getTime() + Math.random() + '').replace(/\D/g, '');

					if (this.$root.hasClass('sm-rtl')) {
						this.opts.rightToLeftSubMenus = true;
					}

					// init root (main menu)
					this.$root
						.data('smartmenus', this)
						.attr('data-smartmenus-id', this.rootId)
						.dataSM('level', 1)
						.bind({
							'mouseover.smartmenus focusin.smartmenus': $.proxy(this.rootOver, this),
							'mouseout.smartmenus focusout.smartmenus': $.proxy(this.rootOut, this)
						})
						.delegate('a', {
							'mouseenter.smartmenus': $.proxy(this.itemEnter, this),
							'mouseleave.smartmenus': $.proxy(this.itemLeave, this),
							'mousedown.smartmenus': $.proxy(this.itemDown, this),
							'focus.smartmenus': $.proxy(this.itemFocus, this),
							'blur.smartmenus': $.proxy(this.itemBlur, this),
							'click.smartmenus': $.proxy(this.itemClick, this),
							'touchend.smartmenus': $.proxy(this.itemTouchEnd, this)
						});

					var eNamespace = '.smartmenus' + this.rootId;
					// hide menus on tap or click outside the root UL
					if (this.opts.hideOnClick) {
						$(document).bind('touchstart' + eNamespace, $.proxy(this.docTouchStart, this))
							.bind('touchmove' + eNamespace, $.proxy(this.docTouchMove, this))
							.bind('touchend' + eNamespace, $.proxy(this.docTouchEnd, this))
							// for Opera Mobile < 11.5, webOS browser, etc. we'll check click too
							.bind('click' + eNamespace, $.proxy(this.docClick, this));
					}
					// hide sub menus on resize
					$(window).bind('resize' + eNamespace + ' orientationchange' + eNamespace, $.proxy(this.winResize, this));

					if (this.opts.subIndicators) {
						this.$subArrow = $('<span/>').addClass('sub-arrow');
						if (this.opts.subIndicatorsText) {
							this.$subArrow.html(this.opts.subIndicatorsText);
						}
					}

					// make sure mouse detection is enabled
					initMouseDetection();
				}

				// init sub menus
				this.$firstSub = this.$root.find('ul').each(function() { self.menuInit($(this)); }).eq(0);

				this.$firstLink = this.$root.find('a').eq(0);

				// find current item
				if (this.opts.markCurrentItem) {
					var reDefaultDoc = /(index|default)\.[^#\?\/]*/i,
						reHash = /#.*/,
						locHref = window.location.href.replace(reDefaultDoc, ''),
						locHrefNoHash = locHref.replace(reHash, '');
					this.$root.find('a').each(function() {
						var href = this.href.replace(reDefaultDoc, ''),
							$this = $(this);
						if (href == locHref || href == locHrefNoHash) {
							$this.addClass('current');
							if (self.opts.markCurrentTree) {
								$this.parents('li').each(function() {
									var $this = $(this);
									if ($this.dataSM('sub')) {
										$this.children('a').addClass('current');
									}
								});
							}
						}
					});
				}
			},
			destroy: function() {
				this.menuHideAll();
				this.$root
					.removeData('smartmenus')
					.removeAttr('data-smartmenus-id')
					.removeDataSM('level')
					.unbind('.smartmenus')
					.undelegate('.smartmenus');
				var eNamespace = '.smartmenus' + this.rootId;
				$(document).unbind(eNamespace);
				$(window).unbind(eNamespace);
				if (this.opts.subIndicators) {
					this.$subArrow = null;
				}
				var self = this;
				$.each(this.subMenus, function() {
					if (this.hasClass('mega-menu')) {
						this.find('ul').removeDataSM('in-mega');
					}
					if (this.dataSM('shown-before')) {
						if (IElt8) {
							this.children().css({ styleFloat: '', width: '' });
						}
						if (self.opts.subMenusMinWidth || self.opts.subMenusMaxWidth) {
							if (!IE6) {
								this.css({ width: '', minWidth: '', maxWidth: '' }).removeClass('sm-nowrap');
							} else {
								this.css({ width: '', overflowX: '', overflowY: '' }).children().children('a').css('white-space', '');
							}
						}
						if (this.dataSM('scroll-arrows')) {
							this.dataSM('scroll-arrows').remove();
						}
						this.css({ zIndex: '', top: '', left: '', marginLeft: '', marginTop: '', display: '' });
					}
					if (self.opts.subIndicators) {
						this.dataSM('parent-a').removeClass('has-submenu').children('span.sub-arrow').remove();
					}
					this.removeDataSM('shown-before')
						.removeDataSM('ie-shim')
						.removeDataSM('scroll-arrows')
						.removeDataSM('parent-a')
						.removeDataSM('level')
						.removeDataSM('beforefirstshowfired')
						.parent().removeDataSM('sub');
				});
				if (this.opts.markCurrentItem) {
					this.$root.find('a.current').removeClass('current');
				}
				this.$root = null;
				this.$firstLink = null;
				this.$firstSub = null;
				if (this.$disableOverlay) {
					this.$disableOverlay.remove();
					this.$disableOverlay = null;
				}
				menuTrees.splice($.inArray(this, menuTrees), 1);
			},
			disable: function(noOverlay) {
				if (!this.disabled) {
					this.menuHideAll();
					// display overlay over the menu to prevent interaction
					if (!noOverlay && !this.opts.isPopup && this.$root.is(':visible')) {
						var pos = this.$root.offset();
						this.$disableOverlay = $('<div class="sm-jquery-disable-overlay"/>').css({
							position: 'absolute',
							top: pos.top,
							left: pos.left,
							width: this.$root.outerWidth(),
							height: this.$root.outerHeight(),
							zIndex: this.getStartZIndex() + 1,
							opacity: 0
						}).appendTo(document.body);
					}
					this.disabled = true;
				}
			},
			docClick: function(e) {
				// hide on any click outside the menu or on a menu link
				if (this.visibleSubMenus.length && !$.contains(this.$root[0], e.target) || $(e.target).is('a')) {
					this.menuHideAll();
				}
			},
			docTouchEnd: function(e) {
				if (!this.lastTouch) {
					return;
				}
				if (this.visibleSubMenus.length && (this.lastTouch.x2 === undefined || this.lastTouch.x1 == this.lastTouch.x2) && (this.lastTouch.y2 === undefined || this.lastTouch.y1 == this.lastTouch.y2) && (!this.lastTouch.target || !$.contains(this.$root[0], this.lastTouch.target))) {
					if (this.hideTimeout) {
						clearTimeout(this.hideTimeout);
						this.hideTimeout = 0;
					}
					// hide with a delay to prevent triggering accidental unwanted click on some page element
					var self = this;
					this.hideTimeout = setTimeout(function() { self.menuHideAll(); }, 350);
				}
				this.lastTouch = null;
			},
			docTouchMove: function(e) {
				if (!this.lastTouch) {
					return;
				}
				var touchPoint = e.originalEvent.touches[0];
				this.lastTouch.x2 = touchPoint.pageX;
				this.lastTouch.y2 = touchPoint.pageY;
			},
			docTouchStart: function(e) {
				var touchPoint = e.originalEvent.touches[0];
				this.lastTouch = { x1: touchPoint.pageX, y1: touchPoint.pageY, target: touchPoint.target };
			},
			enable: function() {
				if (this.disabled) {
					if (this.$disableOverlay) {
						this.$disableOverlay.remove();
						this.$disableOverlay = null;
					}
					this.disabled = false;
				}
			},
			getHeight: function($elm) {
				return this.getOffset($elm, true);
			},
			// returns precise width/height float values in IE9+, FF4+, recent WebKit
			// http://vadikom.com/dailies/offsetwidth-offsetheight-useless-in-ie9-firefox4/
			getOffset: function($elm, height) {
				var old;
				if ($elm.css('display') == 'none') {
					old = { position: $elm[0].style.position, visibility: $elm[0].style.visibility };
					$elm.css({ position: 'absolute', visibility: 'hidden' }).show();
				}
				var defaultView = $elm[0].ownerDocument.defaultView,
					compStyle = defaultView && defaultView.getComputedStyle && defaultView.getComputedStyle($elm[0], null),
					val = compStyle && parseFloat(compStyle[height ? 'height' : 'width']);
				if (val) {
					val += parseFloat(compStyle[height ? 'paddingTop' : 'paddingLeft'])
	 					+ parseFloat(compStyle[height ? 'paddingBottom' : 'paddingRight'])
	 					+ parseInt(compStyle[height ? 'borderTopWidth' : 'borderLeftWidth'])
	 					+ parseInt(compStyle[height ? 'borderBottomWidth' : 'borderRightWidth']);
				} else {
					val = height ? $elm[0].offsetHeight : $elm[0].offsetWidth;
				}
				if (old) {
					$elm.hide().css(old);
				}
				return val;
			},
			getWidth: function($elm) {
				return this.getOffset($elm);
			},
			getStartZIndex: function() {
				var zIndex = parseInt(this.$root.css('z-index'));
				return !isNaN(zIndex) ? zIndex : 1;
			},
			handleEvents: function() {
				return !this.disabled && this.isCSSOn();
			},
			handleItemEvents: function($a) {
				return this.handleEvents() && !this.isLinkInMegaMenu($a);
			},
			isCollapsible: function() {
				return this.$firstSub.css('position') == 'static';
			},
			isCSSOn: function() {
				return this.$firstLink.css('display') == 'block';
			},
			isFixed: function() {
				return this.$root.css('position') == 'fixed';
			},
			isLinkInMegaMenu: function($a) {
				return !$a.parent().parent().dataSM('level');
			},
			isTouchMode: function() {
				return !mouse || this.isCollapsible();
			},
			itemActivate: function($a) {
				var $li = $a.parent(),
					$ul = $li.parent(),
					level = $ul.dataSM('level');
				// if for some reason the parent item is not activated (e.g. this is an API call to activate the item), activate all parent items first
				if (level > 1 && (!this.activatedItems[level - 2] || this.activatedItems[level - 2][0] != $ul.dataSM('parent-a')[0])) {
					var self = this;
					$($ul.parentsUntil('[data-smartmenus-id]', 'ul').get().reverse()).add($ul).each(function() {
						self.itemActivate($(this).dataSM('parent-a'));
					});
				}
				// hide any visible deeper level sub menus
				if (this.visibleSubMenus.length > level) {
					for (var i = this.visibleSubMenus.length - 1, l = !this.activatedItems[level - 1] || this.activatedItems[level - 1][0] != $a[0] ? level - 1 : level; i > l; i--) {
						this.menuHide(this.visibleSubMenus[i]);
					}
				}
				// save new active item and sub menu for this level
				this.activatedItems[level - 1] = $a;
				this.visibleSubMenus[level - 1] = $ul;
				if (this.$root.triggerHandler('activate.smapi', $a[0]) === false) {
					return;
				}
				// show the sub menu if this item has one
				var $sub = $li.dataSM('sub');
				if ($sub && (this.isTouchMode() || (!this.opts.showOnClick || this.clickActivated))) {
					this.menuShow($sub);
				}
			},
			itemBlur: function(e) {
				var $a = $(e.currentTarget);
				if (!this.handleItemEvents($a)) {
					return;
				}
				this.$root.triggerHandler('blur.smapi', $a[0]);
			},
			itemClick: function(e) {
				var $a = $(e.currentTarget);
				if (!this.handleItemEvents($a)) {
					return;
				}
				$a.removeDataSM('mousedown');
				if (this.$root.triggerHandler('click.smapi', $a[0]) === false) {
					return false;
				}
				var $sub = $a.parent().dataSM('sub');
				if (this.isTouchMode()) {
					// undo fix: prevent the address bar on iPhone from sliding down when expanding a sub menu
					if ($a.dataSM('href')) {
						$a.attr('href', $a.dataSM('href')).removeDataSM('href');
					}
					// if the sub is not visible
					if ($sub && (!$sub.dataSM('shown-before') || !$sub.is(':visible'))) {
						// try to activate the item and show the sub
						this.itemActivate($a);
						// if "itemActivate" showed the sub, prevent the click so that the link is not loaded
						// if it couldn't show it, then the sub menus are disabled with an !important declaration (e.g. via mobile styles) so let the link get loaded
						if ($sub.is(':visible')) {
							return false;
						}
					}
				} else if (this.opts.showOnClick && $a.parent().parent().dataSM('level') == 1 && $sub) {
					this.clickActivated = true;
					this.menuShow($sub);
					return false;
				}
				if ($a.hasClass('disabled')) {
					return false;
				}
				if (this.$root.triggerHandler('select.smapi', $a[0]) === false) {
					return false;
				}
			},
			itemDown: function(e) {
				var $a = $(e.currentTarget);
				if (!this.handleItemEvents($a)) {
					return;
				}
				$a.dataSM('mousedown', true);
			},
			itemEnter: function(e) {
				var $a = $(e.currentTarget);
				if (!this.handleItemEvents($a)) {
					return;
				}
				if (!this.isTouchMode()) {
					if (this.showTimeout) {
						clearTimeout(this.showTimeout);
						this.showTimeout = 0;
					}
					var self = this;
					this.showTimeout = setTimeout(function() { self.itemActivate($a); }, this.opts.showOnClick && $a.parent().parent().dataSM('level') == 1 ? 1 : this.opts.showTimeout);
				}
				this.$root.triggerHandler('mouseenter.smapi', $a[0]);
			},
			itemFocus: function(e) {
				var $a = $(e.currentTarget);
				if (!this.handleItemEvents($a)) {
					return;
				}
				// fix (the mousedown check): in some browsers a tap/click produces consecutive focus + click events so we don't need to activate the item on focus
				if ((!this.isTouchMode() || !$a.dataSM('mousedown')) && (!this.activatedItems.length || this.activatedItems[this.activatedItems.length - 1][0] != $a[0])) {
					this.itemActivate($a);
				}
				this.$root.triggerHandler('focus.smapi', $a[0]);
			},
			itemLeave: function(e) {
				var $a = $(e.currentTarget);
				if (!this.handleItemEvents($a)) {
					return;
				}
				if (!this.isTouchMode()) {
					if ($a[0].blur) {
						$a[0].blur();
					}
					if (this.showTimeout) {
						clearTimeout(this.showTimeout);
						this.showTimeout = 0;
					}
				}
				$a.removeDataSM('mousedown');
				this.$root.triggerHandler('mouseleave.smapi', $a[0]);
			},
			itemTouchEnd: function(e) {
				var $a = $(e.currentTarget);
				if (!this.handleItemEvents($a)) {
					return;
				}
				// prevent the address bar on iPhone from sliding down when expanding a sub menu
				var $sub = $a.parent().dataSM('sub');
				if ($a.attr('href').charAt(0) !== '#' && $sub && (!$sub.dataSM('shown-before') || !$sub.is(':visible'))) {
					$a.dataSM('href', $a.attr('href'));
					$a.attr('href', '#');
				}
			},
			menuFixLayout: function($ul) {
				// fixes a menu that is being shown for the first time
				if (!$ul.dataSM('shown-before')) {
					$ul.hide().dataSM('shown-before', true);
					// fix the layout of the items in IE<8
					if (IElt8) {
						$ul.children().css({ styleFloat: 'left', width: '100%' });
					}
				}
			},
			menuHide: function($sub) {
				if (this.$root.triggerHandler('beforehide.smapi', $sub[0]) === false) {
					return;
				}
				$sub.stop(true, true);
				if ($sub.is(':visible')) {
					var complete = function() {
						// unset z-index
						if (IElt9) {
							$sub.parent().css('z-index', '');
						} else {
							$sub.css('z-index', '');
						}
					};
					// if sub is collapsible (mobile view)
					if (this.isCollapsible()) {
						if (this.opts.collapsibleHideFunction) {
							this.opts.collapsibleHideFunction.call(this, $sub, complete);
						} else {
							$sub.hide(this.opts.collapsibleHideDuration, complete);
						}
					} else {
						if (this.opts.hideFunction) {
							this.opts.hideFunction.call(this, $sub, complete);
						} else {
							$sub.hide(this.opts.hideDuration, complete);
						}
					}
					// remove IE iframe shim
					if ($sub.dataSM('ie-shim')) {
						$sub.dataSM('ie-shim').remove();
					}
					// deactivate scrolling if it is activated for this sub
					if ($sub.dataSM('scroll')) {
						$sub.unbind('.smartmenus_scroll').removeDataSM('scroll').dataSM('scroll-arrows').hide();
					}
					// unhighlight parent item
					$sub.dataSM('parent-a').removeClass('highlighted');
					var level = $sub.dataSM('level');
					this.activatedItems.splice(level - 1, 1);
					this.visibleSubMenus.splice(level - 1, 1);
					this.$root.triggerHandler('hide.smapi', $sub[0]);
				}
			},
			menuHideAll: function() {
				if (this.showTimeout) {
					clearTimeout(this.showTimeout);
					this.showTimeout = 0;
				}
				// hide all subs
				for (var i = this.visibleSubMenus.length - 1; i > 0; i--) {
					this.menuHide(this.visibleSubMenus[i]);
				}
				// hide root if it's popup
				if (this.opts.isPopup) {
					this.$root.stop(true, true);
					if (this.$root.is(':visible')) {
						if (this.opts.hideFunction) {
							this.opts.hideFunction.call(this, this.$root);
						} else {
							this.$root.hide(this.opts.hideDuration);
						}
						// remove IE iframe shim
						if (this.$root.dataSM('ie-shim')) {
							this.$root.dataSM('ie-shim').remove();
						}
					}
				}
				this.activatedItems = [];
				this.visibleSubMenus = [];
				this.clickActivated = false;
				// reset z-index increment
				this.zIndexInc = 0;
			},
			menuIframeShim: function($ul) {
				// create iframe shim for the menu
				if (IE && this.opts.overlapControlsInIE && !$ul.dataSM('ie-shim')) {
					$ul.dataSM('ie-shim', $('<iframe/>').attr({ src: 'javascript:0', tabindex: -9 })
						.css({ position: 'absolute', top: 'auto', left: '0', opacity: 0, border: '0' })
					);
				}
			},
			menuInit: function($ul) {
				if (!$ul.dataSM('in-mega')) {
					this.subMenus.push($ul);
					// mark UL's in mega drop downs (if any) so we can neglect them
					if ($ul.hasClass('mega-menu')) {
						$ul.find('ul').dataSM('in-mega', true);
					}
					// get level (much faster than, for example, using parentsUntil)
					var level = 2,
						par = $ul[0];
					while ((par = par.parentNode.parentNode) != this.$root[0]) {
						level++;
					}
					// cache stuff
					$ul.dataSM('parent-a', $ul.prevAll('a'))
						.dataSM('level', level)
						.parent().dataSM('sub', $ul);
					// add sub indicator to parent item
					if (this.opts.subIndicators) {
						$ul.dataSM('parent-a').addClass('has-submenu')[this.opts.subIndicatorsPos](this.$subArrow.clone());
					}
				}
			},
			menuPosition: function($sub) {
				var $a = $sub.dataSM('parent-a'),
					$ul = $sub.parent().parent(),
					level = $sub.dataSM('level'),
					subW = this.getWidth($sub),
					subH = this.getHeight($sub),
					itemOffset = $a.offset(),
					itemX = itemOffset.left,
					itemY = itemOffset.top,
					itemW = this.getWidth($a),
					itemH = this.getHeight($a),
					$win = $(window),
					winX = $win.scrollLeft(),
					winY = $win.scrollTop(),
					winW = $win.width(),
					winH = $win.height(),
					horizontalParent = $ul.hasClass('sm') && !$ul.hasClass('sm-vertical'),
					subOffsetX = level == 2 ? this.opts.mainMenuSubOffsetX : this.opts.subMenusSubOffsetX,
					subOffsetY = level == 2 ? this.opts.mainMenuSubOffsetY : this.opts.subMenusSubOffsetY,
					x, y;
				if (horizontalParent) {
					x = this.opts.rightToLeftSubMenus ? itemW - subW - subOffsetX : subOffsetX;
					y = this.opts.bottomToTopSubMenus ? -subH - subOffsetX : itemH + subOffsetY;
				} else {
					x = this.opts.rightToLeftSubMenus ? subOffsetX - subW : itemW - subOffsetX;
					y = this.opts.bottomToTopSubMenus ? itemH - subOffsetY - subH : subOffsetY;
				}
				if (this.opts.keepInViewport && !this.isCollapsible()) {
					if (this.isFixed()) {
						itemX -= winX;
						itemY -= winY;
						winX = winY = 0;
					}
					var absX = itemX + x,
						absY = itemY + y;
					if (this.opts.rightToLeftSubMenus && absX < winX) {
						x = horizontalParent ? winX - absX + x : itemW - subOffsetX;
					} else if (!this.opts.rightToLeftSubMenus && absX + subW > winX + winW) {
						x = horizontalParent ? winX + winW - subW - absX + x : subOffsetX - subW;
					}
					if (!horizontalParent) {
						if (subH < winH && absY + subH > winY + winH) {
							y += winY + winH - subH - absY;
						} else if (subH >= winH || absY < winY) {
							y += winY - absY;
						}
					}
					// do we need scrolling?
					// 0.49 added for the sake of IE9/FF4+ where we might be dealing with float numbers for "subH"
					if (mouse && (horizontalParent && (absY + subH > winY + winH + 0.49 || absY < winY) || !horizontalParent && subH > winH + 0.49)) {
						var self = this;
						if (!$sub.dataSM('scroll-arrows')) {
							$sub.dataSM('scroll-arrows', $([$('<span class="scroll-up"><span class="scroll-up-arrow"></span></span>')[0], $('<span class="scroll-down"><span class="scroll-down-arrow"></span></span>')[0]])
								.bind({
									mouseenter: function() { self.menuScroll($sub, $(this).hasClass('scroll-up')); },
									mouseleave: function(e) {
										self.menuScrollStop($sub);
										self.menuScrollOut($sub, e);
									},
									'mousewheel DOMMouseScroll': function(e) { e.preventDefault(); }
								})
								.insertAfter($sub)
							);
						}
						// bind events to show/hide arrows on hover and save scrolling data for this sub
						var vportY = winY - (itemY + itemH);
						$sub.dataSM('scroll', {
								vportY: vportY,
								subH: subH,
								winH: winH,
								step: 1
							})
							.bind({
								'mouseover.smartmenus_scroll': function(e) { self.menuScrollOver($sub, e); },
								'mouseout.smartmenus_scroll': function(e) { self.menuScrollOut($sub, e); },
								'mousewheel.smartmenus_scroll DOMMouseScroll.smartmenus_scroll': function(e) { self.menuScrollMousewheel($sub, e); }
							})
							.dataSM('scroll-arrows').css({ top: 'auto', left: '0', marginLeft: x + (parseInt($sub.css('border-left-width')) || 0), width: this.getWidth($sub) - (parseInt($sub.css('border-left-width')) || 0) - (parseInt($sub.css('border-right-width')) || 0), zIndex: this.getStartZIndex() + this.zIndexInc })
							.eq(0).css('margin-top', vportY).end()
							.eq(1).css('margin-top', vportY + winH - this.getHeight($sub.dataSM('scroll-arrows').eq(1))).end()
							.eq(horizontalParent && this.opts.bottomToTopSubMenus ? 0 : 1).show();
					}
				}
				$sub.css({ top: 'auto', left: '0', marginLeft: x, marginTop: y - itemH });
				// IE iframe shim
				this.menuIframeShim($sub);
				if ($sub.dataSM('ie-shim')) {
					$sub.dataSM('ie-shim').css({ zIndex: $sub.css('z-index'), width: subW, height: subH, marginLeft: x, marginTop: y - itemH });
				}
			},
			menuScroll: function($sub, up, wheel) {
				var y = parseFloat($sub.css('margin-top')),
					scroll = $sub.dataSM('scroll'),
					end = scroll.vportY + (up ? 0 : scroll.winH - scroll.subH),
					step = wheel || !this.opts.scrollAccelerate ? this.opts.scrollStep : Math.floor($sub.dataSM('scroll').step);
				$sub.add($sub.dataSM('ie-shim')).css('margin-top', Math.abs(end - y) > step ? y + (up ? step : -step) : end);
				y = parseFloat($sub.css('margin-top'));
				// show opposite arrow if appropriate
				if (up && y + scroll.subH > scroll.vportY + scroll.winH || !up && y < scroll.vportY) {
					$sub.dataSM('scroll-arrows').eq(up ? 1 : 0).show();
				}
				// accelerate when not using mousewheel to scroll
				if (!wheel && this.opts.scrollAccelerate && $sub.dataSM('scroll').step < this.opts.scrollStep) {
					$sub.dataSM('scroll').step += 0.5;
				}
				// "y" and "end" might be float numbers in IE9/FF4+ so this weird way to check is used
				if (Math.abs(y - end) < 1) {
					$sub.dataSM('scroll-arrows').eq(up ? 0 : 1).hide();
					$sub.dataSM('scroll').step = 1;
				} else if (!wheel) {
					var self = this;
					this.scrollTimeout = setTimeout(function() { self.menuScroll($sub, up); }, this.opts.scrollInterval);
				}
			},
			menuScrollMousewheel: function($sub, e) {
				var $closestSub = $(e.target).closest('ul');
				while ($closestSub.dataSM('in-mega')) {
					$closestSub = $closestSub.parent().closest('ul');
				}
				if ($closestSub[0] == $sub[0]) {
					var up = (e.originalEvent.wheelDelta || -e.originalEvent.detail) > 0;
					if ($sub.dataSM('scroll-arrows').eq(up ? 0 : 1).is(':visible')) {
						this.menuScroll($sub, up, true);
					}
				}
				e.preventDefault();
			},
			menuScrollOut: function($sub, e) {
				var reClass = /^scroll-(up|down)/,
					$closestSub = $(e.relatedTarget).closest('ul');
				while ($closestSub.dataSM('in-mega')) {
					$closestSub = $closestSub.parent().closest('ul');
				}
				if (!reClass.test((e.relatedTarget || '').className) && ($sub[0] != e.relatedTarget && !$.contains($sub[0], e.relatedTarget) || $closestSub[0] != $sub[0])) {
					$sub.dataSM('scroll-arrows').css('visibility', 'hidden');
				}
			},
			menuScrollOver: function($sub, e) {
				var reClass = /^scroll-(up|down)/,
					$closestSub = $(e.target).closest('ul');
				while ($closestSub.dataSM('in-mega')) {
					$closestSub = $closestSub.parent().closest('ul');
				}
				if (!reClass.test(e.target.className) && $closestSub[0] == $sub[0]) {
					$sub.dataSM('scroll-arrows').css('visibility', 'visible');
				}
			},
			menuScrollStop: function($sub) {
				if (this.scrollTimeout) {
					clearTimeout(this.scrollTimeout);
					this.scrollTimeout = 0;
					$sub.dataSM('scroll').step = 1;
				}
			},
			menuShow: function($sub) {
				if (!$sub.dataSM('beforefirstshowfired')) {
					$sub.dataSM('beforefirstshowfired', true);
					if (this.$root.triggerHandler('beforefirstshow.smapi', $sub[0]) === false) {
						return;
					}
				}
				if (this.$root.triggerHandler('beforeshow.smapi', $sub[0]) === false) {
					return;
				}
				this.menuFixLayout($sub);
				$sub.stop(true, true);
				if (!$sub.is(':visible')) {
					// set z-index - for IE < 9 set it to the parent LI
					var zIndex = this.getStartZIndex() + (++this.zIndexInc);
					if (IElt9) {
						$sub.parent().css('z-index', zIndex);
					} else {
						$sub.css('z-index', zIndex);
					}
					// highlight parent item
					if (this.opts.keepHighlighted || this.isCollapsible()) {
						$sub.dataSM('parent-a').addClass('highlighted');
					}
					// min/max-width fix - no way to rely purely on CSS as all UL's are nested
					if (this.opts.subMenusMinWidth || this.opts.subMenusMaxWidth) {
						if (!IElt8) {
							$sub.css({ width: 'auto', minWidth: '', maxWidth: '' }).addClass('sm-nowrap');
							if (this.opts.subMenusMinWidth) {
							 	$sub.css('min-width', this.opts.subMenusMinWidth);
							}
							if (this.opts.subMenusMaxWidth) {
							 	var noMaxWidth = this.getWidth($sub);
							 	$sub.css('max-width', this.opts.subMenusMaxWidth);
								if (noMaxWidth > this.getWidth($sub)) {
									$sub.removeClass('sm-nowrap').css('width', this.opts.subMenusMaxWidth);
								}
							}
						// IE6,7
 						} else {
							$sub.children().css('styleFloat', 'none');
							if (IE6) {
								$sub.width(this.opts.subMenusMinWidth ? this.opts.subMenusMinWidth : 1)
									.children().children('a').css('white-space', 'nowrap');
							} else { // IE7
								$sub.css({ width: 'auto', minWidth: '', maxWidth: '' }).addClass('sm-nowrap');
								if (this.opts.subMenusMinWidth) {
							         	$sub.css('min-width', this.opts.subMenusMinWidth);
								}
							}
							if (this.opts.subMenusMaxWidth) {
								var noMaxWidth = $sub.width();
								if (IE6) {
							 		var maxWidth = $sub.css({ width: this.opts.subMenusMaxWidth, overflowX: 'hidden', overflowY: 'hidden' }).width();
									if (noMaxWidth > maxWidth) {
										$sub.css({ width: maxWidth, overflowX: 'visible', overflowY: 'visible' }).children().children('a').css('white-space', '');
									} else {
										$sub.css({ width: noMaxWidth, overflowX: 'visible', overflowY: 'visible' });
									}
								} else { // IE7
									$sub.css('max-width', this.opts.subMenusMaxWidth);
									if (noMaxWidth > $sub.width()) {
										$sub.removeClass('sm-nowrap').css('width', this.opts.subMenusMaxWidth);
									} else {
										$sub.width(noMaxWidth);
									}
								}
							} else {
							 	$sub.width($sub.width());
							}
							$sub.children().css('styleFloat', 'left');
						}
					}
					this.menuPosition($sub);
					// insert IE iframe shim
					if ($sub.dataSM('ie-shim')) {
						$sub.dataSM('ie-shim').insertBefore($sub);
					}
					var complete = function() {
						// fix: "overflow: hidden;" is not reset on animation complete in jQuery < 1.9.0 in Chrome when global "box-sizing: border-box;" is used
						$sub.css('overflow', '');
					};
					// if sub is collapsible (mobile view)
					if (this.isCollapsible()) {
						if (this.opts.collapsibleShowFunction) {
							this.opts.collapsibleShowFunction.call(this, $sub, complete);
						} else {
							$sub.show(this.opts.collapsibleShowDuration, complete);
						}
					} else {
						if (this.opts.showFunction) {
							this.opts.showFunction.call(this, $sub, complete);
						} else {
							$sub.show(this.opts.showDuration, complete);
						}
					}
					// save new sub menu for this level
					this.visibleSubMenus[$sub.dataSM('level') - 1] = $sub;
					this.$root.triggerHandler('show.smapi', $sub[0]);
				}
			},
			popupHide: function(noHideTimeout) {
				if (this.hideTimeout) {
					clearTimeout(this.hideTimeout);
					this.hideTimeout = 0;
				}
				var self = this;
				this.hideTimeout = setTimeout(function() {
					self.menuHideAll();
				}, noHideTimeout ? 1 : this.opts.hideTimeout);
			},
			popupShow: function(left, top) {
				if (!this.opts.isPopup) {
					alert('SmartMenus jQuery Error:\n\nIf you want to show this menu via the "popupShow" method, set the isPopup:true option.');
					return;
				}
				if (this.hideTimeout) {
					clearTimeout(this.hideTimeout);
					this.hideTimeout = 0;
				}
				this.menuFixLayout(this.$root);
				this.$root.stop(true, true);
				if (!this.$root.is(':visible')) {
					this.$root.css({ left: left, top: top });
					// IE iframe shim
					this.menuIframeShim(this.$root);
					if (this.$root.dataSM('ie-shim')) {
						this.$root.dataSM('ie-shim').css({ zIndex: this.$root.css('z-index'), width: this.getWidth(this.$root), height: this.getHeight(this.$root), left: left, top: top }).insertBefore(this.$root);
					}
					// show menu
					if (this.opts.showFunction) {
						this.opts.showFunction.call(this, this.$root);
					} else {
						this.$root.show(this.opts.showDuration);
					}
					this.visibleSubMenus[0] = this.$root;
				}
			},
			refresh: function() {
				this.menuHideAll();
				this.$root.find('ul').each(function() {
						var $this = $(this);
						if ($this.dataSM('scroll-arrows')) {
							$this.dataSM('scroll-arrows').remove();
						}
					})
					.removeDataSM('in-mega')
					.removeDataSM('shown-before')
					.removeDataSM('ie-shim')
					.removeDataSM('scroll-arrows')
					.removeDataSM('parent-a')
					.removeDataSM('level')
					.removeDataSM('beforefirstshowfired');
				this.$root.find('a.has-submenu').removeClass('has-submenu')
					.parent().removeDataSM('sub');
				if (this.opts.subIndicators) {
					this.$root.find('span.sub-arrow').remove();
				}
				if (this.opts.markCurrentItem) {
					this.$root.find('a.current').removeClass('current');
				}
				this.subMenus = [];
				this.init(true);
			},
			rootOut: function(e) {
				if (!this.handleEvents() || this.isTouchMode() || e.target == this.$root[0]) {
					return;
				}
				if (this.hideTimeout) {
					clearTimeout(this.hideTimeout);
					this.hideTimeout = 0;
				}
				if (!this.opts.showOnClick || !this.opts.hideOnClick) {
					var self = this;
					this.hideTimeout = setTimeout(function() { self.menuHideAll(); }, this.opts.hideTimeout);
				}
			},
			rootOver: function(e) {
				if (!this.handleEvents() || this.isTouchMode() || e.target == this.$root[0]) {
					return;
				}
				if (this.hideTimeout) {
					clearTimeout(this.hideTimeout);
					this.hideTimeout = 0;
				}
			},
			winResize: function(e) {
				if (!this.handleEvents()) {
					// we still need to resize the disable overlay if it's visible
					if (this.$disableOverlay) {
						var pos = this.$root.offset();
	 					this.$disableOverlay.css({
							top: pos.top,
							left: pos.left,
							width: this.$root.outerWidth(),
							height: this.$root.outerHeight()
						});
					}
					return;
				}
				// hide sub menus on resize - on mobile do it only on orientation change
				if (!this.isCollapsible() && (!('onorientationchange' in window) || e.type == 'orientationchange')) {
					if (this.activatedItems.length) {
						this.activatedItems[this.activatedItems.length - 1][0].blur();
					}
					this.menuHideAll();
				}
			}
		}
	});

	$.fn.dataSM = function(key, val) {
		if (val) {
			return this.data(key + '_smartmenus', val);
		}
		return this.data(key + '_smartmenus');
	}

	$.fn.removeDataSM = function(key) {
		return this.removeData(key + '_smartmenus');
	}

	$.fn.smartmenus = function(options) {
		if (typeof options == 'string') {
			var args = arguments,
				method = options;
			Array.prototype.shift.call(args);
			return this.each(function() {
				var smartmenus = $(this).data('smartmenus');
				if (smartmenus && smartmenus[method]) {
					smartmenus[method].apply(smartmenus, args);
				}
			});
		}
		var opts = $.extend({}, $.fn.smartmenus.defaults, options);
		return this.each(function() {
			new $.SmartMenus(this, opts);
		});
	}

	// default settings
	$.fn.smartmenus.defaults = {
		isPopup:		false,		// is this a popup menu (can be shown via the popupShow/popupHide methods) or a permanent menu bar
		mainMenuSubOffsetX:	0,		// pixels offset from default position
		mainMenuSubOffsetY:	0,		// pixels offset from default position
		subMenusSubOffsetX:	0,		// pixels offset from default position
		subMenusSubOffsetY:	0,		// pixels offset from default position
		subMenusMinWidth:	'10em',		// min-width for the sub menus (any CSS unit) - if set, the fixed width set in CSS will be ignored
		subMenusMaxWidth:	'20em',		// max-width for the sub menus (any CSS unit) - if set, the fixed width set in CSS will be ignored
		subIndicators: 		true,		// create sub menu indicators - creates a SPAN and inserts it in the A
		subIndicatorsPos: 	'append',	// position of the SPAN relative to the menu item content ('prepend', 'append')
		subIndicatorsText:	'<span class="plus">+</span><span class="minus">-</span>',		// [optionally] add text in the SPAN (e.g. '+') (you may want to check the CSS for the sub indicators too)
		scrollStep: 		30,		// pixels step when scrolling long sub menus that do not fit in the viewport height
		scrollInterval:		30,		// interval between each scrolling step
		scrollAccelerate:	true,		// accelerate scrolling or use a fixed step
		showTimeout:		75,		// timeout before showing the sub menus
		hideTimeout:		500,		// timeout before hiding the sub menus
		showDuration:		0,		// duration for show animation - set to 0 for no animation - matters only if showFunction:null
		showFunction:		null,		// custom function to use when showing a sub menu (the default is the jQuery 'show')
							// don't forget to call complete() at the end of whatever you do
							// e.g.: function($ul, complete) { $ul.fadeIn(250, complete); }
		hideDuration:		0,		// duration for hide animation - set to 0 for no animation - matters only if hideFunction:null
		hideFunction:		function($ul, complete) { $ul.fadeOut(200, complete); },	// custom function to use when hiding a sub menu (the default is the jQuery 'hide')
							// don't forget to call complete() at the end of whatever you do
							// e.g.: function($ul, complete) { $ul.fadeOut(250, complete); }
		collapsibleShowDuration:0,		// duration for show animation for collapsible sub menus - matters only if collapsibleShowFunction:null
		collapsibleShowFunction:function($ul, complete) { $ul.slideDown(200, complete); },	// custom function to use when showing a collapsible sub menu
							// (i.e. when mobile styles are used to make the sub menus collapsible)
		collapsibleHideDuration:0,		// duration for hide animation for collapsible sub menus - matters only if collapsibleHideFunction:null
		collapsibleHideFunction:function($ul, complete) { $ul.slideUp(200, complete); },	// custom function to use when hiding a collapsible sub menu
							// (i.e. when mobile styles are used to make the sub menus collapsible)
		showOnClick:		false,		// show the first-level sub menus onclick instead of onmouseover (matters only for mouse input)
		hideOnClick:		true,		// hide the sub menus on click/tap anywhere on the page
		keepInViewport:		true,		// reposition the sub menus if needed to make sure they always appear inside the viewport
		keepHighlighted:	true,		// keep all ancestor items of the current sub menu highlighted (adds the 'highlighted' class to the A's)
		markCurrentItem:	false,		// automatically add the 'current' class to the A element of the item linking to the current URL
		markCurrentTree:	true,		// add the 'current' class also to the A elements of all ancestor items of the current item
		rightToLeftSubMenus:	false,		// right to left display of the sub menus (check the CSS for the sub indicators' position)
		bottomToTopSubMenus:	false,		// bottom to top display of the sub menus
		overlapControlsInIE:	true		// make sure sub menus appear on top of special OS controls in IE (i.e. SELECT, OBJECT, EMBED, etc.)
	};

})(jQuery);
/*
 *  jQuery OwlCarousel v1.3.2
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */

/*JS Lint helpers: */
/*global dragMove: false, dragEnd: false, $, jQuery, alert, window, document */
/*jslint nomen: true, continue:true */

if (typeof Object.create !== "function") {
    Object.create = function (obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    };
}
(function ($, window, document) {

    var Carousel = {
        init : function (options, el) {
            var base = this;

            base.$elem = $(el);
            base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);

            base.userOptions = options;
            base.loadContent();
        },

        loadContent : function () {
            var base = this, url;

            function getData(data) {
                var i, content = "";
                if (typeof base.options.jsonSuccess === "function") {
                    base.options.jsonSuccess.apply(this, [data]);
                } else {
                    for (i in data.owl) {
                        if (data.owl.hasOwnProperty(i)) {
                            content += data.owl[i].item;
                        }
                    }
                    base.$elem.html(content);
                }
                base.logIn();
            }

            if (typeof base.options.beforeInit === "function") {
                base.options.beforeInit.apply(this, [base.$elem]);
            }

            if (typeof base.options.jsonPath === "string") {
                url = base.options.jsonPath;
                $.getJSON(url, getData);
            } else {
                base.logIn();
            }
        },

        logIn : function () {
            var base = this;

            base.$elem.data("owl-originalStyles", base.$elem.attr("style"))
                      .data("owl-originalClasses", base.$elem.attr("class"));

            base.$elem.css({opacity: 0});
            base.orignalItems = base.options.items;
            base.checkBrowser();
            base.wrapperWidth = 0;
            base.checkVisible = null;
            base.setVars();
        },

        setVars : function () {
            var base = this;
            if (base.$elem.children().length === 0) {return false; }
            base.baseClass();
            base.eventTypes();
            base.$userItems = base.$elem.children();
            base.itemsAmount = base.$userItems.length;
            base.wrapItems();
            base.$owlItems = base.$elem.find(".owl-item");
            base.$owlWrapper = base.$elem.find(".owl-wrapper");
            base.playDirection = "next";
            base.prevItem = 0;
            base.prevArr = [0];
            base.currentItem = 0;
            base.customEvents();
            base.onStartup();
        },

        onStartup : function () {
            var base = this;
            base.updateItems();
            base.calculateAll();
            base.buildControls();
            base.updateControls();
            base.response();
            base.moveEvents();
            base.stopOnHover();
            base.owlStatus();

            if (base.options.transitionStyle !== false) {
                base.transitionTypes(base.options.transitionStyle);
            }
            if (base.options.autoPlay === true) {
                base.options.autoPlay = 5000;
            }
            base.play();

            base.$elem.find(".owl-wrapper").css("display", "block");

            if (!base.$elem.is(":visible")) {
                base.watchVisibility();
            } else {
                base.$elem.css("opacity", 1);
            }
            base.onstartup = false;
            base.eachMoveUpdate();
            if (typeof base.options.afterInit === "function") {
                base.options.afterInit.apply(this, [base.$elem]);
            }
        },

        eachMoveUpdate : function () {
            var base = this;

            if (base.options.lazyLoad === true) {
                base.lazyLoad();
            }
            if (base.options.autoHeight === true) {
                base.autoHeight();
            }
            base.onVisibleItems();

            if (typeof base.options.afterAction === "function") {
                base.options.afterAction.apply(this, [base.$elem]);
            }
        },

        updateVars : function () {
            var base = this;
            if (typeof base.options.beforeUpdate === "function") {
                base.options.beforeUpdate.apply(this, [base.$elem]);
            }
            base.watchVisibility();
            base.updateItems();
            base.calculateAll();
            base.updatePosition();
            base.updateControls();
            base.eachMoveUpdate();
            if (typeof base.options.afterUpdate === "function") {
                base.options.afterUpdate.apply(this, [base.$elem]);
            }
        },

        reload : function () {
            var base = this;
            window.setTimeout(function () {
                base.updateVars();
            }, 0);
        },

        watchVisibility : function () {
            var base = this;

            if (base.$elem.is(":visible") === false) {
                base.$elem.css({opacity: 0});
                window.clearInterval(base.autoPlayInterval);
                window.clearInterval(base.checkVisible);
            } else {
                return false;
            }
            base.checkVisible = window.setInterval(function () {
                if (base.$elem.is(":visible")) {
                    base.reload();
                    base.$elem.animate({opacity: 1}, 200);
                    window.clearInterval(base.checkVisible);
                }
            }, 500);
        },

        wrapItems : function () {
            var base = this;
            base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
            base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
            base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
            base.$elem.css("display", "block");
        },

        baseClass : function () {
            var base = this,
                hasBaseClass = base.$elem.hasClass(base.options.baseClass),
                hasThemeClass = base.$elem.hasClass(base.options.theme);

            if (!hasBaseClass) {
                base.$elem.addClass(base.options.baseClass);
            }

            if (!hasThemeClass) {
                base.$elem.addClass(base.options.theme);
            }
        },

        updateItems : function () {
            var base = this, width, i;

            if (base.options.responsive === false) {
                return false;
            }
            if (base.options.singleItem === true) {
                base.options.items = base.orignalItems = 1;
                base.options.itemsCustom = false;
                base.options.itemsDesktop = false;
                base.options.itemsDesktopSmall = false;
                base.options.itemsTablet = false;
                base.options.itemsTabletSmall = false;
                base.options.itemsMobile = false;
                return false;
            }

            width = $(base.options.responsiveBaseWidth).width();

            if (width > (base.options.itemsDesktop[0] || base.orignalItems)) {
                base.options.items = base.orignalItems;
            }
            if (base.options.itemsCustom !== false) {
                //Reorder array by screen size
                base.options.itemsCustom.sort(function (a, b) {return a[0] - b[0]; });

                for (i = 0; i < base.options.itemsCustom.length; i += 1) {
                    if (base.options.itemsCustom[i][0] <= width) {
                        base.options.items = base.options.itemsCustom[i][1];
                    }
                }

            } else {

                if (width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false) {
                    base.options.items = base.options.itemsDesktop[1];
                }

                if (width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false) {
                    base.options.items = base.options.itemsDesktopSmall[1];
                }

                if (width <= base.options.itemsTablet[0] && base.options.itemsTablet !== false) {
                    base.options.items = base.options.itemsTablet[1];
                }

                if (width <= base.options.itemsTabletSmall[0] && base.options.itemsTabletSmall !== false) {
                    base.options.items = base.options.itemsTabletSmall[1];
                }

                if (width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false) {
                    base.options.items = base.options.itemsMobile[1];
                }
            }

            //if number of items is less than declared
            if (base.options.items > base.itemsAmount && base.options.itemsScaleUp === true) {
                base.options.items = base.itemsAmount;
            }
        },

        response : function () {
            var base = this,
                smallDelay,
                lastWindowWidth;

            if (base.options.responsive !== true) {
                return false;
            }
            lastWindowWidth = $(window).width();

            base.resizer = function () {
                if ($(window).width() !== lastWindowWidth) {
                    if (base.options.autoPlay !== false) {
                        window.clearInterval(base.autoPlayInterval);
                    }
                    window.clearTimeout(smallDelay);
                    smallDelay = window.setTimeout(function () {
                        lastWindowWidth = $(window).width();
                        base.updateVars();
                    }, base.options.responsiveRefreshRate);
                }
            };
            $(window).resize(base.resizer);
        },

        updatePosition : function () {
            var base = this;
            base.jumpTo(base.currentItem);
            if (base.options.autoPlay !== false) {
                base.checkAp();
            }
        },

        appendItemsSizes : function () {
            var base = this,
                roundPages = 0,
                lastItem = base.itemsAmount - base.options.items;

            base.$owlItems.each(function (index) {
                var $this = $(this);
                $this
                    .css({"width": base.itemWidth})
                    .data("owl-item", Number(index));

                if (index % base.options.items === 0 || index === lastItem) {
                    if (!(index > lastItem)) {
                        roundPages += 1;
                    }
                }
                $this.data("owl-roundPages", roundPages);
            });
        },

        appendWrapperSizes : function () {
            var base = this,
                width = base.$owlItems.length * base.itemWidth;

            base.$owlWrapper.css({
                "width": width * 2,
                "left": 0
            });
            base.appendItemsSizes();
        },

        calculateAll : function () {
            var base = this;
            base.calculateWidth();
            base.appendWrapperSizes();
            base.loops();
            base.max();
        },

        calculateWidth : function () {
            var base = this;
            base.itemWidth = Math.round(base.$elem.width() / base.options.items);
        },

        max : function () {
            var base = this,
                maximum = ((base.itemsAmount * base.itemWidth) - base.options.items * base.itemWidth) * -1;
            if (base.options.items > base.itemsAmount) {
                base.maximumItem = 0;
                maximum = 0;
                base.maximumPixels = 0;
            } else {
                base.maximumItem = base.itemsAmount - base.options.items;
                base.maximumPixels = maximum;
            }
            return maximum;
        },

        min : function () {
            return 0;
        },

        loops : function () {
            var base = this,
                prev = 0,
                elWidth = 0,
                i,
                item,
                roundPageNum;

            base.positionsInArray = [0];
            base.pagesInArray = [];

            for (i = 0; i < base.itemsAmount; i += 1) {
                elWidth += base.itemWidth;
                base.positionsInArray.push(-elWidth);

                if (base.options.scrollPerPage === true) {
                    item = $(base.$owlItems[i]);
                    roundPageNum = item.data("owl-roundPages");
                    if (roundPageNum !== prev) {
                        base.pagesInArray[prev] = base.positionsInArray[i];
                        prev = roundPageNum;
                    }
                }
            }
        },

        buildControls : function () {
            var base = this;
            if (base.options.navigation === true || base.options.pagination === true) {
                base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem);
            }
            if (base.options.pagination === true) {
                base.buildPagination();
            }
            if (base.options.navigation === true) {
                base.buildButtons();
            }
        },

        buildButtons : function () {
            var base = this,
                buttonsWrapper = $("<div class=\"owl-buttons\"/>");
            base.owlControls.append(buttonsWrapper);

            base.buttonPrev = $("<div/>", {
                "class" : "owl-prev",
                "html" : base.options.navigationText[0] || ""
            });

            base.buttonNext = $("<div/>", {
                "class" : "owl-next",
                "html" : base.options.navigationText[1] || ""
            });

            buttonsWrapper
                .append(base.buttonPrev)
                .append(base.buttonNext);

            buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
            });

            buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function (event) {
                event.preventDefault();
                if ($(this).hasClass("owl-next")) {
                    base.next();
                } else {
                    base.prev();
                }
            });
        },

        buildPagination : function () {
            var base = this;

            base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
            base.owlControls.append(base.paginationWrapper);

            base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (event) {
                event.preventDefault();
                if (Number($(this).data("owl-page")) !== base.currentItem) {
                    base.goTo(Number($(this).data("owl-page")), true);
                }
            });
        },

        updatePagination : function () {
            var base = this,
                counter,
                lastPage,
                lastItem,
                i,
                paginationButton,
                paginationButtonInner;

            if (base.options.pagination === false) {
                return false;
            }

            base.paginationWrapper.html("");

            counter = 0;
            lastPage = base.itemsAmount - base.itemsAmount % base.options.items;

            for (i = 0; i < base.itemsAmount; i += 1) {
                if (i % base.options.items === 0) {
                    counter += 1;
                    if (lastPage === i) {
                        lastItem = base.itemsAmount - base.options.items;
                    }
                    paginationButton = $("<div/>", {
                        "class" : "owl-page"
                    });
                    paginationButtonInner = $("<span></span>", {
                        "text": base.options.paginationNumbers === true ? counter : "",
                        "class": base.options.paginationNumbers === true ? "owl-numbers" : ""
                    });
                    paginationButton.append(paginationButtonInner);

                    paginationButton.data("owl-page", lastPage === i ? lastItem : i);
                    paginationButton.data("owl-roundPages", counter);

                    base.paginationWrapper.append(paginationButton);
                }
            }
            base.checkPagination();
        },
        checkPagination : function () {
            var base = this;
            if (base.options.pagination === false) {
                return false;
            }
            base.paginationWrapper.find(".owl-page").each(function () {
                if ($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages")) {
                    base.paginationWrapper
                        .find(".owl-page")
                        .removeClass("active");
                    $(this).addClass("active");
                }
            });
        },

        checkNavigation : function () {
            var base = this;

            if (base.options.navigation === false) {
                return false;
            }
            if (base.options.rewindNav === false) {
                if (base.currentItem === 0 && base.maximumItem === 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if (base.currentItem === 0 && base.maximumItem !== 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.removeClass("disabled");
                } else if (base.currentItem === base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if (base.currentItem !== 0 && base.currentItem !== base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.removeClass("disabled");
                }
            }
        },

        updateControls : function () {
            var base = this;
            base.updatePagination();
            base.checkNavigation();
            if (base.owlControls) {
                if (base.options.items >= base.itemsAmount) {
                    base.owlControls.hide();
                } else {
                    base.owlControls.show();
                }
            }
        },

        destroyControls : function () {
            var base = this;
            if (base.owlControls) {
                base.owlControls.remove();
            }
        },

        next : function (speed) {
            var base = this;

            if (base.isTransition) {
                return false;
            }

            base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1;
            if (base.currentItem > base.maximumItem + (base.options.scrollPerPage === true ? (base.options.items - 1) : 0)) {
                if (base.options.rewindNav === true) {
                    base.currentItem = 0;
                    speed = "rewind";
                } else {
                    base.currentItem = base.maximumItem;
                    return false;
                }
            }
            base.goTo(base.currentItem, speed);
        },

        prev : function (speed) {
            var base = this;

            if (base.isTransition) {
                return false;
            }

            if (base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items) {
                base.currentItem = 0;
            } else {
                base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1;
            }
            if (base.currentItem < 0) {
                if (base.options.rewindNav === true) {
                    base.currentItem = base.maximumItem;
                    speed = "rewind";
                } else {
                    base.currentItem = 0;
                    return false;
                }
            }
            base.goTo(base.currentItem, speed);
        },

        goTo : function (position, speed, drag) {
            var base = this,
                goToPixel;

            if (base.isTransition) {
                return false;
            }
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem]);
            }
            if (position >= base.maximumItem) {
                position = base.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }

            base.currentItem = base.owl.currentItem = position;
            if (base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true) {
                base.swapSpeed(0);
                if (base.browser.support3d === true) {
                    base.transition3d(base.positionsInArray[position]);
                } else {
                    base.css2slide(base.positionsInArray[position], 1);
                }
                base.afterGo();
                base.singleItemTransition();
                return false;
            }
            goToPixel = base.positionsInArray[position];

            if (base.browser.support3d === true) {
                base.isCss3Finish = false;

                if (speed === true) {
                    base.swapSpeed("paginationSpeed");
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.paginationSpeed);

                } else if (speed === "rewind") {
                    base.swapSpeed(base.options.rewindSpeed);
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.rewindSpeed);

                } else {
                    base.swapSpeed("slideSpeed");
                    window.setTimeout(function () {
                        base.isCss3Finish = true;
                    }, base.options.slideSpeed);
                }
                base.transition3d(goToPixel);
            } else {
                if (speed === true) {
                    base.css2slide(goToPixel, base.options.paginationSpeed);
                } else if (speed === "rewind") {
                    base.css2slide(goToPixel, base.options.rewindSpeed);
                } else {
                    base.css2slide(goToPixel, base.options.slideSpeed);
                }
            }
            base.afterGo();
        },

        jumpTo : function (position) {
            var base = this;
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem]);
            }
            if (position >= base.maximumItem || position === -1) {
                position = base.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }
            base.swapSpeed(0);
            if (base.browser.support3d === true) {
                base.transition3d(base.positionsInArray[position]);
            } else {
                base.css2slide(base.positionsInArray[position], 1);
            }
            base.currentItem = base.owl.currentItem = position;
            base.afterGo();
        },

        afterGo : function () {
            var base = this;

            base.prevArr.push(base.currentItem);
            base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length - 2];
            base.prevArr.shift(0);

            if (base.prevItem !== base.currentItem) {
                base.checkPagination();
                base.checkNavigation();
                base.eachMoveUpdate();

                if (base.options.autoPlay !== false) {
                    base.checkAp();
                }
            }
            if (typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) {
                base.options.afterMove.apply(this, [base.$elem]);
            }
        },

        stop : function () {
            var base = this;
            base.apStatus = "stop";
            window.clearInterval(base.autoPlayInterval);
        },

        checkAp : function () {
            var base = this;
            if (base.apStatus !== "stop") {
                base.play();
            }
        },

        play : function () {
            var base = this;
            base.apStatus = "play";
            if (base.options.autoPlay === false) {
                return false;
            }
            window.clearInterval(base.autoPlayInterval);
            base.autoPlayInterval = window.setInterval(function () {
                base.next(true);
            }, base.options.autoPlay);
        },

        swapSpeed : function (action) {
            var base = this;
            if (action === "slideSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));
            } else if (action === "paginationSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));
            } else if (typeof action !== "string") {
                base.$owlWrapper.css(base.addCssSpeed(action));
            }
        },

        addCssSpeed : function (speed) {
            return {
                "-webkit-transition": "all " + speed + "ms ease",
                "-moz-transition": "all " + speed + "ms ease",
                "-o-transition": "all " + speed + "ms ease",
                "transition": "all " + speed + "ms ease"
            };
        },

        removeTransition : function () {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                "transition": ""
            };
        },

        doTranslate : function (pixels) {
            return {
                "-webkit-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "transform": "translate3d(" + pixels + "px, 0px,0px)"
            };
        },

        transition3d : function (value) {
            var base = this;
            base.$owlWrapper.css(base.doTranslate(value));
        },

        css2move : function (value) {
            var base = this;
            base.$owlWrapper.css({"left" : value});
        },

        css2slide : function (value, speed) {
            var base = this;

            base.isCssFinish = false;
            base.$owlWrapper.stop(true, true).animate({
                "left" : value
            }, {
                duration : speed || base.options.slideSpeed,
                complete : function () {
                    base.isCssFinish = true;
                }
            });
        },

        checkBrowser : function () {
            var base = this,
                translate3D = "translate3d(0px, 0px, 0px)",
                tempElem = document.createElement("div"),
                regex,
                asSupport,
                support3d,
                isTouch;

            tempElem.style.cssText = "  -moz-transform:" + translate3D +
                                  "; -ms-transform:"     + translate3D +
                                  "; -o-transform:"      + translate3D +
                                  "; -webkit-transform:" + translate3D +
                                  "; transform:"         + translate3D;
            regex = /translate3d\(0px, 0px, 0px\)/g;
            asSupport = tempElem.style.cssText.match(regex);
            support3d = (asSupport !== null && asSupport.length === 1);

            isTouch = "ontouchstart" in window || window.navigator.msMaxTouchPoints;

            base.browser = {
                "support3d" : support3d,
                "isTouch" : isTouch
            };
        },

        moveEvents : function () {
            var base = this;
            if (base.options.mouseDrag !== false || base.options.touchDrag !== false) {
                base.gestures();
                base.disabledEvents();
            }
        },

        eventTypes : function () {
            var base = this,
                types = ["s", "e", "x"];

            base.ev_types = {};

            if (base.options.mouseDrag === true && base.options.touchDrag === true) {
                types = [
                    "touchstart.owl mousedown.owl",
                    "touchmove.owl mousemove.owl",
                    "touchend.owl touchcancel.owl mouseup.owl"
                ];
            } else if (base.options.mouseDrag === false && base.options.touchDrag === true) {
                types = [
                    "touchstart.owl",
                    "touchmove.owl",
                    "touchend.owl touchcancel.owl"
                ];
            } else if (base.options.mouseDrag === true && base.options.touchDrag === false) {
                types = [
                    "mousedown.owl",
                    "mousemove.owl",
                    "mouseup.owl"
                ];
            }

            base.ev_types.start = types[0];
            base.ev_types.move = types[1];
            base.ev_types.end = types[2];
        },

        disabledEvents :  function () {
            var base = this;
            base.$elem.on("dragstart.owl", function (event) { event.preventDefault(); });
            base.$elem.on("mousedown.disableTextSelect", function (e) {
                return $(e.target).is('input, textarea, select, option');
            });
        },

        gestures : function () {
            /*jslint unparam: true*/
            var base = this,
                locals = {
                    offsetX : 0,
                    offsetY : 0,
                    baseElWidth : 0,
                    relativePos : 0,
                    position: null,
                    minSwipe : null,
                    maxSwipe: null,
                    sliding : null,
                    dargging: null,
                    targetElement : null
                };

            base.isCssFinish = true;

            function getTouches(event) {
                if (event.touches !== undefined) {
                    return {
                        x : event.touches[0].pageX,
                        y : event.touches[0].pageY
                    };
                }

                if (event.touches === undefined) {
                    if (event.pageX !== undefined) {
                        return {
                            x : event.pageX,
                            y : event.pageY
                        };
                    }
                    if (event.pageX === undefined) {
                        return {
                            x : event.clientX,
                            y : event.clientY
                        };
                    }
                }
            }

            function swapEvents(type) {
                if (type === "on") {
                    $(document).on(base.ev_types.move, dragMove);
                    $(document).on(base.ev_types.end, dragEnd);
                } else if (type === "off") {
                    $(document).off(base.ev_types.move);
                    $(document).off(base.ev_types.end);
                }
            }

            function dragStart(event) {
                var ev = event.originalEvent || event || window.event,
                    position;

                if (ev.which === 3) {
                    return false;
                }
                if (base.itemsAmount <= base.options.items) {
                    return;
                }
                if (base.isCssFinish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }
                if (base.isCss3Finish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }

                if (base.options.autoPlay !== false) {
                    window.clearInterval(base.autoPlayInterval);
                }

                if (base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")) {
                    base.$owlWrapper.addClass("grabbing");
                }

                base.newPosX = 0;
                base.newRelativeX = 0;

                $(this).css(base.removeTransition());

                position = $(this).position();
                locals.relativePos = position.left;

                locals.offsetX = getTouches(ev).x - position.left;
                locals.offsetY = getTouches(ev).y - position.top;

                swapEvents("on");

                locals.sliding = false;
                locals.targetElement = ev.target || ev.srcElement;
            }

            function dragMove(event) {
                var ev = event.originalEvent || event || window.event,
                    minSwipe,
                    maxSwipe;

                base.newPosX = getTouches(ev).x - locals.offsetX;
                base.newPosY = getTouches(ev).y - locals.offsetY;
                base.newRelativeX = base.newPosX - locals.relativePos;

                if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) {
                    locals.dragging = true;
                    base.options.startDragging.apply(base, [base.$elem]);
                }

                if ((base.newRelativeX > 8 || base.newRelativeX < -8) && (base.browser.isTouch === true)) {
                    if (ev.preventDefault !== undefined) {
                        ev.preventDefault();
                    } else {
                        ev.returnValue = false;
                    }
                    locals.sliding = true;
                }

                if ((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false) {
                    $(document).off("touchmove.owl");
                }

                minSwipe = function () {
                    return base.newRelativeX / 5;
                };

                maxSwipe = function () {
                    return base.maximumPixels + base.newRelativeX / 5;
                };

                base.newPosX = Math.max(Math.min(base.newPosX, minSwipe()), maxSwipe());
                if (base.browser.support3d === true) {
                    base.transition3d(base.newPosX);
                } else {
                    base.css2move(base.newPosX);
                }
            }

            function dragEnd(event) {
                var ev = event.originalEvent || event || window.event,
                    newPosition,
                    handlers,
                    owlStopEvent;

                ev.target = ev.target || ev.srcElement;

                locals.dragging = false;

                if (base.browser.isTouch !== true) {
                    base.$owlWrapper.removeClass("grabbing");
                }

                if (base.newRelativeX < 0) {
                    base.dragDirection = base.owl.dragDirection = "left";
                } else {
                    base.dragDirection = base.owl.dragDirection = "right";
                }

                if (base.newRelativeX !== 0) {
                    newPosition = base.getNewPosition();
                    base.goTo(newPosition, false, "drag");
                    if (locals.targetElement === ev.target && base.browser.isTouch !== true) {
                        $(ev.target).on("click.disable", function (ev) {
                            ev.stopImmediatePropagation();
                            ev.stopPropagation();
                            ev.preventDefault();
                            $(ev.target).off("click.disable");
                        });
                        handlers = $._data(ev.target, "events").click;
                        owlStopEvent = handlers.pop();
                        handlers.splice(0, 0, owlStopEvent);
                    }
                }
                swapEvents("off");
            }
            base.$elem.on(base.ev_types.start, ".owl-wrapper", dragStart);
        },

        getNewPosition : function () {
            var base = this,
                newPosition = base.closestItem();

            if (newPosition > base.maximumItem) {
                base.currentItem = base.maximumItem;
                newPosition  = base.maximumItem;
            } else if (base.newPosX >= 0) {
                newPosition = 0;
                base.currentItem = 0;
            }
            return newPosition;
        },
        closestItem : function () {
            var base = this,
                array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray,
                goal = base.newPosX,
                closest = null;

            $.each(array, function (i, v) {
                if (goal - (base.itemWidth / 20) > array[i + 1] && goal - (base.itemWidth / 20) < v && base.moveDirection() === "left") {
                    closest = v;
                    if (base.options.scrollPerPage === true) {
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        base.currentItem = i;
                    }
                } else if (goal + (base.itemWidth / 20) < v && goal + (base.itemWidth / 20) > (array[i + 1] || array[i] - base.itemWidth) && base.moveDirection() === "right") {
                    if (base.options.scrollPerPage === true) {
                        closest = array[i + 1] || array[array.length - 1];
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        closest = array[i + 1];
                        base.currentItem = i + 1;
                    }
                }
            });
            return base.currentItem;
        },

        moveDirection : function () {
            var base = this,
                direction;
            if (base.newRelativeX < 0) {
                direction = "right";
                base.playDirection = "next";
            } else {
                direction = "left";
                base.playDirection = "prev";
            }
            return direction;
        },

        customEvents : function () {
            /*jslint unparam: true*/
            var base = this;
            base.$elem.on("owl.next", function () {
                base.next();
            });
            base.$elem.on("owl.prev", function () {
                base.prev();
            });
            base.$elem.on("owl.play", function (event, speed) {
                base.options.autoPlay = speed;
                base.play();
                base.hoverStatus = "play";
            });
            base.$elem.on("owl.stop", function () {
                base.stop();
                base.hoverStatus = "stop";
            });
            base.$elem.on("owl.goTo", function (event, item) {
                base.goTo(item);
            });
            base.$elem.on("owl.jumpTo", function (event, item) {
                base.jumpTo(item);
            });
        },

        stopOnHover : function () {
            var base = this;
            if (base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false) {
                base.$elem.on("mouseover", function () {
                    base.stop();
                });
                base.$elem.on("mouseout", function () {
                    if (base.hoverStatus !== "stop") {
                        base.play();
                    }
                });
            }
        },

        lazyLoad : function () {
            var base = this,
                i,
                $item,
                itemNumber,
                $lazyImg,
                follow;

            if (base.options.lazyLoad === false) {
                return false;
            }
            for (i = 0; i < base.itemsAmount; i += 1) {
                $item = $(base.$owlItems[i]);

                if ($item.data("owl-loaded") === "loaded") {
                    continue;
                }

                itemNumber = $item.data("owl-item");
                $lazyImg = $item.find(".lazyOwl");

                if (typeof $lazyImg.data("src") !== "string") {
                    $item.data("owl-loaded", "loaded");
                    continue;
                }
                if ($item.data("owl-loaded") === undefined) {
                    $lazyImg.hide();
                    $item.addClass("loading").data("owl-loaded", "checked");
                }
                if (base.options.lazyFollow === true) {
                    follow = itemNumber >= base.currentItem;
                } else {
                    follow = true;
                }
                if (follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length) {
                    base.lazyPreload($item, $lazyImg);
                }
            }
        },

        lazyPreload : function ($item, $lazyImg) {
            var base = this,
                iterations = 0,
                isBackgroundImg;

            if ($lazyImg.prop("tagName") === "DIV") {
                $lazyImg.css("background-image", "url(" + $lazyImg.data("src") + ")");
                isBackgroundImg = true;
            } else {
                $lazyImg[0].src = $lazyImg.data("src");
            }

            function showImage() {
                $item.data("owl-loaded", "loaded").removeClass("loading");
                $lazyImg.removeAttr("data-src");
                if (base.options.lazyEffect === "fade") {
                    $lazyImg.fadeIn(400);
                } else {
                    $lazyImg.show();
                }
                if (typeof base.options.afterLazyLoad === "function") {
                    base.options.afterLazyLoad.apply(this, [base.$elem]);
                }
            }

            function checkLazyImage() {
                iterations += 1;
                if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
                    showImage();
                } else if (iterations <= 100) {//if image loads in less than 10 seconds 
                    window.setTimeout(checkLazyImage, 100);
                } else {
                    showImage();
                }
            }

            checkLazyImage();
        },

        autoHeight : function () {
            var base = this,
                $currentimg = $(base.$owlItems[base.currentItem]).find("img"),
                iterations;

            function addHeight() {
                var $currentItem = $(base.$owlItems[base.currentItem]).height();
                base.wrapperOuter.css("height", $currentItem + "px");
                if (!base.wrapperOuter.hasClass("autoHeight")) {
                    window.setTimeout(function () {
                        base.wrapperOuter.addClass("autoHeight");
                    }, 0);
                }
            }

            function checkImage() {
                iterations += 1;
                if (base.completeImg($currentimg.get(0))) {
                    addHeight();
                } else if (iterations <= 100) { //if image loads in less than 10 seconds 
                    window.setTimeout(checkImage, 100);
                } else {
                    base.wrapperOuter.css("height", ""); //Else remove height attribute
                }
            }

            if ($currentimg.get(0) !== undefined) {
                iterations = 0;
                checkImage();
            } else {
                addHeight();
            }
        },

        completeImg : function (img) {
            var naturalWidthType;

            if (!img.complete) {
                return false;
            }
            naturalWidthType = typeof img.naturalWidth;
            if (naturalWidthType !== "undefined" && img.naturalWidth === 0) {
                return false;
            }
            return true;
        },

        onVisibleItems : function () {
            var base = this,
                i;

            if (base.options.addClassActive === true) {
                base.$owlItems.removeClass("active");
            }
            base.visibleItems = [];
            for (i = base.currentItem; i < base.currentItem + base.options.items; i += 1) {
                base.visibleItems.push(i);

                if (base.options.addClassActive === true) {
                    $(base.$owlItems[i]).addClass("active");
                }
            }
            base.owl.visibleItems = base.visibleItems;
        },

        transitionTypes : function (className) {
            var base = this;
            //Currently available: "fade", "backSlide", "goDown", "fadeUp"
            base.outClass = "owl-" + className + "-out";
            base.inClass = "owl-" + className + "-in";
        },

        singleItemTransition : function () {
            var base = this,
                outClass = base.outClass,
                inClass = base.inClass,
                $currentItem = base.$owlItems.eq(base.currentItem),
                $prevItem = base.$owlItems.eq(base.prevItem),
                prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
                origin = Math.abs(base.positionsInArray[base.currentItem]) + base.itemWidth / 2,
                animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';

            base.isTransition = true;

            base.$owlWrapper
                .addClass('owl-origin')
                .css({
                    "-webkit-transform-origin" : origin + "px",
                    "-moz-perspective-origin" : origin + "px",
                    "perspective-origin" : origin + "px"
                });
            function transStyles(prevPos) {
                return {
                    "position" : "relative",
                    "left" : prevPos + "px"
                };
            }

            $prevItem
                .css(transStyles(prevPos, 10))
                .addClass(outClass)
                .on(animEnd, function () {
                    base.endPrev = true;
                    $prevItem.off(animEnd);
                    base.clearTransStyle($prevItem, outClass);
                });

            $currentItem
                .addClass(inClass)
                .on(animEnd, function () {
                    base.endCurrent = true;
                    $currentItem.off(animEnd);
                    base.clearTransStyle($currentItem, inClass);
                });
        },

        clearTransStyle : function (item, classToRemove) {
            var base = this;
            item.css({
                "position" : "",
                "left" : ""
            }).removeClass(classToRemove);

            if (base.endPrev && base.endCurrent) {
                base.$owlWrapper.removeClass('owl-origin');
                base.endPrev = false;
                base.endCurrent = false;
                base.isTransition = false;
            }
        },

        owlStatus : function () {
            var base = this;
            base.owl = {
                "userOptions"   : base.userOptions,
                "baseElement"   : base.$elem,
                "userItems"     : base.$userItems,
                "owlItems"      : base.$owlItems,
                "currentItem"   : base.currentItem,
                "prevItem"      : base.prevItem,
                "visibleItems"  : base.visibleItems,
                "isTouch"       : base.browser.isTouch,
                "browser"       : base.browser,
                "dragDirection" : base.dragDirection
            };
        },

        clearEvents : function () {
            var base = this;
            base.$elem.off(".owl owl mousedown.disableTextSelect");
            $(document).off(".owl owl");
            $(window).off("resize", base.resizer);
        },

        unWrap : function () {
            var base = this;
            if (base.$elem.children().length !== 0) {
                base.$owlWrapper.unwrap();
                base.$userItems.unwrap().unwrap();
                if (base.owlControls) {
                    base.owlControls.remove();
                }
            }
            base.clearEvents();
            base.$elem
                .attr("style", base.$elem.data("owl-originalStyles") || "")
                .attr("class", base.$elem.data("owl-originalClasses"));
        },

        destroy : function () {
            var base = this;
            base.stop();
            window.clearInterval(base.checkVisible);
            base.unWrap();
            base.$elem.removeData();
        },

        reinit : function (newOptions) {
            var base = this,
                options = $.extend({}, base.userOptions, newOptions);
            base.unWrap();
            base.init(options, base.$elem);
        },

        addItem : function (htmlString, targetPosition) {
            var base = this,
                position;

            if (!htmlString) {return false; }

            if (base.$elem.children().length === 0) {
                base.$elem.append(htmlString);
                base.setVars();
                return false;
            }
            base.unWrap();
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }
            if (position >= base.$userItems.length || position === -1) {
                base.$userItems.eq(-1).after(htmlString);
            } else {
                base.$userItems.eq(position).before(htmlString);
            }

            base.setVars();
        },

        removeItem : function (targetPosition) {
            var base = this,
                position;

            if (base.$elem.children().length === 0) {
                return false;
            }
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }

            base.unWrap();
            base.$userItems.eq(position).remove();
            base.setVars();
        }

    };

    $.fn.owlCarousel = function (options) {
        return this.each(function () {
            if ($(this).data("owl-init") === true) {
                return false;
            }
            $(this).data("owl-init", true);
            var carousel = Object.create(Carousel);
            carousel.init(options, this);
            $.data(this, "owlCarousel", carousel);
        });
    };

    $.fn.owlCarousel.options = {

        items : 5,
        itemsCustom : false,
        itemsDesktop : [1199, 4],
        itemsDesktopSmall : [979, 3],
        itemsTablet : [768, 2],
        itemsTabletSmall : false,
        itemsMobile : [479, 1],
        singleItem : false,
        itemsScaleUp : false,

        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        autoPlay : true,
        stopOnHover : true,

        navigation : true,
        navigationText : ["prev", "next"],
        rewindNav : true,
        scrollPerPage : false,

        pagination : true,
        paginationNumbers : false,

        responsive : true,
        responsiveRefreshRate : 200,
        responsiveBaseWidth : window,

        baseClass : "owl-carousel",
        theme : "owl-theme",

        lazyLoad : false,
        lazyFollow : true,
        lazyEffect : "fade",

        autoHeight : false,

        jsonPath : false,
        jsonSuccess : false,

        dragBeforeAnimFinish : true,
        mouseDrag : true,
        touchDrag : true,

        addClassActive : false,
        transitionStyle : false,

        beforeUpdate : false,
        afterUpdate : false,
        beforeInit : false,
        afterInit : false,
        beforeMove : false,
        afterMove : false,
        afterAction : false,
        startDragging : false,
        afterLazyLoad: false
    };
}(jQuery, window, document));$(document).ready(function(){

	// hide #back-top first
	$(".scrollToTop").hide();

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 0) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});


/*
	* 2D & 3D Transitions for LayerSlider
	*
	* (c) 2011-2014 George Krupa, John Gera & Kreatura Media
	*
	* Plugin web:			http://kreaturamedia.com/
	* Licenses: 			http://codecanyon.net/licenses/
*/



eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('20 1Z={27:[{j:"13 N E",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"1e",a:G,h:"r"}},{j:"13 N r",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"1e",a:G,h:"E"}},{j:"13 N L",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"1e",a:G,h:"J"}},{j:"13 N J",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"1e",a:G,h:"L"}},{j:"26",d:1,g:1,f:{e:0,i:"o"},c:{n:"14",b:"1e",a:G,h:"r"}},{j:"Z R o",d:[2,4],g:[4,7],f:{e:1k,i:"o"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"Z R D",d:[2,4],g:[4,7],f:{e:1k,i:"D"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"Z R 1j-o",d:[2,4],g:[4,7],f:{e:1k,i:"1j-o"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"Z R 1j-D",d:[2,4],g:[4,7],f:{e:1k,i:"1j-D"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"Z R (k)",d:[2,4],g:[4,7],f:{e:1k,i:"k"},c:{n:"14",b:"z",a:G,h:"r"}},{j:"1y 1H N E",d:1,g:1s,f:{e:25,i:"D"},c:{n:"14",b:"1X",a:V,h:"r"}},{j:"1y 1H N r",d:1,g:1s,f:{e:25,i:"o"},c:{n:"14",b:"w",a:V,h:"r"}},{j:"1y 1H N L",d:1s,g:1,f:{e:25,i:"1j-D"},c:{n:"14",b:"w",a:V,h:"r"}},{j:"1y 1H N J",d:1s,g:1,f:{e:25,i:"1j-o"},c:{n:"14",b:"w",a:V,h:"r"}},{j:"1y Y N E",d:1,g:25,f:{e:1k,i:"D"},c:{n:"W",b:"w",a:1g,h:"r"}},{j:"1y Y N r",d:1,g:25,f:{e:1k,i:"o"},c:{n:"W",b:"w",a:1g,h:"E"}},{j:"1y 1W N L",d:25,g:1,f:{e:1k,i:"1j-D"},c:{n:"W",b:"w",a:1g,h:"J"}},{j:"1y Y N J",d:25,g:1,f:{e:1k,i:"1j-o"},c:{n:"W",b:"w",a:1g,h:"L"}},{j:"13 R m E (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"E"}},{j:"13 R m r (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"r"}},{j:"13 R m L (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"L"}},{j:"13 R m J (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"J"}},{j:"13 k R m k 1S",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"W",b:"z",a:1m,h:"k"}},{j:"13 d m E (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 d m E (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 d m E (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 d m r (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"13 d m r (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"13 d m r (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"13 d N J m L (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 d N J m L (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 d N L m J (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 d N L m J (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 P m L (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 P m L (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 P m L (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"W",b:"w",a:p,h:"L"}},{j:"13 P m J (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 P m J (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 P m J (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"W",b:"w",a:p,h:"J"}},{j:"13 P N r m E (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 P N r m E (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"W",b:"w",a:p,h:"E"}},{j:"13 P N E m r (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"13 P N E m r (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"W",b:"w",a:p,h:"r"}},{j:"Z v Y R m E (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"E"}},{j:"Z v Y R m r (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"r"}},{j:"Z v Y R m L (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"L"}},{j:"Z v Y R m J (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"J"}},{j:"Z v Y k R m k 1S",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"k"}},{j:"Z v Y R N J-r (o)",d:[2,4],g:[4,7],f:{e:1f,i:"o"},c:{n:"Q",b:"z",a:1m,h:"1V"}},{j:"Z v Y R N L-E (D)",d:[2,4],g:[4,7],f:{e:1f,i:"D"},c:{n:"Q",b:"z",a:1m,h:"21"}},{j:"Z v Y R N J-E (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"1T"}},{j:"Z v Y R N L-r (k)",d:[2,4],g:[4,7],f:{e:1f,i:"k"},c:{n:"Q",b:"z",a:1m,h:"1U"}},{j:"Z v Y d m E (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y d m E (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y d m E (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y d m r (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"Z v Y d m r (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"Z v Y d m r (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"Z v Y d N J m L (o)",d:[7,11],g:1,f:{e:1d,i:"o"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y d N J m L (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y d N L m J (D)",d:[7,11],g:1,f:{e:1d,i:"D"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y d N L m J (k)",d:[7,11],g:1,f:{e:1d,i:"k"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y P m L (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y P m L (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y P m L (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"Q",b:"w",a:p,h:"L"}},{j:"Z v Y P m J (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y P m J (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y P m J (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"Q",b:"w",a:p,h:"J"}},{j:"Z v Y P N r m E (o)",d:1,g:[12,16],f:{e:q,i:"o"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y P N r m E (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"Q",b:"w",a:p,h:"E"}},{j:"Z v Y P N E m r (D)",d:1,g:[12,16],f:{e:q,i:"D"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"Z v Y P N E m r (k)",d:1,g:[12,16],f:{e:q,i:"k"},c:{n:"Q",b:"w",a:p,h:"r"}},{j:"1u",d:1,g:1,f:{e:0,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5}},{j:"1u d",d:4,g:1,f:{e:1f,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5}},{j:"1u g",d:1,g:4,f:{e:1f,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5}},{j:"1u R A",d:3,g:4,f:{e:1s,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5,y:x}},{j:"1u R F",d:3,g:4,f:{e:1s,i:"o"},c:{n:"Q",b:"1e",a:V,h:"J",1h:.5,u:-x}},{j:"1u-1I R A",d:3,g:4,f:{e:15,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5,y:x}},{j:"1u-1I R F",d:3,g:4,f:{e:15,i:"o"},c:{n:"Q",b:"1e",a:V,h:"J",1h:.5,u:-x}},{j:"1u 1I d",d:4,g:1,f:{e:1f,i:"o"},c:{n:"Q",b:"1e",a:V,h:"E",1h:.5}},{j:"1u 1I g",d:1,g:4,f:{e:1f,i:"o"},c:{n:"Q",b:"1e",a:V,h:"r",1h:.5}},{j:"1c f N r",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"z",a:V,h:"E",y:x}},{j:"1c f N E",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"z",a:V,h:"r",y:-x}},{j:"1c f N J",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"z",a:V,h:"L",u:-x}},{j:"1c f N L",d:1,g:1,f:{e:0,i:"o"},c:{n:"W",b:"z",a:V,h:"J",u:x}},{j:"1c R N r",d:[3,4],g:[3,4],f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",y:x}},{j:"1c R N E",d:[3,4],g:[3,4],f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",y:-x}},{j:"1c R N J",d:[3,4],g:[3,4],f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",u:-x}},{j:"1c R N L",d:[3,4],g:[3,4],f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",u:x}},{j:"1c d N J",d:[6,12],g:1,f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",u:x}},{j:"1c d N L",d:[6,12],g:1,f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",u:-x}},{j:"1c g N r",d:1,g:[6,12],f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",y:-x}},{j:"1c g N E",d:1,g:[6,12],f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",y:x}},{j:"1v d N r",d:[3,10],g:1,f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",y:x}},{j:"1v d N E",d:[3,10],g:1,f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",y:-x}},{j:"1v g N J",d:1,g:[3,10],f:{e:19,i:"o"},c:{n:"14",b:"z",a:V,h:"r",u:-x}},{j:"1v g N L",d:1,g:[3,10],f:{e:19,i:"D"},c:{n:"14",b:"z",a:V,h:"r",u:x}},{j:"1v v 1z f N r",d:1,g:1,f:{e:q,i:"o"},c:{n:"Q",b:"z",a:V,h:"E",1h:.1,1r:-x,y:x}},{j:"1v v 1z f N E",d:1,g:1,f:{e:q,i:"o"},c:{n:"Q",b:"z",a:V,h:"r",1h:.1,1r:x,y:-x}},{j:"1v v 1z R N r",d:[3,4],g:[3,4],f:{e:19,i:"o"},c:{n:"Q",b:"z",a:V,h:"E",1r:-1w}},{j:"1v v 1z R N E",d:[3,4],g:[3,4],f:{e:19,i:"o"},c:{n:"Q",b:"z",a:V,h:"r",1r:-1w}},{j:"1v v 1z R N k",d:[3,4],g:[3,4],f:{e:19,i:"k"},c:{n:"Q",b:"z",a:V,h:"k",1r:-1w}},{j:"B f 1O",d:1,g:1,f:{e:0,i:"o"},c:{n:"14",b:"z",a:1a,h:"r",1h:.8}},{j:"B f N 1L",d:1,g:1,f:{e:0,i:"o"},c:{n:"14",b:"w",a:1a,h:"r",1h:1.2}},{j:"B R k",d:[3,4],g:[3,4],f:{e:1s,i:"k"},c:{n:"14",b:"z",a:V,h:"r",1h:.1}},{j:"B R N 1L k",d:[3,4],g:[3,4],f:{e:1s,i:"k"},c:{n:"14",b:"z",a:V,h:"r",1h:2}},{j:"B 1O v 1z R k",d:[3,4],g:[3,4],f:{e:1s,i:"k"},c:{n:"14",b:"z",a:V,h:"r",1h:.1,1r:x}},{j:"B v 1z R N 1L k",d:[3,4],g:[3,4],f:{e:1s,i:"k"},c:{n:"14",b:"z",a:V,h:"r",1h:2,1r:-x}},{j:"1D-Y R 24",d:3,g:4,f:{e:15,i:"o"},c:{n:"W",b:"w",a:1Y,h:"1T"}},{j:"1D-Y d A",d:6,g:1,f:{e:0,i:"o"},c:{n:"Q",b:"z",a:V,h:"r"}},{j:"1D-Y d F",d:6,g:1,f:{e:0,i:"o"},c:{n:"Q",b:"z",a:V,h:"J"}},{j:"1D-Y g A",d:1,g:8,f:{e:0,i:"o"},c:{n:"Q",b:"z",a:V,h:"r"}},{j:"1D-Y g F",d:1,g:8,f:{e:0,i:"o"},c:{n:"Q",b:"z",a:V,h:"J"}}],23:[{j:"1b f m E (l&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{y:1E},b:"1F",a:G,h:"A"},C:{c:{y:l},b:"z",a:G,h:"A"}},{j:"1b f m r (l&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{y:-1E},b:"1F",a:G,h:"A"},C:{c:{y:-l},b:"z",a:G,h:"A"}},{j:"1b f m L (l&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{u:-1E},b:"1F",a:1x,h:"F"},C:{c:{u:-l},b:"z",a:1x,h:"F"}},{j:"1b f m J (l&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{u:1E},b:"1F",a:1x,h:"F"},C:{c:{u:l},b:"z",a:1x,h:"F"}},{j:"1b R m E (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"o"},s:{c:{y:l},b:"w",a:G,h:"A"}},{j:"1b R m r (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"D"},s:{c:{y:-l},b:"w",a:G,h:"A"}},{j:"1b R m L (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-o"},s:{c:{u:-l},b:"w",a:G,h:"F"}},{j:"1b R m J (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-D"},s:{c:{u:l},b:"w",a:G,h:"F"}},{j:"1B S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},s:{c:{y:l},b:"w",a:1G,h:"A"}},{j:"1C S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},s:{c:{u:l},b:"w",a:1G,h:"F"}},{j:"B v S R m E (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"o"},M:{c:{I:.1A},a:1l,b:"18"},s:{c:{y:l},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v S R m r (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"D"},M:{c:{I:.1A},a:1l,b:"18"},s:{c:{y:-l},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v S R m L (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-o"},M:{c:{I:.1A},a:1l,b:"18"},s:{c:{u:-l},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v S R m J (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-D"},M:{c:{I:.1A},a:1l,b:"18"},s:{c:{u:l},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v A S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},M:{c:{I:.1A,u:1k},a:1l,b:"18"},s:{c:{y:l,u:-1k},b:"H",a:1G,h:"A"},C:{c:{u:0},a:1g,b:"H"}},{j:"B v F S R k (l&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},M:{c:{I:.1A,y:-15},a:1l,b:"18"},s:{c:{u:l,y:15},b:"H",a:1G,h:"F"},C:{c:{y:0},a:1g,b:"H"}},{j:"1b d m E (l&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1b d m r (l&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{y:-l},b:"w",a:1a,h:"A"}},{j:"1b d m L (l&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{u:-l},b:"w",a:G,h:"F"}},{j:"1b d m J (l&#t;)",d:[5,9],g:1,f:{e:q,i:"D"},s:{c:{u:l},b:"w",a:G,h:"F"}},{j:"1B S d k (l&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1C S d k (l&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},s:{c:{u:-l},b:"w",a:1a,h:"F"}},{j:"1C S d k (1J&#t;)",d:[3,7],g:1,f:{e:1Q,i:"k"},s:{c:{u:-1J},b:"w",a:1R,h:"F"}},{j:"B v S d m E (l&#t;)",d:[5,9],g:1,f:{e:19,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:1p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v S d m r (l&#t;)",d:[5,9],g:1,f:{e:19,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:-l},b:"H",a:1p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v S d m L (l&#t;)",d:[5,9],g:1,f:{e:19,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"w",a:p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v S d m J (l&#t;)",d:[5,9],g:1,f:{e:19,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:l},b:"w",a:p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v A S d k (l&#t;)",d:[5,9],g:1,f:{e:19,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:1p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v F S d k (l&#t;)",d:[5,9],g:1,f:{e:19,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"1b P m E (l&#t;)",d:1,g:[5,9],f:{e:q,i:"o"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1b P m r (l&#t;)",d:1,g:[5,9],f:{e:q,i:"o"},s:{c:{y:-l},b:"w",a:1a,h:"A"}},{j:"1b P m L (l&#t;)",d:1,g:[5,9],f:{e:q,i:"o"},s:{c:{u:-l},b:"w",a:G,h:"F"}},{j:"1b P m J (l&#t;)",d:1,g:[5,9],f:{e:q,i:"D"},s:{c:{u:l},b:"w",a:G,h:"F"}},{j:"1B S P k (l&#t;)",d:1,g:[5,9],f:{e:q,i:"k"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1C S P k (l&#t;)",d:1,g:[5,9],f:{e:q,i:"k"},s:{c:{u:-l},b:"w",a:1a,h:"F"}},{j:"1B S P k (1J&#t;)",d:1,g:[4,9],f:{e:1Q,i:"k"},s:{c:{y:1J},b:"w",a:1R,h:"A"}},{j:"B v S P m E (l&#t;)",d:1,g:[7,11],f:{e:19,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"w",a:p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v S P m r (l&#t;)",d:1,g:[7,11],f:{e:19,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:-l},b:"w",a:p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v S P m L (l&#t;)",d:1,g:[7,11],f:{e:19,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:1p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v S P m J (l&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:l},b:"H",a:1p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v A S P k (l&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:p,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v F S P k (l&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:1p,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"1N 1P 1M v S m E (l&#t;)",d:1,g:[7,11],f:{e:q,i:"o"},M:{c:{I:.O,u:-1k},a:p,b:"z"},s:{c:{u:-1k,y:l},b:"w",a:G,h:"A"},C:{c:{u:0,e:X},b:"z",a:p}},{j:"1N 1P 1M v S m r (l&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},M:{c:{I:.O,u:-1k},a:p,b:"z"},s:{c:{u:1k,y:-l},b:"w",a:G,h:"A"},C:{c:{u:0,e:X},b:"z",a:p}},{j:"1c 1t m E (x&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{y:x},b:"w",a:1a,h:"A"}},{j:"1c 1t m r (x&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{y:-x},b:"w",a:1a,h:"A"}},{j:"1c 1t m L (x&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{u:-x},b:"w",a:1a,h:"F"}},{j:"1c 1t m J (x&#t;)",d:1,g:1,f:{e:q,i:"o"},s:{c:{u:x},b:"w",a:1a,h:"F"}},{j:"B v 17 1t m E (x&#t;)",d:1,g:1,f:{e:q,i:"k"},s:{c:{I:.8,1r:7,u:10,y:1w},b:"1e",a:1x,h:"A"},C:{c:{1r:0,u:0,y:x},a:1x,b:"1e"}},{j:"B v 17 1t m r (x&#t;)",d:1,g:1,f:{e:q,i:"k"},s:{c:{I:.8,1r:-7,u:10,y:-1w},b:"1e",a:1x,h:"A"},C:{c:{1r:0,u:0,y:-x},a:1x,b:"1e"}},{j:"B v 17 1n m E (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"o"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{y:x},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v 17 1n m r (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"D"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{y:-x},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v 17 1n m L (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-o"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v 17 1n m J (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"1j-D"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{u:x},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v A 17 1n k (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},M:{c:{I:.1i,u:-15},a:1o,b:"18"},s:{c:{y:q,u:15},b:"H",a:1o,h:"A"},C:{c:{y:x,u:0},a:1o,b:"H"}},{j:"B v F 17 1n k (x&#t;)",d:[2,4],g:[4,7],f:{e:q,i:"k"},M:{c:{I:.1i,y:15},a:1o,b:"18"},s:{c:{u:q,y:-15},b:"H",a:1o,h:"F"},C:{c:{u:x,y:0},a:1o,b:"H"}},{j:"1c d m E (x&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{y:x},b:"w",a:1a,h:"A"}},{j:"1c d m r (x&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},s:{c:{y:-x},b:"w",a:1a,h:"A"}},{j:"1B 17 d k (x&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},s:{c:{y:x},b:"w",a:1a,h:"A"}},{j:"B v 17 d m E (x&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:22,u:0},b:"H",a:G,h:"A"},C:{c:{e:X,y:x},b:"K",a:p}},{j:"B v 17 d m r (x&#t;)",d:[5,9],g:1,f:{e:q,i:"D"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:-x,u:0},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 d m L (x&#t;)",d:[5,9],g:1,f:{e:q,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 d m J (x&#t;)",d:[5,9],g:1,f:{e:q,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v A 17 d k (x&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:x,u:0},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v F 17 d k (x&#t;)",d:[5,9],g:1,f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v A 17 1K d m E (x&#t;)",d:[7,11],g:1,f:{e:q,i:"o"},s:{c:{I:.O,u:5,y:1w},b:"18",a:G,h:"A"},C:{c:{u:0,y:x},b:"18",a:G}},{j:"B v A 17 1K d m r (x&#t;)",d:[7,11],g:1,f:{e:q,i:"D"},s:{c:{I:.O,u:5,y:-1w},b:"18",a:G,h:"A"},C:{c:{u:0,y:-x},b:"18",a:G}},{j:"1c P m L (x&#t;)",d:1,g:[5,9],f:{e:q,i:"o"},s:{c:{u:-x},b:"w",a:G,h:"F"}},{j:"1c P m J (x&#t;)",d:1,g:[5,9],f:{e:q,i:"D"},s:{c:{u:x},b:"w",a:G,h:"F"}},{j:"1C 17 P k (x&#t;)",d:1,g:[5,9],f:{e:q,i:"k"},s:{c:{u:-x},b:"w",a:G,h:"F"}},{j:"B v 17 P m L (x&#t;)",d:1,g:[7,11],f:{e:q,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 P m J (x&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 P m E (x&#t;)",d:1,g:[7,11],f:{e:q,i:"o"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:x},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v 17 P m r (x&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:-x},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v A 17 P k (x&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:x},b:"H",a:G,h:"A"},C:{c:{e:X},b:"K",a:p}},{j:"B v F 17 P k (x&#t;)",d:1,g:[7,11],f:{e:q,i:"k"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-x},b:"H",a:G,h:"F"},C:{c:{e:X},b:"K",a:p}},{j:"B v F 17 1K P m E (x&#t;)",d:1,g:[7,11],f:{e:q,i:"o"},s:{c:{I:.O,u:1w,y:-5},b:"18",a:G,h:"F"},C:{c:{u:x,y:0},b:"18",a:G}},{j:"B v F 17 1K P m r (x&#t;)",d:1,g:[7,11],f:{e:q,i:"D"},s:{c:{I:.O,u:-1w,y:-5},b:"18",a:G,h:"F"},C:{c:{u:-x,y:0},b:"18",a:G}},{j:"1b 1t m E (l&#t;, T U)",d:1,g:1,f:{e:q,i:"o",U:"T"},s:{c:{y:l},b:"w",a:1a,h:"A"}},{j:"1b 1t m r (l&#t;, T U)",d:1,g:1,f:{e:q,i:"o",U:"T"},s:{c:{y:-l},b:"w",a:1a,h:"A"}},{j:"1b 1t m L (l&#t;, T U)",d:1,g:1,f:{e:q,i:"o",U:"T"},s:{c:{u:-l},b:"w",a:1a,h:"F"}},{j:"1b 1t m J (l&#t;, T U)",d:1,g:1,f:{e:q,i:"o",U:"T"},s:{c:{u:l},b:"w",a:1a,h:"F"}},{j:"B v S 1n m E (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"o",U:"T"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{y:l},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v S 1n m r (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"D",U:"T"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{y:-l},b:"H",a:G,h:"A"},C:{a:1g,b:"H"}},{j:"B v S 1n m L (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"1j-o",U:"T"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{u:-l},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v S 1n m J (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"1j-D",U:"T"},M:{c:{I:.O},a:1l,b:"18"},s:{c:{u:l},b:"H",a:G,h:"F"},C:{a:1g,b:"H"}},{j:"B v A S 1n k (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"k",U:"T"},M:{c:{I:.1i},a:1o,b:"18"},s:{c:{y:l},b:"H",a:1o,h:"A"},C:{a:1o,b:"H"}},{j:"B v F S 1n k (l&#t;, T U)",d:[2,4],g:[4,7],f:{e:q,i:"k",U:"T"},M:{c:{I:.1i},a:1o,b:"18"},s:{c:{u:l},b:"H",a:1o,h:"F"},C:{a:1o,b:"H"}},{j:"B v S d m E (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"o",U:"T"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:l,u:-3},b:"w",a:1p,h:"A"},C:{c:{e:X,u:0},b:"z",a:1q}},{j:"B v S d m r (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"D",U:"T"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:-l,u:-3},b:"w",a:1p,h:"A"},C:{c:{e:X,u:0},b:"z",a:1q}},{j:"B v S d m L (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"o",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:G,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S d m J (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"D",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:l},b:"H",a:G,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v A S d k (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"k",U:"T"},M:{c:{I:.O,u:3},a:p,b:"K"},s:{c:{y:l,u:-3},b:"w",a:1p,h:"A"},C:{c:{e:X,u:0},b:"z",a:1q}},{j:"B v F S d k (l&#t;, T U)",d:[5,9],g:1,f:{e:1i,i:"k",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"H",a:G,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S P m L (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"o",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"w",a:1p,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S P m J (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"D",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:l},b:"w",a:1p,h:"F"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S P m E (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"o",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:G,h:"A"},C:{c:{e:X},b:"z",a:1q}},{j:"B v S P m r (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"D",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:-l},b:"H",a:G,h:"A"},C:{c:{e:X},b:"z",a:1q}},{j:"B v A S P k (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"k",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{y:l},b:"H",a:G,h:"A"},C:{c:{e:X},b:"z",a:1q}},{j:"B v F S P k (l&#t;, T U)",d:1,g:[7,11],f:{e:1i,i:"k",U:"T"},M:{c:{I:.O},a:p,b:"K"},s:{c:{u:-l},b:"w",a:1p,h:"F"},C:{c:{e:X},b:"z",a:1q}}]}',62,132,'||||||||||duration|easing|transition|rows|delay|tile|cols|direction|sequence|name|random|180|to|type|forward|600|75|left|animation|176|rotateX|and|easeInOutQuart|90|rotateY|easeOutQuart|horizontal|Scaling|after|reverse|right|vertical|1e3|easeInOutBack|scale3d|top|easeOutBack|bottom|before|from|85|columns|mixed|tiles|spinning|large|depth|750|slide|200|sliding|Fading||||Sliding|fade|||turning|easeInOutQuint|55|1500|Spinning|Turning|100|easeInOutQuad|50|350|scale|65|col|30|450|500|cuboids|700|1200|400|rotate|35|cuboid|Carousel|Flying|45|800|Smooth|rotating|95|Horizontal|Vertical|Mirror|91|easeInQuart|1300|fading|mirror|540|drunk|out|scaling|Drunk|in|colums|150|2e3|directions|topright|bottomleft|topleft|sliging|linear|850|layerSliderTransitions|var|bottomright|87|t3d|diagonal||Crossfading|t2d'.split('|')))
/*!
 * VERSION: 1.11.2
 * DATE: 2013-11-20
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */


eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(17(e){"5v 5u";19 t=e.6h||e;1a(!t.5c){19 n,r,i,s,o,u=17(e){19 n,r=e.1s("."),i=t;1b(n=0;r.1c>n;n++)i[r[n]]=i=i[r[n]]||{};18 i},a=u("4F.4A"),f=1e-10,l=[].6G,c=17(){},h=17(){19 e=9h.1x.9i,t=e.1Z([]);18 17(n){18 n 2a 3K||"3T"==1j n&&!!n.28&&e.1Z(n)===t}}(),p={},d=17(n,r,i,s){15.4v=p[n]?p[n].4v:[],p[n]=15,15.5a=1d,15.76=i;19 o=[];15.5F=17(a){1b(19 f,l,c,h,v=r.1c,m=v;--v>-1;)(f=p[r[v]]||1g d(r[v],[])).5a?(o[v]=f.5a,m--):a&&f.4v.28(15);1a(0===m&&i)1b(l=("4F.4A."+n).1s("."),c=l.4G(),h=u(l.1G("."))[c]=15.5a=i.36(i,o),s&&(t[c]=h,"17"==1j 5V&&5V.9j?5V((e.8F?e.8F+"/":"")+n.1s(".").1G("/"),[],17(){18 h}):"9f"!=1j 5E&&5E.8A&&(5E.8A=h)),v=0;15.4v.1c>v;v++)15.4v[v].5F()},15.5F(!0)},v=e.3R=17(e,t,n,r){18 1g d(e,t,n,r)},m=a.7W=17(e,t,n){18 t=t||17(){},v(e,[],17(){18 t},n),t};v.97=t;19 g=[0,0,1,1],y=[],b=m("2j.7v",17(e,t,n,r){15.5B=e,15.6j=n||0,15.6g=r||0,15.5C=t?g.3U(t):g},!0),w=b.7Z={},E=b.7X=17(e,t,n,r){1b(19 i,s,o,u,f=t.1s(","),l=f.1c,c=(n||"5s,5R,5r").1s(",");--l>-1;)1b(s=f[l],i=r?m("2j."+s,1d,!0):a.2j[s]||{},o=c.1c;--o>-1;)u=c[o],w[s+"."+u]=w[u+s]=i[u]=e.2x?e:e[u]||1g e};1b(i=b.1x,i.3m=!1,i.2x=17(e){1a(15.5B)18 15.5C[0]=e,15.5B.36(1d,15.5C);19 t=15.6j,n=15.6g,r=1===t?1-e:2===t?e:.5>e?2*e:2*(1-e);18 1===n?r*=r:2===n?r*=r*r:3===n?r*=r*r*r:4===n&&(r*=r*r*r*r),1===t?1-r:2===t?r:.5>e?r/2:1-r/2},n=["8u","8w","9a","9c","9l,9x"],r=n.1c;--r>-1;)i=n[r]+",9y"+r,E(1g b(1d,1d,1,r),i,"5R",!0),E(1g b(1d,1d,2,r),i,"5s"+(0===r?",96":"")),E(1g b(1d,1d,3,r),i,"5r");w.9s=a.2j.8u.5s,w.9o=a.2j.8w.5r;19 S=m("8m.8q",17(e){15.40={},15.8r=e||15});i=S.1x,i.8M=17(e,t,n,r,i){i=i||0;19 u,a,f=15.40[e],l=0;1b(1d==f&&(15.40[e]=f=[]),a=f.1c;--a>-1;)u=f[a],u.c===t&&u.s===n?f.2W(a,1):0===l&&i>u.2s&&(l=a+1);f.2W(l,0,{c:t,s:n,8o:r,2s:i}),15!==s||o||s.3a()},i.9n=17(e,t){19 n,r=15.40[e];1a(r)1b(n=r.1c;--n>-1;)1a(r[n].c===t)18 r.2W(n,1),2u 0},i.8C=17(e){19 t,n,r,i=15.40[e];1a(i)1b(t=i.1c,n=15.8r;--t>-1;)r=i[t],r.8o?r.c.1Z(r.s||n,{2r:e,2v:n}):r.c.1Z(r.s||n)};19 x=e.9z,T=e.8S,N=8l.95||17(){18(1g 8l).92()},C=N();1b(n=["64","8W","91","o"],r=n.1c;--r>-1&&!x;)x=e[n[r]+"8Z"],T=e[n[r]+"93"]||e[n[r]+"8U"];m("52",17(e,t){19 n,r,i,u,a,f=15,l=N(),h=t!==!1&&x,p=17(e){C=N(),f.3u=(C-l)/8d;19 t,s=f.3u-a;(!n||s>0||e===!0)&&(f.41++,a+=s+(s>=u?.9t:u-s),t=!0),e!==!0&&(i=r(p)),t&&f.8C("5y")};S.1Z(f),f.3u=f.41=0,f.5y=17(){p(!0)},f.4X=17(){1d!=i&&(h&&T?T(i):aa(i),r=c,i=1d,f===s&&(o=!1))},f.3a=17(){1d!==i&&f.4X(),r=0===n?c:h&&x?x:17(e){18 6p(e,0|8d*(a-f.3u)+1)},f===s&&(o=!0),p(2)},f.6f=17(e){18 22.1c?(n=e,u=1/(n||60),a=15.3u+u,f.3a(),2u 0):n},f.8e=17(e){18 22.1c?(f.4X(),h=e,f.6f(n),2u 0):h},f.6f(e),6p(17(){h&&(!i||5>f.41)&&f.8e(!1)},af)}),i=a.52.1x=1g a.8m.8q,i.2M=a.52;19 k=m("5k.72",17(e,t){1a(15.1o=t=t||{},15.1N=15.2l=e||0,15.2J=1C(t.4y)||0,15.1y=1,15.2c=t.1V===!0,15.1z=t.1z,15.2G=t.43===!0,q){o||s.3a();19 n=15.1o.5Q?I:q;n.1P(15,n.1n),15.1o.34&&15.34(!0)}});s=k.8h=1g a.52,i=k.1x,i.2o=i.1I=i.2w=i.1A=!1,i.1K=i.1n=0,i.1O=-1,i.1f=i.3h=i.32=i.1p=i.1U=1d,i.1A=!1;19 L=17(){o&&N()-C>8p&&s.3a(),6p(L,8p)};L(),i.7w=17(e,t){18 22.1c&&15.4e(e,t),15.43(!1).34(!1)},i.6c=17(e,t){18 22.1c&&15.4e(e,t),15.34(!0)},i.aB=17(e,t){18 22.1c&&15.4e(e,t),15.34(!1)},i.4e=17(e,t){18 15.2Z(1C(e),t!==!1)},i.ar=17(e,t){18 15.43(!1).34(!1).2Z(e?-15.2J:0,t!==!1,!0)},i.as=17(e,t){18 22.1c&&15.4e(e||15.26(),t),15.43(!0).34(!1)},i.1B=17(){},i.5i=17(){18 15},i.4O=17(){19 e,t=15.1p,n=15.1i;18!t||!15.1I&&!15.1A&&t.4O()&&(e=t.3y())>=n&&n+15.26()/15.1y>e},i.1M=17(e,t){18 o||s.3a(),15.1I=!e,15.2c=15.4O(),t!==!0&&(e&&!15.1U?15.1p.1P(15,15.1i-15.2J):!e&&15.1U&&15.1p.3C(15,!0)),!1},i.2p=17(){18 15.1M(!1,!1)},i.4c=17(e,t){18 15.2p(e,t),15},i.35=17(e){1b(19 t=e?15:15.1U;t;)t.2o=!0,t=t.1U;18 15},i.5o=17(e){1b(19 t=e.1c,n=e.3U();--t>-1;)"{4t}"===e[t]&&(n[t]=15);18 n},i.aw=17(e,t,n,r){1a("a8"===(e||"").1t(0,2)){19 i=15.1o;1a(1===22.1c)18 i[e];1d==t?3L i[e]:(i[e]=t,i[e+"6o"]=h(n)&&-1!==n.1G("").1k("{4t}")?15.5o(n):n,i[e+"6l"]=r),"5q"===e&&(15.32=t)}18 15},i.4y=17(e){18 22.1c?(15.1p.2F&&15.8f(15.1i+e-15.2J),15.2J=e,15):15.2J},i.2C=17(e){18 22.1c?(15.1N=15.2l=e,15.35(!0),15.1p.2F&&15.1n>0&&15.1n<15.1N&&0!==e&&15.2Z(15.1K*(e/15.1N),!0),15):(15.2o=!1,15.1N)},i.26=17(e){18 15.2o=!1,22.1c?15.2C(e):15.2l},i.3u=17(e,t){18 22.1c?(15.2o&&15.26(),15.2Z(e>15.1N?15.1N:e,t)):15.1n},i.2Z=17(e,t,n){1a(o||s.3a(),!22.1c)18 15.1K;1a(15.1p){1a(0>e&&!n&&(e+=15.26()),15.1p.2F){15.2o&&15.26();19 r=15.2l,i=15.1p;1a(e>r&&!n&&(e=r),15.1i=(15.1A?15.4D:i.1n)-(15.2G?r-e:e)/15.1y,i.2o||15.35(!1),i.1p)1b(;i.1p;)i.1p.1n!==(i.1i+i.1K)/i.1y&&i.2Z(i.1K,!0),i=i.1p}15.1I&&15.1M(!0,!1),(15.1K!==e||0===15.1N)&&15.1B(e,t,!1)}18 15},i.9N=i.9P=17(e,t){18 22.1c?15.2Z(15.2C()*e,t):15.1n/15.2C()},i.8f=17(e){18 22.1c?(e!==15.1i&&(15.1i=e,15.1U&&15.1U.4J&&15.1U.1P(15,e-15.2J)),15):15.1i},i.5N=17(e){1a(!22.1c)18 15.1y;1a(e=e||f,15.1p&&15.1p.2F){19 t=15.4D,n=t||0===t?t:15.1p.2Z();15.1i=n-(n-15.1i)*15.1y/e}18 15.1y=e,15.35(!1)},i.43=17(e){18 22.1c?(e!=15.2G&&(15.2G=e,15.2Z(15.1K,!0)),15):15.2G},i.34=17(e){1a(!22.1c)18 15.1A;1a(e!=15.1A&&15.1p){o||e||s.3a();19 t=15.1p,n=t.3y(),r=n-15.4D;!e&&t.2F&&(15.1i+=r,15.35(!1)),15.4D=e?n:1d,15.1A=e,15.2c=15.4O(),!e&&0!==r&&15.2w&&15.2C()&&15.1B(t.2F?15.1K:(n-15.1i)/15.1y,!0,!0)}18 15.1I&&!e&&15.1M(!0,!1),15};19 A=m("5k.7n",17(e){k.1Z(15,0,e),15.4P=15.2F=!0});i=A.1x=1g k,i.2M=A,i.4c().1I=!1,i.27=i.3h=1d,i.4J=!1,i.1P=i.84=17(e,t){19 n,r;1a(e.1i=1C(t||0)+e.2J,e.1A&&15!==e.1p&&(e.4D=e.1i+(15.3y()-e.1i)/e.1y),e.1U&&e.1U.3C(e,!0),e.1U=e.1p=15,e.1I&&e.1M(!0,!0),n=15.3h,15.4J)1b(r=e.1i;n&&n.1i>r;)n=n.1l;18 n?(e.1f=n.1f,n.1f=e):(e.1f=15.27,15.27=e),e.1f?e.1f.1l=e:15.3h=e,e.1l=n,15.1p&&15.35(!0),15},i.3C=17(e,t){18 e.1U===15&&(t||e.1M(!1,!0),e.1U=1d,e.1l?e.1l.1f=e.1f:15.27===e&&(15.27=e.1f),e.1f?e.1f.1l=e.1l:15.3h===e&&(15.3h=e.1l),15.1p&&15.35(!0)),15},i.1B=17(e,t,n){19 r,i=15.27;1b(15.1K=15.1n=15.1O=e;i;)r=i.1f,(i.2c||e>=i.1i&&!i.1A)&&(i.2G?i.1B((i.2o?i.26():i.2l)-(e-i.1i)*i.1y,t,n):i.1B((e-i.1i)*i.1y,t,n)),i=r},i.3y=17(){18 o||s.3a(),15.1K};19 O=m("5c",17(t,n,r){1a(k.1Z(15,n,r),15.1B=O.1x.1B,1d==t)5W"87 6v a 1d 2v.";15.2v=t="1H"!=1j t?t:O.3w(t)||t;19 i,s,o,u=t.9I||t.1c&&t!==e&&t[0]&&(t[0]===e||t[0].3o&&t[0].1v&&!t.3o),a=15.1o.4L;1a(15.5S=a=1d==a?F[O.8i]:"2t"==1j a?a>>0:F[a],(u||t 2a 3K||t.28&&h(t))&&"2t"!=1j t[0])1b(15.2z=o=l.1Z(t,0),15.3A=[],15.2Y=[],i=0;o.1c>i;i++)s=o[i],s?"1H"!=1j s?s.1c&&s!==e&&s[0]&&(s[0]===e||s[0].3o&&s[0].1v&&!s.3o)?(o.2W(i--,1),15.2z=o=o.3U(l.1Z(s,0))):(15.2Y[i]=R(s,15,!1),1===a&&15.2Y[i].1c>1&&U(s,15,1d,1,15.2Y[i])):(s=o[i--]=O.3w(s),"1H"==1j s&&o.2W(i+1,1)):o.2W(i--,1);1m 15.3A={},15.2Y=R(t,15,!1),1===a&&15.2Y.1c>1&&U(t,15,1d,1,15.2Y);(15.1o.1V||0===n&&0===15.2J&&15.1o.1V!==!1)&&15.1B(-15.2J,!1,!0)},!0),M=17(t){18 t.1c&&t!==e&&t[0]&&(t[0]===e||t[0].3o&&t[0].1v&&!t.3o)},2q=17(e,t){19 n,r={};1b(n 1w e)j[n]||n 1w t&&"x"!==n&&"y"!==n&&"3M"!==n&&"3B"!==n&&"39"!==n&&"3X"!==n||!(!P[n]||P[n]&&P[n].9D)||(r[n]=e[n],3L e[n]);e.4s=r};i=O.1x=1g k,i.2M=O,i.4c().1I=!1,i.3i=0,i.1r=i.2z=i.3f=i.29=1d,i.4I=!1,O.3Z="1.11.2",O.6n=i.2H=1g b(1d,1d,1,1),O.8i="2n",O.8h=s,O.8J=!0,O.3w=e.$||e.9C||17(t){18 e.$?(O.3w=e.$,e.$(t)):e.69?e.69.9G("#"===t.1u(0)?t.1t(1):t):t};19 D=O.4p={7T:h,7U:M},P=O.9R={},H=O.a2={},B=0,j=D.7i={3Q:1,4y:1,4L:1,4i:1,61:1,62:1,5Q:1,4C:1,38:1,5q:1,67:1,6b:1,4B:1,5D:1,63:1,4j:1,7b:1,7o:1,a3:1,a4:1,a6:1,5p:1,a5:1,1V:1,a0:1,9Z:1,1z:1,34:1,43:1,5A:1},F={3r:0,3Y:1,2n:2,9U:3,9T:4,9S:5,"9V":1,"5O":0},I=k.6Y=1g A,q=k.9W=1g A;q.1i=s.3u,I.1i=s.41,q.2c=I.2c=!0,k.86=17(){1a(q.1B((s.3u-q.1i)*q.1y,!1,!1),I.1B((s.41-I.1i)*I.1y,!1,!1),!(s.41%9Y)){19 e,t,n;1b(n 1w H){1b(t=H[n].3x,e=t.1c;--e>-1;)t[e].1I&&t.2W(e,1);0===t.1c&&3L H[n]}1a(n=q.27,(!n||n.1A)&&O.8J&&!I.27&&1===s.40.5y.1c){1b(;n&&n.1A;)n=n.1f;n||s.4X()}}},s.8M("5y",k.86);19 R=17(e,t,n){19 r,i,s=e.7h;1a(H[s||(e.7h=s="t"+B++)]||(H[s]={2v:e,3x:[]}),t&&(r=H[s].3x,r[i=r.1c]=t,n))1b(;--i>-1;)r[i]===t&&r.2W(i,1);18 H[s].3x},U=17(e,t,n,r,i){19 s,o,u,a;1a(1===r||r>=4){1b(a=i.1c,s=0;a>s;s++)1a((u=i[s])!==t)u.1I||u.1M(!1,!1)&&(o=!0);1m 1a(5===r)7p;18 o}19 l,c=t.1i+f,h=[],p=0,d=0===t.1N;1b(s=i.1c;--s>-1;)(u=i[s])===t||u.1I||u.1A||(u.1p!==t.1p?(l=l||z(t,0,d),0===z(u,l,d)&&(h[p++]=u)):c>=u.1i&&u.1i+u.26()/u.1y+f>c&&((d||!u.2w)&&2e-10>=c-u.1i||(h[p++]=u)));1b(s=p;--s>-1;)u=h[s],2===r&&u.2p(n,e)&&(o=!0),(2!==r||!u.1r&&u.2w)&&u.1M(!1,!1)&&(o=!0);18 o},z=17(e,t,n){1b(19 r=e.1p,i=r.1y,s=e.1i;r.1p;){1a(s+=r.1i,i*=r.1y,r.1A)18-23;r=r.1p}18 s/=i,s>t?s-t:n&&s===t||!e.2w&&2*f>s-t?f:(s+=e.26()/e.1y/i)>t+f?0:s-t-f};i.7c=17(){19 e,t,n,r,i=15.1o,s=15.3f,o=15.1N,u=i.1V,a=i.3Q;1a(i.38){1a(15.29&&15.29.1B(-1,!0),i.38.4L=0,i.38.1V=!0,15.29=O.3v(15.2v,0,i.38),u)1a(15.1n>0)15.29=1d;1m 1a(0!==o)18}1m 1a(i.4C&&0!==o)1a(15.29)15.29.1B(-1,!0),15.29=1d;1m{n={};1b(r 1w i)j[r]&&"5A"!==r||(n[r]=i[r]);1a(n.4L=0,n.1z="7G",15.29=O.3v(15.2v,0,n),i.1V){1a(0===15.1n)18}1m 15.29.1B(-1,!0)}1a(15.2H=a?a 2a b?i.5p 2a 3K?a.3t.36(a,i.5p):a:"17"==1j a?1g b(a,i.5p):w[a]||O.6n:O.6n,15.5P=15.2H.6j,15.7f=15.2H.6g,15.1r=1d,15.2z)1b(e=15.2z.1c;--e>-1;)15.4o(15.2z[e],15.3A[e]={},15.2Y[e],s?s[e]:1d)&&(t=!0);1m t=15.4o(15.2v,15.3A,15.2Y,s);1a(t&&O.4U("4Z",15),s&&(15.1r||"17"!=1j 15.2v&&15.1M(!1,!1)),i.4C)1b(n=15.1r;n;)n.s+=n.c,n.c=-n.c,n=n.1f;15.32=i.5q,15.2w=!0},i.4o=17(t,n,r,i){19 s,o,u,a,f,l;1a(1d==t)18!1;15.1o.4s||t.1v&&t!==e&&t.3o&&P.4s&&15.1o.5A!==!1&&2q(15.1o,t);1b(s 1w 15.1o){1a(l=15.1o[s],j[s])l&&(l 2a 3K||l.28&&h(l))&&-1!==l.1G("").1k("{4t}")&&(15.1o[s]=l=15.5o(l,15));1m 1a(P[s]&&(a=1g P[s]).6M(t,15.1o[s],15)){1b(15.1r=f={1f:15.1r,t:a,p:"1X",s:0,c:1,f:!0,n:s,4M:!0,2s:a.5T},o=a.2E.1c;--o>-1;)n[a.2E[o]]=15.1r;(a.5T||a.4Z)&&(u=!0),(a.6q||a.89)&&(15.4I=!0)}1m 15.1r=n[s]=f={1f:15.1r,t:t,p:s,f:"17"==1j t[s],n:s,4M:!1,2s:0},f.s=f.f?t[s.1k("4h")||"17"!=1j t["7g"+s.1t(3)]?s:"7g"+s.1t(3)]():1q(t[s]),f.c="1H"==1j l&&"="===l.1u(1)?3q(l.1u(0)+"1",10)*1C(l.1t(2)):1C(l)-f.s||0;f&&f.1f&&(f.1f.1l=f)}18 i&&15.2p(i,t)?15.4o(t,n,r,i):15.5S>1&&15.1r&&r.1c>1&&U(t,15,n,15.5S,r)?(15.2p(n,t),15.4o(t,n,r,i)):u},i.1B=17(e,t,n){19 r,i,s,o,u=15.1n,a=15.1N;1a(e>=a)15.1K=15.1n=a,15.3i=15.2H.3m?15.2H.2x(1):1,15.2G||(r=!0,i="4i"),0===a&&(o=15.1O,(0===e||0>o||o===f)&&o!==e&&(n=!0,o>f&&(i="4j")),15.1O=o=!t||e?e:f);1m 1a(1e-7>e)15.1K=15.1n=0,15.3i=15.2H.3m?15.2H.2x(0):0,(0!==u||0===a&&15.1O>f)&&(i="4j",r=15.2G),0>e?(15.2c=!1,0===a&&(15.1O>=0&&(n=!0),15.1O=o=!t||e?e:f)):15.2w||(n=!0);1m 1a(15.1K=15.1n=e,15.5P){19 l=e/a,c=15.5P,h=15.7f;(1===c||3===c&&l>=.5)&&(l=1-l),3===c&&(l*=2),1===h?l*=l:2===h?l*=l*l:3===h?l*=l*l*l:4===h&&(l*=l*l*l*l),15.3i=1===c?1-l:2===c?l:.5>e/a?l/2:1-l/2}1m 15.3i=15.2H.2x(e/a);1a(15.1n!==u||n){1a(!15.2w){1a(15.7c(),!15.2w||15.1I)18;15.1n&&!r?15.3i=15.2H.2x(15.1n/a):r&&15.2H.3m&&(15.3i=15.2H.2x(0===15.1n?0:1))}1b(15.2c||!15.1A&&15.1n!==u&&e>=0&&(15.2c=!0),0===u&&(15.29&&(e>=0?15.29.1B(e,t,n):i||(i="a1")),15.1o.4B&&(0!==15.1n||0===a)&&(t||15.1o.4B.36(15.1o.63||15,15.1o.5D||y))),s=15.1r;s;)s.f?s.t[s.p](s.c*15.3i+s.s):s.t[s.p]=s.c*15.3i+s.s,s=s.1f;15.32&&(0>e&&15.29&&15.1i&&15.29.1B(e,t,n),t||n&&0===15.1n&&0===u||15.32.36(15.1o.6b||15,15.1o.67||y)),i&&(15.1I||(0>e&&15.29&&!15.32&&15.1i&&15.29.1B(e,t,n),r&&(15.1p.4P&&15.1M(!1,!1),15.2c=!1),!t&&15.1o[i]&&15.1o[i].36(15.1o[i+"6l"]||15,15.1o[i+"6o"]||y),0===a&&15.1O===f&&o!==f&&(15.1O=0)))}},i.2p=17(e,t){1a("3Y"===e&&(e=1d),1d==e&&(1d==t||t===15.2v))18 15.1M(!1,!1);t="1H"!=1j t?t||15.2z||15.2v:O.3w(t)||t;19 n,r,i,s,o,u,a,f;1a((h(t)||M(t))&&"2t"!=1j t[0])1b(n=t.1c;--n>-1;)15.2p(e,t[n])&&(u=!0);1m{1a(15.2z){1b(n=15.2z.1c;--n>-1;)1a(t===15.2z[n]){o=15.3A[n]||{},15.3f=15.3f||[],r=15.3f[n]=e?15.3f[n]||{}:"3Y";7p}}1m{1a(t!==15.2v)18!1;o=15.3A,r=15.3f=e?15.3f||{}:"3Y"}1a(o){a=e||o,f=e!==r&&"3Y"!==r&&e!==o&&("3T"!=1j e||!e.9Q);1b(i 1w a)(s=o[i])&&(s.4M&&s.t.2p(a)&&(u=!0),s.4M&&0!==s.t.2E.1c||(s.1l?s.1l.1f=s.1f:s===15.1r&&(15.1r=s.1f),s.1f&&(s.1f.1l=s.1l),s.1f=s.1l=1d),3L o[i]),f&&(r[i]=1);!15.1r&&15.2w&&15.1M(!1,!1)}}18 u},i.5i=17(){18 15.4I&&O.4U("6q",15),15.1r=1d,15.3f=1d,15.32=1d,15.29=1d,15.2w=15.2c=15.4I=!1,15.3A=15.2z?{}:[],15},i.1M=17(e,t){1a(o||s.3a(),e&&15.1I){19 n,r=15.2z;1a(r)1b(n=r.1c;--n>-1;)15.2Y[n]=R(r[n],15,!0);1m 15.2Y=R(15.2v,15,!0)}18 k.1x.1M.1Z(15,e,t),15.4I&&15.1r?O.4U(e?"89":"6q",15):!1},O.3v=17(e,t,n){18 1g O(e,t,n)},O.68=17(e,t,n){18 n.4C=!0,n.1V=0!=n.1V,1g O(e,t,n)},O.66=17(e,t,n,r){18 r.38=n,r.1V=0!=r.1V&&0!=n.1V,1g O(e,t,r)},O.6k=17(e,t,n,r,i){18 1g O(t,0,{4y:e,4i:t,61:n,62:r,4j:t,7b:n,7o:r,1V:!1,5Q:i,4L:0})},O.4h=17(e,t){18 1g O(e,0,t)},O.3W=17(e,t){1a(1d==e)18[];e="1H"!=1j e?e:O.3w(e)||e;19 n,r,i,s;1a((h(e)||M(e))&&"2t"!=1j e[0]){1b(n=e.1c,r=[];--n>-1;)r=r.3U(O.3W(e[n],t));1b(n=r.1c;--n>-1;)1b(s=r[n],i=n;--i>-1;)s===r[i]&&r.2W(n,1)}1m 1b(r=R(e).3U(),n=r.1c;--n>-1;)(r[n].1I||t&&!r[n].4O())&&r.2W(n,1);18 r},O.9J=O.9O=17(e,t,n){"3T"==1j t&&(n=t,t=!1);1b(19 r=O.3W(e,t),i=r.1c;--i>-1;)r[i].2p(n,e)};19 W=m("4z.7Q",17(e,t){15.2E=(e||"").1s(","),15.4N=15.2E[0],15.5T=t||0,15.9M=W.1x},!0);1a(i=W.1x,W.3Z="1.10.1",W.3J=2,i.1r=1d,i.9K=17(e,t,n,r,i,s){19 o,u;18 1d!=r&&(o="2t"==1j r||"="!==r.1u(1)?1C(r)-n:3q(r.1u(0)+"1",10)*1C(r.1t(2)))?(15.1r=u={1f:15.1r,t:e,p:t,s:n,c:o,f:"17"==1j e[t],n:i||t,r:s},u.1f&&(u.1f.1l=u),u):2u 0},i.1X=17(e){1b(19 t,n=15.1r,r=1e-6;n;)t=n.c*e+n.s,n.r?t=0|t+(t>0?.5:-.5):r>t&&t>-r&&(t=0),n.f?n.t[n.p](t):n.t[n.p]=t,n=n.1f},i.2p=17(e){19 t,n=15.2E,r=15.1r;1a(1d!=e[15.4N])15.2E=[];1m 1b(t=n.1c;--t>-1;)1d!=e[n[t]]&&n.2W(t,1);1b(;r;)1d!=e[r.n]&&(r.1f&&(r.1f.1l=r.1l),r.1l?(r.1l.1f=r.1f,r.1l=1d):15.1r===r&&(15.1r=r.1f)),r=r.1f;18!1},i.71=17(e,t){1b(19 n=15.1r;n;)(e[15.4N]||1d!=n.n&&e[n.n.1s(15.4N+"2q").1G("")])&&(n.r=t),n=n.1f},O.4U=17(e,t){19 n,r,i,s,o,u=t.1r;1a("4Z"===e){1b(;u;){1b(o=u.1f,r=i;r&&r.2s>u.2s;)r=r.1f;(u.1l=r?r.1l:s)?u.1l.1f=u:i=u,(u.1f=r)?r.1l=u:s=u,u=o}u=t.1r=i}1b(;u;)u.4M&&"17"==1j u.t[e]&&u.t[e]()&&(n=!0),u=u.1f;18 n},W.6P=17(e){1b(19 t=e.1c;--t>-1;)e[t].3J===W.3J&&(P[(1g e[t]).4N]=e[t]);18!0},v.2A=17(e){1a(!(e&&e.7a&&e.78&&e.3J))5W"9L 2A a7.";19 t,n=e.7a,r=e.5H||0,i=e.av,s={78:"6M",4h:"1X",4c:"2p",59:"71",au:"4Z"},o=m("4z."+n.1u(0).5h()+n.1t(1)+"8j",17(){W.1Z(15,n,r),15.2E=i||[]},e.aq===!0),u=o.1x=1g W(n);u.2M=o,o.3J=e.3J;1b(t 1w s)"17"==1j e[t]&&(u[s[t]]=e[t]);18 o.3Z=e.3Z,W.6P([o]),o},n=e.3b){1b(r=0;n.1c>r;r++)n[r]();1b(i 1w p)p[i].76||e.65.6U("ax ay aD aE: 4F.4A."+i)}o=!1}})(1T);(1T.3b||(1T.3b=[])).28(17(){"5v 5u";1T.3R("aC",["5k.72","5k.7n","5c"],17(e,t,n){19 r=17(e){t.1Z(15,e),15.2L={},15.4P=15.1o.4P===!0,15.2F=15.1o.2F===!0,15.4J=!0,15.32=15.1o.5q;19 n,r,i=15.1o;1b(r 1w i)n=i[r],o(n)&&-1!==n.1G("").1k("{4t}")&&(i[r]=15.5o(n));o(i.3x)&&15.1P(i.3x,0,i.aA,i.ap)},i=1e-10,s=n.4p.7U,o=n.4p.7T,u=[],a=17(e){19 t,n={};1b(t 1w e)n[t]=e[t];18 n},f=17(e,t,n,r){e.1p.6c(e.1i),t&&t.36(r||e.1p,n||u)},l=u.6G,c=r.1x=1g t;18 r.3Z="1.11.0",c.2M=r,c.4c().1I=!1,c.3v=17(e,t,r,i){18 t?15.1P(1g n(e,t,r),i):15.4h(e,r,i)},c.68=17(e,t,r,i){18 15.1P(n.68(e,t,r),i)},c.66=17(e,t,r,i,s){18 t?15.1P(n.66(e,t,r,i),s):15.4h(e,i,s)},c.5I=17(e,t,i,o,u,f,c,p){19 d,v=1g r({4i:f,61:c,62:p});1b("1H"==1j e&&(e=n.3w(e)||e),s(e)&&(e=l.1Z(e,0)),o=o||0,d=0;e.1c>d;d++)i.38&&(i.38=a(i.38)),v.3v(e[d],t,a(i),d*o);18 15.1P(v,u)},c.ac=17(e,t,n,r,i,s,o,u){18 n.1V=0!=n.1V,n.4C=!0,15.5I(e,t,n,r,i,s,o,u)},c.a9=17(e,t,n,r,i,s,o,u,a){18 r.38=n,r.1V=0!=r.1V&&0!=n.1V,15.5I(e,t,r,i,s,o,u,a)},c.1Z=17(e,t,r,i){18 15.1P(n.6k(0,e,t,r),i)},c.4h=17(e,t,r){18 r=15.3d(r,0,!0),1d==t.1V&&(t.1V=r===15.1n&&!15.1A),15.1P(1g n(e,0,t),r)},r.ab=17(e,t){e=e||{},1d==e.2F&&(e.2F=!0);19 i,s,o=1g r(e),u=o.1p;1b(1d==t&&(t=!0),u.3C(o,!0),o.1i=0,o.1O=o.1n=o.1K=u.1n,i=u.27;i;)s=i.1f,t&&i 2a n&&i.2v===i.1o.4i||o.1P(i,i.1i-i.2J),i=s;18 u.1P(o,0),o},c.1P=17(i,s,u,a){19 f,l,c,h,p,d;1a("2t"!=1j s&&(s=15.3d(s,0,!0,i)),!(i 2a e)){1a(i 2a 3K||i&&i.28&&o(i)){1b(u=u||"ag",a=a||0,f=s,l=i.1c,c=0;l>c;c++)o(h=i[c])&&(h=1g r({3x:h})),15.1P(h,f),"1H"!=1j h&&"17"!=1j h&&("9A"===u?f=h.1i+h.26()/h.1y:"ah"===u&&(h.1i-=h.4y())),f+=a;18 15.35(!0)}1a("1H"==1j i)18 15.80(i,s);1a("17"!=1j i)5W"87 1P "+i+" am an 1U; 3z al 8a a 6v, 1U, 17, ak 1H.";i=n.6k(0,i)}1a(t.1x.1P.1Z(15,i,s),15.1I&&!15.1A&&15.1N<15.2C())1b(p=15,d=p.3y()>i.1i;p.1I&&p.1p;)p.1p.2F&&d?p.2Z(p.1K,!0):p.1M(!0,!1),p=p.1p;18 15},c.51=17(t){1a(t 2a e)18 15.3C(t,!1);1a(t 2a 3K||t&&t.28&&o(t)){1b(19 n=t.1c;--n>-1;)15.51(t[n]);18 15}18"1H"==1j t?15.7P(t):15.4c(1d,t)},c.3C=17(e,n){t.1x.3C.1Z(15,e,n);19 r=15.3h;18 r?15.1n>r.1i+r.2l/r.1y&&(15.1n=15.2C(),15.1K=15.2l):15.1n=15.1K=0,15},c.aF=17(e,t){18 15.1P(e,15.3d(1d,t,!0,e))},c.84=c.8R=17(e,t,n,r){18 15.1P(e,t||0,n,r)},c.8T=17(e,t,n,r){18 15.1P(e,15.3d(1d,t,!0,e),n,r)},c.80=17(e,t){18 15.2L[e]=15.3d(t),15},c.94=17(e,t,n,r){18 15.1Z(f,["{4t}",t,n,r],15,e)},c.7P=17(e){18 3L 15.2L[e],15},c.8X=17(e){18 1d!=15.2L[e]?15.2L[e]:-1},c.3d=17(t,n,r,i){19 s;1a(i 2a e&&i.1U===15)15.51(i);1m 1a(i&&(i 2a 3K||i.28&&o(i)))1b(s=i.1c;--s>-1;)i[s]2a e&&i[s].1U===15&&15.51(i[s]);1a("1H"==1j n)18 15.3d(n,r&&"2t"==1j t&&1d==15.2L[n]?t-15.2C():0,r);1a(n=n||0,"1H"!=1j t||!5X(t)&&1d==15.2L[t])1d==t&&(t=15.2C());1m{1a(s=t.1k("="),-1===s)18 1d==15.2L[t]?r?15.2L[t]=15.2C()+n:n:15.2L[t]+n;n=3q(t.1u(s-1)+"1",10)*1C(t.1t(s+1)),t=s>1?15.3d(t.1t(0,s-1),0,r):15.2C()}18 1C(t)+n},c.4e=17(e,t){18 15.2Z("2t"==1j e?e:15.3d(e),t!==!1)},c.8V=17(){18 15.34(!0)},c.9r=17(e,t){18 15.7w(e,t)},c.9q=17(e,t){18 15.6c(e,t)},c.1B=17(e,t,n){15.1I&&15.1M(!0,!1);19 r,s,o,a,f,l=15.2o?15.26():15.2l,c=15.1n,h=15.1i,p=15.1y,d=15.1A;1a(e>=l?(15.1K=15.1n=l,15.2G||15.5U()||(s=!0,a="4i",0===15.1N&&(0===e||0>15.1O||15.1O===i)&&15.1O!==e&&15.27&&(f=!0,15.1O>i&&(a="4j"))),15.1O=15.1N||!t||e?e:i,e=l+1e-6):1e-7>e?(15.1K=15.1n=0,(0!==c||0===15.1N&&(15.1O>i||0>e&&15.1O>=0))&&(a="4j",s=15.2G),0>e?(15.2c=!1,0===15.1N&&15.1O>=0&&15.27&&(f=!0),15.1O=e):(15.1O=15.1N||!t||e?e:i,e=0,15.2w||(f=!0))):15.1K=15.1n=15.1O=e,15.1n!==c&&15.27||n||f){1a(15.2w||(15.2w=!0),15.2c||!15.1A&&15.1n!==c&&e>0&&(15.2c=!0),0===c&&15.1o.4B&&0!==15.1n&&(t||15.1o.4B.36(15.1o.63||15,15.1o.5D||u)),15.1n>=c)1b(r=15.27;r&&(o=r.1f,!15.1A||d);)(r.2c||r.1i<=15.1n&&!r.1A&&!r.1I)&&(r.2G?r.1B((r.2o?r.26():r.2l)-(e-r.1i)*r.1y,t,n):r.1B((e-r.1i)*r.1y,t,n)),r=o;1m 1b(r=15.3h;r&&(o=r.1l,!15.1A||d);)(r.2c||c>=r.1i&&!r.1A&&!r.1I)&&(r.2G?r.1B((r.2o?r.26():r.2l)-(e-r.1i)*r.1y,t,n):r.1B((e-r.1i)*r.1y,t,n)),r=o;15.32&&(t||15.32.36(15.1o.6b||15,15.1o.67||u)),a&&(15.1I||(h===15.1i||p!==15.1y)&&(0===15.1n||l>=15.26())&&(s&&(15.1p.4P&&15.1M(!1,!1),15.2c=!1),!t&&15.1o[a]&&15.1o[a].36(15.1o[a+"6l"]||15,15.1o[a+"6o"]||u)))}},c.5U=17(){1b(19 e=15.27;e;){1a(e.1A||e 2a r&&e.5U())18!0;e=e.1f}18!1},c.5g=17(e,t,r,i){i=i||-4Y;1b(19 s=[],o=15.27,u=0;o;)i>o.1i||(o 2a n?t!==!1&&(s[u++]=o):(r!==!1&&(s[u++]=o),e!==!1&&(s=s.3U(o.5g(!0,t,r)),u=s.1c))),o=o.1f;18 s},c.3W=17(e,t){1b(19 r=n.3W(e),i=r.1c,s=[],o=0;--i>-1;)(r[i].1U===15||t&&15.7A(r[i]))&&(s[o++]=r[i]);18 s},c.7A=17(e){1b(19 t=e.1U;t;){1a(t===15)18!0;t=t.1U}18!1},c.7l=17(e,t,n){n=n||0;1b(19 r,i=15.27,s=15.2L;i;)i.1i>=n&&(i.1i+=e),i=i.1f;1a(t)1b(r 1w s)s[r]>=n&&(s[r]+=e);18 15.35(!0)},c.2p=17(e,t){1a(!e&&!t)18 15.1M(!1,!1);1b(19 n=t?15.3W(t):15.5g(!0,!0,!1),r=n.1c,i=!1;--r>-1;)n[r].2p(e,t)&&(i=!0);18 i},c.9b=17(e){19 t=15.5g(!1,!0,!0),n=t.1c;1b(15.1n=15.1K=0;--n>-1;)t[n].1M(!1,!1);18 e!==!1&&(15.2L={}),15.35(!0)},c.5i=17(){1b(19 e=15.27;e;)e.5i(),e=e.1f;18 15},c.1M=17(e,n){1a(e===15.1I)1b(19 r=15.27;r;)r.1M(e,!0),r=r.1f;18 t.1x.1M.1Z(15,e,n)},c.2C=17(e){18 22.1c?(0!==15.2C()&&0!==e&&15.5N(15.1N/e),15):(15.2o&&15.26(),15.1N)},c.26=17(e){1a(!22.1c){1a(15.2o){1b(19 t,n,r=0,i=15.3h,s=9g;i;)t=i.1l,i.2o&&i.26(),i.1i>s&&15.4J&&!i.1A?15.1P(i,i.1i-i.2J):s=i.1i,0>i.1i&&!i.1A&&(r-=i.1i,15.1p.2F&&(15.1i+=i.1i/15.1y),15.7l(-i.1i,!1,-4Y),s=0),n=i.1i+i.2l/i.1y,n>r&&(r=n),i=t;15.1N=15.2l=r,15.2o=!1}18 15.2l}18 0!==15.26()&&0!==e&&15.5N(15.2l/e),15},c.cW=17(){1b(19 t=15.1p;t.1p;)t=t.1p;18 t===e.6Y},c.3y=17(){18 15.1A?15.1K:(15.1p.3y()-15.1i)*15.1y},r},!0)}),1T.3R&&1T.3b.4G()();(1T.3b||(1T.3b=[])).28(17(){"5v 5u";1T.3R("2j.7F",["2j.7v"],17(e){19 t,n,r,i=1T.6h||1T,s=i.4F.4A,o=2*1h.4l,u=1h.4l/2,a=s.7W,f=17(t,n){19 r=a("2j."+t,17(){},!0),i=r.1x=1g e;18 i.2M=r,i.2x=n,r},l=e.7X||17(){},c=17(e,t,n,r){19 i=a("2j."+e,{5R:1g t,5s:1g n,5r:1g r},!0);18 l(i,e),i},h=17(e,t,n){15.t=e,15.v=t,n&&(15.5t=n,n.5x=15,15.c=n.v-t,15.7x=n.t-e)},p=17(t,n){19 r=a("2j."+t,17(e){15.1R=e||0===e?e:1.c7,15.2k=1.ci*15.1R},!0),i=r.1x=1g e;18 i.2M=r,i.2x=n,i.3t=17(e){18 1g r(e)},r},d=c("7F",p("d3",17(e){18(e-=1)*e*((15.1R+1)*e+15.1R)+1}),p("d6",17(e){18 e*e*((15.1R+1)*e-15.1R)}),p("cU",17(e){18 1>(e*=2)?.5*e*e*((15.2k+1)*e-15.2k):.5*((e-=2)*e*((15.2k+1)*e+15.2k)+2)})),v=a("2j.5Z",17(e,t,n){t=t||0===t?t:.7,1d==e?e=.7:e>1&&(e=1),15.7V=1!==e?t:0,15.1R=(1-e)/2,15.2k=e,15.3c=15.1R+15.2k,15.3m=n===!0},!0),m=v.1x=1g e;18 m.2M=v,m.2x=17(e){19 t=e+(.5-e)*15.7V;18 15.1R>e?15.3m?1-(e=1-e/15.1R)*e:t-(e=1-e/15.1R)*e*e*e*t:e>15.3c?15.3m?1-(e=(e-15.3c)/15.1R)*e:t+(e-t)*(e=(e-15.3c)/15.1R)*e*e*e:15.3m?1:t},v.3Q=1g v(.7,.7),m.3t=v.3t=17(e,t,n){18 1g v(e,t,n)},t=a("2j.7S",17(e){e=e||1,15.1R=1/e,15.2k=e+1},!0),m=t.1x=1g e,m.2M=t,m.2x=17(e){18 0>e?e=0:e>=1&&(e=.cH),(15.2k*e>>0)*15.1R},m.3t=t.3t=17(e){18 1g t(e)},n=a("2j.7Y",17(t){t=t||{};1b(19 n,r,i,s,o,u,a=t.cT||"3r",f=[],l=0,c=0|(t.d4||20),p=c,d=t.d1!==!1,v=t.cX===!0,m=t.7J 2a e?t.7J:1d,g="2t"==1j t.7K?.4*t.7K:.4;--p>-1;)n=d?1h.7L():1/c*p,r=m?m.2x(n):n,"3r"===a?i=g:"cC"===a?(s=1-n,i=s*s*g):"1w"===a?i=n*n*g:.5>n?(s=2*n,i=.5*s*s*g):(s=2*(1-n),i=.5*s*s*g),d?r+=1h.7L()*i-.5*i:p%2?r+=.5*i:r-=.5*i,v&&(r>1?r=1:0>r&&(r=0)),f[l++]={x:n,y:r};1b(f.ch(17(e,t){18 e.x-t.x}),u=1g h(1,1,1d),p=c;--p>-1;)o=f[p],u=1g h(o.x,o.y,u);15.1l=1g h(0,0,0!==u.t?u:u.5t)},!0),m=n.1x=1g e,m.2M=n,m.2x=17(e){19 t=15.1l;1a(e>t.t){1b(;t.5t&&e>=t.t;)t=t.5t;t=t.5x}1m 1b(;t.5x&&t.t>=e;)t=t.5x;18 15.1l=t,t.v+(e-t.t)/t.7x*t.c},m.3t=17(e){18 1g n(e)},n.3Q=1g n,c("cm",f("cA",17(e){18 1/2.75>e?7.2I*e*e:2/2.75>e?7.2I*(e-=1.5/2.75)*e+.75:2.5/2.75>e?7.2I*(e-=2.25/2.75)*e+.6i:7.2I*(e-=2.6d/2.75)*e+.6e}),f("cu",17(e){18 1/2.75>(e=1-e)?1-7.2I*e*e:2/2.75>e?1-(7.2I*(e-=1.5/2.75)*e+.75):2.5/2.75>e?1-(7.2I*(e-=2.25/2.75)*e+.6i):1-(7.2I*(e-=2.6d/2.75)*e+.6e)}),f("co",17(e){19 t=.5>e;18 e=t?1-2*e:2*e-1,e=1/2.75>e?7.2I*e*e:2/2.75>e?7.2I*(e-=1.5/2.75)*e+.75:2.5/2.75>e?7.2I*(e-=2.25/2.75)*e+.6i:7.2I*(e-=2.6d/2.75)*e+.6e,t?.5*(1-e):.5*e+.5})),c("cr",f("cs",17(e){18 1h.3l(1-(e-=1)*e)}),f("cp",17(e){18-(1h.3l(1-e*e)-1)}),f("cn",17(e){18 1>(e*=2)?-.5*(1h.3l(1-e*e)-1):.5*(1h.3l(1-(e-=2)*e)+1)})),r=17(t,n,r){19 i=a("2j."+t,17(e,t){15.1R=e||1,15.2k=t||r,15.3c=15.2k/o*(1h.cv(1/15.1R)||0)},!0),s=i.1x=1g e;18 s.2M=i,s.2x=n,s.3t=17(e,t){18 1g i(e,t)},i},c("cB",r("cz",17(e){18 15.1R*1h.3n(2,-10*e)*1h.2h((e-15.3c)*o/15.2k)+1},.3),r("cy",17(e){18-(15.1R*1h.3n(2,10*(e-=1))*1h.2h((e-15.3c)*o/15.2k))},.3),r("cw",17(e){18 1>(e*=2)?-.5*15.1R*1h.3n(2,10*(e-=1))*1h.2h((e-15.3c)*o/15.2k):.5*15.1R*1h.3n(2,-10*(e-=1))*1h.2h((e-15.3c)*o/15.2k)+1},.45)),c("cc",f("ca",17(e){18 1-1h.3n(2,-10*e)}),f("c8",17(e){18 1h.3n(2,10*(e-1))-.cd}),f("ce",17(e){18 1>(e*=2)?.5*1h.3n(2,10*(e-1)):.5*(2-1h.3n(2,-10*(e-1)))})),c("ck",f("cf",17(e){18 1h.2h(e*u)}),f("cJ",17(e){18-1h.2D(e*u)+1}),f("cZ",17(e){18-.5*(1h.2D(1h.4l*e)-1)})),a("2j.cV",{d0:17(t){18 e.7Z[t]}},!0),l(i.5Z,"5Z","3Q,"),l(n,"7Y","3Q,"),l(t,"7S","3Q,"),d},!0)}),1T.3R&&1T.3b.4G()();(1T.3b||(1T.3b=[])).28(17(){"5v 5u";1T.3R("4z.cE",["4z.7Q","5c"],17(e,t){19 n,r,i,s,o=17(){e.1Z(15,"4s"),15.2E.1c=0,15.1X=o.1x.1X},u={},a=o.1x=1g e("4s");a.2M=o,o.3Z="1.11.2",o.3J=2,o.8g=0,a="2d",o.6z={3k:a,7e:a,4x:a,4u:a,3M:a,3B:a,cP:a,6x:a,6w:a,33:a};19 f,l,c,h,p,d,v=/(?:\\d|\\-\\d|\\.\\d|\\-\\.\\d)+/g,m=/(?:\\d|\\-\\d|\\.\\d|\\-\\.\\d|\\+=\\d|\\-=\\d|\\+=.\\d|\\-=\\.\\d)+/g,g=/(?:\\+=|\\-=|\\-|\\b)[\\d\\-\\.]+[a-cN-cO-9]*(?:%|\\b)/3N,y=/[^\\d\\-\\.]/g,b=/(?:\\d|\\-|\\+|=|#|\\.)*/g,w=/1Y *= *([^)]*)/,E=/1Y:([^;]*)/,S=/3E\\(1Y *=.+?\\)/i,x=/^(5e|6m)/,T=/([A-Z])/g,N=/-([a-z])/3N,C=/(^(?:74\\(\\"|74\\())|(?:(\\"\\))$|\\)$)/3N,k=17(e,t){18 t.5h()},L=/(?:5Y|7s|7k)/i,A=/(8z|8O|8N|8L)=[\\d\\-\\.e]+/3N,O=/8x\\:5J\\.5L\\.5M\\(.+?\\)/i,M=/,(?=[^\\)]*(?:\\(|$))/3N,2q=1h.4l/31,D=31/1h.4l,P={},H=69,B=H.6a("77"),j=H.6a("ba"),F=o.4p={bb:u},I=b8.b7,q=17(){19 e,t=I.1k("b3"),n=H.6a("77");18 c=-1!==I.1k("b5")&&-1===I.1k("b6")&&(-1===t||1C(I.1t(t+8,1))>3),p=c&&6>1C(I.1t(I.1k("bc/")+8,1)),h=-1!==I.1k("bd"),/bk ([0-9]{1,}[\\.0-9]{0,})/.bl(I)&&(d=1q(4k.$1)),n.bm="<a 1v=\'3k:bj;1Y:.55;\'>a</a>",e=n.bi("a")[0],e?/^0.55/.2P(e.1v.1Y):!1}(),R=17(e){18 w.2P("1H"==1j e?e:(e.2R?e.2R.2i:e.1v.2i)||"")?1q(4k.$1)/23:1},U=17(e){1T.65&&65.6U(e)},z="",W="",X=17(e,t){t=t||B;19 n,r,i=t.1v;1a(2u 0!==i[e])18 e;1b(e=e.1u(0).5h()+e.1t(1),n=["O","be","64","bf","bg"],r=5;--r>-1&&2u 0===i[n[r]+e];);18 r>=0?(W=3===r?"64":n[r],z="-"+W.6R()+"-",W+e):1d},V=H.6Z?H.6Z.bh:17(){},$=o.c6=17(e,t,n,r,i){19 s;18 q||"1Y"!==t?(!r&&e.1v[t]?s=e.1v[t]:(n=n||V(e,1d))?(e=n.4m(t.1D(T,"-$1").6R()),s=e||n.1c?e:n[t]):e.2R&&(s=e.2R[t]),1d==i||s&&"3r"!==s&&"2n"!==s&&"2n 2n"!==s?s:i):R(e)},J=17(e,t,n,r,i){1a("2d"===r||!r)18 n;1a("2n"===r||!n)18 0;19 s,o=L.2P(t),u=e,a=B.1v,f=0>n;18 f&&(n=-n),"%"===r&&-1!==t.1k("3X")?s=n/23*(o?e.b2:e.b1):(a.37="3X:0 4S 8P;4q:"+$(e,"4q")+";aN-3B:0;","%"!==r&&u.7m?a[o?"aO":"70"]=n+r:(u=e.aP||H.aM,a[o?"3M":"3B"]=n+r),u.7m(B),s=1q(B[o?"4H":"4r"]),u.aL(B),0!==s||i||(s=J(e,t,n,r,!0))),f?-s:s},K=17(e,t,n){1a("8y"!==$(e,"4q",n))18 0;19 r="4u"===t?"5Y":"7r",i=$(e,"6w"+r,n);18 e["aH"+r]-(J(e,t,1q(i),i.1D(b,""))||0)},Q=17(e,t){19 n,r,i={};1a(t=t||V(e,1d))1a(n=t.1c)1b(;--n>-1;)i[t[n].1D(N,k)]=t.4m(t[n]);1m 1b(n 1w t)i[n]=t[n];1m 1a(t=e.2R||e.1v)1b(n 1w t)"1H"==1j n&&2u 0!==i[n]&&(i[n.1D(N,k)]=t[n]);18 q||(i.1Y=R(e)),r=44(e,t,!1),i.1F=r.1F,i.1S=r.1S,i.2f=r.2f,i.2g=r.2g,i.x=r.x,i.y=r.y,3j&&(i.z=r.z,i.1Q=r.1Q,i.21=r.21,i.2N=r.2N),i.7q&&3L i.7q,i},G=17(e,t,n,r,i){19 s,o,u,a={},f=e.1v;1b(o 1w n)"37"!==o&&"1c"!==o&&5X(o)&&(t[o]!==(s=n[o])||i&&i[o])&&-1===o.1k("aI")&&("2t"==1j s||"1H"==1j s)&&(a[o]="2n"!==s||"4u"!==o&&"3k"!==o?""!==s&&"2n"!==s&&"3r"!==s||"1H"!=1j t[o]||""===t[o].1D(y,"")?s:0:K(e,o),2u 0!==f[o]&&(u=1g ct(f,o,f[o],u)));1a(r)1b(o 1w r)"39"!==o&&(a[o]=r[o]);18{4T:a,42:u}},Y={3M:["5Y","7s"],3B:["7r","aK"]},Z=["7C","81","83","82"],3D=17(e,t,n){19 r=1q("3M"===t?e.4H:e.4r),i=Y[t],s=i.1c;1b(n=n||V(e,1d);--s>-1;)r-=1q($(e,"6x"+i[s],n,!0))||0,r-=1q($(e,"3X"+i[s]+"7k",n,!0))||0;18 r},3e=17(e,t){(1d==e||""===e||"2n"===e||"2n 2n"===e)&&(e="0 0");19 n=e.1s(" "),r=-1!==e.1k("4u")?"0%":-1!==e.1k("7e")?"23%":n[0],i=-1!==e.1k("3k")?"0%":-1!==e.1k("4x")?"23%":n[1];18 1d==i?i="0":"7d"===i&&(i="50%"),("7d"===r||5X(1q(r))&&-1===(r+"").1k("="))&&(r="50%"),t&&(t.8K=-1!==r.1k("%"),t.8H=-1!==i.1k("%"),t.aQ="="===r.1u(1),t.aR="="===i.1u(1),t.57=1q(r.1D(y,"")),t.5K=1q(i.1D(y,""))),r+" "+i+(n.1c>2?" "+n[2]:"")},3s=17(e,t){18"1H"==1j e&&"="===e.1u(1)?3q(e.1u(0)+"1",10)*1q(e.1t(2)):1q(e)-1q(t)},2B=17(e,t){18 1d==e?t:"1H"==1j e&&"="===e.1u(1)?3q(e.1u(0)+"1",10)*1C(e.1t(2))+t:1q(e)},3z=17(e,t,n,r){19 i,s,o,u,a=1e-6;18 1d==e?u=t:"2t"==1j e?u=e:(i=6r,s=e.1s("2q"),o=1C(s[0].1D(y,""))*(-1===e.1k("aY")?1:D)-("="===e.1u(1)?0:t),s.1c&&(r&&(r[n]=t+o),-1!==e.1k("aZ")&&(o%=i,o!==o%(i/2)&&(o=0>o?o+i:o-i)),-1!==e.1k("b0")&&0>o?o=(o+4Y*i)%i-(0|o/i)*i:-1!==e.1k("aX")&&o>0&&(o=(o-4Y*i)%i-(0|o/i)*i)),u=t+o),a>u&&u>-a&&(u=0),u},3G={aS:[0,1E,1E],aT:[0,1E,0],aU:[5j,5j,5j],8k:[0,0,0],aV:[2O,0,0],bn:[0,2O,2O],bo:[0,0,1E],bS:[0,0,2O],bT:[1E,1E,1E],bU:[1E,0,1E],bR:[2O,2O,0],bQ:[1E,1E,0],bM:[1E,bN,0],bO:[2O,2O,2O],bP:[2O,0,2O],bV:[0,2O,0],8P:[1E,0,0],c2:[1E,5j,c4],c1:[0,1E,1E],4a:[1E,1E,1E,0]},4W=17(e,t,n){18 e=0>e?e+1:e>1?e-1:e,0|1E*(1>6*e?t+6*(n-t)*e:.5>e?n:2>3*e?t+6*(n-t)*(2/3-e):t)+.5},5d=17(e){19 t,n,r,i,s,o;18 e&&""!==e?"2t"==1j e?[e>>16,1E&e>>8,1E&e]:(","===e.1u(e.1c-1)&&(e=e.1t(0,e.1c-1)),3G[e]?3G[e]:"#"===e.1u(0)?(4===e.1c&&(t=e.1u(1),n=e.1u(2),r=e.1u(3),e="#"+t+t+n+n+r+r),e=3q(e.1t(1),16),[e>>16,1E&e>>8,1E&e]):"6m"===e.1t(0,3)?(e=e.2K(v),i=1C(e[0])%6r/6r,s=1C(e[1])/23,o=1C(e[2])/23,n=.5>=o?o*(s+1):o+s-o*s,t=2*o-n,e.1c>3&&(e[3]=1C(e[3])),e[0]=4W(i+1/3,t,n),e[1]=4W(i,t,n),e[2]=4W(i-1/3,t,n),e):(e=e.2K(v)||3G.4a,e[0]=1C(e[0]),e[1]=1C(e[1]),e[2]=1C(e[2]),e.1c>3&&(e[3]=1C(e[3])),e)):3G.8k},at="(?:\\\\b(?:(?:5e|6N|6m|bZ)\\\\(.+?\\\\))|\\\\B#.+?\\\\b";1b(a 1w 3G)at+="|"+a+"\\\\b";at=4k(at+")","3N");19 6I=17(e,t,n,r){1a(1d==e)18 17(e){18 e};19 i,s=t?(e.2K(at)||[""])[0]:"",o=e.1s(s).1G("").2K(g)||[],u=e.1t(0,e.1k(o[0])),a=")"===e.1u(e.1c-1)?")":"",f=-1!==e.1k(" ")?" ":",",l=o.1c,c=l>0?o[0].1D(v,""):"";18 l?i=t?17(e){19 t,h,p,d;1a("2t"==1j e)e+=c;1m 1a(r&&M.2P(e)){1b(d=e.1D(M,"|").1s("|"),p=0;d.1c>p;p++)d[p]=i(d[p]);18 d.1G(",")}1a(t=(e.2K(at)||[s])[0],h=e.1s(t).1G("").2K(g)||[],p=h.1c,l>p--)1b(;l>++p;)h[p]=n?h[0|(p-1)/2]:o[p];18 u+h.1G(f)+f+t+a+(-1!==e.1k("6D")?" 6D":"")}:17(e){19 t,s,h;1a("2t"==1j e)e+=c;1m 1a(r&&M.2P(e)){1b(s=e.1D(M,"|").1s("|"),h=0;s.1c>h;h++)s[h]=i(s[h]);18 s.1G(",")}1a(t=e.2K(g)||[],h=t.1c,l>h--)1b(;l>++h;)t[h]=n?t[0|(h-1)/2]:o[h];18 u+t.1G(f)+a}:17(e){18 e}},6A=17(e){18 e=e.1s(","),17(t,n,r,i,s,o,u){19 a,f=(n+"").1s(" ");1b(u={},a=0;4>a;a++)u[e[a]]=f[a]=f[a]||f[(a-1)/2>>0];18 i.2S(t,u,s,o)}},ct=(F.bL=17(e){15.2A.1X(e);1b(19 t,n,r,i,s=15.1z,o=s.8t,u=s.42,a=1e-6;u;)t=o[u.v],u.r?t=t>0?0|t+.5:0|t-.5:a>t&&t>-a&&(t=0),u.t[u.p]=t,u=u.1f;1a(s.8c&&(s.8c.1F=o.1F),1===e)1b(u=s.42;u;){1a(n=u.t,n.2r){1a(1===n.2r){1b(i=n.1W+n.s+n.3V,r=1;n.l>r;r++)i+=n["3g"+r]+n["2X"+(r+1)];n.e=i}}1m n.e=n.s+n.1W;u=u.1f}},17(e,t,n,r,i){15.t=e,15.p=t,15.v=n,15.r=i,r&&(r.1l=15,15.1f=r)}),24=(F.bK=17(e,t,n,r,i,s){19 o,u,a,f,l,c=r,h={},p={},d=n.3p,v=P;1b(n.3p=1d,P=t,r=l=n.2S(e,t,r,i),P=v,s&&(n.3p=d,c&&(c.1l=1d,c.1l&&(c.1l.1f=1d)));r&&r!==c;){1a(1>=r.2r&&(u=r.p,p[u]=r.s+r.c,h[u]=r.s,s||(f=1g ct(r,"s",u,f,r.r),r.c=0),1===r.2r))1b(o=r.l;--o>0;)a="3g"+o,u=r.p+"2q"+a,p[u]=r.1z[a],h[u]=r[a],s||(f=1g ct(r,a,u,f,r.5f[a]));r=r.1f}18{8t:h,bw:p,42:f,4f:l}},F.bx=17(e,t,r,i,o,u,a,f,l,c,h){15.t=e,15.p=t,15.s=r,15.c=i,15.n=a||t,e 2a 24||s.28(15.n),15.r=f,15.2r=u||0,l&&(15.2s=l,n=!0),15.b=2u 0===c?r:c,15.e=2u 0===h?r+i:h,o&&(15.1f=o,o.1l=15)}),4f=o.46=17(e,t,n,r,i,s,o,u,a,l){n=n||s||"",o=1g 24(e,t,0,0,o,l?2:1,1d,!1,u,n,r),r+="";19 c,h,p,d,g,y,b,w,E,S,T,N,C=n.1s(", ").1G(",").1s(" "),k=r.1s(", ").1G(",").1s(" "),L=C.1c,A=f!==!1;1b((-1!==r.1k(",")||-1!==n.1k(","))&&(C=C.1G(" ").1D(M,", ").1s(" "),k=k.1G(" ").1D(M,", ").1s(" "),L=C.1c),L!==k.1c&&(C=(s||"").1s(" "),L=C.1c),o.2A=a,o.1X=l,c=0;L>c;c++)1a(d=C[c],g=k[c],w=1q(d),w||0===w)o.3I("",w,3s(g,w),g.1D(m,""),A&&-1!==g.1k("2d"),!0);1m 1a(i&&("#"===d.1u(0)||3G[d]||x.2P(d)))N=","===g.1u(g.1c-1)?"),":")",d=5d(d),g=5d(g),E=d.1c+g.1c>6,E&&!q&&0===g[3]?(o["2X"+o.l]+=o.l?" 4a":"4a",o.e=o.e.1s(k[c]).1G("4a")):(q||(E=!1),o.3I(E?"6N(":"5e(",d[0],g[0]-d[0],",",!0,!0).3I("",d[1],g[1]-d[1],",",!0).3I("",d[2],g[2]-d[2],E?",":N,!0),E&&(d=4>d.1c?1:d[3],o.3I("",d,(4>g.1c?1:g[3])-d,N,!1)));1m 1a(y=d.2K(v)){1a(b=g.2K(m),!b||b.1c!==y.1c)18 o;1b(p=0,h=0;y.1c>h;h++)T=y[h],S=d.1k(T,p),o.3I(d.1t(p,S-p),1C(T),3s(b[h],T),"",A&&"2d"===d.1t(S+T.1c,2),0===h),p=S+T.1c;o["2X"+o.l]+=d.1t(p)}1m o["2X"+o.l]+=o.l?" "+d:d;1a(-1!==r.1k("=")&&o.1z){1b(N=o.1W+o.1z.s,c=1;o.l>c;c++)N+=o["2X"+c]+o.1z["3g"+c];o.e=N+o["2X"+c]}18 o.l||(o.2r=-1,o.1W=o.e),o.3H||o},2m=9;1b(a=24.1x,a.l=a.2s=0;--2m>0;)a["3g"+2m]=0,a["2X"+2m]="";a.1W="",a.1f=a.1l=a.3H=a.1z=a.2A=a.1X=a.5f=1d,a.3I=17(e,t,n,r,i,s){19 o=15,u=o.l;18 o["2X"+u]+=s&&u?" "+e:e||"",n||0===u||o.2A?(o.l++,o.2r=o.1X?2:1,o["2X"+o.l]=r||"",u>0?(o.1z["3g"+u]=t+n,o.5f["3g"+u]=i,o["3g"+u]=t,o.2A||(o.3H=1g 24(o,"3g"+u,t,n,o.3H||o,0,o.n,i,o.2s),o.3H.1W=0),o):(o.1z={s:t+n},o.5f={},o.s=t,o.c=n,o.r=i,o)):(o["2X"+u]+=t+(r||""),o)};19 5G=17(e,t){t=t||{},15.p=t.2T?X(e)||e:e,u[e]=u[15.p]=15,15.2U=t.4R||6I(t.2y,t.4g,t.by,t.47),t.2b&&(15.2S=t.2b),15.8D=t.4g,15.47=t.47,15.4V=t.4V,15.49=t.2y,15.2s=t.5H||0},1L=F.bv=17(e,t,n){"3T"!=1j t&&(t={2b:n});19 r,i,s=e.1s(","),o=t.2y;1b(n=n||[o],r=0;s.1c>r;r++)t.2T=0===r&&t.2T,t.2y=n[r]||o,i=1g 5G(s[r],t)},7H=17(e){1a(!u[e]){19 t=e.1u(0).5h()+e.1t(1)+"8j";1L(e,{2b:17(e,n,r,i,s,o,a){19 f=(1T.6h||1T).4F.4A.4z[t];18 f?(f.bu(),u[r].2S(e,n,r,i,s,o,a)):(U("bp: "+t+" bq br 8a bs."),s)}})}};a=5G.1x,a.46=17(e,t,n,r,i,s){19 o,u,a,f,l,c,h=15.4V;1a(15.47&&(M.2P(n)||M.2P(t)?(u=t.1D(M,"|").1s("|"),a=n.1D(M,"|").1s("|")):h&&(u=[t],a=[n])),a){1b(f=a.1c>u.1c?a.1c:u.1c,o=0;f>o;o++)t=u[o]=u[o]||15.49,n=a[o]=a[o]||15.49,h&&(l=t.1k(h),c=n.1k(h),l!==c&&(n=-1===c?a:u,n[o]+=" "+h));t=u.1G(", "),n=a.1G(", ")}18 4f(e,15.p,t,n,15.8D,15.49,r,15.2s,i,s)},a.2S=17(e,t,n,r,s,o){18 15.46(e.1v,15.2U($(e,15.p,i,!1,15.49)),15.2U(t),s,o)},o.bA=17(e,t,n){1L(e,{2b:17(e,r,i,s,o,u){19 a=1g 24(e,i,0,0,o,2,i,!1,n);18 a.2A=u,a.1X=t(e,r,s.2V,i),a},5H:n})};19 6K="2f,2g,2N,x,y,z,1S,1F,1Q,21,33".1s(","),bt=X("3P"),8B=z+"3P",5m=X("4Q"),3j=1d!==X("33"),44=17(e,t,n,r){1a(e.4b&&n&&!r)18 e.4b;19 i,s,u,a,f,l,c,h,p,d,v,m,g,y=n?e.4b||{30:0}:{30:0},b=0>y.2f,w=2e-5,E=54,S=bH.99,x=S*2q,T=3j?1q($(e,5m,t,!1,"0 0 0").1s(" ")[2])||y.2Q||0:0;1b(bt?i=$(e,8B,t,!0):e.2R&&(i=e.2R.2i.2K(A),i=i&&4===i.1c?[i[0].1t(4),1C(i[2].1t(4)),1C(i[1].1t(4)),i[3].1t(4),y.x||0,y.y||0].1G(","):""),s=(i||"").2K(/(?:\\-|\\b)[\\d\\-\\.e]+\\b/3N)||[],u=s.1c;--u>-1;)a=1C(s[u]),s[u]=(f=a-(a|=0))?(0|f*E+(0>f?-.5:.5))/E+a:a;1a(16===s.1c){19 N=s[8],C=s[9],k=s[10],L=s[12],O=s[13],M=s[14];1a(y.2Q&&(M=-y.2Q,L=N*M-s[12],O=C*M-s[13],M=k*M+y.2Q-s[14]),!n||r||1d==y.1Q){19 P,H,B,j,F,I,q,R=s[0],U=s[1],z=s[2],W=s[3],X=s[4],V=s[5],J=s[6],K=s[7],Q=s[11],G=1h.4w(J,k),Y=-x>G||G>x;y.1Q=G*D,G&&(j=1h.2D(-G),F=1h.2h(-G),P=X*j+N*F,H=V*j+C*F,B=J*j+k*F,N=X*-F+N*j,C=V*-F+C*j,k=J*-F+k*j,Q=K*-F+Q*j,X=P,V=H,J=B),G=1h.4w(N,R),y.21=G*D,G&&(I=-x>G||G>x,j=1h.2D(-G),F=1h.2h(-G),P=R*j-N*F,H=U*j-C*F,B=z*j-k*F,C=U*F+C*j,k=z*F+k*j,Q=W*F+Q*j,R=P,U=H,z=B),G=1h.4w(U,V),y.1F=G*D,G&&(q=-x>G||G>x,j=1h.2D(-G),F=1h.2h(-G),R=R*j+X*F,H=U*j+V*F,V=U*-F+V*j,J=z*-F+J*j,U=H),q&&Y?y.1F=y.1Q=0:q&&I?y.1F=y.21=0:I&&Y&&(y.21=y.1Q=0),y.2f=(0|1h.3l(R*R+U*U)*E+.5)/E,y.2g=(0|1h.3l(V*V+C*C)*E+.5)/E,y.2N=(0|1h.3l(J*J+k*k)*E+.5)/E,y.1S=0,y.33=Q?1/(0>Q?-Q:Q):0,y.x=L,y.y=O,y.z=M}}1m 1a(!(3j&&!r&&s.1c&&y.x===s[4]&&y.y===s[5]&&(y.1Q||y.21)||2u 0!==y.x&&"3r"===$(e,"6s",t))){19 Z=s.1c>=6,3D=Z?s[0]:1,3e=s[1]||0,3s=s[2]||0,2B=Z?s[3]:1;y.x=s[4]||0,y.y=s[5]||0,l=1h.3l(3D*3D+3e*3e),c=1h.3l(2B*2B+3s*3s),h=3D||3e?1h.4w(3e,3D)*D:y.1F||0,p=3s||2B?1h.4w(3s,2B)*D+h:y.1S||0,d=l-1h.56(y.2f||0),v=c-1h.56(y.2g||0),1h.56(p)>90&&bJ>1h.56(p)&&(b?(l*=-1,p+=0>=h?31:-31,h+=0>=h?31:-31):(c*=-1,p+=0>=p?31:-31)),m=(h-y.1F)%31,g=(p-y.1S)%31,(2u 0===y.1S||d>w||-w>d||v>w||-w>v||m>-S&&S>m&&5O|m*E||g>-S&&S>g&&5O|g*E)&&(y.2f=l,y.2g=c,y.1F=h,y.1S=p),3j&&(y.1Q=y.21=y.z=0,y.33=1q(o.8g)||0,y.2N=1)}y.2Q=T;1b(u 1w y)w>y[u]&&y[u]>-w&&(y[u]=0);18 n&&(e.4b=y),y},7O=17(e){19 t,n,r=15.1z,i=-r.1F*2q,s=i+r.1S*2q,o=54,u=(0|1h.2D(i)*r.2f*o)/o,a=(0|1h.2h(i)*r.2f*o)/o,f=(0|1h.2h(s)*-r.2g*o)/o,l=(0|1h.2D(s)*r.2g*o)/o,c=15.t.1v,h=15.t.2R;1a(h){n=a,a=-f,f=-n,t=h.2i,c.2i="";19 p,v,m=15.t.4H,g=15.t.4r,y="8y"!==h.4q,E="8x:5J.5L.5M(8z="+u+", 8O="+a+", 8N="+f+", 8L="+l,S=r.x,x=r.y;1a(1d!=r.57&&(p=(r.8K?.8I*m*r.57:r.57)-m/2,v=(r.8H?.8I*g*r.5K:r.5K)-g/2,S+=p-(p*u+v*a),x+=v-(p*f+v*l)),y?(p=m/2,v=g/2,E+=", 8E="+(p-(p*u+v*a)+S)+", 8G="+(v-(p*f+v*l)+x)+")"):E+=", bF=\'2n bB\')",c.2i=-1!==t.1k("5J.5L.5M(")?t.1D(O,E):E+" "+t,(0===e||1===e)&&1===u&&0===a&&0===f&&1===l&&(y&&-1===E.1k("8E=0, 8G=0")||w.2P(t)&&23!==1q(4k.$1)||-1===t.1k("bD("&&t.1k("bE"))&&c.6Q("2i")),!y){19 T,N,C,k=8>d?1:-1;1b(p=r.5l||0,v=r.58||0,r.5l=1h.59((m-((0>u?-u:u)*m+(0>a?-a:a)*g))/2+S),r.58=1h.59((g-((0>l?-l:l)*g+(0>f?-f:f)*m))/2+x),2m=0;4>2m;2m++)N=Z[2m],T=h[N],n=-1!==T.1k("2d")?1q(T):J(15.t,N,1q(T),T.1D(b,""))||0,C=n!==r[N]?2>2m?-r.5l:-r.58:2>2m?p-r.5l:v-r.58,c[N]=(r[N]=1h.59(n-C*(0===2m||2===2m?1:k)))+"2d"}}},7D=17(){19 e,t,n,r,i,s,o,u,a,f,l,c,p,d,v,m,g,y,b,w,E,S,x,T=15.1z,N=15.t.1v,C=T.1F*2q,k=T.2f,L=T.2g,A=T.2N,O=T.33;1a(h){19 M=1e-4;M>k&&k>-M&&(k=A=2e-5),M>L&&L>-M&&(L=A=2e-5),!O||T.z||T.1Q||T.21||(O=0)}1a(C||T.1S)y=1h.2D(C),b=1h.2h(C),e=y,i=b,T.1S&&(C-=T.1S*2q,y=1h.2D(C),b=1h.2h(C)),t=-b,s=y;1m{1a(!(T.21||T.1Q||1!==A||O))18 N[bt]="bC("+T.x+"2d,"+T.y+"2d,"+T.z+"2d)"+(1!==k||1!==L?" 48("+k+","+L+")":""),2u 0;e=s=1,t=i=0}l=1,n=r=o=u=a=f=c=p=d=0,v=O?-1/O:0,m=T.2Q,g=54,C=T.21*2q,C&&(y=1h.2D(C),b=1h.2h(C),a=l*-b,p=v*-b,n=e*b,o=i*b,l*=y,v*=y,e*=y,i*=y),C=T.1Q*2q,C&&(y=1h.2D(C),b=1h.2h(C),w=t*y+n*b,E=s*y+o*b,S=f*y+l*b,x=d*y+v*b,n=t*-b+n*y,o=s*-b+o*y,l=f*-b+l*y,v=d*-b+v*y,t=w,s=E,f=S,d=x),1!==A&&(n*=A,o*=A,l*=A,v*=A),1!==L&&(t*=L,s*=L,f*=L,d*=L),1!==k&&(e*=k,i*=k,a*=k,p*=k),m&&(c-=m,r=n*c,u=o*c,c=l*c+m),r=(w=(r+=T.x)-(r|=0))?(0|w*g+(0>w?-.5:.5))/g+r:r,u=(w=(u+=T.y)-(u|=0))?(0|w*g+(0>w?-.5:.5))/g+u:u,c=(w=(c+=T.z)-(c|=0))?(0|w*g+(0>w?-.5:.5))/g+c:c,N[bt]="bG("+[(0|e*g)/g,(0|i*g)/g,(0|a*g)/g,(0|p*g)/g,(0|t*g)/g,(0|s*g)/g,(0|f*g)/g,(0|d*g)/g,(0|n*g)/g,(0|o*g)/g,(0|l*g)/g,(0|v*g)/g,r,u,c,O?1+ -c/O:1].1G(",")+")"},7B=17(){19 e,t,n,r,i,s,o,u,a,f=15.1z,l=15.t,c=l.1v;h&&(e=c.3k?"3k":c.4x?"4x":1q($(l,"3k",1d,!1))?"4x":"3k",t=$(l,e,1d,!1),n=1q(t)||0,r=t.1t((n+"").1c)||"2d",f.6y=!f.6y,c[e]=(f.6y?n+.8v:n-.8v)+r),f.1F||f.1S?(i=f.1F*2q,s=i-f.1S*2q,o=54,u=f.2f*o,a=f.2g*o,c[bt]="8b("+(0|1h.2D(i)*u)/o+","+(0|1h.2h(i)*u)/o+","+(0|1h.2h(s)*-a)/o+","+(0|1h.2D(s)*a)/o+","+f.x+","+f.y+")"):c[bt]="8b("+f.2f+",0,0,"+f.2g+","+f.x+","+f.y+")"};1L("3P,48,2f,2g,2N,x,y,z,1F,1Q,21,6u,1S,30,6t,6B,6C,bI,4Q,8s,8n,8Q,4E",{2b:17(e,t,n,r,s,o,u){1a(r.3p)18 s;19 a,f,l,c,h,p,d,v=r.3p=44(e,i,!0,u.8Q),m=e.1v,g=1e-6,y=6K.1c,b=u,w={};1a("1H"==1j b.3P&&bt)l=m.37,m[bt]=b.3P,m.6s="bz",a=44(e,1d,!1),m.37=l;1m 1a("3T"==1j b){1a(a={2f:2B(1d!=b.2f?b.2f:b.48,v.2f),2g:2B(1d!=b.2g?b.2g:b.48,v.2g),2N:2B(1d!=b.2N?b.2N:b.48,v.2N),x:2B(b.x,v.x),y:2B(b.y,v.y),z:2B(b.z,v.z),33:2B(b.8s,v.33)},d=b.8n,1d!=d)1a("3T"==1j d)1b(l 1w d)b[l]=d[l];1m b.1F=d;a.1F=3z("1F"1w b?b.1F:"6t"1w b?b.6t+"6J":"6u"1w b?b.6u:v.1F,v.1F,"1F",w),3j&&(a.1Q=3z("1Q"1w b?b.1Q:"6B"1w b?b.6B+"6J":v.1Q||0,v.1Q,"1Q",w),a.21=3z("21"1w b?b.21:"6C"1w b?b.6C+"6J":v.21||0,v.21,"21",w)),a.1S=1d==b.1S?v.1S:3z(b.1S,v.1S),a.30=1d==b.30?v.30:3z(b.30,v.30),(f=a.30-v.30)&&(a.1S+=f,a.1F+=f)}1b(1d!=b.4E&&(v.4E=b.4E,p=!0),h=v.4E||v.z||v.1Q||v.21||a.z||a.1Q||a.21||a.33,h||1d==b.48||(a.2N=1);--y>-1;)n=6K[y],c=a[n]-v[n],(c>g||-g>c||1d!=P[n])&&(p=!0,s=1g 24(v,n,v[n],c,s),n 1w w&&(s.e=w[n]),s.1W=0,s.2A=o,r.2E.28(s.n));18 c=b.4Q,(c||3j&&h&&v.2Q)&&(bt?(p=!0,n=5m,c=(c||$(e,n,i,!1,"50% 50%"))+"",s=1g 24(m,n,0,0,s,-1,"4Q"),s.b=m[n],s.2A=o,3j?(l=v.2Q,c=c.1s(" "),v.2Q=(c.1c>2&&(0===l||"1J"!==c[2])?1q(c[2]):l)||0,s.1W=s.e=m[n]=c[0]+" "+(c[1]||"50%")+" 1J",s=1g 24(v,"2Q",0,0,s,-1,s.n),s.b=l,s.1W=s.e=v.2Q):s.1W=s.e=m[n]=c):3e(c+"",v)),p&&(r.3S=h||3===15.3S?3:2),s},2T:!0}),1L("bY",{2y:"1J 1J 1J 1J #6V",2T:!0,4g:!0,47:!0,4V:"6D"}),1L("bX",{2y:"1J",2b:17(e,t,n,s,o){t=15.2U(t);19 u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x=["c0","c3","bW","aW"],T=e.1v;1b(v=1q(e.4H),m=1q(e.4r),u=t.1s(" "),a=0;x.1c>a;a++)15.p.1k("3X")&&(x[a]=X(x[a])),c=l=$(e,x[a],i,!1,"1J"),-1!==c.1k(" ")&&(l=c.1s(" "),c=l[0],l=l[1]),h=f=u[a],p=1q(c),y=c.1t((p+"").1c),b="="===h.1u(1),b?(d=3q(h.1u(0)+"1",10),h=h.1t(2),d*=1q(h),g=h.1t((d+"").1c-(0>d?1:0))||""):(d=1q(h),g=h.1t((d+"").1c)),""===g&&(g=r[n]||y),g!==y&&(w=J(e,"6X",p,y),E=J(e,"aJ",p,y),"%"===g?(c=23*(w/v)+"%",l=23*(E/m)+"%"):"4d"===g?(S=J(e,"6X",1,"4d"),c=w/S+"4d",l=E/S+"4d"):(c=w+"2d",l=E+"2d"),b&&(h=1q(c)+d+g,f=1q(l)+d+g)),o=4f(T,x[a],c+" "+l,h+" "+f,!1,"1J",o);18 o},2T:!0,4R:6I("1J 1J 1J 1J",!1,!0)}),1L("b4",{2y:"0 0",2b:17(e,t,n,r,s,o){19 u,a,f,l,c,h,p="b9-4q",v=i||V(e,1d),m=15.2U((v?d?v.4m(p+"-x")+" "+v.4m(p+"-y"):v.4m(p):e.2R.c5+" "+e.2R.cQ)||"0 0"),g=15.2U(t);1a(-1!==m.1k("%")!=(-1!==g.1k("%"))&&(h=$(e,"cS").1D(C,""),h&&"3r"!==h)){1b(u=m.1s(" "),a=g.1s(" "),j.cM("cG",h),f=2;--f>-1;)m=u[f],l=-1!==m.1k("%"),l!==(-1!==a[f].1k("%"))&&(c=0===f?e.4H-j.3M:e.4r-j.3B,u[f]=l?1q(m)/23*c+"2d":23*(1q(m)/c)+"%");m=u.1G(" ")}18 15.46(e.1v,m,g,s,o)},4R:3e}),1L("cI",{2y:"0 0",4R:3e}),1L("33",{2y:"1J",2T:!0}),1L("cK",{2y:"50% 50%",2T:!0}),1L("cY",{2T:!0}),1L("cj",{2T:!0}),1L("cx",{2T:!0}),1L("6w",{2b:6A("83,81,82,7C")}),1L("6x",{2b:6A("cq,cl,cb,cF")}),1L("c9",{2y:"7R(1J,1J,1J,1J)",2b:17(e,t,n,r,s,o){19 u,a,f;18 9>d?(a=e.2R,f=8>d?" ":",",u="7R("+a.aG+f+a.cg+f+a.cD+f+a.d2+")",t=15.2U(t).1s(",").1G(f)):(u=15.2U($(e,15.p,i,!1,15.49)),t=15.2U(t)),15.46(e.1v,u,t,s,o)}}),1L("d5",{2y:"1J 1J 1J #6V",4g:!0,47:!0}),1L("7N,85",{2b:17(e,t,n,r,i){18 i}}),1L("3X",{2y:"1J 4S #6O",2b:17(e,t,n,r,s,o){18 15.46(e.1v,15.2U($(e,"70",i,!1,"1J")+" "+$(e,"cL",i,!1,"4S")+" "+$(e,"cR",i,!1,"#6O")),15.2U(t),s,o)},4g:!0,4R:17(e){19 t=e.1s(" ");18 t[0]+" "+(t[1]||"4S")+" "+(e.2K(at)||["#6O"])[0]}}),1L("9E,6S,6W",{2b:17(e,t,n,r,i){19 s=e.1v,o="6S"1w s?"6S":"6W";18 1g 24(s,o,0,0,i,-1,n,!1,0,s[o],t)}});19 73=17(e){19 t,n=15.t,r=n.2i||$(15.1z,"2i"),i=0|15.s+15.c*e;23===i&&(-1===r.1k("9k(")&&-1===r.1k("9e(")&&-1===r.1k("98(")?(n.6Q("2i"),t=!$(15.1z,"2i")):(n.2i=r.1D(S,""),t=!0)),t||(15.3O&&(n.2i=r=r||"3E(1Y="+i+")"),-1===r.1k("1Y")?0===i&&15.3O||(n.2i=r+" 3E(1Y="+i+")"):n.2i=r.1D(w,"1Y="+i))};1L("1Y,3E,5n",{2y:"1",2b:17(e,t,n,r,s,o){19 u=1q($(e,"1Y",i,!1,"1")),a=e.1v,f="5n"===n;18"1H"==1j t&&"="===t.1u(1)&&(t=("-"===t.1u(0)?-1:1)*1q(t.1t(2))+u),f&&1===u&&"5z"===$(e,"6E",i)&&0!==t&&(u=0),q?s=1g 24(a,"1Y",u,t-u,s):(s=1g 24(a,"1Y",23*u,23*(t-u),s),s.3O=f?1:0,a.7z=1,s.2r=2,s.b="3E(1Y="+s.s+")",s.e="3E(1Y="+(s.s+s.c)+")",s.1z=e,s.2A=o,s.1X=73),f&&(s=1g 24(a,"6E",0,0,s,-1,1d,!1,0,0!==u?"6T":"5z",0===t?"5z":"6T"),s.1W="6T",r.2E.28(s.n),r.2E.28(n)),s}});19 53=17(e,t){t&&(e.88?e.88(t.1D(T,"-$1").6R()):e.6Q(t))},7M=17(e){1a(15.t.4K=15,1===e||0===e){15.t.39=0===e?15.b:15.e;1b(19 t=15.1z,n=15.t.1v;t;)t.v?n[t.p]=t.v:53(n,t.p),t=t.1f;1===e&&15.t.4K===15&&(15.t.4K=1d)}1m 15.t.39!==15.e&&(15.t.39=15.e)};1L("39",{2b:17(e,t,r,s,o,u,a){19 f,l,c,h,p,d=e.39,v=e.1v.37;1a(o=s.6F=1g 24(e,r,0,0,o,2),o.1X=7M,o.2s=-11,n=!0,o.b=d,l=Q(e,i),c=e.4K){1b(h={},p=c.1z;p;)h[p.p]=1,p=p.1f;c.1X(1)}18 e.4K=o,o.e="="!==t.1u(1)?t:d.1D(4k("\\\\s*\\\\b"+t.1t(2)+"\\\\b"),"")+("+"===t.1u(0)?" "+t.1t(2):""),s.2V.1N&&(e.39=o.e,f=G(e,l,Q(e),a,h),e.39=d,o.1z=f.42,e.1v.37=v,o=o.3H=s.2S(e,f.4T,o,u)),o}});19 7I=17(e){1a((1===e||0===e)&&15.1z.1K===15.1z.2l&&"7G"!==15.1z.1z){19 t,n,r,i,s=15.t.1v,o=u.3P.2S;1a("3Y"===15.e)s.37="",i=!0;1m 1b(t=15.e.1s(","),r=t.1c;--r>-1;)n=t[r],u[n]&&(u[n].2S===o?i=!0:n="4Q"===n?5m:u[n].p),53(s,n);i&&(53(s,bt),15.t.4b&&3L 15.t.4b)}};1b(1L("9d",{2b:17(e,t,r,i,s){18 s=1g 24(e,r,0,0,s,2),s.1X=7I,s.e=t,s.2s=-10,s.1z=i.2V,n=!0,s}}),a="9m,9v,9u,9w".1s(","),2m=a.1c;2m--;)7H(a[2m]);a=o.1x,a.1r=1d,a.6M=17(e,t,u){1a(!e.3o)18!1;15.7t=e,15.2V=u,15.7E=t,f=t.7N,n=!1,r=t.6z||o.6z,i=V(e,""),s=15.2E;19 a,h,d,v,m,g,y,b,w,S=e.1v;1a(l&&""===S.3F&&(a=$(e,"3F",i),("2n"===a||""===a)&&(S.3F=0)),"1H"==1j t&&(v=S.37,a=Q(e,i),S.37=v+";"+t,a=G(e,a,Q(e)).4T,!q&&E.2P(t)&&(a.1Y=1q(4k.$1)),t=a,S.37=v),15.1r=h=15.2S(e,t,1d),15.3S){1b(w=3===15.3S,bt?c&&(l=!0,""===S.3F&&(y=$(e,"3F",i),("2n"===y||""===y)&&(S.3F=0)),p&&(S.7y=15.7E.7y||(w?"9p":"5z"))):S.7z=1,d=h;d&&d.1f;)d=d.1f;b=1g 24(e,"3P",0,0,1d,2),15.5w(b,1d,d),b.1X=w&&3j?7D:bt?7B:7O,b.1z=15.3p||44(e,i,!0),s.4G()}1a(n){1b(;h;){1b(g=h.1f,d=v;d&&d.2s>h.2s;)d=d.1f;(h.1l=d?d.1l:m)?h.1l.1f=h:v=h,(h.1f=d)?d.1l=h:m=h,h=g}15.1r=v}18!0},a.2S=17(e,t,n,s){19 o,a,l,c,h,p,d,v,m,g,y=e.1v;1b(o 1w t)p=t[o],a=u[o],a?n=a.2S(e,p,o,15,n,s,t):(h=$(e,o,i)+"",m="1H"==1j p,"4g"===o||"8Y"===o||"aj"===o||-1!==o.1k("ai")||m&&x.2P(p)?(m||(p=5d(p),p=(p.1c>3?"6N(":"5e(")+p.1G(",")+")"),n=4f(y,o,h,p,!0,"4a",n,0,s)):!m||-1===p.1k(" ")&&-1===p.1k(",")?(l=1q(h),d=l||0===l?h.1t((l+"").1c):"",(""===h||"2n"===h)&&("3M"===o||"3B"===o?(l=3D(e,o,i),d="2d"):"4u"===o||"3k"===o?(l=K(e,o,i),d="2d"):(l="1Y"!==o?0:1,d="")),g=m&&"="===p.1u(1),g?(c=3q(p.1u(0)+"1",10),p=p.1t(2),c*=1q(p),v=p.1D(b,"")):(c=1q(p),v=m?p.1t((c+"").1c)||"":""),""===v&&(v=r[o]||d),p=c||0===c?(g?c+l:c)+v:t[o],d!==v&&""!==v&&(c||0===c)&&(l||0===l)&&(l=J(e,o,l,d),"%"===v?(l/=J(e,o,23,"%")/23,l>23&&(l=23),t.85!==!0&&(h=l+"%")):"4d"===v?l/=J(e,o,1,"4d"):(c=J(e,o,c,v),v="2d"),g&&(c||0===c)&&(p=c+l+v)),g&&(c+=l),!l&&0!==l||!c&&0!==c?2u 0!==y[o]&&(p||"ad"!=p+""&&1d!=p)?(n=1g 24(y,o,c||l||0,0,n,-1,o,!1,0,h,p),n.1W="3r"!==p||"6s"!==o&&-1===o.1k("ae")?p:h):U("ao "+o+" 6v az: "+t[o]):(n=1g 24(y,o,l,c-l,n,0,o,f!==!1&&("2d"===v||"3F"===o),0,h,p),n.1W=v)):n=4f(y,o,h,p,!0,1d,n,0,s)),s&&n&&!n.2A&&(n.2A=s);18 n},a.1X=17(e){19 t,n,r,i=15.1r,s=1e-6;1a(1!==e||15.2V.1n!==15.2V.1N&&0!==15.2V.1n)1a(e||15.2V.1n!==15.2V.1N&&0!==15.2V.1n||15.2V.1O===-1e-6)1b(;i;){1a(t=i.c*e+i.s,i.r?t=t>0?0|t+.5:0|t-.5:s>t&&t>-s&&(t=0),i.2r)1a(1===i.2r)1a(r=i.l,2===r)i.t[i.p]=i.1W+t+i.3V+i.3O+i.5b;1m 1a(3===r)i.t[i.p]=i.1W+t+i.3V+i.3O+i.5b+i.6L+i.6H;1m 1a(4===r)i.t[i.p]=i.1W+t+i.3V+i.3O+i.5b+i.6L+i.6H+i.79+i.7u;1m 1a(5===r)i.t[i.p]=i.1W+t+i.3V+i.3O+i.5b+i.6L+i.6H+i.79+i.7u+i.9B+i.9F;1m{1b(n=i.1W+t+i.3V,r=1;i.l>r;r++)n+=i["3g"+r]+i["2X"+(r+1)];i.t[i.p]=n}1m-1===i.2r?i.t[i.p]=i.1W:i.1X&&i.1X(e);1m i.t[i.p]=t+i.1W;i=i.1f}1m 1b(;i;)2!==i.2r?i.t[i.p]=i.b:i.1X(e),i=i.1f;1m 1b(;i;)2!==i.2r?i.t[i.p]=i.e:i.1X(e),i=i.1f},a.9H=17(e){15.3S=e||3===15.3S?3:2,15.3p=15.3p||44(15.7t,i,!0)},a.5w=17(e,t,n,r){18 e&&(t&&(t.1l=e),e.1f&&(e.1f.1l=e.1l),e.1l?e.1l.1f=e.1f:15.1r===e&&(15.1r=e.1f,r=!0),n?n.1f=e:r||1d!==15.1r||(15.1r=e),e.1f=t,e.1l=n),e},a.2p=17(t){19 n,r,i,s=t;1a(t.5n||t.3E){s={};1b(r 1w t)s[r]=t[r];s.1Y=1,s.5n&&(s.6E=1)}18 t.39&&(n=15.6F)&&(i=n.3H,i&&i.1l?15.5w(i.1l,n.1f,i.1l.1l):i===15.1r&&(15.1r=n.1f),n.1f&&15.5w(n.1f,n.1f.1f,i.1l),15.6F=1d),e.1x.2p.1Z(15,s)};19 4n=17(e,t,n){19 r,i,s,o;1a(e.6G)1b(i=e.1c;--i>-1;)4n(e[i],t,n);1m 1b(r=e.7j,i=r.1c;--i>-1;)s=r[i],o=s.2r,s.1v&&(t.28(Q(s)),n&&n.28(s)),1!==o&&9!==o&&11!==o||!s.7j.1c||4n(s,t,n)};18 o.9X=17(e,n,r){19 i,s,o,u=t.3v(e,n,r),a=[u],f=[],l=[],c=[],h=t.4p.7i;1b(e=u.2z||u.2v,4n(e,f,c),u.1B(n,!0),4n(e,l),u.1B(0,!0),u.1M(!0),i=c.1c;--i>-1;)1a(s=G(c[i],f[i],l[i]),s.42){s=s.4T;1b(o 1w r)h[o]&&(s[o]=r[o]);a.28(t.3v(c[i],n,s))}18 a},e.6P([o]),o},!0)}),1T.3R&&1T.3b.4G()()',62,813,'|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||this||function|return|var|if|for|length|null||_next|new|Math|_startTime|typeof|indexOf|_prev|else|_time|vars|_timeline|parseFloat|_firstPT|split|substr|charAt|style|in|prototype|_timeScale|data|_paused|render|Number|replace|255|rotation|join|string|_gc|0px|_totalTime|mt|_enabled|_duration|_rawPrevTime|add|rotationX|_p1|skewX|window|timeline|immediateRender|xs0|setRatio|opacity|call||rotationY|arguments|100|ht||totalDuration|_first|push|_startAt|instanceof|parser|_active|px||scaleX|scaleY|sin|filter|easing|_p2|_totalDuration|dt|auto|_dirty|_kill|_|type|pr|number|void|target|_initted|getRatio|defaultValue|_targets|plugin|rt|duration|cos|_overwriteProps|smoothChildTiming|_reversed|_ease|5625|_delay|match|_labels|constructor|scaleZ|128|test|zOrigin|currentStyle|parse|prefix|format|_tween|splice|xs|_siblings|totalTime|skewY|180|_onUpdate|perspective|paused|_uncache|apply|cssText|startAt|className|wake|_gsQueue|_p3|_parseTimeOrLabel|tt|_overwrittenProps|xn|_last|ratio|St|top|sqrt|_calcEnd|pow|nodeType|_transform|parseInt|none|nt|config|time|to|selector|tweens|rawTime|it|_propLookup|height|_remove|et|alpha|zIndex|st|xfirst|appendXtra|API|Array|delete|width|gi|xn1|transform|ease|_gsDefine|_transformType|object|concat|xs1|getTweensOf|border|all|version|_listeners|frame|firstMPT|reversed|xt||parseComplex|multi|scale|dflt|transparent|_gsTransform|kill|em|seek|pt|color|set|onComplete|onReverseComplete|RegExp|PI|getPropertyValue|Mt|_initProps|_internals|position|offsetHeight|css|self|left|sc|atan2|bottom|delay|plugins|greensock|onStart|runBackwards|_pauseTime|force3D|com|pop|offsetWidth|_notifyPluginsOfEnabled|_sortChildren|_gsClassPT|overwrite|pg|_propName|isActive|autoRemoveChildren|transformOrigin|formatter|solid|difs|_onPluginEvent|keyword|ot|sleep|9999999999|_onInitAllProps||remove|Ticker|Lt|1e5||abs|ox|ieOffsetY|round|gsClass|xs2|TweenLite|ut|rgb|rxp|getChildren|toUpperCase|invalidate|192|core|ieOffsetX|Et|autoAlpha|_swapSelfInParams|easeParams|onUpdate|easeInOut|easeIn|next|strict|use|_linkCSSP|prev|tick|hidden|autoCSS|_func|_params|onStartParams|module|check|vt|priority|staggerTo|DXImageTransform|oy|Microsoft|Matrix|timeScale|false|_easeType|useFrames|easeOut|_overwrite|_priority|_hasPausedChild|define|throw|isNaN|Left|SlowMo||onCompleteParams|onCompleteScope|onStartScope|ms|console|fromTo|onUpdateParams|from|document|createElement|onUpdateScope|pause|625|984375|fps|_power|GreenSockGlobals|9375|_type|delayedCall|Scope|hsl|defaultEase|Params|setTimeout|_onDisable|360|display|shortRotation|rotationZ|tween|margin|padding|_ffFix|suffixMap|lt|shortRotationX|shortRotationY|inset|visibility|_classNamePT|slice|xs3|ft|_short|yt|xn2|_onInitTween|rgba|000|activate|removeAttribute|toLowerCase|cssFloat|inherit|log|999|styleFloat|borderLeft|_rootFramesTimeline|defaultView|borderTopWidth|_roundProps|Animation|kt|url||func|div|init|xn3|propName|onReverseCompleteParams|_init|center|right|_easePower|get|_gsTweenID|reservedProps|childNodes|Width|shiftChildren|appendChild|SimpleTimeline|onReverseCompleteScope|break|filters|Top|Right|_target|xs4|Ease|play|gap|WebkitBackfaceVisibility|zoom|_contains|Ct|marginLeft|Nt|_vars|Back|isFromStart|gt|Ot|template|strength|random|At|autoRound|Tt|removeLabel|TweenPlugin|rect|SteppedEase|isArray|isSelector|_p|_class|register|RoughEase|map|addLabel|marginRight|marginBottom|marginTop|insert|strictUnits|_updateRoot|Cannot|removeProperty|_onEnable|not|matrix|autoRotate|1e3|useRAF|startTime|defaultTransformPerspective|ticker|defaultOverwrite|Plugin|black|Date|events|directionalRotation|up|2e3|EventDispatcher|_eventTarget|transformPerspective|proxy|Linear|05|Quad|progid|absolute|M11|exports|wt|dispatchEvent|clrs|Dx|GreenSockAMDPath|Dy|oyp|01|autoSleep|oxp|M22|addEventListener|M21|M12|red|parseTransform|insertMultiple|cancelAnimationFrame|appendMultiple|CancelRequestAnimationFrame|stop|moz|getLabelTime|fill|RequestAnimationFrame||webkit|getTime|CancelAnimationFrame|addPause|now|easeNone|globals|oader||Cubic|clear|Quart|clearProps|radient|undefined|999999999999|Object|toString|amd|atrix|Quint|bezier|removeEventListener|swing|visible|gotoAndStop|gotoAndPlay|linear|004|physicsProps|throwProps|physics2D|Strong|Power|requestAnimationFrame|sequence|xn4|jQuery|_autoCSS|float|xs5|getElementById|_enableTransforms|jquery|killTweensOf|_addTween|illegal|_super|progress|killDelayedCallsTo|totalProgress|_tempKill|_plugins|preexisting|allOnStart|concurrent|true|_rootTimeline|cascadeTo|120|repeatDelay|repeat|_dummyGS|_tweenLookup|onRepeat|onRepeatParams|yoyo|onRepeatScope|definition|on|staggerFromTo|clearTimeout|exportRoot|staggerFrom|NaN|Style|1500|normal|start|Color|stroke|or|is|into|the|invalid|stagger|global|restart|reverse||initAll|overwriteProps|eventCallback|GSAP|encountered|value|align|resume|TimelineLite|missing|dependency|append|clipTop|offset|Origin|borderTop|Bottom|removeChild|body|line|borderLeftWidth|parentNode|oxr|oyr|aqua|lime|silver|maroon|borderBottomLeftRadius|ccw|rad|short|_cw|clientHeight|clientWidth|Android|backgroundPosition|Safari|Chrome|userAgent|navigator|background|img|_specialProps|Version|Firefox|Moz|Ms|Webkit|getComputedStyle|getElementsByTagName|1px|MSIE|exec|innerHTML|teal|blue|Error|js|file|loaded||_cssRegister|_registerComplexSpecialProp|end|CSSPropTween|collapsible|block|registerSpecialProp|expand|translate3d|gradient|Alpha|sizingMethod|matrix3d|179|shortRotationZ|270|_parseToProxy|_setPluginRatio|orange|165|gray|purple|yellow|olive|navy|white|fuchsia|green|borderBottomRightRadius|borderRadius|boxShadow|hsla|borderTopLeftRadius|cyan|pink|borderTopRightRadius|203|backgroundPositionX|getStyle|70158|ExpoIn|clip|ExpoOut|paddingBottom|Expo|001|ExpoInOut|SineOut|clipRight|sort|525|backfaceVisibility|Sine|paddingRight|Bounce|CircInOut|BounceInOut|CircIn|paddingTop|Circ|CircOut||BounceIn|asin|ElasticInOut|userSelect|ElasticIn|ElasticOut|BounceOut|Elastic|out|clipBottom|CSSPlugin|paddingLeft|src|999999999|backgroundSize|SineIn|perspectiveOrigin|borderTopStyle|setAttribute|zA|Z0|fontSize|backgroundPositionY|borderTopColor|backgroundImage|taper|BackInOut|EaseLookup|usesFrames|clamp|transformStyle|SineInOut|find|randomize|clipLeft|BackOut|points|textShadow|BackIn'.split('|'),0,{}))
;/*
 * File: jquery.flexisel.js
 * Version: 1.0.2
 * Description: Responsive carousel jQuery plugin
 * Author: 9bit Studios
 * Copyright 2012, 9bit Studios
 * http://www.9bitstudios.com
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
(function ($) {
    $.fn.flexisel = function(options) {
	
        var defaults = $.extend({
            visibleItems : 4,
            animationSpeed : 200,
            autoPlay : false,
            autoPlaySpeed : 3000,
            pauseOnHover : true,
            setMaxWidthAndHeight : false,
            enableResponsiveBreakpoints : true,
            clone : true,
            responsiveBreakpoints : {
                portrait: { 
                    changePoint:480,
                    visibleItems: 1
                }, 
                landscape: { 
                    changePoint:640,
                    visibleItems: 2
                },
                tablet: { 
                    changePoint:768,
                    visibleItems: 3
                }
            }
        }, options);
        
        /******************************
        Private Variables
         *******************************/
         
        var object = $(this);
        var settings = $.extend(defaults, options);
        var itemsWidth; // Declare the global width of each item in carousel
        var canNavigate = true;
        var itemsVisible = settings.visibleItems; // Get visible items
        var totalItems = object.children().length; // Get number of elements
        var responsivePoints = [];
        
        /******************************
        Public Methods
        *******************************/
        var methods = {
            init : function() {
                return this.each(function() {
                    methods.appendHTML();
                    methods.setEventHandlers();
                    methods.initializeItems();
                });
            },
		    
            /******************************
            Initialize Items
            Fully initialize everything. Plugin is loaded and ready after finishing execution
	    *******************************/
            initializeItems : function() {

                var listParent = object.parent();
                var innerHeight = listParent.height();
                var childSet = object.children();
                methods.sortResponsiveObject(settings.responsiveBreakpoints);
                
                var innerWidth = listParent.width(); // Set widths
                itemsWidth = (innerWidth) / itemsVisible;
                childSet.width(itemsWidth);        
                if (settings.clone) {
                    childSet.last().insertBefore(childSet.first());
                    childSet.last().insertBefore(childSet.first());
                    object.css({
                        'left' : -itemsWidth
                    });
                }

                object.fadeIn();
                $(window).trigger("resize"); // needed to position arrows correctly

            },
            
	    /******************************
            Append HTML
            Add additional markup needed by plugin to the DOM
	    *******************************/
            appendHTML : function() {
                object.addClass("nbs-flexisel-ul");
                object.wrap("<div class='nbs-flexisel-container'><div class='nbs-flexisel-inner'></div></div>");
                object.find("li").addClass("nbs-flexisel-item");

                if (settings.setMaxWidthAndHeight) {
                    var baseWidth = $(".nbs-flexisel-item img").width();
                    var baseHeight = $(".nbs-flexisel-item img").height();
                    $(".nbs-flexisel-item img").css("max-width", baseWidth);
                    $(".nbs-flexisel-item img").css("max-height", baseHeight);
                }
                $("<div class='nbs-flexisel-nav-left'></div><div class='nbs-flexisel-nav-right'></div>").insertAfter(object);
                if (settings.clone) {
                    var cloneContent = object.children().clone();
                    object.append(cloneContent);
                }
            },
            /******************************
            Set Event Handlers
	    Set events: click, resize, etc
            *******************************/
            setEventHandlers : function() {

                var listParent = object.parent();
                var childSet = object.children();
                var leftArrow = listParent.find($(".nbs-flexisel-nav-left"));
                var rightArrow = listParent.find($(".nbs-flexisel-nav-right"));

                $(window).on("resize", function(event) {

                    methods.setResponsiveEvents();

                    var innerWidth = $(listParent).width();
                    var innerHeight = $(listParent).height();

                    itemsWidth = (innerWidth) / itemsVisible;

                    childSet.width(itemsWidth);
                    if (settings.clone) {
                        object.css({
                            'left' : -itemsWidth                            
                        });
                    }else {
                        object.css({
                            'left' : 0
                        });
                    }

                    var halfArrowHeight = (leftArrow.height()) / 2;
                    var arrowMargin = (innerHeight / 2) - halfArrowHeight;
                    leftArrow.css("top", arrowMargin + "px");
                    rightArrow.css("top", arrowMargin + "px");

                });
                $(leftArrow).on("click", function(event) {
                    methods.scrollLeft();
                });
                $(rightArrow).on("click", function(event) {
                    methods.scrollRight();
                });
                if (settings.pauseOnHover == true) {
                    $(".nbs-flexisel-item").on({
                        mouseenter : function() {
                            canNavigate = false;
                        },
                        mouseleave : function() {
                            canNavigate = true;
                        }
                    });
                }
                if (settings.autoPlay == true) {

                    setInterval(function() {
                        if (canNavigate == true)
                            methods.scrollRight();
                    }, settings.autoPlaySpeed);
                }

            },
            /******************************
            Set Responsive Events
            Set breakpoints depending on responsiveBreakpoints
            *******************************/            
            
            setResponsiveEvents: function() {
                var contentWidth = $('html').width();
                
                if(settings.enableResponsiveBreakpoints) {
                    
                    var largestCustom = responsivePoints[responsivePoints.length-1].changePoint; // sorted array 
                    
                    for(var i in responsivePoints) {
                        
                        if(contentWidth >= largestCustom) { // set to default if width greater than largest custom responsiveBreakpoint 
                            itemsVisible = settings.visibleItems;
                            break;
                        }
                        else { // determine custom responsiveBreakpoint to use
                        
                            if(contentWidth < responsivePoints[i].changePoint) {
                                itemsVisible = responsivePoints[i].visibleItems;
                                break;
                            }
                            else
                                continue;
                        }
                    }
                }
            },

            /******************************
            Sort Responsive Object
            Gets all the settings in resposiveBreakpoints and sorts them into an array
            *******************************/            
            
            sortResponsiveObject: function(obj) {
                
                var responsiveObjects = [];
                
                for(var i in obj) {
                    responsiveObjects.push(obj[i]);
                }
                
                responsiveObjects.sort(function(a, b) {
                    return a.changePoint - b.changePoint;
                });
            
                responsivePoints = responsiveObjects;
            },
            
            /******************************
            Scroll Left
            *******************************/
            scrollLeft : function() {
                if (object.position().left < 0) {
                    if (canNavigate == true) {
                        canNavigate = false;

                        var listParent = object.parent();
                        var innerWidth = listParent.width();

                        itemsWidth = (innerWidth) / itemsVisible;

                        var childSet = object.children();

                        object.animate({
                            'left' : "+=" + itemsWidth
                        }, {
                            queue : false,
                            duration : settings.animationSpeed,
                            easing : "linear",
                            complete : function() {
                                if (settings.clone) {
                                    childSet.last().insertBefore(
                                            childSet.first()); // Get the first list item and put it after the last list item (that's how the infinite effects is made)                                   
                                }
                                methods.adjustScroll();
                                canNavigate = true;
                            }
                        });
                    }
                }
            },
            /******************************
            Scroll Right
            *******************************/            
            scrollRight : function() {
                var listParent = object.parent();
                var innerWidth = listParent.width();

                itemsWidth = (innerWidth) / itemsVisible;

                var difObject = (itemsWidth - innerWidth);
                var objPosition = (object.position().left + ((totalItems-itemsVisible)*itemsWidth)-innerWidth);    
                
                if((difObject < Math.ceil(objPosition)) && (!settings.clone)){
                    if (canNavigate == true) {
                        canNavigate = false;                    
    
                        object.animate({
                            'left' : "-=" + itemsWidth
                        }, {
                            queue : false,
                            duration : settings.animationSpeed,
                            easing : "linear",
                            complete : function() {                                
                                methods.adjustScroll();
                                canNavigate = true;
                            }
                        });
                    }
                } else if(settings.clone){
                    if (canNavigate == true) {
                        canNavigate = false;
    
                        var childSet = object.children();
    
                        object.animate({
                            'left' : "-=" + itemsWidth
                        }, {
                            queue : false,
                            duration : settings.animationSpeed,
                            easing : "linear",
                            complete : function() {                                
                                    childSet.first().insertAfter(childSet.last()); // Get the first list item and put it after the last list item (that's how the infinite effects is made)                                
                                methods.adjustScroll();
                                canNavigate = true;
                            }
                        });
                    }
                };                
            },
            /******************************
            Adjust Scroll 
             *******************************/
            adjustScroll : function() {
                var listParent = object.parent();
                var childSet = object.children();

                var innerWidth = listParent.width();
                itemsWidth = (innerWidth) / itemsVisible;
                childSet.width(itemsWidth);
                if (settings.clone) {
                    object.css({
                        'left' : -itemsWidth
                    });
                }
            }
        };
        if (methods[options]) { // $("#element").pluginName('methodName', 'arg1', 'arg2');
            return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof options === 'object' || !options) { // $("#element").pluginName({ option: 1, option:2 });
            return methods.init.apply(this);
        } else {
            $.error('Method "' + method + '" does not exist in flexisel plugin!');
        }
    };
})(jQuery);

/*
	* LayerSlider
	*
	* (c) 2011-2014 George Krupa, John Gera & Kreatura Media
	*
	* Plugin web:			http://kreaturamedia.com/
	* licenses:				http://codecanyon.net/licenses/
*/



eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('18 9s(e,t,n){16 r;6(1Y e=="4w"){r=3x("#"+e)}19 6(1Y e=="9u"){r=e}16 i,s;2q(t){1l"8j":i="cZ 3x 9M";s=\'9Q 9R 4N cD cu ae 3W 4T dB da an d6 bO 2Q 20 3x 9K bP bX 24 2A 2f 5V 4T c8. <1X>4S c6 4r 4T 4V c5 bS 2f 20 bZ bU 2Q 2A 4I dC 20 "d9 aw d8 2f 3T" d7 db 20 de & dd dc 3O.</1X>\';1j;1l"9q":i="5M 3x 9M";s="9Q 9R 4N d5 d4 cY an 5M 2B ("+n+\') 2Q 20 3x 9K. 2A cX at cW 2B 1.7.0 3W cV. 4S a7 3x 2f 1.10.x 3W d3. d2: 4S do 2H d1 20 3x dw ae 4r 4V 4I do 2H a7 2f 2.x 2B 2Q 3x dv 4h 3g 2H ah b1 du dt 4N dy 7 & 8. <a 2h="7q://dA.dz.68/ds/4/5K-24-dr/#aG-13&av-60">dk ca dj di dh dl 3x by dm dq.</a>\';1j}r.1r("12-3Y");r.3Q(\'<p 1t="12-dp">!</p>\');r.3Q(\'<p 1t="12-3Y-dn">2A: \'+i+"</p>");r.3Q(\'<p 1t="12-3Y-8N">\'+s+"</p>")}(18(e){e.fn.2R=18(n){16 r="1.7.0";16 i=e.fn.8j;16 s=e(14);16 o=18(e,t){16 n=e.1E(".");16 r=t.1E(".");24(16 i=0;i<n.1k;++i){6(r.1k==i){1U 1h}6(1b(n[i])==1b(r[i])){cU}19 6(1b(n[i])>1b(r[i])){1U 1h}19{1U 1c}}6(n.1k!=r.1k){1U 1c}1U 1c};6(!o("1.8.0",i)){s.1r("12-bq")}6(!o(r,i)){9s(s,"9q",i)}19{6((1Y n).3N("9u|3E")){1U 14.1O(18(e){1G t(14,n)})}19{6(n=="11"){16 u=e(14).11("2A").g;6(u){1U u}}19{1U 14.1O(18(t){16 r=e(14).11("2A");6(r){6(!r.g.2X&&!r.g.4a){6(1Y n=="3S"){6(n>0&&n<r.g.2x+1&&n!=r.g.23){r.4C(n)}}19{2q(n){1l"1S":r.o.79(r.g);r.1S("6F");1j;1l"1V":r.o.7s(r.g);r.1V("6F");1j;1l"22":6(!r.g.2v){r.o.9v(r.g);r.g.2t=1c;r.22()}1j}}}6(n=="4W"){r.d.5V()}6((r.g.2v||!r.g.2v&&r.g.2t)&&n=="1x"){r.o.bA(r.g);r.g.2t=1h;r.g.1L.17(\'29[1g*="5U.4U"], 29[1g*="61.5k"]\').1O(18(){2w(e(14).11("7b"))});r.1x()}6(n=="cT"){r.au()}}})}}}};16 t=18(u,a){16 f=14;f.$el=e(u).1r("12-2p");f.$el.11("2A",f);f.2Z=18(){f.o=e.4D({},t.93,a);f.g=e.4D({},t.6E);f.1y=e.4D({},t.9h);f.58=e.4D({},t.95);f.g.cq=e(u).3k("12-bq")?1h:1c;6(f.g.2n){f.o.41=1h}6(f.o.2C==="cw"){f.o.2C=1c}6(f.o.2C==="aV"){f.o.2C=1h}6(1Y bi!=="3E"){f.t=e.4D({},bi)}6(1Y bt!=="3E"){f.ct=e.4D({},bt)}6(!f.g.bG){f.g.bG=1c;f.4W();6(e("4M").17(\'bL[8d*="4V"]\').1k){f.g.8i=e("4M").17(\'bL[8d*="4V"]\').1f("8d").1E("4V")[1]}6(e("4M").17(\'8e[1g*="5K"]\').1k){6(e("4M").17(\'8e[1g*="5K"]\').1f("1g").1i("?")!=-1){f.g.8l=e("4M").17(\'8e[1g*="5K"]\').1f("1g").1E("?")[1].1E("=")[1]}}f.d.aT("2A cl");f.d.aU(\'<a 2h="#">1S</a> | <a 2h="#">1V</a> | <a 2h="#">22</a> | <a 2h="#">1x</a> | <a 2h="#">ce 1x</a>\');f.d.3Z.17("a").1O(18(){e(14).2l(18(t){t.3A();e(u).2R(e(14).8N())})});f.d.aT("2A 2B cb");f.d.aU("aw 2B: <1X>"+f.g.2B+"</1X>");6(f.g.8l){f.d.aL("cg 2B: <1X>"+f.g.8l+"</1X>")}6(f.g.8i){f.d.aL("4V 2B: <1X>"+f.g.8i+"</1X>")}f.d.aL("3x 2B: <1X>"+e().8j+"</1X>");6(e(u).1f("4J")){f.d.aT("2A 2p");f.d.aU("#"+e(u).1f("4J"))}6(!f.o.2r||f.o.2r==""||!f.o.3v||f.o.3v==""){f.d.aT("ch cx 2r. cN: cL 2r 4I / 3W 3v.");f.59()}19{f.d.aT("cK 2f 2Z b1 2r: "+f.o.2r,1c);e(u).1r("12-"+f.o.2r);16 n=f.o.3v+f.o.2r+"/2r.1a";8R=e("aZ");6(!e("aZ").1k){8R=e("3T")}6(e(\'74[2h="\'+n+\'"]\').1k){f.d.aU(\'cS "\'+f.o.2r+\'" 3g cR 2W.\');r=e(\'74[2h="\'+n+\'"]\');6(!f.g.2W){f.g.2W=1c;f.g.ap=2e(18(){f.59()},70)}}19{6(5P.b7){5P.b7(n);16 r=e(\'74[2h="\'+n+\'"]\')}19{16 r=e(\'<74 5d="cQ" 2h="\'+n+\'" 4R="8N/1a" />\').1v(8R)}}r.2Z(18(){6(!f.g.2W){f.d.aU("aM.2Z(); 91");f.g.2W=1c;f.g.ao=2e(18(){f.59()},70)}});e(2o).2Z(18(){6(!f.g.2W){f.d.aU("$(2o).2Z(); 91");f.g.2W=1c;f.g.aj=2e(18(){f.59()},70)}});f.g.am=2e(18(){6(!f.g.2W){f.d.aT("cJ cC: cB aM.2Z(); 3W $(2o).2Z(); cz 91");f.g.2W=1c;f.59()}},1P)}}};f.59=18(){6(!e("4M").1f("4J")){e("4M").1f("4J","12-6E")}19 6(!e("3T").1f("4J")){e("3T").1f("4J","12-6E")}f.g.1z=18(){1U e(u).1d()};f.g.1F=18(){1U e(u).1e()};e(u).17(".12-5q").31("12-5q").1r("12-1p");e(u).17(\'.12-1p > *[1t*="12-s"]\').1O(18(){16 t=e(14).1f("1t").1E("12-s")[1].1E(" ")[0];e(14).31("12-s"+t).1r("12-l"+t)});6(f.o.aK){f.o.32=f.o.aK}6(f.o.cE===1h){f.o.4A=1h}6(e(u).17(".12-1p").1k==1){f.o.78=1h;f.o.8k=1h;f.o.6s=1h;f.o.6y=1h;f.o.4f=0;f.o.7u=1h;f.o.2C=1c;f.o.32=1;f.o.3o="aV"}6(f.o.1d){f.g.7E=f.g.2y=""+f.o.1d}19{f.g.7E=f.g.2y=e(u)[0].1N.1d}6(f.o.1e){f.g.4i=""+f.o.1e}19{f.g.4i=e(u)[0].1N.1e}6(f.g.2y.1i("%")==-1&&f.g.2y.1i("1I")==-1){f.g.2y+="1I"}6(f.g.4i.1i("%")==-1&&f.g.4i.1i("1I")==-1){f.g.4i+="1I"}6(f.o.bf&&f.g.2y.1i("1I")!=-1&&f.g.4i.1i("1I")!=-1){f.g.4d=1c}19{f.g.4d=1h}e(u).17(\'*[1t*="12-l"], *[1t*="12-bg"]\').1O(18(){6(!e(14).26().3k("12-1p")){e(14).cH(e(14).26())}});e(u).17(".12-1p").1O(18(){e(14).38(\':2H([1t*="12-"])\').1O(18(){e(14).6q()});16 t=e("<1n>").1r("12-cG");6(e(14).17(".12-bg").1k){t.cF(e(14).17(".12-bg").eq("0"))}19{t.7e(e(14))}});e(u).17(\'.12-1p, *[1t*="12-l"]\').1O(18(){6(e(14).11("12")||e(14).1f("5d")||e(14).1f("1N")){6(e(14).11("12")){16 t=e(14).11("12").21().1E(";")}19 6(e(14).1f("5d")&&e(14).1f("5d").1i(":")!=-1&&e(14).1f("5d").1i(";")!=-1){16 t=e(14).1f("5d").21().1E(";")}19{16 t=e(14).1f("1N").21().1E(";")}24(x=0;x<t.1k;x++){3G=t[x].1E(":");6(3G[0].1i("4t")!=-1){3G[1]=f.aE(3G[1])}16 n="";6(3G[2]){n=":"+e.5J(3G[2])}6(3G[0]!=" "&&3G[0]!=""){e(14).11(e.5J(3G[0]),e.5J(3G[1])+n)}}}16 r=e(14);r.11("49",r[0].1N.1m);r.11("4n",r[0].1N.1q);6(e(14).3g("a")&&e(14).38().1k>0){r=e(14).38()}16 i=r.1d();16 s=r.1e();6(r[0].1N.1d&&r[0].1N.1d.1i("%")!=-1){i=r[0].1N.1d}6(r[0].1N.1e&&r[0].1N.1e.1i("%")!=-1){s=r[0].1N.1e}r.11("2T",i);r.11("2U",s);r.11("7N",r.1a("2a-1m"));r.11("7O",r.1a("2a-1D"));r.11("7R",r.1a("2a-1q"));r.11("7Q",r.1a("2a-1o"));16 o=1Y 3j(r.1a("2N"))=="3S"?1C.cA(3j(r.1a("2N"))*1J)/1J:1;e(14).11("75",o);6(r.1a("3s-1m-1d").1i("1I")==-1){r.11("7k",r[0].1N.9m)}19{r.11("7k",r.1a("3s-1m-1d"))}6(r.1a("3s-1D-1d").1i("1I")==-1){r.11("6h",r[0].1N.9i)}19{r.11("6h",r.1a("3s-1D-1d"))}6(r.1a("3s-1q-1d").1i("1I")==-1){r.11("6w",r[0].1N.9f)}19{r.11("6w",r.1a("3s-1q-1d"))}6(r.1a("3s-1o-1d").1i("1I")==-1){r.11("6x",r[0].1N.9g)}19{r.11("6x",r.1a("3s-1o-1d"))}r.11("9Z",r.1a("a1-a3"));r.11("9X",r.1a("98-1e"))});6(5P.4H.aO){24(16 t=0;t<e(u).17(".12-1p").1k;t++){6(e(u).17(".12-1p").eq(t).11("cI")==5P.4H.aO.1E("#")[1]){f.o.32=t+1}}}e(u).17(\'*[1t*="12-7L-"]\').1O(18(){16 t=e(14).1f("1t").1E(" ");24(16 n=0;n<t.1k;n++){6(t[n].1i("12-7L-")!=-1){16 r=1b(t[n].1E("12-7L-")[1]);e(14).1a({cP:"cO"}).2l(18(t){t.3A();e(u).2R(r)})}}});f.g.2x=e(u).17(".12-1p").1k;6(f.o.7p&&f.g.2x>2){f.o.32=="2g";f.o.8b=1h}19{f.o.7p=1h}6(f.o.32=="2g"){f.o.32=1C.27(1C.2g()*f.g.2x+1)}f.o.4Z=f.o.4Z<f.g.2x+1?f.o.4Z:1;f.o.4Z=f.o.4Z<1?1:f.o.4Z;f.g.4c=1;6(f.o.4A){f.g.4c=0}16 n=5P.4H.2h.1i("cM:")===-1?"":"7q:";e(u).17(\'29[1g*="5U.4U"], 29[1g*="4U.be"]\').1O(18(){e(14).26().1r("12-3P-5q");6(e(14).26(\'[1t*="12-l"]\')){16 t=e(14);16 r=n;e.aA(r+"//cy.7v.68/ci/b8/cj/"+e(14).1f("1g").1E("7P/")[1].1E("?")[0]+"?v=2&ck=bJ&bw=?",18(e){t.11("7f",1b(e["av"]["cf$aG"]["cc$2m"]["cd"])*1P)});16 i=e("<1n>").1r("12-6e").1v(e(14).26());6(f.o.41){e("<1Z>").1v(i).1r("12-2J").11("1g",r+"//1Z.7v.68/ay/"+e(14).1f("1g").1E("7P/")[1].1E("?")[0]+"/"+f.o.8P)}19{e("<1Z>").1v(i).1r("12-2J").1f("1g",r+"//1Z.7v.68/ay/"+e(14).1f("1g").1E("7P/")[1].1E("?")[0]+"/"+f.o.8P)}e("<1n>").1v(i).1r("12-bv");e(14).26().1a({1d:e(14).1d(),1e:e(14).1e()}).2l(18(){f.g.2X=1c;6(f.g.3h){6(f.o.2C!=1h){f.g.3h=1h}f.g.2t=1c}19{f.g.2t=f.g.2v}6(f.o.2C!=1h){f.1x()}f.g.53=1c;r=e(14).17("29").11("3U").1i("7q")===-1?n:"";e(14).17("29").1f("1g",r+e(14).17("29").11("3U"));e(14).17(".12-6e").1M(f.g.v.d).3M(f.g.v.fo,18(){6(f.o.2C=="1W"&&f.g.2t==1c){16 e=2e(18(){f.22()},t.11("7f")-f.g.v.d);t.11("7b",e)}f.g.2X=1h;6(f.g.30==1c){f.3D(f.g.1L,18(){f.g.30=1h})}})});16 s="&";6(e(14).1f("1g").1i("?")==-1){s="?"}6(e(14).1f("1g").1i("3F=0")!=-1){e(14).11("3U",e(14).1f("1g").2k("3F=0","3F=1"))}19 6(e(14).1f("1g").1i("3F")==-1){e(14).11("3U",e(14).1f("1g")+s+"3F=1")}e(14).11("2T",e(14).1f("1d"));e(14).11("2U",e(14).1f("1e"));e(14).1f("1g","")}});e(u).17(\'29[1g*="61.5k"]\').1O(18(){e(14).26().1r("12-3P-5q");6(e(14).26(\'[1t*="12-l"]\')){16 t=e(14);16 r=n;16 i=e("<1n>").1r("12-6e").1v(e(14).26());e.aA(r+"//5k.68/b8/cm/3P/"+e(14).1f("1g").1E("3P/")[1].1E("?")[0]+".bJ?bw=?",18(n){6(f.o.41){e("<1Z>").1v(i).1r("12-2J").11("1g",n[0]["bM"])}19{e("<1Z>").1v(i).1r("12-2J").1f("1g",n[0]["bM"])}t.11("7f",1b(n[0]["2m"])*1P);e("<1n>").1v(i).1r("12-bv")});e(14).26().1a({1d:e(14).1d(),1e:e(14).1e()}).2l(18(){f.g.2X=1c;6(f.g.3h){6(f.o.2C!=1h){f.g.3h=1h}f.g.2t=1c}19{f.g.2t=f.g.2v}6(f.o.2C!=1h){f.1x()}f.g.53=1c;r=e(14).17("29").11("3U").1i("7q")===-1?n:"";e(14).17("29").1f("1g",r+e(14).17("29").11("3U"));e(14).17(".12-6e").1M(f.g.v.d).3M(f.g.v.fo,18(){6(f.o.2C=="1W"&&f.g.2t==1c){16 e=2e(18(){f.22()},t.11("7f")-f.g.v.d);t.11("7b",e)}f.g.2X=1h;6(f.g.30==1c){f.3D(f.g.1L,18(){f.g.30=1h})}})});16 s="&";6(e(14).1f("1g").1i("?")==-1){s="?"}6(e(14).1f("1g").1i("3F=0")!=-1){e(14).11("3U",e(14).1f("1g").2k("3F=0","3F=1"))}19 6(e(14).1f("1g").1i("3F")==-1){e(14).11("3U",e(14).1f("1g")+s+"3F=1")}e(14).11("2T",e(14).1f("1d"));e(14).11("2U",e(14).1f("1e"));e(14).1f("1g","")}});e(u).17("3P, 6Z").1O(18(){16 t=1Y e(14).1f("1d")==="4w"?e(14).1f("1d"):e(14).1d();16 n=1Y e(14).1f("1e")==="4w"?e(14).1f("1e"):e(14).1e();6(t.1i("%")===-1){t=1b(t)}6(n.1i("%")===-1){n=1b(n)}e(14).26().1r("12-3P-5q").1a({1d:t,1e:n}).11({2T:t,2U:n});e(14).5Q("1d").5Q("1e").1a({1d:"1J%",1e:"1J%"}).2l(18(){14.cv=0;14.cs();f.g.2X=1c;6(f.g.3h){6(f.o.2C!==1h){f.g.3h=1h}f.g.2t=1c}19{f.g.2t=f.g.2v}6(f.o.2C!==1h){f.1x()}f.g.53=1c;e(14).4r("cr",18(){6(f.o.2C==="1W"&&f.g.2t===1c){f.22()}});f.g.2X=1h;6(f.g.30===1c){f.3D(f.g.1L,18(){f.g.30=1h})}})});6(f.o.4A){f.o.32=f.o.32-1===0?f.g.2x:f.o.32-1}f.g.23=f.o.32;f.g.1L=e(u).17(".12-1p:eq("+(f.g.23-1)+")");e(u).17(".12-1p").cn(\'<1n 1t="12-28"></1n>\');6(f.o.b4){f.g.3z=e("<1n>").1r("12-co-62").1v(e(u).17(".12-28"))}6(f.o.aN&&!f.g.2n){f.g.3p=e("<1n>").1r("12-cp-62").1v(e(u).17(".12-28"));f.g.3p.3Q(e(\'<1n 1t="12-ct-1m"><1n 1t="12-ct-3y"><1n 1t="12-ct-bx"><1n 1t="12-ct-9c"></1n></1n></1n></1n><1n 1t="12-ct-1D"><1n 1t="12-ct-3y"><1n 1t="12-ct-bx"><1n 1t="12-ct-9c"></1n></1n></1n></1n><1n 1t="12-ct-dx"></1n>\'))}f.g.3w=e("<1n>").1a({bK:-1,1K:"1Q"}).1r("12-ac-2p").1v(e(u));e("<1n>").1r("12-ac-dg").1v(f.g.3w);6(e(u).1a("3r")=="df"){e(u).1a("3r","bm")}6(f.o.6z){e(u).17(".12-28").1a({d0:"64("+f.o.6z+")"})}19{e(u).17(".12-28").1a({c1:f.o.8g})}6(f.o.8g=="8o"&&f.o.6z==1h){e(u).17(".12-28").1a({3e:"1Q 8o !c0"})}e(u).17(".12-1p 1Z").1O(18(){e(14).5Q("1d").5Q("1e");6(f.o.44===1c&&f.o.41===1c){6(1Y e(14).11("1g")!=="4w"){e(14).11("1g",e(14).1f("1g"));16 t=f.o.3v+"../1a/bV.bT";e(14).1f("1g",t)}}19{6(1Y e(14).11("1g")==="4w"){e(14).1f("1g",e(14).11("1g"));e(14).5Q("11-1g")}}});e(u).17(".12-1p").4r("c2",18(t){f.g.99=t.7J-e(14).26().5e().1m;f.g.9z=t.9t-e(14).26().5e().1q});e(u).17(".12-1p").4r("bC",18(t){16 n=e(14).26().5e().1m+f.g.99;16 r=e(14).26().5e().1q+f.g.9z;16 i=t.7J-n;16 s=t.9t-r;e(14).17("> *:2H(.12-bg)").1O(18(){6(1Y e(14).11("4Y")!=="3E"&&1b(e(14).11("4Y"))!==0){e(14).1a({3l:-i/1J*1b(e(14).11("4Y")),3I:-s/1J*1b(e(14).11("4Y"))})}})});e(u).17(".12-1p").4r("bR",18(){e(14).17("> *:2H(.12-bg)").1O(18(){6(1Y e(14).11("4Y")!=="3E"&&1b(e(14).11("4Y"))!==0){36.2f(14,.4,{1a:{3l:0,3I:0}})}})});6(f.o.8k){e(\'<a 1t="12-1s-1S" 2h="#" />\').2l(18(t){t.3A();e(u).2R("1S")}).1v(e(u));e(\'<a 1t="12-1s-1V" 2h="#" />\').2l(18(t){t.3A();e(u).2R("1V")}).1v(e(u));6(f.o.b0){e(u).17(".12-1s-1S, .12-1s-1V").1a({1K:"1Q"});e(u).1R(18(){6(!f.g.84){6(f.g.2n){e(u).17(".12-1s-1S, .12-1s-1V").1a("1K","2j")}19{e(u).17(".12-1s-1S, .12-1s-1V").1x(1c,1c).2G(2E)}}},18(){6(f.g.2n){e(u).17(".12-1s-1S, .12-1s-1V").1a("1K","1Q")}19{e(u).17(".12-1s-1S, .12-1s-1V").1x(1c,1c).3M(2E)}})}}6(f.o.6s||f.o.6y){16 r=e(\'<1n 1t="12-1o-1s-2F" />\').1v(e(u));f.g.3n=r;6(f.o.3o=="4v"){r.1r("12-aq-5i")}6(f.o.6y&&f.o.3o!="4v"){e(\'<5C 1t="12-1o-4u" />\').1v(e(u).17(".12-1o-1s-2F"));6(f.o.3o=="1R"){16 i=e(\'<1n 1t="12-1H-1R"><1n 1t="12-1H-1R-28"><1n 1t="12-1H-1R-bg"></1n><1n 1t="12-1H-1R-1Z"><1Z></1n><5C></5C></1n></1n>\').1v(e(u).17(".12-1o-4u"))}24(x=1;x<f.g.2x+1;x++){16 s=e(\'<a 2h="#" />\').1v(e(u).17(".12-1o-4u")).2l(18(t){t.3A();e(u).2R(e(14).5D()+1)});6(f.o.3o=="1R"){e(u).17(".12-1H-1R, .12-1H-1R-1Z").1a({1d:f.o.8T,1e:f.o.5s});16 o=e(u).17(".12-1H-1R");16 a=o.17("1Z").1a({1e:f.o.5s});16 l=e(u).17(".12-1H-1R-28").1a({2b:"2K",1K:"2j"});s.1R(18(){16 t=e(u).17(".12-1p").eq(e(14).5D());16 n;6(f.o.44===1c&&f.o.41===1c){6(t.17(".12-4l").1k){n=t.17(".12-4l").11("1g")}19 6(t.17(".12-2J").1k){n=t.17(".12-2J").11("1g")}19 6(t.17(".12-bg").1k){n=t.17(".12-bg").11("1g")}19{n=f.o.3v+f.o.2r+"/6j.4G"}}19{6(t.17(".12-4l").1k){n=t.17(".12-4l").1f("1g")}19 6(t.17(".12-2J").1k){n=t.17(".12-2J").1f("1g")}19 6(t.17(".12-bg").1k){n=t.17(".12-bg").1f("1g")}19{n=f.o.3v+f.o.2r+"/6j.4G"}}e(u).17(".12-1H-1R-1Z").1a({1m:1b(o.1a("2a-1m")),1q:1b(o.1a("2a-1q"))});a.2Z(18(){6(e(14).1d()==0){a.1a({3r:"bm",3i:"0 1W",1m:"1W"})}19{a.1a({3r:"c9",3l:-e(14).1d()/2,1m:"50%"})}}).1f("1g",n);o.1a({1K:"2j"}).1x().4g({1m:e(14).3r().1m+(e(14).1d()-o.3t())/2},7M);l.1a({1K:"1Q",2b:"2V"}).1x().2G(7M)},18(){l.1x().3M(7M,18(){o.1a({2b:"2K",1K:"2j"})})})}}6(f.o.3o=="1R"){i.1v(e(u).17(".12-1o-4u"))}e(u).17(".12-1o-4u a:eq("+(f.o.32-1)+")").1r("12-1s-1T")}6(f.o.6s){16 c=e(\'<a 1t="12-1s-22" 2h="#" />\').2l(18(t){t.3A();e(u).2R("22")}).7e(e(u).17(".12-1o-1s-2F"));16 h=e(\'<a 1t="12-1s-1x" 2h="#" />\').2l(18(t){t.3A();e(u).2R("1x")}).1v(e(u).17(".12-1o-1s-2F"))}19 6(f.o.3o!="4v"){e(\'<5C 1t="12-1s-bb 12-1s-c3" />\').7e(e(u).17(".12-1o-1s-2F"));e(\'<5C 1t="12-1s-bb 12-1s-c7" />\').1v(e(u).17(".12-1o-1s-2F"))}6(f.o.6U&&f.o.3o!="4v"){r.1a({1K:"1Q"});e(u).1R(18(){6(!f.g.84){6(f.g.2n){r.1a("1K","2j")}19{r.1x(1c,1c).2G(2E)}}},18(){6(f.g.2n){r.1a("1K","1Q")}19{r.1x(1c,1c).3M(2E)}})}}6(f.o.3o=="4v"){f.g.43=e(\'<1n 1t="12-1H-2F"></1n>\').1v(e(u));16 i=e(\'<1n 1t="12-1H"><1n 1t="12-1H-28"><1n 1t="12-1H-1p-2p"><1n 1t="12-1H-1p"></1n></1n></1n></1n>\').1v(f.g.43);f.g.5i=e(u).17(".12-1H-1p-2p");6(!("6L"3H 2o)){f.g.5i.1R(18(){e(14).1r("12-1H-1p-1R")},18(){e(14).31("12-1H-1p-1R");f.7Y()}).bC(18(t){16 n=1b(t.7J-e(14).5e().1m)/e(14).1d()*(e(14).1d()-e(14).17(".12-1H-1p").1d());e(14).17(".12-1H-1p").1x().1a({3l:n})})}19{f.g.5i.1r("12-bY")}e(u).17(".12-1p").1O(18(){16 t=e(14).5D()+1;16 n;6(f.o.44===1c&&f.o.41===1c){6(e(14).17(".12-4l").1k){n=e(14).17(".12-4l").11("1g")}19 6(e(14).17(".12-2J").1k){n=e(14).17(".12-2J").11("1g")}19 6(e(14).17(".12-bg").1k){n=e(14).17(".12-bg").11("1g")}19{n=f.o.3v+f.o.2r+"/6j.4G"}}19{6(e(14).17(".12-4l").1k){n=e(14).17(".12-4l").1f("1g")}19 6(e(14).17(".12-2J").1k){n=e(14).17(".12-2J").1f("1g")}19 6(e(14).17(".12-bg").1k){n=e(14).17(".12-bg").1f("1g")}19{n=f.o.3v+f.o.2r+"/6j.4G"}}16 r=e(\'<a 2h="#" 1t="12-4k-\'+t+\'"><1Z 1g="\'+n+\'"></a>\');r.1v(e(u).17(".12-1H-1p"));6(!("6L"3H 2o)){r.1R(18(){e(14).38().1x().6D(2E,f.o.8X/1J)},18(){6(!e(14).38().3k("12-4k-1T")){e(14).38().1x().6D(2E,f.o.8V/1J)}})}r.2l(18(n){n.3A();e(u).2R(t)})});6(c&&h){16 p=f.g.3n=e(\'<1n 1t="12-1o-1s-2F 12-bW-5i"></1n>\').1v(e(u));c.7y().2l(18(t){t.3A();e(u).2R("22")}).1v(p);h.7y().2l(18(t){t.3A();e(u).2R("1x")}).1v(p)}6(f.o.6U){f.g.43.1a("1K","1Q");6(p){f.g.3n=p.1a("1K")=="2j"?p:e(u).17(".12-aq-5i");f.g.3n.1a("1K","1Q")}e(u).1R(18(){e(u).1r("12-1R");6(!f.g.84){6(f.g.2n){f.g.43.1a("1K","2j");6(f.g.3n){f.g.3n.1a("1K","2j")}}19{f.g.43.1x(1c,1c).2G(2E);6(f.g.3n){f.g.3n.1x(1c,1c).2G(2E)}}}},18(){e(u).31("12-1R");6(f.g.2n){f.g.43.1a("1K","1Q");6(f.g.3n){f.g.3n.1a("1K","1Q")}}19{f.g.43.1x(1c,1c).3M(2E);6(f.g.3n){f.g.3n.1x(1c,1c).3M(2E)}}})}}f.g.47=e(\'<1n 1t="12-47"></1n>\').1v(e(u));6(f.g.47.1a("1K")=="2j"&&!f.g.47.17("1Z").1k){f.g.7r=18(){f.g.47.1a({1K:"1Q",2b:"2V"}).2G(46,18(){f.g.7r=1h})};f.g.5g=e("<1Z>").1f("1g",f.o.3v+f.o.2r+"/47.4G").1v(f.g.47);f.g.9r=1Y 1b(e(u).1a("2a-1o"))=="3S"?1b(e(u).1a("2a-1o")):0}f.7z();6(f.o.ar&&e(u).17(".12-1p").1k>1){e("3T").6H("c4",18(e){6(!f.g.2X&&!f.g.4a){6(e.aX==37){f.o.79(f.g);f.1S("6F")}19 6(e.aX==39){f.o.7s(f.g);f.1V("6F")}}})}6("6L"3H 2o&&e(u).17(".12-1p").1k>1&&f.o.b2){e(u).17(".12-28").6H("bQ",18(e){16 t=e.56?e.56:e.aP.56;6(t.1k==1){f.g.6I=f.g.5v=t[0].aR}});e(u).17(".12-28").6H("bN",18(e){16 t=e.56?e.56:e.aP.56;6(t.1k==1){f.g.5v=t[0].aR}6(1C.4m(f.g.6I-f.g.5v)>45){e.3A()}});e(u).17(".12-28").6H("e8",18(t){6(1C.4m(f.g.6I-f.g.5v)>45){6(f.g.6I-f.g.5v>0){f.o.7s(f.g);e(u).2R("1V")}19{f.o.79(f.g);e(u).2R("1S")}}})}6(f.o.bl==1c&&e(u).17(".12-1p").1k>1){e(u).17(".12-28").1R(18(){f.o.bp(f.g);6(f.g.2v){f.g.3h=1c;f.1x();6(f.g.3z){f.g.3z.1x()}6(f.g.3p){6(f.g.2L){f.g.2L.6c()}}f.g.48=(1G 57).5a()}},18(){6(f.g.3h==1c){f.22();f.g.3h=1h}})}f.7D();6(f.o.1w){f.g.1w=e("<1Z>").1r("12-eQ").1v(e(u)).1f("1N",f.o.9P).1a({2b:"2K",1K:"eP"}).2Z(18(){16 t=0;6(!f.g.1w){t=1P}2e(18(){f.g.1w.11("2T",f.g.1w.1d());f.g.1w.11("2U",f.g.1w.1e());6(f.g.1w.1a("1m")!="1W"){f.g.1w.11("49",f.g.1w[0].1N.1m)}6(f.g.1w.1a("1D")!="1W"){f.g.1w.11("5X",f.g.1w[0].1N.1D)}6(f.g.1w.1a("1q")!="1W"){f.g.1w.11("4n",f.g.1w[0].1N.1q)}6(f.g.1w.1a("1o")!="1W"){f.g.1w.11("5W",f.g.1w[0].1N.1o)}6(f.o.8n!=1h){e("<a>").1v(e(u)).1f("2h",f.o.8n).1f("eO",f.o.a9).1a({eN:"1Q",eS:"1Q"}).3Q(f.g.1w)}f.g.1w.1a({1K:"1Q",2b:"2V"});f.7B()},t)}).1f("1g",f.o.1w)}e(2o).30(18(){f.g.30=1c;6(!f.g.2X){f.3D(f.g.1L,18(){6(f.g.2s){f.g.2s.5t()}f.g.30=1h});6(f.g.1w){f.7B()}}});f.g.9H=1c;6(f.o.4A==1c){6(f.o.78){f.g.2v=1c;e(u).17(".12-1s-22").1r("12-1s-22-1T")}19{e(u).17(".12-1s-1x").1r("12-1s-1x-1T")}f.1V()}19{f.44(f.g.1L,18(){f.g.1L.2G(1P,18(){f.g.4a=1h;e(14).1r("12-1T");6(f.o.8W){e(14).1M(e(14).11("5c")+25).eV(18(){e(14).17(".12-2J, 3P, 6Z").2l();e(14).7C()})}f.g.1L.17(\' > *[1t*="12-l"]\').1O(18(){6(e(14).11("5E")>0){16 t=e(14);t.11("7d",2e(18(){f.8Y(t)},t.11("5E")))}})});f.86(f.g.23);6(f.o.78){f.g.4a=1h;f.22()}19{e(u).17(".12-1s-1x").1r("12-1s-1x-1T")}})}f.o.9b(e(u))};f.22=18(){6(f.g.2v){6(f.g.2i=="1S"&&f.o.8b){f.1S()}19{f.1V()}}19{f.g.2v=1c;6(!f.g.2X&&!f.g.4a){f.62()}}e(u).17(".12-1s-22").1r("12-1s-22-1T");e(u).17(".12-1s-1x").31("12-1s-1x-1T")};f.62=18(){6(e(u).17(".12-1T").11("12")){16 t=f.58.7i}19{16 t=f.o.7i}16 n=e(u).17(".12-1T").11("5w")?1b(e(u).17(".12-1T").11("5w")):t;6(!f.o.4A&&!e(u).17(".12-1T").11("5w")){16 r=e(u).17(".12-1p:eq("+(f.o.32-1)+")").11("5w");n=r?r:t}2w(f.g.4e);6(f.g.48){6(!f.g.4b){f.g.4b=(1G 57).5a()}6(f.g.4b>f.g.48){f.g.48=(1G 57).5a()}6(!f.g.3K){f.g.3K=n}f.g.3K-=f.g.48-f.g.4b;f.g.48=1h;f.g.4b=(1G 57).5a()}19{f.g.3K=n;f.g.4b=(1G 57).5a()}f.g.3K=1b(f.g.3K);f.g.4e=2e(18(){f.g.4b=f.g.48=f.g.3K=1h;f.22()},f.g.3K);6(f.g.3z){f.g.3z.4g({1d:f.g.1z()},f.g.3K,"8z",18(){e(14).1a({1d:0})})}6(f.g.3p){16 i=f.g.3p.17(".12-ct-1D .12-ct-3y");16 s=f.g.3p.17(".12-ct-1m .12-ct-3y");6(f.g.3p.1a("1K")=="1Q"){i.1a({3y:0});s.1a({3y:0});f.g.3p.2G(aQ)}6(!f.g.2L){f.g.2L=1G aD;f.g.2L.aJ(36.77(i[0],n/aI,{3f:0},{3R:8y.8t,3f:7l,eU:18(){f.g.2L=1h}}));f.g.2L.aJ(36.77(s[0],n/aI,{3f:0},{3R:8y.8t,3f:7l}))}19{f.g.2L.eT()}}};f.1x=18(){f.g.48=(1G 57).5a();6(f.g.3z){f.g.3z.1x()}6(f.g.3p){6(f.g.2L){f.g.2L.6c()}}6(!f.g.3h&&!f.g.2t){e(u).17(".12-1s-1x").1r("12-1s-1x-1T");e(u).17(".12-1s-22").31("12-1s-22-1T")}2w(f.g.4e);f.g.2v=1h};f.au=18(){2w(f.g.4e);f.g.2v=1h;2w(f.g.ap);2w(f.g.ao);2w(f.g.aj);2w(f.g.am);2w(f.g.96);6(f.g.3z){f.g.3z.1x()}6(f.g.3p){6(f.g.2L){f.g.2L.6c()}}e(u).17("*").1x(1c,1h).7C();e(u).17(".12-1p >").1O(18(){6(e(14).11("3L")){e(14).11("3L").6c()}});6(!f.g.3h&&!f.g.2t){e(u).17(".12-1s-1x").1r("12-1s-1x-1T");e(u).17(".12-1s-22").31("12-1s-22-1T")}};f.eL=18(){e(u).17("*").1x();2w(f.g.4e);f.4C(f.g.23,f.g.2i)};f.aE=18(t){6(e.5J(t.21())=="ai"||e.5J(t.21())=="8z"){1U t.21()}19{1U t.2k("8s","bF").2k("8u","9x").2k("8r","bB").2k("eK","eC").2k("eB","eA").2k("ey","ez").2k("eD","eE").2k("eJ","eI").2k("eH","eF").2k("eG","eY").2k("fh","fg").2k("5B","ff").2k("fe","fj")}};f.1S=18(e){6(f.g.23<2){f.g.4c+=1}6(f.g.4c>f.o.4f&&f.o.4f>0&&!e){f.g.4c=0;f.1x();6(f.o.7u==1h){f.o.4f=0}}19{16 t=f.g.23<2?f.g.2x:f.g.23-1;f.g.2i="1S";f.4C(t,f.g.2i)}};f.1V=18(e){6(!f.o.7p){6(!(f.g.23<f.g.2x)){f.g.4c+=1}6(f.g.4c>f.o.4f&&f.o.4f>0&&!e){f.g.4c=0;f.1x();6(f.o.7u==1h){f.o.4f=0}}19{16 t=f.g.23<f.g.2x?f.g.23+1:1;f.g.2i="1V";f.4C(t,f.g.2i)}}19 6(!e){16 t=f.g.23;16 n=18(){t=1C.27(1C.2g()*f.g.2x)+1;6(t==f.g.23){n()}19{f.g.2i="1V";f.4C(t,f.g.2i)}};n()}19 6(e){16 t=f.g.23<f.g.2x?f.g.23+1:1;f.g.2i="1V";f.4C(t,f.g.2i)}};f.4C=18(t,n){f.g.4b=f.g.48=f.g.3K=1h;6(f.g.3z){f.g.3z.1x().1M(2E).4g({1d:0},fk)}6(f.g.3p){f.g.3p.3M(46);6(f.g.2L){f.g.2L.66().2m(.35)}}6(f.g.53==1c){f.g.53=1h;f.g.2v=f.g.2t;f.g.1L.17(\'29[1g*="5U.4U"], 29[1g*="61.5k"]\').1O(18(){e(14).26().17(".12-6e").2G(f.g.v.fi,18(){e(14).26().17("29").1f("1g","")})});f.g.1L.17("3P, 6Z").1O(18(){14.6c()})}e(u).17(\'29[1g*="5U.4U"], 29[1g*="61.5k"]\').1O(18(){2w(e(14).11("7b"))});2w(f.g.4e);f.g.65=t;f.g.1u=e(u).17(".12-1p:eq("+(f.g.65-1)+")");6(!n){6(f.g.23<f.g.65){f.g.2i="1V"}19{f.g.2i="1S"}}16 r=0;6(e(u).17(\'29[1g*="5U.4U"], 29[1g*="61.5k"]\').1k>0){r=f.g.v.fi}f.44(f.g.1u,18(){f.4g()})};f.44=18(t,n){f.g.4a=1c;6(f.g.9H){e(u).1a({2b:"2V"})}6(f.o.44){16 r=[];16 i=0;6(t.1a("3e-2I")!="1Q"&&t.1a("3e-2I").1i("64")!=-1&&!t.3k("12-3q")&&!t.3k("12-2H-3q")){16 s=t.1a("3e-2I");s=s.3N(/64\\((.*)\\)/)[1].2k(/"/9G,"");r[r.1k]=[s,t]}t.17("1Z:2H(.12-3q, .12-2H-3q)").1O(18(){6(f.o.41===1c){e(14).1f("1g",e(14).11("1g"))}r[r.1k]=[e(14).1f("1g"),e(14)]});t.17("*").1O(18(){6(e(14).1a("3e-2I")!="1Q"&&e(14).1a("3e-2I").1i("64")!=-1&&!e(14).3k("12-3q")&&!e(14).3k("12-2H-3q")){16 t=e(14).1a("3e-2I");t=t.3N(/64\\((.*)\\)/)[1].2k(/"/9G,"");r[r.1k]=[t,e(14)]}});6(r.1k==0){e(".12-1H-2F, .12-1s-1V, .12-1s-1S, .12-1o-1s-2F").1a({2b:"2V"});f.3D(t,n)}19{6(f.g.2n){f.g.3w.1a("1K","2j")}19{f.g.3w.1M(ad).2G(2E)}24(x=0;x<r.1k;x++){e("<1Z>").11("el",r[x]).2Z(18(){e(14).11("el")[1].1r("12-3q");6(++i==r.1k){f.g.3w.1x(1c,1c).1a({1K:"1Q"});e(".12-1H-2F, .12-1s-1V, .12-1s-1S, .12-1o-1s-2F").1a({2b:"2V"});6(42.40.1i("fq/7")!==-1||f.g.2n){2e(18(){f.3D(t,n)},50)}19{f.3D(t,n)}}}).3Y(18(){16 t=e(14).11("el")[0].9A(e(14).11("el")[0].a5("/")+1,e(14).11("el")[0].1k);6(2o.4L){4L.fl(\'2A 3Y:\\r\\n\\r\\6l 6k 4N 20 6i 2Q 20 2I 3W 3e 2I "\'+t+\'" 3g 6r 2f a 6t 4H 4I 4h 6v be 2W. 4S 6Y 20 6o 2Q 4P 4T 6W 7c 3H 20 7n.\')}19{a4(\'2A 3Y:\\r\\n\\r\\6l 6k 4N 20 6i 2Q 20 2I 3W 3e 2I "\'+t+\'" 3g 6r 2f a 6t 4H 4I 4h 6v be 2W. 4S 6Y 20 6o 2Q 4P 4T 6W 7c 3H 20 7n.\')}e(14).1r("12-2H-3q");i++}).1f("1g",r[x][0])}}}19{e(".12-1H-2F, .12-1s-1V, .12-1s-1S, .12-1o-1s-2F").1a({2b:"2V"});f.3D(t,n)}};f.3D=18(t,n){t.1a({2b:"2K",1K:"2j"});6(f.g.7r){f.g.7r()}f.7D();6(f.o.3o=="4v"){f.9E()}t.38().1O(18(){16 t=e(14);16 n=t.11("49")?t.11("49"):"0";16 r=t.11("4n")?t.11("4n"):"0";6(t.3g("a")&&t.38().1k>0){t.1a({1K:"2j"});t=t.38()}16 i="1W";16 s="1W";6(t.11("2T")){6(1Y t.11("2T")=="3S"){i=1b(t.11("2T"))*f.g.1A}19 6(t.11("2T").1i("%")!=-1){i=t.11("2T")}}6(t.11("2U")){6(1Y t.11("2U")=="3S"){s=1b(t.11("2U"))*f.g.1A}19 6(t.11("2U").1i("%")!=-1){s=t.11("2U")}}16 o=t.11("7N")?1b(t.11("7N"))*f.g.1A:0;16 a=t.11("7O")?1b(t.11("7O"))*f.g.1A:0;16 l=t.11("7R")?1b(t.11("7R"))*f.g.1A:0;16 c=t.11("7Q")?1b(t.11("7Q"))*f.g.1A:0;16 h=t.11("7k")?1b(t.11("7k"))*f.g.1A:0;16 p=t.11("6h")?1b(t.11("6h"))*f.g.1A:0;16 d=t.11("6w")?1b(t.11("6w"))*f.g.1A:0;16 v=t.11("6x")?1b(t.11("6x"))*f.g.1A:0;16 m=t.11("9Z");16 g=t.11("9X");6(f.g.4d||f.o.4K>0){6(t.3g("1Z")&&!t.3k("12-bg")&&t.1f("1g")){t.1a({1d:"1W",1e:"1W"});6((i==0||i=="1W")&&1Y s=="3S"&&s!=0){i=s/t.1e()*t.1d()}6((s==0||s=="1W")&&1Y i=="3S"&&i!=0){s=i/t.1d()*t.1e()}6(i=="1W"){i=t.1d()*f.g.1A}6(s=="1W"){s=t.1e()*f.g.1A}t.1a({1d:i,1e:s})}6(!t.3g("1Z")){t.1a({1d:i,1e:s,"a1-a3":1b(m)*f.g.1A+"1I","98-1e":1b(g)*f.g.1A+"1I"})}6(t.3g("1n")&&t.17("29").11("3U")){16 y=t.17("29");y.1f("1d",1b(y.11("2T"))*f.g.1A).1f("1e",1b(y.11("2U"))*f.g.1A);t.1a({1d:1b(y.11("2T"))*f.g.1A,1e:1b(y.11("2U"))*f.g.1A})}t.1a({2a:l+"1I "+a+"1I "+c+"1I "+o+"1I ",9m:h+"1I",9i:p+"1I",9f:d+"1I",9g:v+"1I"})}6(!t.3k("12-bg")){16 b=t;6(t.26().3g("a")){t=t.26()}16 w=0;6(f.o.7a){w=f.o.7a>0?(f.g.1z()-f.o.7a)/2:0}19 6(f.o.7K){w=f.o.7K>0?(f.g.1z()-f.o.7K)/2:0}w=w<0?0:w;6(n.1i("%")!=-1){t.1a({1m:f.g.1z()/1J*1b(n)-b.1d()/2-o-h})}19 6(w>0||f.g.4d||f.o.4K>0){t.1a({1m:w+1b(n)*f.g.1A})}6(r.1i("%")!=-1){t.1a({1q:f.g.1F()/1J*1b(r)-b.1e()/2-l-d})}19 6(f.g.4d||f.o.4K>0){t.1a({1q:1b(r)*f.g.1A})}}19{16 E=e(u).17(".12-28");t.1a({1d:"1W",1e:"1W"});i=t.1d();s=t.1e();16 S=f.g.1A;6(f.g.2y.1i("%")!=-1){6(f.g.1z()>i){S=f.g.1z()/i;6(f.g.1F()>s*S){S=f.g.1F()/s}}19 6(f.g.1F()>s){S=f.g.1F()/s;6(f.g.1z()>i*S){S=f.g.1z()/i}}}t.1a({1d:i*S,1e:s*S,3l:E.1d()/2-i*S/2,3I:E.1e()/2-s*S/2})}});t.1a({1K:"1Q",2b:"2V"});f.7z();n();e(14).7C()};f.7z=18(){6(f.g.5g){16 e=18(){6(f.g.5g.1e()>0){6(f.g.9r>0){f.g.47.1a({1e:f.g.5g.1e()/2})}19{f.g.47.1a({1e:f.g.5g.1e(),3I:-f.g.5g.1e()/2})}}19{2e(18(){e()},50)}};e()}};f.7D=18(){6(f.o.4K>0){6(e(2o).1d()<f.o.4K){f.g.4d=1c;f.g.2y=f.o.4K+"1I"}19{f.g.4d=1h;f.g.2y=f.g.7E;f.g.1A=1}}6(f.g.4d){16 t=e(u).26();e(u).1a({1d:t.1d()-1b(e(u).1a("2a-1m"))-1b(e(u).1a("2a-1D"))});f.g.1A=e(u).1d()/1b(f.g.2y);e(u).1a({1e:f.g.1A*1b(f.g.4i)})}19{f.g.1A=1;e(u).1a({1d:f.g.2y,1e:f.g.4i})}6(e(u).6a(".12-6d-6f-2p").1k){e(u).6a(".12-6d-6f-9W").1a({1e:e(u).3u(1c)});e(u).6a(".12-6d-6f-2p").1a({1e:e(u).3u(1c)});e(u).6a(".12-6d-6f-9W").1a({1d:e(2o).1d(),1m:-e(u).6a(".12-6d-6f-2p").5e().1m});6(f.g.2y.1i("%")!=-1){16 n=1b(f.g.2y);16 r=e("3T").1d()/1J*n-(e(u).3t()-e(u).1d());e(u).1d(r)}}e(u).17(".12-28, .12-1y-2p").1a({1d:f.g.1z(),1e:f.g.1F()});6(f.g.1L&&f.g.1u){f.g.1L.1a({1d:f.g.1z(),1e:f.g.1F()});f.g.1u.1a({1d:f.g.1z(),1e:f.g.1F()})}19{e(u).17(".12-1p").1a({1d:f.g.1z(),1e:f.g.1F()})}};f.7B=18(){f.g.1w.1a({1d:f.g.1w.11("2T")*f.g.1A,1e:f.g.1w.11("2U")*f.g.1A});6(f.g.2n){f.g.1w.1a("1K","2j")}19{f.g.1w.2G(2E)}16 t=6G=6B=6C="1W";6(f.g.1w.11("49")&&f.g.1w.11("49").1i("%")!=-1){t=f.g.1z()/1J*1b(f.g.1w.11("49"))-f.g.1w.1d()/2+1b(e(u).1a("2a-1m"))}19{t=1b(f.g.1w.11("49"))*f.g.1A}6(f.g.1w.11("5X")&&f.g.1w.11("5X").1i("%")!=-1){6G=f.g.1z()/1J*1b(f.g.1w.11("5X"))-f.g.1w.1d()/2+1b(e(u).1a("2a-1D"))}19{6G=1b(f.g.1w.11("5X"))*f.g.1A}6(f.g.1w.11("4n")&&f.g.1w.11("4n").1i("%")!=-1){6B=f.g.1F()/1J*1b(f.g.1w.11("4n"))-f.g.1w.1e()/2+1b(e(u).1a("2a-1q"))}19{6B=1b(f.g.1w.11("4n"))*f.g.1A}6(f.g.1w.11("5W")&&f.g.1w.11("5W").1i("%")!=-1){6C=f.g.1F()/1J*1b(f.g.1w.11("5W"))-f.g.1w.1e()/2+1b(e(u).1a("2a-1o"))}19{6C=1b(f.g.1w.11("5W"))*f.g.1A}f.g.1w.1a({1m:t,1D:6G,1q:6B,1o:6C})};f.9E=18(){f.7x("4r");16 t=f.g.2y.1i("%")==-1?1b(f.g.2y):f.g.1z();e(u).17(".12-1H-1p a").1a({1d:1b(f.o.8T*f.g.1A),1e:1b(f.o.5s*f.g.1A)});e(u).17(".12-1H-1p a:4j").1a({3i:0});e(u).17(".12-1H-1p").1a({1e:1b(f.o.5s*f.g.1A)});16 n=e(u).17(".12-1H");16 r=f.o.6K.1i("%")==-1?1b(f.o.6K):1b(t/1J*1b(f.o.6K));n.1a({1d:r*1C.27(f.g.1A*1J)/1J});6(n.1d()>e(u).17(".12-1H-1p").1d()){n.1a({1d:e(u).17(".12-1H-1p").1d()})}f.7x("9I")};f.86=18(t){16 n=t?t:f.g.65;e(u).17(".12-1H-1p a:2H(.12-4k-"+n+")").38().1O(18(){e(14).31("12-4k-1T").1x().6D(8U,f.o.8V/1J)});e(u).17(".12-1H-1p a.12-4k-"+n).38().1r("12-4k-1T").1x().6D(8U,f.o.8X/1J)};f.7Y=18(){6(!e(u).17(".12-1H-1p-2p").3k("12-1H-1p-1R")){16 t=e(u).17(".12-4k-1T").1k?e(u).17(".12-4k-1T").26():1h;6(t){16 n=t.3r().1m+t.1d()/2;16 r=e(u).17(".12-1H-1p-2p").1d()/2-n;r=r<e(u).17(".12-1H-1p-2p").1d()-e(u).17(".12-1H-1p").1d()?e(u).17(".12-1H-1p-2p").1d()-e(u).17(".12-1H-1p").1d():r;r=r>0?0:r;e(u).17(".12-1H-1p").4g({3l:r},fm)}}};f.7x=18(t){6(f.o.6U&&!e(u).3k("12-1R")){2q(t){1l"4r":f.g.43.1a({2b:"2K",1K:"2j"});1j;1l"9I":f.g.43.1a({2b:"2V",1K:"1Q"});1j}}};f.4g=18(){6(e(u).17(".12-1p").1k>1){f.g.2X=1c}f.g.4a=1h;2w(f.g.4e);2w(f.g.fd);f.g.9Y=f.g.1L;f.o.bk(f.g);6(f.o.3o=="4v"){f.86();6(!("6L"3H 2o)){f.7Y()}}f.g.1u.1r("12-9d");16 t=7V=6V=85=6S=7U=6R=7T=6M=fc=6T=f3="1W";16 a=7I=f.g.1z();16 l=83=f.g.1F();16 c=f.g.2i=="1S"?f.g.1L:f.g.1u;16 h=c.11("3C")?c.11("3C"):f.o.8H;16 p=f.g.8J[f.g.2i][h];6(p=="1m"||p=="1D"){a=6V=7I=6R=0;6T=0}6(p=="1q"||p=="1o"){l=t=83=6S=0;6M=0}2q(p){1l"1m":7V=6S=0;6M=-f.g.1z();1j;1l"1D":t=7U=0;6M=f.g.1z();1j;1l"1q":85=6R=0;6T=-f.g.1F();1j;1l"1o":6V=7T=0;6T=f.g.1F();1j}f.g.1L.1a({1m:t,1D:7V,1q:6V,1o:85});f.g.1u.1a({1d:7I,1e:83,1m:6S,1D:7U,1q:6R,1o:7T});16 d=f.g.1L.11("5O")?1b(f.g.1L.11("5O")):f.o.7j;16 v=f.g.1L.11("4O")?1b(f.g.1L.11("4O")):f.o.4F;16 m=f.g.1L.11("4Q")?f.g.1L.11("4Q"):f.o.4z;16 g=f.g.1u.11("5c")?1b(f.g.1u.11("5c")):f.o.5Y;16 y=f.g.1u.11("5N")?1b(f.g.1u.11("5N")):f.o.5F;16 b=f.g.1u.11("5R")?f.g.1u.11("5R"):f.o.5x;16 w=18(){f.g.1L.1M(d+v/15).4g({1d:a,1e:l},v,m,18(){E()})};16 E=18(){f.g.9Y.17(\' > *[1t*="12-l"]\').1O(18(){6(e(14).11("3L")){e(14).11("3L").7X()}e(14).1a({f4:"1Q"})});f.o.8F(f.g);f.g.1L=f.g.1u;f.g.23=f.g.65;6(f.o.44&&f.o.41){16 t=f.g.23==f.g.2x?1:f.g.23+1;e(u).17(".12-1p").eq(t-1).17("1Z:2H(.12-3q)").1O(18(){e(14).2Z(18(){e(14).1r("12-3q")}).3Y(18(){16 t=e(14).11("1g").9A(e(14).11("1g").a5("/")+1,e(14).11("1g").1k);6(2o.4L){4L(\'2A 3Y:\\r\\n\\r\\6l 6k 4N 20 6i 2Q 20 2I 3W 3e 2I "\'+t+\'" 3g 6r 2f a 6t 4H 4I 4h 6v be 2W. 4S 6Y 20 6o 2Q 4P 4T 6W 7c 3H 20 7n.\')}19{a4(\'2A 3Y:\\r\\n\\r\\6l 6k 4N 20 6i 2Q 20 2I 3W 3e 2I "\'+t+\'" 3g 6r 2f a 6t 4H 4I 4h 6v be 2W. 4S 6Y 20 6o 2Q 4P 4T 6W 7c 3H 20 7n.\')}e(14).1r("12-2H-3q")}).1f("1g",e(14).11("1g"))})}e(u).17(".12-1p").31("12-1T");e(u).17(".12-1p:eq("+(f.g.23-1)+")").1r("12-1T").31("12-9d");e(u).17(".12-1o-4u a").31("12-1s-1T");e(u).17(".12-1o-4u a:eq("+(f.g.23-1)+")").1r("12-1s-1T");6(f.g.2v){f.62()}f.g.2X=1h;6(f.g.30==1c){f.3D(f.g.1L,18(){f.g.30=1h})}};16 S=18(t){f.g.1L.17(\' > *[1t*="12-l"]\').1O(18(){6(!e(14).11("2z")){f.5L(e(14))}16 r=e(14).11("3C")?e(14).11("3C"):p;16 i,s;2q(r){1l"1m":i=-f.g.1z();s=0;1j;1l"1D":i=f.g.1z();s=0;1j;1l"1q":s=-f.g.1F();i=0;1j;1l"1o":s=f.g.1F();i=0;1j;1l"3B":s=0;i=0;1j}6(e(14).11("2z")==="1G"){16 o="1G"}19{16 o=e(14).11("5G")?e(14).11("5G"):1h}2q(o){1l"1m":i=f.g.1z();s=0;1j;1l"1D":i=-f.g.1z();s=0;1j;1l"1q":s=f.g.1F();i=0;1j;1l"1o":s=-f.g.1F();i=0;1j;1l"3B":s=0;i=0;1j;1l"1G":6(e(14).11("3c")){6(e(14).11("3c")==="1m"){i=f.g.1z()}19 6(e(14).11("3c")==="1D"){i=-f.g.1z()}19{i=-1b(e(14).11("3c"))}}19{i=-f.1y.8m}6(e(14).11("34")){6(e(14).11("34")==="1q"){s=f.g.1F()}19 6(e(14).11("34")==="1o"){s=-f.g.1F()}19{s=-1b(e(14).11("34"))}}19{s=-f.1y.8I}1j}16 u=5r=5p=4s=5n=5j=3a=33="1Q";u=e(14).11("5H")?e(14).11("5H"):f.1y.89;5r=e(14).11("6N")?e(14).11("6N"):f.1y.88;5p=e(14).11("6O")?e(14).11("6O"):f.1y.8c;4s=e(14).11("5I")?e(14).11("5I"):f.1y.8f;5n=e(14).11("6A")?e(14).11("6A"):f.1y.8C;5j=e(14).11("6P")?e(14).11("6P"):f.1y.8D;6(4s===1){3a=e(14).11("6Q")?e(14).11("6Q"):f.1y.8p;33=e(14).11("6X")?e(14).11("6X"):f.1y.8q}19{3a=33=4s}16 a=e(14).11("6n")?e(14).11("6n").1E(" "):f.1y.8E;24(16 l=0;l<a.1k;l++){6(a[l].1i("%")===-1&&a[l].1i("1m")!==-1&&a[l].1i("1D")!==-1&&a[l].1i("1q")!==-1&&a[l].1i("1o")!==-1){a[l]=""+1b(a[l])*f.g.1A+"1I"}}16 c=a.92(" ");16 h=e(14).11("6p")?e(14).11("6p"):f.1y.8G;16 d=1b(e(14).1a("1m"));16 v=1b(e(14).1a("1q"));16 m=1b(e(14).1f("1t").1E("12-l")[1]);16 g=e(14).3t()>e(14).3u()?e(14).3t():e(14).3u();16 y=1b(u)===0?e(14).3t():g;16 b=1b(u)===0?e(14).3u():g;6(m===-1&&o!=="1G"||e(14).11("3c")==="1m"||e(14).11("3c")==="1D"){6(i<0){i=-(f.g.1z()-d+(3a/2-.5)*y+1J)}19 6(i>0){i=d+(3a/2+.5)*y+1J}}19{i=i*f.g.1A}6(m===-1&&o!=="1G"||e(14).11("34")==="1q"||e(14).11("34")==="1o"){6(s<0){s=-(f.g.1F()-v+(33/2-.5)*b+1J)}19 6(s>0){s=v+(33/2+.5)*b+1J}}19{s=s*f.g.1A}6(m===-1||o==="1G"){16 w=1}19{16 E=f.g.1L.11("6u")?1b(f.g.1L.11("6u")):f.o.8Z;16 w=m*E}6(e(14).11("2z")==="1G"){16 S=f.1y.7j;16 x=f.1y.4F;16 T=f.1y.4z}19{16 S=f.o.7j;16 x=f.o.4F;16 T=f.o.4z}16 N=e(14).11("5O")?1b(e(14).11("5O")):S;16 C=e(14).11("4O")?1b(e(14).11("4O")):x;16 k=e(14).11("4Q")?e(14).11("4Q"):T;6(t){N=0;C=t}6(e(14).11("7d")){2w(e(14).11("7d"))}16 L={2b:"2K"};16 A=e(14);16 O={3f:u,4E:5r,4B:5p,7m:5n,7h:5j,5o:3a,5m:33,x:-i*w,y:-s*w,1M:N/1P,3R:n(k),8L:18(){A.1a(L)}};6(o=="3B"||!o&&r==="3B"||e(14).11("aY")!=="1h"&&e(14).11("2z")==="1G"){O["2N"]=0;L["2N"]=e(14).11("75")}6(e(14).11("3L")){e(14).11("3L").7X()}36.8Q(e(14)[0],{8K:c,8O:h});e(14).11("3L",36.2f(e(14)[0],C/1P,O))})};16 x=18(){f.g.1u.1M(d+g).4g({1d:f.g.1z(),1e:f.g.1F()},y,b)};16 T=18(){6(f.g.3b){d=0}6(1Y f.o.9w==="18"){f.o.9w(f.g,d+g)}f.g.1u.17(\' > *[1t*="12-l"]\').1O(18(){6(!e(14).11("2z")){f.5L(e(14))}6(e(14).11("2z")==="1G"){16 t="1G"}19{16 t=e(14).11("3C")?e(14).11("3C"):p}16 r,i;2q(t){1l"1m":r=-f.g.1z();i=0;1j;1l"1D":r=f.g.1z();i=0;1j;1l"1q":i=-f.g.1F();r=0;1j;1l"1o":i=f.g.1F();r=0;1j;1l"3B":i=0;r=0;1j;1l"1G":6(e(14).11("5b")){6(e(14).11("5b")==="1m"){r=-f.g.1z()}19 6(e(14).11("5b")==="1D"){r=f.g.1z()}19{r=1b(e(14).11("5b"))}}19{r=f.1y.9k}6(e(14).11("54")){6(e(14).11("54")==="1q"){i=-f.g.1F()}19 6(e(14).11("54")==="1o"){i=f.g.1F()}19{i=1b(e(14).11("54"))}}19{i=f.1y.bH}1j}16 s=7Z=7W=73=82=81=51=52="1Q";s=e(14).11("8S")?e(14).11("8S"):f.1y.ab;7Z=e(14).11("9p")?e(14).11("9p"):f.1y.9J;7W=e(14).11("9o")?e(14).11("9o"):f.1y.9B;73=e(14).11("87")?e(14).11("87"):f.1y.9O;82=e(14).11("9e")?e(14).11("9e"):f.1y.9S;81=e(14).11("9j")?e(14).11("9j"):f.1y.9L;6(73===1){51=e(14).11("9n")?e(14).11("9n"):f.1y.9N;52=e(14).11("9l")?e(14).11("9l"):f.1y.9U}19{51=52=73}16 o=e(14).11("a8")?e(14).11("a8").1E(" "):f.1y.9D;24(16 u=0;u<o.1k;u++){6(o[u].1i("%")===-1&&o[u].1i("1m")!==-1&&o[u].1i("1D")!==-1&&o[u].1i("1q")!==-1&&o[u].1i("1o")!==-1){o[u]=""+1b(o[u])*f.g.1A+"1I"}}16 a=o.92(" ");16 l=e(14).11("ax")?e(14).11("ax"):f.1y.9F;16 c=1b(e(14).1a("1m"));16 h=1b(e(14).1a("1q"));16 d=1b(e(14).1f("1t").1E("12-l")[1]);6(e(14)[0].1N.1d.1i("%")!==-1){e(14).1a({1d:f.g.1z()/1J*1b(e(14)[0].1N.1d)})}16 v=e(14).3t()>e(14).3u()?e(14).3t():e(14).3u();16 m=1b(s)===0?e(14).3t():v;16 g=1b(s)===0?e(14).3u():v;6(d===-1&&t!=="1G"||e(14).11("5b")==="1m"||e(14).11("5b")==="1D"){6(r<0){r=-(c+(51/2+.5)*m+1J)}19 6(r>0){r=f.g.1z()-c+(51/2-.5)*m+1J}}19{r=r*f.g.1A}6(d===-1&&t!=="1G"||e(14).11("54")==="1q"||e(14).11("54")==="1o"){6(i<0){i=-(h+(52/2+.5)*g+1J)}19 6(i>0){i=f.g.1F()-h+(52/2-.5)*g+1J}}19{i=i*f.g.1A}6(d===-1||t==="1G"){16 y=1}19{16 b=f.g.1u.11("bI")?1b(f.g.1u.11("bI")):f.o.b5;16 y=d*b}6(e(14).11("2z")==="1G"){16 w=f.1y.5Y;16 E=f.1y.5F;16 S=f.1y.5x}19{16 w=f.o.5Y;16 E=f.o.5F;16 S=f.o.5x}16 x=e(14).11("5c")?1b(e(14).11("5c")):w;16 T=e(14).11("5N")?1b(e(14).11("5N")):E;16 N=e(14).11("5R")?e(14).11("5R"):S;16 C=e(14);16 k=18(){6(f.o.8W==1c){C.17(".12-2J, 3P, 6Z").2l()}6(C.11("5E")>0){C.11("7d",2e(18(){f.8Y(C)},C.11("5E")))}};e(14).1a({3l:0,3I:0});16 L={5o:51,5m:52,7m:82,7h:81,3f:s,4E:7Z,4B:7W,2b:"2V",x:r*y,y:i*y};16 A={3f:0,4E:0,4B:0,7m:0,7h:0,5o:1,5m:1,3R:n(N),1M:x/1P,x:0,y:0,8L:18(){k()}};6(t.1i("3B")!=-1||e(14).11("f1")!=="1h"&&e(14).11("2z")==="1G"){L["2N"]=0;A["2N"]=e(14).11("75")}6(e(14).11("3L")){e(14).11("3L").7X()}36.8Q(e(14)[0],{8O:l,8K:a});e(14).11("3L",36.77(e(14)[0],T/1P,L,A))})};16 N=18(){6(i(e(u))&&(f.g.1u.11("5f")||f.g.1u.11("63"))){6(f.g.1u.11("5f")&&f.g.1u.11("63")){16 t=1C.27(1C.2g()*2);16 n=[["3d",f.g.1u.11("5f")],["bs",f.g.1u.11("63")]];k(n[t][0],n[t][1])}19 6(f.g.1u.11("5f")){k("3d",f.g.1u.11("5f"))}19{k("bs",f.g.1u.11("63"))}}19{6(f.g.1u.11("5y")&&f.g.1u.11("5z")){16 t=1C.27(1C.2g()*2);16 n=[["2d",f.g.1u.11("5y")],["bo",f.g.1u.11("5z")]];k(n[t][0],n[t][1])}19 6(f.g.1u.11("5y")){k("2d",f.g.1u.11("5y"))}19 6(f.g.1u.11("5z")){k("bo",f.g.1u.11("5z"))}19{k("2d","1")}}};16 C=18(){6(i(e(u))&&5u.1i("3d")!=-1){k("3d",5u.1E(":")[1])}19{6(5u.1i("3d")!=-1){k("2d","4P")}19{k("2d",5u.1E(":")[1])}}};16 k=18(e,t){16 n=e.1i("eZ")==-1?f.t:f.ct;16 r="3d",i,s;6(e.1i("2d")!=-1){r="2d"}6(t.1i("4j")!=-1){s=n["t"+r].1k-1;i="4j"}19 6(t.1i("4P")!=-1){s=1C.27(1C.2g()*o(n["t"+r]));i="2g bh 4P"}19{16 u=t.1E(",");16 a=u.1k;s=1b(u[1C.27(1C.2g()*a)])-1;i="2g bh f0"}L(r,n["t"+r][s])};16 L=18(t,i){16 o=e(u).17(".12-28");16 a=f.g.1L.17(\'*[1t*="12-l"]\').1k>0?1P:0;16 l=i.7g.21().1i("f5")==-1?1h:1c;16 c=i.7g.21().1i("f6")==-1?1h:1c;16 h=1Y i.4p;16 p=1Y i.4o;2q(h){1l"3S":h=i.4p;1j;1l"4w":h=1C.27(1C.2g()*(1b(i.4p.1E(",")[1])-1b(i.4p.1E(",")[0])+1))+1b(i.4p.1E(",")[0]);1j;bj:h=1C.27(1C.2g()*(i.4p[1]-i.4p[0]+1))+i.4p[0];1j}2q(p){1l"3S":p=i.4o;1j;1l"4w":p=1C.27(1C.2g()*(1b(i.4o.1E(",")[1])-1b(i.4o.1E(",")[0])+1))+1b(i.4o.1E(",")[0]);1j;bj:p=1C.27(1C.2g()*(i.4o[1]-i.4o[0]+1))+i.4o[0];1j}6(f.g.9C()==1c&&f.o.97==1c||f.g.2n&&f.o.9a==1c){6(h>=15){h=7}19 6(h>=5){h=4}19 6(h>=4){h=3}19 6(h>2){h=2}6(p>=15){p=7}19 6(p>=5){p=4}19 6(p>=4){p=3}19 6(p>2){p=2}6(p>2&&h>2){p=2;6(h>4){h=4}}}16 d=e(u).17(".12-28").1d()/h;16 v=e(u).17(".12-28").1e()/p;6(!f.g.2s){f.g.2s=e("<1n>").1r("12-1y-2p").1r("12-4q-2K").1a({1d:o.1d(),1e:o.1e()}).7e(o)}19{f.g.2s.1x(1c,1c).5t().1a({1K:"2j",1d:o.1d(),1e:o.1e()})}16 m=o.1d()-1C.27(d)*h;16 g=o.1e()-1C.27(v)*p;16 y=[];y.bu=18(){16 e=14.1k,t,n,r;6(e==0)1U 1h;aa(--e){t=1C.27(1C.2g()*(e+1));n=14[e];r=14[t];14[e]=r;14[t]=n}1U 14};24(16 b=0;b<h*p;b++){y.8B(b)}2q(i.3X.fa){1l"66":y.66();1j;1l"bd-8A":y=s(p,h,"8A");1j;1l"bd-66":y=s(p,h,"66");1j;1l"2g":y.bu();1j}16 w=f.g.1L.17(".12-bg");16 x=f.g.1u.17(".12-bg");6(w.1k==0&&x.1k==0){t="2d";i=e.4D(1c,{},f.t["f9"][0]);i.1B.2m=1;i.3X.1M=0}6(t=="3d"){f.g.3b=(h*p-1)*i.3X.1M;16 N=0;6(i.2P&&i.2P.2m){N+=i.2P.2m}6(i.2c&&i.2c.2m){N+=i.2c.2m}6(i.2u&&i.2u.2m){N+=i.2u.2m}f.g.3b+=N;16 C=0;6(i.2P&&i.2P.1M){C+=i.2P.1M}6(i.2c&&i.2c.1M){C+=i.2c.1M}6(i.2u&&i.2u.1M){C+=i.2u.1M}f.g.3b+=C}19{f.g.3b=(h*p-1)*i.3X.1M+i.1B.2m;f.g.5h=e("<1n>").1r("12-f7").1v(f.g.2s);f.g.7w=e("<1n>").1r("12-f8").1v(f.g.2s)}16 k=f.g.2i;24(16 L=0;L<h*p;L++){16 A=L%h==0?m:0;16 O=L>(p-1)*h-1?g:0;16 M=e("<1n>").1r("12-1y-3X").1a({1d:1C.27(d)+A,1e:1C.27(v)+O}).1v(f.g.2s);16 55,D;6(t=="3d"){M.1r("12-3d-2p");16 P=1C.27(d)+A;16 H=1C.27(v)+O;16 B;6(i.2c.5S=="aC"){6(1C.4m(i.2c.1B.3m)>90&&i.3X.bE!="bD"){B=1C.27(P/7)+A}19{B=P}}19{6(1C.4m(i.2c.1B.2Y)>90&&i.3X.bE!="bD"){B=1C.27(H/7)+O}19{B=H}}16 j=P/2;16 F=H/2;16 I=B/2;16 q=18(t,n,r,i,s,o,u,a,f){e("<1n>").1r(t).1a({1d:r,1e:i,3V:"5T("+s+"1I, "+o+"1I, "+u+"1I) 2Y("+a+"3J) 3m("+f+"3J) 6b(69) 4x(1, 1, 1)","-o-3V":"5T("+s+"1I, "+o+"1I, "+u+"1I) 2Y("+a+"3J) 3m("+f+"3J) 6b(69) 4x(1, 1, 1)","-ag-3V":"5T("+s+"1I, "+o+"1I, "+u+"1I) 2Y("+a+"3J) 3m("+f+"3J) 6b(69) 4x(1, 1, 1)","-af-3V":"5T("+s+"1I, "+o+"1I, "+u+"1I) 2Y("+a+"3J) 3m("+f+"3J) 6b(69) 4x(1, 1, 1)","-67-3V":"5T("+s+"1I, "+o+"1I, "+u+"1I) 2Y("+a+"3J) 3m("+f+"3J) 6b(69) 4x(1, 1, 1)"}).1v(n)};q("12-3d-3O",M,0,0,0,0,-I,0,0);16 R=0;16 U=0;16 z=0;6(i.2c.5S=="dU"&&1C.4m(i.2c.1B.2Y)>90){q("12-3d-5B",M.17(".12-3d-3O"),P,H,-j,-F,-I,7l,0)}19{q("12-3d-5B",M.17(".12-3d-3O"),P,H,-j,-F,-I,0,7l)}q("12-3d-1o",M.17(".12-3d-3O"),P,B,-j,F-I,0,-90,0);q("12-3d-1q",M.17(".12-3d-3O"),P,B,-j,-F-I,0,90,0);q("12-3d-aB",M.17(".12-3d-3O"),P,H,-j,-F,I,0,0);q("12-3d-1m",M.17(".12-3d-3O"),B,H,-j-I,-F,0,0,-90);q("12-3d-1D",M.17(".12-3d-3O"),B,H,j-I,-F,0,0,90);55=M.17(".12-3d-aB");6(i.2c.5S=="aC"){6(1C.4m(i.2c.1B.3m)>90){D=M.17(".12-3d-5B")}19{D=M.17(".12-3d-1m, .12-3d-1D")}}19{6(1C.4m(i.2c.1B.2Y)>90){D=M.17(".12-3d-5B")}19{D=M.17(".12-3d-1q, .12-3d-1o")}}16 W=y[L]*i.3X.1M;16 X=f.g.2s.17(".12-3d-2p:eq("+L+") .12-3d-3O");16 V=1G aD;6(i.2P&&i.2P.1B){i.2P.1B.1M=i.2P.1B.1M?(i.2P.1B.1M+W)/1P:W/1P;V.2f(X[0],i.2P.2m/1P,r(i.2P.1B,i.2P.4t))}19{i.2c.1B.1M=i.2c.1B.1M?(i.2c.1B.1M+W)/1P:W/1P}V.2f(X[0],i.2c.2m/1P,r(i.2c.1B,i.2c.4t));6(i.2u){6(!i.2u.1B){i.2u.1B={}}V.2f(X[0],i.2u.2m/1P,r(i.2u.1B,i.2u.4t,"2u"))}}19{16 J=2S=2O=2M="1W";16 K=72=1;6(i.1B.5S=="2g"){16 Q=["1q","1o","1D","1m"];16 G=Q[1C.27(1C.2g()*Q.1k)]}19{16 G=i.1B.5S}6(i.7g.21().1i("b6")!=-1&&L%2==0){6(k=="1S"){k="1V"}19{k="1S"}}6(k=="1S"){2q(G){1l"1q":G="1o";1j;1l"1o":G="1q";1j;1l"1m":G="1D";1j;1l"1D":G="1m";1j;1l"7A":G="7H";1j;1l"7G":G="7F";1j;1l"7F":G="7G";1j;1l"7H":G="7A";1j}}2q(G){1l"1q":J=2O=-M.1e();2S=2M=0;1j;1l"1o":J=2O=M.1e();2S=2M=0;1j;1l"1m":J=2O=0;2S=2M=-M.1d();1j;1l"1D":J=2O=0;2S=2M=M.1d();1j;1l"7A":J=M.1e();2O=0;2S=M.1d();2M=0;1j;1l"7G":J=M.1e();2O=0;2S=-M.1d();2M=0;1j;1l"7F":J=-M.1e();2O=0;2S=M.1d();2M=0;1j;1l"7H":J=-M.1e();2O=0;2S=-M.1d();2M=0;1j}f.g.5l=i.1B.5A?i.1B.5A:1;6(l==1c&&f.g.5l!=1){J=J/2;2O=2O/2;2S=2S/2;2M=2M/2}2q(i.1B.4R){1l"3B":J=2O=2S=2M=0;K=0;72=1;1j;1l"dF":K=0;72=1;6(f.g.5l==1){2O=2M=0}1j}6((i.1B.3y||i.1B.2Y||i.1B.3m||f.g.5l!=1)&&!f.g.2n&&i.1B.4R!="1p"){M.1a({4q:"2V"})}19{M.1a({4q:"2K"})}6(l==1c){f.g.5h.1a({4q:"2V"})}19{f.g.5h.1a({4q:"2K"})}6(c==1c||i.1B.4R=="1p"||l==1c){16 Y=M.1v(f.g.5h);16 Z=M.7y().1v(f.g.7w);55=e("<1n>").1r("12-dD").1v(Y)}19{16 Z=M.1v(f.g.7w)}D=e("<1n>").1r("12-dK").1v(Z).1a({1q:-J,1m:-2S,dN:"2j",2N:K});16 et=y[L]*i.3X.1M;16 4X=i.1B.3y?i.1B.3y:0;16 76=i.1B.2Y?i.1B.2Y:0;16 71=i.1B.3m?i.1B.3m:0;6(k=="1S"){4X=-4X;76=-76;71=-71}36.77(D[0],i.1B.2m/1P,{3f:4X,4E:76,4B:71,5A:f.g.5l},{1M:et/1P,1q:0,1m:0,2N:72,3f:0,4E:0,4B:0,5A:1,3R:n(i.1B.4t)});6(c==1c&&(x.1k<1||x.1k>0&&(x.1f("1g").21().1i("4G")!=-1||x.1d()<f.g.1z()||x.1e()<f.g.1F()))){36.2f(55[0],i.1B.2m/1P,{1M:et/1P,2N:0,3R:n(i.1B.4t)})}6((i.1B.4R=="1p"||l==1c)&&i.7g.21().1i("b6")==-1){16 4h=0;6(4X!=0){4h=-4X}36.2f(55[0],i.1B.2m/1P,{1M:et/1P,1q:2O,1m:2M,3f:4h,5A:f.g.5l,2N:K,3R:n(i.1B.4t)})}}6(w.1k){6(t=="3d"||t=="2d"&&(c==1c||i.1B.4R=="1p"||l==1c)){55.3Q(e("<1Z>").1f("1g",w.1f("1g")).1a({1d:w[0].1N.1d,1e:w[0].1N.1e,3l:3j(w.1a("3i-1m"))-3j(M.3r().1m),3I:3j(w.1a("3i-1q"))-3j(M.3r().1q)}))}19 6(f.g.5h.38().1k==0){f.g.5h.3Q(e("<1Z>").1f("1g",w.1f("1g")).1a({1d:w[0].1N.1d,1e:w[0].1N.1e,3l:3j(w.1a("3i-1m")),3I:3j(w.1a("3i-1q"))}))}}6(x.1k){D.3Q(e("<1Z>").1f("1g",x.1f("1g")).1a({1d:x[0].1N.1d,1e:x[0].1N.1e,3l:3j(x.1a("3i-1m"))-3j(M.3r().1m),3I:3j(x.1a("3i-1q"))-3j(M.3r().1q)}))}}16 58=f.g.1L;16 2D=f.g.1u;2e(18(){58.17(".12-bg").1a({2b:"2K"})},50);2D.17(".12-bg").1a({2b:"2K"});f.g.2s.31("12-4q-2K");S(a);2e(18(){58.1a({1d:0})},a);16 7S=1b(2D.11("6m"))?1b(2D.11("6m")):0;16 at=f.g.3b+7S>0?f.g.3b+7S:0;2e(18(){6(f.g.30==1c){f.g.2s.5t();58.31("12-1T");f.3D(2D,18(){f.g.30=1h})}T();6(2D.17(".12-bg").1k<1||2D.17(".12-bg").1k>0&&2D.17(".12-bg").1f("1g").21().1i("4G")!=-1){f.g.2s.1M(aQ).3M(2E,18(){e(14).5t().5V()})}2D.1a({1d:f.g.1z(),1e:f.g.1F()})},at);6(f.g.3b<1P){f.g.3b=1P}2e(18(){f.g.2s.1r("12-4q-2K");2D.1r("12-1T");6(2D.17(".12-bg").1k){2D.17(".12-bg").1a({1K:"1Q",2b:"2V"});6(f.g.2n){2D.17(".12-bg").1a("1K","2j");2e(18(){E()},46)}19{2D.17(".12-bg").2G(46,18(){E()})}}19{E()}},f.g.3b)};16 A=(f.g.1u.11("5f")||f.g.1u.11("5y"))&&f.t||(f.g.1u.11("63")||f.g.1u.11("5z"))&&f.ct?"1G":"5M";6(!f.g.1u.11("2z")){f.5L(f.g.1u)}6(f.g.1u.11("2z")==="1G"){A="1G"}6(f.o.8M){A="aW"}6(f.o.4A&&!f.g.aS){6(f.g.2x==1){16 d=0;f.o.8F(f.g)}19{16 O=1b(f.g.1u.11("6m"))?1b(f.g.1u.11("6m")):0;16 M=A=="1G"?0:v;f.g.96=2e(18(){E()},M+1C.4m(O))}f.g.3b=1c;T();f.g.1u.1a({1d:f.g.1z(),1e:f.g.1F()});6(!f.g.2n){f.g.1u.17(".12-bg").1a({1K:"1Q"}).2G(46)}f.g.aS=1c;f.g.4a=1h}19{2q(A){1l"5M":f.g.3b=1h;6(f.g.2s){f.g.2s.5t()}w();S();x();T();1j;1l"1G":6(1Y 5u!="3E"){C()}19{N()}1j;1l"aW":L(f.o.8M.4R,f.o.8M.ej);1j}}};f.5L=18(e){16 t=e.11("12")||!e.11("12")&&!e.11("5w")&&!e.11("3C")&&!e.11("5G")&&!e.11("5c")&&!e.11("5O")&&!e.11("5N")&&!e.11("4O")&&!e.11("5E")&&!e.11("5R")&&!e.11("4Q")&&!e.11("87")&&!e.11("5I")&&!e.11("8S")&&!e.11("5H")?"1G":"5M";e.11("2z",t)};f.8Y=18(e){6(!e.11("2z")){f.5L(e)}16 t=f.g.1L;6(f.g.2i!="1S"&&f.g.1u){t=f.g.1u}16 r=t.11("3C")?t.11("3C"):f.o.8H;16 i=f.g.8J[f.g.2i][r];16 s=e.11("3C")?e.11("3C"):i;16 o,u;2q(s){1l"1m":o=-f.g.1z();u=0;1j;1l"1D":o=f.g.1z();u=0;1j;1l"1q":u=-f.g.1F();o=0;1j;1l"1o":u=f.g.1F();o=0;1j;1l"3B":u=0;o=0;1j}6(e.11("2z")==="1G"){16 a="1G"}19{16 a=e.11("5G")?e.11("5G"):1h}2q(a){1l"1m":o=f.g.1z();u=0;1j;1l"1D":o=-f.g.1z();u=0;1j;1l"1q":u=f.g.1F();o=0;1j;1l"1o":u=-f.g.1F();o=0;1j;1l"3B":u=0;o=0;1j;1l"1G":6(e.11("3c")){6(e.11("3c")==="1m"){o=f.g.1z()}19 6(e.11("3c")==="1D"){o=-f.g.1z()}19{o=-1b(e.11("3c"))}}19{o=-f.1y.8m}6(e.11("34")){6(e.11("34")==="1q"){u=f.g.1F()}19 6(e.11("34")==="1o"){u=-f.g.1F()}19{u=-1b(e.11("34"))}}19{u=-f.1y.8I}1j}16 l=5r=5p=4s=5n=5j=3a=33="1Q";l=e.11("5H")?e.11("5H"):f.1y.89;5r=e.11("6N")?e.11("6N"):f.1y.88;5p=e.11("6O")?e.11("6O"):f.1y.8c;4s=e.11("5I")?e.11("5I"):f.1y.8f;5n=e.11("6A")?e.11("6A"):f.1y.8C;5j=e.11("6P")?e.11("6P"):f.1y.8D;6(4s===1){3a=e.11("6Q")?e.11("6Q"):f.1y.8p;33=e.11("6X")?e.11("6X"):f.1y.8q}19{3a=33=4s}16 c=e.11("6n")?e.11("6n").1E(" "):f.1y.8E;24(16 h=0;h<c.1k;h++){6(c[h].1i("%")===-1&&c[h].1i("1m")!==-1&&c[h].1i("1D")!==-1&&c[h].1i("1q")!==-1&&c[h].1i("1o")!==-1){c[h]=""+1b(c[h])*f.g.1A+"1I"}}16 p=c.92(" ");16 d=e.11("6p")?e.11("6p"):f.1y.8G;16 v=1b(e.1a("1m"));16 m=1b(e.1a("1q"));16 g=1b(e.1f("1t").1E("12-l")[1]);16 y=e.3t()>e.3u()?e.3t():e.3u();16 b=1b(l)===0?e.3t():y;16 w=1b(l)===0?e.3u():y;6(g===-1&&a!=="1G"||e.11("3c")==="1m"||e.11("3c")==="1D"){6(o<0){o=-(f.g.1z()-v+(3a/2-.5)*b+1J)}19 6(o>0){o=v+(3a/2+.5)*b+1J}}19{o=o*f.g.1A}6(g===-1&&a!=="1G"||e.11("34")==="1q"||e.11("34")==="1o"){6(u<0){u=-(f.g.1F()-m+(33/2-.5)*w+1J)}19 6(u>0){u=m+(33/2+.5)*w+1J}}19{u=u*f.g.1A}6(g===-1||a==="1G"){16 E=1}19{16 S=f.g.1L.11("6u")?1b(f.g.1L.11("6u")):f.o.8Z;16 E=g*S}6(e.11("2z")==="1G"){16 x=f.1y.4F;16 T=f.1y.4z}19{16 x=f.o.4F;16 T=f.o.4z}16 N=e.11("4O")?1b(e.11("4O")):x;16 C=e.11("4Q")?e.11("4Q"):T;16 k={2b:"2K"};16 L={3f:l,4E:5r,4B:5p,7m:5n,7h:5j,5o:3a,5m:33,x:-o*E,y:-u*E,3R:n(C),8L:18(){e.1a(k)}};6(a=="3B"||!a&&s=="3B"||e.11("aY")!=="1h"&&e.11("2z")==="1G"){L["2N"]=0;k["2N"]=e.11("75")}36.8Q(e[0],{8O:d,8K:p});36.2f(e[0],N/1P,L)};f.4W=18(){f.d={3Z:e("<1n>"),aT:18(t){e("<b3>"+t+"</b3>").1v(f.d.3Z)},as:18(){e("<4y>").1v(f.d.3Z)},aU:18(t){e("<4y><3w>"+t+"</3w></4y>").1v(f.d.3Z)},aL:18(t){e("<3w>"+t+"</3w>").1v(f.d.3Z.17("4y:4j"))},8h:18(t){e("<4y>").1v(f.d.3Z.17("4y:4j 3w:4j"))},aF:18(e){f.d.3Z.17("4y:4j 3w:4j").1R(18(){e.1a({3s:"ef ee ed",3I:1b(e.1a("3i-1q"))-2,3l:1b(e.1a("3i-1m"))-2})},18(){e.1a({3s:"a2",3I:1b(e.1a("3i-1q"))+2,3l:1b(e.1a("3i-1m"))+2})})},5V:18(){6(!e("3T").17(".12-4W-4L").1k){6(!f.d.bz){f.d.aT("ec ew");f.d.as();24(16 t 3H f.o){f.d.aL(t+": <1X>"+f.o[t]+"</1X>")}f.d.aT("2A e6");f.d.aU("er 2Q ev eo: <1X>"+e(u).17(".12-1p").1k+"</1X>");e(u).17(\'.12-28 .12-1p, .12-28 *[1t*="12-l"]\').1O(18(){6(e(14).3k("12-1p")){f.d.aU("<1X>al "+(e(14).5D()+1)+"</1X>");f.d.8h();f.d.aL("<1X>al "+(e(14).5D()+1)+" az:</1X><br><br>")}19{f.d.aU("&7o;&7o;&7o;&7o;ei ( "+e(14).aH("b9")+" )");f.d.aF(e(14));f.d.8h();f.d.aL("<1X>"+e(14).aH("b9")+" 5q az:</1X><br><br>");f.d.aL("en / 1t: <1X>"+e(14).1f("1t")+"</1X>")}e.1O(e(14).11(),18(e,t){f.d.aL(e+": <1X>"+t+"</1X>")})});f.d.bz=1c}16 n=e("<1n>").1r("12-4W-4L").1a({3r:"dG",bK:"dQ",1q:"6g",1D:"6g",1d:"dR",2a:"dZ",3e:"e0","3s-e1":"6g",1e:e(2o).1e()-60,2N:0,bc:70}).1v(e("3T")).1a({bc:0,2N:.9}).2l(18(t){6(t.bn&&t.ba){e(14).6q()}});16 r=e("<1n>").1a({1d:"1J%",1e:"1J%",4q:"1W"}).1v(n);16 i=e("<1n>").1a({1d:"1J%"}).1v(r).3Q(f.d.3Z)}},e2:18(){e("3T").17(".12-4W-4L").6q()}};e(u).2l(18(e){6(e.bn&&e.ba){f.d.5V()}})};f.2Z()};16 n=18(e){16 t;6(e.21().1i("ai")!==-1||e.21().1i("8z")!==-1){t=8y.8t}19 6(e.21().1i("8s")!==-1){16 n=e.21().1E("8s")[1];t=2o[n.8v(0).8x()+n.8w(1)].bF}19 6(e.21().1i("8r")!==-1){16 n=e.21().1E("8r")[1];t=2o[n.8v(0).8x()+n.8w(1)].bB}19 6(e.21().1i("8u")!==-1){16 n=e.21().1E("8u")[1];t=2o[n.8v(0).8x()+n.8w(1)].9x}1U t};16 r=18(e,t,r,i){6(1Y t==="3E"){16 t="dT"}16 s={};6(e.3y!==i){s.3f=e.3y}6(e.3m!==i){s.4B=e.3m}6(e.2Y!==i){s.4E=e.2Y}6(r==="2u"){s.5o=s.5m=s.9y=1}19 6(e.4x!==i){s.5o=s.5m=s.9y=e.4x}6(e.1M){s.1M=r==="2u"?e.1M/1P:e.1M}s.3R=n(t);1U s};16 i=18(t){16 n=e("<1n>"),r=1h,i=1h,s=["dS","ex","eX","eR","dI"];3V=["eM","eW","dX","em","ek"];24(16 o=s.1k-1;o>=0;o--){r=r?r:n[0].1N[s[o]]!=3E}24(16 o=3V.1k-1;o>=0;o--){n.1a("3V-1N","94-3d");i=i?i:n[0].1N[3V[o]]=="94-3d"}6(r&&n[0].1N[s[4]]!=3E){n.1f("4J","12-ea").1v(t);r=n[0].eb===3&&n[0].e5===9;n.6q()}1U r&&i};16 s=18(e,t,n){16 r=[];6(n=="8A"){24(16 i=0;i<e;i++){24(16 s=0;s<t;s++){r.8B(i+s*e)}}}19{24(16 i=e-1;i>-1;i--){24(16 s=t-1;s>-1;s--){r.8B(i+s*e)}}}1U r};16 o=18(e){16 t=0;24(16 n 3H e){6(e.e7(n)){++t}}1U t};16 u=18(){a0=18(e){e=e.21();16 t=/(a6)[ \\/]([\\w.]+)/.5Z(e)||/(67)[ \\/]([\\w.]+)/.5Z(e)||/(e9)(?:.*2B|)[ \\/]([\\w.]+)/.5Z(e)||/(9T) ([\\w.]+)/.5Z(e)||e.1i("ah")<0&&/(eg)(?:.*? eh:([\\w.]+)|)/.5Z(e)||[];1U{8a:t[1]||"",2B:t[2]||"0"}};16 e=a0(42.40),t={};6(e.8a){t[e.8a]=1c;t.2B=e.2B}6(t.a6){t.67=1c}19 6(t.67){t.es=1c}1U t};eu=18(e,t){16 n=["67","ep","af","ag","o",""];16 r=0,i,s;aa(r<n.1k&&!e[i]){i=t;6(n[r]==""){i=i.9V(0,1).21()+i.9V(1)}i=n[r]+i;s=1Y e[i];6(s!="3E"){n=[n[r]];1U s=="18"?e[i]():e[i]}r++}};t.6E={2B:"5.0.2",9C:18(){6(42.40.3N(/e4/i)||42.40.3N(/e3/i)||42.40.3N(/dM/i)||42.40.3N(/dL/i)||42.40.3N(/dO/i)||42.40.3N(/dP/i)||42.40.3N(/dJ dE/i)){1U 1c}19{1U 1h}},dH:18(e){6(e.1a("2a-1o")=="1W"||e.1a("2a-1o")=="1Q"||e.1a("2a-1o")==0||e.1a("2a-1o")=="a2"){1U 1c}19{1U 1h}},2n:u().9T&&u().2B<9?1c:1h,3h:1h,53:1h,2v:1h,2X:1h,2x:6J,2i:"1V",4e:6J,1z:6J,1F:6J,8J:{1S:{1m:"1D",1D:"1m",1q:"1o",1o:"1q"},1V:{1m:"1m",1D:"1D",1q:"1q",1o:"1o"}},v:{d:46,fo:8U,fi:46}};t.9h={9k:80,bH:0,5F:1P,5Y:0,5x:"7t",2G:1c,ab:0,9J:0,9B:0,9O:1,9N:1,9U:1,9S:0,9L:0,9D:["50%","50%","0"],9F:46,8m:-80,8I:0,4F:ad,dY:0,4z:"7t",3M:1c,89:0,88:0,8c:0,8f:1,8p:1,8q:1,8C:0,8D:0,8E:["50%","50%","0"],8G:46};t.95={7i:ak};t.93={bf:1c,4K:0,7a:0,78:1c,bl:1c,32:1,4A:1c,4f:0,7u:1c,8b:1h,7p:1h,2r:"dV",3v:"/5K/dW/",8g:"8o",6z:1h,8k:1c,6s:1c,6y:1c,ar:1c,b2:1c,b0:1c,6U:1h,b4:1h,aN:1c,3o:"1R",6K:"60%",8T:1J,5s:60,8X:35,8V:1J,8W:1c,2C:"1W",8P:"fb.f2",44:1c,41:1c,1w:1h,9P:"1m: -6g; 1q: -6g;",8n:1h,a9:"fp",97:1c,9a:1c,9b:18(e){},9v:18(e){},bA:18(e){},bp:18(e){},bk:18(e){},8F:18(e){},79:18(e){},7s:18(e){},7i:ak,8H:"1D",b5:.45,8Z:.45,5F:1P,4F:1P,5x:"7t",4z:"7t",5Y:0,7j:0}})(3x)',62,957,'||||||if|||||||||||||||||||||||||||||||||||||||||||||||||||||||||data|ls||this||var|find|function|else|css|parseInt|true|width|height|attr|src|false|indexOf|break|length|case|left|div|bottom|slide|top|addClass|nav|class|nextLayer|appendTo|yourLogo|stop|lt|sliderWidth|ratio|transition|Math|right|split|sliderHeight|new|thumbnail|px|100|display|curLayer|delay|style|each|1e3|none|hover|prev|active|return|next|auto|strong|typeof|img|the|toLowerCase|start|curLayerIndex|for||parent|floor|inner|iframe|padding|visibility|animation||setTimeout|to|random|href|prevNext|block|replace|click|duration|ie78|window|container|switch|skin|ltContainer|originalAutoSlideshow|after|autoSlideshow|clearTimeout|layersNum|sliderOriginalWidth|transitiontype|LayerSlider|version|autoPauseSlideshow|ot|300|wrapper|fadeIn|not|image|videopreview|hidden|cttl|L2|opacity|T2|before|of|layerSlider|L1|originalWidth|originalHeight|visible|loaded|isAnimating|rotateX|load|resize|removeClass|firstSlide|curSubScaleY|offsetyout||TweenLite||children||curSubScaleX|totalDuration|offsetxout||background|rotation|is|paused|margin|parseFloat|hasClass|marginLeft|rotateY|bottomWrapper|thumbnailNavigation|circleTimer|preloaded|position|border|outerWidth|outerHeight|skinsPath|li|jQuery|rotate|barTimer|preventDefault|fade|slidedirection|makeResponsive|undefined|autoplay|param|in|marginTop|deg|curSlideTime|tr|fadeOut|match|box|video|append|ease|number|body|videoSrc|transform|or|tile|error|history|userAgent|lazyLoad|navigator|thumbsWrapper|imgPreload||500|shadow|pausedSlideTime|originalLeft|isLoading|startSlideTime|nextLoop|responsiveMode|slideTimer|loops|animate|it|sliderOriginalHeight|last|thumb|tn|abs|originalTop|rows|cols|overflow|on|curSubScale|easing|slidebuttons|always|string|scale3d|ul|easingOut|animateFirstSlide|rotationY|change|extend|rotationX|durationOut|png|location|and|id|responsiveUnder|console|html|like|durationout|all|easingout|type|Please|your|youtu|WordPress|debug|tt|parallaxlevel|fisrtSlide||nextSubScaleX|nextSubScaleY|pausedByVideo|offsetyin|_|touches|Date|st|init|getTime|offsetxin|delayin|rel|offset|transition3d|shadowImg|curTiles|thumbnails|curSubSkewY|vimeo|scale2D|scaleY|curSubSkewX|scaleX|curSubRotateY|layer|curSubRotateX|tnHeight|empty|LSCustomTransition|touchEndX|slidedelay|easingIn|transition2d|customtransition2d|scale|back|span|index|showuntil|durationIn|slideoutdirection|rotateout|scaleout|trim|layerslider|transitionType|old|durationin|delayout|document|removeAttr|easingin|direction|translate3d|www|show|originalBottom|originalRight|delayIn|exec||player|timer|customtransition3d|url|nextLayerIndex|reverse|webkit|com|0deg|closest|rotateZ|pause|wp|vpcontainer|fullwidth|10px|originalBorderRight|URL|nothumb|seems|nIt|timeshift|transformoriginout|URLs|perspectiveout|remove|pointing|navStartStop|wrong|parallaxout|cannot|originalBorderTop|originalBorderBottom|navButtons|globalBGImage|skewxout|oT|oB|fadeTo|global|clicked|oR|bind|touchStartX|null|tnContainerWidth|ontouchstart|layerMarginLeft|rotatexout|rotateyout|skewyout|scalexout|nextLayerTop|nextLayerLeft|layerMarginTop|hoverBottomNav|curLayerTop|images|scaleyout|check|audio|150|rt|O2|nextSubScale|link|originalOpacity|nt|fromTo|autoStart|cbPrev|layersContainer|videoTimer|used|showUntilTimer|prependTo|videoDuration|name|skewY|slideDelay|delayOut|originalBorderLeft|180|skewX|slider|nbsp|randomSlideshow|http|showShadow|cbNext|easeInOutQuint|forceLoopNum|youtube|nextTiles|bottomNavSizeHelper|clone|resizeShadow|topleft|resizeYourLogo|dequeue|resizeSlider|sliderOriginalWidthRU|bottomleft|topright|bottomright|nextLayerWidth|pageX|sublayerContainer|linkto|250|originalPaddingLeft|originalPaddingRight|embed|originalPaddingBottom|originalPaddingTop|ut|nextLayerBottom|nextLayerRight|curLayerRight|nextSubRotateY|kill|scrollThumb|nextSubRotateX||nextSubSkewY|nextSubSkewX|nextLayerHeight|forceHideControls|curLayerBottom|changeThumb|scalein|rotateXOut|rotateOut|browser|twoWaySlideshow|rotateYOut|content|script|scaleOut|globalBGColor|aUU|wpVersion|jquery|navPrevNext|lswpVersion|offsetXOut|yourLogoLink|transparent|scaleXOut|scaleYOut|easeout|easeinout|easeNone|easein|charAt|slice|toUpperCase|Linear|linear|forward|push|skewXOut|skewYOut|transformOriginOut|cbAnimStop|perspectiveOut|slideDirection|offsetYOut|slideDirections|transformOrigin|onComplete|slideTransition|text|transformPerspective|youtubePreview|set|cssContainer|rotatein|tnWidth|750|tnInactiveOpacity|autoPlayVideos|tnActiveOpacity|sublayerShowUntil|parallaxOut||fired|join|options|preserve|slideTransitions|t5|optimizeForMobile|line|parallaxStartX|optimizeForIE78|cbInit|half|animating|skewxin|borderTopWidth|borderBottomWidth|layerTransitions|borderRightWidth|skewyin|offsetXIn|scaleyin|borderLeftWidth|scalexin|rotateyin|rotatexin|oldjquery|shadowBtmMod|lsShowNotice|pageY|object|cbStart|cbTimeLineStart|easeIn|scaleZ|parallaxStartY|substring|rotateYIn|isMobile|transformOriginIn|resizeThumb|perspectiveIn|gi|showSlider|off|rotateXIn|library|skewYIn|issue|scaleXIn|scaleIn|yourLogoStyle|It|looks|skewXIn|msie|scaleYIn|substr|helper|originalLineHeight|stopLayer|originalFontSize|uaMatch|font|0px|size|alert|lastIndexOf|chrome|update|transformoriginin|yourLogoTarget|while|rotateIn|loading|400|plugin|moz|ms|compatible|swing|t3|4e3|SLIDE|t4||t2|t1|above|keybNav|aeU||forcestop|entry|JS|perspectivein|vi|properties|getJSON|front|horizontal|TimelineLite|ieEasing||group|prop|2e3|add|firstLayer||curSkin|showCircleTimer|hash|originalEvent|350|clientX|firstSlideAnimated|||disabled|forced|which|fadeout|head|hoverPrevNext|with|touchNav|h1|showBarTimer|parallaxIn|mirror|createStyleSheet|api|tagName|altKey|sides|marginRight|col||responsive||from|layerSliderTransitions|default|cbAnimStart|pauseOnHover|relative|shiftKey|custom2d|cbPause|norotate||custom3d|layerSliderCustomTransitions|randomize|playvideo|callback|hider||putData|cbStop|easeOut|mousemove|large|depth|easeInOut|initialized|offsetYIn|parallaxin|json|zIndex|meta|thumbnail_large|touchmove|copy|causing|touchstart|mouseleave|area|gif|page|blank|below|problems|touchscroll|main|important|backgroundColor|mouseenter|sideleft|keydown|admin|navigate|sideright|sliders|absolute|can|information|yt|seconds|force|media|WP|Loading|feeds|videos|alt|controls|v2|wrapAll|bar|circle|enableCSS3|ended|play||another|currentTime|enabled|without|gdata|were|round|Neither|mode|that|animateFirstLayer|insertAfter|gpuhack|insertBefore|deeplink|Fallback|Trying|mistyped|file|Possibilities|pointer|cursor|stylesheet|already|Skin|forceStop|continue|newer|least|requires|using|multiple|backgroundImage|use|Important|higher|are|you|extra|option|includes|Put|loads|within|Settings|Advanced|Troubleshooting|static|indicator|about|more|read|You|updating|clicking|title||exclam|here|wordpress|faq|browsers|older|because|Updater|center|IE|kreaturamedia|support|theme|enable|curtile|Phone|mixed|fixed|isHideOn3D|WebkitPerspective|Windows|nexttile|iPad|iPhone|dispay|iPod|BlackBerry|10000000000|300px|perspective|easeInOutQuart|vertical|v5|skins|msTransformStyle|showUntil|20px|black|radius|hide|webOS|Android|offsetLeft|Content|hasOwnProperty|touchend|opera|test3d|offsetHeight|Init|red|solid|2px|mozilla|rv|Layer|obj|WebkitTransformStyle||MozTransformStyle|distance|found|khtml||Number|safari||lsPrefixes|slides|code|OPerspective|cubic|Cubic|Quart|quart|Quad|quint|Quint|Expo|circ|expo|Sine|sine|quad|restart|transformStyle|textDecoration|target|bock|yourlogo|MozPerspective|outline|resume|onReverseComplete|queue|OTransformStyle|msPerspective|Circ|custom|specified|fadein|jpg|layerMarginBottom|filter|carousel|crossfad|curtiles|nexttiles|t2d|sequence|maxresdefault|layerMarginRight|changeTimer|bounce|Back|Elastic|elastic||Bounce|450|log|600|||_self|Trident'.split('|'),0,{}))
;
// Magnific Popup v0.9.9 by Dmitry Semenov
// http://bit.ly/magnific-popup#build=inline+image+ajax+iframe+gallery+retina+imagezoom+fastclick

(function(a){var b="Close",c="BeforeClose",d="AfterClose",e="BeforeAppend",f="MarkupParse",g="Open",h="Change",i="mfp",j="."+i,k="mfp-ready",l="mfp-removing",m="mfp-prevent-close",n,o=function(){},p=!!window.jQuery,q,r=a(window),s,t,u,v,w,x=function(a,b){n.ev.on(i+a+j,b)},y=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},z=function(b,c){n.ev.triggerHandler(i+b,c),n.st.callbacks&&(b=b.charAt(0).toLowerCase()+b.slice(1),n.st.callbacks[b]&&n.st.callbacks[b].apply(n,a.isArray(c)?c:[c]))},A=function(b){if(b!==w||!n.currTemplate.closeBtn)n.currTemplate.closeBtn=a(n.st.closeMarkup.replace("%title%",n.st.tClose)),w=b;return n.currTemplate.closeBtn},B=function(){a.magnificPopup.instance||(n=new o,n.init(),a.magnificPopup.instance=n)},C=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(a.transition!==undefined)return!0;while(b.length)if(b.pop()+"Transition"in a)return!0;return!1};o.prototype={constructor:o,init:function(){var b=navigator.appVersion;n.isIE7=b.indexOf("MSIE 7.")!==-1,n.isIE8=b.indexOf("MSIE 8.")!==-1,n.isLowIE=n.isIE7||n.isIE8,n.isAndroid=/android/gi.test(b),n.isIOS=/iphone|ipad|ipod/gi.test(b),n.supportsTransition=C(),n.probablyMobile=n.isAndroid||n.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),t=a(document),n.popupsCache={}},open:function(b){s||(s=a(document.body));var c;if(b.isObj===!1){n.items=b.items.toArray(),n.index=0;var d=b.items,e;for(c=0;c<d.length;c++){e=d[c],e.parsed&&(e=e.el[0]);if(e===b.el[0]){n.index=c;break}}}else n.items=a.isArray(b.items)?b.items:[b.items],n.index=b.index||0;if(n.isOpen){n.updateItemHTML();return}n.types=[],v="",b.mainEl&&b.mainEl.length?n.ev=b.mainEl.eq(0):n.ev=t,b.key?(n.popupsCache[b.key]||(n.popupsCache[b.key]={}),n.currTemplate=n.popupsCache[b.key]):n.currTemplate={},n.st=a.extend(!0,{},a.magnificPopup.defaults,b),n.fixedContentPos=n.st.fixedContentPos==="auto"?!n.probablyMobile:n.st.fixedContentPos,n.st.modal&&(n.st.closeOnContentClick=!1,n.st.closeOnBgClick=!1,n.st.showCloseBtn=!1,n.st.enableEscapeKey=!1),n.bgOverlay||(n.bgOverlay=y("bg").on("click"+j,function(){n.close()}),n.wrap=y("wrap").attr("tabindex",-1).on("click"+j,function(a){n._checkIfClose(a.target)&&n.close()}),n.container=y("container",n.wrap)),n.contentContainer=y("content"),n.st.preloader&&(n.preloader=y("preloader",n.container,n.st.tLoading));var h=a.magnificPopup.modules;for(c=0;c<h.length;c++){var i=h[c];i=i.charAt(0).toUpperCase()+i.slice(1),n["init"+i].call(n)}z("BeforeOpen"),n.st.showCloseBtn&&(n.st.closeBtnInside?(x(f,function(a,b,c,d){c.close_replaceWith=A(d.type)}),v+=" mfp-close-btn-in"):n.wrap.append(A())),n.st.alignTop&&(v+=" mfp-align-top"),n.fixedContentPos?n.wrap.css({overflow:n.st.overflowY,overflowX:"hidden",overflowY:n.st.overflowY}):n.wrap.css({top:r.scrollTop(),position:"absolute"}),(n.st.fixedBgPos===!1||n.st.fixedBgPos==="auto"&&!n.fixedContentPos)&&n.bgOverlay.css({height:t.height(),position:"absolute"}),n.st.enableEscapeKey&&t.on("keyup"+j,function(a){a.keyCode===27&&n.close()}),r.on("resize"+j,function(){n.updateSize()}),n.st.closeOnContentClick||(v+=" mfp-auto-cursor"),v&&n.wrap.addClass(v);var l=n.wH=r.height(),m={};if(n.fixedContentPos&&n._hasScrollBar(l)){var o=n._getScrollbarSize();o&&(m.marginRight=o)}n.fixedContentPos&&(n.isIE7?a("body, html").css("overflow","hidden"):m.overflow="hidden");var p=n.st.mainClass;return n.isIE7&&(p+=" mfp-ie7"),p&&n._addClassToMFP(p),n.updateItemHTML(),z("BuildControls"),a("html").css(m),n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo||s),n._lastFocusedEl=document.activeElement,setTimeout(function(){n.content?(n._addClassToMFP(k),n._setFocus()):n.bgOverlay.addClass(k),t.on("focusin"+j,n._onFocusIn)},16),n.isOpen=!0,n.updateSize(l),z(g),b},close:function(){if(!n.isOpen)return;z(c),n.isOpen=!1,n.st.removalDelay&&!n.isLowIE&&n.supportsTransition?(n._addClassToMFP(l),setTimeout(function(){n._close()},n.st.removalDelay)):n._close()},_close:function(){z(b);var c=l+" "+k+" ";n.bgOverlay.detach(),n.wrap.detach(),n.container.empty(),n.st.mainClass&&(c+=n.st.mainClass+" "),n._removeClassFromMFP(c);if(n.fixedContentPos){var e={marginRight:""};n.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}t.off("keyup"+j+" focusin"+j),n.ev.off(j),n.wrap.attr("class","mfp-wrap").removeAttr("style"),n.bgOverlay.attr("class","mfp-bg"),n.container.attr("class","mfp-container"),n.st.showCloseBtn&&(!n.st.closeBtnInside||n.currTemplate[n.currItem.type]===!0)&&n.currTemplate.closeBtn&&n.currTemplate.closeBtn.detach(),n._lastFocusedEl&&a(n._lastFocusedEl).focus(),n.currItem=null,n.content=null,n.currTemplate=null,n.prevHeight=0,z(d)},updateSize:function(a){if(n.isIOS){var b=document.documentElement.clientWidth/window.innerWidth,c=window.innerHeight*b;n.wrap.css("height",c),n.wH=c}else n.wH=a||r.height();n.fixedContentPos||n.wrap.css("height",n.wH),z("Resize")},updateItemHTML:function(){var b=n.items[n.index];n.contentContainer.detach(),n.content&&n.content.detach(),b.parsed||(b=n.parseEl(n.index));var c=b.type;z("BeforeChange",[n.currItem?n.currItem.type:"",c]),n.currItem=b;if(!n.currTemplate[c]){var d=n.st[c]?n.st[c].markup:!1;z("FirstMarkupParse",d),d?n.currTemplate[c]=a(d):n.currTemplate[c]=!0}u&&u!==b.type&&n.container.removeClass("mfp-"+u+"-holder");var e=n["get"+c.charAt(0).toUpperCase()+c.slice(1)](b,n.currTemplate[c]);n.appendContent(e,c),b.preloaded=!0,z(h,b),u=b.type,n.container.prepend(n.contentContainer),z("AfterChange")},appendContent:function(a,b){n.content=a,a?n.st.showCloseBtn&&n.st.closeBtnInside&&n.currTemplate[b]===!0?n.content.find(".mfp-close").length||n.content.append(A()):n.content=a:n.content="",z(e),n.container.addClass("mfp-"+b+"-holder"),n.contentContainer.append(n.content)},parseEl:function(b){var c=n.items[b],d;c.tagName?c={el:a(c)}:(d=c.type,c={data:c,src:c.src});if(c.el){var e=n.types;for(var f=0;f<e.length;f++)if(c.el.hasClass("mfp-"+e[f])){d=e[f];break}c.src=c.el.attr("data-mfp-src"),c.src||(c.src=c.el.attr("href"))}return c.type=d||n.st.type||"inline",c.index=b,c.parsed=!0,n.items[b]=c,z("ElementParse",c),n.items[b]},addGroup:function(a,b){var c=function(c){c.mfpEl=this,n._openClick(c,a,b)};b||(b={});var d="click.magnificPopup";b.mainEl=a,b.items?(b.isObj=!0,a.off(d).on(d,c)):(b.isObj=!1,b.delegate?a.off(d).on(d,b.delegate,c):(b.items=a,a.off(d).on(d,c)))},_openClick:function(b,c,d){var e=d.midClick!==undefined?d.midClick:a.magnificPopup.defaults.midClick;if(!e&&(b.which===2||b.ctrlKey||b.metaKey))return;var f=d.disableOn!==undefined?d.disableOn:a.magnificPopup.defaults.disableOn;if(f)if(a.isFunction(f)){if(!f.call(n))return!0}else if(r.width()<f)return!0;b.type&&(b.preventDefault(),n.isOpen&&b.stopPropagation()),d.el=a(b.mfpEl),d.delegate&&(d.items=c.find(d.delegate)),n.open(d)},updateStatus:function(a,b){if(n.preloader){q!==a&&n.container.removeClass("mfp-s-"+q),!b&&a==="loading"&&(b=n.st.tLoading);var c={status:a,text:b};z("UpdateStatus",c),a=c.status,b=c.text,n.preloader.html(b),n.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),n.container.addClass("mfp-s-"+a),q=a}},_checkIfClose:function(b){if(a(b).hasClass(m))return;var c=n.st.closeOnContentClick,d=n.st.closeOnBgClick;if(c&&d)return!0;if(!n.content||a(b).hasClass("mfp-close")||n.preloader&&b===n.preloader[0])return!0;if(b!==n.content[0]&&!a.contains(n.content[0],b)){if(d&&a.contains(document,b))return!0}else if(c)return!0;return!1},_addClassToMFP:function(a){n.bgOverlay.addClass(a),n.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),n.wrap.removeClass(a)},_hasScrollBar:function(a){return(n.isIE7?t.height():document.body.scrollHeight)>(a||r.height())},_setFocus:function(){(n.st.focus?n.content.find(n.st.focus).eq(0):n.wrap).focus()},_onFocusIn:function(b){if(b.target!==n.wrap[0]&&!a.contains(n.wrap[0],b.target))return n._setFocus(),!1},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),z(f,[b,c,d]),a.each(c,function(a,c){if(c===undefined||c===!1)return!0;e=a.split("_");if(e.length>1){var d=b.find(j+"-"+e[0]);if(d.length>0){var f=e[1];f==="replaceWith"?d[0]!==c[0]&&d.replaceWith(c):f==="img"?d.is("img")?d.attr("src",c):d.replaceWith('<img src="'+c+'" class="'+d.attr("class")+'" />'):d.attr(e[1],c)}}else b.find(j+"-"+a).html(c)})},_getScrollbarSize:function(){if(n.scrollbarSize===undefined){var a=document.createElement("div");a.id="mfp-sbm",a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),n.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return n.scrollbarSize}},a.magnificPopup={instance:null,proto:o.prototype,modules:[],open:function(b,c){return B(),b?b=a.extend(!0,{},b):b={},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},a.fn.magnificPopup=function(b){B();var c=a(this);if(typeof b=="string")if(b==="open"){var d,e=p?c.data("magnificPopup"):c[0].magnificPopup,f=parseInt(arguments[1],10)||0;e.items?d=e.items[f]:(d=c,e.delegate&&(d=d.find(e.delegate)),d=d.eq(f)),n._openClick({mfpEl:d},c,e)}else n.isOpen&&n[b].apply(n,Array.prototype.slice.call(arguments,1));else b=a.extend(!0,{},b),p?c.data("magnificPopup",b):c[0].magnificPopup=b,n.addGroup(c,b);return c};var D="inline",E,F,G,H=function(){G&&(F.after(G.addClass(E)).detach(),G=null)};a.magnificPopup.registerModule(D,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){n.types.push(D),x(b+"."+D,function(){H()})},getInline:function(b,c){H();if(b.src){var d=n.st.inline,e=a(b.src);if(e.length){var f=e[0].parentNode;f&&f.tagName&&(F||(E=d.hiddenClass,F=y(E),E="mfp-"+E),G=e.after(F).detach().removeClass(E)),n.updateStatus("ready")}else n.updateStatus("error",d.tNotFound),e=a("<div>");return b.inlineElement=e,e}return n.updateStatus("ready"),n._parseMarkup(c,{},b),c}}});var I="ajax",J,K=function(){J&&s.removeClass(J)},L=function(){K(),n.req&&n.req.abort()};a.magnificPopup.registerModule(I,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){n.types.push(I),J=n.st.ajax.cursor,x(b+"."+I,L),x("BeforeChange."+I,L)},getAjax:function(b){J&&s.addClass(J),n.updateStatus("loading");var c=a.extend({url:b.src,success:function(c,d,e){var f={data:c,xhr:e};z("ParseAjax",f),n.appendContent(a(f.data),I),b.finished=!0,K(),n._setFocus(),setTimeout(function(){n.wrap.addClass(k)},16),n.updateStatus("ready"),z("AjaxContentAdded")},error:function(){K(),b.finished=b.loadError=!0,n.updateStatus("error",n.st.ajax.tError.replace("%url%",b.src))}},n.st.ajax.settings);return n.req=a.ajax(c),""}}});var M,N=function(b){if(b.data&&b.data.title!==undefined)return b.data.title;var c=n.st.image.titleSrc;if(c){if(a.isFunction(c))return c.call(n,b);if(b.el)return b.el.attr(c)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var a=n.st.image,c=".image";n.types.push("image"),x(g+c,function(){n.currItem.type==="image"&&a.cursor&&s.addClass(a.cursor)}),x(b+c,function(){a.cursor&&s.removeClass(a.cursor),r.off("resize"+j)}),x("Resize"+c,n.resizeImage),n.isLowIE&&x("AfterChange",n.resizeImage)},resizeImage:function(){var a=n.currItem;if(!a||!a.img)return;if(n.st.image.verticalFit){var b=0;n.isLowIE&&(b=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",n.wH-b)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,M&&clearInterval(M),a.isCheckingImgSize=!1,z("ImageHasSize",a),a.imgHidden&&(n.content&&n.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var b=0,c=a.img[0],d=function(e){M&&clearInterval(M),M=setInterval(function(){if(c.naturalWidth>0){n._onImageHasSize(a);return}b>200&&clearInterval(M),b++,b===3?d(10):b===40?d(50):b===100&&d(500)},e)};d(1)},getImage:function(b,c){var d=0,e=function(){b&&(b.img[0].complete?(b.img.off(".mfploader"),b===n.currItem&&(n._onImageHasSize(b),n.updateStatus("ready")),b.hasSize=!0,b.loaded=!0,z("ImageLoadComplete")):(d++,d<200?setTimeout(e,100):f()))},f=function(){b&&(b.img.off(".mfploader"),b===n.currItem&&(n._onImageHasSize(b),n.updateStatus("error",g.tError.replace("%url%",b.src))),b.hasSize=!0,b.loaded=!0,b.loadError=!0)},g=n.st.image,h=c.find(".mfp-img");if(h.length){var i=document.createElement("img");i.className="mfp-img",b.img=a(i).on("load.mfploader",e).on("error.mfploader",f),i.src=b.src,h.is("img")&&(b.img=b.img.clone()),i=b.img[0],i.naturalWidth>0?b.hasSize=!0:i.width||(b.hasSize=!1)}return n._parseMarkup(c,{title:N(b),img_replaceWith:b.img},b),n.resizeImage(),b.hasSize?(M&&clearInterval(M),b.loadError?(c.addClass("mfp-loading"),n.updateStatus("error",g.tError.replace("%url%",b.src))):(c.removeClass("mfp-loading"),n.updateStatus("ready")),c):(n.updateStatus("loading"),b.loading=!0,b.hasSize||(b.imgHidden=!0,c.addClass("mfp-loading"),n.findImageSize(b)),c)}}});var O,P=function(){return O===undefined&&(O=document.createElement("p").style.MozTransform!==undefined),O};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a=n.st.zoom,d=".zoom",e;if(!a.enabled||!n.supportsTransition)return;var f=a.duration,g=function(b){var c=b.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+a.duration/1e3+"s "+a.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,c.css(e),c},h=function(){n.content.css("visibility","visible")},i,j;x("BuildControls"+d,function(){if(n._allowZoom()){clearTimeout(i),n.content.css("visibility","hidden"),e=n._getItemToZoom();if(!e){h();return}j=g(e),j.css(n._getOffset()),n.wrap.append(j),i=setTimeout(function(){j.css(n._getOffset(!0)),i=setTimeout(function(){h(),setTimeout(function(){j.remove(),e=j=null,z("ZoomAnimationEnded")},16)},f)},16)}}),x(c+d,function(){if(n._allowZoom()){clearTimeout(i),n.st.removalDelay=f;if(!e){e=n._getItemToZoom();if(!e)return;j=g(e)}j.css(n._getOffset(!0)),n.wrap.append(j),n.content.css("visibility","hidden"),setTimeout(function(){j.css(n._getOffset())},16)}}),x(b+d,function(){n._allowZoom()&&(h(),j&&j.remove(),e=null)})},_allowZoom:function(){return n.currItem.type==="image"},_getItemToZoom:function(){return n.currItem.hasSize?n.currItem.img:!1},_getOffset:function(b){var c;b?c=n.currItem.img:c=n.st.zoom.opener(n.currItem.el||n.currItem);var d=c.offset(),e=parseInt(c.css("padding-top"),10),f=parseInt(c.css("padding-bottom"),10);d.top-=a(window).scrollTop()-e;var g={width:c.width(),height:(p?c.innerHeight():c[0].offsetHeight)-f-e};return P()?g["-moz-transform"]=g.transform="translate("+d.left+"px,"+d.top+"px)":(g.left=d.left,g.top=d.top),g}}});var Q="iframe",R="//about:blank",S=function(a){if(n.currTemplate[Q]){var b=n.currTemplate[Q].find("iframe");b.length&&(a||(b[0].src=R),n.isIE8&&b.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(Q,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){n.types.push(Q),x("BeforeChange",function(a,b,c){b!==c&&(b===Q?S():c===Q&&S(!0))}),x(b+"."+Q,function(){S()})},getIframe:function(b,c){var d=b.src,e=n.st.iframe;a.each(e.patterns,function(){if(d.indexOf(this.index)>-1)return this.id&&(typeof this.id=="string"?d=d.substr(d.lastIndexOf(this.id)+this.id.length,d.length):d=this.id.call(this,d)),d=this.src.replace("%id%",d),!1});var f={};return e.srcAction&&(f[e.srcAction]=d),n._parseMarkup(c,f,b),n.updateStatus("ready"),c}}});var T=function(a){var b=n.items.length;return a>b-1?a-b:a<0?b+a:a},U=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=n.st.gallery,d=".mfp-gallery",e=Boolean(a.fn.mfpFastClick);n.direction=!0;if(!c||!c.enabled)return!1;v+=" mfp-gallery",x(g+d,function(){c.navigateByImgClick&&n.wrap.on("click"+d,".mfp-img",function(){if(n.items.length>1)return n.next(),!1}),t.on("keydown"+d,function(a){a.keyCode===37?n.prev():a.keyCode===39&&n.next()})}),x("UpdateStatus"+d,function(a,b){b.text&&(b.text=U(b.text,n.currItem.index,n.items.length))}),x(f+d,function(a,b,d,e){var f=n.items.length;d.counter=f>1?U(c.tCounter,e.index,f):""}),x("BuildControls"+d,function(){if(n.items.length>1&&c.arrows&&!n.arrowLeft){var b=c.arrowMarkup,d=n.arrowLeft=a(b.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(m),f=n.arrowRight=a(b.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(m),g=e?"mfpFastClick":"click";d[g](function(){n.prev()}),f[g](function(){n.next()}),n.isIE7&&(y("b",d[0],!1,!0),y("a",d[0],!1,!0),y("b",f[0],!1,!0),y("a",f[0],!1,!0)),n.container.append(d.add(f))}}),x(h+d,function(){n._preloadTimeout&&clearTimeout(n._preloadTimeout),n._preloadTimeout=setTimeout(function(){n.preloadNearbyImages(),n._preloadTimeout=null},16)}),x(b+d,function(){t.off(d),n.wrap.off("click"+d),n.arrowLeft&&e&&n.arrowLeft.add(n.arrowRight).destroyMfpFastClick(),n.arrowRight=n.arrowLeft=null})},next:function(){n.direction=!0,n.index=T(n.index+1),n.updateItemHTML()},prev:function(){n.direction=!1,n.index=T(n.index-1),n.updateItemHTML()},goTo:function(a){n.direction=a>=n.index,n.index=a,n.updateItemHTML()},preloadNearbyImages:function(){var a=n.st.gallery.preload,b=Math.min(a[0],n.items.length),c=Math.min(a[1],n.items.length),d;for(d=1;d<=(n.direction?c:b);d++)n._preloadItem(n.index+d);for(d=1;d<=(n.direction?b:c);d++)n._preloadItem(n.index-d)},_preloadItem:function(b){b=T(b);if(n.items[b].preloaded)return;var c=n.items[b];c.parsed||(c=n.parseEl(b)),z("LazyLoad",c),c.type==="image"&&(c.img=a('<img class="mfp-img" />').on("load.mfploader",function(){c.hasSize=!0}).on("error.mfploader",function(){c.hasSize=!0,c.loadError=!0,z("LazyLoadError",c)}).attr("src",c.src)),c.preloaded=!0}}});var V="retina";a.magnificPopup.registerModule(V,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=n.st.retina,b=a.ratio;b=isNaN(b)?b():b,b>1&&(x("ImageHasSize."+V,function(a,c){c.img.css({"max-width":c.img[0].naturalWidth/b,width:"100%"})}),x("ElementParse."+V,function(c,d){d.src=a.replaceSrc(d,b)}))}}}}),function(){var b=1e3,c="ontouchstart"in window,d=function(){r.off("touchmove"+f+" touchend"+f)},e="mfpFastClick",f="."+e;a.fn.mfpFastClick=function(e){return a(this).each(function(){var g=a(this),h;if(c){var i,j,k,l,m,n;g.on("touchstart"+f,function(a){l=!1,n=1,m=a.originalEvent?a.originalEvent.touches[0]:a.touches[0],j=m.clientX,k=m.clientY,r.on("touchmove"+f,function(a){m=a.originalEvent?a.originalEvent.touches:a.touches,n=m.length,m=m[0];if(Math.abs(m.clientX-j)>10||Math.abs(m.clientY-k)>10)l=!0,d()}).on("touchend"+f,function(a){d();if(l||n>1)return;h=!0,a.preventDefault(),clearTimeout(i),i=setTimeout(function(){h=!1},b),e()})})}g.on("click"+f,function(){h||e()})})},a.fn.destroyMfpFastClick=function(){a(this).off("touchstart"+f+" click"+f),c&&r.off("touchmove"+f+" touchend"+f)}}(),B()})(window.jQuery||window.Zepto)

/**
 * Module: rem - v1.2.2
 * Description: A polyfill to parse CSS links and rewrite pixel equivalents into head for non supporting browsers
 * Date Built: 2014-04-05
 * Copyright (c) 2014  | Chuck Carpenter <chuck.carpenter@me.com>,Lucas Serven <lserven@gmail.com>;
**/
!function(a){"use strict";var b=function(){var a=document.createElement("div");return a.style.cssText="font-size: 1rem;",/rem/.test(a.style.fontSize)},c=function(){for(var a=document.getElementsByTagName("link"),b=[],c=0;c<a.length;c++)"stylesheet"===a[c].rel.toLowerCase()&&null===a[c].getAttribute("data-norem")&&b.push(a[c].href);return b},d=function(){0===p.length&&(p=c());for(var a=0;a<p.length;a++)j(p[a],e,p[a],a)},e=function(a,b){if(t.push(a.responseText),u.push(b),u.length===p.length){for(var c=0;c<u.length;c++)f(t[c],u[c]);(p=q.slice(0)).length>0?(u=[],t=[],q=[],d()):g()}},f=function(a,b){for(var c,d=k(m(a)),e=/[\w\d\s\-\/\\\[\]:,.'"*()<>+~%#^$_=|@]+\{[\w\d\s\-\/\\%#:!;,.'"*()]+\d*\.?\d+rem[\w\d\s\-\/\\%#:!;,.'"*()]*\}/g,f=d.match(e),g=/\d*\.?\d+rem/g,h=d.match(g),i=/(.*\/)/,j=i.exec(b)[0],l=/@import (?:url\()?['"]?([^'\)"]*)['"]?\)?[^;]*/gm;null!==(c=l.exec(a));)q.push(j+c[1]);null!==f&&0!==f.length&&(r=r.concat(f),s=s.concat(h))},g=function(){for(var a=/[\w\d\s\-\/\\%#:,.'"*()]+\d*\.?\d+rem[\w\d\s\-\/\\%#:!,.'"*()]*[;}]/g,b=0;b<r.length;b++){o+=r[b].substr(0,r[b].indexOf("{")+1);for(var c=r[b].match(a),d=0;d<c.length;d++)o+=c[d],d===c.length-1&&"}"!==o[o.length-1]&&(o+="\n}")}h()},h=function(){for(var a=0;a<s.length;a++)v[a]=Math.round(parseInt(s[a].substr(0,s[a].length-3)*x,10))+"px";i()},i=function(){for(var a=0;a<v.length;a++)v[a]&&(o=o.replace(s[a],v[a]));var b=document.createElement("style");b.setAttribute("type","text/css"),b.id="remReplace",document.getElementsByTagName("head")[0].appendChild(b),b.styleSheet?b.styleSheet.cssText=o:b.appendChild(document.createTextNode(o))},j=function(b,c,d){try{var e=n();e.open("GET",b,!0),e.send();var f=function(){for(var a,b=3,c=document.createElement("div"),d=c.getElementsByTagName("i");c.innerHTML="<!--[if gt IE "+ ++b+"]><i></i><![endif]-->",d[0];);return b>4?b:a}();e.onreadystatechange=f>=7?function(){4===e.readyState&&c(e,d)}:new function(){4===e.readyState&&c(e,d)}}catch(g){if(a.XDomainRequest){var h=new XDomainRequest;h.open("get",b),h.onload=function(){c(h,d)},h.onerror=function(){return!1},h.send()}}},k=function(a){for(var b=a.search(/\/\*/),c=a.search(/\*\//);b>-1&&c>b;)a=a.substring(0,b)+a.substring(c+2),b=a.search(/\/\*/),c=a.search(/\*\//);return a},l=function(){return a.matchMedia||a.msMatchMedia?!0:!1},m=function(a){return l()||(a=a.replace(/@media[\s\S]*?\}\s*\}/,"")),a},n=function(){if(a.XMLHttpRequest)return new XMLHttpRequest;try{return new ActiveXObject("MSXML2.XMLHTTP")}catch(b){try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(c){}}};if(!b()){var o="",p=[],q=[],r=[],s=[],t=[],u=[],v=[],w=document.getElementsByTagName("body")[0],x="";w.currentStyle?x=w.currentStyle.fontSize.indexOf("px")>=0?w.currentStyle.fontSize.replace("px",""):w.currentStyle.fontSize.indexOf("em")>=0?w.currentStyle.fontSize.replace("em",""):w.currentStyle.fontSize.indexOf("pt")>=0?w.currentStyle.fontSize.replace("pt",""):w.currentStyle.fontSize.replace("%","")/100*16:a.getComputedStyle&&(x=document.defaultView.getComputedStyle(w,null).getPropertyValue("font-size").replace("px","")),d()}}(window);
$(document).foundation();

$(document).ready(function() {
  $(".paragraph_imagelink, .extrapicture_imagelink, .extrapicture_product_imagelink, .blurb_imagelink, .mainImgProduct").magnificPopup({type: 'image',  gallery:{ enabled:true }});

  $("form").validationEngine('attach', {promptPosition : "centerRight", scroll : true});

  $("#showlanguage").click(function(e) {
    e.preventDefault();
    $("#languagediv").toggle();
  });


  $("select#product_id").change(function(e) {
    e.preventDefault();
    var prodid = $(this).val();
    if(prodid != 0) {
      $("#price").html(subProductsPrice[prodid]);
    }
  });
  $("#productCartSubmit").click(function(e) {
    e.preventDefault();

    var prodid, qty;
    prodid = $("#product_id").val();
    qty = $("#quantitybox").val();

    $.post(
      "/ajax.php",
      { action: "addCart", product_id: prodid, quantity: qty, language: language },
      function(json) {
        if(json.status == 1) {

          $("#cartcontent").toggle();
          $("#cartcontent").html(json.cartinfo);
          $("#cartcontent").fadeIn(2500);

          $("#cartAdded").fadeIn(2500);
          $("#cartAdded").fadeOut(2500);
          $("#quantitybox").val("");

          $("#blinkEffekt").css("opacity", "1");
          $("#blinkEffekt").animate({opacity: 0},2000);

          if(json.noticemsg != 0) {
            alert(json.noticemsg);
          }
        } else {
          alert(json.errormsg);
        }
      },
      "json"
    );
  });
  $("#passwordreset_forgotButton").click(function(e) {
    var username = $("#passwordreset_email").val();

    $.ajax("/ajax.php",
      {
        type: "POST",
        data: { action: "forgotPassword", username: username, language: language },
        dataType: "json"
      }
    )
    .done(function(data) {
      if(data.status == 1) {
        $("#passwordreset_email").val("");
        alert(data.msg);
      } else {
        alert(data.errormsg);
      }
    });
  });

  $("#loginform").submit(function(e) {
    e.preventDefault();
    var username = $("#lemail").val(),
        password = $("#lpassword").val();

    $.ajax("/ajax.php",
      {
        type: "POST",
        data: { action: "loginUser", username: username, password: password, language: language },
        dataType: "json"
      }
    )
    .done(function(data) {
      if(data.status == 1) {
        $("#lemail").val("");
        $("#lpassword").val("");
        window.location.reload();
      } else {
        alert(data.errormsg);
      }
    });

  });



  $('input[id^="cartdelete_"]').click(function(e) {
    e.preventDefault();

    var id = $(this).attr("id").substring($(this).attr("id").indexOf("_")+1);

    var numberTest = new RegExp('^\\d+$');
    if(numberTest.test(id)) {
      $.post(
        "/ajax.php",
        { action: "removeCart", cartid: id, language: language },
        function(json) {
          if(json.status == 1) {
            $("#cartrow_"+id).hide();
            $("#cartqty_"+id).val(0);
            cartData[id].price = 0;

            var cartSum = new Number(0);
            $.each(cartData, function(i, item) {
              cartSum += parseFloat(item.price);
            });
            cartSum = parseFloat(cartSum);
            $("#cartsum").html(format("# ##0.00", cartSum.toFixed(2)));
          } else {
            alert(json.errormsg);
          }
        },
        "json"
      );

    }
  });

  $("div[id^='payment_']").click(function() {
    var payid = this.id.replace('payment_','');
    var totalToPay=new Number(0),paymentPrice=new Number(0),tax=new Array();
    tax[0] = new Number(0);
    tax[6] = new Number(0);
    tax[12] = new Number(0);
    tax[25] = new Number(0);
    $("#paymentoption_"+payid).prop("checked", true);

    $.post("/ajax.php", { action: "setPayment", payment: payid } );

    var deliveryid = $("input[name='delivery']:checked").val();
    totalToPay = parseFloat(totalToPay) + parseFloat(cartPrice);

    $.each(paymentOptions, function(i, item) {
      if(i == payid) {
        paymentPrice = parseFloat(item.price);
        $("#paymentsum").html(paymentPrice.toFixed(2));
        $("#paymentoptiontext").html(item.text);
        tax[item.tax] += parseFloat(item.taxvalue);
        totalToPay = parseFloat(totalToPay) + parseFloat(item.price) + parseFloat(item.taxvalue);
      }
    });

    $.each(deliveryOptions, function(i, item) {
      if(i == deliveryid) {
        tax[item.tax] += parseFloat(item.taxvalue);
        totalToPay = parseFloat(totalToPay) + parseFloat(item.price) + parseFloat(item.taxvalue);
      }
    });

    $.each(cartTax, function(i, item) {
      tax[i] += parseFloat(item);
      totalToPay += parseFloat(item);
    });

    $.each(tax, function(i, item) {
      $("#tax_"+i).html(format("# ##0.00", parseFloat(item).toFixed(2)));
    });

    $("#totaltopay").html(format("# ##0.00", totalToPay.toFixed(2)));

  });

  $("div[id^='delivery_']").click(function() {
    var deliveryid = this.id.replace('delivery_','');
    var totalToPay=new Number(0),deliveryPrice=new Number(0),tax=new Array();
    tax[0] = new Number(0);
    tax[6] = new Number(0);
    tax[12] = new Number(0);
    tax[25] = new Number(0);
    $("#deliveryoption_"+deliveryid).prop("checked", true);

    $.post("/ajax.php", { action: "setDelivery", delivery: deliveryid } );

    var paymentid = $("input[name='payment']:checked").val();
    totalToPay = parseFloat(totalToPay) + parseFloat(cartPrice);

    $.each(deliveryOptions, function(i, item) {
      if(i == deliveryid) {
        paymentPrice = parseFloat(item.price);
        $("#deliverysum").html(paymentPrice.toFixed(2));
        $("#deliveryoptiontext").html(item.text);
        tax[item.tax] += parseFloat(item.taxvalue);
        totalToPay = parseFloat(totalToPay) + parseFloat(item.price) + parseFloat(item.taxvalue);
      }
    });

    $.each(paymentOptions, function(i, item) {
      if(i == paymentid) {
        tax[item.tax] += parseFloat(item.taxvalue);
        totalToPay = parseFloat(totalToPay) + parseFloat(item.price) + parseFloat(item.taxvalue);
      }
    });

    $.each(cartTax, function(i, item) {
      tax[i] += parseFloat(item);
      totalToPay += parseFloat(item);
    });

    $.each(tax, function(i, item) {
      $("#tax_"+i).html(format("# ##0.00", parseFloat(item).toFixed(2)));
    });

    $("#totaltopay").html(format("# ##0.00", totalToPay.toFixed(2)));
  });


  $("#checkoutForm input[name='clienttype'], #registerForm input[name='clienttype'], #settingsForm input[name='clienttype']").change(function(e) {
    var clienttype = $("input[name='clienttype']:checked").val();
    if(clienttype == 1) {
      $("#companyrow").hide();
      $("#delivery_companyrow").hide();

      $("#company").removeClass();
      if($('#otherdelivery').is(':checked')) {
        $("#delivery_company").removeClass();
      }
    } else {
      $("#companyrow").show();
      $("#delivery_companyrow").show();

      $("#company").addClass("validate[required]");
      if($('#otherdelivery').is(':checked')) {
        $("#delivery_company").addClass("validate[required]");
      }
    }
  });

  $("#checkoutForm #otherdelivery, #registerForm #otherdelivery, #settingsForm #otherdelivery").change(function(e) {
    if($('#otherdelivery').is(':checked')) {
      $("#deliveryaddressoptions").show();

      var clienttype = $("input[name='clienttype']:checked").val();
      if(clienttype == 1) {
        $("#delivery_company").removeClass();
      } else {
        $("#delivery_company").addClass("validate[required]");
      }
      $("#delivery_firstname").addClass("validate[required]");
      $("#delivery_lastname").addClass("validate[required]");
      $("#delivery_address").addClass("validate[required]");
      $("#delivery_zipcode").addClass("validate[required]");
      $("#delivery_city").addClass("validate[required]");
    } else {
      $("#deliveryaddressoptions").hide();

      $("#delivery_company").removeClass();
      $("#delivery_firstname").removeClass();
      $("#delivery_lastname").removeClass();
      $("#delivery_address").removeClass();
      $("#delivery_zipcode").removeClass();
      $("#delivery_city").removeClass();
    }
  });

  $("#checkoutForm #displayCheckoutLogin").click(function(e) {
    e.preventDefault();
    $("#checkout_forgotpassword").slideUp();
    $("#checkout_login").slideToggle();
  });

  $("#checkoutForm #displayCheckoutForgotpassword").click(function(e) {
    e.preventDefault();
    $("#checkout_login").slideUp();
    $("#checkout_forgotpassword").slideToggle();
  });


  $("#checkout_login_button").click(function(e) {
    var username = $("#checkout_login_username").val(), password = $("#checkout_login_password").val();

    $.ajax("/ajax.php",
      {
        type: "POST",
        data: { action: "loginUser", username: username, password: password, language: language },
        dataType: "json"
      }
    )
    .done(function(data) {
      if(data.status == 1) {
        $("#checkout_login_username").val("");
        $("#checkout_login_password").val("");
        $("#checkout_login_link").hide();
        $("#checkout_login").hide();
        window.location.reload();
      } else {
        alert(data.errormsg);
      }
    });

  });

    $("#checkout_forgotpassword_button").click(function(e) {
    var username = $("#checkout_forgotpassword_username").val();

    $.ajax("/ajax.php",
      {
        type: "POST",
        data: { action: "forgotPassword", username: username, language: language },
        dataType: "json"
      }
    )
    .done(function(data) {
      if(data.status == 1) {
        $("#checkout_login_username").val("");
        $("#checkout_forgotpassword").hide();
        alert(data.msg);
      } else {
        alert(data.errormsg);
      }
    });

  });

      $('#layerslider').layerSlider({
      responsive: false,
      responsiveUnder: 768,
      layersContainer: 1280,
      hoverPrevNext: true,
      skin: 'fullwidth',
      autoPlayVideos: false,
      skinsPath: '../layerslider/skins/'
        });

  $('#iview').iView({
    fx: 'fade', // Specify sets like: 'left-curtain,fade,zigzag-top,strip-left-fade'
    easing: 'easeOutQuad', // for the complete list http://jqueryui.com/demos/effect/easing.html
    pauseTime: 5000,
    pauseOnHover: true,
    directionNavHoverOpacity: 0,
    timer: "Bar",
    timerDiameter: "10%",
    timerPadding: 0,
    timerStroke: 7,
    timerBarStroke: 0,
    timerColor: "#FFF",
    timerPosition: "middle"

  });

  var headerNav=$('.headernavcols');

  if(headerNav.length) {
    var menuBarElement=$('.menubar_full');
    var menuBarLogo=$('.headerlogocols');
    var contentStart=$('.content_full');
    var menuStart = headerNav.offset().top;
    var headerElement=$('.header_full');
    var menuFlag = $('.menuflag');

    $(window).scroll(function(){
      var windowpos = $(window).scrollTop();
      if(windowpos > menuStart) {
        menuBarElement.addClass('fixedheader');
        menuBarLogo.show();
        //headerNav.addClass('large-11 medium-11');
        //headerNav.removeClass('large-12 medium-12');
        menuFlag.show();
      }
      else {
        menuBarElement.removeClass('fixedheader');
        menuBarLogo.hide();
        //headerNav.removeClass('large-11 medium-11');
        //headerNav.addClass('large-12 medium-12');
        menuFlag.hide();
      }
    });
  }

});

var checkoutInit = false;
var buttonText = "";
function doPlaceOrder() {
  buttonText = $("#checkoutButton").html();

  if(checkoutInit === false) {
    $("#checkoutButton").html('Vg vänta, hantering pågår...');
    checkoutInit = true;
    var paymentOption = $("input[name='payment']:checked").val();
    var deliveryOption = $("input[name='delivery']:checked").val();

    if(paymentOption != undefined && paymentOption != null && paymentOption != NaN && deliveryOption != undefined && deliveryOption != null && deliveryOption != NaN) {
      if($("#checkoutForm").validationEngine('validate')) {
        $("#checkoutForm").submit();
      } else {
        $("#checkoutButton").html(buttonText);
        checkoutInit = false;
      }
    } else {
      alert("Du måste välja betalalternativ och leveransalternativ för att gå vidare!");
      $("#checkoutButton").html(buttonText);
      checkoutInit = false;
    }
  }
}

var registerInit = false;
function doRegister() {
  buttonText = $("#registerButton").html();

  if(registerInit === false) {
    $("#registerButton").html('Vg vänta, hantering pågår...');
    registerInit = true;
    if($("#registerForm").validationEngine('validate')) {
      $("#registerForm").submit();
    } else {
      registerInit = false;
      $("#registerButton").html(buttonText);
    }
  }
}

var resetPasswordInit = false;
function doResetPassword() {
  buttonText = $("#resetpasswordButton").html();

  if(resetPasswordInit === false) {
    $("#resetpasswordButton").html('Vg vänta, hantering pågår...');
    resetPasswordInit = true;
    if($("#resetpasswordForm").validationEngine('validate')) {
      $("#resetpasswordForm").submit();
    } else {
      resetPasswordInit = false;
      $("#resetpasswordButton").html(buttonText);
    }
  }
}

var updateSettingsInit = false;
function doUpdateSettings() {
  buttonText = $("#updateSettingsButton").html();

  if(updateSettingsInit === false) {
    $("#updateSettingsButton").html('Vg vänta, hantering pågår...');
    updateSettingsInit = true;
    if($("#settingsForm").validationEngine('validate')) {
      $("#settingsForm").submit();
    } else {
      updateSettingsInit = false;
      $("#updateSettingsButton").html(buttonText);
    }
  }
}
