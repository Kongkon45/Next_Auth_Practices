export async function GET() {
  return Response.json({ comments },{
        headers : {
            "Set-Cookie" : "theme=dark"
        }
  });
}

export async function POST(request) {
  const newComment = await request.json();
  comments.push({
    id: comments.length + 1,
    text: newComment.text,
  });

  return Response.json({
    message: "new comment is added",
    newComment,
  });
}

const comments = [
  {
    id: 1,
    text: "comment1",
  },
  {
    id: 2,
    text: "comment2",
  },
  {
    id: 3,
    text: "comment3",
  },
  {
    id: 4,
    text: "comment4",
  },
];
