import { BlogUseCase } from "@interface/useCase/blogUseCase"
import BlogRepository from "@interface/repository/blogRepository"
import { Blog } from "@domain/bolg"

export default class BlogUseCaseImpl implements BlogUseCase {
  readonly blogRepository: BlogRepository

  constructor(repository: BlogRepository) {
    this.blogRepository = repository
  }

  async fetchBlog(): Promise<Blog> {
    return await this.blogRepository.fetchBlog()
  }
}
