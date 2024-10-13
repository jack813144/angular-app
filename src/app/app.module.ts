import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule, // Đảm bảo HttpClientModule được import
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
