import { Injectable } from "@angular/core";
import { Application } from "../models/Application.model";

@Injectable({
  providedIn: "root"
})
export class ApplicationService {
  public allApps: Application[] = [
    {
      name: "Order in the Court",
      link: "https://order-in-the-court-app.herokuapp.com/",
      description: "A free browser-based improv game loosely based off of reality court shows.",
      icon: "fa-gavel",
      archived: false,
    },
    {
      name: "User Management",
      link: "https://aoti-user-management-ui.herokuapp.com/",
      description: "User Management for most of my applications.",
      icon: "fa-users",
      archived: false,
    },
    {
      name: "Adam in the Parking Lot",
      link: "http://www.adamintheparkinglot.com/",
      description: "Coming soon: website for my band.",
      icon: "fa-music",
      archived: true,
    },
    {
      name: "Basic Angular App",
      link: "https://aoti-basic-angular-app.herokuapp.com/",
      description: "A sample Angular App without any style or real use.",
      icon: "fa-laptop",
      archived: false,
    },
    {
      name: "Adam on the Internet",
      link: "http://adamontheinternet.com/",
      description: "My main website.",
      icon: "fa-home",
      archived: false,
    },
    {
      name: "Callanan Concepts",
      link: "http://callananconcepts.club/",
      description: "Old Version of my main website.",
      icon: "fa-home",
      archived: true,
    },
    {
      name: "XPath Assitant",
      link: "https://xpath-assistant.herokuapp.com/",
      description: "A simple app to help building XPath statements.",
      icon: "fa-map-signs",
      archived: false,
    },
    {
      name: "Overton Portfolio (Sample Site)",
      link: "https://overton-portfolio-ui.herokuapp.com/",
      description: "A site I started building for a friend's portfolio.",
      icon: "fa-id-badge",
      archived: false,
    },
    {
      name: "Armor Equipment (Small Business Site)",
      link: "http://www.armor-equip.com/",
      description: "A website for a small business that sells trash equipment that I built right out of college.",
      icon: "fa-trash",
      archived: false,
    },
  ];

  public get currentApps(): Application[] {
    return this.allApps.filter((app) => {
      return !app.archived;
    });
  }
}
