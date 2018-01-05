;
(function($){
	/*
	 * 轮播图
	 * @param options 配置项
	 */
	function Carousel(options) {
		options = options || {};
		this.imgs = options.imgs; // 所有图片数组
		this.isPrevNextPage = options.isPrevNextPage; // 是否有向前/后翻页
		this.container = options.container; // 轮播图容器
		this.width = options.width; // 轮播图宽度
		this.height = options.height; // 轮播图高度
		this.duration = options.duration; // 轮播切换时间
		this.isAuto = options.isAuto; // 是否自动轮播
		this.imgBoxes = null; // 所有轮播图片的盒子
		this.currentIndex = 0; // 当前轮播显示图片索引
		this.nextIndex = 1; // 即将轮播显示图片索引
		this.circleBoxes = null; // 所有小圆点
		this.timer = null; // 轮播计时器
		this.type = options.type || "fade"; // 轮播方式 "fade"--淡入淡出  "slide"--滑动
	}

	Carousel.prototype = {
		constructor : Carousel,
		/*
		 * 初始化DOM元素
		 */
		init : function(){
			// 将初始化的图像盒子li动态创建
			var html = "";
			this.imgs.forEach((img)=>{
				html += `<li style="width:${this.width}px; height:${this.height}px;"><a href="${img.href}" target="_blank"><img src="${img.src}"  style="width:${this.width}px; height:${this.height}px;"></a></li>`
			});
			// 小圆点
			var circleHtml = "";
			for (let i = 0, len = this.imgs.length; i < len; i++) {
				circleHtml += `<i></i>`;
			}
			// 向前/后翻页
			var prevNextHtml = "";
			if (this.isPrevNextPage) {
				prevNextHtml = `<div class="prev"><</div><div class="next">></div>`;
			}
			// 完整的布局HTML字符串
			html = `
				<ul class="imgs" style="width:${this.width}px; height:${this.height}px;">
					${html}
				</ul>
				<div class="pages">${circleHtml}</div>
				${prevNextHtml}
			`;
			// 添加到轮播图容器中
			this.container.html(html).css({
				width: this.width + "px",
				height : this.height + "px"
			});
			// 添加容器使用的样式
			this.container.addClass("xm_carousel");

			// 查找已创建的元素，轮播图片的li盒子
			this.imgBoxes = $(".imgs li", this.container);
			$(this.imgBoxes[0]).show();
			// 查找所有小圆点盒子
			this.circleBoxes = $(".pages i", this.container);
			$(this.circleBoxes[0]).addClass("current");

			// 如果能够自动轮播
			if (this.isAuto)
				this.autoPlay();

			// 注册事件监听
			this.registerEventListener();
		},
		/*
		 * 注册事件监听
		 */
		registerEventListener : function(){
			// 使用变量暂存当前轮播图对象
			var that = this;
			// 鼠标移入/出轮播图容器范围
			this.container.hover(()=>{
				clearInterval(this.timer);
			}, ()=>{
				if (this.isAuto)
					this.autoPlay();
			});
			// 鼠标移入小圆点
			this.circleBoxes.mouseenter(function(){
				// 获取当前小圆点在其同辈元素中的索引
				var index = $(this).index();
				if (index === that.currentIndex)
					return;
				// 将轮播图对象的 nextIndex 属性修改为当前小圆点索引
				that.nextIndex = index;
				// 调用轮播切换方法
				that.move();
			});
			// 如果存在向上/下翻页
			if (this.isPrevNextPage) {
				$(".prev", this.container).click(()=>{
					this.nextIndex = this.currentIndex - 1;
					if (this.nextIndex < 0)
						this.nextIndex = this.imgs.length - 1;
					this.move();
				});
				$(".next", this.container).click(()=>{
					this.move();
				});
			}
		},
		/*
		 * 淡入淡出轮播切换
		 */
		fade : function(){
			// 当前图片淡出
			$(this.imgBoxes[this.currentIndex]).stop().fadeOut(600);
			// 即将显示图片淡入
			$(this.imgBoxes[this.nextIndex]).stop().fadeIn(600);
			// 修改小圆点样式
			$(this.circleBoxes[this.currentIndex]).removeClass("current");
			$(this.circleBoxes[this.nextIndex]).addClass("current");
			// 修改索引
			this.currentIndex = this.nextIndex;
			this.nextIndex++;
			if (this.nextIndex >= this.imgBoxes.length)
				this.nextIndex = 0;
		},
		/*
		 * 滑动轮播
		 */
		slide : function(){
			// .......
		},
		/*
		 * 轮播切换方法
		 */
		move : function(){
			if (this.type === "fade") {
				this.fade();
			} else if (this.type === "slide") {
				this.slide();
			}
		},
		/* 
		 *自动轮播 
		 */
		autoPlay : function(){
			this.timer = setInterval(()=>{
				this.move();
			}, this.duration);
		}
	}

	// __proto__
	// prototype

	// 向 jQuery 原型对象中(jQuery.prototype)添加方法
	// 意味着该方法是可以通过 jQuery 对象的实例来调用。
	$.fn.carousel = function(options){
		options = options || {};
		this.each(function(index, element){
			options.container = $(element);
			new Carousel(options).init();
		});
	}
	/*$.fn.extend({
		carousel : function(){
			console.log("carousel .... extend() ")
		}
	});*/

	/* 如果向 jQuery 函数对象自身添加方法，则意味着方法的调用是直接使用 jQuery 来调用 */
	/*$.max = function(array){
		return Math.max.apply(null, array);
	}
	$.min = function(array){
		return Math.min.apply(null, array);
	}
	$.extend({
		max : function(array){
			return Math.max.apply(null, array);
		},
		min : function(array){
			return Math.min.apply(null, array);
		}
	});*/
}(jQuery));