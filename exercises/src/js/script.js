const loadData = async () => {

    try {
        const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/602/guardian.php');

        const parsedResponse = await response.json();
        console.log(parsedResponse);

        const navBar = document.querySelector('.nav_bar');

        parsedResponse.data.forEach(element => {

            const navElement = document.createElement('button');
            navElement.classList.add('nav__section');
            navElement.textContent = element;
            //navElement.innerHTML = `<a class="nav__section__link" href="">${element}</a>`;
            navBar.appendChild(navElement);

            navElement.addEventListener('click', (e) => {
                loadArticles(element);
            })



        });

        // const container = document.createElement('div');
        // container.classList.add('container');
        // document.body.appendChild(container);

        // container.innerHTML = `<h1 class="title">${title}</h1>
        // <h3 class="pub_date">${img.pubDate}</h3>
        // <p class="description">${discription}</p>
        // <img src="${image.url}" alt="${image.title}" class="main_img">`
        // do something with the data
    } catch (e) {
        console.log(e);
    }

    // finally {
    //     console.log("This will happen every time")
    // }
}

const loadArticles = async (category) => {

    try {

        const response = await fetch(`https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=${category}`);
        const parsedResponse = await response.json();
        console.log(parsedResponse);

        const articleCatHeader = document.querySelector('.articles_header');
        const articleCatDate = document.querySelector('.articles_pubdate');
        const articleCatImg = document.querySelector('.articles_img');
        const articleCatDesc = document.querySelector('.articles_description');
        const articleArr = document.querySelector('.articles_container');
        const articleCopy = document.querySelector('.articles_copyright');

        articleCatHeader.textContent = parsedResponse.data.channel.title;
        articleCatDate.textContent = parsedResponse.data.channel.pubDate;
        articleCatDesc.textContent = parsedResponse.data.channel.description;
        articleCopy.textContent = parsedResponse.data.channel.copyright;

        articleCatImg.setAttribute("src", parsedResponse.data.channel.image.url);
        articleCatImg.setAttribute("alt", parsedResponse.data.channel.image.title);

        //console.log(articleCatImg);
        //const articles_arr = parsedResponse.data.channel.item;


        parsedResponse.data.channel.item.forEach((element) => {

            const articleItem = document.createElement('div');
            articleItem.classList.add('article_item');
            articleArr.appendChild(articleItem);

            //console.log(articleItem);

            const articleItemHeader = document.createElement('h3');
            articleItemHeader.classList.add('article_item_h3');
            articleItemHeader.textContent = element.title;
            articleItem.appendChild(articleItemHeader);

            //console.log(articleItemHeader);



            const articleItemDate = document.createElement('h3');
            articleItemDate.classList.add('article_item_h4');
            articleItemDate.textContent = element.pubDate;
            articleItem.appendChild(articleItemHeader);


            const articleItemLink = document.createElement('a');
            articleItemLink.classList.add('article_item_link');
            articleItemLink.textContent = element.link;
            articleItem.appendChild(articleItemLink);

            const articleItemDesc = document.createElement('p');
            articleItemDesc.classList.add('article_item_desc');
            articleItemLink.innerHTML = element.description;
            articleItem.appendChild(articleItemDesc);

            const articleItemCats = document.createElement('div');
            articleItemDesc.classList.add('article_item_Cats');















        })








    } catch (e) {
        console.log(e);
    }


}


document.addEventListener('DOMContentLoaded', () => {

    loadData();

});