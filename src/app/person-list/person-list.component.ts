import { Component } from '@angular/core';
import { Person } from '../models/person.model';
import { PeopleService } from '../people.service';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.scss'
})
export class PersonListComponent {
  searchText: string = '';
  persons: Person[] = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {


    this.persons = [
      new Person('Jordi', 'Empleado', 'Audifilm', 8),
      new Person('Guillem', 'Empleado', 'Audifilm', 10)
    ]
    this.persons = this.peopleService.getPersons();
  }

  filterPeople(): void {
    this.filterPeople = this.persons
  }
}
