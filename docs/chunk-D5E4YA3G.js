import{a as M}from "./chunk-R2U3UCEN.js";import{$ as h,A as f,B as g,I as w,J as o,M as x,Q as v,S as u,T as _,Y as i,Z as t,aa as k,ba as m,ca as s,da as n,ea as l,fa as p,ja as C,ka as y,pa as I,va as P,y as d}from "./chunk-J4KSC7AW.js";function b(a, r){if(a&1){let e=h();i(0,"div",1)(1,"section",2)(2,"div",3)(3,"img",4),k("error",function(){f(e);let S=m();return g(S.onImageError())}),t()(),i(4,"div",5)(5,"div",6)(6,"h1",7),n(7),t(),i(8,"div",8)(9,"h2",9),n(10),t(),i(11,"p",10),n(12),t()()(),i(13,"div",11)(14,"h2",7),n(15,"Overview"),t(),i(16,"div",12)(17,"div",13)(18,"span"),n(19,"Artist nacionality:"),t()(),i(20,"div",13)(21,"span"),n(22,"Dimensions: Sheet:"),t(),n(23),t(),i(24,"div",13)(25,"span"),n(26,"Credit Line:"),t(),n(27),t(),i(28,"div",13)(29,"span"),n(30,"Repository:"),t(),n(31),t(),i(32,"div",13),n(33),t()()()()()()}if(a&2){let e=r.ngIf,c=m();o(3),_("default",c.isDefaultImage),s("src",e.image_url,w),s("alt",e.title),o(4),l(e.title),o(3),l(e.artist_title),o(2),l(e.date_display),o(11),p(" ",e.dimensions," "),o(4),p(" ",e.credit_line," "),o(4),p(" ",e.department_title," "),o(2),l(e.is_on_view?"Public":"Private")}}var O=class a{artwork=null;artworkId=C(()=>Number(this.activateRoute.snapshot.paramMap.get("artworkId")));artworksService=d(M);activateRoute=d(P);constructor(){y(()=>{let r=this.artworkId();r&&this.artworksService.getArtworkById(r).subscribe({next: e=>this.artwork=e})})}get isDefaultImage(){return this.artwork?.image_url.includes("default-image.png")??!0}onImageError(){this.artwork&&(this.artwork.image_url="default-image.png")}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=x({type:a,selectors:[["app-artwork-info-page"]],decls:1,vars:1,consts:[["class","wrapper",4,"ngIf"],[1,"wrapper"],[1,"artwork-info-container"],[1,"image-container"],[1,"artwork-image",3,"error","src","alt"],[1,"artwork-info"],[1,"image-info"],[1,"heading"],[1,"author-info"],[1,"author-name"],[1,"dates"],[1,"overview-container"],[1,"overview-info"],[1,"overview-info__line"]],template:function(e, c){e&1&&v(0,b,34,11,"div",0),e&2&&u("ngIf",c.artwork)},dependencies:[I],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:1280px;margin:0 auto;padding:120px 0}.artwork-info-container[_ngcontent-%COMP%]{display:flex;gap:80px;width:100%}@media (max-width: 767px){.artwork-info-container[_ngcontent-%COMP%]{flex-direction:column}}.image-container[_ngcontent-%COMP%]{overflow:hidden;display:flex;align-items:center;justify-content:center;height:570px;width:497px;min-width:400px}@media (max-width: 767px){.image-container[_ngcontent-%COMP%]{width:100%;min-width:300px}}.artwork-image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;object-position:center}.artwork-image.default[_ngcontent-%COMP%]{padding:10px 30px;object-fit:contain;border:solid 3px #4a2900;border-radius:15px}.artwork-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between}.image-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:32px}.heading[_ngcontent-%COMP%]{font-family:var(--second-family);font-weight:400;font-size:32px;color:#393939}.author-info[_ngcontent-%COMP%], .overview-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:16px}.author-name[_ngcontent-%COMP%]{font-family:var(--second-family);font-weight:400;font-size:24px;color:#e0a449}.dates[_ngcontent-%COMP%]{font-family:var(--second-family);font-weight:700;font-size:16px;color:#393939}.overview-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:32px}.overview-info__line[_ngcontent-%COMP%]{font-family:var(--second-family);font-weight:400;font-size:16px;color:#393939;text-wrap:wrap}.overview-info__line[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#e0a449}"]})};export{O as ArtworkInfoPageComponent};
