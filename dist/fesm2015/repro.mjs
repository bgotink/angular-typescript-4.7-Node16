import * as i0 from '@angular/core';
import { Directive, NgModule } from '@angular/core';

class LoremDirective {
}
LoremDirective.ɵfac = function LoremDirective_Factory(t) { return new (t || LoremDirective)(); };
LoremDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: LoremDirective, selectors: [["", "lorem", ""]] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoremDirective, [{
            type: Directive,
            args: [{ selector: '[lorem]' }]
        }], null, null);
})();

class LoremModule {
}
LoremModule.ɵfac = function LoremModule_Factory(t) { return new (t || LoremModule)(); };
LoremModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: LoremModule });
LoremModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({});
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LoremModule, [{
            type: NgModule,
            args: [{
                    declarations: [LoremDirective],
                    exports: [LoremDirective],
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(LoremModule, { declarations: [LoremDirective], exports: [LoremDirective] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { LoremDirective, LoremModule };
//# sourceMappingURL=repro.mjs.map
