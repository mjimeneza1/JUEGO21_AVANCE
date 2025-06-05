import { useEffect } from 'react';

const useBodyClass = (classNames) => {
  useEffect(() => {
    const body = document.body;

    if (body) {
      // Convertimos classNames en un array si es una cadena de clases
      const classes = Array.isArray(classNames) ? classNames : classNames.split(' ');

      // Agregamos cada clase al elemento body
      body.classList.add(...classes);

      // Removemos las clases cuando el componente se desmonta
      return () => {
        body.classList.remove(...classes);
      };
    }
  }, [classNames]);
};

export default useBodyClass;