import Image from 'next/image';
import css from '../styles/Hero.module.css';
import Cherry from '../assets/Cherry.png';
import Pizza from '../assets/Pizza.jpg';
import HeroImage from '../assets/HeroImage.png';
import {UilPhone} from '@iconscout/react-unicons';
export default function Hero() {
       return(
              <div className={css.container}>
                     {/* left side */}
                     <div className={css.left}>
                            
                            <div className={css.cherryDiv}>
                                   <span>More than Faster</span>
                                   <Image src={Cherry} alt="" width={40} height={25} />
                            </div>

                            <div className={css.heroText}>

                                   <span>Be The Fastest</span>
                                   <span>In Delivering</span>
                                   <span>
                                          Your <span style={{color: "var(--themeRed)"}}>Food</span> 
                                   </span>
                            </div>

                            <span className={css.miniText}>Our mission is to deliver foods to students at their comfort zone within the school</span>

                            <button className={`btn ${css.btn}`}>
                                   Get Started
                            </button>
                     </div>
                     {/* right side */}

                     <div className={css.right}>
                            
                            <div className={css.imageContainer}>
                                   <Image src={HeroImage} alt="" layout='intrinsic'/>
                            </div>


                            <div className={css.ContactUs}>
                                   <span>Contact us</span>
                                   <div>
                                          <UilPhone color='white'/>
                                   </div>
                            </div>


                            <div className={css.Food}>
                                   <div>
                                          <Image src={Pizza} alt="" objectFit='cover' layout='intrinsic'/>
                                   </div>

                                   <div className={css.details}>
                                          <span>Top Meal</span>
                                          <span>
                                                 
                                                 <span style={{color: "var(--themeRed)"}} className='naira'></span>1000</span>
                                   </div>
                            </div>
                     </div>
              </div>
       )
};
