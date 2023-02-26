import React,{useEffect} from 'react'
import { useGlobalContext } from './Context';


export default function HamBtn() {
  const {isOpen,close}=useGlobalContext()
 
  return (
    <div className={isOpen ? `ham-btn close` : `ham-btn`} onClick={close}>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
    </div>
  );
}
