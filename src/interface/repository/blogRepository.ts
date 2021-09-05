import { Blog } from "@domain/bolg"

export default interface BlogRepository {
  findAll(): Promise<Blog>
}
