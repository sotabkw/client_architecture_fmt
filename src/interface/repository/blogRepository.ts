import { Blog } from "@domain/bolg"

export default interface BlogRepository {
  fetchBlog(): Promise<Blog>
}
