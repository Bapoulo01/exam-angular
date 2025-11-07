import { Component, signal } from '@angular/core';
import { ApproList } from '../../model/ApproModel';
import APPRO_MOCK from '../shared/mocks/appro.mock';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-appro',
  imports: [RouterLink],
  templateUrl: './appro.html',
  styleUrl: './appro.css',
})
export class Appro {
  approvisionnements = signal<ApproList>(APPRO_MOCK)

}
