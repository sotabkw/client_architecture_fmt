import BlogRepository from "@interface/repository/blogRepository"
import BlogDriver from "@interface/driver/blogDriver"
import { Blog } from "@domain/bolg"
import { Article } from "@domain/article"

export default class BlogRepositoryImpl implements BlogRepository {
  private readonly blogDriver: BlogDriver

  constructor(blogDriver: BlogDriver) {
    this.blogDriver = blogDriver
  }

  async fetchBlog(): Promise<Blog> {
    const res = await this.blogDriver.fetchBlog()
    return new Blog(
      res.contents.map((a) => new Article(a.id, a.body, a.title, a.publishedAt, a.category)),
      res.totalCount
    )
  }
}
