import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { InfoComponent } from "./components/info/info.component";
import { ROUTES_ENUM } from "./constants/routing.constants";
import { LoginComponent } from "./components/login/login.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { AdminComponent } from "./components/admin/admin.component";
import { BookmarkOverviewComponent } from "./components/bookmark-overview/bookmark-overview.component";
import { BookmarkFormComponent } from "./components/bookmark-form/bookmark-form.component";
import { BookmarkDetailsComponent } from "./components/bookmark-details/bookmark-details.component";
import { BookmarksComponent } from "./components/bookmarks/bookmarks.component";

const routes: Routes = [
  // main
  { path: ROUTES_ENUM.Dashboard, component: DashboardComponent },
  { path: ROUTES_ENUM.Info, component: InfoComponent },
  { path: ROUTES_ENUM.Login, component: LoginComponent },
  { path: ROUTES_ENUM.Profile, component: ProfileComponent },
  { path: ROUTES_ENUM.Admin, component: AdminComponent },
  // projects
  { path: ROUTES_ENUM.Bookmarks, component: BookmarksComponent },
  { path: ROUTES_ENUM.BookmarkOverview, component: BookmarkOverviewComponent },
  { path: ROUTES_ENUM.BookmarkOverview + "/:id", component: BookmarkDetailsComponent },
  { path: ROUTES_ENUM.BookmarkForm, component: BookmarkFormComponent },
  { path: ROUTES_ENUM.BookmarkForm + "/:id", component: BookmarkFormComponent },
  // default
  { path: "**", redirectTo: "dashboard" },
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
