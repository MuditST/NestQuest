import { useState } from "react";

const AIChatModal = ({ setVisible, visible = true, messageData = [], setMessageData }) => {
    // make this a typical chat modal with a close button
    // and a chatbot that can answer questions
    // and a text input field
    // and a send button

    const [currentMessage, setCurrentMessage] = useState("");

    const sendMessage = async (event) => {
        event.preventDefault();

        // add current message to messages array
        if (currentMessage === "") {
            return;
        }

        setMessageData([...messageData, { sender: "user", message: currentMessage }]);
        setCurrentMessage("");
        await processMessageToChatGPT([...messageData, { sender: "user", message: currentMessage }]);

        // send message to backend
        // receive response from backend
        // add response to messages array and render
    }

    const processMessageToChatGPT = async(chatMessages) => { // messages is an array of messages
        const API_KEY = "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";
        const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
            "role": "system", "content": "As a seasoned realtor with 30+ years of experience, offer expert insights on this property: prime location and great value. Answer in 30 words or less."
        }

        // Format messages for chatGPT API
        // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
        // So we need to reformat
    
        let apiMessages = chatMessages.map((messageObject) => {
          let role = "";
          if (messageObject.sender === "bot") {
            role = "assistant";
          } else {
            role = "user";
          }
          return { role: role, content: messageObject.message}
        });
    
    
        // Get the request body set up with the model we plan to use
        // and the messages which we formatted above. We add a system message in the front to'
        // determine how we want chatGPT to act. 
        const apiRequestBody = {
          "model": "gpt-3.5-turbo",
          "messages": [
            systemMessage,  // The system message DEFINES the logic of our chatGPT
            ...apiMessages // The messages from our chat with ChatGPT
          ]
        }
    
        await fetch("https://api.openai.com/v1/chat/completions", 
        {
          method: "POST",
          headers: {
            "Authorization": "Bearer " + API_KEY,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(apiRequestBody)
        }).then((data) => {
          return data.json();
        }).then((data) => {
          console.log(data);
          setMessageData([...chatMessages, {
            sender: "bot",
            message: data.choices[0].message.content
          }]);
        });
      }

    return (
        <div className={`w-[350px] h-[60vh] shadow-sm fixed bottom-20 z-50 bg-white right-10 shadow-gray-700 ${visible ? 'block' : 'hidden'}`}>
            {/* heading and close button */}
            <div className="flex flex-row justify-between items-center bg-emerald-700">
                <h1 className="text-2xl font-bold text-white px-2 py-2">Chatbot</h1>
                <button className="pr-2 text-2xl font-bold text-white" onClick={() => setVisible(!visible)}>X</button>
            </div>

            <div className="w-full h-[50vh] overflow-y-auto p-2">
                {messageData.map((message, index) => {
                    return (
                        <div key={index} className="my-1">
                            <div className={`${message.sender === "user" ? 'bg-emerald-100 text-right' : 'bg-gray-200'} rounded-md px-2 py-3`} style={{ wordWrap: 'break-word' }}>
                                <p>{message.message}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <form className="absolute bottom-0 border-solid border-black border-[1px] h-[50px] w-full border-l-0 border-r-0 boder-b-0 flex flex-row">
                <input type="text" placeholder="Type your message here." className="outline-none p-2" value={currentMessage} onChange={(e) => setCurrentMessage(e.target.value)} />
                <button type="submit" onClick={e => sendMessage(e)} className="bg-emerald-100 h-full w-full">Send</button>
            </form>
        </div>
    );
};

export default AIChatModal;