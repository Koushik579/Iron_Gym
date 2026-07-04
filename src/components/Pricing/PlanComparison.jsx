import "./PlanComparison.css";

import {
    FaCheck,
    FaTimes
} from "react-icons/fa";

function PlanComparison(){

    const comparison = [

        {
            feature:"Gym Access",
            basic:true,
            standard:true,
            premium:true
        },

        {
            feature:"Locker",
            basic:true,
            standard:true,
            premium:true
        },

        {
            feature:"Diet Plan",
            basic:false,
            standard:true,
            premium:true
        },

        {
            feature:"Personal Trainer",
            basic:false,
            standard:false,
            premium:true
        },

        {
            feature:"Body Assessment",
            basic:true,
            standard:true,
            premium:true
        },

        {
            feature:"Group Classes",
            basic:false,
            standard:true,
            premium:true
        },

        {
            feature:"Progress Tracking",
            basic:false,
            standard:true,
            premium:true
        },

        {
            feature:"Priority Support",
            basic:false,
            standard:false,
            premium:true
        }

    ];

    return(

        <section className="comparison">
            <div className="section_heading">
                <span className="section_tag">
                    COMPARE PLANS
                </span>
                <h2>
                    Find The Perfect Membership
                </h2>
                <p>
                    Compare our plans side by side and choose the one
                    that best matches your fitness goals and budget.
                </p>
            </div>
            <div className="comparison_table">
                <table>
                    <thead>
                        <tr>
                            <th>Features</th>

                            <th>Basic</th>

                            <th>Standard</th>

                            <th>Premium</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            comparison.map((item,index)=>(
                                <tr key={index}>
                                    <td>{item.feature}</td>
                                    <td>
                                        {item.basic
                                            ? <FaCheck className="yes"/>
                                            : <FaTimes className="no"/>}
                                    </td>
                                    <td>
                                        {item.standard
                                            ? <FaCheck className="yes"/>
                                            : <FaTimes className="no"/>}
                                    </td>
                                    <td>
                                        {item.premium
                                            ? <FaCheck className="yes"/>
                                            : <FaTimes className="no"/>}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default PlanComparison;