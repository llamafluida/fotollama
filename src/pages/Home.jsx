import styles from '../styles/Home.module.css';
import Navigation from '../components/Navigation';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Fotografías Llama</title>
        <meta name="description" content="Portafolio de fotografías" />
        <meta property="og:title" content="Fotografías Llama" />
        <meta property="og:description" content="Portafolio de fotografías de Iván Gutiérrez" />
        <meta property="og:image" content="social-logo.png" />
        <meta property="twitter:title" content="Fotografías Llama" />
        <meta
          property="twitter:description"
          content="Portafolio de fotografías de Iván Gutiérrez"
        />
        <meta property="twitter:image" content="social-logo.png" />
        <meta property="twitter:image:alt" content="Fotografía polaroid del logo de una llama" />
      </Helmet>
      <main className={styles.Main}>
        <div className={styles.Banner}>
          <header className={styles.Header}>
            <h1 className={styles['Header__title']}>Iván Gutiérrez</h1>
            <nav className={styles['Header__nav']}>
              <Navigation styles={styles} />
            </nav>
          </header>
        </div>
      </main>
    </>
  );
}
