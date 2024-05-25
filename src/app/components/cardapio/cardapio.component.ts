import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-cardapio',
    standalone: true,
    templateUrl: './cardapio.component.html',
    styleUrl: './cardapio.component.css',
    imports: [HeaderComponent, FooterComponent, NavbarComponent]
})
export class CardapioComponent {

}
