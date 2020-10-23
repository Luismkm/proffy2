import React from 'react'

import './styles.css'
import img_back from '../../images/pg-success.svg'

function PageSuccess() {
	return(
		<div id="page-success">
			<div className="page-content">
				<img src={img_back} alt="back" />
				<div className="titles">
					<h1>Cadastro concluído</h1>
					<p>Agora você faz parte da plataforma da Proffy.
						Tenha uma ótima experiência.
					</p>
					<button>Fazer login</button>
				</div>
			
			</div>
		</div>
	)
}

export default PageSuccess