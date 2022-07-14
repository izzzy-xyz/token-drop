import {
  useAddress,
  useDisconnect,
  useMetamask,
  useTokenDrop,
} from "@thirdweb-dev/react";
import TokenHolders from "../components/TokenHolders";
import Claim from "../components/Claim";
import truncateAddress from "../lib/truncateAddress";
import styles from "../styles/Home.module.css";

export default function Home() {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const disconnectWallet = useDisconnect();

  const tokenDropContract = useTokenDrop(
    "0x3Cf62752E752671F9B5D383901eE2bECBd1BD56B"
  );

  return (
    <div className={styles.container}>
      {address ? (
        <>
          <div className={styles.walletGrid}>
          <p 
          className={`${styles.holderItem} ${styles.spacerBottom}`}
          >Your address: {truncateAddress(address)}</p>
          <a onClick={disconnectWallet} className={styles.mainButton}>
            Disconnect Wallet
          </a>
          </div>

          <Claim tokenDropContract={tokenDropContract} />

        </>
      ) : (
        <button className={styles.mainButton} onClick={connectWithMetamask}>
          Connect Wallet
        </button>
      )}

      <TokenHolders />
    </div>
  );
}
