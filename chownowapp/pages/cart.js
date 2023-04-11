import Image from "next/image";
import Layout from "../components/layout";
import css from "../styles/Cart.module.css";
import toast, {Toaster} from "react-hot-toast";
import { useStore } from "../store/store";
import { urlFor } from "../lib/client";
import { useState } from "react";
export default function Cart() {
       const CartData = useStore((state)=>state.cart);
       const removeFoods = useStore((state)=>state.removeFoods);
       const [PaymentMethod, setPaymentMethod] = useState(null);

       const handleRemove = (i)=> {
              removeFoods(i);
              toast.error("Item Removed!");
       };

       const total = ()=> CartData.food.reduce((a,b)=>a+b.quantity * b.price, 0);

       const handleOnDelivery = ()=> {
              setPaymentMethod(0);
              typeof window !== 'undefined' && localStorage.setItem('total', total())
       }

       return(
              <Layout>
                     
                     <div className={css.container}>

{/* Details */}
                            <div className={css.details}>

                                   <table className={css.table}>
                                          <thead>
                                                 <th>Food</th>
                                                 <th>Name</th>
                                                 <th>Size</th>
                                                 <th>Price</th>
                                                 <th>Quantity</th>
                                                 <th>Total</th>
                                                 <th></th>
                                          </thead>
                                          <tbody className={css.tbody}>
                                                 {CartData.food.length > 0 && CartData.food.map((foods, i)=> {

                                                        const src = urlFor(foods.image).url()

                                                        return(
                                                               
                                                        
                                                        <tr key={i}>
                                                               <td className= {css.imageTd}>
                                                                      <Image loader = {()=> src}  src={src}  alt="" objectFit="cover" width={85} height={85}/>
                                                               </td>

                                                               <td>
                                                                      {foods.name}
                                                               </td>

                                                               <td>
                                                                      {
                                                                             foods.size === 0 ?
                                                                             "Small" :
                                                                             foods.size === 1 ?
                                                                             "Medium" :
                                                                             "Large"
                                                                      }
                                                               </td>

                                                               <td>
                                                                      {foods.price}
                                                               </td>
                                                               <td>
                                                                      {foods.quantity}
                                                               </td>
                                                               <td>
                                                                      {foods.price * foods.quantity}
                                                               </td>
                                                               <td style={{color: "var(--themeRed)", cursor: "pointer"}} onClick={()=>handleRemove(i)}>x</td>
                                                        </tr>
                                                 )})
                                                 }
                                          </tbody>
                                   </table>
                            </div>

{/* Summary */}
                            <div className={css.cart}>
                                   <span>Cart</span>
                                   <div className={css.CartDetails}>
                                          <div >
                                                 <span>Items</span>
                                                 <span>{CartData.food.length}</span>
                                          </div>

                                          <div >
                                                 <span>Total</span>
                                                 <span>
                                                 <span style={{color: "var(--themeRed)"}} className='naira'></span> {total()} </span>
                                          </div>
                                   </div>

                                   <div className={css.buttons}>
                                          <div className="btn" onClick={handleOnDelivery}>Pay on Delivery </div>
                                          <div className="btn">Pay Now </div>
                                   </div>
                            </div>
                     </div>

                     <Toaster/>
              </Layout>
       )
};