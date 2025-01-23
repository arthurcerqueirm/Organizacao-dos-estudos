import Nav from "@/components/nav"
import { Button } from "./ui/button"
import { Input } from "./ui/input"


export default function header(){
    return(
        <header className="flex flex-col justify-around items-center h-full">
            <Nav />
            <div className="flex flex-col items-center">
                <h1 className="desktop:text-6xl  tablet:text-2xl font-bold mt-14 text-center">Simplifique seus Estudos</h1>
                <p className="w-[75%] text-center text-xl p-6 text-[#6B7280]">Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e receba todos os meses um ebook novo de programação.</p>
                <form action="/search" className="flex gap-8 min-w-[50%] mt-12 scale-110">
                    <Input type="email" placeholder="coloque aqui seu email" className="bg-white p-5"/>
                    <Button type="submit" className="p-5">Assine Agora</Button>
                </form>
                <p className="w-[75%] text-center text-xl p-3 mt-20 text-[#6B7280]">Começe sua assinatura e cancele quando quiser.</p>
            </div>
        </header>
    )
}