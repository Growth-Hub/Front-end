//htmlEntityDecode, remove tags
export function cleanText(encodedString:any) {
  const textArea = document.createElement('textarea');
  textArea.innerHTML = encodedString; //HTML 엔티티나 이스케이프된 문자열을 웹 페이지가 이해할 수 있는 실제 문자로 변환
  return textArea.value.replace(/<\/?[^>]+(>|$)/g, '');
  //return encodedString;
}
