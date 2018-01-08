//商品列表(list)页面的js文件
require(["config"],function(){
	//在首页进行头尾代码的复用
	require(["jquery","template","load"],function($ , template){
		//异步加载列表页面数据，使用模板引擎渲染
		$.getJSON("/mock/list.json", function(data){
			//准备渲染数据
			var renderData = {products : data.res_body.data};
			//渲染数据
			var html = template("list_template",renderData);
			$(".buy").html(html);
			//add
			$(".add").on("click",function(){
				console.log(this)
			});
		});
	});
});