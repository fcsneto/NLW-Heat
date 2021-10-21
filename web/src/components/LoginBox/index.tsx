import { useContext } from 'react';
import { VscGithubInverted } from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth';

import styles from './styles.module.scss';


export const LoginBox = () =>{
    const { signInUrl } = useContext(AuthContext);

    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe sua mensagem</strong>
            <a href={signInUrl } className={styles.signWithGithub}>
                <VscGithubInverted/>
                Entrar com github
            </a>
        </div>
    );
};