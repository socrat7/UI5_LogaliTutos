sap.ui.define([

		"sap/ui/core/mvc/Controller", //asignamos el controller
		"sap/m/MessageBox",
		"sap/m/MessageToast",
		"sap/ui/core/Fragment"
	],
	function (Controller, MessageBox, MessageToast, Fragment) { //se paso al Component.js: models, ResourceModel

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
			},

			onOpenDialog: function () {

				//pasamos el identificador de la vista - en que vista queremos cargar el fragmento
				var oView = this.getView();

				if (!this.byId("helloDialog")) {
					//cargamos el fragmento para el boton del dialogo
					Fragment.load({

						id: oView.getId(),
						name: "sapui5.view.HelloDialog",
						controller: this //cargamos el mismo controlador al fragmento

					}).then(function (oDialog) {

						//necesitamos conectar el dialogo con la vista
						oView.addDependent(oDialog);
						oDialog.open();
					});

				} else {
					this.byId("helloDialog").open();
				}
			},

			onCloseDialog: function () {

				//tenemos que cerra el dialogo
				this.byId("helloDialog").close();

			}

		});

	});