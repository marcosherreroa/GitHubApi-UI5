sap.ui.define(
  ["githubapiui5/controller/Main.controller", "sap/ui/model/json/JSONModel"],
  function (MainController, JSONModel) {
    "use strict";

    return MainController.extend("githubapiui5.controller.RepoPanel", {
      onPress: function (oEvent) {
        var oItem = oEvent.getSource();
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo("RouteRepoDetail", {
          repoPath: window.encodeURIComponent(
            oItem.getBindingContext("repos").getPath().substr(1)
          ),
        });
      },

      _growModel: function () {
        //Get old model
        var oModel = this.getOwnerComponent().getModel("repos");

        //Retrieve new data
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sUsername = this.getOwnerComponent()
          .getModel()
          .getProperty("/username");
        var sURLRepo = oBundle.getText("urlRepo", [sUsername, 1]);
        var oNewPage = new JSONModel();
        oNewPage.loadData(sURLRepo);

        //Add new data to the model
        oModel.setData(oNewPage.getData());
      },

      onUpdateStarted: function(oEvent){
        if(oEvent.getParameter("reason") != "Growing") return;
        this._growModel();
      }
    });
  }
);
