import Axios from "axios";
import { useEffect,useState, useRef, useCallback} from 'react'

export const useSearch = (query = '', limit = 10) => {
   
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
        
        // same like passing ref in input
        cancelToken.current = Axios.CancelToken.source();

        // before start searching status pending
        setState({...state, status: 'PENDING'})
        const getUser = async ()=> {
          try{
            // origin=*&  FOR CORS
            const response = await Axios.get(`https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&search=${query}&limit=${limit}`, {
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

// Only once user stops typing then sends requests
export const useDebounce = (value, delay = 500) => {
   const [debounceValue, setDebounceValue] = useState(value)

   useEffect(() => {
    const timer = setTimeout(()=> {
       setDebounceValue(value)
     }, delay)
     return () => {
       clearTimeout(timer)
     }
   }, [value, delay])

   return debounceValue
}

export const useSearchForm = () => {
   const [searchValue, setSearchValue] = useState('')

   // since we are not using anything outside of function only what we passed so use this
   const onSearchChange = useCallback((e) => setSearchValue(e.target.value), [])

   return {
     searchValue,
     onSearchChange
   }
}