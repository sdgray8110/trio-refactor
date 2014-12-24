(function() {
    var meta = [{"name":"Patient Name","filter":"filter","filterType":"text","filterSource":"col1","filterVar":"patientFilterText","filterKeyupFunction":"setPatientNameFilterActive","filterCssClass":"filter-changed","filterPlaceholder":"Enter name","cssSortClass":"patientSortClass","columnType":"patient","dataField":"PatientName"},{"name":"Patient ID","filter":"filter","filterType":"text","filterSource":"col2","filterVar":"patientIdFilterText","filterKeyupFunction":"setPatientIdFilterActive","filterCssClass":"filter-changed","filterPlaceholder":"Enter Patient ID","cssSortClass":"patientIdSortClass","cssClass":"patientID","columnType":"single","dataField":"PatientId"},{"name":"Provider","filter":"filter","filterType":"text","filterSource":"col3","filterVar":"providerFilterText","filterKeyupFunction":"setProviderFilterActive","filterPlaceholder":"Enter Provider Name","filterCssClass":"filter-changed","filterClearFunction":"clearProviderFilter","cssSortClass":"provSortClass","cssClass":"provider","columnType":"single","dataField":"ProviderName"},{"name":"Pharmacy","filter":"filter","filterType":"dropdown","filterSource":"col3","filterVar":"pharmacyFilterText","filterPlaceholder":"headerPharmacyText","filterCssClass":"pharmacyClass","filterOpenCssClass":"pharmacyOpen","filterButtonClickFunction":"togglePharmacyOpen","filterItemClickFunction":"setPharmacyFilter","filterClearFunction":"clearPharmacyFilter","filterUniqueField":"Pharmacy","cssSortClass":"pharmacySortClass","cssClass":"pharmacy","columnType":"single","filterDataField":"PharmacyId","filterDrodownField":"PharmacyName","sourceFilterField":"PharmacyId","dataField":"Pharmacy"},{"name":"Tx Started","filter":"filterByRange","filterType":"daterange","filterSource":"daterange","filterVar":"selectedTxRange","filterMethod":"txDateFilter","filterCssClass":"txRangeChanged","filterOpenCssClass":"txRangeOpen","filterPlaceholder":"headerTxRangeText","filterButtonClickFunction":"toggleTxRangeOpen","filterItemClickFunction":"txDateFilter","cssSortClass":"txStartedSortClass","filterClearFunction":"clearTxDateFilter","columnType":"single","dataField":"TreatmentStartDate"},{"name":"Status","filter":"filterByStatus","filterType":"dropdown","filterSource":"col5","filterVar":"statusFilterText","filterPlaceholder":"headerStatusText","filterCssClass":"statusChanged","filterOpenCssClass":"statusOpen","filterButtonClickFunction":"toggleStatusOpen","filterItemClickFunction":"setStatusFilter","filterClearFunction":"clearStatusFilter","filterUniqueField":"Status","cssSortClass":"statusSortClass","columnType":"single","dataField":"Status"},{"name":"Action Required","filter":"filterByActions","filterType":"action","filterSource":"col7","filterVar":"actionRequiredFilterLabel","filterPlaceholder":"headerActionText","filterCssClass":"actionChanged","filterOpenCssClass":"actionOpen","filterButtonClickFunction":"toggleActionOpen","filterItemClickFunction":"setActionFilter","filterClearFunction":"setActionFilter","filterUniqueField":"RxStatusList[0].ActionStatus","cssSortClass":"actionSortClass","filterPhase":"Prior","filterSummaries":"reqAttnPriorToTherapyPatientSummaries","columnType":"multi","dataField":"ActionRequest","sourceFilterField":"ActionId","secondaryField":"Label"}],
        app = angular.module("trio", []);

    app.controller('trioSummaryTable', function($scope) {
        $scope.columns = meta;
    });

    app.directive('tableSort', function() {
        return {
            restrict: 'A',
            link: function(scope, elem, attrs, ctrl) {
                scope.column = scope.$parent.columns[scope.$index];
            }
        }
    });

    app.directive('tableFilter', function($compile) {
        return {
            restrict: 'AE',
            template: '<div class="table-filter"><span></span></div>',
            link: function(scope, elem, attrs, ctrl) {
                scope.column = scope.$parent.columns[scope.$index];
                var newEl = elem.find('span').attr(scope.column.filterType + '-filter', 'column');

                elem.find('span').replaceWith($compile(newEl)(scope));
            }
        };
    });

    app.directive('textFilter', function() {
        return {
            restrict: 'A',
            templateUrl: 'views/directives/textFilter.html',
            link: function(scope, elem, attrs, ctrl) {
                scope.column = scope.$parent.columns[scope.$index];
            }
        }
    });

    app.directive('dropdownFilter', function() {
        return {
            restrict: 'A',
            templateUrl: 'views/directives/textFilter.html',
            link: function(scope, elem, attrs, ctrl) {
                scope.column = scope.$parent.columns[scope.$index];
            }
        }
    });

    app.directive('daterangeFilter', function() {
        return {
            restrict: 'A',
            templateUrl: 'views/directives/textFilter.html',
            link: function(scope, elem, attrs, ctrl) {
                scope.column = scope.$parent.columns[scope.$index];
            }
        }
    });

    app.directive('actionFilter', function() {
        return {
            restrict: 'A',
            templateUrl: 'views/directives/textFilter.html',
            link: function(scope, elem, attrs, ctrl) {
                scope.column = scope.$parent.columns[scope.$index];
            }
        }
    });
})();