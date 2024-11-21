import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { FlightData } from '../models/flydata.model';

  @Component({
    standalone: false,
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })
  export class HomeComponent implements OnInit {
    homeForm: FormGroup;

    constructor(private fb: FormBuilder, private apiService: ApiService) {
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
      
      const flightData: FlightData = {
        origen: this.homeForm.value.origen,
        destino: this.homeForm.value.destino,
        fechaIda: this.homeForm.value.fechaIda,
        fechaVuelta: this.homeForm.value.fechaVuelta,
        pasajeros: this.homeForm.value.pasajeros
      };
      
      this.apiService.getTrainsOfers(flightData);
    }
  }