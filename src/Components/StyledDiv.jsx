const StyledDiv = ({children})=>{
    console.log(children);
    return (
        <section style={{width:"100%",display:"flex",backgroundColor:"red"}}>
            {children}
        </section>
    )
}
export default StyledDiv