export default function LoadingSpinner() {
  return (
    <div className="relative flex h-full items-center justify-center">
      <h2>Loading...</h2>
      <div className=" absolute h-28 w-28 animate-spin rounded-full border-b-2 border-t-2 border-red-500"></div>
    </div>
  );
}
