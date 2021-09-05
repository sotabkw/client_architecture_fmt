export default interface BlogDriver {
  fetchBlog(): Promise<BlogJson>
}

export interface BlogJson {
  contents: ArticleJson[]
  totalCount: number
}

export interface ArticleJson {
  id: string
  title: string
  body: string
  publishedAt: string
  category: string[]
}
