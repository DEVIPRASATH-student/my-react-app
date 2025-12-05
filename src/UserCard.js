function UserCard(props) {
  return (
    <div style={{
      backgroundColor: "#333",
      padding: "15px",
      margin: "10px 0",
      borderRadius: "8px",
      color: "white"
    }}>
      <h3>Name: {props.name}</h3>
      <p>Age: {props.age}</p>
      <p>Location: {props.location}</p>
    </div>
  );
}

export default UserCard;
