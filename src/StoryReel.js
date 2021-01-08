import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return( 
    <div className="storyReel">
      <Story
        img src ="/public/child.png" alt=""
        profileSrc="https://www.nicepng.com/png/full/115-1150176_employee-avatar-png-transparent-image-avatar-male.png"
        title ="Andrew"
      />
      <Story
        image="https://lh3.googleusercontent.com/proxy/yJHdN0AsTe50SpzyC2jsH_X34TicmTjzgfOKvxZaBSYUAddzvMyqFeTCQodlU5rakEh8WSYKA5oSUn9Oad0kJUM09YiCh6yRWTfQaE05qG3mw9g"
        profileSrc="https://www.pngarts.com/files/3/Avatar-PNG-Photo.png"
        title="Adulla"
      />
      <Story
        image="https://lh3.googleusercontent.com/proxy/_lXkOm8L-2mngAIa8o_uukMsKqVUJHmKZujGGSeKRYRdeEarb2ZeKor1oYhXM59-JF1hUUTph82ebuUGvnRmlIHBD1OLOyBfi76_hmoTGg2fTBOJCKcpGoWd80Xn6wn99Fk"
        profileSrc="https://img.favpng.com/0/19/12/computer-icons-avatar-icon-design-png-favpng-MbC2sNWBjav8k1nYeY0FMTcgZ.jpg"
        title="Ajali"
      />
      <Story
        image="https://lh3.googleusercontent.com/proxy/_lXkOm8L-2mngAIa8o_uukMsKqVUJHmKZujGGSeKRYRdeEarb2ZeKor1oYhXM59-JF1hUUTph82ebuUGvnRmlIHBD1OLOyBfi76_hmoTGg2fTBOJCKcpGoWd80Xn6wn99Fk"
        profileSrc="https://cdn.icon-icons.com/icons2/35/PNG/512/boss_person_man_people_avatar_2858.png"
        title="Nanzi"
      />

    </div>
  );
}

export default StoryReel;
