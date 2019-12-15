import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { AboutModule } from './about/about.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MouseCursorComponent } from './components/mouse-cursor/mouse-cursor.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MouseCursorComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    AboutModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
