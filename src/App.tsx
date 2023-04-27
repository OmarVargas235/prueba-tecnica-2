// 1.- librerias
import { Suspense, lazy } from "react";
import { createGlobalStyle } from 'styled-components';

// 2.- components
import Spinner from "./layauts/spinner/Spinner";

const Navbar = lazy(async () => await import('./main/navbar'));
const Banner = lazy(async () => await import('./main/banner'));
const Events = lazy(async () => await import('./main/events'));
const Crew = lazy(async () => await import('./main/crew'));
const Whatsnew = lazy(async () => await import('./main/whatsnew'));
const Memories = lazy(async () => await import('./main/memories'));
const Sountrack = lazy(async () => await import('./main/sountrack'));
const JoinUs = lazy(async () => await import('./main/joinus'));
const Footer = lazy(async () => await import('./main/footer'));

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
        background-color: #F5F5F5;
	}
`;

function App(): JSX.Element {

    return <Suspense fallback={<Spinner isLoading={true} />}>

        <GlobalStyle />

        <Spinner />

        <>
            <Navbar />
            <Banner />
            <Events />
            <Crew />
            <Whatsnew />
            <Memories />
            <Sountrack />
            <JoinUs />
            <Footer />
        </>
    </Suspense>;
}

export default App;