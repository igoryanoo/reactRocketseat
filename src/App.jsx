import { Header } from './components/header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/128192426?v=4',
      name: 'Igor Yano maraci',
      role: 'FullStack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare', },
    ],
    publishedAt: new Date('2026-03-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/128192426?v=4',
      name: 'Giovanna Pereira',
      role: 'FullStack Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. Vou namorar com a G. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'jane.design/doctorcare', },
    ],
    publishedAt: new Date('2026-07-03 20:00:00'),
  },
];


function App() {
  return (
    <div>

      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
          })}
        </main>
      </div>


    </div>
  )
}

export default App