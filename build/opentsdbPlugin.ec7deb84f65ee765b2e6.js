(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["opentsdbPlugin"],{

/***/ "./public/app/plugins/datasource/opentsdb/components/ConfigEditor.tsx":
/*!****************************************************************************!*\
  !*** ./public/app/plugins/datasource/opentsdb/components/ConfigEditor.tsx ***!
  \****************************************************************************/
/*! exports provided: ConfigEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigEditor", function() { return ConfigEditor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/ui */ "./packages/grafana-ui/src/index.ts");
/* harmony import */ var _OpenTsdbDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OpenTsdbDetails */ "./public/app/plugins/datasource/opentsdb/components/OpenTsdbDetails.tsx");



var ConfigEditor = function (props) {
    var options = props.options, onOptionsChange = props.onOptionsChange;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_1__["DataSourceHttpSettings"], { defaultUrl: "http://localhost:4242", dataSourceConfig: options, onChange: onOptionsChange }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OpenTsdbDetails__WEBPACK_IMPORTED_MODULE_2__["OpenTsdbDetails"], { value: options, onChange: onOptionsChange })));
};


/***/ }),

/***/ "./public/app/plugins/datasource/opentsdb/components/OpenTsdbDetails.tsx":
/*!*******************************************************************************!*\
  !*** ./public/app/plugins/datasource/opentsdb/components/OpenTsdbDetails.tsx ***!
  \*******************************************************************************/
/*! exports provided: OpenTsdbDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenTsdbDetails", function() { return OpenTsdbDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "./packages/grafana-ui/src/index.ts");



var tsdbVersions = [
    { label: '<=2.1', value: 1 },
    { label: '==2.2', value: 2 },
    { label: '==2.3', value: 3 },
];
var tsdbResolutions = [
    { label: 'second', value: 1 },
    { label: 'millisecond', value: 2 },
];
var OpenTsdbDetails = function (props) {
    var _a, _b, _c;
    var onChange = props.onChange, value = props.value;
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", null, "OpenTSDB settings"),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "gf-form" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], { width: 7 }, "Version"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], { options: tsdbVersions, value: (_a = tsdbVersions.find(function (version) { return version.value === value.jsonData.tsdbVersion; }), (_a !== null && _a !== void 0 ? _a : tsdbVersions[0])), onChange: onSelectChangeHandler('tsdbVersion', value, onChange) })),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "gf-form" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], { width: 7 }, "Resolution"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Select"], { options: tsdbResolutions, value: (_b = tsdbResolutions.find(function (resolution) { return resolution.value === value.jsonData.tsdbResolution; }), (_b !== null && _b !== void 0 ? _b : tsdbResolutions[0])), onChange: onSelectChangeHandler('tsdbResolution', value, onChange) })),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "gf-form" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], { width: 7 }, "Lookup Limit"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Input"], { type: "number", value: (_c = value.jsonData.lookupLimit, (_c !== null && _c !== void 0 ? _c : 1000)), onChange: onInputChangeHandler('lookupLimit', value, onChange) }))));
};
var onSelectChangeHandler = function (key, value, onChange) { return function (newValue) {
    var _a;
    onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, value), { jsonData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, value.jsonData), (_a = {}, _a[key] = newValue.value, _a)) }));
}; };
var onInputChangeHandler = function (key, value, onChange) { return function (event) {
    var _a;
    onChange(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, value), { jsonData: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, value.jsonData), (_a = {}, _a[key] = event.currentTarget.value, _a)) }));
}; };


/***/ }),

/***/ "./public/app/plugins/datasource/opentsdb/datasource.ts":
/*!**************************************************************!*\
  !*** ./public/app/plugins/datasource/opentsdb/datasource.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular */ "./node_modules/angular/index.js");
/* harmony import */ var angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/data */ "./packages/grafana-data/src/index.ts");




var OpenTsDatasource = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OpenTsDatasource, _super);
    /** @ngInject */
    function OpenTsDatasource(instanceSettings, backendSrv, templateSrv) {
        var _this = _super.call(this, instanceSettings) || this;
        _this.backendSrv = backendSrv;
        _this.templateSrv = templateSrv;
        _this.type = 'opentsdb';
        _this.url = instanceSettings.url;
        _this.name = instanceSettings.name;
        _this.withCredentials = instanceSettings.withCredentials;
        _this.basicAuth = instanceSettings.basicAuth;
        instanceSettings.jsonData = instanceSettings.jsonData || {};
        _this.tsdbVersion = instanceSettings.jsonData.tsdbVersion || 1;
        _this.tsdbResolution = instanceSettings.jsonData.tsdbResolution || 1;
        _this.lookupLimit = instanceSettings.jsonData.lookupLimit || 1000;
        _this.tagKeys = {};
        _this.aggregatorsPromise = null;
        _this.filterTypesPromise = null;
        return _this;
    }
    // Called once per panel (graph)
    OpenTsDatasource.prototype.query = function (options) {
        var _this = this;
        var start = this.convertToTSDBTime(options.rangeRaw.from, false, options.timezone);
        var end = this.convertToTSDBTime(options.rangeRaw.to, true, options.timezone);
        var qs = [];
        lodash__WEBPACK_IMPORTED_MODULE_2___default.a.each(options.targets, function (target) {
            if (!target.metric) {
                return;
            }
            qs.push(_this.convertTargetToQuery(target, options, _this.tsdbVersion));
        });
        var queries = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.compact(qs);
        // No valid targets, return the empty result to save a round trip.
        if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(queries)) {
            return Promise.resolve({ data: [] });
        }
        var groupByTags = {};
        lodash__WEBPACK_IMPORTED_MODULE_2___default.a.each(queries, function (query) {
            if (query.filters && query.filters.length > 0) {
                lodash__WEBPACK_IMPORTED_MODULE_2___default.a.each(query.filters, function (val) {
                    groupByTags[val.tagk] = true;
                });
            }
            else {
                lodash__WEBPACK_IMPORTED_MODULE_2___default.a.each(query.tags, function (val, key) {
                    groupByTags[key] = true;
                });
            }
        });
        options.targets = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.filter(options.targets, function (query) {
            return query.hide !== true;
        });
        return this.performTimeSeriesQuery(queries, start, end).then(function (response) {
            var metricToTargetMapping = _this.mapMetricsToTargets(response.data, options, _this.tsdbVersion);
            var result = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(response.data, function (metricData, index) {
                index = metricToTargetMapping[index];
                if (index === -1) {
                    index = 0;
                }
                _this._saveTagKeys(metricData);
                return _this.transformMetricData(metricData, groupByTags, options.targets[index], options, _this.tsdbResolution);
            });
            return { data: result };
        });
    };
    OpenTsDatasource.prototype.annotationQuery = function (options) {
        var start = this.convertToTSDBTime(options.rangeRaw.from, false, options.timezone);
        var end = this.convertToTSDBTime(options.rangeRaw.to, true, options.timezone);
        var qs = [];
        var eventList = [];
        qs.push({ aggregator: 'sum', metric: options.annotation.target });
        var queries = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.compact(qs);
        return this.performTimeSeriesQuery(queries, start, end).then(function (results) {
            if (results.data[0]) {
                var annotationObject = results.data[0].annotations;
                if (options.annotation.isGlobal) {
                    annotationObject = results.data[0].globalAnnotations;
                }
                if (annotationObject) {
                    lodash__WEBPACK_IMPORTED_MODULE_2___default.a.each(annotationObject, function (annotation) {
                        var event = {
                            text: annotation.description,
                            time: Math.floor(annotation.startTime) * 1000,
                            annotation: options.annotation,
                        };
                        eventList.push(event);
                    });
                }
            }
            return eventList;
        });
    };
    OpenTsDatasource.prototype.targetContainsTemplate = function (target) {
        if (target.filters && target.filters.length > 0) {
            for (var i = 0; i < target.filters.length; i++) {
                if (this.templateSrv.variableExists(target.filters[i].filter)) {
                    return true;
                }
            }
        }
        if (target.tags && Object.keys(target.tags).length > 0) {
            for (var tagKey in target.tags) {
                if (this.templateSrv.variableExists(target.tags[tagKey])) {
                    return true;
                }
            }
        }
        return false;
    };
    OpenTsDatasource.prototype.performTimeSeriesQuery = function (queries, start, end) {
        var msResolution = false;
        if (this.tsdbResolution === 2) {
            msResolution = true;
        }
        var reqBody = {
            start: start,
            queries: queries,
            msResolution: msResolution,
            globalAnnotations: true,
        };
        if (this.tsdbVersion === 3) {
            reqBody.showQuery = true;
        }
        // Relative queries (e.g. last hour) don't include an end time
        if (end) {
            reqBody.end = end;
        }
        var options = {
            method: 'POST',
            url: this.url + '/api/query',
            data: reqBody,
        };
        this._addCredentialOptions(options);
        return this.backendSrv.datasourceRequest(options);
    };
    OpenTsDatasource.prototype.suggestTagKeys = function (metric) {
        return Promise.resolve(this.tagKeys[metric] || []);
    };
    OpenTsDatasource.prototype._saveTagKeys = function (metricData) {
        var tagKeys = Object.keys(metricData.tags);
        lodash__WEBPACK_IMPORTED_MODULE_2___default.a.each(metricData.aggregateTags, function (tag) {
            tagKeys.push(tag);
        });
        this.tagKeys[metricData.metric] = tagKeys;
    };
    OpenTsDatasource.prototype._performSuggestQuery = function (query, type) {
        return this._get('/api/suggest', { type: type, q: query, max: this.lookupLimit }).then(function (result) {
            return result.data;
        });
    };
    OpenTsDatasource.prototype._performMetricKeyValueLookup = function (metric, keys) {
        if (!metric || !keys) {
            return Promise.resolve([]);
        }
        var keysArray = keys.split(',').map(function (key) {
            return key.trim();
        });
        var key = keysArray[0];
        var keysQuery = key + '=*';
        if (keysArray.length > 1) {
            keysQuery += ',' + keysArray.splice(1).join(',');
        }
        var m = metric + '{' + keysQuery + '}';
        return this._get('/api/search/lookup', { m: m, limit: this.lookupLimit }).then(function (result) {
            result = result.data.results;
            var tagvs = [];
            lodash__WEBPACK_IMPORTED_MODULE_2___default.a.each(result, function (r) {
                if (tagvs.indexOf(r.tags[key]) === -1) {
                    tagvs.push(r.tags[key]);
                }
            });
            return tagvs;
        });
    };
    OpenTsDatasource.prototype._performMetricKeyLookup = function (metric) {
        if (!metric) {
            return Promise.resolve([]);
        }
        return this._get('/api/search/lookup', { m: metric, limit: 1000 }).then(function (result) {
            result = result.data.results;
            var tagks = [];
            lodash__WEBPACK_IMPORTED_MODULE_2___default.a.each(result, function (r) {
                lodash__WEBPACK_IMPORTED_MODULE_2___default.a.each(r.tags, function (tagv, tagk) {
                    if (tagks.indexOf(tagk) === -1) {
                        tagks.push(tagk);
                    }
                });
            });
            return tagks;
        });
    };
    OpenTsDatasource.prototype._get = function (relativeUrl, params) {
        var options = {
            method: 'GET',
            url: this.url + relativeUrl,
            params: params,
        };
        this._addCredentialOptions(options);
        return this.backendSrv.datasourceRequest(options);
    };
    OpenTsDatasource.prototype._addCredentialOptions = function (options) {
        if (this.basicAuth || this.withCredentials) {
            options.withCredentials = true;
        }
        if (this.basicAuth) {
            options.headers = { Authorization: this.basicAuth };
        }
    };
    OpenTsDatasource.prototype.metricFindQuery = function (query) {
        if (!query) {
            return Promise.resolve([]);
        }
        var interpolated;
        try {
            interpolated = this.templateSrv.replace(query, {}, 'distributed');
        }
        catch (err) {
            return Promise.reject(err);
        }
        var responseTransform = function (result) {
            return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(result, function (value) {
                return { text: value };
            });
        };
        var metricsRegex = /metrics\((.*)\)/;
        var tagNamesRegex = /tag_names\((.*)\)/;
        var tagValuesRegex = /tag_values\((.*?),\s?(.*)\)/;
        var tagNamesSuggestRegex = /suggest_tagk\((.*)\)/;
        var tagValuesSuggestRegex = /suggest_tagv\((.*)\)/;
        var metricsQuery = interpolated.match(metricsRegex);
        if (metricsQuery) {
            return this._performSuggestQuery(metricsQuery[1], 'metrics').then(responseTransform);
        }
        var tagNamesQuery = interpolated.match(tagNamesRegex);
        if (tagNamesQuery) {
            return this._performMetricKeyLookup(tagNamesQuery[1]).then(responseTransform);
        }
        var tagValuesQuery = interpolated.match(tagValuesRegex);
        if (tagValuesQuery) {
            return this._performMetricKeyValueLookup(tagValuesQuery[1], tagValuesQuery[2]).then(responseTransform);
        }
        var tagNamesSuggestQuery = interpolated.match(tagNamesSuggestRegex);
        if (tagNamesSuggestQuery) {
            return this._performSuggestQuery(tagNamesSuggestQuery[1], 'tagk').then(responseTransform);
        }
        var tagValuesSuggestQuery = interpolated.match(tagValuesSuggestRegex);
        if (tagValuesSuggestQuery) {
            return this._performSuggestQuery(tagValuesSuggestQuery[1], 'tagv').then(responseTransform);
        }
        return Promise.resolve([]);
    };
    OpenTsDatasource.prototype.testDatasource = function () {
        return this._performSuggestQuery('cpu', 'metrics').then(function () {
            return { status: 'success', message: 'Data source is working' };
        });
    };
    OpenTsDatasource.prototype.getAggregators = function () {
        if (this.aggregatorsPromise) {
            return this.aggregatorsPromise;
        }
        this.aggregatorsPromise = this._get('/api/aggregators').then(function (result) {
            if (result.data && lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isArray(result.data)) {
                return result.data.sort();
            }
            return [];
        });
        return this.aggregatorsPromise;
    };
    OpenTsDatasource.prototype.getFilterTypes = function () {
        if (this.filterTypesPromise) {
            return this.filterTypesPromise;
        }
        this.filterTypesPromise = this._get('/api/config/filters').then(function (result) {
            if (result.data) {
                return Object.keys(result.data).sort();
            }
            return [];
        });
        return this.filterTypesPromise;
    };
    OpenTsDatasource.prototype.transformMetricData = function (md, groupByTags, target, options, tsdbResolution) {
        var metricLabel = this.createMetricLabel(md, target, groupByTags, options);
        var dps = [];
        // TSDB returns datapoints has a hash of ts => value.
        // Can't use _.pairs(invert()) because it stringifies keys/values
        lodash__WEBPACK_IMPORTED_MODULE_2___default.a.each(md.dps, function (v, k) {
            if (tsdbResolution === 2) {
                dps.push([v, k * 1]);
            }
            else {
                dps.push([v, k * 1000]);
            }
        });
        return { target: metricLabel, datapoints: dps };
    };
    OpenTsDatasource.prototype.createMetricLabel = function (md, target, groupByTags, options) {
        if (target.alias) {
            var scopedVars_1 = lodash__WEBPACK_IMPORTED_MODULE_2___default.a.clone(options.scopedVars || {});
            lodash__WEBPACK_IMPORTED_MODULE_2___default.a.each(md.tags, function (value, key) {
                scopedVars_1['tag_' + key] = { value: value };
            });
            return this.templateSrv.replace(target.alias, scopedVars_1);
        }
        var label = md.metric;
        var tagData = [];
        if (!lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(md.tags)) {
            lodash__WEBPACK_IMPORTED_MODULE_2___default.a.each(lodash__WEBPACK_IMPORTED_MODULE_2___default.a.toPairs(md.tags), function (tag) {
                if (lodash__WEBPACK_IMPORTED_MODULE_2___default.a.has(groupByTags, tag[0])) {
                    tagData.push(tag[0] + '=' + tag[1]);
                }
            });
        }
        if (!lodash__WEBPACK_IMPORTED_MODULE_2___default.a.isEmpty(tagData)) {
            label += '{' + tagData.join(', ') + '}';
        }
        return label;
    };
    OpenTsDatasource.prototype.convertTargetToQuery = function (target, options, tsdbVersion) {
        if (!target.metric || target.hide) {
            return null;
        }
        var query = {
            metric: this.templateSrv.replace(target.metric, options.scopedVars, 'pipe'),
            aggregator: 'avg',
        };
        if (target.aggregator) {
            query.aggregator = this.templateSrv.replace(target.aggregator);
        }
        if (target.shouldComputeRate) {
            query.rate = true;
            query.rateOptions = {
                counter: !!target.isCounter,
            };
            if (target.counterMax && target.counterMax.length) {
                query.rateOptions.counterMax = parseInt(target.counterMax, 10);
            }
            if (target.counterResetValue && target.counterResetValue.length) {
                query.rateOptions.resetValue = parseInt(target.counterResetValue, 10);
            }
            if (tsdbVersion >= 2) {
                query.rateOptions.dropResets =
                    !query.rateOptions.counterMax && (!query.rateOptions.ResetValue || query.rateOptions.ResetValue === 0);
            }
        }
        if (!target.disableDownsampling) {
            var interval = this.templateSrv.replace(target.downsampleInterval || options.interval);
            if (interval.match(/\.[0-9]+s/)) {
                interval = parseFloat(interval) * 1000 + 'ms';
            }
            query.downsample = interval + '-' + target.downsampleAggregator;
            if (target.downsampleFillPolicy && target.downsampleFillPolicy !== 'none') {
                query.downsample += '-' + target.downsampleFillPolicy;
            }
        }
        if (target.filters && target.filters.length > 0) {
            query.filters = angular__WEBPACK_IMPORTED_MODULE_1___default.a.copy(target.filters);
            if (query.filters) {
                for (var filterKey in query.filters) {
                    query.filters[filterKey].filter = this.templateSrv.replace(query.filters[filterKey].filter, options.scopedVars, 'pipe');
                }
            }
        }
        else {
            query.tags = angular__WEBPACK_IMPORTED_MODULE_1___default.a.copy(target.tags);
            if (query.tags) {
                for (var tagKey in query.tags) {
                    query.tags[tagKey] = this.templateSrv.replace(query.tags[tagKey], options.scopedVars, 'pipe');
                }
            }
        }
        if (target.explicitTags) {
            query.explicitTags = true;
        }
        return query;
    };
    OpenTsDatasource.prototype.mapMetricsToTargets = function (metrics, options, tsdbVersion) {
        var _this = this;
        var interpolatedTagValue, arrTagV;
        return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.map(metrics, function (metricData) {
            if (tsdbVersion === 3) {
                return metricData.query.index;
            }
            else {
                return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.findIndex(options.targets, function (target) {
                    if (target.filters && target.filters.length > 0) {
                        return target.metric === metricData.metric;
                    }
                    else {
                        return (target.metric === metricData.metric &&
                            lodash__WEBPACK_IMPORTED_MODULE_2___default.a.every(target.tags, function (tagV, tagK) {
                                interpolatedTagValue = _this.templateSrv.replace(tagV, options.scopedVars, 'pipe');
                                arrTagV = interpolatedTagValue.split('|');
                                return lodash__WEBPACK_IMPORTED_MODULE_2___default.a.includes(arrTagV, metricData.tags[tagK]) || interpolatedTagValue === '*';
                            }));
                    }
                });
            }
        });
    };
    OpenTsDatasource.prototype.convertToTSDBTime = function (date, roundUp, timezone) {
        if (date === 'now') {
            return null;
        }
        date = _grafana_data__WEBPACK_IMPORTED_MODULE_3__["dateMath"].parse(date, roundUp, timezone);
        return date.valueOf();
    };
    return OpenTsDatasource;
}(_grafana_data__WEBPACK_IMPORTED_MODULE_3__["DataSourceApi"]));
/* harmony default export */ __webpack_exports__["default"] = (OpenTsDatasource);


/***/ }),

/***/ "./public/app/plugins/datasource/opentsdb/module.ts":
/*!**********************************************************!*\
  !*** ./public/app/plugins/datasource/opentsdb/module.ts ***!
  \**********************************************************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _datasource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./datasource */ "./public/app/plugins/datasource/opentsdb/datasource.ts");
/* harmony import */ var _query_ctrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./query_ctrl */ "./public/app/plugins/datasource/opentsdb/query_ctrl.ts");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/data */ "./packages/grafana-data/src/index.ts");
/* harmony import */ var _components_ConfigEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ConfigEditor */ "./public/app/plugins/datasource/opentsdb/components/ConfigEditor.tsx");




var AnnotationsQueryCtrl = /** @class */ (function () {
    function AnnotationsQueryCtrl() {
    }
    AnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html';
    return AnnotationsQueryCtrl;
}());
var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_2__["DataSourcePlugin"](_datasource__WEBPACK_IMPORTED_MODULE_0__["default"])
    .setQueryCtrl(_query_ctrl__WEBPACK_IMPORTED_MODULE_1__["OpenTsQueryCtrl"])
    .setConfigEditor(_components_ConfigEditor__WEBPACK_IMPORTED_MODULE_3__["ConfigEditor"])
    .setAnnotationQueryCtrl(AnnotationsQueryCtrl);


/***/ }),

/***/ "./public/app/plugins/datasource/opentsdb/query_ctrl.ts":
/*!**************************************************************!*\
  !*** ./public/app/plugins/datasource/opentsdb/query_ctrl.ts ***!
  \**************************************************************/
/*! exports provided: OpenTsQueryCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenTsQueryCtrl", function() { return OpenTsQueryCtrl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/utils/kbn */ "./public/app/core/utils/kbn.ts");
/* harmony import */ var app_plugins_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/plugins/sdk */ "./public/app/plugins/sdk.ts");




var OpenTsQueryCtrl = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(OpenTsQueryCtrl, _super);
    /** @ngInject */
    function OpenTsQueryCtrl($scope, $injector) {
        var _this = _super.call(this, $scope, $injector) || this;
        _this.errors = _this.validateTarget();
        _this.aggregators = ['avg', 'sum', 'min', 'max', 'dev', 'zimsum', 'mimmin', 'mimmax'];
        _this.fillPolicies = ['none', 'nan', 'null', 'zero'];
        _this.filterTypes = [
            'wildcard',
            'iliteral_or',
            'not_iliteral_or',
            'not_literal_or',
            'iwildcard',
            'literal_or',
            'regexp',
        ];
        _this.tsdbVersion = _this.datasource.tsdbVersion;
        if (!_this.target.aggregator) {
            _this.target.aggregator = 'sum';
        }
        if (!_this.target.downsampleAggregator) {
            _this.target.downsampleAggregator = 'avg';
        }
        if (!_this.target.downsampleFillPolicy) {
            _this.target.downsampleFillPolicy = 'none';
        }
        _this.datasource.getAggregators().then(function (aggs) {
            if (aggs.length !== 0) {
                _this.aggregators = aggs;
            }
        });
        _this.datasource.getFilterTypes().then(function (filterTypes) {
            if (filterTypes.length !== 0) {
                _this.filterTypes = filterTypes;
            }
        });
        // needs to be defined here as it is called from typeahead
        _this.suggestMetrics = function (query, callback) {
            _this.datasource
                .metricFindQuery('metrics(' + query + ')')
                .then(_this.getTextValues)
                .then(callback);
        };
        _this.suggestTagKeys = function (query, callback) {
            _this.datasource.suggestTagKeys(_this.target.metric).then(callback);
        };
        _this.suggestTagValues = function (query, callback) {
            _this.datasource
                .metricFindQuery('suggest_tagv(' + query + ')')
                .then(_this.getTextValues)
                .then(callback);
        };
        return _this;
    }
    OpenTsQueryCtrl.prototype.targetBlur = function () {
        this.errors = this.validateTarget();
        this.refresh();
    };
    OpenTsQueryCtrl.prototype.getTextValues = function (metricFindResult) {
        return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.map(metricFindResult, function (value) {
            return value.text;
        });
    };
    OpenTsQueryCtrl.prototype.addTag = function () {
        if (this.target.filters && this.target.filters.length > 0) {
            this.errors.tags = 'Please remove filters to use tags, tags and filters are mutually exclusive.';
        }
        if (!this.addTagMode) {
            this.addTagMode = true;
            return;
        }
        if (!this.target.tags) {
            this.target.tags = {};
        }
        this.errors = this.validateTarget();
        if (!this.errors.tags) {
            this.target.tags[this.target.currentTagKey] = this.target.currentTagValue;
            this.target.currentTagKey = '';
            this.target.currentTagValue = '';
            this.targetBlur();
        }
        this.addTagMode = false;
    };
    OpenTsQueryCtrl.prototype.removeTag = function (key) {
        delete this.target.tags[key];
        this.targetBlur();
    };
    OpenTsQueryCtrl.prototype.editTag = function (key, value) {
        this.removeTag(key);
        this.target.currentTagKey = key;
        this.target.currentTagValue = value;
        this.addTag();
    };
    OpenTsQueryCtrl.prototype.closeAddTagMode = function () {
        this.addTagMode = false;
        return;
    };
    OpenTsQueryCtrl.prototype.addFilter = function () {
        if (this.target.tags && lodash__WEBPACK_IMPORTED_MODULE_1___default.a.size(this.target.tags) > 0) {
            this.errors.filters = 'Please remove tags to use filters, tags and filters are mutually exclusive.';
        }
        if (!this.addFilterMode) {
            this.addFilterMode = true;
            return;
        }
        if (!this.target.filters) {
            this.target.filters = [];
        }
        if (!this.target.currentFilterType) {
            this.target.currentFilterType = 'iliteral_or';
        }
        if (!this.target.currentFilterGroupBy) {
            this.target.currentFilterGroupBy = false;
        }
        this.errors = this.validateTarget();
        if (!this.errors.filters) {
            var currentFilter = {
                type: this.target.currentFilterType,
                tagk: this.target.currentFilterKey,
                filter: this.target.currentFilterValue,
                groupBy: this.target.currentFilterGroupBy,
            };
            this.target.filters.push(currentFilter);
            this.target.currentFilterType = 'literal_or';
            this.target.currentFilterKey = '';
            this.target.currentFilterValue = '';
            this.target.currentFilterGroupBy = false;
            this.targetBlur();
        }
        this.addFilterMode = false;
    };
    OpenTsQueryCtrl.prototype.removeFilter = function (index) {
        this.target.filters.splice(index, 1);
        this.targetBlur();
    };
    OpenTsQueryCtrl.prototype.editFilter = function (fil, index) {
        this.removeFilter(index);
        this.target.currentFilterKey = fil.tagk;
        this.target.currentFilterValue = fil.filter;
        this.target.currentFilterType = fil.type;
        this.target.currentFilterGroupBy = fil.groupBy;
        this.addFilter();
    };
    OpenTsQueryCtrl.prototype.closeAddFilterMode = function () {
        this.addFilterMode = false;
        return;
    };
    OpenTsQueryCtrl.prototype.validateTarget = function () {
        var errs = {};
        if (this.target.shouldDownsample) {
            try {
                if (this.target.downsampleInterval) {
                    app_core_utils_kbn__WEBPACK_IMPORTED_MODULE_2__["default"].describe_interval(this.target.downsampleInterval);
                }
                else {
                    errs.downsampleInterval = "You must supply a downsample interval (e.g. '1m' or '1h').";
                }
            }
            catch (err) {
                errs.downsampleInterval = err.message;
            }
        }
        if (this.target.tags && lodash__WEBPACK_IMPORTED_MODULE_1___default.a.has(this.target.tags, this.target.currentTagKey)) {
            errs.tags = "Duplicate tag key '" + this.target.currentTagKey + "'.";
        }
        return errs;
    };
    OpenTsQueryCtrl.templateUrl = 'partials/query.editor.html';
    return OpenTsQueryCtrl;
}(app_plugins_sdk__WEBPACK_IMPORTED_MODULE_3__["QueryCtrl"]));



/***/ })

}]);
//# sourceMappingURL=opentsdbPlugin.ec7deb84f65ee765b2e6.js.map