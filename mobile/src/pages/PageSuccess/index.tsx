import React from 'react'

import PageConclude from '../../components/PageConclude/index'


function PageSuccess({route}:any){
    const { title, description, txtBtn} = route.params
    
    return(
       
        <PageConclude titleMessage={title} description={description} txtBtn={txtBtn} />
    )
}

export default PageSuccess