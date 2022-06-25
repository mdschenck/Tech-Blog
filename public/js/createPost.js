const newPostHandler = async (evt) => {
  evt.preventDefault();
  console.log("NEW POST HANDLER CALLED");
  const newPostTitle = document.querySelector("#postTitle").value;
  const newPostText = document.querySelector("#postText").value;
  const user = document.querySelector("user-id");

  await fetch("/api/create-post", {
    method: "POST",
    body: JSON.stringify({
      title: newPostTitle,
      postText: newPostText,
      user_id: user,
      upVotes: "0",
      downVotes: "0",
    }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace("../../");
};

//   await fetch('/api/proposals', {
//     method: 'POST',
//     body: JSON.stringify({
//       proposal,
//     }),

//     headers: { 'Content-Type': 'application/json' },

//   });

//   document.location.replace('/proposal');
// };

document.getElementById("save-post").addEventListener("click", newPostHandler);
