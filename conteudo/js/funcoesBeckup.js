
// AKPALO

function engine(tipo){
	
	// Busca ID do HTML
	var 
	init = document.getElementById("init"),
	conteudo = document.getElementById("content");

	// Cria os elementos
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
		
	// Seta as Classes e variáveis	
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
	botaoPop = $(".btnFechaPopUp, .btnFechaSmall, .btnFechaSmallFinaliza"),
	jnlFeed = $(".feedback, .feedsmall"),
	srcBotao1 = new Array ("btnHome","btnSom","btnInstrucoes"),
	tituloNavegador = $("head title");
	
	for(var m=0;m < srcBotao1.length;m++){
		var list = document.createElement("li");
			list.setAttribute("class","btnOption "+ srcBotao1[m]);
		var imgList = document.createElement("img");
			imgList.setAttribute("src","img/"+srcBotao1[m]+".png");
			list.appendChild(imgList);				
			listOptions.appendChild(list);
			header.appendChild(listOptions);
	}
		
	// Create DOM
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
		iconHeader.style.backgroundColor = config.matematica.cp2;
		header.style.backgroundColor = config.matematica.cp1; 
		btnOptions.style.background = config.matematica.btnOptions;
		btnStartCapa.css("background-color",config.matematica.cp3);	
		botaoPop.css("background-color",config.matematica.cp3);
		jnlFeed.css("border", "5px solid "+config.matematica.cp3);
		$("#instrucoes").css("background",config.matematica.cp1);
		$(".seta").css("border-left-color",config.matematica.cp1);
	}else if(tipo == "portugues"){
		$("body").css({background:config.portugues.bck});
		iconHeader.style.backgroundColor = config.portugues.cp2;
		header.style.backgroundColor = config.portugues.cp1; 
		btnOptions.style.background = config.portugues.btnOptions;
		btnStartCapa.css("background-color",config.portugues.cp3);	
		botaoPop.css("background-color",config.portugues.cp3);
		jnlFeed.css("border", "5px solid "+config.portugues.cp3);
		$("#instrucoes").css("background",config.portugues.cp1);
		$(".seta").css("border-left-color",config.portugues.cp1);
	}else if(tipo == "geografia"){
		$("body").css({background:config.geografia.bck});
		iconHeader.style.backgroundColor = config.geografia.cp2;
		header.style.backgroundColor = config.geografia.cp1; 
		btnOptions.style.background = config.geografia.btnOptions;
		btnStartCapa.css("background-color",config.geografia.cp3);	
		botaoPop.css("background-color",config.geografia.cp3);
		jnlFeed.css("border", "5px solid "+config.geografia.cp3);
		$("#instrucoes").css("background",config.geografia.cp1);
		$(".seta").css("border-left-color",config.geografia.cp1);
	}else if(tipo == "ciencias"){
		$("body").css({background:config.ciencias.bck});
		iconHeader.style.backgroundColor = config.ciencias.cp2;
		header.style.backgroundColor = config.ciencias.cp1; 
		btnOptions.style.background = config.ciencias.btnOptions;
		btnStartCapa.css("background-color",config.ciencias.cp3);	
		botaoPop.css("background-color",config.ciencias.cp3);
		jnlFeed.css("border", "5px solid "+config.ciencias.cp3);
		$("#instrucoes").css("background",config.ciencias.cp1);
		$(".seta").css("border-left-color",config.ciencias.cp1);
	}else if(tipo == "historia"){
		$("body").css({background:config.historia.bck});
		iconHeader.style.backgroundColor = config.historia.cp2;
		header.style.backgroundColor = config.historia.cp1; 
		btnOptions.style.background = config.historia.btnOptions;
		btnStartCapa.css("background-color",config.historia.cp3);	
		botaoPop.css("background-color",config.historia.cp3);
		jnlFeed.css("border", "5px solid "+config.historia.cp3);
		$("#instrucoes").css("background",config.historia.cp1);
		$(".seta").css("border-left-color",config.historia.cp1);
	}
}
// Configura Objeto
var config = {
	create: function(){
		engine("matematica"); // 1 - português // 2 - matemática // 3 - ciências // 4 - história // 5 - geografia
	},
	titulo: "A Viagem",
	tipo: "pnld 2016",
	colecao: "Akpalo",
	ano: "1º Ano",
	genero: "infografico", // 1 - infografico / 2 - jogo / 3 - video/ 4-dragindrop
	
	matematica: {
		cp1: "rgba(247,148,30,1)",
		cp2: "rgba(253,198,137,1)",
		cp3: "rgba(96,161,215,1)",
		bck: "rgba(253,198,137,0.4)",
		btnOptions: "url(img/btnOptionsMatematica.png) no-repeat bottom right"
	},
	portugues: {
		cp1: "rgba(237,28,36,1)",
		cp2: "rgba(246,150,121,1)",
		cp3: "rgba(135,209,209,1)",
		bck: "rgba(246,150,121,0.4)",
		btnOptions: "url(img/btnOptionsPortugues.png) no-repeat bottom right"
	},
	geografia: {
		cp1: "rgba(0,170,151,1)",
		cp2: "rgba(121,205,208,1)",
		cp3: "rgba(255,194,14,1)",
		bck: "rgba(121,205,208,0.4)",
		btnOptions: "url(img/btnOptionsGeografia.png) no-repeat bottom right"
	},
	ciencias: {
		cp1: "rgba(96,187,70,1)",
		cp2: "rgba(171,214,156,1)",
		cp3: "rgba(242,112,109,1)",
		bck: "rgba(171,214,156,0.4)",
		btnOptions: "url(img/btnOptionsCiencias.png) no-repeat bottom right"
	},
	historia: {
		cp1: "rgba(129,41,144,1)",
		cp2: "rgba(178,138,191,1)",
		cp3: "rgba(215,223,33,1)",
		bck: "rgba(178,138,191,0.4)",
		btnOptions: "url(img/btnOptionsHistoria.png) no-repeat bottom right"
	}
}

$(window).resize(function(){
	updateScale();
});


var sound = new Howl({  urls: ['media/ambiente.mp3','media/ambiente.ogg'], loop: true, volume: 0.4  });
var textNarrador = new Howl({  urls: ['media/DMT2_03_Narrador.mp3','media/DMT2_03_Narrador.ogg'],  sprite: {    text1: [0, 12000],    text2: [12000, 9500],    text3: [22000, 4000], text4: [26000, 7900], text5: [34000, 5500], text6: [40000, 13500], text7: [54000, 6500], text8: [61000, 9500], text10: [76000, 4950], text11: [81000, 6500] , text13: [92000, 9999], text14: [99999, 6500]   }});
var textMenino = new Howl({  urls: ['media/DMT2_03_Menino.mp3','media/DMT2_03_Menino.ogg'],  sprite: {    text1: [0, 12000],    text2: [12000, 7500], text3: [20000, 5500], text4: [26000, 11500]  }});
var textMenina = new Howl({  urls: ['media/DMT2_03_Menina.mp3','media/DMT2_03_Menina.ogg'],  sprite: {    text1: [0, 12000],    text2: [3000, 700],    text3: [5000, 9000]  }});
var acert = new Howl({  urls: ['media/acerto.mp3','media/acerto.ogg']});



// Executa esta função "start" após o carregamento das imagens
function start(){
	config.create(); // Seta as propriedades principais do Objeto e executa
		
	
	//Variáveis da capa
	var 
	capa = {
		imagem: $("#capa"),
		cabecalho: $("#capa .header"),
		tituloCabecalho: $("#capa .header h1"),
		botaoIniciar: $("#capa .acoes div:first-child"),
		botaoCredito: $("#capa .acoes div:nth-child(2)"),
		creditos: {
			janela: $("#creditos"),
			texto: $(".text-creditos"),
			botaoFechar: $(".btnFechaCreditos")
		}
	}
	
	// Variáveis do menu Opções do Objeto
	var 
	opcoes = {
		tool: $(".actionOptions"),
		botoes: $("#navOptions"),
		overlay: $(".overlayOptions"),
		menu: {
			geral: $("#navOptions li"),
			background: $("#btnOptions"),
			atualizar: $(".btnHome"),
			principal: $(".btnMenu"),
			som: $(".btnSom"),
			somOff: $(".btnSomOff"),
			instrucoes: $(".btnInstrucoes")
		},
		cntInstrucoes: $("#instrucoes"),
		textoInstrucoes: "Decifre as mensagens e clique no local onde é possível encontrar os itens que precisa comprar."

	}
	// Variáveis diversas
	var
	audioTrilha = $(".musica-som");
	audioAcerto = $(".acerto-som");
	audioErro = $(".erro-som");
	
	//Carrega Capa
	capa.cabecalho.css({marginTop:"0px"});
	capa.tituloCabecalho.text(config.titulo);
	setTimeout(function(){
		capa.botaoIniciar.css({width:"155px", marginRight:0});
		capa.botaoCredito.delay(500).fadeIn(500);
	},1000);
		
	//Config audio
	function loadAudio(){
		audioTrilha.bind('load');
		audioTrilha.trigger('load');	
		audioAcerto.bind('load');
		audioAcerto.trigger('load');	
		audioErro.bind('load');
		audioErro.trigger('load');	
	}
	function startAudio(){
		audioTrilha.trigger('play');
	}
	function stopAudio(){pauseAudio();audioTrilha.prop("currentTime",0);}
	function pauseAudio(){audioTrilha.trigger('pause');}
	function forwardAudio(){pauseAudio();audioTrilha.prop("currentTime",audioTrilha.prop("currentTime")+5);startAudio();}
      function backAudio(){pauseAudio();audioTrilha.prop("currentTime",audioTrilha.prop("currentTime")-5);startAudio();}
	function volumeUp(){var volume = audioTrilha.prop("volume")+0.2;if(volume >1){volume = 1;}audioTrilha.prop("volume",volume);}
	function volumeDown(){var volume = audioTrilha.prop("volume")-0.2;if(volume <0){volume = 0;}audioTrilha.prop("volume",volume);}
      function toggleMuteAudio(){
		audioTrilha.prop("muted",!audioTrilha.prop("muted"));
		audioAcerto.prop("muted",!audioAcerto.prop("muted"));
		audioErro.prop("muted",!audioErro.prop("muted"));
	}
	
	
	
	// --------------------------- Botões Padrões
	// Inicia Objeto
	capa.botaoIniciar.on("click",function(){
		sound.stop().play();
		

		tempo = 888;
		capa.cabecalho.css({marginTop:"-380px"});
		capa.botaoIniciar.css({width:"0", marginRight:"-50px"});
		capa.botaoCredito.css({marginLeft:"250px"});
		setTimeout(function(){
			capa.imagem.fadeOut(300,function(){
				$(this).remove();
				
				aViagem.init();
								
			});
		},800);
	});
	
	// Ativa créditos
	capa.botaoCredito.on("click",function(){
		$(this).fadeOut(500);		
		capa.creditos.janela.fadeIn(500,function(){
			capa.creditos.texto.stop().animate({marginTop:"-340px"},15000, "linear");
			starwars = setInterval(function(){
				capa.creditos.texto.css({marginTop:"261px"}).stop().animate({marginTop:"-340px"},15000, "linear");
			},16000);
			
		});
	});
	
	//Fecha os créditos
	capa.creditos.botaoFechar.on("click",function(){
		capa.creditos.texto.stop().css({marginTop:"261px"});
		clearInterval(starwars);
		capa.creditos.janela.fadeOut(500);
		capa.botaoCredito.fadeIn(500);
	});

	// Abre opções do Objeto
	opcoes.tool.on({
		click: function(){
			var xIcones = 78;
			var totalIcones = $("#navOptions li").length;
			if(opcoes.tool.hasClass("opened")){
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
			}else{
				$(".overlayOptions").show();
				opcoes.tool.addClass("opened").css({backgroundPosition:"11px -46px"});
				opcoes.botoes.delay(300).fadeIn(800);
				opcoes.menu.background.css({height:xIcones * totalIcones + 70 +"px", backgroundPosition:"bottom"});
			}
		},
	});
	
	// Ativa / Desativa som
	opcoes.menu.som.on({
		click: function(){
			toggleMuteAudio();
			if(opcoes.menu.som.hasClass("desligar")){
				opcoes.menu.som.removeClass("desligar");
				opcoes.menu.som.find("img").attr("src","img/btnSom.png");
				sound.play();
			}else{
				opcoes.menu.som.addClass("desligar");
				opcoes.menu.som.find("img").attr("src","img/btnSomOff.png");
				sound.pause();
			}
		},
	});
	
	// Mostra instruções
	opcoes.menu.instrucoes.on({
		click:function(){
			if($(".seta").is(":visible")){
				opcoes.cntInstrucoes.css({
				width:"0px",
				opacity:"0"
				});
				$(".seta").fadeOut(200);
				$("#instrucoes p").remove();
			}else{
				opcoes.cntInstrucoes.css({
				width:"300px",
				opacity:"1"
				});
				$(".seta").delay(300).fadeIn(500,function(){
					$("#instrucoes").append("<p>"+opcoes.textoInstrucoes+"</p>").fadeIn(500);
				});
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


	


	// INIT GAME
	
	var aViagem = {


		game1: {

			stilo: function(){
				var respostas = $('.game1 .placas .pergunta .conteudo ul.respostas');
				for ( var i = 0; i<respostas.length; i++ ){
					$(respostas).eq(i).children('li').eq(0).css({
						'margin-left':'0'
					});
				}
			},

			verificaResposta: function(){
				var life = 3;
				var respostas = $('.game1 .placas .pergunta .conteudo ul.respostas li');


				$('.placas.SuperMercadoPai .pergunta .conteudo ul.respostas li').on('click', function(){
					textNarrador.stop();
					var self = $(this);
					
					if( $(self).attr('class') == 'certo' ){

						$(this).parent().parent().children('.popupAcerto').fadeIn(700);

						$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
							'left':'70px',
							'bottom':'50px'
						},1000);

						$(this).parent().siblings('.popupAcerto').children('.texto').animate({
							'left':'360px',
							'top':'220px'
						},1500, 'easeOutBack');

						setTimeout(function(){
							textMenino.stop().play("text3");
						},500);

						setTimeout(function(){
							$(self).parent().parent().parent().fadeOut(1000);
							setTimeout(function(){
								$('.popupSuperMercadoAvance').fadeIn(1000);
								setTimeout(function(){
									textMenino.stop().play("text4");
								},800);
							},1000);
						},6000);
				});		

						if (  $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventPadaria' ){

							$(this).parent().parent().children('.popupAcerto').fadeIn(700);

							$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupAcerto').children('.texto').animate({
								'left':'360px',
								'top':'220px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textMenino.stop().play("text3");
							},500);

							setTimeout(function(){
								$(self).parent().parent().parent().fadeOut(1000);
								setTimeout(function(){
									$('.popupPadariaAvance').fadeIn(1000);
									setTimeout(function(){
										textNarrador.stop().play("text5");
									},800);
								},1000);
							},6000);
						}

						if (  $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventMecanica' ){

							$(this).parent().parent().children('.popupAcerto').fadeIn(700);

							$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupAcerto').children('.texto').animate({
								'left':'360px',
								'top':'220px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textMenino.stop().play("text3");
							},500);

							setTimeout(function(){
								$(self).parent().parent().parent().fadeOut(1000);
								setTimeout(function(){
									$('.popupOficinaMecanicaAvance').fadeIn(1000);
									setTimeout(function(){
										textNarrador.stop().play("text7");
									},800);
								},1000);
							},6000);
						}

						if (  $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventPostoDeGasolina' ){

							$(this).parent().parent().children('.popupAcerto').fadeIn(700);

							$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupAcerto').children('.texto').animate({
								'left':'360px',
								'top':'220px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textMenino.stop().play("text3");
							},500);

							setTimeout(function(){
								$(self).parent().parent().parent().fadeOut(1000);
								setTimeout(function(){
									$('.popupPostoDeGasolinaAvance').fadeIn(1000);
									setTimeout(function(){
										textNarrador.stop().play("text10");
									},800);
								},1000);
							},6000);
						}

						if (  $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventLojaDeMalas' ){

							$(this).parent().parent().children('.popupAcerto').fadeIn(700);

							$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupAcerto').children('.texto').animate({
								'left':'360px',
								'top':'220px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textMenino.stop().play("text3");
							},500);

							setTimeout(function(){
								$(self).parent().parent().parent().fadeOut(1000);
								setTimeout(function(){
									$('.popupLojaDeMalasAvance').fadeIn(1000);
									setTimeout(function(){
										textNarrador.stop().play("text13");
									},800);
								},1000);
							},6000);
						}

						if (  $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventLojaDeAnimais' ){

							$(this).parent().parent().children('.popupAcerto').fadeIn(700);

							$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupAcerto').children('.texto').animate({
								'left':'360px',
								'top':'220px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textMenino.stop().play("text3");
							},500);

							setTimeout(function(){
								$(self).parent().parent().parent().fadeOut(1000);
								setTimeout(function(){
									$('.popupLojaDeAnimaisAvance').fadeIn(1000);
									setTimeout(function(){
										// textNarrador.stop().play("text16");
									},800);
								},1000);
							},6000);
						}

						if (  $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventSuaCasa' ){

							$(this).parent().parent().children('.popupAcerto').fadeIn(700);

							$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupAcerto').children('.texto').animate({
								'left':'360px',
								'top':'220px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textMenino.stop().play("text3");
							},500);

							setTimeout(function(){
								$(self).parent().parent().parent().fadeOut(1000);
								setTimeout(function(){
									$('.popupSuaCasaAvance').fadeIn(1000);
									setTimeout(function(){
										// textNarrador.stop().play("text16");
									},800);
								},1000);
							},6000);
						}

						if (  $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventCasaDosAvos' ){

							$(this).parent().parent().children('.popupAcerto').fadeIn(700);

							$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupAcerto').children('.texto').animate({
								'left':'360px',
								'top':'220px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textMenino.stop().play("text3");
							},500);

							setTimeout(function(){
								$(self).parent().parent().parent().fadeOut(1000);
								setTimeout(function(){
									setTimeout(function(){
										// textNarrador.stop().play("text16");
									},800);
								},1000);
							},6000);
						}
						

					}else{
						
						var arranca = life--;
						$(this).parent().parent().children('.acertos').children('ul').children('li').eq(0).remove();

						// var life = $(this).parent().parent().children('.acertos').children('ul').children('li');

						if ( life <= 0 ){
							$(this).parent().siblings('.popupTerceiroErro').fadeIn(700);
							$(this).parent().siblings('.popupTerceiroErro').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupTerceiroErro').children('.texto').animate({
								'left':'360px',
								'top':'220px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textMenino.stop().play("text2");
							},1600);
							

							setTimeout(function(){
								window.location.href = 'index.html';
							},11000);
						}

						if ( life >= 1 ){
							$(this).parent().siblings('.popupErro').fadeIn(700);

								$(this).parent().siblings('.popupErro').children('.meninaPopup').animate({
									'left':'70px',
									'bottom':'50px'
								},1000);

								$(this).parent().siblings('.popupErro').children('.texto').animate({
									'left':'360px',
									'top':'220px'
								},1500, 'easeOutBack');

								if (  $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventsupermercado' || $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventPadaria' || $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventMecanica' ){
									setTimeout(function(){
										textNarrador.stop().play("text3");
									},1500);
								}
							
							setTimeout(function(){
								$(respostas).parent().siblings('.popupErro').fadeOut(500);

								$(respostas).parent().siblings('.popupErro').children('.texto').animate({
									'left':'360px',
									'top':'-220px'
								},1500, 'easeOutBack');

								$(respostas).parent().siblings('.popupErro').children('.meninaPopup').animate({
									'left':'-240px',
									'bottom':'50px'
								},1000);

							},6000);
						}
						
						
						
					}
				});





				$(respostas).on('click', function(){
					textNarrador.stop();
					var self = $(this);
					
					if( $(self).attr('class') == 'certo' ){

						if (  $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventsupermercado' ){

							$(this).parent().parent().children('.popupAcerto').fadeIn(700);

							$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupAcerto').children('.texto').animate({
								'left':'360px',
								'top':'220px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textMenino.stop().play("text3");
							},500);

							setTimeout(function(){
								$(self).parent().parent().parent().fadeOut(1000);
								setTimeout(function(){
									$('.popupSuperMercadoAvance').fadeIn(1000);
									setTimeout(function(){
										textMenino.stop().play("text4");
									},800);
								},1000);
							},6000);
						}

						if (  $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventPadaria' ){

							$(this).parent().parent().children('.popupAcerto').fadeIn(700);

							$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupAcerto').children('.texto').animate({
								'left':'360px',
								'top':'220px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textMenino.stop().play("text3");
							},500);

							setTimeout(function(){
								$(self).parent().parent().parent().fadeOut(1000);
								setTimeout(function(){
									$('.popupPadariaAvance').fadeIn(1000);
									setTimeout(function(){
										textNarrador.stop().play("text5");
									},800);
								},1000);
							},6000);
						}

						if (  $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventMecanica' ){

							$(this).parent().parent().children('.popupAcerto').fadeIn(700);

							$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupAcerto').children('.texto').animate({
								'left':'360px',
								'top':'220px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textMenino.stop().play("text3");
							},500);

							setTimeout(function(){
								$(self).parent().parent().parent().fadeOut(1000);
								setTimeout(function(){
									$('.popupOficinaMecanicaAvance').fadeIn(1000);
									setTimeout(function(){
										textNarrador.stop().play("text7");
									},800);
								},1000);
							},6000);
						}

						if (  $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventPostoDeGasolina' ){

							$(this).parent().parent().children('.popupAcerto').fadeIn(700);

							$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupAcerto').children('.texto').animate({
								'left':'360px',
								'top':'220px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textMenino.stop().play("text3");
							},500);

							setTimeout(function(){
								$(self).parent().parent().parent().fadeOut(1000);
								setTimeout(function(){
									$('.popupPostoDeGasolinaAvance').fadeIn(1000);
									setTimeout(function(){
										textNarrador.stop().play("text10");
									},800);
								},1000);
							},6000);
						}

						if (  $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventLojaDeMalas' ){

							$(this).parent().parent().children('.popupAcerto').fadeIn(700);

							$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupAcerto').children('.texto').animate({
								'left':'360px',
								'top':'220px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textMenino.stop().play("text3");
							},500);

							setTimeout(function(){
								$(self).parent().parent().parent().fadeOut(1000);
								setTimeout(function(){
									$('.popupLojaDeMalasAvance').fadeIn(1000);
									setTimeout(function(){
										textNarrador.stop().play("text13");
									},800);
								},1000);
							},6000);
						}

						if (  $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventLojaDeAnimais' ){

							$(this).parent().parent().children('.popupAcerto').fadeIn(700);

							$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupAcerto').children('.texto').animate({
								'left':'360px',
								'top':'220px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textMenino.stop().play("text3");
							},500);

							setTimeout(function(){
								$(self).parent().parent().parent().fadeOut(1000);
								setTimeout(function(){
									$('.popupLojaDeAnimaisAvance').fadeIn(1000);
									setTimeout(function(){
										// textNarrador.stop().play("text16");
									},800);
								},1000);
							},6000);
						}

						if (  $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventSuaCasa' ){

							$(this).parent().parent().children('.popupAcerto').fadeIn(700);

							$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupAcerto').children('.texto').animate({
								'left':'360px',
								'top':'220px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textMenino.stop().play("text3");
							},500);

							setTimeout(function(){
								$(self).parent().parent().parent().fadeOut(1000);
								setTimeout(function(){
									$('.popupSuaCasaAvance').fadeIn(1000);
									setTimeout(function(){
										// textNarrador.stop().play("text16");
									},800);
								},1000);
							},6000);
						}

						if (  $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventCasaDosAvos' ){

							$(this).parent().parent().children('.popupAcerto').fadeIn(700);

							$(this).parent().siblings('.popupAcerto').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupAcerto').children('.texto').animate({
								'left':'360px',
								'top':'220px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textMenino.stop().play("text3");
							},500);

							setTimeout(function(){
								$(self).parent().parent().parent().fadeOut(1000);
								setTimeout(function(){
									setTimeout(function(){
										// textNarrador.stop().play("text16");
									},800);
								},1000);
							},6000);
						}
						

					}else{
						
						var arranca = life--;
						$(this).parent().parent().children('.acertos').children('ul').children('li').eq(0).remove();

						// var life = $(this).parent().parent().children('.acertos').children('ul').children('li');

						if ( life <= 0 ){
							$(this).parent().siblings('.popupTerceiroErro').fadeIn(700);
							$(this).parent().siblings('.popupTerceiroErro').children('.meninaPopup').animate({
								'left':'70px',
								'bottom':'50px'
							},1000);

							$(this).parent().siblings('.popupTerceiroErro').children('.texto').animate({
								'left':'360px',
								'top':'220px'
							},1500, 'easeOutBack');

							setTimeout(function(){
								textMenino.stop().play("text2");
							},1600);
							

							setTimeout(function(){
								window.location.href = 'index.html';
							},11000);
						}

						if ( life >= 1 ){
							$(this).parent().siblings('.popupErro').fadeIn(700);

								$(this).parent().siblings('.popupErro').children('.meninaPopup').animate({
									'left':'70px',
									'bottom':'50px'
								},1000);

								$(this).parent().siblings('.popupErro').children('.texto').animate({
									'left':'360px',
									'top':'220px'
								},1500, 'easeOutBack');

								if (  $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventsupermercado' || $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventPadaria' || $(this).parent().parent().parent().siblings('.placa').attr('class') == 'placa eventMecanica' ){
									setTimeout(function(){
										textNarrador.stop().play("text3");
									},1500);
								}
							
							setTimeout(function(){
								$(respostas).parent().siblings('.popupErro').fadeOut(500);

								$(respostas).parent().siblings('.popupErro').children('.texto').animate({
									'left':'360px',
									'top':'-220px'
								},1500, 'easeOutBack');

								$(respostas).parent().siblings('.popupErro').children('.meninaPopup').animate({
									'left':'-240px',
									'bottom':'50px'
								},1000);

							},6000);
						}
						
						
						
					}
				});



			},

			placasAnimation: function(){
				var placas = $('.placa');
				for ( var i = 0; i<placas.length; i++ ){
					placas.eq(i).css({
						'left': placas.eq(i).siblings('.cordenadas').css('left')
					});
					placas.eq(i).stop().animate({
						'top':  placas.eq(i).siblings('.cordenadas').css('top'),
						'left': placas.eq(i).siblings('.cordenadas').css('left')
					},1000,'easeOutBounce');
				}
				$('.superMercadoNoClick').hide();

				$('.eventsupermercado').one('click', function(){
					$('.superMercadoNoClick').show();
					acert.stop().play();
					textNarrador.stop().play("text2");
					$(this).siblings('.pergunta').fadeIn(1000);
					aViagem.game1.verificaResposta();
					$(this).children('img').attr('src', $(this).children('img').attr('src').replace('.png', '-hover.png') );
					$('.padariaNoClick').hide();
				});
				$('.eventSuaCasa').one('click', function(){
					$('.suaCasaNoClick').show();
					acert.stop().play();
					textNarrador.stop().play("text4");
					$(this).siblings('.pergunta').fadeIn(1000);
					aViagem.game1.verificaResposta();
					$(this).children('img').attr('src', $(this).children('img').attr('src').replace('.png', '-hover.png') );
					$('.casaDosAvosNoClick').hide();
				});
				$('.eventPadaria').one('click', function(){
					$('.padariaNoClick').show();
					acert.stop().play();
					textNarrador.stop().play("text4");
					$(this).siblings('.pergunta').fadeIn(1000);
					aViagem.game1.verificaResposta();
					$(this).children('img').attr('src', $(this).children('img').attr('src').replace('.png', '-hover.png') );
					$('.oficinaMecanicaNoClick').hide();
				});
				$('.eventMecanica').one('click', function(){
					$('.oficinaMecanicaNoClick').show();
					acert.stop().play();
					textNarrador.stop().play("text6");
					$(this).siblings('.pergunta').fadeIn(1000);
					aViagem.game1.verificaResposta();
					$(this).children('img').attr('src', $(this).children('img').attr('src').replace('.png', '-hover.png') );
					$('.postoDeGasolinaNoClick').hide();
				});
				$('.eventPostoDeGasolina').one('click', function(){
					$('.postoDeGasolinaNoClick').show();
					acert.stop().play();
					textNarrador.stop().play("text8");
					$(this).siblings('.pergunta').fadeIn(1000);
					aViagem.game1.verificaResposta();
					$(this).children('img').attr('src', $(this).children('img').attr('src').replace('.png', '-hover.png') );
					$('.lojaDeMalasNoClick').hide();
				});
				$('.eventLojaDeMalas').one('click', function(){
					$('.lojaDeMalasNoClick').show();
					acert.stop().play();
					textNarrador.stop().play("text11");
					$(this).siblings('.pergunta').fadeIn(1000);
					aViagem.game1.verificaResposta();
					$(this).children('img').attr('src', $(this).children('img').attr('src').replace('.png', '-hover.png') );
					$('.lojaDeAnimaisNoClick').hide();
				});
				$('.eventLojaDeAnimais').one('click', function(){
					$('.lojaDeAnimaisNoClick').show();
					acert.stop().play();
					textNarrador.stop().play("text14");
					$(this).siblings('.pergunta').fadeIn(1000);
					aViagem.game1.verificaResposta();
					$(this).children('img').attr('src', $(this).children('img').attr('src').replace('.png', '-hover.png') );
					$('.suaCasaNoClick').hide();
				});
				$('.eventCasaDosAvos').one('click', function(){
					$('.suaCasaNoClick').show();
					acert.stop().play();
					textNarrador.stop().play("text14");
					$(this).siblings('.pergunta').fadeIn(1000);
					aViagem.game1.verificaResposta();
					$(this).children('img').attr('src', $(this).children('img').attr('src').replace('.png', '-hover.png') );
				});
			},

			init: function(){
				textMenino.stop().play("text1");
				$('.game1 .popupBG').fadeIn(1000);

				$('.game1 .popupBG .close').on('click', function(){
					if ( $(this).parent().parent().attr('class') == 'game1' ){
						textMenino.stop();
					}else{
						textMenina.stop();
					}
					$(this).parent().fadeOut(1000);
					setTimeout(function(){
						aViagem.game1.placasAnimation();
					},1300);
				});

				$('.game1 .popupSuperMercadoAvance .close, .game1 .popupPadariaAvance .close, .game1 .popupOficinaMecanicaAvance .close, .game1 .popupPostoDeGasolinaAvance .close, .game1 .popupLojaDeMalasAvance .close, .game1 .popupLojaDeAnimaisAvance .close, .game1 .popupSuaCasaAvance .close').on('click', function(){
					if ( $(this).parent().parent().attr('class') == 'game1' ){
						textMenino.stop();
						textNarrador.stop();
					}else{
						textMenina.stop();
						textNarrador.stop();
					}
					$(this).parent().fadeOut(1000);
				});
			}
		},

		modal: {
			telaPreta: function(){
				setTimeout(function(){
					$('.telaPreta').fadeIn('slow');
				},100);
				aViagem.modal.popup();
			},

			popup: function(){
				var menina = document.getElementsByClassName('gameMenina')[0];
				var menino = document.getElementsByClassName('gameMenino')[0];
				setTimeout(function(){
					$('.popup').fadeIn(500);
					setTimeout(function(){
						textNarrador.stop().play("text1");
					},1000);
				},200);

				setTimeout(function(){
					$('.popup .text').fadeIn('slow');
				},1300);

				$(menina).bind({
				  click: function() {
				  	$(this).parent().fadeOut('slow');
					$('.telaPreta').fadeOut('slow');
					textNarrador.stop("text1");
					setTimeout(function(){
						aViagem.game1.init();
					},500);
				  },
				  mouseenter: function() {
				    $(this).stop().animate({
						'bottom':'40px'
					},500);
				  },
				  mouseleave: function(){
				  	$(this).stop().animate({
						'bottom':'20px'
					},500,'easeOutBounce');
				  }
				});

				$(menino).bind({
				  click: function() {
				  	$(this).parent().fadeOut('slow');
					$('.telaPreta').fadeOut('slow');
					textNarrador.stop("text1");
					setTimeout(function(){
						aViagem.game1.init();
					},500);
				  },
				  mouseenter: function() {
				    $(this).stop().animate({
						'bottom':'40px'
					},500);
				  },
				  mouseleave: function(){
				  	$(this).stop().animate({
						'bottom':'20px'
					},500,'easeOutBounce');
				  }
				});

				
			}
		},

		init: function(){
			aViagem.modal.telaPreta();
			aViagem.game1.stilo();
		}
	};

	// FIM GAME
	
// Final
// document.getElementsByClassName('testeSom')[0].onclick = function(){
// 	textNarrador.stop().play('text13');
// }

}

