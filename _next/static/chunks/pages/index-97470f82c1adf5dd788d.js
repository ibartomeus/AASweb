(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5781:function(e,n,t){"use strict";t.d(n,{W2:function(){return s},Ar:function(){return w},yO:function(){return A},mV:function(){return P},G_:function(){return E},DZ:function(){return S}});var r=t(5893),s=function(e){var n=e.children;return(0,r.jsx)("div",{className:"container mx-auto px-5 py-20",children:n})},a=t(4184),i=t.n(a),c=t(1664),l=function(e){var n=e.title,t=e.src,s=e.slug,a=e.height,l=e.width,o=(0,r.jsx)("img",{src:"".concat("/AASweb").concat(t),alt:"Cover Image for ".concat(n),className:i()("shadow-sm",{"hover:shadow-md transition-shadow duration-200":s}),layout:"responsive",width:l,height:a});return(0,r.jsx)("div",{className:"sm:mx-0",children:s?(0,r.jsx)(c.default,{as:"/posts/".concat(s),href:"/posts/[slug]",children:(0,r.jsx)("a",{"aria-label":n,children:o})}):o})},o=function(){return(0,r.jsx)("footer",{children:"footer"})},d=t(9008),u=function(){return(0,r.jsxs)(d.default,{children:[(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat("/AASweb","/favicon/apple-touch-icon.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat("/AASweb","/favicon/favicon-32x32.png")}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat("/AASweb","/favicon/favicon-16x16.png")}),(0,r.jsx)("link",{rel:"manifest",href:"".concat("/AASweb","/favicon/site.webmanifest")}),(0,r.jsx)("link",{rel:"mask-icon",href:"".concat("/AASweb","/favicon/safari-pinned-tab.svg"),color:"#000000"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#000000"}),(0,r.jsx)("meta",{name:"msapplication-config",content:"".concat("/AASweb","favicon/browserconfig.xml")}),(0,r.jsx)("meta",{name:"theme-color",content:"#000"}),(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"/feed.xml"}),(0,r.jsx)("meta",{name:"description",content:"Asociaci\xf3n Abejas Silvestres"})]})},h=t(4942),x=t(4925),m=t(1163),f=["className","children","href"];function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(Object(t),!0).forEach((function(n){(0,h.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b=function(e){var n=e.className,t=e.children,s=e.href,a=(0,x.Z)(e,f),l=s===(0,m.useRouter)().pathname;return(0,r.jsx)(c.default,p(p({href:s},a),{},{children:(0,r.jsx)("a",{className:i()(l?"text-primary-500":"text-neutral-900","inline-block","hover:text-primary-500","focus-within:text-primary-500","outline-none","font-raleway","font-semibold","text-lg","border-b-2",l?"border-primary-400":"border-neutral-0",n),children:t})}))},v=[{href:"/",label:"Abejas Silvestres"},{href:"/bees",label:"Abejas de Espa\xf1a"},{href:"/projects",label:"Proyectos"},{href:"/resources",label:"Recursos"},{href:"/posts",label:"Blog"},{href:"/about",label:"Qui\xe9nes somos"}],g=function(){return(0,r.jsx)("nav",{className:"block shadow-sm",children:(0,r.jsx)("ul",{className:"flex justify-center",children:v.map((function(e){var n=e.href,t=e.label;return(0,r.jsx)("li",{children:(0,r.jsx)(b,{className:"py-4 px-6",href:n,children:t})},n)}))})})},w=function(e){var n=e.children;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{}),(0,r.jsx)(g,{}),(0,r.jsx)("div",{className:"min-h-screen",children:(0,r.jsx)("main",{children:n})}),(0,r.jsx)(o,{})]})};var y=t(4865),N=t.n(y),A=function(e){var n=e.content;return(0,r.jsx)("div",{className:"max-w-2xl mx-auto",children:(0,r.jsx)("div",{className:N().markdown,dangerouslySetInnerHTML:{__html:n}})})},O=t(3855),k=t(327),_=function(e){var n=e.dateString,t=(0,O.Z)(n);return(0,r.jsx)("time",{dateTime:n,children:(0,k.Z)(t,"LLLL\td, yyyy")})},S=function(e){var n=e.children;return(0,r.jsx)("h1",{className:"text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left",children:n})},P=function(e){var n=e.title,t=e.coverImage,s=e.date;e.author;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(S,{children:n}),(0,r.jsx)("div",{className:"mb-8 md:mb-16 sm:mx-0",children:(0,r.jsx)(l,{title:n,src:t,height:620,width:1240})}),(0,r.jsx)("div",{className:"max-w-2xl mx-auto",children:(0,r.jsx)("div",{className:"mb-6 text-lg",children:(0,r.jsx)(_,{dateString:s})})})]})},E=function(e){var n=e.title,t=e.coverImage,s=e.date,a=e.excerpt,i=(e.author,e.slug);return(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"mb-5",children:(0,r.jsx)(l,{slug:i,title:n,src:t,height:278,width:556})}),(0,r.jsx)("h3",{className:"text-3xl mb-3 leading-snug",children:(0,r.jsx)(c.default,{as:"/posts/".concat(i),href:"/posts/[slug]",children:(0,r.jsx)("a",{className:"hover:underline",children:n})})}),(0,r.jsx)("div",{className:"text-lg mb-4",children:(0,r.jsx)(_,{dateString:s})}),(0,r.jsx)("p",{className:"text-lg leading-relaxed mb-4",children:a})]})}},6124:function(e,n,t){"use strict";t.r(n);var r=t(9008),s=t(5781),a=t(5893);n.default=function(){return(0,a.jsxs)(s.Ar,{children:[(0,a.jsx)(r.default,{children:(0,a.jsx)("title",{children:"Abejas silvestres"})}),(0,a.jsx)(s.W2,{children:"Abejas silvestres"})]})}},8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6124)}])},4865:function(e){e.exports={markdown:"markdown-styles_markdown__3l3iy"}}},function(e){e.O(0,[669,774,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);