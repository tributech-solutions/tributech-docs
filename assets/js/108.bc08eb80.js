(self.webpackChunktributech_docs=self.webpackChunktributech_docs||[]).push([[108],{830:function(e,t,n){"use strict";n.d(t,{W:function(){return a}});var r=n(7294);function a(){return r.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},r.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},1384:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(9756),a=n(7294),o=n(3727),i=n(6832),c=n(1699),l=n(9901),s=(0,a.createContext)({collectLink:function(){}}),u=n(1402),m=n(9861),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,n,f=e.isNavLink,v=e.to,h=e.href,b=e.activeClassName,g=e.isActive,p=e["data-noBrokenLinkCheck"],E=e.autoAddBaseUrl,k=void 0===E||E,Z=(0,r.Z)(e,d),w=(0,i.Z)().siteConfig,y=w.trailingSlash,_=w.baseUrl,C=(0,u.C)().withBaseUrl,N=(0,a.useContext)(s),S=v||h,L=(0,c.Z)(S),I=null==S?void 0:S.replace("pathname://",""),D=void 0!==I?(n=I,k&&function(e){return e.startsWith("/")}(n)?C(n):n):void 0;D&&L&&(D=(0,m.applyTrailingSlash)(D,{trailingSlash:y,baseUrl:_}));var B,T=(0,a.useRef)(!1),P=f?o.OL:o.rU,M=l.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!M&&L&&null!=D&&window.docusaurus.prefetch(D),function(){M&&B&&B.disconnect()}}),[D,M,L]);var U=null!==(t=null==D?void 0:D.startsWith("#"))&&void 0!==t&&t,A=!D||!L||U;return D&&L&&!U&&!p&&N.collectLink(D),A?a.createElement("a",Object.assign({href:D},S&&!L&&{target:"_blank",rel:"noopener noreferrer"},Z)):a.createElement(P,Object.assign({},Z,{onMouseEnter:function(){T.current||null==D||(window.docusaurus.preload(D),T.current=!0)},innerRef:function(e){var t,n;M&&e&&L&&(t=e,n=function(){null!=D&&window.docusaurus.prefetch(D)},(B=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(B.unobserve(t),B.disconnect(),n())}))}))).observe(t))},to:D||""},f&&{isActive:g,activeClassName:b}))}},1699:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},1402:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(6832),a=n(1699);function o(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,l=o.absolute,s=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(c)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},8168:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(7294),a="iconExternalLink_3J9K",o=function(e){var t=e.width,n=void 0===t?13.5:t,o=e.height,i=void 0===o?13.5:o;return r.createElement("svg",{width:n,height:i,"aria-hidden":"true",viewBox:"0 0 24 24",className:a},r.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},3108:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ee}});var r=n(7294),a=n(6010),o=n(5977),i=n(4416),c=n(3382),l="skipToContent_1oUP";function s(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}var u=function(){var e=(0,r.useRef)(null),t=(0,o.k6)().action;return(0,c.SL)((function(n){var r=n.location;e.current&&!r.hash&&"PUSH"===t&&s(e.current)})),r.createElement("div",{ref:e},r.createElement("a",{href:"#",className:l,onClick:function(e){e.preventDefault();var t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&s(t)}},r.createElement(i.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))},m="announcementBar_3WsW",d="announcementBarClose_38nx",f="announcementBarContent_3EUC",v="announcementBarCloseable_3myR";var h=function(){var e,t=(0,c.nT)(),n=t.isClosed,o=t.close,l=(0,c.LU)().announcementBar;if(!l)return null;var s=l.content,u=l.backgroundColor,h=l.textColor,b=l.isCloseable;return!s||b&&n?null:r.createElement("div",{className:m,style:{backgroundColor:u,color:h},role:"banner"},r.createElement("div",{className:(0,a.Z)(f,(e={},e[v]=b,e)),dangerouslySetInnerHTML:{__html:s}}),b?r.createElement("button",{type:"button",className:(0,a.Z)(d,"clean-btn"),onClick:o,"aria-label":(0,i.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},r.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},b=n(2122),g=n(7458),p=n(6832),E={toggle:"toggle_71bT"},k=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(E.toggle,E.dark),style:n},t)},Z=function(e){var t=e.icon,n=e.style;return r.createElement("span",{className:(0,a.Z)(E.toggle,E.light),style:n},t)},w=(0,r.memo)((function(e){var t=e.className,n=e.icons,o=e.checked,i=e.disabled,c=e.onChange,l=(0,r.useState)(o),s=l[0],u=l[1],m=(0,r.useState)(!1),d=m[0],f=m[1],v=(0,r.useRef)(null);return r.createElement("div",{className:(0,a.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":d,"react-toggle--disabled":i})},r.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:function(){var e;return null==(e=v.current)?void 0:e.click()}},r.createElement("div",{className:"react-toggle-track-check"},n.checked),r.createElement("div",{className:"react-toggle-track-x"},n.unchecked),r.createElement("div",{className:"react-toggle-thumb"})),r.createElement("input",{ref:v,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:function(){return u(!s)},onFocus:function(){return f(!0)},onBlur:function(){return f(!1)}}))}));function y(e){var t=(0,c.LU)().colorMode.switchConfig,n=t.darkIcon,a=t.darkIconStyle,o=t.lightIcon,i=t.lightIconStyle,l=(0,p.Z)().isClient;return r.createElement(w,(0,b.Z)({disabled:!l,icons:{checked:r.createElement(k,{icon:n,style:a}),unchecked:r.createElement(Z,{icon:o,style:i})}},e))}var _=n(6266),C=n(8002),N=function(e){var t=(0,o.TH)(),n=(0,r.useState)(e),a=n[0],i=n[1],l=(0,r.useRef)(!1),s=(0,r.useState)(0),u=s[0],m=s[1],d=(0,r.useCallback)((function(e){null!==e&&m(e.getBoundingClientRect().height)}),[]);return(0,C.Z)((function(t,n){var r=t.scrollY,a=null==n?void 0:n.scrollY;if(e)if(r<u)i(!0);else{if(l.current)return l.current=!1,void i(!1);a&&0===r&&i(!0);var o=document.documentElement.scrollHeight-u,c=window.innerHeight;a&&r>=a?i(!1):r+c<o&&i(!0)}}),[u,l]),(0,c.SL)((function(t){e&&!t.location.hash&&i(!0)})),(0,r.useEffect)((function(){e&&t.hash&&(l.current=!0)}),[t.hash]),{navbarRef:d,isNavbarVisible:a}};var S=function(e){void 0===e&&(e=!0),(0,r.useEffect)((function(){return document.body.style.overflow=e?"hidden":"visible",function(){document.body.style.overflow="visible"}}),[e])},L=n(7213),I=n(4713),D=n(974),B=n(9756),T=["width","height","className"],P=function(e){var t=e.width,n=void 0===t?30:t,a=e.height,o=void 0===a?30:a,i=e.className,c=(0,B.Z)(e,T);return r.createElement("svg",(0,b.Z)({className:i,width:n,height:o,viewBox:"0 0 30 30","aria-hidden":"true"},c),r.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},M="toggle_3Zt9",U="navbarHideable_2qcr",A="navbarHidden_3yey",O="right";function x(){return(0,c.LU)().navbar.items}function R(){var e=(0,c.LU)().colorMode.disableSwitch,t=(0,_.Z)(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return{isDarkTheme:n,toggle:(0,r.useCallback)((function(e){return e.target.checked?o():a()}),[a,o]),disabled:e}}function W(e){var t=e.sidebarShown,n=e.toggleSidebar;S(t);var o=x(),l=R(),s=function(e){var t,n=e.sidebarShown,a=e.toggleSidebar,o=null==(t=(0,c.g8)())?void 0:t({toggleSidebar:a}),i=(0,c.D9)(o),l=(0,r.useState)((function(){return!1})),s=l[0],u=l[1];(0,r.useEffect)((function(){o&&!i&&u(!0)}),[o,i]);var m=!!o;return(0,r.useEffect)((function(){m?n||u(!0):u(!1)}),[n,m]),{shown:s,hide:(0,r.useCallback)((function(){u(!1)}),[]),content:o}}({sidebarShown:t,toggleSidebar:n});return r.createElement("div",{className:"navbar-sidebar"},r.createElement("div",{className:"navbar-sidebar__brand"},r.createElement(D.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!l.disabled&&t&&r.createElement(y,{checked:l.isDarkTheme,onChange:l.toggle})),r.createElement("div",{className:(0,a.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":s.shown})},r.createElement("div",{className:"navbar-sidebar__item menu"},r.createElement("ul",{className:"menu__list"},o.map((function(e,t){return r.createElement(I.Z,(0,b.Z)({mobile:!0},e,{onClick:n,key:t}))})))),r.createElement("div",{className:"navbar-sidebar__item navbar-sidebar__item--secondary menu"},r.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:s.hide},r.createElement(i.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),s.content)))}var j=function(){var e,t,n,o,i,l,s,u=(0,c.LU)().navbar,m=u.hideOnScroll,d=u.style,f=(t=(0,L.Z)(),n="mobile"===t,o=(0,r.useState)(!1),i=o[0],l=o[1],s=(0,r.useCallback)((function(){l((function(e){return!e}))}),[]),(0,r.useEffect)((function(){"desktop"===t&&l(!1)}),[t]),{shouldRender:n,toggle:s,shown:i}),v=R(),h=N(m),p=h.navbarRef,E=h.isNavbarVisible,k=x(),Z=k.some((function(e){return"search"===e.type})),w=function(e){return{leftItems:e.filter((function(e){var t;return"left"===(null!=(t=e.position)?t:O)})),rightItems:e.filter((function(e){var t;return"right"===(null!=(t=e.position)?t:O)}))}}(k),_=w.leftItems,C=w.rightItems;return r.createElement("nav",{ref:p,className:(0,a.Z)("navbar","navbar--fixed-top",(e={"navbar--dark":"dark"===d,"navbar--primary":"primary"===d,"navbar-sidebar--show":f.shown},e[U]=m,e[A]=m&&!E,e))},r.createElement("div",{className:"navbar__inner"},r.createElement("div",{className:"navbar__items"},(null==k?void 0:k.length)>0&&r.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:f.toggle,onKeyDown:f.toggle},r.createElement(P,null)),r.createElement(D.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),_.map((function(e,t){return r.createElement(I.Z,(0,b.Z)({},e,{key:t}))}))),r.createElement("div",{className:"navbar__items navbar__items--right"},C.map((function(e,t){return r.createElement(I.Z,(0,b.Z)({},e,{key:t}))})),!v.disabled&&r.createElement(y,{className:M,checked:v.isDarkTheme,onChange:v.toggle}),!Z&&r.createElement(g.Z,null))),r.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:f.toggle}),f.shouldRender&&r.createElement(W,{sidebarShown:f.shown,toggleSidebar:f.toggle}))},H=n(1384),V=n(1402),z=n(1699),q="footerLogoLink_MyFc",F=n(4455),K=n(8168),G=["to","href","label","prependBaseUrlToHref"];function Y(e){var t=e.to,n=e.href,a=e.label,o=e.prependBaseUrlToHref,i=(0,B.Z)(e,G),c=(0,V.Z)(t),l=(0,V.Z)(n,{forcePrependBaseUrl:!0});return r.createElement(H.Z,(0,b.Z)({className:"footer__link-item"},n?{href:o?l:n}:{to:c},i),n&&!(0,z.Z)(n)?r.createElement("span",null,a,r.createElement(K.Z,null)):a)}var Q=function(e){var t=e.sources,n=e.alt;return r.createElement(F.Z,{className:"footer__logo",alt:n,sources:t})};var X=function(){var e=(0,c.LU)().footer,t=e||{},n=t.copyright,o=t.links,i=void 0===o?[]:o,l=t.logo,s=void 0===l?{}:l,u={light:(0,V.Z)(s.src),dark:(0,V.Z)(s.srcDark||s.src)};return e?r.createElement("footer",{className:(0,a.Z)("footer",{"footer--dark":"dark"===e.style})},r.createElement("div",{className:"container"},i&&i.length>0&&r.createElement("div",{className:"row footer__links"},i.map((function(e,t){return r.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.createElement("li",{key:e.href||e.to,className:"footer__item"},r.createElement(Y,e))}))):null)}))),(s||n)&&r.createElement("div",{className:"footer__bottom text--center"},s&&(s.src||s.srcDark)&&r.createElement("div",{className:"margin-bottom--sm"},s.href?r.createElement(H.Z,{href:s.href,className:q},r.createElement(Q,{alt:s.alt,sources:u})):r.createElement(Q,{alt:s.alt,sources:u})),n?r.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:n}}):null))):null},J=n(9901),$=(0,c.WA)("theme"),ee="light",te="dark",ne=function(e){return e===te?te:ee},re=function(e){(0,c.WA)("theme").set(ne(e))},ae=function(){var e=(0,c.LU)().colorMode,t=e.defaultMode,n=e.disableSwitch,a=e.respectPrefersColorScheme,o=(0,r.useState)(function(e){return J.Z.canUseDOM?ne(document.documentElement.getAttribute("data-theme")):ne(e)}(t)),i=o[0],l=o[1],s=(0,r.useCallback)((function(){l(ee),re(ee)}),[]),u=(0,r.useCallback)((function(){l(te),re(te)}),[]);return(0,r.useEffect)((function(){document.documentElement.setAttribute("data-theme",ne(i))}),[i]),(0,r.useEffect)((function(){if(!n)try{var e=$.get();null!==e&&l(ne(e))}catch(t){console.error(t)}}),[l]),(0,r.useEffect)((function(){n&&!a||window.matchMedia("(prefers-color-scheme: dark)").addListener((function(e){var t=e.matches;l(t?te:ee)}))}),[]),{isDarkTheme:i===te,setLightTheme:s,setDarkTheme:u}},oe=n(5502);var ie=function(e){var t=ae(),n=t.isDarkTheme,a=t.setLightTheme,o=t.setDarkTheme;return r.createElement(oe.Z.Provider,{value:{isDarkTheme:n,setLightTheme:a,setDarkTheme:o}},e.children)},ce="docusaurus.tab.",le=function(){var e=(0,r.useState)({}),t=e[0],n=e[1],a=(0,r.useCallback)((function(e,t){(0,c.WA)("docusaurus.tab."+e).set(t)}),[]);return(0,r.useEffect)((function(){try{var e={};(0,c._f)().forEach((function(t){if(t.startsWith(ce)){var n=t.substring(ce.length);e[n]=(0,c.WA)(t).get()}})),n(e)}catch(t){console.error(t)}}),[]),{tabGroupChoices:t,setTabGroupChoices:function(e,t){n((function(n){var r;return Object.assign({},n,((r={})[e]=t,r))})),a(e,t)}}},se=n(4179);var ue=function(e){var t=le(),n=t.tabGroupChoices,a=t.setTabGroupChoices;return r.createElement(se.Z.Provider,{value:{tabGroupChoices:n,setTabGroupChoices:a}},e.children)};function me(e){var t=e.children;return r.createElement(ie,null,r.createElement(c.pl,null,r.createElement(ue,null,r.createElement(c.L5,null,r.createElement(c.Cn,null,t)))))}var de=n(9932);function fe(e){var t=e.locale,n=e.version,a=e.tag,o=t;return r.createElement(de.Z,null,o&&r.createElement("meta",{name:"docsearch:language",content:o}),n&&r.createElement("meta",{name:"docsearch:version",content:n}),a&&r.createElement("meta",{name:"docsearch:docusaurus_tag",content:a}))}var ve=n(7027);function he(){var e=(0,p.Z)().i18n,t=e.defaultLocale,n=e.locales,a=(0,c.l5)();return r.createElement(de.Z,null,n.map((function(e){return r.createElement("link",{key:e,rel:"alternate",href:a.createUrl({locale:e,fullyQualified:!0}),hrefLang:e})})),r.createElement("link",{rel:"alternate",href:a.createUrl({locale:t,fullyQualified:!0}),hrefLang:"x-default"}))}function be(e){var t=e.permalink,n=(0,p.Z)().siteConfig.url,a=function(){var e=(0,p.Z)().siteConfig.url,t=(0,o.TH)().pathname;return e+(0,V.Z)(t)}(),i=t?""+n+t:a;return r.createElement(de.Z,null,r.createElement("meta",{property:"og:url",content:i}),r.createElement("link",{rel:"canonical",href:i}))}function ge(e){var t=(0,p.Z)(),n=t.siteConfig,a=n.favicon,o=n.themeConfig,i=o.metadatas,l=o.image,s=t.i18n,u=s.currentLocale,m=s.localeConfigs,d=e.title,f=e.description,v=e.image,h=e.keywords,g=e.searchMetadatas,E=(0,V.Z)(a),k=(0,c.pe)(d),Z=u,w=m[u].direction;return r.createElement(r.Fragment,null,r.createElement(de.Z,null,r.createElement("html",{lang:Z,dir:w}),a&&r.createElement("link",{rel:"shortcut icon",href:E}),r.createElement("title",null,k),r.createElement("meta",{property:"og:title",content:k}),v||l&&r.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.createElement(ve.Z,{description:f,keywords:h,image:v}),r.createElement(be,null),r.createElement(he,null),r.createElement(fe,(0,b.Z)({tag:c.HX,locale:u},g)),r.createElement(de.Z,null,i.map((function(e,t){return r.createElement("meta",(0,b.Z)({key:"metadata_"+t},e))}))))}var pe=function(){(0,r.useEffect)((function(){var e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),function(){document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};var Ee=function(e){var t=e.children,n=e.noFooter,o=e.wrapperClassName,i=e.pageClassName;return pe(),r.createElement(me,null,r.createElement(ge,e),r.createElement(u,null),r.createElement(h,null),r.createElement(j,null),r.createElement("div",{className:(0,a.Z)(c.kM.wrapper.main,o,i)},t),!n&&r.createElement(X,null))}},974:function(e,t,n){"use strict";var r=n(2122),a=n(9756),o=n(7294),i=n(1384),c=n(4455),l=n(1402),s=n(6832),u=["imageClassName","titleClassName"];t.Z=function(e){var t=(0,s.Z)(),n=t.siteConfig,m=n.title,d=n.themeConfig.navbar,f=d.title,v=d.logo,h=void 0===v?{src:""}:v,b=t.isClient,g=e.imageClassName,p=e.titleClassName,E=(0,a.Z)(e,u),k=(0,l.Z)(h.href||"/"),Z={light:(0,l.Z)(h.src),dark:(0,l.Z)(h.srcDark||h.src)};return o.createElement(i.Z,(0,r.Z)({to:k},E,h.target&&{target:h.target}),h.src&&o.createElement(c.Z,{key:b,className:g,sources:Z,alt:h.alt||f||m}),null!=f&&o.createElement("b",{className:p},f))}},2842:function(e,t,n){"use strict";n.d(t,{O:function(){return h}});var r=n(2122),a=n(9756),o=n(7294),i=n(6010),c=n(1384),l=n(1402),s=n(8168),u=n(1699),m=["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref"],d=["className","isDropdownItem"],f=["className","isDropdownItem"],v=["mobile","position"];function h(e){var t=e.activeBasePath,n=e.activeBaseRegex,i=e.to,d=e.href,f=e.label,v=e.activeClassName,h=void 0===v?"navbar__link--active":v,b=e.prependBaseUrlToHref,g=(0,a.Z)(e,m),p=(0,l.Z)(i),E=(0,l.Z)(t),k=(0,l.Z)(d,{forcePrependBaseUrl:!0}),Z=f&&d&&!(0,u.Z)(d),w="dropdown__link--active"===h;return o.createElement(c.Z,(0,r.Z)({},d?{href:b?k:d}:Object.assign({isNavLink:!0,activeClassName:h,to:p},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(E)}}:null),g),Z?o.createElement("span",null,f,o.createElement(s.Z,w&&{width:12,height:12})):f)}function b(e){var t=e.className,n=e.isDropdownItem,c=void 0!==n&&n,l=(0,a.Z)(e,d),s=o.createElement(h,(0,r.Z)({className:(0,i.Z)(c?"dropdown__link":"navbar__item navbar__link",t)},l));return c?o.createElement("li",null,s):s}function g(e){var t=e.className,n=(e.isDropdownItem,(0,a.Z)(e,f));return o.createElement("li",{className:"menu__list-item"},o.createElement(h,(0,r.Z)({className:(0,i.Z)("menu__link",t)},n)))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(e.position,(0,a.Z)(e,v)),i=n?g:b;return o.createElement(i,r)}},461:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(2122),a=n(9756),o=n(7294),i=n(2842),c=n(9099),l=n(6010),s=n(3382),u=n(9861),m=["docId","activeSidebarClassName","label","docsPluginId"];function d(e){var t,n=e.docId,d=e.activeSidebarClassName,f=e.label,v=e.docsPluginId,h=(0,a.Z)(e,m),b=(0,c.Iw)(v),g=b.activeVersion,p=b.activeDoc,E=(0,s.J)(v).preferredVersion,k=(0,c.yW)(v),Z=function(e,t){var n=e.flatMap((function(e){return e.docs})),r=n.find((function(e){return e.id===t}));if(!r){var a=n.map((function(e){return e.id})).join("\n- ");throw new Error("DocNavbarItem: couldn't find any doc with id \""+t+'" in version'+(e.length?"s":"")+" "+e.map((function(e){return e.name})).join(", ")+'".\nAvailable doc ids are:\n- '+a)}return r}((0,u.uniq)([g,E,k].filter(Boolean)),n);return o.createElement(i.Z,(0,r.Z)({exact:!0},h,{className:(0,l.Z)(h.className,(t={},t[d]=p&&p.sidebar===Z.sidebar,t)),label:null!=f?f:Z.id,to:Z.path}))}},4493:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(2122),a=n(9756),o=n(7294),i=n(2842),c=n(6570),l=n(9099),s=n(3382),u=["mobile","docsPluginId","dropdownActiveClassDisabled","dropdownItemsBefore","dropdownItemsAfter"],m=function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))};function d(e){var t,n,d=e.mobile,f=e.docsPluginId,v=e.dropdownActiveClassDisabled,h=e.dropdownItemsBefore,b=e.dropdownItemsAfter,g=(0,a.Z)(e,u),p=(0,l.Iw)(f),E=(0,l.gB)(f),k=(0,l.yW)(f),Z=(0,s.J)(f),w=Z.preferredVersion,y=Z.savePreferredVersionName;var _,C=(_=E.map((function(e){var t=(null==p?void 0:p.alternateDocVersions[e.name])||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:function(){return e===(null==p?void 0:p.activeVersion)},onClick:function(){y(e.name)}}})),[].concat(h,_,b)),N=null!=(t=null!=(n=p.activeVersion)?n:w)?t:k,S=d&&C?"Versions":N.label,L=d&&C?void 0:m(N).path;return C.length<=1?o.createElement(i.Z,(0,r.Z)({},g,{mobile:d,label:S,to:L,isActive:v?function(){return!1}:void 0})):o.createElement(c.Z,(0,r.Z)({},g,{mobile:d,label:S,to:L,items:C,isActive:v?function(){return!1}:void 0}))}},9693:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(2122),a=n(9756),o=n(7294),i=n(2842),c=n(9099),l=n(3382),s=["label","to","docsPluginId"];function u(e){var t,n=e.label,u=e.to,m=e.docsPluginId,d=(0,a.Z)(e,s),f=(0,c.zu)(m),v=(0,l.J)(m).preferredVersion,h=(0,c.yW)(m),b=null!=(t=null!=f?f:v)?t:h,g=null!=n?n:b.label,p=null!=u?u:function(e){return e.docs.find((function(t){return t.id===e.mainDocId}))}(b).path;return o.createElement(i.Z,(0,r.Z)({},d,{label:g,to:p}))}},6570:function(e,t,n){"use strict";var r=n(2122),a=n(9756),o=n(7294),i=n(6010),c=n(3382),l=n(2842),s=n(4713),u=["items","position","className"],m=["items","className","position"],d=["mobile"];function f(e,t){return e.some((function(e){return function(e,t){return!!(0,c.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)}))}function v(e){var t,n=e.items,c=e.position,m=e.className,d=(0,a.Z)(e,u),f=(0,o.useRef)(null),v=(0,o.useRef)(null),h=(0,o.useState)(!1),b=h[0],g=h[1];return(0,o.useEffect)((function(){var e=function(e){f.current&&!f.current.contains(e.target)&&g(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[f]),o.createElement("div",{ref:f,className:(0,i.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===c,"dropdown--show":b})},o.createElement(l.O,(0,r.Z)({className:(0,i.Z)("navbar__item navbar__link",m)},d,{onClick:d.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),g(!b))}}),null!=(t=d.children)?t:d.label),o.createElement("ul",{ref:v,className:"dropdown__menu"},n.map((function(e,t){return o.createElement(s.Z,(0,r.Z)({isDropdownItem:!0,onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),g(!1);var r=f.current.nextElementSibling;r&&r.focus()}},activeClassName:"dropdown__link--active"},e,{key:t}))}))))}function h(e){var t,n=e.items,u=e.className,d=(e.position,(0,a.Z)(e,m)),v=(0,c.be)(),h=f(n,v),b=(0,c.uR)({initialState:function(){return!h}}),g=b.collapsed,p=b.toggleCollapsed,E=b.setCollapsed;return(0,o.useEffect)((function(){h&&E(!h)}),[v,h]),o.createElement("li",{className:(0,i.Z)("menu__list-item",{"menu__list-item--collapsed":g})},o.createElement(l.O,(0,r.Z)({role:"button",className:(0,i.Z)("menu__link menu__link--sublist",u)},d,{onClick:function(e){e.preventDefault(),p()}}),null!=(t=d.children)?t:d.label),o.createElement(c.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:g},n.map((function(e,t){return o.createElement(s.Z,(0,r.Z)({mobile:!0,isDropdownItem:!0,onClick:d.onClick,activeClassName:"menu__link--active"},e,{key:t}))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,d),i=n?h:v;return o.createElement(i,r)}},4713:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(9756),a=n(7294),o=n(2842),i=n(6570),c=n(2122),l=["width","height"],s=function(e){var t=e.width,n=void 0===t?20:t,o=e.height,i=void 0===o?20:o,s=(0,r.Z)(e,l);return a.createElement("svg",(0,c.Z)({viewBox:"0 0 20 20",width:n,height:i,"aria-hidden":"true"},s),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))},u=n(6832),m=n(3382),d=["mobile","dropdownItemsBefore","dropdownItemsAfter"];function f(e){var t=e.mobile,n=e.dropdownItemsBefore,o=e.dropdownItemsAfter,l=(0,r.Z)(e,d),f=(0,u.Z)().i18n,v=f.currentLocale,h=f.locales,b=f.localeConfigs,g=(0,m.l5)();function p(e){return b[e].label}var E=h.map((function(e){var t="pathname://"+g.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:p(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===v?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),k=[].concat(n,E,o),Z=t?"Languages":p(v);return a.createElement(i.Z,(0,c.Z)({},l,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(s,{style:{verticalAlign:"text-bottom",marginRight:5}}),a.createElement("span",null,Z)),items:k}))}var v=n(7458);function h(e){return e.mobile?null:a.createElement(v.Z,null)}var b=["type"],g={default:function(){return o.Z},localeDropdown:function(){return f},search:function(){return h},dropdown:function(){return i.Z},docsVersion:function(){return n(9693).Z},docsVersionDropdown:function(){return n(4493).Z},doc:function(){return n(461).Z}};function p(e){var t=e.type,n=(0,r.Z)(e,b),o=function(e){var t=g[e];if(!t)throw new Error('No NavbarItem component found for type "'+e+'".');return t()}(function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items));return a.createElement(o,n)}},7027:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(7294),a=n(9932),o=n(3382),i=n(1402);function c(e){var t=e.title,n=e.description,c=e.keywords,l=e.image,s=(0,o.LU)().image,u=(0,o.pe)(t),m=(0,i.Z)(l||s,{absolute:!0});return r.createElement(a.Z,null,t&&r.createElement("title",null,u),t&&r.createElement("meta",{property:"og:title",content:u}),n&&r.createElement("meta",{name:"description",content:n}),n&&r.createElement("meta",{property:"og:description",content:n}),c&&r.createElement("meta",{name:"keywords",content:Array.isArray(c)?c.join(","):c}),m&&r.createElement("meta",{property:"og:image",content:m}),m&&r.createElement("meta",{name:"twitter:image",content:m}))}},5502:function(e,t,n){"use strict";var r=n(7294).createContext(void 0);t.Z=r},4455:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(2122),a=n(9756),o=n(7294),i=n(6010),c=n(6832),l=n(6266),s={themedImage:"themedImage_1VuW","themedImage--light":"themedImage--light_3UqQ","themedImage--dark":"themedImage--dark_hz6m"},u=["sources","className","alt"],m=function(e){var t=(0,c.Z)().isClient,n=(0,l.Z)().isDarkTheme,m=e.sources,d=e.className,f=e.alt,v=void 0===f?"":f,h=(0,a.Z)(e,u),b=t?n?["dark"]:["light"]:["light","dark"];return o.createElement(o.Fragment,null,b.map((function(e){return o.createElement("img",(0,r.Z)({key:e,src:m[e],alt:v,className:(0,i.Z)(s.themedImage,s["themedImage--"+e],d)},h))})))}},4179:function(e,t,n){"use strict";var r=(0,n(7294).createContext)(void 0);t.Z=r},8002:function(e,t,n){"use strict";var r=n(7294),a=n(9901),o=function(){return a.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};t.Z=function(e,t){void 0===t&&(t=[]);var n=(0,r.useRef)(o()),a=function(){var t=o();e&&e(t,n.current),n.current=t};(0,r.useEffect)((function(){var e={passive:!0};return a(),window.addEventListener("scroll",a,e),function(){return window.removeEventListener("scroll",a,e)}}),t)}},6266:function(e,t,n){"use strict";var r=n(7294),a=n(5502);t.Z=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},7213:function(e,t,n){"use strict";var r=n(7294),a=n(9901),o="desktop",i="mobile",c="ssr";function l(){return a.Z.canUseDOM?window.innerWidth>996?o:i:c}t.Z=function(){var e=(0,r.useState)((function(){return l()})),t=e[0],n=e[1];return(0,r.useEffect)((function(){if(a.Z.canUseDOM){return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}function e(){n(l())}}),[]),t}},7458:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var r=n(2122),a=n(9756),o=n(7294),i=n(3935),c=n(6832),l=n(5977),s=n(1402),u=n(1384),m=n(9932),d=n(3158);function f(){return o.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},o.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var v=n(830);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g="Ctrl";var p=o.forwardRef((function(e,t){var n=e.translations,r=void 0===n?{}:n,a=b(e,["translations"]),i=r.buttonText,c=void 0===i?"Search":i,l=r.buttonAriaLabel,s=void 0===l?"Search":l,u=(0,o.useMemo)((function(){return"undefined"!=typeof navigator?/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?"\u2318":g:null}),[]);return o.createElement("button",h({type:"button",className:"DocSearch DocSearch-Button","aria-label":s},a,{ref:t}),o.createElement("span",{className:"DocSearch-Button-Container"},o.createElement(v.W,null),o.createElement("span",{className:"DocSearch-Button-Placeholder"},c)),o.createElement("span",{className:"DocSearch-Button-Keys"},null!==u&&o.createElement(o.Fragment,null,o.createElement("span",{className:"DocSearch-Button-Key"},u===g?o.createElement(f,null):u),o.createElement("span",{className:"DocSearch-Button-Key"},"K"))))})),E=n(9099),k=n(3382);function Z(){var e=function(){var e=(0,c.Z)().i18n,t=(0,E._r)(),n=(0,E.WS)(),r=(0,k.Oh)(),a=[k.HX].concat(Object.keys(t).map((function(e){var a,o,i=(null==n||null==(a=n.activePlugin)?void 0:a.pluginId)===e?n.activeVersion:void 0,c=r[e],l=t[e].versions.find((function(e){return e.isLast})),s=null!=(o=null!=i?i:c)?o:l;return(0,k.os)(e,s.name)})));return{locale:e.currentLocale,tags:a}}();return["language:"+e.locale,e.tags.map((function(e){return"docusaurus_tag:"+e}))]}var w=n(4416),y="searchBox_1Doo",_=["contextualSearch"],C=null;function N(e){var t=e.hit,n=e.children;return o.createElement(u.Z,{to:t.url},n)}function S(e){var t=e.state,n=e.onClose,r=(0,d.Z)().generateSearchPageLink;return o.createElement(u.Z,{to:r(t.query),onClick:n},"See all ",t.context.nbHits," results")}function L(e){var t,u,d=e.contextualSearch,f=(0,a.Z)(e,_),v=(0,c.Z)().siteMetadata,h=Z(),b=null!=(t=null==(u=f.searchParameters)?void 0:u.facetFilters)?t:[],g=d?[].concat(h,b):b,E=Object.assign({},f.searchParameters,{facetFilters:g}),k=(0,s.C)().withBaseUrl,L=(0,l.k6)(),I=(0,o.useRef)(null),D=(0,o.useRef)(null),B=(0,o.useState)(!1),T=B[0],P=B[1],M=(0,o.useState)(null),U=M[0],A=M[1],O=(0,o.useCallback)((function(){return C?Promise.resolve():Promise.all([n.e(300).then(n.bind(n,4300)),Promise.all([n.e(532),n.e(945)]).then(n.bind(n,6945)),Promise.all([n.e(532),n.e(301)]).then(n.bind(n,6301))]).then((function(e){var t=e[0].DocSearchModal;C=t}))}),[]),x=(0,o.useCallback)((function(){O().then((function(){I.current=document.createElement("div"),document.body.insertBefore(I.current,document.body.firstChild),P(!0)}))}),[O,P]),R=(0,o.useCallback)((function(){P(!1),I.current.remove()}),[P]),W=(0,o.useCallback)((function(e){O().then((function(){P(!0),A(e.key)}))}),[O,P,A]),j=(0,o.useRef)({navigate:function(e){var t=e.itemUrl;L.push(t)}}).current,H=(0,o.useRef)((function(e){return e.map((function(e){var t=document.createElement("a");return t.href=e.url,Object.assign({},e,{url:k(""+t.pathname+t.hash)})}))})).current,V=(0,o.useMemo)((function(){return function(e){return o.createElement(S,(0,r.Z)({},e,{onClose:R}))}}),[R]),z=(0,o.useCallback)((function(e){return e.addAlgoliaAgent("docusaurus",v.docusaurusVersion),e}),[v.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,r=e.onClose,a=e.onInput,i=e.searchButtonRef;o.useEffect((function(){function e(e){(27===e.keyCode&&t||"k"===e.key&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?r():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),i&&i.current===document.activeElement&&a&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&a(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,r,a,i])}({isOpen:T,onOpen:x,onClose:R,onInput:W,searchButtonRef:D});var q=(0,w.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return o.createElement(o.Fragment,null,o.createElement(m.Z,null,o.createElement("link",{rel:"preconnect",href:"https://"+f.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),o.createElement("div",{className:y},o.createElement(p,{onTouchStart:O,onFocus:O,onMouseOver:O,onClick:x,ref:D,translations:{buttonText:q,buttonAriaLabel:q}})),T&&(0,i.createPortal)(o.createElement(C,(0,r.Z)({onClose:R,initialScrollY:window.scrollY,initialQuery:U,navigator:j,transformItems:H,hitComponent:N,resultsFooterComponent:V,transformSearchClient:z},f,{searchParameters:E})),I.current))}var I=function(){var e=(0,c.Z)().siteConfig;return o.createElement(L,e.themeConfig.algolia)}},3158:function(e,t,n){"use strict";var r=n(5977),a=n(9901),o=n(6832);t.Z=function(){var e=(0,r.k6)(),t=(0,r.TH)(),n=(0,o.Z)().siteConfig,i=(n=void 0===n?{}:n).baseUrl;return{searchValue:a.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var r=new URLSearchParams(t.search);n?r.set("q",n):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:function(e){return i+"search?q="+encodeURIComponent(e)}}}},4357:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,o=e.split(/[#?]/)[0],i="/"===o||o===r?o:(a=o,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(o,i)}},9861:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=n(4357);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}});var o=n(5479);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},5479:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}}}]);