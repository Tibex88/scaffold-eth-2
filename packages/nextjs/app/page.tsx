"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import {FAQ} from "../components/FAQ"
import { Card } from "~~/components/Card";

// import Card from '../components/Card.vue';
// import FAQ from '../components/FAQ.vue';
// import Wallet from '../components/Wallet.vue'
import {Tier} from '~~/components/Tier';


const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>

      <div className="coutline h-fit flex flex-1">
            <div className=" cbg-blue-500 aspect-square w-full [] flex flex-col gap-10 items-statrtx justify-center">
              {/* <!-- <Wallet />  */}
              <h2 className="text-6xl self-start  py-10">Welcome to </h2>
              <p>Sophisticated. Balanced. Secure. Enabling the future of Web3. ChainGPT Pad is the
                decentralized fundraising platform incubating and launching the next generation of
                GameFi, AI, Infra, DeFi, DecSi, SocialFi projects.
              </p>

          <div className="flex gap-5  items-start">
            <button>IDO pools </button>
            <button>Stake </button>
            <button>Get Notified </button>
          </div>
          <div className="grid grid-cols-3 items-center gap-5 divide-x ">
                    <div className="pr-10">100 Projects</div>
                    <div className="pl-10">12 Give Aways</div>
                </div>

        </div>
            <div className="cbg-[url('../assets/hand1.png')] bg-contain w-full bg-center relative">
              <img src="../assets/coin.png" className="w-1/4 aspect-square m-auto absolute inset-0 -top-10 z-10"  alt=""/>
              <img src="../assets/hand1.png" className="scale-150 w-full aspect-square m-auto absolute inset-0"  alt=""/>
              {/* <!-- <img src="../assets/hand1.png" className="outline bg-cover" alt=""> --> */}
            </div>
      </div>
      
      
      <div className="coutline h-20 flex flex-1 flex-col md:flex-row text-center">
          
        <div className="coutline cbg-red-500 p-2 aspect-square w-full flex flex-col gap-2 items-center justify-center">
  
            <img src="../assets/pot3.png" className="aspect-auto h-24" alt="" />
            
            <h2>Sign Up and KYC</h2>
            
            <p>Participating in the ChainGPT Pad requires that you signup and pass KYC.</p>
            
            <button>Sign Up</button>
        </div>
  
        <div className="outline cbg-blue-500 aspect-square w-full flex flex-col items-center justify-center">
  
          <h2>Verify Wallet</h2>
  
        </div>
        
        <div className="outline cbg-red-500 aspect-square w-full flex flex-col items-center justify-center">
  
          <h2>Stake</h2>
  
        </div>
  
        <div className="outline cbg-blue-500 aspect-square w-full flex flex-col items-center justify-center">
  
          <h2>Register</h2>
  
        </div>
      </div>
  
      <div className="flex outline">
        {[1,2,3].map(()=>{
          return(
            <Tier />
          )
        })}
      </div>
  
      
      <div className="coutline h-52 flex flex-1">
          <div className="coutline cbg-blue-500 aspect-square w-full">
            <p className="p-10">Upcoming</p>
            <div className="flex flex-wrap gap-16 justify-center items-center coutline outline-lime-500 w-full h-fit">
              <Card />
            </div>
          </div>
          {/* <!-- <div className="outline cbg-red-500 aspect-square w-full"></div> --> */}
      </div>
  
      <FAQ />

      </>
      )}


export default Home;
