import { Component } from '@angular/core';
import { SharedService } from './shared.service';
import { ZoomitComponent } from './zoomit/zoomit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ SharedService ]
})
export class AppComponent {
  constructor(public shared: SharedService ) {}
}
