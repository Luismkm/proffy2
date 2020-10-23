import React from 'react'

import './styles.css'

interface Content {
    button: string;
    label: string;
}

const PageContent:React.FC<Content> = ({label,button, children}) => {
    return(
       <>
       <main>
        <fieldset> 
          <legend>Cadastro</legend>  
          <div className="page-content">
            <p>{label}</p>
            {children}
            <button>{button}</button>    
          </div>
        </fieldset>   
      </main>
       </>
    )
}

export default PageContent
