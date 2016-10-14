var umaPropaganda = function() {
	var propagandas = ["O que acha de comprar uma motocicleta?",
						"O que acha de comprar uma lancha?",
						"O que acha de comprar uma bicicleta?",
						"O que acha de comprar um carro?"];
	var posicao = Math.floor(propagandas.length * Math.random());
	var texto = propagandas[posicao];
	var tr = $("<tr>").addClass("propaganda").append($("<td>"));
	tr.find("td").attr("colspan", 6).text(texto);

	return tr;
}

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
	$(".carrinho").each(function() {
		$(this).find("tr:nth-child(3n)").each(function(){
			umaPropaganda().insertAfter($(this));
		});	
	});	
}

$(aposCarregamento); // será chamado após a página estiver carregada
