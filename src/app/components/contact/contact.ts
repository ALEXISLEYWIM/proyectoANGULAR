import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  name: string = '';
  lastname: string = '';
  email: string = '';
  message: string = '';

  submittedData: any = null;

  onSubmit() {
    this.submittedData = {
      name: this.name,
      lastname: this.lastname,
      email: this.email,
      message: this.message
    };
    console.log("Comentario enviado", this.submittedData);
    this.resetForm();
  }

  resetForm() {
    this.submittedData = null;
    this.name = '';
    this.lastname = '';
    this.email = '';
    this.message = '';
  }
}
