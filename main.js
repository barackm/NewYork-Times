window.onload = () => {
  const commentSidebar = document.querySelector(".add-comment-area");
  const commentBtn = document.querySelector(".read-comment-btn");
  const commentModalCloseBtn = document.querySelector(".close-btn");
  commentBtn.addEventListener("click", () => {
    commentSidebar.classList.add("open");
  });
  commentModalCloseBtn.addEventListener("click", () => {
    commentSidebar.classList.remove("open");
  });
};
