!function(){"use strict";var e={300:function(e,t){var i=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==i)return i;throw new Error("unable to locate global object")}();e.exports=t=i.fetch,i.fetch&&(t.default=i.fetch.bind(i)),t.Headers=i.Headers,t.Request=i.Request,t.Response=i.Response}},t={};function i(a){var s=t[a];if(void 0!==s)return s.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,i),n.exports}i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e=window.wp.element,t=window.wp.blocks,a=window.wp.i18n,s=window.wp.data;function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e},n.apply(this,arguments)}function o(e,t,i){if(!t.has(e))throw new TypeError("attempted to "+i+" private field on non-instance");return t.get(e)}function r(e,t,i){return function(e,t,i){if(t.set)t.set.call(e,i);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=i}}(e,o(e,t,"set"),i),i}function l(e,t){return function(e,t){return t.get?t.get.call(e):t.value}(e,o(e,t,"get"))}var d=window.wp.apiFetch,c=i.n(d);function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",i=arguments.length>2?arguments[2]:void 0;const a={path:e,method:t};return void 0!==i&&(a.data=i),new Promise((e=>{c()(a).then((t=>{e(t)}))}))}"undefined"==typeof window?i(300):window.fetch;const h="data/dm-video",m={id:"",private:!1,private_id:"",status:"",thumbnail_240_url:"",title:"",name:""},p={reducer(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;return"SET_VIDEO"===t.type?{videoData:t.videoData}:e},actions:{setVideo:e=>({type:"SET_VIDEO",videoData:e})},selectors:{getVideoData:e=>e.videoData}},v=(0,s.createReduxStore)(h,p);(0,s.register)(v);var g=window.wp.blockEditor,b=window.wp.components,w=window.wp.primitives,y=(0,e.createElement)(w.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(w.Path,{d:"M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z"}));function _(e,t,i){var a,s,n;e=null!==(a=e)&&void 0!==a?a:"customEvent",t=null!==(s=t)&&void 0!==s?s:"index",i=null!==(n=i)&&void 0!==n?n:{};const o=new CustomEvent(e,{detail:{sender:t,customEventData:i},bubbles:!0,cancelable:!0});document.dispatchEvent(o)}var f=new WeakMap;class E extends e.Component{constructor(e){var t,i,a;super(e),a={writable:!0,value:null},function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t=this,i=f),i.set(t,a),this.state={dmPlayerAttributes:{},playerLoading:!0},this.subscribes()}subscribes(){document.addEventListener("dm-video-updated",(e=>{const{isSelected:t}=this.props;t&&this.setAttr(e.detail.sender)}))}openSidebar(){document.querySelector('button[aria-label="Dailymotion Sidebar Settings"]').click()}async setAttr(e){const t=(0,s.select)(h).getVideoData();void 0!==t&&(this.props.setAttributes({videoData:t}),null===l(this,f)&&l(this,f)!==t.id&&r(this,f,t.id)),this.props.attributes.videoData.id!==l(this,f)&&null!==l(this,f)&&"video-block-component"!==e&&window.dmce.rebuild()}async componentDidMount(){_("dm-ready","video-block-component");const e=await u("/dm/v1/get-custom-options/manual_embed_player");this.setState({dmPlayerAttributes:e})}componentWillUnmount(){this.resetVideo(),document.removeEventListener("dm-video-updated",(e=>{}))}resetVideo(){this.props.setAttributes({videoData:{id:"",private:!1,private_id:"",status:"",thumbnail_240_url:"",title:"",name:""}}),(0,s.dispatch)(h).setVideo(this.props.attributes.videoData),_("dm-video-updated","video-block-component")}setPlayerAttributes(){let e={};return this.state.dmPlayerAttributes&&(void 0!==this.state.dmPlayerAttributes.pre_video_title&&""!==this.state.dmPlayerAttributes.pre_video_title&&(e.preVideoTitle=this.state.dmPlayerAttributes.pre_video_title),"1"===this.state.dmPlayerAttributes.show_info_card&&(e.showInfocard="true"),"1"===this.state.dmPlayerAttributes.show_video_title&&(e.showVideoTitle="true"),"1"===this.state.dmPlayerAttributes.show_carousel_playlist&&(e.showOutsidePlaylist="true")),e}generateVideoContainer(){const t=this.props.attributes.videoData,i=this.setPlayerAttributes();return void 0!==t.name&&""!==t.name?(0,e.createElement)("div",n({className:"dm-player",playlistId:t.id,playerId:"x1ozy"},i)):""!==t.private_id&&null!==t.private_id?(0,e.createElement)("div",n({className:"dm-player",privateVideoId:t.private_id,playerId:"x1ozy"},i)):(0,e.createElement)("div",n({className:"dm-player",videoId:t.id,playerId:"x1ozy"},i))}generatePlaceholder(){let t={};return this.state.dmPlayerAttributes&&(void 0!==this.state.dmPlayerAttributes.pre_video_title&&""!==this.state.dmPlayerAttributes.pre_video_title&&(t={"--dm-player-ratio":"16/10.6","--dm-fallback-ratio":"65.25%"}),"1"===this.state.dmPlayerAttributes.show_info_card&&(t={"--dm-player-ratio":"16/10.5","--dm-fallback-ratio":"65.25%"}),"1"===this.state.dmPlayerAttributes.show_video_title&&(t={"--dm-player-ratio":"16/10.5","--dm-fallback-ratio":"65.25%"}),"1"===this.state.dmPlayerAttributes.show_carousel_playlist&&(t={})),!1===this.state.playerLoading?(0,e.createElement)("div",{className:"dm-player__placeholder",style:t}):(0,e.createElement)("div",{className:"dm-player__placeholder  loading",style:t})}onSelected(){if(void 0!==this.props){const{isSelected:e}=this.props;if(e){(0,s.dispatch)(h).setVideo(this.props.attributes.videoData);const e=new CustomEvent("dm-video-active");document.dispatchEvent(e)}}}render(){return""===this.props.attributes.videoData.id?(0,e.createElement)("div",{className:"dm-player__editor"},(0,e.createElement)("p",null,"No video selected, please select by click button below"),(0,e.createElement)("button",{onClick:this.openSidebar},"Find a video")):(0,e.createElement)("div",{className:"dm-player__holder",onClick:this.onSelected()},(0,e.createElement)(g.BlockControls,null,(0,e.createElement)(b.ToolbarGroup,null,(0,e.createElement)(b.ToolbarButton,{icon:y,label:"Edit",onClick:this.openSidebar}))),this.generatePlaceholder(),this.generateVideoContainer())}}var P=window.wp.plugins,k=window.wp.editPost;function D(){return(0,e.createElement)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",role:"img","aria-hidden":"true",focusable:"false"},(0,e.createElement)("path",{class:"path",d:"m12.1479 18.5957c-2.4949 0-4.28131-1.7558-4.28131-4.0658 0-2.2176 1.78641-4.0965 4.09651-4.0965 2.2793 0 4.0349 1.7864 4.0349 4.1581 0 2.2794-1.7556 4.0042-3.8501 4.0042zm8.3521-18.5957-4.5329 1v7c-1.1088-1.41691-2.8028-1.8787-4.8049-1.8787-2.09443 0-3.97329.76993-5.5133 2.27917-1.72483 1.66323-2.6489 3.78863-2.6489 6.16033 0 2.5873.98562 4.8049 2.89526 6.499 1.44763 1.2936 3.17251 1.9402 5.17454 1.9402 1.9713 0 3.4498-.5236 4.8973-1.9402v1.9402h4.5329c0-7.6359 0-15.3641 0-23z",fill:"#333436"}))}const S="data/dm-sdk",C={connectionStatus:null},V={reducer(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return"SET_CONNECTION_STATUS"===t.type?{connectionStatus:t.status}:e},actions:{setConnectionStatus:e=>({type:"SET_CONNECTION_STATUS",status:e})},selectors:{getConnectionStatus:e=>e.connectionStatus}},x=(0,s.createReduxStore)(S,V);function N(e,t){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.add(e)}function L(e,t,i){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return i}(0,s.register)(x);var T=new WeakSet,M=new WeakSet,A=new WeakSet,F=new WeakSet,I=new WeakSet;class W{constructor(){N(this,I),N(this,F),N(this,A),N(this,M),N(this,T),this.setupDm()}async setupDm(){await async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>Boolean,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return new Promise(((s,n)=>{let o=0;const r=setInterval((()=>{const l=e(),d=o>i||l;o+=t,l?(s(""),clearInterval(r)):d&&(n(new Error("waitFor(): "+a)),clearInterval(r))}),t)}))}((()=>"undefined"!=typeof DM),100,3e4,"Timeout waiting for DM loaded, please refresh and make sure your internet is active"),L(this,T,O).call(this),await L(this,M,j).call(this),L(this,A,z).call(this),await L(this,I,B).call(this)}}function O(){DM._oauth.tokenUrl="https://api.dailymotion.com/oauth/token",DM.Auth.isSessionExpired=(e,t)=>(void 0===e&&(e=DM._session),!e||!(e&&"expires_in"in e&&(new Date).getTime()<1e3*parseInt(e.expires_in,10))&&(delete e.expires_in,!0))}async function j(){const e=await u("/dm/v1/get-api-key");DM.init({apiKey:e.api_key,apiSecret:e.api_secret,status:!0,cookie:!0})}function z(){DM.Event.subscribe("auth.sessionChange",(e=>{if("connected"===(null==e?void 0:e.status)){let t=e.session;"expires_in"in e.session||(t.expires_in=t.expires),t.expires=t.expires+2419200,DM.Cookie.set(t)}}))}function G(){return new Promise((e=>{DM.getLoginStatus((t=>{t.session?e(!0):e(!1)}))}))}async function B(){const e=await L(this,F,G).call(this);(0,s.dispatch)(S).setConnectionStatus({connectionStatus:e});const t=new CustomEvent("dm-sdk-ready");document.dispatchEvent(t)}function R(t){const{contentData:i,currentPage:s,callback:n}=t;return 0===Object.entries(i).length||0===i.total||!1===i.has_more&&1===i.page?(0,e.createElement)(e.Fragment,null):1===i.page&&!0===i.has_more?(0,e.createElement)(e.Fragment,null,(0,e.createElement)("button",{type:"button",className:"components-button button action dm__next-button",onClick:()=>n(s+1)},(0,a.__)("Next","textdomain"))):!1===i.has_more&&1!==i.page?(0,e.createElement)(e.Fragment,null,(0,e.createElement)("button",{type:"button",className:"components-button button action dm__prev-button",onClick:()=>n(s-1)},(0,a.__)("Previous","textdomain"))):(0,e.createElement)(e.Fragment,null,(0,e.createElement)("button",{type:"button",className:"components-button button action dm__prev-button",onClick:()=>n(s-1)},(0,a.__)("Previous","textdomain")),(0,e.createElement)("button",{type:"button",className:"components-button button action dm__next-button",onClick:()=>n(s+1)},(0,a.__)("Next","textdomain")))}function U(e,t,i){K(e,t),t.set(e,i)}function K(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}var H=new WeakMap,Z=new WeakMap,q=new WeakSet;class Y extends e.Component{constructor(e){var t;super(e),K(this,t=q),t.add(this),U(this,H,{writable:!0,value:null}),U(this,Z,{writable:!0,value:""}),this.state={videos:{},currentPage:1,loadingData:!0},r(this,Z,function(e,t,i){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return i}(this,q,$).call(this)),this.setVideos=this.setVideos.bind(this),this.loadPage=this.loadPage.bind(this),this.setLoadingData=this.setLoadingData.bind(this)}async fetchVideo(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;this.setLoadingData(!0);const i=await u("/dm/v1/userinfo"),a=await u("/dm/v1/get-custom-options/manual_embed_content"),s={fields:"id,title,thumbnail_240_url,status,private,private_id",limit:this.props.perPage?this.props.perPage:10,flags:"no_live,exportable,verified",page:e};t?(s.sort="relevance",s.search=t):s.sort="recent";let n="";const o=void 0!==a.owners;return l(this,H)&&!0!==this.props.globalVideo&&!o?n="user/"+i.channel+"/videos":o&&!0!==this.props.globalVideo?(s.owners=a.owners,n="videos"):n="videos",new Promise((async e=>{DM.api(n,"get",s,(t=>{this.setLoadingData(!1),e(t)}))})).catch((e=>{console.log(e)}))}setVideos(e){this.setState({videos:e})}setCurrentPage(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.setState({currentPage:e})}setLoadingData(e){this.setState({loadingData:e})}async addToPost(e){if("gutenberg"===l(this,Z))(0,s.dispatch)(h).setVideo(e),_("dm-video-updated","dm-video-component");else{let t="";!0===e.private?t+=' privatevideoid="'+e.private_id+'"':t+=' videoid="'+e.id+'"',wp.media.editor.insert("[dm-player"+t+"]")}}async componentDidMount(){r(this,H,(0,s.select)(S).getConnectionStatus().connectionStatus);const e=await this.fetchVideo();this.setVideos(e)}async componentDidUpdate(e){if(this.props.keywords!==e.keywords||this.props.globalVideo!==e.globalVideo){const e=await this.fetchVideo(1,this.props.keywords);this.setCurrentPage(),this.setVideos(e)}}async loadPage(e){const t=await this.fetchVideo(e,this.props.keywords);this.setCurrentPage(e),this.setVideos(t)}renderVideoList(){const t=[];if(void 0!==this.state.videos.error)return(0,e.createElement)("li",{className:"dm__show-message"},"API errors, please check your settings…");if(!(void 0!==this.state.videos&&Object.entries(this.state.videos).length>0&&this.state.videos.list.length>0))return(0,e.createElement)("li",null,"No video found…");{const i=this.state.videos.list;for(let a=0;a<i.length;a++)t.push((0,e.createElement)("li",{key:i[a],className:`content__item ${i[a].private?"private":""} ${"ready"===i[a].status?"draft":""}`},(0,e.createElement)("button",{onClick:()=>this.addToPost(i[a]),type:"button"},(0,e.createElement)("figure",{className:"content__image-wrapper"},(0,e.createElement)("div",{className:"content__placement"},(0,e.createElement)("img",{src:i[a].thumbnail_240_url,alt:i[a].title,className:"content__thumbnail"}))),(0,e.createElement)("span",{className:"content__title",title:i[a].title},i[a].title))))}return t}render(){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("ul",{className:"dm__search-results"},this.state.loadingData?(0,e.createElement)("li",null,(0,a.__)("loading video…","textdomain")):this.renderVideoList()),(0,e.createElement)(R,{currentPage:this.state.currentPage,callback:this.loadPage,contentData:this.state.videos}))}}function $(){return document.body.classList.contains("block-editor-page")?"gutenberg":"classic-editor"}function J(e,t,i){Q(e,t),t.set(e,i)}function Q(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}var X=new WeakMap,ee=new WeakMap,te=new WeakSet;class ie extends e.Component{constructor(e){var t;super(e),Q(this,t=te),t.add(this),J(this,X,{writable:!0,value:null}),J(this,ee,{writable:!0,value:""}),this.state={playlists:{},currentPage:1,loadingData:!0},r(this,ee,function(e,t,i){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return i}(this,te,ae).call(this)),this.setPlaylist=this.setPlaylist.bind(this),this.loadPage=this.loadPage.bind(this),this.setLoadingData=this.setLoadingData.bind(this)}async addToPost(e){if("gutenberg"===l(this,ee))(0,s.dispatch)(h).setVideo(e),_("dm-video-updated","dm-video-updated");else{let t="";t+=' playlistid="'+e.id+'"',wp.media.editor.insert("[dm-player"+t+"]")}}async fetchPlaylist(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;this.setLoadingData(!0);const i=await u("/dm/v1/userinfo"),a=await u("/dm/v1/get-custom-options/manual_embed_content"),s={limit:this.props.perPage?this.props.perPage:10,fields:"id,name,thumbnail_240_url,private",page:e,sort:"recent",flags:"verified"};if(t&&(s.search=t,s.sort="relevance"),l(this,X)&&!0!==this.props.globalVideo)s.owner=i.channel;else if(!l(this,X)&&0!==a.length){const e=a.owners.split(",");s.owner=e[0]}return new Promise((e=>{DM.api("/playlists","get",s,(t=>{this.setLoadingData(!1),e(t)}))})).catch((e=>{console.log(e)}))}async loadPage(e){const t=await this.fetchPlaylist(e,this.props.keywords);this.setCurrentPage(e),this.setPlaylist(t)}async componentDidMount(){r(this,X,(0,s.select)(S).getConnectionStatus().connectionStatus);const e=await this.fetchPlaylist();this.setCurrentPage(),this.setPlaylist(e)}async componentDidUpdate(e){if(this.props.keywords!==e.keywords||this.props.globalVideo!==e.globalVideo){const e=await this.fetchPlaylist(1,this.props.keywords);this.setCurrentPage(1),this.setPlaylist(e)}}setLoadingData(e){this.setState({loadingData:e})}setPlaylist(e){this.setState({playlists:e})}setCurrentPage(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.setState({currentPage:e})}renderPlaylists(){const t=[];if(void 0!==this.state.playlists.error)return(0,e.createElement)("li",{className:"dm__show-message"},"API errors, to search playlist you must login first…");if(!(void 0!==this.state.playlists&&Object.entries(this.state.playlists).length>0&&this.state.playlists.list.length>0))return(0,e.createElement)("li",null,"No playlist found…");{const i=this.state.playlists.list;for(let a=0;a<i.length;a++)t.push((0,e.createElement)("li",{key:i[a],className:"content__item"},(0,e.createElement)("button",{onClick:()=>this.addToPost(i[a])},(0,e.createElement)("figure",{className:"content__image-wrapper"},(0,e.createElement)("div",{className:"content__placement"},(0,e.createElement)("img",{src:i[a].thumbnail_240_url,alt:i[a].name,className:"content__thumbnail"}))),(0,e.createElement)("span",{className:"content__title"},i[a].name))))}return t}render(){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)("ul",{className:"dm__search-results"},this.state.loadingData?(0,e.createElement)("li",null,(0,a.__)("loading playlist…","textdomain")):this.renderPlaylists()),(0,e.createElement)(R,{currentPage:this.state.currentPage,callback:this.loadPage,contentData:this.state.playlists}))}}function ae(){return document.body.classList.contains("block-editor-page")?"gutenberg":"classic-editor"}var se=new WeakMap;class ne extends e.Component{constructor(e){var t,i,a;super(e),a={writable:!0,value:null},function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t=this,i=se),i.set(t,a),this.state={playlists:{},keywords:"",currentPage:1,findGlobal:!1,findPlaylist:!1},this.findVideo=this.findVideo.bind(this),this.setKeywords=this.setKeywords.bind(this),this.setGlobalVideo=this.setGlobalVideo.bind(this),this.setFindPlaylist=this.setFindPlaylist.bind(this)}async setConnectionStatus(t){let i;i=t?(0,e.createElement)(e.Fragment,null,(0,e.createElement)("span",{className:"dm--connected"})," ",(0,a.__)("You're connected","textdomain")):(0,e.createElement)(e.Fragment,null,(0,e.createElement)("span",{className:"dm--disconnected"})," ",(0,a.__)("You're not connected","textdomain")),this.setState({connectionStatus:i})}componentDidMount(){r(this,se,(0,s.select)(S).getConnectionStatus().connectionStatus),this.setConnectionStatus(l(this,se))}async findVideo(e){e.preventDefault()}setKeywords(e){this.setState({keywords:e.target.value})}setGlobalVideo(e){this.setState({findGlobal:!0===e.target.checked})}setFindPlaylist(e){this.setState({findPlaylist:!0===e.target.checked})}render(){return(0,e.createElement)(b.PanelBody,null,(0,e.createElement)("div",{className:"dm__content-list"},(0,e.createElement)("p",null,this.state.connectionStatus),(0,e.createElement)("form",{onSubmit:this.findVideo},(0,e.createElement)("label",{htmlFor:"keywords"},(0,a.__)("Find a video","textdomain")),(0,e.createElement)("input",{id:"keywords",onChange:this.setKeywords,type:"text",name:"keywords",className:"dm__keywords-input"}),(0,e.createElement)("button",{type:"submit",className:"action button"},"Find"),(0,e.createElement)("label",{htmlFor:"global-video",className:"checkbox-label"},(0,e.createElement)("input",{type:"checkbox",id:"global-video",onChange:this.setGlobalVideo,name:"globalVideo",value:"1"})," ",(0,a.__)("Find global","textdomain")),(0,e.createElement)("label",{htmlFor:"find-playlist",className:"checkbox-label"},(0,e.createElement)("input",{type:"checkbox",id:"find-playlist",onChange:this.setFindPlaylist,name:"findPlaylist",value:"1"})," ",(0,a.__)("Find playlist","textdomain"))),this.state.findPlaylist?(0,e.createElement)(ie,{keywords:this.state.keywords,globalVideo:this.state.findGlobal,perPage:this.props.resultsPerPage}):(0,e.createElement)(Y,{keywords:this.state.keywords,globalVideo:this.state.findGlobal,perPage:this.props.resultsPerPage})))}}function oe(e,t,i){re(e,t),t.set(e,i)}function re(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}var le=new WeakMap,de=new WeakMap,ce=new WeakSet;class ue extends e.Component{constructor(e){var t;super(e),re(this,t=ce),t.add(this),oe(this,le,{writable:!0,value:{id:"",private:!1,private_id:"",status:"",thumbnail_240_url:"",title:"",name:""}}),oe(this,de,{writable:!0,value:""}),this.state={videoData:l(this,le)},r(this,de,function(e,t,i){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return i}(this,ce,he).call(this)),this.getContent=this.getContent.bind(this),this.showImage=this.showImage.bind(this),this.subscribes()}componentDidMount(){this.setVideo()}getContent(){return(0,s.select)(h).getVideoData()}setVideo(){const e=this.getContent();this.setState({videoData:void 0===e?l(this,le):e})}subscribes(){document.addEventListener("dm-video-updated",(e=>{this.setVideo()})),document.addEventListener("dm-video-active",(e=>{this.setVideo()}))}showImage(){return""!==this.state.videoData.title||""!==this.state.videoData.name?(0,e.createElement)("div",{className:"selected-video"},(0,e.createElement)("h3",null,"Selected video"),(0,e.createElement)("figure",{className:"content__image-wrapper"},(0,e.createElement)("div",{className:"content__placement"},(0,e.createElement)("img",{src:this.state.videoData.thumbnail_240_url,alt:this.state.videoData.title?this.state.videoData.title:this.state.videoData.name,className:"content__thumbnail"}))),(0,e.createElement)("span",{className:"content__title",title:this.state.videoData.title?this.state.videoData.title:this.state.videoData.name},this.state.videoData.title?this.state.videoData.title:this.state.videoData.name)):(0,e.createElement)("p",null,"No video selected.")}render(){return(0,e.createElement)(b.PanelBody,null,this.showImage)}}function he(){return document.body.classList.contains("block-editor-page")?"gutenberg":"classic-editor"}let me=!0;document.addEventListener("dm-ready",(async()=>{me&&(me=!1,window.dmce.rebuild(),document.removeEventListener("dm-ready",(()=>{})))})),(0,t.registerBlockType)("dm-settings/click-embed",{title:(0,a.__)("Dailymotion Embed"),icon:(0,e.createElement)("svg",{width:"16",height:"10",viewBox:"0 0 16 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,e.createElement)("path",{d:"M7.65916 7.27658C6.6612 7.27658 5.94664 6.58953 5.94664 5.68561C5.94664 4.81786 6.6612 4.08263 7.58524 4.08263C8.49696 4.08263 9.1992 4.78166 9.1992 5.70972C9.1992 6.60166 8.49696 7.27658 7.65916 7.27658V7.27658ZM11 0L9.18684 0.391304V3.13043C8.74332 2.57599 8.06572 2.39529 7.26488 2.39529C6.42711 2.39529 5.67556 2.69657 5.05956 3.28714C4.36963 3.93797 4 4.76965 4 5.6977C4 6.71013 4.39425 7.57788 5.1581 8.24079C5.73716 8.74698 6.42711 9 7.22792 9C8.01644 9 8.60784 8.79511 9.18684 8.24079V9H11C11 6.01204 11 2.98796 11 0Z",fill:"#000"}),(0,e.createElement)("path",{d:"M0.902344 5.79883L3.04199 6.66357V7.3335L0.246094 6.03809V5.53906L3.04199 4.24707V4.91699L0.902344 5.79883Z",fill:"#000"}),(0,e.createElement)("path",{d:"M14.7173 5.77832L12.458 4.89307V4.24365L15.377 5.53564V6.03467L12.458 7.33008V6.67383L14.7173 5.77832Z",fill:"#000"})),category:"embed",keywords:[(0,a.__)("Dailymotion"),(0,a.__)("Embed")],attributes:{videoData:{type:"object",default:{id:"",private:!1,private_id:"",status:"",thumbnail_240_url:"",title:"",name:""}}},edit:E,save:e=>{""!==(0,s.select)("core/editor").getEditedPostAttribute("meta")._dm_video_data&&(0,s.dispatch)("core/editor").editPost({meta:{_dm_player_position:null,_dm_video_data:null}});const{videoData:t}=e.attributes;let i="";return void 0!==t.name&&""!==t.name?i+=' playlistid="'+t.id+'"':!0===t.private?i+=' privatevideoid="'+t.private_id+'"':i+=' videoid="'+t.id+'"',"[dm-player "+i+"]"}}),new class{constructor(){this.setupDm()}setupDm(){document.addEventListener("dm-sdk-ready",(()=>{this.registerSidebar()})),new W}registerSidebar(){(0,P.registerPlugin)("dm-sidebar-settings",{render:()=>(0,e.createElement)(e.Fragment,null,(0,e.createElement)(k.PluginSidebarMoreMenuItem,{target:"dm-sidebar-settings",icon:D()},(0,a.__)("Dailymotion Sidebar Settings","textdomain")),(0,e.createElement)(k.PluginSidebar,{name:"dm-sidebar-settings",title:(0,a.__)("Dailymotion Sidebar Settings","textdomain"),icon:D()},(0,e.createElement)(ue,null),(0,e.createElement)(ne,null)))})}}}()}();