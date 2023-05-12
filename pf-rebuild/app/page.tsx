"use client";

import { useState, useEffect } from "react";
import type { RootState } from "./globalredux/store";
import { useSelector, useDispatch } from "react-redux";
import { getFeedback } from "./globalredux/Features/feedback/feedbackSlice";

export default function Home() {
  const feedback = useSelector((state: RootState) => state.feedback.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();

      const feedback = data.map((fb: { userId: number, id: number, title: string, body: string }) => {
        return {
          id: fb.id,
          title: fb.title,
          body: fb.body,
          likes: fb.userId
        }
      })
      dispatch(getFeedback(feedback))
    }
    getData();
  }, [])
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between p-24">
      {
        feedback.map((fb: { likes: number, id: number, title: string, body: string }) => {

          return (
            <div key={fb.id} className="text-black">
              <p>{fb.likes}</p>
              <p>{fb.title}</p>
              <p>{fb.body}</p>
            </div>
          )
        })
      }
    </main>
  )
}
