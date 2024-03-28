import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
    <h1 className="mt-12 mb-12 text-4xl font-bold text-center text-white">
      Error 404 | Soory, requested page/post does not exist :(
    </h1>
    <Link href='/'>← Back to home</Link>
    </div>
  );
}
