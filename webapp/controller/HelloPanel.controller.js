sap.ui.define([

		"sap/ui/core/mvc/Controller", //asignamos el controller
		"sap/m/MessageBox",
		"sap/m/MessageToast"
	],
	function (Controller, MessageBox, MessageToast ) { //se paso al Component.js: models, ResourceModel

		"use strict"; //se especifica que es la zona privada del controlador

		//devolvemos la instancia de este controlador
		return Controller.extend("sapui5.controller.HelloPanel", {
			//entre las llaves va toda la lógica

			//el método onInit se inicia siempre al instanciar
			onInit: function () {

			},
			//llamamos a la funcion .onShowHello asignada al boton de la vista App
			onShowHello: function () {

				//Read the Text from i18n file
				var sHello = this.getView().getModel("i18n").getResourceBundle().getText("sayHello"); //getResourceBundle() retorna el contenido del i18n

				//read the Text from the model
				var sName = this.getView().getModel().getProperty("/recipient/name");

				//concatenamos ambas variables
				var sMsg = sHello.concat(" ").concat(sName);

				MessageBox.show(
					sMsg, {
						icon: MessageBox.Icon.SUCCESS,
						title: "Mensaje",
						actions: [MessageBox.Action.OK],
						emphasizedAction: MessageBox.Action.OK
					}
				);

				MessageToast.show(sMsg);
			}

		});

	});