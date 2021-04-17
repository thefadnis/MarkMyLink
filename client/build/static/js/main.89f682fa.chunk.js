(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{161:function(e,t,n){},162:function(e,t,n){},180:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(55),r=n.n(i),s=(n(161),n(20)),o=(n(162),n(36)),l=n.n(o),j=n(62),d=n(79),h=n(80),b=n(87),u=n(85),O=n(143),x=n(197),m=n(94),p=n(194),f=n(199),g=n(88),v=n(196),k=n(116),y=n(147),C=n(2),S=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={name:"",link:""},a.handleFormSubmit=a.handleFormSubmit.bind(Object(m.a)(a)),a}return Object(h.a)(n,[{key:"handleFormSubmit",value:function(e){e.preventDefault();var t=localStorage.getItem("token"),n=this.state.name,a=this.state.link;fetch("/addBookmark",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,link:a,token:t})}).then((function(e){window.location.reload(!1)}),(function(e){window.location.reload(!1)}))}},{key:"render",value:function(){var e=this;this.state.fields;return Object(C.jsxs)(p.a,{onSubmit:this.handleFormSubmit,children:[Object(C.jsxs)(p.a.Field,{children:[Object(C.jsx)("label",{children:"Bookmark Name"}),Object(C.jsx)("input",{placeholder:"Bookmark Name",onChange:function(t){return e.setState({name:t.target.value})}})]}),Object(C.jsxs)(p.a.Field,{children:[Object(C.jsx)("label",{children:"Link"}),Object(C.jsx)("input",{placeholder:"Link",onChange:function(t){return e.setState({link:t.target.value})}})]}),Object(C.jsx)(f.a,{type:"submit",children:"Submit"})]})}}]),n}(a.Component),w=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={modalOpen:!1},e.handleOpen=function(){return e.setState({modalOpen:!0})},e.handleClose=function(){return e.setState({modalOpen:!1})},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(C.jsxs)("div",{children:[Object(C.jsxs)(f.a,{primary:!0,size:"huge",onClick:this.handleOpen,children:["Add Bookmark",Object(C.jsx)(g.a,{name:"right arrow"})]}),Object(C.jsxs)(v.a,{open:this.state.modalOpen,onClose:this.handleClose,closeIcon:!0,children:[Object(C.jsx)(v.a.Header,{children:"Create Bookmark"}),Object(C.jsx)(v.a.Content,{children:Object(C.jsx)(S,{handleClose:this.handleClose})})]})]})}}]),n}(a.Component),I=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(d.a)(this,n),t.call(this,e)}return Object(h.a)(n,[{key:"render",value:function(){return Object(C.jsxs)(x.a,{children:[Object(C.jsx)(k.a,{color:"teal",floating:!0,children:this.props.viewcount}),Object(C.jsxs)(x.a.Content,{children:[Object(C.jsx)(y.a,{floated:"right",size:"tiny",src:this.props.image}),Object(C.jsx)(x.a.Header,{children:this.props.name}),Object(C.jsx)(x.a.Meta,{children:this.props.link}),Object(C.jsx)(k.a,{as:"a",style:{backgroundColor:"#2185d0",color:"white"},ribbon:!0,children:"Overview"}),Object(C.jsx)(x.a.Description,{children:this.props.description})]}),Object(C.jsx)(x.a.Content,{extra:!0,centered:!0,children:Object(C.jsxs)(f.a.Group,{widths:"3",children:[Object(C.jsxs)(f.a,{floated:"left",animated:"fade",as:"a",href:"https://"+this.props.link,children:[Object(C.jsx)(f.a.Content,{hidden:!0,children:"View"}),Object(C.jsx)(f.a.Content,{visible:!0,children:Object(C.jsx)(g.a,{name:"eye"})})]}),Object(C.jsxs)(f.a,{animated:"fade",children:[Object(C.jsx)(f.a.Content,{hidden:!0,children:"Edit"}),Object(C.jsx)(f.a.Content,{visible:!0,children:Object(C.jsx)(g.a,{name:"edit"})})]}),Object(C.jsxs)(f.a,{floated:"left",animated:"fade",onClick:this.handleDelete,children:[Object(C.jsx)(f.a.Content,{hidden:!0,children:"Delete"}),Object(C.jsx)(f.a.Content,{visible:!0,children:Object(C.jsx)(g.a,{name:"delete"})})]})]})})]})}}]),n}(a.Component),F=n(192),T=n(200),P=n(193),A=n(201),L=n(195),z=n(202),B=Object(O.createMedia)({breakpoints:{mobile:0,tablet:768,computer:1024}}),M=B.MediaContextProvider,D=B.Media,E=function(e){var t=e.mobile;return Object(C.jsxs)(F.a,{text:!0,children:[Object(C.jsx)(T.a,{as:"h1",content:"Welcome to your bookmark manager",inverted:!0,style:{fontSize:t?"2em":"4em",fontWeight:"normal",marginBottom:0,marginTop:t?"1.5em":"3em"}}),Object(C.jsx)(T.a,{as:"h2",content:"Create, save , view and delete your bookmarks all in one place",inverted:!0,style:{fontSize:t?"1.5em":"1.7em",fontWeight:"normal",marginTop:t?"0.5em":"1.5em"}}),Object(C.jsx)(w,{})]})},H=function(e){Object(b.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={},e.hideFixedMenu=function(){return e.setState({fixed:!1})},e.showFixedMenu=function(){return e.setState({fixed:!0})},e.logout=function(){localStorage.removeItem("token"),window.location.reload(!1)},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props.children,t=this.state.fixed;return Object(C.jsxs)(D,{greaterThan:"mobile",children:[Object(C.jsx)(P.a,{once:!1,onBottomPassed:this.showFixedMenu,onBottomPassedReverse:this.hideFixedMenu,children:Object(C.jsxs)(A.a,{inverted:!0,textAlign:"center",style:{minHeight:700,padding:"1em 0em"},vertical:!0,children:[Object(C.jsx)(L.a,{fixed:t?"top":null,inverted:!t,pointing:!t,secondary:!t,size:"large",children:Object(C.jsxs)(F.a,{children:[Object(C.jsx)(L.a.Item,{as:"a",active:!0,children:"Home"}),Object(C.jsx)(L.a.Item,{as:"a",children:"Work"}),Object(C.jsx)(L.a.Item,{as:"a",children:"Company"}),Object(C.jsx)(L.a.Item,{as:"a",children:"Careers"}),Object(C.jsx)(L.a.Item,{position:"right",onClick:this.logout,children:Object(C.jsx)(f.a,{as:"a",inverted:!t,children:"Log Out"})})]})}),Object(C.jsx)(E,{})]})}),e]})}}]),n}(a.Component),N=function(e){var t=e.children;return Object(C.jsx)(M,{children:Object(C.jsx)(H,{children:t})})};var J=function(e){var t=Object(a.useState)([]),n=Object(s.a)(t,2),c=n[0],i=n[1],r=Object(a.useState)(!1),o=Object(s.a)(r,2),d=o[0],h=o[1];return console.log("Billy",e.token),d||function(){var t=Object(j.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.token,t.next=3,fetch("/bookmarks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:n})}).then((function(e){return e.json()})).then((function(e){console.log("Billy",e),i(e),h(!0)}),(function(e){}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(e),Object(C.jsxs)(N,{children:[Object(C.jsx)(A.a,{style:{padding:"8em 0em"},vertical:!0,children:Object(C.jsx)(z.a,{stackable:!0,verticalAlign:"middle",style:{paddingLeft:"7em"},children:Object(C.jsx)(z.a.Row,{children:Object(C.jsx)(z.a.Column,{children:Object(C.jsx)(x.a.Group,{children:c.map((function(e){return Object(C.jsx)(I,{name:e.Name,link:e.Link,image:e.Image,description:e.Description,viewcount:e.Viewcount})}))})})})})}),Object(C.jsxs)(A.a,{inverted:!0,vertical:!0,style:{padding:"5em 0em"},children:[Object(C.jsx)("div",{children:Object(C.jsxs)(T.a,{inverted:!0,as:"h2",icon:!0,textAlign:"center",children:[Object(C.jsx)(g.a,{name:"users",circular:!0}),Object(C.jsx)(T.a.Content,{children:"Team Geauxinue"})]})}),Object(C.jsx)(z.a,{divided:!0,inverted:!0,stackable:!0,style:{paddingLeft:"17em"},textAlign:"center",children:Object(C.jsx)(z.a.Row,{children:Object(C.jsx)(z.a.Column,{children:Object(C.jsxs)(x.a.Group,{children:[Object(C.jsx)(x.a,{children:Object(C.jsxs)(x.a.Content,{children:[Object(C.jsx)(y.a,{floated:"right",size:"mini",src:"https://react.semantic-ui.com/images/avatar/large/steve.jpg"}),Object(C.jsx)(x.a.Header,{children:"Aakarsh Fadnis"}),Object(C.jsx)(x.a.Meta,{children:"Friends of Elliot"}),Object(C.jsxs)(x.a.Description,{children:["Steve wants to add you to the group ",Object(C.jsx)("strong",{children:"best friends"})]})]})}),Object(C.jsx)(x.a,{children:Object(C.jsxs)(x.a.Content,{children:[Object(C.jsx)(y.a,{floated:"right",size:"mini",src:"https://react.semantic-ui.com/images/avatar/large/steve.jpg"}),Object(C.jsx)(x.a.Header,{children:"Abhas Prasad"}),Object(C.jsx)(x.a.Meta,{children:"Friends of Elliot"}),Object(C.jsxs)(x.a.Description,{children:["Steve wants to add you to the group ",Object(C.jsx)("strong",{children:"best friends"})]})]})}),Object(C.jsx)(x.a,{children:Object(C.jsxs)(x.a.Content,{children:[Object(C.jsx)(y.a,{floated:"right",size:"mini",src:"https://react.semantic-ui.com/images/avatar/large/steve.jpg"}),Object(C.jsx)(x.a.Header,{children:"Biljith Thadichi"}),Object(C.jsx)(x.a.Meta,{children:"Friends of Elliot"}),Object(C.jsxs)(x.a.Description,{children:["Steve wants to add you to the group ",Object(C.jsx)("strong",{children:"best friends"})]})]})}),Object(C.jsx)(x.a,{children:Object(C.jsxs)(x.a.Content,{children:[Object(C.jsx)(y.a,{floated:"right",size:"mini",src:"https://react.semantic-ui.com/images/avatar/large/steve.jpg"}),Object(C.jsx)(x.a.Header,{children:"Sid Keshkar"}),Object(C.jsx)(x.a.Meta,{children:"Friends of Elliot"}),Object(C.jsxs)(x.a.Description,{children:["Steve wants to add you to the group ",Object(C.jsx)("strong",{children:"best friends"})]})]})})]})})})})]})]})},W=n(198),G=n(10),R=n(38);var U=function(e){var t=e.setToken,n=Object(a.useState)(),c=Object(s.a)(n,2),i=c[0],r=c[1],o=Object(a.useState)(),d=Object(s.a)(o,2),h=d[0],b=d[1],u=Object(a.useState)(!1),O=Object(s.a)(u,2),x=O[0],m=O[1],g=Object(G.f)(),v=function(){var e=Object(j.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,fetch("/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:i,password:h})}).then((function(e){if(!e.ok)throw Error(e.statusText);return e.json()})).then((function(e){var n=e.token;console.log(n),g.push("/"),localStorage.setItem("token",n),t(n)}),(function(e){console.log("error"),m(!0)})).catch((function(e){m(!0),console.log("error")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsx)(z.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle",children:Object(C.jsxs)(z.a.Column,{style:{maxWidth:450},children:[Object(C.jsx)(T.a,{as:"h2",color:"teal",textAlign:"center",children:"Log-in to your account"}),Object(C.jsxs)(p.a,{size:"large",onSubmit:v,error:x,children:[Object(C.jsxs)(A.a,{stacked:!0,children:[Object(C.jsx)(p.a.Input,{fluid:!0,icon:"user",iconPosition:"left",placeholder:"E-mail address",onChange:function(e){return r(e.target.value)}}),Object(C.jsx)(p.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password",type:"password",onChange:function(e){return b(e.target.value)}}),Object(C.jsx)(f.a,{color:"teal",fluid:!0,size:"large",children:"Login"})]}),Object(C.jsx)(W.a,{error:!0,header:"Login failed",children:"Login failed with an error."})]}),Object(C.jsxs)(W.a,{children:["New to us? ",Object(C.jsx)(R.b,{to:"/signup",children:"Sign Up"})]})]})})};var V=function(){var e=Object(a.useState)(),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(),r=Object(s.a)(i,2),o=r[0],d=r[1],h=Object(a.useState)(),b=Object(s.a)(h,2),u=b[0],O=b[1],x=Object(a.useState)(!1),m=Object(s.a)(x,2),g=m[0],v=m[1],k=Object(a.useState)(!1),y=Object(s.a)(k,2),S=y[0],w=y[1],I=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:u,email:n,password:o})}).then((function(e){200!=e.status?(w(!0),v(!1)):(w(!1),v(!0))}),(function(e){v(!1),w(!0)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(C.jsx)(z.a,{textAlign:"center",style:{height:"100vh"},verticalAlign:"middle",children:Object(C.jsxs)(z.a.Column,{style:{maxWidth:450},children:[Object(C.jsx)(T.a,{as:"h2",color:"teal",textAlign:"center",children:"Create your account"}),Object(C.jsx)(p.a,{size:"large",onSubmit:I,success:g,error:S,children:Object(C.jsxs)(A.a,{stacked:!0,children:[Object(C.jsx)(p.a.Input,{fluid:!0,icon:"id badge",iconPosition:"left",placeholder:"Username",onChange:function(e){return O(e.target.value)}}),Object(C.jsx)(p.a.Input,{fluid:!0,icon:"user",iconPosition:"left",placeholder:"E-mail address",onChange:function(e){return c(e.target.value)}}),Object(C.jsx)(p.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password",type:"password",onChange:function(e){return d(e.target.value)}}),Object(C.jsxs)(W.a,{success:!0,header:"Signup Complete",children:["Successfully signed up! ",Object(C.jsx)(R.b,{to:"/login",children:"Log In"}),"."]}),Object(C.jsxs)(W.a,{error:!0,header:"Signup failed",children:["User with the same email already exists. ",Object(C.jsx)(R.b,{to:"/login",children:"Log In"}),"\xa0instead"]}),Object(C.jsx)(f.a,{color:"teal",fluid:!0,size:"large",children:"Signup"})]})}),Object(C.jsxs)(W.a,{children:["Already have an account with us? ",Object(C.jsx)(R.b,{to:"/login",children:"Log In"})]})]})})};n(179);var K=function(){var e=Object(a.useState)(localStorage.getItem("token")),t=Object(s.a)(e,2),n=t[0],c=t[1];return n?Object(C.jsx)(R.a,{children:Object(C.jsx)(G.c,{children:Object(C.jsx)(G.a,{path:"/",children:Object(C.jsx)(J,{token:n})})})}):Object(C.jsxs)(R.a,{children:[Object(C.jsx)(G.a,{path:"/signup",children:Object(C.jsx)(V,{})}),Object(C.jsx)(G.a,{path:"/",children:Object(C.jsx)(U,{setToken:c})})]})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,204)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};r.a.render(Object(C.jsx)(c.a.StrictMode,{children:Object(C.jsx)(K,{})}),document.getElementById("root")),q()}},[[180,1,2]]]);
//# sourceMappingURL=main.89f682fa.chunk.js.map