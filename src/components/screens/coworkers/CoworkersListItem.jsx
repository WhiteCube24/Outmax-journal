import useWindowDimensions from '../../../hooks/useWindowDimensions'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useHttp } from '../../../hooks/http.hook';
import {coworkersPopupClose, coworkersPopupOpen, coworkersItemSelect} from '../../../actions'
import CoworkersPopup from './CoworkersPopup';
import { useCallback } from 'react';
import useRequest from '../../../hooks/useRequest'


const CoworkersListItem = ({name, position, phone, date, workplace, status, quote, id, image, symbol}) => {
    
    // useSelector вынести state.popupOpen(true/false)
    // динамический класс добавлять основываясь на state.popupOpen
    // // при запросе возвращать компонент попапа, передавать все пропсы как в лист айтеме
    const dispatch = useDispatch()
    const {сoworkerPopup, popupOpen} = useSelector(state => state.coworkerPopup)
    const {request} = useHttp()
    const {getCoworker} = useRequest()

    // const getCoworker = useCallback((id) => {
    //     request(`https://outmax-office.ru/api/worker/${id}`)
    //         // .then(data => console.log(data))
    //         .then(coworker => dispatch(coworkersItemSelect(coworker)))
    //         .then(dispatch(coworkersPopupOpen(true)))
    //         // .then(data => console.log(data))
    //         .then(coworker => renderCoworkerPopup(coworker))
    //         console.log(popupOpen)
    //         // .then(console.log('render'))
    //         // return (
    //         //     <CoworkersPopup/>
    //         // )

    // }, [id])

    const getCoworkerPopup = useCallback((id) => {
        getCoworker(id)
            .then(coworker => dispatch(coworkersItemSelect(coworker)))
            .then(data => console.log(data))
            .then(dispatch(coworkersPopupOpen(true)))
    }, [id])


    const renderCoworkerPopup = (item) => {
        // event.stopPropagation()
        // if(item ===  undefined) {
        //     return
        // }
        
        return item.payload.map(({id, ...props}) => {
            return <View {...props}/>
        })
        // console.log(item.payload[0])
        // console.log(item.payload);
        // return item.payload.map(it => {
        //     return <View {...props}/>
        // })
    //    let  arr = item.payload
       
    //     // console.log(item);
    //     // console.log(typeof item)
    //     return item.payload.map(({id, ...props}) => {
    //         return <View {...props}/>
    //     })
    }

    // const closePopup = () => {
    //     dispatch(coworkersPopupClose())
    // }
//    const popup = renderCoworkerPopup(сoworkerPopup)
    
    const { width } = useWindowDimensions();
    let statusClassName = "item__status";

    status === "Онлайн" ? statusClassName += " item__status-online" : status === "Офлайн" ? statusClassName += " item__status-offline" : statusClassName += " item__status-away"
 
    // const popup = popupOpen ? <View/> : null

   
    const workerImage = () => {
        let arr = Object.values({image})
        for(let i = 0; i < arr.length; i++) {
            return arr[i] === null ? false : true
        }   
    }
    return (
        <div>
            <li className="coworkers__list-item">
            <Row className="d-flex align-items-center">
            <Col xxl={3} xl={3} lg={4} md={6} sm={8} xs={8}>
            <div className="item">
                <div className="item__name-wrapper">
                    <div  className="item__round">
                        {workerImage() ? <img src={image} alt=""/> : <div>{symbol}</div>}
                       {/* {{image}.values  == undefined ? <div>{symbol}</div> : <img src={image} alt=""/>  } */}
                    </div>
                    <div className="item__block">
                        <span className={(width > 767 ? 'item__name' : statusClassName)}>{name}</span>
                        <span className="item__position">{position}</span>
                    </div>
                </div>
            </div>
            </Col>
           <Col xxl={2} xl={3} lg={3} className="d-xxl-block d-xl-block d-lg-block d-md-none d-none">
           <div className="item">
                <a href="tel:+79233296003" className="item__phone">{phone}</a>
            </div>
            </Col>
            <Col xxl={2} xl={0} className="d-xxl-block d-none">
            <div className="item">
                <span className="item__birthday d-xxl-block d-none">{date}</span>
            </div>
            </Col>
           <Col xxl={1} xl={2} lg={1} className="d-xxl-block d-xl-block d-lg-block d-md-none d-none">
           <div className="item">
                <span className="item__place">{workplace}</span>
            </div>
           </Col>
            <Col xxl={1} xl={2} lg={2} md={4} sm={4} className="d-xxl-block d-xl-block d-lg-block d-md-block d-none">
            <div className="item">
                <span className={statusClassName}>{status}</span>
            </div>
            </Col>
            <Col xxl={3} xl={0} className="d-xxl-block d-none">
            <div className="item">
                <div className="item__quote d-xxl-block d-none">{id}</div>
            </div>
            </Col>
            <Col xxl={0} xl={2} lg={2} md={2} sm={4} xs={4}>
                <div className="item__more d-xxl-none d-xl-block" onClick={() => getCoworkerPopup(id)}></div>
            </Col>
            </Row>
        </li>
        {/* {popup} */}
        {/* <View/> */}
        </div>
    )
}



const View = ({name}) => {

    

    return (
        <div className="coworkers coworkers-popup">
            <div className="coworkers-popup__close"></div>
            <div className="coworkers-popup__wrapper">
                <div className="item">
                    <div className="item__name-wrapper">
                        <div  className="item__round">чт</div>
                        <div className="item__block">
                            <span className="item__name">{name}</span>
                            <span className="item__position">Дизайнер</span>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span className="coworkers__title">Статус</span>
                    <span className="item__status">Online</span>
                </div>
                <div className="item">
                <span className="coworkers__title">Телефон</span>
                    <a href="tel:+79233296003" className="item__phone">85904102171</a>
                </div>
                <div className="item">
                <span className="coworkers__title">Дата рождения</span>
                    <span className="item__birthday">22 ноября</span>
                </div>
                <div className="item">
                <span className="coworkers__title">Рабочее место</span>
                    <span className="item__place">Офис</span>
                </div>
                <div className="item">
                    <span className="coworkers__title">Цитата</span>
                    <div className="item__quote">фвывф вфыв фавdsadsa ad asd sa524 5dad asd asd as asd sa sadsadsadas dssdas das 135 аываыавы аыв</div>
                </div>
            </div>
        </div>
    )
}

export default CoworkersListItem;
