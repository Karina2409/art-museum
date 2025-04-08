import{a as S,b as V}from "./chunk-6M2IKSQA.js";import{$ as r,A as u,Aa as O,C as c,D as s,Da as T,J as v,K as w,L as o,O as P,S as h,U as b,V as g,W as M,_ as i,aa as _,ba as C,ca as d,da as a,ea as k,fa as m,ga as f,ma as y,sa as I}from "./chunk-HBEHPOXJ.js";function F(l, p){l&1&&_(0,"app-loader")}function j(l, p){if(l&1){let t=C();h(0,F,1,0,"app-loader",1),i(1,"div",2)(2,"div",3),d("click",function(){c(t);let e=a();return s(e.navigateToArtworkInfo(e.artwork.id))}),i(3,"img",4),d("load",function(){c(t);let e=a();return s(e.onImageLoad())})("error",function(){c(t);let e=a();return s(e.onImageError())}),r()(),i(4,"div",5),d("click",function(){c(t);let e=a();return s(e.navigateToArtworkInfo(e.artwork.id))}),i(5,"div",6)(6,"div",7)(7,"p",8),m(8),r(),i(9,"p",9),m(10),r()(),i(11,"p",10),m(12),r()(),i(13,"div",11),d("click",function(e){c(t);let x=a();return s(x.toggleFavorite(e))}),_(14,"img",12),r()()()}if(l&2){let t,n,e=a();b("ngIf",e.isLoadingCard()),o(),g("hidden",e.isLoadingCard()),o(2),g("default",e.isDefaultImage),k("src",e.artwork.image_url,w),o(5),f((t=e.artwork.title)!==null&&t!==void 0?t:"Unknown"),o(2),f((n=e.artwork.artist_title)!==null&&n!==void 0?n:"Unknown"),o(2),f(e.artwork.is_on_view?"Public":"Private"),o(),g("favourite-active",e.isFavorite())}}function L(l, p){if(l&1){let t=C();i(0,"div",13),d("click",function(){c(t);let e=a();return s(e.navigateToArtworkInfo(e.artwork.id))}),i(1,"div",14)(2,"img",15),d("error",function(){c(t);let e=a();return s(e.onImageError())}),r()(),i(3,"div",6)(4,"div",7)(5,"p",8),m(6),r(),i(7,"p",9),m(8),r()(),i(9,"p",10),m(10),r()(),i(11,"div",11),d("click",function(e){c(t);let x=a();return s(x.toggleFavorite(e))}),_(12,"img",12),r()()}if(l&2){let t=a();o(2),g("image-small-default",t.isDefaultImage),k("src",t.artwork.image_url,w),o(4),f(t.artwork.title||"Unknown"),o(2),f(t.artwork.artist_title||"Unknown"),o(2),f(t.artwork.is_on_view?"Public":"Private"),o(),g("favourite-active",t.isFavorite())}}var E=class l{artwork;isSmallVersion;isFavorite=v(!1);isLoadingCard=v(!0);router=u(O);favoritesService=u(V);notification=u(T);constructor(){y(()=>{this.artwork&&this.isFavorite.set(this.favoritesService.isFavorite(this.artwork.id))})}get isDefaultImage(){return this.artwork?.image_url.includes("default-image.png")??!0}toggleFavorite(p){p.stopPropagation(),this.favoritesService.toggleFavorite(this.artwork.id),this.isFavorite.set(this.favoritesService.isFavorite(this.artwork.id))}navigateToArtworkInfo(p){this.router.navigate([`/artwork/${p}`])}onImageLoad(){this.isLoadingCard.set(!1)}onImageError(){this.artwork.image_url="default-image.png",this.isLoadingCard.set(!1),this.notification.show("\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F","warning")}static \u0275fac=function(t){return new(t||l)};static \u0275cmp=P({type:l,selectors:[["app-picture"]],inputs:{artwork:"artwork",isSmallVersion:"isSmallVersion"},decls:2,vars:1,consts:[[1,"picture-small"],[4,"ngIf"],[1,"picture"],[1,"image-container",3,"click"],["alt","img",1,"image",3,"load","error","src"],[1,"picture-info-container",3,"click"],[1,"picture-info"],[1,"artist-info"],[1,"picture-title"],[1,"artist-name"],[1,"is-public-domain"],[1,"favourite-icon",3,"click"],["src","bookmark.svg","alt","bookmark",1,"bookmark"],[1,"picture-small",3,"click"],[1,"small-image-container"],["alt","img",1,"image",3,"error","src"]],template:function(t, n){t&1&&h(0,j,15,11)(1,L,13,8,"div",0),t&2&&M(n.isSmallVersion?1:0)},dependencies:[S,I],styles:[".picture[_ngcontent-%COMP%]{position:relative;flex-shrink:0}.image-container[_ngcontent-%COMP%]{overflow:hidden;display:flex;align-items:center;justify-content:center;min-width:390px;max-width:390px;height:444px}@media (max-width: 450px){.image-container[_ngcontent-%COMP%]{min-width:370px;max-width:370px}}.image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;object-position:center}.image[_ngcontent-%COMP%]:hover{cursor:pointer}.image.default[_ngcontent-%COMP%]{padding:10px 30px;object-fit:contain;border:solid 3px #4a2900;border-radius:15px}.picture-info-container[_ngcontent-%COMP%]{position:absolute;bottom:-70px;left:25px;display:flex;align-items:center;justify-content:space-between;width:335px;padding:32px 24px;border:1px solid #f0f1f1;background-color:#fff}@media (max-width: 450px){.picture-info-container[_ngcontent-%COMP%]{left:20px;min-width:325px;max-width:325px}}.picture-info-container[_ngcontent-%COMP%]:hover{cursor:pointer}.picture-info[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:8px;min-width:0}.artist-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1px;width:100%}.picture-title[_ngcontent-%COMP%]{overflow:hidden;font-family:var(--second-family);font-size:17px;font-weight:500;line-height:150%;color:#393939;text-overflow:ellipsis;letter-spacing:-.03em;white-space:nowrap;display:block;max-width:100%}.artist-name[_ngcontent-%COMP%]{overflow:hidden;font-family:var(--second-family);font-size:15px;font-weight:400;line-height:171%;color:#e0a449;text-overflow:ellipsis;letter-spacing:-.01em;white-space:nowrap;display:block;max-width:100%}.is-public-domain[_ngcontent-%COMP%]{font-family:var(--second-family);font-size:15px;font-weight:700;line-height:171%;color:#393939;letter-spacing:-.01em}.favourite-icon[_ngcontent-%COMP%]{position:unset;width:59px;height:59px;padding:17px;border-radius:35px;flex-shrink:0;background:#f9f9f9}.favourite-icon[_ngcontent-%COMP%]   .bookmark[_ngcontent-%COMP%]{width:24px;height:24px}.favourite-icon.favourite-active[_ngcontent-%COMP%]{background:#fef3e8}.picture-small[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto 1fr auto;gap:16px;align-items:center;width:100%;height:auto;padding:16px;border:1px solid #f0f1f1;background-color:#fff;transition:transform .3s ease}.picture-small[_ngcontent-%COMP%]:hover{transform:scale(1.03);cursor:pointer}.image-small-default[_ngcontent-%COMP%]{padding:5px}.small-image-container[_ngcontent-%COMP%]{overflow:hidden;display:flex;align-items:center;justify-content:center;width:80px;height:80px;flex-shrink:0}.small-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.hidden[_ngcontent-%COMP%]{display:none}"]})};export{E as a};
