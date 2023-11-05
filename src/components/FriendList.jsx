import Friend from "./Friend";

function FriendList({ friends, currentFriend, setCurrentFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          currentFriend={currentFriend}
          setCurrentFriend={setCurrentFriend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}

export default FriendList;
