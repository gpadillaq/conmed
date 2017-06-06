export interface Pacients {
  id: number,
  first_name: string,
  last_name: string,
  age: number,
  gender: number,
  id_number: string,
  phone: string,
  email: string
}

export const Genders = [
  {id: 1, description: 'Masculino'},
  {id: 2, description: 'Femenino'}
];
