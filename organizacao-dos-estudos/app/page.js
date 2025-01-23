import Image from "next/image";
import imagemMoca from "@/public/image.png"
import Cabecalho from '@/components/header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import logo from "@/public/logo.svg"
import { motion } from "framer-motion";

 
export default function Home() {
    return (
    <main className="flex flex-col items-center justify-start min-h-screen ">
      <section className={"min-w-full min-h-[80vh] fundo"}>
         <Cabecalho /> 
      </section>
      <section className=" min-h-[80vh] m-auto">
        <h1 className="text-4xl font-bold m-14 text-center">Como funciona?</h1> 
        <div className="flex flex-row gap-16">
          <Image src={imagemMoca} height={400} width={400}/>
          <div className="flex items-center justify-center">
            <ul className="text-2xl flex flex-col gap-10">
              <li >Acesso a 1 e-book por mês ✔</li>
              <li >Curadoria especial ✔</li>
              <li >Cancele quando quiser ✔</li>
            </ul>
          </div>
          
        </div>
      </section>
      <section className="fundo min-w-full flex-col flex items-center justify-normal">
      <h1 className="text-4xl font-bold mb-2 mt-14 text-center">Preço Simples e Transparente</h1> 
      <p className="w-[60%] text-center text-xl p-6 text-[#6B7280]">Pra que inúmeros planos quando nós sabemos exatamente o que é melhor para você? Assine o nosso plano mensal Pro Premium VIP e garanta mensalmente um ebook novo de programação. E por menos de um café por dia. </p>

          <Card className="w-1/4 mt-3 mb-14 min-w-96">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Plano Pro Premium Vip
              </CardTitle>
              <CardDescription>Tudo que você precisa para seus estudos</CardDescription>
            </CardHeader>
            <CardContent className=" ">
              <div className="flex flex-row items-end gap-0.5">
                <CardTitle className="text-3xl">R$29</CardTitle>
                <p className="text-sm text-[#6B7280]">/mês</p>
              </div>
              <div className="mt-5">
                <ul className="text-base flex flex-col gap-4">
                  <li>Acesso a 1 e-book por mês ✔</li>
                  <li>Curadoria especial ✔</li>
                  <li>Acesso Ilimitado ✔</li>
                  <li>Cancele quando quiser ✔</li>
                </ul>
              </div>
              <Button className="mb-10 mt-10 w-full">Assine Agora</Button>
            </CardContent>
          </Card>
      </section>
      <section className="text-center mt-5">
        <h1 className="text-5xl font-bold mt-14">Pronto Para Mudar Sua Vida?</h1>
        <p className=" w-[85%] m-auto text-center text-xl p-6 text-[#6B7280]">Faça como milhares de outras pessoas. Assine nosso produto e tenha garantido seus estudos .</p>
        <Button className="w-1/2 m-5 p-2">Assine Agora</Button>
        <p className=" text-center text-sm p-3  text-[#6B7280]">Começe sua assinatura e cancele quando quiser.</p>
      </section>
      <footer className="flex flex-col justify-end items-center h-[35vh]">
        <Image src={logo.src} width={150} height={150} className="mt-20 -translate-x-3"/>
        <p className=" text-center text-sm p-3 mb-10  text-[#6B7280]">Começe sua assinatura e cancele quando quiser.</p>
      </footer>
    </main>
  );
}
