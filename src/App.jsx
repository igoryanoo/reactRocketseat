import { Header } from './components/header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';


function App() {
  return (
    <div>

      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Igor Yano"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam asperiores vero ducimus, vitae laudantium consequatur eos id debitis rem sed facere tempora eum consectetur illum provident expedita aspernatur? Deleniti, tempora."
          />
          <Post 
            author="Giovanna dos Santos"
            content="lorem ipsun"
          />
        </main>
      </div>


    </div>
  )
}

export default App