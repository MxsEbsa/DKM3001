var audio_trilha_sonora = new Howl({urls: ['media/Som_ambiente.mp3'],loop:true, volume: 0.3, onend: function() { tocar_audio_trilha_sonora();}});

function tocar_audio_trilha_sonora(){
	audio_trilha_sonora.stop();
	audio_trilha_sonora.play();
	
}

var verificar_inicio_cnd;
var startGame = {
	
	// START GAME
	Planificacoes: {
		ux: {
			entrada: document.querySelector('.entrada'),
			dragg: document.querySelectorAll('.dragg')
		},

		entradaAnimTenteMaisUmaVez: function(text, tempo){
			$(startGame.Planificacoes.ux.entrada).fadeIn(1000);
			setTimeout(function(){
				$(startGame.Planificacoes.ux.entrada).children('.mulher').animate({
					'right':'160px',
					'bottom': '-3px'
				},1000,'easeOutExpo');
			},1000);

			setTimeout(function(){
				$(startGame.Planificacoes.ux.entrada).children('.texto').animate({
					'left':'10px',
					'top': '30%'
				},1000,'easeOutExpo');
			},1200);

			$(startGame.Planificacoes.ux.entrada).children('.texto').children('p').text(text);

			setTimeout(function(){
				
				setTimeout(function(){
					$(startGame.Planificacoes.ux.entrada).children('.mulher').animate({
						'right':'160px',
						'bottom': '-850px'
					},1000,'easeInExpo');
				},1000);

				setTimeout(function(){
					$(startGame.Planificacoes.ux.entrada).children('.texto').animate({
						'left':'10px',
						'top': '-885px'
					},1000,'easeInExpo');
				},1200);

				setTimeout(function(){
					$(startGame.Planificacoes.ux.entrada).fadeOut(1000);
				}, tempo+1000);

			}, tempo);
		},

		entradaAnim: function(text, tempo){
			$(startGame.Planificacoes.ux.entrada).fadeIn(1000);
			setTimeout(function(){
				$(startGame.Planificacoes.ux.entrada).children('.mulher').animate({
					'right':'160px',
					'bottom': '-3px'
				},1000,'easeOutExpo');
			},1000);

			setTimeout(function(){
				$(startGame.Planificacoes.ux.entrada).children('.texto').animate({
					'left':'10px',
					'top': '30%'
				},1000,'easeOutExpo');
			},1200);

			$(startGame.Planificacoes.ux.entrada).children('.texto').children('p').html(text);

			setTimeout(function(){
				
				setTimeout(function(){
					$(startGame.Planificacoes.ux.entrada).children('.mulher').animate({
						'right':'160px',
						'bottom': '-850px'
					},1000,'easeInExpo');
				},tempo-1000);

				setTimeout(function(){
					$(startGame.Planificacoes.ux.entrada).children('.texto').animate({
						'left':'10px',
						'top': '-885px'
					},1000,'easeInExpo');
				},tempo-1200);

				setTimeout(function(){
					$(startGame.Planificacoes.ux.entrada).fadeOut(1000);
				},tempo);

			},5500);
		},

		dragg: function(){
			$(startGame.Planificacoes.ux.dragg).draggable({revert: true});

			var areaClique = { x: 0, y: 0 };
			$(startGame.Planificacoes.ux.dragg).draggable({
				start: function(ui , event){
					areaClique.x = ui.clientX;
			        areaClique.y = ui.clientY;
				},				
	            drag: function(event,ui){
			        ui.position = {
			            left: (event.clientX - areaClique.x + ui.originalPosition.left) / escalaElemento,
			            top: (event.clientY - areaClique.y + ui.originalPosition.top) / escalaElemento
			        };
			    }
			});
		},

		game6: {

			init: function(){
				
				setTimeout(function(){
					$('.game6').children('.contentLeft').animate({
						'marginLeft':'0'
					},1000,'easeInOutExpo');
				},1000);
				
				setTimeout(function(){
					$('.game6').children('.contentRight').animate({
						'marginRight':'0'
					},1000,'easeInOutExpo');
					$('.game6').css('backgroundColor','#fffbcb');
				},1000);

				setTimeout(function(){
					textNarrador.stop().play('text6');
				},2000);
				startGame.Planificacoes.entradaAnim('Clique na imagem que representa a planificação do sólido geométrico presente na fotografia.', 3100);

				var respostas = $('.game6 .contentRight ul');
				$(respostas).children('li').on('click', function(){
					var _self = $(this);
					if( $(_self).parent().children('li.errado').length == 1 ){
						if ( this.className == 'certo' ){
							$(_self).siblings('li').hide().end().animate({
								'marginTop':'100%'
							},1000,'easeInOutExpo').children('img').attr('src', $(_self).children('img').attr('src').replace("png", "gif") );
							setTimeout(function(){
								setTimeout(function(){
									textNarrador2.stop().play('text5');
								},1200);
								startGame.Planificacoes.entradaAnim('Muito bem! A planificação corresponde a um cilindro! Chegamos ao fim. Para praticar mais, visualize novamente o infográfico.', 6000);
								setTimeout(function(){
									//window.location.href = 'index.html';
									sessionStorage.setItem('reiniciar_oed', 'sim');
								},11500);
							},4500);	
						}else{
							$(this).unbind('click').css('cursor','default');
							$(this).siblings('li').hide();
							setTimeout(function(){
								$(respostas).children('li.certo').siblings('li').hide();
								$(respostas).children('li.certo').show().animate({
									'marginTop':'100%'
								},1000,'easeInOutExpo');
								$(respostas).children('li.certo').children('img').attr('src', $(_self).siblings('li.certo').children('img').attr('src').replace("png", "gif") );
							}, 2500);
							setTimeout(function(){
								setTimeout(function(){
									textNarrador2.stop().play('text6');
								},1200);
								startGame.Planificacoes.entradaAnim('Resposta incorreta. A resposta correta é cilindro! Chegamos ao fim. Para praticar mais, visualize novamente o infográfico.', 5900);
								setTimeout(function(){
									//window.location.href = 'index.html';
									sessionStorage.setItem('reiniciar_oed', 'sim');
								},11000);
							},4500);
						}
					}
					if( $(_self).parent().children('li.errado').length == 0 ){
						if ( this.className == 'certo' ){
							$(_self).siblings('li').hide().end().animate({
								'marginTop':'100%'
							},1000,'easeInOutExpo').children('img').attr('src', $(_self).children('img').attr('src').replace("png", "gif") );
							setTimeout(function(){
								setTimeout(function(){
									textNarrador2.stop().play('text5');
								},1200);
								startGame.Planificacoes.entradaAnim('Muito bem! A planificação corresponde a um cilindro! Chegamos ao fim. Para praticar mais, visualize novamente o infográfico.', 6000);
								setTimeout(function(){
									//window.location.href = 'index.html';
									sessionStorage.setItem('reiniciar_oed', 'sim');
								},11500);
							},4500);						
						}else{
							setTimeout(function(){
									textNarrador.stop().play('text8');
								},1200);
							$(_self).addClass('errado');
							startGame.Planificacoes.entradaAnimTenteMaisUmaVez('Tente mais uma vez!', 1800);
						}
					}
					
				});
			}
		},

		game5: {

			init: function(){
				
				setTimeout(function(){
					$('.game5').children('.contentLeft').animate({
						'marginLeft':'0'
					},1000,'easeInOutExpo');
				},1000);
				
				setTimeout(function(){
					$('.game5').children('.contentRight').animate({
						'marginRight':'0'
					},1000,'easeInOutExpo');
					$('.game5').css('backgroundColor','#bafffb');
				},1000);

				setTimeout(function(){
					textNarrador.stop().play('text6');
				},2000);
				startGame.Planificacoes.entradaAnim('Clique na imagem que representa a planificação do sólido geométrico presente na fotografia.', 3100);

				var respostas = $('.game5 .contentRight ul');
				$(respostas).children('li').on('click', function(){
					var _self = $(this);
					if( $(_self).parent().children('li.errado').length == 1 ){
						if ( this.className == 'certo' ){
							$(_self).siblings('li').hide().end().animate({
								'marginTop':'100%'
							},1000,'easeInOutExpo').children('img').attr('src', $(_self).children('img').attr('src').replace("png", "gif") );
							setTimeout(function(){
								setTimeout(function(){
									textNarrador2.stop().play('text3');
								},1200);
								startGame.Planificacoes.entradaAnim('Muito bem! A planificação corresponde a um paralelepípedo. Vamos para a próxima imagem!', 2800);
								
								setTimeout(function(){
									setTimeout(function(){
										$('.game5').children('.contentLeft').animate({
											'marginLeft':'-3505px'
										},1000,'easeInOutExpo');
									},1000);
									
									setTimeout(function(){
										$('.game5').children('.contentRight').animate({
											'marginRight':'-3505px'
										},1000,'easeInOutExpo');

									},1000);

									setTimeout(function(){
										$('.game5').hide();
										$('.game6').show();
										startGame.Planificacoes.game6.init();
									},2000);
								},10500);

							},4500);	
						}else{
							$(this).unbind('click').css('cursor','default');
							$(this).siblings('li').hide();
							setTimeout(function(){
								$(respostas).children('li.certo').siblings('li').hide();
								$(respostas).children('li.certo').show().animate({
									'marginTop':'100%'
								},1000,'easeInOutExpo');
								$(respostas).children('li.certo').children('img').attr('src', $(_self).siblings('li.certo').children('img').attr('src').replace("png", "gif") );
							}, 2500);
							setTimeout(function(){
								setTimeout(function(){
									textNarrador2.stop().play('text4');
								},1200);
								startGame.Planificacoes.entradaAnim('Resposta incorreta. A resposta correta é paralelepípedo! Vamos para a próxima imagem.', 3800);
								
								setTimeout(function(){
									setTimeout(function(){
										$('.game5').children('.contentLeft').animate({
											'marginLeft':'-3505px'
										},1000,'easeInOutExpo');
									},1000);
									
									setTimeout(function(){
										$('.game5').children('.contentRight').animate({
											'marginRight':'-3505px'
										},1000,'easeInOutExpo');
									},1000);

									setTimeout(function(){
										$('.game5').hide();
										$('.game6').show();
										startGame.Planificacoes.game6.init();
									},2000);
								},10500);

							},4500);
						}
					}
					if( $(_self).parent().children('li.errado').length == 0 ){
						if ( this.className == 'certo' ){
							$(_self).siblings('li').hide().end().animate({
								'marginTop':'100%'
							},1000,'easeInOutExpo').children('img').attr('src', $(_self).children('img').attr('src').replace("png", "gif") );
							setTimeout(function(){
								setTimeout(function(){
									textNarrador2.stop().play('text3');
								},1200);
								startGame.Planificacoes.entradaAnim('Muito bem! A planificação corresponde a um paralelepípedo. Vamos para a próxima imagem!', 2800);
								
								setTimeout(function(){
									setTimeout(function(){
										$('.game5').children('.contentLeft').animate({
											'marginLeft':'-3505px'
										},1000,'easeInOutExpo');
									},1000);
									
									setTimeout(function(){
										$('.game5').children('.contentRight').animate({
											'marginRight':'-3505px'
										},1000,'easeInOutExpo');

									},1000);

									setTimeout(function(){
										$('.game5').hide();
										$('.game6').show();
										startGame.Planificacoes.game6.init();
									},2000);
								},10500);

							},4500);						
						}else{
							setTimeout(function(){
								textNarrador.stop().play('text8');
							},1200);
							$(_self).addClass('errado');
							startGame.Planificacoes.entradaAnimTenteMaisUmaVez('Tente mais uma vez!', 1800);
						}
					}
					
				});
			}
		},

		game4: {

			init: function(){
				
				setTimeout(function(){
					$('.game4').children('.contentLeft').animate({
						'marginLeft':'0'
					},1000,'easeInOutExpo');
				},1000);
				
				setTimeout(function(){
					$('.game4').children('.contentRight').animate({
						'marginRight':'0'
					},1000,'easeInOutExpo');
					$('.game4').css('backgroundColor','#b8f1ff');
				},1000);

				setTimeout(function(){
					textNarrador.stop().play('text6');
				},2000);
				startGame.Planificacoes.entradaAnim('Clique na imagem que representa a planificação do sólido geométrico presente na fotografia.', 3100);

				var respostas = $('.game4 .contentRight ul');
				$(respostas).children('li').on('click', function(){
					var _self = $(this);
					if( $(_self).parent().children('li.errado').length == 1 ){
						if ( this.className == 'certo' ){
							$(_self).siblings('li').hide().end().animate({
								'marginTop':'100%'
							},1000,'easeInOutExpo').children('img').attr('src', $(_self).children('img').attr('src').replace("png", "gif") );
							setTimeout(function(){
								setTimeout(function(){
									textNarrador2.stop().play('text1');
								},1200);
								startGame.Planificacoes.entradaAnim('Muito bem! A planificação corresponde a um cubo. Vamos para a próxima imagem!', 2500);
								
								setTimeout(function(){
									setTimeout(function(){
										$('.game4').children('.contentLeft').animate({
											'marginLeft':'-3505px'
										},1000,'easeInOutExpo');
									},1000);
									
									setTimeout(function(){
										$('.game4').children('.contentRight').animate({
											'marginRight':'-3505px'
										},1000,'easeInOutExpo');

									},1000);

									setTimeout(function(){
										$('.game4').hide();
										$('.game5').show();
										startGame.Planificacoes.game5.init();
									},2000);
								},10500);

							},4500);	
						}else{
							$(this).unbind('click').css('cursor','default');
							$(this).siblings('li').hide();
							setTimeout(function(){
								$(respostas).children('li.certo').siblings('li').hide();
								$(respostas).children('li.certo').show().animate({
									'marginTop':'100%'
								},1000,'easeInOutExpo');
								$(respostas).children('li.certo').children('img').attr('src', $(_self).siblings('li.certo').children('img').attr('src').replace("png", "gif") );
							}, 2500);
							setTimeout(function(){
								setTimeout(function(){
									textNarrador2.stop().play('text2');
								},1200);
								startGame.Planificacoes.entradaAnim('Resposta incorreta. A resposta correta é cubo! Vamos para a próxima imagem.', 2500);
								
								setTimeout(function(){
									setTimeout(function(){
										$('.game4').children('.contentLeft').animate({
											'marginLeft':'-3505px'
										},1000,'easeInOutExpo');
									},1000);
									
									setTimeout(function(){
										$('.game4').children('.contentRight').animate({
											'marginRight':'-3505px'
										},1000,'easeInOutExpo');

									},1000);

									setTimeout(function(){
										$('.game4').hide();
										$('.game5').show();
										startGame.Planificacoes.game5.init();
									},2000);
								},10500);
							},4500);
						}
					}
					if( $(_self).parent().children('li.errado').length == 0 ){
						if ( this.className == 'certo' ){
							$(_self).siblings('li').hide().end().animate({
								'marginTop':'100%'
							},1000,'easeInOutExpo').children('img').attr('src', $(_self).children('img').attr('src').replace("png", "gif") );
							setTimeout(function(){
								setTimeout(function(){
									textNarrador2.stop().play('text1');
								},1200);
								startGame.Planificacoes.entradaAnim('Muito bem! A planificação corresponde a um cubo. Vamos para a próxima imagem!', 3500);
								
								setTimeout(function(){
									setTimeout(function(){
										$('.game4').children('.contentLeft').animate({
											'marginLeft':'-3505px'
										},1000,'easeInOutExpo');
									},1000);
									
									setTimeout(function(){
										$('.game4').children('.contentRight').animate({
											'marginRight':'-3505px'
										},1000,'easeInOutExpo');

									},1000);

									setTimeout(function(){
										$('.game4').hide();
										$('.game5').show();
										startGame.Planificacoes.game5.init();
									},2000);
								},10500);

							},4500);						
						}else{
							setTimeout(function(){
								textNarrador.stop().play('text8');
							},1200);
							$(_self).addClass('errado');
							startGame.Planificacoes.entradaAnimTenteMaisUmaVez('Tente mais uma vez!', 1800);
						}
					}
					
				});
			}
		},

		game3: {

			init: function(){
				
				setTimeout(function(){
					$('.game3').children('.contentLeft').animate({
						'marginLeft':'0'
					},1000,'easeInOutExpo');
				},1000);
				
				setTimeout(function(){
					$('.game3').children('.contentRight').animate({
						'marginRight':'0'
					},1000,'easeInOutExpo');
					$('.game3').css('backgroundColor','#fffeca');
				},1000);

				setTimeout(function(){
					textNarrador.stop().play('text6');
				},2000);
				startGame.Planificacoes.entradaAnim('Clique na imagem que representa a planificação do sólido geométrico presente na fotografia.', 3100);

				var respostas = $('.game3 .contentRight ul');
				$(respostas).children('li').on('click', function(){
					var _self = $(this);
					if( $(_self).parent().children('li.errado').length == 1 ){
						if ( this.className == 'certo' ){
							$(_self).siblings('li').hide().end().animate({
								'marginTop':'100%'
							},1000,'easeInOutExpo').children('img').attr('src', $(_self).children('img').attr('src').replace("png", "gif") );
							setTimeout(function(){
								setTimeout(function(){
									textNarrador.stop().play('text7');
								},1200);
								startGame.Planificacoes.entradaAnim('Muito bem! Uma pirâmide de base quadrada. Vamos para a próxima imagem!', 1900);
								
								setTimeout(function(){
									setTimeout(function(){
										$('.game3').children('.contentLeft').animate({
											'marginLeft':'-3505px'
										},1000,'easeInOutExpo');
									},1000);
									
									setTimeout(function(){
										$('.game3').children('.contentRight').animate({
											'marginRight':'-3505px'
										},1000,'easeInOutExpo');

									},1000);

									setTimeout(function(){
										$('.game3').hide();
										$('.game4').show();
										startGame.Planificacoes.game4	.init();
									},2000);
								},10500);

							},4500);	
						}else{
							$(this).unbind('click').css('cursor','default');
							$(this).siblings('li').hide();
							setTimeout(function(){
								$(respostas).children('li.certo').siblings('li').hide();
								$(respostas).children('li.certo').show().animate({
									'marginTop':'100%'
								},1000,'easeInOutExpo');
								$(respostas).children('li.certo').children('img').attr('src', $(_self).siblings('li.certo').children('img').attr('src').replace("png", "gif") );
							}, 2500);
							setTimeout(function(){
								setTimeout(function(){
									textNarrador2.stop().play('text7');
								},1200);
								startGame.Planificacoes.entradaAnim('Resposta incorreta. A resposta correta é a pirâmide de base quadrada! Vamos para <br /> a próxima imagem.', 4800);
								
								setTimeout(function(){
									setTimeout(function(){
										$('.game3').children('.contentLeft').animate({
											'marginLeft':'-3505px'
										},1000,'easeInOutExpo');
									},1000);
									
									setTimeout(function(){
										$('.game3').children('.contentRight').animate({
											'marginRight':'-3505px'
										},1000,'easeInOutExpo');

									},1000);

									setTimeout(function(){
										$('.game3').hide();
										$('.game4').show();
										startGame.Planificacoes.game4	.init();
									},2000);
								},10500);

							},4500);
						}
					}
					if( $(_self).parent().children('li.errado').length == 0 ){
						if ( this.className == 'certo' ){
							$(_self).siblings('li').hide().end().animate({
								'marginTop':'100%'
							},1000,'easeInOutExpo').children('img').attr('src', $(_self).children('img').attr('src').replace("png", "gif") );
							setTimeout(function(){
								setTimeout(function(){
									textNarrador.stop().play('text7');
								},1200);
								startGame.Planificacoes.entradaAnim('Muito bem! Uma pirâmide de base quadrada. Vamos para a próxima imagem!', 1900);
								
								setTimeout(function(){
									setTimeout(function(){
										$('.game3').children('.contentLeft').animate({
											'marginLeft':'-3505px'
										},1000,'easeInOutExpo');
									},1000);
									
									setTimeout(function(){
										$('.game3').children('.contentRight').animate({
											'marginRight':'-3505px'
										},1000,'easeInOutExpo');

									},1000);

									setTimeout(function(){
										$('.game3').hide();
										$('.game4').show();
										startGame.Planificacoes.game4.init();
									},2000);
								},10500);

							},4500);						
						}else{
							setTimeout(function(){
								textNarrador.stop().play('text8');
							},1200);
							$(_self).addClass('errado');
							startGame.Planificacoes.entradaAnimTenteMaisUmaVez('Tente mais uma vez!', 1800);
						}
					}
					
				});
			}
		},

		game2: {
			
			init: function(){
				var $dropp = $('.game2 .dropp2');
				setTimeout(function(){
					$('.game2').children('.contentLeft').animate({
						'marginLeft':'15px'
					},1000,'easeInOutExpo');
				},1000);
				
				setTimeout(function(){
					$('.game2').children('.contentRight').animate({
						'marginRight':'15px'
					},1000,'easeInOutExpo');

					$('.game2').children('.contentTop').animate({
						'opacity':'1'
					},1500);

				},1000);

				setTimeout(function(){
					textNarrador.stop().play('text4');
				},2000);
				startGame.Planificacoes.entradaAnim('Alguns sólidos geométricos rolam e outros não. Leve os sólidos geométricos até o local mais adequado.', 4400);

				startGame.Planificacoes.dragg();
				$($dropp).droppable({
					drop: function(event,ui){
						
						if ( $(event.target).attr('id') == $(ui.helper).attr('id') ){
							acert.stop().play();
							$(this).children('ul').append( '<li>'+ui.helper[0].outerHTML+'</li>' ).hide().fadeIn(500);
							$(ui.helper).hide();
						}else{
							erro.stop().play();
						}
						if( $(event.target).parent().parent().children('.contentLeft').children('#rolam').children('ul').children('li').length == 3 && $(event.target).parent().parent().children('.contentRight').children('#naoRolam').children('ul').children('li').length == 3 ){
							setTimeout(function(){
								textNarrador.stop().play('text5');
							},1200);
							startGame.Planificacoes.entradaAnim('Muito bem! Você colocou os sólidos geométricos nos locais corretos!', 2500);
							setTimeout(function(){
								setTimeout(function(){
									$('.game2').children('.contentLeft').animate({
										'marginLeft':'-3505px'
									},1000,'easeInOutExpo');
								},1000);
								
								setTimeout(function(){
									$('.game2').children('.contentRight').animate({
										'marginRight':'-3505px'
									},1000,'easeInOutExpo');

									$('.game2').children('.contentTop').animate({
										'opacity':'0'
									},1500);
								},1000);
								setTimeout(function(){
									$('.game2').hide();
									$('.game3').show();
									startGame.Planificacoes.game3.init();
								},2000);
							},8500);
						}
					}
				});
			}
		},

		game1: {

			init: function(){
				
				var $dropp = $('.game1 .dropp');
				setTimeout(function(){
					textNarrador.stop().play('text1');
					//textNarrador.play('text1');
					
				},1200);

				$(startGame.Planificacoes.ux.entrada).children('.texto').children('.setaEntrada').css('bottom','45%');
	
				startGame.Planificacoes.entradaAnim('Quando circulamos pelas cidades, encontramos inúmeras construções, e cada uma delas tem um formato. Será que todas foram planejadas da mesma forma? Separamos algumas construções em dois grupos. Observe o formato delas e descubra o nome dado a cada <br />um desses grupos.', 15000);
				startGame.Planificacoes.dragg();
				$($dropp).droppable({
					drop: function(event,ui){
						if ( $(event.target).attr('class') == 'dropp ui-droppable' ){

							if( $(event.target).parent().parent().find('.acert').length == 1 ){
								$(startGame.Planificacoes.ux.entrada).children('.texto').children('.setaEntrada').css('bottom','15%');
								startGame.Planificacoes.entradaAnim('Parabéns! Você descobriu o nome de cada um dos grupos.', 1000);
								setTimeout(function(){
									textNarrador.stop().play('text3');
								},1200);
								setTimeout(function(){
									$('.game1').children('.contentLeft').animate({
										'marginLeft':'-505px'
									},1000,'easeInOutExpo');
									$('.game1').children('.contentRight').animate({
										'marginRight':'-505px'
									},1000,'easeInOutExpo');
									setTimeout(function(){
										$('.game1').hide();
										$('.game2').show();
										startGame.Planificacoes.game2.init();
									},2000);
								},8500);
							}
							if ( $(event.target).attr('id') == $(ui.helper).attr('id') ){
								acert.stop().play();
								$(this).append($(ui.helper).text()).addClass('btnDropGame1 acert');
								$(ui.helper).css({
									'background':'none',
									'height':'52px',
									'cursor':'default',
									'fontSize':'arial',
									'fontWeight':'normal'
								}).text('').removeClass('dropp');
								
							}else{
								$(startGame.Planificacoes.ux.entrada).children('.texto').children('.setaEntrada').css('bottom','10%');
								erro.stop().play();
								setTimeout(function(){
									textNarrador.stop().play('text2');
								},1200);
								startGame.Planificacoes.entradaAnim('Vamos relembrar: os corpos redondos têm superfícies curvas, e os poliedros são sólidos geométricos que apresentam muitas faces formadas por polígonos.', 7500);
							}

						}

					}
				});
			}
		},

		init: function(){
			$('.btnInstrucoes').hide();
			startGame.Planificacoes.game1.init();
		}
	},
	// FIM GAME

	init: function(){
		startGame.Planificacoes.init();
		
	}

}
	function iniciar_com_tap(){
	 clearInterval(verificar_inicio_cnd);
	  audio_trilha_sonora.stop();audio_trilha_sonora.play();
	  startGame.init();
}

	verificar_inicio();
	function verificar_inicio(){
	  verificar_inicio_cnd = setInterval(function(){
	  if(window.sessionStorage.getItem('iniciar_oed')=='sim'){
	      clearInterval(verificar_inicio_cnd);
		  audio_trilha_sonora.stop();audio_trilha_sonora.play();
		  startGame.init();
		  
	      
	    }
	  }, 1000);
	}


