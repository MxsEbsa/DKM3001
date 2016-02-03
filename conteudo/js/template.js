var escalaElemento;

// REDIMENSIONA TODO CONTEUDO NO CENTRO NA PÁGINA
function redimensionaElemento() {
    var elemento = $('.container');

    var larguraJanela = $(window).width();
    var alturaJanela = $(window).height();
    var larguraInicialElemento = 1024;
    var alturaInicialElemento = 660;

    var relacaoAspecto = larguraInicialElemento / alturaInicialElemento;

    if (alturaJanela <= larguraJanela) {
        var alturaRedimensionada = alturaJanela;
        var larguraRedimensionada = alturaRedimensionada * relacaoAspecto;
        if (larguraJanela < larguraRedimensionada) {
            var larguraRedimensionada = larguraJanela;
            var alturaRedimensionada = larguraRedimensionada / relacaoAspecto;
        }
    }

    else {
        var larguraRedimensionada = larguraJanela;
        var alturaRedimensionada = larguraRedimensionada / relacaoAspecto;
    }

    var escalaLargura = ((larguraRedimensionada / larguraInicialElemento) * 100) / 100.1;
    var escalaAltura = ((alturaRedimensionada / alturaInicialElemento) * 100) / 100.1;
    if(escalaLargura <= 1){
	    elemento.css({
	        '-webkit-transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')',
	        '-moz-transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')',
	        '-ms-transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')',
	        '-o-transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')',
	        'transform': 'scale(' + escalaLargura + ',' + escalaAltura + ')'
	    });
	}else{
		elemento.css({
	        '-webkit-transform': 'scale(1))',
	        '-moz-transform': 'scale(1)',
	        '-ms-transform': 'scale(1)',
	        '-o-transform': 'scale(1)',
	        'transform': 'scale(1)'
	    });
	}

    var style = elemento.get(0).style;
    var matrix = new WebKitCSSMatrix(style.webkitTransform);

    escalaElemento = matrix.a;
};
redimensionaElemento();
$(window).resize(function(){
	redimensionaElemento();
});

	//Config audio
	var 
	path = "media/audio/",
	
	// Som ambiente
	musica = new Howl({
		urls: [
			path+'ambiente.mp3',
			path+'ambiente.ogg',
		], 
		loop: true
	}),
	
	// Som de botões e falas em sprite
	textos = new Howl({
		urls: [
			path+'texto.mp3',
			path+'texto.ogg'
		],
		sprite: {
			loading: [0, 100], // primeiro som de ação do botãoIniciar
			stool1: [100, 9000],
			stool2: [10000, 8000],
			stool3: [18000, 8500],
			stool4: [28800, 10000], // [valor1, valor2] valor1 = É o valor do segundo onde começa o som // valor2 = é o tempo de duração do som.
		}
	});
	
	// Comando para desligar o som
	var 
	configAudio = {
		desligar: function(){
			musica.volume(0);
			textos.volume(0);
		},
		ligar: function(){
			musica.volume(1);
			textos.volume(1);
		}
	}

function updateScale() {var w = $(window).width(),h = $(window).height(),scaleFinal = 1,scaleX = w / 1024, scaleY = h / 660; if(scaleX < 1 && scaleY < 1){
	if(scaleX < scaleY) scaleFinal = scaleX; else scaleFinal = scaleY;}else{ if(scaleX < 1) scaleFinal = scaleX; else if(scaleY < 1) scaleFinal = scaleY;}$(".container").css({"transform":"scale("+scaleFinal+","+scaleFinal+")"});}
$(window).resize(function(){updateScale();});

function engine(tipo){
	var 
	init = document.getElementById("init"),
	conteudo = document.getElementById("content");
	var	
	header = document.createElement("div"),
	iconHeader = document.createElement("div"),
	tituloHeader = document.createElement("h1"),
	btnOptions = document.createElement("div"),
	activeOptions = document.createElement("div"),
	listOptions = document.createElement("ul"),
	instrucoes = document.createElement("div"),
	setaInstrucoes = document.createElement("div"),
	overlayOptions = document.createElement("div");
	header.setAttribute("id","header");
	iconHeader.setAttribute("class", "img"+config.genero+" icon");
	btnOptions.setAttribute("id","btnOptions");
	activeOptions.setAttribute("class","actionOptions");
	listOptions.setAttribute("id","navOptions");
	instrucoes.setAttribute("id","instrucoes");
	setaInstrucoes.setAttribute("class","seta");
	overlayOptions.setAttribute("class","overlayOptions");
	var
	btnStartCapa = $("#capa .acoes div:first-child"),
	subHeader = $(".subheader"),
	subHeaderText = $(".subheader p"),
	srcBotao1 = new Array ("btnHome","btnSom","btnInstrucoes"),
	tituloNavegador = $("head title");
	for(var m=0;m < srcBotao1.length;m++){
		var list = document.createElement("li");
			list.setAttribute("class","btnOption "+ srcBotao1[m]);
		var imgList = document.createElement("img");
			imgList.setAttribute("src","img/template/"+srcBotao1[m]+".png");
			list.appendChild(imgList);				
			listOptions.appendChild(list);
			header.appendChild(listOptions);
	}
	tituloNavegador.html(config.ano+" - "+config.titulo);
	init.insertBefore(header, conteudo);
	init.appendChild(overlayOptions);
	header.appendChild(iconHeader);
	header.appendChild(tituloHeader);
	header.appendChild(btnOptions);
	btnOptions.appendChild(activeOptions);
	instrucoes.appendChild(setaInstrucoes);
	header.appendChild(instrucoes);
	tituloHeader.innerHTML = config.titulo;
	iconHeader.style.backgroundImage = config.genero;
	if(tipo == "matematica"){
		$("body").css({background:config.matematica.bck});
		iconHeader.style.backgroundColor = config.matematica.cp4;
		header.style.backgroundColor = config.matematica.cp1; 
		btnOptions.style.background = config.matematica.btnOptions;
		btnStartCapa.css("background-color",config.matematica.cs1);	
		subHeader.css({"background-color":config.matematica.cs1, width:"335px"});
		subHeaderText.text(config.ano);
		$("#instrucoes").css("background",config.matematica.cp1);
		$(".seta").css("border-left-color",config.matematica.cp1);
	}else if(tipo == "portugues"){
		$("body").css({background:config.portugues.bck});
		iconHeader.style.backgroundColor = config.portugues.cp4;
		header.style.backgroundColor = config.portugues.cp1; 
		btnOptions.style.background = config.portugues.btnOptions;
		btnStartCapa.css("background-color",config.portugues.cs1);	
		subHeader.css({"background-color":config.portugues.cs1, width:"335px"});	
		subHeaderText.text(config.ano);
		$("#instrucoes").css("background",config.portugues.cp1);
		$(".seta").css("border-left-color",config.portugues.cp1);
	}else if(tipo == "geografia"){
		$("body").css({background:config.geografia.bck});
		iconHeader.style.backgroundColor = config.geografia.cp4;
		header.style.backgroundColor = config.geografia.cp1; 
		btnOptions.style.background = config.geografia.btnOptions;
		btnStartCapa.css("background-color",config.geografia.cs1);	
		subHeader.css({"background-color":config.geografia.cs1, width:"335px"});	
		subHeaderText.text(config.ano);
		$("#instrucoes").css("background",config.geografia.cp1);
		$(".seta").css("border-left-color",config.geografia.cp1);
	}else if(tipo == "ciencias"){
		$("body").css({background:config.ciencias.bck});
		iconHeader.style.backgroundColor = config.ciencias.cp4;
		header.style.backgroundColor = config.ciencias.cp1; 
		btnOptions.style.background = config.ciencias.btnOptions;
		btnStartCapa.css("background-color",config.ciencias.cs1);	
		subHeader.css({"background-color":config.ciencias.cs1, width:"335px"});	
		subHeaderText.text(config.ano);
		$("#instrucoes").css("background",config.ciencias.cp1);
		$(".seta").css("border-left-color",config.ciencias.cp1);
	}else if(tipo == "historia"){
		$("body").css({background:config.historia.bck});
		iconHeader.style.backgroundColor = config.historia.cp4;
		header.style.backgroundColor = config.historia.cp1; 
		btnOptions.style.background = config.historia.btnOptions;
		btnStartCapa.css("background-color",config.historia.cs1);	
		subHeaderText.text(config.ano);
		subHeader.css({"background-color":config.historia.cs1, width:"335px"});	
		$("#instrucoes").css("background",config.historia.cp1);
		$(".seta").css("border-left-color",config.historia.cp1);
	}
}
var config = {
	create: function(){
		updateScale();
	//---------------------------------- CONFIGURAÇÃO DO TEMPLATE - PARTE I
		
		// Matéria do Objeto
		engine("matematica"); // 1 - português // 2 - matemática // 3 - ciências // 4 - história // 5 - geografia
	},

	
	// Nome do Objeto
	titulo: "Planificações",
	// Tipo de icone do Objeto
	genero: "home", // 1 - infografico / 2 - jogo / 3 - video/ 4-dragindrop
	// Ano da disciplina
	ano: "MATEMÁTICA | 3º Ano",
	
	
	
	
	tipo: "pnld 2016",
	colecao: "Jimboe",
	matematica: {
		cp1: "rgba(46,86,166,1)",
		cp2: "rgba(136,178,223,1)",
		cp3: "rgba(14,49,120,1)",
		cp4: "rgba(18,23,57,1)",
		cs1: "rgba(246,140,61,1)",
		cs2: "rgba(253,209,176,1)",
		cs3: "rgba(251,178,115,1)",
		cs4: "rgba(192,102,22,1)",
		bck: "url(img/template/background-matematica.gif) repeat center",
		btnOptions: "url(img/template/btnOptionsMatematica.png) no-repeat bottom right"
	},
	ciencias: {
		cp1: "rgba(1,186,189,1)",
		cp2: "rgba(119,205,208,1)",
		cp3: "rgba(0,125,126,1)",
		cp4: "rgba(0,72,74,1)",
		cs1: "rgba(237,26,59,1)",
		cs2: "rgba(245,151,149,1)",
		cs3: "rgba(241,102,106,1)",
		cs4: "rgba(196,18,47,1)",
		bck: "url(img/template/background-ciencias.gif) repeat bottom",
		btnOptions: "url(img/template/btnOptionsCiencias.png) no-repeat bottom right"
	},
	historia: {
		cp1: "rgba(112,89,166,1)",
		cp2: "rgba(176,163,208,1)",
		cp3: "rgba(92,46,145,1)",
		cp4: "rgba(52,12,61,1)",
		cs1: "rgba(209,162,28,1)",
		cs2: "rgba(238,221,140,1)",
		cs3: "rgba(225,198,102,1)",
		cs4: "rgba(163,139,16,1)",
		bck: "url(img/template/background-historia.gif) repeat bottom",
		btnOptions: "url(img/template/btnOptionsHistoria.png) no-repeat bottom right"
	},
	portugues: {
		cp1: "rgba(237,20,91,1)",
		cp2: "rgba(245,152,157,1)",
		cp3: "rgba(176,4,65,1)",
		cp4: "rgba(93,0,35,1)",
		cs1: "rgba(0,169,100,1)",
		cs2: "rgba(165,217,201,1)",
		cs3: "rgba(79,190,149,1)",
		cs4: "rgba(0,98,58,1)",
		bck: "url(img/template/background-portugues.gif) repeat bottom",
		btnOptions: "url(img/template/btnOptionsPortugues.png) no-repeat bottom right"
	},
	geografia: {
		cp1: "rgba(180,62,151,1)",
		cp2: "rgba(199,142,191,1)",
		cp3: "rgba(143,43,120,1)",
		cp4: "rgba(104,0,89,1)",
		cs1: "rgba(77,184,72,1)",
		cs2: "rgba(196,223,155,1)",
		cs3: "rgba(151,203,89,1)",
		cs4: "rgba(33,116,52,1)",
		bck: "url(img/template/background-geografia.gif) repeat bottom",
		btnOptions: "url(img/template/btnOptionsGeografia.png) no-repeat bottom right"
	}
}


var sound = new Howl({  urls: ['media/Som_ambiente.mp3','media/Som_ambiente.ogg'], loop: true, volume: 0.4  });
var textNarrador = new Howl({  urls: ['media/DMT3_04_PARTE_1.mp3','media/DMT3_04_PARTE_1.ogg'],  sprite: {    text1: [0, 18000],    text2: [18000, 10500],    text3: [29000, 4000], text4: [33000, 6900], text5: [40000, 4900], text6: [45000, 5900], text7: [51000, 5000], text8: [56000, 1900], text9: [58000, 5500] }});
var textNarrador2 = new Howl({  urls: ['media/DMT3_04_PARTE_2_02JUN_.mp3','media/DMT3_04_PARTE_2_02JUN_.ogg'],  sprite: {    text1: [0, 5500],    text2: [6000, 6000],    text3: [11800, 7000], text4: [18390, 7800], text5: [27000, 9500], text6: [36200, 10500], text7: [46000, 8900] }});
var acert = new Howl({  urls: ['media/acerto.mp3','media/acerto.ogg']});
var erro = new Howl({  urls: ['media/erro.mp3','media/erro.ogg']});


function template(){
	config.create();
	var
	template = $("#header");
	var 
	capa = {
		imagem: $("#capa"),
		cabecalho: $("#capa .header"),
		subcapa: $("#capa .subheader"),
		tituloCabecalho: $("#capa .header h1"),
		botaoIniciar: $("#capa .acoes div:first-child"),
		botaoCredito: $("#capa .acoes div:nth-child(2)"),
		creditos: {
			janela: $("#creditos"),
			texto: $(".text-creditos"),
			botaoFechar: $(".btnFechaCreditos")
		}
	}
	var 
	opcoes = {
		ativo:0,
		tool: $(".actionOptions"),
		botoes: $("#navOptions"),
		overlay: $(".overlayOptions"),
		menu: {
			geral: $("#navOptions li"),
			background: $("#btnOptions"),
			atualizar: $(".imghome"),
			principal: $(".btnMenu"),
			som: $(".btnSom"),
			somOff: $(".btnSomOff"),
			instrucoes: $(".btnInstrucoes")
		},
		cntInstrucoes: $("#instrucoes"),
		textoInstrucoes: ""
	}	
	capa.cabecalho.show().addClass("animated slideInRight");
	capa.tituloCabecalho.text(config.titulo);
	setTimeout(function(){
		capa.subcapa.css({"margin-top":"-222px",opacity:"1"});
		capa.botaoIniciar.show().addClass("animated lightSpeedIn");
		setTimeout(function(){capa.botaoIniciar.removeClass("animated lightSpeedIn");},1000);
		capa.botaoCredito.delay(500).fadeIn(500);
	},1000);
	capa.botaoIniciar.on("click",function(){
		sound.stop().play();
		textos.stop().play("loading");
		capa.cabecalho.css({marginTop:"-380px"});
		capa.botaoIniciar.css({width:"0", marginRight:"-50px"});
		capa.botaoCredito.css({marginLeft:"250px"});
		template.show();
		setTimeout(function(){
			capa.imagem.fadeOut(300,function(){
				$(this).remove();
				startGame.init();
			});
		},800);
	});
	velocidadeCreditos = 25000;
	capa.botaoCredito.on("click",function(){
		$(this).fadeOut(500);		
		capa.creditos.janela.fadeIn(500,function(){
			capa.creditos.texto.stop().animate({marginTop:"-340px"},velocidadeCreditos, "linear");
			starwars = setInterval(function(){
				capa.creditos.texto.css({marginTop:"261px"}).stop().animate({marginTop:"-340px"},velocidadeCreditos, "linear");
			},velocidadeCreditos);
			
		});
	});
	capa.creditos.botaoFechar.on("click",function(){
		capa.creditos.texto.stop().css({marginTop:"261px"});
		clearInterval(starwars);
		capa.creditos.janela.fadeOut(500);
		capa.botaoCredito.fadeIn(500);
	});
	// Abre opções do Objeto
	opcoes.tool.on({
		click:function(){
			if(opcoes.ativo == 0){
				textosInstrucoes(txtLvl);
				$(this).parent().css("box-shadow","-5px -25px 10px rgba(0,0,0,.5)");
				$(this).css("opacity",".3");
				opcoes.cntInstrucoes.removeClass("animated rotateOutUpRight");
				opcoes.cntInstrucoes.show().addClass("animated rotateInDownRight");
				opcoes.ativo = 1;
			}else{
				$(this).parent().css("box-shadow","none");
				$(this).css("opacity","1");
				opcoes.cntInstrucoes.removeClass("animated rotateInDownRight");
				opcoes.cntInstrucoes.addClass("animated rotateOutUpRight");
				opcoes.ativo = 0;
			}
		}
	});
	
	opcoes.overlay.on({
		click: function(){
			opcoes.tool.removeClass("opened").css({backgroundPosition:"11px 15px"});
			opcoes.botoes.hide();
			opcoes.menu.background.css({height:"78px", backgroundPosition:"bottom"});
			$(".overlayOptions").hide();
			if($(".seta").is(":visible")){
				opcoes.cntInstrucoes.css({
				width:"0px",
				opacity:"0"
				});
				$(".seta").fadeOut(200);
				$("#instrucoes p").remove();
			}
		}
		
	});
	// Botão Volta pra capa
	opcoes.menu.atualizar.on("click",function(){
		location.href="index.html"
	});





	//CONFIGURAÇÃO DO TEMPLATE - PARTE II
	
	// Config Instruções
	xAlturaInstrucoes = 364;
	opcoes.textoInstrucoes = "Decifre as mensagens e clique no local onde é possível encontrar os itens que precisa comprar."
	
	


}