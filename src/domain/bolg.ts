import { Article } from "@domain/article"

export class Blog {
  constructor(private readonly contents: Article[], private readonly totalCount: number) {}

  get getArticleCount() {
    return this.totalCount
  }
}
