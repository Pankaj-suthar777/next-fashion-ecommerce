import Link from "next/link";
import React from "react";

const NavTabs = () => {
  return (
    <div className="flex items-center gap-x-12">
      <Link className="text-xs font-semibold" href="/categories">
        Categories
      </Link>
      <Link className="text-xs font-semibold" href="/new-arrival">
        New Arrival
      </Link>
      <Link className="text-xs font-semibold" href="/productlist">
        Collections
      </Link>
      <Link className="text-xs font-semibold" href="/contact-us">
        Contact us
      </Link>
    </div>
  );
};

export default NavTabs;
