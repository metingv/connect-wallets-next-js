import type { NextPage } from "next";
import Head from "next/head";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import  { useEffect } from 'react'


const Home: NextPage = (props) => {
    const {  connecting, publicKey } = useWallet();
    useEffect(() => {
    console.log(connecting)
    },[publicKey])
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
     Connect: {connecting ? "true" : "false"}
    
    {/* dizayni node-modulesdan deyis @solana/ wallet-adapter-react-ui / styles.css */}
     </p>
     </div>
    </>
  );
};

export default Home;
