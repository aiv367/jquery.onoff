/**
 * jquery.onoff
 * 对 jQuery on,off 扩展，实现绑定事件时可以按分组命名，移除事件时可以按分组删除事件
 * @version 1.0.0
 * @update 2019/05/24
 * https://github.com/aiv367/jquery.onoff
 */
(function($){

	//暂存原始 on, off 方法
	$.fn._on = $.fn.on;
	$.fn._off = $.fn.off;

	//重写 on 方法, 让 on 支持命名方法
	// events [, selector ] [, data ], handler, [+name(只能是字母,下划线和数字)]
	$.fn.on = function(...args){

		let $this = this;

		if(args.length === 2){

			return $this._on(args[0], args[1]);

		} else if(args.length === 3){
			
			if(typeof args[2] === 'string'){
				return $this._on(args[0], {__key: args[2]}, args[1]);
			}else{
				return $this._on(args[0], args[1], args[2]);
			}

		} else if(args.length === 4){

			if(typeof args[4] === 'string'){
				return $this._on(args[0], {__key: args[2]}, args[1]); //event, selector, handle, name
			}else{
				return $this._on(args[0], args[1], args[2], args[3]);
			}

		} else if(args.length === 5){
			args[2].__key = args[4];
			return $this._on(args[0], args[1], args[2], args[3]); //events, selector, data, handle, name
		}

	};

	//events [, selector ] [, handler|name ]
	$.fn.off = function(...args) {

		let delEvents = (eventType, eventKey) => {

			let events = $._data(this[0], 'events');
			let delEvents = [];

			if(events[eventType]){

				events[eventType].forEach( evt => {
					if(evt.data && evt.data.__key && evt.data.__key === eventKey){
						delEvents.push(evt.handler);
					}	
				});
	
				delEvents.forEach(fun => {
					this._off(args[0], fun);
				});

			}

		}

		if(args.length === 1){

			return this._off(args[0]);

		} else if( args.length === 2){

			if(typeof args[1] === 'string' && /^\w+$/.test(args[1])){
				delEvents(args[0], args[1]);
			}else{
				return this._off(args[0], args[1]);
			}
			
		} else if(args.length === 3){

			if(typeof args[2] === 'string'){
				delEvents(args[0], args[2]);
			}else{
				return this._off(args[0], args[1], args[2]);
			}

		}

	};

})(window.jQuery);