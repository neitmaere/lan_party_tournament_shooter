var appController = null;
sap.ui.define([ "sap/ui/core/mvc/Controller", "sap/m/MessageBox" ], function(Controller, MessageBox) {
  "use strict";

  return Controller.extend("lan.party.tournament.controller.App", {

    roundCounter : 0,

    onInit : function() {
      appController = this;
    },

    onAfterRendering : function() {
      this._createQuarterFinals();
      this._createSemiFinals();
      this._createLose();
      this._createThirdPlace();
      this._createLoseFinal();
      this._createFifthPlace();
      this._createFinal();
      this._createWinner();
    },

    _createQuarterFinals : function() {
      var quarterFinalRow = this.getView().byId("quarterFinalRow");

      for (var i = 1; i <= 8; i++) {
        var quarterFinalCell = new sap.ui.layout.BlockLayoutCell({
          title : "Viertelfinalteam " + i,
          titleAlignment : "Center"
        });

        for (var x = 0; x < 2; x++) {
          quarterFinalCell.addContent(new sap.m.StandardTile({
            title : "{ShooterTournament>/" + this.roundCounter + "/nickname}",
            icon : "sap-icon://customer-and-supplier",
            info : "{ShooterTournament>/" + this.roundCounter + "/result}",
            infoState : "{= ${ShooterTournament>/" + this.roundCounter + "/result} === 'WIN' ? 'Success' : 'Error'}",
            number : "{ShooterTournament>/" + this.roundCounter + "/gamerId}"
          }));
          this.roundCounter++;
        }
        quarterFinalRow.addContent(quarterFinalCell);
      }
    },

    _createSemiFinals : function() {
      var semiFinalRow = this.getView().byId("semiFinalRow");

      for (var i = 1; i <= 4; i++) {
        var semiFinalCell = new sap.ui.layout.BlockLayoutCell({
          title : "Halbfinalteam " + i,
          titleAlignment : "Center"
        });

        for (var x = 0; x < 2; x++) {
          semiFinalCell.addContent(new sap.m.StandardTile({
            title : "{ShooterTournament>/" + this.roundCounter + "/nickname}",
            icon : "sap-icon://customer-and-supplier",
            info : "{ShooterTournament>/" + this.roundCounter + "/result}",
            infoState : "{= ${ShooterTournament>/" + this.roundCounter + "/result} === 'WIN' ? 'Success' : 'Error'}",
            number : "{ShooterTournament>/" + this.roundCounter + "/gamerId}"
          }));
          this.roundCounter++;
        }
        semiFinalRow.addContent(semiFinalCell);
      }
    },
    
    _createLose : function() {
      var loseRow = this.getView().byId("loseRow");

      for (var i = 1; i <= 4; i++) {
        var loseCell = new sap.ui.layout.BlockLayoutCell({
          title : "Verliererteam " + i,
          titleAlignment : "Center"
        });

        for (var x = 0; x < 2; x++) {
          loseCell.addContent(new sap.m.StandardTile({
            title : "{ShooterTournament>/" + this.roundCounter + "/nickname}",
            icon : "sap-icon://customer-and-supplier",
            info : "{ShooterTournament>/" + this.roundCounter + "/result}",
            infoState : "{= ${ShooterTournament>/" + this.roundCounter + "/result} === 'WIN' ? 'Success' : 'Error'}",
            number : "{ShooterTournament>/" + this.roundCounter + "/gamerId}"
          }));
          this.roundCounter++;
        }
        loseRow.addContent(loseCell);
      }
    },

    _createThirdPlace : function() {
      var thirdPlaceRow = this.getView().byId("thirdPlaceRow");

      for (var i = 1; i <= 2; i++) {
        var thirdPlaceCell = new sap.ui.layout.BlockLayoutCell({
          title : "Spiel um Platz 3 Team " + i,
          titleAlignment : "Center"
        });

        for (var x = 0; x < 2; x++) {
          thirdPlaceCell.addContent(new sap.m.StandardTile({
            title : "{ShooterTournament>/" + this.roundCounter + "/nickname}",
            icon : "sap-icon://customer-and-supplier",
            info : "{ShooterTournament>/" + this.roundCounter + "/result}",
            infoState : "{= ${ShooterTournament>/" + this.roundCounter + "/result} === 'WIN' ? 'Success' : 'Error'}",
            number : "{ShooterTournament>/" + this.roundCounter + "/gamerId}"
          }));
          this.roundCounter++;
        }
        thirdPlaceRow.addContent(thirdPlaceCell);
      }
    },
    
    _createLoseFinal : function() {
      var loseFinalRow = this.getView().byId("loseFinalRow");

      for (var i = 1; i <= 2; i++) {
        var loseFinalCell = new sap.ui.layout.BlockLayoutCell({
          title : "Spiel um Platz 5 Team " + i,
          titleAlignment : "Center"
        });

        for (var x = 0; x < 2; x++) {
          loseFinalCell.addContent(new sap.m.StandardTile({
            title : "{ShooterTournament>/" + this.roundCounter + "/nickname}",
            icon : "sap-icon://customer-and-supplier",
            info : "{ShooterTournament>/" + this.roundCounter + "/result}",
            infoState : "{= ${ShooterTournament>/" + this.roundCounter + "/result} === 'WIN' ? 'Success' : 'Error'}",
            number : "{ShooterTournament>/" + this.roundCounter + "/gamerId}"
          }));
          this.roundCounter++;
        }
        loseFinalRow.addContent(loseFinalCell);
      }
    },

    _createFinal : function() {
      var finalRow = this.getView().byId("finalRow");

      for (var i = 1; i <= 2; i++) {
        var finalCell = new sap.ui.layout.BlockLayoutCell({
          title : "Finalteam " + i,
          titleAlignment : "Center"
        });

        for (var x = 0; x < 2; x++) {
          finalCell.addContent(new sap.m.StandardTile({
            title : "{ShooterTournament>/" + this.roundCounter + "/nickname}",
            icon : "sap-icon://customer-and-supplier",
            info : "{ShooterTournament>/" + this.roundCounter + "/result}",
            infoState : "{= ${ShooterTournament>/" + this.roundCounter + "/result} === 'WIN' ? 'Success' : 'Error'}",
            number : "{ShooterTournament>/" + this.roundCounter + "/gamerId}"
          }));
          this.roundCounter++;
        }
        finalRow.addContent(finalCell);
      }
    },

    _createWinner : function() {
      var winnerRow = this.getView().byId("winnerRow");

      for (var i = 1; i <= 1; i++) {
        var winnerCell = new sap.ui.layout.BlockLayoutCell({
          title : "Siegerteam",
          titleAlignment : "Center"
        });

        for (var x = 0; x < 2; x++) {
          winnerCell.addContent(new sap.m.StandardTile({
            title : "{ShooterTournament>/" + this.roundCounter + "/nickname}",
            icon : "sap-icon://customer-and-supplier",
            info : "{ShooterTournament>/" + this.roundCounter + "/result}",
            infoState : "{= ${ShooterTournament>/" + this.roundCounter + "/result} === 'WIN' ? 'Success' : 'Error'}",
            number : "{ShooterTournament>/" + this.roundCounter + "/gamerId}"
          }));
          this.roundCounter++;
        }
        winnerRow.addContent(winnerCell);
      }
    },
    _createFifthPlace : function() {
      var fifthPlaceRow = this.getView().byId("fifthPlaceRow");

      for (var i = 1; i <= 1; i++) {
        var fifthPlaceCell = new sap.ui.layout.BlockLayoutCell({
          title : "Platz 5 Team",
          titleAlignment : "Center"
        });

        for (var x = 0; x < 2; x++) {
          fifthPlaceCell.addContent(new sap.m.StandardTile({
            title : "{ShooterTournament>/" + this.roundCounter + "/nickname}",
            icon : "sap-icon://customer-and-supplier",
            info : "{ShooterTournament>/" + this.roundCounter + "/result}",
            infoState : "{= ${ShooterTournament>/" + this.roundCounter + "/result} === 'WIN' ? 'Success' : 'Error'}",
            number : "{ShooterTournament>/" + this.roundCounter + "/gamerId}"
          }));
          this.roundCounter++;
        }
        fifthPlaceRow.addContent(fifthPlaceCell);
      }
    },

    _refreshAllModels : function() {
      appController.getView().getModel("GamerPoints").loadData("../../../../php/GamerPoints.php");
      appController.getView().getModel("Shooter").loadData("../../../../php/Shooter.php");
      appController.getView().getModel("Sport").loadData("../../../../php/Sport.php");
      appController.getView().getModel("Strategy").loadData("../../../../php/Strategy.php");
      appController.getView().getModel("Racing1").loadData("../../../../php/Racing.php?round=1");
      appController.getView().getModel("Racing2").loadData("../../../../php/Racing.php?round=2");
      appController.getView().getModel("Racing3").loadData("../../../../php/Racing.php?round=3");
      appController.getView().getModel("Racing4").loadData("../../../../php/Racing.php?round=4");
      appController.getView().getModel("Survival1").loadData("../../../../php/Survival.php?round=1");
      appController.getView().getModel("Survival2").loadData("../../../../php/Survival.php?round=2");
      appController.getView().getModel("Survival3").loadData("../../../../php/Survival.php?round=3");
    }

  });

});