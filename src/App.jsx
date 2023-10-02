import { useState } from "react";
import FriendList from "./components/FriendList";
import SplitForm from "./components/SplitForm";

const fakeData = [
  {
    name: "Anthony",
    image: "https://i.pravatar.cc/41",
    balance: 10,
    id: 1,
  },
  {
    name: "Hashim",
    image: "https://i.pravatar.cc/45",
    balance: 0,
    id: 2,
  },
  {
    name: "Aamir",
    image: "https://i.pravatar.cc/48",
    balance: -15,
    id: 3,
  },
];

function App() {
  const [friends, setFriends] = useState(fakeData);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentFriend, setCurrentFriend] = useState({});
  const [isAddOpen, setIsAddOpen] = useState(false);

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }

  function handleCurrentFriend(friend) {
    setCurrentFriend(friend);
  }

  function handleSplitBill(friend) {
    setFriends((friends) =>
      friends.map((cur) => (cur.id !== friend.id ? cur : friend))
    );
  }
  return (
    <div className="app">
      <FriendList
        friends={friends}
        onAddFriend={handleAddFriend}
        isAddOpen={isAddOpen}
        onAddForm={setIsAddOpen}
        onSplitForm={setIsFormOpen}
        isFormOpen={isFormOpen}
        currentFriend={currentFriend}
        onCurrentFriend={handleCurrentFriend}
      />
      {isFormOpen && (
        <SplitForm
          currentFriend={currentFriend}
          key={currentFriend.id}
          onSplitBill={handleSplitBill}
          setIsFormOpen={setIsFormOpen}
        />
      )}
    </div>
  );
}

export default App;
