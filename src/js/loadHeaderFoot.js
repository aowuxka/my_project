//定义模块加载头部，尾部资源(实现头部尾部资源复用)
//用到ajax,依赖于jquery实现
define(["jquery",function($){
	 //将footer.html文件 加载显示到index页面中 div.footer盒子中
	 $(".footer").load("/html/include/footer.html");
}]);
