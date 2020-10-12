sap.ui.define( [
		
		"sap/ui/core/mvc/Controller", //asignamos el controller
		"sap/m/MessageBox",
		"sap/m/MessageToast"
	],
	function(Controller, MessageBox, MessageToast) {
		
		"use strict"; //se especifica que es la zona privada del controlador
		
		//devolvemos la instancia de este controlador
		return Controller.extend("sapui5.controller.App",
		{
		 //entre las llaves va toda la lógica
		
		//llamamos a la funcion .onShowHello asignada al boton de la vista App
		onShowHello: function(){
				MessageBox.show(
									   "Hallo World", {
										icon: MessageBox.Icon.SUCCESS,
										title: "Mensaje",
										actions: [MessageBox.Action.OK],
										emphasizedAction: MessageBox.Action.OK,
									}
								);
								
			    MessageToast.show("Hallo World");
			}
			
		});
	
	});