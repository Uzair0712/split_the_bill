import { useState } from "react";
import FriendList from "./components/FriendList";
import SplitForm from "./components/SplitForm";
import Button from "./components/Button";
import AddFriend from "./components/AddFriend";
import SideBar from "./components/SideBar";

const fakeData = [
  {
    name: "Anthony",
    image: "https://i.pravatar.cc/48?=dfjdfjdlf",
    balance: 10,
    id: 1,
  },
  {
    name: "Hashim",
    image: "https://i.pravatar.cc/48?=dfdjfjdfldf",
    balance: 0,
    id: 2,
  },
  {
    name: "Aamir",
    image: "https://i.pravatar.cc/48?=ernerwen",
    balance: -15,
    id: 3,
  },
];

function App() {
  const [friends, setFriends] = useState(fakeData);
  const [openAddFriend, setOpenAddFriend] = useState(false);
  const [currentFriend, setCurrentFriend] = useState(null);

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setOpenAddFriend(false);
  }

  function handleSplitBill(friend) {
    setFriends((friends) =>
      friends.map((cur) => (cur.id !== friend.id ? cur : friend))
    );
    setCurrentFriend(null);
  }

  function handleCurrentFriend(friend) {
    setCurrentFriend((cur) => (cur === friend ? null : friend));
    setOpenAddFriend(false);
  }
  return (
    <div className="app">
      <SideBar>
        <FriendList
          friends={friends}
          currentFriend={currentFriend}
          setCurrentFriend={handleCurrentFriend}
        />

        {openAddFriend && <AddFriend onAddFriend={handleAddFriend} />}

        <Button
          onClick={() => {
            setOpenAddFriend((open) => !open);
            setCurrentFriend(null);
          }}
        >
          {openAddFriend ? "Close" : "Add friend"}
        </Button>
      </SideBar>
      {currentFriend && (
        <SplitForm
          key={currentFriend.id}
          currentFriend={currentFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
