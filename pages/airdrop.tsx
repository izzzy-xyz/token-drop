import React from "react";
import { ThirdwebProvider, useTokenDrop } from '@thirdweb-dev/react';
import { ChainId } from '@thirdweb-dev/sdk';
import Page from "@components/page";
import Layout from "@components/layout";
import TokenHolders from "@components/thirdweb/token-holders";
import TokenWallet from "@components/thirdweb/wallet";
import TokenClaim from "@components/thirdweb/token-claim"; 
import Header from '@components/header';
import { TokenCounter } from "@components/thirdweb/token-counter";



// This is the chainId your dApp will work on.
const activeChainId = ChainId.Mumbai;

export default function FreeTokenDrop() {
    const meta = {
        title: 'Drop - Free token airdrop', 
        description: 'Claim free tokens of a project in the early stage distributed to members who joined the free cryptocurrency airdrop, connect wallet to Polygon network, and mint up to 5000 tokens per wallet. Subscribe on twitter and join our discord server.',
    };

    const tokenDropContract = useTokenDrop(
        "0xCFbB61aF7f8F39dc946086c378D8cd997C72e2F3"
      );

  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
     <Page meta={meta}>
      <Layout>
        <TokenWallet />
        <Header hero="Free Token Drop" description={meta.description} />
        <TokenCounter />
        <TokenClaim tokenDropContract={tokenDropContract} />
        <Header hero="Token Holders" description={undefined} />
        <TokenHolders />
      </Layout>
     </Page>
    </ThirdwebProvider>
  );
}



