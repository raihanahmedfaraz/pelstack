import RevealAnimation from '../animation/RevealAnimation';

interface PolicySection {
  title: string;
  content: string;
}

interface RefundStep {
  step: number;
  color: string;
  title: string;
  description: string;
}

interface ListSection {
  title: string;
  description: string;
  items: string[];
}

const policySections: PolicySection[] = [
  {
    title: 'Return and refund guidelines',
    content:
      'At pelstack, we are committed to providing you with the best possible service and experience. However, if for any reason our platform does not meet your expectations, we offer a simple and hassle-free refund policy.',
  },
  {
    title: '14-Day money-back guarantee',
    content:
      'We are confident that you will love using pelstack. Still, if you are not fully satisfied, we offer a full refund within 14 days of your original purchase — no questions asked.',
  },
];

const refundSteps: RefundStep[] = [
  {
    step: 1,
    color: 'bg-ns-yellow',
    title: 'Submit a support ticket through our [Contact Page].',
    description:
      "If you're experiencing any issues or need assistance, our support team is here to help. Simply visit our [Contact Page] and fill out the support ticket form with the relevant details.",
  },
  {
    step: 2,
    color: 'bg-ns-green',
    title: 'Share your order ID, email, and a quick description.',
    description:
      'Once we receive this information, our team will review it and get back to you as soon as possible. Thank you for your cooperation!',
  },
  {
    step: 3,
    color: 'bg-ns-cyan',
    title: 'Our team will review and process your refund request.',
    description:
      "Thank you for reaching out. We've received your refund request and our team is currently reviewing the details.",
  },
];

const conditionsForRefund: ListSection = {
  title: 'Conditions for refund',
  description: 'You are eligible for a full refund if',
  items: [
    'You request a refund within 14 days from the date of purchase.',
    'You can provide a valid reason if requested (optional but helps us improve).',
    'You request a refund after the 14-day period.',
    'You have violated our Terms and Conditions.',
    'You simply decide not to use the product anymore without a valid issue.',
    'You requested a refund for issues already resolved by our support team.',
  ],
};

const nonRefundableSituations: ListSection = {
  title: 'Non-refundable situations',
  description:
    'pelstack reserves the right to suspend or terminate any user account without prior notice for reasons including but not limited to',
  items: [
    'Purchases made through unauthorized sources.',
    'Requests based on lack of features not available in the product description.',
    'Downgrades from a higher-tier plan after extensive usage.',
  ],
};

const additionalSections: PolicySection[] = [
  {
    title: 'Refund processing time',
    content:
      'Once your refund is approved, it may take 5–10 business days for the amount to reflect in your bank statement, depending on your payment provider.',
  },
  {
    title: 'We appreciate your feedback',
    content:
      'If you choose to request a refund, we would be grateful if you could let us know why. Your feedback helps us improve pelstack for future users!',
  },
];

const RefundPolicyContent = () => {
  return (
    <section className="pb-[100px] md:pb-[200px] pt-[100px]">
      <div className="main-container">
        <div className="space-y-[70px] refund-policy">
          {/* Initial Policy Sections */}
          {policySections.map((section, index) => (
            <RevealAnimation key={section.title} delay={0.3 + index * 0.1}>
              <div className="space-y-3">
                <h2>{section.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: section.content }} />
              </div>
            </RevealAnimation>
          ))}

          {/* Conditions for Refund */}
          <RevealAnimation delay={0.5}>
            <div className="space-y-3">
              <h2>{conditionsForRefund.title}</h2>
              <p>{conditionsForRefund.description}</p>
              <ul className="mt-6 space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                {conditionsForRefund.items.map((item, index) => (
                  <li key={`condition-${index}-${item.substring(0, 20)}`}>{item}</li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* How to Request a Refund */}
          <RevealAnimation delay={0.4}>
            <div className="space-y-3">
              <h2>How to request a refund</h2>
              <p>Simply follow these easy steps</p>
              <ol className="mt-8 mb-6 space-y-8">
                {refundSteps.map((step, index) => (
                  <li key={step.step}>
                    <RevealAnimation delay={0.5 + index * 0.1}>
                      <div className="max-w-[596px] sm:rounded-[20px] rounded-2xl bg-background-1 dark:bg-background-6 sm:py-6 py-5 sm:px-[34px] px-7 flex sm:gap-[22px] gap-4 items-start">
                        <div
                          className={`size-10 flex items-center justify-center ${step.color} text-tagline-1 font-semibold text-secondary shrink-0 rounded-full`}>
                          {step.step}
                        </div>
                        <div className="space-y-1">
                          <p className="sm:text-lg text-tagline-1 font-medium leading-[27px] text-secondary dark:text-accent">
                            {step.title}
                          </p>
                          <p>{step.description}</p>
                        </div>
                      </div>
                    </RevealAnimation>
                  </li>
                ))}
              </ol>
              <RevealAnimation delay={0.7}>
                <p>
                  Refunds will be issued to the{' '}
                  <span className="text-secondary dark:text-accent">original payment method</span> used at checkout.
                </p>
              </RevealAnimation>
            </div>
          </RevealAnimation>

          {/* Non-refundable Situations */}
          <RevealAnimation delay={0.9}>
            <div className="space-y-3">
              <h2>{nonRefundableSituations.title}</h2>
              <p>{nonRefundableSituations.description}</p>
              <ul className="mt-6 space-y-3 list-inside text-tagline-1 font-normal text-secondary/60 dark:text-accent/60">
                {nonRefundableSituations.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </RevealAnimation>

          {/* Additional Sections */}
          {additionalSections.map((section) => (
            <RevealAnimation key={section.title} delay={0.8}>
              <div className="space-y-3">
                <h2>{section.title}</h2>
                <p>{section.content}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RefundPolicyContent;
