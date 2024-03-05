export interface SearchData {
  meta: Meta;
  documents: Document[];
}

interface Meta {
  total_count: number;
  pageable_count: number;
  is_end: boolean;
}

export interface Document {
  title: string;
  contents: string;
  url: string;
  datetime: Date;
}
