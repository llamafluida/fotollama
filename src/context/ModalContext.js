import React, { useState } from 'react';

const ModalContext = React.createContext(null);

const ModalContextProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  return <ModalContext.Provider value={{ modal, setModal }}>{children}</ModalContext.Provider>;
};

export { ModalContext, ModalContextProvider };
