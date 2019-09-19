function needpjax() {
	OriginTitile = document.title;
	$(document).ready(function() {
		$(".markdown-body pre").each(function(b) {
			$(this).html('<div id="code-' + b + '" class="pre-div">' + $(this).html() + "</div>");
			var d = $(this).find(".pre-div"),
			a = d.find("code").html().match(/\n/g);
			a = a ? a.length + 1 : 1;
			for (var c = "1",
			e = 2; e <= a; e++) c += "<br />" + e;
			d.before('<button class="btn-copy-code" data-clipboard-target="#code-' + b + '"><i class="fa fa-copy"></i> \u590d\u5236</button><div class="pre-row">' + c + "</div>");
			var f = $(this).find(".pre-row");
			d.on("scroll",
			function(a) {
				f.prop("scrollTop", d.prop("scrollTop"))
			})
		}); (new ClipboardJS(".btn-copy-code")).on("success",
		function(b) {
			b.clearSelection()
		});
		$(".btn-copy-code").tooltip({
			placement: "bottom",
			title: "\u5df2\u590d\u5236",
			trigger: "focus"
		});
		$('div[data-toggle="collapse"]').click(function() {
			setTimeout("$('body').scroll()", 500)
		});
		$("article img[mw400]").parents(".max-img").addClass("mw400");
		$("article a").each(function() {
			var b = $(this).attr("href");
			/^#.*/.test(b) && ($(this).attr("target", "_self"), $(this).click(function() {
				$('.tocify-item[data-unique="' + b.substr(1) + '"]').click()
			}));
			$(this).attr("class") || $(this).attr("target") || $(this).attr("target", "_blank")
		})
	})
}
needpjax();
var OriginTitile = document.title; (function() {
	var b = !0;
	window.setInterval(function() {
		0 < $("body.compensate-for-scrollbar").length && b && (b = !1, $("body.compensate-for-scrollbar #bg").attr("style", "transition-duration:0s"), setTimeout('$("#bg").attr("style","");cfsFlag=true', 2E3));
		var a=$("#sidebar").find("section");
		if (0 < a.length) {
			var c = $(a[a.length - 1]);
			a = $(window).scrollTop();
			c = c.offset().top + c.height();
			a -= c;
			c = $("aside.col.w-md.no-border-xs");
			0 < a ? c.css("opacity", "0") : c.css("opacity", "1")
		}
		300 > $(document).scrollTop() ? $("#kotori").addClass("hidekotori") : $("#kotori").removeClass("hidekotori")
	},
	300);
	/*console.log("\n %c handsome modified %c by \u795e\u4ee3\u7eee\u51db lolico.moe \n", "color:#444;background:#eee;padding:5px 0;", "color:#fff;background:#876;padding:5px 0;");
	console.log("%c ", "background:url(https://ws1.sinaimg.cn/large/71785a53ly1fxylsf6ke7j216z0o6q8j.jpg) no-repeat center;background-size:cover;padding-left:100%;padding-bottom:55%;overflow:hidden;border-radius:10px;margin:5px 0");*/
	window.setInterval(function() {
		if (document.getElementById("aboutPage")) {
			var a = document.getElementById("aboutPage"),
			b = a.contentWindow.document.getElementById("mainc");
			try {
				a.style.height = b.scrollHeight + "px"
			} catch(e) {}
		}
	},
	300);
	var d;
	document.addEventListener("visibilitychange",
	function() {
		document.hidden ? (clearTimeout(d), d = setTimeout(function() {
			document.title = "|\uff65\u03c9\uff65\uff40)\u4f60\u770b\u4e0d\u89c1\u6211\u2026\u2026\u4f60\u770b\u4e0d\u89c1\u6211\u2026\u2026\u4f60\u770b\u4e0d\u89c1\u6211\u2026\u2026"
		},
		500)) : (document.title = "_(:3\u300d\u300d\u8fd8\u662f\u88ab\u53d1\u73b0\u4e86", d = setTimeout(function() {
			document.title = OriginTitile
		},
		2E3))
	})
})();
$("#kotori").click(function() {
	$("body,html").animate({
		scrollTop: 0
	},
	600)
});
$(window).load(function() {
	1 < location.hash.length && $('.tocify-item[data-unique="' + decodeURI(location.hash.substr(1)) + '"]').click()
});
function updateLiveStatus(b) {
	1 == b.data.liveStatus && $("#bilibili-live").removeClass("hide")
};