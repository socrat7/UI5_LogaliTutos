sap.ui.define([

	"sap/ui/base/ManagedObject",
	"sap/ui/core/Fragment"

], function (ManagedObject, Fragment) {

	return ManagedObject.extend("sapui5.controller.HelloDialog", {

		constructor: function (oView) {
			this._oView = oView;
		},

		exit: function () {
			delete this._oView;
		},

		open: function () {
			//pasamos el identificador de la vista - en que vista queremos cargar el fragmento
			var oView = this._oView;

			if (!oView.byId("helloDialog")) {
				//lógica para cerra el dialogo
				var oFragmentController = {
					onCloseDialog: function () {

						//tenemos que cerra el dialogo
						oView.byId("helloDialog").close();
					}
				};

				//cargamos el fragmento para el boton del dialogo
				Fragment.load({

					id: oView.getId(),
					name: "sapui5.view.HelloDialog",
					controller: oFragmentController //cargamos el mismo controlador al fragmento

				}).then(function (oDialog) {

					//necesitamos conectar el dialogo con la vista
					oView.addDependent(oDialog);
					oDialog.open();
				});

			} else {
				oView.byId("helloDialog").open();
			}

		}

	});

});