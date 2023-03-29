import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Places', url: '/places', icon: 'mail' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    
    
  ];
  public labels = ['America', 'Europa', 'Asia', 'Oceania', 'Africa'];
  constructor() {}
}
