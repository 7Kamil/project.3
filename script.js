class Message {
    name;
    time;
    text;
    constructor(name, text, time = this.gettime()) {
        this.name = name;
        this.time = time;
        this.text = text;
    }
    toString() {
        return `${this.time} ${this.name}: ${this.text}`
    }
    gettime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
    }
    toHtml() {
        return `<p>${this.time} ${this.name} ${this.text}</p>`
    }
}
class Messenger {
    messages = [];
    show_history() {
        let message_history = [];
        this.messages.forEach(msg => message_history.push(msg.toHtml()));
        return message_history;
    }
    send(author, text) {
        this.messages.push(new Message(author, text))
    }
}
let messenger = new Messenger();
const author = document.querySelector('#name');
const message = document.querySelector('#message');
const sendButton = document.querySelector('.button-send');
const showHistory = document.querySelector('.button-show');
sendBtn.addEventListener('click', () => {
    let name = author.value;
    let text = message.value;
    message.value = '';
    messenger.send(name, text);
});
const history = document.querySelector('.history');
showHistory.addEventListener('click', () => {
    history.innerHTML = messenger.show_history();
});
// messenger.send(' Artem', 'the first message')
// messenger.send('Maria', 'the second message')
// messenger.show_history()
