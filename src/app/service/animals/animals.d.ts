export interface Animal{
  id: number;
  postDate: Date | string;
  url: string;
  description: string;
  allowComments: boolean;
  likes: number;
  comments: number;
  userId: number;
}

export type Animals = Array<Animal>;
