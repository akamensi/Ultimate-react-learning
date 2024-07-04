import Friend from "./Friend";

const FriendsList = ({ initialFriends }) => {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((f) => (
        <Friend f={f} key={f.id} />
      ))}
    </ul>
  );
};

export default FriendsList;
