import '../styles/globals.css';
import { useRouter } from 'next/router';
import type {AppProps} from 'next/app'
import { DefaultLayout } from '@/components/layouts/default';
import firebaseApp from '@/components/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
const auth = getAuth(firebaseApp);

const App = ({Component, pageProps}: AppProps) => {
    const router = useRouter();
    const excludesPaths = ['/SignIn', '/SignUp', '/ResetPass', '/ForgotPass', '/','#']
    const showSidebar = !excludesPaths.includes(router.pathname);
    return <DefaultLayout showSidebar={showSidebar}>
        <Component {...pageProps} />
    </DefaultLayout>
}

export default App