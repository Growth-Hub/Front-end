interface ShortenTextType {
  text: string;
  limit: number;
}

export function shortenText({text, limit}: ShortenTextType) {
  return text.length > limit? `${text.slice(0, limit)}...` : text;
}