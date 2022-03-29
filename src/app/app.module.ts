import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
// import { CheckedstarComponent } from './checkedstar/checkedstar.component';
// import { UncheckedstarComponent } from './uncheckedstar/uncheckedstar.component';
import { LikebuttonComponent } from './likebutton/likebutton.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    // CheckedstarComponent,
    // UncheckedstarComponent,
    LikebuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
