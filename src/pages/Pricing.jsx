import "../App.css";

import PricingHero from "../components/Pricing/PricingHero";
import PriceCard from "../components/PriceCard";
import PlanComparison from "../components/Pricing/PlanComparison";
import MembershipBenefits from "../components/Pricing/MembershipBenefits";
import PricingFAQ from "../components/Pricing/PricingFAQ";
import PricingCTA from "../components/Pricing/PricingCTA";

function Pricing() {
    return (
        <div className="main_body">
            <PricingHero />
            <PriceCard />
            <PlanComparison />
            <MembershipBenefits />
            <PricingFAQ />
            <PricingCTA />
        </div>
    );
}

export default Pricing;