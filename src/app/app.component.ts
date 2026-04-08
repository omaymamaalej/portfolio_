import { AfterViewInit, Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
      HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    SkillsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';
   

  ngAfterViewInit() {
    this.checkReveal();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.checkReveal();
  }

  checkReveal() {
    const elements = document.querySelectorAll('.reveal');

    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (top < windowHeight - 100) {
        el.classList.add('active');
      }
    });
  }
}
