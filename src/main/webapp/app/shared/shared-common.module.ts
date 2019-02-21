import { NgModule } from '@angular/core';

import { HeheSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [HeheSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [HeheSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class HeheSharedCommonModule {}
