$('#botao-troca-frase').click(fraseAleatoria);

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