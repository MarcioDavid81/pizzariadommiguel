import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-refrigerante',
    standalone: true,
    templateUrl: './refrigerante.component.html',
    styleUrl: './refrigerante.component.css',
    imports: [NavbarComponent, FooterComponent]
})
export class RefrigeranteComponent {

}
