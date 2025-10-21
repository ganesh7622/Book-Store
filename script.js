let popup = document.querySelector(".popup");
let overlay = document.querySelector(".overlay");
let addPopupBtn = document.querySelector("#add-popup");

addPopupBtn.addEventListener("click", () => {
  popup.classList.add("active");
  overlay.classList.add("active");
  gsap.fromTo(".popup", { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" });
});

function def(event) {
  event.preventDefault();
  popup.classList.remove("active");
  overlay.classList.remove("active");
}

function getcontainer(event) {
  event.preventDefault();

  let bookName = document.querySelector("#add-book-input").value;
  let bookAuthor = document.querySelector("#book-author-input").value;
  let bookDesc = document.querySelector("#book-description").value;

   if (!bookName || !bookAuthor || !bookDesc) {
        alert('Please fill all fields!');
        return;
      }

  let container = document.createElement("div");
  container.classList.add("book-container");
  container.innerHTML = `
    <h2>${bookName}</h2>
    <h3>${bookAuthor}</h3>
    <p>${bookDesc}</p>
    <button class="delete-btn" onclick="change(event)">Delete</button>
  `;
  

  document.querySelector(".container").appendChild(container);

  popup.classList.remove("active");
  overlay.classList.remove("active");

  // Animate new book entry
  gsap.from(container, { y: 50, opacity: 0, duration: 0.6, ease: "power2.out" });

  // Clear input fields
  document.querySelector("#add-book-input").value = "";
  document.querySelector("#book-author-input").value = "";
  document.querySelector("#book-description").value = "";
}

function change(event) {
  event.target.parentElement.remove();
}

gsap.from(".navbar h1", { y: -30, opacity: 0, duration: 1, ease: "power2.out" });
gsap.from(".book-container", { scale: 0.8, opacity: 0, duration: 0.8, ease: "back.out(1.7)", stagger: 0.2 });
gsap.to("#add-popup", { y: -10, repeat: -1, yoyo: true, duration: 1.5, ease: "power1.inOut" });
