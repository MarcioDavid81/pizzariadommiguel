import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CardapioComponent } from "../cardapio/cardapio.component";
import { SobreComponent } from '../sobre/sobre.component';
import { BlogComponent } from '../blog/blog.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, NgOptimizedImage, FooterComponent, CardapioComponent, SobreComponent, BlogComponent, RouterLink]
})
export class HomeComponent {

}
