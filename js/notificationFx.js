/**
 * notificationFx.js v1.0.0
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * improved by Alex Greenall on 4.1.2022
 * log:移除了公有框架中的不会被调用的功能或事件，取消了关闭按钮的附加动作
 * 
 */
;( function( window ) {
	
	'use strict';

	var docElem = window.document.documentElement,
		support = { animations : Modernizr.cssanimations },
		animEndEventNames = {
			'WebkitAnimation' : 'webkitAnimationEnd',
			'OAnimation' : 'oAnimationEnd',
			'msAnimation' : 'MSAnimationEnd',
			'animation' : 'animationend'
		},
		// 动画类别判定
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];
	
	/**
	 * 函数扩展
	 */
	function extend( a, b ) {
		for( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[key] = b[key];
			}
		}
		return a;
	}

	/**
	 * 通知函数构造
	 */
	function NotificationFx( options ) {	
		this.options = extend( {}, this.options );
		extend( this.options, options );
		this._init();
	}

	/**
	 * 框架对象
	 */
	NotificationFx.prototype.options = {
		wrapper : document.body,
		message : '这是消息内容',
		// 布局方式: growl|attached|bar|other
		layout : 'growl',
		//动画效果
		effect : 'slide',
		//通知类型选项
		type : 'error',
		//通知出现/消失定时器
		ttl : 6000,
		// 函数回调
		onClose : function() { return false; },
		onOpen : function() { return false; }
	}

	/**
	 * 函数初始值配置
	 */
	NotificationFx.prototype._init = function() {
		// 创建页面元素
		this.ntf = document.createElement( 'div' );
		this.ntf.className = 'ns-box ns-' + this.options.layout + ' ns-effect-' + this.options.effect + ' ns-type-' + this.options.type;
		var strinner = '<div class="ns-box-inner">';
		strinner += this.options.message;
		strinner += '</div>';
		strinner += '<span class="ns-close"></span></div>';
		this.ntf.innerHTML = strinner;

		// 将通知添加至页面body1元素
		this.options.wrapper.insertBefore( this.ntf, this.options.wrapper.firstChild );

		// 在定时器结束后消失
		var self = this;
		this.dismissttl = setTimeout( function() {
			if( self.active ) {
				self.dismiss();
			}
		}, this.options.ttl );

		// 通知初始化
		this._initEvents();
	}

	/**
	 * 通知事件
	 */
	NotificationFx.prototype._initEvents = function() {
		var self = this;
		// 关闭通知
		this.ntf.querySelector( '.ns-close' ).addEventListener( 'click', function() { self.dismiss(); } );
	}

	/**
	 * 显示通知
	 */
	NotificationFx.prototype.show = function() {
		this.active = true;
		classie.remove( this.ntf, 'ns-hide' );
		classie.add( this.ntf, 'ns-show' );
		this.options.onOpen();
	}

	/**
	 * 关闭通知动作
	 */
	NotificationFx.prototype.dismiss = function() {
		var self = this;
		this.active = false;
		clearTimeout( this.dismissttl );
		classie.remove( this.ntf, 'ns-show' );
		setTimeout( function() {
			classie.add( self.ntf, 'ns-hide' );
			
			// 二级回调
			self.options.onClose();
		}, 25 );

		// 消失动作
		var onEndAnimationFn = function( ev ) {
			if( support.animations ) {
				if( ev.target !== self.ntf ) return false;
				this.removeEventListener( animEndEventName, onEndAnimationFn );
			}
			self.options.wrapper.removeChild( this );
		};

		if( support.animations ) {
			this.ntf.addEventListener( animEndEventName, onEndAnimationFn );
		}else {
			onEndAnimationFn();
		}
	}

	/**
	 * 将函数添加至共有DOM
	 */
	window.NotificationFx = NotificationFx;

} )( window );