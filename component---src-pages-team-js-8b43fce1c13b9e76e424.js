(self.webpackChunkcivic_actions_homesite=self.webpackChunkcivic_actions_homesite||[]).push([[371],{9458:function(e,t,a){"use strict";var n=a(7294);t.Z=function(e){var t=e.title,a=e.description;return n.createElement("div",{className:"hero-component"},n.createElement("div",{className:"inner"},n.createElement("h1",null,t),n.createElement("p",{className:"body"},a)))}},9763:function(e,t,a){"use strict";var n=a(7294),r=a(5444);t.Z=function(e){var t=e.size,a=e.src,i=e.text,l=e.type;return n.createElement(r.Link,{className:"button "+("secondary"==l?"button__secondary":"button__primary")+" "+(null!=t?t:" "),to:a},i)}},567:function(e,t,a){"use strict";var n=a(7294),r=a(4320);t.Z=function(e){var t=e.img,a=e.quote,i=e.name,l=e.role,c=e.classes;return n.createElement("div",{className:"staff-quote quote "+c},n.createElement("div",{className:"inner"},n.createElement("img",{src:t,alt:"",className:"picture"}),n.createElement("div",{className:"quote"},n.createElement("h4",null,a),n.createElement("div",{className:"body"},i),n.createElement("div",{className:"body"},l)),n.createElement("img",{src:r.Z,alt:"",className:"pattern"})))}},6788:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var n=a(7294),r=a(5444),i=a.p+"static/CA-white-e8d26f610893dfd9387a448d81952c5d.svg",l=a(9235),c=a(8355),s=a(6933),m=a(7985),o=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1];return(0,n.useEffect)((function(){window.addEventListener("scroll",(function(){a(window.scrollY>450)}))}),[]),n.createElement("header",{className:t?"header red-header scrolled":"header red-header"},n.createElement("div",{className:"red-header--header"},n.createElement("div",{className:"inner"},n.createElement(r.Link,{to:"/",className:"logo"},n.createElement("img",{src:i,alt:"Civic Actions Logo"})),n.createElement(s.Z,{redHeader:!0}),n.createElement(m.Z,{right:!0,noTransition:!0,width:"75%",customBurgerIcon:n.createElement("img",{src:l.Z}),customCrossIcon:n.createElement("img",{src:c.Z})}))))},d=a(3958),u=a(4396),E=a(5414),v=a(9609),g=function(e){var t=e.children,a=(0,n.useState)(!0),r=a[0],i=a[1];return n.createElement("div",{style:{position:"relative"}},n.createElement(E.q,{htmlAttributes:{lang:"en"}}),n.createElement("div",null,n.createElement(v.p,{id:"main-content"}),n.createElement("div",{className:"red-rectangle"}),n.createElement(o,null),n.createElement("main",{id:"main-content"},n.createElement("div",null,t)),n.createElement(d.Z,null)),n.createElement(u.Z,{hidden:r,close:function(){return i(!0)}}))}},3790:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return v}});var n=a(7294),r=a(6788),i=a(9285),l=(a(8037),function(e){var t=e.image,a=(e.link,e.name),r=e.title;return n.createElement("div",{className:"teaser-grid--wrapper"},n.createElement("div",{className:"teaser-grid"},n.createElement("div",{className:"teaser-grid__name teaser__link"},n.createElement("div",{className:"teaser-grid__image"},n.createElement(i.G,{image:(0,i.d)(t),alt:a})),n.createElement("div",{className:"teaser-grid__text"},n.createElement("div",{className:"teaser-grid__title"},a),n.createElement("div",{className:"teaser-grid__title"},r)))))}),c=a(567),s=(a(9458),a(5444)),m=a.p+"static/alanna_casey_profile-ea9badda247092360666901c30dcdfc3.jpg",o=a(5414),d=a(9763),u=function(e){return e.team.map((function(e,t){var a=e.Path,r=e.Name,i=e.Role,c=e.Image;return n.createElement(l,{image:c,name:r,link:a,title:i})}))},E=function(e){e.team;var t=e.parentCallback,a=e.filterState;return[{id:1,value:"Leadership",name:"Leadership"},{id:2,value:"Growth Strategy",name:"Growth_Strategy"},{id:3,value:"People Operations",name:"People_Operations"},{id:4,value:"Product Design",name:"Product_Design"},{id:5,value:"Engineering",name:"Engineering"},{id:6,value:"Client Services",name:"Client_Services"}].map((function(e,r){var i=e.name===a;return n.createElement("button",{key:r,className:i?"team-filter-btn selected":"team-filter-btn",onClick:function(e){t(e)},name:e.name},e.value)}))},v=function(){var e,t=(0,s.useStaticQuery)("977985707").allStrapiStaffProfile.nodes,a=(0,n.useState)(null),i=a[0],l=a[1];return e=null!=i?t.filter((function(e){var t=e.Category.map((function(e){return e.Category}));return console.log(t),!t.indexOf(i)||(!!t.includes(i)||void 0)})):t,n.createElement(r.Z,null,n.createElement(o.q,null,n.createElement("title",{"data-react-helmet":"true"},"Civicactions Team Member Page")),n.createElement("section",{className:"careers--hero-section hero-component"},n.createElement("div",{className:"inner"},n.createElement("h1",null,"Work for the public good."),n.createElement("p",{className:"body"},"Join our team of talented and open-minded people working to build modern and accessible government services for all."),n.createElement(d.Z,{src:"/careers#open-positions",text:"See open positions"}))),n.createElement("section",{className:"team--filter-btns-section"},n.createElement("div",{className:"inner"},n.createElement(E,{parentCallback:function(e){console.log(e),"undefined"!==e.target.name&&(i===e.target.name?l(null):l(e.target.name))},team:t,filterState:i}))),n.createElement("section",{className:"team--staff-teasers-grid-section"},n.createElement("div",{className:"inner"},n.createElement("div",{className:"section__teaser-grid"},n.createElement(u,{team:e})))),n.createElement(c.Z,{quote:"My teammates are brilliant innovators, high performers, and conscientious human beings. Together we’re working to improve lives.",name:"Alanna Casey",role:"Technical Writer",img:m}))}},4320:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAABQCAYAAABiZJe7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGkSURBVHgB7ZjBUcMwEEVXSgMpgRy5OeYCXdACVEAoBDoIJWAqgCMnklu4hQ7iBmzx5YEchGzGM8iSmP8PjrN6yaxmstEbK0F258WJUrMHI1IokTlKlTHN6vR1+yGexOSVXRQ123wtHIP3dWuapfulsXmNndy7izbY3dzu0q3H5jXuL6Un+GDhKUflNTqv+wDj32lUXqPrbR/QGnlya7F5jem78u3KiKmVNDc/6pF53U0ppg+16nsBlxcx7dL3t5MazzC5RdkLXSIgT5cIzdMlQvN0ial5hsktdAm6hMPTJULzdInQPF2CYSYOXYIu4fB0idB8bi5R5eYSK7oEk3uUJJ73i7OuRwyjwW84K5e4xes+N5coc3OJNV0iNE+X+CP+4OEPKbtEidvHrn80Cv4ZfEmXYDxJ0iVw2tkDRGH4jg0m6xK2WWRhT7VcXGIB/i0nl7ijS8TkY7tE5eE3Q3xMl+jcwMNfp+gSvW5Al2BGZlKX2OEZg+sGXi5Rl+jcwG06dZewk793+KRdYu3h6RL/3iUG3WAsP4VLDLrBWF6n9pzhN/4TAmXV9wKUQzUAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=component---src-pages-team-js-8b43fce1c13b9e76e424.js.map