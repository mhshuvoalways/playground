const Posts = ({ products }) => {
  return (
    <div>
      <h1>List of products</h1>
      {products.map((el) => (
        <div key={el.id}>
          <div>
            <h2>{el.name}</h2>
            <p>{el.price}</p>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  console.log('isr');
  const res = await fetch("http://localhost:4000/products");
  const products = await res.json();
  return {
    props: {
      products: products,
    },
    revalidate: 10 //isr
  };
}

export default Posts;
