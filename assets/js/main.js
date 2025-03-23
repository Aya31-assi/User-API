
async function getUsers() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    console.log(response);
    const data = await response.json();

    const result = data.map(function (user) {
       return ` <div class="user">
          <h2>${user.name}</h2>
          <p> ${user.email}</p>
          <p>${user.address.street}, ${user.address.city}</p>
          <p>${user.phone}</p>
          <p> ${user.company.name}</p>
        </div>`
   }).join(' ');

    document.querySelector(".products .container .row ").innerHTML = result;
}

getUsers();









































































































