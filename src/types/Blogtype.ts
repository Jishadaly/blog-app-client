// export interface IBlogPost {
//     _id?: string;
//     title?: string;
//     content?: string;
//     imageUrl?: string;
//     tags?: string[];
//     createdAt?: Date;
//     author?: {
//         email?: string,
//         userName: string,
//         _id: string
//     } | string,

// }

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