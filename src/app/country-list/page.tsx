import Image from "next/image";

import { LockKeyhole, Mail } from "lucide-react";
import logo from "@/assets/background.svg"



export default function Home() {
  //const[username, setUsername] = ("");
  //const[password, setPassword] = ("");

  //const handleSubmit = () => {
    

    //console.log("Envio");
  //}
  return (
<>
    <div className="logo-container">
      <Image src={logo} alt="Logo Exactus"/>
    </div>
    
    <div className="container">
      <form>
        <h1 className="text-3xl text-center mb-16 font-bold">Bem-vindo</h1>
        <h2 className="text-sm">Email</h2>
        <div className="relative w-full h-[50px] mb-[50px] my-[10px]">
          <Mail/>
          <input type="email" id="buscar" placeholder="Digite seu email" className="w-[384px] h-full outline-none border border-[#E5E7EB] rounded-[12px] py-[20px] px-[20px] pl-[45px]"/>
        </div>
        <h2>Senha</h2>
        <div className="irelative w-full h-[50px] mb-[50px] my-[10px]">
          <LockKeyhole/>
          <input type="password" id="buscar" placeholder="Digite sua senha" className="w-[384px] h-full outline-none border border-[#E5E7EB] rounded-[12px] py-[20px] px-[20px] pl-[45px]"/>
        </div>
        <button className="w-[384px] h-[48px] bg-[#2563EB] mt-[31px] text-white rounded-[12px] transition-all duration-500 ease-in-out">Entrar</button>
      </form>
    </div>
    </>
  );
}
