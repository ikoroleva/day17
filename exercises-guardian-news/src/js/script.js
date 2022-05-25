const loadData = async () => {

    try {
        const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/602/guardian.php');

        const parsedResponse = await response.json();
        console.log(parsedResponse);

        const navBar = document.querySelector('.navbar');
        const navList = document.createElement('ul');
        navList.classList.add('navbar_ul');
        navBar.appendChild(navList);

        parsedResponse.data.forEach(element => {

            const navItem = document.createElement('li');
            navItem.classList.add('navbar_ul_item');
            navList.appendChild(navItem);

            const navItemLink = document.createElement('a');
            navItemLink.classList.add('navbar_ul_item_link');
            navItemLink.textContent = element;
            navItem.appendChild(navItemLink);

            // const navElement = document.createElement('button');
            // navElement.classList.add('nav_bar_section');
            //navElement.textContent = element;
            //navElement.innerHTML = `<a class="nav__section__link" href="">${element}</a>`;


            navItem.addEventListener('click', (e) => {
                loadArticles(element);
            })

            loadArticles(parsedResponse.data[0]);

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

        const catHeader = document.querySelector('.category_header');
        const catDate = document.querySelector('.category_pubdate');
        const catImg = document.querySelector('.category_img');
        const catDesc = document.querySelector('.category_description');
        const articleCont = document.querySelector('.articles');
        const catCopy = document.querySelector('.category_copyright');

        catHeader.textContent = parsedResponse.data.channel.title;
        catDate.textContent = parsedResponse.data.channel.pubDate;
        catDesc.textContent = parsedResponse.data.channel.description;
        catCopy.textContent = parsedResponse.data.channel.copyright;

        catImg.setAttribute("src", parsedResponse.data.channel.image.url);
        catImg.setAttribute("alt", parsedResponse.data.channel.image.title);

        //console.log(articleCatImg);
        //const articles_arr = parsedResponse.data.channel.item;
        articleCont.innerHTML = '';


        parsedResponse.data.channel.item.forEach((element) => {


            const articleItem = document.createElement('div');
            articleItem.classList.add('article_item');
            articleCont.appendChild(articleItem);



            const articleItemHeader = document.createElement('h3');
            articleItemHeader.classList.add('article_item_h3');
            articleItemHeader.textContent = element.title;
            articleItem.appendChild(articleItemHeader);

            const articleItemDate = document.createElement('h4');
            articleItemDate.classList.add('article_item_h4');
            articleItemDate.textContent = element.pubDate;
            articleItem.appendChild(articleItemDate);


            const articleItemLink = document.createElement('a');
            articleItemLink.classList.add('article_item_link');
            articleItemLink.textContent = element.link;
            articleItem.appendChild(articleItemLink);

            const articleItemDesc = document.createElement('p');
            articleItemDesc.classList.add('article_item_desc');
            articleItemLink.innerHTML = element.description;
            articleItem.appendChild(articleItemDesc);

            const articleItemCats = document.createElement('div');
            articleItemCats.classList.add('article_item_cats');


            element.category.forEach((category) => {
                const categoryItem = document.createElement('span');
                categoryItem.classList.add('article_category');
                categoryItem.textContent = category;
                articleItemCats.appendChild(categoryItem);

            })
            articleItem.appendChild(articleItemCats);




            console.log(articleCont);












        })








    } catch (e) {
        console.log(e);
    }


}


document.addEventListener('DOMContentLoaded', () => {

    loadData();

});