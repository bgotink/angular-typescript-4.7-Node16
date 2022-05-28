"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoremModule = exports.LoremDirective = void 0;
const core_1 = require("@angular/core");
const lorem_directive_js_1 = require("./lorem.directive.js");
Object.defineProperty(exports, "LoremDirective", { enumerable: true, get: function () { return lorem_directive_js_1.LoremDirective; } });
const i0 = __importStar(require("@angular/core"));
class LoremModule {
}
exports.LoremModule = LoremModule;
LoremModule.ɵfac = function LoremModule_Factory(t) { return new (t || LoremModule)(); };
LoremModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: LoremModule });
LoremModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoremModule, [{
        type: core_1.NgModule,
        args: [{
                declarations: [lorem_directive_js_1.LoremDirective],
                exports: [lorem_directive_js_1.LoremDirective],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LoremModule, { declarations: [lorem_directive_js_1.LoremDirective], exports: [lorem_directive_js_1.LoremDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBdUM7QUFFdkMsNkRBQW9EO0FBRTVDLCtGQUZBLG1DQUFjLE9BRUE7O0FBRXRCLE1BSWEsV0FBVzs7QUFKeEIsa0NBSTJCO3NFQUFkLFdBQVc7NkRBQVgsV0FBVzs7dUZBQVgsV0FBVztjQUp2QixlQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsbUNBQWMsQ0FBQztnQkFDOUIsT0FBTyxFQUFFLENBQUMsbUNBQWMsQ0FBQzthQUMxQjs7d0ZBQ1ksV0FBVyxtQkFIUCxtQ0FBYyxhQUNuQixtQ0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge0xvcmVtRGlyZWN0aXZlfSBmcm9tICcuL2xvcmVtLmRpcmVjdGl2ZS5qcyc7XG5cbmV4cG9ydCB7TG9yZW1EaXJlY3RpdmV9O1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtMb3JlbURpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtMb3JlbURpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIExvcmVtTW9kdWxlIHt9XG4iXX0=