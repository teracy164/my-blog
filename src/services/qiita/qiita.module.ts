import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { QiitaService } from './qiita.service';

@NgModule({
    imports: [HttpClientModule],
    providers: [QiitaService],
})
export class QiitaModule {}
