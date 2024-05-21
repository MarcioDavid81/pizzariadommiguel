import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-sobre',
    standalone: true,
    templateUrl: './sobre.component.html',
    styleUrl: './sobre.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export class SobreComponent {

}
