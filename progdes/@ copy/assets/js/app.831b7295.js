(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/progdes/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0529":function(t,e,a){},"3d3d":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar",{attrs:{appStep:t.step},on:{"change-step":function(e){t.step=e}}}),a("div",{attrs:{id:"stepper"}},[1==t.step?a("welcome"):t._e(),2==t.step?a("challenge-1",{attrs:{title:t.challenges.first.title,description:t.challenges.first.description}}):t._e(),3==t.step?a("challenge-2",{attrs:{title:t.challenges.second.title,description:t.challenges.second.description}}):t._e(),4==t.step?a("challenge-3",{attrs:{title:t.challenges.third.title,description:t.challenges.third.description}}):t._e()],1),a("step-controls",{attrs:{appStep:t.step},on:{"change-step":function(e){t.step=e}}})],1)},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary m-4"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("ACCSS Programming-Design Competition")]),a("ul",{staticClass:"navbar-nav mr-auto"},t._l(t.navbarItems,(function(e){return a("li",{key:e.text,staticClass:"nav-item p-2"},[a("a",{staticClass:"nav-link",class:"Challenges:"==e.text&&t.step>1||e.step==t.step?"active":"",attrs:{href:"#"},on:{click:function(a){t.step=e.step}}},[t._v(" "+t._s(e.text))])])})),0)])},o=[],l={props:["appStep"],data:function(){return{navbarItems:[{step:1,text:"Welcome",link:!0},{step:2,text:"Challenges:",link:!1},{step:2,text:"1",link:!0},{step:3,text:"2",link:!0},{step:4,text:"3",link:!0},{step:5,text:"4",link:!0},{step:6,text:"5",link:!0}]}},computed:{step:{get:function(){return this.appStep},set:function(t){this.$emit("change-step",t)}}}},c=l,u=a("2877"),d=Object(u["a"])(c,i,o,!1,null,null,null),p=d.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container d-flex flex-column"},[a("h1",{staticClass:"display-4 text-center"},[t._v(" Welcome to the ACCSS Programming-Design Competition! ")])])}],h={},f=h,v=Object(u["a"])(f,g,m,!1,null,null,null),b=v.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex m-4"},[a("button",{staticClass:"btn btn-outline-danger mx-4 w-100",attrs:{disabled:1==t.step},on:{click:function(e){t.step--}}},[t._v(" Previous ")]),a("button",{staticClass:"btn btn-outline-success mx-4 w-100",on:{click:function(e){t.step++}}},[t._v(" Next ")])])},C=[],y={props:["appStep"],computed:{step:{get:function(){return this.appStep},set:function(t){return this.$emit("change-step",t)}}}},k=y,w=Object(u["a"])(k,_,C,!1,null,null,null),x=w.exports,I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",{staticClass:"display-6 text-center"},[t._v(t._s(t.title))]),a("p",{staticClass:"lead text-justify"},[t._v(" "+t._s(t.description)+" ")]),a("div",{staticClass:"input-group mb-4"},[a("div",{staticClass:"input-group-prepend"},[a("button",{staticClass:"btn btn-primary",on:{click:function(e){t.toggle=!0}}},[t._v("True")]),a("button",{staticClass:"btn btn-danger",on:{click:function(e){t.toggle=!1}}},[t._v("False")])]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.toggle,expression:"toggle"}],staticClass:"custom-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.toggle=e.target.multiple?a:a[0]}}},[a("option",{domProps:{value:!0}},[t._v("True")]),a("option",{domProps:{value:!1}},[t._v("False")])]),a("div",{staticClass:"input-group-append"},[a("div",{staticClass:"input-group-text"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.toggle,expression:"toggle"}],attrs:{type:"radio",id:"challenge_1_toggle_true",name:"challenge_1_toggle"},domProps:{value:!0,checked:t._q(t.toggle,!0)},on:{change:function(e){t.toggle=!0}}}),a("label",{staticClass:"form-check-label",attrs:{for:"challenge_1_toggle_true"}},[t._v("True")])]),a("div",{staticClass:"input-group-text"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.toggle,expression:"toggle"}],attrs:{type:"radio",id:"challenge_1_toggle_false",name:"challenge_1_toggle"},domProps:{value:!1,checked:t._q(t.toggle,!1)},on:{change:function(e){t.toggle=!1}}}),a("label",{staticClass:"form-check-label",attrs:{for:"challenge_1_toggle_false"}},[t._v("False")])])])]),t.toggle?a("p",{staticClass:"lead bg-light p-4"},[t._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi delectus explicabo natus iste, minus qui quisquam vitae ullam recusandae, quibusdam architecto id nesciunt necessitatibus iure quas eum distinctio cum similique. ")]):a("p",{staticClass:"lead bg-light p-4"},[t._v(" The value must be true to display the intended text. ")])])},T=[],S={props:["title","description"],data:function(){return{toggle:!1}}},j=S,E=Object(u["a"])(j,I,T,!1,null,null,null),O=E.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",{staticClass:"display-6 text-center"},[t._v(t._s(t.title))]),a("p",{staticClass:"lead text-justify"},[t._v(" "+t._s(t.description)+" ")]),a("div",{staticClass:"card"},[t._m(0),a("div",{staticClass:"card-body"},[a("div",{staticClass:"input-group"},[a("div",{staticClass:"input-group-prepend"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.newItem.course,expression:"newItem.course"}],staticClass:"custom-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.newItem,"course",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"BS-IT"}},[t._v("BS-IT")]),a("option",{attrs:{value:"BS-IS"}},[t._v("BS-IS")]),a("option",{attrs:{value:"BS-CS"}},[t._v("BS-CS")]),a("option",{attrs:{value:"BS-DS"}},[t._v("BS-DS")])])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newItem.name,expression:"newItem.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.newItem.name},on:{input:function(e){e.target.composing||t.$set(t.newItem,"name",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.newItem.year,expression:"newItem.year"}],staticClass:"form-control",attrs:{type:"number",min:"1",max:"4",placeholder:"Year Level"},domProps:{value:t.newItem.year},on:{input:function(e){e.target.composing||t.$set(t.newItem,"year",e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-success",attrs:{disabled:t.valid},on:{click:t.addItem}},[t._v(" Add ")])])])])]),a("table",{staticClass:"table table-borderless"},[a("thead",[t._l(t.headers,(function(e,n){return a("th",{key:n},[a("button",{staticClass:"table-header",on:{click:function(e){return t.sortTableFn(n)}}},[t._v(" "+t._s(e.name)+" "),n==t.sortTable.ind?a("span",{staticClass:"table-header-desc"},[t._v(t._s(t.sortTable.desc?"˅":"˄"))]):t._e()])])})),t._m(1)],2),0!=t.items.length?a("tbody",t._l(t.tableItems,(function(e,n){return a("tr",{key:n},[a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.course))]),a("td",[t._v(t._s(e.year))]),a("td",{staticClass:"d-flex justify-content-center"},[a("button",{staticClass:"btn btn-danger",on:{click:function(a){return t.deleteItem(e.index)}}},[t._v(" × ")])])])})),0):a("tbody",[t._m(2)])])])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header"},[a("h5",{staticClass:"card-title"},[t._v("Add New")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("th",[a("button",{staticClass:"table-header"},[t._v(" Actions ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("td",{staticClass:"text-center",attrs:{colspan:"4"}},[t._v("No items found.")])])}],N=(a("a434"),a("b0c0"),{props:["title","description"],computed:{tableItems:function(){return this.items},valid:function(){return null==this.newItem.name||null==this.newItem.course||this.newItem.year>6||this.newItem.year<0||null==this.newItem.year}},data:function(){return{items:[{name:"Mike Espera",course:"BS-CS",year:3}],headers:[{name:"Name",model:"name"},{name:"Course",model:"course"},{name:"Year",model:"year"}],sortTable:{ind:0,desc:!0},newItem:{name:null,course:null,year:null}}},methods:{deleteItem:function(t){this.items.splice(t,1)},addItem:function(){this.items.push(this.newItem),this.newItem={name:null,course:null,year:null},this.sortTableFn(null,!1)},sortTableFn:function(t){var e=this,a=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];a&&(this.sortTable.ind==t?this.sortTable.desc=!this.sortTable.desc:this.sortTable.ind=t),this.items.sort((function(t,a){if(e.sortTable.ind<2){var n=t[e.headers[e.sortTable.ind].model]>a[e.headers[e.sortTable.ind].model]?1:-1;return e.sortTable.desc?n:-n}var s=t[e.headers[e.sortTable.ind].model]-a[e.headers[e.sortTable.ind].model];return e.sortTable.desc?s:-s}))}}}),P=N,$=(a("72e7"),Object(u["a"])(P,D,A,!1,null,"22fe190a",null)),R=$.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",{staticClass:"display-6 text-center"},[t._v(t._s(t.title))]),a("p",{staticClass:"lead text-justify"},[t._v(" "+t._s(t.description)+" ")]),a("div",{staticClass:"input-group mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Card name..."},domProps:{value:t.search},on:{input:[function(e){e.target.composing||(t.search=e.target.value)},t.getSuggestions]}}),a("div",{staticClass:"suggestions"},[a("ul",{staticClass:"list-group list-group-flush"},t._l(t.suggestions,(function(e,n){return a("li",{key:n,staticClass:"list-group-item",class:e.hover?"active":"",on:{click:function(a){t.search=e.suggestion},mouseover:function(t){e.hover=!0},mouseleave:function(t){e.hover=!1}}},[t._v(" "+t._s(e.suggestion)+" ")])})),0)]),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-outline-secondary",on:{click:function(e){return t.getCard(e,t.search)}}},[t._v(" Add ")])])]),a("div",{staticClass:"d-flex m-4"},[a("button",{staticClass:"btn btn-primary w-100 mx-4",on:{click:t.getCard}},[t._v(" Get Random Card ")]),a("button",{staticClass:"btn btn-outline-danger w-100 mx-4",on:{click:function(e){t.cards=[]}}},[t._v(" Clear Cards ")])]),a("div",{staticClass:"card-grid bg-light p-4"},t._l(t.cards,(function(e,n){return a("div",{key:e.name,staticClass:"h-100"},[a("div",{staticClass:"card",staticStyle:{width:"15rem"},attrs:{draggable:"true"},on:{dragstart:function(e){return t.cardStartDrag(e,n)},drop:function(e){return t.cardOnDrop(e,n)},dragover:function(t){t.preventDefault()},dragenter:function(t){t.preventDefault()}}},[e.loading?t._e():a("div",{staticStyle:{background:"url('https://picsum.photos/421/614')",height:"21.7rem"}},[a("img",{staticClass:"card-image-top img-fluid",attrs:{draggable:"false",src:e.image_url,alt:"Card Image"}})]),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(" "+t._s(e.name)+" "),a("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(e){return t.cards.splice(n,1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),e.loading?a("div",{staticClass:"text-center"},[t._v("Loading...")]):a("div",[a("p",[a("small",[t._v(t._s(e.description))])])])]),e.loading?t._e():a("div",{staticClass:"card-footer flex-grow-1"},["Spell Card"==e.type||"Trap Card"==e.type?a("div",[t._v(" "+t._s(e.type)+" ")]):a("div",{staticClass:"d-flex justify-content-between"},[a("span",[t._v(t._s(e.atk)+" ATK "+t._s(e.def)+" DEF ")]),a("span",[t._v(" "+t._s(e.attribute)+" ")])])])])])})),0)])},B=[],F=(a("a4d3"),a("e01a"),a("4160"),a("ac1f"),a("841c"),a("159b"),a("96cf"),a("1da1")),W=a("bc3a"),Y=a.n(W),L={props:["title","description"],data:function(){return{cards:[],search:"",timeout:!1,suggestions:[{hover:!1,suggestion:"Search within for the heart of cards."}]}},methods:{getCard:function(t){var e=arguments,a=this;return Object(F["a"])(regeneratorRuntime.mark((function t(){var n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.length>1&&void 0!==e[1]?e[1]:"random",s={name:null,type:null,description:null,image_url:"...",atk:null,def:null,attribute:null,loading:!0},a.cards.push(s),"random"==n?Y.a.get("https://db.ygoprodeck.com/api/v7/randomcard.php").then((function(t){var e,a=t.data;switch(a.attribute){case"DARK":e="闇";break;case"DIVINE":e="神";break;case"EARTH":e="地";break;case"FIRE":e="炎";break;case"LIGHT":e="光";break;case"WATER":e="水";break;case"WIND":e="風";break;default:e=null}s.name=a.name,s.type=a.type,s.description=a.desc,s.image_url=a.card_images[0].image_url,s.atk=a.atk,s.def=a.def,s.attribute=e,s.loading=!1})):(console.log("Searching..."),Y.a.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?name=".concat(a.search)).then((function(t){var e,a=t.data;switch(console.log(a.data[0]),a.data[0].attribute){case"DARK":e="闇";break;case"DIVINE":e="神";break;case"EARTH":e="地";break;case"FIRE":e="炎";break;case"LIGHT":e="光";break;case"WATER":e="水";break;case"WIND":e="風";break;default:e=null}s.name=a.data[0].name,s.type=a.data[0].type,s.description=a.data[0].desc,s.image_url=a.data[0].card_images[0].image_url,s.atk=a.data[0].atk,s.def=a.data[0].def,s.attribute=e,s.loading=!1})).catch((function(){a.cards.splice(a.cards.length-1,1)})));case 4:case"end":return t.stop()}}),t)})))()},findCard:function(t){return this.cards.forEach((function(e){if(e.name==t)return e})),null},cardStartDrag:function(t,e){t.dataTransfer.dropEffect="move",t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("dragInd",e)},cardOnDrop:function(t,e){var a=t.dataTransfer.getData("dragInd"),n=e;this.cards.splice(n,0,this.cards.splice(a,1)[0])},getSuggestions:function(){var t=this;this.timeout||(setTimeout((function(){Y.a.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=".concat(t.search)).then((function(e){var a=e.data;t.suggestions=[],console.log(a.data);for(var n=0;n<10&&n<a.data.length;n++)t.suggestions.push({hover:!1,suggestion:a.data[n].name})})).catch((function(){t.suggestions=[{hover:!1,suggestion:"The heart of the cards have rejected you. What you seek cannot be found."}]})),t.timeout=!1}),3e3),this.suggestions=[{hover:!1,suggestion:"The heart of the cards are calling out, please wait warmly..."}],this.timeout=!0)}}},M=L,G=(a("eea5"),Object(u["a"])(M,q,B,!1,null,"3433b624",null)),H=G.exports,K={name:"App",components:{Navbar:p,Welcome:b,StepControls:x,Challenge1:O,Challenge2:R,Challenge3:H},data:function(){return{step:1,challenges:{first:{title:"Challenge 1",description:"The goal is simple: bind a variable to multiple inputs. The following inputs all modify the same boolean variable, and they also display the current state of the variable. The paragraph below changes its text according to the value of the boolean."},second:{title:"Challenge 2",description:"Create a table that displays an array of students. You can add a student, however, you may not add one with bad data ( no course, no name and year level out of bounds (1-5) ). You can also remove students from the list. If you click the headers for name, course or year, it will sort the table. Clicking once will set the sorting mode to that header. Clicking beyond that toggles whether the data is sorted in ascending or descending order. When you add a student, the table is automatically sorted."},third:{title:"Challenge 3",description:"Collect cards. You can search for cards, and you will be suggested possible cards. On the press of the button, you may add a random card to your deck. You can remove your cards as well as arrange them by dragging and dropping cards on each other. On dropping, the dragged card is placed before the dropped card. Get your cards from this website: https://db.ygoprodeck.com/api-guide/"}}}}},J=K,V=(a("cf25"),Object(u["a"])(J,s,r,!1,null,null,null)),z=V.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(z)}}).$mount("#app")},"72e7":function(t,e,a){"use strict";a("0529")},cf25:function(t,e,a){"use strict";a("fea6")},eea5:function(t,e,a){"use strict";a("3d3d")},fea6:function(t,e,a){}});
//# sourceMappingURL=app.831b7295.js.map