"use client";

import { useState } from "react";
import type { NextPage } from "next";
import { useAccount } from "wagmi";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const [selectedTokenIn, setSelectedTokenIn] = useState("Select Token");
  const [selectedTokenOut, setSelectedTokenOut] = useState("Select Token");
  const [isDropdownInOpen, setIsDropdownInOpen] = useState(false);
  const [isDropdownOutOpen, setIsDropdownOutOpen] = useState(false);

  const handleTokenInSelect = (token: string) => {
    setSelectedTokenIn(token);
    setIsDropdownInOpen(false);
  };

  const handleTokenOutSelect = (token: string) => {
    setSelectedTokenOut(token);
    setIsDropdownOutOpen(false);
  };

  return (
    <>
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form className="card-body">
                <div className="form-control">
                  <div className="dropdown">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn m-1"
                      onClick={() => setIsDropdownInOpen(!isDropdownInOpen)}
                    >
                      {selectedTokenIn}
                    </div>
                    {isDropdownInOpen && (
                      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li>
                          <a onClick={() => handleTokenInSelect("USDT")}>USDT</a>
                        </li>
                        <li>
                          <a onClick={() => handleTokenInSelect("USDC")}>USDC</a>
                        </li>
                      </ul>
                    )}
                  </div>
                  <input type="number" placeholder="amount in" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <div className="dropdown">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn m-1"
                      onClick={() => setIsDropdownOutOpen(!isDropdownOutOpen)}
                    >
                      {selectedTokenOut}
                    </div>
                    {isDropdownOutOpen && (
                      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li>
                          <a onClick={() => handleTokenOutSelect("USDT")}>USDT</a>
                        </li>
                        <li>
                          <a onClick={() => handleTokenOutSelect("USDC")}>USDC</a>
                        </li>
                      </ul>
                    )}
                  </div>
                  <input type="number" placeholder="amount out" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
