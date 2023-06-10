export interface Game {
  id: number;
  name: string;
  image: string;
  imageWallpaper: string;
  videoLink: string;
  price: number;
  description: string;
  specification: string;
  creatorFirstName: string;
  creatorLastName: string;
  publishDate: string;
  platform?: number[];
  createdAt: Date;
  deletedAt: Date;
  modifiedAt: Date;
}
