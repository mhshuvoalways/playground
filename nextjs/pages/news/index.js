const NewsArticle = ({ articles }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>List of news articles</h1>
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

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/news");
  const articles = await res.json();

  return {
    props: {
      articles: articles,
    },
  };
}

export default NewsArticle;
