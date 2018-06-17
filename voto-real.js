
window.onload = init; 
function init(){
hemiciclo(array);
people();
tutorial(0);
document.getElementById("cuerpoSimulador").setAttribute("style","display:block;");  

};


var array = [[6,365],[6,356],[6,346],[6,336],[6,325],[6,290],[6,278],[6,265],[6,252],[6,238],[6,224],[6,209],[9,195],[12,181],[22,153],[28,138],[29,385],[29,373],[29,361],[29,337],[29,325],[29,290],[29,279],[29,266],[29,253],[29,227],[31,215],[33,204],[37,192],[37,124],[45,165],[46,111],[50,154],[55,143],[55,98],[56,385],[56,375],[56,363],[56,350],[56,338],[56,325],[56,290],[56,277],[56,265],[56,253],[57,232],[59,219],[60,208],[61,133],[63,196],[65,87],[69,176],[74,165],[76,76],[79,154],[79,108],[83,302],[83,290],[83,277],[83,265],[83,253],[83,242],[84,230],[85,218],[85,144],[86,66],[87,206],[88,99],[96,90],[97,182],[97,127],[98,58],[103,170],[106,119],[107,83],[109,159],[111,302],[111,290],[111,278],[111,265],[111,254],[111,241],[112,229],[114,217],[114,110],[117,149],[118,205],[123,194],[124,101],[125,140],[128,184],[134,173],[135,131],[136,302],[136,290],[136,278],[136,266],[136,253],[136,239],[138,225],[139,37],[141,213],[141,164],[144,123],[147,200],[149,57],[150,155],[151,30],[155,189],[159,149],[162,302],[162,289],[162,278],[162,266],[162,253],[162,240],[164,226],[164,181],[164,25],[165,81],[168,213],[168,49],[174,171],[177,202],[177,20],[178,107],[178,74],[189,241],[190,100],[190,42],[191,17],[195,68],[197,360],[197,131],[201,215],[202,94],[203,37],[204,13],[208,63],[210,152],[210,125],[214,90],[216,34],[217,361],[217,11],[220,61],[222,382],[225,120],[226,147],[226,87],[227,176],[230,31],[234,58],[238,117],[239,198],[239,144],[240,85],[243,172],[246,382],[251,57],[251,29],[253,142],[253,115],[253,83],[260,196],[260,170],[265,56],[265,29],[266,140],[266,114],[266,82],[270,382],[274,170],[278,56],[278,29],[279,83],[279,114],[280,140],[289,170],[291,29],[291,58],[292,115],[293,84],[293,142],[294,382],[301,7],[301,198],[304,173],[307,85],[307,144],[308,117],[309,58],[313,31],[314,8],[317,382],[318,176],[319,87],[320,120],[322,61],[322,147],[323,360],[326,34],[327,11],[332,90],[334,63],[336,125],[336,152],[340,37],[341,14],[343,360],[344,94],[344,227],[346,68],[347,241],[347,266],[347,289],[347,302],[349,131],[349,192],[353,41],[354,17],[356,101],[359,201],[362,171],[364,74],[367,22],[367,107],[372,180],[372,226],[373,50],[374,240],[374,253],[374,290],[374,302],[375,266],[375,278],[377,81],[377,149],[381,26],[381,188],[387,156],[389,200],[392,124],[393,59],[394,31],[395,164],[396,212],[398,225],[400,239],[400,253],[400,265],[400,278],[400,290],[400,303],[401,131],[403,174],[406,38],[409,184],[411,102],[411,139],[414,194],[418,149],[419,206],[422,111],[422,218],[425,230],[425,242],[426,254],[426,266],[426,278],[426,290],[426,302],[427,159],[429,82],[430,119],[434,171],[439,59],[439,182],[440,89],[440,128],[444,195],[449,98],[450,67],[450,206],[451,144],[451,218],[452,231],[453,243],[453,254],[453,266],[453,278],[453,290],[453,302],[457,109],[458,154],[461,76],[462,165],[467,177],[472,87],[473,197],[475,133],[476,209],[478,220],[479,233],[480,254],[480,266],[480,278],[480,289],[480,325],[480,337],[480,349],[480,362],[480,374],[480,385],[481,99],[481,142],[486,153],[490,111],[491,165],[499,191],[500,124],[503,203],[504,215],[505,227],[507,139],[507,253],[507,264],[507,277],[507,290],[507,325],[507,338],[507,350],[507,362],[507,374],[507,385],[514,154],[519,166],[524,181],[527,195],[530,210],[530,224],[530,240],[530,252],[530,265],[530,278],[530,290],[530,302],[530,325],[530,336],[530,346]];
  
  
function hemiciclo(arrayOrder){
//Limpiar hemiciclo
	var hemiciclo = document.getElementById("hemiciclo");
	if ( hemiciclo.hasChildNodes() ){
		while ( hemiciclo.childNodes.length >= 1 ){
        hemiciclo.removeChild(hemiciclo.firstChild );       
		} 
	}
//Crear hemiciclo    
  var ns = "http://www.w3.org/2000/svg";
  for (i = 0; i < arrayOrder.length; i++){
    var circle = document.createElementNS(ns, "circle");
    circle.setAttribute("cx", arrayOrder[i][0]*4/6);
    circle.setAttribute("cy", arrayOrder[i][1]*4/6);
    circle.setAttribute("r", 4);
	circle.setAttribute("fill", "#C0C0C0");
	circle.setAttribute("id", "coords"+(i+1).toString());
	document.getElementById("hemiciclo").appendChild(circle);
  }
}

function shuffle(arrayV){
  var m = arrayV.length, t, i;
  // While there remain elements to shuffleâ€¦
  while (m) {
    // Pick a remaining elementâ€¦
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = arrayV[m];
    arrayV[m] = arrayV[i];
    arrayV[i] = t;
  }
  return arrayV;
}


function arrayShuffle(arrayShuffle, votantesS){
  var arrayHead = arrayShuffle.slice(0, Math.floor(votantesS*3.5)+1);
  var arrayTail = arrayShuffle.slice(Math.floor(votantesS*3.5)+1);
  var arrayTailShuffle = shuffle(arrayTail);
  arrayShuffled = arrayHead.concat(arrayTailShuffle);
  return arrayShuffled;
}



function people(){
  //ciudadania
  for (var i = 1; i <= 36; i++){
	var ns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(ns, 'svg');
	svg.setAttribute("width",42*2/4);
	svg.setAttribute("height",101*2/4);
	var head = document.createElementNS(ns, 'circle');
	head.setAttribute("cx", 21.5*2/4);
    head.setAttribute("cy", 13.28427*2/4);
    head.setAttribute("r", 10.78*2/4);
	var rect1 = document.createElementNS(ns, 'rect');
	rect1.setAttribute("x", 10.5*2/4);
    rect1.setAttribute("y", 26.284*2/4);
    rect1.setAttribute("width", 21*2/4);
	rect1.setAttribute("height", 36.53*2/4);
	var rect2 = document.createElementNS(ns, 'rect');
	rect2.setAttribute("x", 2.5*2/4);
    rect2.setAttribute("y", 28.284*2/4);
    rect2.setAttribute("width", 5*2/4);
	rect2.setAttribute("height", 34.54*2/4);
	var rect3 = document.createElementNS(ns, 'rect');
	rect3.setAttribute("x", 22.5*2/4);
    rect3.setAttribute("y", 61.4*2/4);
    rect3.setAttribute("width", 9*2/4);
	rect3.setAttribute("height", 37.2*2/4);
	var rect4 = document.createElementNS(ns, 'rect');
	rect4.setAttribute("x", 34.5*2/4);
    rect4.setAttribute("y", 28.284*2/4);
    rect4.setAttribute("width", 5*2/4);
	rect4.setAttribute("height", 34.54*2/4);
	var rect5 = document.createElementNS(ns, 'rect');
	rect5.setAttribute("x", 10.5*2/4);
    rect5.setAttribute("y", 61.4*2/4);
    rect5.setAttribute("width", 9*2/4);
	rect5.setAttribute("height", 37.2*2/4);
	document.getElementById("ciudadania").appendChild(svg);
    var g = document.createElementNS(ns, "g");
	svg.appendChild(g);
    g.setAttribute("id", "ciudadano"+ i.toString());
	g.setAttribute("fill", "#C0C0C0");
    g.appendChild(head);
	g.appendChild(rect1);
	g.appendChild(rect2);
	g.appendChild(rect3);
	g.appendChild(rect4);
	g.appendChild(rect5);
  }     
} 




function getReal(){
	document.getElementById("tutorialTipoVoto").setAttribute("style","color:#34ACC7; font-weight:bold; font-size: 22px; margin: 18px; text-align:center;");
	document.getElementById("tutorialTipoVoto").innerHTML="Voto Real y Permanente";
	real = true;
}

function getNotReal(){
	document.getElementById("tutorialTipoVoto").setAttribute("style","font-size: 22px; margin: 18px; text-align:center; color:#656565;");
	document.getElementById("tutorialTipoVoto").innerHTML="Voto cada 4 años";
	real = false;
}

function round(number){
	var floor = Math.floor(number);
	if (number - floor >= 0.5){
		return floor + 1;
	}else{
	return floor;
	}
}

function tutorial(nextPrev){
	if (nextPrev === 0){counter = 0;}
    if ((nextPrev > 0 && counter < 6) || (nextPrev < 0 && counter > 0)){
        counter = counter + nextPrev;
    }
    if (counter === 0){
		cleanUp();
		document.getElementById("results").innerHTML = "";
		document.getElementById("tutorialTipoVoto").setAttribute("style","font-size:22px; color: white; margin: 18px; text-align:center;");
		document.getElementById("tutorialTipoVoto").innerHTML="Voto cada 4 años";	
		document.getElementById("voteButton").disabled = true;
		document.getElementById("voteButton").setAttribute('style','cursor:default;');
		document.getElementById("resetButton").disabled = true;
		document.getElementById("resetButton").setAttribute('style','cursor:default;');
		document.getElementById("anterior").disabled = true;
		document.getElementById("anterior").setAttribute('style','cursor:default;');
		document.getElementById("siguiente").disabled = false;
		document.getElementById("siguiente").setAttribute('style','cursor:hand;');
        document.getElementById("explanation").innerHTML="<p>Partido X reclama para los ciudadanos el <b>derecho a voto de forma permanente</b>, para poder usarlo cuando lo consideremos oportuno.</p><p><b>Hoy en día no votamos sino que elegimos cada 4 años</b> a los que votan por nosotros, sin forma de hacerles llegar nuestra opinión en las votaciones concretas: <em>como un cheque en blanco del que no hay que rendir cuentas</em>.</p><p>Supongamos que el Congreso tiene que votar hoy una ley a la que la mayoría de la ciudadanía se opone.</p>";

    }else if (counter === 1){
		votantes = 0; 
        ciudRojosYAzules = 0;
        congresoRojosYAzules = 55;
		getNotReal();
		document.getElementById("explanation").innerHTML="<p>Lo lógico sería que los diputados voten de acuerdo con los intereses de sus electores. Sin embargo, acaban respaldando una ley que afecta negativamente a gran parte de la población. ¿Cómo es posible?</p><p style='font-weight:bold;'>Pasado el periodo electoral, <b>los ciudadanos no tenemos vías para hacer valer nuestros intereses</b>.</p><p>Así pues, es probable que por intereses privados y presiones <em>lobbistas</em>, la ley acaba aprobándose pese a tener la opinión pública en contra.</p><p style='font-weight:bold;'>¿Y si la población tuviera derecho a Voto Real y Permanente</span>?</p>"
		document.getElementById("anterior").disabled = false;
		document.getElementById("anterior").setAttribute('style','cursor:hand;');
        calculoDeVotos(votantes,ciudRojosYAzules,congresoRojosYAzules);
		resultados(votantes, ciudRojosYAzules, congresoRojosYAzules);
	} else if (counter === 2){
        votantes = 20;
        ciudRojosYAzules = 10;
        congresoRojosYAzules = 55;
		cleanUp();
		getReal();
		hemiciclo(array);
		var votantesR = round(votantes/100*36);
		var ciudRYAR = round(ciudRojosYAzules/100*votantesR);
        for (i = 1; i <= ciudRYAR; i++ ){
            document.getElementById("ciudadano"+i.toString()).setAttribute("fill","#34ACC7");            
        }
        for (i = ciudRYAR + 1 ; i <= votantesR; i++){
            document.getElementById("ciudadano"+i.toString()).setAttribute("fill","#E33F31");
        }
		x = round(votantes*3.5);
        y = round(congresoRojosYAzules/100*(350 - x) + x);
        
        for (i = x + 1; i <= y; i++ ){
            document.getElementById("coords"+i.toString()).setAttribute("fill","#34ACC7");
        }
        for (i = y + 1; i <= 350; i++){
            document.getElementById("coords"+i.toString()).setAttribute("fill","#E33F31");
		}
		resultados(votantes, ciudRojosYAzules, congresoRojosYAzules);
        document.getElementById("explanation").innerHTML="<p>Con el derecho a <span style='color:#34ACC7; font-weight:bold'>Voto Real y Permanente</span> los ciudadanos pueden hacer valer sus intereses en asuntos que les afectan.</p><p>Por cada ciudadano que participa directamente, el valor del voto de los diputados disminuye. En este caso <span style='font-weight:bold'>el voto ciudadano directo cambia el resultado de la votación.</span>.</p><p>El simulador busca mostrar el cambio de manera intuitiva. Sin embargo, el efecto real no es que voten menos diputados, sino que <span style='font-weight:bold'>el valor del voto de cada diputado</span> de manera proporcional. En este caso el voto de cada diputado cuenta sólo por 0.25</p>"
    } else if (counter === 3){
		votantes = 15;
		ciudRojosYAzules = 82;
        congresoRojosYAzules = 60;
		getReal();
		newArrayShuffled = arrayShuffle(array, votantes);
		calculoDeVotos(votantes,ciudRojosYAzules,congresoRojosYAzules);
		resultados(votantes,ciudRojosYAzules,congresoRojosYAzules);
        document.getElementById("explanation").innerHTML="<p>Simulemos ahora la votación de una propuesta de ley que tiene un amplio respaldo de la opinión pública. En este caso el voto de la ciudadanía y el de sus representantes concuerda. Se aprueba la ley.</p><p><span style='font-weight:bold'>El voto permanente también facilita la vigilancia ciudadana sobre del Congreso</span> y sus decisiones. No más cheques en blanco cada 4 años. Nuestros representantes, sabiéndose vigilados, anteponen los intereses ciudadanos a los partidistas.</p><p>Puede verse en el simulador cómo <span style='font-weight:bold'>los votos del Congreso son más heterogéneos</span>.</p>"
    } else if (counter === 4){
        votantes = 10;
        ciudRojosYAzules = 45;
        congresoRojosYAzules = 82;
		getReal();
		document.getElementById("siguiente").disabled = false;
		document.getElementById("siguiente").setAttribute('style','cursor:hand;');
		document.getElementById("voteButton","resetButton").disabled = true;
		document.getElementById("voteButton","resetButton").setAttribute('style','cursor:default;');
		document.getElementById("resetButton").disabled = true;
		document.getElementById("resetButton").setAttribute('style','cursor:default;');
		newArrayShuffled = arrayShuffle(array, votantes);
		calculoDeVotos(votantes,ciudRojosYAzules,congresoRojosYAzules);
		resultados(votantes,ciudRojosYAzules,congresoRojosYAzules);
        document.getElementById("explanation").innerHTML="<p>Veamos una última votación. En este caso, la participación ciudadana ha sido baja.<p></p>Los ciudadanos han decidido no emplear su derecho a voto permanente y confiar en el Congreso para que los represente.</p><p>El derecho a <span style='font-weight:bold; color:#34ACC7;'>Voto Real y Permanente</span>, la <span style='font-weight:bold; color:#34ACC7;'>Transparencia en la gestión pública</span> y las demás medidas de Democracia y Punto, <span style='font-weight:bold;'>erradican la corrupción y consiguen que el gobierno actúe en pos del interé genereal.</span></p>"
    } else if (counter === 5){
		getReal();
		document.getElementById("voteButton","anterior").disabled = false;
		document.getElementById("voteButton","anterior").setAttribute('style','cursor:hand;');
		document.getElementById("resetButton").disabled = false;
		document.getElementById("resetButton").setAttribute('style','cursor:hand;');
		document.getElementById("siguiente").disabled = true;
		document.getElementById("siguiente").setAttribute('style','cursor:default;');
        document.getElementById("explanation").innerHTML="<p><span style='font-weight:bold'>Interactúa con el simulador</span> para comprobar el efecto del <span style='font-weight:bold; color:#34ACC7;'>Voto Real y Permanente</span>. Declara la participación ciudadana, su opinión, y la opinión de los diputados. <em style='font-weight:bold'>Compara los resultados según el tipo de voto</em>:</p><br /><div style='margin: 0 auto; border: 1px solid #34ACC7; text-align:center; padding-top:6px;'><form style='font-size: 15px;'><div style='display:inline-block;padding:5px'><em>Participación ciudadana </em><input onchange='handleChange(this);' type='text' maxlength='3' size='1' style='padding:0 5px;' id='partCiud' name='partCiud'/><em>%</em></div><div style='display:inline-block;padding:5px'><em>Ciudadanos a favor </em><input onchange='handleChange(this);' type='text' maxlength='3' size='1' style='padding:0 5px;' id='opCiud' name='opCiud'/><em>%</em></div><div style='display:inline-block;padding:5px'><em>Diputados a favor </em><input onchange='handleChange(this);' type='text' maxlength='3' size='1' style='padding:0 5px;' id='opDipt' name='opDipt'/><em>%</em></div><br /><input class='blue' type='button' onclick='getReal(), inputVoto()' value='Voto Real y Permanente' id='butVotoReal'/><input class='white' type='button' onclick='getNotReal(), inputVoto()' value='Voto cada 4 años' id='butVotNoReal'/></form></div><br /><p>Puedes generar una <em>Votación al azar</em> o <em>Limpiar</em> los datos para empezar de cero.</p><p>También puedes volver atrás o <input class='black' type='button' onclick='reset(), cleanUp(), tutorial(0)' value='Reiniciar el tutorial' id='reinicio'></p>"
    }   
}



function cleanUp(){
        for (i=1; i <37; i++){
            document.getElementById("ciudadano"+i.toString()).setAttribute("fill","#C0C0C0");
        }
        for (i=1; i < 351; i++){
            document.getElementById("coords"+i.toString()).setAttribute("fill","#C0C0C0");
        }
		
}


function calculoDeVotos(votantesC, ciudRojosYAzulesC, congresoRojosYAzulesC){
    cleanUp();
    if(real) {
        hemiciclo(newArrayShuffled);
        var votantesR = round(votantesC/100*36);
		var ciudRYAR = round(ciudRojosYAzulesC/100*votantesR);
        for (i = 1; i <= ciudRYAR; i++ ){
            document.getElementById("ciudadano"+i.toString()).setAttribute("fill","#34ACC7");            
        }
        for (i = ciudRYAR + 1 ; i <= votantesR; i++){
            document.getElementById("ciudadano"+i.toString()).setAttribute("fill","#E33F31");
        }
		x = round(votantes*3.5);
        y = round(congresoRojosYAzulesC/100*(350 - x) + x);
        
        for (i = x + 1; i <= y; i++ ){
            document.getElementById("coords"+i.toString()).setAttribute("fill","#34ACC7");
        }
        for (i = y + 1; i <= 350; i++){
            document.getElementById("coords"+i.toString()).setAttribute("fill","#E33F31");
		}
    }else if(!real) {
        hemiciclo(array);        
        y = round(congresoRojosYAzulesC*3.5);
        
        for (i = 1; i <= y; i++ ){
            document.getElementById("coords"+i.toString()).setAttribute("fill","#34ACC7");
        }
        for (i = y + 1; i <= 350; i++){
            document.getElementById("coords"+i.toString()).setAttribute("fill","#E33F31");
        }        
    }
}



function resultados(votantesResult, ciudRojosYAzulesResult, congresoRojosYAzulesResult){
    //Voto real y permanente
    if(real){
    if(votantesResult === 0){
		porcentajeCiudadano = "";
	}else if (ciudRojosYAzulesResult === 50){
		porcentajeCiudadano = "El <span style='font-weight:bold;'>" + ciudRojosYAzulesResult.toString() + "% </span> apoya la propuesta de ley";
        }else if (ciudRojosYAzulesResult > 50){
            porcentajeCiudadano = "El <span style='font-weight:bold; color:#34ACC7;'>" + ciudRojosYAzulesResult.toString() + "% </span> apoya la propuesta de ley";
        }else{
            porcentajeCiudadano = "El <span style='font-weight:bold; color:#E33F31;'>" + (100 - ciudRojosYAzulesResult).toString() + "% </span> rechaza la propuesta de ley";
        }        
        pesoVotoDiputado = Math.floor((100 - votantesResult))/100;
        if (congresoRojosYAzulesResult === 50){
			porcentajeCongreso = "El <span style='font-weight:bold;'>" + congresoRojosYAzulesResult.toString() + "% </span> apoya la propuesta de ley";
		}else if (congresoRojosYAzulesResult > 50){
            porcentajeCongreso = "El <span style='font-weight:bold; color:#34ACC7;'>" + congresoRojosYAzulesResult.toString() + "% </span> apoya la propuesta de ley";
        } else{
            porcentajeCongreso = "El <span style='font-weight:bold; color:#E33F31;'>" + (100 - congresoRojosYAzulesResult).toString() + "% </span> rechaza la propuesta de ley";
        }
        //texto final
		resultado = (3.5*votantesResult*ciudRojosYAzulesResult/100 + congresoRojosYAzulesResult*(350 - votantesResult*3.5)/100)/350;
        document.getElementById("results").innerHTML = "<p><span style='font-weight:bold'>Vota un " + votantesResult.toString() + "% de la ciudadanía</span><br />" + porcentajeCiudadano + "</p><p><span style='font-weight:bold'>Cada voto de sus Señorías cuenta por " + pesoVotoDiputado.toString() + "</span><br />" + porcentajeCongreso + "</p>";
		//aprobada o no
		if (ciudRojosYAzulesResult === 50 && congresoRojosYAzulesResult === 50){
			document.getElementById("results").innerHTML +=	"<p>En la vida real un <span style='font-weight:bolder; font-size: 20px; color:#404040;'>empate</span> es muy improbable.<br />Si se diera, podría tener que repetirse la votación.</p>";
		}else if (resultado > 0.5){
			document.getElementById("results").innerHTML += "<h2 style='color:#34ACC7; text-align:center'>Se aprueba la ley</h2>";
		}else{
			document.getElementById("results").innerHTML +=	"<h2 style='color:#E33F31; text-align:center'>Se rechaza la ley</h2>";
		}        		
		//Voto cada 4 años
    } else if(!real) {
        if (congresoRojosYAzulesResult === 50){
			porcentajeCongreso = "<span style='font-weight:bold;'>" + congresoRojosYAzulesResult.toString() + "% </span> de los <span style='font-weight:bold;'>diputados</span> apoya la propuesta de ley";
		}else if (congresoRojosYAzulesResult > 50){
            porcentajeCongreso = "<span style='font-weight:bold; color:#34ACC7;'>" + congresoRojosYAzulesResult.toString() + "% </span> de los <span style='font-weight:bold;'>diputados</span> apoya la propuesta de ley";
        } else{
            porcentajeCongreso = "<span style='font-weight:bold; color:#E33F31;'>" + congresoRojosYAzulesResult.toString() + "% </span> de los <span style='font-weight:bold;'>diputados</span> apoya la propuesta de ley";
        }
        //texto final
        document.getElementById("results").innerHTML = "<p>Los <span style='font-weight:bold'>ciudadanos no pueden expresar su opinión</span> por ninguna vía</p><p>El " + porcentajeCongreso + " </p>";
        //aprobada o no
		if (congresoRojosYAzulesResult === 50){
			document.getElementById("results").innerHTML +=	"<p>En la vida real un <span style='font-weight:bolder; font-size: 20px; color:#404040;'>empate</span> es muy improbable.<br />Si se diera, podría tener que repetirse la votación.</p>";
		}else if (congresoRojosYAzulesResult > 50){
			document.getElementById("results").innerHTML += "<h2 style='color:#34ACC7; text-align:center'>Se aprueba ley</h2>";
		}else{
			document.getElementById("results").innerHTML += "<h2 style='color:#E33F31; text-align:center'>Se rechaza la ley</h2>";
		}
	}
}


function randomVoto(){
	votantes = Math.floor(Math.random()*101);
	ciudRojosYAzules = Math.floor(Math.random()*101);
	congresoRojosYAzules = Math.floor(Math.random()*101);
	document.getElementById("partCiud").value = votantes;
	document.getElementById("opCiud").value = ciudRojosYAzules;
	document.getElementById("opDipt").value = congresoRojosYAzules;
	newArrayShuffled = arrayShuffle(array, votantes);
	calculoDeVotos(votantes,ciudRojosYAzules,congresoRojosYAzules);
	resultados(votantes, ciudRojosYAzules, congresoRojosYAzules);
}



function handleChange(input) {
	var inputDot = input.value.replace(',','.');
	if (inputDot < 0 || inputDot > 100 || isNaN(inputDot)){
		input.setAttribute("style", "background:#E33F31;padding: 0 5px;");
	}else if (inputDot === ""){
		input.setAttribute("style", "");
	}else if (inputDot - Math.floor(inputDot) >= 0.5){
		input.setAttribute("style", "background:white;padding: 0 5px;"); //si el input es aceptable tiene que volver a blanco
		input.value = Math.floor(inputDot) + 1;
	}else{
		input.setAttribute("style", "background:white;padding: 0 5px;"); //si el input es aceptable tiene que volver a blanco
		input.value = Math.floor(inputDot);
	}
}

	
	
function inputVoto(){
	var a = document.getElementById("partCiud");
	var b = document.getElementById("opCiud");
	var c = document.getElementById("opDipt");
	var checker = 0;
	if (real){
		a.setAttribute("style", "");
		b.setAttribute("style", "");
		c.setAttribute("style", "");
		if (a.value < 0 || a.value > 100 || isNaN(a.value) || a.value === ""){
			a.setAttribute("style", "background:#E33F31;padding: 0 5px;");
			checker++;
		} else {votantes = parseInt(a.value, 10);}
		if (b.value < 0 || b.value > 100 || isNaN(b.value) || b.value === ""){
			b.setAttribute("style", "background:#E33F31;padding: 0 5px;");
			checker++;
		} else {ciudRojosYAzules = parseInt(b.value, 10);}	
		if (c.value < 0 || c.value > 100 || isNaN(c.value) || c.value === ""){
			c.setAttribute("style", "background:#E33F31;padding: 0 5px;");
			checker++;
		} else {congresoRojosYAzules = parseInt(c.value, 10);}
		if (checker === 0){
			newArrayShuffled = arrayShuffle(array, votantes);		
			calculoDeVotos(votantes,ciudRojosYAzules,congresoRojosYAzules);
			resultados(votantes, ciudRojosYAzules, congresoRojosYAzules);
			}
	} else if (!real){
		a.setAttribute("style", "background:white; opacity:0.6; filter:alpha(opacity=60);");
		b.setAttribute("style", "background:white; opacity:0.6; filter:alpha(opacity=60);");
		c.setAttribute("style", "");
		if (c.value < 0 || c.value > 100 || isNaN(c.value) || c.value === ""){
			c.setAttribute("style", "background:#E33F31;padding: 0 5px;");
			checker++;
		} else {congresoRojosYAzules = parseInt(c.value, 10);}
		if (checker === 0){ 	
			calculoDeVotos(0, 0, congresoRojosYAzules);
			resultados(0, 0, congresoRojosYAzules);}
	}	
}





function reset(){
    document.getElementById("results").innerHTML = "";
	document.getElementById("partCiud").value = "";
	document.getElementById("opCiud").value = "";
	document.getElementById("opDipt").value = "";
    x = -1;
    y = -1;
    votantes = -1;
    ciudRojosYAzules = -1;
    congresoRojosYAzules = -1;
}