import { useState } from "react";

const AIChatModal = ({ setVisible, visible = true, messageData = [], setMessageData }: { setVisible: any; visible: boolean; messageData: any; setMessageData: any;}) => {
  

    const [currentMessage, setCurrentMessage] = useState("");

    const sendMessage = async (event:any) => {
        event.preventDefault();

      
        if (currentMessage === "") {
            return;
        }

        setMessageData([...messageData, { sender: "user", message: currentMessage }]);
        setCurrentMessage("");
        await processMessageToChatGPT([...messageData, { sender: "user", message: currentMessage }]);

    
    }

    const processMessageToChatGPT = async(chatMessages:any) => { 
        const API_KEY = "NEXT_PUBIC_OPENAI_API_KEY"
        const systemMessage = { 
            "role": "system", "content": "As a seasoned realtor with 30+ years of experience, offer expert insights on this property: prime location and great value. Answer in 30 words or less."
        }

        
    
        let apiMessages = chatMessages.map((messageObject:any) => {
          let role = "";
          if (messageObject.sender === "bot") {
            role = "assistant";
          } else {
            role = "user";
          }
          return { role: role, content: messageObject.message}
        });
    
    
        
        const apiRequestBody = {
          "model": "gpt-3.5-turbo",
          "messages": [
            systemMessage,  
            ...apiMessages 
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
          
            <div className="flex flex-row justify-between items-center bg-emerald-700">
                <h1 className="text-2xl font-bold text-white px-2 py-2">Chatbot</h1>
                <button className="pr-2 text-2xl font-bold text-white" onClick={() => setVisible(!visible)}>X</button>
            </div>

            <div className="w-full h-[50vh] overflow-y-auto p-2">
                {messageData.map((message:any, index:any) => {
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
