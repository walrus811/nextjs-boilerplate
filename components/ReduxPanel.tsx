"use client";

import { setHello } from "@/states/client/appSlice";
import { useAppDispatch, useAppSelector } from "@/states/client/hooks";
import { Button } from "@headlessui/react";

function ReduxPanel() {
  const app = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();

  function onButtonClick() {
    dispatch(setHello(`${app.hello} ${app.hello}`));
  }

  return (
    <div className="text-pink-400 flex flex-col gap-4">
      <div>Tanstack Query</div>

      <Button
        onClick={onButtonClick}
        className="rounded-md bg-black/20 py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-black/30 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        복붙
      </Button>
      {app.hello}
    </div>
  );
}

export default ReduxPanel;
