import './App.css'
import { useEffect, useState } from 'react'

function App() {

    const [Advice, setAdvice] = useState({})

    useEffect(() => {
        async function getAdvices() {
            const day = new Date().getDate();
            const month = new Date().getMonth();

            let number = Math.round((day+4) / month * 39163).toString();

            var numberAdvice = (number[2] + number[3]) % 31;
            const response = await fetch(`https://api.adviceslip.com/advice/${numberAdvice}`);

            if (response.ok) {
                const data = await response.json();
                setAdvice(data.slip)
            }
        }

        getAdvices()
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                {
                    <div>
                        <p>“{Advice.advice}”</p>
                        <i>Advice #{Advice.id}</i>
                    </div>
                }
            </header>
        </div>
    )
}

export default App
