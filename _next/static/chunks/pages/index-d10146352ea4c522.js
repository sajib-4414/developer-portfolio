(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(d,u,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(5814)}])},7645:function(d,u,e){"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(d,u){let e=t.default,c={loading:d=>{let{error:u,isLoading:e,pastDelay:f}=d;return null}};d instanceof Promise?c.loader=()=>d:"function"==typeof d?c.loader=d:"object"==typeof d&&(c=f({},c,d)),c=f({},c,u);let o=c.loader,i=()=>null!=o?o().then(a):Promise.resolve(a(()=>null));return(c.loadableGenerated&&delete(c=f({},c,c.loadableGenerated)).loadableGenerated,"boolean"!=typeof c.ssr||c.ssr)?e(f({},c,{loader:i})):(delete c.webpack,delete c.modules,n(e,c))},u.noSSR=n;var f=e(6495).Z,c=e(2648).Z,t=(c(e(7294)),c(e(4588)));function a(d){return{default:(null==d?void 0:d.default)||d}}function n(d,u){return delete u.webpack,delete u.modules,d(u)}("function"==typeof u.default||"object"==typeof u.default&&null!==u.default)&&void 0===u.default.__esModule&&(Object.defineProperty(u.default,"__esModule",{value:!0}),Object.assign(u.default,u),d.exports=u.default)},3644:function(d,u,e){"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.LoadableContext=void 0;var f=(0,e(2648).Z)(e(7294));let c=f.default.createContext(null);u.LoadableContext=c},4588:function(d,u,e){"use strict";Object.defineProperty(u,"__esModule",{value:!0}),u.default=void 0;var f=e(6495).Z,c=(0,e(2648).Z)(e(7294)),t=e(3644);let a=[],n=[],o=!1;function i(d){let u=d(),e={loading:!0,loaded:null,error:null};return e.promise=u.then(d=>(e.loading=!1,e.loaded=d,d)).catch(d=>{throw e.loading=!1,e.error=d,d}),e}class s{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:d,_opts:u}=this;d.loading&&("number"==typeof u.delay&&(0===u.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},u.delay)),"number"==typeof u.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},u.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(d=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(d){this._state=f({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},d),this._callbacks.forEach(d=>d())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(d){return this._callbacks.add(d),()=>{this._callbacks.delete(d)}}constructor(d,u){this._loadFn=d,this._opts=u,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function r(d){return function(d,u){let e=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},u),f=null;function a(){if(!f){let u=new s(d,e);f={getCurrentValue:u.getCurrentValue.bind(u),subscribe:u.subscribe.bind(u),retry:u.retry.bind(u),promise:u.promise.bind(u)}}return f.promise()}if(!o){let d=e.webpack?e.webpack():e.modules;d&&n.push(u=>{for(let e of d)if(-1!==u.indexOf(e))return a()})}function i(d,u){!function(){a();let d=c.default.useContext(t.LoadableContext);d&&Array.isArray(e.modules)&&e.modules.forEach(u=>{d(u)})}();let n=c.default.useSyncExternalStore(f.subscribe,f.getCurrentValue,f.getCurrentValue);return c.default.useImperativeHandle(u,()=>({retry:f.retry}),[]),c.default.useMemo(()=>{var u;return n.loading||n.error?c.default.createElement(e.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:f.retry}):n.loaded?c.default.createElement((u=n.loaded)&&u.default?u.default:u,d):null},[d,n])}return i.preload=()=>a(),i.displayName="LoadableComponent",c.default.forwardRef(i)}(i,d)}function l(d,u){let e=[];for(;d.length;){let f=d.pop();e.push(f(u))}return Promise.all(e).then(()=>{if(d.length)return l(d,u)})}r.preloadAll=()=>new Promise((d,u)=>{l(a).then(d,u)}),r.preloadReady=function(){let d=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(u=>{let e=()=>(o=!0,u());l(n,d).then(e,e)})},window.__NEXT_PRELOADREADY=r.preloadReady,u.default=r},5814:function(d,u,e){"use strict";e.r(u),e.d(u,{__N_SSG:function(){return k},default:function(){return y}});var f=e(5893),c=e(5152),t=e.n(c);e(7294);var a=e(9008),n=e.n(a),o=e(8122),i=function(){return(0,f.jsxs)(n(),{children:[(0,f.jsx)("title",{children:o.hD.title}),(0,f.jsx)("meta",{name:"title",content:o.hD.title}),(0,f.jsx)("meta",{name:"author",content:o.hD.author}),(0,f.jsx)("meta",{name:"description",content:o.hD.description}),(0,f.jsx)("meta",{name:"keywords",content:o.hD.keywords.join(", ")}),(0,f.jsx)("link",{rel:"canonical",href:o.hD.url}),(0,f.jsx)("meta",{property:"og:type",content:"website"}),(0,f.jsx)("meta",{property:"og:url",content:o.hD.url}),(0,f.jsx)("meta",{property:"og:title",content:o.hD.title}),(0,f.jsx)("meta",{property:"og:description",content:o.hD.description}),(0,f.jsx)("meta",{property:"og:image",content:o.hD.image}),(0,f.jsx)("meta",{property:"og:site_name",content:o.hD.title}),(0,f.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,f.jsx)("meta",{property:"twitter:url",content:o.hD.url}),(0,f.jsx)("meta",{property:"twitter:title",content:o.hD.title}),(0,f.jsx)("meta",{property:"twitter:description",content:o.hD.description}),(0,f.jsx)("meta",{property:"twitter:image",content:o.hD.image}),(0,f.jsx)("meta",{name:"robots",content:"Index"}),(0,f.jsx)("link",{rel:"manifest",href:"manifest.json"}),(0,f.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"./favicon.png"}),(0,f.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"./favicon.png"}),(0,f.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"./favicon.png"})]})};let s=t()(()=>Promise.all([e.e(333),e.e(128),e.e(880)]).then(e.bind(e,4880)),{loadableGenerated:{webpack:()=>[4880]}}),r=t()(()=>Promise.all([e.e(296),e.e(333),e.e(464),e.e(471)]).then(e.bind(e,9471)),{loadableGenerated:{webpack:()=>[9471]}}),l=t()(()=>Promise.all([e.e(296),e.e(333),e.e(464),e.e(128),e.e(114),e.e(7)]).then(e.bind(e,7007)),{loadableGenerated:{webpack:()=>[7007]}}),b=t()(()=>Promise.all([e.e(296),e.e(333),e.e(464),e.e(41)]).then(e.bind(e,2041)),{loadableGenerated:{webpack:()=>[2041]}}),p=t()(()=>Promise.all([e.e(333),e.e(810),e.e(318)]).then(e.bind(e,4318)),{loadableGenerated:{webpack:()=>[4318]}}),m=t()(()=>Promise.all([e.e(333),e.e(810),e.e(694)]).then(e.bind(e,2694)),{loadableGenerated:{webpack:()=>[2694]}}),h=t()(()=>Promise.all([e.e(333),e.e(810),e.e(668)]).then(e.bind(e,4668)),{loadableGenerated:{webpack:()=>[4668]}}),g=t()(()=>Promise.all([e.e(333),e.e(77)]).then(e.bind(e,8077)),{loadableGenerated:{webpack:()=>[8077]}});var k=!0;function y(d){let{githubProfileData:u}=d;return(0,f.jsxs)("div",{children:[(0,f.jsx)(i,{}),(0,f.jsx)(s,{}),(0,f.jsx)(r,{}),(0,f.jsx)(l,{}),(0,f.jsx)(b,{}),(0,f.jsx)(p,{}),(0,f.jsx)(m,{}),(0,f.jsx)(h,{}),(0,f.jsx)(g,{...u})]})}},8122:function(d,u,e){"use strict";e.d(u,{Bv:function(){return o},E5:function(){return i},KT:function(){return a},LO:function(){return n},b8:function(){return s},c0:function(){return t},hD:function(){return l},q:function(){return r}});var f=e(4134),c=e.n(f);let t={name:"Shamsul Arefin",title:"Full Stack Developer",description:"Experienced Software developer with expertise in Backend Services     with Python, Nodejs with CI/CD Pipeline integrations,     DevOps tools including Docker, Jenkins, AWS Kubernetes Services,     and React.js, Vue.js frontend frameworks.",resumeLink:"https://drive.google.com/file/d/1sLBDHlyJ3zIyablzlGwHYxjzlMFE5fd_/view?usp=sharing"},a={url:"https://sajib-4414.github.io/",linkedin:"https://www.linkedin.com/in/shamsul-arefin/",github:"https://github.com/sajib-4414"},n={title:"What I do",subTitle:"ENTHUSIAST SOFTWARE DEVELOPER WHO WANTS TO BRING IN INNOVATION WITH TECHNOLOGIES",data:[{title:"Backend Software Development",lottieAnimationFile:"lottie/skills/fullstack.json",skills:[c()("⚡ Building scalable and performant backend REST API services with Django and Nodejs"),c()("⚡ Build applications leveraging microservices, authentication and security, and event driven architectures"),c()("⚡ Utilizing SQL and NoSQL databases (PostgreSQL,MySQL, MongoDB) with efficient Query Optimized models & ORM, ODM Layers")],softwareSkills:[{skillName:"Python",fontAwesomeClassName:"logos:python"},{skillName:"Django",fontAwesomeClassName:"vscode-icons:file-type-django"},{skillName:"JavaScript",fontAwesomeClassName:"logos:javascript"},{skillName:"Nodejs",fontAwesomeClassName:"logos:nodejs"},{skillName:"Microservices",fontAwesomeClassName:"carbon:microservices-1"},{skillName:"PostgreSQL",fontAwesomeClassName:"logos:postgresql"},{skillName:"MySQL",fontAwesomeClassName:"logos:mysql"},{skillName:"MongoDB",fontAwesomeClassName:"devicon:mongodb"}]},{title:"DevOps technologies",lottieAnimationFile:"lottie/skills/cloudinfra.json",skills:[c()("⚡ Integrated CI/CD Pipelines with Jenkins, AWS CodePipeline, Githubworkflow and Docker"),c()("⚡ Deployed full stack applications to AWS Kubernetes Clusters via CI/CD Pipelines with Prometheus, Grafana Monitoring tools"),c()("⚡ Utilized Amazon Services including Lambda, SQS, SNS, EventBridge for event driven application design.")],softwareSkills:[{skillName:"AWS",fontAwesomeClassName:"logos:aws"},{skillName:"Docker",fontAwesomeClassName:"skill-icons:docker"},{skillName:"Git",fontAwesomeClassName:"fa6-brands:git"},{skillName:"Jenkins",fontAwesomeClassName:"vscode-icons:file-type-jenkins"},{skillName:"Kubernetes",fontAwesomeClassName:"skill-icons:kubernetes"},{skillName:"Grafana",fontAwesomeClassName:"skill-icons:grafana-dark"},{skillName:"Lambda",fontAwesomeClassName:"logos:aws-lambda"},{skillName:"Github Actions",fontAwesomeClassName:"logos:github-actions"},{skillName:"Nginx",fontAwesomeClassName:"logos:nginx"},{skillName:"Apache",fontAwesomeClassName:"devicon:apache-wordmark"}]},{title:"Frontend development",lottieAnimationFile:"lottie/skills/fullstack.json",skills:[c()("⚡ Highly skilled Frontend Developer with bold expertise in ReactJS and VueJS frameworks."),c()("⚡ Extensive experience in state management, utilizing VuexStore (VueJS) and Redux (React) to create efficient data flows."),c()("⚡ Developed cutting-edge applications with Module federation and Webpack for extreme reusability and optimal performance"),c()("⚡ Known for crafting reusable components for complex projects that drive productivity and ensure maintainability.")],softwareSkills:[{skillName:"Reactjs",fontAwesomeClassName:"skill-icons:react-dark"},{skillName:"Vuejs",fontAwesomeClassName:"devicon:vuejs"},{skillName:"HTML",fontAwesomeClassName:"skill-icons:html"},{skillName:"JavaScript",fontAwesomeClassName:"devicon:javascript"},{skillName:"Webpack",fontAwesomeClassName:"devicon:webpack"},{skillName:"NPM",fontAwesomeClassName:"logos:npm-icon"}]}]},o=[{Stack:"Backend",progressPercentage:"90"},{Stack:"DevOps",progressPercentage:"80"},{Stack:"Frontend",progressPercentage:"70"}],i=[{schoolName:"University of Regina",subHeader:"Master of Science in Computer Science",duration:"September 2019 - December 2021",desc:"Important courses: Data Science, Data Analytics, Software Development, Computer Security",grade:"83.5%",descBullets:["Built a NLP model based conversation emotion predictor","Developed Image encryption tool with 3 stage encryption","Developed Assignment tracker application with Django, ReactJS, MySQL"]}],s=[{role:"Programmer Analyst Software Development Support",company:"University of Regina",companyLogo:"img/icons/common/uregina icon.jpg",date:"Jan 2022 – Present",descBullets:["Developed robust & scalable microservices with Django backend with CI/CD Pipelines.","Contributed to a microservice-based application with Ruby on Rails, Vue.JS technologies","Deployed applications to AWS EC2, on premise Linux, and CI/CD pipelines to achieve 90% uptime.","Utilized React.JS and Vue.JS to design and implement cutting edge, high performance user interface.","Leveraged Agile, Scrum principles and handled end-to-end delivery of projects."]},{role:"Software Engineer",company:"Binate Solutions",companyLogo:"img/icons/common/binate-image.png",date:"Dec 2016 - Aug2019",descBullets:["Developed distributed microservice based backend applications with django to serve 10k products. ","Utilized RabbitMQ, Celery, and Jenkins CI/CD Pipelines with Docker for optimized production deployment","Ensured the quality code with Code reviews, Test driven Development, extensive Testing","Enagaged in requirement gathering, architectural design, development, deployment and maintenance","Leveraged Reactjs to successfully consolidate legacy frontend code into highly resuable, performant Frontend applicaton."]}],r=[{name:"Exercise goal tracker(MERN)",descBullets:["Nodejs, React, MongoDB, AWS CI/CD, Kubernetes deployment, Route53 with SSL, Prometheus & Grafana monitoring."," Allows user to create and track daily/monthly exercise goals with summary report"],github:"https://github.com/sajib-4414/Exercise-goal-tracker-MERN-stack"},{name:"Tech discussion forum(Django)",descBullets:["Backend application with Django REST, Postgres SQL, OAuth2.0, Docker, AWS CodePipeline CI/CD."," Allows user to post, comment,reply on different tech channels."],github:"https://github.com/sajib-4414/BlogApp-BackEnd"},{name:"Social network (Django,Flask)",descBullets:["Fullstack application with Django REST, Flask, React, RabbitMQ, MySQL, Docker, Jenkins CI/CD"," Allows user to post on channels with photos, like, comment, reply"],github:"https://github.com/sajib-4414/Django-Microservices-with-Flask"},{name:"Ecommerce Microfrontend(React, Vue)",descBullets:["Microfrontend architecture, React, Vue, Webpack, Module Federation, Github Actions CI/CD, AWS S3, Cloudfront.","Allows admin user to upload products, and consumers to browse, add to cart, create order"],github:"https://github.com/sajib-4414/react-microfront-end-with-aws-cicd"}],l={title:"Shamsul Arefin",description:"A passionate Full Stack Web and DevOps developer",author:"Shamsul Arefin",image:"https://avatars.githubusercontent.com/u/10176810?s=400&u=aac9e57bbc0f94a994588a53173ad958b333b2d1&v=4",url:"https://sajib-4414.github.io",keywords:["Shamsul","Shamsul Arefin","@sajib-4414","sajib-4414","Portfolio","Shamsul Portfolio ","Shamsul Arefin Portfolio"]}},5152:function(d,u,e){d.exports=e(7645)},9008:function(d,u,e){d.exports=e(3121)},4134:function(d,u,e){var f=e(1390),c=e(4310);d.exports=function(d,u){return f(d,"function"==typeof u?u:c(u))}},4310:function(d,u,e){var f=e(7294).createElement,c="undefined"==typeof location?"":"https:"===location.protocol?"https:":"http:",t={height:"1em",width:"1em",margin:"0 .05em 0 .1em",verticalAlign:"-0.1em"};function a(){for(var d={},u=arguments.length,e=0;e<u;++e){var f=arguments[e];if(f)for(var c in f)Object.prototype.hasOwnProperty.call(f,c)&&(d[c]=f[c])}return d}d.exports=function(d){return d=a({protocol:c,baseUrl:"//cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/",size:"72x72",ext:".png",props:null},d),function(u,e,c){var n,o="";return 0!==d.baseUrl.indexOf("http")&&(o+=(n=d.protocol)&&n.length>0&&":"!==n.charAt(n.length-1)?n+":":n),f("img",a({key:c,alt:e,draggable:!1,src:o+=d.baseUrl+d.size+"/"+u+d.ext,style:t},d.props))}}},1390:function(d,u,e){var f=e(2008),c=/(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef6]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedd-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7c\ude80-\ude86\ude90-\udeac\udeb0-\udeba\udec0-\udec2\uded0-\uded9\udee0-\udee7]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,t=/\uFE0F/g,a=String.fromCharCode(8205);d.exports=function(d,u){return f(d,c,function(d,e,f){return u(function(d,u){for(var e=[],f=0,c=0,t=0;t<d.length;)f=d.charCodeAt(t++),c?(e.push((65536+(c-55296<<10)+(f-56320)).toString(16)),c=0):55296<=f&&f<=56319?c=f:e.push(f.toString(16));return e.join("-")}(0>d.indexOf(a)?d.replace(t,""):d),d,f)})}},2008:function(d){function u(d,u,c,t){if("string"!=typeof d)throw Error("First param must be a string");if("string"!=typeof u&&!(u instanceof RegExp))throw Error("Second param must be a string pattern or a regular expression");return("string"==typeof u?e:f)(d,u,c,t)}function e(d,u,e,f){var c=d.indexOf(u);if(!(c>=0))return[d];var t=[],a=c+u.length;return c>0&&t.push(d.substring(0,c)),t.push("function"==typeof e?e(d.substring(c,a),c+f,d):e),a<d.length&&t.push(d.substring(a)),t}function f(d,u,e,f){var c,t=[],a="function"==typeof e,n=u.lastIndex;u.lastIndex=0;for(var o=0;c=u.exec(d);){var i=c.index;""===c[0]&&u.lastIndex++,i!==o&&t.push(d.substring(o,i)),o=i+c[0].length;var s=a?e.apply(this,c.concat(i+f,c.input)):e;if(t.push(s),!u.global)break}return o<d.length&&t.push(d.substring(o)),u.lastIndex=n,t}d.exports=function(d,e,f){if("string"==typeof d)return u(d,e,f,0);if(Array.isArray(d)&&d[0]){for(var c=d.length,t=[],a=0,n=0;n<c;++n){var o=d[n];"string"==typeof o?(t.push.apply(t,u(o,e,f,a)),a+=o.length):t.push(o)}return t}throw TypeError("First argument must be an array or non-empty string")}}},function(d){d.O(0,[774,888,179],function(){return d(d.s=8312)}),_N_E=d.O()}]);