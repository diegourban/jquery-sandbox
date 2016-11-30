$('#botao-troca-frase').click(fraseAleatoria);
$('#botao-busca-frase').click(buscaFrase);

function fraseAleatoria() {
	$('#spinner').show();

	$.get('http://localhost:3000/frases', trocaFraseAleatoria)
		.fail(mostraMensagemErro)
		.always(function() {
			$('#spinner').hide();
		});
}

function mostraMensagemErro() {
	$('#erro').show();
	setTimeout(function() {
		$('#erro').hide();
	}, 2000);
}

function trocaFraseAleatoria(data) {
	let frase = $('.frase');
	let numeroAleatorio = Math.floor(Math.random() * data.length);
	frase.text(data[numeroAleatorio].texto);
	atualizaTamanhoFrase();
	atualizaTempoInicial(data[numeroAleatorio].tempo);
}

function buscaFrase() {
	$('#spinner').show();
	var fraseId = $('#frase-id').val();
	var dados = {id: fraseId};
	$.get('http://localhost:3000/frases', dados, trocaFrase)
		.fail(mostraMensagemErro)
		.always(function() {
			$('#spinner').hide();
		});
}

function trocaFrase(data) {
	var frase = $('.frase');
	frase.text(data.texto);
	atualizaTamanhoFrase();
	atualizaTempoInicial(data.tempo);
}