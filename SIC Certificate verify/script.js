const commonDetails = {
    issuedBy: "Startup and Innovation Club",
    event: "Step Into Innovation",
    eventDates: "07/11/2024-08/11/2024",
    authorizedBy: "Dr. Sheshikala Marth & Dr. Indrajeet Gupta",
    issuedDate: "08-01-2025"
};
const participants = {
    "2303A51591":"BOGELLI ROHITH",
    "2303A510F3":"PRITTY BISWAS",
    "2303A510C0":"MD AMAN",
    "2303A510C1":"SHAH ALAM",
    "2203A54048":"PRAVALIKA REDDY MANDAL",
    "2203A54046":"ABBADI SRIMAM REDDY",
    "2203A51321":"ASMITHA SANDELA",
    "2203A51439":"POTHU RAHUL",
    "2203A51007":"DASARAPU NAGARAJU",
    "2203A51013":"JALLI SAI SHASHANK",
    "2203A51723":"NITHIN REDDY",
    "2403A51114":"Jamalpur Anirudh koushik",
    "2403A51094":"Pachhimatla Ram Charan ",
    "2403A51111":"Adoju Sai Charan",
    "2403A52394":"Puli Ala",
    "2403A51392":"KOOJA SAI SHIVANI",
    "2403A54126":"Banda Akshitha",
    "2403A51457":"Kondroju Shiva Sai Kumar",
    "2403A51445":"Mudderaboina Vijaykumar ",
    "2403A54122":"Uggi.Siddhartha",
    "2203A51077":"ANJALI GARREPALLI",
    "2203A51459":"SPANDANA AKKALA",
    "2403A51180":"Kacham Vardhan Kumar",
    "2403a51116":"Akhilesh Krishna",
    "2203a51004":"Bethi Abhinav",
    "2203a51021":"Sathwik Mudragada",
    "2203A51621":"Thadem Eshwar",
    "2203A51499":"N.Sai Sathwik",
    "2203A51185":"PALLA AKSHITH REDDY",
    "2203A51179":"Kusam Deepakraj",
    "2205A41149":"Poshala Akshitha",
    "2403a51328":"Pamera Pranavi",
    "2403a51264":"Perala Akshaya",
    "2403a51320":"Gattu Srija",
    "2403a51325":"CHAKRI PATEL",
    "2403a52334":"JAKKINAPALLI SIDHRARDHA",
    "2403a51329":"BANDI SHASHI KUMAR",
    "2402B071D3":"K.NITHESH BABU",
    "2303A52132":"Ganesh Vemula",
    "2303A52161":"Dharam tej Vanamamaly",
    "2303A52437":"Sai Surya",
    "2103A51499":"USAKOILA THARUN",
    "2203A54022":"T.Sidhartha",
    "2203A54021":"T.Srivalli",
    "2203A54009":"Pinky Kondeti",
    "2403A51451":"Sriperambuduru Gayathri",
    "2403a52392":"Sai Charan tej",
    "2403A52367":"Nithish chandra chandanala",
    "2403A51358":"Krishna Chaitanya",
    "2403A52144":"Pridhvi Challagurugula",
    "2403A51409":"Patwari poornachander rao",
    "2303A51243":"Karnati Pallavi",
    "2303A51234":"Cheti Akhila",
    "2403a52089":"N.Ashwitha Reddy",
    "2403A58017":"KRUTHIK REDDY YERUVA",
    "2403a52090":"G SAI MANOJ GOUD",
    "2403a52091":"Rontala Subhashan Reddy",
    "2203a54036":"Preethika mandal",
    "2203A54049":"AkshayKumar Ravulakari",
    "2203A54047":"R.Navaneeth"
};
const ranks = {
    "2303A51591":"1st Place",
    "2303A510F3":"1st Place",
    "2303A510C0":"1st Place",
    "2303A510C1":"1st Place",
    "2203A54048":"2nd Place",
    "2203A54046":"2nd Place",
    "2203A51321":"2nd Place",
    "2203A51439":"3rd Place",
    "2203A51007":"3rd Place",
    "2203A51013":"3rd Place",
    "2203A51723":"3rd Place",
};
document.getElementById('verificationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputID = document.getElementById('certificateID').value.trim();
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = `
        <div class="loading">
            <span></span>
            <span></span>
            <span></span>
        </div>`;

    setTimeout(() => {
        if (participants[inputID]) {
            displayDetails(inputID, participants[inputID]);
        } else {
            resultDiv.innerHTML = `
                <div class="alert alert-danger">
                    Certificate ID <strong>${inputID}</strong> not found in our database.<br>So please contact any CLUB MEMBER.<br><strong>Contact Us: ssi.club@sru.edu.in</strong>
                </div>`;
        }
    }, 5000);
});

function displayDetails(certificateID, holderName) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h4 style="text-align: center;">Certificate Verified Successfully<br><h4 style="text-align: left;">Verified-Detail</h4></h4>`;

    // Check for rank and apply special view
    if (ranks[certificateID]) {
        resultDiv.innerHTML += getRankView(ranks[certificateID]);
    }

    const details = [
        { label: "Certificate ID", value: certificateID },
        { label: "Holder Name", value: holderName },
        { label: "Issued By", value: commonDetails.issuedBy },
        { label: "Event Name", value: commonDetails.event },
        { label: "Event Dates", value: commonDetails.eventDates },
        { label: "Authorized By", value: commonDetails.authorizedBy },
        { label: "Issued Date", value: commonDetails.issuedDate }
    ];

    let i = 0;
    const interval = setInterval(() => {
        if (i < details.length) {
            const detail = details[i];
            const detailDiv = document.createElement('div');
            detailDiv.className = "verified-detail";
            detailDiv.innerHTML = `
                <span style="color:black;"><strong style="color:black;">${detail.label}:</strong> ${detail.value}</span>
                <span style="color: green;">✔</span>`;
            resultDiv.appendChild(detailDiv);
            i++;
        } else {
            clearInterval(interval);
        }
    }, 1000);
}

function getRankView(rank) {
    let rankClass = '';
    let rankMessage = '';
    switch (rank) {
        case "1st Place":
            rankClass = 'first-place';
            rankMessage = '<h4>Kudos! Your Hard Work Led You to the Top!</h4>';
            break;
        case "2nd Place":
            rankClass = 'second-place';
            rankMessage = '<h4>Kudos! Your Hard Work Led You to the Top Second!</h4>';
            break;
        case "3rd Place":
            rankClass = 'third-place';
            rankMessage = '<h4>Outstanding Achievement! You’ve Secured the 3st Position!</h4>';
            break;
        default:
            return '';
    }

    return `
        <div class="special-view ${rankClass}">
            ${rankMessage}
            <p>Keep up the excellent work!</p>
        </div>`;
}
