type PostInfo = {
  id: number;
  content: string;
  category: Navigation;
  tags: string[];
};

type Post = PostInfo & DateInfo;
