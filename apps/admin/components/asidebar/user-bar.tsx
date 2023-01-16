import React, { useCallback, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "react-bootstrap-icons";
import clsx from "clsx";

type AsideUserBarProps = {};

const AsideUserBar: React.FC<AsideUserBarProps> = () => {
  const [isExpanded, setExpanded] = useState(false);

  const toggleExpanded = useCallback(() => {
    setExpanded(!isExpanded);
  }, [isExpanded]);

  return (
    <div className={clsx("aside-user p-2", isExpanded && "is-expanded")}>
      <div
        className={clsx(
          "relative flex items-center justify-between",
          "rounded-t-md bg-orange-500 p-2 text-white",
          !isExpanded && "rounded-b-md"
        )}
      >
        {/* Info */}
        <div className="info flex items-start">
          <div className="avatar h-12 w-12 rounded-full bg-gray-100" />
          <div className="meta ml-2">
            <p>
              <b>Emmanuel K.</b>
            </p>
            <p className="text-white/60">Administrator</p>
          </div>
        </div>

        {/* Actions */}
        <button className="toggler p-2" onClick={toggleExpanded}>
          <ChevronDown className={clsx(isExpanded && "rotate-180")} />
        </button>

        {/* Collapse */}
        <div
          className={clsx(
            "absolute left-0 right-0 top-full",
            "rounded-b-md bg-inherit",
            !isExpanded && "hidden",
          )}
        >
          <Link
            href="/"
            className="block border-b border-white/10 px-6 py-2 hover:bg-white/10"
          >
            Settings
          </Link>
          <Link href="/" className="block px-6 py-2 hover:bg-white/10">
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AsideUserBar;
