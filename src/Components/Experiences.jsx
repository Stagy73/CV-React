import data from '../assets/data.js';

function Experiences() {
    const jobList = data.filter(item => item.hasOwnProperty('job')).map((data, index) => (
        <div key={index} className="job">
            <ul className="ulLi">
                <li className="jobLi">{data.job}</li>
                <li> <span className="dateLi">{data.date}</span> - <span className="duties">{data.duties}</span></li>
            </ul>
        </div>
    ));

    return ( <div><h1 className='expeT'>Experience</h1>
        <div className="Experiences" >
            {jobList}
        </div>
        </div>

    );
}

export default Experiences;
