const genBtn = document.getElementById('btn');
const joke = document.getElementById('joke');

let apiKey = '+0Lx7Sceylol4cZQHWNYKQ==cUfIkFKC6WSqGnyp';

const options = {
    method: 'GET',
    headers: {
        'X-API-Key': apiKey,
    },
};

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';

async function getJoke() {

    try {
        joke.innerText = 'Loading...';

        genBtn.disabled = true;
        genBtn.innerText = 'Loading...';

        const response = await fetch(apiURL, options);
        const data = await response.json();

        genBtn.disabled = false;
        genBtn.innerText = 'Genreate a joke';

        joke.innerText = data[0].joke;
    } catch (error) {
        joke.innerText = 'An error happend try again!';
        genBtn.disabled = false;
        genBtn.innerText = 'Genreate a joke';
        console.log(error)
    }


}

genBtn.addEventListener('click', getJoke)