import * as React from "react";
import { styled } from "@mui/material/styles";
import { Rating } from "@mui/material";

export default function ProductReviewCard({
  customerName,
  date,
  content,
  rating,
}) {
  return (
    <div className="flex flex-col gap-2 rounded group">
      <div className="flex flex-col">
        <h1 className="font-bold capitalize">{customerName}</h1>
        <p className="text-gray-400 text-sm">Reviewed on {date}</p>
      </div>
      <Rating size="small" precision={0.5} defaultValue={rating} readOnly />
      <p>{content}</p>
    </div>
  );
}
