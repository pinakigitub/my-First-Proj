import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpServiceService } from './common/http-service.service';
import { GlobalConstantsServiceService } from './common/global-constants-service.service';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [HttpServiceService, GlobalConstantsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
