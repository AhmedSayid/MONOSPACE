import React, { useState, useEffect } from 'react'

function Skills() {
    ///photoshop
    const [filled, setFilled] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    useEffect(() => {
        if (filled < 100 && isRunning) {
            setTimeout(() => setFilled(prev => prev += 2), 50)
        }
    }, [filled, isRunning]);
    ///illustrator
    const [bar, setBar] = useState(0);
    const [isRun, setIsRun] = useState(true);
    useEffect(() => {
        if (bar < 75 && isRun) {
            setTimeout(() => setBar(prev => prev += 2), 50)
        }
    }, [bar, isRun]);
    ///indesign
    const [bar1, setBar1] = useState(0);
    const [isRun1, setIsRun1] = useState(true);
    useEffect(() => {
        if (bar1 < 80 && setBar1) {
            setTimeout(() => setBar1(prev => prev += 2), 50)
        }
    }, [bar1, isRun1]);
    ///figma
    const [bar2, setBar2] = useState(0);
    const [isRun2, setIsRun2] = useState(true);
    useEffect(() => {
        if (bar2 < 100 && setBar2) {
            setTimeout(() => setBar2(prev => prev += 2), 50)
        }
    }, [bar2, isRun2]);
    ///XD
    const [bar3, setBar3] = useState(0);
    const [isRun3, setIsRun3] = useState(true);
    useEffect(() => {
        if (bar3 < 90 && setBar3) {
            setTimeout(() => setBar3(prev => prev += 2), 50)
        }
    }, [bar3, isRun3]);
    ///AE
    const [bar4, setBar4] = useState(0);
    const [isRun4, setIsRun4] = useState(true);
    useEffect(() => {
        if (bar4 < 70 && setBar4) {
            setTimeout(() => setBar4(prev => prev += 2), 50)
        }
    }, [bar4, isRun4]);
    ////////////////DESIGN/////////////////////
    ///HTML
    const [bar5, setBar5] = useState(0);
    const [isRun5, setIsRun5] = useState(true);
    useEffect(() => {
        if (bar5 < 100 && setBar5) {
            setTimeout(() => setBar5(prev => prev += 2), 50)
        }
    }, [bar5, isRun5]);

    ///CSS
    const [bar6, setBar6] = useState(0);
    const [isRun6, setIsRun6] = useState(true);
    useEffect(() => {
        if (bar6 < 100 && setBar6) {
            setTimeout(() => setBar6(prev => prev += 2), 50)
        }
    }, [bar6, isRun6]);

    ///JS
    const [bar7, setBar7] = useState(0);
    const [isRun7, setIsRun7] = useState(true);
    useEffect(() => {
        if (bar7 < 95 && setBar7) {
            setTimeout(() => setBar7(prev => prev += 2), 50)
        }
    }, [bar7, isRun7]);
    ///Bootstrap

    const [bar8, setBar8] = useState(0);
    const [isRun8, setIsRun8] = useState(true);
    useEffect(() => {
        if (bar8 < 100 && setBar8) {
            setTimeout(() => setBar8(prev => prev += 2), 50)
        }
    }, [bar8, isRun8]);
    ///React JS

    const [bar9, setBar9] = useState(0);
    const [isRun9, setIsRun9] = useState(true);
    useEffect(() => {
        if (bar9 < 95 && setBar9) {
            setTimeout(() => setBar9(prev => prev += 2), 50)
        }
    }, [bar9, isRun9]);
    ///PHP + Laravel
    const [bar10, setBar10] = useState(0);
    const [isRun10, setIsRun10] = useState(true);
    useEffect(() => {
        if (bar10 < 90 && setBar10) {
            setTimeout(() => setBar10(prev => prev += 2), 50)
        }
    }, [bar10, isRun10]);
    ////////////////WEB/////////////////////
    ///facebook ads

    const [bar11, setBar11] = useState(0);
    const [isRun11, setIsRun11] = useState(true);
    useEffect(() => {
        if (bar11 < 80 && setBar11) {
            setTimeout(() => setBar11(prev => prev += 2), 50)
        }
    }, [bar11, isRun11]);
    /// youtube ads

    const [bar12, setBar12] = useState(0);
    const [isRun12, setIsRun12] = useState(true);
    useEffect(() => {
        if (bar12 < 85 && setBar12) {
            setTimeout(() => setBar12(prev => prev += 2), 50)
        }
    }, [bar12, isRun12]);
    ///twitter ads

    const [bar13, setBar13] = useState(0);
    const [isRun13, setIsRun13] = useState(true);
    useEffect(() => {
        if (bar13 < 65 && setBar13) {
            setTimeout(() => setBar13(prev => prev += 2), 50)
        }
    }, [bar13, isRun13]);
    /// marketing by email    
    const [bar14, setBar14] = useState(0);
    const [isRun14, setIsRun14] = useState(true);
    useEffect(() => {
        if (bar14 < 69 && setBar14) {
            setTimeout(() => setBar14(prev => prev += 2), 50)
        }
    }, [bar14, isRun14]);
    ///SEO
    const [bar15, setBar15] = useState(0);
    const [isRun15, setIsRun15] = useState(true);
    useEffect(() => {
        if (bar15 < 90 && setBar15) {
            setTimeout(() => setBar15(prev => prev += 2), 50)
        }
    }, [bar15, isRun15]);
    ///google ads

    const [bar16, setBar16] = useState(0);
    const [isRun16, setIsRun16] = useState(true);
    useEffect(() => {
        if (bar16 < 100 && setBar16) {
            setTimeout(() => setBar16(prev => prev += 2), 50)
        }
    }, [bar16, isRun16]);
    ///google ads
    ////////////////MARKETING/////////////////////

    return (
        <>
            <div className='mt-5' >
                <div className="section-skills container mt-" dir="ltr" id="skills"
                >
                    <div className="container center-text">
                        <div className='subheading '>
                            Our Skills
                        </div>
                        <div style={{ textAlign: 'center', alignItems: 'center', color: '#252E48', }}
                            className="mb-5 subheading">
                            our skills in design , marketing and programming
                        </div>
                    </div>
                    <div className="mt-5"></div>
                    <div className="container grid  grid--3-cols">
                        <div className="skills ">
                            <h3 className="text-dark fw-bolder fs-2">Design skills </h3>
                            <div className="skill">
                                <div className="skill-title">
                                    <p>photoshop</p>
                                </div>

                                <div>
                                    <div className="progressbar">
                                        <div style={{ width: `${filled}%`, }} className='bar'>

                                        </div>
                                        <span className="progressPercent">{filled}%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="skill-title ">
                                    <p>illustrator</p>
                                </div>

                                <div>
                                    <div className="progressbar">
                                        <div style={{ width: `${bar}%`, }} className='bar'></div>
                                        <span className="progressPercent">{bar}%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="skill-title">
                                    <p>InDesign</p>
                                </div>

                                <div>
                                    <div className="progressbar">
                                        <div style={{ width: `${bar1}%`, }} className='bar'>

                                        </div>
                                        <span className="progressPercent">{bar1}%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="skill-title">
                                    <p>figma</p>
                                </div>
                                <div>
                                    <div className="progressbar">
                                        <div style={{ width: `${bar2}%`, }} className='bar'>

                                        </div>
                                        <span className="progressPercent">{bar2}%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="skill-title">
                                    <p> XD</p>
                                </div>
                                <div>
                                    <div className="progressbar">
                                        <div style={{ width: `${bar3}%`, }} className='bar'>

                                        </div>
                                        <span className="progressPercent">{bar3}%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="skill-title">
                                    <p> Ae</p>
                                </div>
                                <div>
                                    <div className="progressbar">
                                        <div style={{ width: `${bar4}%` }} className='bar'>

                                        </div>
                                        <span className="progressPercent">{bar4}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="skills">
                            <h3 className="text-dark fw-bolder fs-2">programming skills </h3>
                            <div className="skill">
                                <div className="skill-title">
                                    <p>HTML</p>
                                </div>
                                <div className="progressbar">
                                    <div style={{ width: `${bar5}%` }} className='bar'>

                                    </div>
                                    <span className="progressPercent">{bar5}%</span>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="skill-title">
                                    <p>CSS</p>
                                </div>
                                <div className="progressbar">
                                    <div style={{ width: `${bar6}%` }} className='bar'>

                                    </div>
                                    <span className="progressPercent">{bar6}%</span>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="skill-title">
                                    <p>Javascript</p>
                                </div>
                                <div className="progressbar">
                                    <div style={{ width: `${bar7}%` }} className='bar'>

                                    </div>
                                    <span className="progressPercent">{bar7}%</span>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="skill-title">
                                    <p>Bootstrap</p>
                                </div>
                                <div className="progressbar">
                                    <div style={{ width: `${bar8}%` }} className='bar'>

                                    </div>
                                    <span className="progressPercent">{bar8}%</span>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="skill-title">
                                    <p>React JS</p>
                                </div>
                                <div className="progressbar">
                                    <div style={{ width: `${bar9}%` }} className='bar'>

                                    </div>
                                    <span className="progressPercent">{bar9}%</span>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="skill-title">
                                    <p>PHP + Laravel</p>
                                </div>
                                <div className="progressbar">
                                    <div style={{ width: `${bar10}%` }} className='bar'>

                                    </div>
                                    <span className="progressPercent">{bar10}%</span>
                                </div>
                            </div>
                        </div>
                        <div className="skills">
                            <h3 className="text-dark fw-bolder fs-4">Markting Skills </h3>
                            <div className="skill">
                                <div className="skill-title">
                                    <p> facebook ads </p>
                                </div>
                                <div className="progressbar">
                                    <div style={{ width: `${bar11}%` }} className='bar'>

                                    </div>
                                    <span className="progressPercent">{bar11}%</span>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="skill-title">
                                    <p>google ads </p>
                                </div>
                                <div className="progressbar">
                                    <div style={{ width: `${bar12}%` }} className='bar'>

                                    </div>
                                    <span className="progressPercent">{bar12}%</span>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="skill-title">
                                    <p> youtube ads</p>
                                </div>
                                <div className="progressbar">
                                    <div style={{ width: `${bar13}%` }} className='bar'>

                                    </div>
                                    <span className="progressPercent">{bar13}%</span>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="skill-title">
                                    <p> twitter ads</p>
                                </div>
                                <div className="progressbar">
                                    <div style={{ width: `${bar14}%` }} className='bar'>

                                    </div>
                                    <span className="progressPercent">{bar14}%</span>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="skill-title">
                                    <p> marketing by email</p>
                                </div>
                                <div className="progressbar">
                                    <div style={{ width: `${bar15}%` }} className='bar'>

                                    </div>
                                    <span className="progressPercent">{bar15}%</span>
                                </div>
                            </div>
                            <div className="skill">
                                <div className="skill-title">
                                    <p> SEO </p>
                                </div>
                                <div className="progressbar">
                                    <div style={{ width: `${bar16}%` }} className='bar'>

                                    </div>
                                    <span className="progressPercent">{bar16}%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Skills;