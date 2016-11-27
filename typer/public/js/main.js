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