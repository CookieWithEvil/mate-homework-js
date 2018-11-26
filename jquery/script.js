$(function() {
	let $allA = $(".list-group");
	let addClassName = "list-group-item-danger";
	$allA.on('click', '.list-group-item', function (event) {
	    $(this).addClass(addClassName);
    });
    $("form").submit(function(event){
		let name = $("input[name='name']").val();
		let surname = $("input[name='surname']").val();
		if(!!name && !!surname){
			$(".list-group").prepend(`<li class="list-group-item d-flex justify-content-between"><a href="#">${name} ${surname}</a></li>`);
		}
		return false;
	});
	$(".list-group").on("mouseenter", "li", function(){
		$(this).addClass(addClassName);
		$(this).append(`<i class="fas fa-times text-danger mt-1"></i>`);
	}).on("mouseleave", "li", function(){
		$("i", this).remove();
		$(this).removeClass(addClassName);
	});
	$(".list-group .list-group-item").on('click', "i", function(){
		$(this).parent().remove();
	});
});