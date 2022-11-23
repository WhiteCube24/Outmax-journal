
import { Row, Col } from 'react-bootstrap'

const CoworkersListItem = ({name, position, phone, birthday, place, status, quote}) => {
    return (
        <li className="coworkers__list-item">
            <Row className="d-flex align-items-center">
            <Col xxl={3} xl={3} lg={4} md={6} sm={8} xs={8}>
            <div className="item">
                <div className="item__name-wrapper">
                    <div  className="item__round">чт</div>
                    <div className="item__block">
                        <span className="item__name">{name}</span>
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
                <span className="item__birthday d-xxl-block d-none">{birthday}</span>
            </div>
            </Col>
           <Col xxl={1} xl={2} lg={1} className="d-xxl-block d-xl-block d-lg-block d-md-none d-none">
           <div className="item">
                <span className="item__place">{place}</span>
            </div>
           </Col>
            <Col xxl={1} xl={2} lg={2} md={4} sm={4} className="d-xxl-block d-xl-block d-lg-block d-md-block d-none">
            <div className="item">
                <span className="item__status item__status-active">{status}</span>
            </div>
            </Col>
            <Col xxl={3} xl={0} className="d-xxl-block d-none">
            <div className="item">
                <div className="item__quote d-xxl-block d-none">{quote}</div>
            </div>
            </Col>
            <Col xxl={0} xl={2} lg={2} md={2} sm={4} xs={4}>
                <div className="item__more">Подробнее</div>
            </Col>
            </Row>
        </li>
    )
}

export default CoworkersListItem;


// <div className="item">
// <div className="item__name-wrapper">
//     <div  className="item__round">чт</div>
//     <div className="item__block">
//         <span className="item__name">{name}</span>
//         <span className="item__position">{position}</span>
//     </div>
// </div>
// </div>
// <div className="item">
// <a href="tel:+79233296003" className="item__phone">{phone}</a>
// </div>
// <div className="item">
// <span className="item__birthday">{birthday}</span>
// </div>
// <div className="item">
// <span className="item__place">{place}</span>
// </div>
// <div className="item">
// <span className="item__status item__status-active">{status}</span>
// </div>
// <div className="item">
// <div className="item__quote">{quote}</div>
// </div>