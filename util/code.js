'use strict'

	//variables de estancias.
	var enviar = document.getElementById("enviar");
	var tbody = document.getElementById("tbody");
	var victoria = false;
	
	var random = Math.floor(Math.random() * 250);
	var contador = 0;
	
	//evento del boton enviar.
	enviar.addEventListener("click", () => {
	
		var texto = document.getElementById("texto").value;
		texto = texto.toLowerCase().trim();
		if(texto){//Condicion por si esta vacio el texto.
		
			var poke;
			
			for(let i = 0; i < pokemon.length; i++){//comprobacion de que el pokemon insertado existe
			
				if(texto == pokemon[i][1]){
				
					poke = pokemon[i];
					i = pokemon.length+1;
					//El pokemon existe y el bucle se detiene.
				}
				else if((i==pokemon.length-1)&&(texto != pokemon[i][1])){
				
					//Validar el pokemon no existe.
				
				}
						
			}
		
			//En este punto el pokemon introducido existe.
			
			if(poke){
			
				let tr = document.createElement("tr");
				tr.id = "tr_"+contador;
				tbody.appendChild(tr);
				
				var tr_ins = document.getElementById("tr_"+contador);
				
				for(let i = 0; i <= 5; i++){
				
					
					
					let td = document.createElement("td");
					td.style.border = "solid white 2px";
					td.id = "td_"+i;
					
					switch(i){
						case 0:
						
							td.innerHTML = "<img width=100px src=images/pokimones/"+poke[0]+".png>";
							td.style.backgroundColor = "whitesmoke";
							tr_ins.appendChild(td);
							break;
						
						case 1:
							setTimeout(() => {
							
								if(poke[2]==pokemon[random][2]){
							
									td.innerHTML = "<h4>"+poke[2]+"</h4>";
									td.style.backgroundColor = "MediumSeaGreen";
									tr_ins.appendChild(td);
									
								
								}
								else if(poke[2]==pokemon[random][3]){
							
									td.innerHTML = "<h4>"+poke[2]+"</h4>";
									td.style.backgroundColor = "gold";
									tr_ins.appendChild(td);
									
							
								}
								else{
							
									td.innerHTML = "<h4>"+poke[2]+"</h4>";
									td.style.backgroundColor = "tomato";
									tr_ins.appendChild(td);
									
							
								}
							
							},"750");
							break;
							
						case 2:
							setTimeout(() => {
							
								if(poke[3]==pokemon[random][3]){
							
									td.innerHTML = "<h4>"+poke[3]+"</h4>";
									td.style.backgroundColor = "MediumSeaGreen";
									tr_ins.appendChild(td);
								
								}
								else if(poke[3]==pokemon[random][2]){
							
									td.innerHTML = "<h4>"+poke[3]+"</h4>";
									td.style.backgroundColor = "gold";
									tr_ins.appendChild(td);
															
								}
								else{
							
									td.innerHTML = "<h4>"+poke[3]+"</h4>";
									td.style.backgroundColor = "tomato";
									tr_ins.appendChild(td);
															
								}
								
							}, "1500");
							break;
							
						case 3:
							
							setTimeout(() => {
							
								if(poke[4] == pokemon[random][4]){
							
									td.innerHTML = "<h4>"+poke[4]+"</h4>";
									td.style.backgroundColor = "MediumSeaGreen";
									tr_ins.appendChild(td);
															
								}
								else{
							
									td.innerHTML = "<h4>"+poke[4]+"</h4>";
									td.style.backgroundColor = "tomato";
									tr_ins.appendChild(td);
														
								}
								
								},"2250");
								break;
							
						case 4:
						
							setTimeout(() => {
								if(poke[5] == pokemon[random][5]){
							
									td.innerHTML = "<h4>"+poke[5]+"</h4>";
									td.style.backgroundColor = "MediumSeaGreen";
									tr_ins.appendChild(td);
															
								}
								else{
							
									td.innerHTML = "<h4>"+poke[5]+"</h4>";
									td.style.backgroundColor = "tomato";
									tr_ins.appendChild(td);
															
								}
								
								},"3000");
								break;
						case 5:
							
							setTimeout(() => {
								if(poke[0] == pokemon[random][0]){
							
									td.innerHTML = "<h4>"+poke[0]+"</h4>";
									td.style.backgroundColor = "MediumSeaGreen";
									tr_ins.appendChild(td);
									
									victoria = true;
									
									if(victoria){
									
										setTimeout(() => {
										
											document.getElementById("poke_victoria").src = "images/pokimones/"+poke[0]+".png";
											document.getElementById("mensaje_victoria").show();
											
										},1000);
									
									}
														
								}
								else{
									
									if(poke[0] < pokemon[random][0]){
									
										td.innerHTML = "<h4>"+poke[0]+" 🡹</h4>";
										td.style.backgroundColor = "tomato";
										tr_ins.appendChild(td);
										
									}
									else{
									
										td.innerHTML = "<h4>"+poke[0]+" 🡻</h4>";
										td.style.backgroundColor = "tomato";
										tr_ins.appendChild(td);
									
									}									
								}
								
							},"3750");
							break;
						
					}				
				}
				
				contador++;
			}
		}
		else{
		
			document.write("no funciona");//texto esta vacio.
		
		}
	
	}, false);
