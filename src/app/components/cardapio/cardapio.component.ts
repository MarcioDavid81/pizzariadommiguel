import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-cardapio',
    standalone: true,
    templateUrl: './cardapio.component.html',
    styleUrl: './cardapio.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export class CardapioComponent {

}
