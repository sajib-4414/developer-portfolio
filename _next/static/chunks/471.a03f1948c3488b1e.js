"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[471],{9543:function(e,n,s){var a=s(5893);s(7294);var l=s(9464);let i=e=>{let{animationPath:n}=e;return(0,a.jsx)("div",{onClick:()=>null,children:(0,a.jsx)(l.Z,{options:{loop:!0,autoplay:!0,path:n}})})};n.Z=i},8819:function(e,n,s){var a=s(5893);s(7294);var l=s(7975),i=s(8122);let t=()=>(0,a.jsxs)("div",{className:"btn-wrapper text-lg",children:[i.KT.url&&(0,a.jsx)(l.Z,{className:"btn-icon-only rounded-circle ml-1",color:"white",rel:"noopener","aria-label":"URL",href:i.KT.url,target:"_blank",children:(0,a.jsx)("span",{className:"btn-inner--icon",children:(0,a.jsx)("i",{className:"fa fa-link"})})}),i.KT.linkedin&&(0,a.jsx)(l.Z,{className:"btn-icon-only rounded-circle ml-1",color:"twitter",rel:"noopener","aria-label":"Linkedin",href:i.KT.linkedin,target:"_blank",children:(0,a.jsx)("span",{className:"btn-inner--icon",children:(0,a.jsx)("i",{className:"fa fa-linkedin"})})}),i.KT.github&&(0,a.jsx)(l.Z,{className:"btn-icon-only rounded-circle ml-1",color:"github",href:i.KT.github,rel:"noopener","aria-label":"Github",target:"_blank",children:(0,a.jsx)("span",{className:"btn-inner--icon",children:(0,a.jsx)("i",{className:"fa fa-github"})})}),i.KT.instagram&&(0,a.jsx)(l.Z,{className:"btn-icon-only rounded-circle ml-1",color:"instagram",href:i.KT.instagram,target:"_blank",rel:"noopener","aria-label":"Instagram",children:(0,a.jsx)("span",{className:"btn-inner--icon",children:(0,a.jsx)("i",{className:"fa fa-instagram"})})}),i.KT.facebook&&(0,a.jsx)(l.Z,{className:"btn-icon-only rounded-circle ml-1",color:"facebook",href:i.KT.facebook,target:"_blank",rel:"noopener","aria-label":"Facebook",children:(0,a.jsx)("span",{className:"btn-inner--icon",children:(0,a.jsx)("i",{className:"fa fa-facebook-square"})})}),i.KT.twitter&&(0,a.jsx)(l.Z,{className:"btn-icon-only rounded-circle",color:"twitter",href:i.KT.twitter,target:"_blank",rel:"noopener","aria-label":"Twitter",children:(0,a.jsx)("span",{className:"btn-inner--icon",children:(0,a.jsx)("i",{className:"fa fa-twitter"})})})]});n.Z=t},9471:function(e,n,s){s.r(n);var a=s(5893),l=s(7294),i=s(8122),t=s(8595),r=s(267),o=s(1252),c=s(7975),d=s(9543),p=s(8819);let b=()=>((0,l.useEffect)(()=>{document.documentElement.scrollTop=0,document.scrollingElement.scrollTop=0}),(0,a.jsx)("main",{children:(0,a.jsx)("div",{className:"position-relative",children:(0,a.jsxs)("section",{className:"section section-lg section-shaped pb-250",children:[(0,a.jsxs)("div",{className:"shape shape-style-1 bg-gradient-info",children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]}),(0,a.jsx)(t.Z,{className:"py-lg-md d-flex",children:(0,a.jsx)("div",{className:"col px-0",children:(0,a.jsxs)(r.Z,{children:[(0,a.jsxs)(o.Z,{lg:"6",children:[(0,a.jsx)("h1",{className:"display-3 text-white",children:i.c0.title+" "}),(0,a.jsx)("p",{className:"lead text-white",children:i.c0.description}),(0,a.jsx)(p.Z,{}),i.c0.resumeLink&&(0,a.jsx)("div",{className:"btn-wrapper my-4",children:(0,a.jsxs)(c.Z,{className:"btn-white btn-icon mb-3 mb-sm-0 ml-1",color:"default",href:i.c0.resumeLink,children:[(0,a.jsx)("span",{className:"btn-inner--icon mr-1",children:(0,a.jsx)("i",{className:"fa fa-file"})}),(0,a.jsx)("span",{className:"btn-inner--text",children:"See My Resume"})]})})]}),(0,a.jsx)(o.Z,{lg:"6",children:(0,a.jsx)(d.Z,{animationPath:"/lottie/coding.json"})})]})})}),(0,a.jsx)("div",{className:"separator separator-bottom separator-skew",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0",children:(0,a.jsx)("polygon",{className:"fill-white",points:"2560 0 2560 100 0 100"})})})]})})}));n.default=b},7975:function(e,n,s){var a=s(7462),l=s(3366),i=s(7326),t=s(5068),r=s(7294),o=s(5697),c=s.n(o),d=s(4184),p=s.n(d),b=s(3663),h={active:c().bool,"aria-label":c().string,block:c().bool,color:c().string,disabled:c().bool,outline:c().bool,tag:b.iC,innerRef:c().oneOfType([c().object,c().func,c().string]),onClick:c().func,size:c().string,children:c().node,className:c().string,cssModule:c().object,close:c().bool},u=function(e){function n(n){var s;return(s=e.call(this,n)||this).onClick=s.onClick.bind((0,i.Z)(s)),s}(0,t.Z)(n,e);var s=n.prototype;return s.onClick=function(e){if(this.props.disabled){e.preventDefault();return}if(this.props.onClick)return this.props.onClick(e)},s.render=function(){var e=this.props,n=e.active,s=e["aria-label"],i=e.block,t=e.className,o=e.close,c=e.cssModule,d=e.color,h=e.outline,u=e.size,m=e.tag,f=e.innerRef,x=(0,l.Z)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);o&&void 0===x.children&&(x.children=r.createElement("span",{"aria-hidden":!0},"\xd7"));var j=(0,b.mx)(p()(t,{close:o},o||"btn",o||"btn"+(h?"-outline":"")+"-"+d,!!u&&"btn-"+u,!!i&&"btn-block",{active:n,disabled:this.props.disabled}),c);return x.href&&"button"===m&&(m="a"),r.createElement(m,(0,a.Z)({type:"button"===m&&x.onClick?"button":void 0},x,{className:j,ref:f,onClick:this.onClick,"aria-label":s||(o?"Close":null)}))},n}(r.Component);u.propTypes=h,u.defaultProps={color:"secondary",tag:"button"},n.Z=u},7326:function(e,n,s){s.d(n,{Z:function(){return a}});function a(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},5068:function(e,n,s){function a(e,n){return(a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e})(e,n)}function l(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,a(e,n)}s.d(n,{Z:function(){return l}})}}]);