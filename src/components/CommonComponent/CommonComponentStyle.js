export const CommonComponentStyle = theme => {
    return ({
        container:{
            flexDirection:'column',
            '& > div' : {
                position: 'relative',
                width:'100%',
                display: 'flex',
                justifyContent: 'center'
            }
        }
    }

    )

}