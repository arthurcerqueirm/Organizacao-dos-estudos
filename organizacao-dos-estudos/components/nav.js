import Link from "next/link";
import { Button } from "./ui/button";
import Image from 'next/image'
import logo from "@/public/logo.svg"

export default function nav (){
    return(
        <nav className="flex flex-row justify-between items-center h-16 min-w-full p-10 pt-14">
            <div>
                <Image src={logo.src} width={150} height={150}/>
            </div>
            <ul className="flex flex-row justify-between items-center gap-6">
                <li><Link href={"/funcionamento"} className="text-lg">Funcionamento</Link></li>
                <li><Link href={"/preco"} className="text-lg">Preço</Link></li>
                <Button variant="outline" className="border border-slate-400 scale-110 text-base "><Link href={"/login"}>Login</Link></Button>
            </ul>
        </nav>
    )
}