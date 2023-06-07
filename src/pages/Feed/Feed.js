import React, { useEffect } from 'react'
import CardPost from '../../components/CardPost/CardPost'
import CriarPost from '../../components/CriarPost/CriarPost'
import useRequestData from '../../hooks/useRequestData'
import { FeedContainer } from './styled'
import { irParaLogin } from '../../Routes/coordinator'
import { useProtectPage } from '../../hooks/useProtectPage'


export default function Feed() {

  const token = localStorage.getItem('token')
  useProtectPage()
  const config = {
    headers: {
      Authorization: token
    }
  }
  const [posts] = useRequestData([], '/posts',config)
  return (
    <FeedContainer>
      <h1>Feed</h1>
      <section>
        <h3>Novo post</h3>
        <CriarPost />
      </section>
      {
        posts.map((post) => {
          return <CardPost key={post.id} post={post} />
        })
      }
    </FeedContainer>
  )
}
