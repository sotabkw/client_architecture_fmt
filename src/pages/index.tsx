import React, { useEffect, useState } from "react"
import { useFetchBlog } from "@presentation/hooks/useFetchBlog"
import { Article } from "@domain/article"

const Index: React.FC = () => {
  const { fetchBlog } = useFetchBlog()
  const [articles, setArticles] = useState<Article[]>()

  useEffect(() => {
    fetchBlog().then((r) => setArticles(r.getContents))
  })

  return (
    <div className={"p-16 h-screen"}>
      <div className={"text-center font-black font-bold"}>{JSON.stringify(articles)}</div>
    </div>
  )
}

export default Index
