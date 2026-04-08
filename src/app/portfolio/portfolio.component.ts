import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';
import { CardComponent } from '../card/card.component';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
   providers: []
})
export class PortfolioComponent {
 projects: Card[] = [
    {
      id: 1,
      name: 'Business Plan Generator (AI-Powered)',
  summary: "AI-powered web application that generates complete and structured business plans through a guided user experience.",
  description: "This project is an intelligent full-stack web application designed to simplify the creation of business plans. The platform guides users through a structured multi-step process, including company information, products, team, marketing, and financial data. It leverages AI (Gemini API) to automatically generate high-quality and well-structured business plan content. The application also includes dynamic forms, real-time financial calculations, and automated PDF generation combining textual and graphical data. This solution significantly reduces the complexity and time required to create professional business plans while ensuring clarity, consistency, and usability.",
  projectLink: 'https://github.com/omaymamaalej/ReadyToPlanBK.git',
  tags: [Tag.ANGULAR, Tag.SPRINGBOOT,Tag.DOCKER,Tag.POSTMAN,Tag.AI,Tag.MongoDB,Tag.Gemini, Tag.JHIPSTER],
  pictures: ["../../assets/IMAGE1.png", "../../assets/IMAGE2.png", "../../assets/IMAGE3.png", "../../assets/IMAGE4.png", "../../assets/IMAGE5.png", "../../assets/im.png"]
    },
  {
  id: 2,
  name: 'Smart Water Consumption Management Platform',
  summary: "Real-time water consumption management platform with monitoring, alerts, and billing features.",
  description: "This project is a full-stack web platform designed to monitor and manage water consumption in real time. It provides users and administrators with detailed consumption tracking, automated billing generation, and intelligent alerting systems to encourage responsible water usage. The platform integrates smart notification features that detect abnormal consumption patterns and send proactive alerts to users. A secure MySQL database was implemented to ensure data integrity, reliability, and efficient data management. The system is designed to improve resource awareness, reduce unnecessary consumption, and support data-driven decision-making.",
  projectLink: 'https://github.com/omaymamaalej/WaterConsumption.git',
  tags: [Tag.ANGULAR, Tag.SPRINGBOOT, Tag.MySQL,Tag.BOOTSTRAP,Tag.POSTMAN,Tag.JAVASCRIPT ],
  pictures: ["../../assets/Workshop.png", "../../assets/Workshop1.png", "../../assets/Workshop2.png", "../../assets/Workshop3.png", "../../assets/Workshop4.png", "../../assets/Workshop5.png", "../../assets/Workshop6.png", "../../assets/Workshop7.png",]
},
    
    

  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('BC | Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }
}
