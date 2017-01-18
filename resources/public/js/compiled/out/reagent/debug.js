// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__26966__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26966 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26967__i = 0, G__26967__a = new Array(arguments.length -  0);
while (G__26967__i < G__26967__a.length) {G__26967__a[G__26967__i] = arguments[G__26967__i + 0]; ++G__26967__i;}
  args = new cljs.core.IndexedSeq(G__26967__a,0);
} 
return G__26966__delegate.call(this,args);};
G__26966.cljs$lang$maxFixedArity = 0;
G__26966.cljs$lang$applyTo = (function (arglist__26968){
var args = cljs.core.seq(arglist__26968);
return G__26966__delegate(args);
});
G__26966.cljs$core$IFn$_invoke$arity$variadic = G__26966__delegate;
return G__26966;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__26969__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__26969 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26970__i = 0, G__26970__a = new Array(arguments.length -  0);
while (G__26970__i < G__26970__a.length) {G__26970__a[G__26970__i] = arguments[G__26970__i + 0]; ++G__26970__i;}
  args = new cljs.core.IndexedSeq(G__26970__a,0);
} 
return G__26969__delegate.call(this,args);};
G__26969.cljs$lang$maxFixedArity = 0;
G__26969.cljs$lang$applyTo = (function (arglist__26971){
var args = cljs.core.seq(arglist__26971);
return G__26969__delegate(args);
});
G__26969.cljs$core$IFn$_invoke$arity$variadic = G__26969__delegate;
return G__26969;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1484718739422