muban.mxone5.二级.重定向='js:let url = jsp.pd(html,"h1 a&&href");log(url);html = request(url)';
var rule = Object.assign(muban.mxone5,{
		title:'小猫咪影视',
		host:'https://www.xdn8.com',
		url:'/index.php/vod/show/id/fyclass/page/fypage.html',
 		searchUrl:'/index.php/vod/search/page/fypage/wd/**.html',
		searchable:2,//是否启用全局搜索,
		quickSearch:0,//是否启用快速搜索,
		filterable:0,//是否启用分类筛选,
		//class_parse:'.nav-menu-items&&li;a&&Text;a&&href;.*/(.*?).html',
	        //cate_exclude:'演员',
	        class_name:'电影&电视剧&综艺&动漫&纪录片&国产剧&港台剧&日韩剧&欧美剧',
                class_url:'1&2&35&3&34&13&16&14&15',
		play_parse:true,
		lazy:'',
		limit:6,
		推荐:'body .main;.module-poster-item.module-item;a&&title;img&&data-original;.module-item-note&&Text;a&&href',
		double:true, // 推荐内容是否双层定位
		一级:'.module-items .module-item;a&&title;img&&data-original;.module-item-note&&Text;a&&href',
		二级:{"title":"h1&&Text;.tag-link&&Text","img":".module-item-pic&&img&&data-src","desc":".video-info-items:eq(-2)&&Text;.video-info-items:eq(-1)&&Text;.video-info-items:eq(-2)&&Text;.video-info-items:eq(1)&&.video-info-item&&Text;.video-info-items:eq(-2)&&.video-info-item&&Text","content":".zkjj_a&&Text","tabs":".module-tab-item.tab-item","lists":".module-list:eq(#id)&&.module-play-list-content a"},
		搜索:'.module-card-item-poster;.lazy&&alt;*;.module-item-note&&Text;*',
});
