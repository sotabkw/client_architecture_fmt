import { Blog } from "@domain/bolg"

export interface BlogUseCase {
  fetchArticles(): Promise<Blog>
}
