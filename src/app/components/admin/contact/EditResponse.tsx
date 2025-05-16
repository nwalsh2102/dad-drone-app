"use client";
interface EditResponseProps {
  width: string;
}

const error = () => {
  window.alert("ERROR: EDIT NOT YET AVAILABLE");
};

export default function EditResponse({ width }: EditResponseProps) {
  return (
    <div className="">
      <form action="">
        <button
          onClick={error}
          className={`bg-blue-600 w-${width} hover:bg-blue-800 px-2 py-1 text-white`}
        >
          EDIT
        </button>
      </form>
    </div>
  );
}
