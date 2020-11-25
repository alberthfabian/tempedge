import React from 'react';
import heart from '../../assets/media/Heart.png';
import { useDispatch } from 'react-redux';
import { modal } from '../../redux/actions/ShopAction';
import './style.css';

const Modal = () => {

  const dispatch = useDispatch();

  return (
    <div className='d-flex justify-content-center modal'>
      <div className='border border-primary rounded position-absolute bg-white' style={{width: '400px'}}>
        <div className='d-flex justify-content-center mt-3'>
          <img className='mr-3' style={{width: '30px', height: '30px'}} src={heart} alt='Heart'/>
          <h3>Added to Favorites</h3> 
        </div>
        <div className='text-right mr-3'>
          <button type='button' className='btn btn-primary mb-3' onClick={() => dispatch(modal(false))}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;