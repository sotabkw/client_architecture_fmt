import BlogRepository from "@interface/repository/blogRepository"
import BlogDriver from "@interface/driver/blogDriver"
import { Blog } from "@domain/bolg"
import { Article } from "@domain/article"

export default class BlogRepositoryImpl implements BlogRepository {
  private readonly articleDriver: BlogDriver

  constructor(blogDriver: BlogDriver) {
    this.articleDriver = blogDriver
  }

  async findAll(): Promise<Blog> {
    const res = await this.articleDriver.findAll()
    return new Blog(
      res.articles.map((a) => new Article(a.id, a.body, a.title, a.publishedAt, a.category)),
      res.totalCount
    )
  }
}
