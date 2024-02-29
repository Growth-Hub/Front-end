export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: Breed[]; 
}

export interface Breed {
  id: number;
  name: string;
  weight: string;
  height: string;
  life_span: string;
  breed_group?: string; 
}