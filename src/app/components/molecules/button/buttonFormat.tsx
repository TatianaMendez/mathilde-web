import React from 'react';
import styles from './button.module.css'; 

const ButtonFormat = ({txtBtn, type, full }: { txtBtn:string, type:string, full:boolean}) => {
  return (
      <div className={`${full ? styles['mth-btn-full'] : ''}`}>
            <button className={`${styles['mth-btn']} ${styles[`mth-btn-${type}`]} ${full ? styles['mth-btn-full'] : ''}`}>
              {txtBtn}
            </button>
      </div>
  );
};

export default ButtonFormat;
