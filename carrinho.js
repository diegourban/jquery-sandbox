var atualizaDados = function() {
	var itens = $(".item-total:visible");
	var total = 0;
	for(var i = 0; i < itens.length; i++) {
		var item = $(itens[i]);
		var valor = parseFloat(item.text());
		total = total + valor;
	}

	$("#valor-total").text(total);
	$("#quantidade-de-itens").text(itens.length);
}

var removeItem = function(event) {
	event.preventDefault();

	var self = $(this);
	self.closest("tr").hide();

	atualizaDados();
}

var undo = function() {
	$("tr:visible").removeClass("recuperado");

	var trs = $("tr:hidden");
	trs.addClass("recuperado");
	trs.show();
}

var aposCarregamento = function() {
	atualizaDados();
	$("#undo").click(undo);
	$(".remove-item").click(removeItem);
}

$(aposCarregamento); // será chamado após a página estiver carregada