export class Article {
  constructor(
    private readonly id: string,
    private readonly title: string,
    private readonly body: string,
    private readonly publishedAt: string,
    private readonly category: string[]
  ) {}

  get articleId() {
    return this.id
  }

  get createdAt() {
    return this.publishedAt
  }

  get articleTitle() {
    return this.title
  }

  get articleContent() {
    return this.body
  }

  get articleCategory() {
    return this.category
  }
}
