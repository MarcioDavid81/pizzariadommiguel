import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-hamburger',
    standalone: true,
    templateUrl: './hamburger.component.html',
    styleUrl: './hamburger.component.css',
    imports: [NavbarComponent, FooterComponent]
})
export class HamburgerComponent {

}
