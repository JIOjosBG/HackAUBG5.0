export default function Spinner() {
  return (
    <div className="h-full w-full z-50 flex justify-center items-center align-middle">
      <div className="animate-spin rounded-full h-48 w-48 border-t-2 border-b-2 bg-white border-black"></div>
      <div className="h-34 w-34  align-middle absolute  text-2xl text-slate-200 z-1">
        Loading ...
      </div>
    </div>
  );
}
