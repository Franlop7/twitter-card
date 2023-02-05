import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'franlop7',
    name: 'Francisco López Torres',
    isFollowing: true
  },
  {
    userName: 'fjcalzado',
    name: 'Javier Calzado',
    isFollowing: false
  },
  {
    userName: 'v-borrego',
    name: 'Víctor Borrego Pérez',
    isFollowing: true
  }
]
export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
