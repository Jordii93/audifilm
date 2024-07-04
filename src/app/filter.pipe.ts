import { Pipe, PipeTransform} from '@angular/core';
import { Person } from './models/person.model';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform{
    transform(persons: Person[], searchText: string): Person[] {
        if (!persons || !searchText) {
            return persons;
        }
        searchText = searchText.toLowerCase();
        return persons.filter(person => 
            person.name.toLowerCase().includes(searchText) ||
            person.category.toLowerCase().includes(searchText)
        );
    }
}