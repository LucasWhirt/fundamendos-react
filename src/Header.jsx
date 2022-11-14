import styles from './Header.module.css'

import girafalogo from '../src/assets/girafa-logo.svg'

export function Header () {
    return (
        <header className={styles.Header} >
<img src={girafalogo} alt="logotipo do projeto"></img>
        </header>
        
    );
}

