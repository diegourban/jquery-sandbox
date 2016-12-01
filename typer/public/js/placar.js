$('#botao-placar').click(mostraPlacar);
$('#botao-sync').click(sincronizaPlacar);

function inserePlacar() {
	var tbody = $('.placar').find('tbody');

	var usuario = 'Diego';
	var qtdPalavras = $('#contador-palavras').text();
	var linha = novaLinha(usuario, qtdPalavras);
	linha.find('.botao-remover').click(removeLinha);

	tbody.prepend(linha);
	$('.placar').slideDown();
	scrollPlacar();
}

function scrollPlacar() {
	var posicaoPlacar = $('.placar').offset().top;
	$('body').animate({
		scrollTop: posicaoPlacar + "px"
	}, 1000);
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
	var linha = $(this).parent().parent();
	linha.fadeOut(function() {
		linha.remove();	
	});	
}

function mostraPlacar() {
	$('.placar').stop().slideToggle();
}

function sincronizaPlacar() {
	var placar = [];
	var linhas = $('tbody > tr');

	linhas.each(function(){
		var usuario = $(this).find('td:nth-child(1)').text();
		var palavras = $(this).find('td:nth-child(2)').text();
		var score = {
			usuario: usuario,
			pontos: palavras
		};
		placar.push(score);
	});

	var dados = {
		placar: placar
	};

	$.post('http://localhost:3001/placar', dados, function() {
		console.log('Salvou o placar no servidor')
	});
}

function atualizaPlacar() {
	$.get('http://localhost:3001/placar', function(data){
		$(data).each(function() {
			var linha = novaLinha(this.usuario, this.pontos);
			linha.find('.botao-remover').click(removeLinha);
			$('tbody').append(linha);
		});
	});
}