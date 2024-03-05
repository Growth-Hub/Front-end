export interface Web {
  title:	string;
  contents:	string;
  url: string;
  datetime: string;
}

export type OnResults = (results: Web[]) => void;

export type SearchWebProps = { onResults: OnResults; };