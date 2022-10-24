import React from "react"
import LinkButton from "./component/linkButton";
import Textbanner from "./component/Textbanner";
import Profile from "./component/Profile"

function App() {
  return (
    <div>
      <Textbanner
      title ="@ShanelChii"

      />

      <LinkButton 
      name="Zuri Trainig"
       link="https://training.zuri.team/"
       />

      <LinkButton
      title="Zuri Books"
      text="This where you will find books about design and coding."
      name=" Zuri Books"
      link="http://books.zuri.team "
       
      />

       <LinkButton
       name="python For Beginner"
       link="https://books.zuri.team"
       />

       <LinkButton
       name="The Zuri Coders"
       link="https://background.zuri.team"
       text
       />

       <LinkButton
       name="Zuri Free Design Book"
       link="https://books.zuri.team/design-rules"
       />
    </div>
  );
}

export default App;
