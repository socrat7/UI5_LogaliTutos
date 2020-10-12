sap.ui.define([

		"sap/ui/core/mvc/Controller", //asignamos el controller
		"sap/m/MessageBox",
		"sap/m/MessageToast",
		"sap/ui/model/json/JSONModel" //Agregaremos datos estaticos con el formato JSON
	],
	function (Controller, MessageBox, MessageToast, JSONModel) {

		"use strict"; //se especifica que es la zona privada del controlador

		//devolvemos la instancia de este controlador
		return Controller.extend("sapui5.controller.App", {
			//entre las llaves va toda la lógica

			//el método onInit se inicia siempre al instanciar
			onInit: function () {

				//creamos datos para luego agregarlos a la vista
				//set model on view
				var oData = {
					//creamos un formato json
					recipient: {
						name: "Word"
					}
				};

				//cargamos los datos en el modelo
				var oModel = new JSONModel(oData);

				//cargamos el modelo en la vista
				this.getView().setModel(oModel);

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