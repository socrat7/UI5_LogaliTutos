sap.ui.define( [
	
		"sap/ui/core/mvc/XMLView" //incuimos la vista en xml, siempre es lo mismo

	],
	function(XMLView) {
		
		XMLView.create({
			
			//insertamos las propiedades
			viewName : "sapui5.view.App" // el namespace
			
		}).then( function (oView){
			
			oView.placeAt("content");
		});

	});