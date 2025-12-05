function UserList() {
  const users = ["Prasath", "Deepak", "Jason", "Rahul"];

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>User List:</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
