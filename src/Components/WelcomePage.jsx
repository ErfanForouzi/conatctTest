import WelcomeMessage from "./WelcomeMessage";

const WelcomePage = ({children})=>{
    return (
        <>
            <h1>Welcome Page</h1>
            {children}
            {/* <WelcomeMessage user={user}/> */}
        </>
    )
}
export default WelcomePage;