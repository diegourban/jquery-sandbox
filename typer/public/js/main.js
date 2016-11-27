var frase = $(".frase").text();

var numeroPalavras = frase.split(" ").length;

$("#quantidade-palavras").text(numeroPalavras);