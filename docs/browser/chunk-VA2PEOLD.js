import{b as ke}from"./chunk-25FTXFFB.js";import{a as Te}from"./chunk-N7AA5R5G.js";import{$ as S,A as ae,B as a,C as j,D as le,E as g,F as D,G as Se,H as xe,I as m,J as E,L as Pe,M as ue,N as ce,O as s,P as l,Q as v,R as B,S as f,T as F,V as _,X as Ie,Y as H,_ as y,a as u,aa as U,b as h,ba as de,ca as Oe,d as be,da as Ne,e as De,g as Me,h as Ae,i as we,j as Ee,k,l as T,n as ne,o as V,p as ie,q as re,r as R,s as G,t as oe,u as Fe,v as b,w as se,x as d,z as p}from"./chunk-SQP4UJZR.js";var We=(()=>{class n{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||n)(a(ae),a(se))};static \u0275dir=g({type:n})}return n})(),_t=(()=>{class n extends We{static \u0275fac=(()=>{let t;return function(r){return(t||(t=Fe(n)))(r||n)}})();static \u0275dir=g({type:n,features:[D]})}return n})(),ze=new V("");var vt={provide:ze,useExisting:T(()=>J),multi:!0};function yt(){let n=de()?de().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var Ct=new V(""),J=(()=>{class n extends We{_compositionMode;_composing=!1;constructor(t,i,r){super(t,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!yt())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||n)(a(ae),a(se),a(Ct,8))};static \u0275dir=g({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&f("input",function(c){return r._handleInput(c.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(c){return r._compositionEnd(c.target.value)})},standalone:!1,features:[H([vt]),D]})}return n})();function ge(n){return n==null||me(n)===0}function me(n){return n==null?null:Array.isArray(n)||typeof n=="string"?n.length:n instanceof Set?n.size:null}var qe=new V(""),Qe=new V(""),Vt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,$=class{static min(e){return bt(e)}static max(e){return Dt(e)}static required(e){return Mt(e)}static requiredTrue(e){return At(e)}static email(e){return wt(e)}static minLength(e){return Et(e)}static maxLength(e){return Ft(e)}static pattern(e){return St(e)}static nullValidator(e){return Ze()}static compose(e){return tt(e)}static composeAsync(e){return it(e)}};function bt(n){return e=>{if(e.value==null||n==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t<n?{min:{min:n,actual:e.value}}:null}}function Dt(n){return e=>{if(e.value==null||n==null)return null;let t=parseFloat(e.value);return!isNaN(t)&&t>n?{max:{max:n,actual:e.value}}:null}}function Mt(n){return ge(n.value)?{required:!0}:null}function At(n){return n.value===!0?null:{required:!0}}function wt(n){return ge(n.value)||Vt.test(n.value)?null:{email:!0}}function Et(n){return e=>{let t=e.value?.length??me(e.value);return t===null||t===0?null:t<n?{minlength:{requiredLength:n,actualLength:t}}:null}}function Ft(n){return e=>{let t=e.value?.length??me(e.value);return t!==null&&t>n?{maxlength:{requiredLength:n,actualLength:t}}:null}}function St(n){if(!n)return Ze;let e,t;return typeof n=="string"?(t="",n.charAt(0)!=="^"&&(t+="^"),t+=n,n.charAt(n.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=n.toString(),e=n),i=>{if(ge(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function Ze(n){return null}function Xe(n){return n!=null}function Ye(n){return xe(n)?De(n):n}function Ke(n){let e={};return n.forEach(t=>{e=t!=null?u(u({},e),t):e}),Object.keys(e).length===0?null:e}function Je(n,e){return e.map(t=>t(n))}function xt(n){return!n.validate}function et(n){return n.map(e=>xt(e)?e:t=>e.validate(t))}function tt(n){if(!n)return null;let e=n.filter(Xe);return e.length==0?null:function(t){return Ke(Je(t,e))}}function nt(n){return n!=null?tt(et(n)):null}function it(n){if(!n)return null;let e=n.filter(Xe);return e.length==0?null:function(t){let i=Je(t,e).map(Ye);return Ae(i).pipe(Me(Ke))}}function rt(n){return n!=null?it(et(n)):null}function Re(n,e){return n===null?[e]:Array.isArray(n)?[...n,e]:[n,e]}function ot(n){return n._rawValidators}function st(n){return n._rawAsyncValidators}function he(n){return n?Array.isArray(n)?n:[n]:[]}function W(n,e){return Array.isArray(n)?n.includes(e):n===e}function Ge(n,e){let t=he(e);return he(n).forEach(r=>{W(t,r)||t.push(r)}),t}function je(n,e){return he(e).filter(t=>!W(n,t))}var z=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=nt(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=rt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},w=class extends z{name;get formDirective(){return null}get path(){return null}},N=class extends z{_parent=null;name=null;valueAccessor=null},q=class{_cd;constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Pt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Fn=h(u({},Pt),{"[class.ng-submitted]":"isSubmitted"}),at=(()=>{class n extends q{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(a(N,2))};static \u0275dir=g({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&E("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[D]})}return n})(),lt=(()=>{class n extends q{constructor(t){super(t)}static \u0275fac=function(i){return new(i||n)(a(w,10))};static \u0275dir=g({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,r){i&2&&E("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[D]})}return n})();var x="VALID",L="INVALID",M="PENDING",P="DISABLED",C=class{},Q=class extends C{value;source;constructor(e,t){super(),this.value=e,this.source=t}},I=class extends C{pristine;source;constructor(e,t){super(),this.pristine=e,this.source=t}},O=class extends C{touched;source;constructor(e,t){super(),this.touched=e,this.source=t}},A=class extends C{status;source;constructor(e,t){super(),this.status=e,this.source=t}},fe=class extends C{source;constructor(e){super(),this.source=e}},pe=class extends C{source;constructor(e){super(),this.source=e}};function ut(n){return(ee(n)?n.validators:n)||null}function It(n){return Array.isArray(n)?nt(n):n||null}function ct(n,e){return(ee(e)?e.asyncValidators:n)||null}function Ot(n){return Array.isArray(n)?rt(n):n||null}function ee(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function Nt(n,e,t){let i=n.controls;if(!(e?Object.keys(i):i).length)throw new k(1e3,"");if(!i[t])throw new k(1001,"")}function kt(n,e,t){n._forEachChild((i,r)=>{if(t[r]===void 0)throw new k(1002,"")})}var Z=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(e,t){this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return y(this.statusReactive)}set status(e){y(()=>this.statusReactive.set(e))}_status=S(()=>this.statusReactive());statusReactive=d(void 0);get valid(){return this.status===x}get invalid(){return this.status===L}get pending(){return this.status==M}get disabled(){return this.status===P}get enabled(){return this.status!==P}errors;get pristine(){return y(this.pristineReactive)}set pristine(e){y(()=>this.pristineReactive.set(e))}_pristine=S(()=>this.pristineReactive());pristineReactive=d(!0);get dirty(){return!this.pristine}get touched(){return y(this.touchedReactive)}set touched(e){y(()=>this.touchedReactive.set(e))}_touched=S(()=>this.touchedReactive());touchedReactive=d(!1);get untouched(){return!this.touched}_events=new be;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ge(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ge(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(je(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(je(e,this._rawAsyncValidators))}hasValidator(e){return W(this._rawValidators,e)}hasAsyncValidator(e){return W(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(h(u({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new O(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),t&&e.emitEvent!==!1&&this._events.next(new O(!1,i))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(h(u({},e),{sourceControl:i})),t&&e.emitEvent!==!1&&this._events.next(new I(!1,i))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),t&&e.emitEvent!==!1&&this._events.next(new I(!0,i))}markAsPending(e={}){this.status=M;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new A(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(h(u({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=P,this.errors=null,this._forEachChild(r=>{r.disable(h(u({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Q(this.value,i)),this._events.next(new A(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(h(u({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=x,this._forEachChild(i=>{i.enable(h(u({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(h(u({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===x||this.status===M)&&this._runAsyncValidator(i,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Q(this.value,t)),this._events.next(new A(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(h(u({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?P:x}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=M,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=Ye(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,r)=>i&&i._find(r),this)}getError(e,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new A(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,i)}_initObservables(){this.valueChanges=new b,this.statusChanges=new b}_calculateStatus(){return this._allControlsDisabled()?P:this.errors?L:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(M)?M:this._anyControlsHaveStatus(L)?L:x}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new I(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new O(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_onDisabledChange=[];_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){ee(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=It(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Ot(this._rawAsyncValidators)}},X=class extends Z{constructor(e,t,i){super(ut(t),ct(i,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,i={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){kt(this,!0,e),Object.keys(e).forEach(i=>{Nt(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,i)=>(e[i]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&e(i,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,i,r)=>((i.enabled||this.disabled)&&(t[r]=i.value),t))}_reduceChildren(e,t){let i=e;return this._forEachChild((r,o)=>{i=t(i,r,o)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var dt=new V("",{providedIn:"root",factory:()=>_e}),_e="always";function Tt(n,e){return[...e.path,n]}function Be(n,e,t=_e){ve(n,e),e.valueAccessor.writeValue(n.value),(n.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(n.disabled),Gt(n,e),Bt(n,e),jt(n,e),Rt(n,e)}function He(n,e,t=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),K(n,e),n&&(e._invokeOnDestroyCallbacks(),n._registerOnCollectionChange(()=>{}))}function Y(n,e){n.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Rt(n,e){if(e.valueAccessor.setDisabledState){let t=i=>{e.valueAccessor.setDisabledState(i)};n.registerOnDisabledChange(t),e._registerOnDestroy(()=>{n._unregisterOnDisabledChange(t)})}}function ve(n,e){let t=ot(n);e.validator!==null?n.setValidators(Re(t,e.validator)):typeof t=="function"&&n.setValidators([t]);let i=st(n);e.asyncValidator!==null?n.setAsyncValidators(Re(i,e.asyncValidator)):typeof i=="function"&&n.setAsyncValidators([i]);let r=()=>n.updateValueAndValidity();Y(e._rawValidators,r),Y(e._rawAsyncValidators,r)}function K(n,e){let t=!1;if(n!==null){if(e.validator!==null){let r=ot(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(c=>c!==e.validator);o.length!==r.length&&(t=!0,n.setValidators(o))}}if(e.asyncValidator!==null){let r=st(n);if(Array.isArray(r)&&r.length>0){let o=r.filter(c=>c!==e.asyncValidator);o.length!==r.length&&(t=!0,n.setAsyncValidators(o))}}}let i=()=>{};return Y(e._rawValidators,i),Y(e._rawAsyncValidators,i),t}function Gt(n,e){e.valueAccessor.registerOnChange(t=>{n._pendingValue=t,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&ht(n,e)})}function jt(n,e){e.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&ht(n,e),n.updateOn!=="submit"&&n.markAsTouched()})}function ht(n,e){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Bt(n,e){let t=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};n.registerOnChange(t),e._registerOnDestroy(()=>{n._unregisterOnChange(t)})}function Ht(n,e){n==null,ve(n,e)}function Ut(n,e){return K(n,e)}function Lt(n,e){if(!n.hasOwnProperty("model"))return!1;let t=n.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function $t(n){return Object.getPrototypeOf(n.constructor)===_t}function Wt(n,e){n._syncPendingControls(),e.forEach(t=>{let i=t.control;i.updateOn==="submit"&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function zt(n,e){if(!e)return null;Array.isArray(e);let t,i,r;return e.forEach(o=>{o.constructor===J?t=o:$t(o)?i=o:r=o}),r||i||t||null}function qt(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Ue(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function Le(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var ye=class extends Z{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(e=null,t,i){super(ut(t),ct(i,t)),this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),ee(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Le(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ue(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ue(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Le(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Qt=n=>n instanceof ye;var ft=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275dir=g({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})();var pt=new V("");var Zt={provide:w,useExisting:T(()=>Ce)},Ce=(()=>{class n extends w{callSetDisabledState;get submitted(){return y(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=S(()=>this._submittedReactive());_submittedReactive=d(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new b;constructor(t,i,r){super(),this.callSetDisabledState=r,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(t){t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(K(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let i=this.form.get(t.path);return Be(i,t,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){He(t.control||null,t,!1),qt(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,i){this.form.get(t.path).setValue(i)}onSubmit(t){return this._submittedReactive.set(!0),Wt(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new fe(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new pe(this.form))}_updateDomValue(){this.directives.forEach(t=>{let i=t.control,r=this.form.get(t.path);i!==r&&(He(i||null,t),Qt(r)&&(Be(r,t,this.callSetDisabledState),t.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let i=this.form.get(t.path);Ht(i,t),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let i=this.form.get(t.path);i&&Ut(i,t)&&i.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ve(this.form,this),this._oldForm&&K(this._oldForm,this)}static \u0275fac=function(i){return new(i||n)(a(qe,10),a(Qe,10),a(dt,8))};static \u0275dir=g({type:n,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&f("submit",function(c){return r.onSubmit(c)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[H([Zt]),D,re]})}return n})();var Xt={provide:N,useExisting:T(()=>Ve)},Ve=(()=>{class n extends N{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new b;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,r,o,c){super(),this._ngModelWarningConfig=c,this._parent=t,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=zt(this,o)}ngOnChanges(t){this._added||this._setUpControl(),Lt(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return Tt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||n)(a(w,13),a(qe,10),a(Qe,10),a(ze,10),a(pt,8))};static \u0275dir=g({type:n,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[H([Xt]),D,re]})}return n})();var Yt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=le({type:n});static \u0275inj=ne({})}return n})();var gt=(()=>{class n{static withConfig(t){return{ngModule:n,providers:[{provide:pt,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:dt,useValue:t.callSetDisabledState??_e}]}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=le({type:n});static \u0275inj=ne({imports:[Yt]})}return n})();var te=class n{search=new b;searchForm;constructor(){this.searchForm=new X({searchQuery:new ye("",[])})}ngOnInit(){this.searchForm.get("searchQuery")?.valueChanges.pipe(we(500),Ee()).subscribe(e=>{if(e=e.trim(),e===""){this.search.emit(e);return}this.searchForm.get("searchQuery")?.setValidators([$.minLength(3)]),this.searchForm.get("searchQuery")?.updateValueAndValidity({emitEvent:!1}),this.searchForm.valid&&this.search.emit(e)})}onSubmit(){this.searchForm.valid&&this.search.emit(this.searchForm.value.searchQuery)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-search-bar"]],outputs:{search:"search"},decls:4,vars:2,consts:[[1,"search-container",3,"ngSubmit","formGroup"],["type","text","placeholder","Search Art, Artist, Work...","formControlName","searchQuery",1,"form-control","search-input"],["type","submit",1,"search-btn",3,"disabled"],[1,"bi","bi-search"]],template:function(t,i){t&1&&(s(0,"form",0),f("ngSubmit",function(){return i.onSubmit()}),v(1,"input",1),s(2,"button",2),v(3,"span",3),l()()),t&2&&(m("formGroup",i.searchForm),p(2),m("disabled",i.searchForm.invalid))},dependencies:[gt,ft,J,at,lt,Ce,Ve],styles:[".search-container[_ngcontent-%COMP%]{display:flex;max-width:762px;width:100%;height:64px;padding:16px;border-radius:16px;background:#3939390d}.search-input[_ngcontent-%COMP%]{flex:1;border:none;background:transparent;outline:none;font-size:16px;color:#555}.search-input[_ngcontent-%COMP%]:focus{outline:none;box-shadow:none;border:none}.search-input[_ngcontent-%COMP%]::placeholder{font-family:var(--font-family);font-weight:400;font-size:14px;text-transform:capitalize;color:#39393980}.search-btn[_ngcontent-%COMP%]{background:none;border:none;cursor:pointer;padding:5px}.search-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:20px;color:#555}"]})};var en=(n,e)=>e.id;function tn(n,e){if(n&1&&v(0,"app-picture",8),n&2){let t=e.$implicit;m("artwork",t)("isSmallVersion",!1)}}function nn(n,e){if(n&1){let t=B();s(0,"button",14),f("click",function(){R(t);let r=F();return G(r.prevPages())}),oe(),s(1,"svg",15),v(2,"path",16),l()()}}function rn(n,e){if(n&1){let t=B();s(0,"button",17),f("click",function(){let r=R(t).$implicit,o=F();return G(o.goToPage(r))}),_(1),l()}if(n&2){let t=e.$implicit,i=F();E("active",t===i.currentPage()),p(),Ie(" ",t," ")}}function on(n,e){if(n&1){let t=B();s(0,"button",14),f("click",function(){R(t);let r=F();return G(r.nextPages())}),oe(),s(1,"svg",15),v(2,"path",18),l()()}}function sn(n,e){if(n&1&&v(0,"app-picture",13),n&2){let t=e.$implicit;m("artwork",t)("isSmallVersion",!0)}}var mt=class n{artworksPagination=d([]);artworksList=d([]);currentPage=d(1);totalPages=d(100);visiblePageCount=4;searchQuery=d("");artworksService=ie(Te);constructor(){U(()=>{this.artworksService.getTotalPages().subscribe({next:e=>this.totalPages.set(e)})}),U(()=>{this.loadArtworksPagination()}),U(()=>{this.loadArtworksList()})}onSearch(e){this.searchQuery.set(e),this.currentPage.set(1)}nextPages(){this.currentPage()<this.totalPages()&&this.currentPage.update(e=>e+this.visiblePageCount)}prevPages(){this.currentPage()>1&&this.currentPage.update(e=>e-this.visiblePageCount)}getVisiblePages(){let e=Math.floor((this.currentPage()-1)/this.visiblePageCount)*this.visiblePageCount+1,t=Math.min(e+this.visiblePageCount-1,this.totalPages());return Array.from({length:t-e+1},(i,r)=>e+r)}goToPage(e){e!==this.currentPage()&&this.currentPage.set(e)}loadArtworksPagination(){this.artworksService.searchArtworks(this.searchQuery(),this.currentPage()).subscribe({next:({artworks:e,total_page:t})=>{this.artworksPagination.set(e),this.totalPages.set(t)}})}loadArtworksList(){this.artworksService.getArtworks(1,9).subscribe({next:e=>this.artworksList.set(e)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=j({type:n,selectors:[["app-home-page"]],decls:30,vars:3,consts:[[1,"wrapper"],[1,"search-section"],[1,"main-heading"],[2,"color","#f17900"],[1,"search-bar-container",3,"search"],[1,"content-container"],[1,"section-heading"],[1,"artworks-list"],[1,"app-picture",3,"artwork","isSmallVersion"],[1,"pagination-container"],["class","pagination-arrow",3,"click",4,"ngIf"],["class","pagination-button",3,"active","click",4,"ngFor","ngForOf"],[1,"artworks-more-list"],[3,"artwork","isSmallVersion"],[1,"pagination-arrow",3,"click"],["width","10","height","15","viewBox","0 0 10 15","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M8.53209 1.28558L7 0L0.572122 7.66044L1.0734 8.08107L1.05398 8.10421L8.71442 14.5321L10 13L3.37037 7.43708L8.53209 1.28558Z","fill","#393939"],[1,"pagination-button",3,"click"],["fill-rule","evenodd","clip-rule","evenodd","d","M1.46791 13.7144L3 15L9.42788 7.33956L8.9266 6.91893L8.94602 6.89579L1.28558 0.467911L-1.07377e-07 2L6.62963 7.56292L1.46791 13.7144Z","fill","#393939"]],template:function(t,i){t&1&&(s(0,"div",0)(1,"section",1)(2,"h1",2),_(3," let's find some "),s(4,"span",3),_(5,"art"),l(),_(6," here! "),l(),s(7,"app-search-bar",4),f("search",function(o){return i.onSearch(o)}),l()(),s(8,"section",5)(9,"div",6)(10,"h3"),_(11,"Topics for you"),l(),s(12,"h2"),_(13,"Our special gallery"),l()(),s(14,"div",7),ue(15,tn,1,2,"app-picture",8,en),l(),s(17,"div",9),Se(18,nn,3,0,"button",10)(19,rn,2,3,"button",11)(20,on,3,0,"button",10),l()(),s(21,"section",5)(22,"div",6)(23,"h3"),_(24,"Here some more"),l(),s(25,"h2"),_(26,"Other works for you"),l()(),s(27,"div",12),ue(28,sn,1,2,"app-picture",13,Pe),l()()()),t&2&&(p(15),ce(i.artworksPagination()),p(3),m("ngIf",i.currentPage()>i.visiblePageCount),p(),m("ngForOf",i.getVisiblePages()),p(),m("ngIf",i.currentPage()+4<=i.totalPages()),p(8),ce(i.artworksList()))},dependencies:[ke,te,Ne,Oe],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:120px;max-width:1280px;margin:0 auto;padding:120px 0}.search-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:72px;align-items:center;width:100%}.search-bar-container[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.main-heading[_ngcontent-%COMP%]{max-width:680px;font-family:var(--second-family);font-size:64px;font-weight:700;color:#393939;text-align:center;text-transform:capitalize}@media (max-width: 767px){.main-heading[_ngcontent-%COMP%]{font-size:52px;max-width:600px}}.content-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:40px;align-items:center;justify-content:center;width:100%}.section-heading[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.section-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-family:var(--second-family);font-size:16px;font-weight:400;color:#e0a449}.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-family:var(--second-family);font-size:32px;font-weight:400;color:#393939}.artworks-list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(390px,1fr));gap:54px;width:100%;min-height:514px;justify-items:center;align-items:center}.app-picture[_ngcontent-%COMP%]{height:514px}.artworks-more-list[_ngcontent-%COMP%]{display:grid;gap:16px;grid-template-columns:repeat(auto-fit,minmax(350px,1fr));width:100%}.pagination-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:10px}.pagination-arrow[_ngcontent-%COMP%]{border:none;background:none;display:flex;justify-content:center;align-items:center}.pagination-button[_ngcontent-%COMP%]{border:none;background:none;font-family:var(--second-family);font-weight:300;font-size:18px;line-height:133%;color:#393939;padding:3px 10px}.pagination-button.active[_ngcontent-%COMP%]{background-color:#f17900;border-radius:4px;font-weight:600;line-height:128%;color:#fff}"]})};export{mt as HomePageComponent};
