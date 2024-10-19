import './App.css'
import {Cards} from './components/cards.jsx'
import {useState, useMemo} from "react";

export function App() {
    const [players, setPlayers] = useState(2);
    const playersClass = (num) => {
        return (
            'cursor-pointer w-10 h-10 flex items-center justify-center rounded-md ' +
            (players === num ? 'bg-yandex_pink' : 'bg-yandex_yellow')
        )
    }
    const playersChange = (count) => {
        setPlayers(count)
    }
    const calculatePositions = (count) => {
        let positions = [];
        for (let i = 1; i <= count; i++) {
            let top, left;

            switch (count) {
                case 1:
                    top = left = '50%';
                    break;
                case 2:
                    if (i === 1) {
                        top = '10%';
                        left = '50%';
                    } else {
                        top = '90%';
                        left = '50%';
                    }
                    break;
                case 3: {
                    let angle = (i - 1) * (2 * Math.PI / 3) + Math.PI / 6;
                    top = 50 + 40 * Math.sin(angle) + '%';
                    left = 50 + 40 * Math.cos(angle) + '%';
                    break;
                }
                case 4:
                    if (i === 1) {
                        top = '10%';
                        left = '50%';
                    } else if (i === 2) {
                        top = '50%';
                        left = '10%';
                    } else if (i === 3) {
                        top = '50%';
                        left = '90%';
                    } else {
                        top = '90%';
                        left = '50%';
                    }
                    break;
                case 5: {
                    let angle5 = (i - 1) * (2 * Math.PI / 5) - Math.PI / 2;
                    top = 50 + 40 * Math.sin(angle5) + '%';
                    left = 50 + 40 * Math.cos(angle5) + '%';
                    break;
                }
                case 6:
                    if (i === 1) {
                        top = '10%';
                        left = '50%';
                    } else if (i === 2) {
                        top = '30%';
                        left = '20%';
                    } else if (i === 3) {
                        top = '70%';
                        left = '20%';
                    } else if (i === 4) {
                        top = '30%';
                        left = '80%';
                    } else if (i === 5) {
                        top = '70%';
                        left = '80%';
                    } else {
                        top = '90%';
                        left = '50%';
                    }
                    break;
            }

            positions.push({top, left});
        }
        return positions;
    }

    const cardPositions = useMemo(() => calculatePositions(players), [players]);

    return (
        <div className='absolute w-full h-full bg-yandex_black'>
            <div className='flex absolute top-5 left-5 space-x-5 z-10'>
                {[2, 3, 4, 5, 6].map(num => (
                    <div
                        key={num}
                        className={playersClass(num)}
                        onClick={() => playersChange(num)}
                        id={`players-${num}`}
                    >
                        {num}
                    </div>
                ))}
            </div>
            <div className='m-0 p-0 h-screen flex justify-center items-center'>
                <div id='cards-container' className='relative w-full h-full'>
                    {cardPositions.map((position, index) => (
                        <div
                            key={index}
                            style={{
                                position: 'absolute',
                                top: position.top,
                                left: position.left,
                                transform: 'translate(-50%, -50%)'
                            }}
                        >
                            <Cards/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
