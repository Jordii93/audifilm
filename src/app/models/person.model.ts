
export class Person {
    name: string;
    category: string; // empleado o gerente
    company: string;
    levelhappines: number;
    constructor(name: string, category: string, company: string, levelhappines: number){
        this.name = name;
        this.category = category;
        this.company = company;
        this.levelhappines = levelhappines;
    }

}