sap.ui.define([

		"sap/ui/core/mvc/Controller" //asignamos el controller

	],
	function (Controller) { //se paso al Component.js: models, ResourceModel

		"use strict"; //se especifica que es la zona privada del controlador

		return Controller.extend("sapui5.controller.Detail", {

			onInit: function () {
				//capturamos el router
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

				//obtenbemos la ruta
				oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
			},

			_onObjectMatched: function (oEvent) {

				this.getView().bindElement({
					
					//Vamos a hacer el binding de los datos pasados mediante la URI hacia la vista Details"
					path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
					model: "invoice"

				});

			}

		});

	});