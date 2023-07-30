import React from "react";

const Reviews = ({ review }) => {
  return (
    <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 lg:py-4 mx-auto">
      <div class="flex flex-col bg-white border border-gray-200 h-52 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700">
        <div class="flex-auto p-4 md:p-6">
          <p class="mt-3 sm:mt-6 text-base text-gray-800 md:text-xl dark:text-white">
            <em>{review.comment}</em>
          </p>
        </div>

        <div class="p-4 rounded-b-xl md:px-6">
          <h3 class="text-sm font-semibold text-gray-800 sm:text-base dark:text-gray-200">
            {review.user}
          </h3>
          <p class="text-sm text-gray-500">Rating: {review.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
