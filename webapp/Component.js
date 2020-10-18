sap.ui.define([

	"sap/ui/core/UIComponent",
	"sapui5/model/models", //Accedemos el model.js definido en la carpeta model
	"sap/ui/model/resource/ResourceModel", // para agregar los datos del i18n
	"sapui5/controller/HelloDialog"

], function (UIComponent, models, ResourceModel, HelloDialog) {

	return UIComponent.extend("sapui5.Component", {

		//incluimos metadatos
		metadata: {

			//todos los metadatas seran dirigidos en el manifest.json
			manifest: "json"
		},

		//funcion init

		init: function () {

			//call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			//cargamos el modelo en la vista
			this.setModel(models.createRecipient());
			//createRecipient() está definido en models.js

			//set i18n model on view
			var i18nModel = new ResourceModel({
				bundleName: "sapui5.i18n.i18n" //la ruta es sapui5 en este caso
			});

			//cargamos los datos en el modelo
			this.setModel(i18nModel, "i18n"); // con ésto ya podemos utilizar en i18n en la vista

			//cargamos el controlador para el mensaje de dialogo
			//accedemos a la logica de HelloDialog.js
			this._helloDialog = new HelloDialog(this.getRootControl());
			
			//create the views based on the url/hash
			this.getRouter().initialize();

		},

		exit: function () { //eliminamos el mensaje de dialogo
			this._helloDialog.destroy();
			delete this._helloDialog;
		},
		
		openHelloDialog: function(){
				this._helloDialog.open();
		}

	});

});