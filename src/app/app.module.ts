import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, WishListComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
