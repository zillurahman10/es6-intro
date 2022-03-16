document.getElementById('add-border').addEventListener('click', function () {
    const friendContainer = document.getElementById('friend--container').style.border = '5px solid blue'
})

function addBackground() {
    const friends = document.getElementsByClassName('friend')
    for (const friend of friends) {
        friend.style.backgroundColor = 'green'
    }
}

document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `
                <h3 class="friend-name">friend-4</h3>
                <p>Odit quia voluptatum beatae temporibus.</p>    
    `;
    container.appendChild(friendDiv);
})