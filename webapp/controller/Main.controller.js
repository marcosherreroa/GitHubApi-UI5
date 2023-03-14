sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
  ],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller,JSONModel) {
    "use strict";

    return Controller.extend("githubapiui5.controller.Main", {
      loadModel: function () {
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sUsername = this.getOwnerComponent()
          .getModel()
          .getProperty("/username");
        
        //Load first page of repo model  
        var sURLRepo = oBundle.getText("urlRepo", [sUsername,0]);
        var oModelRepo = new JSONModel();
        oModelRepo.loadData(sURLRepo);
        this.getOwnerComponent().setModel(oModelRepo, "repos");

        //Load first page of org model
        var sURLOrg = oBundle.getText("urlOrg", [sUsername,0]);
        var oModelOrg = new JSONModel();
        oModelOrg.loadData(sURLOrg);
        this.getOwnerComponent().setModel(oModelOrg, "orgs");
    
      }

    });
  }
);
