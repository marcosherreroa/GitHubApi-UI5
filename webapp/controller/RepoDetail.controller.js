sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/ui/core/routing/History",
  ],
  function (Controller, UIComponent, History) {
    "use strict";

    return Controller.extend("githubapiui5.controller.RepoDetail", {
      onInit: function () {
        var oRouter = UIComponent.getRouterFor(this);
        oRouter
          .getRoute("RouteRepoDetail")
          .attachPatternMatched(this._onObjectMatched, this);
      },
      _onObjectMatched: function (oEvent) {
        this.getView().bindElement({
          path:
            "/" +
            window.decodeURIComponent(
              oEvent.getParameter("arguments").repoPath
            ),
          model: "repos",
        });
      },
      onNavBack: function () {
        var oRouter = UIComponent.getRouterFor(this);
        oRouter.navTo("RouteMain", {});
      },
    });
  }
);
