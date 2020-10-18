sap.ui.define([
	"sap/ui/core/mvc/Controller", //controlador
	"sap/ui/model/json/JSONModel", //model
	"sapui5/model/formatter",
	"sap/ui/model/Filter", // para la lógica del filtro
	"sap/ui/model/FilterOperator" //para manejar el operador que se introduce en el filtro

], function (Controller, JSONModel, formatter, Filter, FilterOperater) {

	return Controller.extend("sapui5.controller.InvoiceList", {

		formatter: formatter, //agregar los textos del i18n para el estatus y formatter.js del model

		onInit: function () {

			var oViewModel = new JSONModel({

				currency: "EUR"

			});

			this.getView().setModel(oViewModel, "view");

		},

		onFilterInvoices: function (oEvent) { // se captura ele vento al pulsar la tecla enter

			//build filter
			var aFilter = []; // creamos un array vacio, donde se guradrá el valor del filtro
			var sQuery = oEvent.getParameter("query");

			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperater.Contains, sQuery));
			}

			//si tenemos el filtro como verdadero y ya capturado
			//filter binding
			var oList = this.byId("invoiceList");

			var oBinding = oList.getBinding("items");

			oBinding.filter(aFilter);

		},
		
		onPress : function(oEvent){
			
			//recogemos en la variable los items de la navegacion con el evento onPress
			var oItem = oEvent.getSource();
			
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			
			//leer los parametro de la navegacion o enrutamiento con parametros
			//la segunda vista tendra la posibilidad de decodoficar la información enviada en la URI
			oRouter.navTo("detail", {
				invoicePath : window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1)) //eliminamos la barra de adelante con substr(1)
			});
			
		}

	});
});