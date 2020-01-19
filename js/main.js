!function(e){var t=function(c,D,u){"use strict";var k,H;if(function(){var e,t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};H=c.lazySizesConfig||c.lazysizesConfig||{};for(e in t)e in H||(H[e]=t[e])}(),!D||!D.getElementsByClassName)return{init:function(){},cfg:H,noSupport:!0};var O=D.documentElement,a=c.HTMLPictureElement,P="addEventListener",$="getAttribute",q=c[P].bind(c),I=c.setTimeout,U=c.requestAnimationFrame||I,s=c.requestIdleCallback,j=/^picture$/i,i=["load","error","lazyincluded","_lazyloaded"],n={},G=Array.prototype.forEach,J=function(e,t){return n[t]||(n[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),n[t].test(e[$]("class")||"")&&n[t]},K=function(e,t){J(e,t)||e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)},Q=function(e,t){var n;(n=J(e,t))&&e.setAttribute("class",(e[$]("class")||"").replace(n," "))},V=function(t,n,e){var a=e?P:"removeEventListener";e&&V(t,n),i.forEach(function(e){t[a](e,n)})},X=function(e,t,n,a,i){var r=D.createEvent("Event");return n||(n={}),n.instance=k,r.initEvent(t,!a,!i),r.detail=n,e.dispatchEvent(r),r},Y=function(e,t){var n;!a&&(n=c.picturefill||H.pf)?(t&&t.src&&!e[$]("srcset")&&e.setAttribute("srcset",t.src),n({reevaluate:!0,elements:[e]})):t&&t.src&&(e.src=t.src)},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},o=function(e,t,n){for(n=n||e.offsetWidth;n<H.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},ee=function(){var n,a,t=[],i=[],r=t,o=function(){var e=r;for(r=t.length?i:t,n=!0,a=!1;e.length;)e.shift()();n=!1},e=function(e,t){n&&!t?e.apply(this,arguments):(r.push(e),a||(a=!0,(D.hidden?I:U)(o)))};return e._lsFlush=o,e}(),te=function(n,e){return e?function(){ee(n)}:function(){var e=this,t=arguments;ee(function(){n.apply(e,t)})}},ne=function(e){var n,a=0,i=H.throttleDelay,r=H.ricTimeout,t=function(){n=!1,a=u.now(),e()},o=s&&r>49?function(){s(t,{timeout:r}),r!==H.ricTimeout&&(r=H.ricTimeout)}:te(function(){I(t)},!0);return function(e){var t;(e=!0===e)&&(r=33),n||(n=!0,t=i-(u.now()-a),t<0&&(t=0),e||t<9?o():I(o,t))}},ae=function(e){var t,n,a=99,i=function(){t=null,e()},r=function(){var e=u.now()-n;e<a?I(r,a-e):(s||i)(i)};return function(){n=u.now(),t||(t=I(r,a))}},e=function(){var m,y,d,h,e,z,v,g,p,C,b,A,r=/^img$/i,f=/^iframe$/i,E="onscroll"in c&&!/(gle|ing)bot/.test(navigator.userAgent),_=0,w=0,N=0,M=-1,x=function(e){N--,(!e||N<0||!e.target)&&(N=0)},W=function(e){return null==A&&(A="hidden"==Z(D.body,"visibility")),A||!("hidden"==Z(e.parentNode,"visibility")&&"hidden"==Z(e,"visibility"))},S=function(e,t){var n,a=e,i=W(e);for(g-=t,b+=t,p-=t,C+=t;i&&(a=a.offsetParent)&&a!=D.body&&a!=O;)(i=(Z(a,"opacity")||1)>0)&&"visible"!=Z(a,"overflow")&&(n=a.getBoundingClientRect(),i=C>n.left&&p<n.right&&b>n.top-1&&g<n.bottom+1);return i},t=function(){var e,t,n,a,i,r,o,s,l,c,u,d,f=k.elements;if((h=H.loadMode)&&N<8&&(e=f.length)){for(t=0,M++;t<e;t++)if(f[t]&&!f[t]._lazyRace)if(!E||k.prematureUnveil&&k.prematureUnveil(f[t]))R(f[t]);else if((s=f[t][$]("data-expand"))&&(r=1*s)||(r=w),c||(c=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand,k._defEx=c,u=c*H.expFactor,d=H.hFac,A=null,w<u&&N<1&&M>2&&h>2&&!D.hidden?(w=u,M=0):w=h>1&&M>1&&N<6?c:_),l!==r&&(z=innerWidth+r*d,v=innerHeight+r,o=-1*r,l=r),n=f[t].getBoundingClientRect(),(b=n.bottom)>=o&&(g=n.top)<=v&&(C=n.right)>=o*d&&(p=n.left)<=z&&(b||C||p||g)&&(H.loadHidden||W(f[t]))&&(y&&N<3&&!s&&(h<3||M<4)||S(f[t],r))){if(R(f[t]),i=!0,N>9)break}else!i&&y&&!a&&N<4&&M<4&&h>2&&(m[0]||H.preloadAfterLoad)&&(m[0]||!s&&(b||C||p||g||"auto"!=f[t][$](H.sizesAttr)))&&(a=m[0]||f[t]);a&&!i&&R(a)}},n=ne(t),B=function(e){var t=e.target;if(t._lazyCache)return void delete t._lazyCache;x(e),K(t,H.loadedClass),Q(t,H.loadingClass),V(t,L),X(t,"lazyloaded")},a=te(B),L=function(e){a({target:e.target})},T=function(t,n){try{t.contentWindow.location.replace(n)}catch(e){t.src=n}},F=function(e){var t,n=e[$](H.srcsetAttr);(t=H.customMedia[e[$]("data-media")||e[$]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},o=te(function(t,e,n,a,i){var r,o,s,l,c,u;(c=X(t,"lazybeforeunveil",e)).defaultPrevented||(a&&(n?K(t,H.autosizesClass):t.setAttribute("sizes",a)),o=t[$](H.srcsetAttr),r=t[$](H.srcAttr),i&&(s=t.parentNode,l=s&&j.test(s.nodeName||"")),u=e.firesLoad||"src"in t&&(o||r||l),c={target:t},K(t,H.loadingClass),u&&(clearTimeout(d),d=I(x,2500),V(t,L,!0)),l&&G.call(s.getElementsByTagName("source"),F),o?t.setAttribute("srcset",o):r&&!l&&(f.test(t.nodeName)?T(t,r):t.src=r),i&&(o||l)&&Y(t,{src:r})),t._lazyRace&&delete t._lazyRace,Q(t,H.lazyClass),ee(function(){var e=t.complete&&t.naturalWidth>1;u&&!e||(e&&K(t,"ls-is-cached"),B(c),t._lazyCache=!0,I(function(){"_lazyCache"in t&&delete t._lazyCache},9)),"lazy"==t.loading&&N--},!0)}),R=function(e){if(!e._lazyRace){var t,n=r.test(e.nodeName),a=n&&(e[$](H.sizesAttr)||e[$]("sizes")),i="auto"==a;(!i&&y||!n||!e[$]("src")&&!e.srcset||e.complete||J(e,H.errorClass)||!J(e,H.lazyClass))&&(t=X(e,"lazyunveilread").detail,i&&ie.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,N++,o(e,t,i,a,n))}},i=ae(function(){H.loadMode=3,n()}),s=function(){3==H.loadMode&&(H.loadMode=2),i()},l=function(){if(!y){if(u.now()-e<999)return void I(l,999);y=!0,H.loadMode=3,n(),q("scroll",s,!0)}};return{_:function(){e=u.now(),k.elements=D.getElementsByClassName(H.lazyClass),m=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass),q("scroll",n,!0),q("resize",n,!0),q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);t.length&&t.forEach&&U(function(){t.forEach(function(e){e.complete&&R(e)})})}}),c.MutationObserver?new MutationObserver(n).observe(O,{childList:!0,subtree:!0,attributes:!0}):(O[P]("DOMNodeInserted",n,!0),O[P]("DOMAttrModified",n,!0),setInterval(n,999)),q("hashchange",n,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,n,!0)}),/d$|^c/.test(D.readyState)?l():(q("load",l),D[P]("DOMContentLoaded",n),I(l,2e4)),k.elements.length?(t(),ee._lsFlush()):n()},checkElems:n,unveil:R,_aLSL:s}}(),ie=function(){var n,r=te(function(e,t,n,a){var i,r,o;if(e._lazysizesWidth=a,a+="px",e.setAttribute("sizes",a),j.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),r=0,o=i.length;r<o;r++)i[r].setAttribute("sizes",a);n.detail.dataAttr||Y(e,n.detail)}),a=function(e,t,n){var a,i=e.parentNode;i&&(n=o(e,i,n),a=X(e,"lazybeforesizes",{width:n,dataAttr:!!t}),a.defaultPrevented||(n=a.detail.width)&&n!==e._lazysizesWidth&&r(e,i,a,n))},e=function(){var e,t=n.length;if(t)for(e=0;e<t;e++)a(n[e])},t=ae(e);return{_:function(){n=D.getElementsByClassName(H.autosizesClass),q("resize",t)},checkElems:t,updateElem:a}}(),t=function(){!t.i&&D.getElementsByClassName&&(t.i=!0,ie._(),e._())};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:ie,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:o,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});