sap.ui.define([

	"sap/ui/core/UIComponent",
	"sapui5/model/models", //Accedemos el model.js definido en la carpeta model
	"sap/ui/model/resource/ResourceModel" // para agregar los datos del i18n

], function (UIComponent, models, ResourceModel) {

	return UIComponent.extend("sapui5.Component.js", {

		//incluimos metadatos
		metadata: {
			//indicamos cual es la vista principal
			rootView: {
				//insertamos las propiedades
				"viewName": "sapui5.view.App", // el namespace
				//especificamos que se trata de ua vista xml
				"type": "XML",
				//cual es la forma de cargar la ino, async
				"async": true,
				//el ID de la vista
				"id": "app"
			}
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

		}

	});

});