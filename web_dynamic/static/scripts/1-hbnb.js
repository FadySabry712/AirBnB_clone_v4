document.ready(function () {
	const amenites = {};
	$("li input[type=checkbox]").change(function () {
		if (this.checked) {
			amenites[this.dataset.name] = this.dataset.id;
		} else {
			delete amenites[this.dataset.name];
		}
i		$(".amenites h4").text(Object.keys(amenites).sort().join(", "));
	});
});
