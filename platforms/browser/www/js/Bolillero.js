var app = {
	inicio: function(){
		this.iniciaFastClick();
		this.iniciaBotones();
	},

	iniciaFastClick: function(){
		FastClick.attach(document.body);
	},

	iniciaBotones: function() {
    var buttonAction = document.querySelector('#button-action');
    buttonAction.addEventListener('click', this.extraerBolillas);

	var filterButtons = document.querySelectorAll('.button-filter');
    filterButtons[0].addEventListener('click', this.borrarBolillas);
    
    filterButtons[1].addEventListener('click', this.borrarTodo);
    
    filterButtons[2].addEventListener('click', this.salir);
    

	},

	salir: function(){
		alert("Hecho por Armando Romero");
		navigator.app.exitApp();

	},

	borrarBolillas: function(){
		document.getElementById('lista-bolillas').innerHTML = "";
	},

	borrarTodo: function(){
		document.getElementById('unidad').value = "";
		document.getElementById('bolilla').value = "";
		document.getElementById('lista-bolillas').innerHTML = "";
	},

	extraerBolillas: function() {
		valor1 = document.getElementById("unidad").value;
		valor2 = document.getElementById("bolilla").value;
		if( isNaN(valor1) || isNaN(valor2) || valor1<valor2 ) {
  			alert("Ingrese Valores numéricos correctos por favor");
  			document.getElementById("unidad").value="";
  			document.getElementById("bolilla").value="";
		}
		else{
		var unidades = document.getElementById('unidad').value;
		var bolillas = document.getElementById('bolilla').value;
		var lista = document.getElementById('lista-bolillas');
		lista.textContent = "";
		var aleatorios = new Array();
		var n=0;

			for(var i=1 ; i<=unidades ; i++){
					n=i;
					do{
						n=n-1;
						if (aleatorios[i]==aleatorios[n]) {
						aleatorios[i] = Math.floor(Math.random() * (unidades) + 1);
						n=i;
				   }

				} while(n!=0);			
			

			}

		
				for(var i=1 ; i<=bolillas ; i++){
					lista.textContent=lista.textContent + " - " + aleatorios[i] + " - ";
				}
				
		}
	},
						

};

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function(){
		app.inicio();
	}, false);
}