import css from '../styles/Menu.module.css';
import Image from 'next/image';
import { urlFor } from "../lib/client.js";
import Link from 'next/link';
export default function Menu({food}) {
       return(
              <div className={css.container}>
                     
                     <div className={css.heading}>
                            <span>OUR MENU</span>
                            <span>Menu That</span>
                            <span>Make you Smile</span>
                     </div>

                     <div className={css.menu}>
                            {/* Foods */}
                            {food.map((foods, id)=> {
                                   const src = urlFor(foods.image).url() 
                                   return(
                                          <div className={css.foods} key={id}>
                                                 <Link href={`./foods/${foods.slug.current}`}>
                                                        <div className={css.ImageWrapper}>
                                                               <Image loader ={ ()=> src } src={src} alt=' ' objectFit = "cover" layout="fill"/>
                                                        </div>
                                                 </Link>

                                                 <span>{foods.name}</span>
                                                 <span><span style={{color: "var(--themeRed)"}} className='naira'></span>{foods.price[0]}</span>
                                          </div>
                                   );
                            })}
                     </div>
              </div>
       )
};
