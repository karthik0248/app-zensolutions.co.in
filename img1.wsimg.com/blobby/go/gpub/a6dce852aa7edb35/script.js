!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=8)}([function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t){e.exports=React},function(e,t){e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}},function(e,t){e.exports=Core},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},function(e,t,r){var n=r(10),o=r(11),i=r(12);e.exports=function(e,t){return n(e)||o(e,t)||i()}},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t){e.exports=PropTypes},function(e,t,r){"use strict";window.wsb=window.wsb||{},window.wsb.Gallery8=r(9)},function(e,t,r){"use strict";var n=r(0),o=r(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a,u=n(r(4)),l=n(r(5)),c=n(r(6)),s=o(r(1)),f=n(r(7)),d=r(3),p=r(13),h=n(r(15)),y=n(r(25));function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach(function(t){(0,c.default)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var v={box:{display:"flex",alignItems:"center",flexWrap:"nowrap",overflow:"auto",WebkitOverflowScrolling:"touch",scrollBehavior:"smooth"},indicator:(i={display:"none",height:"2px",width:"24px",background:"currentColor",margin:"4px",marginTop:"medium",borderRadius:"2px",cursor:"pointer",position:"relative"},(0,c.default)(i,":after",{content:"''",display:"block",position:"absolute",top:"-16px",bottom:"-16px",left:"0px",right:"0px",padding:"4px"}),(0,c.default)(i,"@md",{display:"block"}),i)},m=(a={flexShrink:0,width:"24px",minHeight:"1px"},(0,c.default)(a,"@md",{width:"calc((100vw / 2) - (984px / 2) + 24px)"}),(0,c.default)(a,"@lg",{width:"calc((100vw / 2) - (1160px / 2) + 24px)"}),(0,c.default)(a,"@xl",{width:"calc((100vw / 2) - (1280px / 2) + 24px)"}),a),O=function(e){var t=e.style;return s.default.createElement(d.UX2.Element.Block,{style:b(b({},m),t)})};function w(e){var t=e.galleryImages,r=e.uniformWidthOrHeight,n=(0,s.useRef)(null),o=(0,s.useState)(0),i=(0,l.default)(o,2),a=i[0],c=i[1],f=(0,s.useState)(0),y=(0,l.default)(f,2),g=y[0],m=y[1],w=(0,s.useCallback)(function(e){var t=e.target,r=t.scrollLeft,n=t.scrollWidth,o=t.offsetWidth,i=a-1,u=(n-o)/i,l=Math.min(Math.floor(r/u),i);g!==l&&m(l)},[a,g]);(0,s.useEffect)(function(){var e=function(){if(n.current){var e=Math.ceil(n.current.scrollWidth/n.current.offsetWidth);a!==e&&c(e)}},t=Array.from(document.querySelectorAll(".gallery-8-img"));return window.requestAnimationFrame(e),window.addEventListener("resize",e),t.forEach(function(t){t.addEventListener("load",e)}),function(){window.removeEventListener("resize",e),t.forEach(function(t){t.removeEventListener("load",e)})}},[t,a]);var E="uniformHeight"===r;return s.default.createElement(s.default.Fragment,null,s.default.createElement("div",{ref:n,onScroll:w,style:v.box},s.default.createElement(O,null),t.map(function(e,t){var r=e.image,n=e.caption;return s.default.createElement(h.default,(0,u.default)({className:"gallery-8-img",uniformHeight:E,style:{cursor:"pointer"},key:t,caption:n,imageData:r,"data-aid":(0,p.getGalleryDataAid)(t)},(0,p.getGalleryDataRouteProps)(t,!0)))}),s.default.createElement(O,{style:{width:E?"8px":0}})),s.default.createElement(d.UX2.Element.Container,null,a>1&&s.default.createElement(d.UX2.Component.HorizontalBox,{align:"middle"},Array.from({length:a}).map(function(e,t){return s.default.createElement(d.UX2.Element.Block,{key:t,style:b(b({},v.indicator),{},{color:t===g?"highContrast":"ultraLowContrast"}),onClick:function(){n.current.scrollLeft=n.current.scrollWidth/a*t}})}))))}O.propTypes={style:f.default.object};var E=(0,y.default)(w);t.default=E,w.propTypes={id:f.default.string,category:f.default.string,device:f.default.string,galleryImages:f.default.array.isRequired,renderAsThumbnail:f.default.bool,renderMode:f.default.string,section:f.default.string,size:f.default.string,staticContent:f.default.object,uniformWidthOrHeight:f.default.string},e.exports=t.default},function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},function(e,t){e.exports=function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw i}}return r}},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(e,t,r){"use strict";var n=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.getGalleryDataRouteProps=t.getGalleryCellDataAid=t.getGalleryDataAid=t.dataAids=void 0;var o=(0,n(r(14)).default)({CAROUSEL_BACKGROUND:null,CAROUSEL_BLUR_BACKGROUND:null,CAROUSEL_CONTENT:null,CAROUSEL_IMAGE_CAPTION:null,GALLERY_SECTION_TITLE_RENDERED:null,GALLERY_CAPTION_RENDERED:null,GALLERY_SLIDE_POSITION:null,GALLERY_MORE_BUTTON:null,LAYOUT_TWO_ZERO_STATE:null,LIGHTBOX_CLOSE:null,LIGHTBOX_MODAL:null,GALLERY_SCROLL_LEFT_ARROW:null,GALLERY_SCROLL_RIGHT_ARROW:null,THUMBNAIL_NAV_LIST:null,FAKE_THUMBNAIL_NAV_LIST:null,GALLERY_CAPTION_MORE_BUTTON:null});t.dataAids=o;t.getGalleryDataAid=function(e){return"GALLERY_IMAGE".concat(e,"_RENDERED")};t.getGalleryCellDataAid=function(e){return"GALLERY_IMAGE".concat(e,"_CELL_RENDERED")};t.getGalleryDataRouteProps=function(e,t){return{"data-field-id":t?"galleryImages.image":"galleryImages.caption","data-field-route":"/galleryImages/".concat(e)}}},function(e,t){e.exports=keyMirror},function(e,t,r){"use strict";var n=r(2),o=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(r(4)),a=o(r(5)),u=o(r(16)),l=o(r(6)),c=n(r(1)),s=o(r(7)),f=r(18),d=r(3),p=function(e){var t=e.caption;return c.default.createElement(d.UX2.Element.Block,{category:"accent",section:"overlay",style:(0,l.default)({background:"linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.75))",padding:"small",paddingTop:"medium",position:"absolute",width:"100%",bottom:"0px"},"@md",{padding:"medium",paddingTop:"large"})},c.default.createElement(d.UX2.Element.Text,{tag:"figcaption",richtext:!0},t))};p.propTypes={caption:s.default.string};var h=function(e){var t=e.uniformHeight,r=e.imageData,n=e.caption,o=(0,u.default)(e,["uniformHeight","imageData","caption"]),s=(0,f.useInView)({threshold:0}),h=(0,a.default)(s,2),y=h[0],g=h[1],b=(0,c.useMemo)(function(){return function(e){return/\/$/.test(e)||(e+="/"),"".concat(e,"rs=w:").concat(600,",m,cg:true")}},[]),v=(0,l.default)({opacity:g?1:0,display:"block",transition:"opacity .5s ease-in-out",width:t?"auto":"95vw",height:t?"38vh":"auto",maxHeight:"100%"},"@md",{width:t?"auto":"35vw",height:t?"50vh":"auto"});return c.default.createElement("figure",{ref:y,style:{margin:0,padding:0,flexShrink:0,position:"relative",marginRight:t?"16px":"24px"}},c.default.createElement(d.UX2.Element.Image,(0,i.default)({},o,{imageData:r,imageSrcCallback:b,style:v})),n&&c.default.createElement(p,{caption:n}))},y=h;t.default=y,h.propTypes={caption:s.default.string,uniformHeight:s.default.bool,imageData:s.default.object},e.exports=t.default},function(e,t,r){var n=r(17);e.exports=function(e,t){if(null==e)return{};var r,o,i=n(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}},function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"InView",function(){return v}),r.d(t,"useInView",function(){return m});var n=r(19),o=r(20),i=r(21),a=r(22),u=r(23),l=r(1),c=(r.n(l),r(24)),s=r.n(c),f=new Map,d=new Map,p=new Map,h=0;function y(e,t,r){void 0===r&&(r={}),r.threshold||(r.threshold=0);var n=r,o=n.root,i=n.rootMargin,a=n.threshold;if(s()(!f.has(e),"react-intersection-observer: Trying to observe %s, but it's already being observed by another instance.\nMake sure the `ref` is only used by a single <Observer /> instance.\n\n%s",e),e){var u=function(e){return e?p.has(e)?p.get(e):(h+=1,p.set(e,h.toString()),p.get(e)+"_"):""}(o)+(i?a.toString()+"_"+i:a.toString()),l=d.get(u);l||(l=new IntersectionObserver(b,r),u&&d.set(u,l));var c={callback:t,element:e,inView:!1,observerId:u,observer:l,thresholds:l.thresholds||(Array.isArray(a)?a:[a])};return f.set(e,c),l.observe(e),c}}function g(e){if(e){var t=f.get(e);if(t){var r=t.observerId,n=t.observer,o=n.root;n.unobserve(e);var i=!1,a=!1;r&&f.forEach(function(t,n){n!==e&&(t.observerId===r&&(i=!0,a=!0),t.observer.root===o&&(a=!0))}),!a&&o&&p.delete(o),n&&!i&&n.disconnect(),f.delete(e)}}}function b(e){e.forEach(function(e){var t=e.isIntersecting,r=e.intersectionRatio,n=e.target,o=f.get(n);if(o&&r>=0){var i=o.thresholds.some(function(e){return o.inView?r>e:r>=e});void 0!==t&&(i=i&&t),o.inView=i,o.callback(i,e)}})}var v=function(e){function t(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t=e.call.apply(e,[this].concat(n))||this,Object(u.a)(Object(i.a)(t),"state",{inView:!1,entry:void 0}),Object(u.a)(Object(i.a)(t),"node",null),Object(u.a)(Object(i.a)(t),"handleNode",function(e){t.node&&g(t.node),t.node=e||null,t.observeNode()}),Object(u.a)(Object(i.a)(t),"handleChange",function(e,r){(e!==t.state.inView||e)&&t.setState({inView:e,entry:r}),t.props.onChange&&t.props.onChange(e,r)}),t}Object(a.a)(t,e);var r=t.prototype;return r.componentDidMount=function(){0},r.componentDidUpdate=function(e,t){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold||(g(this.node),this.observeNode()),t.inView!==this.state.inView&&this.state.inView&&this.props.triggerOnce&&(g(this.node),this.node=null)},r.componentWillUnmount=function(){this.node&&(g(this.node),this.node=null)},r.observeNode=function(){if(this.node){var e=this.props,t=e.threshold,r=e.root,n=e.rootMargin;y(this.node,this.handleChange,{threshold:t,root:r,rootMargin:n})}},r.render=function(){var e=this.state,t=e.inView,r=e.entry;if(!function(e){return"function"!=typeof e.children}(this.props))return this.props.children({inView:t,entry:r,ref:this.handleNode});var i=this.props,a=i.children,u=i.as,c=i.tag,s=(i.triggerOnce,i.threshold,i.root,i.rootMargin,Object(o.a)(i,["children","as","tag","triggerOnce","threshold","root","rootMargin"]));return Object(l.createElement)(u||c||"div",Object(n.a)({ref:this.handleNode},s),a)},t}(l.Component);function m(e){void 0===e&&(e={});var t=Object(l.useRef)(),r=Object(l.useState)({inView:!1,entry:void 0}),n=r[0],o=r[1],i=Object(l.useCallback)(function(r){t.current&&g(t.current),r&&y(r,function(t,n){o({inView:t,entry:n}),t&&e.triggerOnce&&g(r)},e),t.current=r},[e.threshold,e.root,e.rootMargin,e.triggerOnce]);return Object(l.useDebugValue)(n.inView),[i,n.inView,n.entry]}Object(u.a)(v,"displayName","InView"),Object(u.a)(v,"defaultProps",{threshold:0,triggerOnce:!1}),t.default=v},function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}t.a=n},function(e,t,r){"use strict";t.a=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}},function(e,t,r){"use strict";t.a=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t,r){"use strict";t.a=function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}},function(e,t,r){"use strict";t.a=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}},function(e,t,r){"use strict";e.exports=function(e,t,r,n,o,i,a,u){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[r,n,o,i,a,u],s=0;(l=new Error(t.replace(/%s/g,function(){return c[s++]}))).name="Invariant Violation"}throw l.framesToPop=1,l}}},function(e,t,r){"use strict";var n=r(2),o=r(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){(0,u.default)(d,t);var r,n,o=(r=d,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,t=(0,c.default)(r);if(n){var o=(0,c.default)(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return(0,l.default)(this,e)});function d(){var e;return(0,i.default)(this,d),(e=o.apply(this,arguments)).inView=function(){e.setState({visible:!0})},e.state={visible:!1},e}return(0,a.default)(d,[{key:"render",value:function(){var t=this.state.visible;return t?s.default.createElement(e,this.props):s.default.createElement(f,{callback:this.inView})}}]),d}(s.Component)};var i=o(r(26)),a=o(r(27)),u=o(r(28)),l=o(r(30)),c=o(r(33)),s=n(r(1));var f=r(3).UX.IntersectionObserver;e.exports=t.default},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},function(e,t,r){var n=r(29);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},function(e,t,r){var n=r(31),o=r(32);e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!=typeof t?o(e):t}},function(e,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(t){return"function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?e.exports=n=function(e){return r(e)}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":r(e)},n(t)}e.exports=n},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r}]);