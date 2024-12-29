import React, { useState, useEffect } from 'react';
import 'animate.css'; // Import Animate.css

const API_KEY = "your_openai_api_key";

const Chatbot = () => {
  const [isChatVisible, setChatVisible] = useState(false);
  const [isNotificationVisible, setNotificationVisible] = useState(false);
  const [notificationClass, setNotificationClass] = useState('animate__fadeInUp');
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Timer untuk pemberitahuan
  useEffect(() => {
    if (isChatVisible) return; // Jika kotak chat terlihat, hentikan timer

    const timer = setTimeout(() => {
      setNotificationVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isChatVisible]); // Timer hanya akan berjalan jika `isChatVisible` false

  const handleOpenChat = () => {
    setChatVisible(true);
    setNotificationVisible(false); // Sembunyikan pemberitahuan jika chat dibuka
  };

  const handleCloseChat = () => {
    setChatVisible(false);
    setNotificationClass('animate__fadeInUp'); // Reset animasi pemberitahuan
  };

  const handleHideNotification = () => {
    setNotificationClass('animate__fadeOutDown'); // Animasi keluar
    setTimeout(() => setNotificationVisible(false), 500); // Sembunyikan setelah animasi selesai
  };

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (userInput.trim() === "") return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: userInput },
    ]);
    setUserInput("");
    setIsLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: userInput }],
        }),
      });
      const data = await response.json();

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: data.choices[0].message.content },
      ]);
    } catch (error) {
      console.error("Error sending message to OpenAI:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Maaf, terjadi kesalahan. Coba lagi nanti." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-end space-y-2">
      {/* Kotak Pemberitahuan */}
      {isNotificationVisible && (
        <div
          className={`bg-white border rounded-lg shadow-lg p-4 w-64 text-sm animate__animated ${notificationClass}`}
        >
          <p className="text-gray-700">
            Hi, aku Zira siap membantu menyelesaikan masalahmu.{' '}
          </p>
          <div className="flex justify-between items-center mt-2">
            <button
              onClick={handleOpenChat}
              className="text-blue-500 font-semibold"
            >
              Coba sekarang!
            </button>
            <button
              onClick={handleHideNotification}
              className="text-sm text-gray-500 hover:underline"
            >
              Sembunyikan
            </button>
          </div>
        </div>
      )}

      {/* Kotak Dialog Chat */}
      {isChatVisible && (
        <div className="bg-white border rounded-lg shadow-lg p-4 w-80 h-96 flex flex-col space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-[#38517E]">Zira</h3>
            <button
              onClick={handleCloseChat}
              className="text-gray-500 hover:text-gray-700 text-xl"
            >
              &times;
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs p-2 rounded-lg ${
                      message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-xs p-2 bg-gray-200 rounded-lg">Zira sedang mengetik...</div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={userInput}
              onChange={handleUserInput}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1 p-2 border border-gray-300 rounded-lg"
              placeholder="Ketik pesan..."
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            >
              Kirim
            </button>
          </div>
        </div>
      )}

      {!isChatVisible && (
        <button
          onClick={handleOpenChat}
          className="w-14 h-14 rounded-full bg-[#4CBDDF] flex items-center justify-center shadow-lg hover:bg-[#309BBB] transition-colors"
        >
          <img src="/images/chatbot-icon.svg" alt="Chatbot" className="w-8 h-8" />
        </button>
      )}
    </div>
  );
};

export default Chatbot;