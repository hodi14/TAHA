(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{9917:function(e,t,n){"use strict";var r=n(3038),i=n(319);t.default=function(e){var t=e.src,n=e.sizes,i=e.unoptimized,s=void 0!==i&&i,u=e.priority,d=void 0!==u&&u,h=e.loading,m=e.lazyBoundary,b=void 0===m?"200px":m,v=e.className,y=e.quality,w=e.width,j=e.height,E=e.objectFit,S=e.objectPosition,k=e.onLoadingComplete,z=e.loader,_=void 0===z?O:z,L=e.placeholder,P=void 0===L?"empty":L,C=e.blurDataURL,I=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(e,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),R=n?"responsive":"intrinsic";"layout"in I&&(I.layout&&(R=I.layout),delete I.layout);var D="";if(function(e){return"object"===typeof e&&(g(e)||function(e){return void 0!==e.src}(e))}(t)){var N=g(t)?t.default:t;if(!N.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(N)));if(C=C||N.blurDataURL,D=N.src,(!R||"fill"!==R)&&(j=j||N.height,w=w||N.width,!N.height||!N.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(N)))}t="string"===typeof t?t:D;var M=A(w),U=A(j),q=A(y),B=!d&&("lazy"===h||"undefined"===typeof h);(t.startsWith("data:")||t.startsWith("blob:"))&&(s=!0,B=!1);p.has(t)&&(B=!1);0;var W,H,T,F=l.useIntersection({rootMargin:b,disabled:!B}),K=r(F,2),Q=K[0],X=K[1],J=!B||X,V={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:E,objectPosition:S},G="blur"===P?{filter:"blur(20px)",backgroundSize:E||"cover",backgroundImage:'url("'.concat(C,'")'),backgroundPosition:S||"0% 0%"}:{};if("fill"===R)W={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0};else if("undefined"!==typeof M&&"undefined"!==typeof U){var Y=U/M,Z=isNaN(Y)?"100%":"".concat(100*Y,"%");"responsive"===R?(W={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},H={display:"block",boxSizing:"border-box",paddingTop:Z}):"intrinsic"===R?(W={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},H={boxSizing:"border-box",display:"block",maxWidth:"100%"},T='<svg width="'.concat(M,'" height="').concat(U,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===R&&(W={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:M,height:U})}else 0;var $={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};J&&($=x({src:t,unoptimized:s,layout:R,width:M,quality:q,sizes:n,loader:_}));var ee=t;return o.default.createElement("div",{style:W},H?o.default.createElement("div",{style:H},T?o.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(c.toBase64(T))}):null):null,o.default.createElement("img",Object.assign({},I,$,{decoding:"async","data-nimg":R,className:v,ref:function(e){Q(e),function(e,t,n,r,i){if(!e)return;var o=function(){e.src.startsWith("data:")||("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if("blur"===r&&(e.style.filter="none",e.style.backgroundSize="none",e.style.backgroundImage="none"),p.add(t),i){var n=e.naturalWidth,o=e.naturalHeight;i({naturalWidth:n,naturalHeight:o})}}))};e.complete?o():e.onload=o}(e,ee,0,P,k)},style:f({},V,G)})),o.default.createElement("noscript",null,o.default.createElement("img",Object.assign({},I,x({src:t,unoptimized:s,layout:R,width:M,quality:q,sizes:n,loader:_}),{decoding:"async","data-nimg":R,style:V,className:v,loading:h||"lazy"}))),d?o.default.createElement(a.default,null,o.default.createElement("link",{key:"__nimg-"+$.src+$.srcSet+$.sizes,rel:"preload",as:"image",href:$.srcSet?void 0:$.src,imagesrcset:$.srcSet,imagesizes:$.sizes})):null)};var o=d(n(7294)),a=d(n(639)),c=n(8997),s=n(5809),l=n(7426);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return e&&e.__esModule?e:{default:e}}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}var p=new Set;var h=new Map([["default",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t).concat(E(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.root,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t).concat(o).concat(E(n))}],["akamai",function(e){var t=e.root,n=e.src,r=e.width;return"".concat(t).concat(E(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function g(e){return void 0!==e.default}var m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||s.imageConfigDefault,b=m.deviceSizes,v=m.imageSizes,y=m.loader,w=m.path,j=(m.domains,[].concat(i(b),i(v)));function x(e){var t=e.src,n=e.unoptimized,r=e.layout,o=e.width,a=e.quality,c=e.sizes,s=e.loader;if(n)return{src:t,srcSet:void 0,sizes:void 0};var l=function(e,t,n){if(n&&("fill"===t||"responsive"===t)){for(var r,o=/(^|\s)(1?\d?\d)vw/g,a=[];r=o.exec(n);r)a.push(parseInt(r[2]));if(a.length){var c=.01*Math.min.apply(Math,a);return{widths:j.filter((function(e){return e>=b[0]*c})),kind:"w"}}return{widths:j,kind:"w"}}return"number"!==typeof e||"fill"===t||"responsive"===t?{widths:b,kind:"w"}:{widths:i(new Set([e,2*e].map((function(e){return j.find((function(t){return t>=e}))||j[j.length-1]})))),kind:"x"}}(o,r,c),u=l.widths,d=l.kind,f=u.length-1;return{sizes:c||"w"!==d?c:"100vw",srcSet:u.map((function(e,n){return"".concat(s({src:t,quality:a,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", "),src:s({src:t,quality:a,width:u[f]})}}function A(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function O(e){var t=h.get(y);if(t)return t(f({root:w},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(s.VALID_LOADERS.join(", "),". Received: ").concat(y))}function E(e){return"/"===e[0]?e.slice(1):e}b.sort((function(e,t){return e-t})),j.sort((function(e,t){return e-t}))},2167:function(e,t,n){"use strict";var r=n(3038);t.default=void 0;var i,o=(i=n(7294))&&i.__esModule?i:{default:i},a=n(1063),c=n(4651),s=n(7426);var l={};function u(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(i?"%"+i:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,i=c.useRouter(),d=o.default.useMemo((function(){var t=a.resolveHref(i,e.href,!0),n=r(t,2),o=n[0],c=n[1];return{href:o,as:e.as?a.resolveHref(i,e.as):c||o}}),[i,e.href,e.as]),f=d.href,p=d.as,h=e.children,g=e.replace,m=e.shallow,b=e.scroll,v=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var y=(t=o.default.Children.only(h))&&"object"===typeof t&&t.ref,w=s.useIntersection({rootMargin:"200px"}),j=r(w,2),x=j[0],A=j[1],O=o.default.useCallback((function(e){x(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,x]);o.default.useEffect((function(){var e=A&&n&&a.isLocalURL(f),t="undefined"!==typeof v?v:i&&i.locale,r=l[f+"%"+p+(t?"%"+t:"")];e&&!r&&u(i,f,p,{locale:t})}),[p,f,A,v,n,i]);var E={ref:O,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[i?"replace":"push"](n,r,{shallow:o,locale:s,scroll:c}))}(e,i,f,p,g,m,b,v)},onMouseEnter:function(e){a.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(i,f,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var S="undefined"!==typeof v?v:i&&i.locale,k=i&&i.isLocaleDomain&&a.getDomainLocale(p,S,i&&i.locales,i&&i.domainLocales);E.href=k||a.addBasePath(a.addLocale(p,S,i&&i.defaultLocale))}return o.default.cloneElement(t,E)};t.default=d},7426:function(e,t,n){"use strict";var r=n(3038);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,s=i.useRef(),l=i.useState(!1),u=r(l,2),d=u[0],f=u[1],p=i.useCallback((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){a.delete(e),o.unobserve(e),0===a.size&&(o.disconnect(),c.delete(i))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,d]);return i.useEffect((function(){if(!a&&!d){var e=o.requestIdleCallback((function(){return f(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[d]),[p,d]};var i=n(7294),o=n(3447),a="undefined"!==typeof IntersectionObserver;var c=new Map},8997:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.toBase64=function(e){return window.btoa(e)}},5224:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:function(){return h}});n(1926),n(2591),n(690);var i=n(9008),o=n(1664),a=n(4298),c=n(5675),s={src:"/_next/static/image/public/assets/images/logo.a7a89e4456a74966bb29be1da66479fb.png",height:30,width:37,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAQAAABUDBdwAAAAW0lEQVR42jXKoQ3CUABF0YcAgcIgmIYgITiCxsACzEBCEGg0y3SFprJjtOL8Nmma605uLLUuMhcvxdnD22KCr+LkaWSxirXeUXRu07HF30ZxdXBP4qO209j7qQafW0CBm+AwqQAAAABJRU5ErkJggg=="},l=n(5893);function u(){return(0,l.jsxs)("header",{children:[(0,l.jsx)("div",{className:"logo",children:(0,l.jsx)(o.default,{href:"/",passHref:!0,children:(0,l.jsx)(c.default,{src:s,alt:"logo"})})}),(0,l.jsx)("div",{className:"items",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"home",children:(0,l.jsx)(o.default,{href:"/",children:"Home"})}),(0,l.jsx)("li",{className:"contact",children:(0,l.jsx)(o.default,{href:"/contact",children:"Contact"})}),(0,l.jsx)("li",{className:"about",children:(0,l.jsx)(o.default,{href:"/about",c:!0,children:"About"})}),(0,l.jsx)("li",{className:"projects",children:(0,l.jsx)(o.default,{href:"/projects",children:"Projects"})})]})}),(0,l.jsx)(a.default,{src:"/assets/js/header.js"})]})}function d(e){var t=e.children;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.default,{children:(0,l.jsx)("title",{children:" Taha EsmatTalab "})}),(0,l.jsx)(u,{}),(0,l.jsx)("main",{children:t})]})}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e){var t=e.Component,n=e.pageProps;return(0,l.jsx)(d,{children:(0,l.jsx)(t,p({},n))})}},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5224)}])},2591:function(){},1926:function(){},690:function(){},5809:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},9008:function(e,t,n){e.exports=n(639)},5675:function(e,t,n){e.exports=n(9917)},1664:function(e,t,n){e.exports=n(2167)},4298:function(e,t,n){e.exports=n(7926)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(4651)}));var n=e.O();_N_E=n}]);