import { useAppStore } from "airbnb/store/store";
import React from "react";

const Title = () => {
  const { title, setTitle } = useAppStore();
  return (
    <div className="flex flex-col gap-5 items-center justify-center h-full text-airbnb-light-black px-4">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="font-semibold text-4xl">
          Now, let's give your house a title.
        </h2>
        <p>
          Short titles work best. Have fun with it, you can always change it later.
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full max-w-lg">
        <textarea
          className="border border-gray-400 h-40 w-full rounded-lg active:border-gray-950 no-scrollbar text-4xl p-4"
          value={title}
          onChange={(e) => {
            if (e.target.value.length <= 32) {
              setTitle(e.target.value);
            }
          }}
        />
        <span className="self-end">{title.length}/32</span>
      </div>
    </div>
  );
};

export default Title;
