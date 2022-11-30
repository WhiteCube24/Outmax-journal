import { useHttp } from "./http.hook";

const useRequest = () => {
    const {request} = useHttp()

    const apiAddress = 'https://outmax-office.ru/api/workers/32';
    const apiGetOne = 'https://outmax-office.ru/api/worker/'

    const getAllCoworkers = async () => {
        const res = await request(apiAddress)
        return res
        
    }
    const getCoworker = async (id) => {
        const res = await request(`https://outmax-office.ru/api/worker/${id}`)
        return res
    }
    
    return {getAllCoworkers, getCoworker}
}

export default useRequest;