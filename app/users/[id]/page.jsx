const getUser = async (id) => {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();

  return data.data;
};

const UsersPage = async ({ params }) => {
  const user = await getUser(params.id);

  return (
    <>
      <h2>User Detail</h2>
      <div>
        <img src={user.avatar} alt={user.email} />
        <div>
          <h3>
            {user.id} {user.first_name} {user.last_name}
          </h3>
          <p>{user.email}</p>
        </div>
      </div>
    </>
  );
};

export default UsersPage;
