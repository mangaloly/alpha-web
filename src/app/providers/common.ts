import { Injectable } from "@angular/core";
import { Event, NavigationEnd, NavigationStart, Router } from "@angular/router";

@Injectable({ providedIn: 'root'})
export class CommonProvider {

  timeout: any;
  loader: boolean =  true;

  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loader = true;
    }

    if (event instanceof NavigationEnd) {
      this.timeout = setTimeout(() => {
        clearTimeout(this.timeout);
        this.loader = false;
      }, 1200);
    }
  }

}
