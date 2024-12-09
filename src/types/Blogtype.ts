export interface IBlogPost {
    _id: string
    title: string
    content: string
    author: {
      _id: string
      userName: string;
      email: string;
    };
    createdAt: Date
    imageUrl: string
    tags: string[]
  }