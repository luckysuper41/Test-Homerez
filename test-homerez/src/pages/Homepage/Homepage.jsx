import React, {useState,useEffect} from 'react';
import './Homepage.css';
import axios from 'axios';
import { useSelector,useDispatch} from 'react-redux';
import { addData } from '../../app/dataSlice';

import HeaderForm from '../../components/HeaderForm/HeaderForm';
import TitleContent from '../../components/TitleContent/TitleContent';
import Button from '../../components/Button/Button';

export default function Homepage() {

     const [search,setSearch] = useState('');
     const [showResult,setShowResult] = useState(false);
     const [dataSearch,setDataSearch] = useState([]);

     const dispatch = useDispatch();
     const data = useSelector(state => state.data);

     let URL_origin = `https://en.wikipedia.org/api/rest_v1/page/summary/`;
     const [URL, setURL] = useState(URL_origin);

     useEffect(() => {
          const getData = async () => {
               try{
                    const response = await axios.get(URL);
                    setDataSearch(response.data);
               } catch(error){
                    console.log(error.message);
               }
          }
          getData();
     },[URL])
   
     const handleSubmit = (event) => {
          event.preventDefault();
          if(search){
               setShowResult(true);
               setURL(`https://en.wikipedia.org/api/rest_v1/page/summary/${search.toLowerCase()}`);
          }
     }

     const handleClick = () => {
          const dataIndex = data.findIndex(item => item.id === dataSearch.pageid);
          if(dataIndex < 0){
               const newData = {
                    id: dataSearch.pageid,
                    title: dataSearch.title
               }
     
               const action = addData(newData);
               dispatch(action)
               console.log(`Vous aimez ${dataSearch.title}`);
          }else{
               console.log(`Vous avez aimez ${dataSearch.title}`);
          };
          
     }

     const dataShow = () => {
          return(
               <>
                    <TitleContent title="Results" />
                    <div className="search-content">                   
                         <h3>{dataSearch.title}</h3>
                         <h4>{dataSearch.description}</h4>
                         <p>{dataSearch.extract}</p>
                         <Button 
                              content="LIKE"
                              type="button" 
                              className="button-like" 
                              handleClick = {handleClick}
                         />
                    </div>
               </>
          )
     }
     
     return (
          <div className="container-homepage">
               <HeaderForm content="LIKED" className="liked" link="/homerez/like-page"/>
               <form onSubmit={handleSubmit} className="form-container">
                    <label>
                         <span>Page title</span>
                         <input 
                              type="text" 
                              name="search"
                              value={search}
                              onChange={(event)=>{
                                   event.preventDefault();
                                   setSearch(event.target.value)}}
                              placeholder='Try "Paris" or "Marseille"' 
                              required
                         />
                    </label>
                    <Button 
                         content="SEARCH" 
                         type="submit" 
                         className="button-search"
                    />
               </form>
               { showResult ? dataShow() : null}
               
          </div>
     )
}
