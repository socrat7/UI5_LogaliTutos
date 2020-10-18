sap.ui.define([

		"sap/ui/core/mvc/Controller", //asignamos el controller
		"sap/ui/core/routing/History", //agregamos el historial para la navegacion entre vistas, por ejemplo back
		"sap/ui/core/UIComponent",
		"sap/m/MessageToast"

	],
	function (Controller, History, UIComponent, MessageToast) { //se paso al Component.js: models, ResourceModel

		"use strict"; //se especifica que es la zona privada del controlador

		return Controller.extend("sapui5.controller.Detail", {

			onInit: function () {
				//capturamos el router
				var oRouter = UIComponent.getRouterFor(this);

				//obtenbemos la ruta
				oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
			},

			_onObjectMatched: function (oEvent) {

				this.byId("rating").reset();

				this.getView().bindElement({

					//Vamos a hacer el binding de los datos pasados mediante la URI hacia la vista Details"
					path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
					model: "invoice"

				});
			},

			onNavBack: function () {

				var oHistory = History.getInstance();
				//agregamos la ruta anterior
				var sPreviousHash = oHistory.getPreviousHash();
				//nos aseguramos que exista la ruta anterior
				if (sPreviousHash !== undefined) {

					window.history.go(-1); //si hay historial navega al anterior

				} else {

					//capturamos el router
					var oRouter = UIComponent.getRouterFor(this);
					oRouter.navTo("overview", {}, true); // si no hay historia navega al overview

				}
			},

			onRatingChange: function (oEvent) {

				var fValue = oEvent.getParameter("value");
				var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

				MessageToast.show(oResourceBundle.getText("ratingConfirmation", [fValue]));

			}
		});
	});