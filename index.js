const lorem = document.createElement("div");
lorem.textContent =
  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste possimus, temporibus nostrum quae aperiam explicabo!";
lorem.style.width = "350px";
lorem.style.padding = "10px";
lorem.style.borderColor = "red";
lorem.style.borderWidth = "1px";
lorem.style.borderStyle = "solid";
lorem.style.borderRadius = "10px";

document.body.prepend(lorem);
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.alignItems = "center";

const ul = document.createElement("ul");
const item_1 = document.createElement("li");
const item_2 = document.createElement("li");
const item_3 = document.createElement("li");

ul.append(item_1, item_2, item_3);
lorem.after(ul);
ul.style.display = "flex";
ul.style.width = "300px";
ul.style.justifyContent = "space-between";
item_1.style.listStyle = 'none'
item_2.style.listStyle = 'none'
item_3.style.listStyle = 'none'

const instagram = document.createElement("a");
instagram.href = "https://www.instagram.com";
instagram.textContent = "Instagram";

const intocode = document.createElement("a");
intocode.href = "https://www.intocode.ru";
intocode.textContent = "Intocode";

const google = document.createElement("a");
google.href = "https://www.google.com";
google.textContent = "Google";

item_1.appendChild(intocode);
item_2.appendChild(google);
item_3.appendChild(instagram);
