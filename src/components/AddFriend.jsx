import { useState } from "react";
import Button from "./Button";

function AddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function addFriend(e) {
    e.preventDefault();
    if (!name || !image) return;
    const id = crypto.randomUUID();
    onAddFriend({ name, image: `${image}?=${id}`, balance: 0, id });
    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <form className="add-friend">
      <label htmlFor="name">👬 Friend name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="image">🌄 Image URL</label>
      <input
        type="text"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button onClick={addFriend}>Add</Button>
    </form>
  );
}

export default AddFriend;
