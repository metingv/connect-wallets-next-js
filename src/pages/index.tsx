import type { NextPage } from "next";
import Head from "next/head";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import  { useEffect,useState } from 'react'


const Home: NextPage = (props) => {
    
// @state
const [connected,  setConnected] = useState(Boolean)
const {connecting, publicKey } = useWallet();
//@useEffect   
useEffect(() => {
console.log(connecting)
setConnected(connecting)
},[publicKey])

//connecte gore hansisa funksiyani render etsen publickeye gore et, ve birde connecting i gore yox onu state e at 
// o state e gorede render et asagidaki kimi

useEffect(() => {

},[publicKey,connected])
  
   return (
    <>
      <Head>
        <title>Wallet Connect</title>
        <meta
          name="description"
          content="This site will fly high 🦤"
        />
      </Head>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center",flexDirection:"column"}}>
         <h1> Wallet Connect  </h1>
       <WalletMultiButton />
     <p>
     {publicKey  ? <>Your address: {publicKey.toBase58()}</> : null}
      <br />
     Connect: {connected ? "true" : "false"}
    
    {/* dizayni node-modulesdan deyis @solana/ wallet-adapter-react-ui / styles.css */}
     </p>
     </div>
    </>
  );
};

export default Home;
