import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { InfoComponent } from "./components/info/info.component";
import { AppRoutingModule } from "./app-routing.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HttpClientModule } from "@angular/common/http";
import { ActuatorReportComponent } from "./components/actuator-report/actuator-report.component";
import { LoginComponent } from "./components/login/login.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { AdminComponent } from "./components/admin/admin.component";
import { HeaderComponent } from "./components/header/header.component";
import { BodyComponent } from "./components/body/body.component";
import { LoadingComponent } from "./components/loading/loading.component";
import { CardComponent } from "./components/card/card.component";
import { BodyAltComponent } from "./components/body-alt/body-alt.component";
import { BookmarkDetailsComponent } from "./components/bookmark-details/bookmark-details.component";
import { BookmarkFormComponent } from "./components/bookmark-form/bookmark-form.component";
import { BookmarkOverviewComponent } from "./components/bookmark-overview/bookmark-overview.component";
import { BookmarkTableComponent } from "./components/bookmark-table/bookmark-table.component";
import { BookmarksComponent } from "./components/bookmarks/bookmarks.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InfoComponent,
    NavbarComponent,
    FooterComponent,
    ActuatorReportComponent,
    LoginComponent,
    ProfileComponent,
    AdminComponent,
    HeaderComponent,
    BodyComponent,
    LoadingComponent,
    CardComponent,
    BodyAltComponent,
    BookmarkDetailsComponent,
    BookmarkFormComponent,
    BookmarkOverviewComponent,
    BookmarkTableComponent,
    BookmarksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
