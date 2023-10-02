import { useState } from "react";
import AddFriend from "./AddFriend";
import Button from "./Button";
import Friend from "./Friend";

function FriendList({
  friends,
  onAddFriend,
  isAddOpen,
  onAddForm,
  onSplitForm,
  isFormOpen,
  currentFriend,
  onCurrentFriend,
}) {
  return (
    <div className="left-container">
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            onSplitForm={onSplitForm}
            isFormOpen={isFormOpen}
            currentFriend={currentFriend}
            onCurrentFriend={onCurrentFriend}
            onAddForm={onAddForm}
            isAddOpen={isAddOpen}
          />
        ))}
      </ul>
      {isAddOpen && (
        <AddFriend onAddFriend={onAddFriend} onSubmitForm={onAddForm} />
      )}
      <Button
        onClick={() => {
          onAddForm((open) => !open);
          isFormOpen && onSplitForm(false);
        }}
      >
        {isAddOpen ? "Close" : "Add friend"}
      </Button>
    </div>
  );
}

export default FriendList;
