const NewsArticle = ({ articles, category }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>List of news articles for {category}</h1>
      <hr />
      {articles.map((el) => (
        <div key={el.id}>
          <p>{el.name}</p>
          <p>{el.category}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  // console.log(req.headers.cookie);
  // console.log(query); // http://localhost:3000/news/sports?subcategory=football 
  res.setHeader("set-cookie", ["name=shuvo"]);
  // const { category } = query;
  const { category } = params;

  const resPonse = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const articles = await resPonse.json();

  return {
    props: {
      // props has to object
      articles: articles,
      category: category,
    },
  };
}

export default NewsArticle;
