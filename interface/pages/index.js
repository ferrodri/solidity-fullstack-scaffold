import Head from 'next/head';
import * as React from 'react';
import { useAccount } from 'wagmi';
import { Account, Connect } from '../components';
import { useIsMounted } from '../hooks';

function Home() {
    const isMounted = useIsMounted();
    const { isConnected } = useAccount();

    return (
        <div>
            <Head>
                <title>React Solidity Scaffold</title>
                <meta name="description" content="Scaffold to start a web3 project with solidity, javascript and React on the frontend" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>
                    Welcome React and Solidity Scaffold
                </h1>
                <>
                    <Connect />

                    {isMounted && isConnected && ( <> <Account /> </> )}
                </>
            </main>
        </div>
    );
}

export default Home;