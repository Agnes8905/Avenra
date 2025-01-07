import React from 'react';

const FAQ = () => {
    const faqs = [
        {
            question: "What is Avenra?",
            answer: "Avenra is a premium beauty brand that offers a wide range of skincare and beauty products designed to bring out your natural radiance."
        },
        {
            question: "Are Avenra products safe for sensitive skin?",
            answer: "Yes, our products are dermatologically tested and crafted with natural ingredients to ensure they are gentle and safe for all skin types, including sensitive skin."
        },
        {
            question: "Where can I buy Avenra products?",
            answer: "Avenra products are available on our official website, as well as at select retail partners. Visit our 'Shop' page for more details."
        },
        {
            question: "Are Avenra products cruelty-free?",
            answer: "Absolutely. Avenra is committed to being a cruelty-free brand, and none of our products are tested on animals."
        },
        {
            question: "How can I find the right product for my skin type?",
            answer: "We recommend exploring our product guide or consulting with our beauty experts through the 'Contact Us' page for personalized recommendations."
        },
    ];

    return (
        <div className="bg-black text-white py-12">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8">Frequently Asked Questions</h1>
                <p className="text-center text-gray-300 mb-12">
                    Find answers to the most common questions about Avenra beauty products.
                </p>

                
                <div className="space-y-8 max-w-4xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-700 pb-6">
                            <h3 className="text-xl font-semibold text-white">
                                {faq.question}
                            </h3>
                            <p className="text-gray-400 mt-2">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
