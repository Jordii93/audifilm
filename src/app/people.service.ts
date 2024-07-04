import { Injectable } from '@angular/core';
import { Person } from './models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {


  private persons: Person[] = [
    new Person('Jordi', 'Empleado', 'Audifilm', 8),
    new Person('Guillem', 'Empleado', 'Audifilm', 10)
  ]

  constructor() { }

  getPersons(): Person[]{
    return this.persons;
  }

  getPersonsByName(name: string): Person | undefined {
    return this.persons.find(person => person.name === name);
  }
}
