import { FC } from "react";
import { Link } from "react-router-dom";
import styles from './AuthPage.module.scss'


interface Link {
  name: string;
  href: string;
}

interface AuthPageProps {
  title: string;
  link: Link;
  children: React.ReactNode;
}

const AuthPage: FC<AuthPageProps> = ({ title, link, children }) => {
  return (
    <main className={styles.pageContent}>
      <h1 className="welcomeTitle">{title}</h1>
      {children}
      <Link to={link.href} className="authContentLink">
        {link.name}
      </Link>
    </main>
  )
}

export default AuthPage;