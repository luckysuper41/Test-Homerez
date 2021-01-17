import React from 'react';
import './LikePage.css';
// import component
import HeaderForm from '../../components/HeaderForm/HeaderForm';
import TitleContent from '../../components/TitleContent/TitleContent';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { removeData } from '../../app/dataSlice';

export default function LikePage() {

     // useDispatch -> push action
     const dispatch = useDispatch();
     // useSelector -> get data from store
     const data = useSelector(state => state.data);

     // handleRemoveData -> Unlike
     const handleRemoveData = (item) => {
          const removeDataId = item.id;
          const action = removeData(removeDataId);
          dispatch(action);
     }

     return (
          <div className="container-liked">
               <HeaderForm content="BACK" className="back" link="/home"/>
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
