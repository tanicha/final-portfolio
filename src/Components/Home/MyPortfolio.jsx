import data from "../../data/index.json";

export default function MyPortfolio() {
    return (
        <section className="portfolio--section" id="myPortfolio">
            <div className="portfolio--container-box">
                <div className="portfolio--container">
                    <p className="sub--title"> Recent Projects </p>
                    <h2 className="section--heading"> My Portfolio </h2>
                </div>
                <div>
                    <button className="btn btn-github">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                    <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                        <path d="M572 5109 c-279 -47 -519 -292 -562 -575 -7 -47 -10 -687 -8 -2019 l3 -1950 28 -80 c79 -223 229 -373 452 -452 l80 -28 1995 0 1995 0 80 28 c231 82 390 248 462 482 17 57 18 148 18 2050 l0 1990 -28 80 c-79 223 -229 373 -452 452 l-80 28 -1965 1 c-1109 1 -1988 -2 -2018 -7z m2283 -1044 c466 -87 874 -377 1105 -785 314 -556 250 -1261 -159 -1747 -172 -205 -385 -361 -627 -460 -120 -49 -165 -53 -198 -20 l-26 26 0 274 c0 305 -5 338 -64 425 l-34 50 52 7 c291 39 488 158 585 356 50 102 68 171 81 306 11 120 0 236 -32 321 -20 56 -96 184 -116 196 -7 4 -5 26 5 64 29 110 -1 355 -45 364 -67 14 -224 -39 -351 -117 l-71 -44 -88 20 c-171 40 -486 36 -653 -7 l-57 -14 -77 47 c-133 80 -311 136 -356 112 -9 -4 -24 -36 -33 -69 -26 -93 -30 -184 -12 -270 14 -66 14 -76 1 -95 -120 -161 -152 -271 -142 -475 12 -220 70 -366 196 -490 56 -56 96 -86 153 -113 82 -40 223 -81 313 -92 30 -4 55 -9 55 -11 0 -2 -15 -23 -33 -47 -19 -24 -39 -66 -46 -93 -7 -27 -15 -54 -16 -61 -6 -20 -105 -43 -186 -43 -68 0 -85 4 -141 33 -53 27 -74 46 -133 125 -79 104 -105 126 -176 153 -57 22 -108 24 -133 6 -25 -18 -13 -39 55 -88 71 -51 118 -111 160 -206 77 -169 195 -244 384 -244 50 0 108 3 128 6 l37 7 0 -148 c0 -138 -1 -149 -22 -171 -40 -42 -117 -24 -309 72 -598 300 -940 939 -854 1597 88 676 623 1229 1295 1342 52 9 106 18 120 20 58 10 379 -3 465 -19z"/>
                    </g>
                    </svg>
                    Check out my GitHub!
                    </button>
                </div>
            </div>
            <div className="portfolio--section--container">
                {data?.portfolio?.map((item, index) => (
                    <div key={index} className="portfolio--section--card">
                        <div className="portfolio--section--img">
                            <img src={item.img} alt="Placeholder"/>
                        </div>
                        <div className="portfolio--section--card--content">
                            <div>
                                <h3 className="portfolio--section--title">
                                    {item.title}
                                </h3>
                                <p className="text-md">{item.description}</p>
                            </div>
                            <p className="text-sm portfolio--link">
                                {item.link}
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 20 19"
                                fill="none"
                                >
                                <path
                                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                                    stroke="currentColor"
                                    stroke-width="2.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                </svg>
                            </p>
                        </div>
                    </div>
                ))};
            </div>
        </section>
    );
};