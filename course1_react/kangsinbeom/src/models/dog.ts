export interface Dog {
  breeds: Breed[];
  id: string;
  url: string;
  width: number;
  height: number;
}

interface Breed {
  weight: {
    imperial: string;
    metric: string;
  };
  height: {
    imperial: string;
    metric: string;
  };
  id: number;
  name: string;
  bred_for: string;
  life_span: string;
  temperament: string;
  reference_image_id: string;
}
