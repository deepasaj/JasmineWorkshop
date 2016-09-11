App.Page.Purchasing.Model = Backbone.Model.extend({
    hasAtleastOneBeneficiary: function () {
        return this.get('entity_ids').length > 0;
    }
});
//===================================================================
App.Page.Composite.Article = Backbone.Model.extend({});
App.Page.Composite.Articles = Backbone.Collection.extend({
    model: App.Page.Composite.Article,
    getTotalConstituentQuantity: function () {
        return _.reduce(this.models, function (memo, value) {
            return memo + value.get('quantity');
        }, 0)
    }
});
//===================================================================
App.Model.DistributionCenter = Backbone.Model.extend({});
App.Collection.DistributionCenters = Backbone.Collection.extend({
    model: App.Model.DistributionCenter,
    getRotationClass: function () {
        return _.compact(this.pluck('rotation_class'))[0];
    }
});
//===================================================================
App.Util = {
    formatDateToYYYY_MM_DD: function (date) {
        if (!date) return null;
        date = date instanceof Date ? date : Date.parseExact(date, 'dd-MM-yyyy');
        return date.toString('yyyy-MM-dd');
    }
};
//===================================================================
App.Alerts.Model = Backbone.Model.extend({
    getAllAlertTypes: function () {
        var resultJson = this.get("resultJson");
        var allAlertTypes = _.pluck(_.values(resultJson), "alert_type");
        return _.uniq(_.flatten(allAlertTypes)).sort();
    }
});
//===================================================================
App.LabelledMarker.createMarker = function (data) {
    return new L.Marker(new L.LatLng(data.latitude(), data.longitude()), {
        title: data.name(),
        icon: L.icon(data.icon())
    });
};
//===================================================================
App.View.StoreGroupWidget = Backbone.View.extend({
    saveExceptions: function () {
        throw ("method not implemented");
    }
});
App.View.AssortmentStoreGroupWidget = App.View.StoreGroupWidget.extend({});
//===================================================================