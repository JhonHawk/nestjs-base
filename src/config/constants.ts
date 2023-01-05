export enum enumDatabases {
	Unique = 'MONGO_CONNECTION',
}
export enum modelsMongo {
	SignUp = 'SIGNUP_MODEL',
	InterestsSchema = 'INTEREST_MODEL'
}


export const interests: Array<Object> = [{
	"name": "Salud",
	"secondLevel": [
	  {
		"interest_relation": "Salud",
		"name": "Padecimientos",
		"thirdLevel": [
		  {
			"relation": "Padecimientos",
			"name": "Hipertensión"
		  },
		  {
			"relation": "Padecimientos",
			"name": "Hipoglucemia"
		  },
		  {
			"relation": "Padecimientos",
			"name": "Tiroides"
		  }
		]
	  },
	  {
		  "interest_relation": "Salud",
		  "name": "Medicamentos"
	  },
	  {
		  "interest_relation": "Salud",
		  "name": "Clínicas"
	  },
	  {
		  "interest_relation":"Salud",
		  "name": "Especialidades"
	  }
	]
},
{
	"name": "Educación",
	"secondLevel": [
	  {
		"interest_relation": "Educación",
		"name": "Educación básica",
		"thirdLevel": []
	  },
	  {
		"interest_relation": "Educación",
		"name": "Educación intermedia",
		"thirdLevel": []
	  },
	  {
		"interest_relation": "Educación",
		"name": "Educación superior",
		"thirdLevel": []
	  }
	]
},
{
	"name": "Negocios",
	"secondLevel": [
	  {
		"interest_relation": "Negocios",
		"name": "Finanzas personales",
		"thirdLevel": []
	  },
	  {
		"interest_relation": "Negocios",
		"name": "Tarjetas de crédito",
		"thirdLevel": []
	  },
	  {
		"interest_relation": "Negocios",
		"name": "Seguros",
		"thirdLevel": []
	  },
	  {
		"interest_relation": "Negocios",
		"name": "Inversión",
		"thirdLevel": []
	  },
	  {
		"interest_relation": "Negocios",
		"name": "Préstamos hipotecarios",
		"thirdLevel": []
	  },
	  {
		"interest_relation": "Negocios",
		"name": "Online",
		"thirdLevel": []
	  },
	  {
		"interest_relation": "Negocios",
		"name": "Marketing digital",
		"thirdLevel": []
	  },
	  {
		"interest_relation": "Negocios",
		"name": "Anuncios",
		"thirdLevel": []
	  },
	  {
		"interest_relation": "Negocios",
		"name": "Email marketing",
		"thirdLevel": []
	  },
	  {
		"interest_relation": "Negocios",
		"name": "Publicidad online",
		"thirdLevel": []
	  },
	  {
		"interest_relation": "Negocios",
		"name": "SEO",
		"thirdLevel": []
	  },
	  {
		"interest_relation": "Negocios",
		"name": "Redes sociales",
		"thirdLevel": []
	  },
	  {
		"interest_relation": "Negocios",
		"name": "Marketing de redes sociales",
		"thirdLevel": []
	  },
	  {
		"interest_relation": "Negocios",
		"name": "Diseño web",
		"thirdLevel": []
	  },
	  {
		"interest_relation": "Negocios",
		"name": "Desarrollo web",
		"thirdLevel": []
	  },
	  {
		"interest_relation": "Negocios",
		"name": "Alojamiento web",
		"thirdLevel": []
	  },
	  {
		"interest_relation": "Negocios",
		"name": "Bienes raíces",
		"thirdLevel": []
	  },
	  {
		"interest_relation": "Negocios",
		"name": "Ventas",
		"thirdLevel": []
	  },
	  {
		"interest_relation": "Negocios",
		"name": "Pequeñas empresas",
		"thirdLevel": []
	  }
	]
  }];