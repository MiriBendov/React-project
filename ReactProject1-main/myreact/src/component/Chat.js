import React, { useState, useEffect, useRef } from 'react';
import './Chat.css';
export default function Chat() {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const messagesEndRef = useRef(null);

    // Scroll to the bottom of the messages list when messages change
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
        }
    }, [messages]);

    // Add message when "Enter" is pressed
    const add = (e) => {
        if (e.key === "Enter" && message.trim() !== "") {
            setMessages([message, ...messages]);
            setMessage("");
        }
    };

    // Toggle the emoji picker visibility
    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
    };

    // Add emoji to message
    const addEmoji = (emoji) => {
        setMessage(message + emoji);
        setShowEmojiPicker(false); // Hide the emoji picker after selecting
    };

    return (
        <div className="chat-container">
            <div className="messages-list" ref={messagesEndRef}>
                {messages.map((msg, index) => (
                    <div key={index} className="message">{msg}</div>
                ))}
            </div>
            <div className="input-container">
                <span className="icon" onClick={toggleEmojiPicker}>🙂</span> {/* אייקון אימוג'י */}
                <input 
                    type="text" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    onKeyUp={add} 
                    placeholder="הקלד הודעה..."
                />
                <span className="icon" onClick={add}>🚀</span> {/* אייקון שליחה */}
            </div>

            {/* תפריט אימוג'ים */}
            <div className={`emoji-picker ${showEmojiPicker ? 'show' : ''}`}>
                <button onClick={() => addEmoji('😀')}>😀</button>
                <button onClick={() => addEmoji('😊')}>😊</button>
                <button onClick={() => addEmoji('😎')}>😎</button>
                <button onClick={() => addEmoji('❤️')}>❤️</button>
                <button onClick={() => addEmoji('🎉')}>🎉</button>
            </div>
        </div>
    );
}
