import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DarkModeService } from './dark-mode.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, OnDestroy {
  isDarkMode: boolean = false;
  darkModeSubscription: Subscription;

  constructor(
    private darkModeService: DarkModeService,
  ) { }

  ngOnInit() {
    this.darkModeSubscription = this.darkModeService.darkMode$.subscribe(darkMode => {
      this.isDarkMode = darkMode;

      if (darkMode) {
        document.documentElement.removeAttribute('data-theme');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    });
  }

  toggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
  }

  ngOnDestroy() {
    if (this.darkModeSubscription) {
      this.darkModeSubscription.unsubscribe();
    }
  }

}
