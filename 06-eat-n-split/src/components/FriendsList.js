import Friend from "./Friend";

const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map((f) => (
        <Friend f={f} key={f.id} />
      ))}
    </ul>
  );
};

export default FriendsList;
