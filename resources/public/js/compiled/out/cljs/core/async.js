// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27572 = [];
var len__25865__auto___27578 = arguments.length;
var i__25866__auto___27579 = (0);
while(true){
if((i__25866__auto___27579 < len__25865__auto___27578)){
args27572.push((arguments[i__25866__auto___27579]));

var G__27580 = (i__25866__auto___27579 + (1));
i__25866__auto___27579 = G__27580;
continue;
} else {
}
break;
}

var G__27574 = args27572.length;
switch (G__27574) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27572.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27575 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27575 = (function (f,blockable,meta27576){
this.f = f;
this.blockable = blockable;
this.meta27576 = meta27576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27577,meta27576__$1){
var self__ = this;
var _27577__$1 = this;
return (new cljs.core.async.t_cljs$core$async27575(self__.f,self__.blockable,meta27576__$1));
});

cljs.core.async.t_cljs$core$async27575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27577){
var self__ = this;
var _27577__$1 = this;
return self__.meta27576;
});

cljs.core.async.t_cljs$core$async27575.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27575.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27575.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27575.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27576","meta27576",459876742,null)], null);
});

cljs.core.async.t_cljs$core$async27575.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27575";

cljs.core.async.t_cljs$core$async27575.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async27575");
});

cljs.core.async.__GT_t_cljs$core$async27575 = (function cljs$core$async$__GT_t_cljs$core$async27575(f__$1,blockable__$1,meta27576){
return (new cljs.core.async.t_cljs$core$async27575(f__$1,blockable__$1,meta27576));
});

}

return (new cljs.core.async.t_cljs$core$async27575(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27584 = [];
var len__25865__auto___27587 = arguments.length;
var i__25866__auto___27588 = (0);
while(true){
if((i__25866__auto___27588 < len__25865__auto___27587)){
args27584.push((arguments[i__25866__auto___27588]));

var G__27589 = (i__25866__auto___27588 + (1));
i__25866__auto___27588 = G__27589;
continue;
} else {
}
break;
}

var G__27586 = args27584.length;
switch (G__27586) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27584.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27591 = [];
var len__25865__auto___27594 = arguments.length;
var i__25866__auto___27595 = (0);
while(true){
if((i__25866__auto___27595 < len__25865__auto___27594)){
args27591.push((arguments[i__25866__auto___27595]));

var G__27596 = (i__25866__auto___27595 + (1));
i__25866__auto___27595 = G__27596;
continue;
} else {
}
break;
}

var G__27593 = args27591.length;
switch (G__27593) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27591.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27598 = [];
var len__25865__auto___27601 = arguments.length;
var i__25866__auto___27602 = (0);
while(true){
if((i__25866__auto___27602 < len__25865__auto___27601)){
args27598.push((arguments[i__25866__auto___27602]));

var G__27603 = (i__25866__auto___27602 + (1));
i__25866__auto___27602 = G__27603;
continue;
} else {
}
break;
}

var G__27600 = args27598.length;
switch (G__27600) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27598.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27605 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27605);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27605,ret){
return (function (){
return fn1.call(null,val_27605);
});})(val_27605,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27606 = [];
var len__25865__auto___27609 = arguments.length;
var i__25866__auto___27610 = (0);
while(true){
if((i__25866__auto___27610 < len__25865__auto___27609)){
args27606.push((arguments[i__25866__auto___27610]));

var G__27611 = (i__25866__auto___27610 + (1));
i__25866__auto___27610 = G__27611;
continue;
} else {
}
break;
}

var G__27608 = args27606.length;
switch (G__27608) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27606.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__25705__auto___27613 = n;
var x_27614 = (0);
while(true){
if((x_27614 < n__25705__auto___27613)){
(a[x_27614] = (0));

var G__27615 = (x_27614 + (1));
x_27614 = G__27615;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27616 = (i + (1));
i = G__27616;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27620 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27620 = (function (alt_flag,flag,meta27621){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27621 = meta27621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27622,meta27621__$1){
var self__ = this;
var _27622__$1 = this;
return (new cljs.core.async.t_cljs$core$async27620(self__.alt_flag,self__.flag,meta27621__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27620.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27622){
var self__ = this;
var _27622__$1 = this;
return self__.meta27621;
});})(flag))
;

cljs.core.async.t_cljs$core$async27620.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27620.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27620.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27620.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27620.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27621","meta27621",-692110822,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27620.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27620";

cljs.core.async.t_cljs$core$async27620.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async27620");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27620 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27620(alt_flag__$1,flag__$1,meta27621){
return (new cljs.core.async.t_cljs$core$async27620(alt_flag__$1,flag__$1,meta27621));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27620(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27626 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27626 = (function (alt_handler,flag,cb,meta27627){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27627 = meta27627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27628,meta27627__$1){
var self__ = this;
var _27628__$1 = this;
return (new cljs.core.async.t_cljs$core$async27626(self__.alt_handler,self__.flag,self__.cb,meta27627__$1));
});

cljs.core.async.t_cljs$core$async27626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27628){
var self__ = this;
var _27628__$1 = this;
return self__.meta27627;
});

cljs.core.async.t_cljs$core$async27626.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27626.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27626.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27626.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27626.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27627","meta27627",-589733536,null)], null);
});

cljs.core.async.t_cljs$core$async27626.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27626.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27626";

cljs.core.async.t_cljs$core$async27626.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async27626");
});

cljs.core.async.__GT_t_cljs$core$async27626 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27626(alt_handler__$1,flag__$1,cb__$1,meta27627){
return (new cljs.core.async.t_cljs$core$async27626(alt_handler__$1,flag__$1,cb__$1,meta27627));
});

}

return (new cljs.core.async.t_cljs$core$async27626(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27629_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27629_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27630_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27630_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__24790__auto__ = wport;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27631 = (i + (1));
i = G__27631;
continue;
}
} else {
return null;
}
break;
}
})();
var or__24790__auto__ = ret;
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__24778__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__24778__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__24778__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___27637 = arguments.length;
var i__25866__auto___27638 = (0);
while(true){
if((i__25866__auto___27638 < len__25865__auto___27637)){
args__25872__auto__.push((arguments[i__25866__auto___27638]));

var G__27639 = (i__25866__auto___27638 + (1));
i__25866__auto___27638 = G__27639;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((1) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__25873__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27634){
var map__27635 = p__27634;
var map__27635__$1 = ((((!((map__27635 == null)))?((((map__27635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27635):map__27635);
var opts = map__27635__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27632){
var G__27633 = cljs.core.first.call(null,seq27632);
var seq27632__$1 = cljs.core.next.call(null,seq27632);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27633,seq27632__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27640 = [];
var len__25865__auto___27690 = arguments.length;
var i__25866__auto___27691 = (0);
while(true){
if((i__25866__auto___27691 < len__25865__auto___27690)){
args27640.push((arguments[i__25866__auto___27691]));

var G__27692 = (i__25866__auto___27691 + (1));
i__25866__auto___27691 = G__27692;
continue;
} else {
}
break;
}

var G__27642 = args27640.length;
switch (G__27642) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27640.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27527__auto___27694 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27527__auto___27694){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (c__27527__auto___27694){
return (function (state_27666){
var state_val_27667 = (state_27666[(1)]);
if((state_val_27667 === (7))){
var inst_27662 = (state_27666[(2)]);
var state_27666__$1 = state_27666;
var statearr_27668_27695 = state_27666__$1;
(statearr_27668_27695[(2)] = inst_27662);

(statearr_27668_27695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (1))){
var state_27666__$1 = state_27666;
var statearr_27669_27696 = state_27666__$1;
(statearr_27669_27696[(2)] = null);

(statearr_27669_27696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (4))){
var inst_27645 = (state_27666[(7)]);
var inst_27645__$1 = (state_27666[(2)]);
var inst_27646 = (inst_27645__$1 == null);
var state_27666__$1 = (function (){var statearr_27670 = state_27666;
(statearr_27670[(7)] = inst_27645__$1);

return statearr_27670;
})();
if(cljs.core.truth_(inst_27646)){
var statearr_27671_27697 = state_27666__$1;
(statearr_27671_27697[(1)] = (5));

} else {
var statearr_27672_27698 = state_27666__$1;
(statearr_27672_27698[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (13))){
var state_27666__$1 = state_27666;
var statearr_27673_27699 = state_27666__$1;
(statearr_27673_27699[(2)] = null);

(statearr_27673_27699[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (6))){
var inst_27645 = (state_27666[(7)]);
var state_27666__$1 = state_27666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27666__$1,(11),to,inst_27645);
} else {
if((state_val_27667 === (3))){
var inst_27664 = (state_27666[(2)]);
var state_27666__$1 = state_27666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27666__$1,inst_27664);
} else {
if((state_val_27667 === (12))){
var state_27666__$1 = state_27666;
var statearr_27674_27700 = state_27666__$1;
(statearr_27674_27700[(2)] = null);

(statearr_27674_27700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (2))){
var state_27666__$1 = state_27666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27666__$1,(4),from);
} else {
if((state_val_27667 === (11))){
var inst_27655 = (state_27666[(2)]);
var state_27666__$1 = state_27666;
if(cljs.core.truth_(inst_27655)){
var statearr_27675_27701 = state_27666__$1;
(statearr_27675_27701[(1)] = (12));

} else {
var statearr_27676_27702 = state_27666__$1;
(statearr_27676_27702[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (9))){
var state_27666__$1 = state_27666;
var statearr_27677_27703 = state_27666__$1;
(statearr_27677_27703[(2)] = null);

(statearr_27677_27703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (5))){
var state_27666__$1 = state_27666;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27678_27704 = state_27666__$1;
(statearr_27678_27704[(1)] = (8));

} else {
var statearr_27679_27705 = state_27666__$1;
(statearr_27679_27705[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (14))){
var inst_27660 = (state_27666[(2)]);
var state_27666__$1 = state_27666;
var statearr_27680_27706 = state_27666__$1;
(statearr_27680_27706[(2)] = inst_27660);

(statearr_27680_27706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (10))){
var inst_27652 = (state_27666[(2)]);
var state_27666__$1 = state_27666;
var statearr_27681_27707 = state_27666__$1;
(statearr_27681_27707[(2)] = inst_27652);

(statearr_27681_27707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27667 === (8))){
var inst_27649 = cljs.core.async.close_BANG_.call(null,to);
var state_27666__$1 = state_27666;
var statearr_27682_27708 = state_27666__$1;
(statearr_27682_27708[(2)] = inst_27649);

(statearr_27682_27708[(1)] = (10));


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
});})(c__27527__auto___27694))
;
return ((function (switch__26808__auto__,c__27527__auto___27694){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_27686 = [null,null,null,null,null,null,null,null];
(statearr_27686[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_27686[(1)] = (1));

return statearr_27686;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_27666){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_27666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e27687){if((e27687 instanceof Object)){
var ex__26812__auto__ = e27687;
var statearr_27688_27709 = state_27666;
(statearr_27688_27709[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27710 = state_27666;
state_27666 = G__27710;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_27666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_27666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__27527__auto___27694))
})();
var state__27529__auto__ = (function (){var statearr_27689 = f__27528__auto__.call(null);
(statearr_27689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto___27694);

return statearr_27689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(c__27527__auto___27694))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27898){
var vec__27899 = p__27898;
var v = cljs.core.nth.call(null,vec__27899,(0),null);
var p = cljs.core.nth.call(null,vec__27899,(1),null);
var job = vec__27899;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27527__auto___28085 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27527__auto___28085,res,vec__27899,v,p,job,jobs,results){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (c__27527__auto___28085,res,vec__27899,v,p,job,jobs,results){
return (function (state_27906){
var state_val_27907 = (state_27906[(1)]);
if((state_val_27907 === (1))){
var state_27906__$1 = state_27906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27906__$1,(2),res,v);
} else {
if((state_val_27907 === (2))){
var inst_27903 = (state_27906[(2)]);
var inst_27904 = cljs.core.async.close_BANG_.call(null,res);
var state_27906__$1 = (function (){var statearr_27908 = state_27906;
(statearr_27908[(7)] = inst_27903);

return statearr_27908;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27906__$1,inst_27904);
} else {
return null;
}
}
});})(c__27527__auto___28085,res,vec__27899,v,p,job,jobs,results))
;
return ((function (switch__26808__auto__,c__27527__auto___28085,res,vec__27899,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0 = (function (){
var statearr_27912 = [null,null,null,null,null,null,null,null];
(statearr_27912[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__);

(statearr_27912[(1)] = (1));

return statearr_27912;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1 = (function (state_27906){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_27906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e27913){if((e27913 instanceof Object)){
var ex__26812__auto__ = e27913;
var statearr_27914_28086 = state_27906;
(statearr_27914_28086[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28087 = state_27906;
state_27906 = G__28087;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = function(state_27906){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1.call(this,state_27906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__27527__auto___28085,res,vec__27899,v,p,job,jobs,results))
})();
var state__27529__auto__ = (function (){var statearr_27915 = f__27528__auto__.call(null);
(statearr_27915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto___28085);

return statearr_27915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(c__27527__auto___28085,res,vec__27899,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27916){
var vec__27917 = p__27916;
var v = cljs.core.nth.call(null,vec__27917,(0),null);
var p = cljs.core.nth.call(null,vec__27917,(1),null);
var job = vec__27917;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__25705__auto___28088 = n;
var __28089 = (0);
while(true){
if((__28089 < n__25705__auto___28088)){
var G__27920_28090 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27920_28090) {
case "compute":
var c__27527__auto___28092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28089,c__27527__auto___28092,G__27920_28090,n__25705__auto___28088,jobs,results,process,async){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (__28089,c__27527__auto___28092,G__27920_28090,n__25705__auto___28088,jobs,results,process,async){
return (function (state_27933){
var state_val_27934 = (state_27933[(1)]);
if((state_val_27934 === (1))){
var state_27933__$1 = state_27933;
var statearr_27935_28093 = state_27933__$1;
(statearr_27935_28093[(2)] = null);

(statearr_27935_28093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (2))){
var state_27933__$1 = state_27933;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27933__$1,(4),jobs);
} else {
if((state_val_27934 === (3))){
var inst_27931 = (state_27933[(2)]);
var state_27933__$1 = state_27933;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27933__$1,inst_27931);
} else {
if((state_val_27934 === (4))){
var inst_27923 = (state_27933[(2)]);
var inst_27924 = process.call(null,inst_27923);
var state_27933__$1 = state_27933;
if(cljs.core.truth_(inst_27924)){
var statearr_27936_28094 = state_27933__$1;
(statearr_27936_28094[(1)] = (5));

} else {
var statearr_27937_28095 = state_27933__$1;
(statearr_27937_28095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (5))){
var state_27933__$1 = state_27933;
var statearr_27938_28096 = state_27933__$1;
(statearr_27938_28096[(2)] = null);

(statearr_27938_28096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (6))){
var state_27933__$1 = state_27933;
var statearr_27939_28097 = state_27933__$1;
(statearr_27939_28097[(2)] = null);

(statearr_27939_28097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27934 === (7))){
var inst_27929 = (state_27933[(2)]);
var state_27933__$1 = state_27933;
var statearr_27940_28098 = state_27933__$1;
(statearr_27940_28098[(2)] = inst_27929);

(statearr_27940_28098[(1)] = (3));


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
});})(__28089,c__27527__auto___28092,G__27920_28090,n__25705__auto___28088,jobs,results,process,async))
;
return ((function (__28089,switch__26808__auto__,c__27527__auto___28092,G__27920_28090,n__25705__auto___28088,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0 = (function (){
var statearr_27944 = [null,null,null,null,null,null,null];
(statearr_27944[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__);

(statearr_27944[(1)] = (1));

return statearr_27944;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1 = (function (state_27933){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_27933);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e27945){if((e27945 instanceof Object)){
var ex__26812__auto__ = e27945;
var statearr_27946_28099 = state_27933;
(statearr_27946_28099[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28100 = state_27933;
state_27933 = G__28100;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = function(state_27933){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1.call(this,state_27933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__;
})()
;})(__28089,switch__26808__auto__,c__27527__auto___28092,G__27920_28090,n__25705__auto___28088,jobs,results,process,async))
})();
var state__27529__auto__ = (function (){var statearr_27947 = f__27528__auto__.call(null);
(statearr_27947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto___28092);

return statearr_27947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(__28089,c__27527__auto___28092,G__27920_28090,n__25705__auto___28088,jobs,results,process,async))
);


break;
case "async":
var c__27527__auto___28101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28089,c__27527__auto___28101,G__27920_28090,n__25705__auto___28088,jobs,results,process,async){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (__28089,c__27527__auto___28101,G__27920_28090,n__25705__auto___28088,jobs,results,process,async){
return (function (state_27960){
var state_val_27961 = (state_27960[(1)]);
if((state_val_27961 === (1))){
var state_27960__$1 = state_27960;
var statearr_27962_28102 = state_27960__$1;
(statearr_27962_28102[(2)] = null);

(statearr_27962_28102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (2))){
var state_27960__$1 = state_27960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27960__$1,(4),jobs);
} else {
if((state_val_27961 === (3))){
var inst_27958 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27960__$1,inst_27958);
} else {
if((state_val_27961 === (4))){
var inst_27950 = (state_27960[(2)]);
var inst_27951 = async.call(null,inst_27950);
var state_27960__$1 = state_27960;
if(cljs.core.truth_(inst_27951)){
var statearr_27963_28103 = state_27960__$1;
(statearr_27963_28103[(1)] = (5));

} else {
var statearr_27964_28104 = state_27960__$1;
(statearr_27964_28104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (5))){
var state_27960__$1 = state_27960;
var statearr_27965_28105 = state_27960__$1;
(statearr_27965_28105[(2)] = null);

(statearr_27965_28105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (6))){
var state_27960__$1 = state_27960;
var statearr_27966_28106 = state_27960__$1;
(statearr_27966_28106[(2)] = null);

(statearr_27966_28106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27961 === (7))){
var inst_27956 = (state_27960[(2)]);
var state_27960__$1 = state_27960;
var statearr_27967_28107 = state_27960__$1;
(statearr_27967_28107[(2)] = inst_27956);

(statearr_27967_28107[(1)] = (3));


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
});})(__28089,c__27527__auto___28101,G__27920_28090,n__25705__auto___28088,jobs,results,process,async))
;
return ((function (__28089,switch__26808__auto__,c__27527__auto___28101,G__27920_28090,n__25705__auto___28088,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0 = (function (){
var statearr_27971 = [null,null,null,null,null,null,null];
(statearr_27971[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__);

(statearr_27971[(1)] = (1));

return statearr_27971;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1 = (function (state_27960){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_27960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e27972){if((e27972 instanceof Object)){
var ex__26812__auto__ = e27972;
var statearr_27973_28108 = state_27960;
(statearr_27973_28108[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28109 = state_27960;
state_27960 = G__28109;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = function(state_27960){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1.call(this,state_27960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__;
})()
;})(__28089,switch__26808__auto__,c__27527__auto___28101,G__27920_28090,n__25705__auto___28088,jobs,results,process,async))
})();
var state__27529__auto__ = (function (){var statearr_27974 = f__27528__auto__.call(null);
(statearr_27974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto___28101);

return statearr_27974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(__28089,c__27527__auto___28101,G__27920_28090,n__25705__auto___28088,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28110 = (__28089 + (1));
__28089 = G__28110;
continue;
} else {
}
break;
}

var c__27527__auto___28111 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27527__auto___28111,jobs,results,process,async){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (c__27527__auto___28111,jobs,results,process,async){
return (function (state_27996){
var state_val_27997 = (state_27996[(1)]);
if((state_val_27997 === (1))){
var state_27996__$1 = state_27996;
var statearr_27998_28112 = state_27996__$1;
(statearr_27998_28112[(2)] = null);

(statearr_27998_28112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (2))){
var state_27996__$1 = state_27996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27996__$1,(4),from);
} else {
if((state_val_27997 === (3))){
var inst_27994 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27996__$1,inst_27994);
} else {
if((state_val_27997 === (4))){
var inst_27977 = (state_27996[(7)]);
var inst_27977__$1 = (state_27996[(2)]);
var inst_27978 = (inst_27977__$1 == null);
var state_27996__$1 = (function (){var statearr_27999 = state_27996;
(statearr_27999[(7)] = inst_27977__$1);

return statearr_27999;
})();
if(cljs.core.truth_(inst_27978)){
var statearr_28000_28113 = state_27996__$1;
(statearr_28000_28113[(1)] = (5));

} else {
var statearr_28001_28114 = state_27996__$1;
(statearr_28001_28114[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (5))){
var inst_27980 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27996__$1 = state_27996;
var statearr_28002_28115 = state_27996__$1;
(statearr_28002_28115[(2)] = inst_27980);

(statearr_28002_28115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (6))){
var inst_27982 = (state_27996[(8)]);
var inst_27977 = (state_27996[(7)]);
var inst_27982__$1 = cljs.core.async.chan.call(null,(1));
var inst_27983 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27984 = [inst_27977,inst_27982__$1];
var inst_27985 = (new cljs.core.PersistentVector(null,2,(5),inst_27983,inst_27984,null));
var state_27996__$1 = (function (){var statearr_28003 = state_27996;
(statearr_28003[(8)] = inst_27982__$1);

return statearr_28003;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27996__$1,(8),jobs,inst_27985);
} else {
if((state_val_27997 === (7))){
var inst_27992 = (state_27996[(2)]);
var state_27996__$1 = state_27996;
var statearr_28004_28116 = state_27996__$1;
(statearr_28004_28116[(2)] = inst_27992);

(statearr_28004_28116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27997 === (8))){
var inst_27982 = (state_27996[(8)]);
var inst_27987 = (state_27996[(2)]);
var state_27996__$1 = (function (){var statearr_28005 = state_27996;
(statearr_28005[(9)] = inst_27987);

return statearr_28005;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27996__$1,(9),results,inst_27982);
} else {
if((state_val_27997 === (9))){
var inst_27989 = (state_27996[(2)]);
var state_27996__$1 = (function (){var statearr_28006 = state_27996;
(statearr_28006[(10)] = inst_27989);

return statearr_28006;
})();
var statearr_28007_28117 = state_27996__$1;
(statearr_28007_28117[(2)] = null);

(statearr_28007_28117[(1)] = (2));


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
});})(c__27527__auto___28111,jobs,results,process,async))
;
return ((function (switch__26808__auto__,c__27527__auto___28111,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0 = (function (){
var statearr_28011 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28011[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__);

(statearr_28011[(1)] = (1));

return statearr_28011;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1 = (function (state_27996){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_27996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e28012){if((e28012 instanceof Object)){
var ex__26812__auto__ = e28012;
var statearr_28013_28118 = state_27996;
(statearr_28013_28118[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28119 = state_27996;
state_27996 = G__28119;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = function(state_27996){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1.call(this,state_27996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__27527__auto___28111,jobs,results,process,async))
})();
var state__27529__auto__ = (function (){var statearr_28014 = f__27528__auto__.call(null);
(statearr_28014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto___28111);

return statearr_28014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(c__27527__auto___28111,jobs,results,process,async))
);


var c__27527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27527__auto__,jobs,results,process,async){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (c__27527__auto__,jobs,results,process,async){
return (function (state_28052){
var state_val_28053 = (state_28052[(1)]);
if((state_val_28053 === (7))){
var inst_28048 = (state_28052[(2)]);
var state_28052__$1 = state_28052;
var statearr_28054_28120 = state_28052__$1;
(statearr_28054_28120[(2)] = inst_28048);

(statearr_28054_28120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (20))){
var state_28052__$1 = state_28052;
var statearr_28055_28121 = state_28052__$1;
(statearr_28055_28121[(2)] = null);

(statearr_28055_28121[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (1))){
var state_28052__$1 = state_28052;
var statearr_28056_28122 = state_28052__$1;
(statearr_28056_28122[(2)] = null);

(statearr_28056_28122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (4))){
var inst_28017 = (state_28052[(7)]);
var inst_28017__$1 = (state_28052[(2)]);
var inst_28018 = (inst_28017__$1 == null);
var state_28052__$1 = (function (){var statearr_28057 = state_28052;
(statearr_28057[(7)] = inst_28017__$1);

return statearr_28057;
})();
if(cljs.core.truth_(inst_28018)){
var statearr_28058_28123 = state_28052__$1;
(statearr_28058_28123[(1)] = (5));

} else {
var statearr_28059_28124 = state_28052__$1;
(statearr_28059_28124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (15))){
var inst_28030 = (state_28052[(8)]);
var state_28052__$1 = state_28052;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28052__$1,(18),to,inst_28030);
} else {
if((state_val_28053 === (21))){
var inst_28043 = (state_28052[(2)]);
var state_28052__$1 = state_28052;
var statearr_28060_28125 = state_28052__$1;
(statearr_28060_28125[(2)] = inst_28043);

(statearr_28060_28125[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (13))){
var inst_28045 = (state_28052[(2)]);
var state_28052__$1 = (function (){var statearr_28061 = state_28052;
(statearr_28061[(9)] = inst_28045);

return statearr_28061;
})();
var statearr_28062_28126 = state_28052__$1;
(statearr_28062_28126[(2)] = null);

(statearr_28062_28126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (6))){
var inst_28017 = (state_28052[(7)]);
var state_28052__$1 = state_28052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28052__$1,(11),inst_28017);
} else {
if((state_val_28053 === (17))){
var inst_28038 = (state_28052[(2)]);
var state_28052__$1 = state_28052;
if(cljs.core.truth_(inst_28038)){
var statearr_28063_28127 = state_28052__$1;
(statearr_28063_28127[(1)] = (19));

} else {
var statearr_28064_28128 = state_28052__$1;
(statearr_28064_28128[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (3))){
var inst_28050 = (state_28052[(2)]);
var state_28052__$1 = state_28052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28052__$1,inst_28050);
} else {
if((state_val_28053 === (12))){
var inst_28027 = (state_28052[(10)]);
var state_28052__$1 = state_28052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28052__$1,(14),inst_28027);
} else {
if((state_val_28053 === (2))){
var state_28052__$1 = state_28052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28052__$1,(4),results);
} else {
if((state_val_28053 === (19))){
var state_28052__$1 = state_28052;
var statearr_28065_28129 = state_28052__$1;
(statearr_28065_28129[(2)] = null);

(statearr_28065_28129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (11))){
var inst_28027 = (state_28052[(2)]);
var state_28052__$1 = (function (){var statearr_28066 = state_28052;
(statearr_28066[(10)] = inst_28027);

return statearr_28066;
})();
var statearr_28067_28130 = state_28052__$1;
(statearr_28067_28130[(2)] = null);

(statearr_28067_28130[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (9))){
var state_28052__$1 = state_28052;
var statearr_28068_28131 = state_28052__$1;
(statearr_28068_28131[(2)] = null);

(statearr_28068_28131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (5))){
var state_28052__$1 = state_28052;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28069_28132 = state_28052__$1;
(statearr_28069_28132[(1)] = (8));

} else {
var statearr_28070_28133 = state_28052__$1;
(statearr_28070_28133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (14))){
var inst_28032 = (state_28052[(11)]);
var inst_28030 = (state_28052[(8)]);
var inst_28030__$1 = (state_28052[(2)]);
var inst_28031 = (inst_28030__$1 == null);
var inst_28032__$1 = cljs.core.not.call(null,inst_28031);
var state_28052__$1 = (function (){var statearr_28071 = state_28052;
(statearr_28071[(11)] = inst_28032__$1);

(statearr_28071[(8)] = inst_28030__$1);

return statearr_28071;
})();
if(inst_28032__$1){
var statearr_28072_28134 = state_28052__$1;
(statearr_28072_28134[(1)] = (15));

} else {
var statearr_28073_28135 = state_28052__$1;
(statearr_28073_28135[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (16))){
var inst_28032 = (state_28052[(11)]);
var state_28052__$1 = state_28052;
var statearr_28074_28136 = state_28052__$1;
(statearr_28074_28136[(2)] = inst_28032);

(statearr_28074_28136[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (10))){
var inst_28024 = (state_28052[(2)]);
var state_28052__$1 = state_28052;
var statearr_28075_28137 = state_28052__$1;
(statearr_28075_28137[(2)] = inst_28024);

(statearr_28075_28137[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (18))){
var inst_28035 = (state_28052[(2)]);
var state_28052__$1 = state_28052;
var statearr_28076_28138 = state_28052__$1;
(statearr_28076_28138[(2)] = inst_28035);

(statearr_28076_28138[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (8))){
var inst_28021 = cljs.core.async.close_BANG_.call(null,to);
var state_28052__$1 = state_28052;
var statearr_28077_28139 = state_28052__$1;
(statearr_28077_28139[(2)] = inst_28021);

(statearr_28077_28139[(1)] = (10));


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
});})(c__27527__auto__,jobs,results,process,async))
;
return ((function (switch__26808__auto__,c__27527__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0 = (function (){
var statearr_28081 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28081[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__);

(statearr_28081[(1)] = (1));

return statearr_28081;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1 = (function (state_28052){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_28052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e28082){if((e28082 instanceof Object)){
var ex__26812__auto__ = e28082;
var statearr_28083_28140 = state_28052;
(statearr_28083_28140[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28141 = state_28052;
state_28052 = G__28141;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__ = function(state_28052){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1.call(this,state_28052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26809__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__27527__auto__,jobs,results,process,async))
})();
var state__27529__auto__ = (function (){var statearr_28084 = f__27528__auto__.call(null);
(statearr_28084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto__);

return statearr_28084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(c__27527__auto__,jobs,results,process,async))
);

return c__27527__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28142 = [];
var len__25865__auto___28145 = arguments.length;
var i__25866__auto___28146 = (0);
while(true){
if((i__25866__auto___28146 < len__25865__auto___28145)){
args28142.push((arguments[i__25866__auto___28146]));

var G__28147 = (i__25866__auto___28146 + (1));
i__25866__auto___28146 = G__28147;
continue;
} else {
}
break;
}

var G__28144 = args28142.length;
switch (G__28144) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28142.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28149 = [];
var len__25865__auto___28152 = arguments.length;
var i__25866__auto___28153 = (0);
while(true){
if((i__25866__auto___28153 < len__25865__auto___28152)){
args28149.push((arguments[i__25866__auto___28153]));

var G__28154 = (i__25866__auto___28153 + (1));
i__25866__auto___28153 = G__28154;
continue;
} else {
}
break;
}

var G__28151 = args28149.length;
switch (G__28151) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28149.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28156 = [];
var len__25865__auto___28209 = arguments.length;
var i__25866__auto___28210 = (0);
while(true){
if((i__25866__auto___28210 < len__25865__auto___28209)){
args28156.push((arguments[i__25866__auto___28210]));

var G__28211 = (i__25866__auto___28210 + (1));
i__25866__auto___28210 = G__28211;
continue;
} else {
}
break;
}

var G__28158 = args28156.length;
switch (G__28158) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28156.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27527__auto___28213 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27527__auto___28213,tc,fc){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (c__27527__auto___28213,tc,fc){
return (function (state_28184){
var state_val_28185 = (state_28184[(1)]);
if((state_val_28185 === (7))){
var inst_28180 = (state_28184[(2)]);
var state_28184__$1 = state_28184;
var statearr_28186_28214 = state_28184__$1;
(statearr_28186_28214[(2)] = inst_28180);

(statearr_28186_28214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (1))){
var state_28184__$1 = state_28184;
var statearr_28187_28215 = state_28184__$1;
(statearr_28187_28215[(2)] = null);

(statearr_28187_28215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (4))){
var inst_28161 = (state_28184[(7)]);
var inst_28161__$1 = (state_28184[(2)]);
var inst_28162 = (inst_28161__$1 == null);
var state_28184__$1 = (function (){var statearr_28188 = state_28184;
(statearr_28188[(7)] = inst_28161__$1);

return statearr_28188;
})();
if(cljs.core.truth_(inst_28162)){
var statearr_28189_28216 = state_28184__$1;
(statearr_28189_28216[(1)] = (5));

} else {
var statearr_28190_28217 = state_28184__$1;
(statearr_28190_28217[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (13))){
var state_28184__$1 = state_28184;
var statearr_28191_28218 = state_28184__$1;
(statearr_28191_28218[(2)] = null);

(statearr_28191_28218[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (6))){
var inst_28161 = (state_28184[(7)]);
var inst_28167 = p.call(null,inst_28161);
var state_28184__$1 = state_28184;
if(cljs.core.truth_(inst_28167)){
var statearr_28192_28219 = state_28184__$1;
(statearr_28192_28219[(1)] = (9));

} else {
var statearr_28193_28220 = state_28184__$1;
(statearr_28193_28220[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (3))){
var inst_28182 = (state_28184[(2)]);
var state_28184__$1 = state_28184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28184__$1,inst_28182);
} else {
if((state_val_28185 === (12))){
var state_28184__$1 = state_28184;
var statearr_28194_28221 = state_28184__$1;
(statearr_28194_28221[(2)] = null);

(statearr_28194_28221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (2))){
var state_28184__$1 = state_28184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28184__$1,(4),ch);
} else {
if((state_val_28185 === (11))){
var inst_28161 = (state_28184[(7)]);
var inst_28171 = (state_28184[(2)]);
var state_28184__$1 = state_28184;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28184__$1,(8),inst_28171,inst_28161);
} else {
if((state_val_28185 === (9))){
var state_28184__$1 = state_28184;
var statearr_28195_28222 = state_28184__$1;
(statearr_28195_28222[(2)] = tc);

(statearr_28195_28222[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (5))){
var inst_28164 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28165 = cljs.core.async.close_BANG_.call(null,fc);
var state_28184__$1 = (function (){var statearr_28196 = state_28184;
(statearr_28196[(8)] = inst_28164);

return statearr_28196;
})();
var statearr_28197_28223 = state_28184__$1;
(statearr_28197_28223[(2)] = inst_28165);

(statearr_28197_28223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (14))){
var inst_28178 = (state_28184[(2)]);
var state_28184__$1 = state_28184;
var statearr_28198_28224 = state_28184__$1;
(statearr_28198_28224[(2)] = inst_28178);

(statearr_28198_28224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (10))){
var state_28184__$1 = state_28184;
var statearr_28199_28225 = state_28184__$1;
(statearr_28199_28225[(2)] = fc);

(statearr_28199_28225[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28185 === (8))){
var inst_28173 = (state_28184[(2)]);
var state_28184__$1 = state_28184;
if(cljs.core.truth_(inst_28173)){
var statearr_28200_28226 = state_28184__$1;
(statearr_28200_28226[(1)] = (12));

} else {
var statearr_28201_28227 = state_28184__$1;
(statearr_28201_28227[(1)] = (13));

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
});})(c__27527__auto___28213,tc,fc))
;
return ((function (switch__26808__auto__,c__27527__auto___28213,tc,fc){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_28205 = [null,null,null,null,null,null,null,null,null];
(statearr_28205[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_28205[(1)] = (1));

return statearr_28205;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_28184){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_28184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e28206){if((e28206 instanceof Object)){
var ex__26812__auto__ = e28206;
var statearr_28207_28228 = state_28184;
(statearr_28207_28228[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28206;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28229 = state_28184;
state_28184 = G__28229;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_28184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_28184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__27527__auto___28213,tc,fc))
})();
var state__27529__auto__ = (function (){var statearr_28208 = f__27528__auto__.call(null);
(statearr_28208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto___28213);

return statearr_28208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(c__27527__auto___28213,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27527__auto__){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (c__27527__auto__){
return (function (state_28293){
var state_val_28294 = (state_28293[(1)]);
if((state_val_28294 === (7))){
var inst_28289 = (state_28293[(2)]);
var state_28293__$1 = state_28293;
var statearr_28295_28316 = state_28293__$1;
(statearr_28295_28316[(2)] = inst_28289);

(statearr_28295_28316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (1))){
var inst_28273 = init;
var state_28293__$1 = (function (){var statearr_28296 = state_28293;
(statearr_28296[(7)] = inst_28273);

return statearr_28296;
})();
var statearr_28297_28317 = state_28293__$1;
(statearr_28297_28317[(2)] = null);

(statearr_28297_28317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (4))){
var inst_28276 = (state_28293[(8)]);
var inst_28276__$1 = (state_28293[(2)]);
var inst_28277 = (inst_28276__$1 == null);
var state_28293__$1 = (function (){var statearr_28298 = state_28293;
(statearr_28298[(8)] = inst_28276__$1);

return statearr_28298;
})();
if(cljs.core.truth_(inst_28277)){
var statearr_28299_28318 = state_28293__$1;
(statearr_28299_28318[(1)] = (5));

} else {
var statearr_28300_28319 = state_28293__$1;
(statearr_28300_28319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (6))){
var inst_28276 = (state_28293[(8)]);
var inst_28280 = (state_28293[(9)]);
var inst_28273 = (state_28293[(7)]);
var inst_28280__$1 = f.call(null,inst_28273,inst_28276);
var inst_28281 = cljs.core.reduced_QMARK_.call(null,inst_28280__$1);
var state_28293__$1 = (function (){var statearr_28301 = state_28293;
(statearr_28301[(9)] = inst_28280__$1);

return statearr_28301;
})();
if(inst_28281){
var statearr_28302_28320 = state_28293__$1;
(statearr_28302_28320[(1)] = (8));

} else {
var statearr_28303_28321 = state_28293__$1;
(statearr_28303_28321[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (3))){
var inst_28291 = (state_28293[(2)]);
var state_28293__$1 = state_28293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28293__$1,inst_28291);
} else {
if((state_val_28294 === (2))){
var state_28293__$1 = state_28293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28293__$1,(4),ch);
} else {
if((state_val_28294 === (9))){
var inst_28280 = (state_28293[(9)]);
var inst_28273 = inst_28280;
var state_28293__$1 = (function (){var statearr_28304 = state_28293;
(statearr_28304[(7)] = inst_28273);

return statearr_28304;
})();
var statearr_28305_28322 = state_28293__$1;
(statearr_28305_28322[(2)] = null);

(statearr_28305_28322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (5))){
var inst_28273 = (state_28293[(7)]);
var state_28293__$1 = state_28293;
var statearr_28306_28323 = state_28293__$1;
(statearr_28306_28323[(2)] = inst_28273);

(statearr_28306_28323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (10))){
var inst_28287 = (state_28293[(2)]);
var state_28293__$1 = state_28293;
var statearr_28307_28324 = state_28293__$1;
(statearr_28307_28324[(2)] = inst_28287);

(statearr_28307_28324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (8))){
var inst_28280 = (state_28293[(9)]);
var inst_28283 = cljs.core.deref.call(null,inst_28280);
var state_28293__$1 = state_28293;
var statearr_28308_28325 = state_28293__$1;
(statearr_28308_28325[(2)] = inst_28283);

(statearr_28308_28325[(1)] = (10));


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
});})(c__27527__auto__))
;
return ((function (switch__26808__auto__,c__27527__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26809__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26809__auto____0 = (function (){
var statearr_28312 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28312[(0)] = cljs$core$async$reduce_$_state_machine__26809__auto__);

(statearr_28312[(1)] = (1));

return statearr_28312;
});
var cljs$core$async$reduce_$_state_machine__26809__auto____1 = (function (state_28293){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_28293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e28313){if((e28313 instanceof Object)){
var ex__26812__auto__ = e28313;
var statearr_28314_28326 = state_28293;
(statearr_28314_28326[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28327 = state_28293;
state_28293 = G__28327;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26809__auto__ = function(state_28293){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26809__auto____1.call(this,state_28293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26809__auto____0;
cljs$core$async$reduce_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26809__auto____1;
return cljs$core$async$reduce_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__27527__auto__))
})();
var state__27529__auto__ = (function (){var statearr_28315 = f__27528__auto__.call(null);
(statearr_28315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto__);

return statearr_28315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(c__27527__auto__))
);

return c__27527__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28328 = [];
var len__25865__auto___28380 = arguments.length;
var i__25866__auto___28381 = (0);
while(true){
if((i__25866__auto___28381 < len__25865__auto___28380)){
args28328.push((arguments[i__25866__auto___28381]));

var G__28382 = (i__25866__auto___28381 + (1));
i__25866__auto___28381 = G__28382;
continue;
} else {
}
break;
}

var G__28330 = args28328.length;
switch (G__28330) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28328.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27527__auto__){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (c__27527__auto__){
return (function (state_28355){
var state_val_28356 = (state_28355[(1)]);
if((state_val_28356 === (7))){
var inst_28337 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
var statearr_28357_28384 = state_28355__$1;
(statearr_28357_28384[(2)] = inst_28337);

(statearr_28357_28384[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (1))){
var inst_28331 = cljs.core.seq.call(null,coll);
var inst_28332 = inst_28331;
var state_28355__$1 = (function (){var statearr_28358 = state_28355;
(statearr_28358[(7)] = inst_28332);

return statearr_28358;
})();
var statearr_28359_28385 = state_28355__$1;
(statearr_28359_28385[(2)] = null);

(statearr_28359_28385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (4))){
var inst_28332 = (state_28355[(7)]);
var inst_28335 = cljs.core.first.call(null,inst_28332);
var state_28355__$1 = state_28355;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28355__$1,(7),ch,inst_28335);
} else {
if((state_val_28356 === (13))){
var inst_28349 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
var statearr_28360_28386 = state_28355__$1;
(statearr_28360_28386[(2)] = inst_28349);

(statearr_28360_28386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (6))){
var inst_28340 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
if(cljs.core.truth_(inst_28340)){
var statearr_28361_28387 = state_28355__$1;
(statearr_28361_28387[(1)] = (8));

} else {
var statearr_28362_28388 = state_28355__$1;
(statearr_28362_28388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (3))){
var inst_28353 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28355__$1,inst_28353);
} else {
if((state_val_28356 === (12))){
var state_28355__$1 = state_28355;
var statearr_28363_28389 = state_28355__$1;
(statearr_28363_28389[(2)] = null);

(statearr_28363_28389[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (2))){
var inst_28332 = (state_28355[(7)]);
var state_28355__$1 = state_28355;
if(cljs.core.truth_(inst_28332)){
var statearr_28364_28390 = state_28355__$1;
(statearr_28364_28390[(1)] = (4));

} else {
var statearr_28365_28391 = state_28355__$1;
(statearr_28365_28391[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (11))){
var inst_28346 = cljs.core.async.close_BANG_.call(null,ch);
var state_28355__$1 = state_28355;
var statearr_28366_28392 = state_28355__$1;
(statearr_28366_28392[(2)] = inst_28346);

(statearr_28366_28392[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (9))){
var state_28355__$1 = state_28355;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28367_28393 = state_28355__$1;
(statearr_28367_28393[(1)] = (11));

} else {
var statearr_28368_28394 = state_28355__$1;
(statearr_28368_28394[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (5))){
var inst_28332 = (state_28355[(7)]);
var state_28355__$1 = state_28355;
var statearr_28369_28395 = state_28355__$1;
(statearr_28369_28395[(2)] = inst_28332);

(statearr_28369_28395[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (10))){
var inst_28351 = (state_28355[(2)]);
var state_28355__$1 = state_28355;
var statearr_28370_28396 = state_28355__$1;
(statearr_28370_28396[(2)] = inst_28351);

(statearr_28370_28396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28356 === (8))){
var inst_28332 = (state_28355[(7)]);
var inst_28342 = cljs.core.next.call(null,inst_28332);
var inst_28332__$1 = inst_28342;
var state_28355__$1 = (function (){var statearr_28371 = state_28355;
(statearr_28371[(7)] = inst_28332__$1);

return statearr_28371;
})();
var statearr_28372_28397 = state_28355__$1;
(statearr_28372_28397[(2)] = null);

(statearr_28372_28397[(1)] = (2));


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
});})(c__27527__auto__))
;
return ((function (switch__26808__auto__,c__27527__auto__){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_28376 = [null,null,null,null,null,null,null,null];
(statearr_28376[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_28376[(1)] = (1));

return statearr_28376;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_28355){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_28355);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e28377){if((e28377 instanceof Object)){
var ex__26812__auto__ = e28377;
var statearr_28378_28398 = state_28355;
(statearr_28378_28398[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28355);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28399 = state_28355;
state_28355 = G__28399;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_28355){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_28355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__27527__auto__))
})();
var state__27529__auto__ = (function (){var statearr_28379 = f__27528__auto__.call(null);
(statearr_28379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto__);

return statearr_28379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(c__27527__auto__))
);

return c__27527__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__25453__auto__ = (((_ == null))?null:_);
var m__25454__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,_);
} else {
var m__25454__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__25454__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m);
} else {
var m__25454__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28625 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28625 = (function (mult,ch,cs,meta28626){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28626 = meta28626;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28627,meta28626__$1){
var self__ = this;
var _28627__$1 = this;
return (new cljs.core.async.t_cljs$core$async28625(self__.mult,self__.ch,self__.cs,meta28626__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28625.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28627){
var self__ = this;
var _28627__$1 = this;
return self__.meta28626;
});})(cs))
;

cljs.core.async.t_cljs$core$async28625.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28625.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28625.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28625.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28625.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28625.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28625.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28626","meta28626",-979470726,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28625.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28625.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28625";

cljs.core.async.t_cljs$core$async28625.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async28625");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28625 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28625(mult__$1,ch__$1,cs__$1,meta28626){
return (new cljs.core.async.t_cljs$core$async28625(mult__$1,ch__$1,cs__$1,meta28626));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28625(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27527__auto___28850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27527__auto___28850,cs,m,dchan,dctr,done){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (c__27527__auto___28850,cs,m,dchan,dctr,done){
return (function (state_28762){
var state_val_28763 = (state_28762[(1)]);
if((state_val_28763 === (7))){
var inst_28758 = (state_28762[(2)]);
var state_28762__$1 = state_28762;
var statearr_28764_28851 = state_28762__$1;
(statearr_28764_28851[(2)] = inst_28758);

(statearr_28764_28851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (20))){
var inst_28661 = (state_28762[(7)]);
var inst_28673 = cljs.core.first.call(null,inst_28661);
var inst_28674 = cljs.core.nth.call(null,inst_28673,(0),null);
var inst_28675 = cljs.core.nth.call(null,inst_28673,(1),null);
var state_28762__$1 = (function (){var statearr_28765 = state_28762;
(statearr_28765[(8)] = inst_28674);

return statearr_28765;
})();
if(cljs.core.truth_(inst_28675)){
var statearr_28766_28852 = state_28762__$1;
(statearr_28766_28852[(1)] = (22));

} else {
var statearr_28767_28853 = state_28762__$1;
(statearr_28767_28853[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (27))){
var inst_28630 = (state_28762[(9)]);
var inst_28705 = (state_28762[(10)]);
var inst_28703 = (state_28762[(11)]);
var inst_28710 = (state_28762[(12)]);
var inst_28710__$1 = cljs.core._nth.call(null,inst_28703,inst_28705);
var inst_28711 = cljs.core.async.put_BANG_.call(null,inst_28710__$1,inst_28630,done);
var state_28762__$1 = (function (){var statearr_28768 = state_28762;
(statearr_28768[(12)] = inst_28710__$1);

return statearr_28768;
})();
if(cljs.core.truth_(inst_28711)){
var statearr_28769_28854 = state_28762__$1;
(statearr_28769_28854[(1)] = (30));

} else {
var statearr_28770_28855 = state_28762__$1;
(statearr_28770_28855[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (1))){
var state_28762__$1 = state_28762;
var statearr_28771_28856 = state_28762__$1;
(statearr_28771_28856[(2)] = null);

(statearr_28771_28856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (24))){
var inst_28661 = (state_28762[(7)]);
var inst_28680 = (state_28762[(2)]);
var inst_28681 = cljs.core.next.call(null,inst_28661);
var inst_28639 = inst_28681;
var inst_28640 = null;
var inst_28641 = (0);
var inst_28642 = (0);
var state_28762__$1 = (function (){var statearr_28772 = state_28762;
(statearr_28772[(13)] = inst_28680);

(statearr_28772[(14)] = inst_28640);

(statearr_28772[(15)] = inst_28642);

(statearr_28772[(16)] = inst_28641);

(statearr_28772[(17)] = inst_28639);

return statearr_28772;
})();
var statearr_28773_28857 = state_28762__$1;
(statearr_28773_28857[(2)] = null);

(statearr_28773_28857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (39))){
var state_28762__$1 = state_28762;
var statearr_28777_28858 = state_28762__$1;
(statearr_28777_28858[(2)] = null);

(statearr_28777_28858[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (4))){
var inst_28630 = (state_28762[(9)]);
var inst_28630__$1 = (state_28762[(2)]);
var inst_28631 = (inst_28630__$1 == null);
var state_28762__$1 = (function (){var statearr_28778 = state_28762;
(statearr_28778[(9)] = inst_28630__$1);

return statearr_28778;
})();
if(cljs.core.truth_(inst_28631)){
var statearr_28779_28859 = state_28762__$1;
(statearr_28779_28859[(1)] = (5));

} else {
var statearr_28780_28860 = state_28762__$1;
(statearr_28780_28860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (15))){
var inst_28640 = (state_28762[(14)]);
var inst_28642 = (state_28762[(15)]);
var inst_28641 = (state_28762[(16)]);
var inst_28639 = (state_28762[(17)]);
var inst_28657 = (state_28762[(2)]);
var inst_28658 = (inst_28642 + (1));
var tmp28774 = inst_28640;
var tmp28775 = inst_28641;
var tmp28776 = inst_28639;
var inst_28639__$1 = tmp28776;
var inst_28640__$1 = tmp28774;
var inst_28641__$1 = tmp28775;
var inst_28642__$1 = inst_28658;
var state_28762__$1 = (function (){var statearr_28781 = state_28762;
(statearr_28781[(14)] = inst_28640__$1);

(statearr_28781[(15)] = inst_28642__$1);

(statearr_28781[(16)] = inst_28641__$1);

(statearr_28781[(17)] = inst_28639__$1);

(statearr_28781[(18)] = inst_28657);

return statearr_28781;
})();
var statearr_28782_28861 = state_28762__$1;
(statearr_28782_28861[(2)] = null);

(statearr_28782_28861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (21))){
var inst_28684 = (state_28762[(2)]);
var state_28762__$1 = state_28762;
var statearr_28786_28862 = state_28762__$1;
(statearr_28786_28862[(2)] = inst_28684);

(statearr_28786_28862[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (31))){
var inst_28710 = (state_28762[(12)]);
var inst_28714 = done.call(null,null);
var inst_28715 = cljs.core.async.untap_STAR_.call(null,m,inst_28710);
var state_28762__$1 = (function (){var statearr_28787 = state_28762;
(statearr_28787[(19)] = inst_28714);

return statearr_28787;
})();
var statearr_28788_28863 = state_28762__$1;
(statearr_28788_28863[(2)] = inst_28715);

(statearr_28788_28863[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (32))){
var inst_28704 = (state_28762[(20)]);
var inst_28702 = (state_28762[(21)]);
var inst_28705 = (state_28762[(10)]);
var inst_28703 = (state_28762[(11)]);
var inst_28717 = (state_28762[(2)]);
var inst_28718 = (inst_28705 + (1));
var tmp28783 = inst_28704;
var tmp28784 = inst_28702;
var tmp28785 = inst_28703;
var inst_28702__$1 = tmp28784;
var inst_28703__$1 = tmp28785;
var inst_28704__$1 = tmp28783;
var inst_28705__$1 = inst_28718;
var state_28762__$1 = (function (){var statearr_28789 = state_28762;
(statearr_28789[(20)] = inst_28704__$1);

(statearr_28789[(21)] = inst_28702__$1);

(statearr_28789[(22)] = inst_28717);

(statearr_28789[(10)] = inst_28705__$1);

(statearr_28789[(11)] = inst_28703__$1);

return statearr_28789;
})();
var statearr_28790_28864 = state_28762__$1;
(statearr_28790_28864[(2)] = null);

(statearr_28790_28864[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (40))){
var inst_28730 = (state_28762[(23)]);
var inst_28734 = done.call(null,null);
var inst_28735 = cljs.core.async.untap_STAR_.call(null,m,inst_28730);
var state_28762__$1 = (function (){var statearr_28791 = state_28762;
(statearr_28791[(24)] = inst_28734);

return statearr_28791;
})();
var statearr_28792_28865 = state_28762__$1;
(statearr_28792_28865[(2)] = inst_28735);

(statearr_28792_28865[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (33))){
var inst_28721 = (state_28762[(25)]);
var inst_28723 = cljs.core.chunked_seq_QMARK_.call(null,inst_28721);
var state_28762__$1 = state_28762;
if(inst_28723){
var statearr_28793_28866 = state_28762__$1;
(statearr_28793_28866[(1)] = (36));

} else {
var statearr_28794_28867 = state_28762__$1;
(statearr_28794_28867[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (13))){
var inst_28651 = (state_28762[(26)]);
var inst_28654 = cljs.core.async.close_BANG_.call(null,inst_28651);
var state_28762__$1 = state_28762;
var statearr_28795_28868 = state_28762__$1;
(statearr_28795_28868[(2)] = inst_28654);

(statearr_28795_28868[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (22))){
var inst_28674 = (state_28762[(8)]);
var inst_28677 = cljs.core.async.close_BANG_.call(null,inst_28674);
var state_28762__$1 = state_28762;
var statearr_28796_28869 = state_28762__$1;
(statearr_28796_28869[(2)] = inst_28677);

(statearr_28796_28869[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (36))){
var inst_28721 = (state_28762[(25)]);
var inst_28725 = cljs.core.chunk_first.call(null,inst_28721);
var inst_28726 = cljs.core.chunk_rest.call(null,inst_28721);
var inst_28727 = cljs.core.count.call(null,inst_28725);
var inst_28702 = inst_28726;
var inst_28703 = inst_28725;
var inst_28704 = inst_28727;
var inst_28705 = (0);
var state_28762__$1 = (function (){var statearr_28797 = state_28762;
(statearr_28797[(20)] = inst_28704);

(statearr_28797[(21)] = inst_28702);

(statearr_28797[(10)] = inst_28705);

(statearr_28797[(11)] = inst_28703);

return statearr_28797;
})();
var statearr_28798_28870 = state_28762__$1;
(statearr_28798_28870[(2)] = null);

(statearr_28798_28870[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (41))){
var inst_28721 = (state_28762[(25)]);
var inst_28737 = (state_28762[(2)]);
var inst_28738 = cljs.core.next.call(null,inst_28721);
var inst_28702 = inst_28738;
var inst_28703 = null;
var inst_28704 = (0);
var inst_28705 = (0);
var state_28762__$1 = (function (){var statearr_28799 = state_28762;
(statearr_28799[(20)] = inst_28704);

(statearr_28799[(21)] = inst_28702);

(statearr_28799[(10)] = inst_28705);

(statearr_28799[(27)] = inst_28737);

(statearr_28799[(11)] = inst_28703);

return statearr_28799;
})();
var statearr_28800_28871 = state_28762__$1;
(statearr_28800_28871[(2)] = null);

(statearr_28800_28871[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (43))){
var state_28762__$1 = state_28762;
var statearr_28801_28872 = state_28762__$1;
(statearr_28801_28872[(2)] = null);

(statearr_28801_28872[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (29))){
var inst_28746 = (state_28762[(2)]);
var state_28762__$1 = state_28762;
var statearr_28802_28873 = state_28762__$1;
(statearr_28802_28873[(2)] = inst_28746);

(statearr_28802_28873[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (44))){
var inst_28755 = (state_28762[(2)]);
var state_28762__$1 = (function (){var statearr_28803 = state_28762;
(statearr_28803[(28)] = inst_28755);

return statearr_28803;
})();
var statearr_28804_28874 = state_28762__$1;
(statearr_28804_28874[(2)] = null);

(statearr_28804_28874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (6))){
var inst_28694 = (state_28762[(29)]);
var inst_28693 = cljs.core.deref.call(null,cs);
var inst_28694__$1 = cljs.core.keys.call(null,inst_28693);
var inst_28695 = cljs.core.count.call(null,inst_28694__$1);
var inst_28696 = cljs.core.reset_BANG_.call(null,dctr,inst_28695);
var inst_28701 = cljs.core.seq.call(null,inst_28694__$1);
var inst_28702 = inst_28701;
var inst_28703 = null;
var inst_28704 = (0);
var inst_28705 = (0);
var state_28762__$1 = (function (){var statearr_28805 = state_28762;
(statearr_28805[(20)] = inst_28704);

(statearr_28805[(21)] = inst_28702);

(statearr_28805[(29)] = inst_28694__$1);

(statearr_28805[(10)] = inst_28705);

(statearr_28805[(30)] = inst_28696);

(statearr_28805[(11)] = inst_28703);

return statearr_28805;
})();
var statearr_28806_28875 = state_28762__$1;
(statearr_28806_28875[(2)] = null);

(statearr_28806_28875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (28))){
var inst_28721 = (state_28762[(25)]);
var inst_28702 = (state_28762[(21)]);
var inst_28721__$1 = cljs.core.seq.call(null,inst_28702);
var state_28762__$1 = (function (){var statearr_28807 = state_28762;
(statearr_28807[(25)] = inst_28721__$1);

return statearr_28807;
})();
if(inst_28721__$1){
var statearr_28808_28876 = state_28762__$1;
(statearr_28808_28876[(1)] = (33));

} else {
var statearr_28809_28877 = state_28762__$1;
(statearr_28809_28877[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (25))){
var inst_28704 = (state_28762[(20)]);
var inst_28705 = (state_28762[(10)]);
var inst_28707 = (inst_28705 < inst_28704);
var inst_28708 = inst_28707;
var state_28762__$1 = state_28762;
if(cljs.core.truth_(inst_28708)){
var statearr_28810_28878 = state_28762__$1;
(statearr_28810_28878[(1)] = (27));

} else {
var statearr_28811_28879 = state_28762__$1;
(statearr_28811_28879[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (34))){
var state_28762__$1 = state_28762;
var statearr_28812_28880 = state_28762__$1;
(statearr_28812_28880[(2)] = null);

(statearr_28812_28880[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (17))){
var state_28762__$1 = state_28762;
var statearr_28813_28881 = state_28762__$1;
(statearr_28813_28881[(2)] = null);

(statearr_28813_28881[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (3))){
var inst_28760 = (state_28762[(2)]);
var state_28762__$1 = state_28762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28762__$1,inst_28760);
} else {
if((state_val_28763 === (12))){
var inst_28689 = (state_28762[(2)]);
var state_28762__$1 = state_28762;
var statearr_28814_28882 = state_28762__$1;
(statearr_28814_28882[(2)] = inst_28689);

(statearr_28814_28882[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (2))){
var state_28762__$1 = state_28762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28762__$1,(4),ch);
} else {
if((state_val_28763 === (23))){
var state_28762__$1 = state_28762;
var statearr_28815_28883 = state_28762__$1;
(statearr_28815_28883[(2)] = null);

(statearr_28815_28883[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (35))){
var inst_28744 = (state_28762[(2)]);
var state_28762__$1 = state_28762;
var statearr_28816_28884 = state_28762__$1;
(statearr_28816_28884[(2)] = inst_28744);

(statearr_28816_28884[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (19))){
var inst_28661 = (state_28762[(7)]);
var inst_28665 = cljs.core.chunk_first.call(null,inst_28661);
var inst_28666 = cljs.core.chunk_rest.call(null,inst_28661);
var inst_28667 = cljs.core.count.call(null,inst_28665);
var inst_28639 = inst_28666;
var inst_28640 = inst_28665;
var inst_28641 = inst_28667;
var inst_28642 = (0);
var state_28762__$1 = (function (){var statearr_28817 = state_28762;
(statearr_28817[(14)] = inst_28640);

(statearr_28817[(15)] = inst_28642);

(statearr_28817[(16)] = inst_28641);

(statearr_28817[(17)] = inst_28639);

return statearr_28817;
})();
var statearr_28818_28885 = state_28762__$1;
(statearr_28818_28885[(2)] = null);

(statearr_28818_28885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (11))){
var inst_28661 = (state_28762[(7)]);
var inst_28639 = (state_28762[(17)]);
var inst_28661__$1 = cljs.core.seq.call(null,inst_28639);
var state_28762__$1 = (function (){var statearr_28819 = state_28762;
(statearr_28819[(7)] = inst_28661__$1);

return statearr_28819;
})();
if(inst_28661__$1){
var statearr_28820_28886 = state_28762__$1;
(statearr_28820_28886[(1)] = (16));

} else {
var statearr_28821_28887 = state_28762__$1;
(statearr_28821_28887[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (9))){
var inst_28691 = (state_28762[(2)]);
var state_28762__$1 = state_28762;
var statearr_28822_28888 = state_28762__$1;
(statearr_28822_28888[(2)] = inst_28691);

(statearr_28822_28888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (5))){
var inst_28637 = cljs.core.deref.call(null,cs);
var inst_28638 = cljs.core.seq.call(null,inst_28637);
var inst_28639 = inst_28638;
var inst_28640 = null;
var inst_28641 = (0);
var inst_28642 = (0);
var state_28762__$1 = (function (){var statearr_28823 = state_28762;
(statearr_28823[(14)] = inst_28640);

(statearr_28823[(15)] = inst_28642);

(statearr_28823[(16)] = inst_28641);

(statearr_28823[(17)] = inst_28639);

return statearr_28823;
})();
var statearr_28824_28889 = state_28762__$1;
(statearr_28824_28889[(2)] = null);

(statearr_28824_28889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (14))){
var state_28762__$1 = state_28762;
var statearr_28825_28890 = state_28762__$1;
(statearr_28825_28890[(2)] = null);

(statearr_28825_28890[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (45))){
var inst_28752 = (state_28762[(2)]);
var state_28762__$1 = state_28762;
var statearr_28826_28891 = state_28762__$1;
(statearr_28826_28891[(2)] = inst_28752);

(statearr_28826_28891[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (26))){
var inst_28694 = (state_28762[(29)]);
var inst_28748 = (state_28762[(2)]);
var inst_28749 = cljs.core.seq.call(null,inst_28694);
var state_28762__$1 = (function (){var statearr_28827 = state_28762;
(statearr_28827[(31)] = inst_28748);

return statearr_28827;
})();
if(inst_28749){
var statearr_28828_28892 = state_28762__$1;
(statearr_28828_28892[(1)] = (42));

} else {
var statearr_28829_28893 = state_28762__$1;
(statearr_28829_28893[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (16))){
var inst_28661 = (state_28762[(7)]);
var inst_28663 = cljs.core.chunked_seq_QMARK_.call(null,inst_28661);
var state_28762__$1 = state_28762;
if(inst_28663){
var statearr_28830_28894 = state_28762__$1;
(statearr_28830_28894[(1)] = (19));

} else {
var statearr_28831_28895 = state_28762__$1;
(statearr_28831_28895[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (38))){
var inst_28741 = (state_28762[(2)]);
var state_28762__$1 = state_28762;
var statearr_28832_28896 = state_28762__$1;
(statearr_28832_28896[(2)] = inst_28741);

(statearr_28832_28896[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (30))){
var state_28762__$1 = state_28762;
var statearr_28833_28897 = state_28762__$1;
(statearr_28833_28897[(2)] = null);

(statearr_28833_28897[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (10))){
var inst_28640 = (state_28762[(14)]);
var inst_28642 = (state_28762[(15)]);
var inst_28650 = cljs.core._nth.call(null,inst_28640,inst_28642);
var inst_28651 = cljs.core.nth.call(null,inst_28650,(0),null);
var inst_28652 = cljs.core.nth.call(null,inst_28650,(1),null);
var state_28762__$1 = (function (){var statearr_28834 = state_28762;
(statearr_28834[(26)] = inst_28651);

return statearr_28834;
})();
if(cljs.core.truth_(inst_28652)){
var statearr_28835_28898 = state_28762__$1;
(statearr_28835_28898[(1)] = (13));

} else {
var statearr_28836_28899 = state_28762__$1;
(statearr_28836_28899[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (18))){
var inst_28687 = (state_28762[(2)]);
var state_28762__$1 = state_28762;
var statearr_28837_28900 = state_28762__$1;
(statearr_28837_28900[(2)] = inst_28687);

(statearr_28837_28900[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (42))){
var state_28762__$1 = state_28762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28762__$1,(45),dchan);
} else {
if((state_val_28763 === (37))){
var inst_28721 = (state_28762[(25)]);
var inst_28630 = (state_28762[(9)]);
var inst_28730 = (state_28762[(23)]);
var inst_28730__$1 = cljs.core.first.call(null,inst_28721);
var inst_28731 = cljs.core.async.put_BANG_.call(null,inst_28730__$1,inst_28630,done);
var state_28762__$1 = (function (){var statearr_28838 = state_28762;
(statearr_28838[(23)] = inst_28730__$1);

return statearr_28838;
})();
if(cljs.core.truth_(inst_28731)){
var statearr_28839_28901 = state_28762__$1;
(statearr_28839_28901[(1)] = (39));

} else {
var statearr_28840_28902 = state_28762__$1;
(statearr_28840_28902[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28763 === (8))){
var inst_28642 = (state_28762[(15)]);
var inst_28641 = (state_28762[(16)]);
var inst_28644 = (inst_28642 < inst_28641);
var inst_28645 = inst_28644;
var state_28762__$1 = state_28762;
if(cljs.core.truth_(inst_28645)){
var statearr_28841_28903 = state_28762__$1;
(statearr_28841_28903[(1)] = (10));

} else {
var statearr_28842_28904 = state_28762__$1;
(statearr_28842_28904[(1)] = (11));

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
});})(c__27527__auto___28850,cs,m,dchan,dctr,done))
;
return ((function (switch__26808__auto__,c__27527__auto___28850,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26809__auto__ = null;
var cljs$core$async$mult_$_state_machine__26809__auto____0 = (function (){
var statearr_28846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28846[(0)] = cljs$core$async$mult_$_state_machine__26809__auto__);

(statearr_28846[(1)] = (1));

return statearr_28846;
});
var cljs$core$async$mult_$_state_machine__26809__auto____1 = (function (state_28762){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_28762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e28847){if((e28847 instanceof Object)){
var ex__26812__auto__ = e28847;
var statearr_28848_28905 = state_28762;
(statearr_28848_28905[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28906 = state_28762;
state_28762 = G__28906;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26809__auto__ = function(state_28762){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26809__auto____1.call(this,state_28762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26809__auto____0;
cljs$core$async$mult_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26809__auto____1;
return cljs$core$async$mult_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__27527__auto___28850,cs,m,dchan,dctr,done))
})();
var state__27529__auto__ = (function (){var statearr_28849 = f__27528__auto__.call(null);
(statearr_28849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto___28850);

return statearr_28849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(c__27527__auto___28850,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28907 = [];
var len__25865__auto___28910 = arguments.length;
var i__25866__auto___28911 = (0);
while(true){
if((i__25866__auto___28911 < len__25865__auto___28910)){
args28907.push((arguments[i__25866__auto___28911]));

var G__28912 = (i__25866__auto___28911 + (1));
i__25866__auto___28911 = G__28912;
continue;
} else {
}
break;
}

var G__28909 = args28907.length;
switch (G__28909) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28907.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m);
} else {
var m__25454__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,state_map);
} else {
var m__25454__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__25453__auto__ = (((m == null))?null:m);
var m__25454__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,m,mode);
} else {
var m__25454__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__25872__auto__ = [];
var len__25865__auto___28924 = arguments.length;
var i__25866__auto___28925 = (0);
while(true){
if((i__25866__auto___28925 < len__25865__auto___28924)){
args__25872__auto__.push((arguments[i__25866__auto___28925]));

var G__28926 = (i__25866__auto___28925 + (1));
i__25866__auto___28925 = G__28926;
continue;
} else {
}
break;
}

var argseq__25873__auto__ = ((((3) < args__25872__auto__.length))?(new cljs.core.IndexedSeq(args__25872__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__25873__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28918){
var map__28919 = p__28918;
var map__28919__$1 = ((((!((map__28919 == null)))?((((map__28919.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28919.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28919):map__28919);
var opts = map__28919__$1;
var statearr_28921_28927 = state;
(statearr_28921_28927[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__28919,map__28919__$1,opts){
return (function (val){
var statearr_28922_28928 = state;
(statearr_28922_28928[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28919,map__28919__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_28923_28929 = state;
(statearr_28923_28929[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28914){
var G__28915 = cljs.core.first.call(null,seq28914);
var seq28914__$1 = cljs.core.next.call(null,seq28914);
var G__28916 = cljs.core.first.call(null,seq28914__$1);
var seq28914__$2 = cljs.core.next.call(null,seq28914__$1);
var G__28917 = cljs.core.first.call(null,seq28914__$2);
var seq28914__$3 = cljs.core.next.call(null,seq28914__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28915,G__28916,G__28917,seq28914__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29095 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29095 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29096){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29096 = meta29096;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29097,meta29096__$1){
var self__ = this;
var _29097__$1 = this;
return (new cljs.core.async.t_cljs$core$async29095(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29096__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29095.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29097){
var self__ = this;
var _29097__$1 = this;
return self__.meta29096;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29095.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29095.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29095.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29095.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29095.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29095.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29095.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29095.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29095.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29096","meta29096",-1161138889,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29095.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29095.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29095";

cljs.core.async.t_cljs$core$async29095.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29095");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29095 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29095(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29096){
return (new cljs.core.async.t_cljs$core$async29095(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29096));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29095(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27527__auto___29260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27527__auto___29260,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (c__27527__auto___29260,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29197){
var state_val_29198 = (state_29197[(1)]);
if((state_val_29198 === (7))){
var inst_29113 = (state_29197[(2)]);
var state_29197__$1 = state_29197;
var statearr_29199_29261 = state_29197__$1;
(statearr_29199_29261[(2)] = inst_29113);

(statearr_29199_29261[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (20))){
var inst_29125 = (state_29197[(7)]);
var state_29197__$1 = state_29197;
var statearr_29200_29262 = state_29197__$1;
(statearr_29200_29262[(2)] = inst_29125);

(statearr_29200_29262[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (27))){
var state_29197__$1 = state_29197;
var statearr_29201_29263 = state_29197__$1;
(statearr_29201_29263[(2)] = null);

(statearr_29201_29263[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (1))){
var inst_29101 = (state_29197[(8)]);
var inst_29101__$1 = calc_state.call(null);
var inst_29103 = (inst_29101__$1 == null);
var inst_29104 = cljs.core.not.call(null,inst_29103);
var state_29197__$1 = (function (){var statearr_29202 = state_29197;
(statearr_29202[(8)] = inst_29101__$1);

return statearr_29202;
})();
if(inst_29104){
var statearr_29203_29264 = state_29197__$1;
(statearr_29203_29264[(1)] = (2));

} else {
var statearr_29204_29265 = state_29197__$1;
(statearr_29204_29265[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (24))){
var inst_29171 = (state_29197[(9)]);
var inst_29148 = (state_29197[(10)]);
var inst_29157 = (state_29197[(11)]);
var inst_29171__$1 = inst_29148.call(null,inst_29157);
var state_29197__$1 = (function (){var statearr_29205 = state_29197;
(statearr_29205[(9)] = inst_29171__$1);

return statearr_29205;
})();
if(cljs.core.truth_(inst_29171__$1)){
var statearr_29206_29266 = state_29197__$1;
(statearr_29206_29266[(1)] = (29));

} else {
var statearr_29207_29267 = state_29197__$1;
(statearr_29207_29267[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (4))){
var inst_29116 = (state_29197[(2)]);
var state_29197__$1 = state_29197;
if(cljs.core.truth_(inst_29116)){
var statearr_29208_29268 = state_29197__$1;
(statearr_29208_29268[(1)] = (8));

} else {
var statearr_29209_29269 = state_29197__$1;
(statearr_29209_29269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (15))){
var inst_29142 = (state_29197[(2)]);
var state_29197__$1 = state_29197;
if(cljs.core.truth_(inst_29142)){
var statearr_29210_29270 = state_29197__$1;
(statearr_29210_29270[(1)] = (19));

} else {
var statearr_29211_29271 = state_29197__$1;
(statearr_29211_29271[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (21))){
var inst_29147 = (state_29197[(12)]);
var inst_29147__$1 = (state_29197[(2)]);
var inst_29148 = cljs.core.get.call(null,inst_29147__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29149 = cljs.core.get.call(null,inst_29147__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29150 = cljs.core.get.call(null,inst_29147__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29197__$1 = (function (){var statearr_29212 = state_29197;
(statearr_29212[(12)] = inst_29147__$1);

(statearr_29212[(10)] = inst_29148);

(statearr_29212[(13)] = inst_29149);

return statearr_29212;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29197__$1,(22),inst_29150);
} else {
if((state_val_29198 === (31))){
var inst_29179 = (state_29197[(2)]);
var state_29197__$1 = state_29197;
if(cljs.core.truth_(inst_29179)){
var statearr_29213_29272 = state_29197__$1;
(statearr_29213_29272[(1)] = (32));

} else {
var statearr_29214_29273 = state_29197__$1;
(statearr_29214_29273[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (32))){
var inst_29156 = (state_29197[(14)]);
var state_29197__$1 = state_29197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29197__$1,(35),out,inst_29156);
} else {
if((state_val_29198 === (33))){
var inst_29147 = (state_29197[(12)]);
var inst_29125 = inst_29147;
var state_29197__$1 = (function (){var statearr_29215 = state_29197;
(statearr_29215[(7)] = inst_29125);

return statearr_29215;
})();
var statearr_29216_29274 = state_29197__$1;
(statearr_29216_29274[(2)] = null);

(statearr_29216_29274[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (13))){
var inst_29125 = (state_29197[(7)]);
var inst_29132 = inst_29125.cljs$lang$protocol_mask$partition0$;
var inst_29133 = (inst_29132 & (64));
var inst_29134 = inst_29125.cljs$core$ISeq$;
var inst_29135 = (inst_29133) || (inst_29134);
var state_29197__$1 = state_29197;
if(cljs.core.truth_(inst_29135)){
var statearr_29217_29275 = state_29197__$1;
(statearr_29217_29275[(1)] = (16));

} else {
var statearr_29218_29276 = state_29197__$1;
(statearr_29218_29276[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (22))){
var inst_29156 = (state_29197[(14)]);
var inst_29157 = (state_29197[(11)]);
var inst_29155 = (state_29197[(2)]);
var inst_29156__$1 = cljs.core.nth.call(null,inst_29155,(0),null);
var inst_29157__$1 = cljs.core.nth.call(null,inst_29155,(1),null);
var inst_29158 = (inst_29156__$1 == null);
var inst_29159 = cljs.core._EQ_.call(null,inst_29157__$1,change);
var inst_29160 = (inst_29158) || (inst_29159);
var state_29197__$1 = (function (){var statearr_29219 = state_29197;
(statearr_29219[(14)] = inst_29156__$1);

(statearr_29219[(11)] = inst_29157__$1);

return statearr_29219;
})();
if(cljs.core.truth_(inst_29160)){
var statearr_29220_29277 = state_29197__$1;
(statearr_29220_29277[(1)] = (23));

} else {
var statearr_29221_29278 = state_29197__$1;
(statearr_29221_29278[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (36))){
var inst_29147 = (state_29197[(12)]);
var inst_29125 = inst_29147;
var state_29197__$1 = (function (){var statearr_29222 = state_29197;
(statearr_29222[(7)] = inst_29125);

return statearr_29222;
})();
var statearr_29223_29279 = state_29197__$1;
(statearr_29223_29279[(2)] = null);

(statearr_29223_29279[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (29))){
var inst_29171 = (state_29197[(9)]);
var state_29197__$1 = state_29197;
var statearr_29224_29280 = state_29197__$1;
(statearr_29224_29280[(2)] = inst_29171);

(statearr_29224_29280[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (6))){
var state_29197__$1 = state_29197;
var statearr_29225_29281 = state_29197__$1;
(statearr_29225_29281[(2)] = false);

(statearr_29225_29281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (28))){
var inst_29167 = (state_29197[(2)]);
var inst_29168 = calc_state.call(null);
var inst_29125 = inst_29168;
var state_29197__$1 = (function (){var statearr_29226 = state_29197;
(statearr_29226[(7)] = inst_29125);

(statearr_29226[(15)] = inst_29167);

return statearr_29226;
})();
var statearr_29227_29282 = state_29197__$1;
(statearr_29227_29282[(2)] = null);

(statearr_29227_29282[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (25))){
var inst_29193 = (state_29197[(2)]);
var state_29197__$1 = state_29197;
var statearr_29228_29283 = state_29197__$1;
(statearr_29228_29283[(2)] = inst_29193);

(statearr_29228_29283[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (34))){
var inst_29191 = (state_29197[(2)]);
var state_29197__$1 = state_29197;
var statearr_29229_29284 = state_29197__$1;
(statearr_29229_29284[(2)] = inst_29191);

(statearr_29229_29284[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (17))){
var state_29197__$1 = state_29197;
var statearr_29230_29285 = state_29197__$1;
(statearr_29230_29285[(2)] = false);

(statearr_29230_29285[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (3))){
var state_29197__$1 = state_29197;
var statearr_29231_29286 = state_29197__$1;
(statearr_29231_29286[(2)] = false);

(statearr_29231_29286[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (12))){
var inst_29195 = (state_29197[(2)]);
var state_29197__$1 = state_29197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29197__$1,inst_29195);
} else {
if((state_val_29198 === (2))){
var inst_29101 = (state_29197[(8)]);
var inst_29106 = inst_29101.cljs$lang$protocol_mask$partition0$;
var inst_29107 = (inst_29106 & (64));
var inst_29108 = inst_29101.cljs$core$ISeq$;
var inst_29109 = (inst_29107) || (inst_29108);
var state_29197__$1 = state_29197;
if(cljs.core.truth_(inst_29109)){
var statearr_29232_29287 = state_29197__$1;
(statearr_29232_29287[(1)] = (5));

} else {
var statearr_29233_29288 = state_29197__$1;
(statearr_29233_29288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (23))){
var inst_29156 = (state_29197[(14)]);
var inst_29162 = (inst_29156 == null);
var state_29197__$1 = state_29197;
if(cljs.core.truth_(inst_29162)){
var statearr_29234_29289 = state_29197__$1;
(statearr_29234_29289[(1)] = (26));

} else {
var statearr_29235_29290 = state_29197__$1;
(statearr_29235_29290[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (35))){
var inst_29182 = (state_29197[(2)]);
var state_29197__$1 = state_29197;
if(cljs.core.truth_(inst_29182)){
var statearr_29236_29291 = state_29197__$1;
(statearr_29236_29291[(1)] = (36));

} else {
var statearr_29237_29292 = state_29197__$1;
(statearr_29237_29292[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (19))){
var inst_29125 = (state_29197[(7)]);
var inst_29144 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29125);
var state_29197__$1 = state_29197;
var statearr_29238_29293 = state_29197__$1;
(statearr_29238_29293[(2)] = inst_29144);

(statearr_29238_29293[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (11))){
var inst_29125 = (state_29197[(7)]);
var inst_29129 = (inst_29125 == null);
var inst_29130 = cljs.core.not.call(null,inst_29129);
var state_29197__$1 = state_29197;
if(inst_29130){
var statearr_29239_29294 = state_29197__$1;
(statearr_29239_29294[(1)] = (13));

} else {
var statearr_29240_29295 = state_29197__$1;
(statearr_29240_29295[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (9))){
var inst_29101 = (state_29197[(8)]);
var state_29197__$1 = state_29197;
var statearr_29241_29296 = state_29197__$1;
(statearr_29241_29296[(2)] = inst_29101);

(statearr_29241_29296[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (5))){
var state_29197__$1 = state_29197;
var statearr_29242_29297 = state_29197__$1;
(statearr_29242_29297[(2)] = true);

(statearr_29242_29297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (14))){
var state_29197__$1 = state_29197;
var statearr_29243_29298 = state_29197__$1;
(statearr_29243_29298[(2)] = false);

(statearr_29243_29298[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (26))){
var inst_29157 = (state_29197[(11)]);
var inst_29164 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29157);
var state_29197__$1 = state_29197;
var statearr_29244_29299 = state_29197__$1;
(statearr_29244_29299[(2)] = inst_29164);

(statearr_29244_29299[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (16))){
var state_29197__$1 = state_29197;
var statearr_29245_29300 = state_29197__$1;
(statearr_29245_29300[(2)] = true);

(statearr_29245_29300[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (38))){
var inst_29187 = (state_29197[(2)]);
var state_29197__$1 = state_29197;
var statearr_29246_29301 = state_29197__$1;
(statearr_29246_29301[(2)] = inst_29187);

(statearr_29246_29301[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (30))){
var inst_29148 = (state_29197[(10)]);
var inst_29157 = (state_29197[(11)]);
var inst_29149 = (state_29197[(13)]);
var inst_29174 = cljs.core.empty_QMARK_.call(null,inst_29148);
var inst_29175 = inst_29149.call(null,inst_29157);
var inst_29176 = cljs.core.not.call(null,inst_29175);
var inst_29177 = (inst_29174) && (inst_29176);
var state_29197__$1 = state_29197;
var statearr_29247_29302 = state_29197__$1;
(statearr_29247_29302[(2)] = inst_29177);

(statearr_29247_29302[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (10))){
var inst_29101 = (state_29197[(8)]);
var inst_29121 = (state_29197[(2)]);
var inst_29122 = cljs.core.get.call(null,inst_29121,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29123 = cljs.core.get.call(null,inst_29121,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29124 = cljs.core.get.call(null,inst_29121,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29125 = inst_29101;
var state_29197__$1 = (function (){var statearr_29248 = state_29197;
(statearr_29248[(16)] = inst_29123);

(statearr_29248[(7)] = inst_29125);

(statearr_29248[(17)] = inst_29122);

(statearr_29248[(18)] = inst_29124);

return statearr_29248;
})();
var statearr_29249_29303 = state_29197__$1;
(statearr_29249_29303[(2)] = null);

(statearr_29249_29303[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (18))){
var inst_29139 = (state_29197[(2)]);
var state_29197__$1 = state_29197;
var statearr_29250_29304 = state_29197__$1;
(statearr_29250_29304[(2)] = inst_29139);

(statearr_29250_29304[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (37))){
var state_29197__$1 = state_29197;
var statearr_29251_29305 = state_29197__$1;
(statearr_29251_29305[(2)] = null);

(statearr_29251_29305[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29198 === (8))){
var inst_29101 = (state_29197[(8)]);
var inst_29118 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29101);
var state_29197__$1 = state_29197;
var statearr_29252_29306 = state_29197__$1;
(statearr_29252_29306[(2)] = inst_29118);

(statearr_29252_29306[(1)] = (10));


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
});})(c__27527__auto___29260,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26808__auto__,c__27527__auto___29260,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26809__auto__ = null;
var cljs$core$async$mix_$_state_machine__26809__auto____0 = (function (){
var statearr_29256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29256[(0)] = cljs$core$async$mix_$_state_machine__26809__auto__);

(statearr_29256[(1)] = (1));

return statearr_29256;
});
var cljs$core$async$mix_$_state_machine__26809__auto____1 = (function (state_29197){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_29197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e29257){if((e29257 instanceof Object)){
var ex__26812__auto__ = e29257;
var statearr_29258_29307 = state_29197;
(statearr_29258_29307[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29308 = state_29197;
state_29197 = G__29308;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26809__auto__ = function(state_29197){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26809__auto____1.call(this,state_29197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26809__auto____0;
cljs$core$async$mix_$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26809__auto____1;
return cljs$core$async$mix_$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__27527__auto___29260,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27529__auto__ = (function (){var statearr_29259 = f__27528__auto__.call(null);
(statearr_29259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto___29260);

return statearr_29259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(c__27527__auto___29260,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__25454__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p,v,ch);
} else {
var m__25454__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29309 = [];
var len__25865__auto___29312 = arguments.length;
var i__25866__auto___29313 = (0);
while(true){
if((i__25866__auto___29313 < len__25865__auto___29312)){
args29309.push((arguments[i__25866__auto___29313]));

var G__29314 = (i__25866__auto___29313 + (1));
i__25866__auto___29313 = G__29314;
continue;
} else {
}
break;
}

var G__29311 = args29309.length;
switch (G__29311) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29309.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p);
} else {
var m__25454__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__25453__auto__ = (((p == null))?null:p);
var m__25454__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__25453__auto__)]);
if(!((m__25454__auto__ == null))){
return m__25454__auto__.call(null,p,v);
} else {
var m__25454__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__25454__auto____$1 == null))){
return m__25454__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29317 = [];
var len__25865__auto___29442 = arguments.length;
var i__25866__auto___29443 = (0);
while(true){
if((i__25866__auto___29443 < len__25865__auto___29442)){
args29317.push((arguments[i__25866__auto___29443]));

var G__29444 = (i__25866__auto___29443 + (1));
i__25866__auto___29443 = G__29444;
continue;
} else {
}
break;
}

var G__29319 = args29317.length;
switch (G__29319) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29317.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__24790__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__24790__auto__)){
return or__24790__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__24790__auto__,mults){
return (function (p1__29316_SHARP_){
if(cljs.core.truth_(p1__29316_SHARP_.call(null,topic))){
return p1__29316_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29316_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__24790__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29320 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29320 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29321){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29321 = meta29321;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29322,meta29321__$1){
var self__ = this;
var _29322__$1 = this;
return (new cljs.core.async.t_cljs$core$async29320(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29321__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29320.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29322){
var self__ = this;
var _29322__$1 = this;
return self__.meta29321;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29320.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29320.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29320.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29320.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29320.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29320.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29320.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29320.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29321","meta29321",2126331507,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29320.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29320.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29320";

cljs.core.async.t_cljs$core$async29320.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29320");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29320 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29320(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29321){
return (new cljs.core.async.t_cljs$core$async29320(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29321));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29320(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27527__auto___29446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27527__auto___29446,mults,ensure_mult,p){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (c__27527__auto___29446,mults,ensure_mult,p){
return (function (state_29394){
var state_val_29395 = (state_29394[(1)]);
if((state_val_29395 === (7))){
var inst_29390 = (state_29394[(2)]);
var state_29394__$1 = state_29394;
var statearr_29396_29447 = state_29394__$1;
(statearr_29396_29447[(2)] = inst_29390);

(statearr_29396_29447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29395 === (20))){
var state_29394__$1 = state_29394;
var statearr_29397_29448 = state_29394__$1;
(statearr_29397_29448[(2)] = null);

(statearr_29397_29448[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29395 === (1))){
var state_29394__$1 = state_29394;
var statearr_29398_29449 = state_29394__$1;
(statearr_29398_29449[(2)] = null);

(statearr_29398_29449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29395 === (24))){
var inst_29373 = (state_29394[(7)]);
var inst_29382 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29373);
var state_29394__$1 = state_29394;
var statearr_29399_29450 = state_29394__$1;
(statearr_29399_29450[(2)] = inst_29382);

(statearr_29399_29450[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29395 === (4))){
var inst_29325 = (state_29394[(8)]);
var inst_29325__$1 = (state_29394[(2)]);
var inst_29326 = (inst_29325__$1 == null);
var state_29394__$1 = (function (){var statearr_29400 = state_29394;
(statearr_29400[(8)] = inst_29325__$1);

return statearr_29400;
})();
if(cljs.core.truth_(inst_29326)){
var statearr_29401_29451 = state_29394__$1;
(statearr_29401_29451[(1)] = (5));

} else {
var statearr_29402_29452 = state_29394__$1;
(statearr_29402_29452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29395 === (15))){
var inst_29367 = (state_29394[(2)]);
var state_29394__$1 = state_29394;
var statearr_29403_29453 = state_29394__$1;
(statearr_29403_29453[(2)] = inst_29367);

(statearr_29403_29453[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29395 === (21))){
var inst_29387 = (state_29394[(2)]);
var state_29394__$1 = (function (){var statearr_29404 = state_29394;
(statearr_29404[(9)] = inst_29387);

return statearr_29404;
})();
var statearr_29405_29454 = state_29394__$1;
(statearr_29405_29454[(2)] = null);

(statearr_29405_29454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29395 === (13))){
var inst_29349 = (state_29394[(10)]);
var inst_29351 = cljs.core.chunked_seq_QMARK_.call(null,inst_29349);
var state_29394__$1 = state_29394;
if(inst_29351){
var statearr_29406_29455 = state_29394__$1;
(statearr_29406_29455[(1)] = (16));

} else {
var statearr_29407_29456 = state_29394__$1;
(statearr_29407_29456[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29395 === (22))){
var inst_29379 = (state_29394[(2)]);
var state_29394__$1 = state_29394;
if(cljs.core.truth_(inst_29379)){
var statearr_29408_29457 = state_29394__$1;
(statearr_29408_29457[(1)] = (23));

} else {
var statearr_29409_29458 = state_29394__$1;
(statearr_29409_29458[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29395 === (6))){
var inst_29325 = (state_29394[(8)]);
var inst_29375 = (state_29394[(11)]);
var inst_29373 = (state_29394[(7)]);
var inst_29373__$1 = topic_fn.call(null,inst_29325);
var inst_29374 = cljs.core.deref.call(null,mults);
var inst_29375__$1 = cljs.core.get.call(null,inst_29374,inst_29373__$1);
var state_29394__$1 = (function (){var statearr_29410 = state_29394;
(statearr_29410[(11)] = inst_29375__$1);

(statearr_29410[(7)] = inst_29373__$1);

return statearr_29410;
})();
if(cljs.core.truth_(inst_29375__$1)){
var statearr_29411_29459 = state_29394__$1;
(statearr_29411_29459[(1)] = (19));

} else {
var statearr_29412_29460 = state_29394__$1;
(statearr_29412_29460[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29395 === (25))){
var inst_29384 = (state_29394[(2)]);
var state_29394__$1 = state_29394;
var statearr_29413_29461 = state_29394__$1;
(statearr_29413_29461[(2)] = inst_29384);

(statearr_29413_29461[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29395 === (17))){
var inst_29349 = (state_29394[(10)]);
var inst_29358 = cljs.core.first.call(null,inst_29349);
var inst_29359 = cljs.core.async.muxch_STAR_.call(null,inst_29358);
var inst_29360 = cljs.core.async.close_BANG_.call(null,inst_29359);
var inst_29361 = cljs.core.next.call(null,inst_29349);
var inst_29335 = inst_29361;
var inst_29336 = null;
var inst_29337 = (0);
var inst_29338 = (0);
var state_29394__$1 = (function (){var statearr_29414 = state_29394;
(statearr_29414[(12)] = inst_29336);

(statearr_29414[(13)] = inst_29335);

(statearr_29414[(14)] = inst_29360);

(statearr_29414[(15)] = inst_29337);

(statearr_29414[(16)] = inst_29338);

return statearr_29414;
})();
var statearr_29415_29462 = state_29394__$1;
(statearr_29415_29462[(2)] = null);

(statearr_29415_29462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29395 === (3))){
var inst_29392 = (state_29394[(2)]);
var state_29394__$1 = state_29394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29394__$1,inst_29392);
} else {
if((state_val_29395 === (12))){
var inst_29369 = (state_29394[(2)]);
var state_29394__$1 = state_29394;
var statearr_29416_29463 = state_29394__$1;
(statearr_29416_29463[(2)] = inst_29369);

(statearr_29416_29463[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29395 === (2))){
var state_29394__$1 = state_29394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29394__$1,(4),ch);
} else {
if((state_val_29395 === (23))){
var state_29394__$1 = state_29394;
var statearr_29417_29464 = state_29394__$1;
(statearr_29417_29464[(2)] = null);

(statearr_29417_29464[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29395 === (19))){
var inst_29325 = (state_29394[(8)]);
var inst_29375 = (state_29394[(11)]);
var inst_29377 = cljs.core.async.muxch_STAR_.call(null,inst_29375);
var state_29394__$1 = state_29394;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29394__$1,(22),inst_29377,inst_29325);
} else {
if((state_val_29395 === (11))){
var inst_29335 = (state_29394[(13)]);
var inst_29349 = (state_29394[(10)]);
var inst_29349__$1 = cljs.core.seq.call(null,inst_29335);
var state_29394__$1 = (function (){var statearr_29418 = state_29394;
(statearr_29418[(10)] = inst_29349__$1);

return statearr_29418;
})();
if(inst_29349__$1){
var statearr_29419_29465 = state_29394__$1;
(statearr_29419_29465[(1)] = (13));

} else {
var statearr_29420_29466 = state_29394__$1;
(statearr_29420_29466[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29395 === (9))){
var inst_29371 = (state_29394[(2)]);
var state_29394__$1 = state_29394;
var statearr_29421_29467 = state_29394__$1;
(statearr_29421_29467[(2)] = inst_29371);

(statearr_29421_29467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29395 === (5))){
var inst_29332 = cljs.core.deref.call(null,mults);
var inst_29333 = cljs.core.vals.call(null,inst_29332);
var inst_29334 = cljs.core.seq.call(null,inst_29333);
var inst_29335 = inst_29334;
var inst_29336 = null;
var inst_29337 = (0);
var inst_29338 = (0);
var state_29394__$1 = (function (){var statearr_29422 = state_29394;
(statearr_29422[(12)] = inst_29336);

(statearr_29422[(13)] = inst_29335);

(statearr_29422[(15)] = inst_29337);

(statearr_29422[(16)] = inst_29338);

return statearr_29422;
})();
var statearr_29423_29468 = state_29394__$1;
(statearr_29423_29468[(2)] = null);

(statearr_29423_29468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29395 === (14))){
var state_29394__$1 = state_29394;
var statearr_29427_29469 = state_29394__$1;
(statearr_29427_29469[(2)] = null);

(statearr_29427_29469[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29395 === (16))){
var inst_29349 = (state_29394[(10)]);
var inst_29353 = cljs.core.chunk_first.call(null,inst_29349);
var inst_29354 = cljs.core.chunk_rest.call(null,inst_29349);
var inst_29355 = cljs.core.count.call(null,inst_29353);
var inst_29335 = inst_29354;
var inst_29336 = inst_29353;
var inst_29337 = inst_29355;
var inst_29338 = (0);
var state_29394__$1 = (function (){var statearr_29428 = state_29394;
(statearr_29428[(12)] = inst_29336);

(statearr_29428[(13)] = inst_29335);

(statearr_29428[(15)] = inst_29337);

(statearr_29428[(16)] = inst_29338);

return statearr_29428;
})();
var statearr_29429_29470 = state_29394__$1;
(statearr_29429_29470[(2)] = null);

(statearr_29429_29470[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29395 === (10))){
var inst_29336 = (state_29394[(12)]);
var inst_29335 = (state_29394[(13)]);
var inst_29337 = (state_29394[(15)]);
var inst_29338 = (state_29394[(16)]);
var inst_29343 = cljs.core._nth.call(null,inst_29336,inst_29338);
var inst_29344 = cljs.core.async.muxch_STAR_.call(null,inst_29343);
var inst_29345 = cljs.core.async.close_BANG_.call(null,inst_29344);
var inst_29346 = (inst_29338 + (1));
var tmp29424 = inst_29336;
var tmp29425 = inst_29335;
var tmp29426 = inst_29337;
var inst_29335__$1 = tmp29425;
var inst_29336__$1 = tmp29424;
var inst_29337__$1 = tmp29426;
var inst_29338__$1 = inst_29346;
var state_29394__$1 = (function (){var statearr_29430 = state_29394;
(statearr_29430[(12)] = inst_29336__$1);

(statearr_29430[(13)] = inst_29335__$1);

(statearr_29430[(17)] = inst_29345);

(statearr_29430[(15)] = inst_29337__$1);

(statearr_29430[(16)] = inst_29338__$1);

return statearr_29430;
})();
var statearr_29431_29471 = state_29394__$1;
(statearr_29431_29471[(2)] = null);

(statearr_29431_29471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29395 === (18))){
var inst_29364 = (state_29394[(2)]);
var state_29394__$1 = state_29394;
var statearr_29432_29472 = state_29394__$1;
(statearr_29432_29472[(2)] = inst_29364);

(statearr_29432_29472[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29395 === (8))){
var inst_29337 = (state_29394[(15)]);
var inst_29338 = (state_29394[(16)]);
var inst_29340 = (inst_29338 < inst_29337);
var inst_29341 = inst_29340;
var state_29394__$1 = state_29394;
if(cljs.core.truth_(inst_29341)){
var statearr_29433_29473 = state_29394__$1;
(statearr_29433_29473[(1)] = (10));

} else {
var statearr_29434_29474 = state_29394__$1;
(statearr_29434_29474[(1)] = (11));

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
});})(c__27527__auto___29446,mults,ensure_mult,p))
;
return ((function (switch__26808__auto__,c__27527__auto___29446,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_29438 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29438[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_29438[(1)] = (1));

return statearr_29438;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_29394){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_29394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e29439){if((e29439 instanceof Object)){
var ex__26812__auto__ = e29439;
var statearr_29440_29475 = state_29394;
(statearr_29440_29475[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29476 = state_29394;
state_29394 = G__29476;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_29394){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_29394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__27527__auto___29446,mults,ensure_mult,p))
})();
var state__27529__auto__ = (function (){var statearr_29441 = f__27528__auto__.call(null);
(statearr_29441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto___29446);

return statearr_29441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(c__27527__auto___29446,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29477 = [];
var len__25865__auto___29480 = arguments.length;
var i__25866__auto___29481 = (0);
while(true){
if((i__25866__auto___29481 < len__25865__auto___29480)){
args29477.push((arguments[i__25866__auto___29481]));

var G__29482 = (i__25866__auto___29481 + (1));
i__25866__auto___29481 = G__29482;
continue;
} else {
}
break;
}

var G__29479 = args29477.length;
switch (G__29479) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29477.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29484 = [];
var len__25865__auto___29487 = arguments.length;
var i__25866__auto___29488 = (0);
while(true){
if((i__25866__auto___29488 < len__25865__auto___29487)){
args29484.push((arguments[i__25866__auto___29488]));

var G__29489 = (i__25866__auto___29488 + (1));
i__25866__auto___29488 = G__29489;
continue;
} else {
}
break;
}

var G__29486 = args29484.length;
switch (G__29486) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29484.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29491 = [];
var len__25865__auto___29562 = arguments.length;
var i__25866__auto___29563 = (0);
while(true){
if((i__25866__auto___29563 < len__25865__auto___29562)){
args29491.push((arguments[i__25866__auto___29563]));

var G__29564 = (i__25866__auto___29563 + (1));
i__25866__auto___29563 = G__29564;
continue;
} else {
}
break;
}

var G__29493 = args29491.length;
switch (G__29493) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29491.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27527__auto___29566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27527__auto___29566,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (c__27527__auto___29566,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29532){
var state_val_29533 = (state_29532[(1)]);
if((state_val_29533 === (7))){
var state_29532__$1 = state_29532;
var statearr_29534_29567 = state_29532__$1;
(statearr_29534_29567[(2)] = null);

(statearr_29534_29567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (1))){
var state_29532__$1 = state_29532;
var statearr_29535_29568 = state_29532__$1;
(statearr_29535_29568[(2)] = null);

(statearr_29535_29568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (4))){
var inst_29496 = (state_29532[(7)]);
var inst_29498 = (inst_29496 < cnt);
var state_29532__$1 = state_29532;
if(cljs.core.truth_(inst_29498)){
var statearr_29536_29569 = state_29532__$1;
(statearr_29536_29569[(1)] = (6));

} else {
var statearr_29537_29570 = state_29532__$1;
(statearr_29537_29570[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (15))){
var inst_29528 = (state_29532[(2)]);
var state_29532__$1 = state_29532;
var statearr_29538_29571 = state_29532__$1;
(statearr_29538_29571[(2)] = inst_29528);

(statearr_29538_29571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (13))){
var inst_29521 = cljs.core.async.close_BANG_.call(null,out);
var state_29532__$1 = state_29532;
var statearr_29539_29572 = state_29532__$1;
(statearr_29539_29572[(2)] = inst_29521);

(statearr_29539_29572[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (6))){
var state_29532__$1 = state_29532;
var statearr_29540_29573 = state_29532__$1;
(statearr_29540_29573[(2)] = null);

(statearr_29540_29573[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (3))){
var inst_29530 = (state_29532[(2)]);
var state_29532__$1 = state_29532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29532__$1,inst_29530);
} else {
if((state_val_29533 === (12))){
var inst_29518 = (state_29532[(8)]);
var inst_29518__$1 = (state_29532[(2)]);
var inst_29519 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29518__$1);
var state_29532__$1 = (function (){var statearr_29541 = state_29532;
(statearr_29541[(8)] = inst_29518__$1);

return statearr_29541;
})();
if(cljs.core.truth_(inst_29519)){
var statearr_29542_29574 = state_29532__$1;
(statearr_29542_29574[(1)] = (13));

} else {
var statearr_29543_29575 = state_29532__$1;
(statearr_29543_29575[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (2))){
var inst_29495 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29496 = (0);
var state_29532__$1 = (function (){var statearr_29544 = state_29532;
(statearr_29544[(9)] = inst_29495);

(statearr_29544[(7)] = inst_29496);

return statearr_29544;
})();
var statearr_29545_29576 = state_29532__$1;
(statearr_29545_29576[(2)] = null);

(statearr_29545_29576[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (11))){
var inst_29496 = (state_29532[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29532,(10),Object,null,(9));
var inst_29505 = chs__$1.call(null,inst_29496);
var inst_29506 = done.call(null,inst_29496);
var inst_29507 = cljs.core.async.take_BANG_.call(null,inst_29505,inst_29506);
var state_29532__$1 = state_29532;
var statearr_29546_29577 = state_29532__$1;
(statearr_29546_29577[(2)] = inst_29507);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29532__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (9))){
var inst_29496 = (state_29532[(7)]);
var inst_29509 = (state_29532[(2)]);
var inst_29510 = (inst_29496 + (1));
var inst_29496__$1 = inst_29510;
var state_29532__$1 = (function (){var statearr_29547 = state_29532;
(statearr_29547[(10)] = inst_29509);

(statearr_29547[(7)] = inst_29496__$1);

return statearr_29547;
})();
var statearr_29548_29578 = state_29532__$1;
(statearr_29548_29578[(2)] = null);

(statearr_29548_29578[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (5))){
var inst_29516 = (state_29532[(2)]);
var state_29532__$1 = (function (){var statearr_29549 = state_29532;
(statearr_29549[(11)] = inst_29516);

return statearr_29549;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29532__$1,(12),dchan);
} else {
if((state_val_29533 === (14))){
var inst_29518 = (state_29532[(8)]);
var inst_29523 = cljs.core.apply.call(null,f,inst_29518);
var state_29532__$1 = state_29532;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29532__$1,(16),out,inst_29523);
} else {
if((state_val_29533 === (16))){
var inst_29525 = (state_29532[(2)]);
var state_29532__$1 = (function (){var statearr_29550 = state_29532;
(statearr_29550[(12)] = inst_29525);

return statearr_29550;
})();
var statearr_29551_29579 = state_29532__$1;
(statearr_29551_29579[(2)] = null);

(statearr_29551_29579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (10))){
var inst_29500 = (state_29532[(2)]);
var inst_29501 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29532__$1 = (function (){var statearr_29552 = state_29532;
(statearr_29552[(13)] = inst_29500);

return statearr_29552;
})();
var statearr_29553_29580 = state_29532__$1;
(statearr_29553_29580[(2)] = inst_29501);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29532__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29533 === (8))){
var inst_29514 = (state_29532[(2)]);
var state_29532__$1 = state_29532;
var statearr_29554_29581 = state_29532__$1;
(statearr_29554_29581[(2)] = inst_29514);

(statearr_29554_29581[(1)] = (5));


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
});})(c__27527__auto___29566,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26808__auto__,c__27527__auto___29566,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_29558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29558[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_29558[(1)] = (1));

return statearr_29558;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_29532){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_29532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e29559){if((e29559 instanceof Object)){
var ex__26812__auto__ = e29559;
var statearr_29560_29582 = state_29532;
(statearr_29560_29582[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29583 = state_29532;
state_29532 = G__29583;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_29532){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_29532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__27527__auto___29566,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27529__auto__ = (function (){var statearr_29561 = f__27528__auto__.call(null);
(statearr_29561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto___29566);

return statearr_29561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(c__27527__auto___29566,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29585 = [];
var len__25865__auto___29643 = arguments.length;
var i__25866__auto___29644 = (0);
while(true){
if((i__25866__auto___29644 < len__25865__auto___29643)){
args29585.push((arguments[i__25866__auto___29644]));

var G__29645 = (i__25866__auto___29644 + (1));
i__25866__auto___29644 = G__29645;
continue;
} else {
}
break;
}

var G__29587 = args29585.length;
switch (G__29587) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29585.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27527__auto___29647 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27527__auto___29647,out){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (c__27527__auto___29647,out){
return (function (state_29619){
var state_val_29620 = (state_29619[(1)]);
if((state_val_29620 === (7))){
var inst_29599 = (state_29619[(7)]);
var inst_29598 = (state_29619[(8)]);
var inst_29598__$1 = (state_29619[(2)]);
var inst_29599__$1 = cljs.core.nth.call(null,inst_29598__$1,(0),null);
var inst_29600 = cljs.core.nth.call(null,inst_29598__$1,(1),null);
var inst_29601 = (inst_29599__$1 == null);
var state_29619__$1 = (function (){var statearr_29621 = state_29619;
(statearr_29621[(7)] = inst_29599__$1);

(statearr_29621[(9)] = inst_29600);

(statearr_29621[(8)] = inst_29598__$1);

return statearr_29621;
})();
if(cljs.core.truth_(inst_29601)){
var statearr_29622_29648 = state_29619__$1;
(statearr_29622_29648[(1)] = (8));

} else {
var statearr_29623_29649 = state_29619__$1;
(statearr_29623_29649[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (1))){
var inst_29588 = cljs.core.vec.call(null,chs);
var inst_29589 = inst_29588;
var state_29619__$1 = (function (){var statearr_29624 = state_29619;
(statearr_29624[(10)] = inst_29589);

return statearr_29624;
})();
var statearr_29625_29650 = state_29619__$1;
(statearr_29625_29650[(2)] = null);

(statearr_29625_29650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (4))){
var inst_29589 = (state_29619[(10)]);
var state_29619__$1 = state_29619;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29619__$1,(7),inst_29589);
} else {
if((state_val_29620 === (6))){
var inst_29615 = (state_29619[(2)]);
var state_29619__$1 = state_29619;
var statearr_29626_29651 = state_29619__$1;
(statearr_29626_29651[(2)] = inst_29615);

(statearr_29626_29651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (3))){
var inst_29617 = (state_29619[(2)]);
var state_29619__$1 = state_29619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29619__$1,inst_29617);
} else {
if((state_val_29620 === (2))){
var inst_29589 = (state_29619[(10)]);
var inst_29591 = cljs.core.count.call(null,inst_29589);
var inst_29592 = (inst_29591 > (0));
var state_29619__$1 = state_29619;
if(cljs.core.truth_(inst_29592)){
var statearr_29628_29652 = state_29619__$1;
(statearr_29628_29652[(1)] = (4));

} else {
var statearr_29629_29653 = state_29619__$1;
(statearr_29629_29653[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (11))){
var inst_29589 = (state_29619[(10)]);
var inst_29608 = (state_29619[(2)]);
var tmp29627 = inst_29589;
var inst_29589__$1 = tmp29627;
var state_29619__$1 = (function (){var statearr_29630 = state_29619;
(statearr_29630[(10)] = inst_29589__$1);

(statearr_29630[(11)] = inst_29608);

return statearr_29630;
})();
var statearr_29631_29654 = state_29619__$1;
(statearr_29631_29654[(2)] = null);

(statearr_29631_29654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (9))){
var inst_29599 = (state_29619[(7)]);
var state_29619__$1 = state_29619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29619__$1,(11),out,inst_29599);
} else {
if((state_val_29620 === (5))){
var inst_29613 = cljs.core.async.close_BANG_.call(null,out);
var state_29619__$1 = state_29619;
var statearr_29632_29655 = state_29619__$1;
(statearr_29632_29655[(2)] = inst_29613);

(statearr_29632_29655[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (10))){
var inst_29611 = (state_29619[(2)]);
var state_29619__$1 = state_29619;
var statearr_29633_29656 = state_29619__$1;
(statearr_29633_29656[(2)] = inst_29611);

(statearr_29633_29656[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29620 === (8))){
var inst_29599 = (state_29619[(7)]);
var inst_29589 = (state_29619[(10)]);
var inst_29600 = (state_29619[(9)]);
var inst_29598 = (state_29619[(8)]);
var inst_29603 = (function (){var cs = inst_29589;
var vec__29594 = inst_29598;
var v = inst_29599;
var c = inst_29600;
return ((function (cs,vec__29594,v,c,inst_29599,inst_29589,inst_29600,inst_29598,state_val_29620,c__27527__auto___29647,out){
return (function (p1__29584_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29584_SHARP_);
});
;})(cs,vec__29594,v,c,inst_29599,inst_29589,inst_29600,inst_29598,state_val_29620,c__27527__auto___29647,out))
})();
var inst_29604 = cljs.core.filterv.call(null,inst_29603,inst_29589);
var inst_29589__$1 = inst_29604;
var state_29619__$1 = (function (){var statearr_29634 = state_29619;
(statearr_29634[(10)] = inst_29589__$1);

return statearr_29634;
})();
var statearr_29635_29657 = state_29619__$1;
(statearr_29635_29657[(2)] = null);

(statearr_29635_29657[(1)] = (2));


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
});})(c__27527__auto___29647,out))
;
return ((function (switch__26808__auto__,c__27527__auto___29647,out){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_29639 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29639[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_29639[(1)] = (1));

return statearr_29639;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_29619){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_29619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e29640){if((e29640 instanceof Object)){
var ex__26812__auto__ = e29640;
var statearr_29641_29658 = state_29619;
(statearr_29641_29658[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29659 = state_29619;
state_29619 = G__29659;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_29619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_29619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__27527__auto___29647,out))
})();
var state__27529__auto__ = (function (){var statearr_29642 = f__27528__auto__.call(null);
(statearr_29642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto___29647);

return statearr_29642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(c__27527__auto___29647,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29660 = [];
var len__25865__auto___29709 = arguments.length;
var i__25866__auto___29710 = (0);
while(true){
if((i__25866__auto___29710 < len__25865__auto___29709)){
args29660.push((arguments[i__25866__auto___29710]));

var G__29711 = (i__25866__auto___29710 + (1));
i__25866__auto___29710 = G__29711;
continue;
} else {
}
break;
}

var G__29662 = args29660.length;
switch (G__29662) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29660.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27527__auto___29713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27527__auto___29713,out){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (c__27527__auto___29713,out){
return (function (state_29686){
var state_val_29687 = (state_29686[(1)]);
if((state_val_29687 === (7))){
var inst_29668 = (state_29686[(7)]);
var inst_29668__$1 = (state_29686[(2)]);
var inst_29669 = (inst_29668__$1 == null);
var inst_29670 = cljs.core.not.call(null,inst_29669);
var state_29686__$1 = (function (){var statearr_29688 = state_29686;
(statearr_29688[(7)] = inst_29668__$1);

return statearr_29688;
})();
if(inst_29670){
var statearr_29689_29714 = state_29686__$1;
(statearr_29689_29714[(1)] = (8));

} else {
var statearr_29690_29715 = state_29686__$1;
(statearr_29690_29715[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (1))){
var inst_29663 = (0);
var state_29686__$1 = (function (){var statearr_29691 = state_29686;
(statearr_29691[(8)] = inst_29663);

return statearr_29691;
})();
var statearr_29692_29716 = state_29686__$1;
(statearr_29692_29716[(2)] = null);

(statearr_29692_29716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (4))){
var state_29686__$1 = state_29686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29686__$1,(7),ch);
} else {
if((state_val_29687 === (6))){
var inst_29681 = (state_29686[(2)]);
var state_29686__$1 = state_29686;
var statearr_29693_29717 = state_29686__$1;
(statearr_29693_29717[(2)] = inst_29681);

(statearr_29693_29717[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (3))){
var inst_29683 = (state_29686[(2)]);
var inst_29684 = cljs.core.async.close_BANG_.call(null,out);
var state_29686__$1 = (function (){var statearr_29694 = state_29686;
(statearr_29694[(9)] = inst_29683);

return statearr_29694;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29686__$1,inst_29684);
} else {
if((state_val_29687 === (2))){
var inst_29663 = (state_29686[(8)]);
var inst_29665 = (inst_29663 < n);
var state_29686__$1 = state_29686;
if(cljs.core.truth_(inst_29665)){
var statearr_29695_29718 = state_29686__$1;
(statearr_29695_29718[(1)] = (4));

} else {
var statearr_29696_29719 = state_29686__$1;
(statearr_29696_29719[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (11))){
var inst_29663 = (state_29686[(8)]);
var inst_29673 = (state_29686[(2)]);
var inst_29674 = (inst_29663 + (1));
var inst_29663__$1 = inst_29674;
var state_29686__$1 = (function (){var statearr_29697 = state_29686;
(statearr_29697[(8)] = inst_29663__$1);

(statearr_29697[(10)] = inst_29673);

return statearr_29697;
})();
var statearr_29698_29720 = state_29686__$1;
(statearr_29698_29720[(2)] = null);

(statearr_29698_29720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (9))){
var state_29686__$1 = state_29686;
var statearr_29699_29721 = state_29686__$1;
(statearr_29699_29721[(2)] = null);

(statearr_29699_29721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (5))){
var state_29686__$1 = state_29686;
var statearr_29700_29722 = state_29686__$1;
(statearr_29700_29722[(2)] = null);

(statearr_29700_29722[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (10))){
var inst_29678 = (state_29686[(2)]);
var state_29686__$1 = state_29686;
var statearr_29701_29723 = state_29686__$1;
(statearr_29701_29723[(2)] = inst_29678);

(statearr_29701_29723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29687 === (8))){
var inst_29668 = (state_29686[(7)]);
var state_29686__$1 = state_29686;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29686__$1,(11),out,inst_29668);
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
});})(c__27527__auto___29713,out))
;
return ((function (switch__26808__auto__,c__27527__auto___29713,out){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_29705 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29705[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_29705[(1)] = (1));

return statearr_29705;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_29686){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_29686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e29706){if((e29706 instanceof Object)){
var ex__26812__auto__ = e29706;
var statearr_29707_29724 = state_29686;
(statearr_29707_29724[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29725 = state_29686;
state_29686 = G__29725;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_29686){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_29686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__27527__auto___29713,out))
})();
var state__27529__auto__ = (function (){var statearr_29708 = f__27528__auto__.call(null);
(statearr_29708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto___29713);

return statearr_29708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(c__27527__auto___29713,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29733 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29733 = (function (map_LT_,f,ch,meta29734){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29734 = meta29734;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29735,meta29734__$1){
var self__ = this;
var _29735__$1 = this;
return (new cljs.core.async.t_cljs$core$async29733(self__.map_LT_,self__.f,self__.ch,meta29734__$1));
});

cljs.core.async.t_cljs$core$async29733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29735){
var self__ = this;
var _29735__$1 = this;
return self__.meta29734;
});

cljs.core.async.t_cljs$core$async29733.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29733.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29733.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29733.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29733.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29736 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29736 = (function (map_LT_,f,ch,meta29734,_,fn1,meta29737){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29734 = meta29734;
this._ = _;
this.fn1 = fn1;
this.meta29737 = meta29737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29738,meta29737__$1){
var self__ = this;
var _29738__$1 = this;
return (new cljs.core.async.t_cljs$core$async29736(self__.map_LT_,self__.f,self__.ch,self__.meta29734,self__._,self__.fn1,meta29737__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29736.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29738){
var self__ = this;
var _29738__$1 = this;
return self__.meta29737;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29736.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29736.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29736.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29736.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29726_SHARP_){
return f1.call(null,(((p1__29726_SHARP_ == null))?null:self__.f.call(null,p1__29726_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29736.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29734","meta29734",1786391742,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29733","cljs.core.async/t_cljs$core$async29733",-796991817,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29737","meta29737",-1458847965,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29736.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29736.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29736";

cljs.core.async.t_cljs$core$async29736.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29736");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29736 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29736(map_LT___$1,f__$1,ch__$1,meta29734__$1,___$2,fn1__$1,meta29737){
return (new cljs.core.async.t_cljs$core$async29736(map_LT___$1,f__$1,ch__$1,meta29734__$1,___$2,fn1__$1,meta29737));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29736(self__.map_LT_,self__.f,self__.ch,self__.meta29734,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__24778__auto__ = ret;
if(cljs.core.truth_(and__24778__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__24778__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29733.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29733.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29733.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29734","meta29734",1786391742,null)], null);
});

cljs.core.async.t_cljs$core$async29733.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29733.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29733";

cljs.core.async.t_cljs$core$async29733.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29733");
});

cljs.core.async.__GT_t_cljs$core$async29733 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29733(map_LT___$1,f__$1,ch__$1,meta29734){
return (new cljs.core.async.t_cljs$core$async29733(map_LT___$1,f__$1,ch__$1,meta29734));
});

}

return (new cljs.core.async.t_cljs$core$async29733(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29742 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29742 = (function (map_GT_,f,ch,meta29743){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29743 = meta29743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29744,meta29743__$1){
var self__ = this;
var _29744__$1 = this;
return (new cljs.core.async.t_cljs$core$async29742(self__.map_GT_,self__.f,self__.ch,meta29743__$1));
});

cljs.core.async.t_cljs$core$async29742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29744){
var self__ = this;
var _29744__$1 = this;
return self__.meta29743;
});

cljs.core.async.t_cljs$core$async29742.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29742.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29742.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29742.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29742.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29742.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29742.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29743","meta29743",235587354,null)], null);
});

cljs.core.async.t_cljs$core$async29742.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29742.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29742";

cljs.core.async.t_cljs$core$async29742.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29742");
});

cljs.core.async.__GT_t_cljs$core$async29742 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29742(map_GT___$1,f__$1,ch__$1,meta29743){
return (new cljs.core.async.t_cljs$core$async29742(map_GT___$1,f__$1,ch__$1,meta29743));
});

}

return (new cljs.core.async.t_cljs$core$async29742(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29748 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29748 = (function (filter_GT_,p,ch,meta29749){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29749 = meta29749;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29750,meta29749__$1){
var self__ = this;
var _29750__$1 = this;
return (new cljs.core.async.t_cljs$core$async29748(self__.filter_GT_,self__.p,self__.ch,meta29749__$1));
});

cljs.core.async.t_cljs$core$async29748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29750){
var self__ = this;
var _29750__$1 = this;
return self__.meta29749;
});

cljs.core.async.t_cljs$core$async29748.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29748.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29748.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29748.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29748.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29748.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29748.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29748.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29749","meta29749",1971519954,null)], null);
});

cljs.core.async.t_cljs$core$async29748.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29748.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29748";

cljs.core.async.t_cljs$core$async29748.cljs$lang$ctorPrWriter = (function (this__25396__auto__,writer__25397__auto__,opt__25398__auto__){
return cljs.core._write.call(null,writer__25397__auto__,"cljs.core.async/t_cljs$core$async29748");
});

cljs.core.async.__GT_t_cljs$core$async29748 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29748(filter_GT___$1,p__$1,ch__$1,meta29749){
return (new cljs.core.async.t_cljs$core$async29748(filter_GT___$1,p__$1,ch__$1,meta29749));
});

}

return (new cljs.core.async.t_cljs$core$async29748(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29751 = [];
var len__25865__auto___29795 = arguments.length;
var i__25866__auto___29796 = (0);
while(true){
if((i__25866__auto___29796 < len__25865__auto___29795)){
args29751.push((arguments[i__25866__auto___29796]));

var G__29797 = (i__25866__auto___29796 + (1));
i__25866__auto___29796 = G__29797;
continue;
} else {
}
break;
}

var G__29753 = args29751.length;
switch (G__29753) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29751.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27527__auto___29799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27527__auto___29799,out){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (c__27527__auto___29799,out){
return (function (state_29774){
var state_val_29775 = (state_29774[(1)]);
if((state_val_29775 === (7))){
var inst_29770 = (state_29774[(2)]);
var state_29774__$1 = state_29774;
var statearr_29776_29800 = state_29774__$1;
(statearr_29776_29800[(2)] = inst_29770);

(statearr_29776_29800[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (1))){
var state_29774__$1 = state_29774;
var statearr_29777_29801 = state_29774__$1;
(statearr_29777_29801[(2)] = null);

(statearr_29777_29801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (4))){
var inst_29756 = (state_29774[(7)]);
var inst_29756__$1 = (state_29774[(2)]);
var inst_29757 = (inst_29756__$1 == null);
var state_29774__$1 = (function (){var statearr_29778 = state_29774;
(statearr_29778[(7)] = inst_29756__$1);

return statearr_29778;
})();
if(cljs.core.truth_(inst_29757)){
var statearr_29779_29802 = state_29774__$1;
(statearr_29779_29802[(1)] = (5));

} else {
var statearr_29780_29803 = state_29774__$1;
(statearr_29780_29803[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (6))){
var inst_29756 = (state_29774[(7)]);
var inst_29761 = p.call(null,inst_29756);
var state_29774__$1 = state_29774;
if(cljs.core.truth_(inst_29761)){
var statearr_29781_29804 = state_29774__$1;
(statearr_29781_29804[(1)] = (8));

} else {
var statearr_29782_29805 = state_29774__$1;
(statearr_29782_29805[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (3))){
var inst_29772 = (state_29774[(2)]);
var state_29774__$1 = state_29774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29774__$1,inst_29772);
} else {
if((state_val_29775 === (2))){
var state_29774__$1 = state_29774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29774__$1,(4),ch);
} else {
if((state_val_29775 === (11))){
var inst_29764 = (state_29774[(2)]);
var state_29774__$1 = state_29774;
var statearr_29783_29806 = state_29774__$1;
(statearr_29783_29806[(2)] = inst_29764);

(statearr_29783_29806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (9))){
var state_29774__$1 = state_29774;
var statearr_29784_29807 = state_29774__$1;
(statearr_29784_29807[(2)] = null);

(statearr_29784_29807[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (5))){
var inst_29759 = cljs.core.async.close_BANG_.call(null,out);
var state_29774__$1 = state_29774;
var statearr_29785_29808 = state_29774__$1;
(statearr_29785_29808[(2)] = inst_29759);

(statearr_29785_29808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (10))){
var inst_29767 = (state_29774[(2)]);
var state_29774__$1 = (function (){var statearr_29786 = state_29774;
(statearr_29786[(8)] = inst_29767);

return statearr_29786;
})();
var statearr_29787_29809 = state_29774__$1;
(statearr_29787_29809[(2)] = null);

(statearr_29787_29809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (8))){
var inst_29756 = (state_29774[(7)]);
var state_29774__$1 = state_29774;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29774__$1,(11),out,inst_29756);
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
});})(c__27527__auto___29799,out))
;
return ((function (switch__26808__auto__,c__27527__auto___29799,out){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_29791 = [null,null,null,null,null,null,null,null,null];
(statearr_29791[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_29791[(1)] = (1));

return statearr_29791;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_29774){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_29774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e29792){if((e29792 instanceof Object)){
var ex__26812__auto__ = e29792;
var statearr_29793_29810 = state_29774;
(statearr_29793_29810[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29811 = state_29774;
state_29774 = G__29811;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_29774){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_29774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__27527__auto___29799,out))
})();
var state__27529__auto__ = (function (){var statearr_29794 = f__27528__auto__.call(null);
(statearr_29794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto___29799);

return statearr_29794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(c__27527__auto___29799,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29812 = [];
var len__25865__auto___29815 = arguments.length;
var i__25866__auto___29816 = (0);
while(true){
if((i__25866__auto___29816 < len__25865__auto___29815)){
args29812.push((arguments[i__25866__auto___29816]));

var G__29817 = (i__25866__auto___29816 + (1));
i__25866__auto___29816 = G__29817;
continue;
} else {
}
break;
}

var G__29814 = args29812.length;
switch (G__29814) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29812.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27527__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27527__auto__){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (c__27527__auto__){
return (function (state_29984){
var state_val_29985 = (state_29984[(1)]);
if((state_val_29985 === (7))){
var inst_29980 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
var statearr_29986_30027 = state_29984__$1;
(statearr_29986_30027[(2)] = inst_29980);

(statearr_29986_30027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (20))){
var inst_29950 = (state_29984[(7)]);
var inst_29961 = (state_29984[(2)]);
var inst_29962 = cljs.core.next.call(null,inst_29950);
var inst_29936 = inst_29962;
var inst_29937 = null;
var inst_29938 = (0);
var inst_29939 = (0);
var state_29984__$1 = (function (){var statearr_29987 = state_29984;
(statearr_29987[(8)] = inst_29939);

(statearr_29987[(9)] = inst_29938);

(statearr_29987[(10)] = inst_29937);

(statearr_29987[(11)] = inst_29936);

(statearr_29987[(12)] = inst_29961);

return statearr_29987;
})();
var statearr_29988_30028 = state_29984__$1;
(statearr_29988_30028[(2)] = null);

(statearr_29988_30028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (1))){
var state_29984__$1 = state_29984;
var statearr_29989_30029 = state_29984__$1;
(statearr_29989_30029[(2)] = null);

(statearr_29989_30029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (4))){
var inst_29925 = (state_29984[(13)]);
var inst_29925__$1 = (state_29984[(2)]);
var inst_29926 = (inst_29925__$1 == null);
var state_29984__$1 = (function (){var statearr_29990 = state_29984;
(statearr_29990[(13)] = inst_29925__$1);

return statearr_29990;
})();
if(cljs.core.truth_(inst_29926)){
var statearr_29991_30030 = state_29984__$1;
(statearr_29991_30030[(1)] = (5));

} else {
var statearr_29992_30031 = state_29984__$1;
(statearr_29992_30031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (15))){
var state_29984__$1 = state_29984;
var statearr_29996_30032 = state_29984__$1;
(statearr_29996_30032[(2)] = null);

(statearr_29996_30032[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (21))){
var state_29984__$1 = state_29984;
var statearr_29997_30033 = state_29984__$1;
(statearr_29997_30033[(2)] = null);

(statearr_29997_30033[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (13))){
var inst_29939 = (state_29984[(8)]);
var inst_29938 = (state_29984[(9)]);
var inst_29937 = (state_29984[(10)]);
var inst_29936 = (state_29984[(11)]);
var inst_29946 = (state_29984[(2)]);
var inst_29947 = (inst_29939 + (1));
var tmp29993 = inst_29938;
var tmp29994 = inst_29937;
var tmp29995 = inst_29936;
var inst_29936__$1 = tmp29995;
var inst_29937__$1 = tmp29994;
var inst_29938__$1 = tmp29993;
var inst_29939__$1 = inst_29947;
var state_29984__$1 = (function (){var statearr_29998 = state_29984;
(statearr_29998[(14)] = inst_29946);

(statearr_29998[(8)] = inst_29939__$1);

(statearr_29998[(9)] = inst_29938__$1);

(statearr_29998[(10)] = inst_29937__$1);

(statearr_29998[(11)] = inst_29936__$1);

return statearr_29998;
})();
var statearr_29999_30034 = state_29984__$1;
(statearr_29999_30034[(2)] = null);

(statearr_29999_30034[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (22))){
var state_29984__$1 = state_29984;
var statearr_30000_30035 = state_29984__$1;
(statearr_30000_30035[(2)] = null);

(statearr_30000_30035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (6))){
var inst_29925 = (state_29984[(13)]);
var inst_29934 = f.call(null,inst_29925);
var inst_29935 = cljs.core.seq.call(null,inst_29934);
var inst_29936 = inst_29935;
var inst_29937 = null;
var inst_29938 = (0);
var inst_29939 = (0);
var state_29984__$1 = (function (){var statearr_30001 = state_29984;
(statearr_30001[(8)] = inst_29939);

(statearr_30001[(9)] = inst_29938);

(statearr_30001[(10)] = inst_29937);

(statearr_30001[(11)] = inst_29936);

return statearr_30001;
})();
var statearr_30002_30036 = state_29984__$1;
(statearr_30002_30036[(2)] = null);

(statearr_30002_30036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (17))){
var inst_29950 = (state_29984[(7)]);
var inst_29954 = cljs.core.chunk_first.call(null,inst_29950);
var inst_29955 = cljs.core.chunk_rest.call(null,inst_29950);
var inst_29956 = cljs.core.count.call(null,inst_29954);
var inst_29936 = inst_29955;
var inst_29937 = inst_29954;
var inst_29938 = inst_29956;
var inst_29939 = (0);
var state_29984__$1 = (function (){var statearr_30003 = state_29984;
(statearr_30003[(8)] = inst_29939);

(statearr_30003[(9)] = inst_29938);

(statearr_30003[(10)] = inst_29937);

(statearr_30003[(11)] = inst_29936);

return statearr_30003;
})();
var statearr_30004_30037 = state_29984__$1;
(statearr_30004_30037[(2)] = null);

(statearr_30004_30037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (3))){
var inst_29982 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29984__$1,inst_29982);
} else {
if((state_val_29985 === (12))){
var inst_29970 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
var statearr_30005_30038 = state_29984__$1;
(statearr_30005_30038[(2)] = inst_29970);

(statearr_30005_30038[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (2))){
var state_29984__$1 = state_29984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29984__$1,(4),in$);
} else {
if((state_val_29985 === (23))){
var inst_29978 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
var statearr_30006_30039 = state_29984__$1;
(statearr_30006_30039[(2)] = inst_29978);

(statearr_30006_30039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (19))){
var inst_29965 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
var statearr_30007_30040 = state_29984__$1;
(statearr_30007_30040[(2)] = inst_29965);

(statearr_30007_30040[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (11))){
var inst_29950 = (state_29984[(7)]);
var inst_29936 = (state_29984[(11)]);
var inst_29950__$1 = cljs.core.seq.call(null,inst_29936);
var state_29984__$1 = (function (){var statearr_30008 = state_29984;
(statearr_30008[(7)] = inst_29950__$1);

return statearr_30008;
})();
if(inst_29950__$1){
var statearr_30009_30041 = state_29984__$1;
(statearr_30009_30041[(1)] = (14));

} else {
var statearr_30010_30042 = state_29984__$1;
(statearr_30010_30042[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (9))){
var inst_29972 = (state_29984[(2)]);
var inst_29973 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29984__$1 = (function (){var statearr_30011 = state_29984;
(statearr_30011[(15)] = inst_29972);

return statearr_30011;
})();
if(cljs.core.truth_(inst_29973)){
var statearr_30012_30043 = state_29984__$1;
(statearr_30012_30043[(1)] = (21));

} else {
var statearr_30013_30044 = state_29984__$1;
(statearr_30013_30044[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (5))){
var inst_29928 = cljs.core.async.close_BANG_.call(null,out);
var state_29984__$1 = state_29984;
var statearr_30014_30045 = state_29984__$1;
(statearr_30014_30045[(2)] = inst_29928);

(statearr_30014_30045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (14))){
var inst_29950 = (state_29984[(7)]);
var inst_29952 = cljs.core.chunked_seq_QMARK_.call(null,inst_29950);
var state_29984__$1 = state_29984;
if(inst_29952){
var statearr_30015_30046 = state_29984__$1;
(statearr_30015_30046[(1)] = (17));

} else {
var statearr_30016_30047 = state_29984__$1;
(statearr_30016_30047[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (16))){
var inst_29968 = (state_29984[(2)]);
var state_29984__$1 = state_29984;
var statearr_30017_30048 = state_29984__$1;
(statearr_30017_30048[(2)] = inst_29968);

(statearr_30017_30048[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29985 === (10))){
var inst_29939 = (state_29984[(8)]);
var inst_29937 = (state_29984[(10)]);
var inst_29944 = cljs.core._nth.call(null,inst_29937,inst_29939);
var state_29984__$1 = state_29984;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29984__$1,(13),out,inst_29944);
} else {
if((state_val_29985 === (18))){
var inst_29950 = (state_29984[(7)]);
var inst_29959 = cljs.core.first.call(null,inst_29950);
var state_29984__$1 = state_29984;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29984__$1,(20),out,inst_29959);
} else {
if((state_val_29985 === (8))){
var inst_29939 = (state_29984[(8)]);
var inst_29938 = (state_29984[(9)]);
var inst_29941 = (inst_29939 < inst_29938);
var inst_29942 = inst_29941;
var state_29984__$1 = state_29984;
if(cljs.core.truth_(inst_29942)){
var statearr_30018_30049 = state_29984__$1;
(statearr_30018_30049[(1)] = (10));

} else {
var statearr_30019_30050 = state_29984__$1;
(statearr_30019_30050[(1)] = (11));

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
});})(c__27527__auto__))
;
return ((function (switch__26808__auto__,c__27527__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26809__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26809__auto____0 = (function (){
var statearr_30023 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30023[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26809__auto__);

(statearr_30023[(1)] = (1));

return statearr_30023;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26809__auto____1 = (function (state_29984){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_29984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e30024){if((e30024 instanceof Object)){
var ex__26812__auto__ = e30024;
var statearr_30025_30051 = state_29984;
(statearr_30025_30051[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30052 = state_29984;
state_29984 = G__30052;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26809__auto__ = function(state_29984){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26809__auto____1.call(this,state_29984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26809__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26809__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__27527__auto__))
})();
var state__27529__auto__ = (function (){var statearr_30026 = f__27528__auto__.call(null);
(statearr_30026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto__);

return statearr_30026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(c__27527__auto__))
);

return c__27527__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30053 = [];
var len__25865__auto___30056 = arguments.length;
var i__25866__auto___30057 = (0);
while(true){
if((i__25866__auto___30057 < len__25865__auto___30056)){
args30053.push((arguments[i__25866__auto___30057]));

var G__30058 = (i__25866__auto___30057 + (1));
i__25866__auto___30057 = G__30058;
continue;
} else {
}
break;
}

var G__30055 = args30053.length;
switch (G__30055) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30053.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30060 = [];
var len__25865__auto___30063 = arguments.length;
var i__25866__auto___30064 = (0);
while(true){
if((i__25866__auto___30064 < len__25865__auto___30063)){
args30060.push((arguments[i__25866__auto___30064]));

var G__30065 = (i__25866__auto___30064 + (1));
i__25866__auto___30064 = G__30065;
continue;
} else {
}
break;
}

var G__30062 = args30060.length;
switch (G__30062) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30060.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30067 = [];
var len__25865__auto___30118 = arguments.length;
var i__25866__auto___30119 = (0);
while(true){
if((i__25866__auto___30119 < len__25865__auto___30118)){
args30067.push((arguments[i__25866__auto___30119]));

var G__30120 = (i__25866__auto___30119 + (1));
i__25866__auto___30119 = G__30120;
continue;
} else {
}
break;
}

var G__30069 = args30067.length;
switch (G__30069) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30067.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27527__auto___30122 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27527__auto___30122,out){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (c__27527__auto___30122,out){
return (function (state_30093){
var state_val_30094 = (state_30093[(1)]);
if((state_val_30094 === (7))){
var inst_30088 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
var statearr_30095_30123 = state_30093__$1;
(statearr_30095_30123[(2)] = inst_30088);

(statearr_30095_30123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (1))){
var inst_30070 = null;
var state_30093__$1 = (function (){var statearr_30096 = state_30093;
(statearr_30096[(7)] = inst_30070);

return statearr_30096;
})();
var statearr_30097_30124 = state_30093__$1;
(statearr_30097_30124[(2)] = null);

(statearr_30097_30124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (4))){
var inst_30073 = (state_30093[(8)]);
var inst_30073__$1 = (state_30093[(2)]);
var inst_30074 = (inst_30073__$1 == null);
var inst_30075 = cljs.core.not.call(null,inst_30074);
var state_30093__$1 = (function (){var statearr_30098 = state_30093;
(statearr_30098[(8)] = inst_30073__$1);

return statearr_30098;
})();
if(inst_30075){
var statearr_30099_30125 = state_30093__$1;
(statearr_30099_30125[(1)] = (5));

} else {
var statearr_30100_30126 = state_30093__$1;
(statearr_30100_30126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (6))){
var state_30093__$1 = state_30093;
var statearr_30101_30127 = state_30093__$1;
(statearr_30101_30127[(2)] = null);

(statearr_30101_30127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (3))){
var inst_30090 = (state_30093[(2)]);
var inst_30091 = cljs.core.async.close_BANG_.call(null,out);
var state_30093__$1 = (function (){var statearr_30102 = state_30093;
(statearr_30102[(9)] = inst_30090);

return statearr_30102;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30093__$1,inst_30091);
} else {
if((state_val_30094 === (2))){
var state_30093__$1 = state_30093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30093__$1,(4),ch);
} else {
if((state_val_30094 === (11))){
var inst_30073 = (state_30093[(8)]);
var inst_30082 = (state_30093[(2)]);
var inst_30070 = inst_30073;
var state_30093__$1 = (function (){var statearr_30103 = state_30093;
(statearr_30103[(10)] = inst_30082);

(statearr_30103[(7)] = inst_30070);

return statearr_30103;
})();
var statearr_30104_30128 = state_30093__$1;
(statearr_30104_30128[(2)] = null);

(statearr_30104_30128[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (9))){
var inst_30073 = (state_30093[(8)]);
var state_30093__$1 = state_30093;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30093__$1,(11),out,inst_30073);
} else {
if((state_val_30094 === (5))){
var inst_30073 = (state_30093[(8)]);
var inst_30070 = (state_30093[(7)]);
var inst_30077 = cljs.core._EQ_.call(null,inst_30073,inst_30070);
var state_30093__$1 = state_30093;
if(inst_30077){
var statearr_30106_30129 = state_30093__$1;
(statearr_30106_30129[(1)] = (8));

} else {
var statearr_30107_30130 = state_30093__$1;
(statearr_30107_30130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (10))){
var inst_30085 = (state_30093[(2)]);
var state_30093__$1 = state_30093;
var statearr_30108_30131 = state_30093__$1;
(statearr_30108_30131[(2)] = inst_30085);

(statearr_30108_30131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30094 === (8))){
var inst_30070 = (state_30093[(7)]);
var tmp30105 = inst_30070;
var inst_30070__$1 = tmp30105;
var state_30093__$1 = (function (){var statearr_30109 = state_30093;
(statearr_30109[(7)] = inst_30070__$1);

return statearr_30109;
})();
var statearr_30110_30132 = state_30093__$1;
(statearr_30110_30132[(2)] = null);

(statearr_30110_30132[(1)] = (2));


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
});})(c__27527__auto___30122,out))
;
return ((function (switch__26808__auto__,c__27527__auto___30122,out){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_30114 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30114[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_30114[(1)] = (1));

return statearr_30114;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_30093){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_30093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e30115){if((e30115 instanceof Object)){
var ex__26812__auto__ = e30115;
var statearr_30116_30133 = state_30093;
(statearr_30116_30133[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30115;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30134 = state_30093;
state_30093 = G__30134;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_30093){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_30093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__27527__auto___30122,out))
})();
var state__27529__auto__ = (function (){var statearr_30117 = f__27528__auto__.call(null);
(statearr_30117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto___30122);

return statearr_30117;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(c__27527__auto___30122,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30135 = [];
var len__25865__auto___30205 = arguments.length;
var i__25866__auto___30206 = (0);
while(true){
if((i__25866__auto___30206 < len__25865__auto___30205)){
args30135.push((arguments[i__25866__auto___30206]));

var G__30207 = (i__25866__auto___30206 + (1));
i__25866__auto___30206 = G__30207;
continue;
} else {
}
break;
}

var G__30137 = args30135.length;
switch (G__30137) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30135.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27527__auto___30209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27527__auto___30209,out){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (c__27527__auto___30209,out){
return (function (state_30175){
var state_val_30176 = (state_30175[(1)]);
if((state_val_30176 === (7))){
var inst_30171 = (state_30175[(2)]);
var state_30175__$1 = state_30175;
var statearr_30177_30210 = state_30175__$1;
(statearr_30177_30210[(2)] = inst_30171);

(statearr_30177_30210[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30176 === (1))){
var inst_30138 = (new Array(n));
var inst_30139 = inst_30138;
var inst_30140 = (0);
var state_30175__$1 = (function (){var statearr_30178 = state_30175;
(statearr_30178[(7)] = inst_30139);

(statearr_30178[(8)] = inst_30140);

return statearr_30178;
})();
var statearr_30179_30211 = state_30175__$1;
(statearr_30179_30211[(2)] = null);

(statearr_30179_30211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30176 === (4))){
var inst_30143 = (state_30175[(9)]);
var inst_30143__$1 = (state_30175[(2)]);
var inst_30144 = (inst_30143__$1 == null);
var inst_30145 = cljs.core.not.call(null,inst_30144);
var state_30175__$1 = (function (){var statearr_30180 = state_30175;
(statearr_30180[(9)] = inst_30143__$1);

return statearr_30180;
})();
if(inst_30145){
var statearr_30181_30212 = state_30175__$1;
(statearr_30181_30212[(1)] = (5));

} else {
var statearr_30182_30213 = state_30175__$1;
(statearr_30182_30213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30176 === (15))){
var inst_30165 = (state_30175[(2)]);
var state_30175__$1 = state_30175;
var statearr_30183_30214 = state_30175__$1;
(statearr_30183_30214[(2)] = inst_30165);

(statearr_30183_30214[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30176 === (13))){
var state_30175__$1 = state_30175;
var statearr_30184_30215 = state_30175__$1;
(statearr_30184_30215[(2)] = null);

(statearr_30184_30215[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30176 === (6))){
var inst_30140 = (state_30175[(8)]);
var inst_30161 = (inst_30140 > (0));
var state_30175__$1 = state_30175;
if(cljs.core.truth_(inst_30161)){
var statearr_30185_30216 = state_30175__$1;
(statearr_30185_30216[(1)] = (12));

} else {
var statearr_30186_30217 = state_30175__$1;
(statearr_30186_30217[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30176 === (3))){
var inst_30173 = (state_30175[(2)]);
var state_30175__$1 = state_30175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30175__$1,inst_30173);
} else {
if((state_val_30176 === (12))){
var inst_30139 = (state_30175[(7)]);
var inst_30163 = cljs.core.vec.call(null,inst_30139);
var state_30175__$1 = state_30175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30175__$1,(15),out,inst_30163);
} else {
if((state_val_30176 === (2))){
var state_30175__$1 = state_30175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30175__$1,(4),ch);
} else {
if((state_val_30176 === (11))){
var inst_30155 = (state_30175[(2)]);
var inst_30156 = (new Array(n));
var inst_30139 = inst_30156;
var inst_30140 = (0);
var state_30175__$1 = (function (){var statearr_30187 = state_30175;
(statearr_30187[(10)] = inst_30155);

(statearr_30187[(7)] = inst_30139);

(statearr_30187[(8)] = inst_30140);

return statearr_30187;
})();
var statearr_30188_30218 = state_30175__$1;
(statearr_30188_30218[(2)] = null);

(statearr_30188_30218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30176 === (9))){
var inst_30139 = (state_30175[(7)]);
var inst_30153 = cljs.core.vec.call(null,inst_30139);
var state_30175__$1 = state_30175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30175__$1,(11),out,inst_30153);
} else {
if((state_val_30176 === (5))){
var inst_30143 = (state_30175[(9)]);
var inst_30139 = (state_30175[(7)]);
var inst_30148 = (state_30175[(11)]);
var inst_30140 = (state_30175[(8)]);
var inst_30147 = (inst_30139[inst_30140] = inst_30143);
var inst_30148__$1 = (inst_30140 + (1));
var inst_30149 = (inst_30148__$1 < n);
var state_30175__$1 = (function (){var statearr_30189 = state_30175;
(statearr_30189[(12)] = inst_30147);

(statearr_30189[(11)] = inst_30148__$1);

return statearr_30189;
})();
if(cljs.core.truth_(inst_30149)){
var statearr_30190_30219 = state_30175__$1;
(statearr_30190_30219[(1)] = (8));

} else {
var statearr_30191_30220 = state_30175__$1;
(statearr_30191_30220[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30176 === (14))){
var inst_30168 = (state_30175[(2)]);
var inst_30169 = cljs.core.async.close_BANG_.call(null,out);
var state_30175__$1 = (function (){var statearr_30193 = state_30175;
(statearr_30193[(13)] = inst_30168);

return statearr_30193;
})();
var statearr_30194_30221 = state_30175__$1;
(statearr_30194_30221[(2)] = inst_30169);

(statearr_30194_30221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30176 === (10))){
var inst_30159 = (state_30175[(2)]);
var state_30175__$1 = state_30175;
var statearr_30195_30222 = state_30175__$1;
(statearr_30195_30222[(2)] = inst_30159);

(statearr_30195_30222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30176 === (8))){
var inst_30139 = (state_30175[(7)]);
var inst_30148 = (state_30175[(11)]);
var tmp30192 = inst_30139;
var inst_30139__$1 = tmp30192;
var inst_30140 = inst_30148;
var state_30175__$1 = (function (){var statearr_30196 = state_30175;
(statearr_30196[(7)] = inst_30139__$1);

(statearr_30196[(8)] = inst_30140);

return statearr_30196;
})();
var statearr_30197_30223 = state_30175__$1;
(statearr_30197_30223[(2)] = null);

(statearr_30197_30223[(1)] = (2));


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
});})(c__27527__auto___30209,out))
;
return ((function (switch__26808__auto__,c__27527__auto___30209,out){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_30201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30201[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_30201[(1)] = (1));

return statearr_30201;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_30175){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_30175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e30202){if((e30202 instanceof Object)){
var ex__26812__auto__ = e30202;
var statearr_30203_30224 = state_30175;
(statearr_30203_30224[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30202;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30225 = state_30175;
state_30175 = G__30225;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_30175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_30175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__27527__auto___30209,out))
})();
var state__27529__auto__ = (function (){var statearr_30204 = f__27528__auto__.call(null);
(statearr_30204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto___30209);

return statearr_30204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(c__27527__auto___30209,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30226 = [];
var len__25865__auto___30300 = arguments.length;
var i__25866__auto___30301 = (0);
while(true){
if((i__25866__auto___30301 < len__25865__auto___30300)){
args30226.push((arguments[i__25866__auto___30301]));

var G__30302 = (i__25866__auto___30301 + (1));
i__25866__auto___30301 = G__30302;
continue;
} else {
}
break;
}

var G__30228 = args30226.length;
switch (G__30228) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30226.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27527__auto___30304 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27527__auto___30304,out){
return (function (){
var f__27528__auto__ = (function (){var switch__26808__auto__ = ((function (c__27527__auto___30304,out){
return (function (state_30270){
var state_val_30271 = (state_30270[(1)]);
if((state_val_30271 === (7))){
var inst_30266 = (state_30270[(2)]);
var state_30270__$1 = state_30270;
var statearr_30272_30305 = state_30270__$1;
(statearr_30272_30305[(2)] = inst_30266);

(statearr_30272_30305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (1))){
var inst_30229 = [];
var inst_30230 = inst_30229;
var inst_30231 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30270__$1 = (function (){var statearr_30273 = state_30270;
(statearr_30273[(7)] = inst_30230);

(statearr_30273[(8)] = inst_30231);

return statearr_30273;
})();
var statearr_30274_30306 = state_30270__$1;
(statearr_30274_30306[(2)] = null);

(statearr_30274_30306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (4))){
var inst_30234 = (state_30270[(9)]);
var inst_30234__$1 = (state_30270[(2)]);
var inst_30235 = (inst_30234__$1 == null);
var inst_30236 = cljs.core.not.call(null,inst_30235);
var state_30270__$1 = (function (){var statearr_30275 = state_30270;
(statearr_30275[(9)] = inst_30234__$1);

return statearr_30275;
})();
if(inst_30236){
var statearr_30276_30307 = state_30270__$1;
(statearr_30276_30307[(1)] = (5));

} else {
var statearr_30277_30308 = state_30270__$1;
(statearr_30277_30308[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (15))){
var inst_30260 = (state_30270[(2)]);
var state_30270__$1 = state_30270;
var statearr_30278_30309 = state_30270__$1;
(statearr_30278_30309[(2)] = inst_30260);

(statearr_30278_30309[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (13))){
var state_30270__$1 = state_30270;
var statearr_30279_30310 = state_30270__$1;
(statearr_30279_30310[(2)] = null);

(statearr_30279_30310[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (6))){
var inst_30230 = (state_30270[(7)]);
var inst_30255 = inst_30230.length;
var inst_30256 = (inst_30255 > (0));
var state_30270__$1 = state_30270;
if(cljs.core.truth_(inst_30256)){
var statearr_30280_30311 = state_30270__$1;
(statearr_30280_30311[(1)] = (12));

} else {
var statearr_30281_30312 = state_30270__$1;
(statearr_30281_30312[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (3))){
var inst_30268 = (state_30270[(2)]);
var state_30270__$1 = state_30270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30270__$1,inst_30268);
} else {
if((state_val_30271 === (12))){
var inst_30230 = (state_30270[(7)]);
var inst_30258 = cljs.core.vec.call(null,inst_30230);
var state_30270__$1 = state_30270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30270__$1,(15),out,inst_30258);
} else {
if((state_val_30271 === (2))){
var state_30270__$1 = state_30270;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30270__$1,(4),ch);
} else {
if((state_val_30271 === (11))){
var inst_30238 = (state_30270[(10)]);
var inst_30234 = (state_30270[(9)]);
var inst_30248 = (state_30270[(2)]);
var inst_30249 = [];
var inst_30250 = inst_30249.push(inst_30234);
var inst_30230 = inst_30249;
var inst_30231 = inst_30238;
var state_30270__$1 = (function (){var statearr_30282 = state_30270;
(statearr_30282[(7)] = inst_30230);

(statearr_30282[(11)] = inst_30250);

(statearr_30282[(8)] = inst_30231);

(statearr_30282[(12)] = inst_30248);

return statearr_30282;
})();
var statearr_30283_30313 = state_30270__$1;
(statearr_30283_30313[(2)] = null);

(statearr_30283_30313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (9))){
var inst_30230 = (state_30270[(7)]);
var inst_30246 = cljs.core.vec.call(null,inst_30230);
var state_30270__$1 = state_30270;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30270__$1,(11),out,inst_30246);
} else {
if((state_val_30271 === (5))){
var inst_30238 = (state_30270[(10)]);
var inst_30231 = (state_30270[(8)]);
var inst_30234 = (state_30270[(9)]);
var inst_30238__$1 = f.call(null,inst_30234);
var inst_30239 = cljs.core._EQ_.call(null,inst_30238__$1,inst_30231);
var inst_30240 = cljs.core.keyword_identical_QMARK_.call(null,inst_30231,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30241 = (inst_30239) || (inst_30240);
var state_30270__$1 = (function (){var statearr_30284 = state_30270;
(statearr_30284[(10)] = inst_30238__$1);

return statearr_30284;
})();
if(cljs.core.truth_(inst_30241)){
var statearr_30285_30314 = state_30270__$1;
(statearr_30285_30314[(1)] = (8));

} else {
var statearr_30286_30315 = state_30270__$1;
(statearr_30286_30315[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (14))){
var inst_30263 = (state_30270[(2)]);
var inst_30264 = cljs.core.async.close_BANG_.call(null,out);
var state_30270__$1 = (function (){var statearr_30288 = state_30270;
(statearr_30288[(13)] = inst_30263);

return statearr_30288;
})();
var statearr_30289_30316 = state_30270__$1;
(statearr_30289_30316[(2)] = inst_30264);

(statearr_30289_30316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (10))){
var inst_30253 = (state_30270[(2)]);
var state_30270__$1 = state_30270;
var statearr_30290_30317 = state_30270__$1;
(statearr_30290_30317[(2)] = inst_30253);

(statearr_30290_30317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30271 === (8))){
var inst_30230 = (state_30270[(7)]);
var inst_30238 = (state_30270[(10)]);
var inst_30234 = (state_30270[(9)]);
var inst_30243 = inst_30230.push(inst_30234);
var tmp30287 = inst_30230;
var inst_30230__$1 = tmp30287;
var inst_30231 = inst_30238;
var state_30270__$1 = (function (){var statearr_30291 = state_30270;
(statearr_30291[(7)] = inst_30230__$1);

(statearr_30291[(14)] = inst_30243);

(statearr_30291[(8)] = inst_30231);

return statearr_30291;
})();
var statearr_30292_30318 = state_30270__$1;
(statearr_30292_30318[(2)] = null);

(statearr_30292_30318[(1)] = (2));


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
});})(c__27527__auto___30304,out))
;
return ((function (switch__26808__auto__,c__27527__auto___30304,out){
return (function() {
var cljs$core$async$state_machine__26809__auto__ = null;
var cljs$core$async$state_machine__26809__auto____0 = (function (){
var statearr_30296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30296[(0)] = cljs$core$async$state_machine__26809__auto__);

(statearr_30296[(1)] = (1));

return statearr_30296;
});
var cljs$core$async$state_machine__26809__auto____1 = (function (state_30270){
while(true){
var ret_value__26810__auto__ = (function (){try{while(true){
var result__26811__auto__ = switch__26808__auto__.call(null,state_30270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26811__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26811__auto__;
}
break;
}
}catch (e30297){if((e30297 instanceof Object)){
var ex__26812__auto__ = e30297;
var statearr_30298_30319 = state_30270;
(statearr_30298_30319[(5)] = ex__26812__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30297;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26810__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30320 = state_30270;
state_30270 = G__30320;
continue;
} else {
return ret_value__26810__auto__;
}
break;
}
});
cljs$core$async$state_machine__26809__auto__ = function(state_30270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26809__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26809__auto____1.call(this,state_30270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26809__auto____0;
cljs$core$async$state_machine__26809__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26809__auto____1;
return cljs$core$async$state_machine__26809__auto__;
})()
;})(switch__26808__auto__,c__27527__auto___30304,out))
})();
var state__27529__auto__ = (function (){var statearr_30299 = f__27528__auto__.call(null);
(statearr_30299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27527__auto___30304);

return statearr_30299;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27529__auto__);
});})(c__27527__auto___30304,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1484718742577