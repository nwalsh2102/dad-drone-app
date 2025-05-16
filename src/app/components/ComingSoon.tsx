import Link from "next/link";

interface ComingSoonProps {
  page: string;
}

export default function ComingSoon({ page }: ComingSoonProps) {
  return (
    <div className="w-2/3 mx-auto bg-white select-none">
      <div className="">
        <div className="text-2xl p-3 text-black text-center">
          <h1>COMING SOON...</h1>
          <p className="text-lg">
            If you would like to learn more about VERO please visit the
            following link.
          </p>
        </div>
        <div className="p-3 text-center">
          <Link
            href="/vero-learn-more"
            className="bg-black text-white px-4 py-2 hover:bg-neutral-800"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}
