(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(26)},,,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),s=n.n(c),u=n(3),o=n(2),l=n.n(o),i=n(4),m="https://mate-api.herokuapp.com",p=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a,r,c=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:{method:"GET"},e.next=3,fetch("".concat(m).concat(t),n);case 3:if((a=e.sent).ok){e.next=6;break}throw new Error(a.statusText);case 6:return e.next=8,a.json();case 8:return r=e.sent,e.abrupt("return",r.data);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function d(e){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("/posts");case 2:return n=e.sent,e.abrupt("return",n.filter((function(e){return e.userId===t})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return p("/posts/".concat(e))}function v(e){return E.apply(this,arguments)}function E(){return(E=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("/comments");case 2:return n=e.sent,e.abrupt("return",n.filter((function(e){return e.postId===t})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return p("/comments/".concat(e),{method:"DELETE"})}function O(e){return function(e){return p("/comments",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)})}(e)}n(18);var j=function(){return r.a.createElement("div",{className:"Loader"},r.a.createElement("div",{className:"Loader__content"}))},_=n(1),y=n.n(_),N=(y.a.number.isRequired,y.a.number.isRequired,y.a.string.isRequired,y.a.oneOfType([y.a.number,y.a.object]),y.a.func.isRequired,function(e){var t=e.id,n=e.userId,c=e.title,s=e.postId,u=e.setPostId;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("b",null,"[User #".concat(n,"]: ")),c),r.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:Object(a.useCallback)((function(){u(s===t?null:t)}),[t,s,u])},s===t?"Close":"Open"))}),k=(y.a.number.isRequired,y.a.oneOfType([y.a.number,y.a.object]),y.a.func.isRequired,n(21),function(e){var t=e.userId,n=e.postId,c=e.setPostId,s=Object(a.useState)(null),o=Object(u.a)(s,2),m=o[0],f=o[1],b=Object(a.useState)(!1),v=Object(u.a)(b,2),E=v[0],h=v[1];return Object(a.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,h((function(e){return!e})),!t){e.next=8;break}return e.next=5,d(t);case 5:e.t0=e.sent,e.next=11;break;case 8:return e.next=10,p("/posts");case 10:e.t0=e.sent;case 11:n=e.t0,f(n),h((function(e){return!e})),e.next=21;break;case 16:e.prev=16,e.t1=e.catch(0),f([]),h(!1),console.warn(e.t1);case 21:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),r.a.createElement("div",{className:"PostsList"},r.a.createElement("h2",null,"Posts:"),E?r.a.createElement(j,null):r.a.createElement("ul",{className:"PostsList__list"},m?m.map((function(e){return r.a.createElement("li",{className:"PostsList__item",key:e.id},r.a.createElement(N,{id:e.id,userId:e.userId,title:e.title,postId:n,setPostId:c}))})):r.a.createElement("p",null,"No posts")))}),C=n(11),w=n(6),x=(y.a.arrayOf(y.a.shape({body:y.a.string.isRequired,id:y.a.number.isRequired}).isRequired).isRequired,y.a.func.isRequired,y.a.string.isRequired,y.a.number.isRequired,y.a.func.isRequired,function(e){var t=e.body,n=e.id,c=e.removeComment;return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:Object(a.useCallback)((function(){c(n)}),[n,c])},"X"),r.a.createElement("p",null,t))}),I=function(e){var t=e.comments,n=e.removeComment,c=Object(a.useState)(!1),s=Object(u.a)(c,2),o=s[0],l=s[1],i=Object(a.useMemo)((function(){return t.length}),[t]),m=Object(a.useCallback)((function(){l((function(e){return!e}))}),[]);return i?r.a.createElement("section",{className:"PostDetails__comments"},r.a.createElement("button",{type:"button",className:"button",onClick:m},o?"Hide ".concat(i," comments"):"Show ".concat(i," comments")),o&&r.a.createElement("ul",{className:"PostDetails__list"},t.map((function(e){var t=e.body,a=e.id;return r.a.createElement("li",{className:"PostDetails__list-item",key:a},r.a.createElement(x,{body:t,id:a,removeComment:n}))})))):r.a.createElement("p",null,"No comments")},P=n(8),R=(y.a.func.isRequired,n(22),function(e){var t=e.addComment,n={name:"",email:"",body:""},c=Object(a.useState)(n),s=Object(u.a)(c,2),o=s[0],l=s[1],i=Object(a.useCallback)((function(e){var t=e.target,n=t.name,a=t.value;l((function(e){return Object(w.a)(Object(w.a)({},e),{},Object(P.a)({},n,a))}))}),[]),m=Object(a.useCallback)((function(e){e.preventDefault(),t(o),l(n)}),[t,o,n]);return r.a.createElement("form",{className:"NewCommentForm",method:"POST",onSubmit:m},r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:o.name,onChange:i})),r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:o.email,onChange:i})),r.a.createElement("div",{className:"form-field"},r.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:o.body,onChange:i})),r.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),q=(y.a.number.isRequired,n(23),function(e){var t=e.postId,n=Object(a.useState)({body:""}),c=Object(u.a)(n,2),s=c[0],o=c[1],m=Object(a.useState)(null),p=Object(u.a)(m,2),d=p[0],f=p[1],E=Object(a.useState)(!1),_=Object(u.a)(E,2),y=_[0],N=_[1],k=Object(a.useState)(null),x=Object(u.a)(k,2),P=x[0],q=x[1];Object(a.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,N((function(e){return!e})),e.next=4,b(t);case 4:return n=e.sent,e.next=7,v(t);case 7:a=e.sent,o(n),f(a),N((function(e){return!e})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),q(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}})()()}),[t]);var g=Object(a.useCallback)(function(){var e=Object(i.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{h(t),f(d.filter((function(e){return e.id!==t})))}catch(n){console.warn(n)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[d]),S=Object(a.useCallback)(function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O(Object(w.a)({postId:s.id},t));case 3:n=e.sent,f((function(e){return[].concat(Object(C.a)(e),[n])})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.warn(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[s]);return P?r.a.createElement("p",null,P):r.a.createElement("div",{className:"PostDetails"},r.a.createElement("h2",null,"Post details:"),y?r.a.createElement(j,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"PostDetails__post"},r.a.createElement("p",null,s.body)),d&&r.a.createElement(I,{comments:d,removeComment:g}),r.a.createElement("section",null,r.a.createElement("div",{className:"PostDetails__form-wrapper"},r.a.createElement(R,{addComment:S})))))}),g=(y.a.number.isRequired,y.a.func.isRequired,function(e){var t=e.userId,n=e.setUserId;return r.a.createElement("label",null,"Select a user: \xa0",r.a.createElement("select",{className:"App__user-selector",value:t,onChange:Object(a.useCallback)((function(e){var t=e.target;n(+t.value)}),[n])},r.a.createElement("option",{value:"0"},"All users"),r.a.createElement("option",{value:"1"},"Leanne Graham"),r.a.createElement("option",{value:"2"},"Ervin Howell"),r.a.createElement("option",{value:"3"},"Clementine Bauch"),r.a.createElement("option",{value:"4"},"Patricia Lebsack"),r.a.createElement("option",{value:"5"},"Chelsey Dietrich"),r.a.createElement("option",{value:"6"},"Mrs. Dennis Schulist"),r.a.createElement("option",{value:"7"},"Kurtis Weissnat"),r.a.createElement("option",{value:"8"},"Nicholas Runolfsdottir V"),r.a.createElement("option",{value:"9"},"Glenna Reichert"),r.a.createElement("option",{value:"10"},"Leanne Graham")))}),S=(n(24),n(25),function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),o=Object(u.a)(s,2),l=o[0],i=o[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App__header"},r.a.createElement(g,{userId:n,setUserId:c})),r.a.createElement("main",{className:"App__main"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(k,{userId:n,postId:l,setPostId:i})),l&&r.a.createElement("div",{className:"App__content"},r.a.createElement(q,{postId:l}))))});s.a.render(r.a.createElement(S,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.be6b261e.chunk.js.map