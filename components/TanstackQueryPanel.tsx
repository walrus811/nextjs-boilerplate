"use client";

import { useHello } from "@/states/server/hello";

function TanstackQueryPanel() {
  const { data: HelloData, isRefetching } = useHello({ refetchInterval: 2000 });

  return (
    <div className="text-indigo-400">
      <div>Tanstack Query</div>
      <div>{isRefetching ? "로딩" : "로딩안함"}</div>
      {HelloData}
    </div>
  );
}

export default TanstackQueryPanel;
