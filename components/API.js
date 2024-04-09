let api_key = '2f1686e04f904b77ade707c64203eb0d'
let url = 'https://api.twelvedata.com/quote'

export default function API(code) {
    try {
        const query = `?symbol=${code}&apikey=${api_key}`
        const response = fetch(url + query).then(
            function (res) {
                // Parse the JSON response
                return res.json();
            }
        )
            .then(function (data) {
                const stock = {
                    stockIndex: data.close,
                    stockChangeRaw: data.change,
                    stockChangePercent: data.percent_change
                };
                return stock;
            })
        return response;
    } catch (error) {
        console.error(error);
    }
}
