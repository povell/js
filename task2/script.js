var articles = [
    {id: 1, name:"Телевизор", imgSrc: "./img/article1.jpg", price: 25000},
    {id: 2, name:"Смартфон", imgSrc: "./img/article2.jpg", price: 15000},
    {id: 3, name:"Ноутбук", imgSrc: "./img/article3.jpg", price: 24000},
    {id: 4, name:"Саундбар", imgSrc: "./img/article4.jpg", price: 20000},
    {id: 5, name:"Холодильник", imgSrc: "./img/article5.jpg", price: 30000},
];

var basket = []; //массив объектов {id, count}

var articleContainer = document.querySelector(".articles");
var basketContainer = document.querySelector(".basket");
var basketArticles = document.createElement("div");
basketArticles.className = "basket__articles";
basketContainer.appendChild(basketArticles);
var basketClearButton = document.createElement("button");
basketClearButton.innerHTML = "очистить корзину";
basketClearButton.onclick = clearBasket;
basketContainer.appendChild(basketClearButton);
basketDraw();
var article;
var summ = 0;

for(var i=0; i<articles.length; i++){
    article = document.createElement('div');
    article.className = "article";
    article.id = articles[i].id;
    articleName = document.createElement('h3');
    articleName.className = "article__name";
    articleName.innerHTML = articles[i].name;
    article.appendChild(articleName);
    articleImg = document.createElement('div');
    articleImg.className = "article__img";
    articleImg.style.backgroundImage = "url(" + articles[i].imgSrc + ")";
    article.appendChild(articleImg);
    articlePrice = document.createElement('div');
    articlePrice.className = "article__price";
    articlePrice.innerHTML = articles[i].price;
    article.appendChild(articlePrice);
    articleButtonBuy = document.createElement('button');
    articleButtonBuy.className = "article__button";
    articleButtonBuy.innerHTML = "В корзину";
    articleButtonBuy.onclick = addToBasket;
    article.appendChild(articleButtonBuy);
    articleContainer.appendChild(article);
};

function addToBasket(e) {
    var parentId = e.target.parentElement.id;
    if(basket.length == 0) {
        basket.push({"id": parentId, "count": 1});
        basketDraw();
        return;
    }

    for(var i=0; i<basket.length; i++){
        if(basket[i].id == parentId){
            basket[i].count += 1;
            basketDraw();
            return;
        }
    }
    basket.push({"id": parentId, "count": 1});
    basketDraw();
}

function clearBasket(e) {
    basket = [];
    basketDraw();
}

function basketDraw() {
    summ = 0;
    basketArticles.innerHTML = "";
    var str = "";
    if(basket.length == 0) {
        basketArticles.innerHTML = "корзина пуста";
        return;
    }
    for(var i=0; i<basket.length; i++) {
        for(j=0; j<articles.length; j++) {
            if(basket[i].id == articles[j].id) {
                summ += articles[j].price * basket[i].count;
                str += articles[j].name + ", количество: " + basket[i].count + ", цена: " + (articles[j].price * basket[i].count) + "<br>";
                break;
            }

        }
    }
    str += "Общая сумма: " + summ;
    basketArticles.innerHTML = str;
}