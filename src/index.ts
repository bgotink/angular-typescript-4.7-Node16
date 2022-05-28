import {NgModule} from '@angular/core';

import {LoremDirective} from './lorem.directive.js';

export {LoremDirective};

@NgModule({
  declarations: [LoremDirective],
  exports: [LoremDirective],
})
export class LoremModule {}
