"use client";
import { useState } from "react";
import React from "react";

const Page = () => {
    const [search, setsearch] = useState(null)
    const [count, setcount] = useState(0)
    const handlesearch = (e) => {
        setsearch("Searching..."+ e.target.value);
        setcount(count+1);
    };
    const debounce = (() => {
        let timer;
        return (e) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                setsearch("Searching..."+ e.target.value);
                setcount(count+1);
            }, 500);
        };
    })();
    const throttle = (() => {
        let lastCall = 0;
        return (e) => {
            const now = new Date().getTime();
            if (now - lastCall < 3000) {
                return;
            }
            lastCall = now;
            setsearch("Searching..."+ e.target.value);
            setcount(count+1);
        };
    })();
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center my-4 mx-auto">
        Debounce and Throttle
      </h1>
      {/* implementing debounce and throttle in search example where user enters input and search api is called for searching data*/}
      <div className="flex items-center justify-around m-6 p-6 border rounded-lg shadow-lg">
        <form className="flex flex-col items-center m-6 p-6 border rounded-lg shadow-lg">
            <label className="mb-2 font-semibold">Without Debounce/Throttle</label>
          <input
            type="text"
            placeholder="Search..."
            onKeyUp={handlesearch}
            className="border p-2 rounded w-64 mb-4"
          />
        </form>
        <form className="flex flex-col items-center m-6 p-6 border rounded-lg shadow-lg">
            <label className="mb-2 font-semibold">With Debounce</label>
          <input
            type="text"
            placeholder="Search..."
            onKeyUp={debounce}
            className="border p-2 rounded w-64 mb-4"
          />
        </form>
        <form className="flex flex-col items-center m-6 p-6 border rounded-lg shadow-lg">
            <label className="mb-2 font-semibold">With Throttle</label>
          <input
            type="text"
            placeholder="Search..."
            onKeyUpCapture={throttle}
            className="border p-2 rounded w-64 mb-4"
          />
        </form>
      </div>
    <div className="text-center font-medium">{search}</div>
    <div className="text-center font-medium">API calls made: {count}</div>
    </div>
  );
};

export default Page;
