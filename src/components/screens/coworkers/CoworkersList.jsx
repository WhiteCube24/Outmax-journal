import { useHttp } from '../../../hooks/http.hook'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {coworkersFetching, coworkersFetched, coworkersFetchingError} from '../../../actions'
import CoworkersListItem from './CoworkersListItem'
import Spinner from '../../shared/spinner/Spinner'

import { Row, Col } from 'react-bootstrap'
import './Coworkers.scss'

const CoworkersList = () => {
    const {coworkers, coworkersLoadingStatus} = useSelector(state => state)
    const dispatch = useDispatch()
    const {request} = useHttp()


    useEffect(() => {
        dispatch(coworkersFetching())
        request("http://localhost:3001/coworkers")
            .then(data => dispatch(coworkersFetched(data)))
            .catch(() => dispatch(coworkersFetchingError()))
       
    }, []);

    if(coworkersLoadingStatus === 'loading') {
        return <Spinner/>
    }

    const renderCoworkersList = (arr) => {
        if(arr.length === 0) {
            return 
        }

        return arr.map(({id, ...props}) => {
            return <CoworkersListItem key={id} {...props}/>
        })
    }

    const elements = renderCoworkersList(coworkers)

    return (
        <div className='coworkers'>
            <div className="coworkers__wrapper">
            <div className="coworkers__titles">
            {/* <span className="coworkers__title">Сотрудник</span>
            <span className="coworkers__title">Номер телефона</span>
            <span className="coworkers__title">Дата рождения</span>
            <span className="coworkers__title">Место</span>
            <span className="coworkers__title">Статус</span>
            <span className="coworkers__title">Цитата</span> */}
                <Row>
                    <Col xxl={3} xl={3}><span className="coworkers__title">Сотрудник</span></Col>
                    <Col xxl={2} xl={3}><span className="coworkers__title">Номер телефона</span></Col>
                    <Col xxl={2} xl={2}><span className="coworkers__title">Дата рождения</span></Col>
                    <Col xxl={1} xl={2}><span className="coworkers__title">Место</span></Col>
                    <Col xxl={1} xl={2}><span className="coworkers__title">Статус</span></Col>
                    <Col xxl={2} xl={0}><span className="coworkers__title coworkers__none">Цитата</span></Col>
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
