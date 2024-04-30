document.addEventListener('DOMContentLoaded', function() {
    const quizContainer = document.getElementById('quiz-container');
    const backgroundImages = [
        'Startpage.png', '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', 'Endpage.png'
    ];

    const quizData = [
        {
            content: "Water, the source of life, is a finite resource crucial for human survival and ecosystem health. Shockingly, 3 out of 10 individuals lack access to clean drinking water, exposing a global crisis of water scarcity. This scarcity is exacerbated by factors like population growth and climate change, which strain the limited freshwater supply. With only 1% of Earth's water being freshwater, it's imperative to manage and conserve this resource judiciously. Awareness and collective action are essential to ensure equitable access to clean water and safeguard our planet's most precious asset.",
            question: "What percentage of Earth's water is freshwater?",
            options: ["1%", "10%", "25%", "50%"],
            answer: "1%"
        },
        {
            content: "The burgeoning global population presents a formidable challenge to water resources worldwide. As the population continues to grow exponentially, so does the demand for water, amplifying the strain on already limited freshwater sources. This surge in demand affects not only drinking water supplies but also agricultural irrigation and industrial usage. Rapid population growth exacerbates water scarcity, making it imperative to implement sustainable water management practices to meet the needs of present and future generations.",
            question: "How does rapid population growth impact water resources?",
            options: ["Reduces water demand", "Increases water demand", "Has no effect on water demand", "Stabilizes water demand"],
            answer: "Increases water demand"
        },
        {
            content: "Climate change is a formidable force exacerbating the global water crisis. Altering weather patterns, melting glaciers, and intensifying droughts are among its devastating impacts. These changes disrupt the natural water cycle, reducing freshwater availability and exacerbating water scarcity. Rising temperatures also increase water demand for agriculture and exacerbate evaporation rates, further straining already stressed water sources. Addressing climate change is therefore paramount in mitigating water scarcity and ensuring water security for future generations.",
            question: "How does climate change contribute to water scarcity?",
            options: ["Decreases water demand", "Increases freshwater availability", "Disrupts the water cycle and reduces freshwater availability", "Has no effect on water scarcity"],
            answer: "Disrupts the water cycle and reduces freshwater availability"
        },
        {
            content: "Water conservation is a critical aspect of addressing the global water crisis and ensuring sustainable water management. By reducing water wastage and optimizing usage, we can alleviate pressure on finite water resources and mitigate water scarcity. Simple actions such as fixing leaks, using water-efficient appliances, and practicing mindful water usage at home can collectively make a significant difference. Furthermore, promoting water-saving practices in agriculture and industry is essential for preserving water for future generations. Embracing a culture of conservation is key to safeguarding this precious resource and building a more sustainable future.",
            question: "What is one simple action individuals can take to contribute to water conservation?",
            options: ["Leaving taps running", "Fixing leaks", "Increasing water usage", "Ignoring water-saving appliances"],
            answer: "Fixing leaks"
        },
        {
            content: "Innovation plays a crucial role in addressing the pressing issue of water scarcity. Scientists, engineers, and innovators around the world are developing cutting-edge technologies and solutions to conserve and manage water more efficiently. From advanced irrigation systems that minimize water waste in agriculture to smart water meters that track usage and identify leaks, these innovations offer promising avenues for sustainable water management. Additionally, nature-inspired solutions such as rainwater harvesting and wastewater recycling harness the power of natural processes to augment water supplies and reduce reliance on dwindling freshwater sources. Embracing innovation is vital in navigating the challenges of water scarcity and building a more resilient water future.",
            question: "What role does innovation play in addressing water scarcity?",
            options: ["It exacerbates water scarcity", "It has no effect on water scarcity", "It plays a crucial role in developing solutions for water conservation", "It increases water waste"],
            answer: "It plays a crucial role in developing solutions for water conservation"
        },
        {
            content: "Community engagement is a cornerstone of achieving water sustainability and addressing water scarcity. When individuals and communities actively participate in water management initiatives, they become empowered agents of change. Through education, awareness campaigns, and collaborative projects, communities can learn about the importance of water conservation and adopt practices that reduce water waste. Additionally, involving local stakeholders in decision-making processes ensures that water management strategies are tailored to meet the specific needs and challenges of each community. By fostering a sense of ownership and responsibility for water resources, community engagement contributes to long-term water security and resilience.",
            question: "What is a key benefit of community engagement in water sustainability?",
            options: ["It increases water scarcity", "It decreases community involvement", "It empowers individuals to adopt water conservation practices", "It has no impact on water management"],
            answer: "It empowers individuals to adopt water conservation practices"
        },
        {
            content: "Effective policy measures are essential for addressing water scarcity and promoting sustainable water management practices. Governments play a crucial role in implementing regulations and incentives that encourage water conservation and efficiency. These policies may include water pricing mechanisms, regulations on water usage in agriculture and industry, and incentives for adopting water-saving technologies. Additionally, cross-border cooperation and international agreements are vital for managing shared water resources and mitigating conflicts over water allocation. By enacting and enforcing robust water policies, governments can ensure the equitable distribution of water resources and safeguard this precious resource for future generations.",
            question: "What role do governments play in addressing water scarcity?",
            options: ["They exacerbate water scarcity", "They have no impact on water scarcity", "They implement policies and regulations to promote water conservation", "They decrease water efficiency"],
            answer: "They implement policies and regulations to promote water conservation"
        },
        {
            content: "Access to clean and safe water is a basic human right, yet millions of people around the world are deprived of this essential resource. Water scarcity disproportionately affects marginalized and vulnerable communities, exacerbating social inequalities. Lack of access to clean water not only jeopardizes health but also perpetuates cycles of poverty and deprivation. Addressing water inequality requires a multifaceted approach that prioritizes the needs of underserved communities, promotes inclusive water governance, and ensures equitable distribution of water resources. By advancing social equity in water access, we can build more resilient and just societies where everyone has the opportunity to thrive.",
            question: "Who is disproportionately affected by water scarcity?",
            options: ["Wealthy communities", "Marginalized and vulnerable communities", "Communities with abundant water resources", "Industrialized nations"],
            answer: "Marginalized and vulnerable communities"
        },
        {
            content: "Education is a powerful tool for promoting water sustainability and empowering individuals to become stewards of water resources. By raising awareness about the importance of water conservation, teaching practical water-saving techniques, and fostering a deeper understanding of water-related issues, education can inspire positive behavioral changes. Educational initiatives targeting schools, communities, and businesses play a pivotal role in shaping attitudes and behaviors towards water usage. Moreover, education fosters a sense of environmental responsibility and encourages informed decision-making, laying the foundation for a more water-conscious society. By investing in water education, we can cultivate a generation of environmentally literate citizens equipped to tackle the challenges of water scarcity.",
            question: "What role does education play in promoting water sustainability?",
            options: ["It exacerbates water scarcity", "It has no impact on water sustainability", "It empowers individuals to become stewards of water resources", "It decreases awareness about water-related issues"],
            answer: "It empowers individuals to become stewards of water resources"
        },
        {
            content: "Water scarcity is not just a local or regional issue; it has far-reaching global implications that affect economies, ecosystems, and human well-being. As water scarcity intensifies, competition for water resources escalates, leading to conflicts over water rights and access. Furthermore, water scarcity threatens food security, as agriculture accounts for the largest share of global water usage. Droughts and water shortages also disrupt industries reliant on water, impacting livelihoods and economic stability. Moreover, ecosystems suffer as water scarcity diminishes biodiversity and disrupts aquatic habitats. Addressing water scarcity requires concerted international cooperation, innovative solutions, and a commitment to sustainable water management practices. By recognizing the global dimensions of water scarcity, we can work together to ensure water security for all and build a more resilient and equitable world.",
            question: "What are some global implications of water scarcity?",
            options: ["Decreased competition for water resources", "Enhanced food security", "Increased conflicts over water rights and access", "Improved economic stability"],
            answer: "Increased conflicts over water rights and access"
        }
    ];

    let currentSegment = 0;
    let currentPart = 0;
    let correctAnswers = 0;

    function showStartPage() {
        document.body.style.backgroundImage = `url('assets/images/Startpage.png')`;
        quizContainer.innerHTML = `
            <div class="card">
                <h1>Welcome to the Water Sustainability Quiz</h1>
                <p>Learn about the importance of conserving freshwater.</p>
                <button onclick="startQuiz()">Start Quiz</button>
            </div>
        `;
        // Properly reset the state variables
        currentSegment = 0;
        currentPart = 0;
        correctAnswers = 0;
    }

    window.startQuiz = function() {
        renderSegment(); // Ensure that this starts the quiz from the first segment
    };

    function renderSegment() {
        const segment = quizData[currentSegment];
        document.body.style.backgroundImage = `url('assets/images/${backgroundImages[currentSegment + 1]}')`;
        if (currentPart === 0) {
            quizContainer.innerHTML = `
                <div class="card">
                    <p>${segment.content}</p>
                    <button onclick="nextPart()">Next</button>
                </div>
            `;
        } else if (currentPart === 1) {
            quizContainer.innerHTML = `
                <div class="card">
                    <p>${segment.question}</p>
                    ${segment.options.map(option => `<button onclick="selectOption('${option}')">${option}</button>`).join('')}
                </div>
            `;
        }
    }

    window.nextPart = function() {
        currentPart++;
        if (currentPart > 1) {
            currentPart = 0;
            nextSegment();
        } else {
            renderSegment();
        }
    };

    window.selectOption = function(selected) {
        const segment = quizData[currentSegment];
        const isCorrect = selected === segment.answer;
        if (isCorrect) {
            correctAnswers++;
        }
        quizContainer.innerHTML = `
            <div class="card">
                <p>${isCorrect ? 'Correct!' : `Wrong! The correct answer is: ${segment.answer}`}</p>
                <button onclick="nextPart()">Next</button>
            </div>
        `;
    };

    function nextSegment() {
        if (currentSegment < quizData.length - 1) {
            currentSegment++;
            renderSegment();
        } else {
            showResults();
        }
    }

    function showResults() {
        document.body.style.backgroundImage = `url('assets/images/Endpage.png')`;
        const score = Math.round((correctAnswers / quizData.length) * 100);
        quizContainer.innerHTML = `
            <div class="card">
                <p>Your Score: ${score}%</p>
                <p>Thank you for joining the quiz!</p>
                <button onclick="showStartPage()">Reload page to restart</button>
            </div>
        `;
    }

    showStartPage();
});
