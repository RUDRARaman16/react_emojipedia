import React from "react";
import Entry from "./Entry"
import emojipedia from "../emojipedia"

function createCard(emojipedia) {
  return (
    <Entry
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      description={emojipedia.meaning}

    />
  );

}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createCard)}
        {/* <Entry
          emoji="💪"
          name="Tense Biceps"
          description=" “You can do that!” or “I feel strong!” Arm with tense biceps. Also
      used in connection with doing sports, e.g. at the gym."/>
        <Entry
          emoji="🙏"
          name="Person With Folded Hands"
          description=" Two hands pressed together. Is currently very introverted, saying a
      prayer, or hoping for enlightenment. Is also used as a “high five”
      or to say thank you."/>
        <Entry
          emoji="🤣"
          name="  Rolling On The Floor, Laughing"
          description="This is funny! A smiley face, rolling on the floor, laughing. The
      face is laughing boundlessly. The emoji version of “rofl“. Stands
      for „rolling on the floor, laughing“"/> */}
      </dl></div>

  );
}

export default App;

