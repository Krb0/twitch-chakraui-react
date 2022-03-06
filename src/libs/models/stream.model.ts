import { Streamer } from "./streamer.model";

export interface Stream {
  viewers: number;
  game: {
    name: string;
    cover: string;
    image: string;
    video: string;
  };
  tags: string[];
  length: number;
  streamer: Streamer;
}
