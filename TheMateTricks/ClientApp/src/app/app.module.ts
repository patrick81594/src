import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { JwtModule } from '@auth0/angular-jwt';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AlertModule } from 'ngx-bootstrap/alert';
import { MemberListComponent } from './member/member-list/member-list.component';
import { MemberCardComponent } from './member/member-card/member-card.component';
import { FriendsListComponent } from './friends/friends-list/friends-list.component';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';
import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MemberDetailsComponent } from './member/member-details/member-details.component';
import { TimeAgoPipe } from 'time-ago-pipe';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { MomentModule } from 'ngx-moment';
import { EditMemComponent } from './member/edit-mem/edit-mem.component';
import { EditPhotoComponent } from './photo/edit-photo/edit-photo.component';



import { FileUploadModule } from 'ng2-file-upload'; 

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    MemberCardComponent,
    FriendsListComponent,
    MessagesListComponent,
    MemberDetailsComponent,
    TimeAgoPipe,
    EditMemComponent,
    EditPhotoComponent
    
   
  ],
  imports: [
    TabsModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CollapseModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:57629', 'localhost:57630', 'localhost:4200']
      }
    }),
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot(),
        TabsModule.forRoot(),
    
    TabsModule.forRoot(),
    FileUploadModule
  ],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
