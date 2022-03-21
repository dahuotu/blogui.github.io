/*
 * BlogUi Javascript Code
 */
/*选项卡*/
$(".tabs .head li,.tabs-y .head li").click(function() {
	$(".tabs .head li,.tabs-y .head li").removeClass("checked");
	$(this).addClass("checked");
	var chkId = $(this).attr("data-checked");
	$(".tabs .body li,.tabs-y .body li").removeClass("checked");
	$(chkId).addClass("checked");
});
/*评论框*/
$(".comments-box .input").keyup(function() {
	var sum = 200;
	var num = $(this).val().length;
	if(sum >= num) {
		$(".comments-box .num").text(num);
	}
});