import Toast from '../toast/toast';
require("babel-polyfill");

const getNewsData = async () => {
  await fetch(
    "https://newsapi.org/v2/everything?q=japan&from=2022-02-22&language=en&apiKey=de47336b12584399963ce449470a7800"
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      for (let item of data.articles) {
        createNews(item);
      }
    })
    .catch((err) => {
      console.log(err);
      document.querySelector('.error__container').style.display = 'block';
      document.querySelector('.news__title').style.display = 'none';
    });
};

const fetchNews = async () => {
  const data = await getNewsData();
  createNews(data);
};

fetchNews();

function createNews(data) {
  const news = document.querySelector(".news");

  const newsArticle = document.createElement("article");
  newsArticle.classList.add("news__article");

  const newsLink = document.createElement("a");
  newsLink.setAttribute("href", `${data.url}`);
  newsLink.setAttribute("target", "_blank");
  news.append(newsArticle);

  const newsImg = document.createElement("img");
  newsImg.classList.add("news__image");
  newsImg.setAttribute("src", `${data.urlToImage}`);

  const newsContent = document.createElement("div");
  newsContent.classList.add("news__content");

  const newsHeading = document.createElement("h2");
  newsHeading.classList.add("news__heading");
  newsHeading.textContent = `${data.title}`;

  const newsDescription = document.createElement("p");
  newsDescription.classList.add("news__description");
  newsDescription.textContent = `${data.description}`;

  newsArticle.append(newsLink);
  newsLink.append(newsContent);
  newsContent.append(newsImg, newsHeading, newsDescription);
}
