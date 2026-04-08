import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
   
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   activeSection: string = 'home';
  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    this.activeSection = section;
  }
   @HostListener('window:scroll', [])
  onScroll() {
    const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];

    for (let section of sections) {
      const el = document.getElementById(section);

      if (el) {
        const rect = el.getBoundingClientRect();

        if (rect.top <= 130 && rect.bottom >= 130) {
          this.activeSection = section;
        }
      }
    }
  }
}
