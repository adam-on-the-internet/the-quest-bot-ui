import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {InfoComponent} from "./components/info/info.component";
import {AppRoutingModule} from "./app-routing.module";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./components/login/login.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {AdminComponent} from "./components/admin/admin.component";
import {HeaderComponent} from "./components/header/header.component";
import {BodyComponent} from "./components/body/body.component";
import {LoadingComponent} from "./components/loading/loading.component";
import {CardComponent} from "./components/card/card.component";
import {BodyAltComponent} from "./components/body-alt/body-alt.component";
import {CurrentHeroComponent} from "./components/current-hero/current-hero.component";
import {FallenHeroesComponent} from "./components/fallen-heroes/fallen-heroes.component";
import {HeroStatsComponent} from "./components/hero-stats/hero-stats.component";
import {HeroDisplayComponent} from "./components/hero-display/hero-display.component";
import {HeroCardComponent} from "./components/hero-card/hero-card.component";
import { WorldComponent } from "./components/world/world.component";

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        InfoComponent,
        NavbarComponent,
        FooterComponent,
        LoginComponent,
        ProfileComponent,
        AdminComponent,
        HeaderComponent,
        BodyComponent,
        LoadingComponent,
        CardComponent,
        BodyAltComponent,
        CurrentHeroComponent,
        FallenHeroesComponent,
        HeroStatsComponent,
        HeroDisplayComponent,
        HeroCardComponent,
        WorldComponent,
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
export class AppModule {
}
