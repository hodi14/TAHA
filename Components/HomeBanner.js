import {useState, useEffect, useRef} from 'react';

export default function HomeBanner() {
    const names = ['ESMATTALAB', 'ESM', 'UI/UX DESIGNER', 'GRAPHIST'];
    const [name, setName] = useState({'name': names[0], 'index': 0, 'pointer': names[0].length, 'typing': false});

    function useInterval(callback, delay) {
        const savedCallback = useRef();
              useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);
      
        useEffect(() => {
          function tick() {
            savedCallback.current();
          }
          if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
          }
        }, [delay]);
      }

      useInterval(() => {
        if (!name.typing) {
            setName({'name': name, 'index': name.index, 'pointer': name.name.length, 'typing': false});
            let tmp = names[name.index];
            let tmpSub = tmp.substr(0, name.pointer);
            console.log(tmp + " (B) " + tmpSub + " -> " + name.pointer);
            setName({'name': tmpSub, 'index': name.index, 'pointer': name.pointer-1, 'typing': false});
            if (name.pointer < 0)
                setName({'name': name.name, 'index': ((name.index+1) % names.length), 'pointer': 1, 'typing': true});
        }
        if(name.typing) {
            console.log(name.pointer);

            setName({'name': name.name, 'index': name.index, 'pointer': name.pointer, 'typing': true});
            let tmp = names[(name.index) % names.length];
            let tmpSub = tmp.substr(0, name.pointer);
            setName({'name': tmpSub, 'index': name.index, 'pointer': name.pointer + 1, 'typing': true});
            if (tmpSub == names[name.index])
                setName({'name': name.name, 'index': ((name.index) % names.length), 'pointer': name.name.length+1, 'typing': false});
        }

      }, 125);
    return (
        <div className="homeBanner">
            <div className="name">
                <h1>
                    TAHA
                </h1>
                <input type="text" value={name.name} disabled/>
            </div>
            <div className="about">
                <h4 className="desktop">
                  (VISIT ON A DESKTOP FOR A FULL PORTFOLIO)
                </h4>
                <h4>
                    I am a graphic designer based in iran.
                    <br />
                    im working on UI/UX, Motion design projects and more...
                </h4>
            </div>
        </div>
    )
}