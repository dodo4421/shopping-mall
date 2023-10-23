import Image from "next/image"
import Link from "next/link"
import ProductRate from "./ProductRate"

export default function ProductItem({ product }) {
  return (
    <div className='card'>
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.image}
          width={400}
          height={400}
          alt={product.name}
          className='roudned shadow object-cover h-96 w-full'
        />
      </Link>
      <div className='flex flex-col items-center justfy-center p-5'>
        <Link href={`/product/${product.id}`}>
          <h2 className='text-lg'>{product.name}</h2>
        </Link>
        <ProductRate rate={product.rating} count={product.numReviews} />
        <p>${product.price}</p>
        <button>Add to cart</button>
      </div>
    </div>
  )
}
