import { Component } from '@angular/core';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export default class AboutComponent {
    submitForm() {
        console.log('Formulario enviado');
}
}
