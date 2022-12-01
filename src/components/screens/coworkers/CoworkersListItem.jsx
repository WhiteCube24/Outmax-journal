import useWindowDimensions from '../../../hooks/useWindowDimensions'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useHttp } from '../../../hooks/http.hook';
import {coworkersPopupClose, coworkersPopupOpen, coworkersItemSelect} from '../../../actions'
import CoworkersPopup from './CoworkersPopup';
import { useCallback, useState } from 'react';
import useRequest from '../../../hooks/useRequest'


const CoworkersListItem = ({name, position, phone, date, workplace, status, quote, id, image, symbol}) => {
    
    const { width } = useWindowDimensions();
    let statusClassName = "item__status";
    status === "Онлайн" ? statusClassName += " item__status-online" : status === "Офлайн" ? statusClassName += " item__status-offline" : statusClassName += " item__status-away"
    

    
   
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
                        <div className="item__more d-xxl-none d-xl-block"></div>
                    </Col>
                </Row>
            </li>
        </div>
    )
}





export default CoworkersListItem;
