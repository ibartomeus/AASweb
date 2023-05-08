(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[365],{1813:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.degToRad=function(e){return e*Math.PI/180},n.radToDeg=function(e){return 180*e/Math.PI},n.knotsToMeterPerSecond=function(e){return.514444*e},n.meterPerSecondToKnots=function(e){return e/.514444},n.knotsToKmPerHour=function(e){return 1.852*e},n.kmPerHourToKnots=function(e){return e/1.852}},8627:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.cpa=function(e,n){var t=(0,r.headingDistanceTo)(e.location,n.location),u=t.distance,l=t.heading,s=u*Math.sin((0,a.degToRad)(l)),c=u*Math.cos((0,a.degToRad)(l)),d={position:{x:0,y:0},vector:{x:e.speed*Math.sin((0,a.degToRad)(e.heading)),y:e.speed*Math.cos((0,a.degToRad)(e.heading))}},f={position:{x:s,y:c},vector:{x:n.speed*Math.sin((0,a.degToRad)(n.heading)),y:n.speed*Math.cos((0,a.degToRad)(n.heading))}};return{time:o(d,f),distance:i(d,f)}},n.cpaTime=o,n.cpaDistance=i;var r=t(3658),a=t(1813);function o(e,n){var t=c(e.vector,n.vector),r=u(t,t);return r<1e-8?0:-u(c(e.position,n.position),t)/r}function i(e,n){var t=o(e,n),r=l(e.position,s(t,e.vector)),a=l(n.position,s(t,n.vector));return function(e){return Math.sqrt(u(e,e))}(c(r,a))}function u(e,n){return e.x*n.x+e.y*n.y}function l(e,n){return{x:e.x+n.x,y:e.y+n.y}}function s(e,n){return{x:e*n.x,y:e*n.y}}function c(e,n){return{x:e.x-n.x,y:e.y-n.y}}},3658:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.EARTH_RADIUS=void 0,n.isEqual=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return!(!e||!n)&&(Math.abs(y(e)-y(n))<=t&&Math.abs(p(e)-p(n))<=t)},n.isLatLon=s,n.isLatLng=c,n.isLatitudeLongitude=d,n.isLonLatTuple=f,n.getLocationType=g,n.createLocation=m,n.toLatLon=function(e){if(f(e))return{lat:e[1],lon:e[0]};if(s(e))return{lat:e.lat,lon:e.lon};if(c(e))return{lat:e.lat,lon:e.lng};if(d(e))return{lat:e.latitude,lon:e.longitude};throw new Error("Unknown location format "+JSON.stringify(e))},n.toLatLng=function(e){if(f(e))return{lat:e[1],lng:e[0]};if(s(e))return{lat:e.lat,lng:e.lon};if(c(e))return{lat:e.lat,lng:e.lng};if(d(e))return{lat:e.latitude,lng:e.longitude};throw new Error("Unknown location format "+JSON.stringify(e))},n.toLatitudeLongitude=function(e){if(f(e))return{latitude:e[1],longitude:e[0]};if(s(e))return{latitude:e.lat,longitude:e.lon};if(c(e))return{latitude:e.lat,longitude:e.lng};if(d(e))return{latitude:e.latitude,longitude:e.longitude};throw new Error("Unknown location format "+JSON.stringify(e))},n.toLonLatTuple=h,n.getLongitude=p,n.getLatitude=y,n.moveTo=v,n.headingDistanceTo=b,n.headingTo=function(e,n){return b(e,n).heading},n.distanceTo=_,n.insideBoundingBox=function(e,n){var t=y(e),r=p(e),a=p(n.topLeft),o=y(n.topLeft),i=p(n.bottomRight),u=y(n.bottomRight),l=Math.min(o,u),s=Math.max(o,u),c=Math.min(a,i),d=Math.max(a,i);return r>=c&&r<=d&&t>=l&&t<=s},n.insidePolygon=function(e,n){if(!n||!Array.isArray(n))throw new TypeError("Invalid polygon. Array with locations expected");if(0===n.length)throw new TypeError("Invalid polygon. Non-empty Array expected");return(0,o.default)(h(e),n.map(h))},n.insideCircle=function(e,n,t){return _(n,e)<=t},n.normalizeHeading=function(e){var n=e%360;n<0&&(n+=360);n>=360&&(n-=360);return n},n.normalizeLatitude=M,n.normalizeLongitude=w,n.normalizeLocation=function(e){if(f(e))return[w(e[0]),M(e[1])];if(s(e))return{lat:M(e.lat),lon:w(e.lon)};if(c(e))return{lat:M(e.lat),lng:w(e.lng)};if(d(e))return{latitude:M(e.latitude),longitude:w(e.longitude)};throw new Error("Unknown location format "+JSON.stringify(e))},n.average=function(e){if(!Array.isArray(e)||0===e.length)return null;var n=e[0],t=L(e.map(y)),r=L(e.map(p));return m(t,r,g(n))},n.getBoundingBox=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!Array.isArray(e)||0===e.length)return{topLeft:null,bottomRight:null};var t=g(e[0]),r=Math.max.apply(Math,u(e.map(y))),a=Math.min.apply(Math,u(e.map(p))),o=Math.min.apply(Math,u(e.map(y))),i=Math.max.apply(Math,u(e.map(p))),l=m(r,a,t),s=m(o,i,t);if(null===n||0===n)return{topLeft:l,bottomRight:s};var c=Math.SQRT2*n;return{topLeft:v(l,{heading:315,distance:c}),bottomRight:v(s,{heading:135,distance:c})}};var r,a=t(6960),o=(r=a)&&r.__esModule?r:{default:r},i=t(1813);function u(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}var l=n.EARTH_RADIUS=6378137;function s(e){return!!e&&"number"===typeof e.lat&&"number"===typeof e.lon}function c(e){return!!e&&"number"===typeof e.lat&&"number"===typeof e.lng}function d(e){return!!e&&"number"===typeof e.latitude&&"number"===typeof e.longitude}function f(e){return Array.isArray(e)&&"number"===typeof e[0]&&"number"===typeof e[1]}function g(e){if(f(e))return"LonLatTuple";if(s(e))return"LatLon";if(c(e))return"LatLng";if(d(e))return"LatitudeLongitude";throw new Error("Unknown location format "+JSON.stringify(e))}function m(e,n,t){if("LonLatTuple"===t)return[n,e];if("LatLon"===t)return{lat:e,lon:n};if("LatLng"===t)return{lat:e,lng:n};if("LatitudeLongitude"===t)return{latitude:e,longitude:n};throw new Error("Unknown location format "+JSON.stringify(location))}function h(e){if(f(e))return[e[0],e[1]];if(s(e))return[e.lon,e.lat];if(c(e))return[e.lng,e.lat];if(d(e))return[e.longitude,e.latitude];throw new Error("Unknown location format "+JSON.stringify(e))}function p(e){if(f(e))return e[0];if(s(e))return e.lon;if(c(e))return e.lng;if(d(e))return e.longitude;throw new Error("Unknown location format "+JSON.stringify(e))}function y(e){if(f(e))return e[1];if(s(e))return e.lat;if(c(e))return e.lat;if(d(e))return e.latitude;throw new Error("Unknown location format "+JSON.stringify(e))}function v(e,n){var t=y(e),r=p(e),a=n.heading,o=n.distance,u=o*Math.cos((0,i.degToRad)(a))/l,s=o*Math.sin((0,i.degToRad)(a))/(l*Math.cos((0,i.degToRad)(t)));return m(t+(0,i.radToDeg)(u),r+(0,i.radToDeg)(s),g(e))}function b(e,n){var t=y(e),r=p(e),a=y(n),o=p(n),u=(0,i.degToRad)(t),s=(0,i.degToRad)(a),c=(0,i.degToRad)(a-t),d=(0,i.degToRad)(o-r),f=Math.sin(c/2)*Math.sin(c/2)+Math.cos(u)*Math.cos(s)*Math.sin(d/2)*Math.sin(d/2),g=2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f)),m=l*g,h=Math.sin(d)*Math.cos(s),v=Math.cos(u)*Math.sin(s)-Math.sin(u)*Math.cos(s)*Math.cos(d);return{distance:m,heading:(0,i.radToDeg)(Math.atan2(h,v))}}function _(e,n){return b(e,n).distance}function M(e){return Math.asin(Math.sin(e/180*Math.PI))*(180/Math.PI)}function w(e){var n=e%360;return n>180&&(n-=360),n<=-180&&(n+=360),n}function L(e){return function(e){return e.reduce((function(e,n){return e+n}),0)}(e)/e.length}},5795:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(1813);Object.keys(r).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return r[e]}})}));var a=t(3658);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(n,e,{enumerable:!0,get:function(){return a[e]}})}));var o=t(8627);Object.defineProperty(n,"cpa",{enumerable:!0,get:function(){return o.cpa}})},8447:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/iberian-bees",function(){return t(6310)}])},638:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){r(e,n,t[n])}))}return e}n.default=function(e,n){var t=o.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};i=e,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](i):i instanceof l)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=a({},r,e));var i,l;var s=r=a({},r,n);if(s.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(s.suspense)return t(s);r.loadableGenerated&&delete(r=a({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(t,r);delete r.ssr}return t(r)};i(t(7294));var o=i(t(4302));function i(e){return e&&e.__esModule?e:{default:e}}function u(e,n){return delete n.webpack,delete n.modules,e(n)}},6319:function(e,n,t){"use strict";var r;Object.defineProperty(n,"__esModule",{value:!0}),n.LoadableContext=void 0;var a=((r=t(7294))&&r.__esModule?r:{default:r}).default.createContext(null);n.LoadableContext=a},4302:function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){a(e,n,t[n])}))}return e}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i,u=(i=t(7294))&&i.__esModule?i:{default:i},l=t(7161),s=t(6319);var c=[],d=[],f=!1;function g(e){var n=e(),t={loading:!0,loaded:null,error:null};return t.promise=n.then((function(e){return t.loading=!1,t.loaded=e,e})).catch((function(e){throw t.loading=!1,t.error=e,e})),t}var m=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=n,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var n,t,a;return n=e,(t=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var n=this._res,t=this._opts;if(n.loading){if("number"===typeof t.delay)if(0===t.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),t.delay)}if("number"===typeof t.timeout){var a=this;this._timeout=setTimeout((function(){a._update({timedOut:!0})}),t.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(n){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=o({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var n=this;return this._callbacks.add(e),function(){n._callbacks.delete(e)}}}])&&r(n.prototype,t),a&&r(n,a),e}();function h(e){return function(e,n){var t=function(){if(!a){var n=new m(e,r);a={getCurrentValue:n.getCurrentValue.bind(n),subscribe:n.subscribe.bind(n),retry:n.retry.bind(n),promise:n.promise.bind(n)}}return a.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},n);r.suspense&&(r.lazy=u.default.lazy(r.loader));var a=null;if(!f&&"function"===typeof r.webpack&&!r.suspense){var i=r.webpack();d.push((function(e){var n=!0,r=!1,a=void 0;try{for(var o,u=i[Symbol.iterator]();!(n=(o=u.next()).done);n=!0){var l=o.value;if(-1!==e.indexOf(l))return t()}}catch(s){r=!0,a=s}finally{try{n||null==u.return||u.return()}finally{if(r)throw a}}}))}var c=r.suspense?function(e,n){return u.default.createElement(r.lazy,o({},e,{ref:n}))}:function(e,n){t();var o=u.default.useContext(s.LoadableContext),i=l.useSubscription(a);return u.default.useImperativeHandle(n,(function(){return{retry:a.retry}}),[]),o&&Array.isArray(r.modules)&&r.modules.forEach((function(e){o(e)})),u.default.useMemo((function(){return i.loading||i.error?u.default.createElement(r.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:a.retry}):i.loaded?u.default.createElement(function(e){return e&&e.__esModule?e.default:e}(i.loaded),e):null}),[e,i])};return c.preload=function(){return!r.suspense&&t()},c.displayName="LoadableComponent",u.default.forwardRef(c)}(g,e)}function p(e,n){for(var t=[];e.length;){var r=e.pop();t.push(r(n))}return Promise.all(t).then((function(){if(e.length)return p(e,n)}))}h.preloadAll=function(){return new Promise((function(e,n){p(c).then(e,n)}))},h.preloadReady=function(e){var n=void 0===e?[]:e;return new Promise((function(e){var t=function(){return f=!0,e()};p(d,n).then(t,t)}))},window.__NEXT_PRELOADREADY=h.preloadReady;var y=h;n.default=y},6310:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return m},default:function(){return h}});var r=t(5893),a=t(5795),o=t(5152),i=t(9008),u=t(7294),l=t(9216),s=t(9707),c=t(7500),d=function(e,n,t){if(!n&&!t)return[];var r=1e5;return n?t?e.filter((function(e){return!n||n===e.species})).filter((function(e){var n=e.decimalLatitude,o=e.decimalLongitude;return!t||(0,a.insideCircle)({lat:Number(n),lon:Number(o)},{lat:t[0],lon:t[1]},r)})):e.filter((function(e){return!n||n===e.species})):e.filter((function(e){var n=e.decimalLatitude,o=e.decimalLongitude;return!t||(0,a.insideCircle)({lat:Number(n),lon:Number(o)},{lat:t[0],lon:t[1]},r)}))},f=(0,o.default)((function(){return Promise.all([t.e(269),t.e(113),t.e(148)]).then(t.bind(t,8148))}),{loadableGenerated:{webpack:function(){return[8148]},modules:["iberian-bees.js -> ../containers/IberianBees/Map"]},ssr:!1}),g=(0,o.default)((function(){return Promise.all([t.e(484),t.e(568)]).then(t.bind(t,3568))}),{loadableGenerated:{webpack:function(){return[3568]},modules:["iberian-bees.js -> ../components/Autocomplete/Autocomplete"]},ssr:!1}),m=!0;function h(e){var n=e.data,t=e.intro,a=e.species,o=(0,u.useState)(""),m=o[0],h=o[1],p=(0,u.useState)(""),y=p[0],v=p[1],b=c.c.find((function(e){return e.name===y})),_=n.find((function(e){return e.species===m}));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.default,{children:(0,r.jsx)("title",{children:"Abjeas silvestres"})}),(0,r.jsxs)(l.Ar,{children:[(0,r.jsx)(l.W2,{className:"pt-24 pb-12",children:(0,r.jsx)(s.el.p,{content:t})}),(0,r.jsx)("div",{className:"bg-primary-50",children:(0,r.jsxs)(l.W2,{className:"pt-12 pb-36",children:[(0,r.jsxs)("div",{className:"grid md:grid-cols-2 mb-14 gap-8",children:[(0,r.jsx)("div",{children:(0,r.jsx)(g,{selectedItem:(null===_||void 0===_?void 0:_.species)||"",onSelectedItemChange:function(e){var n=e.selectedItem;return h(n)},label:"Filtrar por especie",placeholder:"Comienza escribir aqui...",items:a})}),(0,r.jsx)("div",{children:(0,r.jsx)(g,{selectedItem:(null===b||void 0===b?void 0:b.name)||"",onSelectedItemChange:function(e){var n=e.selectedItem;return v(n)},label:"Filtrar por ciudad",placeholder:"Comienza escribir aqui...",items:c.c.map((function(e){return e.name})).sort((function(e,n){return e.localeCompare(n)}))})})]}),(0,r.jsx)("div",{className:"leaflet-container",children:(0,r.jsx)(f,{center:null===b||void 0===b?void 0:b.geo,data:d(n,m,null===b||void 0===b?void 0:b.geo)})})]})})]})]})}},7500:function(e,n,t){"use strict";t.d(n,{c:function(){return r}});var r=[{name:"Andorra",geo:[42.5,1.5]},{name:"Madrid",geo:[40.4167,-3.7167]},{name:"Barcelona",geo:[41.3825,2.1769]},{name:"Sevilla",geo:[37.39,-5.99]},{name:"M\xe1laga",geo:[36.7194,-4.42]},{name:"Valencia",geo:[39.47,-.3764]},{name:"Zaragoza",geo:[41.6483,-.883]},{name:"Palma",geo:[39.5667,2.65]},{name:"Murcia",geo:[37.9861,-1.1303]},{name:"Las Palmas",geo:[28.1272,-15.4314]},{name:"A Coru\xf1a",geo:[43.3713,-8.4188]},{name:"Bilbao",geo:[43.2569,-2.9236]},{name:"Alicante",geo:[38.3453,-.4831]},{name:"C\xf3rdoba",geo:[37.8845,-4.7796]},{name:"Valladolid",geo:[41.6528,-4.7236]},{name:"Vitoria-Gasteiz",geo:[42.85,-2.6833]},{name:"Granada",geo:[37.1781,-3.6008]},{name:"Oviedo",geo:[43.36,-5.845]},{name:"Santa Cruz",geo:[28.4667,-16.25]},{name:"Pamplona",geo:[42.8167,-1.65]},{name:"Le\xf3n",geo:[42.6056,-5.57]},{name:"Almer\xeda",geo:[36.8403,-2.4681]},{name:"Logro\xf1o",geo:[42.465,-2.4456]},{name:"Donostia",geo:[43.32,-1.98]},{name:"Albacete",geo:[38.9956,-1.8558]},{name:"Castell\xf3n de la Plana",geo:[39.9831,-.0331]},{name:"Santander",geo:[43.4628,-3.805]},{name:"Burgos",geo:[42.35,-3.6822]},{name:"Guadalajara",geo:[40.6337,-3.1674]},{name:"Badajoz",geo:[38.8803,-6.9753]},{name:"Salamanca",geo:[40.9667,-5.6639]},{name:"Huelva",geo:[37.25,-6.95]},{name:"Tarragona",geo:[41.1187,1.2453]},{name:"C\xe1diz",geo:[36.535,-6.2975]},{name:"Ja\xe9n",geo:[37.7667,-3.7711]},{name:"Girona",geo:[41.9833,2.8167]},{name:"Lugo",geo:[43.0167,-7.55]},{name:"C\xe1ceres",geo:[39.4833,-6.3667]},{name:"Santiago de Compostela",geo:[42.8778,-8.5444]},{name:"Toledo",geo:[39.8567,-4.0244]},{name:"Pontevedra",geo:[42.4333,-8.6333]},{name:"Zamora",geo:[41.5033,-5.7556]},{name:"M\xe9rida",geo:[38.9,-6.3333]},{name:"\xc1vila",geo:[40.65,-4.6833]},{name:"Cuenca",geo:[40.0667,-2.15]},{name:"Huesca",geo:[42.1333,-.4167]},{name:"Teruel",geo:[40.3456,-1.1065]},{name:"Ourense",geo:[42.3364,-7.8633]},{name:"Palencia",geo:[42.0167,-4.5333]},{name:"Lleida",geo:[41.6167,.6222]},{name:"Segovia",geo:[40.9481,-4.1184]},{name:"Ciudad Real",geo:[38.9833,-3.9167]},{name:"Soria",geo:[41.7667,-2.4667]},{name:"Aveiro",geo:[40.6389,-8.6553]},{name:"Ponta Delgada",geo:[37.74,-25.67]},{name:"Beja",geo:[38.0333,-7.8833]},{name:"Braga",geo:[41.5333,-8.4167]},{name:"Bragan\xe7a",geo:[41.8,-6.75]},{name:"Castelo Branco",geo:[39.823,-7.4931]},{name:"Coimbra",geo:[40.2111,-8.4291]},{name:"\xc9vora",geo:[38.5667,-7.9]},{name:"Faro",geo:[37.0161,-7.935]},{name:"Guarda",geo:[40.5364,-7.2683]},{name:"Leiria",geo:[39.7444,-8.8072]},{name:"Lisboa",geo:[38.7452,-9.1604]},{name:"Funchal",geo:[32.65,-16.9167]},{name:"Portalegre",geo:[39.3167,-7.4167]},{name:"Porto",geo:[41.1495,-8.6108]},{name:"Santar\xe9m",geo:[39.2369,-8.685]},{name:"Set\xfabal",geo:[38.5243,-8.8926]},{name:"Viana do Castelo",geo:[41.7,-8.8333]},{name:"Vila Real",geo:[41.3002,-7.7398]},{name:"Viseu",geo:[40.6667,-7.9167]}]},5152:function(e,n,t){e.exports=t(638)},6960:function(e){e.exports=function(e,n){for(var t=e[0],r=e[1],a=!1,o=0,i=n.length-1;o<n.length;i=o++){var u=n[o][0],l=n[o][1],s=n[i][0],c=n[i][1];l>r!=c>r&&t<(s-u)*(r-l)/(c-l)+u&&(a=!a)}return a}}},function(e){e.O(0,[774,415,482,707,888,179],(function(){return n=8447,e(e.s=n);var n}));var n=e.O();_N_E=n}]);