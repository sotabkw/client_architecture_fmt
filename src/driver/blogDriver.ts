import BlogDriver, { BlogJson } from "@interface/driver/blogDriver"
import { RestClientInterface } from "@lib/restClient/restClient"

export default class BlogDriverImpl implements BlogDriver {
  constructor(private readonly restClient: RestClientInterface) {}
  async fetchBlog(): Promise<BlogJson> {
    const res = await this.restClient.get<BlogJson>("/api/v1/blog")
    return res
  }
}
