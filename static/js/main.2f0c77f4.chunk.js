(this["webpackJsonpprep-template"]=this["webpackJsonpprep-template"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(5),r=c.n(s),i=c(2),o=(c(10),c.p+"static/media/mlh-prep.270f6887.png"),j=c(0);function u(e){var t=e.error;return Object(j.jsxs)("div",{children:["Error: ",t.message]})}function d(e){var t=e.isLoaded,c=e.results;return Object(j.jsxs)("div",{className:"Results",children:[!t&&Object(j.jsx)("h2",{children:"Loading..."}),console.log(c),t&&c&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:c.weather[0].main}),Object(j.jsxs)("p",{children:["Feels like ",c.main.feels_like,"\xb0C"]}),Object(j.jsx)("i",{children:Object(j.jsxs)("p",{children:[c.name,", ",c.sys.country]})})]})]})}function l(e){var t=e.city,c=e.changeCity;return Object(j.jsx)("input",{type:"text",value:t,onChange:function(e){return c(e.target.value)}})}var p=function(e){var t=e.img_src;return Object(j.jsx)("div",{className:"card",children:Object(j.jsx)("img",{src:t,alt:"required item"})})},b=c.p+"static/media/cap.474e6898.png",m=c.p+"static/media/gloves.45497ed2.png",f=c.p+"static/media/jacket.58fadea5.png",O=c.p+"static/media/raincoat.376a8ef2.png",h=c.p+"static/media/scarf.fbb31feb.png",g=c.p+"static/media/sunglasses.6c5f1538.png",x=c.p+"static/media/suncream.d8793979.png",v=c.p+"static/media/umbrella.df170598.png",w=c.p+"static/media/water_proof_boots.a48e94f8.png",y=function(e){var t=e.weatherKind,c={Rain:[O,w,v],Snow:[g,m,f,h],Clear:[g,b,x]};return Object(j.jsx)(j.Fragment,{children:void 0!==c[t]&&c[t].map((function(e,t){return Object(j.jsx)(p,{img_src:e},t)}))})},k=c(4),L=c.n(k);function S(e){var t=e.setIsLoaded,c=e.setResults,a=e.setError,s=Object(n.useRef)(null),r=Object(n.useRef)(null),o=Object(n.useState)(-70.9),u=Object(i.a)(o,2),d=u[0],l=(u[1],Object(n.useState)(42.35)),p=Object(i.a)(l,2),b=p[0],m=(p[1],Object(n.useState)(9)),f=Object(i.a)(m,2),O=f[0];f[1];return Object(n.useEffect)((function(){r.current||(r.current=new L.a.Map({container:s.current,style:"mapbox://styles/mapbox/streets-v11",center:[d,b],zoom:O}),r.current.on("click",(function(e){fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e.lngLat.lat,"&lon=").concat(e.lngLat.lng,"&units=metric&appid=").concat("192ee27e9e33ab104f4138ddd5ee752f")).then((function(e){return e.json()})).then((function(e){200!==e.cod?t(!1):(t(!0),c(e))}),(function(e){t(!0),a(e)}))})))}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{ref:s,className:"map-container"})})}function E(){var e=Object(n.useState)(null),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(i.a)(s,2),p=r[0],b=r[1],m=Object(n.useState)("New York City"),f=Object(i.a)(m,2),O=f[0],h=f[1],g=Object(n.useState)(null),x=Object(i.a)(g,2),v=x[0],w=x[1];return Object(n.useEffect)((function(){fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(O,"&units=metric&appid=").concat("192ee27e9e33ab104f4138ddd5ee752f")).then((function(e){return e.json()})).then((function(e){200!==e.cod?b(!1):(b(!0),w(e))}),(function(e){b(!0),a(e)}))}),[O]),c?Object(j.jsx)(u,{error:c}):Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{className:"logo",src:o,alt:"MLH Prep Logo"}),Object(j.jsx)("h2",{children:"Enter a city below \ud83d\udc47"}),Object(j.jsx)(l,{city:O,changeCity:h}),Object(j.jsx)(d,{isLoaded:p,results:v}),p&&v&&Object(j.jsx)(y,{weatherKind:v.weather[0].main}),Object(j.jsx)(S,{setIsLoaded:b,setResults:w,setError:a})]})})}L.a.accessToken="pk.eyJ1Ijoicm95Z2JldiIsImEiOiJjbDFjYzF2ajUwMHgzM2NwcXBzdWVxM3ZvIn0.2k8N-UN2Y7ZdT5vwml9QAw";c(12),c(13);r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(E,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.2f0c77f4.chunk.js.map