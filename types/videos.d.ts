export interface VideosContent {
  videos: {
    main: {
      description: string;
      help: string;
    };
    [key: string]: VideosItemComplete;
  };
}

export interface VideosItemComplete {
  title: string;
  description: string;
  videoId: string;
}
