export class Pacient {
  id: number;
  first_name: string;
  last_name: string;
  age: number;
  gender: number;
  id_number: string;
  phone: string;
  email: string;

  constructor(options: {
    id?: number,
 	  first_name?: string,
    last_name?: string,
    age?: number,
    gender?: number,
    id_number?: string,
    phone?: string,
    email?: string
    } = {}) {
    this.id = options.id === undefined ? 0 : options.id;
    this.first_name = options.first_name || '';
    this.last_name = options.last_name || '';
    this.age = options.age === undefined ? 0 : options.age;
    this.gender = Number(options.gender);
    this.id_number = options.id_number || '';
    this.phone = options.phone || '';
    this.email = options.email || '';
  }
}

export class Gender {
  constructor(
    public id: number,
    public description: string
  ) {}
}

export const genders: Gender[] = [
  {
	id: 1,
	description: 'Masculino'
  },
  {
	id: 2,
	description: 'Femenino'
  }
];
