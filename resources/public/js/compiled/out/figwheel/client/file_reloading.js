// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__24790__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__24790__auto__){
return or__24790__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__24790__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30382_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30382_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30387 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30388 = null;
var count__30389 = (0);
var i__30390 = (0);
while(true){
if((i__30390 < count__30389)){
var n = cljs.core._nth.call(null,chunk__30388,i__30390);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30391 = seq__30387;
var G__30392 = chunk__30388;
var G__30393 = count__30389;
var G__30394 = (i__30390 + (1));
seq__30387 = G__30391;
chunk__30388 = G__30392;
count__30389 = G__30393;
i__30390 = G__30394;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30387);
if(temp__4657__auto__){
var seq__30387__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30387__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__30387__$1);
var G__30395 = cljs.core.chunk_rest.call(null,seq__30387__$1);
var G__30396 = c__25601__auto__;
var G__30397 = cljs.core.count.call(null,c__25601__auto__);
var G__30398 = (0);
seq__30387 = G__30395;
chunk__30388 = G__30396;
count__30389 = G__30397;
i__30390 = G__30398;
continue;
} else {
var n = cljs.core.first.call(null,seq__30387__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30399 = cljs.core.next.call(null,seq__30387__$1);
var G__30400 = null;
var G__30401 = (0);
var G__30402 = (0);
seq__30387 = G__30399;
chunk__30388 = G__30400;
count__30389 = G__30401;
i__30390 = G__30402;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30453_30464 = cljs.core.seq.call(null,deps);
var chunk__30454_30465 = null;
var count__30455_30466 = (0);
var i__30456_30467 = (0);
while(true){
if((i__30456_30467 < count__30455_30466)){
var dep_30468 = cljs.core._nth.call(null,chunk__30454_30465,i__30456_30467);
topo_sort_helper_STAR_.call(null,dep_30468,(depth + (1)),state);

var G__30469 = seq__30453_30464;
var G__30470 = chunk__30454_30465;
var G__30471 = count__30455_30466;
var G__30472 = (i__30456_30467 + (1));
seq__30453_30464 = G__30469;
chunk__30454_30465 = G__30470;
count__30455_30466 = G__30471;
i__30456_30467 = G__30472;
continue;
} else {
var temp__4657__auto___30473 = cljs.core.seq.call(null,seq__30453_30464);
if(temp__4657__auto___30473){
var seq__30453_30474__$1 = temp__4657__auto___30473;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30453_30474__$1)){
var c__25601__auto___30475 = cljs.core.chunk_first.call(null,seq__30453_30474__$1);
var G__30476 = cljs.core.chunk_rest.call(null,seq__30453_30474__$1);
var G__30477 = c__25601__auto___30475;
var G__30478 = cljs.core.count.call(null,c__25601__auto___30475);
var G__30479 = (0);
seq__30453_30464 = G__30476;
chunk__30454_30465 = G__30477;
count__30455_30466 = G__30478;
i__30456_30467 = G__30479;
continue;
} else {
var dep_30480 = cljs.core.first.call(null,seq__30453_30474__$1);
topo_sort_helper_STAR_.call(null,dep_30480,(depth + (1)),state);

var G__30481 = cljs.core.next.call(null,seq__30453_30474__$1);
var G__30482 = null;
var G__30483 = (0);
var G__30484 = (0);
seq__30453_30464 = G__30481;
chunk__30454_30465 = G__30482;
count__30455_30466 = G__30483;
i__30456_30467 = G__30484;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30457){
var vec__30461 = p__30457;
var seq__30462 = cljs.core.seq.call(null,vec__30461);
var first__30463 = cljs.core.first.call(null,seq__30462);
var seq__30462__$1 = cljs.core.next.call(null,seq__30462);
var x = first__30463;
var xs = seq__30462__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30461,seq__30462,first__30463,seq__30462__$1,x,xs,get_deps__$1){
return (function (p1__30403_SHARP_){
return clojure.set.difference.call(null,p1__30403_SHARP_,x);
});})(vec__30461,seq__30462,first__30463,seq__30462__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30497 = cljs.core.seq.call(null,provides);
var chunk__30498 = null;
var count__30499 = (0);
var i__30500 = (0);
while(true){
if((i__30500 < count__30499)){
var prov = cljs.core._nth.call(null,chunk__30498,i__30500);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30501_30509 = cljs.core.seq.call(null,requires);
var chunk__30502_30510 = null;
var count__30503_30511 = (0);
var i__30504_30512 = (0);
while(true){
if((i__30504_30512 < count__30503_30511)){
var req_30513 = cljs.core._nth.call(null,chunk__30502_30510,i__30504_30512);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30513,prov);

var G__30514 = seq__30501_30509;
var G__30515 = chunk__30502_30510;
var G__30516 = count__30503_30511;
var G__30517 = (i__30504_30512 + (1));
seq__30501_30509 = G__30514;
chunk__30502_30510 = G__30515;
count__30503_30511 = G__30516;
i__30504_30512 = G__30517;
continue;
} else {
var temp__4657__auto___30518 = cljs.core.seq.call(null,seq__30501_30509);
if(temp__4657__auto___30518){
var seq__30501_30519__$1 = temp__4657__auto___30518;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30501_30519__$1)){
var c__25601__auto___30520 = cljs.core.chunk_first.call(null,seq__30501_30519__$1);
var G__30521 = cljs.core.chunk_rest.call(null,seq__30501_30519__$1);
var G__30522 = c__25601__auto___30520;
var G__30523 = cljs.core.count.call(null,c__25601__auto___30520);
var G__30524 = (0);
seq__30501_30509 = G__30521;
chunk__30502_30510 = G__30522;
count__30503_30511 = G__30523;
i__30504_30512 = G__30524;
continue;
} else {
var req_30525 = cljs.core.first.call(null,seq__30501_30519__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30525,prov);

var G__30526 = cljs.core.next.call(null,seq__30501_30519__$1);
var G__30527 = null;
var G__30528 = (0);
var G__30529 = (0);
seq__30501_30509 = G__30526;
chunk__30502_30510 = G__30527;
count__30503_30511 = G__30528;
i__30504_30512 = G__30529;
continue;
}
} else {
}
}
break;
}

var G__30530 = seq__30497;
var G__30531 = chunk__30498;
var G__30532 = count__30499;
var G__30533 = (i__30500 + (1));
seq__30497 = G__30530;
chunk__30498 = G__30531;
count__30499 = G__30532;
i__30500 = G__30533;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30497);
if(temp__4657__auto__){
var seq__30497__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30497__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__30497__$1);
var G__30534 = cljs.core.chunk_rest.call(null,seq__30497__$1);
var G__30535 = c__25601__auto__;
var G__30536 = cljs.core.count.call(null,c__25601__auto__);
var G__30537 = (0);
seq__30497 = G__30534;
chunk__30498 = G__30535;
count__30499 = G__30536;
i__30500 = G__30537;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30497__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30505_30538 = cljs.core.seq.call(null,requires);
var chunk__30506_30539 = null;
var count__30507_30540 = (0);
var i__30508_30541 = (0);
while(true){
if((i__30508_30541 < count__30507_30540)){
var req_30542 = cljs.core._nth.call(null,chunk__30506_30539,i__30508_30541);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30542,prov);

var G__30543 = seq__30505_30538;
var G__30544 = chunk__30506_30539;
var G__30545 = count__30507_30540;
var G__30546 = (i__30508_30541 + (1));
seq__30505_30538 = G__30543;
chunk__30506_30539 = G__30544;
count__30507_30540 = G__30545;
i__30508_30541 = G__30546;
continue;
} else {
var temp__4657__auto___30547__$1 = cljs.core.seq.call(null,seq__30505_30538);
if(temp__4657__auto___30547__$1){
var seq__30505_30548__$1 = temp__4657__auto___30547__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30505_30548__$1)){
var c__25601__auto___30549 = cljs.core.chunk_first.call(null,seq__30505_30548__$1);
var G__30550 = cljs.core.chunk_rest.call(null,seq__30505_30548__$1);
var G__30551 = c__25601__auto___30549;
var G__30552 = cljs.core.count.call(null,c__25601__auto___30549);
var G__30553 = (0);
seq__30505_30538 = G__30550;
chunk__30506_30539 = G__30551;
count__30507_30540 = G__30552;
i__30508_30541 = G__30553;
continue;
} else {
var req_30554 = cljs.core.first.call(null,seq__30505_30548__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30554,prov);

var G__30555 = cljs.core.next.call(null,seq__30505_30548__$1);
var G__30556 = null;
var G__30557 = (0);
var G__30558 = (0);
seq__30505_30538 = G__30555;
chunk__30506_30539 = G__30556;
count__30507_30540 = G__30557;
i__30508_30541 = G__30558;
continue;
}
} else {
}
}
break;
}

var G__30559 = cljs.core.next.call(null,seq__30497__$1);
var G__30560 = null;
var G__30561 = (0);
var G__30562 = (0);
seq__30497 = G__30559;
chunk__30498 = G__30560;
count__30499 = G__30561;
i__30500 = G__30562;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30567_30571 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30568_30572 = null;
var count__30569_30573 = (0);
var i__30570_30574 = (0);
while(true){
if((i__30570_30574 < count__30569_30573)){
var ns_30575 = cljs.core._nth.call(null,chunk__30568_30572,i__30570_30574);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30575);

var G__30576 = seq__30567_30571;
var G__30577 = chunk__30568_30572;
var G__30578 = count__30569_30573;
var G__30579 = (i__30570_30574 + (1));
seq__30567_30571 = G__30576;
chunk__30568_30572 = G__30577;
count__30569_30573 = G__30578;
i__30570_30574 = G__30579;
continue;
} else {
var temp__4657__auto___30580 = cljs.core.seq.call(null,seq__30567_30571);
if(temp__4657__auto___30580){
var seq__30567_30581__$1 = temp__4657__auto___30580;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30567_30581__$1)){
var c__25601__auto___30582 = cljs.core.chunk_first.call(null,seq__30567_30581__$1);
var G__30583 = cljs.core.chunk_rest.call(null,seq__30567_30581__$1);
var G__30584 = c__25601__auto___30582;
var G__30585 = cljs.core.count.call(null,c__25601__auto___30582);
var G__30586 = (0);
seq__30567_30571 = G__30583;
chunk__30568_30572 = G__30584;
count__30569_30573 = G__30585;
i__30570_30574 = G__30586;
continue;
} else {
var ns_30587 = cljs.core.first.call(null,seq__30567_30581__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30587);

var G__30588 = cljs.core.next.call(null,seq__30567_30581__$1);
var G__30589 = null;
var G__30590 = (0);
var G__30591 = (0);
seq__30567_30571 = G__30588;
chunk__30568_30572 = G__30589;
count__30569_30573 = G__30590;
i__30570_30574 = G__30591;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__24790__auto__ = goog.require__;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30592__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30592 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30593__i = 0, G__30593__a = new Array(arguments.length -  0);
while (G__30593__i < G__30593__a.length) {G__30593__a[G__30593__i] = arguments[G__30593__i + 0]; ++G__30593__i;}
  args = new cljs.core.IndexedSeq(G__30593__a,0);
} 
return G__30592__delegate.call(this,args);};
G__30592.cljs$lang$maxFixedArity = 0;
G__30592.cljs$lang$applyTo = (function (arglist__30594){
var args = cljs.core.seq(arglist__30594);
return G__30592__delegate(args);
});
G__30592.cljs$core$IFn$_invoke$arity$variadic = G__30592__delegate;
return G__30592;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30596 = cljs.core._EQ_;
var expr__30597 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30596.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30597))){
var path_parts = ((function (pred__30596,expr__30597){
return (function (p1__30595_SHARP_){
return clojure.string.split.call(null,p1__30595_SHARP_,/[\/\\]/);
});})(pred__30596,expr__30597))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30596,expr__30597){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30599){if((e30599 instanceof Error)){
var e = e30599;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30599;

}
}})());
});
;})(path_parts,sep,root,pred__30596,expr__30597))
} else {
if(cljs.core.truth_(pred__30596.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30597))){
return ((function (pred__30596,expr__30597){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__30596,expr__30597){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30596,expr__30597))
);

return deferred.addErrback(((function (deferred,pred__30596,expr__30597){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30596,expr__30597))
);
});
;})(pred__30596,expr__30597))
} else {
return ((function (pred__30596,expr__30597){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30596,expr__30597))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30600,callback){
var map__30603 = p__30600;
var map__30603__$1 = ((((!((map__30603 == null)))?((((map__30603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30603):map__30603);
var file_msg = map__30603__$1;
var request_url = cljs.core.get.call(null,map__30603__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30603,map__30603__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30603,map__30603__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27527__auto__){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (c__27527__auto__){
return (function (state_30627){
var state_val_30628 = (state_30627[(1)]);
if((state_val_30628 === (7))){
var inst_30623 = (state_30627[(2)]);
var state_30627__$1 = state_30627;
var statearr_30629_30649 = state_30627__$1;
(statearr_30629_30649[(2)] = inst_30623);

(statearr_30629_30649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30628 === (1))){
var state_30627__$1 = state_30627;
var statearr_30630_30650 = state_30627__$1;
(statearr_30630_30650[(2)] = null);

(statearr_30630_30650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30628 === (4))){
var inst_30607 = (state_30627[(7)]);
var inst_30607__$1 = (state_30627[(2)]);
var state_30627__$1 = (function (){var statearr_30631 = state_30627;
(statearr_30631[(7)] = inst_30607__$1);

return statearr_30631;
})();
if(cljs.core.truth_(inst_30607__$1)){
var statearr_30632_30651 = state_30627__$1;
(statearr_30632_30651[(1)] = (5));

} else {
var statearr_30633_30652 = state_30627__$1;
(statearr_30633_30652[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30628 === (6))){
var state_30627__$1 = state_30627;
var statearr_30634_30653 = state_30627__$1;
(statearr_30634_30653[(2)] = null);

(statearr_30634_30653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30628 === (3))){
var inst_30625 = (state_30627[(2)]);
var state_30627__$1 = state_30627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30627__$1,inst_30625);
} else {
if((state_val_30628 === (2))){
var state_30627__$1 = state_30627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30627__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30628 === (11))){
var inst_30619 = (state_30627[(2)]);
var state_30627__$1 = (function (){var statearr_30635 = state_30627;
(statearr_30635[(8)] = inst_30619);

return statearr_30635;
})();
var statearr_30636_30654 = state_30627__$1;
(statearr_30636_30654[(2)] = null);

(statearr_30636_30654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30628 === (9))){
var inst_30613 = (state_30627[(9)]);
var inst_30611 = (state_30627[(10)]);
var inst_30615 = inst_30613.call(null,inst_30611);
var state_30627__$1 = state_30627;
var statearr_30637_30655 = state_30627__$1;
(statearr_30637_30655[(2)] = inst_30615);

(statearr_30637_30655[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30628 === (5))){
var inst_30607 = (state_30627[(7)]);
var inst_30609 = figwheel.client.file_reloading.blocking_load.call(null,inst_30607);
var state_30627__$1 = state_30627;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30627__$1,(8),inst_30609);
} else {
if((state_val_30628 === (10))){
var inst_30611 = (state_30627[(10)]);
var inst_30617 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30611);
var state_30627__$1 = state_30627;
var statearr_30638_30656 = state_30627__$1;
(statearr_30638_30656[(2)] = inst_30617);

(statearr_30638_30656[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30628 === (8))){
var inst_30613 = (state_30627[(9)]);
var inst_30607 = (state_30627[(7)]);
var inst_30611 = (state_30627[(2)]);
var inst_30612 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30613__$1 = cljs.core.get.call(null,inst_30612,inst_30607);
var state_30627__$1 = (function (){var statearr_30639 = state_30627;
(statearr_30639[(9)] = inst_30613__$1);

(statearr_30639[(10)] = inst_30611);

return statearr_30639;
})();
if(cljs.core.truth_(inst_30613__$1)){
var statearr_30640_30657 = state_30627__$1;
(statearr_30640_30657[(1)] = (9));

} else {
var statearr_30641_30658 = state_30627__$1;
(statearr_30641_30658[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__27527__auto__))
;
return ((function (switch__26808__auto__,c__27527__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26809__auto__ = null;
var figwheel$client$file_reloading$state_machine__26809__auto____0 = (function (){
var statearr_30645 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30645[(0)] = figwheel$client$file_reloading$state_machine__26809__auto__);

(statearr_30645[(1)] = (1));

return statearr_30645;
});
var figwheel$client$file_reloading$state_machine__26809__auto____1 = (function (state_30627){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_30627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e30646){if((e30646 instanceof Object)){
var ex__26812__auto__ = e30646;
var statearr_30647_30659 = state_30627;
(statearr_30647_30659[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30660 = state_30627;
state_30627 = G__30660;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26809__auto__ = function(state_30627){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26809__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26809__auto____1.call(this,state_30627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26809__auto____0;
figwheel$client$file_reloading$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26809__auto____1;
return figwheel$client$file_reloading$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__27527__auto__))
})();
var state__27529__auto__ = (function (){var statearr_30648 = f__27528__auto__.call(null);
(statearr_30648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto__);

return statearr_30648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(c__27527__auto__))
);

return c__27527__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30661,callback){
var map__30664 = p__30661;
var map__30664__$1 = ((((!((map__30664 == null)))?((((map__30664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30664):map__30664);
var file_msg = map__30664__$1;
var namespace = cljs.core.get.call(null,map__30664__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30664,map__30664__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30664,map__30664__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30666){
var map__30669 = p__30666;
var map__30669__$1 = ((((!((map__30669 == null)))?((((map__30669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30669):map__30669);
var file_msg = map__30669__$1;
var namespace = cljs.core.get.call(null,map__30669__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__24778__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__24778__auto__){
var or__24790__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
var or__24790__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__24790__auto____$1)){
return or__24790__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__24778__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30671,callback){
var map__30674 = p__30671;
var map__30674__$1 = ((((!((map__30674 == null)))?((((map__30674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30674):map__30674);
var file_msg = map__30674__$1;
var request_url = cljs.core.get.call(null,map__30674__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30674__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27527__auto___30778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27527__auto___30778,out){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (c__27527__auto___30778,out){
return (function (state_30760){
var state_val_30761 = (state_30760[(1)]);
if((state_val_30761 === (1))){
var inst_30734 = cljs.core.seq.call(null,files);
var inst_30735 = cljs.core.first.call(null,inst_30734);
var inst_30736 = cljs.core.next.call(null,inst_30734);
var inst_30737 = files;
var state_30760__$1 = (function (){var statearr_30762 = state_30760;
(statearr_30762[(7)] = inst_30735);

(statearr_30762[(8)] = inst_30737);

(statearr_30762[(9)] = inst_30736);

return statearr_30762;
})();
var statearr_30763_30779 = state_30760__$1;
(statearr_30763_30779[(2)] = null);

(statearr_30763_30779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (2))){
var inst_30743 = (state_30760[(10)]);
var inst_30737 = (state_30760[(8)]);
var inst_30742 = cljs.core.seq.call(null,inst_30737);
var inst_30743__$1 = cljs.core.first.call(null,inst_30742);
var inst_30744 = cljs.core.next.call(null,inst_30742);
var inst_30745 = (inst_30743__$1 == null);
var inst_30746 = cljs.core.not.call(null,inst_30745);
var state_30760__$1 = (function (){var statearr_30764 = state_30760;
(statearr_30764[(10)] = inst_30743__$1);

(statearr_30764[(11)] = inst_30744);

return statearr_30764;
})();
if(inst_30746){
var statearr_30765_30780 = state_30760__$1;
(statearr_30765_30780[(1)] = (4));

} else {
var statearr_30766_30781 = state_30760__$1;
(statearr_30766_30781[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (3))){
var inst_30758 = (state_30760[(2)]);
var state_30760__$1 = state_30760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30760__$1,inst_30758);
} else {
if((state_val_30761 === (4))){
var inst_30743 = (state_30760[(10)]);
var inst_30748 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30743);
var state_30760__$1 = state_30760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30760__$1,(7),inst_30748);
} else {
if((state_val_30761 === (5))){
var inst_30754 = cljs.core.async.close_BANG_.call(null,out);
var state_30760__$1 = state_30760;
var statearr_30767_30782 = state_30760__$1;
(statearr_30767_30782[(2)] = inst_30754);

(statearr_30767_30782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (6))){
var inst_30756 = (state_30760[(2)]);
var state_30760__$1 = state_30760;
var statearr_30768_30783 = state_30760__$1;
(statearr_30768_30783[(2)] = inst_30756);

(statearr_30768_30783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30761 === (7))){
var inst_30744 = (state_30760[(11)]);
var inst_30750 = (state_30760[(2)]);
var inst_30751 = cljs.core.async.put_BANG_.call(null,out,inst_30750);
var inst_30737 = inst_30744;
var state_30760__$1 = (function (){var statearr_30769 = state_30760;
(statearr_30769[(8)] = inst_30737);

(statearr_30769[(12)] = inst_30751);

return statearr_30769;
})();
var statearr_30770_30784 = state_30760__$1;
(statearr_30770_30784[(2)] = null);

(statearr_30770_30784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__27527__auto___30778,out))
;
return ((function (switch__26808__auto__,c__27527__auto___30778,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26809__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26809__auto____0 = (function (){
var statearr_30774 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30774[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26809__auto__);

(statearr_30774[(1)] = (1));

return statearr_30774;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26809__auto____1 = (function (state_30760){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_30760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e30775){if((e30775 instanceof Object)){
var ex__26812__auto__ = e30775;
var statearr_30776_30785 = state_30760;
(statearr_30776_30785[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30786 = state_30760;
state_30760 = G__30786;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26809__auto__ = function(state_30760){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26809__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26809__auto____1.call(this,state_30760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26809__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26809__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__27527__auto___30778,out))
})();
var state__27529__auto__ = (function (){var statearr_30777 = f__27528__auto__.call(null);
(statearr_30777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto___30778);

return statearr_30777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(c__27527__auto___30778,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30787,opts){
var map__30791 = p__30787;
var map__30791__$1 = ((((!((map__30791 == null)))?((((map__30791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30791):map__30791);
var eval_body__$1 = cljs.core.get.call(null,map__30791__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30791__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__24778__auto__ = eval_body__$1;
if(cljs.core.truth_(and__24778__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__24778__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30793){var e = e30793;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30794_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30794_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30803){
var vec__30804 = p__30803;
var k = cljs.core.nth.call(null,vec__30804,(0),null);
var v = cljs.core.nth.call(null,vec__30804,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30807){
var vec__30808 = p__30807;
var k = cljs.core.nth.call(null,vec__30808,(0),null);
var v = cljs.core.nth.call(null,vec__30808,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30814,p__30815){
var map__31062 = p__30814;
var map__31062__$1 = ((((!((map__31062 == null)))?((((map__31062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31062):map__31062);
var opts = map__31062__$1;
var before_jsload = cljs.core.get.call(null,map__31062__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31062__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31062__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31063 = p__30815;
var map__31063__$1 = ((((!((map__31063 == null)))?((((map__31063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31063):map__31063);
var msg = map__31063__$1;
var files = cljs.core.get.call(null,map__31063__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31063__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31063__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27527__auto__,map__31062,map__31062__$1,opts,before_jsload,on_jsload,reload_dependents,map__31063,map__31063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (c__27527__auto__,map__31062,map__31062__$1,opts,before_jsload,on_jsload,reload_dependents,map__31063,map__31063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31216){
var state_val_31217 = (state_31216[(1)]);
if((state_val_31217 === (7))){
var inst_31078 = (state_31216[(7)]);
var inst_31079 = (state_31216[(8)]);
var inst_31077 = (state_31216[(9)]);
var inst_31080 = (state_31216[(10)]);
var inst_31085 = cljs.core._nth.call(null,inst_31078,inst_31080);
var inst_31086 = figwheel.client.file_reloading.eval_body.call(null,inst_31085,opts);
var inst_31087 = (inst_31080 + (1));
var tmp31218 = inst_31078;
var tmp31219 = inst_31079;
var tmp31220 = inst_31077;
var inst_31077__$1 = tmp31220;
var inst_31078__$1 = tmp31218;
var inst_31079__$1 = tmp31219;
var inst_31080__$1 = inst_31087;
var state_31216__$1 = (function (){var statearr_31221 = state_31216;
(statearr_31221[(7)] = inst_31078__$1);

(statearr_31221[(11)] = inst_31086);

(statearr_31221[(8)] = inst_31079__$1);

(statearr_31221[(9)] = inst_31077__$1);

(statearr_31221[(10)] = inst_31080__$1);

return statearr_31221;
})();
var statearr_31222_31308 = state_31216__$1;
(statearr_31222_31308[(2)] = null);

(statearr_31222_31308[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (20))){
var inst_31120 = (state_31216[(12)]);
var inst_31128 = figwheel.client.file_reloading.sort_files.call(null,inst_31120);
var state_31216__$1 = state_31216;
var statearr_31223_31309 = state_31216__$1;
(statearr_31223_31309[(2)] = inst_31128);

(statearr_31223_31309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (27))){
var state_31216__$1 = state_31216;
var statearr_31224_31310 = state_31216__$1;
(statearr_31224_31310[(2)] = null);

(statearr_31224_31310[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (1))){
var inst_31069 = (state_31216[(13)]);
var inst_31066 = before_jsload.call(null,files);
var inst_31067 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31068 = (function (){return ((function (inst_31069,inst_31066,inst_31067,state_val_31217,c__27527__auto__,map__31062,map__31062__$1,opts,before_jsload,on_jsload,reload_dependents,map__31063,map__31063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30811_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30811_SHARP_);
});
;})(inst_31069,inst_31066,inst_31067,state_val_31217,c__27527__auto__,map__31062,map__31062__$1,opts,before_jsload,on_jsload,reload_dependents,map__31063,map__31063__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31069__$1 = cljs.core.filter.call(null,inst_31068,files);
var inst_31070 = cljs.core.not_empty.call(null,inst_31069__$1);
var state_31216__$1 = (function (){var statearr_31225 = state_31216;
(statearr_31225[(14)] = inst_31066);

(statearr_31225[(13)] = inst_31069__$1);

(statearr_31225[(15)] = inst_31067);

return statearr_31225;
})();
if(cljs.core.truth_(inst_31070)){
var statearr_31226_31311 = state_31216__$1;
(statearr_31226_31311[(1)] = (2));

} else {
var statearr_31227_31312 = state_31216__$1;
(statearr_31227_31312[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (24))){
var state_31216__$1 = state_31216;
var statearr_31228_31313 = state_31216__$1;
(statearr_31228_31313[(2)] = null);

(statearr_31228_31313[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (39))){
var inst_31170 = (state_31216[(16)]);
var state_31216__$1 = state_31216;
var statearr_31229_31314 = state_31216__$1;
(statearr_31229_31314[(2)] = inst_31170);

(statearr_31229_31314[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (46))){
var inst_31211 = (state_31216[(2)]);
var state_31216__$1 = state_31216;
var statearr_31230_31315 = state_31216__$1;
(statearr_31230_31315[(2)] = inst_31211);

(statearr_31230_31315[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (4))){
var inst_31114 = (state_31216[(2)]);
var inst_31115 = cljs.core.List.EMPTY;
var inst_31116 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31115);
var inst_31117 = (function (){return ((function (inst_31114,inst_31115,inst_31116,state_val_31217,c__27527__auto__,map__31062,map__31062__$1,opts,before_jsload,on_jsload,reload_dependents,map__31063,map__31063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30812_SHARP_){
var and__24778__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30812_SHARP_);
if(cljs.core.truth_(and__24778__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30812_SHARP_));
} else {
return and__24778__auto__;
}
});
;})(inst_31114,inst_31115,inst_31116,state_val_31217,c__27527__auto__,map__31062,map__31062__$1,opts,before_jsload,on_jsload,reload_dependents,map__31063,map__31063__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31118 = cljs.core.filter.call(null,inst_31117,files);
var inst_31119 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31120 = cljs.core.concat.call(null,inst_31118,inst_31119);
var state_31216__$1 = (function (){var statearr_31231 = state_31216;
(statearr_31231[(17)] = inst_31116);

(statearr_31231[(18)] = inst_31114);

(statearr_31231[(12)] = inst_31120);

return statearr_31231;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31232_31316 = state_31216__$1;
(statearr_31232_31316[(1)] = (16));

} else {
var statearr_31233_31317 = state_31216__$1;
(statearr_31233_31317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (15))){
var inst_31104 = (state_31216[(2)]);
var state_31216__$1 = state_31216;
var statearr_31234_31318 = state_31216__$1;
(statearr_31234_31318[(2)] = inst_31104);

(statearr_31234_31318[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (21))){
var inst_31130 = (state_31216[(19)]);
var inst_31130__$1 = (state_31216[(2)]);
var inst_31131 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31130__$1);
var state_31216__$1 = (function (){var statearr_31235 = state_31216;
(statearr_31235[(19)] = inst_31130__$1);

return statearr_31235;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31216__$1,(22),inst_31131);
} else {
if((state_val_31217 === (31))){
var inst_31214 = (state_31216[(2)]);
var state_31216__$1 = state_31216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31216__$1,inst_31214);
} else {
if((state_val_31217 === (32))){
var inst_31170 = (state_31216[(16)]);
var inst_31175 = inst_31170.cljs$lang$protocol_mask$partition0$;
var inst_31176 = (inst_31175 & (64));
var inst_31177 = inst_31170.cljs$core$ISeq$;
var inst_31178 = (inst_31176) || (inst_31177);
var state_31216__$1 = state_31216;
if(cljs.core.truth_(inst_31178)){
var statearr_31236_31319 = state_31216__$1;
(statearr_31236_31319[(1)] = (35));

} else {
var statearr_31237_31320 = state_31216__$1;
(statearr_31237_31320[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (40))){
var inst_31191 = (state_31216[(20)]);
var inst_31190 = (state_31216[(2)]);
var inst_31191__$1 = cljs.core.get.call(null,inst_31190,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31192 = cljs.core.get.call(null,inst_31190,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31193 = cljs.core.not_empty.call(null,inst_31191__$1);
var state_31216__$1 = (function (){var statearr_31238 = state_31216;
(statearr_31238[(21)] = inst_31192);

(statearr_31238[(20)] = inst_31191__$1);

return statearr_31238;
})();
if(cljs.core.truth_(inst_31193)){
var statearr_31239_31321 = state_31216__$1;
(statearr_31239_31321[(1)] = (41));

} else {
var statearr_31240_31322 = state_31216__$1;
(statearr_31240_31322[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (33))){
var state_31216__$1 = state_31216;
var statearr_31241_31323 = state_31216__$1;
(statearr_31241_31323[(2)] = false);

(statearr_31241_31323[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (13))){
var inst_31090 = (state_31216[(22)]);
var inst_31094 = cljs.core.chunk_first.call(null,inst_31090);
var inst_31095 = cljs.core.chunk_rest.call(null,inst_31090);
var inst_31096 = cljs.core.count.call(null,inst_31094);
var inst_31077 = inst_31095;
var inst_31078 = inst_31094;
var inst_31079 = inst_31096;
var inst_31080 = (0);
var state_31216__$1 = (function (){var statearr_31242 = state_31216;
(statearr_31242[(7)] = inst_31078);

(statearr_31242[(8)] = inst_31079);

(statearr_31242[(9)] = inst_31077);

(statearr_31242[(10)] = inst_31080);

return statearr_31242;
})();
var statearr_31243_31324 = state_31216__$1;
(statearr_31243_31324[(2)] = null);

(statearr_31243_31324[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (22))){
var inst_31133 = (state_31216[(23)]);
var inst_31130 = (state_31216[(19)]);
var inst_31134 = (state_31216[(24)]);
var inst_31138 = (state_31216[(25)]);
var inst_31133__$1 = (state_31216[(2)]);
var inst_31134__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31133__$1);
var inst_31135 = (function (){var all_files = inst_31130;
var res_SINGLEQUOTE_ = inst_31133__$1;
var res = inst_31134__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31133,inst_31130,inst_31134,inst_31138,inst_31133__$1,inst_31134__$1,state_val_31217,c__27527__auto__,map__31062,map__31062__$1,opts,before_jsload,on_jsload,reload_dependents,map__31063,map__31063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30813_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30813_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31133,inst_31130,inst_31134,inst_31138,inst_31133__$1,inst_31134__$1,state_val_31217,c__27527__auto__,map__31062,map__31062__$1,opts,before_jsload,on_jsload,reload_dependents,map__31063,map__31063__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31136 = cljs.core.filter.call(null,inst_31135,inst_31133__$1);
var inst_31137 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31138__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31137);
var inst_31139 = cljs.core.not_empty.call(null,inst_31138__$1);
var state_31216__$1 = (function (){var statearr_31244 = state_31216;
(statearr_31244[(23)] = inst_31133__$1);

(statearr_31244[(26)] = inst_31136);

(statearr_31244[(24)] = inst_31134__$1);

(statearr_31244[(25)] = inst_31138__$1);

return statearr_31244;
})();
if(cljs.core.truth_(inst_31139)){
var statearr_31245_31325 = state_31216__$1;
(statearr_31245_31325[(1)] = (23));

} else {
var statearr_31246_31326 = state_31216__$1;
(statearr_31246_31326[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (36))){
var state_31216__$1 = state_31216;
var statearr_31247_31327 = state_31216__$1;
(statearr_31247_31327[(2)] = false);

(statearr_31247_31327[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (41))){
var inst_31191 = (state_31216[(20)]);
var inst_31195 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31196 = cljs.core.map.call(null,inst_31195,inst_31191);
var inst_31197 = cljs.core.pr_str.call(null,inst_31196);
var inst_31198 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31197)].join('');
var inst_31199 = figwheel.client.utils.log.call(null,inst_31198);
var state_31216__$1 = state_31216;
var statearr_31248_31328 = state_31216__$1;
(statearr_31248_31328[(2)] = inst_31199);

(statearr_31248_31328[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (43))){
var inst_31192 = (state_31216[(21)]);
var inst_31202 = (state_31216[(2)]);
var inst_31203 = cljs.core.not_empty.call(null,inst_31192);
var state_31216__$1 = (function (){var statearr_31249 = state_31216;
(statearr_31249[(27)] = inst_31202);

return statearr_31249;
})();
if(cljs.core.truth_(inst_31203)){
var statearr_31250_31329 = state_31216__$1;
(statearr_31250_31329[(1)] = (44));

} else {
var statearr_31251_31330 = state_31216__$1;
(statearr_31251_31330[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (29))){
var inst_31133 = (state_31216[(23)]);
var inst_31136 = (state_31216[(26)]);
var inst_31130 = (state_31216[(19)]);
var inst_31134 = (state_31216[(24)]);
var inst_31138 = (state_31216[(25)]);
var inst_31170 = (state_31216[(16)]);
var inst_31166 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31169 = (function (){var all_files = inst_31130;
var res_SINGLEQUOTE_ = inst_31133;
var res = inst_31134;
var files_not_loaded = inst_31136;
var dependencies_that_loaded = inst_31138;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31133,inst_31136,inst_31130,inst_31134,inst_31138,inst_31170,inst_31166,state_val_31217,c__27527__auto__,map__31062,map__31062__$1,opts,before_jsload,on_jsload,reload_dependents,map__31063,map__31063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31168){
var map__31252 = p__31168;
var map__31252__$1 = ((((!((map__31252 == null)))?((((map__31252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31252):map__31252);
var namespace = cljs.core.get.call(null,map__31252__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31133,inst_31136,inst_31130,inst_31134,inst_31138,inst_31170,inst_31166,state_val_31217,c__27527__auto__,map__31062,map__31062__$1,opts,before_jsload,on_jsload,reload_dependents,map__31063,map__31063__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31170__$1 = cljs.core.group_by.call(null,inst_31169,inst_31136);
var inst_31172 = (inst_31170__$1 == null);
var inst_31173 = cljs.core.not.call(null,inst_31172);
var state_31216__$1 = (function (){var statearr_31254 = state_31216;
(statearr_31254[(28)] = inst_31166);

(statearr_31254[(16)] = inst_31170__$1);

return statearr_31254;
})();
if(inst_31173){
var statearr_31255_31331 = state_31216__$1;
(statearr_31255_31331[(1)] = (32));

} else {
var statearr_31256_31332 = state_31216__$1;
(statearr_31256_31332[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (44))){
var inst_31192 = (state_31216[(21)]);
var inst_31205 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31192);
var inst_31206 = cljs.core.pr_str.call(null,inst_31205);
var inst_31207 = [cljs.core.str("not required: "),cljs.core.str(inst_31206)].join('');
var inst_31208 = figwheel.client.utils.log.call(null,inst_31207);
var state_31216__$1 = state_31216;
var statearr_31257_31333 = state_31216__$1;
(statearr_31257_31333[(2)] = inst_31208);

(statearr_31257_31333[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (6))){
var inst_31111 = (state_31216[(2)]);
var state_31216__$1 = state_31216;
var statearr_31258_31334 = state_31216__$1;
(statearr_31258_31334[(2)] = inst_31111);

(statearr_31258_31334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (28))){
var inst_31136 = (state_31216[(26)]);
var inst_31163 = (state_31216[(2)]);
var inst_31164 = cljs.core.not_empty.call(null,inst_31136);
var state_31216__$1 = (function (){var statearr_31259 = state_31216;
(statearr_31259[(29)] = inst_31163);

return statearr_31259;
})();
if(cljs.core.truth_(inst_31164)){
var statearr_31260_31335 = state_31216__$1;
(statearr_31260_31335[(1)] = (29));

} else {
var statearr_31261_31336 = state_31216__$1;
(statearr_31261_31336[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (25))){
var inst_31134 = (state_31216[(24)]);
var inst_31150 = (state_31216[(2)]);
var inst_31151 = cljs.core.not_empty.call(null,inst_31134);
var state_31216__$1 = (function (){var statearr_31262 = state_31216;
(statearr_31262[(30)] = inst_31150);

return statearr_31262;
})();
if(cljs.core.truth_(inst_31151)){
var statearr_31263_31337 = state_31216__$1;
(statearr_31263_31337[(1)] = (26));

} else {
var statearr_31264_31338 = state_31216__$1;
(statearr_31264_31338[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (34))){
var inst_31185 = (state_31216[(2)]);
var state_31216__$1 = state_31216;
if(cljs.core.truth_(inst_31185)){
var statearr_31265_31339 = state_31216__$1;
(statearr_31265_31339[(1)] = (38));

} else {
var statearr_31266_31340 = state_31216__$1;
(statearr_31266_31340[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (17))){
var state_31216__$1 = state_31216;
var statearr_31267_31341 = state_31216__$1;
(statearr_31267_31341[(2)] = recompile_dependents);

(statearr_31267_31341[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (3))){
var state_31216__$1 = state_31216;
var statearr_31268_31342 = state_31216__$1;
(statearr_31268_31342[(2)] = null);

(statearr_31268_31342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (12))){
var inst_31107 = (state_31216[(2)]);
var state_31216__$1 = state_31216;
var statearr_31269_31343 = state_31216__$1;
(statearr_31269_31343[(2)] = inst_31107);

(statearr_31269_31343[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (2))){
var inst_31069 = (state_31216[(13)]);
var inst_31076 = cljs.core.seq.call(null,inst_31069);
var inst_31077 = inst_31076;
var inst_31078 = null;
var inst_31079 = (0);
var inst_31080 = (0);
var state_31216__$1 = (function (){var statearr_31270 = state_31216;
(statearr_31270[(7)] = inst_31078);

(statearr_31270[(8)] = inst_31079);

(statearr_31270[(9)] = inst_31077);

(statearr_31270[(10)] = inst_31080);

return statearr_31270;
})();
var statearr_31271_31344 = state_31216__$1;
(statearr_31271_31344[(2)] = null);

(statearr_31271_31344[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (23))){
var inst_31133 = (state_31216[(23)]);
var inst_31136 = (state_31216[(26)]);
var inst_31130 = (state_31216[(19)]);
var inst_31134 = (state_31216[(24)]);
var inst_31138 = (state_31216[(25)]);
var inst_31141 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31143 = (function (){var all_files = inst_31130;
var res_SINGLEQUOTE_ = inst_31133;
var res = inst_31134;
var files_not_loaded = inst_31136;
var dependencies_that_loaded = inst_31138;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31133,inst_31136,inst_31130,inst_31134,inst_31138,inst_31141,state_val_31217,c__27527__auto__,map__31062,map__31062__$1,opts,before_jsload,on_jsload,reload_dependents,map__31063,map__31063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31142){
var map__31272 = p__31142;
var map__31272__$1 = ((((!((map__31272 == null)))?((((map__31272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31272):map__31272);
var request_url = cljs.core.get.call(null,map__31272__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31133,inst_31136,inst_31130,inst_31134,inst_31138,inst_31141,state_val_31217,c__27527__auto__,map__31062,map__31062__$1,opts,before_jsload,on_jsload,reload_dependents,map__31063,map__31063__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31144 = cljs.core.reverse.call(null,inst_31138);
var inst_31145 = cljs.core.map.call(null,inst_31143,inst_31144);
var inst_31146 = cljs.core.pr_str.call(null,inst_31145);
var inst_31147 = figwheel.client.utils.log.call(null,inst_31146);
var state_31216__$1 = (function (){var statearr_31274 = state_31216;
(statearr_31274[(31)] = inst_31141);

return statearr_31274;
})();
var statearr_31275_31345 = state_31216__$1;
(statearr_31275_31345[(2)] = inst_31147);

(statearr_31275_31345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (35))){
var state_31216__$1 = state_31216;
var statearr_31276_31346 = state_31216__$1;
(statearr_31276_31346[(2)] = true);

(statearr_31276_31346[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (19))){
var inst_31120 = (state_31216[(12)]);
var inst_31126 = figwheel.client.file_reloading.expand_files.call(null,inst_31120);
var state_31216__$1 = state_31216;
var statearr_31277_31347 = state_31216__$1;
(statearr_31277_31347[(2)] = inst_31126);

(statearr_31277_31347[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (11))){
var state_31216__$1 = state_31216;
var statearr_31278_31348 = state_31216__$1;
(statearr_31278_31348[(2)] = null);

(statearr_31278_31348[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (9))){
var inst_31109 = (state_31216[(2)]);
var state_31216__$1 = state_31216;
var statearr_31279_31349 = state_31216__$1;
(statearr_31279_31349[(2)] = inst_31109);

(statearr_31279_31349[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (5))){
var inst_31079 = (state_31216[(8)]);
var inst_31080 = (state_31216[(10)]);
var inst_31082 = (inst_31080 < inst_31079);
var inst_31083 = inst_31082;
var state_31216__$1 = state_31216;
if(cljs.core.truth_(inst_31083)){
var statearr_31280_31350 = state_31216__$1;
(statearr_31280_31350[(1)] = (7));

} else {
var statearr_31281_31351 = state_31216__$1;
(statearr_31281_31351[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (14))){
var inst_31090 = (state_31216[(22)]);
var inst_31099 = cljs.core.first.call(null,inst_31090);
var inst_31100 = figwheel.client.file_reloading.eval_body.call(null,inst_31099,opts);
var inst_31101 = cljs.core.next.call(null,inst_31090);
var inst_31077 = inst_31101;
var inst_31078 = null;
var inst_31079 = (0);
var inst_31080 = (0);
var state_31216__$1 = (function (){var statearr_31282 = state_31216;
(statearr_31282[(7)] = inst_31078);

(statearr_31282[(8)] = inst_31079);

(statearr_31282[(9)] = inst_31077);

(statearr_31282[(32)] = inst_31100);

(statearr_31282[(10)] = inst_31080);

return statearr_31282;
})();
var statearr_31283_31352 = state_31216__$1;
(statearr_31283_31352[(2)] = null);

(statearr_31283_31352[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (45))){
var state_31216__$1 = state_31216;
var statearr_31284_31353 = state_31216__$1;
(statearr_31284_31353[(2)] = null);

(statearr_31284_31353[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (26))){
var inst_31133 = (state_31216[(23)]);
var inst_31136 = (state_31216[(26)]);
var inst_31130 = (state_31216[(19)]);
var inst_31134 = (state_31216[(24)]);
var inst_31138 = (state_31216[(25)]);
var inst_31153 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31155 = (function (){var all_files = inst_31130;
var res_SINGLEQUOTE_ = inst_31133;
var res = inst_31134;
var files_not_loaded = inst_31136;
var dependencies_that_loaded = inst_31138;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31133,inst_31136,inst_31130,inst_31134,inst_31138,inst_31153,state_val_31217,c__27527__auto__,map__31062,map__31062__$1,opts,before_jsload,on_jsload,reload_dependents,map__31063,map__31063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31154){
var map__31285 = p__31154;
var map__31285__$1 = ((((!((map__31285 == null)))?((((map__31285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31285):map__31285);
var namespace = cljs.core.get.call(null,map__31285__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31285__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31133,inst_31136,inst_31130,inst_31134,inst_31138,inst_31153,state_val_31217,c__27527__auto__,map__31062,map__31062__$1,opts,before_jsload,on_jsload,reload_dependents,map__31063,map__31063__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31156 = cljs.core.map.call(null,inst_31155,inst_31134);
var inst_31157 = cljs.core.pr_str.call(null,inst_31156);
var inst_31158 = figwheel.client.utils.log.call(null,inst_31157);
var inst_31159 = (function (){var all_files = inst_31130;
var res_SINGLEQUOTE_ = inst_31133;
var res = inst_31134;
var files_not_loaded = inst_31136;
var dependencies_that_loaded = inst_31138;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31133,inst_31136,inst_31130,inst_31134,inst_31138,inst_31153,inst_31155,inst_31156,inst_31157,inst_31158,state_val_31217,c__27527__auto__,map__31062,map__31062__$1,opts,before_jsload,on_jsload,reload_dependents,map__31063,map__31063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31133,inst_31136,inst_31130,inst_31134,inst_31138,inst_31153,inst_31155,inst_31156,inst_31157,inst_31158,state_val_31217,c__27527__auto__,map__31062,map__31062__$1,opts,before_jsload,on_jsload,reload_dependents,map__31063,map__31063__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31160 = setTimeout(inst_31159,(10));
var state_31216__$1 = (function (){var statearr_31287 = state_31216;
(statearr_31287[(33)] = inst_31153);

(statearr_31287[(34)] = inst_31158);

return statearr_31287;
})();
var statearr_31288_31354 = state_31216__$1;
(statearr_31288_31354[(2)] = inst_31160);

(statearr_31288_31354[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (16))){
var state_31216__$1 = state_31216;
var statearr_31289_31355 = state_31216__$1;
(statearr_31289_31355[(2)] = reload_dependents);

(statearr_31289_31355[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (38))){
var inst_31170 = (state_31216[(16)]);
var inst_31187 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31170);
var state_31216__$1 = state_31216;
var statearr_31290_31356 = state_31216__$1;
(statearr_31290_31356[(2)] = inst_31187);

(statearr_31290_31356[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (30))){
var state_31216__$1 = state_31216;
var statearr_31291_31357 = state_31216__$1;
(statearr_31291_31357[(2)] = null);

(statearr_31291_31357[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (10))){
var inst_31090 = (state_31216[(22)]);
var inst_31092 = cljs.core.chunked_seq_QMARK_.call(null,inst_31090);
var state_31216__$1 = state_31216;
if(inst_31092){
var statearr_31292_31358 = state_31216__$1;
(statearr_31292_31358[(1)] = (13));

} else {
var statearr_31293_31359 = state_31216__$1;
(statearr_31293_31359[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (18))){
var inst_31124 = (state_31216[(2)]);
var state_31216__$1 = state_31216;
if(cljs.core.truth_(inst_31124)){
var statearr_31294_31360 = state_31216__$1;
(statearr_31294_31360[(1)] = (19));

} else {
var statearr_31295_31361 = state_31216__$1;
(statearr_31295_31361[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (42))){
var state_31216__$1 = state_31216;
var statearr_31296_31362 = state_31216__$1;
(statearr_31296_31362[(2)] = null);

(statearr_31296_31362[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (37))){
var inst_31182 = (state_31216[(2)]);
var state_31216__$1 = state_31216;
var statearr_31297_31363 = state_31216__$1;
(statearr_31297_31363[(2)] = inst_31182);

(statearr_31297_31363[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31217 === (8))){
var inst_31077 = (state_31216[(9)]);
var inst_31090 = (state_31216[(22)]);
var inst_31090__$1 = cljs.core.seq.call(null,inst_31077);
var state_31216__$1 = (function (){var statearr_31298 = state_31216;
(statearr_31298[(22)] = inst_31090__$1);

return statearr_31298;
})();
if(inst_31090__$1){
var statearr_31299_31364 = state_31216__$1;
(statearr_31299_31364[(1)] = (10));

} else {
var statearr_31300_31365 = state_31216__$1;
(statearr_31300_31365[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__27527__auto__,map__31062,map__31062__$1,opts,before_jsload,on_jsload,reload_dependents,map__31063,map__31063__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26808__auto__,c__27527__auto__,map__31062,map__31062__$1,opts,before_jsload,on_jsload,reload_dependents,map__31063,map__31063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26809__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26809__auto____0 = (function (){
var statearr_31304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31304[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26809__auto__);

(statearr_31304[(1)] = (1));

return statearr_31304;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26809__auto____1 = (function (state_31216){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_31216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e31305){if((e31305 instanceof Object)){
var ex__26812__auto__ = e31305;
var statearr_31306_31366 = state_31216;
(statearr_31306_31366[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31367 = state_31216;
state_31216 = G__31367;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26809__auto__ = function(state_31216){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26809__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26809__auto____1.call(this,state_31216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26809__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26809__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__27527__auto__,map__31062,map__31062__$1,opts,before_jsload,on_jsload,reload_dependents,map__31063,map__31063__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__27529__auto__ = (function (){var statearr_31307 = f__27528__auto__.call(null);
(statearr_31307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto__);

return statearr_31307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(c__27527__auto__,map__31062,map__31062__$1,opts,before_jsload,on_jsload,reload_dependents,map__31063,map__31063__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__27527__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31370,link){
var map__31373 = p__31370;
var map__31373__$1 = ((((!((map__31373 == null)))?((((map__31373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31373):map__31373);
var file = cljs.core.get.call(null,map__31373__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__31373,map__31373__$1,file){
return (function (p1__31368_SHARP_,p2__31369_SHARP_){
if(cljs.core._EQ_.call(null,p1__31368_SHARP_,p2__31369_SHARP_)){
return p1__31368_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__31373,map__31373__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31379){
var map__31380 = p__31379;
var map__31380__$1 = ((((!((map__31380 == null)))?((((map__31380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31380):map__31380);
var match_length = cljs.core.get.call(null,map__31380__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31380__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31375_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31375_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args31382 = [];
var len__25865__auto___31385 = arguments.length;
var i__25866__auto___31386 = (0);
while(true){
if((i__25866__auto___31386 < len__25865__auto___31385)){
args31382.push((arguments[i__25866__auto___31386]));

var G__31387 = (i__25866__auto___31386 + (1));
i__25866__auto___31386 = G__31387;
continue;
} else {
}
break;
}

var G__31384 = args31382.length;
switch (G__31384) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31382.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31389_SHARP_,p2__31390_SHARP_){
return cljs.core.assoc.call(null,p1__31389_SHARP_,cljs.core.get.call(null,p2__31390_SHARP_,key),p2__31390_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31391){
var map__31394 = p__31391;
var map__31394__$1 = ((((!((map__31394 == null)))?((((map__31394.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31394.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31394):map__31394);
var f_data = map__31394__$1;
var file = cljs.core.get.call(null,map__31394__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31396,p__31397){
var map__31406 = p__31396;
var map__31406__$1 = ((((!((map__31406 == null)))?((((map__31406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31406):map__31406);
var opts = map__31406__$1;
var on_cssload = cljs.core.get.call(null,map__31406__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31407 = p__31397;
var map__31407__$1 = ((((!((map__31407 == null)))?((((map__31407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31407):map__31407);
var files_msg = map__31407__$1;
var files = cljs.core.get.call(null,map__31407__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31410_31414 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__31411_31415 = null;
var count__31412_31416 = (0);
var i__31413_31417 = (0);
while(true){
if((i__31413_31417 < count__31412_31416)){
var f_31418 = cljs.core._nth.call(null,chunk__31411_31415,i__31413_31417);
figwheel.client.file_reloading.reload_css_file.call(null,f_31418);

var G__31419 = seq__31410_31414;
var G__31420 = chunk__31411_31415;
var G__31421 = count__31412_31416;
var G__31422 = (i__31413_31417 + (1));
seq__31410_31414 = G__31419;
chunk__31411_31415 = G__31420;
count__31412_31416 = G__31421;
i__31413_31417 = G__31422;
continue;
} else {
var temp__4657__auto___31423 = cljs.core.seq.call(null,seq__31410_31414);
if(temp__4657__auto___31423){
var seq__31410_31424__$1 = temp__4657__auto___31423;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31410_31424__$1)){
var c__25601__auto___31425 = cljs.core.chunk_first.call(null,seq__31410_31424__$1);
var G__31426 = cljs.core.chunk_rest.call(null,seq__31410_31424__$1);
var G__31427 = c__25601__auto___31425;
var G__31428 = cljs.core.count.call(null,c__25601__auto___31425);
var G__31429 = (0);
seq__31410_31414 = G__31426;
chunk__31411_31415 = G__31427;
count__31412_31416 = G__31428;
i__31413_31417 = G__31429;
continue;
} else {
var f_31430 = cljs.core.first.call(null,seq__31410_31424__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31430);

var G__31431 = cljs.core.next.call(null,seq__31410_31424__$1);
var G__31432 = null;
var G__31433 = (0);
var G__31434 = (0);
seq__31410_31414 = G__31431;
chunk__31411_31415 = G__31432;
count__31412_31416 = G__31433;
i__31413_31417 = G__31434;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31406,map__31406__$1,opts,on_cssload,map__31407,map__31407__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__31406,map__31406__$1,opts,on_cssload,map__31407,map__31407__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1484718743295