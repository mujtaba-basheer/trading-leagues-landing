import { NextPage } from 'next';
import Head from 'next/head';
import PageBody from '.';

import '../styles/global.css';

const App: NextPage<{}> = () =>
    <main>
        <Head>
            <title>Trading Leagues</title>
        </Head>

        <PageBody />
    </main>;

export default App;
