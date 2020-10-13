sap.ui.define([

		"sap/ui/core/mvc/Controller" //asignamos el controller
		
	],
	function (Controller ) { //se paso al Component.js: models, ResourceModel

		"use strict"; //se especifica que es la zona privada del controlador

		//devolvemos la instancia de este controlador
		return Controller.extend("sapui5.controller.App", {
			//entre las llaves va toda la lógica

			//el método onInit se inicia siempre al instanciar
			onInit: function () {

			}
		});

	});