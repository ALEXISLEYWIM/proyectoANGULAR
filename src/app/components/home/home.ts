import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {
  isNewUser: boolean = true;  

  toggleUserStatus() {
    this.isNewUser = !this.isNewUser;
  }
}
