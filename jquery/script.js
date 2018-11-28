$(function() {
	let $allA = $(".list-group");
	let addClassName = "list-group-item-danger";
	$allA.on('click', '.list-group-item', function (event) {
	    $(this).addClass(addClassName);
    });
    let editListItem = false;
    $("form").submit(function(event){
		let name = $("input[name='name']").val();
		let surname = $("input[name='surname']").val();
		if(!!name && !!surname && (editListItem === false)){
			$(".list-group").prepend(`<li class="list-group-item d-flex justify-content-between"><a href="#">${name} ${surname}</a></li>`);
		}else{
			++editListItem;
			$(".list-group li:nth-child("+ editListItem+ ") a").html(`${name} ${surname}`);
			editListItem = false;
		}
		$("input[type='text']").val("");
		return false;
	});
	$(".list-group").on("mouseenter", "li", function(){
		if($(".list-group li").length > 1){
			$(this).addClass(addClassName);
			$(this).append(`<i class="fas fa-times text-danger mt-1"></i>`);
		}		
	}).on("mouseleave", "li", function(){
		$("i", this).remove();
		$(this).removeClass(addClassName);
	});
	$(".list-group").on('click', "li", function(){
		let fullName = $("a", this).html();
		editListItem = $(this).index();
		let name = fullName.slice(0, fullName.indexOf(" "));
		let surname = fullName.slice(fullName.indexOf(" ")+1);
		$("input[name='name']").val(name);
		$("input[name='surname']").val(surname);
	});
	$(".list-group .list-group-item").on('click', "i", function(){
		$(this).parent().remove();
	});
});