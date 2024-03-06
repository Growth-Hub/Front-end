interface AnimalPostType {
  length: number
  pages: any
  id: string
  width: number
  height: number
  url: string
}

interface KakaoWebDocType {
  contents: string
  dateTime: string
  title: string
  url: string
}

interface KakaoMetaType {
  is_end: boolean
  pageable_count: number
  total_count: number
}

interface KakaoWebSearchType {
  documents: KakaoWebDocType[]
  meta: KakaoMetaType
}
