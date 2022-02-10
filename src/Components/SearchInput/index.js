import { Search, MagnifyingIcon } from "./styles";
export default function SearchBar({ ...props }) {
  return (
    <>
      <Search>
        <label>
          <MagnifyingIcon />
          <input {...props}></input>
        </label>
      </Search>
    </>
  );
}
