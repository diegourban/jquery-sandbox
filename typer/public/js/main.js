var tempoInicial = $('#tempo-digitacao').text();
var campo = $('.campo-digitacao');

$(document).ready(function() {
	atualizaTamanhoFrase();
	inicializaContadores();
	inicializaCronometro();
	inicializaMarcadores();
	atualizaPlacar();
	$('#botao-reiniciar').click(reiniciaJogo);
	$('#usuarios').selectize({
		create: true,
		sortField: 'text'
	});

	$('.tooltip').tooltipster({
		trigger: "custom"
	});
});

function inicializaMarcadores() {
	campo.on('input', function() {
		var frase = $(".frase").text();
		var digitado = campo.val();
		if(frase.startsWith(digitado)) {
			campo.removeClass('campo-errado');
			campo.addClass('campo-correto');
		} else {
			campo.removeClass('campo-correto');
			campo.addClass('campo-errado');
		}
	});
}

function atualizaTamanhoFrase() {
	var frase = $('.frase').text();
	var numeroPalavras = frase.split(' ').length;
	$('#quantidade-palavras').text(numeroPalavras);	
}

function atualizaTempoInicial(tempo) {
	tempoInicial = tempo;
	$('#tempo-digitacao').text(tempo);
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
	campo.one('focus', function() {
		var tempoRestante = $('#tempo-digitacao').text();
		$("#botao-reiniciar").attr("disabled",true);
		var cronometroId = setInterval(function() {
			tempoRestante--;
			$('#tempo-digitacao').text(tempoRestante);
			if(tempoRestante < 1) {
				clearInterval(cronometroId);
				finalizaJogo();
			}
		}, 1000);
	});	
}

function finalizaJogo() {
	campo.attr('disabled', true);
	$("#botao-reiniciar").attr("disabled", false);
	inserePlacar();
}

function reiniciaJogo() {
	campo.attr('disabled', false);
	campo.val('');
	$('#contador-caracteres').text('0');
	$('#contador-palavras').text('0');
	$('#tempo-digitacao').text(tempoInicial);
	inicializaCronometro();
	campo.removeClass('campo-errado');
	campo.removeClass('campo-correto');
}