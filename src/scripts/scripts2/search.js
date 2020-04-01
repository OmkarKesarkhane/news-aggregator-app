

export class TopNews{

    async TopHeadings(){
    try{
    const Topnews = await fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=02fbe3d555cf4e3483390b73a7a7bb24');
    const Topres = await Topnews.json();
    this.topresults = Topres.articles;
    }
    catch(error)
    {
        console.log("Error" + error);
    }
 }
    
}

export class Search{
constructor(query){
    this.query = query;
}
        async getSearchResults(query){
        const news = await fetch(`https://newsapi.org/v2/top-headlines?q=${this.query}&apiKey=02fbe3d555cf4e3483390b73a7a7bb24`);
        const res = await news.json();
        this.results = res.articles;
   }

}

