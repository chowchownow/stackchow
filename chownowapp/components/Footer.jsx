import {UilFacebook, UilTwitter, UilInstagram} from "@iconscout/react-unicons"
import Image from "next/image"
import Logo from '../assets/Logo.png'
import css from '../styles/Footer.module.css'
export default function Footer() {
    return (
        <div className={css.container}>
            <span>ALL RIGHTS RESERVED</span>
            <div className={css.social}>
                <UilFacebook size={45}/>
                <UilTwitter size={45}/>
                <UilInstagram size={45}/>
            </div>

            <div className={css.logo}>
                <Image src ={Logo} alt = "" width={50} height={50} />
                <span>ChowNow</span>
            </div>
        </div>
    )
};
