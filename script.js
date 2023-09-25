// references to the navigation links and the lists of my articles and my Twitter threads
const showArticlesLink = document.getElementById("showArticles");
const showTwitterLink = document.getElementById("showTwitter");
const articleList = document.getElementById("articleList");
const twitterList = document.getElementById("twitterList");

// event listeners to the navigation links
showArticlesLink.addEventListener("click", () => {
    //visibility of the article list toggle
    articleList.style.display = "block";
    twitterList.style.display = "none";
});

showTwitterLink.addEventListener("click", () => {
    // visibility of my Twitter list toggle
    twitterList.style.display = "block";
    articleList.style.display = "none";
});

//hide the full lists of my articles and Twitter threads
articleList.style.display = "none";
twitterList.style.display = "none";
