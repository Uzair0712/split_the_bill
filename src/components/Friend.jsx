import Button from "./Button";

function Friend({ friend, currentFriend, setCurrentFriend }) {
  const { name, image, balance } = friend;

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
    <li className={`friend ${currentFriend === friend && "selected"}`}>
      <img src={image} alt="avatar" />
      <div>
        <h4 className="name">{name}</h4>
        <p style={{ color: color }}>{message}</p>
      </div>
      <Button onClick={() => setCurrentFriend(friend)}>
        {currentFriend === friend ? "Close" : "Select"}
      </Button>
    </li>
  );
}

export default Friend;
