sap.ui.define([

		"sap/ui/model/json/JSONModel" //Agregaremos datos estaticos con el formato JSON
	],
	function (JSONModel) {

		"use strict"; //se especifica que es la zona privada del controlador

		//devolvemos la instancia de este controlador
		return {

			createRecipient: function () {

				//creamos datos para luego agregarlos a la vista
				//set model on view
				var oData = {
					//creamos un formato json
					recipient: {
						name: "Word"
					}
				};

				//cargamos los datos en el modelo
				return new JSONModel(oData);

			}
		};

	});