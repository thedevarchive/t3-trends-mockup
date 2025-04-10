import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

interface Profile {
  id: number; 
  firstName: string; 
  lastName: string; 
  userName: string; 
  following: number; 
  followers: number; 
}

const profiles: Profile[] = [
  {
    id: 1, 
    firstName: "John", 
    lastName: "Doe", 
    userName: "johndoe", 
    following: 245, 
    followers: 1200
  }
]

// Mocked DB
interface Post {
  id: number;
  title: string;
  description: string; 
  timeAgo: string; 
  comments: number; 
  likes: number; 
}

const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started With T3 Stack",
    description: "A comprehensive guide to building apps with the T3 stack.", 
    timeAgo: "2 days", 
    comments: 24, 
    likes: 142
  },{
    id: 2,
    title: "Next.js 13 Features You Should Know",
    description: "Exploring the latest features in Next.js 13 that will…", 
    timeAgo: "5 days", 
    comments: 18, 
    likes: 97
  },{
    id: 3,
    title: "Why tRPC Will Change Your Workflow",
    description: "A deep dive into tRPC and how it enhances type safety.", 
    timeAgo: "1 week", 
    comments: 32, 
    likes: 211
  },
];

export const postRouter = createTRPCRouter({
  getPosts: publicProcedure.query(() => {
    return posts ?? null;
  }),
  getProfile: publicProcedure.query(() => {
    return profiles[0] ?? null;
  }),
});
