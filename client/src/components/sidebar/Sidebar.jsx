import { Conversations } from "./conversations";
import { SidebarHeader } from "./header";

import { Notifications } from "./notifications";
import { Search } from "./search";
import { useState } from "react";
import { SearchResults } from "./search";


export default function Sidebar() {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="w-[30%] h-full select-none">
      {/*Sidebar Header*/}
      <SidebarHeader />
      {/*Notifications */}
      <Notifications />
      {/*Search*/}
      <Search
        searchLength={searchResults.length}
        setSearchResults={setSearchResults}
      />
      {searchResults.length > 0 ? (
        <>
          {/*Search results*/}
          <SearchResults
            searchResults={searchResults}
            setSearchResults={setSearchResults}
          />
        </>
      ) : (
        <>
          {/*Conversations*/}
          <Conversations />
        </>
      )}
    </div>
  );
}