import{a as V}from "./chunk-AOK74BCM.js";import{$ as l,A as w,Aa as M,C as s,D as p,J as u,K as h,L as a,O as S,S as C,U as y,V as g,W as I,_ as r,aa as v,ba as k,ca as d,da as c,ea as b,fa as m,ga as f,ma as O,sa as F,x as P}from "./chunk-HBEHPOXJ.js";var _=class o{storageKey="favoriteArtworks";favorites=u(this.getAllFavorites());constructor(){}getAllFavorites(){return JSON.parse(localStorage.getItem(this.storageKey)||"[]")}toggleFavorite(i){if(this.isFavorite(i)){this.removeFromStorage(i);return}this.addToStorage(i)}isFavorite(i){return this.getAllFavorites().includes(i)}getFavorites(){return this.favorites}addToStorage(i){let e=[...this.favorites(),i];localStorage.setItem(this.storageKey,JSON.stringify(e)),this.favorites.set(e)}removeFromStorage(i){let e=this.favorites().filter(n=>n!==i);localStorage.setItem(this.storageKey,JSON.stringify(e)),this.favorites.set(e)}static \u0275fac=function(e){return new(e||o)};static \u0275prov=P({token:o,factory:o.\u0275fac,providedIn:"root"})};function j(o, i){o&1&&v(0,"app-loader")}function A(o, i){if(o&1){let e=k();C(0,j,1,0,"app-loader",1),r(1,"div",2)(2,"div",3),d("click",function(){s(e);let t=c();return p(t.navigateToArtworkInfo(t.artwork.id))}),r(3,"img",4),d("load",function(){s(e);let t=c();return p(t.onImageLoad())})("error",function(){s(e);let t=c();return p(t.onImageError())}),l()(),r(4,"div",5),d("click",function(){s(e);let t=c();return p(t.navigateToArtworkInfo(t.artwork.id))}),r(5,"div",6)(6,"div",7)(7,"p",8),m(8),l(),r(9,"p",9),m(10),l()(),r(11,"p",10),m(12),l()(),r(13,"div",11),d("click",function(t){s(e);let x=c();return p(x.toggleFavorite(t))}),v(14,"img",12),l()()()}if(o&2){let e,n,t=c();y("ngIf",t.isLoadingCard()),a(),g("hidden",t.isLoadingCard()),a(2),g("default",t.isDefaultImage),b("src",t.artwork.image_url,h),a(5),f((e=t.artwork.title)!==null&&e!==void 0?e:"Unknown"),a(2),f((n=t.artwork.artist_title)!==null&&n!==void 0?n:"Unknown"),a(2),f(t.artwork.is_on_view?"Public":"Private"),a(),g("favourite-active",t.isFavorite())}}function L(o, i){if(o&1){let e=k();r(0,"div",13),d("click",function(){s(e);let t=c();return p(t.navigateToArtworkInfo(t.artwork.id))}),r(1,"div",14)(2,"img",15),d("error",function(){s(e);let t=c();return p(t.onImageError())}),l()(),r(3,"div",6)(4,"div",7)(5,"p",8),m(6),l(),r(7,"p",9),m(8),l()(),r(9,"p",10),m(10),l()(),r(11,"div",11),d("click",function(t){s(e);let x=c();return p(x.toggleFavorite(t))}),v(12,"img",12),l()()}if(o&2){let e=c();a(2),g("image-small-default",e.isDefaultImage),b("src",e.artwork.image_url,h),a(4),f(e.artwork.title||"Unknown"),a(2),f(e.artwork.artist_title||"Unknown"),a(2),f(e.artwork.is_on_view?"Public":"Private"),a(),g("favourite-active",e.isFavorite())}}var T=class o{artwork;isSmallVersion;isFavorite=u(!1);isLoadingCard=u(!0);router=w(M);favoritesService=w(_);constructor(){O(()=>{this.artwork&&this.isFavorite.set(this.favoritesService.isFavorite(this.artwork.id))})}get isDefaultImage(){return this.artwork?.image_url.includes("default-image.png")??!0}toggleFavorite(i){i.stopPropagation(),this.favoritesService.toggleFavorite(this.artwork.id),this.isFavorite.set(this.favoritesService.isFavorite(this.artwork.id))}navigateToArtworkInfo(i){this.router.navigate([`/artwork/${i}`])}onImageLoad(){this.isLoadingCard.set(!1)}onImageError(){this.artwork.image_url="default-image.png",this.isLoadingCard.set(!1)}static \u0275fac=function(e){return new(e||o)};static \u0275cmp=S({type:o,selectors:[["app-picture"]],inputs:{artwork:"artwork",isSmallVersion:"isSmallVersion"},decls:2,vars:1,consts:[[1,"picture-small"],[4,"ngIf"],[1,"picture"],[1,"image-container",3,"click"],["alt","img",1,"image",3,"load","error","src"],[1,"picture-info-container",3,"click"],[1,"picture-info"],[1,"artist-info"],[1,"picture-title"],[1,"artist-name"],[1,"is-public-domain"],[1,"favourite-icon",3,"click"],["src","bookmark.svg","alt","bookmark",1,"bookmark"],[1,"picture-small",3,"click"],[1,"small-image-container"],["alt","img",1,"image",3,"error","src"]],template:function(e, n){e&1&&C(0,A,15,11)(1,L,13,8,"div",0),e&2&&I(n.isSmallVersion?1:0)},dependencies:[V,F],styles:[".picture[_ngcontent-%COMP%]{position:relative;flex-shrink:0}.image-container[_ngcontent-%COMP%]{overflow:hidden;display:flex;align-items:center;justify-content:center;min-width:390px;max-width:390px;height:444px}@media (max-width: 450px){.image-container[_ngcontent-%COMP%]{min-width:370px;max-width:370px}}.image[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;object-position:center}.image.default[_ngcontent-%COMP%]{padding:10px 30px;object-fit:contain;border:solid 3px #4a2900;border-radius:15px}.picture-info-container[_ngcontent-%COMP%]{position:absolute;bottom:-70px;left:25px;display:flex;align-items:center;justify-content:space-between;width:335px;padding:32px 24px;border:1px solid #f0f1f1;background-color:#fff}@media (max-width: 450px){.picture-info-container[_ngcontent-%COMP%]{left:20px;min-width:325px;max-width:325px}}.picture-info[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column;gap:8px;min-width:0}.artist-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1px;width:100%}.picture-title[_ngcontent-%COMP%]{overflow:hidden;font-family:var(--second-family);font-size:17px;font-weight:500;line-height:150%;color:#393939;text-overflow:ellipsis;letter-spacing:-.03em;white-space:nowrap;display:block;max-width:100%}.artist-name[_ngcontent-%COMP%]{overflow:hidden;font-family:var(--second-family);font-size:15px;font-weight:400;line-height:171%;color:#e0a449;text-overflow:ellipsis;letter-spacing:-.01em;white-space:nowrap;display:block;max-width:100%}.is-public-domain[_ngcontent-%COMP%]{font-family:var(--second-family);font-size:15px;font-weight:700;line-height:171%;color:#393939;letter-spacing:-.01em}.favourite-icon[_ngcontent-%COMP%]{width:59px;height:59px;padding:17px;border-radius:35px;flex-shrink:0;background:#f9f9f9}.favourite-icon[_ngcontent-%COMP%]   .bookmark[_ngcontent-%COMP%]{width:24px;height:24px}.favourite-icon.favourite-active[_ngcontent-%COMP%]{background:#fbd7b24d}.picture-small[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto 1fr auto;gap:16px;align-items:center;width:100%;height:auto;padding:16px;border:1px solid #f0f1f1;background-color:#fff;transition:transform .3s ease}.picture-small[_ngcontent-%COMP%]:hover{transform:scale(1.03)}.image-small-default[_ngcontent-%COMP%]{padding:5px}.small-image-container[_ngcontent-%COMP%]{overflow:hidden;display:flex;align-items:center;justify-content:center;width:80px;height:80px;flex-shrink:0}.small-image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.hidden[_ngcontent-%COMP%]{display:none}"]})};export{_ as a,T as b};
