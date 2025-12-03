import { Component, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  @Input() loadedInHome = false;

  onSubmit(form: NgForm) {
    if (!form.valid) return;

    console.log('Form submitted:', form.value);

    // TODO: Hook this to backend / email API
    alert('Thank you for contacting us! We will reach out shortly.');

    form.reset();
  }
}
