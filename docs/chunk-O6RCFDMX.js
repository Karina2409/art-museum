import{a as N,b as z,c as I,d as Q,e as D,f as G,g as B,h as j,i as $,j as Z}from "./chunk-EEFSA5NS.js";import{b as A}from "./chunk-RBXOIXT7.js";import{a as H}from "./chunk-OI65SMGI.js";import{$ as b,A as d,B as h,C as w,E as M,H as g,J as s,M as f,Q as O,S as c,T as F,V,W as C,X as v,Y as i,Z as o,_ as p,aa as m,ba as u,da as l,fa as L,ka as _,ma as T,na as E,p as y,q as k,y as S}from "./chunk-I6TDCWYR.js";var x=class n{search=new M;searchForm;constructor(){this.searchForm=new D({searchQuery:new G("",[])})}ngOnInit(){this.searchForm.get("searchQuery")?.valueChanges.pipe(y(500),k()).subscribe(e=>{if(e=e.trim(),e===""){this.search.emit(e);return}this.searchForm.get("searchQuery")?.setValidators([z.minLength(3)]),this.searchForm.get("searchQuery")?.updateValueAndValidity({emitEvent:!1}),this.searchForm.valid&&this.search.emit(e)})}onSubmit(){this.searchForm.valid&&this.search.emit(this.searchForm.value.searchQuery)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["app-search-bar"]],outputs:{search:"search"},decls:4,vars:2,consts:[[1,"search-container",3,"ngSubmit","formGroup"],["type","text","placeholder","Search Art, Artist, Work...","formControlName","searchQuery",1,"form-control","search-input"],["type","submit",1,"search-btn",3,"disabled"],[1,"bi","bi-search"]],template:function(t, r){t&1&&(i(0,"form",0),m("ngSubmit",function(){return r.onSubmit()}),p(1,"input",1),i(2,"button",2),p(3,"span",3),o()()),t&2&&(c("formGroup",r.searchForm),s(2),c("disabled",r.searchForm.invalid))},dependencies:[Z,B,N,I,Q,j,$],styles:[".search-container[_ngcontent-%COMP%]{display:flex;max-width:762px;width:100%;height:64px;padding:16px;border-radius:16px;background:#3939390d}.search-input[_ngcontent-%COMP%]{flex:1;border:none;background:transparent;outline:none;font-size:16px;color:#555}.search-input[_ngcontent-%COMP%]:focus{outline:none;box-shadow:none;border:none}.search-input[_ngcontent-%COMP%]::placeholder{font-family:var(--font-family);font-weight:400;font-size:14px;text-transform:capitalize;color:#39393980}.search-btn[_ngcontent-%COMP%]{background:none;border:none;cursor:pointer;padding:5px}.search-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px;color:#555}"]})};var J=(n, e)=>e.id;function K(n, e){if(n&1&&p(0,"app-picture",8),n&2){let t=e.$implicit;c("artwork",t)("isSmallVersion",!1)}}function X(n, e){if(n&1){let t=b();i(0,"button",14),m("click",function(){d(t);let a=u();return h(a.prevPages())}),w(),i(1,"svg",15),p(2,"path",16),o()()}}function Y(n, e){if(n&1){let t=b();i(0,"button",17),m("click",function(){let a=d(t).$implicit,P=u();return h(P.goToPage(a))}),l(1),o()}if(n&2){let t=e.$implicit,r=u();F("active",t===r.currentPage()),s(),L(" ",t," ")}}function q(n, e){if(n&1){let t=b();i(0,"button",14),m("click",function(){d(t);let a=u();return h(a.nextPages())}),w(),i(1,"svg",15),p(2,"path",18),o()()}}function ee(n, e){if(n&1&&p(0,"app-picture",13),n&2){let t=e.$implicit;c("artwork",t)("isSmallVersion",!0)}}var R=class n{artworksPagination=g([]);artworksList=g([]);currentPage=g(1);totalPages=g(100);visiblePageCount=4;searchQuery=g("");artworksService=S(H);constructor(){_(()=>{this.artworksService.getTotalPages().subscribe({next: e=>this.totalPages.set(e)})}),_(()=>{this.loadArtworksPagination()}),_(()=>{this.loadArtworksList()})}onSearch(e){this.searchQuery.set(e),this.currentPage.set(1)}nextPages(){this.currentPage()<this.totalPages()&&this.currentPage.update(e=>e+this.visiblePageCount)}prevPages(){this.currentPage()>1&&this.currentPage.update(e=>e-this.visiblePageCount)}getVisiblePages(){let e=Math.floor((this.currentPage()-1)/this.visiblePageCount)*this.visiblePageCount+1,t=Math.min(e+this.visiblePageCount-1,this.totalPages());return Array.from({length:t-e+1},(r, a)=>e+a)}goToPage(e){e!==this.currentPage()&&this.currentPage.set(e)}loadArtworksPagination(){this.artworksService.searchArtworks(this.searchQuery(),this.currentPage()).subscribe({next:({artworks:e,total_page:t})=>{this.artworksPagination.set(e),this.totalPages.set(t)}})}loadArtworksList(){this.artworksService.getArtworks(1,9).subscribe({next: e=>this.artworksList.set(e)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=f({type:n,selectors:[["app-home-page"]],decls:30,vars:3,consts:[[1,"wrapper"],[1,"search-section"],[1,"main-heading"],[2,"color","#f17900"],[1,"search-bar-container",3,"search"],[1,"content-container"],[1,"section-heading"],[1,"artworks-list"],[1,"app-picture",3,"artwork","isSmallVersion"],[1,"pagination-container"],["class","pagination-arrow",3,"click",4,"ngIf"],["class","pagination-button",3,"active","click",4,"ngFor","ngForOf"],[1,"artworks-more-list"],[3,"artwork","isSmallVersion"],[1,"pagination-arrow",3,"click"],["width","10","height","15","viewBox","0 0 10 15","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M8.53209 1.28558L7 0L0.572122 7.66044L1.0734 8.08107L1.05398 8.10421L8.71442 14.5321L10 13L3.37037 7.43708L8.53209 1.28558Z","fill","#393939"],[1,"pagination-button",3,"click"],["fill-rule","evenodd","clip-rule","evenodd","d","M1.46791 13.7144L3 15L9.42788 7.33956L8.9266 6.91893L8.94602 6.89579L1.28558 0.467911L-1.07377e-07 2L6.62963 7.56292L1.46791 13.7144Z","fill","#393939"]],template:function(t, r){t&1&&(i(0,"div",0)(1,"section",1)(2,"h1",2),l(3," let's find some "),i(4,"span",3),l(5,"art"),o(),l(6," here! "),o(),i(7,"app-search-bar",4),m("search",function(P){return r.onSearch(P)}),o()(),i(8,"section",5)(9,"div",6)(10,"h3"),l(11,"Topics for you"),o(),i(12,"h2"),l(13,"Our special gallery"),o()(),i(14,"div",7),C(15,K,1,2,"app-picture",8,J),o(),i(17,"div",9),O(18,X,3,0,"button",10)(19,Y,2,3,"button",11)(20,q,3,0,"button",10),o()(),i(21,"section",5)(22,"div",6)(23,"h3"),l(24,"Here some more"),o(),i(25,"h2"),l(26,"Other works for you"),o()(),i(27,"div",12),C(28,ee,1,2,"app-picture",13,V),o()()()),t&2&&(s(15),v(r.artworksPagination()),s(3),c("ngIf",r.currentPage()>r.visiblePageCount),s(),c("ngForOf",r.getVisiblePages()),s(),c("ngIf",r.currentPage()+4<=r.totalPages()),s(8),v(r.artworksList()))},dependencies:[A,x,E,T],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:120px;max-width:1280px;margin:0 auto;padding:120px 0}.search-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:72px;align-items:center;width:100%}.search-bar-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.main-heading[_ngcontent-%COMP%]{max-width:680px;font-family:var(--second-family);font-size:64px;font-weight:700;color:#393939;text-align:center;text-transform:capitalize}@media (max-width: 767px){.main-heading[_ngcontent-%COMP%]{font-size:52px;max-width:600px}}.content-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:40px;align-items:center;justify-content:center;width:100%}.section-heading[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:var(--second-family);font-size:16px;font-weight:400;color:#e0a449}.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:var(--second-family);font-size:32px;font-weight:400;color:#393939}.artworks-list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(390px,1fr));gap:54px;width:100%;min-height:514px;justify-items:center;align-items:center}.app-picture[_ngcontent-%COMP%]{height:514px}.artworks-more-list[_ngcontent-%COMP%]{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));width:100%}.pagination-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:10px}.pagination-arrow[_ngcontent-%COMP%]{border:none;background:none;display:flex;justify-content:center;align-items:center}.pagination-button[_ngcontent-%COMP%]{border:none;background:none;font-family:var(--second-family);font-weight:300;font-size:18px;line-height:133%;color:#393939;padding:3px 10px}.pagination-button.active[_ngcontent-%COMP%]{background-color:#f17900;border-radius:4px;font-weight:600;line-height:128%;color:#fff}"]})};export{R as HomePageComponent};
