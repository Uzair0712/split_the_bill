import Friend from "./Friend";

function FriendList({ friends, currentFriend, setCurrentFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          currentFriend={currentFriend}
          setCurrentFriend={setCurrentFriend}
        />
      ))}
    </ul>
  );
}

export default FriendList;
