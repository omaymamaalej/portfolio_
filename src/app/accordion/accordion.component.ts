import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';


@Component({
  selector: 'app-accordion',
  standalone: true,
  imports: [ 
   MatExpansionModule
  ],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.css'
})
export class AccordionComponent {
 customClass = 'customClass';
}
