import { Blog } from "@domain/bolg"

export interface BlogUseCase {
  fetchBlog(): Promise<Blog>
}
