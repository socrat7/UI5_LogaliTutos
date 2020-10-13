sap.ui.define([

		"sap/ui/core/mvc/Controller", //asignamos el controller
		"sap/m/MessageBox",
		"sap/m/MessageToast",
		"sapui5/model/models" //Accedemos el model.js definido en la carpeta model
	],
	function (Controller, MessageBox, MessageToast, models) {

		"use strict"; //se especifica que es la zona privada del controlador

		//devolvemos la instancia de este controlador
		return Controller.extend("sapui5.controller.App", {
			//entre las llaves va toda la lógica

			//el método onInit se inicia siempre al instanciar
			onInit: function () {

				//cargamos el modelo en la vista
				this.getView().setModel(models.createRecipient());
				//createRecipient() está definido en models.js
			},
			//llamamos a la funcion .onShowHello asignada al boton de la vista App
			onShowHello: function () {
				MessageBox.show(
					"Hallo Word", {
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