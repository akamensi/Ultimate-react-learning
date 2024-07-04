import Friend from "./Friend";

const FriendsList = ({ friends, onSelection, seletedFriend }) => {
  return (
    <ul>
      {friends.map((f) => (
        <Friend
          f={f}
          key={f.id}
          onSelection={onSelection}
          seletedFriend={seletedFriend}
        />
      ))}
    </ul>
  );
};

export default FriendsList;
