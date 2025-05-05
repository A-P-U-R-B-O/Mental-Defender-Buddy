async function sendMessage() {
    const input = document.getElementById("input");
    const message = input.value;
    input.value = "";

    const res = await fetch('/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: message })
    });

    const data = await res.json();
    const chatbox = document.getElementById("chatbox");
    chatbox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;
    chatbox.innerHTML += `<p><strong>AI:</strong> ${data.reply}</p>`;
    chatbox.innerHTML += `<p><em>Feedback:</em> ${data.feedback}</p>`;
}