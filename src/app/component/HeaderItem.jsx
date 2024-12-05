import React from "react";
import Link from "next/link";
// import PropTypes from 'prop-types';
import Swal from "sweetalert2";

export default function HeaderItem({ name, adress, Icon, kind }) {
  if (kind === undefined) {
    console.error(
      " تعریف شده است  undefined  هاHeaderItem  برای یکی از  kind مقدار"
    );
    return null; // یا هر عنصر دیگری که می‌خواهید در صورت خطا نمایش دهید
  }
  return (
    <div>
      {kind === "menuItem" && (
        <Link href={adress} className="hover:text-amber-600 ">
          <Icon className="text-3xl sm:hidden" />
          <p className="hidden sm:inline">{name}</p>
        </Link>
      )}
      {kind === "logoItem" && (
        <div className="font-bold text-2xl">
          <span className="bg-amber-500 p-2 rounded-lg"> IMDb</span> <span>Clone</span>
        </div>

      )}

      {kind !== "menuItem" &&
        kind !== "logoItem" &&
        console.error("تعریف نشده است HeaderItem  برای یک  kind مقدار")}
    </div>
  );
}
// HeaderItem.prototypes={
//     kind: PropTypes.string.isRequired
//   }
