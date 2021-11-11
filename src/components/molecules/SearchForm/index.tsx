export default function SearchForm() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert('enter');
      }}
      className="rounded-full py-3 px-7 focus-within:ring-2 ring-offset-2 ring-gray-300 ring-opacity-100 bg-gray-300 w-1/3 mx-auto relative flex justify-between items-center gap-3">
      <input
        type="text"
        className="flex-1 block focus:outline-none bg-transparent text-black focus:placeholder-gray-500"
        placeholder="Cari ..."
      />
      <button className="flex-shrink text-gray-500">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
}
