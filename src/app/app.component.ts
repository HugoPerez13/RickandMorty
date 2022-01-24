import { Component } from '@angular/core';
import { NavigatorInterface, FooterInterface } from 'src/app/core/models/Core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'vieoju-APP';
  public navigator: NavigatorInterface[] = [
    {
      name: 'home',
      link: '/home',
    },
    {
      name: 'exit',
      link: '/exit',
    },
    {
      name: 'medium',
      link: '/medium',
    },
  ];
  public footer: FooterInterface = {
    creator: "Hugo Perez",
    from: "home"
  };
}
