import { Search, MagnifyingIcon } from "./styles";
import axios from "axios";
export default function SearchBar({ ...props }) {
  function handleSearch() {}

  return (
    <>
      <Search>
        <MagnifyingIcon />
        <input
          {...props}
          onFocus={(e) => console.log("Foquei")}
          onChange={(e) => console.log(e.target.value)}
        ></input>
      </Search>
    </>
  );
}
