import { useState } from "react";

import EmailStep from "./EmailStep.jsx";
import PasswordStep from "./PasswordStep.jsx";
import BirthdateStep from "./BirthdateStep.jsx";
import GenderStep from "./GenderStep.jsx";
import CountryStep from "./CountryStep.jsx";
import InterestsStep from "./InterestsStep.jsx";

function Signup({ onBack }) {
    const [step, setStep] = useState(1);

    function nextStep() {
        setStep(step + 1);
    }

    function previousStep() {
        setStep(step - 1);
    }

    return (
        <main className="signup-page">

            {step === 1 && (
                <EmailStep onNext={nextStep} onBack={onBack} />
            )}

            {step === 2 && (
                <PasswordStep
                    onNext={nextStep}
                    onBack={previousStep}
                />
            )}

            {step === 3 && (
                <BirthdateStep
                    onNext={nextStep}
                    onBack={previousStep}
                />
            )}

            {step === 4 && (
                <GenderStep
                    onNext={nextStep}
                    onBack={previousStep}
                />
            )}

            {step === 5 && (
                <CountryStep
                    onNext={nextStep}
                    onBack={previousStep}
                />
            )}

            {step === 6 && (
                <InterestsStep
                    onBack={previousStep}
                />
            )}

        </main>
    );
}

export default Signup;