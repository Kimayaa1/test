import './App.css';
// import logo from './assets/chatgpt.svg';
import vichaarLogo from './assets/logo.png';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import user from './assets/user.png';
import logo from './assets/vichaar logo.png';
import { sendMessageToGroq } from './groq';
import { useState } from 'react';


function App() {

  const [input, setInput] = useState("");

  const handleSend = async () => {
    const res = await sendMessageToGroq(input)
    console.log(res)
  }


  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={vichaarLogo} alt="Logo" className="logo"/>
            <span className="brand">Vichaar</span></div>
            <button className="midBtn"><img src={addBtn} alt="New Vichaar" className="addBtn"/>New Vichaar</button>
            <div className="upperSideBottom">
              <button className="query"><img src={msgIcon} alt="Query" />What is Programming?</button>
              <button className="query"><img src={msgIcon} alt="Query" />How to use an API?</button>
            </div>
          {/* </div>  */}
        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="Home" className="listItemsImg"/>Home</div>
          <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg"/>Saved</div>
          <div className="listItems"><img src={rocket} alt="Upgrade" className="listItemsImg"/>Upgrade to Pro</div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={user} alt=""/><p className="txt">eggcghfh hfbhbfxb fh rbhfhrf hfhhfn rrjfn</p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={logo} alt=""/><p className="txt">eggcghfh hfbhbfxb fh rbhfhrf hfhhfn rrjfn</p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Write your Vichaar...' value={input} onChange={(e)=>{setInput(e.target.value)}}/> <button className="send" onClick={handleSend}><img src={sendBtn} alt="send"/></button>
          </div>
          <p>Vichaar may produce inaccurate information about people, places or facts. Vichaar 2025 version.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
