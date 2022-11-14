
import { Header } from "./Header";
import { Post } from "./Post"
import './global.css';
import styles from './App.module.css'
import { Sidebar } from "./Sidebar";




const post = [
  {
    id:1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/101836764?v=4',
      name: 'Lucas whirt',
      role: 'Front End Developer',
    },

    content: [
      {type:'paragraph', content:'Fala pessoal 👋', },
      {type:'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', }, 
      {type:'link', content:' 👉 jane.design/doctorcare', }, 

    ],
    publishedAt: new Date ('2022-05-03 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://i0.wp.com/techwek.com/wp-content/uploads/2020/12/Imagem-para-perfil.jpg?resize=512%2C473&ssl=1',
      name: 'Juliete Alves',
      role: 'Web Developer',
    },

    content: [
      {type:'paragraph', content:'Fala pessoal 👋', },
      {type:'paragraph', content:'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 ', }, 
      {type:'link', content:' Acesse e deixe seu feedback 👉 julietealves.design', }, 

    ],
    publishedAt: new Date ('2022-05-10 20:00:00')
  },
]



export function App() {
  return (
    <div>
      <Header />

    

    <div className={styles.wrapper}>
      
     <Sidebar />

      <main>
      {post.map(post => {
        return ( <Post 
          key={post.id}
        author= {post.author}
        content = {post.content}
        publishedAt = {post.publishedAt}
        />
        )
      })}
      
      </main>
    </div>
      
    </div>
   )
 }









