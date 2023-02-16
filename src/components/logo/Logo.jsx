
export default function Logo({type='default'}) {
 
    if (type==='default') {
        return (
            <img src='/images/logo.svg'  alt='logo' />
         );
    } else if (type==='muted') {
        return (
            <img src='/images/logo-muted.svg' alt='logo muted' />
            )
    }
     
   
}

Logo.defaultProps={
    type:'default'
};

 