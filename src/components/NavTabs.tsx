import Link from "next/link";
import React from "react";

const NavTabs = () => {
  return (
    <div className="flex items-center gap-x-12">
      <Link className="text-xs font-semibold" href="/">
        Categories
      </Link>
      <Link className="text-xs font-semibold" href="/">
        New Arrival
      </Link>
      <Link className="text-xs font-semibold" href="/">
        Features
      </Link>
      <Link className="text-xs font-semibold" href="/productlist">
        Collections
      </Link>
    </div>
  );
};

export default NavTabs;
