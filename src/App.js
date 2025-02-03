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
import { useEffect, useRef, useState } from 'react';


function App() {

  const msgEnd = useRef(null);

  const [input, setInput] = useState("");
  const[messages, setMessages ] = useState([
    {
      text: "Welcome to Vichaar!",
      isBot: true,
    }
  ]);

  useEffect(()=>{
    msgEnd.current.scrollIntoView();
  }, [messages]);

  const handleSend = async () => {
    const text = input;
    setInput('');
    setMessages([
      ...messages,
      {text, isBot:false}
    ])
    const res = await sendMessageToGroq(text)
    setMessages([...messages,
      {text, isBot: false },
      {text: res, isBot: true}
    ]);
  }

  const handleEnter = async (e) =>{
    if(e.key === 'Enter') await handleSend();
  }

  const handleQuery = async (e) =>{
    const text = e.target.value;
    setMessages([
      ...messages,
      {text, isBot:false}
    ])
    const res = await sendMessageToGroq(text)
    setMessages([...messages,
      {text, isBot: false },
      {text: res, isBot: true}
    ]);
  }


  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={vichaarLogo} alt="Logo" className="logo"/>
            <span className="brand">Vichaar</span></div>
            <button className="midBtn" onClick={()=>{window.location.reload()}}><img src={addBtn} alt="New Vichaar" className="addBtn"/>New Vichaar</button>
            <div className="upperSideBottom">
              <button className="query" onClick={handleQuery} value={"What is Programming?"}><img src={msgIcon} alt="Query" />What is Programming?</button>
              <button className="query" onClick={handleQuery} value={"How to use an API?"}><img src={msgIcon} alt="Query" />How to use an API?</button>
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
          {messages.map((message, i) =>
            <div key={i} className={message.isBot?"chat bot":"chat"}>
              <img className="chatImg" src={message.isBot?logo:user} alt=""/><p className="txt">{ message.text }</p>
            </div>
          )}
          <div ref={msgEnd}/>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Write your Vichaar...' value={input}onKeyDown={handleEnter} onChange={(e)=>{setInput(e.target.value)}}/> <button className="send" onClick={handleSend}><img src={sendBtn} alt="send"/></button>
          </div>
          <p>Vichaar may produce inaccurate information about people, places or facts. Vichaar 2025 version.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
