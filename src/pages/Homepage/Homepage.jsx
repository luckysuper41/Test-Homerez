import React, {useState,useEffect} from 'react';
import './Homepage.css';
// import component
import HeaderForm from '../../components/HeaderForm/HeaderForm';
import TitleContent from '../../components/TitleContent/TitleContent';
import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';
// router
import { useHistory, useLocation  } from 'react-router-dom';
// axios to get API
import axios from 'axios';
// redux
import { useSelector,useDispatch} from 'react-redux';
import { addData } from '../../app/dataSlice';

export default function Homepage() {

     // la value in input-box
     const [search,setSearch] = useState('');
     // les values de API
     const [dataSearch,setDataSearch] = useState([]);
     // condition to show data result
     const [showResult,setShowResult] = useState(false);
     // condition to wait when get data de API
     const [loadingButton,setLoadingButton] = useState(false);
     // condition to show alert when click LIKE-button
     const [alertLike,setAlertLike] = useState(false);

     // useDispatch -> push action
     const dispatch = useDispatch();
     // useSelector -> get data from store
     const data = useSelector(state => state.data);
     // The useHistory -> access to the history instance that you may use to navigate.
     const history = useHistory();
     // The useLocation -> returns the location object that represents the current URL.
     // To check condition for showing data result
     const linkNow = useLocation ();

     // setup url of API
     // set url_origin=".../search" to avoid 404 errors
     let URL_origin = `https://en.wikipedia.org/api/rest_v1/page/summary/search`;
     const [URL, setURL] = useState(URL_origin);

     // site-web will fetch newData when URL changes
     useEffect(() => {
          const getData = async () => {
               try{
                    const response = await axios.get(URL);
                    setDataSearch(response.data);
               } catch(error){
                    console.log(error.message);
                    alert("No find this search");
               }
          }
          getData();
     },[URL])
   
     // handleSubmit -> Recherche
     const handleSubmit = (event) => {
          event.preventDefault();
          if(search){
               history.push('/SearchResult');
               setLoadingButton(true);
               // update URL et show result after 1s
               setTimeout(()=>{
                    setURL(`https://en.wikipedia.org/api/rest_v1/page/summary/${search.toLowerCase()}`);
                    setLoadingButton(false);
                    setShowResult(true);
               },1000);
          }
     }

     // handleAddData -> Like
     const handleAddData = () => {
          // this condition -> avoid to repeat data in store
          const dataIndex = data.findIndex(item => item.id === dataSearch.pageid);
          // if dataIndex >= 0 -> repeat data in store
          // if dataIndex < 0 -> store do not have this data -> can add to store 
          if(dataIndex < 0){
               const newData = {
                    id: dataSearch.pageid,
                    title: dataSearch.title
               }
               const action = addData(newData);
               dispatch(action)
          };

          // show ad when click Like-button
          setAlertLike(true);
          setTimeout(() => {
               setAlertLike(false); 
          }, 1000);
     }

     // data of result
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
                              handleClick = {handleAddData}
                         />
                         {alertLike ? <div className="alertLike">Add {dataSearch.title} in your LIKED</div> : null}
                    </div>
               </>
          )
     }
     
     return (
          <div className="container-home">
               <HeaderForm content="LIKED" className="liked" link="/liked"/>
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

               {loadingButton ? <Spinner/> : null}
               
               { showResult && linkNow.pathname === `/SearchResult` ? dataShow() : null}
          </div>
     )
}
