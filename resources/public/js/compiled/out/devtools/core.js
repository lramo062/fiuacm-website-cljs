// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.core');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.toolbox');
goog.require('devtools.hints');
goog.require('devtools.async');
goog.require('devtools.formatters');
goog.require('devtools.util');
goog.require('devtools.defaults');
devtools.core.is_feature_available_QMARK_ = (function devtools$core$is_feature_available_QMARK_(feature){
var G__39104 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__39104) {
case "formatters":
return devtools.formatters.available_QMARK_.call(null);

break;
case "hints":
return devtools.hints.available_QMARK_.call(null);

break;
case "async":
return devtools.async.available_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(feature)].join('')));

}
});
devtools.core.available_QMARK_ = (function devtools$core$available_QMARK_(var_args){
var args39106 = [];
var len__25865__auto___39109 = arguments.length;
var i__25866__auto___39110 = (0);
while(true){
if((i__25866__auto___39110 < len__25865__auto___39109)){
args39106.push((arguments[i__25866__auto___39110]));

var G__39111 = (i__25866__auto___39110 + (1));
i__25866__auto___39110 = G__39111;
continue;
} else {
}
break;
}

var G__39108 = args39106.length;
switch (G__39108) {
case 0:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39106.length)].join('')));

}
});

devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.available_QMARK_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,devtools.defaults.feature_groups);
if(cljs.core.empty_QMARK_.call(null,features)){
return false;
} else {
return cljs.core.every_QMARK_.call(null,devtools.core.is_feature_available_QMARK_,features);
}
});

devtools.core.available_QMARK_.cljs$lang$maxFixedArity = 1;

devtools.core.is_feature_installed_QMARK_ = (function devtools$core$is_feature_installed_QMARK_(feature){
var G__39114 = (((feature instanceof cljs.core.Keyword))?feature.fqn:null);
switch (G__39114) {
case "formatters":
return devtools.formatters.installed_QMARK_.call(null);

break;
case "hints":
return devtools.hints.installed_QMARK_.call(null);

break;
case "async":
return devtools.async.installed_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(feature)].join('')));

}
});
devtools.core.installed_QMARK_ = (function devtools$core$installed_QMARK_(var_args){
var args39116 = [];
var len__25865__auto___39119 = arguments.length;
var i__25866__auto___39120 = (0);
while(true){
if((i__25866__auto___39120 < len__25865__auto___39119)){
args39116.push((arguments[i__25866__auto___39120]));

var G__39121 = (i__25866__auto___39120 + (1));
i__25866__auto___39120 = G__39121;
continue;
} else {
}
break;
}

var G__39118 = args39116.length;
switch (G__39118) {
case 0:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39116.length)].join('')));

}
});

devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.installed_QMARK_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,devtools.defaults.feature_groups);
if(cljs.core.empty_QMARK_.call(null,features)){
return false;
} else {
return cljs.core.every_QMARK_.call(null,devtools.core.is_feature_installed_QMARK_,features);
}
});

devtools.core.installed_QMARK_.cljs$lang$maxFixedArity = 1;

devtools.core.install_BANG_ = (function devtools$core$install_BANG_(var_args){
var args39123 = [];
var len__25865__auto___39126 = arguments.length;
var i__25866__auto___39127 = (0);
while(true){
if((i__25866__auto___39127 < len__25865__auto___39126)){
args39123.push((arguments[i__25866__auto___39127]));

var G__39128 = (i__25866__auto___39127 + (1));
i__25866__auto___39127 = G__39128;
continue;
} else {
}
break;
}

var G__39125 = args39123.length;
switch (G__39125) {
case 0:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39123.length)].join('')));

}
});

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.install_BANG_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,devtools.defaults.feature_groups);
devtools.util.display_banner_if_needed_BANG_.call(null,features,devtools.defaults.feature_groups);

devtools.util.print_config_overrides_if_requested_BANG_.call(null,"config overrides prior install:\n");

devtools.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"formatters","formatters",-1875637118),features,devtools.core.is_feature_available_QMARK_,devtools.formatters.install_BANG_);

devtools.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"hints","hints",-991113151),features,devtools.core.is_feature_available_QMARK_,devtools.hints.install_BANG_);

return devtools.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"async","async",1050769601),features,devtools.core.is_feature_available_QMARK_,devtools.async.install_BANG_);
});

devtools.core.install_BANG_.cljs$lang$maxFixedArity = 1;

devtools.core.uninstall_BANG_ = (function devtools$core$uninstall_BANG_(){
devtools.formatters.uninstall_BANG_.call(null);

devtools.hints.uninstall_BANG_.call(null);

return devtools.async.uninstall_BANG_.call(null);
});
devtools.core.set_prefs_BANG_ = (function devtools$core$set_prefs_BANG_(new_prefs){
return devtools.prefs.set_prefs_BANG_.call(null,new_prefs);
});
devtools.core.get_prefs = (function devtools$core$get_prefs(){
return devtools.prefs.get_prefs.call(null);
});
devtools.core.set_pref_BANG_ = (function devtools$core$set_pref_BANG_(pref,val){
return devtools.prefs.set_pref_BANG_.call(null,pref,val);
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return console.warn([cljs.core.str("devtools.core/enable! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> remove the call")].join(''));
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return console.warn([cljs.core.str("devtools.core/disable! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> remove the call")].join(''));
});
devtools.core.set_single_feature_BANG_ = (function devtools$core$set_single_feature_BANG_(_feature,_val){
return console.warn([cljs.core.str("devtools.core/set-single-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.enable_single_feature_BANG_ = (function devtools$core$enable_single_feature_BANG_(_feature){
return console.warn([cljs.core.str("devtools.core/enable-single-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.disable_single_feature_BANG_ = (function devtools$core$disable_single_feature_BANG_(_feature){
return console.warn([cljs.core.str("devtools.core/disable-single-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.enable_feature_BANG_ = (function devtools$core$enable_feature_BANG_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___39131 = arguments.length;
var i__25866__auto___39132 = (0);
while(true){
if((i__25866__auto___39132 < len__25865__auto___39131)){
args__25872__auto__.push((arguments[i__25866__auto___39132]));

var G__39133 = (i__25866__auto___39132 + (1));
i__25866__auto___39132 = G__39133;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str("devtools.core/enable-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});

devtools.core.enable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq39130){
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39130));
});

devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___39135 = arguments.length;
var i__25866__auto___39136 = (0);
while(true){
if((i__25866__auto___39136 < len__25865__auto___39135)){
args__25872__auto__.push((arguments[i__25866__auto___39136]));

var G__39137 = (i__25866__auto___39136 + (1));
i__25866__auto___39136 = G__39137;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str("devtools.core/disable-feature! was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use (devtools.core/install! features) to install custom features")].join(''));
});

devtools.core.disable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq39134){
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39134));
});

devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(_feature){
return console.warn([cljs.core.str("devtools.core/single-feature-available? was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use devtools.core/is-feature-available? instead")].join(''));
});
devtools.core.feature_available_QMARK_ = (function devtools$core$feature_available_QMARK_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___39139 = arguments.length;
var i__25866__auto___39140 = (0);
while(true){
if((i__25866__auto___39140 < len__25865__auto___39139)){
args__25872__auto__.push((arguments[i__25866__auto___39140]));

var G__39141 = (i__25866__auto___39140 + (1));
i__25866__auto___39140 = G__39141;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str("devtools.core/feature-available? was removed "),cljs.core.str("and has no effect in "),cljs.core.str(devtools.util.make_lib_info.call(null)),cljs.core.str(" "),cljs.core.str("=> use devtools.core/is-feature-available? instead")].join(''));
});

devtools.core.feature_available_QMARK_.cljs$lang$maxFixedArity = (0);

devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq39138){
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39138));
});


//# sourceMappingURL=core.js.map?rel=1484718754608