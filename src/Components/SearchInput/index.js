import { Search, MagnifyingIcon } from "./styles";
export default function SearchBar({ ...props }) {
  return (
    <>
      <Search>
        <MagnifyingIcon />
        <input {...props}></input>
      </Search>
    </>
  );
}
