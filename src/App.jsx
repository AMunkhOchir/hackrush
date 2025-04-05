import ChatbotIcon from './components/ChatbotIcon';

const App = () => {
  return (
    <div className="container">
      <div className="chat-popup">
        <div className="chat-header">
          <div className="header-info"></div>
          <ChatbotIcon />
          <h2 className="logo-text">ChatBot</h2>
        </div>
        <button class="material-symbols-outlined">keyboard_arrow_down</button>
      </div>

      <div className="chat-body">
        <div className="message bot-message">
          <ChatbotIcon />
          <p className="message-text">
            Hey there <br /> How can i help you today!
          </p>
        </div>
        <div className="message user-message">p.</div>
      </div>
    </div>
  );
};

export default App;
