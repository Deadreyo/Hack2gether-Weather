(this["webpackJsonpprep-template"]=this["webpackJsonpprep-template"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(8),s=n.n(r),i=n(2),o=(n(14),n.p+"static/media/mlh-prep.270f6887.png"),u=n(0);function d(e){var t=e.error;return Object(u.jsxs)("div",{children:["Error: ",t.message]})}n(16);function l(e){var t=e.isLoaded,n=e.results;return Object(u.jsxs)("div",{className:"Results",children:[!t&&Object(u.jsx)("h2",{children:"Loading..."}),console.log(n),t&&n&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h3",{children:n.weather[0].main}),Object(u.jsxs)("p",{children:["Feels like ",n.main.feels_like,"\xb0C"]}),Object(u.jsx)("i",{children:Object(u.jsxs)("p",{children:[n.name,", ",n.sys.country]})})]})]})}var j=n(4),p=n(6),O=n.n(p),b=n(9),m=n(3),f=n.n(m),h=(n(26),{maxWidth:"800px",margin:"0 auto",color:"#2b2929",marginTop:"5px"});function g(e){var t=e.city,n=e.changeCity,c=a.a.useState({lat:null,lng:null}),r=Object(i.a)(c,2),s=(r[0],r[1]),o=function(){var e=Object(b.a)(O.a.mark((function e(t){var c,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.geocodeByAddress)(t);case 2:return c=e.sent,e.next=5,Object(m.getLatLng)(c[0]);case 5:a=e.sent,n(t),s(a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{children:Object(u.jsx)(f.a,{value:t,onChange:n,onSelect:o,children:function(e){var t=e.getInputProps,n=e.suggestions,c=e.getSuggestionItemProps,a=e.loading;return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",Object(j.a)({className:"search-input"},t({placeholder:"Type city"}))),Object(u.jsxs)("div",{style:h,children:[a?Object(u.jsx)("div",{children:"...loading"}):null,n.map((function(e){var t={backgroundColor:e.active?"#86c9e3":"#fff"};return Object(u.jsx)("div",Object(j.a)(Object(j.a)({},c(e,{style:t})),{},{children:e.description}))}))]})]})}})})}n(27);var v=n.p+"static/media/cap.474e6898.png",x=n.p+"static/media/gloves.45497ed2.png",S=n.p+"static/media/jacket.58fadea5.png",_=n.p+"static/media/raincoat.376a8ef2.png",E=n.p+"static/media/scarf.fbb31feb.png",T=n.p+"static/media/sunglasses.6c5f1538.png",w=n.p+"static/media/suncream.d8793979.png",C=n.p+"static/media/umbrella.df170598.png",P=n.p+"static/media/water_proof_boots.a48e94f8.png",R=n.p+"static/media/watch.f0a65ecb.png",L=n.p+"static/media/goggles.faf692a2.png",y=n.p+"static/media/flashlight.6563cb05.png",N=n.p+"static/media/mask.e0e07086.png",A=function(e){var t=e.weatherKind,n=function(e){switch(e){case"Rain":return[_,P,C];case"Snow":return[T,x,S,E];case"Clear":return[T,v,w];case"Clouds":return[v,R];case"Tornado":return[L,y];case"Drizzle":return[_,C,P];case"Thunderstorm":return[_,y,P];case"Squall":case"Ash":case"Dust":case"Sand":case"Fog":case"Haze":case"Smoke":case"Mist":return[R,L,N];default:return}};return Object(u.jsx)("div",{className:"items-container",children:void 0!==n(t)&&n(t).map((function(e,t){return Object(u.jsx)("div",{className:"items-card",children:Object(u.jsx)("img",{src:e,alt:"required item"})},t)}))})};function k(e){var t=e.getUserLocation;return Object(u.jsx)("button",{onClick:t,className:"get-user-loc-btn",children:"Get My Location"})}var D=n(7),I=n.n(D);n(28);function K(e){var t=e.setIsLoaded,n=e.setResults,a=e.setError,r=Object(c.useRef)(null),s=Object(c.useRef)(null),o=Object(c.useState)(-70.9),d=Object(i.a)(o,2),l=d[0],j=(d[1],Object(c.useState)(42.35)),p=Object(i.a)(j,2),O=p[0],b=(p[1],Object(c.useState)(9)),m=Object(i.a)(b,2),f=m[0];m[1];return Object(c.useEffect)((function(){s.current||(s.current=new I.a.Map({container:r.current,style:"mapbox://styles/mapbox/streets-v11",center:[l,O],zoom:f}),s.current.on("click",(function(e){fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e.lngLat.lat,"&lon=").concat(e.lngLat.lng,"&units=metric&appid=").concat(Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APIKEY)).then((function(e){return e.json()})).then((function(e){200!==e.cod?t(!1):(t(!0),n(e))}),(function(e){t(!0),a(e)}))})))}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("div",{ref:r,className:"map-container"})})}function F(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(i.a)(r,2),j=s[0],p=s[1],O=Object(c.useState)("New York City"),b=Object(i.a)(O,2),m=b[0],f=b[1],h=Object(c.useState)(null),v=Object(i.a)(h,2),x=v[0],S=v[1],_=Object(c.useState)(""),E=Object(i.a)(_,2),T=E[0],w=E[1];return Object(c.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(m,"&units=metric&appid=").concat(Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APIKEY)).then((function(e){return e.json()})).then((function(e){200!==e.cod?p(!1):(p(!0),S(e),w(e.weather[0].main))}),(function(e){p(!0),a(e)}))}),[m]),n?Object(u.jsx)(d,{error:n}):Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:j&&x?T:void 0,children:[Object(u.jsx)("img",{className:"logo",src:o,alt:"MLH Prep Logo"}),Object(u.jsx)("h2",{children:"Enter a city below \ud83d\udc47"}),Object(u.jsx)(g,{city:m,changeCity:f}),Object(u.jsx)(k,{getUserLocation:function(){p(!1),new Promise((function(e,t){navigator.geolocation.getCurrentPosition((function(t){var n=t.coords.latitude,c=t.coords.longitude;e({lat:n,lon:c})}),n)})).then((function(e){fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e.lat,"&lon=").concat(e.lon,"&units=metric&appid=").concat(Object({NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APIKEY)).then((function(e){return e.json()})).then((function(e){p(!0),f(e.name),S(e)}),(function(e){p(!0),a(e)}))}))}}),Object(u.jsxs)("div",{className:"card-container",children:[Object(u.jsx)(l,{isLoaded:j,results:x}),j&&x&&Object(u.jsx)(A,{weatherKind:x.weather[0].main})]}),Object(u.jsx)(K,{setIsLoaded:p,setResults:S,setError:a})]})})}I.a.accessToken="pk.eyJ1Ijoicm95Z2JldiIsImEiOiJjbDFjYzF2ajUwMHgzM2NwcXBzdWVxM3ZvIn0.2k8N-UN2Y7ZdT5vwml9QAw";n(29),n(30);s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(F,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.40d9c5d6.chunk.js.map