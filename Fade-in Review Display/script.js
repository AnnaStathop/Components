const reviewContainer = document.getElementById("review_container");

const reviews = [
  {
    img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    alt: "Profile picture of John Stathan",
    text: "I really enjoyed this course. It was fun and interactive as well as educational",
    name: "John Stathan",
  },
  {
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    alt: "Profile picture of Anna Stam",
    text: "I really enjoyed this course. It was fun and interactive as well as educational",
    name: "Anna Stam",
  },
  {
    img: "https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
    alt: "Profile picture of Sofia Verg",
    text: "I really enjoyed this course. It was fun and interactive as well as educational",
    name: "Sofia Verg",
  },
];

function populateDisplay() {
  reviews.forEach((review) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.addEventListener("mouseover", showCard);
    cardElement.addEventListener("mouseleave", blurCard);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", review.img);
    imageElement.setAttribute("alt", review.alt);
    imageElement.classList.add("image-element");
    imageContainer.append(imageElement);

    const paragraphElement = document.createElement("p");
    paragraphElement.textContent = review.text;
    const nameContainer = document.createElement("div");
    nameContainer.classList.add("name-container");
    nameContainer.textContent = review.name;
    cardElement.append(imageContainer, paragraphElement, nameContainer);

    reviewContainer.append(cardElement);
  });
}
populateDisplay();

function showCard() {
  this.classList.add("active");
}

function blurCard() {
  this.classList.remove("active");
}
