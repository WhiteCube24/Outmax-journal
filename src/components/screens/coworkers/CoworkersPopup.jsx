
import './Coworkers.scss'

const CoworkersPopup = () => {



    return (
        <div className="coworkers coworkers-popup">
            <div className="coworkers-popup__close"></div>
            <div className="coworkers-popup__wrapper">
                <div className="item">
                    <div className="item__name-wrapper">
                        <div  className="item__round">чт</div>
                        <div className="item__block">
                            <span className="item__name">Жуйко михаил</span>
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

export default CoworkersPopup;