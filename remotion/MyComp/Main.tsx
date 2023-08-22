import { z } from "zod";
import { AbsoluteFill, Video } from "remotion";
import { CompositionProps } from "../../types/constants";
import { loadFont } from "@remotion/google-fonts/Inter";
import React from "react";

loadFont();

const container: React.CSSProperties = {
  backgroundColor: "white",
};

export const Main = ({ title }: z.infer<typeof CompositionProps>) => {
  return (
    <AbsoluteFill style={container}>
      <Video src="https://dqu1p08d61fh.cloudfront.net/a35f0a48-32c0-42e8-adff-ff6a7b5e020f/160a24e3-081a-4f12-a042-6f75b092af3f/imans-strangest-habit-1-compressed.mp4#t=0,37.9" />
    </AbsoluteFill>
  );
};
