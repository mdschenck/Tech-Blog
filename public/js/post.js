const upVoteHandler = async (evt) => {
  evt.preventDefault();
  console.log("UPVOTE HANDLER CALLED");

  const user = document.querySelector("user-id");

  const target = evt.target.id;
  let upvotes = evt.target.getAttribute("data-id");

  console.log(target);

  upvotes++;

  console.log(upvotes);

  await fetch("/api/upVote", {
    method: "PUT",
    body: JSON.stringify({
      id: target,
      upVotes: upvotes,
    }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.reload();
};

const downVoteHandler = async (evt) => {
  evt.preventDefault();
  console.log("DOWNVOTE HANDLER CALLED");

  const user = document.querySelector("user-id");

  const target = evt.target.id;
  let downvotes = evt.target.getAttribute("data-id");

  console.log(target);

  downvotes++;

  console.log(downvotes);

  await fetch("/api/upVote", {
    method: "PUT",
    body: JSON.stringify({
      id: target,
      downVotes: downvotes,
    }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.reload();
};

document.querySelectorAll(`.btn-success`).forEach((item) => {
  item.addEventListener("click", upVoteHandler);
});

document.querySelectorAll(`.btn-danger`).forEach((item) => {
  item.addEventListener("click", downVoteHandler);
});
