function inserePlacar() {
	var tbody = $('.placar').find('tbody');

	var usuario = 'Diego';
	var qtdPalavras = $('#contador-palavras').text();
	var linha = novaLinha(usuario, qtdPalavras);
	linha.find('.botao-remover').click(removeLinha);

	tbody.prepend(linha);
}

function novaLinha(usuario, qtdPalavras) {
	var linha = $('<tr>');

	var colunaNome = $('<td>').text(usuario); 

	var colunaQtdPalavras = $('<td>').text(qtdPalavras); 

	var colunaRemover = $('<td>'); 
	var link = $('<a>').addClass('botao-remover').attr('href', '#');
	var icone = $('<i>').addClass('small').addClass('material-icons').text('delete');
	colunaRemover.append(link.append(icone));

	linha.append(colunaNome);
	linha.append(colunaQtdPalavras);
	linha.append(colunaRemover);
	return linha;
}

function removeLinha(event) {
	event.preventDefault();
	$(this).parent().parent().remove();
}