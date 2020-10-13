sap.ui.define([

		"sap/ui/core/mvc/Controller", //asignamos el controller
		"sap/m/MessageBox",
		"sap/m/MessageToast",
		"sapui5/model/models", //Accedemos el model.js definido en la carpeta model
		"sap/ui/model/resource/ResourceModel" // para agregar los datos del i18n
	],
	function (Controller, MessageBox, MessageToast, models, ResourceModel) {

		"use strict"; //se especifica que es la zona privada del controlador

		//devolvemos la instancia de este controlador
		return Controller.extend("sapui5.controller.App", {
			//entre las llaves va toda la lógica

			//el método onInit se inicia siempre al instanciar
			onInit: function () {

				//cargamos el modelo en la vista
				this.getView().setModel(models.createRecipient());
				//createRecipient() está definido en models.js

				//set i18n model on view
				var i18nModel = new ResourceModel({
					bundleName: "sapui5.i18n.i18n" //la ruta es sapui5 en este caso
				});

				//cargamos los datos en el modelo
				this.getView().setModel(i18nModel, "i18n"); // con ésto ya podemos utilizar en i18n en la vista

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