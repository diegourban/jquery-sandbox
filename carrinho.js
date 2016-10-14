var atualizaDados = function() {
	var carrinhos = $(".carrinho");
	carrinhos.each(function() {
		var carrinho = $(this);
		var itens = carrinho.find(".item-total:visible");
		var total = 0;
		for(var i = 0; i < itens.length; i++) {
			var item = $(itens[i]);
			var valor = parseFloat(item.text());
			total = total + valor;
		}

		carrinho.find(".valor-total").text(total);
		carrinho.find(".quantidade-de-itens").text(itens.length);
	});
}

var removeItem = function(event) {
	event.preventDefault();

	var self = $(this);
	self.closest("tr").hide();

	atualizaDados();
}

var undo = function() {
	var carrinho = $(this).closest(".carrinho");
	carrinho.find("tr:visible").removeClass("recuperado");

	var trs = carrinho.find("tr:hidden");
	trs.addClass("recuperado");
	trs.show();

	atualizaDados();
}

var aposCarregamento = function() {
	atualizaDados();
	$(".undo").click(undo);
	$(".remove-item").click(removeItem);
}

$(aposCarregamento); // será chamado após a página estiver carregada
