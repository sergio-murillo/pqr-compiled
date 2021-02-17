(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{bbWM:function(e,t,n){"use strict";n.r(t),n.d(t,"FEATURE_REDUCER_TOKEN",(function(){return de})),n.d(t,"ClaimModule",(function(){return me}));var c=n("TYT/"),r=n("Valr"),a=n("o8Qb"),i=n("QJY3"),o=n("DUip"),l=n("6onV"),s=Object(l.g)("[Claims] Request By Id",Object(l.l)()),b=Object(l.g)("[Claims] Response By Id",Object(l.l)()),u=Object(l.g)("[Claims] Request All"),p=Object(l.g)("[Claims] Response All",Object(l.l)()),f=Object(l.g)("[Claims] Request Create",Object(l.l)()),d=Object(l.g)("[Claims] Response Create",Object(l.l)()),m=Object(l.g)("[Claims] Request All Filters",Object(l.l)()),g=Object(l.g)("[Claims] Response All Filters",Object(l.l)()),h=Object(l.g)("[Claims] Set Loading Claims",Object(l.l)()),O=n("mrSG"),C=Object(l.i)({getById:{},getAll:{},create:{},isLoadingClaims:!1},Object(l.k)(b,(function(e,t){var n=t.response;return Object(O.a)(Object(O.a)({},e),{getById:n})})),Object(l.k)(p,(function(e,t){var n=t.response;return Object(O.a)(Object(O.a)({},e),{getAll:n})})),Object(l.k)(d,(function(e,t){var n=t.response;return Object(O.a)(Object(O.a)({},e),{create:n})})),Object(l.k)(g,(function(e,t){var n=t.response;return Object(O.a)(Object(O.a)({},e),{getAll:n})})),Object(l.k)(h,(function(e,t){var n=t.isLoading;return Object(O.a)(Object(O.a)({},e),{isLoadingClaims:n})})));function T(e,t){return C(e,t)}var B=Object(l.h)("claim"),y=Object(l.j)(B,(function(e){return null==e?void 0:e.getAll})),S=Object(l.j)(B,(function(e){return null==e?void 0:e.getById})),j=Object(l.j)(B,(function(e){return null==e?void 0:e.create})),v=Object(l.j)(B,(function(e){return e.isLoadingClaims})),L=function(){function e(e){this.store=e,this.getById$=this.store.select(S),this.getAll$=this.store.select(y),this.create$=this.store.select(j),this.isLoadingClaims$=this.store.select(v)}return e.prototype.requestGetById=function(e){this.store.dispatch(s({id:e}))},e.prototype.requestGetAll=function(){this.store.dispatch(u())},e.prototype.requestGetAllFiltered=function(e){this.store.dispatch(m({filter:e}))},e.prototype.requestCreate=function(e){this.store.dispatch(f({body:e}))},e.prototype.setLoadingClaims=function(e){this.store.dispatch(h({isLoading:e}))},e.\u0275fac=function(t){return new(t||e)(c.Xb(l.b))},e.\u0275prov=c.Kb({token:e,factory:e.\u0275fac}),e}(),E=function(){function e(e,t){this.formBuilder=e,this.facade=t,this.loading=!1,this.submitted=!1}return e.prototype.ngOnInit=function(){},e.\u0275fac=function(t){return new(t||e)(c.Ob(i.c),c.Ob(L))},e.\u0275cmp=c.Ib({type:e,selectors:[["ng-component"]],decls:1,vars:0,template:function(e,t){1&e&&c.Pb(0,"router-outlet")},directives:[o.h],styles:[""],changeDetection:0}),e}(),I=n("VnD/"),A=n("67Y/"),w=n("ivlQ"),x=n("+PyC"),M=n("bOgE");function q(e,t){1&e&&(c.Tb(0,"span",13),c.Bc(1),c.ec(2,"translate"),c.Sb()),2&e&&(c.Bb(1),c.Cc(c.fc(2,1,"RESPONSES.REQUIRED")))}function P(e,t){1&e&&(c.Tb(0,"span",13),c.Bc(1),c.ec(2,"translate"),c.Sb()),2&e&&(c.Bb(1),c.Cc(c.fc(2,1,"RESPONSES.REQUIRED")))}function _(e,t){1&e&&(c.Tb(0,"span",13),c.Bc(1),c.ec(2,"translate"),c.Sb()),2&e&&(c.Bb(1),c.Cc(c.fc(2,1,"RESPONSES.REQUIRED")))}var R=function(){function e(){this.formSubmitted=!1,this.requestItems=[],this.save=new c.n}return e.prototype.ngOnInit=function(){this.formGroup=this.initForm()},e.prototype.initForm=function(){return new i.f({title:new i.d("",[i.p.required]),description:new i.d("",[i.p.required]),request:new i.d("",[i.p.required])},{updateOn:"change"})},e.prototype.saveClaim=function(){this.formSubmitted=!0,this.formGroup.valid&&(this.save.emit({title:this.formGroup.get("title").value,description:this.formGroup.get("description").value,requestId:this.formGroup.get("request").value,state:x.c.CREATED}),this.formSubmitted=!1)},e.prototype.errorInput=function(e){var t=this.formGroup.get(e);return(t.touched||t.dirty||this.formSubmitted)&&!!t.errors},e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c.Ib({type:e,selectors:[["app-form"]],inputs:{requestItems:"requestItems"},outputs:{save:"save"},decls:32,vars:27,consts:[[1,"form",3,"formGroup"],[1,"row"],[1,"col-25"],["for","title"],[1,"col-75"],["type","text","id","title","name","title","formControlName","title",3,"placeholder"],["class","error",4,"ngIf"],["for","description"],["id","description","name","description","formControlName","description",3,"placeholder"],["for","request"],["id","request","containerId","request",3,"formGroup","placeholder","items"],[1,"form__actions"],["type","button",1,"btn","btn-success",3,"click"],[1,"error"]],template:function(e,t){1&e&&(c.Tb(0,"form",0),c.Tb(1,"div",1),c.Tb(2,"div",2),c.Tb(3,"label",3),c.Bc(4),c.ec(5,"translate"),c.Sb(),c.Sb(),c.Tb(6,"div",4),c.Pb(7,"input",5),c.ec(8,"translate"),c.zc(9,q,3,3,"span",6),c.Sb(),c.Sb(),c.Tb(10,"div",1),c.Tb(11,"div",2),c.Tb(12,"label",7),c.Bc(13),c.ec(14,"translate"),c.Sb(),c.Sb(),c.Tb(15,"div",4),c.Pb(16,"textarea",8),c.ec(17,"translate"),c.zc(18,P,3,3,"span",6),c.Sb(),c.Sb(),c.Tb(19,"div",1),c.Tb(20,"div",2),c.Tb(21,"label",9),c.Bc(22),c.ec(23,"translate"),c.Sb(),c.Sb(),c.Tb(24,"div",4),c.Pb(25,"app-autocomplete",10),c.ec(26,"translate"),c.zc(27,_,3,3,"span",6),c.Sb(),c.Sb(),c.Tb(28,"div",11),c.Tb(29,"button",12),c.bc("click",(function(){return t.saveClaim()})),c.Bc(30),c.ec(31,"translate"),c.Sb(),c.Sb(),c.Sb()),2&e&&(c.jc("formGroup",t.formGroup),c.Bb(4),c.Cc(c.fc(5,13,"CLAIM.TITLE.LABEL")),c.Bb(3),c.jc("placeholder",c.fc(8,15,"CLAIM.TITLE.PLACEHOLDER")),c.Bb(2),c.jc("ngIf",t.errorInput("title")),c.Bb(4),c.Cc(c.fc(14,17,"CLAIM.DESCRIPTION.LABEL")),c.Bb(3),c.jc("placeholder",c.fc(17,19,"CLAIM.DESCRIPTION.PLACEHOLDER")),c.Bb(2),c.jc("ngIf",t.errorInput("description")),c.Bb(4),c.Cc(c.fc(23,21,"CLAIM.REQUEST_ID.LABEL")),c.Bb(3),c.jc("formGroup",t.formGroup)("placeholder",c.fc(26,23,"CLAIM.REQUEST_ID.PLACEHOLDER"))("items",t.requestItems),c.Bb(2),c.jc("ngIf",t.errorInput("request")),c.Bb(3),c.Cc(c.fc(31,25,"CLAIM.BUTTON.SAVE")))},directives:[i.r,i.l,i.g,i.b,i.k,i.e,r.l,M.a],pipes:[a.c],styles:[".form[_ngcontent-%COMP%]{width:100%}.form__actions[_ngcontent-%COMP%]{margin-top:20px;display:flex;align-items:center;justify-content:center;flex-direction:row}"],changeDetection:0}),e}(),G=function(){function e(e,t){this.claimFacade=e,this.rootFacade=t}return e.prototype.ngOnInit=function(){this.rootFacade.requestGetAll()},e.prototype.saveClaim=function(e){this.claimFacade.requestCreate(e),this.rootFacade.setLoader(!0)},Object.defineProperty(e.prototype,"requests$",{get:function(){return this.rootFacade.getAll$.pipe(Object(I.a)((function(e){return!!e})),Object(A.a)((function(e){return e.response})))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"requestsAutocomplete$",{get:function(){return this.rootFacade.getAll$.pipe(Object(I.a)((function(e){return!!e&&!!e.response})),Object(A.a)((function(e){return e.response.map((function(e){return{code:e.id,name:""+e.id,filter:e.id}}))})))},enumerable:!1,configurable:!0}),e.\u0275fac=function(t){return new(t||e)(c.Ob(L),c.Ob(w.a))},e.\u0275cmp=c.Ib({type:e,selectors:[["app-create-claim"]],decls:4,vars:3,consts:[[1,"create-claim"],[1,"create-claim__form"],[3,"requestItems","save"]],template:function(e,t){1&e&&(c.Tb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"app-form",2),c.bc("save",(function(e){return t.saveClaim(e)})),c.ec(3,"async"),c.Sb(),c.Sb(),c.Sb()),2&e&&(c.Bb(2),c.jc("requestItems",c.fc(3,1,t.requestsAutocomplete$)))},directives:[R],pipes:[r.b],styles:[".create-claim[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:center;flex-direction:row}.create-claim__form[_ngcontent-%COMP%]{width:500px}"],changeDetection:0}),e}(),k=n("X2FZ"),D=n("GsDI"),$=n("n3Mk"),F=function(){function e(){}return e.prototype.transform=function(e){return(null==e?void 0:e.id)+" - "+(null==e?void 0:e.title)},e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=c.Nb({name:"formatRequest",type:e,pure:!0}),e}();function N(e,t){1&e&&(c.Bc(0),c.ec(1,"date")),2&e&&c.Dc(" ",c.gc(1,1,t.value,"dd/MM/yyyy")," ")}function U(e,t){1&e&&(c.Bc(0),c.ec(1,"formatCustomer")),2&e&&c.Dc(" ",c.fc(1,1,t.value)," ")}function X(e,t){1&e&&(c.Bc(0),c.ec(1,"formatRequest")),2&e&&c.Dc(" ",c.fc(1,1,t.value)," ")}function Q(e,t){if(1&e){var n=c.Ub();c.Tb(0,"button",16),c.bc("click",(function(){c.sc(n);var e=t.row;return c.dc().viewClaim(null==e?null:e.id)})),c.Tb(1,"mat-icon",17),c.Bc(2,"remove_red_eye"),c.Sb(),c.Sb()}}var z=function(){function e(e,t){this.facade=e,this.router=t,e.setLoadingClaims(!0),e.requestGetAll()}return e.prototype.ngOnInit=function(){this.formGroup=this.initForm()},e.prototype.initForm=function(){return new i.f({search:new i.d("",[])},{updateOn:"change"})},e.prototype.search=function(){var e=this.formGroup.get("search").value;this.facade.setLoadingClaims(!0),e?this.facade.requestGetAllFiltered(e):this.facade.requestGetAll()},e.prototype.viewClaim=function(e){this.router.navigate(["/claim/"+e])},Object.defineProperty(e.prototype,"claims$",{get:function(){return this.facade.getAll$.pipe(Object(I.a)((function(e){return!!e})),Object(A.a)((function(e){return e.response})))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isLoadingClaims$",{get:function(){return this.facade.isLoadingClaims$},enumerable:!1,configurable:!0}),e.\u0275fac=function(t){return new(t||e)(c.Ob(L),c.Ob(o.f))},e.\u0275cmp=c.Ib({type:e,selectors:[["app-search-claims"]],decls:37,vars:54,consts:[[1,"search-claims",3,"formGroup"],[1,"search-claims-search"],[1,"input-group","mb-3"],["type","text","aria-label","Tipo, n\xfamero o nombre de quien pertenece","aria-describedby","basic-addon2","formControlName","search",1,"form-control",3,"placeholder"],[1,"input-group-append"],["type","button",1,"btn","btn-success",3,"click"],[1,"search-claims-table"],["columnMode","flex","rowHeight","auto",1,"material",3,"rows","headerHeight","footerHeight","loadingIndicator"],["prop","id",3,"name","flexGrow"],["prop","title",3,"name","flexGrow"],["prop","description",3,"name","flexGrow"],["prop","creation_date",3,"name","flexGrow"],["ngx-datatable-cell-template",""],["prop","customer",3,"name","flexGrow"],["prop","request",3,"name","flexGrow"],[3,"name","flexGrow"],["mat-icon-button","",3,"click"],["matSuffix",""]],template:function(e,t){1&e&&(c.Tb(0,"div",0),c.Tb(1,"div",1),c.Tb(2,"div",2),c.Pb(3,"input",3),c.ec(4,"translate"),c.Tb(5,"div",4),c.Tb(6,"button",5),c.bc("click",(function(){return t.search()})),c.Bc(7,"Buscar"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Tb(8,"div",6),c.Tb(9,"ngx-datatable",7),c.ec(10,"async"),c.ec(11,"async"),c.Pb(12,"ngx-datatable-column",8),c.ec(13,"uppercase"),c.ec(14,"translate"),c.Pb(15,"ngx-datatable-column",9),c.ec(16,"uppercase"),c.ec(17,"translate"),c.Pb(18,"ngx-datatable-column",10),c.ec(19,"uppercase"),c.ec(20,"translate"),c.Tb(21,"ngx-datatable-column",11),c.ec(22,"uppercase"),c.ec(23,"translate"),c.zc(24,N,2,4,"ng-template",12),c.Sb(),c.Tb(25,"ngx-datatable-column",13),c.ec(26,"uppercase"),c.ec(27,"translate"),c.zc(28,U,2,3,"ng-template",12),c.Sb(),c.Tb(29,"ngx-datatable-column",14),c.ec(30,"uppercase"),c.ec(31,"translate"),c.zc(32,X,2,3,"ng-template",12),c.Sb(),c.Tb(33,"ngx-datatable-column",15),c.ec(34,"uppercase"),c.ec(35,"translate"),c.zc(36,Q,3,0,"ng-template",12),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&e&&(c.jc("formGroup",t.formGroup),c.Bb(3),c.jc("placeholder",c.fc(4,20,"CLAIM.SEARCH.PLACEHOLDER")),c.Bb(6),c.jc("rows",c.fc(10,22,t.claims$))("headerHeight",50)("footerHeight",50)("loadingIndicator",c.fc(11,24,t.isLoadingClaims$)),c.Bb(3),c.kc("name",c.fc(13,26,c.fc(14,28,"CLAIM.ID.LABEL"))),c.jc("flexGrow",2),c.Bb(3),c.kc("name",c.fc(16,30,c.fc(17,32,"CLAIM.TITLE.LABEL"))),c.jc("flexGrow",1),c.Bb(3),c.kc("name",c.fc(19,34,c.fc(20,36,"CLAIM.DESCRIPTION.LABEL"))),c.jc("flexGrow",2),c.Bb(3),c.kc("name",c.fc(22,38,c.fc(23,40,"CLAIM.CREATION_DATE.LABEL"))),c.jc("flexGrow",1.2),c.Bb(4),c.kc("name",c.fc(26,42,c.fc(27,44,"CLAIM.CUSTOMER.LABEL"))),c.jc("flexGrow",2),c.Bb(4),c.kc("name",c.fc(30,46,c.fc(31,48,"CLAIM.REQUEST.LABEL"))),c.jc("flexGrow",1),c.Bb(4),c.kc("name",c.fc(34,50,c.fc(35,52,"CLAIM.OPERATIONS"))),c.jc("flexGrow",1))},directives:[i.l,i.g,i.b,i.k,i.e,k.c,k.b,k.a,D.a],pipes:[a.c,r.b,r.q,r.e,$.a,F],styles:[".search-claims[_ngcontent-%COMP%]{display:flex;align-items:stretch;justify-content:flex-start;flex-direction:column;padding:15px 10px}.search-claims-operations[_ngcontent-%COMP%]{justify-content:space-evenly}.search-claims-actions[_ngcontent-%COMP%], .search-claims-operations[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:row}.search-claims-actions[_ngcontent-%COMP%]{margin-top:100px;justify-content:center}.search-claims-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:50%}.search-claims-search[_ngcontent-%COMP%]{width:35%}.search-claims-table[_ngcontent-%COMP%]{width:100%;margin-top:30px}[_nghost-%COMP%]     .ngx-datatable.material{box-shadow:none}[_nghost-%COMP%]     .ngx-datatable.material .datatable-header{border-bottom:1px solid grey}[_nghost-%COMP%]     .datatable-header-cell-label{font-size:10px;font-weight:bolder;color:#000}[_nghost-%COMP%]     .datatable-body:nth-child(2n){color:#252525;background-color:#f6efef}[_nghost-%COMP%]     .datatable-body-cell-label{border-radius:2px;padding:4px 0;text-align:center!important}[_nghost-%COMP%]     .ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap{text-align:center!important}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body .progress-linear{display:block;position:relative;width:100%;height:5px;padding:0;margin:0;position:absolute}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body .progress-linear .container{display:block;position:relative;overflow:hidden;width:100%;height:5px;transform:translate(0) scale(1);background-color:#aad1f9}[_nghost-%COMP%]     .ngx-datatable.material .datatable-body .progress-linear .container .bar{transition:all .2s linear;-webkit-animation:query .8s cubic-bezier(.39,.575,.565,1) infinite;animation:query .8s cubic-bezier(.39,.575,.565,1) infinite;transition:transform .2s linear;background-color:#106cc8;position:absolute;left:0;top:0;bottom:0;width:100%;height:5px}@-webkit-keyframes query{0%{opacity:1;transform:translateX(35%) scaleX(.3)}to{opacity:0;transform:translateX(-50%) scaleX(0)}}@keyframes query{0%{opacity:1;transform:translateX(35%) scaleX(.3)}to{opacity:0;transform:translateX(-50%) scaleX(0)}}"],changeDetection:0}),e}(),H=n("eda5"),J=n("y6XX");function V(e,t){if(1&e&&(c.Tb(0,"div",2),c.Tb(1,"h4",3),c.Bc(2),c.ec(3,"translate"),c.Sb(),c.Tb(4,"ul",4),c.Tb(5,"li",5),c.Tb(6,"label",6),c.Bc(7),c.ec(8,"translate"),c.Sb(),c.Tb(9,"label",7),c.Bc(10),c.Sb(),c.Sb(),c.Tb(11,"li",5),c.Tb(12,"label",6),c.Bc(13),c.ec(14,"translate"),c.Sb(),c.Tb(15,"label",7),c.Bc(16),c.Sb(),c.Sb(),c.Tb(17,"li",5),c.Tb(18,"label",6),c.Bc(19),c.ec(20,"translate"),c.Sb(),c.Tb(21,"label",7),c.Bc(22),c.Sb(),c.Sb(),c.Tb(23,"li",5),c.Tb(24,"label",6),c.Bc(25),c.ec(26,"translate"),c.Sb(),c.Tb(27,"label",7),c.Bc(28),c.ec(29,"formatCustomer"),c.Sb(),c.Sb(),c.Tb(30,"li",5),c.Tb(31,"label",6),c.Bc(32),c.ec(33,"translate"),c.Sb(),c.Tb(34,"label",7),c.Bc(35),c.Sb(),c.Sb(),c.Tb(36,"li",5),c.Tb(37,"label",6),c.Bc(38),c.ec(39,"translate"),c.Sb(),c.Tb(40,"label",7),c.Bc(41),c.ec(42,"translate"),c.ec(43,"state"),c.Sb(),c.Sb(),c.Tb(44,"li",5),c.Tb(45,"div",2),c.Tb(46,"h4",3),c.Bc(47),c.ec(48,"requestType"),c.ec(49,"translate"),c.Sb(),c.Tb(50,"ul",4),c.Tb(51,"li",5),c.Tb(52,"label",6),c.Bc(53),c.ec(54,"translate"),c.Sb(),c.Tb(55,"label",7),c.Bc(56),c.Sb(),c.Sb(),c.Tb(57,"li",5),c.Tb(58,"label",6),c.Bc(59),c.ec(60,"translate"),c.Sb(),c.Tb(61,"label",7),c.Bc(62),c.Sb(),c.Sb(),c.Tb(63,"li",5),c.Tb(64,"label",6),c.Bc(65),c.ec(66,"translate"),c.Sb(),c.Tb(67,"label",7),c.Bc(68),c.Sb(),c.Sb(),c.Tb(69,"li",5),c.Tb(70,"label",6),c.Bc(71),c.ec(72,"translate"),c.Sb(),c.Tb(73,"label",7),c.Bc(74),c.Sb(),c.Sb(),c.Tb(75,"li",5),c.Tb(76,"label",6),c.Bc(77),c.ec(78,"translate"),c.Sb(),c.Tb(79,"label",7),c.Bc(80),c.ec(81,"translate"),c.ec(82,"state"),c.Sb(),c.Sb(),c.Tb(83,"li",5),c.Tb(84,"label",6),c.Bc(85),c.ec(86,"translate"),c.Sb(),c.Tb(87,"label",7),c.Bc(88),c.ec(89,"requestType"),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb(),c.Sb()),2&e){var n=t.ngIf;c.Bb(2),c.Ec("",c.fc(3,29,"CLAIM.MAIN")," ",null==n?null:n.id,""),c.Bb(5),c.Cc(c.fc(8,31,"CLAIM.TITLE.LABEL")),c.Bb(3),c.Cc(null==n?null:n.title),c.Bb(3),c.Cc(c.fc(14,33,"CLAIM.DESCRIPTION.LABEL")),c.Bb(3),c.Cc(null==n?null:n.description),c.Bb(3),c.Cc(c.fc(20,35,"CLAIM.CREATION_DATE.LABEL")),c.Bb(3),c.Cc(null==n?null:n.creation_date),c.Bb(3),c.Cc(c.fc(26,37,"CLAIM.CUSTOMER.LABEL")),c.Bb(3),c.Cc(c.fc(29,39,null==n?null:n.customer)),c.Bb(4),c.Cc(c.fc(33,41,"CLAIM.ANSWER.LABEL")),c.Bb(3),c.Cc(null==n?null:n.answer),c.Bb(3),c.Cc(c.fc(39,43,"CLAIM.STATE.LABEL")),c.Bb(3),c.Cc(c.fc(42,45,c.fc(43,47,null==n?null:n.state))),c.Bb(6),c.Fc("",c.fc(48,49,null==n||null==n.request?null:n.request.type)," | ",c.fc(49,51,"CLAIM.MAIN")," ",null==n||null==n.request?null:n.request.id,""),c.Bb(6),c.Cc(c.fc(54,53,"REQUEST.TITLE.LABEL")),c.Bb(3),c.Cc(null==n||null==n.request?null:n.request.title),c.Bb(3),c.Cc(c.fc(60,55,"REQUEST.DESCRIPTION.LABEL")),c.Bb(3),c.Cc(null==n||null==n.request?null:n.request.description),c.Bb(3),c.Cc(c.fc(66,57,"REQUEST.CREATION_DATE.LABEL")),c.Bb(3),c.Cc(null==n||null==n.request?null:n.request.creation_date),c.Bb(3),c.Cc(c.fc(72,59,"REQUEST.ANSWER.LABEL")),c.Bb(3),c.Cc(null==n||null==n.request?null:n.request.answer),c.Bb(3),c.Cc(c.fc(78,61,"REQUEST.STATE.LABEL")),c.Bb(3),c.Cc(c.fc(81,63,c.fc(82,65,null==n||null==n.request?null:n.request.state))),c.Bb(5),c.Cc(c.fc(86,67,"REQUEST.TYPE.LABEL")),c.Bb(3),c.Cc(c.fc(89,69,null==n||null==n.request?null:n.request.type))}}var W=[{path:"",component:E,children:[{path:"",component:z},{path:"save",component:G},{path:":id",component:function(){function e(e,t){this.facade=e,this.route=t}return e.prototype.ngOnInit=function(){this.responseType&&this.facade.requestGetById(this.responseType)},Object.defineProperty(e.prototype,"responseType",{get:function(){return this.route.snapshot.params.id},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"claim$",{get:function(){return this.facade.getById$.pipe(Object(I.a)((function(e){return!!e})))},enumerable:!1,configurable:!0}),e.\u0275fac=function(t){return new(t||e)(c.Ob(L),c.Ob(o.a))},e.\u0275cmp=c.Ib({type:e,selectors:[["app-view-claim"]],decls:3,vars:3,consts:[[1,"view-claim"],["class","card",4,"ngIf"],[1,"card"],[1,"card-header"],[1,"list-group","list-group-flush"],[1,"list-group-item"],[1,"view-claim__title"],[1,"view-claim__value"]],template:function(e,t){1&e&&(c.Tb(0,"div",0),c.zc(1,V,90,71,"div",1),c.ec(2,"async"),c.Sb()),2&e&&(c.Bb(1),c.jc("ngIf",c.fc(2,1,t.claim$)))},directives:[r.l],pipes:[r.b,a.c,$.a,H.a,J.a],styles:[".view-claim[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:row;font-size:15px}.view-claim[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:600px}.view-claim[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;flex-direction:row}.view-claim__title[_ngcontent-%COMP%]{font-weight:700}"],changeDetection:0}),e}()}]}],K=function(){function e(){}return e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({factory:function(t){return new(t||e)},imports:[[o.g.forChild(W)],o.g]}),e}(),Y=n("w1ql"),Z=n("F/XL"),ee=n("15JJ"),te=n("psW0"),ne=n("xMyE"),ce=n("9Z1F"),re=n("AUyT"),ae=n("4Oi7"),ie=n("AytR"),oe=n("cUzu"),le=function(){function e(e){this.http=e}return e.prototype.create=function(e){var t=Object(ae.a)(ie.a.api.claim+"/create");return this.http.post(t,e)},e.prototype.findAll=function(){var e=Object(ae.a)(ie.a.api.claim+"/find");return this.http.get(e)},e.prototype.findById=function(e){var t=Object(ae.a)(ie.a.api.claim+"/find/{id}",{id:e});return this.http.get(t)},e.prototype.filter=function(e){var t=Object(ae.a)(ie.a.api.claim+"/filter/{filter}",{filter:e});return this.http.get(t)},e.\u0275fac=function(t){return new(t||e)(c.Xb(oe.a))},e.\u0275prov=c.Kb({token:e,factory:e.\u0275fac}),e}(),se=n("5msO"),be=function(){function e(e,t,n){var c=this;this.actions$=e,this.service=t,this.snackBar=n,this.getById$=Object(Y.c)((function(){return c.actions$.pipe(Object(Y.d)(s),Object(ee.a)((function(e){return c.service.findById(e.id).pipe(Object(te.a)((function(e){return[b({response:e})]})))})))})),this.getAll$=Object(Y.c)((function(){return c.actions$.pipe(Object(Y.d)(u),Object(ee.a)((function(){return c.service.findAll().pipe(Object(te.a)((function(e){return[p({response:e}),h({isLoading:!1})]})))})))})),this.create$=Object(Y.c)((function(){return c.actions$.pipe(Object(Y.d)(f),Object(ee.a)((function(e){return c.service.create(e.body).pipe(Object(ne.a)((function(){c.snackBar.open("Creaci\xf3n exitosa!",null,{duration:3e3})})),Object(ce.a)((function(e){var t=e.error;return c.snackBar.open("Ocurrio un error en la transacci\xf3n.",null,{duration:3e3}),Object(Z.a)({error:t})})),Object(te.a)((function(e){var t=[re.i({isLoading:!1})];return"error"in e||t.push(d({response:e})),t})))})))})),this.getAllFiltered$=Object(Y.c)((function(){return c.actions$.pipe(Object(Y.d)(m),Object(ee.a)((function(e){return c.service.filter(e.filter).pipe(Object(te.a)((function(e){return[g({response:e}),h({isLoading:!1})]})))})))}))}return e.\u0275fac=function(t){return new(t||e)(c.Xb(Y.a),c.Xb(le),c.Xb(se.a))},e.\u0275prov=c.Kb({token:e,factory:e.\u0275fac}),e}(),ue=n("Wj5c"),pe=n("CMrp"),fe=n("cqX/"),de=new c.q("Claim Reducer"),me=function(){function e(){}return e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({factory:function(t){return new(t||e)},providers:[{provide:de,useValue:T},L,pe.a,le],imports:[[r.c,se.b,i.h,i.n,a.b,K,l.d.forFeature("claim",de),Y.b.forFeature([be]),ue.a,k.d,D.b,fe.a]]}),e}()}}]);
//# sourceMappingURL=6.ec9e854c11e88e6cae79.js.map