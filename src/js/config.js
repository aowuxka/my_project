//配置文件
require.config({
	//设置web根目录
	baseUrl : "/",
	//配置短名称
	paths:{
		//优先使用在线jquery库(有网络资源时使用)，用数组引入
		"jquery" : ["http://code.jquery.com/jquery-1.12.4.min","lib/jquery/jquery-1.12.4.min"],
		//cookie插件
		"cookie" : "lib/jquery_plugins/jquery.cookie",
		//放大镜插件
		"zoom" : "lib/jquery_plugins/jquery.elevateZoom",
		//抛物线插件
		"fly" : "lib/jquery_plugins/jquery.fly",
		//模板引擎
		"template" : "lib/arttemplate/template",
		//复用的头尾部代码js
		"load" : "js/loadHeaderFoot"
	},
	//配置垫片
	shim : {
		"zoom" : {
			deps : ["jquery"],
		},
		"fly" : {
			deps : ["jquery"],
		},
		"teplate" : {
			deps : ["jquery"],
		}

	}
});