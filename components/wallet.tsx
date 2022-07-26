/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 import {
    useAddress,
    useDisconnect,
    useMetamask,
    useTokenDrop,
  } from "@thirdweb-dev/react";
 import cn from 'classnames';
 import styles from './wallet.module.css';
 import truncateAddress from "@lib/truncate-address";
 
 
 export default function TokenWallet() {
    const address = useAddress();
    const connectWithMetamask = useMetamask();
    const disconnectWallet = useDisconnect();

    const tokenDropContract = useTokenDrop("0xCFbB61aF7f8F39dc946086c378D8cd997C72e2F3");
   
    return (
     <footer className={cn(styles.wallet)}>
         <div className={styles['wallet-center-group']}>
           {address ? (
             <>
              <p className={styles['wallet-paragraph']}>
                <a onClick={disconnectWallet} className={styles.secondaryButton}>
                  Disconnect Wallet
                </a>
              </p>
              <div className={styles['wallet-separator']} />
              <p className={styles['wallet-paragraph']}>
                {truncateAddress(address)}
              </p>
              </>
             ) : (
            <p className={styles['wallet-paragraph']} onClick={connectWithMetamask}>
                  Connect Wallet
            </p>
           )}
         </div>
      </footer>
   );
 }
 
