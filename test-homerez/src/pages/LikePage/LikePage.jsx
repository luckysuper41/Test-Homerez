import React from 'react';
import './LikePage.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeData } from '../../app/dataSlice';

import HeaderForm from '../../components/HeaderForm/HeaderForm';
import TitleContent from '../../components/TitleContent/TitleContent';

export default function LikePage() {

     const dispatch = useDispatch();
     const data = useSelector(state => state.data);

     const handleRemoveData = (item) => {
          const removeDataId = item.id;
          const action = removeData(removeDataId);
          dispatch(action);
     }

     return (
          <div className="container-likepage">
               <HeaderForm content="BACK" className="back" link="/homerez/"/>
               <TitleContent title="Liked" />

               <div className="liked-content">
                    <ul className="liked-list">
                         {data.map( (item) => (
                              <li key={item.id} className="liked-item">
                                   <div className="item-content">- {item.title}</div>
                                   <button 
                                        className="item-button"
                                        onClick={()=>handleRemoveData(item)}
                                   >X
                                   </button>
                              </li>
                         ))}
                    </ul>
               </div>

          </div>
     )
}
