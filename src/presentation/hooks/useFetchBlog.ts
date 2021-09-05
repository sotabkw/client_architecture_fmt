import BlogRepositoryImpl from "@repository/BlogRepository"
import BlogDriverImpl from "@driver/blogDriver"
import BlogUseCaseImpl from "@useCase/blogUseCase"
import { getClient } from "@lib/restClient/restClient"
import { errorHandler } from "@lib/ErrorHandler"

export const useFetchBlog = () => {
  const repository = new BlogRepositoryImpl(new BlogDriverImpl(getClient()))
  const useCase = new BlogUseCaseImpl(repository)

  const fetchBlog = async () => {
    return await useCase
      .fetchBlog()
      .then(async (response) => {
        return response
      })
      .catch((error: Error) =>
        errorHandler({
          error,
          alertMessage: "ブログの取得に失敗しました"
        })
      )
  }
  return { fetchBlog }
}
