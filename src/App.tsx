import { Post, PostType } from './components/Post/Post';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';

import styles from './App.module.css';
import './global.css';

const postsMock: PostType[]= [
  {
    id: 1,
    author:{
      avatarUrl:'https://media.licdn.com/dms/image/D4D03AQF2XZKYFmk_AA/profile-displayphoto-shrink_200_200/0/1679241758341?e=1692230400&v=beta&t=UpDhznNN7lCwTpD5CSaFBIDViKAgmB37VMp7flBtvZc',
      name:'Rafael Jesus',
      role:'Mobile Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
      {type: 'link', content: '#novoprojeto'},
      {type: 'link', content: '#nlw'},
      {type: 'link', content: '#rocketseat'},
    ],
    publishedAt: new Date('2023-06-11 20:15:00'),
  },
  {
    id: 2,
    author:{
      avatarUrl:'https://media.licdn.com/dms/image/C4D03AQGDMiwfIU7Vig/profile-displayphoto-shrink_800_800/0/1660323966985?e=1692230400&v=beta&t=jlKkbm-nfz-9RlXmU_RAktL_O7JNCG-6t9fnNPZSIQ8',
      name:'Jhonatan Holanda',
      role:'Frontend Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
      {type: 'link', content: '#novoprojeto'},
      {type: 'link', content: '#nlw'},
      {type: 'link', content: '#rocketseat'},
    ],
    publishedAt: new Date('2023-06-10 13:15:00'),
  },
  {
    id: 3,
    author:{
      avatarUrl:'https://media.licdn.com/dms/image/D4D03AQFvJe_QObNa8Q/profile-displayphoto-shrink_200_200/0/1679258969169?e=1692230400&v=beta&t=EKXkAwlL3YzumdYJbAOv_xHNxa5xyGBJJC8Tj2Xw2yU',
      name:'Edesio Gonçalves',
      role:'PowerPlatform Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
      {type: 'link', content: '#novoprojeto'},
      {type: 'link', content: '#nlw'},
      {type: 'link', content: '#rocketseat'},
    ],
    publishedAt: new Date('2023-06-06 08:15:00'),
  },
]

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {
            postsMock.map((post)=>{
              return (
                <Post
                  key={post.id}
                  post={post}
                />
              ) 
            }) 
          }
        </main>
      </div>
    </>
  )
}
