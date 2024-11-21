import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  standalone: false,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.homeForm = this.fb.group({
      origen: ['', Validators.required],
      destino: ['', Validators.required],
      fechaIda: ['', Validators.required],
      fechaVuelta: ['', Validators.required],
      pasajeros: [1, [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.homeForm.valid) {
      console.log(this.homeForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }
}