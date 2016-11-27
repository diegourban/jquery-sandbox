var tempoInicial = $('#tempo-digitacao').text();
var campo = $('.campo-digitacao');

$(document).ready(function() {
	atualizaTamanhoFrase();
	inicializaContadores();
	inicializaCronometro();
	$('#botao-reiniciar').click(reiniciaJogo);
});

function atualizaTamanhoFrase() {
	var frase = $('.frase').text();
	var numeroPalavras = frase.split(' ').length;
	$('#quantidade-palavras').text(numeroPalavras);	
}

function inicializaContadores() {
	campo.on('input', function() {
		var conteudo = campo.val();
		$('#contador-caracteres').text(conteudo.length);

		var qtdPalavras = conteudo.split(/\S+/).length - 1;
		$('#contador-palavras').text(qtdPalavras);
	});	
}

function inicializaCronometro() {
	var tempoRestante = $('#tempo-digitacao').text();
	campo.one('focus', function() {
		$("#botao-reiniciar").attr("disabled",true);
		var cronometroId = setInterval(function() {
			tempoRestante--;
			$('#tempo-digitacao').text(tempoRestante);
			if(tempoRestante < 1) {
				campo.attr('disabled', true);
				clearInterval(cronometroId);
				 $("#botao-reiniciar").attr("disabled", false);
			}
		}, 1000);
	});	
}

function reiniciaJogo() {
	campo.attr('disabled', false);
	campo.val('');
	$('#contador-caracteres').text('0');
	$('#contador-palavras').text('0');
	$('#tempo-digitacao').text(tempoInicial);
	inicializaCronometro();
}
