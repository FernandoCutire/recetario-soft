export class CaseModel {
  id: string;
  name: string;
  ingredients: [string];
  calories: number;
  lastname: string;
  times: string;
  phone: string;
  state: string;
  portions: number;
  quantity:[number];
  cookingTime: number;
  measures: [string];
  tutorial: string;

  constructor() {
    this.state = 'Abierto';
  }
}
