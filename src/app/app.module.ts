import { HttpClientModule } from '@angular/common/http';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatChipsModule, MatIconModule,  MatProgressSpinnerModule,  MatToolbarModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { CardComponent } from './dashboard/card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FakeApiService } from './server/fake-api.service';
import { HelloComponent } from './core/components/hello.component';
import { CardService } from './core/service/card.service';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatChipsModule, 
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    HttpClientModule, 
    FlexLayoutModule,
    InMemoryWebApiModule.forRoot(FakeApiService, {delay: 5000}) 
  ],
  providers: [CardService],
  declarations: [	 
    AppComponent, 
    HelloComponent, 
    DashboardComponent, 
    CardComponent,
    HeaderComponent,
    FooterComponent
   ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
