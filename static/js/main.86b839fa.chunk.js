(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/cinema.dc7320d7.png"},24:function(e,t,a){e.exports=a(50)},29:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},42:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(18),l=a.n(i),r=a(7),s=(a(29),a(1)),c=a(2),m=a(4),u=a(3),d=a(5),p=(a(31),a(33),a(8)),v=a(19),h=a.n(v),g=o.a.createContext({shouldFooterBePositionedAbsolute:!1,setFooterToBottom:function(e){},isLoggedIn:!1,login:function(e){},logout:function(){}}),f=function(e){return function(t){return o.a.createElement(g.Consumer,null,function(a){return o.a.createElement(e,Object.assign({},t,{global:a}))})}},b=g,E=(a(35),{color:"#fff",textDecoration:"none"}),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={password:"",isLoggedIn:!1},a.handleLoginInput=function(e){a.setState({password:e.target.value})},a.handleLoginAndLogout=function(){window.localStorage.getItem("isLoggedIn")?a.props.global.logout():a.props.global.login(a.state.password.toLowerCase())},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t="true"===localStorage.getItem("isLoggedIn");return o.a.createElement("header",{className:"App-header"},o.a.createElement("nav",null,o.a.createElement("div",{className:"login-holder"},o.a.createElement("input",{type:"text",placeholder:t?"Ulogovani ste":"Ulogujte se",onChange:this.handleLoginInput,disabled:t,value:t?"Ulogovani ste":this.state.password}),o.a.createElement("span",{className:"login-button",onClick:function(){return e.handleLoginAndLogout(e.state.password)}},o.a.createElement("img",{src:t?"logout.png":"key.png",alt:"key"}))),o.a.createElement("span",null,o.a.createElement(r.b,{to:"/",style:E},"Po\u010detna"),o.a.createElement(r.b,{to:"/addMovie",style:E},"Dodaj film"))),o.a.createElement("div",null,o.a.createElement(r.b,{to:"/"},o.a.createElement("img",{className:"App-logo",src:h.a,alt:"logo"})," ",o.a.createElement("h1",null,"Baza filmova"))))}}]),t}(n.Component),y=Object(p.f)(f(j)),k=(a(42),"https://baza-filmova.herokuapp.com/filmovi/"),O="https://baza-filmova.herokuapp.com/dodaj-film/",w="https://baza-filmova.herokuapp.com/obrisi-film/",N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).deleteMovie=function(e){e.preventDefault();var t=a.props.podaci,n=t.naziv,o=t._id;window.confirm('Delete movie: "'.concat(n,'" ?'))&&fetch(w,{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:o})}).then(function(e){return e.text()}).then(function(e){alert(e),"/"===a.props.history.location.pathname?a.props.getAllMovies():a.props.history.push("/")})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="true"===localStorage.getItem("isLoggedIn");return this.props.podaci?o.a.createElement("div",null,e&&o.a.createElement("span",{onClick:this.deleteMovie,className:"delete-btn",title:"Obrisi film"},"X"),o.a.createElement("h3",{className:e?"logged-in":""},this.props.podaci.naziv),o.a.createElement("div",{className:"image-holder"},o.a.createElement("img",{src:this.props.podaci.slika,alt:this.props.podaci.naziv,className:"movieImg"})),o.a.createElement("p",null,this.props.podaci.godina)):this.props.movie?o.a.createElement("div",null,e&&o.a.createElement("span",{onClick:this.deleteMovie,className:"delete-btn",title:"Obrisi film"},"X"),o.a.createElement("h3",{className:e?"logged-in":""},this.props.movie.naziv),o.a.createElement("div",{className:"image-holder"},o.a.createElement("img",{src:this.props.movie.slika,alt:this.props.movie.naziv,className:"movieImg"})),o.a.createElement("p",null,this.props.movie.godina)):o.a.createElement("img",{className:"loading",src:"loading.gif",alt:"Loading"})}}]),t}(n.Component),A=Object(p.f)(N),C=f(function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={filmovi:[],filtered:[],sortMoviesVisible:!1,isLoaded:!1,selectedFilter:""},a.getAllMovies=function(){a.props.global.handleFooterPositioning(!0),fetch(k).then(function(e){return e.json()}).then(function(e){a.setState({filmovi:e,filtered:e,isLoaded:!0}),a.props.global.handleFooterPositioning(!1)}).catch(function(e){console.log(e)})},a.toogleSortMovies=function(){a.setState({sortMoviesVisible:!a.state.sortMoviesVisible})},a.sortByAtoZAsc=function(){var e=a.state.filmovi.sort(function(e,t){var a=e.naziv.toLowerCase(),n=t.naziv.toLowerCase();return a<n?-1:n<a?1:0});a.setState({filtered:e,selectedFilter:"A-Z"})},a.sortByAtoZADec=function(){var e=a.state.filmovi.sort(function(e,t){var a=e.naziv.toLowerCase(),n=t.naziv.toLowerCase();return a>n?-1:n>a?1:0});a.setState({filtered:e,selectedFilter:"Z-A"})},a.sortByYearFromNewest=function(){var e=a.state.filmovi.sort(function(e,t){return t.godina-e.godina});a.setState({filtered:e,selectedFilter:"newest"})},a.sortByYearFromOldest=function(){var e=a.state.filmovi.sort(function(e,t){return e.godina-t.godina});a.setState({filtered:e,selectedFilter:"oldest"})},a.searchMovies=function(e){var t=e.target.value,n=a.state.filmovi.filter(function(e){return e.naziv.toLowerCase().indexOf(t.toLowerCase())>-1});a.setState({filtered:n}),n.length?a.props.global.handleFooterPositioning(!1):a.props.global.handleFooterPositioning(!0)},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getAllMovies()}},{key:"render",value:function(){var e,t=this,a=this.state.selectedFilter,n=this.state.filtered.map(function(e){var a=e.naziv,n=e.godina,i=e.slika,l=e._id,s=e.comments;return o.a.createElement("div",{className:"col-12 col-sm-6 col-md-4 col-lg-3",key:l},o.a.createElement("div",{className:"movieBox"},o.a.createElement(r.b,{to:{pathname:"singleMovie/".concat(l),state:{naziv:a,godina:n,slika:i,_id:l,comments:s}}},o.a.createElement(A,{podaci:{naziv:a,godina:n,slika:i,_id:l,comments:s},getAllMovies:t.getAllMovies}))))});switch(a){case"A-Z":case"Z-A":e=a;break;case"newest":e="Najnoviji";break;case"oldest":e="Najstariji";break;default:e=""}return o.a.createElement("div",null,o.a.createElement("input",{type:"text",placeholder:"Pretra\u017ei filmove",className:"search-movie",onChange:this.searchMovies}),o.a.createElement("div",{className:"sortMovies",style:this.state.sortMoviesVisible?{display:"block"}:{display:"none"}},o.a.createElement("ul",null,o.a.createElement("li",{className:"A-Z"===a?"selected-filter":"",onClick:this.sortByAtoZAsc},o.a.createElement("span",null,"A - Z")),o.a.createElement("li",{className:"Z-A"===a?"selected-filter":"",onClick:this.sortByAtoZADec},o.a.createElement("span",null,"Z - A")),o.a.createElement("li",{className:"newest"===a?"selected-filter":"",onClick:this.sortByYearFromNewest},o.a.createElement("span",null,"Najnoviji")),o.a.createElement("li",{className:"oldest"===a?"selected-filter":"",onClick:this.sortByYearFromOldest},o.a.createElement("span",null,"Najstariji")))),o.a.createElement("p",{id:"sortMoviesBtn",onClick:this.toogleSortMovies},this.state.sortMoviesVisible?"Sakrij filtere":"Sortiraj filmove",this.state.sortMoviesVisible?"":o.a.createElement("span",{className:"selected-filter-title"},o.a.createElement("small",null,e))),this.state.isLoaded?o.a.createElement("div",{className:"container-fluid moviesHolder"},o.a.createElement("div",{className:"row"},n)):o.a.createElement("img",{className:"loading",src:"loading.gif",alt:"Loading"}))}}]),t}(n.Component)),I=a(22);a(44);function L(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;fetch(O,{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({naziv:e,godina:t,slika:a,comments:n})}).then(function(t){alert('Movie " '.concat(e.toUpperCase(),'" has been added to movie base. Thank you for updating!')),window.location.reload()}).catch(function(e){return alert("Do\u0161lo je do gre\u0161ke")})}var M=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={movieName:"",movieImg:"",movieYear:"",visible:!1},a.handleInput=function(e){var t=e.target,n=t.value,o=t.name;a.setState(Object(I.a)({},o,n))},a.addMovie=function(e){e.preventDefault();var t=a.state,n=t.movieName,o=t.movieImg;L(n,t.movieYear,o),a.props.global.setIsLoaded(!0),a.props.history.push("/addMovie")},a.imagePreview=function(e){var t=e.target.value;a.setState({movieImg:t})},a.eventHandler=function(e){a.handleInput(e),a.imagePreview(e)},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.movieImg?this.state.movieImg:"camera_movie.png";return o.a.createElement("div",{className:"newMovie"},o.a.createElement("h1",null,"Dodaj Film"),o.a.createElement("form",{method:"post",onSubmit:this.addMovie},o.a.createElement("label",null,"Naziv Filma"),o.a.createElement("input",{type:"text",name:"movieName",onChange:this.handleInput,placeholder:"Dodaj naslov",required:!0}),o.a.createElement("label",null,"Godina"),o.a.createElement("input",{type:"text",name:"movieYear",onChange:this.handleInput,placeholder:"Dodaj godinu",required:!0}),o.a.createElement("label",null,"Slika"),o.a.createElement("input",{type:"text",name:"movieImg",onChange:this.eventHandler,placeholder:"Dodaj url slike",required:!0}),o.a.createElement("div",{className:"imagePlaceholder"},o.a.createElement("img",{src:e,alt:"movieImg"})),o.a.createElement("input",{type:"submit",value:"Dodaj"})))}}]),t}(n.Component),S=Object(p.f)(f(M)),F=a(23),z=(a(46),function(e){return fetch("".concat("https://baza-filmova.herokuapp.com/pokazi-film/").concat(e)).then(function(e){return e.json()})}),B=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={movie:{}},a.handleSubmit=function(e){e.preventDefault();var t=a.props.location.state,n=t.naziv,o=t.godina,i=t.slika,l=t.comments,r={user:e.target.name.value,comment:e.target.comment.value};L(n,o,i,l?Object(F.a)(l).concat([r]):[r]),window.location.reload()},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.global.handleFooterPositioning(!0);var t=this.props.location.pathname.split("/singleMovie/")[1];z(t).then(function(t){e.setState({movie:t}),e.props.global.handleFooterPositioning(!1)})}},{key:"render",value:function(){var e;if(this.props.location.state)try{e=this.props.location.state.comments.map(function(e,t){return o.a.createElement("div",{key:t},o.a.createElement("p",null,o.a.createElement("small",null,"Komentari:")),o.a.createElement("div",{className:"comment-holder"},o.a.createElement("p",null,o.a.createElement("b",null,e.user)),o.a.createElement("p",null,e.comment)))})}catch(t){e=o.a.createElement("p",null,"Budite prvi koji \u0107e ostaviti komentar")}else try{e=this.state.movie.comments.map(function(e,t){return o.a.createElement("div",{key:t},o.a.createElement("p",null,o.a.createElement("small",null,"Komentari:")),o.a.createElement("div",{className:"comment-holder"},o.a.createElement("p",null,o.a.createElement("b",null,e.user)),o.a.createElement("p",null,e.comment)))})}catch(t){e=o.a.createElement("p",null,"Budite prvi koji \u0107e ostaviti komentar")}return o.a.createElement("div",{className:"single-movie"},o.a.createElement("div",null,o.a.createElement("div",{className:"movieBox"},o.a.createElement(A,{podaci:this.props.location.state,movie:this.state.movie})),o.a.createElement("div",null,e),o.a.createElement("form",{onSubmit:this.handleSubmit,className:"single-movie-form"},o.a.createElement("label",null,"Korisnik: "),o.a.createElement("input",{name:"name"}),o.a.createElement("br",null),o.a.createElement("label",null,"Komentar: "),o.a.createElement("textarea",{name:"comment"}),o.a.createElement("input",{type:"submit",value:"Po\u0161alji"})),o.a.createElement(r.b,{to:"/",className:"back-button"},"< Back")))}}]),t}(n.Component),P=Object(p.f)(f(B)),D=function(){return o.a.createElement("main",null,o.a.createElement(p.c,null,o.a.createElement(p.a,{exact:!0,path:"/",component:C}),o.a.createElement(p.a,{path:"/addMovie",component:S}),o.a.createElement(p.a,{path:"/singlemovie/:id",component:P})))},x=f(function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("footer",{className:this.props.global.shouldFooterBePositionedAbsolute?"absolute-positioned-footer":""},o.a.createElement("small",null,"Copyright \xa9 Emil 2018"))}}]),t}(n.Component)),Z=a(14),Y=a.n(Z),U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleFooterPositioning=function(e){a.setState({shouldFooterBePositionedAbsolute:e})},a.login=function(e){"0e6db2e7ba7f8699a48028462a26a6f3"===Y()(e)||"319548ab86ededd8a60373579f99eba9"===Y()(e)?(window.localStorage.setItem("isLoggedIn","true"),a.setState({isLoggedIn:!0}),alert("Uspesno ste se ulogovali")):alert("Uneli ste pogresnu lozinku")},a.logout=function(){window.localStorage.setItem("isLoggedIn",""),a.setState({isLoggedIn:!1}),alert("Izlogovali ste se")},a.state={shouldFooterBePositionedAbsolute:!1},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.handleFooterPositioning,t=this.login,a=this.logout,n=this.state,i=n.shouldFooterBePositionedAbsolute,l=n.isLoggedIn;return o.a.createElement(b.Provider,{value:{shouldFooterBePositionedAbsolute:i,handleFooterPositioning:e,isLoggedIn:l,login:t,logout:a}},this.props.children)}}]),t}(n.Component),V=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(U,null,o.a.createElement(y,{ime:"Emil"}),o.a.createElement(D,null),o.a.createElement(x,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(r.a,null,o.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.86b839fa.chunk.js.map