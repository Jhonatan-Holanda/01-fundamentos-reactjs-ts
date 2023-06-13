import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css';
import { Avatar } from '../Avatar/Avatar';

export function Sidebar() {
  return(
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1523551539880-f0d20aae84a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <Avatar
          src="https://media.licdn.com/dms/image/C4D03AQGDMiwfIU7Vig/profile-displayphoto-shrink_800_800/0/1660323966985?e=1691625600&amp;v=beta&amp;t=3LezdeKoWKlgYWC67jyHWjToQYLCyDro5GNMQGKmRKg" 
        />

        <strong>Jhonatan Holanda</strong>
        <span>Frontend Developer</span>
      </div>

      <footer>
        <a href="">
          <PencilLine size={20}/>
          Editar seu perfil 
        </a>
      </footer>
    </aside>
  );
}