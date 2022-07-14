(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DataSourceSettingsPage"],{

/***/ "./public/app/core/components/connectWithCleanUp.tsx":
/*!***********************************************************!*\
  !*** ./public/app/core/components/connectWithCleanUp.tsx ***!
  \***********************************************************/
/*! exports provided: connectWithCleanUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectWithCleanUp", function() { return connectWithCleanUp; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_cleanUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/cleanUp */ "./public/app/core/actions/cleanUp.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);





var connectWithCleanUp = function (mapStateToProps, mapDispatchToProps, stateSelector) { return function (Component) {
    var ConnectedComponent = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps
    // @ts-ignore
    )(Component);
    var ConnectedComponentWithCleanUp = function (props) {
        var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
        Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
            return function cleanUp() {
                dispatch(Object(_actions_cleanUp__WEBPACK_IMPORTED_MODULE_2__["cleanUpAction"])({ stateSelector: stateSelector }));
            };
        }, []);
        // @ts-ignore
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ConnectedComponent, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props));
    };
    ConnectedComponentWithCleanUp.displayName = "ConnectWithCleanUp(" + ConnectedComponent.displayName + ")";
    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(ConnectedComponentWithCleanUp, Component);
    return ConnectedComponentWithCleanUp;
}; };


/***/ }),

/***/ "./public/app/features/datasources/settings/BasicSettings.tsx":
/*!********************************************************************!*\
  !*** ./public/app/features/datasources/settings/BasicSettings.tsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_e2e__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/e2e */ "./packages/grafana-e2e/src/index.ts");



var BasicSettings = function (_a) {
    var dataSourceName = _a.dataSourceName, isDefault = _a.isDefault, onDefaultChange = _a.onDefaultChange, onNameChange = _a.onNameChange;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form-group", "aria-label": "Datasource settings page basic settings" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form-inline" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form max-width-30", style: { marginRight: '3px' } },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], { tooltip: 'The name is used when you select the data source in panels. The Default data source is ' +
                        'preselected in new panels.' }, "Name"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Input"], { className: "gf-form-input max-width-23", type: "text", value: dataSourceName, placeholder: "Name", onChange: function (event) { return onNameChange(event.target.value); }, required: true, "aria-label": _grafana_e2e__WEBPACK_IMPORTED_MODULE_2__["e2e"].pages.DataSource.selectors.name })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["Switch"], { label: "Default", checked: isDefault, onChange: function (event) {
                    // @ts-ignore
                    onDefaultChange(event.target.checked);
                } }))));
};
/* harmony default export */ __webpack_exports__["default"] = (BasicSettings);


/***/ }),

/***/ "./public/app/features/datasources/settings/ButtonRow.tsx":
/*!****************************************************************!*\
  !*** ./public/app/features/datasources/settings/ButtonRow.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_e2e__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/e2e */ "./packages/grafana-e2e/src/index.ts");
/* harmony import */ var app_core_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config */ "./public/app/core/config.ts");



var ButtonRow = function (_a) {
    var isReadOnly = _a.isReadOnly, onDelete = _a.onDelete, onSubmit = _a.onSubmit, onTest = _a.onTest;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "gf-form-button-row" },
        !isReadOnly && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { type: "submit", className: "btn btn-primary", disabled: isReadOnly, onClick: function (event) { return onSubmit(event); }, "aria-label": _grafana_e2e__WEBPACK_IMPORTED_MODULE_1__["e2e"].pages.DataSource.selectors.saveAndTest }, "Save & Test")),
        isReadOnly && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { type: "submit", className: "btn btn-success", onClick: onTest }, "Test")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { type: "button", className: "btn btn-danger", disabled: isReadOnly, onClick: onDelete, "aria-label": _grafana_e2e__WEBPACK_IMPORTED_MODULE_1__["e2e"].pages.DataSource.selectors.delete }, "Delete"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { className: "btn btn-inverse", href: app_core_config__WEBPACK_IMPORTED_MODULE_2__["default"].appSubUrl + "/datasources" }, "Back")));
};
/* harmony default export */ __webpack_exports__["default"] = (ButtonRow);


/***/ }),

/***/ "./public/app/features/datasources/settings/DataSourceSettingsPage.tsx":
/*!*****************************************************************************!*\
  !*** ./public/app/features/datasources/settings/DataSourceSettingsPage.tsx ***!
  \*****************************************************************************/
/*! exports provided: DataSourceSettingsPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSourceSettingsPage", function() { return DataSourceSettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-loader */ "./node_modules/react-hot-loader/index.js");
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isString */ "./node_modules/lodash/isString.js");
/* harmony import */ var lodash_isString__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isString__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_e2e__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grafana/e2e */ "./packages/grafana-e2e/src/index.ts");
/* harmony import */ var app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/core/components/Page/Page */ "./public/app/core/components/Page/Page.tsx");
/* harmony import */ var _PluginSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PluginSettings */ "./public/app/features/datasources/settings/PluginSettings.tsx");
/* harmony import */ var _BasicSettings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./BasicSettings */ "./public/app/features/datasources/settings/BasicSettings.tsx");
/* harmony import */ var _ButtonRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ButtonRow */ "./public/app/features/datasources/settings/ButtonRow.tsx");
/* harmony import */ var app_core_app_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/core/app_events */ "./public/app/core/app_events.ts");
/* harmony import */ var _state_selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../state/selectors */ "./public/app/features/datasources/state/selectors.ts");
/* harmony import */ var _state_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../state/actions */ "./public/app/features/datasources/state/actions.ts");
/* harmony import */ var app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/core/selectors/navModel */ "./public/app/core/selectors/navModel.ts");
/* harmony import */ var app_core_selectors_location__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/core/selectors/location */ "./public/app/core/selectors/location.ts");
/* harmony import */ var app_types___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/types/ */ "./public/app/types/index.ts");
/* harmony import */ var _state_navModel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../state/navModel */ "./public/app/features/datasources/state/navModel.ts");
/* harmony import */ var app_features_plugins_PluginStateInfo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/features/plugins/PluginStateInfo */ "./public/app/features/plugins/PluginStateInfo.tsx");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../state/reducers */ "./public/app/features/datasources/state/reducers.ts");
/* harmony import */ var app_core_components_connectWithCleanUp__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/core/components/connectWithCleanUp */ "./public/app/core/components/connectWithCleanUp.tsx");

// Libraries




// Components




// Services & Utils

// Actions & selectors




// Types





var DataSourceSettingsPage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DataSourceSettingsPage, _super);
    function DataSourceSettingsPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onSubmit = function (evt) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        evt.preventDefault();
                        return [4 /*yield*/, this.props.updateDataSource(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.props.dataSource))];
                    case 1:
                        _a.sent();
                        this.testDataSource();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.onTest = function (evt) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                evt.preventDefault();
                this.testDataSource();
                return [2 /*return*/];
            });
        }); };
        _this.onDelete = function () {
            app_core_app_events__WEBPACK_IMPORTED_MODULE_9__["default"].emit(app_types___WEBPACK_IMPORTED_MODULE_14__["CoreEvents"].showConfirmModal, {
                title: 'Delete',
                text: 'Are you sure you want to delete this data source?',
                yesText: 'Delete',
                icon: 'fa-trash',
                onConfirm: function () {
                    _this.confirmDelete();
                },
            });
        };
        _this.confirmDelete = function () {
            _this.props.deleteDataSource();
        };
        _this.onModelChange = function (dataSource) {
            _this.props.dataSourceLoaded(dataSource);
        };
        return _this;
    }
    DataSourceSettingsPage.prototype.componentDidMount = function () {
        var _a = this.props, initDataSourceSettings = _a.initDataSourceSettings, pageId = _a.pageId;
        initDataSourceSettings(pageId);
    };
    DataSourceSettingsPage.prototype.isReadOnly = function () {
        return this.props.dataSource.readOnly === true;
    };
    DataSourceSettingsPage.prototype.renderIsReadOnlyMessage = function () {
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "grafana-info-box span8" }, "This datasource was added by config and cannot be modified using the UI. Please contact your server admin to update this datasource."));
    };
    DataSourceSettingsPage.prototype.testDataSource = function () {
        var _a = this.props, dataSource = _a.dataSource, testDataSource = _a.testDataSource;
        testDataSource(dataSource.name);
    };
    Object.defineProperty(DataSourceSettingsPage.prototype, "hasDataSource", {
        get: function () {
            return this.props.dataSource.id > 0;
        },
        enumerable: true,
        configurable: true
    });
    DataSourceSettingsPage.prototype.renderLoadError = function (loadError) {
        var showDelete = false;
        var msg = loadError.toString();
        if (loadError.data) {
            if (loadError.data.message) {
                msg = loadError.data.message;
            }
        }
        else if (lodash_isString__WEBPACK_IMPORTED_MODULE_3___default()(loadError)) {
            showDelete = true;
        }
        var node = {
            text: msg,
            subTitle: 'Data Source Error',
            icon: 'fa fa-fw fa-warning',
        };
        var nav = {
            node: node,
            main: node,
        };
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"], { navModel: nav },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"].Contents, null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "gf-form-button-row" },
                        showDelete && (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { type: "submit", className: "btn btn-danger", onClick: this.onDelete }, "Delete")),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", { className: "btn btn-inverse", href: "datasources" }, "Back"))))));
    };
    DataSourceSettingsPage.prototype.renderConfigPageBody = function (page) {
        var e_1, _a;
        var plugin = this.props.plugin;
        if (!plugin || !plugin.configPages) {
            return null; // still loading
        }
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(plugin.configPages), _c = _b.next(); !_c.done; _c = _b.next()) {
                var p = _c.value;
                if (p.id === page) {
                    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(p.body, { plugin: plugin, query: this.props.query });
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            "Page Not Found: ",
            page);
    };
    DataSourceSettingsPage.prototype.renderSettings = function () {
        var _this = this;
        var _a = this.props, dataSourceMeta = _a.dataSourceMeta, setDataSourceName = _a.setDataSourceName, setIsDefault = _a.setIsDefault, dataSource = _a.dataSource, testingStatus = _a.testingStatus, plugin = _a.plugin;
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", { onSubmit: this.onSubmit },
            this.isReadOnly() && this.renderIsReadOnlyMessage(),
            dataSourceMeta.state && (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "gf-form" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", { className: "gf-form-label width-10" }, "Plugin state"),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", { className: "gf-form-label gf-form-label--transparent" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(app_features_plugins_PluginStateInfo__WEBPACK_IMPORTED_MODULE_16__["default"], { state: dataSourceMeta.state })))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BasicSettings__WEBPACK_IMPORTED_MODULE_7__["default"], { dataSourceName: dataSource.name, isDefault: dataSource.isDefault, onDefaultChange: function (state) { return setIsDefault(state); }, onNameChange: function (name) { return setDataSourceName(name); } }),
            plugin && (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PluginSettings__WEBPACK_IMPORTED_MODULE_6__["PluginSettings"], { plugin: plugin, dataSource: dataSource, dataSourceMeta: dataSourceMeta, onModelChange: this.onModelChange })),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "gf-form-group" }, testingStatus && testingStatus.message && (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "alert-" + testingStatus.status + " alert", "aria-label": _grafana_e2e__WEBPACK_IMPORTED_MODULE_4__["e2e"].pages.DataSource.selectors.alert },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "alert-icon" }, testingStatus.status === 'error' ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fa fa-exclamation-triangle" })) : (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", { className: "fa fa-check" }))),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "alert-body" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "alert-title", "aria-label": _grafana_e2e__WEBPACK_IMPORTED_MODULE_4__["e2e"].pages.DataSource.selectors.alertMessage }, testingStatus.message))))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ButtonRow__WEBPACK_IMPORTED_MODULE_8__["default"], { onSubmit: function (event) { return _this.onSubmit(event); }, isReadOnly: this.isReadOnly(), onDelete: this.onDelete, onTest: function (event) { return _this.onTest(event); } })));
    };
    DataSourceSettingsPage.prototype.render = function () {
        var _a = this.props, navModel = _a.navModel, page = _a.page, loadError = _a.loadError;
        if (loadError) {
            return this.renderLoadError(loadError);
        }
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"], { navModel: navModel },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(app_core_components_Page_Page__WEBPACK_IMPORTED_MODULE_5__["default"].Contents, { isLoading: !this.hasDataSource }, this.hasDataSource && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, page ? this.renderConfigPageBody(page) : this.renderSettings()))));
    };
    return DataSourceSettingsPage;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));

function mapStateToProps(state) {
    var pageId = Object(app_core_selectors_location__WEBPACK_IMPORTED_MODULE_13__["getRouteParamsId"])(state.location);
    var dataSource = Object(_state_selectors__WEBPACK_IMPORTED_MODULE_10__["getDataSource"])(state.dataSources, pageId);
    var page = state.location.query.page;
    var _a = state.dataSourceSettings, plugin = _a.plugin, loadError = _a.loadError, testingStatus = _a.testingStatus;
    return {
        navModel: Object(app_core_selectors_navModel__WEBPACK_IMPORTED_MODULE_12__["getNavModel"])(state.navIndex, page ? "datasource-page-" + page : "datasource-settings-" + pageId, Object(_state_navModel__WEBPACK_IMPORTED_MODULE_15__["getDataSourceLoadingNav"])('settings')),
        dataSource: Object(_state_selectors__WEBPACK_IMPORTED_MODULE_10__["getDataSource"])(state.dataSources, pageId),
        dataSourceMeta: Object(_state_selectors__WEBPACK_IMPORTED_MODULE_10__["getDataSourceMeta"])(state.dataSources, dataSource.type),
        pageId: pageId,
        query: state.location.query,
        page: page,
        plugin: plugin,
        loadError: loadError,
        testingStatus: testingStatus,
    };
}
var mapDispatchToProps = {
    deleteDataSource: _state_actions__WEBPACK_IMPORTED_MODULE_11__["deleteDataSource"],
    loadDataSource: _state_actions__WEBPACK_IMPORTED_MODULE_11__["loadDataSource"],
    setDataSourceName: _state_reducers__WEBPACK_IMPORTED_MODULE_17__["setDataSourceName"],
    updateDataSource: _state_actions__WEBPACK_IMPORTED_MODULE_11__["updateDataSource"],
    setIsDefault: _state_reducers__WEBPACK_IMPORTED_MODULE_17__["setIsDefault"],
    dataSourceLoaded: _state_reducers__WEBPACK_IMPORTED_MODULE_17__["dataSourceLoaded"],
    initDataSourceSettings: _state_actions__WEBPACK_IMPORTED_MODULE_11__["initDataSourceSettings"],
    testDataSource: _state_actions__WEBPACK_IMPORTED_MODULE_11__["testDataSource"],
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["hot"])(module)(Object(app_core_components_connectWithCleanUp__WEBPACK_IMPORTED_MODULE_18__["connectWithCleanUp"])(mapStateToProps, mapDispatchToProps, function (state) { return state.dataSourceSettings; })(DataSourceSettingsPage)));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./public/app/features/datasources/settings/PluginSettings.tsx":
/*!*********************************************************************!*\
  !*** ./public/app/features/datasources/settings/PluginSettings.tsx ***!
  \*********************************************************************/
/*! exports provided: PluginSettings, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginSettings", function() { return PluginSettings; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/runtime */ "./packages/grafana-runtime/src/index.ts");




var PluginSettings = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PluginSettings, _super);
    function PluginSettings(props) {
        var _this = _super.call(this, props) || this;
        _this.onModelChanged = function (dataSource) {
            _this.props.onModelChange(dataSource);
        };
        _this.scopeProps = {
            ctrl: { datasourceMeta: props.dataSourceMeta, current: lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(props.dataSource) },
            onModelChanged: _this.onModelChanged,
        };
        _this.onModelChanged = _this.onModelChanged.bind(_this);
        return _this;
    }
    PluginSettings.prototype.componentDidMount = function () {
        var plugin = this.props.plugin;
        if (!this.element) {
            return;
        }
        if (!plugin.components.ConfigEditor) {
            // React editor is not specified, let's render angular editor
            // How to apprach this better? Introduce ReactDataSourcePlugin interface and typeguard it here?
            var loader = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_3__["getAngularLoader"])();
            var template = '<plugin-component type="datasource-config-ctrl" />';
            this.component = loader.load(this.element, this.scopeProps, template);
        }
    };
    PluginSettings.prototype.componentDidUpdate = function (prevProps) {
        var plugin = this.props.plugin;
        if (!plugin.components.ConfigEditor && this.props.dataSource !== prevProps.dataSource) {
            this.scopeProps.ctrl.current = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.cloneDeep(this.props.dataSource);
            this.component.digest();
        }
    };
    PluginSettings.prototype.componentWillUnmount = function () {
        if (this.component) {
            this.component.destroy();
        }
    };
    PluginSettings.prototype.render = function () {
        var _this = this;
        var _a = this.props, plugin = _a.plugin, dataSource = _a.dataSource;
        if (!plugin) {
            return null;
        }
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { ref: function (element) { return (_this.element = element); } }, plugin.components.ConfigEditor &&
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(plugin.components.ConfigEditor, {
                options: dataSource,
                onOptionsChange: this.onModelChanged,
            })));
    };
    return PluginSettings;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]));

/* harmony default export */ __webpack_exports__["default"] = (PluginSettings);


/***/ }),

/***/ "./public/app/features/plugins/PluginStateInfo.tsx":
/*!*********************************************************!*\
  !*** ./public/app/features/plugins/PluginStateInfo.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "./packages/grafana-ui/src/index.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/data */ "./packages/grafana-data/src/index.ts");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");





function getPluginStateInfoText(state) {
    switch (state) {
        case _grafana_data__WEBPACK_IMPORTED_MODULE_3__["PluginState"].alpha:
            return 'Alpha Plugin: This plugin is a work in progress and updates may include breaking changes';
        case _grafana_data__WEBPACK_IMPORTED_MODULE_3__["PluginState"].beta:
            return 'Beta Plugin: There could be bugs and minor breaking changes to this plugin';
    }
    return null;
}
var PluginStateinfo = function (props) {
    var text = getPluginStateInfoText(props.state);
    if (!text) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["AlphaNotice"], { state: props.state, text: text, className: Object(emotion__WEBPACK_IMPORTED_MODULE_4__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        margin-left: 16px;\n      "], ["\n        margin-left: 16px;\n      "]))) }));
};
/* harmony default export */ __webpack_exports__["default"] = (PluginStateinfo);
var templateObject_1;


/***/ })

}]);
//# sourceMappingURL=DataSourceSettingsPage.ec7deb84f65ee765b2e6.js.map