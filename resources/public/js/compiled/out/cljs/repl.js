// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32734){
var map__32759 = p__32734;
var map__32759__$1 = ((((!((map__32759 == null)))?((((map__32759.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32759.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32759):map__32759);
var m = map__32759__$1;
var n = cljs.core.get.call(null,map__32759__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32759__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32761_32783 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32762_32784 = null;
var count__32763_32785 = (0);
var i__32764_32786 = (0);
while(true){
if((i__32764_32786 < count__32763_32785)){
var f_32787 = cljs.core._nth.call(null,chunk__32762_32784,i__32764_32786);
cljs.core.println.call(null,"  ",f_32787);

var G__32788 = seq__32761_32783;
var G__32789 = chunk__32762_32784;
var G__32790 = count__32763_32785;
var G__32791 = (i__32764_32786 + (1));
seq__32761_32783 = G__32788;
chunk__32762_32784 = G__32789;
count__32763_32785 = G__32790;
i__32764_32786 = G__32791;
continue;
} else {
var temp__4657__auto___32792 = cljs.core.seq.call(null,seq__32761_32783);
if(temp__4657__auto___32792){
var seq__32761_32793__$1 = temp__4657__auto___32792;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32761_32793__$1)){
var c__25601__auto___32794 = cljs.core.chunk_first.call(null,seq__32761_32793__$1);
var G__32795 = cljs.core.chunk_rest.call(null,seq__32761_32793__$1);
var G__32796 = c__25601__auto___32794;
var G__32797 = cljs.core.count.call(null,c__25601__auto___32794);
var G__32798 = (0);
seq__32761_32783 = G__32795;
chunk__32762_32784 = G__32796;
count__32763_32785 = G__32797;
i__32764_32786 = G__32798;
continue;
} else {
var f_32799 = cljs.core.first.call(null,seq__32761_32793__$1);
cljs.core.println.call(null,"  ",f_32799);

var G__32800 = cljs.core.next.call(null,seq__32761_32793__$1);
var G__32801 = null;
var G__32802 = (0);
var G__32803 = (0);
seq__32761_32783 = G__32800;
chunk__32762_32784 = G__32801;
count__32763_32785 = G__32802;
i__32764_32786 = G__32803;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32804 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24790__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32804);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32804)))?cljs.core.second.call(null,arglists_32804):arglists_32804));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32765_32805 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32766_32806 = null;
var count__32767_32807 = (0);
var i__32768_32808 = (0);
while(true){
if((i__32768_32808 < count__32767_32807)){
var vec__32769_32809 = cljs.core._nth.call(null,chunk__32766_32806,i__32768_32808);
var name_32810 = cljs.core.nth.call(null,vec__32769_32809,(0),null);
var map__32772_32811 = cljs.core.nth.call(null,vec__32769_32809,(1),null);
var map__32772_32812__$1 = ((((!((map__32772_32811 == null)))?((((map__32772_32811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32772_32811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32772_32811):map__32772_32811);
var doc_32813 = cljs.core.get.call(null,map__32772_32812__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32814 = cljs.core.get.call(null,map__32772_32812__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32810);

cljs.core.println.call(null," ",arglists_32814);

if(cljs.core.truth_(doc_32813)){
cljs.core.println.call(null," ",doc_32813);
} else {
}

var G__32815 = seq__32765_32805;
var G__32816 = chunk__32766_32806;
var G__32817 = count__32767_32807;
var G__32818 = (i__32768_32808 + (1));
seq__32765_32805 = G__32815;
chunk__32766_32806 = G__32816;
count__32767_32807 = G__32817;
i__32768_32808 = G__32818;
continue;
} else {
var temp__4657__auto___32819 = cljs.core.seq.call(null,seq__32765_32805);
if(temp__4657__auto___32819){
var seq__32765_32820__$1 = temp__4657__auto___32819;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32765_32820__$1)){
var c__25601__auto___32821 = cljs.core.chunk_first.call(null,seq__32765_32820__$1);
var G__32822 = cljs.core.chunk_rest.call(null,seq__32765_32820__$1);
var G__32823 = c__25601__auto___32821;
var G__32824 = cljs.core.count.call(null,c__25601__auto___32821);
var G__32825 = (0);
seq__32765_32805 = G__32822;
chunk__32766_32806 = G__32823;
count__32767_32807 = G__32824;
i__32768_32808 = G__32825;
continue;
} else {
var vec__32774_32826 = cljs.core.first.call(null,seq__32765_32820__$1);
var name_32827 = cljs.core.nth.call(null,vec__32774_32826,(0),null);
var map__32777_32828 = cljs.core.nth.call(null,vec__32774_32826,(1),null);
var map__32777_32829__$1 = ((((!((map__32777_32828 == null)))?((((map__32777_32828.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32777_32828.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32777_32828):map__32777_32828);
var doc_32830 = cljs.core.get.call(null,map__32777_32829__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32831 = cljs.core.get.call(null,map__32777_32829__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32827);

cljs.core.println.call(null," ",arglists_32831);

if(cljs.core.truth_(doc_32830)){
cljs.core.println.call(null," ",doc_32830);
} else {
}

var G__32832 = cljs.core.next.call(null,seq__32765_32820__$1);
var G__32833 = null;
var G__32834 = (0);
var G__32835 = (0);
seq__32765_32805 = G__32832;
chunk__32766_32806 = G__32833;
count__32767_32807 = G__32834;
i__32768_32808 = G__32835;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__32779 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32780 = null;
var count__32781 = (0);
var i__32782 = (0);
while(true){
if((i__32782 < count__32781)){
var role = cljs.core._nth.call(null,chunk__32780,i__32782);
var temp__4657__auto___32836__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32836__$1)){
var spec_32837 = temp__4657__auto___32836__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32837));
} else {
}

var G__32838 = seq__32779;
var G__32839 = chunk__32780;
var G__32840 = count__32781;
var G__32841 = (i__32782 + (1));
seq__32779 = G__32838;
chunk__32780 = G__32839;
count__32781 = G__32840;
i__32782 = G__32841;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__32779);
if(temp__4657__auto____$1){
var seq__32779__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32779__$1)){
var c__25601__auto__ = cljs.core.chunk_first.call(null,seq__32779__$1);
var G__32842 = cljs.core.chunk_rest.call(null,seq__32779__$1);
var G__32843 = c__25601__auto__;
var G__32844 = cljs.core.count.call(null,c__25601__auto__);
var G__32845 = (0);
seq__32779 = G__32842;
chunk__32780 = G__32843;
count__32781 = G__32844;
i__32782 = G__32845;
continue;
} else {
var role = cljs.core.first.call(null,seq__32779__$1);
var temp__4657__auto___32846__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32846__$2)){
var spec_32847 = temp__4657__auto___32846__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32847));
} else {
}

var G__32848 = cljs.core.next.call(null,seq__32779__$1);
var G__32849 = null;
var G__32850 = (0);
var G__32851 = (0);
seq__32779 = G__32848;
chunk__32780 = G__32849;
count__32781 = G__32850;
i__32782 = G__32851;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1484718745276