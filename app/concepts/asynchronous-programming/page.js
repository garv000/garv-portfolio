/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { ca } from "zod/v4/locales";

const Page = () => {
  const [beauty, setBeauty] = useState([]);
  const [smartphones, setSmartphones] = useState([]);
  const [furniture, setFurniture] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [priceFilter, setPriceFilter] = useState("");
  const [cart, setCart] = useState([]);
  const cartSectionRef = useRef(null);

  useEffect(() => {
    // Initial fetch to load products
    parallelCalls();
  }, []);
  useEffect(() => {
    if (cart.length > 0) {
      cartSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [cart]);

  const sequentialCalls = async () => {
    setLoading(true);
    setLoaded(false);
    console.time("Sequential Time");
    setBeauty([]);
    setSmartphones([]);
    setFurniture([]);

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
    setLoaded(true);
  };

  const parallelCalls = async () => {
    try {
      setLoading(true);
      setLoaded(false);
      console.time("Parallel Time");
      setBeauty([]);
      setSmartphones([]);
      setFurniture([]);

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

      setLoaded(true);
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
      setLoaded(false);
      console.time("Parallel Time");
      setBeauty([]);
      setSmartphones([]);
      setFurniture([]);

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
      setBeauty(
        beautyData.products
          .slice(0, 5)
          .filter((product) => product.price >= (priceFilter || 0))
      );
      setSmartphones(
        phoneData.products
          .slice(0, 5)
          .filter((product) => product.price >= (priceFilter || 0))
      );
      setFurniture(
        furnitureData.products
          .slice(0, 5)
          .filter((product) => product.price >= (priceFilter || 0))
      );
      setLoaded(true);

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
          <input
            type="number"
            placeholder="Min Price"
            value={priceFilter}
            onChange={(e) => {
              setPriceFilter(e.target.value);
            }}
            className="m-2 border p-2 rounded"
          />
          <button
            type="submit"
            className="m-2 rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            Apply Price Filter
          </button>
        </form>

        <div className="flex flex-col justify-center items-center">
          {/* Beauty */}
          {loaded && (
            <h2 className="mb-2 text-xl font-semibold text-center">
              Beauty Products
            </h2>
          )}
          {/* products are only shown when ref cat1 is true otherwise hidden */}
          <div className="mb-6 flex flex-wrap gap-4">
            {beauty.map((product) => (
              <div
                key={product.id}
                className="w-[200px] rounded border p-3 text-center shadow-sm flex flex-col justify-between"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="mx-auto mb-2 h-[150px] w-[150px] object-contain border"
                />
                <h4 className="font-medium">{product.title}</h4>
                <p className="text-gray-700">₹ {product.price}</p>
                <button
                  onClick={() => setCart([...cart, product])}
                  className="mt-2 rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Smartphones */}
          {loaded && (
            <h2 className="mb-2 text-xl font-semibold">Smartphones</h2>
          )}
          <div className="mb-6 flex flex-wrap gap-4">
            {smartphones.map((product) => (
              //   <ProductCard key={p.id} product={p} />
              <div
                key={product.id}
                className="w-[200px] rounded border p-3 text-center shadow-sm flex flex-col justify-between"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="mx-auto mb-2 h-[150px] w-[150px] object-contain border"
                />
                <h4 className="font-medium">{product.title}</h4>
                <p className="text-gray-700">₹ {product.price}</p>
                <button
                  onClick={() => setCart([...cart, product])}
                  className="mt-2 rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>

          {/* Furniture */}
          {loaded && <h2 className="mb-2 text-xl font-semibold">Furniture</h2>}
          <div className="flex flex-wrap gap-4">
            {furniture.map((product) => (
              //   <ProductCard key={p.id} product={p} />
              <div
                key={product.id}
                className="w-[200px] rounded border p-3 text-center shadow-sm flex flex-col justify-between"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="mx-auto mb-2 h-[150px] w-[150px] object-contain border"
                />
                <h4 className="font-medium">{product.title}</h4>
                <p className="text-gray-700">₹ {product.price}</p>
                <button
                  onClick={() => setCart([...cart, product])}
                  className="mt-2 rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Add to cart section showing products added to cart and cart total using reduce function */}
        <div ref={cartSectionRef} className="mt-8 border-t pt-4">
          <h2 className="mb-4 text-2xl font-semibold">Shopping Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              <ul>
                {cart.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item.title} - ₹ {item.price}
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-bold">
                Total: ₹ {cart.reduce((total, item) => total + item.price, 0)}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
