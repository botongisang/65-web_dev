function ProfileCard(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Favorite Subject: {props.subject}</p>
    </div>
  );
}

export default ProfileCard;
