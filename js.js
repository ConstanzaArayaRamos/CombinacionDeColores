function setNone() {
	var p = document.getElementById("p");
	var b = document.getElementById("body");
	p.innerHTML = "";
	b.style.backgroundColor = "#FFF";
	b.style.color = "#000";
	b.style.border = "none";
	b.style.textShadow = "none";
}

function setTxBr() {
	var b = document.getElementById("body");
	b.style.color = "#fff";
	b.style.textShadow ="#000 1px 0px 0px, "+
						"#000 -1px 0px 0px,"+
						"#000 0px 1px 0px,"+
						"#000 0px -1px 0px,"+
						"#000 1px 1px,"+
						"#000 -1px -1px 0px,"+
						"#000 1px -1px 0px,"+
						"#000 -1px 1px 0px";
}

function color1() {
	var color = document.getElementById("todos").value;
	var todos = document.getElementById("todos");
	var otros = document.getElementById("otros");
	var b = document.getElementById("body");
	var p = document.getElementById("p");
	
	switch (color) {
		case "0":
			otros.style.visibility = "hidden";
			setNone();
		break;
		
		case "1":
			setNone();
			var am = new Array ("Seleccione un Color", "Azul", "Rojo");
			var texto = new Array(am.length);
			otros.style.visibility = "visible";
			if(document.getElementById("otros").innerHTML.length <= 0){
				for (i=0;i<am.length;i++){
					var op = document.createElement("option");
					texto[i] = document.createTextNode(am[i]);
					op.appendChild(texto[i]);
					otros.appendChild(op);
				}
			}else {
				document.getElementById("otros").innerHTML="";
				for (i=0;i<am.length;i++){
					var op = document.createElement("option");
					texto[i] = document.createTextNode(am[i]);
					op.appendChild(texto[i]);
					otros.appendChild(op);
				}
			}
		break;
		
		case "2":
			setNone();
			var az = new Array ("Seleccione un Color", "Amarillo", "Blanco", "Rojo");
			var texto = new Array(az.length);
			otros.style.visibility = "visible";
			if(document.getElementById("otros").innerHTML.length <= 0){
				for (i=0;i<az.length;i++){
					var op = document.createElement("option");
					texto[i] = document.createTextNode(az[i]);
					op.appendChild(texto[i]);
					otros.appendChild(op);
				}
			}else{
				document.getElementById("otros").innerHTML="";
				for (i=0;i<az.length;i++){
					var op = document.createElement("option");
					texto[i] = document.createTextNode(az[i]);
					op.appendChild(texto[i]);
					otros.appendChild(op);
				}
			}
		break;
		
		case "3":
			setNone();
			var bl = new Array ("Seleccione un Color", "Azul", "Cafe", "Morado", "Negro", "Rojo", "Verde");
			var texto = new Array(bl.length);
			otros.style.visibility = "visible";
			if(document.getElementById("otros").innerHTML.length <= 0){
				for (i=0;i<bl.length;i++){
					var op = document.createElement("option");
					texto[i] = document.createTextNode(bl[i]);
					op.appendChild(texto[i]);
					otros.appendChild(op);
				}
			}else{
				document.getElementById("otros").innerHTML="";
				for (i=0;i<bl.length;i++){
					var op = document.createElement("option");
					texto[i] = document.createTextNode(bl[i]);
					op.appendChild(texto[i]);
					otros.appendChild(op);
				}
			}
		break;
		
		case "4":
			setNone();
			var ca = new Array ("Seleccione un Color", "Blanco", "Negro");
			var texto = new Array(ca.length);
			otros.style.visibility = "visible";
			if(document.getElementById("otros").innerHTML.length <= 0){
				for (i=0;i<ca.length;i++){
					var op = document.createElement("option");
					texto[i] = document.createTextNode(ca[i]);
					op.appendChild(texto[i]);
					otros.appendChild(op);
				}
			}else{
				document.getElementById("otros").innerHTML="";
				for (i=0;i<ca.length;i++){
					var op = document.createElement("option");
					texto[i] = document.createTextNode(ca[i]);
					op.appendChild(texto[i]);
					otros.appendChild(op);
				}
			}
		break;
		
		case "5":
			setNone();
			var mo = new Array ("Seleccione un Color", "Blanco");
			var texto = new Array(mo.length);
			otros.style.visibility = "visible";
			if(document.getElementById("otros").innerHTML.length <= 0){
				var op = document.createElement("option");
				op.appendChild(texto);
				otros.appendChild(op);
			}else{
				document.getElementById("otros").innerHTML="";
				for (i=0;i<mo.length;i++){
					var op = document.createElement("option");
					texto[i] = document.createTextNode(mo[i]);
					op.appendChild(texto[i]);
					otros.appendChild(op);
				}
			}
		break;
		
		case "6":
			setNone();
			var ne = new Array ("Seleccione un Color", "Blanco", "Cafe", "Verde");
			var texto = new Array(ne.length);
			otros.style.visibility = "visible";
			if(document.getElementById("otros").innerHTML.length <= 0){
				for (i=0;i<ne.length;i++){
					var op = document.createElement("option");
					texto[i] = document.createTextNode(ne[i]);
					op.appendChild(texto[i]);
					otros.appendChild(op);
				}
			}else{
				document.getElementById("otros").innerHTML="";
				for (i=0;i<ne.length;i++){
					var op = document.createElement("option");
					texto[i] = document.createTextNode(ne[i]);
					op.appendChild(texto[i]);
					otros.appendChild(op);
				}
			}
		break;

		case "7":
			setNone();
			var ro = new Array ("Seleccione un Color", "Amarillo", "Azul", "Blanco", "Verde");
			var texto = new Array(ro.length);
			otros.style.visibility = "visible";
			if(document.getElementById("otros").innerHTML.length <= 0){
				for (i=0;i<ro.length;i++){
					var op = document.createElement("option");
					texto[i] = document.createTextNode(ro[i]);
					op.appendChild(texto[i]);
					otros.appendChild(op);
				}
			}else{
				document.getElementById("otros").innerHTML="";
				for (i=0;i<ro.length;i++){
					var op = document.createElement("option");
					texto[i] = document.createTextNode(ro[i]);
					op.appendChild(texto[i]);
					otros.appendChild(op);
				}
			}
		break;

		case "8":
			setNone();
			var ve = new Array ("Seleccione un Color", "Blanco", "Rojo", "Negro");
			var texto = new Array(ve.length);
			otros.style.visibility = "visible";
			if(document.getElementById("otros").innerHTML.length <= 0){
				for (i=0;i<ve.length;i++){
					var op = document.createElement("option");
					texto[i] = document.createTextNode(ve[i]);
					op.appendChild(texto[i]);
					otros.appendChild(op);
				}
			}else{
				document.getElementById("otros").innerHTML="";
				for (i=0;i<ve.length;i++){
					var op = document.createElement("option");
					texto[i] = document.createTextNode(ve[i]);
					op.appendChild(texto[i]);
					otros.appendChild(op);
				}
			}
		break;

		default:
			setNone();
			document.getElementById("otros").innerHTML="";
			var op = document.createElement("option");
			var texto = document.createTextNode("Seleccione un Color");
			op.appendChild(texto);
			otros.appendChild(op);
			otros.style.visibility = "visible";
		break;
	}
}

function color2() {
	var color1 = document.getElementById("todos").value;
	var color2 = document.getElementById("otros").value;
	var div = document.getElementById("div");
	var b = document.getElementById("body");
	var p = document.getElementById("p");
	switch (color1) {
		case "1":
			switch (color2){
				case "Seleccione un Color":
					setNone();
				break;

				case "Azul":
					setTxBr();
					b.style.backgroundColor = "#00FF00";
					if(p.innerHTML.length > 0){
						p.innerHTML = "Verde (#00FF00) (0,255,0)";
					}else {
						var texto = document.createTextNode("Verde (#00FF00) (0,255,0)");
						p.appendChild(texto);
						div.appendChild(p);
					}
					break;

				case "Rojo":
					setTxBr();
					b.style.backgroundColor = "#FFA500";
					if(p.innerHTML.length > 0){
						p.innerHTML = "Naranja (#FFA500) (255,165,0)";
					}else {
						var texto = document.createTextNode("Naranja (#FFA500) (255,165,0)");
						p.appendChild(texto);
						div.appendChild(p);
					}
				break;
			}
		break;

		case "2":
			switch (color2){
				case "Seleccione un Color":
					setNone();
				break;

				case "Amarillo":
					setTxBr();
					b.style.backgroundColor = "#00FF00";
					if(p.innerHTML.length > 0){
						p.innerHTML = "Verde (#00FF00) (0,255,0)";
					}else {
						var texto = document.createTextNode("Verde (#00FF00) (0,255,0)");
						p.appendChild(texto);
						div.appendChild(p);
					}
				break;

				case "Rojo":
					setTxBr();
					b.style.backgroundColor = "#9B009B";
					if(p.innerHTML.length > 0){
						p.innerHTML = "Morado (#9B009B) (155,0,155)";
					}else {
						var texto = document.createTextNode("Morado (#9B009B) (155,0,155)");
						p.appendChild(texto);
						div.appendChild(p);
					}
				break;

				case "Blanco":
					setTxBr();
					b.style.backgroundColor = "#00BFFF";
					if(p.innerHTML.length > 0){
						p.innerHTML = "Celeste (#00BFFF) (0,191,255)";
					}else {
						var texto = document.createTextNode("Celeste (#00BFFF) (0,191,255)");
						p.appendChild(texto);
						div.appendChild(p);
					}
				break;
			}
		break;

		case "3":
			switch (color2){
				case "Seleccione un Color":
					setNone();
				break;

				case "Verde":
					setTxBr();
					b.style.backgroundColor = "#4DFF4D";
					if(p.innerHTML.length > 0){
						p.innerHTML = "Verde Claro (#4DFF4D) (77,255,77)";
					}else {
						var texto = document.createTextNode("Verde Claro (#4DFF4D) (77,255,77)");
						p.appendChild(texto);
						div.appendChild(p);
					}
				break;

				case "Morado":
					setTxBr();
					b.style.backgroundColor = "#C864FF";
					if(p.innerHTML.length > 0){
						p.innerHTML = "Violeta (#C864FF) (200,100,255)";
					}else {
						var texto = document.createTextNode("Violeta (#C864FF) (200,100,255)");
						p.appendChild(texto);
						div.appendChild(p);
					}
				break;

				case "Azul":
					setTxBr();
					b.style.backgroundColor = "#00BFFF";
					if(p.innerHTML.length > 0){
						p.innerHTML = "Celeste (#00BFFF) (0,191,255)";
					}else {
						var texto = document.createTextNode("Celeste (#00BFFF) (0,191,255)");
						p.appendChild(texto);
						div.appendChild(p);
					}
				break;

				case "Cafe":
					setTxBr();
					b.style.backgroundColor = "#BE640F";
					if(p.innerHTML.length > 0){
						p.innerHTML = "Cafe Claro (#BE640F) (190,100,15)";
					}else {
						var texto = document.createTextNode("Cafe Claro (#BE640F) (190,100,15)");
						p.appendChild(texto);
						div.appendChild(p);
					}
				break;

				case "Rojo":
					setTxBr();
					b.style.backgroundColor = "#FF0064";
					if(p.innerHTML.length > 0){
						p.innerHTML = "Rosado (#FF0064) (255,0,100)";
					}else {
						var texto = document.createTextNode("Rosado (#FF0064) (255,0,100)");
						p.appendChild(texto);
						div.appendChild(p);
					}
				break;

				case "Negro":
					setTxBr();
					b.style.backgroundColor = "#808080";
					if(p.innerHTML.length > 0){
						p.innerHTML = "Gris (#808080) (128,128,128)";
					}else {
						var texto = document.createTextNode("Gris (#808080) (128,128,128)");
						p.appendChild(texto);
						div.appendChild(p);
					}
				break;

			}
		break;

		case "4":
			switch (color2){
				case "Seleccione un Color":
					setNone();
				break;

				case "Blanco":
					setTxBr();
					b.style.backgroundColor = "#BE640F";
					if(p.innerHTML.length > 0){
						p.innerHTML = "Cafe Claro (#BE640F) (190,100,15)";
					}else {
						var texto = document.createTextNode("Cafe Claro (#BE640F) (190,100,15)");
						p.appendChild(texto);
						div.appendChild(p);
					}
				break;

				case "Negro":
					setTxBr();
					b.style.backgroundColor = "#5A2D0F";
					if(p.innerHTML.length > 0){
						p.innerHTML = "Cafe Oscuro (#5A2D0F) (90,45,15)";
					}else {
						var texto = document.createTextNode("Cafe Oscuro (#5A2D0F) (90,45,15)");
						p.appendChild(texto);
						div.appendChild(p);
					}
				break;
			}
		break;

		case "5":
			switch (color2){
				case "Seleccione un Color":
					setNone();
				break;

				case "Blanco":
					setTxBr();
					b.style.backgroundColor = "#C864FF";
					if(p.innerHTML.length > 0){
						p.innerHTML = "Violeta (#C864FF) (200,100,255)";
					}else {
						var texto = document.createTextNode("Violeta (#C864FF) (200,100,255)");
						p.appendChild(texto);
						div.appendChild(p);
					}
				break;
			}
		break;

		case "6":
			switch (color2){
				case "Seleccione un Color":
					setNone();
				break;

				case "Verde":
					setTxBr();
					b.style.backgroundColor = "#009900";
					if(p.innerHTML.length > 0){
						p.innerHTML = "Verde Oscuro (#009900) (0,153,0)";
					}else {
						var texto = document.createTextNode("Verde Oscuro (#009900) (0,153,0)");
						p.appendChild(texto);
						div.appendChild(p);
					}
				break;

				case "Cafe":
					setTxBr();
					b.style.backgroundColor = "#5A2D0F";
					if(p.innerHTML.length > 0){
						p.innerHTML = "Cafe Oscuro (#5A2D0F) (90,45,15)";
					}else {
						var texto = document.createTextNode("Cafe Oscuro (#5A2D0F) (90,45,15)");
						p.appendChild(texto);
						div.appendChild(p);
					}
				break;

				case "Blanco":
					setTxBr();
					b.style.backgroundColor = "#808080";
					if(p.innerHTML.length > 0){
						p.innerHTML = "Gris (#808080) (128,128,128)";
					}else {
						var texto = document.createTextNode("Gris (#808080) (128,128,128)");
						p.appendChild(texto);
						div.appendChild(p);
					}
				break;
			}
		break;

		case "7":
			switch (color2){
				case "Seleccione un Color":
					setNone();
				break;

				case "Amarillo":
					setTxBr();
					b.style.backgroundColor = "#FFA500";
					if(p.innerHTML.length > 0){
						p.innerHTML = "Naranja (#FFA500) (255,165,0)";
					}else {
						var texto = document.createTextNode("Naranja (#FFA500) (255,165,0)");
						p.appendChild(texto);
						div.appendChild(p);
					}
				break;

				case "Azul":
					setTxBr();
					b.style.backgroundColor = "#9B009B";
					if(p.innerHTML.length > 0){
						p.innerHTML = "Morado (#9B009B) (155,0,155)";
					}else {
						var texto = document.createTextNode("Morado (#9B009B) (155,0,155)");
						p.appendChild(texto);
						div.appendChild(p);
					}
				break;

				case "Blanco":
					setTxBr();
					b.style.backgroundColor = "#FF0064";
					if(p.innerHTML.length > 0){
						p.innerHTML = "Rosado (#FF0064) (255,0,100)";
					}else {
						var texto = document.createTextNode("Rosado (#FF0064) (255,0,100)");
						p.appendChild(texto);
						div.appendChild(p);
					}
				break;

				case "Verde":
					setTxBr();
					b.style.backgroundColor = "#914B0F";
					if(p.innerHTML.length > 0){
						p.innerHTML = "Cafe (#914B0F) (145,75,15)";
					}else {
						var texto = document.createTextNode("Cafe (#914B0F) (145,75,15)");
						p.appendChild(texto);
						div.appendChild(p);
					}
				break;
			}
		break;

		case "8":
			switch (color2){
				case "Seleccione un Color":
					setNone();
				break;

				case "Blanco":
					setTxBr();
					b.style.backgroundColor = "#4DFF4D";
					if(p.innerHTML.length > 0){
						p.innerHTML = "Verde Claro (#4DFF4D) (77,255,77)";
					}else {
						var texto = document.createTextNode("Verde Claro (#4DFF4D) (77,255,77)");
						p.appendChild(texto);
						div.appendChild(p);
					}
				break;

				case "Rojo":
					setTxBr();
					b.style.backgroundColor = "#914B0F";
					if(p.innerHTML.length > 0){
						p.innerHTML = "Cafe (#914B0F) (145,75,15)";
					}else {
						var texto = document.createTextNode("Cafe (#914B0F) (145,75,15)");
						p.appendChild(texto);
						div.appendChild(p);
					}
				break;

				case "Negro":
					setTxBr();
					b.style.backgroundColor = "#009900";
					if(p.innerHTML.length > 0){
					
						p.innerHTML = "Verde Oscuro (#009900) (0,153,0)";
					}else {
						var texto = document.createTextNode("Verde Oscuro (#009900) (0,153,0)");
						p.appendChild(texto);
						div.appendChild(p);
					}
				break;
			}
		break;

		default: break;
	}
}