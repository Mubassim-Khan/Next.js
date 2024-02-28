import { NextResponse } from "next/server";

const DATA_SOURCE = "https://jsonplaceholder.typicode.com/todos";

const API_KEY = process.env.API_KEY as string;

export async function GET(request: Request) {
  const origin = request.headers.get("origin");

  const res = await fetch(DATA_SOURCE);

  const todos: Todo[] = await res.json();

  return new NextResponse(JSON.stringify(todos), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": origin || "*",
    },
  });
}

export async function DELETE(request: Request) {
  const { id }: Partial<Todo> = await request.json();

  if (!id) return NextResponse.json({ message: "No Id/Todo found." });

  await fetch(`${DATA_SOURCE}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      API_KEY: API_KEY,
    },
  });
  return NextResponse.json({ message: `Todo no. ${id} deleted.` });
}

export async function POST(request: Request) {
  const { userID, title }: Partial<Todo> = await request.json();

  if (!userID || !title)
    return NextResponse.json({ message: "User Id or title missing" });

  const res = await fetch(DATA_SOURCE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      API_KEY: API_KEY,
    },
    body: JSON.stringify({
      userID,
      title,
      completed: false,
    }),
  });
  const newTodo: Todo = await res.json();
  return NextResponse.json(newTodo);
}

export async function PUT(request: Request) {
  const { userID, id, title, completed }: Todo = await request.json();

  if (!userID || !id || !title || typeof completed !== "boolean")
    return NextResponse.json({ message: "One of the requirements don't meet" });

  const res = await fetch(`${DATA_SOURCE}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      API_KEY: API_KEY,
    },
    body: JSON.stringify({
      userID,
      title,
      completed,
    }),
  });

  const updatedTodo: Todo = await res.json();

  return NextResponse.json(updatedTodo);
}
