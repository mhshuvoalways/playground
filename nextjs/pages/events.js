import { useState } from "react";
import { useRouter } from "next/router";

function EvenList({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();

  const fetchEvent = async () => {
    const responsive = await fetch(
      "http://localhost:4000/events?category=sports"
    );
    const data = await responsive.json();
    setEvents(data);
    router.push("/events?category=sports", undefined, { shallow: true }); // shallow true er karone data abar notun kore asche. shallow route is used for bookmarks, sharing with seo
  };

  return (
    <>
      <button onClick={fetchEvent}>Sports category</button>
      {events.map((el) => (
        <h1 key={el.id} style={{ textAlign: "center" }}>
          {el.id} {el.title} {el.date} | {el.category}
        </h1>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  console.log(query);
  const queryString = category ? "category=sports" : "";
  const responsive = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await responsive.json();

  return {
    props: {
      eventList: data,
    },
  };
}

export default EvenList;

// pre-render with client side rendering
