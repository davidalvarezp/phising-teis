////Arquetipo: Modificaciones en la maqueta
////No toqueis!, puede sufrir modificaciones
////Si es necesario cread uno propio

$(document).ready(function(){
	//Prevenir intentos acceso automatizados sucesivos
	$('#checkhumano').click(function(){
	if($(this).prop('checked') === false){
		$('#botonentrarlogin').attr("disabled","disabled"); 
	} else {
		$('#botonentrarlogin').removeAttr('disabled');
	}
	});
});

/* Facilitar o acceso aÃ­nda cando indican sufixo de conta */
$("#fm1").submit(function( event ) {
	var acceso = $("#acceso option:selected").val();
	var conta = $("#username").val();
	var sufixo = conta.substring(conta.indexOf("@")+1);
	
	/* =============== CONTROL DE CONTA CORPORATIVA ==================== */
	if (conta.indexOf("@") != -1 && conta.indexOf("xunta") == -1) {
		/* EstÃ¡ indicando un sufixo de conta que non pertence Ã¡ 
		 * xunta de galicia, nin amtega nin educaciÃ³n*/
		
		event.preventDefault(); /* cortar submit*/
		var compania = sufixo.substring(0, sufixo.indexOf("."));
		var textoOrixinal = $(".conta-nonPermitida-modal-lg .modal-body").html();
		var novoTexto = textoOrixinal.replace("#compania#", compania);
		if (acceso == "EduLDAP") {
			novoTexto = novoTexto.replace("#organismo#", "ConsellerÃ­a de EducaciÃ³n, Ciencia, Universidades e FormaciÃ³n Profesional");
		}
		if (acceso == "AmtegaDA") {
			novoTexto = novoTexto.replace("#organismo#", "Xunta de Galicia");
		}
		$(".conta-nonPermitida-modal-lg .modal-body").html(novoTexto);
		$(".conta-nonPermitida-modal-lg").modal('show');
	}

	/* =============== CONTROL SELECCIÃ“N CORRECTA ==================== */
	if (conta.indexOf("@") != -1 && conta.indexOf("xunta") != -1) {
		var textoOrixinal = $(".acceso-seleccion-erronea-modal-lg .modal-body").html();
		var seleccion = $("#acceso option:selected").text();
		var orixe = sufixo;
		var erro = false;
		if (acceso == "EduLDAP" && conta.indexOf("@xunta") != -1) {
			erro = true;
			destino = "@edu.xunta.gal";
			proposta = $('#acceso option[value="AmtegaDA"]').text();
		}
		if (acceso == "AmtegaDA" && conta.indexOf("@edu.xunta") != -1) {
			erro = true;
			destino = "@xunta.gal";
			proposta = $('#acceso option[value="EduLDAP"]').text();
		}
		if (erro) {
			event.preventDefault(); /* cortar submit*/
			var novoTexto = textoOrixinal.replace("#orixe#", orixe);
			novoTexto = novoTexto.replace("#seleccion#", seleccion);
			novoTexto = novoTexto.replace("#destino#", destino);
			novoTexto = novoTexto.replace("#proposta#", proposta);		
			$(".acceso-seleccion-erronea-modal-lg .modal-body").html(novoTexto);
			$(".acceso-seleccion-erronea-modal-lg").modal('show');			
		}
	}

	/* ====================== NORMALIZACIÃ“N ========================== */
	if (conta.indexOf("@") != -1) {
		/* se Ã© unha conta corporativa e introduciu sufixo, este quÃ­tase 
		 * para facer o submit sen el*/
		
		novaConta = conta;
		if (acceso == "EduLDAP") {
			if (conta.indexOf("@edu.xunta") != -1) {
				novaConta = conta.substring(0, conta.indexOf("@edu.xunta"));
			}
		}
		$("#username").val(novaConta)
	}
	
	this.unbind('submit', event);
	
});
