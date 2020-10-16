sap.ui.define([
	"sap/ui/core/mvc/Controller", //controlador
	"sap/ui/model/json/JSONModel", //model
	"sapui5/model/formatter"
	
	], function(Controller, JSONModel, formatter){
		
		return Controller.extend("sapui5.controller.InvoiceList", {
			
			formatter: formatter, //agregar los textos del i18n para el estatus y formatter.js del model
			
			onInit : function(){
				
				var oViewModel = new JSONModel({
					
					currency : "EUR"
					
				});
				
				this.getView().setModel(oViewModel, "view");
				
			}
			
			
		});
	});