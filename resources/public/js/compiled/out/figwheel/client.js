// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.8";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args34887 = [];
var len__25865__auto___34890 = arguments.length;
var i__25866__auto___34891 = (0);
while(true){
if((i__25866__auto___34891 < len__25865__auto___34890)){
args34887.push((arguments[i__25866__auto___34891]));

var G__34892 = (i__25866__auto___34891 + (1));
i__25866__auto___34891 = G__34892;
continue;
} else {
}
break;
}

var G__34889 = args34887.length;
switch (G__34889) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34887.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__25872__auto__ = [];
var len__25865__auto___34895 = arguments.length;
var i__25866__auto___34896 = (0);
while(true){
if((i__25866__auto___34896 < len__25865__auto___34895)){
args__25872__auto__.push((arguments[i__25866__auto___34896]));

var G__34897 = (i__25866__auto___34896 + (1));
i__25866__auto___34896 = G__34897;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34894){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34894));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__25872__auto__ = [];
var len__25865__auto___34899 = arguments.length;
var i__25866__auto___34900 = (0);
while(true){
if((i__25866__auto___34900 < len__25865__auto___34899)){
args__25872__auto__.push((arguments[i__25866__auto___34900]));

var G__34901 = (i__25866__auto___34900 + (1));
i__25866__auto___34900 = G__34901;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34898){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34898));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__34902 = cljs.core._EQ_;
var expr__34903 = (function (){var or__24790__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e34906){if((e34906 instanceof Error)){
var e = e34906;
return false;
} else {
throw e34906;

}
}})();
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__34902.call(null,"true",expr__34903))){
return true;
} else {
if(cljs.core.truth_(pred__34902.call(null,"false",expr__34903))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__34903)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e34908){if((e34908 instanceof Error)){
var e = e34908;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e34908;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34909){
var map__34912 = p__34909;
var map__34912__$1 = ((((!((map__34912 == null)))?((((map__34912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34912):map__34912);
var message = cljs.core.get.call(null,map__34912__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34912__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__24790__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__24778__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__24778__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__24778__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27527__auto___35074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27527__auto___35074,ch){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (c__27527__auto___35074,ch){
return (function (state_35043){
var state_val_35044 = (state_35043[(1)]);
if((state_val_35044 === (7))){
var inst_35039 = (state_35043[(2)]);
var state_35043__$1 = state_35043;
var statearr_35045_35075 = state_35043__$1;
(statearr_35045_35075[(2)] = inst_35039);

(statearr_35045_35075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35044 === (1))){
var state_35043__$1 = state_35043;
var statearr_35046_35076 = state_35043__$1;
(statearr_35046_35076[(2)] = null);

(statearr_35046_35076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35044 === (4))){
var inst_34996 = (state_35043[(7)]);
var inst_34996__$1 = (state_35043[(2)]);
var state_35043__$1 = (function (){var statearr_35047 = state_35043;
(statearr_35047[(7)] = inst_34996__$1);

return statearr_35047;
})();
if(cljs.core.truth_(inst_34996__$1)){
var statearr_35048_35077 = state_35043__$1;
(statearr_35048_35077[(1)] = (5));

} else {
var statearr_35049_35078 = state_35043__$1;
(statearr_35049_35078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35044 === (15))){
var inst_35003 = (state_35043[(8)]);
var inst_35018 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35003);
var inst_35019 = cljs.core.first.call(null,inst_35018);
var inst_35020 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35019);
var inst_35021 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_35020)].join('');
var inst_35022 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35021);
var state_35043__$1 = state_35043;
var statearr_35050_35079 = state_35043__$1;
(statearr_35050_35079[(2)] = inst_35022);

(statearr_35050_35079[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35044 === (13))){
var inst_35027 = (state_35043[(2)]);
var state_35043__$1 = state_35043;
var statearr_35051_35080 = state_35043__$1;
(statearr_35051_35080[(2)] = inst_35027);

(statearr_35051_35080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35044 === (6))){
var state_35043__$1 = state_35043;
var statearr_35052_35081 = state_35043__$1;
(statearr_35052_35081[(2)] = null);

(statearr_35052_35081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35044 === (17))){
var inst_35025 = (state_35043[(2)]);
var state_35043__$1 = state_35043;
var statearr_35053_35082 = state_35043__$1;
(statearr_35053_35082[(2)] = inst_35025);

(statearr_35053_35082[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35044 === (3))){
var inst_35041 = (state_35043[(2)]);
var state_35043__$1 = state_35043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35043__$1,inst_35041);
} else {
if((state_val_35044 === (12))){
var inst_35002 = (state_35043[(9)]);
var inst_35016 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35002,opts);
var state_35043__$1 = state_35043;
if(cljs.core.truth_(inst_35016)){
var statearr_35054_35083 = state_35043__$1;
(statearr_35054_35083[(1)] = (15));

} else {
var statearr_35055_35084 = state_35043__$1;
(statearr_35055_35084[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35044 === (2))){
var state_35043__$1 = state_35043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35043__$1,(4),ch);
} else {
if((state_val_35044 === (11))){
var inst_35003 = (state_35043[(8)]);
var inst_35008 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35009 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35003);
var inst_35010 = cljs.core.async.timeout.call(null,(1000));
var inst_35011 = [inst_35009,inst_35010];
var inst_35012 = (new cljs.core.PersistentVector(null,2,(5),inst_35008,inst_35011,null));
var state_35043__$1 = state_35043;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35043__$1,(14),inst_35012);
} else {
if((state_val_35044 === (9))){
var inst_35003 = (state_35043[(8)]);
var inst_35029 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35030 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35003);
var inst_35031 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35030);
var inst_35032 = [cljs.core.str("Not loading: "),cljs.core.str(inst_35031)].join('');
var inst_35033 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35032);
var state_35043__$1 = (function (){var statearr_35056 = state_35043;
(statearr_35056[(10)] = inst_35029);

return statearr_35056;
})();
var statearr_35057_35085 = state_35043__$1;
(statearr_35057_35085[(2)] = inst_35033);

(statearr_35057_35085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35044 === (5))){
var inst_34996 = (state_35043[(7)]);
var inst_34998 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34999 = (new cljs.core.PersistentArrayMap(null,2,inst_34998,null));
var inst_35000 = (new cljs.core.PersistentHashSet(null,inst_34999,null));
var inst_35001 = figwheel.client.focus_msgs.call(null,inst_35000,inst_34996);
var inst_35002 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35001);
var inst_35003 = cljs.core.first.call(null,inst_35001);
var inst_35004 = figwheel.client.autoload_QMARK_.call(null);
var state_35043__$1 = (function (){var statearr_35058 = state_35043;
(statearr_35058[(8)] = inst_35003);

(statearr_35058[(9)] = inst_35002);

return statearr_35058;
})();
if(cljs.core.truth_(inst_35004)){
var statearr_35059_35086 = state_35043__$1;
(statearr_35059_35086[(1)] = (8));

} else {
var statearr_35060_35087 = state_35043__$1;
(statearr_35060_35087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35044 === (14))){
var inst_35014 = (state_35043[(2)]);
var state_35043__$1 = state_35043;
var statearr_35061_35088 = state_35043__$1;
(statearr_35061_35088[(2)] = inst_35014);

(statearr_35061_35088[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35044 === (16))){
var state_35043__$1 = state_35043;
var statearr_35062_35089 = state_35043__$1;
(statearr_35062_35089[(2)] = null);

(statearr_35062_35089[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35044 === (10))){
var inst_35035 = (state_35043[(2)]);
var state_35043__$1 = (function (){var statearr_35063 = state_35043;
(statearr_35063[(11)] = inst_35035);

return statearr_35063;
})();
var statearr_35064_35090 = state_35043__$1;
(statearr_35064_35090[(2)] = null);

(statearr_35064_35090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35044 === (8))){
var inst_35002 = (state_35043[(9)]);
var inst_35006 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35002,opts);
var state_35043__$1 = state_35043;
if(cljs.core.truth_(inst_35006)){
var statearr_35065_35091 = state_35043__$1;
(statearr_35065_35091[(1)] = (11));

} else {
var statearr_35066_35092 = state_35043__$1;
(statearr_35066_35092[(1)] = (12));

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
});})(c__27527__auto___35074,ch))
;
return ((function (switch__26808__auto__,c__27527__auto___35074,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26809__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26809__auto____0 = (function (){
var statearr_35070 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35070[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26809__auto__);

(statearr_35070[(1)] = (1));

return statearr_35070;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26809__auto____1 = (function (state_35043){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_35043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e35071){if((e35071 instanceof Object)){
var ex__26812__auto__ = e35071;
var statearr_35072_35093 = state_35043;
(statearr_35072_35093[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35094 = state_35043;
state_35043 = G__35094;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26809__auto__ = function(state_35043){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26809__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26809__auto____1.call(this,state_35043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26809__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26809__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__27527__auto___35074,ch))
})();
var state__27529__auto__ = (function (){var statearr_35073 = f__27528__auto__.call(null);
(statearr_35073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto___35074);

return statearr_35073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(c__27527__auto___35074,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35095_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35095_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_35098 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35098){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e35097){if((e35097 instanceof Error)){
var e = e35097;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35098], null));
} else {
var e = e35097;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_35098))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35099){
var map__35108 = p__35099;
var map__35108__$1 = ((((!((map__35108 == null)))?((((map__35108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35108):map__35108);
var opts = map__35108__$1;
var build_id = cljs.core.get.call(null,map__35108__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35108,map__35108__$1,opts,build_id){
return (function (p__35110){
var vec__35111 = p__35110;
var seq__35112 = cljs.core.seq.call(null,vec__35111);
var first__35113 = cljs.core.first.call(null,seq__35112);
var seq__35112__$1 = cljs.core.next.call(null,seq__35112);
var map__35114 = first__35113;
var map__35114__$1 = ((((!((map__35114 == null)))?((((map__35114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35114):map__35114);
var msg = map__35114__$1;
var msg_name = cljs.core.get.call(null,map__35114__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35112__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35111,seq__35112,first__35113,seq__35112__$1,map__35114,map__35114__$1,msg,msg_name,_,map__35108,map__35108__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35111,seq__35112,first__35113,seq__35112__$1,map__35114,map__35114__$1,msg,msg_name,_,map__35108,map__35108__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35108,map__35108__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35122){
var vec__35123 = p__35122;
var seq__35124 = cljs.core.seq.call(null,vec__35123);
var first__35125 = cljs.core.first.call(null,seq__35124);
var seq__35124__$1 = cljs.core.next.call(null,seq__35124);
var map__35126 = first__35125;
var map__35126__$1 = ((((!((map__35126 == null)))?((((map__35126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35126):map__35126);
var msg = map__35126__$1;
var msg_name = cljs.core.get.call(null,map__35126__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35124__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35128){
var map__35140 = p__35128;
var map__35140__$1 = ((((!((map__35140 == null)))?((((map__35140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35140):map__35140);
var on_compile_warning = cljs.core.get.call(null,map__35140__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35140__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35140,map__35140__$1,on_compile_warning,on_compile_fail){
return (function (p__35142){
var vec__35143 = p__35142;
var seq__35144 = cljs.core.seq.call(null,vec__35143);
var first__35145 = cljs.core.first.call(null,seq__35144);
var seq__35144__$1 = cljs.core.next.call(null,seq__35144);
var map__35146 = first__35145;
var map__35146__$1 = ((((!((map__35146 == null)))?((((map__35146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35146):map__35146);
var msg = map__35146__$1;
var msg_name = cljs.core.get.call(null,map__35146__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35144__$1;
var pred__35148 = cljs.core._EQ_;
var expr__35149 = msg_name;
if(cljs.core.truth_(pred__35148.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35149))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35148.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35149))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35140,map__35140__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27527__auto__,msg_hist,msg_names,msg){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (c__27527__auto__,msg_hist,msg_names,msg){
return (function (state_35377){
var state_val_35378 = (state_35377[(1)]);
if((state_val_35378 === (7))){
var inst_35297 = (state_35377[(2)]);
var state_35377__$1 = state_35377;
if(cljs.core.truth_(inst_35297)){
var statearr_35379_35429 = state_35377__$1;
(statearr_35379_35429[(1)] = (8));

} else {
var statearr_35380_35430 = state_35377__$1;
(statearr_35380_35430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (20))){
var inst_35371 = (state_35377[(2)]);
var state_35377__$1 = state_35377;
var statearr_35381_35431 = state_35377__$1;
(statearr_35381_35431[(2)] = inst_35371);

(statearr_35381_35431[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (27))){
var inst_35367 = (state_35377[(2)]);
var state_35377__$1 = state_35377;
var statearr_35382_35432 = state_35377__$1;
(statearr_35382_35432[(2)] = inst_35367);

(statearr_35382_35432[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (1))){
var inst_35290 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35377__$1 = state_35377;
if(cljs.core.truth_(inst_35290)){
var statearr_35383_35433 = state_35377__$1;
(statearr_35383_35433[(1)] = (2));

} else {
var statearr_35384_35434 = state_35377__$1;
(statearr_35384_35434[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (24))){
var inst_35369 = (state_35377[(2)]);
var state_35377__$1 = state_35377;
var statearr_35385_35435 = state_35377__$1;
(statearr_35385_35435[(2)] = inst_35369);

(statearr_35385_35435[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (4))){
var inst_35375 = (state_35377[(2)]);
var state_35377__$1 = state_35377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35377__$1,inst_35375);
} else {
if((state_val_35378 === (15))){
var inst_35373 = (state_35377[(2)]);
var state_35377__$1 = state_35377;
var statearr_35386_35436 = state_35377__$1;
(statearr_35386_35436[(2)] = inst_35373);

(statearr_35386_35436[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (21))){
var inst_35326 = (state_35377[(2)]);
var inst_35327 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35328 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35327);
var state_35377__$1 = (function (){var statearr_35387 = state_35377;
(statearr_35387[(7)] = inst_35326);

return statearr_35387;
})();
var statearr_35388_35437 = state_35377__$1;
(statearr_35388_35437[(2)] = inst_35328);

(statearr_35388_35437[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (31))){
var inst_35356 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35377__$1 = state_35377;
if(cljs.core.truth_(inst_35356)){
var statearr_35389_35438 = state_35377__$1;
(statearr_35389_35438[(1)] = (34));

} else {
var statearr_35390_35439 = state_35377__$1;
(statearr_35390_35439[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (32))){
var inst_35365 = (state_35377[(2)]);
var state_35377__$1 = state_35377;
var statearr_35391_35440 = state_35377__$1;
(statearr_35391_35440[(2)] = inst_35365);

(statearr_35391_35440[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (33))){
var inst_35352 = (state_35377[(2)]);
var inst_35353 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35354 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35353);
var state_35377__$1 = (function (){var statearr_35392 = state_35377;
(statearr_35392[(8)] = inst_35352);

return statearr_35392;
})();
var statearr_35393_35441 = state_35377__$1;
(statearr_35393_35441[(2)] = inst_35354);

(statearr_35393_35441[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (13))){
var inst_35311 = figwheel.client.heads_up.clear.call(null);
var state_35377__$1 = state_35377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35377__$1,(16),inst_35311);
} else {
if((state_val_35378 === (22))){
var inst_35332 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35333 = figwheel.client.heads_up.append_warning_message.call(null,inst_35332);
var state_35377__$1 = state_35377;
var statearr_35394_35442 = state_35377__$1;
(statearr_35394_35442[(2)] = inst_35333);

(statearr_35394_35442[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (36))){
var inst_35363 = (state_35377[(2)]);
var state_35377__$1 = state_35377;
var statearr_35395_35443 = state_35377__$1;
(statearr_35395_35443[(2)] = inst_35363);

(statearr_35395_35443[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (29))){
var inst_35343 = (state_35377[(2)]);
var inst_35344 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35345 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35344);
var state_35377__$1 = (function (){var statearr_35396 = state_35377;
(statearr_35396[(9)] = inst_35343);

return statearr_35396;
})();
var statearr_35397_35444 = state_35377__$1;
(statearr_35397_35444[(2)] = inst_35345);

(statearr_35397_35444[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (6))){
var inst_35292 = (state_35377[(10)]);
var state_35377__$1 = state_35377;
var statearr_35398_35445 = state_35377__$1;
(statearr_35398_35445[(2)] = inst_35292);

(statearr_35398_35445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (28))){
var inst_35339 = (state_35377[(2)]);
var inst_35340 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35341 = figwheel.client.heads_up.display_warning.call(null,inst_35340);
var state_35377__$1 = (function (){var statearr_35399 = state_35377;
(statearr_35399[(11)] = inst_35339);

return statearr_35399;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35377__$1,(29),inst_35341);
} else {
if((state_val_35378 === (25))){
var inst_35337 = figwheel.client.heads_up.clear.call(null);
var state_35377__$1 = state_35377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35377__$1,(28),inst_35337);
} else {
if((state_val_35378 === (34))){
var inst_35358 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35377__$1 = state_35377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35377__$1,(37),inst_35358);
} else {
if((state_val_35378 === (17))){
var inst_35317 = (state_35377[(2)]);
var inst_35318 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35319 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35318);
var state_35377__$1 = (function (){var statearr_35400 = state_35377;
(statearr_35400[(12)] = inst_35317);

return statearr_35400;
})();
var statearr_35401_35446 = state_35377__$1;
(statearr_35401_35446[(2)] = inst_35319);

(statearr_35401_35446[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (3))){
var inst_35309 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35377__$1 = state_35377;
if(cljs.core.truth_(inst_35309)){
var statearr_35402_35447 = state_35377__$1;
(statearr_35402_35447[(1)] = (13));

} else {
var statearr_35403_35448 = state_35377__$1;
(statearr_35403_35448[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (12))){
var inst_35305 = (state_35377[(2)]);
var state_35377__$1 = state_35377;
var statearr_35404_35449 = state_35377__$1;
(statearr_35404_35449[(2)] = inst_35305);

(statearr_35404_35449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (2))){
var inst_35292 = (state_35377[(10)]);
var inst_35292__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35377__$1 = (function (){var statearr_35405 = state_35377;
(statearr_35405[(10)] = inst_35292__$1);

return statearr_35405;
})();
if(cljs.core.truth_(inst_35292__$1)){
var statearr_35406_35450 = state_35377__$1;
(statearr_35406_35450[(1)] = (5));

} else {
var statearr_35407_35451 = state_35377__$1;
(statearr_35407_35451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (23))){
var inst_35335 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35377__$1 = state_35377;
if(cljs.core.truth_(inst_35335)){
var statearr_35408_35452 = state_35377__$1;
(statearr_35408_35452[(1)] = (25));

} else {
var statearr_35409_35453 = state_35377__$1;
(statearr_35409_35453[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (35))){
var state_35377__$1 = state_35377;
var statearr_35410_35454 = state_35377__$1;
(statearr_35410_35454[(2)] = null);

(statearr_35410_35454[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (19))){
var inst_35330 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35377__$1 = state_35377;
if(cljs.core.truth_(inst_35330)){
var statearr_35411_35455 = state_35377__$1;
(statearr_35411_35455[(1)] = (22));

} else {
var statearr_35412_35456 = state_35377__$1;
(statearr_35412_35456[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (11))){
var inst_35301 = (state_35377[(2)]);
var state_35377__$1 = state_35377;
var statearr_35413_35457 = state_35377__$1;
(statearr_35413_35457[(2)] = inst_35301);

(statearr_35413_35457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (9))){
var inst_35303 = figwheel.client.heads_up.clear.call(null);
var state_35377__$1 = state_35377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35377__$1,(12),inst_35303);
} else {
if((state_val_35378 === (5))){
var inst_35294 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35377__$1 = state_35377;
var statearr_35414_35458 = state_35377__$1;
(statearr_35414_35458[(2)] = inst_35294);

(statearr_35414_35458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (14))){
var inst_35321 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35377__$1 = state_35377;
if(cljs.core.truth_(inst_35321)){
var statearr_35415_35459 = state_35377__$1;
(statearr_35415_35459[(1)] = (18));

} else {
var statearr_35416_35460 = state_35377__$1;
(statearr_35416_35460[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (26))){
var inst_35347 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35377__$1 = state_35377;
if(cljs.core.truth_(inst_35347)){
var statearr_35417_35461 = state_35377__$1;
(statearr_35417_35461[(1)] = (30));

} else {
var statearr_35418_35462 = state_35377__$1;
(statearr_35418_35462[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (16))){
var inst_35313 = (state_35377[(2)]);
var inst_35314 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35315 = figwheel.client.heads_up.display_exception.call(null,inst_35314);
var state_35377__$1 = (function (){var statearr_35419 = state_35377;
(statearr_35419[(13)] = inst_35313);

return statearr_35419;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35377__$1,(17),inst_35315);
} else {
if((state_val_35378 === (30))){
var inst_35349 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35350 = figwheel.client.heads_up.display_warning.call(null,inst_35349);
var state_35377__$1 = state_35377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35377__$1,(33),inst_35350);
} else {
if((state_val_35378 === (10))){
var inst_35307 = (state_35377[(2)]);
var state_35377__$1 = state_35377;
var statearr_35420_35463 = state_35377__$1;
(statearr_35420_35463[(2)] = inst_35307);

(statearr_35420_35463[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (18))){
var inst_35323 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35324 = figwheel.client.heads_up.display_exception.call(null,inst_35323);
var state_35377__$1 = state_35377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35377__$1,(21),inst_35324);
} else {
if((state_val_35378 === (37))){
var inst_35360 = (state_35377[(2)]);
var state_35377__$1 = state_35377;
var statearr_35421_35464 = state_35377__$1;
(statearr_35421_35464[(2)] = inst_35360);

(statearr_35421_35464[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35378 === (8))){
var inst_35299 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35377__$1 = state_35377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35377__$1,(11),inst_35299);
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
});})(c__27527__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26808__auto__,c__27527__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto____0 = (function (){
var statearr_35425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35425[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto__);

(statearr_35425[(1)] = (1));

return statearr_35425;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto____1 = (function (state_35377){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_35377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e35426){if((e35426 instanceof Object)){
var ex__26812__auto__ = e35426;
var statearr_35427_35465 = state_35377;
(statearr_35427_35465[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35466 = state_35377;
state_35377 = G__35466;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto__ = function(state_35377){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto____1.call(this,state_35377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__27527__auto__,msg_hist,msg_names,msg))
})();
var state__27529__auto__ = (function (){var statearr_35428 = f__27528__auto__.call(null);
(statearr_35428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto__);

return statearr_35428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(c__27527__auto__,msg_hist,msg_names,msg))
);

return c__27527__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27527__auto___35529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27527__auto___35529,ch){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (c__27527__auto___35529,ch){
return (function (state_35512){
var state_val_35513 = (state_35512[(1)]);
if((state_val_35513 === (1))){
var state_35512__$1 = state_35512;
var statearr_35514_35530 = state_35512__$1;
(statearr_35514_35530[(2)] = null);

(statearr_35514_35530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35513 === (2))){
var state_35512__$1 = state_35512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35512__$1,(4),ch);
} else {
if((state_val_35513 === (3))){
var inst_35510 = (state_35512[(2)]);
var state_35512__$1 = state_35512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35512__$1,inst_35510);
} else {
if((state_val_35513 === (4))){
var inst_35500 = (state_35512[(7)]);
var inst_35500__$1 = (state_35512[(2)]);
var state_35512__$1 = (function (){var statearr_35515 = state_35512;
(statearr_35515[(7)] = inst_35500__$1);

return statearr_35515;
})();
if(cljs.core.truth_(inst_35500__$1)){
var statearr_35516_35531 = state_35512__$1;
(statearr_35516_35531[(1)] = (5));

} else {
var statearr_35517_35532 = state_35512__$1;
(statearr_35517_35532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35513 === (5))){
var inst_35500 = (state_35512[(7)]);
var inst_35502 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35500);
var state_35512__$1 = state_35512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35512__$1,(8),inst_35502);
} else {
if((state_val_35513 === (6))){
var state_35512__$1 = state_35512;
var statearr_35518_35533 = state_35512__$1;
(statearr_35518_35533[(2)] = null);

(statearr_35518_35533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35513 === (7))){
var inst_35508 = (state_35512[(2)]);
var state_35512__$1 = state_35512;
var statearr_35519_35534 = state_35512__$1;
(statearr_35519_35534[(2)] = inst_35508);

(statearr_35519_35534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35513 === (8))){
var inst_35504 = (state_35512[(2)]);
var state_35512__$1 = (function (){var statearr_35520 = state_35512;
(statearr_35520[(8)] = inst_35504);

return statearr_35520;
})();
var statearr_35521_35535 = state_35512__$1;
(statearr_35521_35535[(2)] = null);

(statearr_35521_35535[(1)] = (2));


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
});})(c__27527__auto___35529,ch))
;
return ((function (switch__26808__auto__,c__27527__auto___35529,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26809__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26809__auto____0 = (function (){
var statearr_35525 = [null,null,null,null,null,null,null,null,null];
(statearr_35525[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26809__auto__);

(statearr_35525[(1)] = (1));

return statearr_35525;
});
var figwheel$client$heads_up_plugin_$_state_machine__26809__auto____1 = (function (state_35512){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_35512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e35526){if((e35526 instanceof Object)){
var ex__26812__auto__ = e35526;
var statearr_35527_35536 = state_35512;
(statearr_35527_35536[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35537 = state_35512;
state_35512 = G__35537;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26809__auto__ = function(state_35512){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26809__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26809__auto____1.call(this,state_35512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26809__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26809__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__27527__auto___35529,ch))
})();
var state__27529__auto__ = (function (){var statearr_35528 = f__27528__auto__.call(null);
(statearr_35528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto___35529);

return statearr_35528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(c__27527__auto___35529,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27527__auto__){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (c__27527__auto__){
return (function (state_35558){
var state_val_35559 = (state_35558[(1)]);
if((state_val_35559 === (1))){
var inst_35553 = cljs.core.async.timeout.call(null,(3000));
var state_35558__$1 = state_35558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35558__$1,(2),inst_35553);
} else {
if((state_val_35559 === (2))){
var inst_35555 = (state_35558[(2)]);
var inst_35556 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35558__$1 = (function (){var statearr_35560 = state_35558;
(statearr_35560[(7)] = inst_35555);

return statearr_35560;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35558__$1,inst_35556);
} else {
return null;
}
}
});})(c__27527__auto__))
;
return ((function (switch__26808__auto__,c__27527__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26809__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26809__auto____0 = (function (){
var statearr_35564 = [null,null,null,null,null,null,null,null];
(statearr_35564[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26809__auto__);

(statearr_35564[(1)] = (1));

return statearr_35564;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26809__auto____1 = (function (state_35558){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_35558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e35565){if((e35565 instanceof Object)){
var ex__26812__auto__ = e35565;
var statearr_35566_35568 = state_35558;
(statearr_35566_35568[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35569 = state_35558;
state_35558 = G__35569;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26809__auto__ = function(state_35558){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26809__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26809__auto____1.call(this,state_35558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26809__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26809__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__27527__auto__))
})();
var state__27529__auto__ = (function (){var statearr_35567 = f__27528__auto__.call(null);
(statearr_35567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto__);

return statearr_35567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(c__27527__auto__))
);

return c__27527__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27527__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (c__27527__auto__,figwheel_version,temp__4657__auto__){
return (function (state_35592){
var state_val_35593 = (state_35592[(1)]);
if((state_val_35593 === (1))){
var inst_35586 = cljs.core.async.timeout.call(null,(2000));
var state_35592__$1 = state_35592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35592__$1,(2),inst_35586);
} else {
if((state_val_35593 === (2))){
var inst_35588 = (state_35592[(2)]);
var inst_35589 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_35590 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35589);
var state_35592__$1 = (function (){var statearr_35594 = state_35592;
(statearr_35594[(7)] = inst_35588);

return statearr_35594;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35592__$1,inst_35590);
} else {
return null;
}
}
});})(c__27527__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__26808__auto__,c__27527__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto____0 = (function (){
var statearr_35598 = [null,null,null,null,null,null,null,null];
(statearr_35598[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto__);

(statearr_35598[(1)] = (1));

return statearr_35598;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto____1 = (function (state_35592){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_35592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e35599){if((e35599 instanceof Object)){
var ex__26812__auto__ = e35599;
var statearr_35600_35602 = state_35592;
(statearr_35600_35602[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35603 = state_35592;
state_35592 = G__35603;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto__ = function(state_35592){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto____1.call(this,state_35592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__27527__auto__,figwheel_version,temp__4657__auto__))
})();
var state__27529__auto__ = (function (){var statearr_35601 = f__27528__auto__.call(null);
(statearr_35601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto__);

return statearr_35601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(c__27527__auto__,figwheel_version,temp__4657__auto__))
);

return c__27527__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35604){
var map__35608 = p__35604;
var map__35608__$1 = ((((!((map__35608 == null)))?((((map__35608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35608):map__35608);
var file = cljs.core.get.call(null,map__35608__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35608__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35608__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35610 = "";
var G__35610__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__35610),cljs.core.str("file "),cljs.core.str(file)].join(''):G__35610);
var G__35610__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__35610__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__35610__$1);
if(cljs.core.truth_((function (){var and__24778__auto__ = line;
if(cljs.core.truth_(and__24778__auto__)){
return column;
} else {
return and__24778__auto__;
}
})())){
return [cljs.core.str(G__35610__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__35610__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35611){
var map__35618 = p__35611;
var map__35618__$1 = ((((!((map__35618 == null)))?((((map__35618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35618):map__35618);
var ed = map__35618__$1;
var formatted_exception = cljs.core.get.call(null,map__35618__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35618__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35618__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35620_35624 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35621_35625 = null;
var count__35622_35626 = (0);
var i__35623_35627 = (0);
while(true){
if((i__35623_35627 < count__35622_35626)){
var msg_35628 = cljs.core._nth.call(null,chunk__35621_35625,i__35623_35627);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35628);

var G__35629 = seq__35620_35624;
var G__35630 = chunk__35621_35625;
var G__35631 = count__35622_35626;
var G__35632 = (i__35623_35627 + (1));
seq__35620_35624 = G__35629;
chunk__35621_35625 = G__35630;
count__35622_35626 = G__35631;
i__35623_35627 = G__35632;
continue;
} else {
var temp__4657__auto___35633 = cljs.core.seq.call(null,seq__35620_35624);
if(temp__4657__auto___35633){
var seq__35620_35634__$1 = temp__4657__auto___35633;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35620_35634__$1)){
var c__25601__auto___35635 = cljs.core.chunk_first.call(null,seq__35620_35634__$1);
var G__35636 = cljs.core.chunk_rest.call(null,seq__35620_35634__$1);
var G__35637 = c__25601__auto___35635;
var G__35638 = cljs.core.count.call(null,c__25601__auto___35635);
var G__35639 = (0);
seq__35620_35624 = G__35636;
chunk__35621_35625 = G__35637;
count__35622_35626 = G__35638;
i__35623_35627 = G__35639;
continue;
} else {
var msg_35640 = cljs.core.first.call(null,seq__35620_35634__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35640);

var G__35641 = cljs.core.next.call(null,seq__35620_35634__$1);
var G__35642 = null;
var G__35643 = (0);
var G__35644 = (0);
seq__35620_35624 = G__35641;
chunk__35621_35625 = G__35642;
count__35622_35626 = G__35643;
i__35623_35627 = G__35644;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35645){
var map__35648 = p__35645;
var map__35648__$1 = ((((!((map__35648 == null)))?((((map__35648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35648):map__35648);
var w = map__35648__$1;
var message = cljs.core.get.call(null,map__35648__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__24778__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__24778__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__24778__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35660 = cljs.core.seq.call(null,plugins);
var chunk__35661 = null;
var count__35662 = (0);
var i__35663 = (0);
while(true){
if((i__35663 < count__35662)){
var vec__35664 = cljs.core._nth.call(null,chunk__35661,i__35663);
var k = cljs.core.nth.call(null,vec__35664,(0),null);
var plugin = cljs.core.nth.call(null,vec__35664,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35670 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35660,chunk__35661,count__35662,i__35663,pl_35670,vec__35664,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35670.call(null,msg_hist);
});})(seq__35660,chunk__35661,count__35662,i__35663,pl_35670,vec__35664,k,plugin))
);
} else {
}

var G__35671 = seq__35660;
var G__35672 = chunk__35661;
var G__35673 = count__35662;
var G__35674 = (i__35663 + (1));
seq__35660 = G__35671;
chunk__35661 = G__35672;
count__35662 = G__35673;
i__35663 = G__35674;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35660);
if(temp__4657__auto__){
var seq__35660__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35660__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__35660__$1);
var G__35675 = cljs.core.chunk_rest.call(null,seq__35660__$1);
var G__35676 = c__25601__auto__;
var G__35677 = cljs.core.count.call(null,c__25601__auto__);
var G__35678 = (0);
seq__35660 = G__35675;
chunk__35661 = G__35676;
count__35662 = G__35677;
i__35663 = G__35678;
continue;
} else {
var vec__35667 = cljs.core.first.call(null,seq__35660__$1);
var k = cljs.core.nth.call(null,vec__35667,(0),null);
var plugin = cljs.core.nth.call(null,vec__35667,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35679 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35660,chunk__35661,count__35662,i__35663,pl_35679,vec__35667,k,plugin,seq__35660__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35679.call(null,msg_hist);
});})(seq__35660,chunk__35661,count__35662,i__35663,pl_35679,vec__35667,k,plugin,seq__35660__$1,temp__4657__auto__))
);
} else {
}

var G__35680 = cljs.core.next.call(null,seq__35660__$1);
var G__35681 = null;
var G__35682 = (0);
var G__35683 = (0);
seq__35660 = G__35680;
chunk__35661 = G__35681;
count__35662 = G__35682;
i__35663 = G__35683;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args35684 = [];
var len__25865__auto___35691 = arguments.length;
var i__25866__auto___35692 = (0);
while(true){
if((i__25866__auto___35692 < len__25865__auto___35691)){
args35684.push((arguments[i__25866__auto___35692]));

var G__35693 = (i__25866__auto___35692 + (1));
i__25866__auto___35692 = G__35693;
continue;
} else {
}
break;
}

var G__35686 = args35684.length;
switch (G__35686) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35684.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__35687_35695 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35688_35696 = null;
var count__35689_35697 = (0);
var i__35690_35698 = (0);
while(true){
if((i__35690_35698 < count__35689_35697)){
var msg_35699 = cljs.core._nth.call(null,chunk__35688_35696,i__35690_35698);
figwheel.client.socket.handle_incoming_message.call(null,msg_35699);

var G__35700 = seq__35687_35695;
var G__35701 = chunk__35688_35696;
var G__35702 = count__35689_35697;
var G__35703 = (i__35690_35698 + (1));
seq__35687_35695 = G__35700;
chunk__35688_35696 = G__35701;
count__35689_35697 = G__35702;
i__35690_35698 = G__35703;
continue;
} else {
var temp__4657__auto___35704 = cljs.core.seq.call(null,seq__35687_35695);
if(temp__4657__auto___35704){
var seq__35687_35705__$1 = temp__4657__auto___35704;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35687_35705__$1)){
var c__25601__auto___35706 = cljs.core.chunk_first.call(null,seq__35687_35705__$1);
var G__35707 = cljs.core.chunk_rest.call(null,seq__35687_35705__$1);
var G__35708 = c__25601__auto___35706;
var G__35709 = cljs.core.count.call(null,c__25601__auto___35706);
var G__35710 = (0);
seq__35687_35695 = G__35707;
chunk__35688_35696 = G__35708;
count__35689_35697 = G__35709;
i__35690_35698 = G__35710;
continue;
} else {
var msg_35711 = cljs.core.first.call(null,seq__35687_35705__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35711);

var G__35712 = cljs.core.next.call(null,seq__35687_35705__$1);
var G__35713 = null;
var G__35714 = (0);
var G__35715 = (0);
seq__35687_35695 = G__35712;
chunk__35688_35696 = G__35713;
count__35689_35697 = G__35714;
i__35690_35698 = G__35715;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__25872__auto__ = [];
var len__25865__auto___35720 = arguments.length;
var i__25866__auto___35721 = (0);
while(true){
if((i__25866__auto___35721 < len__25865__auto___35720)){
args__25872__auto__.push((arguments[i__25866__auto___35721]));

var G__35722 = (i__25866__auto___35721 + (1));
i__25866__auto___35721 = G__35722;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((0) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__25873__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35717){
var map__35718 = p__35717;
var map__35718__$1 = ((((!((map__35718 == null)))?((((map__35718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35718):map__35718);
var opts = map__35718__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35716){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35716));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35724){if((e35724 instanceof Error)){
var e = e35724;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35724;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__35728){
var map__35729 = p__35728;
var map__35729__$1 = ((((!((map__35729 == null)))?((((map__35729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35729):map__35729);
var msg_name = cljs.core.get.call(null,map__35729__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1484718749120