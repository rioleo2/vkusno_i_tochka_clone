import "./subscribe.css"

export default function Subscribe() {
    return (
        <div className="subscribe">
        <div className="subscribe__left">
            <h2 className="subscribe__title">Выгодная рассылка — и точка!</h2>
            <span className="subscribe__description">Акции, новости и скидки только для подписчиков. Оставляй почту,
                получай выгодные предложения!</span>
        </div>
        <div className="subscribe__right">
            <div className="subscribe__input">
                <input type="text" name="" id="" placeholder="Введите адрес эл. почты" class="input-field"></input>
                <div className="subscribe__btn"> Подписаться </div>
            </div>
            <span className="subscribe__rules">Нажимая «Подписаться», ты соглашаешься на обработку персональных
                данных</span>
        </div>
    </div>
    )
}