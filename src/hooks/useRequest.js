import { useHttp } from "./http.hook";
import axios from "axios";
const useRequest = () => {
    const {request} = useHttp()

    const apiAddress = 'http://127.0.0.1:8000/api/workers/8';
    const apiGetOne = 'https://outmax-office.ru/api/worker/'

    const getAllCoworkers = async (count = 8) => {
        // const res = await request(apiAddress)
        // return res
        
            return await axios.get(`http://127.0.0.1:8000/api/workers/${count}`).then((response) => {
                console.log(response.data)
                return  response.data
            })
        
        
        
    }
    const getCoworker = async (id) => {
        const res = await request(`https://outmax-office.ru/api/worker/${id}`)
        // console.log(res[0])
        return res[0]
    }


    
    return {getAllCoworkers, getCoworker}
}

export default useRequest;