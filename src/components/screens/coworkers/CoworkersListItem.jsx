import useWindowDimensions from '../../../hooks/useWindowDimensions'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useHttp } from '../../../hooks/http.hook';
import {coworkersPopupClose, coworkersPopupOpen, coworkersItemSelect} from '../../../actions'
import CoworkersPopup from './CoworkersPopup';
import { useCallback, useState } from 'react';
import useRequest from '../../../hooks/useRequest'


const CoworkersListItem = ({name, position, phone, date, workplace, status, quote, id, image, symbol}) => {
    
    const dispatch = useDispatch()
    const {сoworkerItem} = useSelector(state => state.coworkerPopup.сoworkerItem)
    const {request} = useHttp()
    const {getCoworker} = useRequest()

    // const getCoworker = useCallback((id) => {
    //     request(`https://outmax-office.ru/api/worker/${id}`)
    //         // .then(data => console.log(data))
    //         .then(coworker => dispatch(coworkersItemSelect(coworker)))
    //         .then(dispatch(coworkersPopupOpen(true)))
    //         .then(data => console.log(data))
    //         // .then(coworker => renderCoworkerPopup(coworker))
    //         console.log(popupOpen)
    //         // .then(console.log('render'))
    //         // return (
    //         //     <CoworkersPopup/>
    //         // )

    // }, [id])
    // console.log(popupOpen === false)
    var popup;
    const getCoworkerPopup = useCallback((id) => {
        getCoworker(id)
            // .then(dispatch(coworkersPopupOpen()))
            .then(dispatch(coworkersItemSelect(id)))
            
            // .then(data => console.log(data))
            .then(data => renderCoworkerPopup(data))
            .then(console.log(сoworkerItem))
            // .then(renderCoworkerPopup)
            // .then(test())
            // console.log(сoworkerItem)
            
            // .then(console.log(id))
            // .then(coworker => renderCoworkerPopup(coworker, id))
    }, [id])

    
    const renderCoworkerPopup = (data) => {
       
            console.log(data)
            return <View data={data}/>
        
            
        
        // const test = renderCoworkerPopup(data)
        // console.log(popupOpen);
        // return popup = popupOpen === false ? <View /> : null
        // console.log(item); 
        // return item.payload.map(({...props}) => {
        //     // console.log({...props});
        //     // return <View {...props}/>
        //     // return popup
        // })
        // console.log(popup);
        // return popup
        // return popup
       
    }
    // const closePopup = () => {
    //     dispatch(coworkersPopupClose())
    // }
//    const popup = renderCoworkerPopup(сoworkerPopup)
    
    const { width } = useWindowDimensions();
    let statusClassName = "item__status";
    status === "Онлайн" ? statusClassName += " item__status-online" : status === "Офлайн" ? statusClassName += " item__status-offline" : statusClassName += " item__status-away"
    
    // let popup;
        // let popup = popupOpen ? <View coworker={сoworkerItem}/> : null
    
   
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
                <div className="item__more d-xxl-none d-xl-block"   onClick={() => getCoworkerPopup(id)}></div>
            </Col>
            </Row>
        </li>
        {/* {popup} */}
        
        <View/>
        </div>
    )
}



const View = (data) => {
    console.log(data);
    // console.log(props)
    const {name, position, status, date, workplace} = data;
    // console.log({name})
    return (
        <div className="coworkers coworkers-popup">
            <div className="coworkers-popup__close"></div>
            <div className="coworkers-popup__wrapper">
                <div className="item">
                    <div className="item__name-wrapper">
                        <div  className="item__round">чт</div>
                        <div className="item__block">
                            <span className="item__name">{name}</span>
                            <span className="item__position">{}</span>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span className="coworkers__title">Статус</span>
                    <span className="item__status">{}</span>
                </div>
                <div className="item">
                <span className="coworkers__title">Телефон</span>
                    <a href="tel:+79233296003" className="item__phone">85904102171</a>
                </div>
                <div className="item">
                <span className="coworkers__title">Дата рождения</span>
                    <span className="item__birthday">{}</span>
                </div>
                <div className="item">
                <span className="coworkers__title">Рабочее место</span>
                    <span className="item__place">{}</span>
                </div>
                <div className="item">
                    <span className="coworkers__title">Цитата</span>
                    <div className="item__quote">aaaa</div>
                </div>
            </div>
        </div>
    )
}

export default CoworkersListItem;
