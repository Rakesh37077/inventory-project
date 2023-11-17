import {useState} from "react";
import useCart from "./../../hooks/useCart";
import { BiSolidCart } from "react-icons/bi";
import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";
import { AiFillCloseCircle} from "react-icons/ai";
import { GrFormClose } from "react-icons/gr"

const Products = () => {
  const { carts, addToCart, isInCart, removeFromCart } = useCart();
  const [showCart, setShowCart] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Jockey 2726 Men's Super Combed Cotton Rich Solid",
      sub: "V Neck Half Sleeve T-Shirt",
      price: 999,
      image:
        "https://m.media-amazon.com/images/I/71sGfOZcpwL._UY879_.jpg",
    },
    {
      id: 2,
      name: "DHRUVI TRENDZ Men",
      sub: "Simple Shirt for Men",
      price: 264,
      image:
        "https://m.media-amazon.com/images/I/61Xv6ytnYiL._UY879_.jpg",
    },
    {
      id: 3,
      name: "EYEBOGLER Regular Printed",
      sub: "Printed TShirt for Men",
      price: 249,
      image:
        "https://m.media-amazon.com/images/I/61GmEjXOdzL._UY879_.jpg"
    },
    {
      id: 4,
      name: "London Hills Solid Men's Round Neck Cotton Blend",
      sub: "Half Sleeve T-Shirts",
      price: 999,
      image:
        "https://m.media-amazon.com/images/I/71tJWaahoDL._UY879_.jpg"
    },
    {
      id: 5,
      name: "Veirdo® Oversized Baggy Fit Comfortable Pure Cotton",
      sub: "Round Neck T-Shirt",
      price: 349,
      image:
        "https://m.media-amazon.com/images/I/51VzVSE2AmL._UY879_.jpg"
    },
    {
      id: 6,
      name: "EYEBOGLER Round Neck",
      sub: "Full Sleeve Striped T Shirt for Men",
      price: 239,
      image:
        "https://m.media-amazon.com/images/I/61PgOZ-IH0L._UX679_.jpg"
    },
    {
      id: 7,
      name: "LEOTUDE Men's Cottoblend Half Sleeve Printed",
      sub: "Oversized Drop Shoulder T-Shirt",
      price: 249,
      image:
        "https://m.media-amazon.com/images/I/613KABeTdwL._UY879_.jpg"
    },
    {
      id: 8,
      name: "BULLMER Black Trendy Front and Back Printed",
      sub: "Oversized Round Neck T-Shirt for Men",
      price: 289,
      image:
        "https://m.media-amazon.com/images/I/61ezXk580GL._UX679_.jpg"
    },
  ]);

  return (
    <div className='mt-5 container mx-auto px-3'>
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-4xl">Products List</h1>
        <button className="font-bold flex" onClick={() => setShowCart(true)}>
          <BiSolidCart className="text-2xl mr-2"/> Cart
        </button>
        {showCart ? (
        <div className="fixed inset-0 bg-zinc-300 bg-opacity-50 flex z-50">
          <div
            onClick={() => {
              setShowCart(false);
            }}
            className="flex flex-1 h-full"
          ></div>
          <div className="bg-white h-full p-4 lg:px-8 w-full lg:w-1/3 flex flex-col shadow">
            <div className="flex justify-between items-center text-xl pb-3 border-b-2 border-white">
              <div className="flex items-center">
                <BiSolidCart className="text-2xl mr-2"/>
                <p className="flex-1 font-bold">Cart List</p>
              </div>
              <button
                onClick={() => {
                  setShowCart(false);
                }}
              >
                <AiFillCloseCircle />
              </button>
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto">
              {carts?.length === 0 ? (
                <p className="text-center mt-5 text-zinc-400">Cart is empty</p>
              ) : null}
              {carts?.map((e) => (
                <div className="flex my-2 p-2 bg-zinc-100">
                  <img
                    className="w-1/6 max-h-full rounded-l-md object-cover"
                    src={e.image}
                    alt=""
                  />
                  <div className="bg-white rounded-r-md p-3 flex-1 flex flex-col justify-between relative">
                    <div className="flex flex-col">
                      <p className="text-sm font-medium ">{e.name}</p>
                      <p className="text-xs opacity-75">{e.sub}</p>
                    </div>
                    <div className="flex items-center">
                      <p className="font-bold text-lg">₹{e.price}</p>
                      <button
                        onClick={() => {
                          removeFromCart(e.id);
                        }}
                        className="bg-red-300 px-1 py-1 text-xs rounded-full font-bold absolute top-2 right-2"
                      >
                        <GrFormClose className="font-bold text-sm"/>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {products?.map((item) => (
          <div className="w-full w-24 hover:bg-zinc-100 rounded-md mb-5" key={item.id}>
            <div className="relative">
              <div className="absolute top-0 right-0">
                {isInCart(item.id) ? (
                  <button
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                    className="m-2 text-lg bg-green-500 font-bold text-white p-2 rounded-full"
                  >
                    <BsFillCartCheckFill />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      addToCart(item);
                    }}
                    className="m-2 text-lg bg-red-500 font-bold text-white p-2 rounded-full"
                  >
                    <BsFillCartPlusFill />
                  </button>
                )}
              </div>
              <img className="rounded-md w-full" src={item.image} alt="" />
              <div className="px-2 pb-2">
                <h1 className="font-bold text-sm mt-2 w-full truncate">
                  {item.name}
                </h1>
                <p className="mt-1 text-xs">{item.sub}</p>
                <p className="font-bold">₹ {item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;