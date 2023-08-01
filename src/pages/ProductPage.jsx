import React from 'react'
import Product from '../components/Product';

export default function ProductPage() {
    const data = [
        {
            id : 1,
            name : "태안 동죽조개 600g(생물)",
            price : 6480,
            url : "https://product-image.kurly.com/product/image/f694a9fb-8b03-4750-8178-43bf11eda445.jpg",
            alt : "태안 동죽조개",
        },
        {
            id : 2,
            name : "솔티드 캐러맬 스프레드 200g",
            price : 2390,
            url : "https://img-cf.kurly.com/shop/data/goods/1650947985868l0.jpg",
            alt : "솔티드 캐러맬 스프레드",
        },
        {
            id : 3,
            name : "비타플러스에그 무항생제 1+등급 대란 20구",
            price : 6160,
            url : "https://img-cf.kurly.com/shop/data/goods/1648206917161l0.jpeg",
            alt : "비타플러스 에그"
        },
    ];


  return (
    <div>
        {data.map(d => (
            <Product 
            name={d.name}
            price={d.price}
            url={d.url}
            alt={d.alt}
            />

        ))}

    </div>
  )
}
