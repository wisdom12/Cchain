
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RestClientService } from "./services/rest-client.service";
import { ChartsModule } from 'ng2-charts';
import { PostServicesService } from './services/post-services.service';
import { HttpModule } from '@angular/http';
import { PostContractService } from './pages/contract/post-contract.service';
import { PostCheckService } from './pages/check/post-check.service';

export const createTranslateLoader = (http: HttpClient) => {
return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
  
  imports: [
    HttpModule,
    ChartsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient],
      }
  }),
  ],

  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [HttpModule,
              RestClientService,
              PostServicesService,
              PostContractService,
              PostCheckService] 
})
export class AppModule {
}
