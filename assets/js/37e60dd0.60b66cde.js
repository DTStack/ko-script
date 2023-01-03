"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47],{4852:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(9231);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8513:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(4197),a=n(9567),i=(n(9231),n(4852)),o=["components"],l={},c=void 0,s={unversionedId:"advanced/migration",id:"version-5.x/advanced/migration",title:"migration",description:"--\x3e",source:"@site/versioned_docs/version-5.x/advanced/migration.md",sourceDirName:"advanced",slug:"/advanced/migration",permalink:"/ko/docs/5.x/advanced/migration",editUrl:"https://github.com/DTStack/ko/website/versioned_docs/version-5.x/advanced/migration.md",tags:[],version:"5.x",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/ko/docs/5.x/advanced/architecture"}},p={},u=[{value:"--&gt;",id:"--",level:2},{value:"title: Migration",id:"title-migration",level:2},{value:"Remove duplicated loaders &amp; plugins",id:"remove-duplicated-loaders--plugins",level:2},{value:"Loaders",id:"loaders",level:3},{value:"plugins",id:"plugins",level:3},{value:"Create <strong>ko.config.js</strong>",id:"create-koconfigjs",level:2},{value:"Run commands as you&#39;d like",id:"run-commands-as-youd-like",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"--"},"--\x3e"),(0,i.kt)("p",null,"sidebar_position: 2"),(0,i.kt)("h2",{id:"title-migration"},"title: Migration"),(0,i.kt)("p",null,"ko is built on top of webpack so it's easy to migrate from webpack. "),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"ko use webpack v5 internally, so if you use webpack v4 or earlier webpack version before, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/migrate/5"},"webpack migrate")))),(0,i.kt)("h2",{id:"remove-duplicated-loaders--plugins"},"Remove duplicated loaders & plugins"),(0,i.kt)("p",null,"There are some built-in webpack loaders & plugins in ko as shown below:"),(0,i.kt)("h3",{id:"loaders"},"Loaders"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"babel-loader and babel dependencies"),(0,i.kt)("li",{parentName:"ul"},"css-loader"),(0,i.kt)("li",{parentName:"ul"},"esbuild-loader"),(0,i.kt)("li",{parentName:"ul"},"less-loader and it's dependencies"),(0,i.kt)("li",{parentName:"ul"},"postcss-loader"),(0,i.kt)("li",{parentName:"ul"},"sass-loader and it's dependencies"),(0,i.kt)("li",{parentName:"ul"},"thread-loader"),(0,i.kt)("li",{parentName:"ul"},"worker-loader")),(0,i.kt)("h3",{id:"plugins"},"plugins"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@pmmmwh/react-refresh-webpack-plugin"),(0,i.kt)("li",{parentName:"ul"},"case-sensitive-paths-webpack-plugin"),(0,i.kt)("li",{parentName:"ul"},"css-minimizer-webpack-plugin"),(0,i.kt)("li",{parentName:"ul"},"tsconfig-paths-webpack-plugin")),(0,i.kt)("p",null,"You should remove them from your ",(0,i.kt)("strong",{parentName:"p"},"package.json")," if you have used them."),(0,i.kt)("h2",{id:"create-koconfigjs"},"Create ",(0,i.kt)("strong",{parentName:"h2"},"ko.config.js")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ko.config.js")," let you customize your own configs, and all your customized configs will be merged into internal webpack instance.we recommend you override ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/copy-webpack-plugin"},"copy-webpack-plugin"),",",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jantimon/html-webpack-plugin"},"html-webpack-plugin")," if needed. you can get more details in ",(0,i.kt)("a",{parentName:"p",href:"/docs/5.x/FAQ"},"FAQ")),(0,i.kt)("h2",{id:"run-commands-as-youd-like"},"Run commands as you'd like"),(0,i.kt)("p",null,"You can run ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm ko -h")," then you can find all ko commands, choose one you'd like and use it."))}m.isMDXComponent=!0}}]);