sap.ui.define([
	"sap/ui/core/mvc/Controller", //controlador
	"sap/ui/model/json/JSONModel" //model
	
	], function(Controller, JSONModel){
		
		return Controller.extend("sapui5.controller.InvoiceList", {
			
			onInit : function(){
				
				var oViewModel = new JSONModel({
					
					currency : "EUR"
					
				});
				
				this.getView().setModel(oViewModel, "view");
				
			}
			
			
		});
	});