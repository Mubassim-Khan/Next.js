import Image from "next/image";
import ProfilePic from "../../public/images/843be4a6806174729275c1e3470cf5ce.jpg";

export default function MyProfilePic() {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-5 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded mx-auto mt-8"
        src={ProfilePic}
        width={200}
        height={200}
        alt="Mubassim Profile Pic"
        priority={true}
      />
    </section>
  );
}
