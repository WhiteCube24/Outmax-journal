
import { Row, Col } from 'react-bootstrap'

const CoworkersListItem = ({name, position, phone, birthday, place, status, quote}) => {
    return (
        <li className="coworkers__list-item">
            <Row>
            <Col xxl={3} xl={3}>
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
           <Col xxl={2} xl={3}>
           <div className="item">
                <a href="tel:+79233296003" className="item__phone">{phone}</a>
            </div>
            </Col>
            <Col xxl={2} xl={2}>
            <div className="item">
                <span className="item__birthday">{birthday}</span>
            </div>
            </Col>
           <Col xxl={1} xl={2}>
           <div className="item">
                <span className="item__place">{place}</span>
            </div>
           </Col>
            <Col xxl={1} xl={2}>
            <div className="item">
                <span className="item__status item__status-active">{status}</span>
            </div>
            </Col>
            <Col xxl={3} xl={0}>
            <div className="item">
                <div className="item__quote coworkers__none">{quote}</div>
            </div>
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