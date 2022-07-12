const LegacyUI = () => {
    <div className="App">
      <input value={room} onChange={handleRoomChange} type="text" placeholder='Room ID...' />
      <button onClick={joinRoom}>Join</button>
      <input value={userName} onChange={handleUserNameChange} type="text" placeholder='Type in your name...' />
      <input value={currentMessage} onChange={handleMessageChange} type="text" placeholder='Message...' />
      <button onClick={sendMessage}>Send</button>
      <div>
        {messages.map((message, key) => (
          <div key={key}>
            <h6>{message.author}</h6>
            <h3>{message.text}</h3>
            <p>{message.time}</p>
          </div>
        ))}
      </div>
    </div>
}