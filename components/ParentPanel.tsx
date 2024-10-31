"use client";

import TestButton from "@/components/TestButton";
import { useEffect, useRef } from "react";
import DateLabel from "./DateLabel";
import DialogButton from "./DialogButton";
import Tabs from "./Tabs";
import TanstackQueryPanel from "./TanstackQueryPanel";
import ReduxPanel from "./ReduxPanel";

function ParentPanel() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (buttonRef.current) {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        buttonRef.current.style.backgroundColor = `#${randomColor}`;
      }
    }, 500);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  });

  return (
    <div className="flex flex-col gap-8 p-12">
      <Tabs />

      <DialogButton>
        <div className="flex flex-col gap-2 text-white">
          <div>
            내 집 뒤에 복숭아밭이 있는데, 꽃이 한창 성할 때요. 내일 동산에서
            천지에 제사를 지내고, 우리 셋이 의형제를 맺어 힘을 합치고 마음을
            함께 해야, 큰 일을 도모할 수 있을 테요.
          </div>
        </div>
      </DialogButton>
      <DateLabel date={new Date()} />
      <TestButton text="test text" buttonRef={buttonRef} />
      <TanstackQueryPanel />
      <ReduxPanel />
    </div>
  );
}

export default ParentPanel;
