function PriceCard(){
    const membershipPlans = [
        {
            id: 1,
            title: "Basic",
            featured: false,
            price: 999,
            access: [
                "Gym Access",
                "Locker"
            ]
        },
        {
            id: 2,
            title: "Standard",
            featured: true,
            price: 1999,
            access: [
                "Gym Access",
                "Locker",
                "Diet Plan"
            ]
        },
        {
            id: 3,
            title: "Premium",
            featured: false,
            price: 2999,
            access: [
                "Gym Access",
                "Locker",
                "Diet Plan",
                "Personal Trainer"
            ]
        }
    ];

    return(
        <div className="plans">
            <div className="section_heading">
                <h1>Membership Plans</h1>
                <p>
                    Choose the perfect membership plan that matches your fitness goals.
                </p>
            </div>
            <div className="plan_cards">
                {membershipPlans.map((plan) => (
                    <div
                        className={`plan_card ${plan.featured ? "featured" : ""}`}
                        key={plan.id}
                    >
                        {plan.featured && (
                            <div className="popular_tag">
                                Most Popular
                            </div>
                        )}
                        <div className="plan_content">
                            <h2>{plan.title}</h2>
                            <h1>
                                ₹{plan.price}
                                <span>/month</span>
                            </h1>
                            <h3>Features</h3>
                            <div className="feature_list">
                                {plan.access.map((feature, index) => (
                                    <p key={index}>✔ {feature}</p>
                                ))}
                            </div>
                            <button className="plan_btn">
                                Join Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default PriceCard;