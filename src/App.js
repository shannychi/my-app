import React from "react"
import LinkButton from "./component/linkButton";
import Textbanner from "./component/textBanner";
import Profile from "./component/profile";
import Picture from "./IMG_0036.JPG";
import "bootstrap/dist/css/bootstrap.min.css";
import Slack from "./slack";
import "./App.css";


function App() {
  return (
    <div style={{ textAlign: "center"}}>
      <Profile
      Picture = {Picture}
      id= "profile__img"
      />

      <Textbanner
      title ="@ShanelChii"
      id="twitter"
      />
      
       <Slack
        name = "chiSharon"
        id="slack"
       />

      <div style={{ marginBottom: "50px"}}>
      <LinkButton 
      name="Zuri Trainig"
       link="https://training.zuri.team/"
       id="btn__zuri"
       />

      <LinkButton
      title="Zuri Books"
      text="This is where you will find books about design and coding."
      name=" Zuri Books"
      link="http://books.zuri.team "
       id="books"
      />

       <LinkButton
       text="Learn Python programming from scratch."
       name="python For Beginners"
       link="https://books.zuri.team"
       id="book__python"
       ref_id="chiSharon"
       />

       <LinkButton
       text="Zuri train and connect's exeptional people from around the world to compaines that are hiring."
       name="The Zuri Coders"
       link="https://background.zuri.team"
       id="pitch"
    
       />

       <LinkButton
       text="Zuri offer highly free tech design books"
       name="Zuri Free Design Book"
       link="https://books.zuri.team/design-rules"
       id="book__design"
       />
       </div>
    </div>
  );
}

export default App;
