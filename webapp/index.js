sap.ui.define([

		"sap/ui/core/ComponentContainer"

	],
	function (ComponentContainer) {

		new ComponentContainer({

			//indicamos que componente queremos instanciar
			name: "sapui5",
			settings: {
				id: "sapui5"
			},
			async: true

		}).placeAt("content");
	});