import { Component,HostBinding } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @HostBinding('style.transform') transform = 'translateY(0)';

  moveContentUp() {
    this.transform = 'translateY(500px)'; // Adjust the value to control how much it moves
  }

  resetContent() {
    this.transform = 'translateY(0)';
  }
}
