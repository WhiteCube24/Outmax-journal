import { useHttp } from '../../../hooks/http.hook'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {coworkersFetching, coworkersFetched, coworkersFetchingError} from '../../../actions'
import useRequest from '../../../hooks/useRequest'

import CoworkersListItem from './CoworkersListItem'
import Spinner from '../../shared/spinner/Spinner'
import { Row, Col } from 'react-bootstrap'
import './Coworkers.scss'

const CoworkersList = () => {
    const [coworker, setCoworker] = useState(null)

    const onCoworkerSelected = (id) => {
        setCoworker(id)
        console.log(coworker)
    }
    const {coworkers, coworkersLoadingStatus} = useSelector(state => state.coworkers)
    const dispatch = useDispatch()
    const {request} = useHttp()

    const {getAllCoworkers} = useRequest()
    
    // getAllCoworkers()
    //     .then(data => console.log(data))
    // // console.log(getAllCoworkers) 

    useEffect(() => {
        onRequest()
    },[])

    const onRequest = () => {
        dispatch(coworkersFetching())
        getAllCoworkers()
            .then(data => dispatch(coworkersFetched(data)))
    }
    // useEffect(() => {
    //     dispatch(coworkersFetching())
    //     request("https://outmax-office.ru/api/workers/32")
    //         .then(data => dispatch(coworkersFetched(data)))
    //         .then(data => console.log(data))
    //         .catch(() => dispatch(coworkersFetchingError()))
       
    // }, []);

    

    if(coworkersLoadingStatus === 'loading') {
        return <Spinner/>
    }

    const renderCoworkersList = (arr) => {
        if(arr.length === 0) {
            return 
        }
        return arr.map(({id, ...props}) => {
            return <CoworkersListItem key={id} {...props} id={id} />
        })
    }

    const elements = renderCoworkersList(coworkers)

    return (
        <div className='coworkers'>
            <div className="coworkers__wrapper">
            <div className="coworkers__titles">
                <Row>
                    <Col xxl={3} xl={3} lg={4} md={6} sm={6} xs={6}><span className="coworkers__title">Сотрудник</span></Col>
                    <Col xxl={2} xl={3} lg={3} className="d-xxl-block d-xl-block d-lg-block d-md-none d-none"><span className="coworkers__title">Номер телефона</span></Col>
                    <Col xxl={2} xl={0} className="d-xxl-block d-none"><span className="coworkers__title">Дата рождения</span></Col>
                    <Col xxl={1} xl={2} lg={1} className="d-xxl-block d-xl-block d-lg-block d-md-none d-none"><span className="coworkers__title">Место</span></Col>
                    <Col xxl={1} xl={2} lg={2} md={4} sm={4} className="d-xxl-block d-xl-block d-lg-block d-md-block d-none"><span className="coworkers__title">Статус</span></Col>
                    <Col xxl={2} xl={2} lg={2} className="d-xxl-block d-xl-block d-lg-block d-md-none d-none"><span className="coworkers__title coworkers__none">Цитата</span></Col>
                </Row>
            </div>
            <ul className="coworkers__list">
                {elements}
            </ul>
            <button className="coworkers__btn">Показать ещё</button>
        </div>
        </div>
    )
}

export default CoworkersList
