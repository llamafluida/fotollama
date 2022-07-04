import Footer from '../components/Footer';
import Header from '../containers/Header';
import { Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';
import folders from '../utils/folders';
import { useParams } from 'react-router-dom';
import styles from '../styles/Folder.module.css';

const Folder = () => {
  const { modal } = useContext(ModalContext);
  let params = useParams();
  return (
    <>
      <Header tabIndex={modal ? -1 : undefined} />
      <main className={styles.Folder}>
        {folders.includes(params.folderName) ? (
          <Outlet />
        ) : (
          <h1 className={styles.NotFound}>
            Lo sentimos, No se pudo encontrar la carpeta con el nombre {params.folderName}
          </h1>
        )}
      </main>
      <Footer tabIndex={modal ? -1 : undefined} />
    </>
  );
};

export default Folder;
