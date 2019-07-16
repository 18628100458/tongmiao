(function() {
	$(window).resize(font);

	function font() {
		var htmlWidth = $(window).width();
		if(htmlWidth < 751) {
			$("html").css({
				"font-size": 100 / 750 * htmlWidth + "px"
			})
		} else {
			$("html").css({
				"font-size": 100 + "px"
			})
		}
	}
	font();
})();

function mac_menubox(menubox) {
	var menu_Lsit = $(menubox).find("li").length;
	var menu_Width = 100 / menu_Lsit + "%"
	$(menubox).find("li").css("width", menu_Width)
}

function macliuc(liucbox) {
	var dd = $(liucbox).find("li").length;
	var cc = $(liucbox).find(".on").length;
	var lef = ($(liucbox).width() - $(liucbox).find("li").width() * dd) / (dd - 1) - 0.5;
	$(liucbox).find("li").css("margin-left", lef)
	$(liucbox).find("li").eq(0).css("margin-left", 0)
	var ee = 100 * (cc - 1) / (dd - 1) + '%';
	$(liucbox).find(".beix").css("width", ee)
}

 mac_conmesbox=function(lanmu_box, line_x, con_box, con_list) {
	 console.log("PP")
	var menu_Lsit = $(lanmu_box).find("li").length;
	var menu_Width = 100 / menu_Lsit + "%"
	$(lanmu_box).find("li").css("width", menu_Width);
	$(lanmu_box).find(line_x).css("width", menu_Width);

	$(lanmu_box).find("li").on("click", function() {
		var aa = $(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$(con_box).find(con_list).eq(aa).fadeIn().siblings().hide();
		lef = 100 / menu_Lsit * aa + "%";
		$(lanmu_box).find(line_x).css("left", lef);
	});
}

function Elastic_frame(on_button, box_name, on_close) {
	$(on_button).on("click", function() {
		$(box_name).fadeIn()
	});
	$(on_close).on("click", function() {
		$(box_name).fadeOut()
	});
}