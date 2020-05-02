(this["webpackJsonpreact-website"]=this["webpackJsonpreact-website"]||[]).push([[0],{29:function(e,t,a){e.exports=a(46)},34:function(e,t,a){},36:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),i=a.n(l),o=(a(34),a(35),a(19)),c=a(20),s=a(11),m=a(28),u=a(27),d=(a(36),a(49)),h=a(52),p=a(53),E=a(50),f=a(51),g=a(21),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={isEmailCopied:!1},n.refList={home:r.a.createRef(),intro:r.a.createRef(),academics:r.a.createRef(),volunteer:r.a.createRef(),development:r.a.createRef(),contact:r.a.createRef()},n.timeouts=[],n.scrollTo=n.scrollTo.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"componentWillUnmount",value:function(){this.timeouts.forEach((function(e){clearTimeout(e)}))}},{key:"scrollTo",value:function(e){window.scrollTo({behavior:"smooth",top:"home"!==e?this.refList[e].current.offsetTop:0})}},{key:"render",value:function(){var e=this,t=this.state.isEmailCopied;return r.a.createElement(d.a,{fluid:!0},r.a.createElement(h.a,{fixed:"top",expand:"lg",bg:"dark",variant:"dark"},r.a.createElement(h.a.Toggle,{style:{margin:"auto"}}),r.a.createElement(h.a.Collapse,{className:"justify-content-end"},r.a.createElement(p.a,null,r.a.createElement(p.a.Link,{onClick:function(){return e.scrollTo("home")}},"Home"),r.a.createElement(p.a.Link,{onClick:function(){return e.scrollTo("intro")}},"Introduction"),r.a.createElement(p.a.Link,{onClick:function(){return e.scrollTo("academics")}},"Academics"),r.a.createElement(p.a.Link,{onClick:function(){return e.scrollTo("volunteer")}},"Volunteer"),r.a.createElement(p.a.Link,{onClick:function(){return e.scrollTo("development")}},"Experiences"),r.a.createElement(p.a.Link,{onClick:function(){return e.scrollTo("contact")}},"Contact Me")))),r.a.createElement(E.a,{ref:this.refList.home},r.a.createElement("img",{className:"image",src:"/image/home-background.jpg"}),r.a.createElement(E.a,{className:"overlay center"},r.a.createElement("h1",{className:"inverted text-center",style:{zIndex:1}},"Welcome to my World"))),r.a.createElement(E.a,{ref:this.refList.intro},r.a.createElement("img",{className:"image",src:"/image/intro-background.jpg"}),r.a.createElement(E.a,{className:"overlay overlay-two center"},r.a.createElement("h1",{className:"inverted text-center"},"My name is Jasper Bae"),r.a.createElement("h3",{className:"inverted text-center"},"Learn. Apply. Share"))),r.a.createElement(E.a,{className:"padding",ref:this.refList.academics},r.a.createElement("h3",{className:"section-title"},"Academic Experience"),r.a.createElement("div",null,r.a.createElement("p",{className:"overline"},"September 2016 - May 2020"),r.a.createElement("h4",null,"Rutgers University Business School - New Brunswick"),r.a.createElement("h5",null,"B.S. in Computer Science, Finance"))),r.a.createElement("hr",null),r.a.createElement(E.a,{className:"padding",ref:this.refList.volunteer},r.a.createElement("h3",{className:"section-title"},"Volunteer Experience"),r.a.createElement("div",null,r.a.createElement("p",{className:"overline"},"September 2017 - May 2020"),r.a.createElement("h4",null,"Rutgers University Habitat for Humanity"),r.a.createElement("h5",null,"President"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",null,"Led 15 executive members to reorganize the organization, to lay down a new foundation for the next e-board, and to handle COVID-19 effects.")),r.a.createElement("li",null,r.a.createElement("p",null,"Established positive relationships with our faculty advisor and parent affiliate, Habitat for Humanity of Greater Plainfield & Middlesex County, by having effective communication, understanding, and transparency.")),r.a.createElement("li",null,r.a.createElement("p",null,"Fundraised effectively $7,000+ to be donated to our parent affiliate in its next housing project."))),r.a.createElement("h5",null,"Webmaster"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",null,"Developed the website for the organization, in 2017, by handling domain registration and payments, WordPress development, and new modifications to the website to enhance user experience.")),r.a.createElement("li",null,r.a.createElement("p",null,"Utilized Google Sheets API and Google Apps Script to develop a REST API for the website to show a Javascript scoreboard for a large event.")),r.a.createElement("li",null,r.a.createElement("p",null,"Simplified website design to reduce the requirement of web development knowledge."))))),r.a.createElement("hr",null),r.a.createElement(E.a,{className:"padding",ref:this.refList.development},r.a.createElement("h3",{className:"section-title"},"Development Experience"),r.a.createElement("div",{style:{marginBottom:50}},r.a.createElement("p",{className:"overline"},r.a.createElement("b",null,"Now")),r.a.createElement("h4",null,r.a.createElement("a",{href:""},"Devotion Time")),r.a.createElement("p",null,"Did you miss a Devotion Time with your brothers or sisters? Is it hard to communicate with each other to share your perspective on the Scripture and slice a portion of your time devoted to God? This mobile application handles this by digitalizing devotion time and promoting fellowship among brothers and sisters in Christ.")),r.a.createElement("div",{style:{marginBottom:50}},r.a.createElement("p",{className:"overline"},"2019"),r.a.createElement("h4",null,"UniNav: A Rutgers Bus App"),r.a.createElement("p",{className:"overline"},r.a.createElement("a",{style:{marginRight:15},href:"https://github.com/Nemferno/rutgersbusapp-backend"},"Backend"),r.a.createElement("a",{href:"https://github.com/Nemferno/rutgersbusapp-front"},"Frontend")),r.a.createElement("p",null,"Tired of the miscommunication and doubts of the Rutgers Official App and NextBus system? Fear not, this mobile app can display bus routes in real time, notify you before the bus arrives, and alerts when buses have taken breaks.")),r.a.createElement("div",{style:{marginBottom:50}},r.a.createElement("p",{className:"overline"},"2018"),r.a.createElement("h4",null,r.a.createElement("a",{href:"https://github.com/Nemferno/Course-Sniper-Bot"},"Rutgers Course Sniper RegBot")),r.a.createElement("p",null,"Simple bot that can register a student for him/her based on a query of a selection of classes. It can course snipe anyone who is saving for another student or during any time of day, locking in your query for next semester.")),r.a.createElement("div",{style:{marginBottom:50}},r.a.createElement("p",{className:"overline"},"2015"),r.a.createElement("h4",null,r.a.createElement("a",{href:"https://github.com/Nemferno/Liberandum"},"Liberandum")),r.a.createElement("p",null,"An android mobile game that revolves around multi-tasking.")),r.a.createElement("div",{style:{marginBottom:50}},r.a.createElement("p",{className:"overline"},"2015"),r.a.createElement("h4",null,r.a.createElement("a",{href:"https://github.com/Nemferno/USlickAI2D"},"USlickAI2d")),r.a.createElement("p",null,"A Java game UI library that creates and customizes user interfaces without the need for XML configuration files. This technique allows developers to programmatically create user interfaces."))),r.a.createElement("hr",null),r.a.createElement("div",{className:"padding",ref:this.refList.contact},r.a.createElement("h3",{className:"section-title text-center"},"Contact Me"),r.a.createElement("div",null,r.a.createElement(f.a,{variant:"primary",size:"lg",href:"https://linkedin.com/in/jasperbae",block:!0},"LINKEDIN"),r.a.createElement(g.CopyToClipboard,{text:"jasperbae@gmail.com",onCopy:function(){e.setState({isEmailCopied:!0}),e.timeouts.push(setTimeout((function(){e.setState({isEmailCopied:!1})}),5e3))}},r.a.createElement(f.a,{variant:"primary",size:"lg",block:!0},t?"Copied Email!":"EMAIL")),r.a.createElement(f.a,{variant:"primary",size:"lg",href:"https://linkedin.com/in/bae.jasper",block:!0},"INSTAGRAM"))),r.a.createElement("hr",null),r.a.createElement("div",{className:"padding"},r.a.createElement("p",{className:"outline text-center"},"Web Version 1.0"),r.a.createElement("p",{className:"outline text-center"},"(c) 2020 Jasper Bae. All Rights Reserved.")))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.be61b8bd.chunk.js.map