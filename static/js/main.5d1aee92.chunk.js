(this["webpackJsonpperson-app"]=this["webpackJsonpperson-app"]||[]).push([[0],{27:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(17),o=t.n(s),i=t(7),c=t(13),d=t.n(c),p=t(21),m=t(18),l=t(10),u=t(2),b=(t(27),t(1));var f=function(e){var a=Object(u.e)();Object(u.f)().params.page||a.push("person-app/page/1");var t=n.a.useState(1),r=Object(l.a)(t,2),s=r[0],o=r[1],i=10*s-10,c=e.peopleArray.filter((function(e,a){return a>=i})).filter((function(e,a){return a<10}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{className:"center",children:"Users"}),c,Object(b.jsxs)("p",{className:"center",children:["Page ",s]}),Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{onClick:function(){1!==parseInt(s)&&(a.push("/person-app/page/".concat(s-1)),o(s-1))},children:"Previous Page"}),Object(b.jsx)("button",{type:"button",onClick:e.handleGetResults,children:"Get More Results"}),Object(b.jsx)("button",{onClick:function(){e.peopleArray.length/10>s&&(a.push("/person-app/page/".concat(s+1)),o(s+1))},children:"Next Page"})]})]})},h=(t(34),function(e){var a=Object(u.e)(),t=Object(u.f)(),r=parseInt(t.params.id)-1,n=parseInt(t.params.id)+1;0===parseInt(t.params.id)&&(r=parseInt(e.peopleArray.length)-1),parseInt(t.params.id)===e.peopleArray.length-1&&(n=0);var s=e.peopleArray[t.params.id].props.person;return Object(b.jsxs)("div",{className:"person-detail",children:[Object(b.jsx)("div",{className:"img-container",children:Object(b.jsx)("img",{src:s.picture.large,alt:"Profile of ".concat(s.name.first," ").concat(s.name.last)})}),Object(b.jsxs)("h2",{className:"center",children:[s.name.title," ",s.name.first," ",s.name.last]}),Object(b.jsxs)("p",{className:"center",children:["Phone Number: ",s.phone]}),Object(b.jsxs)("p",{className:"center",children:["Email Address: ",s.email]}),Object(b.jsxs)("p",{className:"center",children:["Age: ",s.dob.age]}),Object(b.jsxs)("p",{className:"center",children:["Location: ",s.location.city,", ",s.location.country]}),Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{onClick:function(){return a.push("/person-app/user/".concat(r))},children:"Previous"}),Object(b.jsx)("button",{onClick:function(){return a.push("/person-app/page/1")},children:"Back to List"}),Object(b.jsx)("button",{onClick:function(){return a.push("/person-app/user/".concat(n))},children:"Next"})]})]})}),g=(t(35),function(e){return Object(b.jsxs)("div",{className:"person group",children:[Object(b.jsx)("div",{className:"item",children:Object(b.jsx)(i.b,{to:"/user/".concat(e.id),children:Object(b.jsx)("img",{src:e.person.picture.medium,alt:"Profile of ".concat(e.person.name.first," ").concat(e.person.name.last)})})}),Object(b.jsxs)("div",{className:"item",children:[Object(b.jsxs)("p",{children:["Name: ",e.person.name.title," ",e.person.name.first," ",e.person.name.last]}),Object(b.jsxs)("p",{children:["Phone Number: ",e.person.phone]})]})]})}),j=JSON.parse('[{"gender":"female","name":{"title":"Miss","first":"Ronja","last":"Van Garderen"},"location":{"street":{"number":3567,"name":"G.L. Rutgersweg"},"city":"Kamerik","state":"Gelderland","country":"Netherlands","postcode":49609,"coordinates":{"latitude":"47.1821","longitude":"161.5330"},"timezone":{"offset":"+10:00","description":"Eastern Australia, Guam, Vladivostok"}},"email":"ronja.vangarderen@example.com","login":{"uuid":"cd2f5865-763f-40c8-8d31-8854d2f2df6b","username":"beautifullion565","password":"carmen","salt":"xn9aVGsZ","md5":"9e02aa3193df858a92286f090fb58be2","sha1":"c428b5fa9f6802e777114ba49e2a8955139936c2","sha256":"f41e1645320f9290a1b176a3c1c424adf5e757cc07e5a939f47b9aa9ea8e837d"},"dob":{"date":"1962-08-02T01:10:28.955Z","age":59},"registered":{"date":"2007-03-19T14:36:58.708Z","age":14},"phone":"(191)-894-6012","cell":"(775)-839-4803","id":{"name":"BSN","value":"30993020"},"picture":{"large":"https://randomuser.me/api/portraits/women/81.jpg","medium":"https://randomuser.me/api/portraits/med/women/81.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/81.jpg"},"nat":"NL"},{"gender":"male","name":{"title":"Mr","first":"Erik","last":"Fisher"},"location":{"street":{"number":5006,"name":"Strand Road"},"city":"Sligo","state":"Meath","country":"Ireland","postcode":74330,"coordinates":{"latitude":"16.3821","longitude":"-17.2636"},"timezone":{"offset":"-5:00","description":"Eastern Time (US & Canada), Bogota, Lima"}},"email":"erik.fisher@example.com","login":{"uuid":"4438cdab-92c9-4698-9920-eb5ae4738f7a","username":"blackbear890","password":"moscow","salt":"JkXLALIf","md5":"3fd0c37b07214b08c9c27a035e978240","sha1":"4ed11401dafe938fc617a1493337db899ab683a3","sha256":"27482d880e53cbce502225acfa1b5f64fa614134323b99cc21f2f591fcad876a"},"dob":{"date":"1982-01-07T12:09:39.218Z","age":39},"registered":{"date":"2008-09-12T16:52:29.162Z","age":13},"phone":"071-242-5946","cell":"081-871-2295","id":{"name":"PPS","value":"2205788T"},"picture":{"large":"https://randomuser.me/api/portraits/men/63.jpg","medium":"https://randomuser.me/api/portraits/med/men/63.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/63.jpg"},"nat":"IE"},{"gender":"male","name":{"title":"Mr","first":"Jeffrey","last":"Hoffman"},"location":{"street":{"number":5052,"name":"Lovers Ln"},"city":"Allentown","state":"South Carolina","country":"United States","postcode":65522,"coordinates":{"latitude":"85.3097","longitude":"-137.2844"},"timezone":{"offset":"+8:00","description":"Beijing, Perth, Singapore, Hong Kong"}},"email":"jeffrey.hoffman@example.com","login":{"uuid":"76d870c9-f064-495d-b40c-c14f04287f01","username":"angrysnake783","password":"devo","salt":"9bzsJvZS","md5":"06a8142b5721f336439926526eb5580d","sha1":"877e297c45182a022269e3686d84bbe00ecc824b","sha256":"af0db93cac0a3028299c75e9095d7c1c6e11b4c89d2be8a10006a4a75f970172"},"dob":{"date":"1949-11-02T20:11:16.409Z","age":72},"registered":{"date":"2007-06-14T12:31:59.508Z","age":14},"phone":"(021)-549-0184","cell":"(119)-729-3310","id":{"name":"SSN","value":"811-92-0063"},"picture":{"large":"https://randomuser.me/api/portraits/men/96.jpg","medium":"https://randomuser.me/api/portraits/med/men/96.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/96.jpg"},"nat":"US"},{"gender":"male","name":{"title":"Mr","first":"Baptiste","last":"Clement"},"location":{"street":{"number":8749,"name":"Rue du Stade"},"city":"Metz","state":"Haute-Corse","country":"France","postcode":57275,"coordinates":{"latitude":"-1.6999","longitude":"-129.8968"},"timezone":{"offset":"+3:30","description":"Tehran"}},"email":"baptiste.clement@example.com","login":{"uuid":"129dd758-8866-4cc8-91fa-0654bbc718b0","username":"yellowostrich135","password":"alissa","salt":"IHzzUWHZ","md5":"2150d1e6acf06b5b90a2475ecc371c2d","sha1":"4e26496b82764cc58adc51df5b4847c06d9c67b8","sha256":"53537a9c0d2391d320e489caa047696529cf154223899b10ce6401d3374523ad"},"dob":{"date":"1968-03-17T17:27:52.390Z","age":53},"registered":{"date":"2008-07-16T13:25:38.605Z","age":13},"phone":"04-77-41-57-05","cell":"06-76-24-46-38","id":{"name":"INSEE","value":"1NNaN21134560 07"},"picture":{"large":"https://randomuser.me/api/portraits/men/26.jpg","medium":"https://randomuser.me/api/portraits/med/men/26.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/26.jpg"},"nat":"FR"},{"gender":"female","name":{"title":"Miss","first":"\u0647\u0644\u06cc\u0627","last":"\u06a9\u0648\u062a\u06cc"},"location":{"street":{"number":7999,"name":"\u06a9\u0645\u06cc\u0644"},"city":"\u0631\u0634\u062a","state":"\u062e\u0648\u0632\u0633\u062a\u0627\u0646","country":"Iran","postcode":74849,"coordinates":{"latitude":"29.3724","longitude":"126.5935"},"timezone":{"offset":"+8:00","description":"Beijing, Perth, Singapore, Hong Kong"}},"email":"hly.khwty@example.com","login":{"uuid":"ce4dcf65-b64a-49fe-99fe-b6f3a0078b6e","username":"whitepanda460","password":"zapper","salt":"ArOK062K","md5":"9248d6a08307526745a76958931c6cf7","sha1":"82a607790a950c9f50541624a89b0d8a295c58a9","sha256":"02530e91e1ecdad581d50477a56a6a6d41fec3e4c40be492bd56323a90d372e9"},"dob":{"date":"1996-11-24T06:40:18.629Z","age":25},"registered":{"date":"2006-02-07T16:16:27.710Z","age":15},"phone":"000-45639841","cell":"0901-738-2398","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/66.jpg","medium":"https://randomuser.me/api/portraits/med/women/66.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/66.jpg"},"nat":"IR"}]'),x=JSON.parse('[{"gender":"male","name":{"title":"Mr","first":"Elliot","last":"Sullivan"},"location":{"street":{"number":739,"name":"Park Road"},"city":"Hereford","state":"Cornwall","country":"United Kingdom","postcode":"R2J 5WG","coordinates":{"latitude":"11.5426","longitude":"-91.8239"},"timezone":{"offset":"-3:00","description":"Brazil, Buenos Aires, Georgetown"}},"email":"elliot.sullivan@example.com","login":{"uuid":"4e519629-731d-4eeb-b6ae-271b9f207ad4","username":"purpletiger251","password":"georgie","salt":"Dmg153Sn","md5":"97a57c7e5e5a328434ab0b19ff457504","sha1":"f49af2562d9e126735d6f7a2dd59fa9adecd2621","sha256":"639bcf52d3812d2e04b97e1c0b643d1a746a9e62dc257f7a4d7c214e3f5e4ec2"},"dob":{"date":"1970-11-10T10:08:18.031Z","age":51},"registered":{"date":"2003-12-22T05:19:15.864Z","age":18},"phone":"015242 33727","cell":"0722-706-464","id":{"name":"NINO","value":"GK 43 15 84 H"},"picture":{"large":"https://randomuser.me/api/portraits/men/72.jpg","medium":"https://randomuser.me/api/portraits/med/men/72.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/72.jpg"},"nat":"GB"},{"gender":"female","name":{"title":"Ms","first":"Isabel","last":"Flores"},"location":{"street":{"number":8655,"name":"Calle de Pedro Bosch"},"city":"Santander","state":"Canarias","country":"Spain","postcode":57567,"coordinates":{"latitude":"-26.1020","longitude":"41.5261"},"timezone":{"offset":"-3:30","description":"Newfoundland"}},"email":"isabel.flores@example.com","login":{"uuid":"74b4d9c2-893c-4cfe-bfa4-c50a2227b871","username":"crazyrabbit421","password":"peanuts","salt":"LoXV95B7","md5":"34c699ce10368ca8196bda068b654eac","sha1":"9d6782e633bc429aedb4dcf4f91da5899bb47b47","sha256":"c2c6a9770bb43c554d7e2b9fb9b7f100b429222a66b79ae94e27f7ab6152da94"},"dob":{"date":"1947-06-17T01:16:02.136Z","age":74},"registered":{"date":"2013-04-04T00:49:14.557Z","age":8},"phone":"911-475-411","cell":"664-104-180","id":{"name":"DNI","value":"98644399-K"},"picture":{"large":"https://randomuser.me/api/portraits/women/16.jpg","medium":"https://randomuser.me/api/portraits/med/women/16.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/16.jpg"},"nat":"ES"},{"gender":"male","name":{"title":"Mr","first":"Charles","last":"Bouchard"},"location":{"street":{"number":8200,"name":"15th St"},"city":"Glenwood","state":"Nunavut","country":"Canada","postcode":"R7D 4J4","coordinates":{"latitude":"-68.2653","longitude":"-122.3599"},"timezone":{"offset":"-1:00","description":"Azores, Cape Verde Islands"}},"email":"charles.bouchard@example.com","login":{"uuid":"316d069a-bb27-4204-9ba5-811b0f9740fc","username":"purplefrog598","password":"project","salt":"RThCjcr2","md5":"7c6baf23c55613e98457f01d69bc9b48","sha1":"cff1cc6127c270f8a3c60615ceabae367b638f5b","sha256":"1789a22b6c6c5871a31e468a9aebdbf2ef3b816e3470f83e10377304993d1ffc"},"dob":{"date":"1950-04-23T17:19:49.918Z","age":71},"registered":{"date":"2004-02-24T04:47:07.792Z","age":17},"phone":"095-420-9719","cell":"666-036-0202","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/69.jpg","medium":"https://randomuser.me/api/portraits/med/men/69.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/69.jpg"},"nat":"CA"},{"gender":"male","name":{"title":"Mr","first":"Mehmet","last":"G\xfcnday"},"location":{"street":{"number":7063,"name":"Fatih Sultan Mehmet Cd"},"city":"K\xfctahya","state":"Bitlis","country":"Turkey","postcode":78106,"coordinates":{"latitude":"78.5839","longitude":"-172.1906"},"timezone":{"offset":"0:00","description":"Western Europe Time, London, Lisbon, Casablanca"}},"email":"mehmet.gunday@example.com","login":{"uuid":"a67bc82c-b33a-4c21-8a43-fedb934efcf2","username":"crazyduck958","password":"nnnnn","salt":"SnnOWjgc","md5":"288e2c4bcebcc7e90a508f2d6aff2aba","sha1":"bf6829d2be513fdad6d7ac76c0b84ffe13ed4f46","sha256":"f026a1ad75fb867981e55b576d40f8ee1fe3ba079f950cd01b98f88aec1a9ea8"},"dob":{"date":"1994-05-06T18:39:18.615Z","age":27},"registered":{"date":"2017-02-27T18:37:08.479Z","age":4},"phone":"(623)-997-9172","cell":"(843)-795-9262","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/70.jpg","medium":"https://randomuser.me/api/portraits/med/men/70.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/70.jpg"},"nat":"TR"},{"gender":"male","name":{"title":"Mr","first":"Clarence","last":"Armstrong"},"location":{"street":{"number":949,"name":"Spring St"},"city":"Traralgon","state":"Western Australia","country":"Australia","postcode":9289,"coordinates":{"latitude":"-80.4952","longitude":"-67.4357"},"timezone":{"offset":"-7:00","description":"Mountain Time (US & Canada)"}},"email":"clarence.armstrong@example.com","login":{"uuid":"2021cef5-bdd0-42cb-8600-35847d448f05","username":"angrybear283","password":"hans","salt":"RZZcjVSW","md5":"421cb874f344247fc261717f1854b23d","sha1":"44735582908193b0378f6e012ca1d065900558ba","sha256":"524a59b2af8c7a2cc868976e71e0c47767cf2b9dbd32c1d3f29ad9ebc2246eac"},"dob":{"date":"1963-08-22T13:17:11.951Z","age":58},"registered":{"date":"2011-01-19T14:30:44.430Z","age":10},"phone":"04-8335-9034","cell":"0486-375-210","id":{"name":"TFN","value":"438442017"},"picture":{"large":"https://randomuser.me/api/portraits/men/30.jpg","medium":"https://randomuser.me/api/portraits/med/men/30.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/30.jpg"},"nat":"AU"}]');j.push(x[0],x[1],x[2],x[3],x[4]);var O=j,y=t(20),v=t.n(y),N={getPerson:function(){return new Promise((function(e,a){v.a.ajax({url:"https://randomuser.me/api/",dataType:"json",success:function(a){e(a.results[0])}})}))}};N.getPerson();var w=N;var S=function(){for(var e=[],a=0;a<O.length;a++)e.push(Object(b.jsx)(g,{id:a,person:O[a]},a));var t=n.a.useState(e),r=Object(l.a)(t,2),s=r[0],o=r[1];function i(){return c.apply(this,arguments)}function c(){return(c=Object(m.a)(d.a.mark((function e(){var a,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.getPerson();case 2:a=e.sent,(t=s.map((function(e){return Object(p.a)({},e)}))).push(Object(b.jsx)(g,{id:s.length,person:a},s.length)),o(t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsxs)("main",{className:"App",children:[Object(b.jsx)(u.a,{exact:!0,path:["/person-app/page/:page","/person-app"],render:function(){return Object(b.jsx)(f,{peopleArray:s,handleGetResults:i})}}),Object(b.jsx)(u.a,{path:"/person-app/user/:id",render:function(){return Object(b.jsx)(h,{peopleArray:s})}})]})};o.a.render(Object(b.jsx)(i.a,{basename:"/person-app",children:Object(b.jsx)(S,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.5d1aee92.chunk.js.map