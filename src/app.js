// import "core-js/features/promise";

const button = document.querySelector("button");
const textParageraph = document.querySelector("p");

button.addEventListener("click", () => {
  const text = textParageraph.textContent;
  const promise = new Promise();
  console.log(promise);

  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    alert("not available");
  }
});
