/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useState } from "react";

const Page = () => {
  const [beauty, setBeauty] = useState([]);
  const [smartphones, setSmartphones] = useState([]);
  const [furniture, setFurniture] = useState([]);
  const [loading, setLoading] = useState(false);
  const [priceFilter, setPriceFilter] = useState(0);

  const sequentialCalls = async () => {
    setLoading(true);
    console.time("Sequential Time");

    // Beauty
    const beautyRes = await fetch(
      "https://dummyjson.com/products/category/beauty"
    );
    const beautyData = await beautyRes.json();
    setBeauty(beautyData.products.slice(0, 5));

    // Smartphones
    const phoneRes = await fetch(
      "https://dummyjson.com/products/category/smartphones"
    );
    const phoneData = await phoneRes.json();
    setSmartphones(phoneData.products.slice(0, 5));

    // Furniture
    const furnitureRes = await fetch(
      "https://dummyjson.com/products/category/furniture"
    );
    const furnitureData = await furnitureRes.json();
    setFurniture(furnitureData.products.slice(0, 5));

    console.timeEnd("Sequential Time");
    setLoading(false);
  };

  const parallelCalls = async () => {
    try {
      setLoading(true);
      console.time("Parallel Time");

      const [beautyRes, phoneRes, furnitureRes] = await Promise.all([
        fetch("https://dummyjson.com/products/category/beauty"),
        fetch("https://dummyjson.com/products/category/smartphones"),
        fetch("https://dummyjson.com/products/category/furniture"),
      ]);

      const [beautyData, phoneData, furnitureData] = await Promise.all([
        beautyRes.json(),
        phoneRes.json(),
        furnitureRes.json(),
      ]);

      setBeauty(beautyData.products.slice(0, 5));
      setSmartphones(phoneData.products.slice(0, 5));
      setFurniture(furnitureData.products.slice(0, 5));

      console.timeEnd("Parallel Time");
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredParallelCalls = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      console.time("Parallel Time");

      const [beautyRes, phoneRes, furnitureRes] = await Promise.all([
        fetch("https://dummyjson.com/products/category/beauty"),
        fetch("https://dummyjson.com/products/category/smartphones"),
        fetch("https://dummyjson.com/products/category/furniture"),
      ]);

      const [beautyData, phoneData, furnitureData] = await Promise.all([
        beautyRes.json(),
        phoneRes.json(),
        furnitureRes.json(),
      ]);
      setBeauty(beautyData.products.slice(0, 5).filter(product => product.price >= (priceFilter || 0)));
      setSmartphones(phoneData.products.slice(0, 5).filter(product => product.price >= (priceFilter || 0)));
      setFurniture(furnitureData.products.slice(0, 5).filter(product => product.price >= (priceFilter || 0)));

      console.timeEnd("Parallel Time");
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div>
      {/* {console.log(beauty)}
      {console.log(smartphones)}
      {console.log(furniture)} */}
      <h1 className="text-3xl font-bold underline text-center my-4 mx-auto">
        Asynchronous JavaScript
      </h1>
      <div className="p-6 mx-auto text-center">
        <button
          onClick={sequentialCalls}
          className="m-6 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Show products by categories sequentially
        </button>
        <button
          onClick={parallelCalls}
          className="m-6 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Show products by categories in parallel
        </button>

        {loading && <p className="mb-4 text-gray-600">Loading...</p>}
        
        {/* Applying Filter functionality on price*/}
        <form className="mb-6" onSubmit={filteredParallelCalls}>
          <input type="number" placeholder="Min Price" value={priceFilter} onChange={(e)=>{setPriceFilter(e.target.value)}} className="m-2 border p-2 rounded"/>
          <button
            type="submit"
            className="m-2 rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            Apply Price Filter
          </button>
        </form>

        {/* Beauty */}
        {/* {loading &&<h2 className="mb-2 text-xl font-semibold">{beauty[0].tags[0]}</h2>} */}
        <div className="mb-6 flex flex-wrap gap-4">
          {beauty.map((product) => (
            <div
              key={product.id}
              className="w-[200px] rounded border p-3 text-center shadow-sm"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="mx-auto mb-2 h-[150px] w-[150px] object-contain border"
              />
              <h4 className="font-medium">{product.title}</h4>
              <p className="text-gray-700">₹ {product.price}</p>
            </div>
          ))}
        </div>

        {/* Smartphones */}
        {/* {loading && <h2 className="mb-2 text-xl font-semibold">{smartphones[0].tags[0]}</h2>} */}
        <div className="mb-6 flex flex-wrap gap-4">
          {smartphones.map((product) => (
            //   <ProductCard key={p.id} product={p} />
            <div
              key={product.id}
              className="w-[200px] rounded border p-3 text-center shadow-sm"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="mx-auto mb-2 h-[150px] w-[150px] object-contain border"
              />
              <h4 className="font-medium">{product.title}</h4>
              <p className="text-gray-700">₹ {product.price}</p>
            </div>
          ))}
        </div>

        {/* Furniture */}
        {/* {loading && <h2 className="mb-2 text-xl font-semibold">{furniture[0].tags[0]}</h2>} */}
        <div className="flex flex-wrap gap-4">
          {furniture.map((product) => (
            //   <ProductCard key={p.id} product={p} />
            <div
              key={product.id}
              className="w-[200px] rounded border p-3 text-center shadow-sm"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="mx-auto mb-2 h-[150px] w-[150px] object-contain border"
              />
              <h4 className="font-medium">{product.title}</h4>
              <p className="text-gray-700">₹ {product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
