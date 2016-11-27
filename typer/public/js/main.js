var frase = $('.frase').text();
var numeroPalavras = frase.split(' ').length;
$('#quantidade-palavras').text(numeroPalavras);

var campo = $('.campo-digitacao');
campo.on('input', function() {
	var conteudo = campo.val();
	$('#contador-caracteres').text(conteudo.length);

	var qtdPalavras = conteudo.split(/\S+/).length - 1;
	$('#contador-palavras').text(qtdPalavras);
});

var tempoRestante = $('#tempo-digitacao').text();
campo.one('focus', function() {
	var cronometroId = setInterval(function() {
		tempoRestante--;
		$('#tempo-digitacao').text(tempoRestante);
		if(tempoRestante < 1) {
			campo.attr('disabled', 'disabled');
			clearInterval(cronometroId);
		}
	}, 1000);
});