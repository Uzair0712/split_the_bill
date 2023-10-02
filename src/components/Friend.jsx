import Button from "./Button";

function Friend({
  friend,
  onSplitForm,
  isFormOpen,
  currentFriend,
  onCurrentFriend,
  onAddForm,
  isAddOpen,
}) {
  const { name, image, balance } = friend;

  console.log(currentFriend.id === friend.id);

  let message, color;
  if (balance === 0) message = `You and ${name} are even`;
  if (balance > 0) {
    message = `${name} owes you ${balance}`;
    color = "green";
  }
  if (balance < 0) {
    message = `You owe ${name} ${Math.abs(balance)}`;
    color = "red";
  }
  return (
    <div className="friend">
      <img src={image} alt="friend's image" />
      <div>
        <h4 className="name">{name}</h4>
        <p style={{ color: color }}>{message}</p>
      </div>
      <Button
        onClick={() => {
          onCurrentFriend(friend);
          if (friend.id !== currentFriend?.id && currentFriend.id) return;
          onSplitForm((open) => !open);
          isAddOpen && onAddForm(false);
        }}
      >
        {isFormOpen && currentFriend.id === friend.id ? "close" : "Select"}
      </Button>
    </div>
  );
}

export default Friend;
