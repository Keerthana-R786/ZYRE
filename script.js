document.addEventListener("DOMContentLoaded", function () {

    const elementsToObserve = [
        '.products-title',
        '.product-card',
        '.demo-title',
        '.demo-video',
        '.about-title',
        '.about-content',
        '.feedback-title',
        '.Contact-title',
        '.feedback-card'
    ].join(',');


    const elements = document.querySelectorAll(elementsToObserve);


    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            } else {
                entry.target.classList.remove('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(el => observer.observe(el));


    const content = document.querySelector('.content');
    if (content) {
        const contentObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    content.classList.add('animate');
                } else {
                    content.classList.remove('animate');
                }
            });
        });

        contentObserver.observe(content);
    }
});


function handleSubmit(event) {
    event.preventDefault();
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = "Submitted Successfully..";
    setTimeout(() => {
        messageDiv.textContent = "";
    }, 3000);
}

//Chatbot
function toggleChatbot() {
    const chatbot = document.getElementById('chatbot');
    chatbot.style.display = chatbot.style.display === 'flex' ? 'none' : 'flex';
}

function closeChatbot() {
    document.getElementById('chatbot').style.display = 'none';
}

function handleKey(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    const chatBody = document.getElementById('chat-body');

    if (message === '') return;


    const userDiv = document.createElement('div');
    userDiv.className = 'user-message';
    userDiv.textContent = message;
    chatBody.appendChild(userDiv);


    const reply = getBotReply(message);
    const botDiv = document.createElement('div');
    botDiv.className = 'bot-message';
    botDiv.textContent = reply;
    chatBody.appendChild(botDiv);

    input.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;
}

function getBotReply(message) {
    const msg = message.toLowerCase();

    if (msg.includes("service")) {
        return "We provide home automation, automation for stores and malls, industries and security system services.";
    } else if (msg.includes("product")) {
        return "A control module that is operable from your smartphone. Appliances can be connected to the box via our mobile app which allows custom programming of automation scenarios.";
    } else if (msg.includes("contact")) {
        return "You can contact us at zyrehomeautomation@gmail.com.";
    } else if (msg.includes("zyre")){
        return "Zyre Home Automation is a dynamic startup committed to making smart living accessible to everyone. With a strong focus on affordability, We offers innovative home automation solutions that are both cost-effective and easy to use."
    } else {
        return "Contact us at zyrehomeautomation@gmail.com  or  +91 8525928155";
    }
}