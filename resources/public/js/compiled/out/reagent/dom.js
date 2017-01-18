// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__24790__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_35735 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_35735){
return (function (){
var _STAR_always_update_STAR_35736 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_35736;
}});})(_STAR_always_update_STAR_35735))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_35735;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args35737 = [];
var len__25865__auto___35740 = arguments.length;
var i__25866__auto___35741 = (0);
while(true){
if((i__25866__auto___35741 < len__25865__auto___35740)){
args35737.push((arguments[i__25866__auto___35741]));

var G__35742 = (i__25866__auto___35741 + (1));
i__25866__auto___35741 = G__35742;
continue;
} else {
}
break;
}

var G__35739 = args35737.length;
switch (G__35739) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35737.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__35748_35752 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__35749_35753 = null;
var count__35750_35754 = (0);
var i__35751_35755 = (0);
while(true){
if((i__35751_35755 < count__35750_35754)){
var v_35756 = cljs.core._nth.call(null,chunk__35749_35753,i__35751_35755);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_35756);

var G__35757 = seq__35748_35752;
var G__35758 = chunk__35749_35753;
var G__35759 = count__35750_35754;
var G__35760 = (i__35751_35755 + (1));
seq__35748_35752 = G__35757;
chunk__35749_35753 = G__35758;
count__35750_35754 = G__35759;
i__35751_35755 = G__35760;
continue;
} else {
var temp__4657__auto___35761 = cljs.core.seq.call(null,seq__35748_35752);
if(temp__4657__auto___35761){
var seq__35748_35762__$1 = temp__4657__auto___35761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35748_35762__$1)){
var c__25601__auto___35763 = cljs.core.chunk_first.call(null,seq__35748_35762__$1);
var G__35764 = cljs.core.chunk_rest.call(null,seq__35748_35762__$1);
var G__35765 = c__25601__auto___35763;
var G__35766 = cljs.core.count.call(null,c__25601__auto___35763);
var G__35767 = (0);
seq__35748_35752 = G__35764;
chunk__35749_35753 = G__35765;
count__35750_35754 = G__35766;
i__35751_35755 = G__35767;
continue;
} else {
var v_35768 = cljs.core.first.call(null,seq__35748_35762__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_35768);

var G__35769 = cljs.core.next.call(null,seq__35748_35762__$1);
var G__35770 = null;
var G__35771 = (0);
var G__35772 = (0);
seq__35748_35752 = G__35769;
chunk__35749_35753 = G__35770;
count__35750_35754 = G__35771;
i__35751_35755 = G__35772;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1484718749202