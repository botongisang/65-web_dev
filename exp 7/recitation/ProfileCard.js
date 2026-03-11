function ProfileCard(props) {
    return (
        <div>
            <h3>Profile Card</h3>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Subject: {props.subject}</p>
        </div>
    );
}
export default ProfileCard;
