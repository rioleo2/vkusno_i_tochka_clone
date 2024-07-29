import React, {useState} from 'react';

import './catalog.css'
import { PRODUCTS } from "../const/products";

export default function Catalog() {
    const [items, setItems] = useState(PRODUCTS);
    // console.log(items);

    const filterItems = (catItem) => {
        const updateItems = PRODUCTS.filter((curItem) => {
            return curItem.category === catItem;
        });
        setItems(updateItems);
    }
    
    return (
        <div class="main-catalog">
            <h1 class="main-catalog__title">Наше меню</h1>
            <div class="catalog-categories">
                <div class="catalog-categories-item" onClick={() => filterItems("New")}>Новинки</div>
                <div class="catalog-categories-item" onClick={() => filterItems("Sets")}>Сеты и пары</div>
                <div class="catalog-categories-item" onClick={() => filterItems("Popular")}>Популярное</div>
                <div class="catalog-categories-item" onClick={() => filterItems("Drinks")}>Напитки</div>
                <div class="catalog-categories-item" onClick={() => filterItems("Superbox")}>Супер Бокс</div>
                <div class="catalog-categories-item" onClick={() => filterItems("Combo")}>Комбо Обед</div>
                <div class="catalog-categories-item" onClick={() => filterItems("Burgers")}>Бургеры и роллы</div>
                <div class="catalog-categories-item" onClick={() => filterItems("Potato")}>Картофель, стартеры и салаты</div>
            </div>
            <ul class="cards">
                {items.map((el, i) =>
                    <li class="catalog-card base-grid-item">
                        <img src={el.imagePath} alt="" class="catalog-card__img"></img>
                        <span class="catalog-card__title">{el.productTitle}</span>
                        <p class="catalog-card__size">{el.prodictSize}</p>
                        <p class="catalog-card__price">{el.productPrice}</p>
                    </li>
                )}
            </ul>
        </div>
    )
}

