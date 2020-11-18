import Axios from "axios";
import { useEffect,useState, useRef} from 'react'

export const useSearch = (query) => {
   
    const [state, setState] = useState({
        articles: [],
        status: 'IDLE',
        errors: ''
    })
    
    const cancelToken = useRef(null)
    useEffect(()=>{
        
        if(query.length < 3){
            return
        }

        if(cancelToken.current){
            // once request is cancelled by axios this will run and cancel execution
            console.log("Cancelling")
            cancelToken.current.cancel()
        }

        cancelToken.current = Axios.CancelToken.source();
        const getUser = async ()=> {
          try{
            // origin=*&  FOR CORS
            const response = await Axios.get(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${query}`, {
                cancelToken: cancelToken.current.token
            });
            const parsedResponse = []
            
            for(let i =0; i < response.data[1].length; i++){
              parsedResponse.push({
                id: response.data[3][i],
                label: response.data[1][i]
              })
            }
            setState({
               articles: parsedResponse,
               status: 'SUCCESS',
               error: '' 
            })
            // debugger
          }
          catch(err){
            if(Axios.isCancel(err)){
                // console.log('Cancelled')
                // return so it doesnt mark it error
                return
            }
            setState({
                articles: [],
                status: 'ERROR',
                error: err
            })
            debugger
          }
        } 
        getUser() 
      },[query])

    return state
}