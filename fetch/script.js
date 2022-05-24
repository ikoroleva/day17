console.log('Hello');

// fetch('https://classes.codingbootcamp.cz/assets/classes/602/guardian.php')
//     //console.log(promise);

//     .then((response) => response.json())
//     .then((parsedResponse) => {
//         console.log(parsedResponse.data);
//     })
//     .catch((e) => {
//         console.log(e);
//     })

//     .finally(() => {
//         console.log("This will happen every time")
//     })

//console.log(response);

// console.log(promise);

const loadData = async () => {

    try {
        const response = await fetch('https://classes.codingbootcamp.cz/assets/classes/602/guardian.php?cat=science');

        const parsedResponse = await response.json();
        console.log(parsedResponse.data);
        console.log(parsedResponse);
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
    } finally {
        console.log("This will happen every time")
    }
}

loadData();