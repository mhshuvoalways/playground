function User({ users }) {

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <div>
            {user.id}.
           --- {user.name}
           --- {user.email}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
}

export default User;
