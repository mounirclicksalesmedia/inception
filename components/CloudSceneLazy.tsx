"use client";

import dynamic from "next/dynamic";

const CloudScene = dynamic(() => import("./CloudScene"), { ssr: false });

export default CloudScene;
