console.log("connected");

let interviewCount = 0;
let rejectedCount = 0;
let currentTab = "ALL";

function showCards() {
    const allJobs = document.getElementsByClassName("job-1");
    let visible = 0;

    for (const job of allJobs) {
        const statusText = job.querySelector('.button-not-applied').innerText;

        if (currentTab === "ALL" || statusText === currentTab) {
            job.classList.remove('hidden');
            visible++;
        } else {
            job.classList.add('hidden');
        }
    }

    document.getElementById("job-count").innerText = visible;

    if (visible === 0) {
        document.getElementById("no-job-section").classList.remove("hidden");
    } else {
        document.getElementById("no-job-section").classList.add("hidden");
    }
}


const allDelete = document.getElementsByClassName("delete-button");

for (const deleted of allDelete) {
    deleted.addEventListener('click', function () {
        const jobCard = deleted.closest('.job-1');
        const statusText = jobCard.querySelector('.button-not-applied').innerText;

        if (statusText === "INTERVIEW") {
            interviewCount--;
        }
        if (statusText === "REJECTED") {
            rejectedCount--;
        }

        jobCard.remove();

        const remaining = document.getElementsByClassName("job-1").length;
        const totalCount = document.getElementById("total-count");
        totalCount.innerText = remaining;

        document.getElementById("interview-txt").innerText = interviewCount;
        document.getElementById("rejected-txt").innerText = rejectedCount;

        showCards();
    });
}


const allInterview = document.getElementsByClassName("interview-button");
for (const interview of allInterview) {
    interview.addEventListener('click', function () {
        const jobCard = interview.closest('.job-1');
        const status = jobCard.querySelector('.button-not-applied');

        if (status.innerText === "INTERVIEW") {
            return;
        }
        if (status.innerText === "REJECTED") {
            rejectedCount--;
        }
        interviewCount++;

        status.classList.add('bg-green-500!', 'text-white');
        status.classList.remove('bg-[#EEF4FF]!', 'text-black', 'bg-red-500!');
        status.innerText = "INTERVIEW";

        document.getElementById("interview-txt").innerText = interviewCount;
        document.getElementById("rejected-txt").innerText = rejectedCount;

        showCards();
    })
}

const allRejected = document.getElementsByClassName("rejected-button");
for (const rejected of allRejected) {
    rejected.addEventListener('click', function () {
        const jobCard = rejected.closest('.job-1');
        const status = jobCard.querySelector('.button-not-applied');

        if (status.innerText === "REJECTED") {
            return;
        }
        if (status.innerText === "INTERVIEW") {
            interviewCount--;
        }
        rejectedCount++;

        status.classList.add('bg-red-500!', 'text-white');
        status.classList.remove('bg-[#EEF4FF]!', 'text-black', 'bg-green-500!');
        status.innerText = "REJECTED";

        document.getElementById("interview-txt").innerText = interviewCount;
        document.getElementById("rejected-txt").innerText = rejectedCount;

        showCards();
    })
}


// All-tab

document.getElementById("all-tab").addEventListener('click', function () {
    const updateForAllTab = document.getElementById("all-tab");
    updateForAllTab.classList.remove('bg-white!', 'text-slate-400');
    updateForAllTab.classList.add('bg-blue-500!', 'text-white');

    const updateForInterviewTab = document.getElementById("interview-tab");
    updateForInterviewTab.classList.remove('bg-blue-500!', 'text-white');
    updateForInterviewTab.classList.add('bg-white!', 'text-slate-400');

    const updateForRejectedTab = document.getElementById("rejected-tab");
    updateForRejectedTab.classList.remove('bg-blue-500!', 'text-white');
    updateForRejectedTab.classList.add('bg-white!', 'text-slate-400');

    currentTab = "ALL";
    showCards();
})


// Interview-tab

document.getElementById("interview-tab").addEventListener('click', function () {
    const updateForInterviewTab = document.getElementById("interview-tab");
    updateForInterviewTab.classList.remove('bg-white!', 'text-slate-400');
    updateForInterviewTab.classList.add('bg-blue-500!', 'text-white');

    const updateForAllTab = document.getElementById("all-tab");
    updateForAllTab.classList.remove('bg-blue-500!', 'text-white');
    updateForAllTab.classList.add('bg-white!', 'text-slate-400');

    const updateForRejectedTab = document.getElementById("rejected-tab");
    updateForRejectedTab.classList.remove('bg-blue-500!', 'text-white');
    updateForRejectedTab.classList.add('bg-white!', 'text-slate-400');

    currentTab = "INTERVIEW";
    showCards();
})


// Rejected-tab

document.getElementById("rejected-tab").addEventListener('click', function () {
    const updateForRejectedTab = document.getElementById("rejected-tab");
    updateForRejectedTab.classList.remove('bg-white!', 'text-slate-400');
    updateForRejectedTab.classList.add('bg-blue-500!', 'text-white');

    const updateForAllTab = document.getElementById("all-tab");
    updateForAllTab.classList.remove('bg-blue-500!', 'text-white');
    updateForAllTab.classList.add('bg-white!', 'text-slate-400');

    const updateForInterviewTab = document.getElementById("interview-tab");
    updateForInterviewTab.classList.remove('bg-blue-500!', 'text-white');
    updateForInterviewTab.classList.add('bg-white!', 'text-slate-400');

    currentTab = "REJECTED";
    showCards();
})