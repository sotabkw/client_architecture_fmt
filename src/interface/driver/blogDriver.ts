export default interface BlogDriver {
  findAll(): Promise<BlogJson>
}

export interface BlogJson {
  articles: ArticleJson[]
  totalCount: number
}

export interface ArticleJson {
  id: string
  title: string
  body: string
  publishedAt: string
  category: string[]
}
