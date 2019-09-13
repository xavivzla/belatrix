class Peticiones {
  static URL_DIVISAS = 'http://data.fixer.io/api/latest?access_key=33b23d6e01efe285daf21f65e1124757'
	static CONFIG = {
		headers: {
			"Content-Type": 'application/json'
		},
		responseType: 'blob'
	}

	static listDivisas() {
		return (
			async () =>{
				const getData = await fetch(Peticiones.URL_DIVISAS)
				const data = await getData.json()
				return data
			}
		)()
  }

}

export default Peticiones