import React, { useState, useRef, useEffect, useContext } from 'react';
import Polaroid from '../components/Polaroid';
import Modal from '../containers/Modal';
import images from '../utils/images';
import { useParams } from 'react-router-dom';
import styles from '../styles/Gallery.module.css';
import Photography from '../components/Photography';
import { ModalContext } from '../context/ModalContext';
import { Helmet } from 'react-helmet';

const Gallery = () => {
  let params = useParams();
  const folder = params.folderName;
  const imageList = images.filter(value => {
    return value.name == folder;
  })[0].images;
  const { modal, setModal } = useContext(ModalContext);
  const [imageSelected, setImageSelected] = useState({ index: 0, direction: 1 });
  const focusModal = useRef();

  useEffect(() => {
    if (focusModal.current) {
      focusModal.current.focus();
    }
  }, [modal]);

  const openModal = index => {
    if (!modal) {
      setImageSelected(state => ({ ...state, index: index }));
      setModal(true);
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setModal(false);
    document.body.style.overflow = 'initial';
  };

  const nextImage = () => {
    if (imageList.length - 1 === imageSelected.index) {
      setImageSelected({ index: 0, direction: 1 });
    } else {
      setImageSelected(state => ({ index: state.index + 1, direction: 1 }));
    }
  };

  const prevImage = () => {
    if (imageSelected.index === 0) {
      setImageSelected({ index: imageList.length - 1, direction: -1 });
    } else {
      setImageSelected(state => ({ index: state.index - 1, direction: -1 }));
    }
  };

  const handleKeyDown = e => {
    if (modal) {
      switch (e.key) {
        case 'ArrowLeft':
          prevImage();
          break;
        case 'ArrowRight':
          nextImage();
          break;
        case 'Escape':
          closeModal();
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>{`Fotollama - ${folder.split('-').join(' ')}`}</title>
        <meta name="description" content="Portafolio de fotografías de Iván Gutiérrez" />
      </Helmet>
      <div className={styles.Gallery}>
        {imageList.map((image, key) => (
          <Polaroid
            src={`images/${folder}/${image.src}`}
            alt={image.text}
            key={key}
            onClick={() => openModal(key)}
            tabIndex={modal ? -1 : undefined}
          />
        ))}
      </div>
      {modal && (
        <Modal
          onClose={closeModal}
          onPrev={prevImage}
          onNext={nextImage}
          onKeyDown={handleKeyDown}
          focusref={focusModal}
          animationKey={imageSelected}
        >
          <Photography
            src={`images/${folder}/${imageList[imageSelected.index].src}`}
            alt={imageList[imageSelected.index].text}
          />
        </Modal>
      )}
    </>
  );
};

export default Gallery;
