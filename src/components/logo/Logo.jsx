
function Logo(props) {
console.log(props);
    if (props.type==='default') {
        return (
            <img src='/images/logo.svg'  alt='logo' />
         );
    } else if (props.type==='muted') {
        return (
            <img src='/images/logo-muted.svg' alt='logo muted' />
            )
    }
     
   
}

Logo.defaultProps={
    type:'default'
};

export default Logo;